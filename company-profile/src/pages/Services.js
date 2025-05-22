import React from 'react';
import seragamInstansi from '../img/seragam instansi.jpg';
import kaosCostum from '../img/kaos costum.jpg';
import jaketportfolio3 from '../img/jaket hodie.jpg';
import kemeja from '../img/kemeja.jpg';
import pakain from '../img/pakain.jpg';
import design from '../img/design.jpg';

const cardData = [
   {
    id: 1,
    title: "Contoh Gambar",
    description: <strong>INSTANSI</strong>,
    image: seragamInstansi,
  },
  {
  id: 2,
  title: "Contoh Gambar",
  description: <strong>KAOS COSTUME</strong>,
  image: kaosCostum,
}
,
  {
    id: 3,
    title: "Contoh Gambar",
    description: <strong>JAKET HODIE</strong>,
    image: jaketportfolio3,
  },
  {
    id: 4,
    title: "Contoh Gambar",
    description: <strong>KEMEJA FORMAL</strong>,
    image: kemeja,
  },
  {
    id: 5,
    title: "Contoh Gambar",
    description: <strong>PRODUKSI PAKAIAN</strong>,
    image: pakain,
  },
  {
    id: 6,
    title: "Contoh Gambar",
    description: <strong>LAYANAN DESIGN</strong>,
    image: design,
  },
];

function Services() {
  return (
    <div style={{
      padding: '4rem 2rem',
      maxWidth: '900px',
      margin: '0 auto',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #e0f7fa 0%, #80deea 100%)',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Services</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Kami menyediakan layanan konveksi lengkap dan terpercaya untuk berbagai kebutuhan Anda.
      </p>

      <ul style={{ textAlign: 'left', fontSize: '1.1rem', margin: '0 auto', maxWidth: '700px', lineHeight: '1.8' }}>
        <li><strong>Pembuatan Seragam Instansi & Sekolah:</strong> Produksi seragam berkualitas untuk berbagai lembaga dan komunitas.</li>
        <li><strong>Kaos Custom & Promosi:</strong> Kaos sablon atau bordir untuk event, merchandise, dan branding.</li>
        <li><strong>Jaket & Hoodie:</strong> Jaket komunitas, kampus, dan hoodie custom sesuai pesanan.</li>
        <li><strong>Kemeja Bordir & Formal:</strong> Kemeja kerja yang elegan dan profesional.</li>
        <li><strong>Produksi Pakaian Fashion:</strong> Produksi massal untuk brand lokal dan toko online.</li>
        <li><strong>Layanan Desain & Konsultasi:</strong> Bantu desain dan rekomendasi bahan agar hasil maksimal.</li>
      </ul>

      {/* Bagian portofolio dengan gambar */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem',
        marginTop: '3rem',
        textAlign: 'left'
      }}>
        {cardData.map(card => (
          <div key={card.id} style={{
            border: '1px solid #ccc',
            borderRadius: '6px',
            overflow: 'hidden',
            backgroundColor: '#fff',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            textAlign: 'justify',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            height: '100%'
          }}>
            <img src={card.image} alt={card.title} style={{ width: '100%', height: '200px', objectFit: 'contain', display: 'block' }} />
            <div style={{ padding: '1rem' }}>
            <h3 style={{ margin: '0 0 0.5rem 0' }}>{card.title}</h3>
            <p style={{ margin: 0 }}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
