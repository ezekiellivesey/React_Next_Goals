import {describe, expect, test} from '@jest/globals';
import {sum} from './sum';

describe('Sum function', () => {
  test('Check 1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});