/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
API.getJournalEntries()
    .then(entriesDOM.renderJournalResponse)

//logic to add an event listener to the submit putton, and post the information into the JSON
let journalDateInput = document.querySelector("#journalDate");
let journalConceptInput = document.querySelector("#conceptsCovered");
let journalEntryInput = document.querySelector("#journalEntry");
let journalMoodInput = document.querySelector("#mood")

let journalEntryObject = {
    "date": journalDateInput.value,
    "concept": journalConceptInput.value,
    "entry": journalEntryInput.value,
    "mood": journalMoodInput.value
}

fetch("localhost:3000/entries"
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(journalEntryObject)
})