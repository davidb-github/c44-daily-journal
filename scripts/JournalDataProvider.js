/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "10/09/2020",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Calm"
    },
    {
        id: 2,
        date: "10/10/2020",
        concept: "Export functions",
        entry: "We talked export functions and practiced with the modern-farm code base",
        mood: "Calm"
    },
    {
        id: 3,
        date: "10/11/2020",
        concept: "Array methods",
        entry: "We talked array methods and practiced with modern farm code base",
        mood: "Calm"
    }
]

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