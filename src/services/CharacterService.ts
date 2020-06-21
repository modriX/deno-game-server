import Character from "../models/Character.ts";
import { IEntity } from "../interfaces/IEntity.ts";

export default class CharacterService {
  private model: Character;

  constructor() {
    this.model = new Character('characters');
  }

  addNew(nickname: string): Promise<IEntity> {
    // TODO: add unique check
    return this.model.insertOne({ nickname });
  }

}
