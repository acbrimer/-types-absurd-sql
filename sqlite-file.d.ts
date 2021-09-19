export function getBoundaryIndexes(blockSize: any, start: any, end: any): any[];
export function readChunks(chunks: any, start: any, end: any): ArrayBuffer;
export function writeChunks(bufferView: any, blockSize: any, start: any, end: any): {
    pos: any;
    data: ArrayBuffer;
    offset: number;
    length: number;
}[];
export class File {
    constructor(filename: any, ops: any, meta?: any);
    filename: any;
    buffer: Map<any, any>;
    ops: any;
    meta: any;
    _metaDirty: boolean;
    writeLock: boolean;
    openHandles: number;
    bufferChunks(chunks: any): void;
    open(): any;
    close(): void;
    delete(): void;
    load(indexes: any): any;
    read(bufferView: any, offset: any, length: any, position: any): any;
    write(bufferView: any, offset: any, length: any, position: any): any;
    readIfFallback(): Promise<void>;
    lock(lockType: any): boolean;
    _recordingLock: boolean;
    unlock(lockType: any): any;
    fsync(): void;
    setattr(attr: any): void;
    getattr(): any;
}
