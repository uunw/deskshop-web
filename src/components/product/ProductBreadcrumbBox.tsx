import type { FC } from 'react';

import type { ProductType } from '@/interfaces/Product';
import { getProductType } from '@/utils';

import BreadCrumbItem from '../BreadCrumbItem';

interface IProps {
  productType: ProductType;
  productName: string;
}

const ProductBreadcrumbBox: FC<IProps> = ({ productType, productName }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        role="list"
        className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <BreadCrumbItem href="/product" name="สินค้า" />
        <BreadCrumbItem
          href="/product?type=desk"
          name={getProductType(productType)}
        />

        <li className="text-sm">
          <p
            // href="/"
            aria-current="page"
            className="font-medium text-gray-500"
          >
            {productName}
          </p>
        </li>
      </ol>
    </nav>
  );
};

export default ProductBreadcrumbBox;
