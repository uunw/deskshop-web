import { Popover } from '@headlessui/react';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useForm } from 'react-hook-form';

import navPicture from '@/public/IDS.png';
import { classNames } from '@/utils';

import NavbarMobile from '../mobile/NavbarMobile';

type Form = {
  search: string;
};

const Navbar: FC = () => {
  const router = useRouter();

  // const [searchValue, setSearchValue] = useState<string>(``);
  const { handleSubmit, register, watch } = useForm<Form>({
    defaultValues: {
      search: ``,
    },
  });

  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center border-b border-gray-200 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <NextLink href="/">
              <span className="sr-only">IKEA-DeskShop</span>
              <NextImage
                src={navPicture}
                alt="IKEA-DeskShop"
                loading="lazy"
                className="h-8 w-auto sm:h-16"
              />
            </NextLink>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <nav className="hidden space-x-10 md:flex">
            <div className="relative mt-1 w-full rounded-md transition-all delay-150 ease-in-out">
              {watch(`search`).length === 0 && (
                <div
                  className={classNames(
                    `pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3`,
                  )}
                >
                  <MagnifyingGlassIcon className="h-5 w-auto font-bold text-gray-900" />
                </div>
              )}
              <form
                onSubmit={handleSubmit((d) => {
                  router.push({
                    pathname: `/search`,
                    query: {
                      q: d.search,
                    },
                  });
                })}
              >
                <input
                  type="text"
                  {...register(`search`, {
                    required: true,
                    min: 0,
                  })}
                  className={classNames(
                    `block w-full rounded-full border-gray-300 py-4 text-lg focus:border-blue-700 focus:ring-blue-700`,
                    watch(`search`).length === 0 ? `px-11` : `px-6`,
                  )}
                  placeholder={`คุณกำลังหาโต๊ะทำงานแบบไหนอยู่?`}
                />
                {/* <button type="submit" hidden /> */}
                <input type="submit" hidden />
              </form>
            </div>
          </nav>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <NextLink
              href="/cart"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-white px-4 py-2 text-base font-medium text-black hover:bg-gray-700/10"
            >
              <ShoppingCartIcon
                stroke="currentColor"
                strokeWidth={1.5}
                className="h-6 w-auto"
              />
            </NextLink>
          </div>
        </div>
      </div>

      <NavbarMobile />
    </Popover>
  );
};

export default Navbar;
