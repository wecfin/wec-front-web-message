import {message} from '../index.js';

test('message', () => {
    message.error('test');
    expect(document.body.innerHTML).toBe(
        '<div class="wec-message error" style="top: -80px; z-index: 10001;">'
        + '<i class="message-icon icon icon-error"></i>'
        + ' <div class="message-detail">test</div>'
        + ' <i class="icon icon-close"></i>'
        + '</div>'
    )
})