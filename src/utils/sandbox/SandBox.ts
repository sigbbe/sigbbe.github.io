type MyStringArr = string[];

function getAllForwardSeq(msg: string): MyStringArr {
    const _ret = new Array<string>();
    for (let i = 1; i <= msg.length; i++) {
        _ret.push(msg.substring(0, i));
    }
    return _ret;
}

export { getAllForwardSeq };
