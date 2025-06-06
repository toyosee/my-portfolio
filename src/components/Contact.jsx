import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.send(
          "your_service_id",
          "your_template_id",
          formData,
          "your_user_id"
        ).then(
          (response) => {
            alert("Message sent successfully!");
          },
          (error) => {
            alert("Failed to send message.");
          }
        );
      };
    
    

  return (
    <Container className="contact-container mt-2">
      <Row className="align-items-stretch">
        {/* Information Section */}
        <Col md={6} className="info-section me-1 mb-1 new">
          <div style={{ padding: '20px', color:'white'}}>
          <h1 style={{color:'white' }}>Contact Me</h1>
          <p style={{color:'white' }}>If you have any questions, feel free to reach out!</p>
          <p style={{color:'white' }}>I will respond to your inquiries as soon as possible.</p>
          </div>
        </Col>

        {/* Form Section */}
        <Col md={6} className="form-section new">
          <Form className="p-4 rounded shadow" onSubmit={handleSubmit}>
            <Form.Group className='mb-2'>
              <Form.Label>Name:</Form.Label>
                          <Form.Control
                              type="text"
                              placeholder="Enter your name"
                              name='name'
                              onChange={handleChange}
                              required />
            </Form.Group>

            <Form.Group className='mb-2'>
              <Form.Label>Email:</Form.Label>
                          <Form.Control
                              type="email"
                              placeholder="Enter your email"
                              name='email'
                              onChange={handleChange}
                              required />
             </Form.Group>
            
            <Form.Group className='mb-2'>
              <Form.Label>Subject:</Form.Label>
                          <Form.Control type="text"
                              placeholder="Enter the subject"
                              name='subject'
                              onChange={handleChange}
                              required />
            </Form.Group>

            <Form.Group className='mb-2'>
              <Form.Label>Message:</Form.Label>
                          <Form.Control
                              as="textarea"
                              rows={3}
                              placeholder="Enter your message"
                              name='message'
                              onChange={handleChange}
                              required />
            </Form.Group>

            <Form.Group className='mb-2'>
              <Form.Label>Phone Number:</Form.Label>
                          <Form.Control
                              type="tel"
                              placeholder="Enter your phone number"
                              name='phoneNumber'
                              onChange={handleChange}
                              required />
            </Form.Group>

            <Button variant="" type="submit" className="w-100 new">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;