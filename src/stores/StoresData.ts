import { writable } from 'svelte/store';

export const feedbackInfo = writable([
    { userName : 'Rohit', userEmail : 'Rohit11@gmail.com' , message : "This is message for feedback." },
    { userName : 'Amit', userEmail : 'Amit12@gmail.com' , message : "This is message for feedback." },
    { userName : 'Rohan', userEmail : 'Rohan13@gmail.com' , message : "This is message for feedback." },
    { userName : 'Krishna', userEmail : 'Krishna14@gmail.com' , message : "This is message for feedback." },
    { userName : 'Meet', userEmail : 'Meet15@gmail.com' , message : "This is message for feedback." },
    { userName : 'Mohit', userEmail : 'Mohit16@gmail.com' , message : "This is message for feedback." },
    { userName : 'Vivek', userEmail : 'Vivek17@gmail.com' , message : "This is message for feedback." },
    { userName : 'Amarjeet', userEmail : 'Amarjeet18@gmail.com' , message : "This is message for feedback." },
    { userName : 'Palak', userEmail : 'Palak19@gmail.com' , message : "This is message for feedback." },
    { userName : 'Jayesh', userEmail : 'Jayesh110@gmail.com' , message : "This is message for feedback." },
    { userName : 'Ramesh', userEmail : 'Ramesh111@gmail.com' , message : "This is message for feedback." },
    { userName : 'Ajay', userEmail : 'Ajay112@gmail.com' , message : "This is message for feedback." },
    { userName : 'Vijay', userEmail : 'Vijay113@gmail.com' , message : "This is message for feedback." },
    { userName : 'Pavan', userEmail : 'Pavan114@gmail.com' , message : "This is message for feedback." },
    { userName : 'Sanjay', userEmail : 'Sanjay115@gmail.com' , message : "This is message for feedback." }
]);

export const productInfo = writable ([
    { productId : 1 , productName : 'Dish 1' , productPrice : 180 , productDescription : 'This is product 1 description', productImage : '../images/image1.jpg'},
    { productId : 2 , productName : 'Dish 2' , productPrice : 270 , productDescription : 'This is product 2 description', productImage : '../images/image2.jpg'},
    { productId : 3 , productName : 'Dish 3' , productPrice : 360 , productDescription : 'This is product 3 description', productImage : '../images/image3.jpg'},
    { productId : 4 , productName : 'Dish 4' , productPrice : 450 , productDescription : 'This is product 4 description', productImage : '../images/image4.jpg'},
    { productId : 5 , productName : 'Dish 5' , productPrice : 540 , productDescription : 'This is product 5 description', productImage : '../images/image5.jpg'},
    { productId : 6 , productName : 'Dish 6' , productPrice : 630 , productDescription : 'This is product 6 description', productImage : '../images/image6.jpg'},
    { productId : 7 , productName : 'Dish 7' , productPrice : 720 , productDescription : 'This is product 7 description', productImage : '../images/image7.jpg'},
    { productId : 8 , productName : 'Dish 8' , productPrice : 810 , productDescription : 'This is product 8 description', productImage : '../images/image8.jpg'},
]);

export const cartInfo = writable ([
    { cartId : 1 ,productId : 1 , quantity : 5 },
    { cartId : 2 ,productId : 2 , quantity : 2 },
    { cartId : 3 ,productId : 3 , quantity : 1 },
])















