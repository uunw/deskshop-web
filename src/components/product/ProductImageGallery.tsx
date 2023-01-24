import { useInViewport } from 'ahooks';
import NextImage from 'next/image';
import type { FC } from 'react';

interface IProps {
  images: { src: string; alt: string }[];
}

const ProductImageGallery: FC<IProps> = ({ images }) => {
  const [, ratio] = useInViewport(
    () => document.getElementById(`product-gallery-image`),
    {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      root: () => document.getElementById(`product-gallery`),
    },
  );

  return (
    <div
      id="product-gallery"
      className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8"
    >
      {images.map((image, i) => (
        <div
          key={i}
          id="product-gallery-image"
          className="aspect-w-4 aspect-h-4 hidden overflow-hidden rounded-lg lg:block"
        >
          {/* <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover object-center"
          /> */}
          {ratio && ratio > 0.3 ? (
            <NextImage
              {...image}
              width={500}
              height={500}
              placeholder="blur"
              blurDataURL={image.src}
              loading="lazy"
              className="h-full w-full object-cover object-center"
              draggable={false}
            />
          ) : (
            <p>wait</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductImageGallery;
