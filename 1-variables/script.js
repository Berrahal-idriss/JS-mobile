//1.1 Types simples //le typage "const" ne convient car la valeur de la constante age est redefinie plus bas

const name = 'Jacques'
let age = 80
let useless = 'something'

console.log(name, age, useless)

age += 1
useless = 14

console.log(name, age, useless)

//----------------------//
//1.2 Tableaux              //le typage "const" convient parfaitement ici car la valeur ne changera pas
const fruits = ['apple', 'pear', 'cherry']
const vegetables = ['potato', 'curlyflower', 'tomato']

console.log(fruits, vegetables)

fruits.push('banana')
vegetables.pop()

console.log(fruits, vegetables)

//----------------------//
//1.3 Objets // ici ligne 37 la valeur de "savedGame" est un tableau de valeur mais ligne 44 "savedGame" est implémenté
// comme un tableau vide contrairement à settings qui est initialisé une seul fois dans le code.

const settings = {
    sound: true,
    music: false,
    graphics: 'high',
    resolution: [1920, 1080]
}

let savedGame = {
    time: 384,
    score: 47,
    opponent: 'Lolo'
}

console.log(settings, savedGame)

savedGame = {}
settings.music = true
settings.resolution = [3840, 2160]

console.log(settings, savedGame)