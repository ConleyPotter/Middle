# [Middle](https://middle-potter.herokuapp.com/#/)

Middle is a clone of Medium.com, a site used by millions to express their knowledge of topics that may be of interest to others around the internet. Middle will seek to replicate Medium.com's styling, functionality, and structure to a greater or lesser extent. See the wiki for more information on the state shape and schema structure. There will be:

* User's who can sign in and sign out

* Users will be able to write stories and share them with the greater Middle audience. 

* Stories can have claps, somewhat like a "like" on other social sites. [FORTHCOMING]

## List of Features
* Users can sign up, log in, and log out of the site.
* Users visiting the site who do not wish to sign up for an account can use the "Guest Log In" feature to preview how to write an article.
* Users who are signed in my write new articles. 
  * Upon hitting submit, the user is redirected to the home page, where they can see their article in the index.
  * The article editor copy and pastes well:
  
  <img src="app/assets/images/copy-paste.gif" width="800px">
  
  * In the future, I plan to allow the user to change more than just the title and the text in the body, but also the cover_photo of the article, the byline, and the category. There are defaults right now that do not associate with the information provided in the title or body.

* On an article show page, the user will see their article, with all the inline
  styling changes they specified while writing the article.

## Future Develpoments Coming Soon: 
* Uploading your own profile/avatar image!
* Uploading your own cover-photo!
* Better and more consistent styling!
* More features in the article editor!
* Clap!
* Comments!

## Technologies Used / Approach
### Article Edit/New
* Over the last few days, I have really thrown myself into learning the ins and outs of DOM Manipulation as well as working with HTML, JSON, and other data types which present challenges when trying to compare the two. For to commit to the database, I need to convert the raw HTML into a string, in order to pass it in a JSON back to the rails backend and be stored in the PostGreSQL database. Allowing this to happen seemlessly was no small feat. 
* At one point I tried to use the DraftJS library to help me achieve what was mentioned above. I later took the pure JS and React approach to accomplish a very similar task. I used the conteneditable attribute on an HTML Div tag so that any text inside the div to allow the text and content to be edited by a user.
* When the user hits any of the edit buttons (a listener is fired when clicking outside of the div) the inline styling will change, because I use execCommand(styling, [Override Default | {BOOLEAN}], null) to execute a styling command on the document, so that wherever the user is typing, the line style is changed. These two tidbits of code are used in tandem to achieve this affect. 
### Article Index
* I am also quite proud of the way that the articles are displayed on the homepage, as this was my first time ever seeding a database using an Amazon S3 served seed bucket to populate a page with high quality images, always available and served dynamically. 
* In the future, I play to size the images on the index page in thumbnails so that they are uniform.
