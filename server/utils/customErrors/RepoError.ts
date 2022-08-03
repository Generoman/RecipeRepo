export default class RepoError implements Error {
  constructor(
    public message: string,
    public tag: RepoErrorTag,
    public name: string = ""
  ) {}
}

export enum RepoErrorTag {
  SAVE = "SAVE",
  RETRIEVE = "RETRIEVE",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
}
