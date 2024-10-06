User Stories
🐿️ As a developer, I want the application to use the useState hook so that the user’s interactions with the app are smooth and their data is managed effectively.
🐿️ As a developer, I want to use the useEffect hook to manage game time with setInterval, return a cleanup function, and use a dependency array so that the game runs efficiently and updates in real-time for the user.
🐿️ As a developer, I want to create separate files that return JSX instead of including all JSX within App.jsx so that the code is well-organized, making the app more maintainable and reliable for the user.
🐿️ As a user, I want the application to automatically update the game state every second so that I can see my progress and earned cookies in real-time, making the game more exciting and rewarding.
🐿️ As a developer, I want to use the .map() function to render lists of items efficiently so that the user can see dynamic content without performance issues.
🐿️ As a user, I want to purchase upgrades with my earned cookies to increase my cookies per second, making the gameplay more rewarding.
Requirements
🎯 Implement the useState hook.
🎯 Use useEffect effectively.
🎯 Return JSX from a source other than App.jsx, for example, by using components.
🎯 Apply setInterval to execute periodic tasks within the application.
🎯 Use the .map() function to render lists of items in the application dynamically.
🎯 Use logic to manage the purchase and application of upgrade items within the game.
How to Deploy
Aim to deploy on Render when you have enough time afterwards to debug any potential problems, which will be listed in the production logs.

To begin, ensure your project has been pushed to GitHub. Then, go to Render. You should already have an account at this point, but if not, make an account (or sign-in through GitHub).

Deploying a React App to Render
Click ‘+ New’ and choose ‘Static Site’.
Select the same project and click ‘Connect →’.
Here is what we need on the options page:
Build Command: npm install && npm run build (or npm install; npm run build, as should be pre-filled in for you)
Publish directory: dist
Environment variables: add anything in your client-side .env file in here.
Now, you can ‘Deploy Static Site’!
Stretch Goals
To achieve an 8/8 in your assignment, aim to achieve all of the requirements, plus some extra goals for each section of the marking rubric. This can be excellence in styling or something that demonstrates creativity or innovation in the week’s topics.

Below are some examples of stretch goals and user stories that you could add to your project, but are not expected to.

Stretch User Stories
🐿️ As a user, I want the application to save and retrieve my game data so that my progress is preserved even when I close and reopen the game.
🐿️ As a developer, I want the application to use an API to retrieve upgrade information so that users can access current upgrade details and seamlessly integrate them into their gameplay.
🐿️ As a user, I want the application to have excellent UI styling so that it is visually appealing and provides a pleasant and intuitive experience while playing the game.
Stretch Requirements
🏹 Use local storage to save and retrieve game data.
🏹 Use the Upgrades API to manage upgrades.
🏹 Style the application excellently.
Reflection
Please also provide an assignment reflection in your project README.md file.

Required
🎯 What requirements did you achieve?
- I uses useState and useEffect hook
- I used setInterval to execute periodic tasks
- I used .map() function to render lists of items
- I used logic to manage the purchase and application of upgrade items
- I used components to return JSX
- added audio to button click
- use CSS to style the application
- I use provided API to manage upgrades
- I tried to save data to local storage to save and retrieve game data(NOT WORKING)

🎯 Were there any requirements or goals that you were unable to achieve?

## Stretch Goals
- I was unable to use local storage to save and retrieve game data
- I wanted to use background audio with a volume slider, but I was not able to implement it due to time constraint

🎯 If so, what was it that you found difficult about these tasks?
- I found it difficult to implement local storage to save and retrieve game data because I was not familiar
- I found it difficult to implement background audio with a volume slider because I was not familiar
- I found it difficult to implement the use of the logic to manage the purchase and application of upgrade
- I found it difficult to implement the use of the components to return JSX because using components was new to me

Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g YouTube tutorials)?
# A lot research can't even remember the name of the source.
What errors or bugs did you encounter while completing your assignment? How did you solve them?
# I encountered a lot of errors and bugs, but I was able to solve them by looking at the documentation and watching YouTube tutorials.

What went really well and what could have gone better?
# What went well was that I was able to implement the use of the logic to manage the purchase
# What could have gone better was that I was not able to implement the use of local storage to save and retrieve game data
# What could have gone better was that I was not able to implement the use of background audio with a volume slider