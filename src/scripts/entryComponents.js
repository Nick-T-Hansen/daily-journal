// Move the code that is responsible for creating the journal entry HTML component into this file.

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