## Currency Converter

This is a simple command-line currency converter project created by "Raffey." The application allows users to convert an amount in Pakistani Rupees (PKR) to other currencies such as USD, CAD, EUR, and GBP.

## Usage

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the application:

   ```bash
   tsc
   cd ./dist
   node app
   ```

Alternatively, you can install the package globally and run it from anywhere in your terminal:

```bash
npm i raffeys-currency
npx raffeys-currency
```

3. Follow the on-screen prompts to enter the amount in PKR, choose the desired currency for conversion, and optionally exit the program.

## Features

- Convert PKR to USD, CAD, EUR, and GBP.
- User-friendly command-line interface.
- Option to exit the program.

## Dependencies

- [inquirer](https://www.npmjs.com/package/inquirer) - For interactive command-line prompts.
- [chalk](https://www.npmjs.com/package/chalk) - For colorful console output.
- [node-banner](https://www.npmjs.com/package/node-banner) - For displaying banners in the console.

## Credits

- Project created by [Raffey](https://github.com/MuhammadRaffey)
- Banner display powered by [node-banner](https://www.npmjs.com/package/node-banner)
