const reverseStringQueue = require('./reverse-string-queue');

test('Reversing a string', () => {
  expect(reverseStringQueue('Hello')).toBe('olleH');
  expect(reverseStringQueue('12345')).toBe('54321');
});
