# 🌐 Worldwide True or False
A simple geography quiz to test your knowledge and learn new facts.

<!-- ![Mockup on different devices, created with Techsini.](assets/images/readme-images/mockup.png) -->

## UX
### Website owner goals
The purpose of this website is to let users test their knowledge and learn new facts about geography. It has a simple interface and can be updated with new information as necessary.

### User goals
New user goals:
- User is able to test their knowledge about geography using a fun and simple true-or-false game.

Returning user goals:
- User is able to gain knowledge by practicing.

### User stories
<!-- As a job-seeking junior web developer:
- I would like to show potential employers my qualifications.
- I would like to show what’s special about me as a team member.
- I would like to be contacted by potential employers.

As a potential future employer:
- I would like to find out about a potential employee’s qualifications.
- I would like to have a sense of how they would fit into my team. -->

### Structure of the website
This is a one-page website designed to provide users with a fun game that’s easy to enjoy on all types of devices. The simplicity of the design, fun questions, and encouraging feedback give a satisfying user experience.

### Surface
Colors <br>
I developed a color palette using [Coolors](https://coolors.co/). This turquoise palette is inspired by the blue-green color of the earth, and coordinates with the game's logo, the "globe with meridians" emoji.
<br>
![Color palette with shades of turquoise](assets/images/readme-images/color-palette.png)

Fonts <br>
I used [Google Fonts](https://fonts.google.com/specimen/Raleway) and chose a sans serif font with an interesting uppercase "W" that makes a fun logo for the game. <br>
![Raleway font from Google Fonts](assets/images/readme-images/raleway-font.png)

Images <br>
I used Emojipedia to find and download the logo image. The outline of a globe represents knowledge waiting to be filled in. <br>
![Logo image](assets/images/globe-with-meridians_1f310.png) <br>

## Features
<!-- The website has 3 pages, all accessible from the navigation bar. Home is an intro page, About has a few facts about me and my experience and a link to my CV, and Contact has a form to send a message. In addition, submitting the Contact form leads the user to a Success page to let them know their message has been sent, and there is also a 404 error page. -->
Score area
Question area
Button area
Alerts

### Wireframes
I used Balsamiq to create wireframes for this game. This was very helpful as I planned the structure and set up the functionality. <br>
![Wireframe of landing page]()
![Wireframe of page with alert]()

<!-- ### Navigation bar
The navigation bar is visible in the header fixed to the top of each page. It is responsive and on mobile it shows as a toggle with a dropdown menu; on desktop the menu items are in the header.
<br>
Navigation scheme: There are 3 menu items: Home, About, and Contact. -->

<!-- ### Home page
The landing page has a colorful image and large text, to invite potential employers to learn more.

### About page
The about page includes professional experience including my future graduation date from Code Institute, a few fun facts, and a profile image. It can be updated with additional qualifications in the future.

### Contact page
The contact page has links to my LinkedIn and GitHub plus a simple form for entering contact information and sending a message. When a user submits the form, they will see a Success page.

### Footer
The footer appears on all pages. It has links to LinkedIn, GitHub, and the Contact page. -->

### Favicon
I used a [globe with meridians](https://favicon.io/emoji-favicons/globe-with-meridians) as a favicon, which is the same as the game's logo. <br>


### Future implementations

In the future this website can be updated with more questions and functionality. For instance: <br>
- Link the questions to Fetch API <br>
- Create topics
- Improve the scoring system

### Technologies used:
HTML 5 as a structure language <br>
CSS as a style language <br>
JavaScript to add funcitonality
Google Fonts <br>
Balsamiq for wireframes <br>
GitHub <br>
Git <br>
Gitpod <br>

## Testing

<!-- ### Functionality testing
The deployed website was tested throughout the building process with Chrome Devtools.

### Compatibility testing
The website was tested in Chrome and Safari, on the following devices:
<br>
iPhone 12 Mini <br>
Macbook Air

### User stories testing
As a job-seeking junior web developer:
- _I would like to show potential employers my qualifications._ <br>
The About page shows my career path.
- _I would like to show what’s special about me as a team member._ <br>
The website's branding is direct and bold yet friendly and approachable.
- _I would like to be contacted by potential employers._ <br>
The Contact page has a simple and easy contact form, reachable from everywhere on the website.

As a potential future employer:
- _I would like to find out about a potential employee’s qualifications._ <br>
The About page shows my career path including the date I will graduate from the Code Institute course.
- _I would like to have a sense of how they would fit into my team._ <br>
The headings and the About page are intentionally informal and friendly, and my interpersonal skills are included.

## Issues found during development

### Performance testing
I used Chrome Developer Tools for troubleshooting functionality and style problems during development. After deploying, some issues were still unresolved. Trial and error, Googling - and patience! - were most helpful. This is how I learned the most. <br>
I used the Lighthouse tool to test performance in incognito mode, as suggested by my mentor. After making corrections to the meta description and the profile image size, these were the results on mobile: ![Lighthouse report for mobile landing page](assets/images/readme-images/lighthouse-mobile-1.png) ![Lighthouse report for mobile About page](assets/images/readme-images/lighthouse-mobile-2.png) ![Lighthouse report for mobile Contact page](assets/images/readme-images/lighthouse-mobile-3.png) <br>
And on desktop:![Lighthouse report for desktop landing page](assets/images/readme-images/lighthouse-desktop-1.png) ![Lighthouse report for desktop About page](assets/images/readme-images/lighthouse-desktop-2.png) ![Lighthouse report for desktop Contact page](assets/images/readme-images/lighthouse-desktop-3.png)

### Code validation
- HTML <br> I validated the HTML code with W3C and found 2 errors in the meta description. The typos were easily corrected. The finished version has no errors.

- CSS <br> I validated the CSS code with (Jigsaw) validator and found 1 error in the margin of the name styles in the header. I decided that this style wasn't working anyway, and deleted the line. The finished version has no errors.

## Deployment
This website was deployed on GitHub pages. <br>
The live link can be found [here](https://emilyrosenberg.github.io/emily-rosenberg/index.html).

## Screenshots

### During development
I added intitial html and styles in a different color scheme, but after I found a meaningful background image, I updated the colors. This was the initial style: ![Initial muted colors](assets/images/readme-images/initial-colors.png) <br>
Initially, the footer was at the bottom of the content, as in the Love Running Project. I wanted it to be visible all the time, so that the user could always see the contact options. This was the previous design: ![Scroll to footer](assets/images/readme-images/footer-hidden.png) <br>
The text was left-justified, and I was not happy with the way it looked on larger screens. My mentor suggested centering it. This was the original style: ![Scroll to footer](assets/images/readme-images/left-justified-text.png)

### Finished site
These are screenshots of the finished site: <br>
![Index](assets/images/readme-images/screenshot-index.png) ![Index](assets/images/readme-images/screenshot-about.png) ![Index](assets/images/readme-images/screenshot-about-2.png) ![Index](assets/images/readme-images/screenshot-about-3.png) ![Index](assets/images/readme-images/screenshot-contact.png) ![Index](assets/images/readme-images/screenshot-contact-2.png) ![Index](assets/images/readme-images/screenshot-success.png) ![Index](assets/images/readme-images/screenshot-error.png)


## Credits
- I used code from the Love Running Walkthrough Project extensively to outline this project. As the project progressed, I was able to replace much of that code with my own code. The structure and styling of several areas, including the navigation bar and the contact form, remain very close or identical to code from the walkthrough project. These are credited more specifically in the style sheet. <br>
- I was able to solve problems with help from Stack Overflow, FreeCodeCamp, and MakeUseOf. <br>
- I used [this readme](https://github.com/marcin-kli/MP1/blob/Milestone-Projects/README.md#annies-portfolio-website) by Annie O'Donahoe as a framework for writing my readme.
- I would like to thank my Code Institute mentor, Adegbenga Adeye, for reassurance, support, and extra resources. <br>
- Thanks to my Cohort Facilitator, David Calikes, for advice about how to create an MVP on the "fast track." <br>
- And I'm also thankful to my teachers at the Digital Career Institute who patiently guided me through the basics for the first time, earlier this year. -->