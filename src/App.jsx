import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Inner from "./pages/Inner/Inner.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inner" element={<Inner />} />
    </Routes>
  );
}
