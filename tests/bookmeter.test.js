import Bookmeter from "bookmeter"

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});
