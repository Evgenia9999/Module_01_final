'use strict';

(function() {


    const FIGURES_RUS = ['камень', 'ножницы', 'бумага',]

    const [x , y , z] = FIGURES_RUS;

    let compVal = 0;
    
    const getRandomIntInclusive = (min, max) => {
        const random = Math.floor((Math.random() * max + min));
        console.log(random);

        if (random === 1) {
            return compVal = x;
            } else if (random === 2) {
            return compVal = y;
            } else if (random === 3) {
            return compVal = z;
            }
    };


    const game = (language) => {
        const result = {
        player: 0,
        computer: 0,
    };

    Object.defineProperty(result, 'scoreRus', {
        get () {
            if (result.player > result.computer) {
                return 'вы выиграли';
            } else if (result.player < result.computer) {
                return 'вы проиграли';
            } else {
                return 'ничья';
            }
        },
    })

        return function start() {

            console.log('computer', getRandomIntInclusive(1, 3));
            console.log('compVal[0]', compVal[0], typeof compVal[0]);

            const insertStr = prompt('камень, ножницы, бумага?');
        
            if (insertStr === null) {
            const r = confirm('Вы точно хотите выйти?'); 
            if (r === true) {
                alert(`Ваш счет: \r\n Вы: ${result.player} \r\n Компьютер: ${result.computer} \r\n Счет: ${result.scoreRus}`)
                return null;
            } else {
                start();
            }
            };
            
            let insertVal = insertStr.toLowerCase();
            console.log('insertVal: ', insertVal, insertVal[0], typeof insertVal);
                
                
            if ((insertVal[0] !== x[0]) && (insertVal[0] !== y[0]) && (insertVal[0] !== z[0])) {
                    alert ('Введите камень, ножницы, бумага');
                    start();
                } else if (insertVal[0] === compVal[0]) {
                    alert('Ничья');
                    return start();
                } else if (((compVal === z) && (insertVal[0] === y[0])) || ((compVal === y) && (insertVal[0] === x[0])) || ((compVal === x) && (insertVal[0] === z[0]))) {
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
        };
    }
    window.RPS = game;

})();


