import { useState } from "react";

const FeedbackForm = ({ onFeedbackSubmit }) => {
  const [formData, setFormDate] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormDate({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("All field are required!");
      return;
    }

    const res = await fetch("http://localhost:8000/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSuccess("Feedback submitted successfully!");
      setFormDate({ name: "", email: "", message: "" });
      onFeedbackSubmit();
      setTimeout(() => setSuccess(""), 3000);
    }
  };
  return (
    <section className="my-10 bg-gradient-to-br from-red-100 to-pink-200 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center text-red-700 mb-6">
          Submit Your Feedback
        </h2>
        {success && <p>{success}</p>}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-300"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-300"
        />

        <textarea
          name="message"
          placeholder="Your Feedback"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-300"
        />

        <button
          type="submit"
          className="w-full bg-red-600 text-white font-semibold py-2 rounded hover:bg-red-700 transition duration-300 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default FeedbackForm;
