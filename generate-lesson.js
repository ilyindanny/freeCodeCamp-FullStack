const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'content');
const outputFile = path.join(__dirname, 'lessons.json');

const result = [];

function extractMeta(filePath, metaName) {
  if (!fs.existsSync(filePath)) return null;

  const content = fs.readFileSync(filePath, 'utf8');
  const regex = new RegExp(`<meta\\s+name=["']${metaName}["']\\s+content=["']([^"']+)["']`, 'i');
  const match = content.match(regex);
  return match ? match[1] : null;
}

function normalizePath(p) {
  return p.replace(__dirname, '').split(path.sep).join('/');
}

function processDirectory(currentPath) {
  const entries = fs.readdirSync(currentPath).sort();

  for (const entry of entries) {
    const fullPath = path.join(currentPath, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      const topicFile = path.join(fullPath, 'topic.html');
      const subtopicFile = path.join(fullPath, 'subtopic.html');

      if (fs.existsSync(topicFile)) {
        const title = extractMeta(topicFile, 'topic-title');
        if (title) {
          result.push({
            type: 'topic',
            title,
            path: normalizePath(topicFile)
          });
        }
        processDirectory(fullPath); // dive deeper
      } else if (fs.existsSync(subtopicFile)) {
        const title = extractMeta(subtopicFile, 'subtopic-title');
        if (title) {
          result.push({
            type: 'subtopic',
            title,
            path: normalizePath(subtopicFile)
          });
        }
        processDirectory(fullPath); // dive deeper
      } else if (entry === 'note') {
        const noteFiles = fs.readdirSync(fullPath).filter(f => f.endsWith('.html'));

        for (const file of noteFiles) {
          const fullFilePath = path.join(fullPath, file);
          const title = extractMeta(fullFilePath, 'lesson-title');

          if (title) {
            result.push({
              type: 'lesson',
              title,
              path: normalizePath(fullFilePath)
            });
          }
        }
      } else {
        processDirectory(fullPath); // dive deeper
      }
    }
  }
}

processDirectory(contentDir);

fs.writeFileSync(outputFile, JSON.stringify(result, null, 2), 'utf8');
console.log('Complete content structure saved to lessons.json');