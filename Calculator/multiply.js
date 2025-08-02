export function multiply(...args){
    let p = 1;
    for(let num of args){
        p *= num;
    }
    return p;
}