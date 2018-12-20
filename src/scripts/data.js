// Move the code that deals with getting the data into this file.


const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
        },

//logic to post journals to the JSON

    postJournalEntries (newJournalEntryObject) {
            return fetch ("http://localhost:3000/entries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newJournalEntryObject)
            });
        },
    }
