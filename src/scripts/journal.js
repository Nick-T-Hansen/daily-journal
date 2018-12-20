//Main application logic that uses the functions and objects defined in the other JavaScript files.

/* -------------------- TO DO ----------------------------
POST is not working
-information submitted in the form does not post to the server 
-click on button does work
-no errors in console
-page looks like it is refreshing to its prior state when click is hit (is this a possibility?)
*/


API.getJournalEntries()
    .then(entriesDOM.renderJournalResponse)
    

//creates an event listener which takes the form values, turns it into an object, and posts it to the JSON
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
        
    }
};




