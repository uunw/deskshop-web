import { createContext, useContext } from 'react';

import type { ProductFilter } from '@/interfaces/Product';

interface IProductHomePageContext {
  filters: ProductFilter[];
  subCategories: { name: string; href: string }[];
}

interface IProductPageContext {
  name: string;
}

const ProductHomePageContext = createContext<IProductHomePageContext>({
  subCategories: [{ name: `Totes`, href: `#` }],
  filters: [
    {
      name: `เรียงลำดับ`,
      disclosureType: `radio`,
      values: [
        `ความเกี่ยวข้อง`,
        `ราคา: จากต่ำไปสูง`,
        `ราคาจากสูงไปต่ำ`,
        `ชื่อ`,
      ],
    },
  ],
});

const ProductPageContext = createContext<IProductPageContext | null>(null);

const useProductHomePageContext = () => useContext(ProductHomePageContext);
const useProductPageContext = () => useContext(ProductPageContext);

export {
  ProductHomePageContext,
  useProductHomePageContext,
  useProductPageContext,
};
