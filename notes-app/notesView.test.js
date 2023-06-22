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

    it('adds a new note', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');

        const model = new NotesModel();
        const view = new NotesView(model);

        // Fill the input
        const input = document.querySelector('#add-note-input');
        input.value = 'Test note for adding note challenge';

        // Click the button
        const button = document.querySelector('#add-note-button');
        button.click();

        // Note should be on the page
        expect(document.querySelectorAll('div.note').length).toEqual(1);
        expect(document.querySelectorAll('div.note')[0].texContent).to
    });

    it('clear the list of previous notes before displaying', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');

        const model = new NotesModel(); 
        const view = new NotesView(model);
        model.addNote('one');
        model.addNote('two');

        view.displayNotes();
        view.displayNotes();

        expect(document.querySelectorAll('div.note').length).toEqual(2);
    });
});
