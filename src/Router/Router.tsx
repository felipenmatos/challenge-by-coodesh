import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/App";
import PageConcluded from "../Pages/PageConcluded";
import PageHome from "../Pages/PageHome";
import PageRegister from "../Pages/PageRegister";

function RouterPages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<PageRegister />} />
        <Route path="/Concluded" element={<PageConcluded />} />
        <Route path="/Home" element={<PageHome />} />
      </Routes>
    </Router>
  );
}

export default RouterPages;
