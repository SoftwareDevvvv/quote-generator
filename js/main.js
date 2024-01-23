import { quotes } from './quotes.js'
import { showBanner } from './banner.js'



const getQuotesListFromType = type => {
    return quotes.filter(quote =>{
        return quote.topics.includes(type)
    })
}

const isInputValid = input =>{
    const possibleInputOptions = [1,2,3,4,5,6,7,8]
    return possibleInputOptions.includes(input)
}

const getQuoteTypeFromInput = input =>{

        switch (input){
            case 1 : return "Inspirational"    
            case 2 : return "Philosophy"       
            case 3 : return "Life"            
            case 4 : return "Advice"
            case 5 : return "Wisdom"
            case 6 : return "Love"  
            case 7 : return "People"
            case 8 : return "Humor" 
        }
    
}


const getRandomQuoteFromList = list => {
    return list[Math.floor(Math.random() * list.length)]
}

function start(){

    showBanner()

    // Computer Automatic Test
    const inputOptions = [1,2,3,4,5,6,7,8,9,10] //  all the possible valid options and 2 more invalid
    const computerChosenInput = inputOptions[Math.floor(Math.random() * inputOptions.length)] // To choose randomly from the input options list
    const inputValidComputer = isInputValid(computerChosenInput) // To test the choice whether it is valid or not

    // User Input
    const userInput = parseInt(prompt("Select the quote type's number from the console"))
    const inputValidUser = isInputValid(userInput)

    let chosenQuoteType
    let quotesListFromType
    let quote

    if (!inputValidUser){
       console.log("Invalid Input")
    }
    else{
        chosenQuoteType = getQuoteTypeFromInput(userInput)
        quotesListFromType = getQuotesListFromType(chosenQuoteType)
        quote = getRandomQuoteFromList(quotesListFromType)
        console.log(chosenQuoteType)
        console.log(quote.quote + "\n\t~ " + quote.author)
        
    }
}

start()
