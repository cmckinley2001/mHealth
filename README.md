# Getting Started

This app was developed as a tool to help a user track their healthcare spending and locate a Provider with a search tool.
The app contains some visual appeal and is responsive to mobile and desktop.
As for Feature requirements, the following applies to the app:
- Use a regular expression to validate user input and either prevent the invalid input or inform the user about it (in all cases prevent invalid input from being stored or saved).
  - Contact page checks for valid email using regex (see ContactForm.js line 36 and 47)
  - Tracking page form only allows dates in the date field and the amount is based on US dollars and does not accept multiple decimal points or other characters that are not numerical (this is accomplished by npm package 'react-currency-input-field')
- Analyze text and display useful information about it. (e.g. word/character count in an input field)
  - The Contact Form under Details has a character count and will stop the user from going over 200 characters (see line 20 ContactForm.js)
- Use arrays, objects, sets or maps to store and retrieve information that is displayed in your app
  - ExpenseForm.js utilizes Arrays to store and update Expenses (examples on lines 15, 51, and 59)
  - ContactForm.js utilizes Arrays for the form data and character count (examples on lines 12-13)
- Retrieve data from a third-party API and use it to display something within your app.
  - See Maps.js that is exported then imported to the ProviderLocation.js
  - API key is provided with the Google Form Submission.  To add go to the Maps.js file under Components folder.  Update Line 7 where it says "ADDAPIKEY"
  - Display Google Map with ability to search for Places
- Develop your project using a common JavaScript framework such as React, Angular, or Vue.
  - App is built using React library

## Built Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
