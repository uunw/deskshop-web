import { gql, useQuery } from '@apollo/client';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { useToggle } from 'ahooks';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import { Fragment } from 'react';

import Navbar from '@/components/layouts/Navbar';
import ProductMobileFilterDialog from '@/components/mobile/ProductMobileFilterDialog';
import type { IProductDiscover } from '@/interfaces/Product';
import { classNames } from '@/utils';

import type { NextPageWithLayout } from '../_app';

const DynamicProductItem = dynamic(
  () => import(`@/components/product/ProductItem`),
);

const sortOptions = [
  { name: `ความเกี่ยวข้อง`, current: true },
  { name: `ราคา: จากต่ำไปสูง`, current: false },
  { name: `ราคา: สูงไปต่ำ`, current: false },
  { name: `ใหม่ล่าสุด`, current: false },
  { name: `เป็นที่นิยมมากที่สุด`, current: false },
];

const ProductHomePage: NextPageWithLayout = () => {
  const [
    mobileFiltersDialogState,
    { setLeft: closeMobileFilterDialog, setRight: openMobileFilterDialog },
  ] = useToggle();

  const {
    data: products,
    loading,
    error,
  } = useQuery<{ getProducts: IProductDiscover[] }>(gql`
    {
      getProducts {
        productId
        name
        price
        imageCoverUrl
      }
    }
  `);

  if (error) return <>oh no</>;

  return (
    <>
      <NextSeo title={`รายการสินค้า`} />
      <div>
        <Navbar />

        {/* Mobile filter dialog */}
        <ProductMobileFilterDialog
          dialogState={mobileFiltersDialogState}
          onCloseDialog={closeMobileFilterDialog}
        />

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <h1 className="pt-10 pb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {`โต๊ะคอมพิวเตอร์และโต๊ะทำงาน`}
            </h1>
            <div className="mb-4 flex">
              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center rounded-full bg-gray-200/75 px-5 py-3 text-sm font-bold text-gray-700 hover:text-gray-900">
                      {`เรียงลำดับ`}
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option, i) => (
                          <Menu.Item key={i}>
                            {({ active }) => (
                              <p
                                className={classNames(
                                  option.current
                                    ? `font-medium text-gray-900`
                                    : `text-gray-500 cursor-pointer`,
                                  active ? `bg-gray-100` : ``,
                                  `block px-4 py-2 text-sm`,
                                )}
                              >
                                {option.name}
                              </p>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                {/* <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button> */}
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={openMobileFilterDialog}
                >
                  <span className="sr-only">Filters</span>
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10">
              {/* Product grid */}
              <div className="lg:col-span-3">
                {loading && products ? (
                  <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 lg:h-full">
                    <p className="mx-auto text-lg">{`ไม่มีสินค้าในระบบ`}</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products?.getProducts.map((p, i) => (
                      <DynamicProductItem
                        key={i}
                        image={{
                          src: p.imageCoverUrl
                            ? p.imageCoverUrl
                            : `https://www.ikea.com/th/th/images/products/linnmon-adils-table-white__0737165_pe740925_s5.jpg?f=xxs`,
                          alt: `asd`,
                        }}
                        name={p.name}
                        price={p.price}
                        href={`/product/${p.productId}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ProductHomePage;
