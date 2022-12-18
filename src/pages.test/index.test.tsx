import { render, screen, waitFor } from '@testing-library/react';

import Index from '@/pages/index';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe(`Index page`, () => {
  describe(`Render method`, () => {
    it(`should have h1 tag`, async () => {
      render(<Index />);

      // const heading = await findByText(`Your room, your rules`);
      // const heading = await screen.findByText('Your room, your rules', {
      //   // name: /Boilerplate code/,
      // });

      // expect(heading).toBeIn;

      await waitFor(() => {
        expect(screen.getByText(`Your room, your rules`)).toBeInstanceOf(
          <h1 />,
        );
      });
      // expect(heading).toBeIn
    });
  });
});
