import Bookmeter from "bookmeter"

test('there is no I in team', () => {
  const bookmeter = new Bookmeter('dummyId', 'dummyPassword')
  expect('team').not.toMatch(/I/);
});
