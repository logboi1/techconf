import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./view/login";
import "bootstrap/dist/css/bootstrap.min.css";
import Events from "./view/event";
import Programs from "./view/Programs";
import DashboardLayout from "./components/dashboardLayout/DashboardLayout";
import { useState } from "react";

function App() {
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<LoginPage />} />
  //     <Route path="/dashboard" element={<DashboardLayout />}>
  //       <Route path="dashboard/events" element={<Events />} />
  //       <Route path="dashboard/programs" element={<Programs />} />
  //       {/* Add routes for other API pages */}
  //     </Route>
  //   </Routes>
  // </BrowserRouter>

  // State to hold the user's code
  const [userCode, setUserCode] = useState("");
  // State to store the solution and explanation
  const [solution, setSolution] = useState("");
  const [explanation, setExplanation] = useState("");

  // Function to handle code submission
  const handleSubmit = async () => {
    try {
      // Make a request to your backend API with userCode
      const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: userCode }),
      });

      const data = await response.json();

      // Update the state with the solution and explanation
      setSolution(data.solution);
      setExplanation(data.explanation);
    } catch (error) {
      console.error("Error submitting code:", error);
      // Handle errors here
    }
  };

  return (
    <div className="App">
      <h1>Code Solver App</h1>
      <textarea
        value={userCode}
        onChange={(e) => setUserCode(e.target.value)}
        placeholder="Enter your code here..."
      />
      <button onClick={handleSubmit}>Submit Code</button>

      {solution && (
        <div>
          <h2>Solution:</h2>
          <pre>{solution}</pre>
        </div>
      )}

      {explanation && (
        <div>
          <h2>Explanation:</h2>
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
}

export default App;
