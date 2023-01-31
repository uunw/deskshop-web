import type { FC } from 'react';

import Navbar from '../layouts/Navbar';

interface IProps {
  children: any;
}

const ProductTemplate: FC<IProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default ProductTemplate;
