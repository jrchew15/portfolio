import { Container } from "../common/Container";
import { Body } from "./Body";
import { SideBarButtons } from "./SideBar";

function MainPage() {
  return (
    <Container className="flex max-h-screen">
      <SideBarButtons />
      <Body />
    </Container>
  );
}

export default MainPage;
