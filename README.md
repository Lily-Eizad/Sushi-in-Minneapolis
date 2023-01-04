# 🍣 Welcome to sushi in Minneapolis! 

### ✨ A bit about what the app does/scope: 
This app uses Yelp APIs to get all the sushi restaurants in Minneapolis. It also shows you details about each restaurant. 

### ✨ Tech Stack
##### Built with: `React/ TypeScript / JavaScript` 
##### State Management: `React Hooks`
##### UI Framework: `Foundation CSS` 
##### Testing: `React Testing Library/ Jest` 
##### Routing: `React Router`
##### Package Manager: `NPM (see the bottom section of this ReadMe for how to start the app, note: you will also need to NPM install and set the environment in a config file that I have not committed to this repo due the fact that it contains the API key and should be hidden for security reasons. Please see the How To Run The App section )`

Other notable dependencies:  
##### Dynamic data loading: `React Infinite Scroller` 

### ✨ Reasoning/ Decision Making
Why TypeScript? 
TypeScript modularizes applications and helps eliminate bugs by checking data types. It's great for scaling, architecting and data modeling. 

Why Foundation CSS? 
For the purposes of meeting project requirements of avoiding heavily stylized frameworks such as MUI. I've used this very sparringly by importing the CDN. The functionality of Foundation in this app is mostly for responsive purposes and to normalize the CSS across different browsers. Since I'm not importing any pre-built components, the styles are pretty minimal. 

Why Sushi? 
Sushi is one of the superior food categories. According to science, you can tell a lot about a city's restaurant scene by its sushi restaurants. 

Why Minneapolis?
because!

### ✨ Notable UI Features
1. Dynamic data loading with infinite scroll
2. Responsive UI
3. Won't lose your spot scrolling when hitting browser back button on Restaurant Details page
4. 404 Page for bad URLs
5. Loading spinner shows when data is loading
6. Meaningful URLs - change dynamically with the screens 
7. Restaurant Details page has a shareable URL and will load independently 
8. Restaurant Details page lets you know if it can't find the restaurant for a given ID
9. Meaningful Page titles 
10. Accessibility-friendly (ARIA roles, alt text, keyboard navigation, color contrasts, minimal animation, meaninful URLs, semantic HTML)

### ✨ How to Run the App
1. Clone Repo 
2. npm install 
3. add config file in the /hooks/api folder (I can provide this file which contains the API key) 
4. npm start (below there is some more information on npm) 



🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

