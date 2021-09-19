export class Reader {
    constructor(buffer: any, { initialOffset, useAtomics, stream, debug, name }?: {
        initialOffset?: number;
        useAtomics?: boolean;
        stream?: boolean;
        debug: any;
        name: any;
    });
    buffer: any;
    atomicView: Int32Array;
    offset: number;
    useAtomics: boolean;
    stream: boolean;
    debug: any;
    name: any;
    log(...args: any[]): void;
    waitWrite(name: any, timeout?: any): void;
    flip(): void;
    done(): boolean;
    peek(fn: any): any;
    peekOffset: number;
    string(timeout: any): any;
    _int32(): number;
    int32(): number;
    bytes(): ArrayBuffer;
}
export class Writer {
    constructor(buffer: any, { initialOffset, useAtomics, stream, debug, name }?: {
        initialOffset?: number;
        useAtomics?: boolean;
        stream?: boolean;
        debug: any;
        name: any;
    });
    buffer: any;
    atomicView: Int32Array;
    offset: number;
    useAtomics: boolean;
    stream: boolean;
    debug: any;
    name: any;
    log(...args: any[]): void;
    waitRead(name: any): void;
    finalize(): void;
    string(str: any): void;
    _int32(num: any): void;
    int32(num: any): void;
    bytes(buffer: any): void;
}
