import { IEntity } from "./IEntity.ts";
import Class from "../entities/Class.ts";
import Skill from "../entities/Skill.ts";

export interface ICharacter extends IEntity {
  nickname: string;
  level: number;
  experience: number;
  class: Class;
  skills: Skill[];
}
