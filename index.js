#!/usr/bin/env node
// Importing inquirer library
import inquirer from "inquirer";
// Importing chalk library for styling output
import chalk from "chalk";
// Defining the main function to start the quiz
async function startQuiz() {
    // Displaying a welcome message
    console.log(chalk.bold.cyanBright("\t\t\t WELCOME TO MY QUIZ"));
    // Asking the user if they are interested in the quiz and prompting for their name
    let answer = await inquirer.prompt([
        {
            name: "answer",
            type: "confirm",
            message: "Are you interested in the quiz?",
        },
        {
            name: "name",
            type: "input",
            message: "Enter your name:",
        },
    ]);
    // If the user is not interested, displaying a message and exiting
    if (!answer.answer) {
        console.log(chalk.yellowBright("Okay, Maybe Next Time!"));
    }
    // Displaying a message to start the quiz
    console.log(chalk.bold.cyanBright("\n\t\t\t LET'S START THE QUIZ\n"));
    // Defining an array of quiz questions
    const questions = [
        {
            question: "TypeScript is a superset of which programming language?",
            choices: ["a) JavaScript", "b) Python", "c) C++", "d) Java"],
            correctAnswer: "a) JavaScript",
        },
        {
            question: "Which keyword is used to define a variable with a fixed type in TypeScript?",
            choices: ["a) let", "b) const", "c) var", "d) type"],
            correctAnswer: "b) const",
        },
        {
            question: "Which of the following is NOT a primitive data type in TypeScript?",
            choices: ["a) string", "b) number", "c) array ", "d) boolean"],
            correctAnswer: "d) boolean",
        },
        // Add more questions here in the same format.
    ];
    let score = 0;
    // Looping through each question and prompting the user for an answer
    for (let i = 0; i < questions.length; i++) {
        const { question, choices, correctAnswer } = questions[i];
        const answer = await inquirer.prompt({
            name: "answer",
            type: "list",
            message: `${i + 1}. ${question}`,
            choices: choices,
        });
        // Checking if the user's answer is correct and updating the score
        if (answer.answer === correctAnswer) {
            console.log(chalk.greenBright("Correct Answer!\n"));
            score++;
        }
        else {
            console.log(chalk.redBright("Wrong Answer!\n"));
        }
    }
    // Displaying the end of the quiz and the user's score
    console.log(chalk.bold.cyanBright(`\n\t\t\tQUIZ ENDED!\n`));
    console.log(chalk.bold(`Dear ${answer.name}, Your Score is: ${score}/${questions.length}\n`));
}
// Calling the startQuiz function to begin the quiz
startQuiz();
