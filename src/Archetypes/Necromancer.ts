import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _createdRacesInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  static override createdArchetypeInstances(): number {
    Necromancer._createdRacesInstances += 1;
    return Necromancer._createdRacesInstances;
  }

  get energyType(): EnergyType { return this._energyType; }
}