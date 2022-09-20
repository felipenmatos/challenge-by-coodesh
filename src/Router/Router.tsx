import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/App";
import PageConcluded from "../Pages/PageConcluded.jsx";
import PageHome from "../Pages/PageHome.jsx";
import PageRegister from "../Pages/PageRegister.jsx";
import PrivateRoute from "../PrivateRouter/PrivateRouter";

function RouterPages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<PageRegister />} />
        <Route path="/Concluded" element={<PageConcluded />} />
        <Route
          path="/Home"
          element={
            <PrivateRoute>
              <PageHome />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default RouterPages;
