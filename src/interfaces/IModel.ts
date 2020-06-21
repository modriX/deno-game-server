export interface IModel<T> {
  insertOne: (obj: T) => Promise<T>;
}
