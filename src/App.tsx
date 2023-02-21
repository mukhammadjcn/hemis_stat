import { Home, NotFound } from "./pages";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* All pages rendered here */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
