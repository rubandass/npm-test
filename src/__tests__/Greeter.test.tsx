import { Greeter } from '../index';

test('test Greeter', () => {
  expect(<Greeter name="Ruban" />).toBe('Hello Ruban!');
});
