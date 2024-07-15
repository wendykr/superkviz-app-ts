import { describe, test, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { ErrorPage } from './ErrorPage';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { IntroPage } from '../IntroPage/IntroPage';

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

  test('click button to Home Page', () => {
    render(
      <MemoryRouter initialEntries={['/error']} initialIndex={0}>
        <Routes>
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/" element={<IntroPage />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Zpět'));

    expect(screen.getByText('Vítej v superkvízu')).toBeInTheDocument();
  });
});
