# Instructions to get started
- Run 'npm install' 
- API key is provided with the Google Form Submission.  To add go to the Maps.js file under Components folder.  Update Line 7 where it says "ADDAPIKEY"
- Run 'npm start' to run the appin the development mode
  - Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
  - The page will reload when you make changes.\
  - You may also see any lint errors in the console.


## Requirements/Achievements/Scope

This app was developed as a tool to help a user track their healthcare spending and locate a Provider with a search tool.
The app contains some visual appeal and is responsive to mobile and desktop.
As for Feature requirements, the following applies to the app:
1. Use a regular expression to validate user input and either prevent the invalid input or inform the user about it (in all cases prevent invalid input from being stored or saved).
  - Contact page checks for valid email using regex (see ContactForm.js line 36 and 47)
  - Tracking page form only allows dates in the date field and the amount is based on US dollars and does not accept multiple decimal points or other characters that are not numerical (this is accomplished by npm package 'react-currency-input-field')
2. Analyze text and display useful information about it. (e.g. word/character count in an input field)
  - The Contact Form under Details has a character count and will stop the user from going over 200 characters (see line 20 ContactForm.js)
3. Use arrays, objects, sets or maps to store and retrieve information that is displayed in your app
  - ExpenseForm.js utilizes Arrays to store and update Expenses (examples on lines 15, 51, and 59)
  - ContactForm.js utilizes Arrays for the form data and character count (examples on lines 12-13)
  - ExpenseTable.js utilizes Maps to iterate over an array and returns a new table row for the new expense (example on line 33)
4. Retrieve data from a third-party API and use it to display something within your app.
  - See Maps.js that is exported then imported to the ProviderLocation.js
  - Display Google Map with ability to search for Places
5. Develop your project using a common JavaScript framework such as React, Angular, or Vue.
  - App is built using React library


### Built Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).