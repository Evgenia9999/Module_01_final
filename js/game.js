'use strict';

(function() {

    const game = () => {

        const balls = {
            player: 5,
            computer: 5,
            
            get score () {
                if (balls.player > balls.computer) {
                    return 'вы выиграли';
                } else if (balls.player < balls.computer) {
                    return 'вы проиграли';
                } else {
                    return 'ничья';
                }
            },
        };
        
        const botRandom = () => {
            const randomFoo = Math.floor((Math.random() * 2 + 1));
            const evenCheck = randomFoo === 2 ? 'even' : 'odd'; 
    
            return evenCheck;
        };

        const startOver = () => {
            balls.player = 5;
            balls.computer = 5;
        };

    return function start() {

        let userNum = prompt(`Загадайте число шариков от 1 до ${balls.player}`)
        console.log('userNum: ', userNum);

            if (userNum === null) {
                const r = confirm('Вы точно хотите выйти?'); 
                if (r === true) {
                    alert(`Ваш счет: \r\n Вы: ${balls.player} \r\n Компьютер: ${balls.computer} \r\n Счет: ${balls.score}`)
                    return null;
                } else {
                    return start();
                };
            } else if (!(userNum <= balls.player && userNum >= 1)) {
                alert(`Нужно ввести число от 1 до ${balls.player}`)
                return start();
            };

        const botRandomConst = botRandom();
        console.log('botRandomConst: ', botRandomConst);

        const minNumCheck = () => {
            if (balls.player < 1) {
                const cancel = confirm(`Вы проиграли. У вас не осталось шаров.\r\nВаш счет: \r\n Вы: ${balls.player} \r\n Компьютер: ${balls.computer} \r\n Счет: ${balls.score}\r\nХотите сыграть еще разок?`);
                if (cancel !== true) {
                    return null;
                } 
                else {
                    startOver();
                    start();
                };
            } else if (balls.computer < 1) {
                const cancel = confirm(`Вы выиграли. У компьютера не осталось шаров.\r\nВаш счет: \r\n Вы: ${balls.player} \r\n Компьютер: ${balls.computer} \r\n Счет: ${balls.score}\r\nХотите сыграть еще разок?`);
                if (cancel !== true) {
                    return null;
                } 
                else {
                    startOver();
                    start();
                };
            } else {
                start();
            };
        };

            if ((!(userNum % 2) && (botRandomConst === 'even')) || ((userNum % 2) && (botRandomConst === 'odd'))) {
                alert('Бот угадал!');
                balls.player -= +userNum;
                console.log('balls.player: ', balls.player);
                balls.computer += +userNum;
                console.log('balls.computer: ', balls.computer);
            } else {
                alert('Бот проиграл!')
                    if (userNum < balls.computer) {
                        balls.player += +userNum;
                        console.log('balls.player: ', balls.player);
                        balls.computer -= +userNum;
                        console.log('balls.computer: ', balls.computer);
                    } else {
                        balls.player += balls.computer;
                        console.log('balls.player: ', balls.player);
                        balls.computer = 0;
                        console.log('balls.computer: ', balls.computer);
                    }
            };

        minNumCheck();
    };
    };

    window.marble = game;

})();

























// (function() {


//     const FIGURES_RUS = ['камень', 'ножницы', 'бумага',]

//     const [x , y , z] = FIGURES_RUS;

//     let compVal = 0;
    
//     const getRandomIntInclusive = (min, max) => {
//         const random = Math.floor((Math.random() * max + min));
//         console.log(random);

//         if (random === 1) {
//             return compVal = x;
//             } else if (random === 2) {
//             return compVal = y;
//             } else if (random === 3) {
//             return compVal = z;
//             }
//     };


//     const game = (language) => {
//         const result = {
//         player: 0,
//         computer: 0,
//     };

//     Object.defineProperty(result, 'scoreRus', {
//         get () {
//             if (result.player > result.computer) {
//                 return 'вы выиграли';
//             } else if (result.player < result.computer) {
//                 return 'вы проиграли';
//             } else {
//                 return 'ничья';
//             }
//         },
//     })

//         return function start() {

//             console.log('computer', getRandomIntInclusive(1, 3));
//             console.log('compVal[0]', compVal[0], typeof compVal[0]);

//             const insertStr = prompt('камень, ножницы, бумага?');
        
//             if (insertStr === null) {
//             const r = confirm('Вы точно хотите выйти?'); 
//             if (r === true) {
//                 alert(`Ваш счет: \r\n Вы: ${result.player} \r\n Компьютер: ${result.computer} \r\n Счет: ${result.scoreRus}`)
//                 return null;
//             } else {
//                 start();
//             }
//             };
            
//             let insertVal = insertStr.toLowerCase();
//             console.log('insertVal: ', insertVal, insertVal[0], typeof insertVal);
                
                
//             if (!(x.includes(insertVal) || y.includes(insertVal) || z.includes(insertVal))) {
//                     alert ('Введите камень, ножницы, бумага');
//                     start();
//                 } else if (compVal.includes(insertVal)) {
//                     alert('Ничья');
//                     return start();
//                 } else if (((compVal === z) && y.includes(insertVal)) || ((compVal === y) && x.includes(insertVal)) || ((compVal === x) && z.includes(insertVal))) {
//                     result.player += 1;
//                     console.log('result.player: ', result.player);
//                     alert('Вы выиграли');
//                     return start();
//                 } else {
//                     result.computer += 1;
//                     console.log('result.computer: ', result.computer);
//                     alert('Вы проиграли');
//                     return start();
//                 }
//         };
//     }
//     window.RPS = game;

// })();




