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

        let botRandomConst = botRandom();

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


            if ((!(userNum % 2) && (botRandomConst === 'even')) || ((userNum % 2) && (botRandomConst === 'odd'))) {
                balls.player -= +userNum;
                balls.computer += +userNum;
                alert(`Бот угадал!\r\nВаш счет: ${balls.player}\r\nCчет компьютера: ${balls.computer}`);
            } else {
                if (userNum < balls.computer) {
                    balls.player += +userNum;
                    balls.computer -= +userNum;
                    alert(`Бот проиграл!\r\nВаш счет: ${balls.player}\r\nCчет компьютера: ${balls.computer}`)
                } else {
                    balls.player += balls.computer;
                    balls.computer = 0;
                    alert(`Бот проиграл!\r\nВаш счет: ${balls.player}\r\nCчет компьютера: ${balls.computer}`)
                }
            };
    
        
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
                const botTurnFoo = () => {
                    const botTurn = () => {
                        const randomBotTurn = Math.floor((Math.random() * balls.computer + 1));
                        return randomBotTurn;
                    }
                    const botTurnConst = botTurn();
        
                    let userGuess = confirm('Число четное?');
                    if (userGuess === true) {
                        userGuess = 'even';
                    } 
                    else {
                        userGuess = 'odd'
                    };
        
                    if ((!(botTurnConst % 2) && (userGuess === 'even')) || ((botTurnConst % 2) && (userGuess === 'odd'))) {
                        balls.player += botTurnConst;
                        balls.computer -= botTurnConst;
                        alert(`Угадали!\r\nВаш счет: ${balls.player}\r\nCчет компьютера: ${balls.computer}`);
                        } else {
                                if (botTurnConst < balls.player) {
                                    balls.player -= botTurnConst;
                                    balls.computer += botTurnConst;
                                    alert(`Не угадали!\r\nВаш счет: ${balls.player}\r\nCчет компьютера: ${balls.computer}`)
                                } else {
                                    balls.computer += balls.player;
                                    balls.player = 0;
                                    alert(`Не угадали!\r\nВаш счет: ${balls.player}\r\nCчет компьютера: ${balls.computer}`)
                                }
                        };
                
                    
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
                }
                }
                botTurnFoo();
                } 
    }
}
    window.marble = game;

})();

