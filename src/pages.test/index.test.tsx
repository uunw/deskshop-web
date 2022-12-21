import { render, screen, waitFor } from '@testing-library/react';

import Index from '@/pages/index';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe(`Index page`, () => {
  describe(`Render method`, () => {
    it(`should have h1 tag`, async () => {
      render(<Index />);

      await waitFor(async () => {
        expect(await screen.findByText(`Your room, your rules`)).toBe(<h1 />);
      });
    });
  });
});
