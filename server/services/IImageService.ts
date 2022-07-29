import IMainService from "./IMainService";

export default interface IImageService extends IMainService {
  save(base64: string): string;

  retrieve(reference: string): string;

  update(reference: string, base64: string): string;

  delete(reference: string): void;
}