***********************INTERVIEW_ASSIGNMENT*************************
Author: Anton Terekhovskyy
Date: Apr 28, 2016
email: terekhoa@mail.uoguelph.ca
********************************************************************
IMPORTANT
**********
    -> the node_modules directory is too large to be uploaded
        to github, and therefore is omitted, dependencies are still listed in package.json

    -> the .js scripts and .sass stylesheets have been compiled/bundled
        prior to submission
        
Application info, and expected behaviour
*****************************************
    -> as specified, the application will recognize the email/password combination:
        email: jeff@focus21.io
        password: makeithappen
        
    -> for the purpose of consistency with the images at zeplin.io
            the Login2 display will display email as 'jeff_aramini@ihealthsolutions.net'
            instead of the valid 'jeff@focus21.io'
            
    -> on the Login1 screen the 'Next' button will shake if the password or email do not match
    
    -> user will proceed to Login2 iff both password and email match the expected
    
    -> Login2 requires the user to confirm the password (makeithappen)
        -> if the password does not match the submit button will shake
        -> if the password matches the user will proceed to the Apps screen
        
App structure
*****************

    -> the images used in the app are contained in /Assets/ subdirectory
    -> all source code (.js, .sass) are contained in /src/ subdirectory
        -> information on the contents of individual .sass files
            is given in the /src/Stylesheets/main.sass
    -> compiled .css and webpacked scripts files are contained in /build/ subdirectory
    -> enzyme tests are contained in /tests/ subdirectory
        -> the tests can be run by: 'npm run tests' from the root directory
    