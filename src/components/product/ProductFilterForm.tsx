import type { FC } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { useProductHomePageContext } from '@/contexts/product';

import ProductFilterDisclosure from './ProductFilterDisclosure';

type Input = {
  categorys: string[];
  colors: string[];
};

const ProductFilterForm: FC = () => {
  const { filters, subCategories } = useProductHomePageContext();
  const { handleSubmit } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="hidden lg:block">
      <h3 className="sr-only">Categories</h3>
      <ul className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
        {subCategories.map((category) => (
          <li key={category.name}>
            <a href={category.href}>{category.name}</a>
          </li>
        ))}
      </ul>

      {filters.map((v, i) => (
        <ProductFilterDisclosure key={i} {...v} />
      ))}

      {/* {filters.map((section) => (
        <Disclosure
          as="div"
          key={section.id}
          className="border-b border-gray-200 py-6"
        >
          {({ open }) => (
            <>
              <h3 className="-my-3 flow-root">
                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">
                    {section.name}
                  </span>
                  <span className="ml-6 flex items-center">
                    {open ? (
                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              
            </>
          )}
        </Disclosure>
      ))} */}
    </form>
  );
};

export default ProductFilterForm;
