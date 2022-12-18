import type { FC } from 'react';

const ProductAddToCartButton: FC = () => {
  return (
    <button
      type="submit"
      className="mt-10 flex w-full items-center justify-center rounded-full border border-transparent bg-blue-700 py-3 px-8 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {`เพิ่มสินค้าลงในตะกร้า`}
    </button>
  );
};

export default ProductAddToCartButton;
