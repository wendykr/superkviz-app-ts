import { describe, test, expect } from 'vitest';
import { declineQuestions, declineResultsCount } from './helpers';

describe('Decline Questions func', () => {
  test('1 to otázka', () => {
    expect(declineQuestions(1)).toEqual('otázka');
  });

  test('2 to otázky', () => {
    expect(declineQuestions(2)).toEqual('otázky');
  });

  test('3 to otázky', () => {
    expect(declineQuestions(3)).toEqual('otázky');
  });

  test('4 to otázky', () => {
    expect(declineQuestions(4)).toEqual('otázky');
  });

  test('5 to otázek', () => {
    expect(declineQuestions(5)).toEqual('otázek');
  });

  test('0 to Žádné otázky', () => {
    expect(declineQuestions(0)).toBe('Žádné otázky');
  });

  test('11 to otázek', () => {
    expect(declineQuestions(11)).toEqual('otázek');
  });

  test('21 to otázka', () => {
    expect(declineQuestions(21)).toEqual('otázek');
  });
});

describe('Decline Results Count func', () => {
  test('1 to z 1 otázky', () => {
    expect(declineResultsCount(1)).toEqual('z 1 otázky');
  });

  test('2 to ze 2 otázek', () => {
    expect(declineResultsCount(2)).toEqual('ze 2 otázek');
  });

  test('6 to z 6 otázek', () => {
    expect(declineResultsCount(6)).toEqual('z 6 otázek');
  });
});
