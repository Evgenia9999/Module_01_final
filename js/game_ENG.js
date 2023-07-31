'use strict';

(function() {

    const FIGURES_ENG = ['rock', 'scissors', 'paper'];
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага',];

    let compVal = 0;


    const game = (language) => {
        const result = {
        player: 0,
        computer: 0,
        };

        Object.defineProperty(result, 'scoreEng', {
            get () {
                if (result.player > result.computer) {
                    return 'You won';
                } else if (result.player < result.computer) {
                    return 'You lost';
                } else {
                    return 'Dead heat';
                }
            },
        })

        Object.defineProperty(result, 'scoreRus', {
            get () {
                if (result.player > result.computer) {
                    return 'Вы выиграли';
                } else if (result.player < result.computer) {
                    return 'Вы проиграли';
                } else {
                    return 'Ничья';
                }
            },
        })

        const lang = (language === 'EN' || language === 'ENG') ?
        FIGURES_ENG : FIGURES_RUS;

        const [x , y , z] = lang;

        const getRandomIntInclusive = (min, max) => {
            const random = Math.floor((Math.random() * max + min));

        if (random === 1) {
            return compVal = x;
            } else if (random === 2) {
            return compVal = y;
            } else if (random === 3) {
            return compVal = z;
            }
        };
    
        return function start() {

            console.log(getRandomIntInclusive(1, 3))

            if (language === 'EN' || language === 'ENG') {

                const isertVal = prompt('rock, scissors, paper?');

                if (isertVal === null) {
                    const r = confirm('Do you want to exit?'); 
                    if (r === true) {
                        alert(`Your score: \r\n You: ${result.player} \r\n Computer: ${result.computer} \r\n ScoreEng: ${result.scoreEng}`);
                        return null;
                    } else {
                        start();
                    }
                };
            
                if (isertVal === '') {
                    alert ('You need to enter: rock, scissors or paper');
                    start();
                } else if (isertVal[0] === compVal[0]) {
                    alert('Dead heat');
                    return start();
                } else if (((compVal === 'paper') && (isertVal === y[0])) || ((compVal === 'scissors') && (isertVal === x[0])) || ((compVal === 'rock') && (isertVal === z[0]))) {
                    result.player += 1;
                alert('You won');
                    return start();
                } else {
                    result.computer += 1;
                    alert('You lost');
                    return start();
                }

            } else {

                const [x , y , z] = FIGURES_RUS;

                const isertVal = prompt('камень, ножницы, бумага?');
                
                if (isertVal === null) {
                    const r = confirm('Вы точно хотите выйти?'); 
                    if (r === true) {
                        alert(`Ваш счет: \r\n Вы: ${result.player} \r\n Компьютер: ${result.computer} \r\n Счет: ${result.scoreRus}`)
                        return null;
                    } else {
                        start();
                    }
                };
            
                    if (isertVal === '') {
                        alert ('Введите камень, ножницы, бумага');
                        start();
                    } else if (isertVal[0] === compVal[0]) {
                        alert('Ничья');
                        return start();
                    } else if (((compVal === 'бумага') && (isertVal === y[0])) || ((compVal === 'ножницы') && (isertVal === x[0])) || ((compVal === 'камень') && (isertVal === z[0]))) {
                        result.player += 1;
                        console.log('result.player: ', result.player);
                        alert('Вы выиграли');
                        return start();
                    } else {
                        result.computer += 1;
                        console.log('result.computer: ', result.computer);
                        alert('Вы проиграли');
                        return start();
                    }
            }

        };
    }
    window.RPS = game;

})();


