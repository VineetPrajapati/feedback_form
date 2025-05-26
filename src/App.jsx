import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => setRefresh(!refresh);
  return (
    <section className="w-full bg-gradient-to-br from-red-100 to-pink-200 flex flex-col items-center justify-center">
      <FeedbackForm onFeedbackSubmit={handleRefresh} />
      <FeedbackList key={refresh} />
    </section>
  );
};

export default App;
