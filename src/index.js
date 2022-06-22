 module.exports = function reverse (n) {
    let m = Math.abs(n);
    let s = m.toString();
    let rever = '';
    for(let i = 1; i<=s.length; i++){
        rever = rever + s[s.length-i];
    }
    return rever;
}
// let n = -123;

// console.log(rever);
