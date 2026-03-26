import { Container } from "../common/Container";
import { Body } from "./Body";
import { SideBarButtons } from "./SideBar";

function MainPage() {
  return (
    <Container className="flex min-h-70">
      <SideBarButtons />
      <Body />
    </Container>
  );
}

export default MainPage;
