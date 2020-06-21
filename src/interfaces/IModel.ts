import { IEntity } from "./IEntity.ts";

export interface IModel<T extends IEntity> {
  insertOne: (obj: Omit<T, '_id'>) => Promise<IEntity>;
  insertMany: (objs: Omit<T, '_id'>[]) => Promise<IEntity[]>;
  findOne: (filter: Object) => Promise<T>;
  findMany: (filter: Object) => Promise<T[]>;
  findAll: () => Promise<T[]>;
}

export interface IPopulatable<T> {
  papulate: () => Promise<T>;
}
