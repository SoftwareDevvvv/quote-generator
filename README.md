# 📜 Quote GEN

A simple JavaScript program that generates random quotes based on user input.

## Description

This program allows users to choose a specific type of quote and receive a random quote from that category. The available quote types include:

1. Inspirational ✨
2. Philosophy 🌐
3. Life 🌱
4. Advice 🤔
5. Wisdom 🧠
6. Love 💖
7. People 👥
8. Humor 😄

The program also includes an automatic test where the computer randomly selects an input to ensure the validity of the input checking function.

## Usage

To use the program, follow these steps:

1. Run the script in a JavaScript environment.
2. Enter a number corresponding to the desired quote type when prompted.

   - 1: Inspirational
   - 2: Philosophy
   - 3: Life
   - 4: Advice
   - 5: Wisdom
   - 6: Love
   - 7: People
   - 8: Humor

3. If the input is valid, the program will display a random quote from the chosen category along with the author.

## Files

- `quotes.js`: Contains an array of quotes categorized by type.
- `banner.js`: Contains a function to display a banner.

## Functions

- `getQuotesListFromType(type)`: Filters quotes based on the given type.
- `isInputValid(input)`: Checks if the input is valid.
- `getQuoteTypeFromInput(input)`: Converts the input number to the corresponding quote type.
- `getRandomQuoteFromList(list)`: Returns a random quote from the given list.
- `start()`: The main function that initiates the program.

## Note

This is a simple console-based program and does not have a graphical user interface.

Feel free to modify or extend the code for your specific needs!
