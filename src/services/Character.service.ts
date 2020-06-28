import Character from "../models/Character.model.ts";
import { IEntity } from "../interfaces/IEntity.ts";

export default class CharacterService {
  private model: Character;

  constructor() {
    this.model = new Character('characters');
  }

}
