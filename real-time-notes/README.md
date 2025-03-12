
# **Real-Time Collaborative Notes**

A real-time web application built with the MERN stack (MongoDB, Express.js, React, and Node.js) and **Socket.io** for real-time communication. This application allows multiple users to collaborate on shared notes in real time.

---

## **Features**

- **Real-Time Editing**: Multiple users can edit the same note simultaneously, with changes reflected in real time.
- **Room-Based Collaboration**: Users can join specific rooms to collaborate on shared notes.
- **User List**: Displays a list of online users in the current room.
- **Notifications**: Notifies users when someone joins or leaves the room.
- **Persistent Notes**: Notes are saved to a MongoDB database and can be retrieved later.

---

## **Technologies Used**

- **Frontend**: React, Socket.io Client
- **Backend**: Node.js, Express.js, Socket.io
- **Database**: MongoDB
- **Deployment**: Render (Backend), Vercel (Frontend)

---

## **Setup Instructions**

### **Prerequisites**

- Node.js and npm installed on your machine.
- MongoDB Atlas account or a local MongoDB instance.

---

### **1. Clone the Repository**

```bash
git clone https://github.com/your-username/real-time-notes.git
cd real-time-notes
```

---

### **2. Backend Setup**

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` folder and add your MongoDB connection string:
   ```
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/real-time-notes?retryWrites=true&w=majority
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

---

### **3. Frontend Setup**

1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

### **4. Testing**

1. Open multiple browser tabs or windows.
2. Navigate to `http://localhost:3000` in each tab.
3. Join the same room (e.g., `room1`).
4. Start editing the note in one tab and observe real-time updates in the other tabs.
5. Check the user list to see who is currently online in the room.

---

## **Key Concepts**

### **1. WebSockets and Socket.io**
- **WebSockets** enable real-time, bidirectional communication between the client and server.
- **Socket.io** is a library that simplifies working with WebSockets and provides additional features like rooms and namespaces.

### **2. Rooms**
- Rooms allow you to group users and broadcast messages to specific groups.
- In this project, each note is associated with a room, and users in the same room can collaborate on the same note.

### **3. Real-Time Updates**
- When a user edits a note, the changes are sent to the server via Socket.io.
- The server broadcasts the changes to all other users in the same room.

### **4. User Tracking**
- The server tracks users in each room and notifies other users when someone joins or leaves.

---

## **Project Structure**

### **Backend**
```
backend/
├── server.js            
├── models/
│   └── Note.js          
├── controllers/
│   └── noteController.js 
├── routes/
│   └── noteRoutes.js    
└── config/
    └── db.js           
```

### **Frontend**
```
frontend/
├── src/
│   ├── components/
│   │   ├── NoteEditor.js 
│   │   └── UserList.js   
│   ├── App.js            
│   ├── index.js          
│   └── socket.js         
└── public/               
```

---

## **Deployment**

### **Backend**
1. Push the backend code to a GitHub repository.
2. Deploy to a cloud service like **Render** or **Heroku**.
3. Update the `.env` file with the production MongoDB URI.

### **Frontend**
1. Push the frontend code to a GitHub repository.
2. Deploy to **Vercel** or **Netlify**.
3. Update the `socket.js` file to connect to the deployed backend URL.

---

## **Contributing**

Contributions are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request.

---

