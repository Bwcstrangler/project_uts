import React from 'react';
import { motion } from 'framer-motion';
import Slider from '../components/Slider';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} // jika pakai AnimatePresence nanti
      transition={{ duration: 1 }}
      style={{
        position: 'relative',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/baskoro-building.jpg'})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        paddingTop: '60px',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Overlay gelap */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1,
        }}
      />

      {/* Konten utama */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          minHeight: 'calc(100vh - 70px)',
          textAlign: 'center',
          padding: '0 2rem 2rem 2rem',
          backgroundColor: 'rgba(0, 0, 0, 0)', // fallback color to check visibility
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '0rem' }}></h1>
        <p style={{ fontSize: '1.5rem' }}></p>
        <Slider />
      </div>
    </motion.div>
  );
}

export default Home;
