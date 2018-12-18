// Move the code that is responsible for modifying the DOM into this file.



// Iterates an array of journal entries and add them to the DOM.

const renderJournalResponse = () => {
    entries.forEach( journalEntry => {
        createJournalResponses(journalEntry.date, journalEntry.concept, journalEntry.entry, journalEntry.mood)
    });
};
    