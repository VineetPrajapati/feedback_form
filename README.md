# 📋 Feedback Application

A simple full-stack Feedback Application built with **React**, **Express.js**, **MongoDB**, and **TailwindCSS**. Users can submit feedback, which is stored in a MongoDB database and displayed on the frontend. Fully responsive and deployed on the cloud.

---

## 🧰 Tech Stack

- **Frontend:** React, TailwindCSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Deployment:** Help Required!

---

## ✨ Features

- ✅ Submit feedback with Name, Email, Subject, and Message
- ✅ View all submitted feedback as styled cards
- ✅ Form validation and success messages
- ✅ Clean, responsive design using TailwindCSS
- ✅ RESTful API for feedback submission and retrieval

---

## 📁 Project Structure

\`\`\`bash
/feedback-app
├── feedback-frontend/      # React + TailwindCSS frontend
│   ├── src/components/
│   │   ├── FeedbackForm.jsx
│   │   └── FeedbackList.jsx
│   └── App.js
│
└── feedback-backend/       # Node + Express backend
    ├── routes/feedbackRoutes.js
    ├── models/Feedback.js
    ├── config/db.js
    └── index.js
\`\`\`

---

## ⚙️ Installation Instructions

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/your-username/feedback-app.git
cd feedback-app
\`\`\`

---

### 2. Setup Backend (Node.js + MongoDB)

\`\`\`bash
cd feedback-backend
npm install
\`\`\`

Create a \`.env\` file:

\`\`\`env
PORT=8000
MONGO_URI=your_mongodb_atlas_connection_string
\`\`\`

Start the backend server:

\`\`\`bash
npm start
\`\`\`

---

### 3. Setup Frontend (React + TailwindCSS)

\`\`\`bash
cd feedback-frontend
npm install
npm run dev
\`\`\`

The app will run at: \`http://localhost:5173\`  
Make sure the backend is running on \`http://localhost:8000\`

---

## 🌐 Deployment

There are some problems while deploying backend 😔

- NEED HELP 

---

## 🧑‍💻 Author

**Vineet Prajapati**  
📧 vineetprajapati2203@example.com  
🔗 [LinkedIn](https://www.linkedin.com/in/vineet-prajapati/)  
🔗 [Portfolio](https://vineet-portfolio-eight.vercel.app/)