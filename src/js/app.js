import { Team } from './Team';
import { Character } from './Character';

//список доступных игроков
const player1 = new Character('Bobik');
const player2 = new Character('Ivan');
const player3 = new Character('Pushok');
const player4 = new Character('Demon');

const listTeam = new Team;
listTeam.add(player3);
listTeam.add(player2);
listTeam.addAll(player1, player2, player3, player4);

console.log(listTeam);
console.log(listTeam.toArray());








