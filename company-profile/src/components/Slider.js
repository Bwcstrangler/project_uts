import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: 'Welcome to BASKORO CORP',
    description: 'Your trusted partner in convection.',
    backgroundImage: process.env.PUBLIC_URL + '/assets/printing-process.jpg',
  },
  {
    id: 2,
    title: 'Quality and Precision',
    description: 'Delivering high-quality garments on time.',
    backgroundImage: process.env.PUBLIC_URL + '/assets/printing-process.jpg',
  },
  {
    id: 3,
    title: 'Innovative Designs',
    description: 'Creative and custom designs for your needs.',
    backgroundImage: process.env.PUBLIC_URL + '/assets/printing-process.jpg',
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [page]);

  const slideIndex = ((page % slides.length) + slides.length) % slides.length;
  const slide = slides[slideIndex];

  return (
    <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden', borderRadius: '8px', marginTop: '2rem' }}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8 }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundImage: `url(${slide.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            boxSizing: 'border-box',
            textAlign: 'center',
          }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>{slide.title}</h2>
          <p style={{ fontSize: '1.2rem', textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>{slide.description}</p>
        </motion.div>
      </AnimatePresence>
      <div style={{ position: 'absolute', bottom: '10px', width: '100%', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {slides.map((s, i) => (
          <div
            key={s.id}
            onClick={() => setPage([i, i - slideIndex])}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: i === slideIndex ? 'white' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
