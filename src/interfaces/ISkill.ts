import { IEntity } from "./IEntity.ts";

export interface ISkill extends IEntity {
  name: string;
  description: string;
  area: number;
}

export interface ILearnedSkill extends ISkill {
  level: number;
  levelUp: () => void;
}
