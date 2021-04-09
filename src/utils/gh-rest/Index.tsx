/* eslint-disable @typescript-eslint/no-var-requires */

const axios = require('axios');

const GITHU_API_URI = (path?: string) => `https://api.github.com/${(path !== undefined) ? path : ''}`;

interface Repository {
    name?: string;
}

export type GhObject = Repository | null;

function ghGet(path: string): GhObject {
    const uri: string = GITHU_API_URI(path);
    try {
        return null;
    } catch (e) {
        return null;
    }
}


export default { };
