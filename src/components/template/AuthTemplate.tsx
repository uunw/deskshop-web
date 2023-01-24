import type { FC, ReactElement } from 'react';
import { useEffect } from 'react';

interface IProps {
  children: ReactElement;
}

const AuthTemplate: FC<IProps> = ({ children }) => {
  useEffect(() => {
    document.body.classList.add(`h-full`, `bg-black/5`);
  });

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">{children}</div>
      </div>
    </>
  );
};

export default AuthTemplate;
