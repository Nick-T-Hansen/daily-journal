// Move the code that deals with getting the data into this file.


const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
        }
    }


// const sumbissionResponses = {
//     returnSubmission () {
//         return fetch ("http://localhost:3000/entries")
//         .then ( response => response.json())
//         }
//     }
    
// console.log(API.getJournalEntries());