export class FileOps {
    constructor(filename: any);
    filename: any;
    getStoreName(): any;
    invokeWorker(method: any, args: any): number | boolean | {
        pos: any;
        data: ArrayBuffer;
    }[] | {
        size: number;
        blockSize: number;
    };
    lock(lockType: any): number | boolean | {
        pos: any;
        data: ArrayBuffer;
    }[] | {
        size: number;
        blockSize: number;
    };
    unlock(lockType: any): number | boolean | {
        pos: any;
        data: ArrayBuffer;
    }[] | {
        size: number;
        blockSize: number;
    };
    delete(): void;
    open(): void;
    writer: Writer;
    reader: Reader;
    close(): void;
    worker: any;
    readMeta(): number | boolean | {
        pos: any;
        data: ArrayBuffer;
    }[] | {
        size: number;
        blockSize: number;
    };
    writeMeta(meta: any): number | boolean | {
        pos: any;
        data: ArrayBuffer;
    }[] | {
        size: number;
        blockSize: number;
    };
    readBlocks(positions: any, blockSize: any): number | boolean | {
        pos: any;
        data: ArrayBuffer;
    }[] | {
        size: number;
        blockSize: number;
    };
    writeBlocks(writes: any, blockSize: any): number | boolean | {
        pos: any;
        data: ArrayBuffer;
    }[] | {
        size: number;
        blockSize: number;
    };
}
import { Writer } from "./shared-channel";
import { Reader } from "./shared-channel";
