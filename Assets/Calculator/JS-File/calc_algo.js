// To solve

function split_by_sym(exp){
    var res = [];
    var temp = '';
    for (let i=0; i<exp.length; i++){
        let s = exp[i];
        if (isFinite(s) || s === '.'){
            temp += s;
        } else if (s === ' '){
            continue;
        }
        else {
            if (temp) {res.push(temp)}
            res.push(s);
            temp = "";
        }
    }
    if (temp) {res.push(temp)}
    return res;
};

function solve_only_sums(exp){
    exp = split_by_sym(exp);
    let sum = 0;

    let prev = '+';
    for (let i=0; i<exp.length; i++){
        let s = exp[i];
        if (!isFinite(s)){
            prev = s;
            continue;
        }
        if (prev == '+'){
            sum += Number(s)
        }
        else {sum -= Number(s)}
    }
    return String(sum);
};

function solve_only_products(exp){
    exp = split_by_sym(exp);
    let product = 1;

    let prev = '*';
    for (let i=0; i<exp.length; i++){
        let s = exp[i];
        if (!isFinite(s)){
            prev = s;
            continue;
        }
        if (prev == '*'){
            product *= Number(s)
        }
        else {product /= Number(s)}
    }
    return String(product);
};

function solve_only_prods_and_sums(exp){
    exp = split_by_sym(exp)
    exp.push('+')

    // Step 1: Solve products 8*4+5/6
    let exp2 = [];
    let l=0;
    for (let i=0; i<exp.length; i++) {
        if (exp[i] === '-' || exp[i] === '+') {
            if (i===0){ 
                exp2.push('0')
            } else {
                exp2.push(solve_only_products(exp.slice(l, i).join('')));
            }
            exp2.push(exp[i]);
            l = i+1;
        }
    }
    exp2 = exp2.slice(0,-1).join('');

    // Step 2: Solve sums
    let result = solve_only_sums(exp2);
    return result;
}

function solve_only_powers(exp){
    exp = split_by_sym(exp).reverse();
    // console.log(exp);

    while (exp.length > 1){
        last = Number(exp[exp.length-1])**Number(exp[exp.length-3]);
        exp.pop();
        exp.pop();
        exp.pop();
        exp.push(last);
    }
    return String(exp[0]);
}

function solve_only_prods_sums_and_pows(exp) {
    exp = split_by_sym(exp).concat('+');

    // Step 1: Solve only powers first
    let exp2 = [];
    let i = 0;
    let l = 0;
    while (i < exp.length) {
        if (exp[i] === '-' || exp[i] === '+' || exp[i] === '/' || exp[i] === '*' ) {
            if (i === 0) {exp2.push('0')}
            else {
                exp2.push(solve_only_powers(exp.slice(l,i).join('')));
            }
            exp2.push(exp[i]);
            l = i+1;
        }
        i++;
    }
    exp2 = exp2.slice(0,-1).join('');

    // Step 2: Solve sums and prods
    let result = solve_only_prods_and_sums(exp2);
    return result;
}

export function solution(exp){
    return solve_only_prods_sums_and_pows(exp);
}