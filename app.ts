#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";

interface CurrencyConversion {
  [currency: string]: number;
}

const currencyRates: CurrencyConversion = {
  USD: 280.98,
  CAD: 207.23,
  EUR: 301.02,
  GBP: 354.12,
};

const displayBanner = async () => {
  await showBanner(
    `Currency Converter`,
    chalk.cyan(`This is Currency Converter Project\n Created by "Raffey"`),
    "blue"
  );
};

async function promptUser() {
  const questions = [
    {
      type: "input",
      name: "amount",
      message: chalk.green("Enter the amount in PKR:"),
    },
    {
      type: "list",
      name: "choice",
      message: "Which Currency would you like to convert your money to?",
      choices: ["USD", "CAD", "EUR", "GBP"],
    },
    {
      type: "confirm",
      name: "exit",
      message: "Do you want to exit?",
      default: false,
    },
  ];

  return await inquirer.prompt(questions);
}

async function main() {
  await displayBanner();
  let exit = false;

  do {
    const { choice, amount, exit: shouldExit } = await promptUser();

    if (shouldExit) {
      console.log(chalk.yellow("Exiting..."));
      exit = true;
    } else {
      const conversionRate = currencyRates[choice];
      if (conversionRate) {
        const convertedAmount = parseFloat(amount) / conversionRate;
        console.log(
          chalk.blue(
            `Converted amount: ${convertedAmount.toFixed(2)} ${choice}`
          )
        );
      } else {
        console.log(chalk.red("Invalid currency choice!"));
      }
    }
  } while (!exit);
}

main();
