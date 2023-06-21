class NotesView {
    constructor(model) {
        this.model = model;
        this.mainContainerEL = document.querySelector('#main-container');
    }

    displayNotes() {
        const notes = this.model.getNotes()

        notes.forEach(note => {
            const noteEl = document.createElement('div');
            noteEl.textContent = note;
            noteEl.className = 'note';
            this.mainContainerEL.append(noteEl);
        })
    }
}

module.exports = NotesView;