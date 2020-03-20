module.exports = function reverse (n) {
    if (typeof n !== "number"){throw "Error!";}
    let aArr=n.toString().split("").reverse();
    aArr=aArr.join("");
    aArr=parseInt(aArr,10);
    return aArr;
};
