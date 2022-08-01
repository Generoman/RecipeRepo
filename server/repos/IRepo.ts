import DTO from "../data/dtos/DTO";

export default interface IRepo<T> {
  save(object: T): T;

  retrieve(): T[];

  update(object: T): T;

  delete(id: string): void;
}
