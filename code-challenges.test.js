// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

// RED 
describe("codedMessage", () => {
    it("should convert 'Lackadaisical' to 'L4ck4d41s1c4l'", () => {
      const secretCodeWord1 = "Lackadaisical"
      expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    })
  
    it("should convert 'Gobbledygook' to 'G0bbl3dyg00k'", () => {
      const secretCodeWord2 = "Gobbledygook"
      expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    })
  
    it("should convert 'Eccentric' to '3cc3ntr1c'", () => {
      const secretCodeWord3 = "Eccentric"
      expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })
  
//   ReferenceError: codedMessage is not defined
//   Test Suites: 1 failed, 1 total
//   Tests:       3 failed, 3 total
//   Snapshots:   0 total

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// GREEN 
// PSEIDOCODE

// input: a string
// output: a coded message that converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0. ie: const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"

// PROCESS 
// create a function called codedMessage that takes a string as an argument. 
// create a variable to hold the letters/numbers that need to be decoded called codeTable
// create a variable to for an empty String. this will hold the ouput of your decoded message 
// us a for loop to iterate over the length of the message 
// create a comparitve statement to check if the letters in codeTable are in the string passes.
// if the characters from codeTable are present the replacement character will be added to the string using
// use toLowerCase to account for input casing and lower case any letters input
// return the coded message 

const codedMessage = (message) => {
    const codeTable = {
      "a": "4",
      "e": "3",
      "i": "1",
      "o": "0"
    };
    let codedMessage = ""
    for (let i = 0; i < message.length; i++) {
      if (codeTable[message[i].toLowerCase()]) {
        codedMessage += codeTable[message[i].toLowerCase()]
      } else {
        codedMessage += message[i]
      }
    }
    return codedMessage
  }

//   REFACTOR:
  


// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// RED 
describe("wordsContainingLetter", () => {
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
  
    it("should return an array of words containing 'a'", () => {
      const letterA = "a"
      expect(wordsContainingLetter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
    })
  
    it("should return an array of words containing 'e'", () => {
      const letterE = "e"
      expect(wordsContainingLetter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })
  
// ReferenceError: wordsContainingLetter is not defined
// Test Suites: 1 failed, 1 total
// Tests:       4 failed, 3 passed, 7 total
// Snapshots:   0 total
// Time:        0.192 s, estimated 1 s

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

// GREEN 
// PSEUDOCODE
// input: an array of words and a single letter 
// output: an array of all the words containing that particular letter.

// PROCESS:
// create a function that takes 2 arguments, an array and a String,
// create an empty string to hold your output array called result 
// use a for loop to itereate of the lengthe of the words in the array 
// use indexOf to check to the index of the letter you are looking for 
// use push to push the word into your result array 
// use toLowerCase to account to input casing 

const wordsContainingLetter = (words, letter) => {
    const result = []
    for (let i = 0; i < words.length; i++) {
      if (words[i].toLowerCase().indexOf(letter.toLowerCase()) !== -1) {
        result.push(words[i])
      }
    }
    return result
  }
  
//   REFACTOR
// instead of using a variable to create a new array use the spread operator which will create a new array 
// use .filter to iterate ove the elements in th array  
const wordsContainingLetter = (words, letter) => {
    return [...words.filter(word => word.toLowerCase().includes(letter.toLowerCase()))]
  }
  

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
// RED 

describe("isFullHouse", () => {
    it("should return true for [5, 5, 5, 3, 3]", () => {
      expect(isFullHouse([5, 5, 5, 3, 3])).toBe(true)
    })
  
    it("should return false for [5, 5, 3, 3, 4]", () => {
      expect(isFullHouse([5, 5, 3, 3, 4])).toBe(false)
    })
  
    it("should return false for [5, 5, 5, 5, 4]", () => {
      expect(isFullHouse([5, 5, 5, 5, 4])).toBe(false)
    })
  
    it("should return true for [7, 2, 7, 2, 7]", () => {
      expect(isFullHouse([7, 2, 7, 2, 7])).toBe(true)
    })
  })

// ReferenceError: isFullHouse is not defined
// Test Suites: 1 failed, 1 total
// Tests:       4 failed, 5 passed, 9 total
// Snapshots:   0 total
// Time:        0.196 s, estimated 1 s

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

// GREEN 
// PSEUDOCODE
// input: an array of 5 numbers 
// output: the array is a "full house" or not 

// PROCESS:
// create a function that takes a single argument of an array called isFullHouse
// create an empty object to hold the key value pairs of the hand called counts 
// use a for loop to iterate over the array and check for the frequency of of each card in the hand.
// pull the values for the counts object and compair them to the input array 
// return true if the values pulled from the counts object match the input Array.  




const isFullHouse = (hand) => {
    const counts = {}
    for (const card of hand) {
      if (counts[card]) {
        counts[card]++
      } else {
        counts[card] = 1
      }
    }
    
    const values = Object.values(counts)
    return values.includes(2) && values.includes(3)
  }
//   REFACTOR:
  
