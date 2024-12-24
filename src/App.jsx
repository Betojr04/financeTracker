import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Navbar from "./components/Global/Navbar";

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    </>
  );
};

export default App;
