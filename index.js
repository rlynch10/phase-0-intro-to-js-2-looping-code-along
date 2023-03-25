// Code your solutions in this file
//WHILE
//const gifts = ["teddy bear", "drone", "doll"]

//function wrapGifts(gifts) {
    //let i = 0; //the initialization moves OUTSIDE the body of the loop!
    //while (i < gifts.length) {
       // console.log(`Wrapped ${gifts[i]} and added a bow!`)
       // i++ //the iteration moves INSIDE the body of the loop!
   // }

   // return gifts
//}

//wrapGifts(gifts)

//FOR

const names = ["Guadalupe", "Ollie", "Aki"]
const event = []

function writeCards(names, event) {
    let cards = []
    for (let i = 0; i < names.length; i++) {
       cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
       console.log(cards)
    }

    return cards



}

writeCards(names)


const time = []

function countDown(time) {
    let i = 10
    while (i >= 0) {
        console.log(time--)
        i--
    }
    return time
}
countDown(time)