const journalEntries = [
    {
        date: "07/24/2018",
        concept: "Array methods",
        entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
        mood: "Frustrated"
    },
    {
        date: "07/26/2018",
        concept: "Functions",
        entry: "There are a ton of ways to use functions.",
        mood: "Excited"
    },
    {
        date: "07/27/2018",
        concept: "Grunt",
        entry: "Grunt is amazing.I like how I can automate all the things.",
        mood: "Excited"
    }
];


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

const renderJournalResponse = () => {
    journalEntries.forEach( journalEntry => {
        createJournalResponses(journalEntry.date, journalEntry.concept, journalEntry.entry, journalEntry.mood)
    });
};
    
renderJournalResponse(journalEntry);