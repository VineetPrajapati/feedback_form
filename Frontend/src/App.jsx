import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => setRefresh(!refresh);
  return <section className="h-screen w-full bg-gray-300">App
  <FeedbackForm onFeedbackSubmit={handleRefresh} />
  <FeedbackList key={refresh}/>
  </section>;
};

export default App;
