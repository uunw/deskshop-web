import { Popover, Transition } from '@headlessui/react';
import {
  ArrowPathIcon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import NextLink from 'next/link';
import type { FC } from 'react';
import { Fragment } from 'react';

const solutions = [
  {
    name: `Analytics`,
    description: `Get a better understanding of where your traffic is coming from.`,
    href: `#`,
    icon: ChartBarIcon,
  },
  {
    name: `Engagement`,
    description: `Speak directly to your customers in a more meaningful way.`,
    href: `#`,
    icon: CursorArrowRaysIcon,
  },
  {
    name: `Security`,
    description: `Your customers' data will be safe and secure.`,
    href: `#`,
    icon: ShieldCheckIcon,
  },
  {
    name: `Integrations`,
    description: `Connect with third-party tools that you're already using.`,
    href: `#`,
    icon: Squares2X2Icon,
  },
  {
    name: `Automations`,
    description: `Build strategic funnels that will drive your customers to convert`,
    href: `#`,
    icon: ArrowPathIcon,
  },
];
const resources = [
  {
    name: `Help Center`,
    description: `Get all of your questions answered in our forums or contact support.`,
    href: `#`,
    icon: LifebuoyIcon,
  },
  {
    name: `Guides`,
    description: `Learn how to maximize our platform to get the most out of it.`,
    href: `#`,
    icon: BookmarkSquareIcon,
  },
  {
    name: `Events`,
    description: `See what meet-ups and other events we might be planning near you.`,
    href: `#`,
    icon: CalendarIcon,
  },
  {
    name: `Security`,
    description: `Understand how we take your privacy seriously.`,
    href: `#`,
    icon: ShieldCheckIcon,
  },
];

const NavbarMobile: FC = () => {
  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute inset-x-0 top-0 origin-top-right p-2 transition md:hidden"
      >
        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black/5">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="/IDS.png"
                  alt="IKEA-DeskShop"
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {solutions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                  >
                    <item.icon
                      className="h-6 w-6 shrink-0 text-indigo-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      {item.name}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className="space-y-6 py-6 px-5">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <NextLink
                href="/"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Pricing
              </NextLink>
              {resources.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div>
              <NextLink
                href="/"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Sign up
              </NextLink>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?{` `}
                <NextLink
                  href="/"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Sign in
                </NextLink>
              </p>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};

export default NavbarMobile;
