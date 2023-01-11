import { Money } from './money';

describe('Money test', () => {
  it('test multiplication', () => {
    const five = new Money.Dollar(5);
    five.times(2);
    expect(10).toBe(five.amount);
  });
});
