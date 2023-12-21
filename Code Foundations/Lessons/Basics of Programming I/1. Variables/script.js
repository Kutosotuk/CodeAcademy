$(document).ready(function(){

    // make these variables all caps because they're global, by convention
    var GRASS = 'https://static-assets.codecademy.com/Paths/Code-Foundations/learn-how-to-code/bop-i/assets/images/Grass.png';
    var ROCKS = 'https://static-assets.codecademy.com/Paths/Code-Foundations/learn-how-to-code/bop-i/assets/images/Rocks.png';
    var FOREST = 'https://static-assets.codecademy.com/Paths/Code-Foundations/learn-how-to-code/bop-i/assets/images/Forest.png';
    var LAKE = 'https://static-assets.codecademy.com/Paths/Code-Foundations/learn-how-to-code/bop-i/assets/images/Lake.png';
    var BEACH = 'https://static-assets.codecademy.com/Paths/Code-Foundations/learn-how-to-code/bop-i/assets/images/Beach.png';
    var TOWN = 'https://static-assets.codecademy.com/Paths/Code-Foundations/learn-how-to-code/bop-i/assets/images/City.png';
    var GLACIER = 'https://static-assets.codecademy.com/Paths/Code-Foundations/learn-how-to-code/bop-i/assets/images/Glacier.png';
    var DESERT = 'https://static-assets.codecademy.com/Paths/Code-Foundations/learn-how-to-code/bop-i/assets/images/Desert.png';
    var MOON = 'https://static-assets.codecademy.com/Paths/Code-Foundations/learn-how-to-code/bop-i/assets/images/Moon.png';

    // Check variable one
    // get the value that the user typed and store it a variable
    var inputValueOne = one;

    // make that input all uppercase to make our check later easier, who knows how the user will type
    var upperCaseOne = inputValueOne.toUpperCase();

    // get the value of the name attribute of the input tag that the user is typing in
    // we'll use this value to replace the background image on the corresponding box
    var nameToPassOne = 'one-value';
    checkTheInput(upperCaseOne, nameToPassOne);

    // Check variable two
    var inputValueTwo = two;

    // make that input all uppercase to make our check later easier, who knows how the user will type
    var upperCaseTwo = inputValueTwo.toUpperCase();

    // get the value of the name attribute of the input tag that the user is typing in
    // we'll use this value to replace the background image on the corresponding box
    var nameToPassTwo = 'two-value';
    checkTheInput(upperCaseTwo, nameToPassTwo);

    // Check variable three
    var inputValueThree = three;

    // make that input all uppercase to make our check later easier, who knows how the user will type
    var upperCaseThree = inputValueThree.toUpperCase();

    // get the value of the name attribute of the input tag that the user is typing in
    // we'll use this value to replace the background image on the corresponding box
    var nameToPassThree = 'three-value';
    checkTheInput(upperCaseThree, nameToPassThree);


    function defineBoxProperties(box, terrainDescription, imgLink) {
        if (imgLink) {
            box.css('background-image', `url(${imgLink})`);
        } else {
            box.css('background-image', `linear-gradient(135deg, #2e2e2e, #000000)`);
        }

        box.each(function() {
            const currentAriaLabel = $(this).attr('aria-label');
            let newAriaLabel = currentAriaLabel.split(', ').slice(0, 2);
            newAriaLabel.push(terrainDescription);
            newAriaLabel = newAriaLabel.join(', ');
            $(this).attr({'aria-label': newAriaLabel});
        })
    }



    function checkTheInput (userValue, nameToPass) {

        // this is where we create the jquery variable using the id we created/pulled from the name attribute
        var boxToUpdate = $("div." + nameToPass);

        // variables that have strings that we'll use to compare what the user has input
        // if you want to change the values we're looking for, this is where to do it
        var grass = "GRASS",
            rocks = "ROCKS",
            forest = "FOREST",
            lake = "LAKE",
            beach = "BEACH",
            town = "TOWN",
            glacier = "GLACIER",
            desert = "DESERT",
            moon = "MOON";

        // basic else if statement, if they put in "grass" then replace the background image with the URL thats
        // stored in the global variable above
        // I left the 'else' at bottom in case you want to send an alert or something
        if (userValue === grass) {
            defineBoxProperties(boxToUpdate, 'grassy terrain', GRASS);
        } else if (userValue === rocks) {
            defineBoxProperties(boxToUpdate, 'rocky terrain', ROCKS);
        } else if (userValue === forest) {
            defineBoxProperties(boxToUpdate, 'forest terrain', FOREST);
        } else if (userValue === lake) {
            defineBoxProperties(boxToUpdate, 'lake terrain', LAKE);
        } else if (userValue === beach) {
            defineBoxProperties(boxToUpdate, 'beach terrain', BEACH);
        } else if (userValue === town) {
            defineBoxProperties(boxToUpdate, 'town terrain', TOWN);
        } else if (userValue === glacier) {
            defineBoxProperties(boxToUpdate, 'glacier terrain', GLACIER);
        } else if (userValue === desert) {
            defineBoxProperties(boxToUpdate, 'desert terrain', DESERT);
        } else if (userValue === moon) {
            defineBoxProperties(boxToUpdate, 'moon terrain', MOON);
        } else {
            defineBoxProperties(boxToUpdate, 'no terrain');
        }

    }

});


