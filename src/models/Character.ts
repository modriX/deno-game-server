import { Collection } from "https://deno.land/x/mongo@v0.8.0/mod.ts";
import database from '../database.ts';
import { IModel } from "../interfaces/IModel.ts";

class Character implements IModel<ICharacter> {
  private collection: Collection;
  constructor(collection: string) {
    this.collection = database.collection(collection);
  }

  public async insertOne(obj: ICharacter) {
    return this.collection.insertOne(obj);
  }
}

export interface ICharacter {
  _id?: { $oid: string };
  nickname: string;
}

export default Character;
