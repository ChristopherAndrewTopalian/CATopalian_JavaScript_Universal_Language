// catopalian_js_universal_array_prototype.js

// UNIVERSAL ARRAY PROTOTYPE EXTENSIONS

// Replaces array.push(item)
Array.prototype.addToEnd = function(itemToAdd)
{
    this.push(itemToAdd);
    return this;
};

// Replaces array.pop()
Array.prototype.removeLast = function()
{
    let removedItem = this.pop();
    return removedItem;
};

// Replaces array.unshift(item)
Array.prototype.addToStart = function(itemToAdd)
{
    this.unshift(itemToAdd);
    return this;
};

// Replaces array.shift()
Array.prototype.removeFirst = function()
{
    let removedItem = this.shift();
    return removedItem;
};

//----//

// EXAMPLE:

function test001()
{
    // Initialize the Starfleet array
    let fleet = ["Enterprise", "Voyager"];

    // Add a ship to the rear guard (push)
    fleet.addToEnd("Cerritos");
    console.log(fleet); // ["Enterprise", "Voyager", "Cerritos"]

    // Add a ship to the vanguard (unshift)
    fleet.addToStart("Defiant");
    console.log(fleet); // ["Defiant", "Enterprise", "Voyager", "Cerritos"]

    // Remove the vanguard ship (shift)
    let firstShip = fleet.removeFirst();
    console.log(firstShip); // "Defiant"
    console.log(fleet);     // ["Enterprise", "Voyager", "Cerritos"]

    // Remove the rear guard ship (pop)
    let lastShip = fleet.removeLast();
    console.log(lastShip);  // "Cerritos"
    console.log(fleet);     // ["Enterprise", "Voyager"]
}

// uncomment to test
test001();

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

