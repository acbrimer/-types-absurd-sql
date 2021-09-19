export default class IndexedDBBackend {
    constructor(onFallbackFailure: any);
    onFallbackFailure: any;
    createFile(filename: any): File;
    _files: Set<any>;
    startProfile(): void;
    stopProfile(): void;
}
import { File } from "../sqlite-file";
