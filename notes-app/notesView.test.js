/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');

describe('Display notes', () => {
    it('displays the notes', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');

        const model = new NotesModel();
        const view = new NotesView(model);
        model.addNote('Khuslen - Female');
        model.addNote('James - Male');

//This next bit display notes on the page
        view.displayNotes();

        expect(document.querySelectorAll('div.note').length).toEqual(2);
    });
});
