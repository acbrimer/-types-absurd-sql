export default class MemoryBackend {
    constructor(fileData: any);
    fileData: any;
    files: {};
    createFile(filename: any): any;
    getFile(filename: any): any;
    startProfile(): void;
    stopProfile(): void;
}
