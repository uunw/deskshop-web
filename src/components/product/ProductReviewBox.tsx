import { StarIcon } from '@heroicons/react/24/outline';
import NextLink from 'next/link';
import type { FC } from 'react';

import { classNames } from '@/utils';

const reviews = { href: `#`, average: 4, totalCount: 117 };

const ProductReviewBox: FC = () => {
  return (
    <div className="mt-6">
      <h3 className="sr-only">Reviews</h3>
      <div className="flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating, i) => (
            <StarIcon
              key={i}
              className={classNames(
                reviews.average > rating ? `text-yellow-400` : `text-gray-200`,
                `h-5 w-5 flex-shrink-0`,
              )}
              aria-hidden={true}
            />
          ))}
        </div>
        <p className="sr-only">{reviews.average} out of 5 stars</p>
        <NextLink
          href="/"
          className="ml-3 text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          {reviews.totalCount} reviews
        </NextLink>
      </div>
    </div>
  );
};

export default ProductReviewBox;
