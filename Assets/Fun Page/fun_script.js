console.log("Hi Everyone!");

const btn_1 = document.getElementById('btn-1');
const pic = document.createElement('img');
btn_1.addEventListener("click", function(){
    pic.src = 'dan.png';
    pic.height = 300;
    pic.width = 300;
    document.querySelector('.container1').appendChild(pic)
    });

const btn_2 = document.getElementById('btn-2');
const par_2 = document.createElement('p')
btn_2.addEventListener("click", function(){
     par_2.innerText = random_jokes();
     document.querySelector('.container2').appendChild(par_2);
})

const btn_3 = document.getElementById('btn-3');
const par_3 = document.createElement('p');
btn_3.addEventListener("click", function(){
     par_3.innerText = random_quotes();
     document.querySelector('.container3').appendChild(par_3);
}) 

const btn_4 = document.getElementById('btn-4');
const par_4 = document.createElement('p')
btn_4.addEventListener("click", function(){
     par_4.innerText = random_riddles();
     document.querySelector('.container4').appendChild(par_4);
}) 

function random_jokes(){
    const arr = ['Why do programmers prefer dark mode? Because light attracts bugs!', 'Why did the Web Devloper go broke? Because He lost his cache(cash)!', 'How do you comfort a JavaScrit bug? You console it!', 'What did the CSS say to the HTML?"You\'ve got class!"', 'Why was the JavaScript developer sad?Because he didn \'t "null" how to express himself.', 'How does a computer take a coffee break?It has a byte!.','Why did the developer break up with his database?They had too many "irreconcilable differences."', 'Why was the HTML guy so good at relationships?He had a deep understanding of <div>orce.', 'What do you call a group of musical whales?An orca-stra!', 'Why did the scarecrow become a successful web developer?Because he was outstanding in his field!', 'What\'s a computer\'s favorite snack?Chips!', 'One day, a great mathematician, a philosophist and an idiot, were travelling. On the way they had an accident and all died.\t\t\t On their way to heaven, they met Satan. Satan said "I know that all of you want to enter Heaven but, only the person that ask me a question I can not answer will enter Heaven. If i can  answer your question, you will go straight to hell." The great mathematician asked Satan for the hardest mathematics formula. Immediately Satan told him and he went to Hell. Next the philosophist asked Satan for Man\'s worst tragedy on earth. Immediately Satan told him, he also went to hell. Finally it was the idiot\'s turn. He asked for a chair with seven holes. When he got the chair, he sat on it and farted. Then he stood up and asked "Which hole did the fart come out from?". Satan looked all the holes and chose the one in the middle. Immediately the idiot laughed and said:"It came out of my \"asshole\"."'];
    const rand = arr[Math.floor(Math.random() * arr.length)];
    // console.log(rand);
    return rand
}
random_jokes();

function random_riddles(){
    const arr = ['I am a programming language with a snake in my name.What am I?nohtyP', 'I am a method of iteration, named after a character of a snake.What am I? pool roF', 'I\m a data structure that mimics a real-world line.What am I? eueuQ', ];
    const rand = arr[Math.floor(Math.random() * arr.length)];
    // console.log(rand);
    return rand;
}
random_riddles();

function random_quotes(){
    const arr = ['"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler', '"The computer was born to solve problems that did not exist before." - Bill Gates', '"First, solve the problem. Then, write the code." - John Johnson', '"It\s not at all important to get it right the first time. It\'s vitally important to get it right the last time." - Andrew Hunt and David Thomas', '"Programs must be written for people to read, and only incidentally for machines to execute." - Harold Abelson' ];
    const rand = arr[Math.floor(Math.random() * arr.length)];
    return rand;
}
random_quotes();

function random_memes(){
    const arr =[]
}