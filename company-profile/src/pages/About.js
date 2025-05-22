import React from 'react';

function About() {
  return (
    <div style={{
      padding: '4rem 2rem',
      maxWidth: '900px',
      margin: '0 auto',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Tentang kami</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        <strong>BASKORO CORP</strong> adalah perusahaan konveksi yang telah berdiri sejak tahun <strong>2014</strong>, 
        berkomitmen untuk memberikan layanan terbaik dalam bidang produksi pakaian dan tekstil.
        Selama lebih dari satu dekade, kami telah menjadi mitra terpercaya bagi ratusan klien dari berbagai sektor.
      </p>

      <h2 style={{ fontSize: '2rem', margin: '2rem 0 1rem' }}>Visi Kami</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
        Menjadi perusahaan konveksi terdepan di Indonesia yang mengedepankan kualitas, ketepatan waktu, dan kepuasan pelanggan.
      </p>

      <h2 style={{ fontSize: '2rem', margin: '2rem 0 1rem' }}>Misi Kami</h2>
      <ul style={{ listStyleType: 'disc', textAlign: 'left', margin: '0 auto', maxWidth: '600px', fontSize: '1.1rem' }}>
        <li>Menyediakan layanan produksi pakaian berkualitas tinggi.</li>
        <li>Menjaga profesionalitas dan ketepatan waktu pengiriman.</li>
        <li>Menjalin hubungan jangka panjang dengan klien dan mitra.</li>
        <li>Terus berinovasi dalam teknologi dan desain konveksi.</li>
      </ul>

      <h2 style={{ fontSize: '2rem', margin: '2rem 0 1rem' }}>Spesialisasi Kami</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
        Kami melayani berbagai kebutuhan pakaian seperti:
      </p>
      <ul style={{ listStyleType: 'circle', textAlign: 'left', margin: '0 auto', maxWidth: '600px', fontSize: '1.1rem' }}>
        <li>Seragam kantor dan sekolah</li>
        <li>Kaos promosi dan event</li>
        <li>Jaket komunitas dan organisasi</li>
        <li>Kemeja bordir dan custom</li>
        <li>Produk fashion sesuai permintaan</li>
      </ul>

      <h2 style={{ fontSize: '2rem', margin: '2rem 0 1rem' }}>Pengalaman</h2>
      <p style={{ fontSize: '1.1rem' }}>
        Dengan lebih dari <strong>10 tahun pengalaman</strong>, kami bangga menjadi bagian dari berbagai proyek berskala lokal maupun nasional.
        Kepercayaan Anda adalah semangat kami untuk terus berkembang.
      </p>
    </div>
  );
}

export default About;
