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
    <section>
      <form onSubmit={handleSubmit}>
        <h2>Submit Your Feedback</h2>
        {success && <p>{success}</p>}
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Feedback"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default FeedbackForm;
