# Magic 8-Ball Project

## Intro:
This is a webpage written in html, javascript, and css with all code developed in-house. The page that simulates the typical predictive 8-ball where there are canned responses which are randomly selected to answer a user’s question.

## How to Use:
The usage of this program is simple; open up the webpage and type in your query. Then shake the ball to get your result.

## Code Docs:
- index.html  
  This is the html for the webpage itself containing the web elements
- style.css  
  This is the styling sheet containing the information needed to style the webpage
  - .ballwrapper  
    This styles the entire ball
  - #ball  
    This is responsible for drawing the ball itself
  - .ballbackground  
    This is the background image/styling for the ball
  - .answer  
    This formats where the ball provide’s its answers
  - .graphic  
    This is the graphical formatting for images on the ball
  - .instructions  
    **I have no idea who wrote this**
- script.js  
    This is the javascript source file containing all the javascript code for the webpage 
  - responses[]  
    This contains an array of canned responses for the 8-ball
  - predict()
    This function is responsible for displaying the 8-ball prediction in the 8-ball