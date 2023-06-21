/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('Page view', () => {
  it('displays 2 paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();

    expect(document.querySelectorAll('p').length).toBe(2);
  });

  it('adds a new paragraphs', () => {

    // ARANGE
    document.body.innerHTML = fs.readFileSync('./index.html')
    const view = new View();
    // ACT
    view.addParagraph();
    // ASSERT
    expect(document.querySelectorAll('p').length).toBe(3);
    });

    it('clears all the paragraphs in the document', () => {
      // Arange
      document.body.innerHTML = fs.readFileSync('./index.html')
      const view = new View();
      // Act
      view.clearParagraphs();
      // Assert
      expect(document.querySelectorAll('p').length).toBe(0);
    })
  });