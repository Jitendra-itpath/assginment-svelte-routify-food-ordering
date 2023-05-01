import { writable } from 'svelte/store';
import * as _ from 'lodash';

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
    { productId : 1 ,  productName : 'Butter Chicken', productPrice : 390 , productDescription : 'This is product 1 description', productImage : '../images/ButterChicken.jpg'},
    { productId : 2 ,  productName : 'Masala Dosa', productPrice : 280 , productDescription : 'This is product 1 description', productImage : '../images/MasalaDosa.jpg'},
    { productId : 3 ,  productName : 'Biryani', productPrice : 370 , productDescription : 'This is product 1 description', productImage : '../images/Biryani.jpg'},
    { productId : 4 ,  productName : 'Chole Bhature', productPrice : 460 , productDescription : 'This is product 1 description', productImage : '../images/CholeBhature.jpg'},
    { productId : 5 ,  productName : 'Garlic naan', productPrice : 550 , productDescription : 'This is product 1 description', productImage : '../images/Garlicnaan.jpg'},
    { productId : 6 ,  productName : 'Vada Pav', productPrice : 640 , productDescription : 'This is product 1 description', productImage : '../images/VadaPav.jpg'},
    { productId : 7 ,  productName : 'Pav Bhaji', productPrice : 730 , productDescription : 'This is product 1 description', productImage : '../images/PavBhaji.jpg'},
    { productId : 8 ,  productName : 'Chicken Tikka Masala', productPrice : 820 , productDescription : 'This is product 1 description', productImage : '../images/ChickenTikkaMasala.jpg'},
    { productId : 9 ,  productName : 'Aloo Paratha', productPrice : 910 , productDescription : 'This is product 1 description', productImage : '../images/AlooParatha.jpg'},
    { productId : 10 , productName : 'Idli Sambar' , productPrice : 910 , productDescription : 'This is product 1 description', productImage : '../images/IdliSambar.jpg'},
    { productId : 11 , productName : 'Palak Paneer' , productPrice : 820 , productDescription : 'This is product 1 description', productImage : '../images/PalakPaneer.jpg'},
    { productId : 12 , productName : 'Manchurian' , productPrice : 730 , productDescription : 'This is product 1 description', productImage : '../images/Manchurian.jpg'},
    { productId : 13 , productName : 'French fries' , productPrice : 640 , productDescription : 'This is product 1 description', productImage : '../images/Frenchfries.jpg'},
    { productId : 14 , productName : 'Samosa' , productPrice : 550 , productDescription : 'This is product 1 description', productImage : '../images/Samosa.jpg'},
    { productId : 15 , productName : 'Kachori' , productPrice : 460 , productDescription : 'This is product 1 description', productImage : '../images/Kachori.jpg'},
    { productId : 16 , productName : 'Pizza' , productPrice : 370 , productDescription : 'This is product 1 description', productImage : '../images/Pizza.jpg'},
    { productId : 17 , productName : 'Sushi' , productPrice : 180 , productDescription : 'This is product 1 description', productImage : '../images/Sushi.jpg'},
    { productId : 18 , productName : 'Tacos' , productPrice : 290 , productDescription : 'This is product 1 description', productImage : '../images/Tacos.jpg'},
    { productId : 19 , productName : 'Burger' , productPrice : 380 , productDescription : 'This is product 1 description', productImage : '../images/Burger.jpg'},
    { productId : 20 , productName : 'Ramen' , productPrice : 480 , productDescription : 'This is product 1 description', productImage : '../images/Ramen.jpg'},
    { productId : 21 , productName : 'Falafel' , productPrice : 580 , productDescription : 'This is product 1 description', productImage : '../images/Falafel.jpg'},
    { productId : 22 , productName : 'Kebab' , productPrice : 680 , productDescription : 'This is product 1 description', productImage : '../images/Kebab.jpg'},
    { productId : 23 , productName : 'Poutine' , productPrice : 780 , productDescription : 'This is product 1 description', productImage : '../images/Poutine.jpg'},
    { productId : 24 , productName : 'Fried rice' , productPrice : 880 , productDescription : 'This is product 1 description', productImage : '../images/Friedrice.jpg'},
    { productId : 25 , productName : 'Pastry' , productPrice : 980 , productDescription : 'This is product 1 description', productImage : '../images/Pastry.jpg'},
]);

export const cartInfo = writable ([
    { cartId : 1 ,productId : 1 , quantity : 5 },
    { cartId : 2 ,productId : 2 , quantity : 2 },
    { cartId : 3 ,productId : 3 , quantity : 1 },
])