/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
        <div>${entry.date}</div>
        <div>${entry.entry}</div><br>
        </section>
    `
}