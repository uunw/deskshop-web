import type { FC } from 'react';

interface IProps {
  images: { src: string; alt: string }[];
}

const ProductImageGallery: FC<IProps> = ({ images }) => {
  return (
    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      {images.map(({ src, alt }, i) => (
        <div
          key={i}
          className="aspect-w-4 aspect-h-4 hidden overflow-hidden rounded-lg lg:block"
        >
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover object-center"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductImageGallery;
