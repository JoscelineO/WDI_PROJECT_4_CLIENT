# WDI-PROJECT-4

## Concept 

![concept-readme-pics](https://cloud.githubusercontent.com/assets/23361888/23900703/21f6bb24-08b2-11e7-8f2e-37499fe4671e.jpg)

### Introduction

This was the my final project whilst on the General Assembly Web Development Immersive Course. The assignment for this project was to create a authenticated app using Ruby on Rails and AngluarJS.  

Whilst working as a designer I was regularly asked to create moodboards either to share ideas with other creatives or to convey early ideas to clients. With this in mind for this project I wanted to create an app which allowed designers to create moodboards digitally.

### The App

On logging in to the app a user is presented with a list of their project titles. As they hover over a title the brief for that project appears below. From here the user can either click on a title to view and edit the projects moodboard or create a new moodboard. Once a user has created a moodboard they can add images found online by entering the image url and specifying an image size. 

To me it was extremely important that once a user had placed images onto a moodboard they were able to easily control the image's position. This would allow users to explore how different visuals work together. This is achieved by making the moodboard cover the full screen and allowing users to drag images to anywhere within this space. Once users left the moodboard images would be save to the position they were left in. 

### The Build 

To create the app I began by building out the backend API. To ensure this was a swift process I first planned out each of the models I would need and what relationships they would have. Once I was happy with this I used Ruby on Rails to build these resources. After this then next step was to step up the authentication using bcrypt and jwt. 

The front-end was build out using AngularJS. The first step was to create the register and login pages and put the authentication in place with angular jwt. Next I built out the form for a user to create a new moodboard, the page to display the users current moodboards and the form for users to add images to their boards. Once this was possible I made use of the interact.js package to allow users to dynamically control the placement of items on their moodboards and wrote a function to store the x and y positions of images once they removed the mouse from the image. 

### Successes

* It was really important to me that the user was able to dynamically move the images on the moodboard so I was really happy when this worked and even more please when I was able to save the position of the images.   

### Challenges

* Resolving issues with the interact.js and working out how to store image position.  

### Next Steps 

Having only had a week to completely this project I was not able to achieve all I would have liked, however this leaves plenty of room to develop the project further. 

Having given the user the ability to control the position of images on the moodboard I would next like to give them more control over the size of images. Ideally the user would be able to change the resize of images already on the board in the same way they can control an images position. Similarly it would be good if users could adjust the where the image sits on the z axis. Giving the user more control over the layering of images.   

Towards the end of the project I set up a call to the Unsplash API with the idea of allowing users the option to search for images from their resource. I would like to finish setting this up. 

Finally when I have both of the above in place I would like to give users the abitily to share their moodboards with users. 

