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
  productId?: string;
  type?: ProductType;
  name?: string;
  description?: string;
  price?: number;
  colors?: ProductColor[];
  details?: string;
  size?: ProductSize;
  images?: ProductImage[];
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

interface IProductDiscover {
  productId: string;
  name: string;
  price: number;
  imageCoverUrl: string;
}

export { ProductType };
export type {
  IProduct,
  IProductDiscover,
  ProductColor,
  ProductColorFilter,
  ProductDisclosureType,
  ProductFilter,
  ProductImage,
};
