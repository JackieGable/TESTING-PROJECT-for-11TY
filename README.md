# Testing Project for 11ty

This is a basic minimal setup to test if sass is compiling as expected. 

1. You will need to have a few packages installed to run the basics. To get started, open the terminal, type this at the command prompt then press enter. The necessary packages will install and a package-lock.json file will be created. 

 `npm install`

2. Open the src/sass/main.scss file and add some sass to test. 

3. Open the index.html file and add the html. Be sure to include the classes that you intend to test. 

4. Run the program: In the terminal, type this and press enter:
 
 `npm run start`

5. The project should build and then open a dev Server at http://localhost:8080/

6. Verify that live reload is working by making some changes to the src/sass/main.scss file and you should see it change immediately in the browser. 


### Files not required

Several files have been added for convenience but are not required to run 11ty. If you choose not to delete them, it shouldn't break anything. The files are:
.editorconfig
.eleventyignore
.eslintrc.js
.htmlhintrc

### What about the _NOTES folder?

I use this folder as a storage space for stuff that I might need but don't want to become part of the project. 