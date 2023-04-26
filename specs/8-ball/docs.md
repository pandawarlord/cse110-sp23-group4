# Magic 8-Ball Project

## Intro:


## How to Use:


## Code Docs:
- index.html

  - div class="clouds": Holds five img elements of class "cloud" that have a cloud image with a tranparent background. Each is assigned either "move-clouds1" or "move-clouds2" as a linear infinite animation, and different lengths of time for the animation. Different distances from the top are specified for each cloud.
  
- style.css  

  - .ballwrapper  
   
  - #ball  
    
  - .ballbackground  

  - .input-text-div  
    This centers the question text and input text box in the middle of the screen by making it a block element and centering all text and items. 

  - @font-face  
    Imports the font "AlmendraSC-Regular" to use in the output text box. This is a more mystical font that matches the theme better than the standard serif font.  
  
  - .answer  
    Styles the output text located in the middle of the 8-ball to match the theme of the ball and the overall page (orange, dark, mystical). Centers it in the middle of the 8-ball and uses a different font that matches the theme (AlmendraSC-Regular).

  - .graphic  
    
  - .instructions

  - @keyframes move-clouds1: Animation that moves an object from the left edge of the screen to the right edge, starting and ending offscreen. Meant to be used on an element of the "cloud" class.

  - @keyframes move-clouds2: Animation that moves an object from the right edge of the screen to the left edge, starting and ending offscreen. Meant to be used on an element of the "cloud" class.

  - .cloud: A class for a cloud object that the 'move-clouds1' or 'move-clouds2' animation should be used on. Has an opacity value of 0.4 to simulate the translucent nature of real clouds. It's position is set to absolute, and it has a z-index of -1 so it travels behind other elements and doesn't interfere with their function. The cloud class should be used on a img element with an image of a cloud, and the position from the top should be specified in inline CSS for each element of class cloud. The inline CSS should also have 'move-clouds1 Xs linear infinite' or 'move-clouds2 Xs linear infinite' in it, where X is a positive integer.
    
- script.js  
    
  - responses[]  
    
  - predict()
  
  - typeResponse()

  - ball.addEventListener('mousedown')
    On event user clicks on the eight ball, set up for shaking
    Do not allow shaking while the 8-ball is speaking.

  - document.addEventListener('mousemove')
    On event user moves mouse anywhere on webpage, move 8-ball
    too. This simulates shaking the 8-ball. Keep track of if
    the 8-ball has been shaken hard enough.

  - document.addEventListener('mouseup')
    On event user lets go of mouse, stop shaking the 8-ball.
    Return 8-ball to original place, and output response. Reset
    variables for next shaking.

  - Variables
    synth - Handler for text to speech
    response - Element for <p> used to output 8-ball response
    ball - Element for <div> that is the 8-ball
    ballDisplayOffset[] - array of 2 floats with original offset/position of 8-ball
    ballOffset[] - array of 2 floats with updated position of 8-ball
    isMoving - boolean indicating whether 8-ball has been shaken hard enough
    isDown - boolean indicating whether 8-ball is being pressed