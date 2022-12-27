import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import NextLink from 'next/link';
import type { FC } from 'react';

interface IProps {
  state: boolean;
  navigation: { name: string; href: string }[];
  onClose: () => void;
}

const HomeMobileNavbar: FC<IProps> = ({ onClose, state, navigation }) => {
  return (
    <Dialog as="div" open={state} onClose={onClose}>
      <Dialog.Panel
        // focus="true"
        className="fixed inset-0 z-10 overflow-y-auto bg-white p-6 lg:hidden"
      >
        <div className="flex h-9 items-center justify-between">
          <div className="flex">
            <NextLink href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </NextLink>
          </div>
          <div className="flex">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={onClose}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <NextLink
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg py-2 px-3 text-2xl font-bold  leading-7 text-gray-900 hover:bg-gray-400/10"
                >
                  {item.name}
                </NextLink>
              ))}
            </div>
            <div className="py-6">
              {!true ? (
                <NextLink
                  href="/auth/signin"
                  className="-mx-3 flex space-x-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 py-2.5 px-3 font-bold leading-6 text-white hover:bg-gray-400/10"
                >
                  {`เข้าสู่ระบบ`}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </NextLink>
              ) : (
                `hi a`
              )}

              <NextLink
                href="/auth/signin"
                className="-mx-3 block rounded-lg py-2.5 px-3 leading-6 text-black hover:bg-gray-400/10"
              >
                {`ติดต่อ`}
              </NextLink>
              <NextLink
                href="/auth/signin"
                className="-mx-3 block rounded-lg py-2.5 px-3 leading-6 text-black hover:bg-gray-400/10"
              >
                {`เกี่ยวกับเรา`}
              </NextLink>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default HomeMobileNavbar;
