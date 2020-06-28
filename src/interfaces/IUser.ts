import { IEntity } from "./IEntity.ts";

export interface IUser extends IEntity {
  login: string;
  password: string;
}
