export function add(...args){
    let sum = 0;
    for(let num of args){
        sum += num;
    }
    return sum;
}