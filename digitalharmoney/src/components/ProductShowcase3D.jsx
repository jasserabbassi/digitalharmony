import React from 'react';
import { motion } from 'framer-motion';

const ProductShowcase3D = () => {
  const products = [
    { name: 'Hologram Stage', image: '/images/hologram-stage.jpg' },
    { name: 'LED Screen', image: '/images/led-screen.jpg' },
    { name: 'Projection Mapping', image: '/images/projection-mapping.jpg' },
  ];

  return (
    <div className="product-showcase-3d">
      {products.map((product, index) => (
        <motion.div
          key={product.name}
          className="product-item"
          initial={{ rotateY: index * 120 }}
          animate={{ rotateY: index * 120 + 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
        </motion.div>
      ))}
    </div>
  );
};
