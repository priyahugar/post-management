# Post Management System (Mini CRUD App)

## About the Project
This is a Mini CRUD (Create, Read, Update, Delete) application built with React.  
It allows users to manage posts like a small blog admin panel using *localStorage*.  
All posts persist even after the page is reloaded.

*Stack Used:* React + localStorage  
*Purpose:* Learn CRUD operations, state management, routing, and form validation in React.

## Features
- View a list of posts with title, author, date, and short excerpt
- Create new posts with validation for title, author, and content
- View full post details including tags and timestamps
- Edit existing posts
- Delete posts
- Client-side search and filter (optional)
- Data persistence using localStorage

## Screenshots

### Post List (10 Seed Posts)
![Post List 1](screenshots/post-list-1.png)
![Post List 2](screenshots/post-list-2.png)
![Post List 3](screenshots/post-list-3.png)
![Post List 4](screenshots/post-list-4.png)

### Create Post
![Create Post Form Empty](screenshots/create-post-empty.png)
![Create Post Form Filled](screenshots/create-post-filled.png)
![Post Added in Post List](screenshots/post-added-postlist.png)

### View Post
![View Post Details](screenshots/view-post.png)

### Edit Post
![After Clicking Edit](screenshots/edit-post-button.png)
![After Updating Post](screenshots/post-updated-postlist.png)

### Delete Post
![Before Delete](screenshots/post-before-delete.png)
![After Delete](screenshots/post-after-delete.png)

## Installation and Running
Clone the repository:  
git clone <your-repo-url>  
Navigate to the project folder:  
cd post-management  
Install dependencies:  
npm install  
Start the app:  
npm run dev  
Open your browser at http://localhost:5173 (Vite) 

## How to Use
- *View Posts:* Home page displays all posts.  
- *Create Post:* Click "Create Post", fill the form, and submit.  
- *View Post Details:* Click a post to see full content, tags, and timestamps.  
- *Edit Post:* Click the "Edit" button, update fields, and submit.  
- *Delete Post:* Click the "Delete" button to remove a post.
