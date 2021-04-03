/* AJOUT DES LIBRAIRIES */

const readlineSync = require('readline-sync')         // yarn add readline-sync dans le Terminal
const chalk = require('chalk')                        // yarn add chalk
const fs = require('fs')

// Une solution que j'ai proposé est de travailler avec un tableau pour le mot à afficher (la string  composé de plusieurs caractères _)
// Ce tableau devra posseder la même taille que le mot à trouver:
// si le mot à trouver est soleil, il faudra afficher à l'ecran _ _ _ _ _ _.

// En JS on peut créer un tableau déjà initialisé avec un certains nombres d'élements initialisé avec une valeurs.
// output sera un tableau qui sera egal à['_', '_', '_', '_', '_', '_'], on pourra l'afficher comme une string de cette maniere:
// console.log(output.join(' '))
// Avec l'exemple précédent si un utilisateur propose un o, o est bien dans le mot soleil et à l'index 1(2eme char), on pourra juste faire ensuite output[1] = 'o'


/* ETAPES DU PENDU */

HANGMANPICS = [`
 
       
        
        
        
        
=========`, `
        |
        |
        |
        |
        |
=========`, `
  + --- +
  |     |
        |
        |
        |
        |
=========`, `
    +---+
    |   |
    O   |
        |
        |
        |
=========`, `
    +---+
    |   |
    O   |
    |   |
        |
        |
=========`, `
    +---+
    |   |
    O   |
   /|   |
        |
        |
=========`, `
    +---+
    |   |
    O   |
   /|\\  |
        |
        |
=========`, `
    +---+
    |   |
    O   |
   /|\\  |
   /    |
        |
=========`, `
    +---+
    |   |
    O   |
   /|\\  |
   / \\  |
        |
=========`]

const startGame = () => {
  const wordStr = "salut"
  let word = wordStr.split('')
  //console.log(word)
  //word = ["s", "a", "l", "u", "t"]

  const secret = Array(word.length).fill('_')
  let secretOut = secret
  console.log(secret)

  let count = 0
  while (count < HANGMANPICS.length) {
    const input = readlineSync.question('Veuillez entrer un caractères: ')
    console.log('Il vous reste', (HANGMANPICS.length - count), ' essaie')
    //for (let index = 0; index < word.length; ++index) {
    //console.log('index: ', index)
    switch (input) {
      case 'a':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      case 'b':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      case 'c':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      case 'd':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      case 'e':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      case 'f':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      case 'g':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      case 'h':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      case 'i':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      case 'j':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      case 'k':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      case 'l':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      case 'm':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      case 'n':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      case 'o':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      case 'p':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      case 'q':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      case 'r':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      case 's':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      case 't':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      case 'u':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      case 'v':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      case 'w':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      case 'x':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      case 'y':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      case 'z':
        word.find(letter => letter === input) ? secretOut[word.indexOf(input)] = input.replace() : console.log(HANGMANPICS[count])
        break

      default:
        // Instructions à exécuter lorsqu'aucune des valeurs
        break

    }
    count++
    console.log(secretOut)
  }

}

startGame()

/* case en test
case 'a':
        word.find(index => index === input) ? (secretOut[index] = word[index].replace()) : 'pendu'
        console.log(secretOut)
        instructions1;
        break
*/

/*
CODE FONCTIONNELLE POUR REMPLACEMENT DE CARACTERE
  let i = 0
  while (i < word.length) {
    const input = readlineSync.question('Veuillez entrer un caractères: ')

    /*
    if (input === word[i]) {
      secretOut[i] = word[i].replace()
      console.log(secretOut)

  }
  i++
  //console.log(i)



*/

//console.log(secret)

/*

const scanWord = () => {

  //for (let i = 0; i < word.length; ++i) {
  while (true) {

    let i = 0
    //console.log(debut)
    console.log(word[i])
    if (input === word[i]) {
      console.log('good')
      console.log(`Le caractère se trouve à l'index: ${i}`)
      i++
    }
    else {
      console.log('bad')
      i++
    }

  }
}
//}

*/

/*const HANGMANPICS =

['+---+ \n |   | \n | \n | \n | \n | \n ========= '] , "
  + --- +
  |   |
  O |
      |
      |
      |
=========", "
  +---+
  |   |
  O   |
  |   |
      |
      |
=========", "
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========", "
  +---+
  |   |
  O   |
 /|\  |
      |
      |
=========", "
  +---+
  |   |
  O   |
 /|\  |
 /    |
      |
=========", "
  +---+
  |   |
  O   |
 /|\  |
 / \  |
      |
========="]
*/