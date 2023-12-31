# 🌐 Worldwide True or False
A simple geography quiz to test your knowledge and learn new facts.

![Mockup on different devices, created with Techsini.](assets/images/readme-images/mockup.png)

## UX
### Website owner goals
The purpose of this website is to let users test their knowledge and learn new facts about geography. It has a simple interface that is fully responsive for different screen sizes, and it can be updated with new information as necessary.

### User goals
New user goals:
- User is able to test their knowledge about geography using a fun and simple true-or-false game.

Returning user goals:
- User is able to gain knowledge by practicing.

### User stories
As a new user:
- _I would like to learn more about world geography in a simple and fun way._

As a returning user:
- _I would like to test my knowledge and learn even more about world geography._

### Structure of the website
This is a one-page website designed to provide users with a simple geography game that’s easy to enjoy on all types of devices. The simplicity of the design, fun questions, and encouraging feedback give a satisfying user experience.

### Surface
Colors <br>
I developed a color palette using [Coolors](https://coolors.co/). This turquoise palette is inspired by the blue-green color of the earth, and coordinates with the game's logo, the "globe with meridians" emoji.
<br>
![Color palette with shades of turquoise](assets/images/readme-images/color-palette.png)
<br>
For the background design, I used a [CSS pattern](https://www.magicpattern.design/tools/css-backgrounds) as suggested by my cohort facilitator, David Calikes. This geometric pattern reflects the meridian lines on the globe.

Fonts <br>
I used [Google Fonts](https://fonts.google.com/specimen/Raleway) and chose a sans serif font with an interesting uppercase "W" that makes a fun logo for the game. <br>
![Raleway font from Google Fonts](assets/images/readme-images/raleway-font.png)

Images <br>
I used Emojipedia to find and download the logo image. The outline of a globe represents knowledge waiting to be discovered. <br>
![Logo image](assets/images/globe-with-meridians_1f310.png) <br>

## Features
The website has a header with a logo and score area. In the body of the website there is an area for questions, and buttons for the answer choices (True or False) and to show the next question. 

- Header: The header includes a fun logo and the title of the game.

- Score area: The score area is within the header. It is centered below the other content in the mobile version, and on larger screens where the header content is evenly spaced, it appears at the right side.

- Introduction: This section appears when the page loads, and gives the user instructions about how to play the game. Clicking "Start game" hides the instructions so the game can begin.

- Question area: The current question appears clearly in the center of the page. There are ten questions per game, and the questions are loaded with Fetch API using [Open Trivia Database](https://opentdb.com/api_config.php), as suggested by my mentor, Adegbenga Adeye.

- Answer area: There are two buttons for answers: "True" and "False." The "Next question" button loads the following question.

- Responses: After the user clicks an answer, the response tells them whether their answer was correct or not. I searched online for [tips](https://www.geeksforgeeks.org/how-to-stack-elements-in-css/), and layered elements with CSS to create this functionality. This replaced the alerts from the walkthrough project, and located the feedback within the DOM.

- Play again: This reloads the page, restarting the game from the beginning. I found information about how to do this from [freeCodeCamp](https://www.freecodecamp.org/news/javascript-refresh-page-how-to-reload-a-page-in-js/#:~:text=Method%201%3A%20How%20to%20Refresh,and%20loading%20the%20latest%20content.).

### Wireframes
I used Balsamiq to create wireframes for this game. This was very helpful for planning the structure and functionality. I started out by using alerts for correct/incorrect answers, but was later able to build feedback elements within the DOM. <br>
![Wireframe of landing page](assets/images/readme-images/wireframe1.png)
![Wireframe of page with alert](assets/images/readme-images/wireframe2.png)

### Favicon
I used the [globe with meridians emoji](https://favicon.io/emoji-favicons/globe-with-meridians) as a favicon, which is the same as the game's logo. <br>

### Future implementations
In the future this website can be updated with more questions and greater functionality. For instance: <br>
- Add more questions with different levels of difficulty
- Create a choice of quiz topics
- Make the scoring system more sophisticated

### Technologies used:
HTML 5 as a structure language <br>
CSS as a style language <br>
JavaScript to add functionality
Google Fonts <br>
Balsamiq for wireframes <br>
GitHub <br>
Git <br>
Gitpod <br>

## Testing

### Functionality testing
The deployed website was tested throughout the building process using Chrome Devtools.

### Compatibility testing
The website was tested in Chrome and Safari, on the following devices:
<br>
iPhone 12 Mini <br>
Macbook Air

### User stories testing
As a new user:
- _I would like to learn more about world geography in a simple and fun way._ <br>
The game is easy to understand, and shows fun questions about places all over the world.

As a returning user:
- _I would like to test my knowledge and learn even more about world geography._ <br>
There is always more to discover because new questions are loaded automatically with Fetch API.

## Issues found during development

### Performance testing
I used Chrome Developer Tools for troubleshooting functionality and style problems during development. It was difficult to find the source of some issues by searching on my own, and I got support from the Code Institute tutors, my cohort facilitator, and my mentor.<br>
Chrome Developer tools was really useful for testing the responsivity of the website, especially since I developed a wider-screen version first, and then created the mobile version. Because I was able to see the dimensions of each element, and how the flex styles were working, I was able to figure out the style changes for the mobile version. <br>
I used the Lighthouse tool to test performance in incognito mode, as suggested by my mentor.<br>
These were the results on mobile: ![Lighthouse report for mobile](assets/images/readme-images/lighthouse-mobile.png)<br>
And on desktop: ![Lighthouse report for desktop](assets/images/readme-images/lighthouse-desktop.png)

### Code validation
- HTML <br> I validated the HTML code with W3C and found no errors.
- CSS <br> I validated the CSS code with (Jigsaw) validator and found no errors.
- JavaScript <br> I validated the Javascript code with JSHINT and found no errors.

## Deployment
This website was deployed on GitHub pages. <br>
The live link can be found [here](https://emilyrosenberg.github.io/worldwide-game/).

## Screenshots

### During development
I added intitial html and styles with placeholder background colors: ![Layout process on a phone](assets/images/readme-images/process1.png) ![Layout process on a larger screen](assets/images/readme-images/process2.png)<br>
With initial styles and hard-coded placeholder content, the website looked like this:
![Initial styles on a phone](assets/images/readme-images/initial-styles1.png) ![Initial styles on a larger screen](assets/images/readme-images/initial-styles2.png) <br>
Towards the end of the project, I made some style changes so that the website would look better on iPhone 5, and more similar across different screen sizes in general.

### Finished site
These are screenshots of the finished website: <br>
![Landing page on mobile](assets/images/readme-images/screenshot1.png)
![Question on mobile](assets/images/readme-images/screenshot2.png)
![Answer feedback on mobile](assets/images/readme-images/screenshot3.png)
![Landing page on desktop](assets/images/readme-images/screenshot4.png)
![Question on desktop](assets/images/readme-images/screenshot5.png)

## Credits
- I used code from the Love Maths Walkthrough Project to outline this project, and code from the Love Running Walkthrough Project to style it.
- I developed the game further using suggestions from my Code Institute tutors, Roman and Martin, and code from Ricoshae's [tutorial](https://www.youtube.com/watch?v=MnkD82iHe30), which was suggested by my cohort facilitator, David Calikes.
- I used [this readme](https://github.com/marcin-kli/MP1/blob/Milestone-Projects/README.md#annies-portfolio-website) by Annie O'Donahoe as a framework for writing my readme.
- The questions for this quiz come from [Open Trivia Database](https://opentdb.com/api_config.php).
- I would like to thank my Code Institute mentor, Adegbenga Adeye, for ideas, support, and extra resources. <br>
- Thanks to my cohort facilitator, David Calikes, for reassurance and reality-checks during this project, as well as advice for how to make the website more polished and interesting.