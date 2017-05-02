# Cache-Busting-Grunt-Nodejs
Cache-Busting using Grunt and Nodejs

Web applications often run the problem of zombie cached references to .css and .js files in the enduser's machines. In order to give seamless updates made to these file types we need a mechanism to bust out the cached css and js whenever there is a change in the content of these files. The Cache busting approach enables the application to name the .js and .css files with the sha5 hashcode of the contents to the name of the file in the following format
	
	filename.sha5hashcode.js
	filename.sha5hashcode.css

When the file contents changes the sha5 hashcode of the file changes and thus the index.html file will be updated with the new references to these files there by busting the cached files. Doing so will enable the users of the web application to receive latest updates all the time.

Steps to run the application

1. Open index.html
2. Check the references for css and js files in the head tag of the html
		scripts/style.css
		scripts/Js/script.js
3. Run build.bat file in Bundle folder
4. Check the index.html will have updated references to css and js files.
	scripts/style.randomhashcode.css
	scripts/Js/script.randomhashcode.js
