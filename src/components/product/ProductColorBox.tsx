import { RadioGroup } from '@headlessui/react';
import type { FC } from 'react';

import type { ProductColor } from '@/interfaces/Product';

import ProductColorItem from './ProductColorItem';

interface IProps {
  colors: ProductColor[];
  selectedColor: number;
  setSelectedColor: (v: number) => void;
}

const ProductColorBox: FC<IProps> = ({
  colors,
  selectedColor,
  setSelectedColor,
}) => {
  return (
    <RadioGroup
      value={selectedColor}
      onChange={(v: number) => {
        setSelectedColor(v);
        // console.log(v);
      }}
      className="mt-4"
    >
      <RadioGroup.Label className="sr-only">{`เลือกสี`}</RadioGroup.Label>
      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
        {colors.map((color, i) => (
          <ProductColorItem
            key={i}
            name={color.name}
            inStock={true}
            image={{
              src: `https://www.ikea.com/th/th/images/products/linnmon-adils-table-white__0737165_pe740925_s5.jpg?f=xu`,
              alt: color.name,
            }}
          />
        ))}
      </div>
    </RadioGroup>
  );
};

export default ProductColorBox;
