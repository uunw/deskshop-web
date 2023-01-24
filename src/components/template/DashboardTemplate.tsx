import dynamic from 'next/dynamic';
import type { FC, ReactElement } from 'react';
import { useEffect } from 'react';

const DynamicDashboardNavbar = dynamic(
  import(`@/components/layouts/DashboardNavbar`),
);

interface IProps {
  children: ReactElement;
}

const DashboardTemplate: FC<IProps> = ({ children }) => {
  useEffect(() => {
    document.body.classList.add(`h-full`);
  });

  return (
    <>
      <div className="min-h-full">
        <DynamicDashboardNavbar />

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>

        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            {children || (
              <div className="px-4 py-6 sm:px-0">
                <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
              </div>
            )}
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardTemplate;
