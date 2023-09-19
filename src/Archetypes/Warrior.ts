import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _createdRacesInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
  }

  static override createdArchetypeInstances(): number {
    Warrior._createdRacesInstances += 1;
    return Warrior._createdRacesInstances;
  }

  get energyType(): EnergyType { return this._energyType; }
}