
import { ClientOptions, EngineConfig } from './clientOptions';

declare class Warper {
    warp: {
        getEngineConfig(): EngineConfig;
        version: string;
    };
    constructor(clientOptions?: ClientOptions);
}

export default Warper;
