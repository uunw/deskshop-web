import { Menu, Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  FunnelIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import { useToggle } from 'ahooks';
import { Fragment } from 'react';

import ProductMobileFilterDialog from '@/components/mobile/ProductMobileFilterDialog';
import ProductFilterForm from '@/components/product/ProductFilterForm';
import ProductItem from '@/components/product/ProductItem';
import { classNames } from '@/utils';

import type { NextPageWithLayout } from '../_app';

const sortOptions = [
  { name: `ความเกี่ยวข้อง`, href: `/`, current: true },
  { name: `ราคา: จากต่ำไปสูง`, href: `#`, current: false },
  { name: `ราคา: สูงไปต่ำ`, href: `#`, current: false },
  { name: `ใหม่ล่าสุด`, href: `#`, current: false },
  { name: `เป็นที่นิยมมากที่สุด`, href: `#`, current: false },
];

const ProductHomePage: NextPageWithLayout = () => {
  const [
    mobileFiltersDialogState,
    { setLeft: closeMobileFilterDialog, setRight: openMobileFilterDialog },
  ] = useToggle();

  return (
    <div>
      {/* Mobile filter dialog */}
      <ProductMobileFilterDialog
        dialogState={mobileFiltersDialogState}
        onCloseDialog={closeMobileFilterDialog}
      />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {`โต๊ะคอมพิวเตอร์และโต๊ะทำงาน`}
          </h1>

          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
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
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              option.current
                                ? `font-medium text-gray-900`
                                : `text-gray-500`,
                              active ? `bg-gray-100` : ``,
                              `block px-4 py-2 text-sm`,
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <button
              type="button"
              className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
            >
              <span className="sr-only">View grid</span>
              <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
            </button>
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

        <section aria-labelledby="products-heading" className="pt-6 pb-24">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <ProductFilterForm />

            {/* Product grid */}
            <div className="lg:col-span-3">
              {/* Replace with your content */}

              {/* <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 lg:h-full">
                    <p className="mx-auto text-lg">{`ไม่มีสินค้าในระบบ`}</p>
                  </div> */}
              <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <ProductItem
                  image={{
                    src: `https://www.ikea.com/th/th/images/products/linnmon-adils-table-white__0737165_pe740925_s5.jpg?f=xxs`,
                    alt: `asd`,
                  }}
                  name="LINNMON ลินมูน / ADILS อดิลส์"
                  price={190}
                  href="/product/V1StGXR8_Z5jdHi6B-myT"
                />
              </div>

              {/* /End replace */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductHomePage;
