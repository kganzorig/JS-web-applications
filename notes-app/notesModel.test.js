const NotesModel = require('./notesModel');

 describe('NotesModel', () => {
    let notes; 

    beforeEach(() => {
        notes = new NotesModel();
    });

    it('should return empty list when no notes have been added', () => {
        notes.addNote();
        expect(notes.getNotes()).toEqual([]);
    }); 

    it('should return on task after being added', () => {
        notes.addNote('Walk the Dog');
        expect(notes.getNotes()).toEqual(['Walk the Dog']);

    });

    it('should return two tasks if two have been added', () => {
        notes.addNote('Walk the Dog');
        notes.addNote('Practise the Piano');
        expect(notes.getNotes()).toEqual(['Walk the Dog', 'Practise the Piano']);
    });

    it('should reset notes', () => {
        notes.addNote('Walk the Dog');
        notes.addNote('Practise the Piano');
        expect(notes.getNotes()).toEqual(['Walk the Dog', 'Practise the Piano']);

        notes.reset();
        expect(notes.getNotes()).toEqual([]);
    });
 })


 /* 
  it('should add a note to the notes array', () => {
    notes.addNote('Buy milk');
    expect(notes.getNotes()).toEqual(['Buy milk']);

    notes.addNote('Go to the gym');
    expect(notes.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  });
  */