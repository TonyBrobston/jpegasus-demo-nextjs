export interface IDemoComponent {
  compressedFile: File|Blob,
  compressedFileOrientation: number,
  options: {
    maxHeight: number,
    maxWidth: number,
    scaleImageBy: number,
    quality: number,
    returnOriginalIfCompressedFileIsLarger: boolean,
    returnOriginalOnFailure: boolean,
    fixImageOrientation: boolean,
    preserveFileType: boolean,
    transparencyFillColor: string
  },
  originalFile: File,
  originalFileOrientation: number
}
