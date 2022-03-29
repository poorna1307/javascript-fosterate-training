//using pattern attribute g which meaning pattern matching is done global finds all the matches
let text_exp2 = "Is this all there is?";
let pattern_exp2 = /is/g; 
let result_exp2 = text_exp2.match(pattern_exp2);
console.log(result_exp2)
//using pattern attribute i which means pattern matching done finds only first occurence and finds case-insenitive 
let text_exp1 = "Is this all there is?";
let pattern_exp1 = /is/i; 
let result_exp1 = text_exp1.match(pattern_exp1);
console.log(result_exp1)
//using m -multiline matching
let text_exp0= `Is this
all there
is`

let pattern_exp0= /^all/m;
let result_exp0 = text_exp0.match(pattern_exp0);
console.log(result_exp0)
