import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QuizzesPage } from './QuizzesPage';
import { MemoryRouter } from 'react-router-dom';

describe('QuizzesPage component', () => {
  test('render loading text', () => {
    const onHandleReset = vi.fn();

    render(
      <MemoryRouter>
        <QuizzesPage onHandleReset={onHandleReset} />
      </MemoryRouter>
    );

    expect(screen.getByText('Načítání dat...')).toBeInTheDocument();
  });
});
