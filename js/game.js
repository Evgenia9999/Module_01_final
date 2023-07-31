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

        return function start() {

            console.log('computer', getRandomIntInclusive(1, 3));
            console.log(typeof compVal[0]);

            const isertVal = prompt('камень, ножницы, бумага?');
            console.log('isertVal: ', isertVal);
            console.log(typeof isertVal);
            


            if (isertVal === null) {
                const r = confirm('Вы точно хотите выйти?'); 
                if (r === true) {
                    alert(`Ваш счет: \r\n Вы: ${result.player} \r\n Компьютер: ${result.computer}`)
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

        };
    }
    window.RPS = game;

})();


