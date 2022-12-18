import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import type { FC } from 'react';

import type { ProductDisclosureType } from '@/interfaces/Product';

import ProductFilterCheckboxPanel from './ProductFilterCheckboxPanel';
import ProductFilterRadioPanel from './ProductFilterRadioPanel';

interface IProps {
  name: string;
  disclosureType: ProductDisclosureType;
  values: unknown;
}

function getFilterPanel(type: ProductDisclosureType, values: unknown) {
  switch (type) {
    case `radio`:
      return <ProductFilterRadioPanel values={values} />;

    case `checkbox`:
      return <ProductFilterCheckboxPanel />;

    default:
      return <code>{`don't know disclosure type`}</code>;
  }
}

const ProductFilterDisclosure: FC<IProps> = ({
  name,
  disclosureType,
  values,
}) => {
  return (
    <Disclosure as="div" className="border-b border-gray-200 py-6">
      {({ open }) => (
        <>
          <h3 className="-my-3 flow-root">
            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
              <span className="font-medium text-gray-900">{name}</span>
              <span className="ml-6 flex items-center">
                {open ? (
                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
          </h3>

          {getFilterPanel(disclosureType, values)}
          {/* <ProductFilterColorPanel /> */}
        </>
      )}
    </Disclosure>
  );
};

export default ProductFilterDisclosure;
