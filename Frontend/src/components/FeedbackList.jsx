import { useEffect, useState } from "react";

const FeedbackList = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/feedback`);
        const data = await res.json();
        setFeedback(data);
      } catch (err) {
        console.err(err.message);
      }
    };
    fetchFeedback();
  }, []);
  return (
    <section className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mt-8 mb-12">
      <h3 className="text-xl font-semibold text-center text-red-700 mb-6">
        FeedBack Received
      </h3>
      {feedback.length === 0 ? (
        <p className="text-gray-500 text-center">No feedback yet.</p>
      ) : (
        feedback.map((item) => (
          <div
            key={item._id}
            className="bg-pink-50 border border-pink-200 rounded-lg p-4 m-4 shadow-sm"
          >
            <p className="text-lg font-bold">{item.name}</p>
            <p className="text-sm text-gray-600 mb-2">{item.email}</p>
            <p className="text-gray-700 mb-2">{item.message}</p>
            <p className="text-xs text-gray-400 text-right">{new Date(item.createdAt).toLocaleString()}</p>
          </div>
        ))
      )}
    </section>
  );
};

export default FeedbackList;
