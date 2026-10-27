
"use strict";

// create a boolean variable to control the while loop
// we will run the program as long as this variable is true
var runProgram = true;

// create two string variables to hold the original and converted strings
// later we will use these variables to store the user input and the converted string
var originalString = "";
var convertedString = "";

while (runProgram) {

    var strInput = prompt(
        // ask the user to enter 1, 2, 3, or Exit
        "ROBOT Language Converter\n\n" +
        "1. Enter a String\n" +
        "2. Convert String\n" +
        "3. Display String\n" +
        "Exit. Exit Program\n\n" +
        "Enter your choice:"
    );

    // trim and convert the user input to lowercase
    if (strInput === null) {
        strInput = "exit";
    } else {
        strInput = strInput.trim().toLowerCase();
    }

    // check if the user wants to exit
    if (strInput === "exit") {

        console.log("Thanks for using the ROBOT Language Converter!");
        runProgram = false;

    } else {

        // Program 1: Enter a String
        if (strInput === "1") {

            originalString = prompt(
                "Please enter a String:"
            );

            // check if the originalString is null or empty
            while (originalString === null ||
                   originalString.trim() === "") {

                console.log("You need to enter something");

                originalString = prompt(
                    "Please enter a String:"
                );
            }

            originalString = originalString.trim();
            convertedString = "";

        // Program 2: Convert String
        } else if (strInput === "2") {

            if (originalString == "") {

                console.log("You need to first enter a String");

            } else {

                // convert the string to ROBOT Language
                if (originalString.length >= 5) {
                    convertedString = originalString + "-clink";
                } else {
                    convertedString = originalString + "-clank";
                }

                console.log("String converted");
            }

        // Program 3: Display String
        } else if (strInput === "3") {

            if (convertedString == "") {

                console.log("You need to first convert your String");

            } else {

                // print the converted string
                console.log(convertedString);

                // reset the strings
                originalString = "";
                convertedString = "";
            }

        } else {

            // invalid menu selection
            console.log(
                "Invalid option. Please enter 1, 2, 3, or Exit."
            );
        }
    }
}
