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
    
- script.js  
    
  - responses[] 
    This contains an array of canned responses for the 8-ball. There are 20 total and they
    are the standard Magic 8-Ball answers 
    
  - predict()
    This function is responsible for displaying the 8-ball prediction in the 8-ball. We generate
    a random unmber in the range of 1 to 20 and use that as an index to determine which answer to 
    reveal to the user from the responses array
  
  - typeResponse()

  - ball/document EventListeners
    