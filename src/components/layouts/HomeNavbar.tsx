import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useUser } from '@supabase/auth-helpers-react';
import { useToggle } from 'ahooks';
import NextLink from 'next/link';
import type { FC } from 'react';
import { Fragment } from 'react';

import { signOut } from '@/libs/supabase/auth';
import { classNames, signIn } from '@/utils';
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
  {
    name: `บทเรียน`,
    href: `/document`,
    // target: `_blank`,
  },
  {
    name: `ใบความรู้`,
    href: `https://waraporn.cmtc.ac.th/student/student65/u65301280011/IKEA-DeskShop/workshop/`,
    target: `_blank`,
  },
];

const HomeNavbar: FC = () => {
  const user = useUser();
  // const session = useSession();

  const [
    mobileMenuState,
    {
      // toggle: toggleMobileMenuState,
      setRight: openMobileMenuState,
      setLeft: closeMobileMenuState,
    },
  ] = useToggle();

  // console.log(user, session);

  // const session = supabaseBrowserClient.auth.getSession()
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
          <Menu
            as="div"
            className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end"
          >
            {/* <NextLink
              href="/auth/signin"
              className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
            >
              Log in
            </NextLink> */}
            {user ? (
              <Menu.Button className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                {user.email}
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            ) : (
              <Menu.Button
                onClick={signIn}
                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                Sign In
              </Menu.Button>
            )}

            {user ? (
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <NextLink
                          href="/"
                          className={classNames(
                            active
                              ? `bg-gray-100 text-gray-900`
                              : `text-gray-700`,
                            `block px-4 py-2 text-sm`,
                          )}
                        >
                          Account settings
                        </NextLink>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Menu.Button
                          onClick={async () => {
                            await signOut();
                            // window.location.reload();
                          }}
                          className={classNames(
                            active
                              ? `bg-gray-100 text-gray-900`
                              : `text-gray-700`,
                            `block w-full px-4 py-2 text-left text-sm`,
                          )}
                        >
                          Sign out
                        </Menu.Button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            ) : (
              <></>
            )}
          </Menu>
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
