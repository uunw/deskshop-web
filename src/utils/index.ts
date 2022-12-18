import { ProductType } from '@/interfaces/Product';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(` `);
}

function getProductType(type: ProductType) {
  switch (type) {
    case ProductType.DESK:
      return `โต๊ะทำงาน`;

    case ProductType.TABLE:
      return `โต๊ะ`;

    default:
      return `ไม่ทราบ`;
  }
}

export { classNames, getProductType };
