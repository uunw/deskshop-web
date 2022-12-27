import { NextSeo } from 'next-seo';

import Navbar from '@/components/layouts/Navbar';

import type { NextPageWithLayout } from './_app';

const CartPage: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo title="ตะกร้าสินค้า" />

      <div>
        <div className="flex">
          <div className="border-b-2">
            <h1 className="text-3xl font-bold">{`ตระกร้าสินค้า`}</h1>
          </div>
          <div>some box</div>
        </div>
      </div>
    </>
  );
};

CartPage.getLayout = (page) => {
  return (
    <>
      <Navbar />
      {page}
    </>
  );
};

export default CartPage;
