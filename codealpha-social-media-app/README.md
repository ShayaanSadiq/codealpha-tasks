# Mini Social Media Platform

Welcome to my Mini Social Media Platform, a lightweight, fast, and responsive full-stack web application. This project allows users to register, create posts, view posts, like/dislike posts, and comment on others' posts, all with secure JWT-based authentication.

## Demonstration

### - Login Page

<img width="1919" height="870" alt="Screenshot 2025-09-15 033938" src="https://github.com/user-attachments/assets/705da95e-260b-4ec8-b33a-e282434a037a" />   

### - Register Page

<img width="1919" height="869" alt="Screenshot 2025-09-15 034111" src="https://github.com/user-attachments/assets/b11b676d-7b1c-49f1-91b8-7fd5850f258a" />

### - Create Post

<img width="1919" height="868" alt="Screenshot 2025-09-15 034046" src="https://github.com/user-attachments/assets/0bd56b7e-eb16-47df-9c99-98b761bdfe2d" />

### - View Posts / Feed

<img width="1919" height="868" alt="Screenshot 2025-09-15 034026" src="https://github.com/user-attachments/assets/27b7d67d-aac2-4c22-a085-6b0e98c577a3" />

## Table of Contents

1. [Introduction](#introduction)  
2. [Features](#features)  
3. [Technologies Used](#technologies-used)  
4. [Getting Started](#getting-started)  
5. [Usage](#usage)  
6. [Future Enhancements](#future-enhancements)  

## Introduction

This Mini Social Media Platform is a full-stack web application built with **HTML**, **CSS**, and **JavaScript** for the frontend, **Express.js** for the backend, and **MongoDB Compass** for database functionality.  
Users can register and log in, create posts, like and comment on posts, and interact with other users' content.  

The project serves as a foundation for building more advanced social networking applications.

## Features

- **User Authentication**: Register and log in with JWT-based secure authentication.  
- **Create Posts**: Users can write and publish posts.  
- **View Posts / Feed**: See all posts in a feed with the newest posts on top.  
- **Like / Dislike Posts**: Users can like posts to show appreciation.  
- **Comment on Posts**: Users can leave comments on posts.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB Compass

## Getting Started

### To get started, follow these steps:

1. Clone this repository.
2. Rename the .env.example file to .env and replace your jwt_token and mongo_uri.
3. Navigate to the `backend` folder and run:
   
   ```bash
   npm install
   npm run seed
   npm start
   ```
   This will start the backend server.
4. Open `frontend/index.html` in your browser.

## Usage

1. Register a new account or log in with seeded test users.  
2. Create posts from the "Create Post" page.  
3. View all posts in the feed.  
4. Like or comment on other 'posts.  
5. Log out using the "Logout" button in the navbar.  

## Future Enhancements

- **User Profiles**: Allow users to view and edit profiles.  
- **Post Media**: Add images or videos to posts.  
- **Notifications**: Notify users when someone likes or comments on their posts.  
- **Follow System**: Follow/unfollow users and see a personalized feed.  
- **Search & Hashtags**: Search for posts or users.  
- **Real-time Updates**: Use WebSockets for live feed updates.
