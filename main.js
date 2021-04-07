/* AJOUT DES LIBRAIRIES */

const readlineSync = require('readline-sync')         // yarn add readline-sync dans le Terminal
const chalk = require('chalk')                        // yarn add chalk
const fs = require('fs')
const { hangmanPics } = require('./hangmanPics')

// Une solution que j'ai proposé est de travailler avec un tableau pour le mot à afficher (la string  composé de plusieurs caractères _)
// Ce tableau devra posseder la même taille que le mot à trouver:
// si le mot à trouver est soleil, il faudra afficher à l'ecran _ _ _ _ _ _.

// En JS on peut créer un tableau déjà initialisé avec un certains nombres d'élements initialisé avec une valeurs.
// output sera un tableau qui sera egal à['_', '_', '_', '_', '_', '_'], on pourra l'afficher comme une string de cette maniere:
// console.log(output.join(' '))
// Avec l'exemple précédent si un utilisateur propose un o, o est bien dans le mot soleil et à l'index 1(2eme char), on pourra juste faire ensuite output[1] = 'o'

/* Bugs répertorié */
// lettre en doublon  => n'en renseigne qu'une

/* Option à ajouter */
// Lors du renseignement des bonnes lettres, ajouter un commentaire caractère déjà renseigné
// Afficher les caractère déjà tapé

const startGame = () => {
  const wordStr = "solacabonta"
  //Split => Transforme ma data String dans un tableau, en découpant ma data par rapport au séparateur renseigné.
  let word = wordStr.split('')

  const secret = Array(word.length).fill('_')
  let secretTab = secret
  let secretStr = secret.join(' ')
  console.log(`\n## Jeux du Pendu ##\n\nVous devez trouver un mot de ${secret.length} caractères\n`, secretStr, '\n')
  //console.log(secretTab)
  let count = 0
  let etat = true
  //let secretTab = ''

  while (etat) {
    const input = readlineSync.question('\nVeuillez entrer un caractères: ')
    console.log('\nIl vous reste', ((hangmanPics.length) - (count + 1)), ' essaie\n')
    //secretTab = secretTab.split('')

    if (count == hangmanPics.length) {
      return console.log('!!! GAME OVER !!!')
    }
    else {
      switch (input) {
        case 'a':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          //console.log(`TAB:`, secretTab)
          //console.log(`STRING:`, secretTab = secret.toString(' '))
          secretStr = secretTab.join(' ')
          break

        case 'b':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          secretStr = secretTab.join(' ')
          break

        case 'c':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          secretStr = secretTab.join(' ')
          break

        case 'd':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          secretStr = secretTab.join(' ')
          break

        case 'e':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          secretStr = secretTab.join(' ')
          break

        case 'f':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          secretStr = secretTab.join(' ')
          break

        case 'g':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          secretStr = secretTab.join(' ')
          break

        case 'h':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          secretStr = secretTab.join(' ')
          break

        case 'i':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          secretStr = secretTab.join(' ')
          break

        case 'j':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          secretStr = secretTab.join(' ')
          break

        case 'k':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          secretStr = secretTab.join(' ')
          break

        case 'l':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          secretStr = secretTab.join(' ')
          break

        case 'm':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          secretStr = secretTab.join(' ')
          break

        case 'n':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          secretStr = secretTab.join(' ')
          break

        case 'o':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          secretStr = secretTab.join(' ')
          break

        case 'p':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          secretStr = secretTab.join(' ')
          break

        case 'q':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          secretStr = secretTab.join(' ')
          break

        case 'r':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          secretStr = secretTab.join(' ')
          break

        case 's':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          secretStr = secretTab.join(' ')
          break

        case 't':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          secretStr = secretTab.join(' ')
          break

        case 'u':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          secretStr = secretTab.join(' ')
          break

        case 'v':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          secretStr = secretTab.join(' ')
          break

        case 'w':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          secretStr = secretTab.join(' ')
          break

        case 'x':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          secretStr = secretTab.join(' ')
          break

        case 'y':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          secretStr = secretTab.join(' ')
          break

        case 'z':
          word.find(letter => letter === input) ? secretTab[word.indexOf(input)] = input.replace() : (console.log(hangmanPics[count]), count++)
          secretStr = secretTab.join(' ')
          break

        default:
          // Instructions à exécuter lorsqu'aucune des valeurs
          secretStr = secretTab.join(' ')
          break
      }
    }
    console.log(secretStr)
  }

}

startGame()

//hangmanPics.length === count ? etat = false : etat = true