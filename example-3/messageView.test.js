/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button and displays the message', () => {

    // Arrange
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    // Act

    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector('#message-input');

    inputEl.value = 'This is a test message done by Khuslen';
    buttonEl.click();

    // Assert
    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').innerText).toEqual('This is a test message done by Khuslen')
  });

  it('hides the message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html')
    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    const hideButtonEl = document.querySelector('#hide-message-button');
    hideButtonEl.click();

    expect(document.querySelector('#message')).toBeNull();
  })
});