import { useEffect, useState } from "react";

const FeedbackList = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await fetch("http://localhost:8000/feedback");
        const data = await res.json();
        setFeedback(data);
      } catch (err) {
        console.err(err.message);
      }
    };
    fetchFeedback();
  }, []);
  return (
    <section>
      <h3>FeedBack Received</h3>
      {feedback.length === 0 ? (<p>No feedback yet.</p>) : (
        feedback.map(item => (
            <div key={item._id}>
                <p>{item.name}</p>
                <p>{item.email}</p>
                <p>{item.message}</p>
                <p>{new Date(item.createdAt).toLocaleString()}</p>
            </div>
        ))
      )}
    </section>
  );
};

export default FeedbackList;
