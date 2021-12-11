import styled, { keyframes } from "styled-components";
import wave from "../../assets/waves.svg";
import rocket from "../../assets/rocket image.png";
// import human from "../../assets/human.jpg";
import hand from "../../assets/hand.svg";
import graph from "../../assets/graph.gif"
import "./About.css"
import aboutBrain from "../../assets/aboutBrain.png"
import aboutHandshake from "../../assets/aboutHandshake.png"
import aboutCustomer from "../../assets/aboutCustomer.png"
import aboutCaring from "../../assets/aboutCaring.png"
import aboutFrugality from "../../assets/aboutFrugality.png"


const AboutSection = styled.section`
  background-color:  #14104a;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Waves = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: -1rem;
`;

const Main = styled.div`
  margin: 0 15rem;
  margin-top: 22rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  display: inline-block;
  color:white;
`;

const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: solid 5px var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 40%;
  padding-bottom: 5rem;
  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`;

// const Human = styled.div`
//   width: 50%;
//   position: absolute;
//   right: 0;
//   bottom: 100%;

//   @media only Screen and (max-width: 40em) {
//     display: none;
//   }
// `;
const Text = styled.h4`
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: #f7f7f7;
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.5rem;
  margin-top: 1rem;
`;
const AboutText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Waves src={wave} alt="" />
      <Main>
        <div>
          <Title>About Us</Title>
          <CurvedLine />
        </div>
        <Content>
          <Rocket>
            <img src={graph} alt="" width="400" height="400" />
          </Rocket>
          <AboutText>
            {/* <Human>
              <img src={human} alt="" width="400" height="400" />
            </Human> */}

            <Text>
              We help our customers to tell about themselves, to grow and stand
              out in an increasingly competitive digital world, through creative
              projects that are able to attract and involve, creating strategic
              value.
            </Text>
            <div>
              <Circle style={{ backgroundColor: "var(--purple)" }} />
              <Circle style={{ backgroundColor: "var(--pink)" }} />
              <Circle style={{ backgroundColor: "var(--black)" }} />
            </div>
          </AboutText>
        </Content>
      </Main>
      <div className="About-content About-row">
      <div className="About-value-title col-lg-12 col-sm-12 ">
      <Title>VALUES
      <span className="About-usderLine"></span>
      </Title>
    
      </div>
      <div className="col-sm-12 col-lg-4">
      <div className="About-values-box">
        <div className="values-box-img">
          <img src={aboutBrain} alt="think"/>
        </div>
<h5 className="About-h5">Think Big</h5>
<p className="About-p">Think 100x. Use technology for non-linear growth. Failure and experimentation are essential for growth </p>
        </div>
      </div>
      <div className="col-sm-12 col-lg-4">
      <div className="About-values-box">
        <div className="values-box-img">
          <img src={aboutHandshake} alt="hand shake"/>
        </div>
<h5 className="About-h5">Fair, Fast & Founder friendly</h5>
<p className="About-p">Be partner of choice, who is ethical, transparent and collaborative </p>
        </div>
      </div>
      <div className="col-sm-12 col-lg-4">
      <div className="About-values-box">
        <div className="values-box-img">
          <img src={aboutCustomer} alt="Customer delight"/>
        </div>
<h5 className="About-h5">Customer delight</h5>
<p className="About-p">"Customer love matters. Each of our brands needs to be in the top decile of customer experience"</p>
        </div>
      </div>
      <div className="col-sm-12 col-lg-4">
      <div className="About-values-box">
        <div className="values-box-img">
          <img src={aboutCaring} alt="Caring Meritocracy"/>
        </div>
<h5 className="About-h5">Caring Meritocracy</h5>
<p className="About-p">"Attract and grow the best talent. Create an inclusive culture where the best ideas win and you have the obligation to engage and dissent"</p>
        </div>
      </div>
      <div className="col-sm-12 col-lg-4">
      <div className="About-values-box">
        <div className="values-box-img">
          <img src={aboutFrugality} alt="Frugality"/>
        </div>
<h5 className="About-h5">Frugality</h5>
<p className="About-p">"We are frugal with capital and use innovation to grow our brands in a sustainable manner"</p>
        </div>
      </div>
      </div>
      
      
    </AboutSection>
  );
};

export default About;
