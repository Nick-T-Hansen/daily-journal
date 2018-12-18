
// function to return responses from form input
const createJournalResponses = (concept, date, entry, mood) => {
    let articleInput = document.querySelector(".entryLog");

    let journalResponse = document.createElement("section");
    articleInput.appendChild(journalResponse);
    
    let conceptResponse = document.createElement("h2");
    journalResponse.appendChild(conceptResponse);
    conceptResponse.innerHTML = concept;
    
    let dateResponse = document.createElement ("p");
    conceptResponse.appendChild(dateResponse);
    dateResponse.innerHTML = date;
    
    let entryResponse = document.createElement ("p");
    conceptResponse.appendChild(entryResponse);
    entryResponse.innerHTML = entry;
    
    let moodResponse = document.createElement ("p");
    conceptResponse.appendChild(moodResponse);
    moodResponse.innerHTML = mood;
};

// //Now write a function whose reponsibility is to iterate your array of journal entries and add them to the DOM.

// const renderJournalResponse = () => {
//     entries.forEach( journalEntry => {
//         createJournalResponses(journalEntry.date, journalEntry.concept, journalEntry.entry, journalEntry.mood)
//     });
// };
    
// renderJournalResponse(journalEntry);
const sumbissionResponses = {
returnSubmission () {
    return fetch ("http://localhost:3000/entries")
    .then ( response => response.json())
    }
}

console.log(sumbissionResponses.returnSubmission());