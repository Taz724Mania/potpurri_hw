
const words = {  //there's a School House Rock reference in here somewhere, I know it
    number: "",
    adjective: "",
    pluralNoun: "",
    adverb: "",
    adjective2: "",
}

// function startMadLib() {
//     const numberPrompt = prompt('Pick a number! Any number!')
//     words.number = numberPrompt()

//     const adjOnePrompt = prompt('Unpack your adjectives and pick one!') //there's that SHR reference :D
//     words.adjective = adjOnePrompt()

//     const pluralNounPrompt = prompt('Now choose a plural noun!')
//     words.pluralNoun = pluralNounPrompt()

//     const adverbPrompt = prompt('Time for an adverb!')
//     words.adverb = adverbPrompt()

//     const adjTwoPrompt = prompt('Unpack another adjective!')
//     words.adjective2 = adjTwoPrompt()

// }
// startMadLib()

//browser threw error stating it isn't a function, so what am I missing?

function startMadLib() { //maybe a little func-ception?
    function numberPrompt() {
        return prompt('Pick a number! Any number!')
    }
    function adjOnePrompt() {
        return prompt('Unpack your adjectives and pick one!')
    }
    function pluralNounPrompt() {
        return prompt('Choose a plural noun!')
    }
    function adverbPrompt() {
        return prompt('Pick an adverb!')
    }
    function adjTwoPrompt() {
        return prompt('Unpack one more adjective!')
    }
const number = numberPrompt()
words.number = number

const adjective = adjOnePrompt()
words.adjective = adjective

const pluralNoun = pluralNounPrompt()
words.pluralNoun = pluralNoun

const adverb = adverbPrompt()
words.adverb = adverb

const adjective2 = adjTwoPrompt()
words.adjective2 = adjective2
}
startMadLib()

console.log(words)

alert('Read Your Story!')

const readIt = () => {
    const madLibStory = (`Once upon a time a group of ${words.number} (number) General Assembly graduates got together and made a startup called ${words.adjective} (adjective) Technologies. Their goal was to create smart ${words.pluralNoun} (plural noun). They approached the challenge ${words.adverb} (adverb) which ultimately lead them to ${words.adjective2} (another adjective) fame.`)
    alert(madLibStory)
}
readIt()

const goAgain = () => {
    prompt ('Would you like to choose again?')
        if (response = 'yes'){
            alert('Refresh your browser!')
        } else {
            alert('You may exit the browser.')
        }
}
goAgain()