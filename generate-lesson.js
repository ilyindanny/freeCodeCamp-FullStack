const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'content');
const lessons = [];

function walk(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });

    for (const file of files) {
        const fullPath = path.join(dir, file.name);

        if (file.isDirectory()) {
            if (file.name === 'note') {
                const noteFiles = fs.readdirSync(fullPath);
                for (const f of noteFiles) {
                    if (f.endsWith('.html')) {
                        const relPath = path.join(fullPath, f);
                        const relWebPath = relPath.replace(__dirname, '').replace(/\\/g, '/');

                        // Читаем HTML-файл
                        const html = fs.readFileSync(relPath, 'utf8');

                        // Пытаемся найти <meta name="lesson-title" content="...">
                        let match = html.match(/<meta\s+name=["']lesson-title["']\s+content=["']([^"']+)["']/i);
                        let title = match ? match[1] : null;

                        // Если нет — пробуем <title>
                        if (!title) {
                            match = html.match(/<title>([^<]+)<\/title>/i);
                            title = match ? match[1] : path.basename(f, '.html');
                        }

                        lessons.push({
                            path: relWebPath,
                            title: title
                        });
                    }
                }
            } else {
                walk(fullPath);
            }
        }
    }
}

walk(contentDir);

lessons.sort((a, b) => a.path.localeCompare(b.path));

fs.writeFileSync(path.join(__dirname, 'lessons.json'), JSON.stringify(lessons, null, 2));

console.log(`Список уроков создан. Найдено: ${lessons.length}`);