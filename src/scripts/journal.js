//Main application logic that uses the functions and objects defined in the other JavaScript files.


API.getJournalEntries()
    .then(entriesDOM.renderJournalResponse)
    

//TO DO: creates an event listener which takes the form values, turns it into an object, and posts it to the JSON (building button listener function for submit button on line 31, have not tested.
const eventListeners = {
    journalEntryAppendToJSON () {
        let resetJournalEntriesQuery = document.querySelector(".entryLog")
        resetJournalEntriesQuery.innerHTML = " ";
        let journalDateInput = document.querySelector("#journalDate").value;
        let journalConceptInput = document.querySelector("#conceptsCovered").value;
        let journalEntryInput = document.querySelector("#journalEntry").value;
        let journalMoodInput = document.querySelector("#mood").value

        const journalEntryObject = {
            "date": journalDateInput,
            "concept": journalConceptInput,
            "entry": journalEntryInput,
            "mood": journalMoodInput
        }
        API.postJournalEntries(journalEntryObject)
            .then(repost => {
                console.log(repost)
                entriesDOM.renderJournalResponse()
            });
        
    },
    //add the event listener to the submit buttonS
    onBottonClick (){
        let submitButton = document.querySelector("#submitButton")
        submitButton.addEventListener("click", eventListeners.journalEntryAppendToJSON)
    }
};

eventListeners.onBottonClick ();

