import { RadioGroup } from '@headlessui/react';
import type { FC } from 'react';

import type { ProductImage } from '@/interfaces/Product';
import { classNames } from '@/utils';

import ProductColorBoxOutOfStock from './ProductColorItemOutOfStock';

interface IProps {
  name: string;
  image: ProductImage;
  inStock: boolean;
}

const ProductColorItem: FC<IProps> = ({ name, image, inStock }) => {
  return (
    <RadioGroup.Option
      value={name}
      disabled={!inStock}
      className={({ active }) =>
        classNames(
          inStock
            ? `bg-black shadow-sm text-gray-900 cursor-pointer`
            : `bg-gray-50 text-gray-200 cursor-not-allowed`,
          active ? `ring-2 ring-gray-900` : ``,
          `group relative border rounded-md py-1 px-1 flex items-center justify-center uppercase hover:bg-gray-50 focus:outline-none sm:flex-1`,
        )
      }
    >
      {({ active, checked }) => (
        <>
          <RadioGroup.Label
            as="img"
            src={image.src}
            alt={image.alt}
            draggable={false}
          />
          {inStock ? (
            <span
              className={classNames(
                active ? `border` : `border-2`,
                checked ? `border-gray-500` : `border-transparent`,
                `pointer-events-none absolute -inset-px rounded-md`,
              )}
              aria-hidden={true}
            />
          ) : (
            <ProductColorBoxOutOfStock />
          )}
        </>
      )}
    </RadioGroup.Option>
  );
};

export default ProductColorItem;
