module.exports = function reverse (n) {
    let numb = String(n).split("").reverse();
    if(numb[numb.length-1]== "+" || numb[numb.length-1]== "-"){
        numb.pop();
    }
    return numb.join("");
}
