import IImageService from "./IImageService";

export default class ImageService implements IImageService {
  delete(reference: string): void {
    throw new Error("Not implemented");
  }

  retrieve(reference: string): string {
    throw new Error("Not implemented");
  }

  save(base64: string): string {
    throw new Error("Not implemented");
  }

  update(reference: string, base64: string): string {
    throw new Error("Not implemented");
  }
}
