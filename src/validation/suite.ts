import { create, test, enforce, only } from 'vest';
  
const suite = create((data = {}, currentField) => {

  only(currentField);

  test('username', 'This field is required.', () => {
    enforce(data.username).isNotBlank();
  });

  test('username', 'Username must be at least 2 characters.', () => {
    enforce(data.username).longerThan(2);
  });

  test('email', 'This field is required.', () => {
    enforce(data.email).isNotBlank();
  });

  test('email', 'Email must be valid.', () => {
    enforce(data.email).matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address.');
  });

  test('message', 'message is required', () => {
    enforce(data.message).isNotBlank();
  });

  test('message', 'message should not contain numerical characters', () => {
    enforce(data.message).matches(/^[^0-9]*$/);
  });
  
});

export default suite;

