import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import Loader from './index';

it('Header component', () => {
  const { getByTestId } = render(
    <table>
      <thead>
        <Loader />
      </thead>
    </table>
  );
  expect(getByTestId('loader')).toBeInTheDocument();
});
