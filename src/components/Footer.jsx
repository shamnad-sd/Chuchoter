import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <div className="footer__top"></div>
          <Col xs="12" sm="6" md="4" lg="2">
            <h3>SITEMAP</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <h3>CHOCOLATES</h3>
            <ul>
              <li>Chocolate Boxes</li>
              <li>Chocolate Trays</li>
              <li>Flower Chocolate Combo</li>
              <li>Chocolate Perfume Combo</li>
            </ul>
          </Col>
          <Col xs="12" sm="6" md="4" lg="4">
            <h3>FLOWERS</h3>
            <ul>
              <li>Flower Bouquets</li>
              <li>Flower Arrangement In Vase</li>
              <li>Flower Arrangement In Baskets</li>
              <li>Exotic/ Unique Flower Arrangements</li>
              <li>Flower Perfume Arrangements</li>
              <li>Flower Chocolate Bouquets</li>
            </ul>
          </Col>
          <Col xs="12" sm="6" md="4" lg="2">
            <h3>CAKES</h3>
            <ul>
              <li>Exotic Cakes</li>
            </ul>
          </Col>
          <Col xs="12" sm="6" md="4" lg="1">
            <h3>EVENTS</h3>
            <ul>
              <li>Graduation</li>
              <li>Birthdays</li>
              <li>Anniversary</li>
              <li>Engagement</li>
              <li>Gifts Corporate</li>
              <li>Loved Ones</li>
              <li>Celebration</li>
              <li>Love</li>
            </ul>
          </Col>
        </Row>
        
        
        <div className="footer__bottom">
          <p>All Rights Reserved 2024</p>
          <div className="social__links">
            <a href="">Instagram</a>
            <a href="">Facebook</a>
            <a href="">Pinterest</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;