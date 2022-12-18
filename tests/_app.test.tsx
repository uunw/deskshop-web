import { waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';

// Mock `next/head`: https://bradgarropy.com/blog/mocking-nextjs
jest.mock(
  `next/head`,
  () =>
    function Head(props: { children: ReactNode }) {
      // eslint-disable-next-line testing-library/no-node-access
      return <>{props.children}</>;
    },
);

describe(`MyApp component`, () => {
  describe(`Render method`, () => {
    it(`should a page title`, async () => {
      const title = `Random title`;

      // render(<MyApp title={title} description="Random description" />);

      await waitFor(() => {
        expect(document.title).toEqual(title);
      });
    });
  });
});
