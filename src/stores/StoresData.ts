
import * as _ from 'lodash';
import { writable } from 'svelte/store';

export const feedbackInfo = writable([
    { userName : 'Rohit', userEmail : 'Rohit11@gmail.com' , message : "Amazing food and lightning-fast delivery, BiteBuddy is now my go-to!" },
    { userName : 'Amit', userEmail : 'Amit12@gmail.com' , message : "Impressive variety of dishes, I can't wait to try more!" },
    { userName : 'Rohan', userEmail : 'Rohan13@gmail.com' , message : "The website is so user-friendly and the ordering process is a breeze." },
    { userName : 'Krishna', userEmail : 'Krishna14@gmail.com' , message : "BiteBuddy's food quality is top-notch, every dish is full of flavor." },
    { userName : 'Meet', userEmail : 'Meet15@gmail.com' , message : "The packaging is well-done, my food arrived hot and fresh." },
    { userName : 'Mohit', userEmail : 'Mohit16@gmail.com' , message : "I appreciate the accurate estimated delivery time, it helps me plan my schedule." },
    { userName : 'Vivek', userEmail : 'Vivek17@gmail.com' , message : "BiteBuddy's customer service is excellent, they always go above and beyond." },
    { userName : 'Amarjeet', userEmail : 'Amarjeet18@gmail.com' , message : "Great value for money, portions are generous and prices are reasonable." },
    { userName : 'Palak', userEmail : 'Palak19@gmail.com' , message : "The vegetarian options are delicious and creative, I'm glad I have choices." },
    { userName : 'Jayesh', userEmail : 'Jayesh110@gmail.com' , message : "BiteBuddy's online payment system is secure and convenient." },
    { userName : 'Ramesh', userEmail : 'Ramesh111@gmail.com' , message : "I love the rewards program, it encourages me to order more often!" },
    { userName : 'Ajay', userEmail : 'Ajay112@gmail.com' , message : "The restaurant's hygiene standards are impressive, I feel safe ordering from here." },
    { userName : 'Vijay', userEmail : 'Vijay113@gmail.com' , message : "BiteBuddy's menu is well-organized and easy to navigate." },
    { userName : 'Pavan', userEmail : 'Pavan114@gmail.com' , message : "The food presentation is beautiful, it's almost too pretty to eat!" },
    { userName : 'Sanjay', userEmail : 'Sanjay115@gmail.com' , message : "I had a special request and BiteBuddy accommodated it without any hassle." }
]);

