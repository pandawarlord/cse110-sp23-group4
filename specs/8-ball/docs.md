# Magic 8-Ball Project

## Intro:


## How to Use:


## Code Docs:
- index.html  
  
- style.css  

  - .ballwrapper  
    This is styling for the element containing the ball itself. It is used for placing
    the 8-ball on the screen relative to the size of the user window

  - #ball  
    This is the styling for the 8-ball itself. The 8-ball was drawn purely by CSS and
    box shadows were used to set concentric rings around the center of the 8 ball. 

  - .input-text-div  
    This centers the question text and input text box in the middle of the screen by making it a block element and centering all text and items. 

  - @font-face  
    Imports the font "AlmendraSC-Regular" to use in the output text box. This is a more mystical font that matches the theme better than the standard serif font.  
  
  - .answer  
    Styles the output text located in the middle of the 8-ball to match the theme of the ball and the overall page (orange, dark, mystical). Centers it in the middle of the 8-ball and uses a different font that matches the theme (AlmendraSC-Regular).
    
  - .instructions  
    Styles the instructions to the user for how to obtain their answer from the 8-ball. Consists of
    just positioning and font changes
  
  - @keyframes move-clouds1
    Animation that moves an object from the left edge of the screen to the right edge, starting and ending offscreen. Meant to be used on an element of the "cloud" class.

  - @keyframes move-clouds2
    Animation that moves an object from the right edge of the screen to the left edge, starting and ending offscreen. Meant to be used on an element of the "cloud" class.

  - .cloud
    A class for a cloud object that the 'move-clouds1' or 'move-clouds2' animation should be used on. Has an opacity value of 0.4 to simulate the translucent nature of real clouds. It's position is set to absolute, and it has a z-index of -1 so it travels behind other elements and doesn't interfere with their function. The cloud class should be used on a img element with an image of a cloud, and the position from the top should be specified in inline CSS for each element of class cloud. The inline CSS should also have 'move-clouds1 Xs linear infinite' or 'move-clouds2 Xs linear infinite' in it, where X is a positive integer.
    
- script.js  
    
  - responses[] 
    This contains an array of canned responses for the 8-ball. There are 20 total and they
    are the standard Magic 8-Ball answers 
    
  - predict()
    This function is responsible for displaying the 8-ball prediction in the 8-ball. We generate
    a random unmber in the range of 1 to 20 and use that as an index to determine which answer to 
    reveal to the user from the responses array
  
  - typeResponse()
    Function to print 8-Ball answer one character at a time as if it is being typed. We separate
    the characters and then print them individually one after the other with a predetermined rate

  - ball/document EventListeners
    