import { Container } from "../common/Container";

export const Body = () => {
  const blurb = `Full Stack Software Engineer with a background in theoretical Mathematics.`;

  return (
    <Container>
      <h1 className="text-4xl">Jason Chew</h1>
      <h3 className="text-2xl">{blurb}</h3>
    </Container>
  );
};