export const productInfo = writable ([
    { productId : 1 ,  productName : 'Butter Chicken', productPrice : 250 , productDescription : 'Creamy tomato-based curry with boneless chicken.', productImage : '../images/ButterChicken.jpg'},
    { productId : 2 ,  productName : 'Masala Dosa', productPrice : 80 , productDescription : 'Thin rice crepe stuffed with spiced mashed potatoes.', productImage : '../images/MasalaDosa.jpg'},
    { productId : 3 ,  productName : 'Biryani', productPrice : 300 , productDescription : 'Flavored rice dish with meat or vegetables, nuts, and raisins.', productImage : '../images/Biryani.jpg'},
    { productId : 4 ,  productName : 'Chole Bhature', productPrice : 120 , productDescription : 'Spicy chickpeas served with fried bread (bhatura).', productImage : '../images/CholeBhature.jpg'},
    { productId : 5 ,  productName : 'Garlic naan', productPrice : 50 , productDescription : 'Tandoori bread flavored with garlic and butter.', productImage : '../images/Garlicnaan.jpg'},
    { productId : 6 ,  productName : 'Vada Pav', productPrice : 30 , productDescription : 'Spicy potato fritter served in a bread roll.', productImage : '../images/VadaPav.jpg'},
    { productId : 7 ,  productName : 'Pav Bhaji', productPrice : 150 , productDescription : 'Mashed spiced vegetable curry served with bread.', productImage : '../images/PavBhaji.jpg'},
    { productId : 8 ,  productName : 'Chicken Tikka Masala', productPrice : 320 , productDescription : 'Grilled marinated boneless chicken pieces with spices.', productImage : '../images/ChickenTikkaMasala.jpg'},
    { productId : 9 ,  productName : 'Aloo Paratha', productPrice : 50 , productDescription : 'Flatbread stuffed with spiced mashed potatoes.', productImage : '../images/AlooParatha.jpg'},
    { productId : 10 , productName : 'Idli Sambar' , productPrice : 75 , productDescription : 'Steamed rice cake served with lentil soup and chutney.', productImage : '../images/IdliSambar.jpg'},
    { productId : 11 , productName : 'Palak Paneer' , productPrice : 160 , productDescription : 'Spinach-based curry with cottage cheese cubes.', productImage : '../images/PalakPaneer.jpg'},
    { productId : 12 , productName : 'Manchurian' , productPrice : 150 , productDescription : 'Indo-Chinese dish with fried vegetable/meat balls in sauce.', productImage : '../images/Manchurian.jpg'},
    { productId : 13 , productName : 'French fries' , productPrice : 129 , productDescription : 'Deep-fried potato sticks, crispy and salty.', productImage : '../images/Frenchfries.jpg'},
    { productId : 14 , productName : 'Samosa' , productPrice : 20 , productDescription : 'Triangular fried or baked pastry with spicy filling.', productImage : '../images/Samosa.jpg'},
    { productId : 15 , productName : 'Kachori' , productPrice : 20 , productDescription : 'Deep-fried pastry filled with spiced lentils or peas.', productImage : '../images/Kachori.jpg'},
    { productId : 16 , productName : 'Pizza' , productPrice : 299 , productDescription : 'Flatbread topped with tomato sauce, cheese, and other toppings.', productImage : '../images/Pizza.jpg'},
    { productId : 17 , productName : 'Sushi' , productPrice : 499 , productDescription : 'Japanese dish with vinegared rice and raw fish/vegetables.', productImage : '../images/Sushi.jpg'},
    { productId : 18 , productName : 'Tacos' , productPrice : 290 , productDescription : 'Mexican dish with corn tortilla and various fillings.', productImage : '../images/Tacos.jpg'},
    { productId : 19 , productName : 'Burger' , productPrice : 299 , productDescription : 'Sandwich with a grilled patty, cheese, lettuce, and sauces.', productImage : '../images/Burger.jpg'},
    { productId : 20 , productName : 'Ramen' , productPrice : 480 , productDescription : 'Japanese noodle soup with meat/vegetables and flavorful broth.', productImage : '../images/Ramen.jpg'},
    { productId : 21 , productName : 'Falafel' , productPrice : 580 , productDescription : 'Deep-fried chickpea balls served in pita bread with salad and sauce.', productImage : '../images/Falafel.jpg'},
    { productId : 22 , productName : 'Kebab' , productPrice : 450 , productDescription : 'Grilled skewered meat or vegetables with spices and marinades.', productImage : '../images/Kebab.jpg'},
    { productId : 23 , productName : 'Poutine' , productPrice : 600 , productDescription : 'Canadian dish with crispy fries, gravy, and cheese curds.', productImage : '../images/Poutine.jpg'},
    { productId : 24 , productName : 'Fried rice' , productPrice : 180 , productDescription : 'Stir-fried rice with meat/vegetables, eggs, and soy sauce.', productImage : '../images/Friedrice.jpg'},
    { productId : 25 , productName : 'Pastry' , productPrice : 200 , productDescription : 'Baked dough with various fillings like cheese, fruits, or meats.', productImage : '../images/Pastry.jpg'},
]);

export const cartInfo = writable ([
    { cartId : 1 ,productId : 1 , quantity : 1 },
    { cartId : 2 ,productId : 2 , quantity : 2 },
    { cartId : 3 ,productId : 3 , quantity : 3 }
])

export const orderInfo = writable([
    { orderId : 1, productId : 4 , quantity : 2 },
    { orderId : 2, productId : 5 , quantity : 3 },
    { orderId : 3, productId : 6 , quantity : 5 }
])














