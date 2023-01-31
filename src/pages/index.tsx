import NextLink from 'next/link';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

import HomeNavbar from '@/components/layouts/HomeNavbar';

import type { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = () => {
  useEffect(() => {
    document.body.classList.toggle(`overflow-hidden`, true);
  });
  return (
    <>
      <NextSeo description="IKEA-DeskShop" />

      <div className="isolate bg-white">
        <HomeNavbar />

        {/* <Lottie
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-sm sm:top-[-20rem]"
          play
          loop
          animationData={animationData}
          // style={{ width: 150, height: 150 }}
        /> */}

        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <main>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
              <div>
                {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    <span className="text-gray-600">
                      Announcing our next round of funding.{` `}
                      <a href="/as" className="font-semibold text-indigo-600">
                        <span className="absolute inset-0" aria-hidden="true" />
                        Read more <span aria-hidden="true">&rarr;</span>
                      </a>
                    </span>
                  </div>
                </div> */}
                <div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                    {`Your room, your rules`}
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                    {`มีโต๊ะทำงานมากมายหลากหลายแบบให้คุณเลือก`}
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <NextLink
                      href="/product"
                      className="inline-block rounded-lg bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 transition-colors delay-100 ease-in-out hover:bg-blue-700 hover:ring-blue-700"
                    >
                      {`เลือกซื้อสินค้า`}
                      <span className="text-indigo-200" aria-hidden="true">
                        &rarr;
                      </span>
                    </NextLink>
                    <NextLink
                      href="/about"
                      className="text-base font-semibold leading-7 text-gray-900"
                    >
                      {`เกี่ยวกับ`}
                      <span className="text-gray-400" aria-hidden="true">
                        &rarr;
                      </span>
                    </NextLink>
                  </div>
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                  <svg
                    className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                      fillOpacity=".3"
                      d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                      <linearGradient
                        id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                        x1="1155.49"
                        x2="-78.208"
                        y1=".177"
                        y2="474.645"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#9089FC" />
                        <stop offset={1} stopColor="#FF80B5" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* <Footer /> */}
        <div>
          <p className="text-center">นาย นนทพันธ์ อินทวงศ์ 65301280011</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
