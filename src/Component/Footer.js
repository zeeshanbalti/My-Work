import React from 'react';
import { Layout, Row, Col } from 'antd';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import './footer.css';

const { Footer } = Layout;

function CustomFooter() {
  return (
    <Footer className="footer">
      <div className="container">
        <Row gutter={[16, 16]} justify="space-between">
          <Col lg={8} md={12} sm={24}>
            {/* <div className="logo">
              <img
                src="https://smit-event-seven.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.23caaf7f.png&w=640&q=75"Linklt="Logo"
                alt="Your Logo"
                className="img-fluid"
              />
            </div> */}
          </Col>
          <Col lg={8} md={12} sm={24}>
            <div className="social-links">
              <a href="https://www.facebook.com/your-facebook-url" target="_blank" rel="noopener noreferrer">
                <FacebookOutlined />
              </a>
              <a href="https://www.instagram.com/your-instagram-url" target="_blank" rel="noopener noreferrer">
                <InstagramOutlined />
              </a>
              <a href="https://twitter.com/your-twitter-url" target="_blank" rel="noopener noreferrer">
                <TwitterOutlined />
              </a>
              <a href="https://www.linkedin.com/in/your-linkedin-url" target="_blank" rel="noopener noreferrer">
                <LinkedinOutlined />
              </a>
            </div>
          </Col>
          <Col lg={8} md={12} sm={24}>
            <div className="contact-info">
              <p>
                <MailOutlined /> Email: example@example.com
              </p>
              <p>
                <PhoneOutlined /> Phone: +1 (123) 456-7890
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Footer>
  );
}

export default CustomFooter;
