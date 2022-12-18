import NextLink from 'next/link';
import type { FC } from 'react';

interface IProps {
  name: string;
  href: string;
}

const BreadCrumbItem: FC<IProps> = ({ href, name }) => {
  return (
    <li>
      <div className="flex items-center">
        {/* <a href="/" className="mr-2 text-sm font-medium text-gray-900">
                  {breadcrumb.name}
                </a> */}
        <NextLink
          href={href}
          className="mr-2 text-sm font-medium text-gray-900"
        >
          {name}
        </NextLink>
        <svg
          width={16}
          height={20}
          viewBox="0 0 16 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="h-5 w-4 text-gray-300"
        >
          <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
        </svg>
      </div>
    </li>
  );
};

export default BreadCrumbItem;
