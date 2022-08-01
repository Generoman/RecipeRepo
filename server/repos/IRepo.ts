export default interface IRepo<T> {
  save(object: T): Promise<T>;

  retrieve(): Promise<T[]>;

  update(object: T): Promise<T>;

  delete(id: string): Promise<void>;
}
