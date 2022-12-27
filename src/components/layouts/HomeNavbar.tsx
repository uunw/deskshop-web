import { Bars3Icon } from '@heroicons/react/24/outline';
import { useToggle } from 'ahooks';
import NextLink from 'next/link';
import type { FC } from 'react';

import { signIn } from '@/utils';
import { AppConfig } from '@/utils/AppConfig';

import HomeMobileNavbar from '../mobile/HomeMobileNavbar';

type Navigation = {
  name: string;
  href: string;
  target?: `_blank`;
};

const navigation: Navigation[] = [
  // { name: `โปรโมชั่นพิเศษ`, href: `/product` },
  { name: `สินค้าทั้งหมด`, href: `/product` },
  { name: `เกี่ยวกับ`, href: `/about` },
  { name: `ติดต่อ`, href: `/contact` },
  {
    name: `บทเรียน`,
    href: `https://waraporn.cmtc.ac.th/student/student65/u65301280011/IKEA-DeskShop/workshop`,
    target: `_blank`,
  },
];

const HomeNavbar: FC = () => {
  const [
    mobileMenuState,
    {
      // toggle: toggleMobileMenuState,
      setRight: openMobileMenuState,
      setLeft: closeMobileMenuState,
    },
  ] = useToggle();
  return (
    <div className="px-6 pt-6 lg:px-8">
      <div>
        <nav
          className="flex h-9 items-center justify-between"
          aria-label="Global"
        >
          <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <NextLink href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{AppConfig.title}</span>
              <img
                className="h-16 rounded-xl shadow-sm transition duration-150 ease-in-out hover:shadow-md"
                src="./IDS.png"
                alt="ids"
              />
            </NextLink>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={openMobileMenuState}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
            {navigation.map((item, i) => (
              <NextLink
                key={i}
                href={item.href}
                target={item.target}
                className="font-semibold text-gray-900 hover:text-gray-900"
              >
                {item.name}
              </NextLink>
            ))}
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
            {/* <NextLink
              href="/auth/signin"
              className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
            >
              Log in
            </NextLink> */}
            <button
              onClick={signIn}
              className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
            >
              Sign In
            </button>
          </div>
        </nav>

        <HomeMobileNavbar
          state={mobileMenuState}
          navigation={navigation}
          onClose={closeMobileMenuState}
        />
      </div>
    </div>
  );
};

export default HomeNavbar;
