import { create, test, enforce, only } from 'vest';
  
const productSuite = create((data = {}, currentField) => {

  only(currentField);
  
  test('name', 'This field is required.', () => {
    enforce(data.name).isNotBlank();
  });

  test('name', 'Dish name must be at least 3 characters.', () => {
    enforce(data.name).longerThan(2);
  });

  test('name', 'Please enter a valid name.', () => {
    enforce(data.name.trim()).equals(data.name);
  });
  
  test('price', 'This field is required.', () => {
    enforce(data.price).isNotBlank();
  });

  test('price', 'Please provide a valid price.', () => {
    enforce(data.price).greaterThan(0);
  });

  test('description', 'This field is required.', () => {
    enforce(data.description).isNotBlank();
  });

  test('description', 'Description is too long, Max 80 characters allowed.', () => {
    enforce(data.description).shorterThan(81)
  });

  test('description', 'Please enter a valid description.', () => {
    enforce(data.description.trim()).equals(data.description);
  });

  test('image', 'This field is required.', () => {
    enforce(data.image).isNotBlank();
  });

});

export default productSuite;