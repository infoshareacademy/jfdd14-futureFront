
console.log("node");

const add = (a,b,znak) => {
    if(typeof(a) !== "number" & typeof(b) !== "number"){console.log("Niepoprawne parametry"); return};
    if(a&b){console.log(eval(`${a} ${znak} ${b}`))};
    if(!b) {console.log(a)};
 }


 console.log("if any input diffrent then number returns alert", add("f"));
 console.log("if inputs are two numbers returns sum", add(5,3,"*"));
 console.log("if only one number returns this number", add(3));
