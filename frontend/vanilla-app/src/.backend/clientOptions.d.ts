
export type ClientOptions = {
    env?: string;
    emulator?: {
        port?: number;
        host?: string;
        url?: string;
    },
    engine?: {
        url?: string;
    }
}
export type EngineConfig = {
    env?: string;
    accessKey?: string;
    emulator?: {
        port?: number;
        host?: string;
        url?: string;
    },
    engine?: {
        url?: string;
    }
    bid?: string;
    sbu?: string;
}
