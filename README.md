# Fullstack Chat App

This repository contains a **Fullstack Chat Application** built using modern web technologies. It allows users to register, log in, and engage in real-time conversations with other users. The application is designed to be highly interactive, with features such as real-time messaging, user authentication, and responsive design.

## Features

1. **Real-Time Chat**: 
   - Users can send and receive messages instantly. The app uses **Socket.io** for real-time communication, ensuring seamless interactions between users without page refreshes.
   
2. **User Authentication**:
   - The app supports user registration, login, and logout functionality. It uses **JWT** (JSON Web Tokens) for secure authentication and session management.
   
3. **Private & Group Chats**:
   - Users can chat one-on-one or create group chats. This feature allows for versatile communication between individuals and groups.

4. **Responsive Design**:
   - The app is mobile-friendly, ensuring a smooth user experience across different devices.

5. **User Profile**:
   - Each user has a profile, where they can view their personal information, including their username and email.

6. **Notifications**:
   - Users receive notifications for new messages, ensuring they never miss a conversation.

7. **Backend**:
   - The backend is built with **Node.js** and **Express**, handling all the server-side logic, including managing users and messages.
   
8. **Database**:
   - The app uses **MongoDB** for storing user data, messages, and other chat-related information. The database is connected via **Mongoose**.

9. **Socket.io**:
   - Socket.io is used to manage real-time connections and enable instant message delivery.

10. **Environment Variables**:
    - All sensitive data such as database URIs, JWT secrets, and other configurations are stored in `.env` files for security and easy customization.

---

## Technologies Used

- **Frontend**: React, Socket.io-client
- **Backend**: Node.js, Express, Socket.io
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: CSS, HTML (can be extended with frameworks like Tailwind CSS)

---

## How to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/prakhar051/fullstack-chat-app.git
   cd fullstack-chat-app
