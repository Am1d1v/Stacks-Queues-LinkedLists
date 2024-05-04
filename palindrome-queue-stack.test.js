const isPalindromeQueueStack = require('./palindrome-queue-stack');

test('Checking for palindrome strings', () => {
  expect(isPalindromeQueueStack('Hello')).toBe(false);
  expect(isPalindromeQueueStack('ABCDCBA')).toBe(true);
  expect(isPalindromeQueueStack('12321')).toBe(true);
});
