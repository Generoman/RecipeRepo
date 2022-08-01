import IService from "./IService";

export default interface IImageService extends IService {
  save(base64: string): string;

  retrieve(reference: string): string;

  update(reference: string, base64: string): string;

  delete(reference: string): void;
}
