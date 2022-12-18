import type { FC } from 'react';

import { AppConfig } from '@/utils/AppConfig';

const Footer: FC = () => {
  return (
    <div className="border-t border-gray-300 py-4 text-center text-sm">
      {`© Copyright ${new Date().getFullYear()} ${AppConfig.title}. Made with `}
      <a href="https://google.com" target="_blank" rel="noreferrer">
        uunw
      </a>
    </div>
  );
};

export default Footer;
