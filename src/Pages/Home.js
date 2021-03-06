//This is home page, It will contains all the sections require in this page.

//Import all the require sections here
import Frontpage from "../Sections/frontPage/Frontpage";
import HeroSection from "../Sections/Hero/index";
import About from "../Sections/About/index";
import Services from "../Sections/Services/index";
import Testimonials from "../Sections/Testimonials/index";
import styled from "styled-components";
import ContactDetails from "../Sections/ContactDetails/index"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const Home = () => {
  return (
    <Container>
     <Frontpage />
      <HeroSection />
      <About />
      <Services />
      <Testimonials />
      <ContactDetails/>
    </Container>
  );
};

export default Home;
