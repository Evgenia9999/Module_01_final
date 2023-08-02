'use strict';

(function() {

    const FIGURES_ENG = ['rock', 'scissors', 'paper'];
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага',]
    const FRASES_ENG = ['you won', 'you lost', 'dead heat', 'Do you want to exit', 'Your score', 'You', 'Computer', 'Score', 'Choose rock, scissors or paper'];
    const FRASES_RUS = ['вы выиграли', 'вы проиграли','ничья', 'Вы точно хотите выйти', 'Ваш счет', 'Вы', 'Компьютер','Счет', 'Введите камень, ножницы, бумага'];

    let compVal = 0;
    
    const getRandomIntInclusive = (min, max) => {
        const random = Math.floor((Math.random() * max + min));

        return random;
    };


    const game = (language) => {
        const result = {
        player: 0,
        computer: 0,
    };

        Object.defineProperty(result, 'scoreGen', {
            get () {
                if (result.player > result.computer) {
                    return won;
                } else if (result.player < result.computer) {
                    return lost;
                } else {
                    return deadHeat;
                }
            },
        })
        const lang = (language === 'EN' || language === 'ENG') ? FIGURES_ENG : FIGURES_RUS;

        console.log('lang: ', lang);
        const [rock, scis, pap] = lang;

        const langPhrases = (language === 'EN' || language === 'ENG') ? FRASES_ENG : FRASES_RUS;
        const [won, lost, deadHeat, exit, yourScore, you, comp, score, repeat] = langPhrases;
        console.log(langPhrases);
                
            

        return function start() {

        const compRandom = getRandomIntInclusive(1, 3);
        console.log('compRandom: ', compRandom);

        const nameRandom = () => {
            
            if (compRandom === 1) {
                return compVal = rock;
                } else if (compRandom === 2) {
                return compVal = scis;
                } else if (compRandom === 3) {
                return compVal = pap;
                }
        }
        nameRandom();
        console.log(compVal);

            const insertStr = prompt(`${rock}, ${scis}, ${pap} ?`);
        
            if (insertStr === null) {
            const r = confirm(`${exit}?`); 
            if (r === true) {
            alert(`${yourScore}: \r\n ${you}: ${result.player} \r\n ${comp}: ${result.computer} \r\n ${score}: ${result.scoreGen}`)
                return null;
            } else {
                start();
            }
            };
            
            let insertVal = insertStr.toLowerCase();
            console.log('insertVal: ', insertVal, typeof insertVal);
                
                
            if (!(rock.includes(insertVal)) && !(scis.includes(insertVal)) && !(pap.includes(insertVal))) {
                    alert (repeat);
                    start();
                } else if (compVal.includes(insertVal)) {
                    alert(deadHeat);
                    return start();
                } else if (((compVal === pap) && scis.includes(insertVal)) || ((compVal === scis) && rock.includes(insertVal)) || ((compVal === rock) && pap.includes(insertVal))) {
                    result.player += 1;
                    console.log('result.player: ', result.player);
                    alert(won);
                    return start();
                } else {
                    result.computer += 1;
                    console.log('result.computer: ', result.computer);
                    alert(lost);
                    return start();
                }
            };
    }
    window.RPS_ENG = game;

})();





