// catopalian_js_universal_array_functional.js

// UNIVERSAL ARRAY OPERATIONS

// Replaces array.push(item)
function addToEnd(targetArray, itemToAdd)
{
    targetArray.push(itemToAdd);
    return targetArray;
}

// Replaces array.pop()
function removeLast(targetArray)
{
    let removedItem = targetArray.pop();
    return removedItem;
}

// Replaces array.unshift(item)
function addToStart(targetArray, itemToAdd)
{
    targetArray.unshift(itemToAdd);
    return targetArray;
}

// Replaces array.shift()
function removeFirst(targetArray)
{
    let removedItem = targetArray.shift();
    return removedItem;
}

//----//

// EXAMPLE:

function test001()
{
    // Initialize the Starfleet array
    let fleet = ["Enterprise", "Voyager"];

    // Add a ship to the rear guard (push)
    addToEnd(fleet, "Cerritos");
    console.log(fleet); // ["Enterprise", "Voyager", "Cerritos"]

    // Add a ship to the vanguard (unshift)
    addToStart(fleet, "Defiant");
    console.log(fleet); // ["Defiant", "Enterprise", "Voyager", "Cerritos"]

    // Remove the vanguard ship (shift)
    let firstShip = removeFirst(fleet);
    console.log(firstShip); // "Defiant"
    console.log(fleet);     // ["Enterprise", "Voyager", "Cerritos"]

    // Remove the rear guard ship (pop)
    let lastShip = removeLast(fleet);
    console.log(lastShip); // "Cerritos"
    console.log(fleet);    // ["Enterprise", "Voyager"]
}

// uncomment to test
test001();

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

