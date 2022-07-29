import IImageService from "./IImageService";

export default class ImageService implements IImageService {
  delete(reference: string): void {}

  retrieve(reference: string): string {
    return "";
  }

  save(base64: string): string {
    return "";
  }

  update(reference: string, base64: string): string {
    return "";
  }
}
