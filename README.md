# wordle-clone

## Description

```
Wordle is a game, where user can guess a 5 letter word.
The game rules are as below
![image](https://user-images.githubusercontent.com/74876996/224981543-63ed0b14-3bd5-4ccd-b049-89680a8104d4.png)


In the original game, each user get a single word in a day, and then the user has to wait for another 24 hrs for new word to appear.
However, my application will going to be different, where users can play until they can't make the guess and lose all their turns.
It is going to be a point based games, i.e. more word guess in single turn -> more points
```

##Backend functionality

```
in first 10 turns:
The backend will generate a random word in each round, and the user has to guess that word in 5 turns. If user guesses the word correctly, then Backend will generate a new random word, and assign points to the user for passing the previous round.

after 10 turns, user has to guess 5 and 6 letter words

after 30 turns, the game will get more hard and user has to guess 5, 6 and 7 letter words

Leaderboard will be calculated after each turn
```

##Data storage

```
I will use  MongoDb free tire or firestore DB for storing the leaderboard data of the users.
```

## Front end

```
Front end will have game ui and leaderboard
```
