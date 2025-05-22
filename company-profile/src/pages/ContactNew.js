import React, { useState } from 'react';
import './ContactNew.css';
import { Container, Form, Button } from 'react-bootstrap';

function ContactNew() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Terima kasih telah menghubungi kami!');
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
    });
  };

  return (
    <Container className="contact-container" style={{ fontSize: '1.1rem', padding: '6rem 1rem 2rem 1rem', maxWidth: '600px' }}>
      <h2 className="text-center mb-4">Kontak Kami</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Nama Lengkap</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan nama lengkap"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Nomor Telepon</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Masukkan nomor telepon"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Alamat Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Masukkan alamat email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Pesan Anda</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Tulis pesan Anda di sini"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ resize: 'vertical' }}
          />
        </Form.Group>

        <div className="d-grid">
          <Button variant="primary" type="submit">
            Kirim Pesan
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default ContactNew;
