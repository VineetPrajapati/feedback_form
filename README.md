# 📋 Feedback Application

A simple full-stack Feedback Application built with **React**, **Express.js**, **MongoDB**, and **TailwindCSS**. Users can submit feedback stored in a MongoDB database and displayed on the frontend. Fully responsive and deployed on the cloud.

---

## 🧰 Tech Stack

- **Frontend:** React, TailwindCSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Deployment:** Vercel (Frontend), Render (Backend)

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
/feedback_form    
│── src/components/    # React + TailwindCSS frontend
│   ├── FeedbackForm.jsx
│   └── FeedbackList.jsx
│── App.js
│
└── /server/       # Node + Express backend
    ├── routes/feedbackRoutes.js
    ├── models/Feedback.js
    ├── config/db.js
    └── index.js
\`\`\`

---

## ⚙️ Installation Instructions

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/VineetPrajapati/feedback_form.git
cd feedback-form
\`\`\`

---

### 2. Setup Backend (Node.js + MongoDB)

\`\`\`bash
cd server
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
cd feedback_form
npm install
npm run dev
\`\`\`

The app will run at: \`http://localhost:5173\`  
Make sure the server is running on \`http://localhost:8000\`


---

## 🧑‍💻 Author

**Vineet Prajapati**  
📧 vineetprajapati2203@gmail.com 
🔗 [LinkedIn](https://www.linkedin.com/in/vineet-prajapati/)  
🔗 [Portfolio](https://vineet-portfolio-eight.vercel.app/)
