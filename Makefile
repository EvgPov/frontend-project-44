install: npm ci
brain-games: #  запустить приветствие игры, узнать имя игрока
						node bin/brain-games.js 
brain-even: # запустить игру "Проверка на четность"
						node bin/brain-even.js
publish: npm publish --dry-run
lint:				 # запустить линтер
					 npx eslint