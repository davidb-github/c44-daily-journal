/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// init empty array to hold fetch-ed data
let journal = []

// fetch data from local json-server
export const getEntries = () => {
    // fetch entries from json-server API
    return fetch("http://localhost:8088/entries")

        // parse the body text as JSON
        .then(response => response.json())

        // popupate journal array 
        .then(parsedEntries => {
            journal = parsedEntries
        })
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}