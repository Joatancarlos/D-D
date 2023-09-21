import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  public _player1:Fighter;
  public _player2:Fighter;
  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    super.fight();
    this._player1 = player1;
    this._player2 = player2;
  }

  fight(): number {
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}