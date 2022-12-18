enum ProductType {
  DESK,
  TABLE,
}

type ProductImage = {
  src: string;
  alt: string;
};

type ProductColor = {
  name: string;
  hex: string;
};

type ProductSize = {
  width: number;
  height: number;
  length: number;
};

interface IProduct {
  productid: string;
  type: ProductType;
  name: string;
  description: string;
  price: number;
  colors: ProductColor[];
  highlights: string[];
  details: string;
  size?: ProductSize;
  breadcrumbs: {
    name: string;
    href: string;
  }[];
  images: ProductImage[];
}

// Product Home Page Filter
interface ProductFilter {
  name: string;
  disclosureType: ProductDisclosureType;
  values: string[];
}

type ProductDisclosureType = `radio` | `checkbox`;

type ProductColorFilter = ProductColor & {
  isChecked: boolean;
};

export { ProductType };
export type {
  IProduct,
  ProductColor,
  ProductColorFilter,
  ProductDisclosureType,
  ProductFilter,
  ProductImage,
};
