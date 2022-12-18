import { Disclosure, RadioGroup } from '@headlessui/react';
import type { FC } from 'react';

interface IProps {
  values: unknown;
}

const ProductFilterRadioPanel: FC<IProps> = () => {
  return (
    <Disclosure.Panel className="pt-6">
      <div className="space-y-4">
        <RadioGroup>
          {[`ok`, `no`].map((v, i) => (
            <RadioGroup.Option key={i} value={v}>
              {({ checked }) => (
                <span className={checked ? `bg-blue-200` : ``}>{v}</span>
              )}
            </RadioGroup.Option>
          ))}
        </RadioGroup>

        {/* {filters.options.map((option, optionIdx) => (
          <div key={option.value} className="flex items-center">
            <input
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
              {option.label}
            </label>
          </div>
        ))} */}
      </div>
    </Disclosure.Panel>
  );
};

export default ProductFilterRadioPanel;
