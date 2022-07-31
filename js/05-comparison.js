// const productName = 'Droid'; 
// console.log(productName);


// let productName = "Droid";
// productName = 'Repair droid';
// let pricePerItem = 2000;
// pricePerItem += 1500;

// console.log (productName);
// console.log(pricePerItem);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);


// for (let i = 0; i <= 5; i += 1) {
//     console.log(i);
  
//     if (i === 3) {
//       console.log("Нашли число 3, прерываем выполнение цикла");
//       break;
//     }
//   }
  
//   console.log("Лог после цикла");

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
// }

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     // Change code below this line
    
//     const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  
//     const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
  
//     // Change code above this line
//     return message;
//   }

//   makeOrderMessage (2, 100, 30);

//   function add(a, b, c) {
//     // Change code below this line
  
//     return a + b + c;
  
//     // Change code above this line
//   }
  
//   add(2, 5, 8); // 15
  
//   console.log(add(15, 27, 10));
//   console.log(add(10, 20, 30));
//   console.log(add(5, 10, 15));



// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
//     // Change code below this line
//     let isMatch; 
//     isMatch = password === SAVED_PASSWORD;
  
//     // Change code above this line
//     return isMatch;
//   }
  
//   isValidPassword("mangodab3st");
//   isValidPassword("kiwirul3z");
//   isValidPassword("jqueryismyjam");

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
//     const totalPrice = pricePerDroid * orderedQuantity;
//     if (customerCredits < totalPrice) {
//       message = "Insufficient funds!"
//     } else {
//         const creditsLeft = customerCredits - totalPrice;
//       message = `You ordered ${orderedQuantity} droids, you have ${creditsLeft} credits left`
//     }
//     // Change code above this line
//     return message;
//   }
//   makeTransaction(3000, 5, 23000);
//   makeTransaction(1000, 3, 15000);
//   makeTransaction(5000, 10, 8000);
//   makeTransaction(2000, 8, 10000);
//   makeTransaction(500, 10, 5000);

//   console.log(message);


// // 25/36 ----
// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
     
//     message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
  
//     // Change code above this line
//     return message;
//   }
//   checkStorage(100, 50);
//   checkStorage(100, 130);
//   checkStorage(100, 130);
//   checkStorage(200, 20);
//   checkStorage(200, 150);
//   checkStorage(150, 180);

//----- 28/36 -----

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line
  
//     // if (password === null) {
//     //   message = "Canceled by user!";
//     // } else if (password === ADMIN_PASSWORD) {
//     //   message = "Welcome!";
//     // } else {
//     //   message = "Access denied, wrong password!";
//     // }
  
//     switch (password) {
//       case null:
//         message = "Canceled by user!";
//         break;
//       case ADMIN_PASSWORD:
//         message = "Welcome!";
//         break;
//       default: 
//         message = "Access denied, wrong password!";
  
//     }
  
//     // Change code above this line
//     return message;
//   }
//     checkPassword("mangohackzor");
//     checkPassword(null);
//     checkPassword("polyhax");
//     checkPassword("jqueryismyjam");



// ----- 33/36 -----

// function formatMessage(message, maxLength) {
    
//     // Change code below this line
//       if (message.length > maxLength) {
//         return message.slice (0, maxLength) + '...'
//       }
//     /// Change code above this line
//     return message;
//   }

//   console.log (
//     formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)
//     )

//     formatMessage("Curabitur ligula sapien", 16);
// formatMessage("Curabitur ligula sapien", 23);
// formatMessage("Vestibulum facilisis purus nec", 20);
// formatMessage("Vestibulum facilisis purus nec", 30);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);



// ------36/36 -------


function checkForSpam(message) {
    let result;
    // Change code below this line
    //  const blackListWord1 = 'sale';
    //  const blackListWord2 = 'spam';
        const normalisedString = message.toLowerCase()
        result = normalisedString.includes('spam' && 'sale');
    // Change code above this line
    return result;
    console.log(message.toLowerCase());
  }
//   console.log (message.toLowerCase());
console.log (
    checkForSpam("Trust me, this is not a spam message")
);
