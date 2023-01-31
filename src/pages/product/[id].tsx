import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

import ProductAddToCartButton from '@/components/product/ProductAddToCartButton';
import ProductBreadcrumbBox from '@/components/product/ProductBreadcrumbBox';
import ProductColorBox from '@/components/product/ProductColorBox';
import ProductImageGallery from '@/components/product/ProductImageGallery';
import Review from '@/components/product/ProductReviewBox';
import ProductTemplate from '@/components/template/ProductTemplate';
import { ProductType } from '@/interfaces/Product';
import { getProductType } from '@/utils';

import type { NextPageWithLayout } from '../_app';

const product = {
  productId: `asd`,
  name: `LINNMON ลินมูน / ADILS อดิลส์`,
  price: 192,
  type: ProductType.DESK,
  images: [
    {
      src: `https://www.ikea.com/th/th/images/products/linnmon-adils-table-white-black__0737166_pe740909_s5.jpg?f=s`,
      alt: `Two each of gray, white, and black shirts laying flat.`,
    },
    {
      src: `https://www.ikea.com/th/th/images/products/linnmon-adils-table-white-black__0734618_pe739551_s5.jpg?f=s`,
      alt: `Model wearing plain black basic tee.`,
    },
    {
      src: `https://www.ikea.com/th/th/images/products/linnmon-adils-table-white__1009784_pe827741_s5.jpg?f=s`,
      alt: `Model wearing plain gray basic tee.`,
    },
  ],
  colors: [
    {
      name: `white`,
      hex: `ffffff`,
    },
    {
      name: `black`,
      hex: `000000`,
    },
  ],
  description: `สร้างสรรค์ออกแบบโต๊ะสไตล์ของคุณเองได้ง่ายๆ เพียงเลือกท็อปโต๊ะและขาโต๊ะที่คุณชอบ หรือจะเลือกจากชุดสินค้าที่จัดไว้แล้วก็ได้ แข็งแรงทนทาน น้ำหนักเบา ผลิตด้วยเทคนิคที่ลดการใช้วัตถุดิบในการผลิต เป็นมิตรกับสิ่งแวดล้อม`,
  details: `เจาะรูไว้แล้ว เพื่อให้ประกอบขาโต๊ะได้ง่าย ขาโต๊ะหมุนปรับได้ ให้โต๊ะสูงได้ระดับเดียวกันบนพื้นที่ไม่เรียบ`,
};

const ProductByIDPage: NextPageWithLayout = () => {
  // const [selectedColor, { set: setSelectedColor }] = useCounter();
  const [selectedColor, setSelectedColor] = useState<number>(0);

  const productId = String(useRouter().query.id);

  return (
    <>
      <NextSeo title={product.name || undefined} />

      <div className="bg-white">
        <div className="pt-6">
          <ProductBreadcrumbBox
            productType={product.type}
            productName={product.name}
          />

          <ProductImageGallery images={product.images} />

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <span className="flex">
                <h3 className="text-4xl font-bold tracking-tight text-gray-900">
                  {product.price}
                </h3>
                <p className="font-sans text-sm font-bold tracking-tight text-gray-900">{`บาท`}</p>
              </span>
              <span>
                <p className="text-gray-900/80">{`${getProductType(
                  product.type,
                )}, ${product.colors[selectedColor]?.name}, 10x10 ซม.`}</p>
              </span>

              <Review />

              <form className="mt-10">
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">{`เลือก สี`}</h3>
                    <ChevronRightIcon className="h-5 w-5" />
                  </div>
                  <span className="text-gray-900/70">{`ขาว`}</span>

                  <ProductColorBox
                    colors={product.colors}
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                  />
                </div>

                <ProductAddToCartButton />
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-xl text-gray-900">{product.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-lg font-medium text-gray-900">{`รายละเอียดสินค้า`}</h2>

                <div className="mt-4 space-y-6">
                  <p className=" text-gray-600">{product.details}</p>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-lg font-medium text-gray-900">{`รหัสสินค้า`}</h2>

                <div className="mt-4 space-y-6">
                  {/* <p className="text-sm text-gray-600">{product.details}</p> */}
                  <code className="rounded-md bg-gray-300 p-2 font-semibold text-gray-900">
                    {productId}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProductByIDPage.getLayout = (page) => {
  return <ProductTemplate>{page}</ProductTemplate>;
};

export default ProductByIDPage;
