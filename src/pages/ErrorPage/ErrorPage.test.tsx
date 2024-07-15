import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ErrorPage } from './ErrorPage';
import { MemoryRouter } from 'react-router-dom';

describe('ErrorPage component', () => {
  test('render content ErrorPage', () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );
    // screen.debug();
    expect(screen.getByText('Jejda...')).toBeInTheDocument();
    expect(
      screen.getByText('Tuhle stránku ještě nemám nebo jde o chybný odkaz.')
    ).toBeInTheDocument();
    expect(screen.getByText('Zpět')).toBeInTheDocument();
    expect(screen.getByText('na hlavní stranu.')).toBeInTheDocument();
  });
});
