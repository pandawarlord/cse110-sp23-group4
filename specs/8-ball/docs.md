# Magic 8-Ball Project

## Intro:


## How to Use:


## Code Docs:
- index.html  
  
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
    
- script.js  
    
  - responses[]  
    
  - predict()
  
  - typeResponse()
    The function takes in as input the string to animate the typing out the given string, which in the context of the project is the prediction result. The function uses an interval to update the content in the html page that holds the response (in this case the element with id="response") one character of the input string at a time until the end of the string.

  - ball/document EventListeners
    
