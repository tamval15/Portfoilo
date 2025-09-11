function clickMe(){
    // alert('');
    // confirm('');
}
// function email(){
    // const arr = ['qwert12', 'yuiop34', 'asdfg56', 'hjkl78', 'zxcvbnm90'];   
    // const str = '@gmail.com';
    // const rand = arr[Math.floor(Math.random() * arr.length)];
    // return rand + str;
// }
const button = document.getElementById('button');
button.addEventListener ("click", function(){
    const result = secondEmail();
    console.log(result);
});
function secondEmail(){
    const arr = [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; 
    const arr2 = [];
    for (let i = 0;i < 7;i++){
        const random = arr[Math.floor(Math.random() * arr.length)];
        const str = arr2.push(random);
 }
    const arrr = [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']; 
    const arrr2 = [];
    for (let i = 0;i < 1;i++){
    const randomm = arrr[Math.floor(Math.random() * arrr.length)];
    const strr = arrr2.push(randomm);

}
 const result = 'Your Email Account is: ' + arrr2.join('') + arr2.join('') +'@gmail.com';

 return result;
}
console.log(secondEmail());

const el1 = document.createElement('p');
    const el2 = document.createElement('p')

    function onClickEvent() {
    el1.innerText = secondEmail();
     el2.innerText = 'Your Password is: ' + 'You are welcome.';
    document.querySelector('.container2').appendChild(el1);
    document.querySelector('.container2').appendChild(el2);
}
 document.querySelector('button').onclick = onClickEvent;