import { Route, Routes } from "react-router";
import { Container } from "../common/Container";
import { Body } from "./Body";
import { SideBarButtons } from "./SideBar";
import ResumePdfDisplay from "../resume/ResumePdfDisplay";

function MainPage() {
  return (
    <Container className="flex max-h-screen">
      <SideBarButtons />
      <div id="content" className="relative">
        <Routes>
          <Route path="/">
            <Route index element={<Body />} />
            <Route path="resume" element={<ResumePdfDisplay />} />
          </Route>
        </Routes>
      </div>
    </Container>
  );
}

export default MainPage;
