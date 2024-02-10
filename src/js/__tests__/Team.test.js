import { Team } from '../Team';
import { Character } from '../Character';

test('Add Player', () => {
  const test = new Character('Bobik');
  const team = new Team();
  team.add(test);
  expect(team.members).toEqual(new Set([{"name": "Bobik"}]));
});

test('Add same Player', () => {
    const test = new Character('Bobik');
    const team = new Team();
    team.add(test);
    expect(() => team.add(test)).toThrow(`Персонаж ${test.name} уже есть в команде!`);
});

test('Add multiple Players', () => {
  const test1 = new Character('Bobik1');
  const test2 = new Character('Bobik2');
  const test3 = new Character('Bobik3');

  const team = new Team();
  team.addAll(test1, test2, test3);
  expect(team.members).toEqual(new Set([
    {"name": "Bobik1"},
    {"name": "Bobik2"},
    {"name": "Bobik3"},
  ]));
});

test('Convert Set to Array', () => {
  const test1 = new Character('Bobik1');
  const test2 = new Character('Bobik2');
  const test3 = new Character('Bobik3');
  const team = new Team();
  team.add(test2); 
  team.addAll(test1, test2, test3);

  expect(team.toArray()).toEqual([
    {name: 'Bobik2'},
    {name: 'Bobik1'},
    {name: 'Bobik3'},
  ]);
});