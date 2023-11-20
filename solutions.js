
////////////////////////////////////////////////////

function setAlarm(employed, vacationing) {
    if (employed && !vacationing) {
        console.log('true')
    } else {
        console.log('false')
    }
}
setAlarm(true, true) // => returns false
setAlarm(false, false) // => returns false
setAlarm(false, true) // => returns false
setAlarm(true, false) // => returns true

////////////////////////////////////////////////////

function oddNumberCount(num) {
    let count = 0;
    for (let i = 1; i < num; i++) {
      if (i % 2 !== 0) { //still don't really understand %, think I might make flashcards or watch more vids on it
        count++
      }
    }
    return count
  }
  const result = oddNumberCount(10)
    console.log(result) //expected output = 5 b/c 1, 3, 5, 7, 9

////////////////////////////////////////////////////

const trollsBeGone = (sent) => { // this one was harder, I didnt really understand the prompt. I had to use Bard to explain what it meant.
    const vowels = "aeiouAEIOU"
    let diff = ""
    for (const letter of sent) {
        if (vowels.indexOf(letter) === -1) {
            diff += letter
        }
    }
    return diff
}
const newSent = trollsBeGone("This WEBSITE SUX")
console.log(newSent)

////////////////////////////////////////////////////

const bankInfo = {
    savings: 1800,
    checking: 450,
    moneyMarket: 35,
    creditCard: -3000,
}

const bankAccountSummary = () => {

}