// # Review 4 - For loops

// NOTE! Pay close attention to creating code with good and consistent code style.

// Use the variable "i" for all your loops. That variable should *not* be accessible outside the loop. Always use a for loop.

// 1. Make a loop that prints the numbers from 0 to 10.

for ( let i = 0; i <= 10; i++ ) {
    console.log(i);
};

// 2. Make a loop that prints the numbers from 10 to 20.

for ( let i = 10; i <= 20; i++ ) {
    console.log(i);
};

// 3. Make a loop that prints the numbers from -10 to 10.

for ( let i = -10; i <= 10; i++ ) {
    console.log(i);
};

// 4. Make a loop that prints the numbers from 10 to -10.

for ( let i = 10; i >= -10; i-- ) {
    console.log(i);
};

// 5. Make a string. Then, make a loop that prints all the individual characters of that string.

const sentence = "The lazy fox and so on.";

for ( let i = 0; i < sentence.length; i++ ) {
    console.log(sentence[i]);
};

// 6. Make an array with 5 items. Then, make a loop that prints all the individual items of that array.

const animals = ["lion", "antilope", "cheetah", "elephant", "zebra"];

for ( let i = 0; i < animals.length; i++ ) {
    console.log(animals[i]);
}

// 7. Make an array with 6 items. Then, make a loop that prints every second item of that array.

const vegetables = [ "cucumber", "tomato", "cauliflower", "chili", "squash", "salad" ];

for ( let i = 1; i < vegetables.length; i+=2 ) {
    console.log(vegetables[i]);
};

// 8. Make an array with 6 items. Then, make a loop that prints every third item of that array.

const fruits = [ "orange", "kumquat", "pear", "banana", "mango", "papaya" ];

for ( let i = 2; i < fruits.length; i+=3 ) {
    console.log(fruits[i]);
};

// 9. Make an array with 10 items. Then, make a loop that prints every third item of that array starting from the 2nd.

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

for ( let i = 1; i < numbers.length; i+=3 ) {
    console.log(numbers[i]);
};

// 10. Make an array with 7 objects. Each objects should have a property called counter. Create a loop that prints only the counter value of each object.

const counterArray = [
    { counter: 1 },
    { counter: 2 },
    { counter: 3 },
    { counter: 4 },
    { counter: 5 },
    { counter: 6 },
    { counter: 7 },
];

for ( let i = 0; i < counterArray.length; i++ ) {
    console.log(counterArray[i].counter);
};

// 11. Save a random whole number between 0 and 100 to a variable. Then print all numbers from 0 to 100 and as soon as you reach the random number you created, stop your loop.

const randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber); // test log

for ( let i = 0; i <= 100; i++ ) {
    if ( i === randomNumber ) {
        console.log(i);
        break;
    } else {
        console.log(i);
    };
};