import { Routes, Route, Link } from "react-router-dom";
import Principal from "./Pages/Principal/Principal";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Principal />} />
      </Routes>
    </div>
  );
}

export default App;
