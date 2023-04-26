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
    
  - .answer  
    
  - .graphic  
    
  - .instructions

  - @keyframes move-clouds1: Animation that moves an object from the left edge of the screen to the right edge, starting and ending offscreen. Meant to be used on an element of the "cloud" class.

  - @keyframes move-clouds2: Animation that moves an object from the right edge of the screen to the left edge, starting and ending offscreen. Meant to be used on an element of the "cloud" class.

  - .cloud: A class for a cloud object that the 'move-clouds1' or 'move-clouds2' animation should be used on. Has an opacity value of 0.4 to simulate the translucent nature of real clouds. It's position is set to absolute, and it has a z-index of -1 so it travels behind other elements and doesn't interfere with their function. The cloud class should be used on a img element with an image of a cloud, and the position from the top should be specified in inline CSS for each element of class cloud. The inline CSS should also have 'move-clouds1 Xs linear infinite' or 'move-clouds2 Xs linear infinite' in it, where X is a positive integer.
    
- script.js  
    
  - responses[]  
    
  - predict()
  
  - typeResponse()

  - ball/document EventListeners
    
