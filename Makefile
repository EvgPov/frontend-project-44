install: # установка зависимостей проекта
					npm ci
brain-games: # запуск brain-games.js
					node bin/brain-games.js
brain-even: # запуск brain-even.js
					node bin/brain-even.js
brain-calc: # запуск brain-even.js
					node bin/brain-calc.js
publish: # предварительный просмотри перед публикацией в реестр npm
					npm publish --dry-run
lint: # запуск eslint
				npx eslint --fix		