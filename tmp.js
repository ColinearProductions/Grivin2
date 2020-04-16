var reverseString = function(s) {
    s= [...h(s)];
    console.log(s)

};

function h(sss){
    if(sss.length<=1)
        return sss;
    return [ ...h(sss.slice(1,sss.length)), sss[0] ]
}

let tmp = "hello".split("");
reverseString(tmp);
console.log(tmp);