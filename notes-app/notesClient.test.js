const NotesClient = require('./notesClient');

require('jest-fetch-mock').enableMocks()

describe('NotesClient class', () => {
    it('calls fetch and loads data', () => {
        //1. Instantiate the class
        const notesClient = new NotesClient();

        //2. we mock the response from 'fetch'
        fetch.mockResponseOnce(JSON.stringify({
            note: 'Pick up Asma from school'
        }));
        //3. we call the method, giving a callback function
        notesClient.loadNotes((returnedDataFromApi) => {
            expect(returnedDataFromApi.note).toEqual('Pick up Asma from school');


        })
    })
})