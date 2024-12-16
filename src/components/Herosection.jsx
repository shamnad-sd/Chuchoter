import chocolateImage from '../assets/Images/chocolate.png';
import titleChocolate from '../assets/Images/titlechocolates.png';
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'
import '../styles/herosection.css';

const HeroSection = () => {

  useEffect(()=>{
          Aos.init({
              duration: 2000,
              easing: "ease-in-out",
          });
      })

  return (
    <section className="bg-[#FFF9F1] text-[#C59D5F] h-screen flex items-center p-32">
      <Container>
        <Row>
          <Col lg='6' md='6' data-aos="fade-down">
            <div className="title__section">
              <h1>
                Your destination for exquisite gifts and treats.
              </h1>
              <img 
                className="mb-8" 
                src={titleChocolate} 
                alt="" 
              />
              <p className="mb-8">
                Lorem ipsum dolor sit amet consectetur. Mauris sed pretium tellus ut
                auctor arcu. Ornare morbi elit vitae porttitor quis hendrerit
                euismod enim urna.
              </p>
              <motion.button 
                whileHover={{ scale: 0.9 }} 
                className="shopnow__btn"
              >
                SHOP NOW
              </motion.button>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="img__section" data-aos="fade-left">
              <img 
                src={chocolateImage} 
                alt="Chocolates"
                className="max-w-full h-auto"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;