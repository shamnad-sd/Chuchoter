import moreImg from '../assets/Images/more.png';
import { motion } from "framer-motion";
import { Col, Container, Row } from "reactstrap";
import '../styles/story.css'

const Story = () => {
    return (
        <div>
            <section className="story__section">
                <h2 className="story__title">
                    FOUNDED ON QUALITY, CHUCHOTER HAS DELIGHTED CUSTOMERS. EXPLORE OUR STORY.
                </h2>
                <Container>
                    <Row>

                        <Col lg='12'>
                            <p className="story__description">
                                Established in 1989, Chuchoter is synonymous with quality and excellence. Over the years, we
                                have delighted customers with our commitment to craftsmanship and attention to detail. Our
                                journey is a testament to our passion for creating unforgettable experiences through handcrafted
                                chocolates, exquisite flower arrangements, decadent cakes, and expert event planning services.
                            </p>

                            <a href="#more" className="story__more">
                                <motion.img whileHover={{scale:0.9}} src={moreImg} alt="" />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Story;
