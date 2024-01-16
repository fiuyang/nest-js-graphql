declare namespace Express {
  namespace Multer {
    export interface File {
      key: string;
      location: string; // for S3 storage
    }
  }
}
