import { create, test, enforce, only } from 'vest';
  
const feedbackSuite = create((data = {}, currentField) => {

  only(currentField);

  test('username', 'This field is required.', () => {
    enforce(data.username).isNotBlank();
  });

  test('username', 'Please enter a valid name.', () => {
    enforce(data.username).longerThan(2);
  });

  test('username', 'Please enter a valid name.', () => {
    enforce(data.username).matches(/^[^0-9]*$/);
  });

  test('username', 'Please enter a valid name.', () => {
    enforce(data.username.trim()).equals(data.username);
  });

  test('email', 'This field is required.', () => {
    enforce(data.email).isNotBlank();
  });

  test('email', 'Please enter a valid email address.', () => {
    enforce(data.email).matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address.');
  });
  
  test('message', 'This field is required.', () => {
    enforce(data.message).isNotBlank();
  });

  test('message', 'Message is too long, only 50 characters are allowd.', () => {
    enforce(data.message).shorterThan(51);
  });
  
  test('message', 'Please enter a valid message', () => {
    enforce(data.message.trim()).equals(data.message);
  });

});

export default feedbackSuite;