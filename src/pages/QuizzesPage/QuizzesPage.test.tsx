import { describe, test, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { QuizzesPage } from './QuizzesPage';
import { MemoryRouter } from 'react-router-dom';

describe('QuizzesPage component', () => {
  test('render loading ext and then display start quiz buttons', async () => {
    const onHandleReset = vi.fn();

    render(
      <MemoryRouter>
        <QuizzesPage onHandleReset={onHandleReset} />
      </MemoryRouter>
    );

    expect(screen.getByText('Načítání dat...')).toBeInTheDocument();

    await waitFor(() => {
      const buttons = screen.getAllByText('Spustit kvíz');
      expect(buttons.length).toBe(3);
    });
  });
});
