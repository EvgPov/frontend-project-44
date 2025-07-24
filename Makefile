install: # установка зависимостей проекта
					npm ci
brain-games: # запуск brain-games.js
					node bin/brain-games.js
publish: # предварительный просмотри перед публикацией в реестр npm
					npm publish --dry-run