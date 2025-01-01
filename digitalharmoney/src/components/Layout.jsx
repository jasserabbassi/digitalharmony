import React from 'react';
import { AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => (
  <AnimatePresence mode="wait">
    {children}
  </AnimatePresence>
);

export default Layout;
