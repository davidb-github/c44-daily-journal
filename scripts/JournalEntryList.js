/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".entryLog")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    getEntries().then( () => {
      // init and populate array
      const entries = useJournalEntries()
  
    // invoke render and pass entries array as argument
    render(entries)
    })
}
// render entries to the DOM
const render = (entries) => {
    let entryHTML = "" 
    // Loop entries, take object and turn it into HTML
    for (const entry of entries) {
        
        // build html for a single entry object
        entryHTML = JournalEntryComponent(entry);
        // append newly built html to entryLog var
        entryLog.innerHTML += entryHTML
    }
}
