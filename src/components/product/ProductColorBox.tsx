import { RadioGroup } from '@headlessui/react';
import { useCounter } from 'ahooks';
import type { FC } from 'react';

import type { ProductColor } from '@/interfaces/Product';

import ProductColorItem from './ProductColorItem';

interface IProps {
  colors: ProductColor[];
}

const ProductColorBox: FC<IProps> = ({ colors }) => {
  const [selectedColor, { set: setSelectedColor }] = useCounter(0);

  return (
    <RadioGroup
      value={selectedColor}
      onChange={setSelectedColor}
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
