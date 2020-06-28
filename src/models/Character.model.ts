import { Collection } from "https://deno.land/x/mongo@v0.8.0/mod.ts";
import database from '../database.ts';
import { IModel } from "../interfaces/IModel.ts";
import { IEntity } from "../interfaces/IEntity.ts";
import { ICharacter } from "../interfaces/ICharacter.ts";

class Character implements IModel<ICharacter> {
  private collection: Collection;
  constructor(collection: string) {
    this.collection = database.collection(collection);
  }

  public async insertOne(obj: Omit<ICharacter, '_id'>): Promise<IEntity> {
    return this.collection.insertOne(obj);
  }

  public async insertMany(objs: Omit<ICharacter, '_id'>[]): Promise<IEntity[]> {
    return this.collection.insertMany(objs);
  }

  public async findOne(filter: Object): Promise<ICharacter> {
    return this.collection.findOne(filter);
  }

  public async findMany(filter: Object): Promise<ICharacter[]> {
    return this.collection.find(filter);
  }

  public async findAll(): Promise<ICharacter[]> {
    return this.collection.find();
  }
}

export default Character;
