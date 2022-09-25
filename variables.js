// There are two ways to define the scope 
    // using let
    // Uning const 
        // LET 
            // It allow to declare a variable
            // We can change the value of variable defined using let
        // CONST
            // It is also used to declare a variable
            // But the variable declared with  const, its value cannot be changed
            // If we try to change the value, compile er will throw TypeError

// Defing variable usinjg let keyword

let a = 25;
console.log('a', a);
a =46; 
a = 34;
console.log('a', a);

// Defing variable using const keyword

const b = 36;
b = 78;
console.log('b', b);

// Variable
    // Above declared a, and b are variables
    // Basically variable is box, which can contain any value