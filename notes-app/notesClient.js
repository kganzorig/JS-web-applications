class NotesClient {
 
    loadNotes(callback) {
        fetch('/notes')
        .then(response => response.json())
        .then(data => {
          callback(data);
        })
        .catch(error => {
            console.error('Error loading notes:', error);
        });
    }
}

module.exports = NotesClient;