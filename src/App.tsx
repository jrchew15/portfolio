import { Routes, Route } from "react-router";
import MainPage from "./mainPage/MainPage";
import ResumePdfDisplay from "./resume/ResumePdfDisplay";

function App() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="resume" element={<ResumePdfDisplay />} />
    </Routes>
  );
}

export default App;
