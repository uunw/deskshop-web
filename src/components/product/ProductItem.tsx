import NextLink from 'next/link';
import type { FC } from 'react';

interface IProps {
  name: string;
  price: number;
  href: string;
  image: {
    src: string;
    alt: string;
  };
}

const ProductItem: FC<IProps> = ({ name, href, price, image }) => {
  return (
    <NextLink href={href} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
          draggable={false}
        />
      </div>
      <h3 className="mt-4 text-black/80">{name}</h3>
      {/* <p className="mt-1 text-lg font-medium text-gray-900">{price}</p> */}
      <span className="text-gray-900/75">{`โต๊ะทำงาน, 100x60 ซม.`}</span>
      <span className="mt-2 flex">
        <span className="mt-1 text-3xl font-bold text-gray-900">{price}</span>
        <p className="font-sans text-sm font-bold tracking-tight text-gray-900">{`บาท`}</p>
      </span>
    </NextLink>
  );
};

export default ProductItem;
