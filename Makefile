install: # установка зависимостей проекта
	npm ci
brain-games: # запуск brain-games.js
	node bin/brain-games.js
brain-even: # запуск brain-even.js
	node bin/brain-even.js
brain-calc: # запуск brain-even.js
	node bin/brain-calc.js
brain-gcd: # запуск brain-gcd.js
	node bin/brain-gcd.js					
brain-prime: # запуск brain-prime.js
	node bin/brain-prime.js					
brain-progression: # запуск brain-progression.js
	node bin/brain-progression.js					
publish: # предварительный просмотри перед публикацией в реестр npm
	npm publish --dry-run
lint: # запуск eslint
	npx eslint --fix
