import { Disclosure } from '@headlessui/react';
import type { FC } from 'react';

const ProductFilterColorPanel: FC = () => {
  return (
    <Disclosure.Panel className="pt-6">
      <div className="space-y-4">
        <div className="flex items-center">
          {/* <input
            id={`filter-${section.id}-${optionIdx}`}
            name={`${section.id}[]`}
            defaultValue={option.value}
            type="checkbox"
            defaultChecked={option.checked}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label
            htmlFor={`filter-${section.id}-${optionIdx}`}
            className="ml-3 text-sm text-gray-600"
          >
            asd
          </label> */}
        </div>
      </div>
    </Disclosure.Panel>
  );
};

export default ProductFilterColorPanel;
