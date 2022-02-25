import styled from "styled-components";

const Container = styled.div`
  @media only screen and (max-width: 767px) {
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    padding: 1rem;
  }

  @media only screen and (min-width: 768px) {
    bottom: 0;
    padding: 4rem;
    position: absolute;
  }

  h1 {
    border: 1px solid #eeffff;
    display: inline-block;
    margin-bottom: 2rem;
    padding: 0.45rem 0.75rem;
  }
`;

const ProfileCard = () => (
  <Container>
    <div>
      <h1>Peter Bust</h1>
      <h2>Senior front-end developer favoring React</h2>
      <p>
        Eindhoven, The Netherlands
        <br />
        <br />
        See{" "}
        <a
          href="https://www.linkedin.com/in/peter-bust-035b733a/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        or <a href="mailto:info@peterbust.dev">info@peterbust.dev</a>
      </p>
    </div>
  </Container>
);

export default ProfileCard;
