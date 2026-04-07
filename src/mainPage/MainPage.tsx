import { Route, Routes } from "react-router";
import { Body } from "./Body";
import { SideBarButtons } from "./SideBar";
import ResumePdfDisplay from "../resume/ResumePdfDisplay";

function MainPage() {
  return (
    <div className="flex max-h-screen min-w-screen">
      <SideBarButtons />
      <div id="content" className="w-full">
        <Routes>
          <Route path="/">
            <Route index element={<Body />} />
            <Route path="resume" element={<ResumePdfDisplay />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default MainPage;
