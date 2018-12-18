// Move the code that is responsible for modifying the DOM into this file.



// Iterates an array of journal entries and add them to the DOM.
const entriesDOM = {

    renderJournalResponse () {
        API.getJournalEntries ()
            .then(entries => entries.forEach( journalEntry => {
                console.log(journalEntry);
            createJournalResponses(journalEntry.date, journalEntry.concept, journalEntry.entry, journalEntry.mood);
            })
        );
    }
}
