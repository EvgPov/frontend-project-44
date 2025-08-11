[![Actions
Status](https://github.com/EvgPov/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/EvgPov/frontend-project-44/actions)
[![Code  
Smells](https://sonarcloud.io/api/project_badges/measure?project=EvgPov_frontend-project-44&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=EvgPov_frontend-project-44)

# <center>Installation</center>

1. Clone repository

[Клонирование репозитория с проектом на локальный компьютер]: #

```
    git clone https://github.com/EvgPov/frontend-project-44.git
```

2. Navigate to the project directory:

[Все файлы и каталоги проекта расположены в каталоге frontend-project-44 ]: #

```
    cd frontend-project-44
```

- the directory <font color="green">**"bin"**</font> contains all executable files:
  - brain-calc.js
  - brain-even.js
  - brain-games.js
  - brain-gcd.js
  - brain-prime.js
  - brain-progression.js

- the directory <font color="green">**"src"**</font> contains the core games logic:
- <font color="green">**index.js**</font> contains functions with core game logic that powers all games
- <font color="green">**cli.js**</font> contains a function requesting username and greeting the user
- <font color="green">**games**</font> - the subdirectory with specific game logic files
  - calc.js
  - even.js
  - games.js
  - gcd.js
  - prime.js
  - progression.js

3. Install dependencies

   [Установка зависимостей проекта]: #

```
    npm install
```

4. Create a global package link

   [Создает глобальную символьную ссылку на пакет]: #

```
    npm link
```

# <center>Available commands</center>

[Доступные команды]: #

- `brain-games`: returns a <font color="green">**greeting**</font> and requests <font color="green">username</font> input

- `brain-even`: launch the <font color="green">**"Brain Even"**</font> game

- `brain-calc`: launch the <font color="green">**"Brain Calc"**</font> game

- `brain-gcd`: launch the <font color="green">**"Brain GCD"** </font>game

- `brain-progression`: launch the <font color="green">**"Brain Progression"**</font> game

- `brain-prime`: launch the <font color="green">**"Brain Prime"**</font> game

# <center>Game Logic Description</center>

[Описание логики игр]: #

## Brain Even Game ("Even-Odd Check")

[Об игре "Проверка на чётность"]: #

### <font color="firebrick">HOW TO PLAY</font>

1. A random number appears.
2. Answer:

   &#45; ✅ **"Yes"** &rarr; if the number is **even** (divisible by 2, e.g., 2, 4, 6).

   &#x2D; ❌ **"No"** &rarr; if the number is **odd** (not divisible by 2, e.g., 1, 3, 5).

3. **Lose condition**: A **wrong** or **incorrect** answer ends the game.
4. **Win condition**: Answer **three** questions in a row correctly to win.
   <br>

<font size="3">**[Demo "Brain Even"](https://asciinema.org/a/V7Bo9E86NUoZk51Dt12lxRssp 'brain-even')** featuring: package installation, game launch, and player win/lose scenarios.</font>

## Brain Calc Game ("The Calculator")

[Об игре "Калькулятор"]: #

### <font color="firebrick">HOW TO PLAY</font>

1. A random math expression appears (e.g., 5 + 3).

2. Calculate and enter your answer.

3. **Lose condition**: A **wrong** or **incorrect** answer ends the game.

4. **Win condition**: Solve **three** problems in a row correctly to win.
   <br>

<font size="3">**[Demo "Brain Calc"](https://asciinema.org/a/nrND4OL6lnJD3vKEAJGEoxKxd 'brain-calc')** featuring: package installation, game launch, and player win/lose scenarios.</font>

## Brain GCD Game ("Greatest Common Divisor Challenge")

[Об игре "Наибольший общий делитель"]: #

### <font color="firebrick">HOW TO PLAY</font>

1. Two random numbers appear (e.g., 12 and 18).

2. Calculate their GCD (greatest common divisor) and enter the your answer.

3. **Lose condition**: A **wrong** or **incorrect** answer ends the game.

4. **Win condition**: Solve **three** problems in a row correctly to win.
   <br>

<font size="3">**[Demo "Brain GCD"](https://asciinema.org/a/S3G5m71LDTQ4T5CVWPgiOCicH 'brain-gcd')** featuring: package installation, game launch, and player win/lose scenarios.</font>

## Brain Progression ("Arithmetic Progression Challenge")

[Об игре "Арифметическая прогрессия"]: #

### <font color="firebrick">HOW TO PLAY</font>

1. A sequence with a missing number appears (e.g., 3, 7, 11, ?, 19).

2. Calculate the correct missing term based on the common difference.

3. **Lose condition**: A **wrong** or **incorrect** answer ends the game.

4. **Win condition**: Solve **three** sequences in a row correctly to win.
   <br>

<font size="3">**[Demo "Brain Progression"](https://asciinema.org/a/Wn1b5wovgkJG5pSKfN5sCPEqg 'brain-progression')** featuring: package installation, game launch, and player win/lose scenarios.</font>

## Brain Prime Game ("Is It Prime?")

[Об игре "Простое ли число?"]: #

### <font color="firebrick">HOW TO PLAY</font>

1. A random number appears (e.g., 17).
2. Answer:

   &#45; ✅ **"Yes"** &rarr; if the number is **prime** (divisible by 2, e.g., 2, 4, 6).

   &#x2D; ❌ **"No"** &rarr; if the number is **composite** (or 1, which is neither).

3. **Lose condition**: A **wrong** or **incorrect** answer ends the game.
4. **Win condition**: Answer **three** questions in a row correctly to win.
   <br>

<font size="3">**[Demo "Brain Prime"](https://asciinema.org/a/92bsLxtRG8a0yvhwdkGxi0Uab 'brain-prime')** featuring: package installation, game launch, and player win/lose scenarios.</font>
