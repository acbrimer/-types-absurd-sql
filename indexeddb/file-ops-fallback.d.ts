export class FileOpsFallback {
    constructor(filename: any, onFallbackFailure: any);
    filename: any;
    dbName: any;
    cachedFirstBlock: any;
    writeQueue: any[];
    blocks: Map<any, any>;
    lockType: number;
    transferBlockOwnership: boolean;
    persistance: Persistance;
    readIfFallback(): Promise<{
        size: any;
        blockSize: any;
    }>;
    lock(lockType: any): boolean;
    unlock(lockType: any): boolean;
    delete(): void;
    open(): void;
    close(): void;
    readMeta(): {
        size: any;
        blockSize: any;
    };
    writeMeta(meta: any): void;
    readBlocks(positions: any, blockSize: any): {
        pos: any;
        data: any;
    }[];
    writeBlocks(writes: any, blockSize: any): void;
    queueWrite(key: any, value: any): void;
    flush(): void;
}
declare class Persistance {
    constructor(onFallbackFailure: any);
    _openDb: any;
    hasAlertedFailure: boolean;
    onFallbackFailure: any;
    getDb(): Promise<any>;
    closeDb(): void;
    readAll(): Promise<any>;
    write(writes: any, cachedFirstBlock: any, hasLocked: any): Promise<void>;
}
export {};
