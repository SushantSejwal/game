let user_score = 0;
let computer_score = 0;

const user_score_span = document.getElementById('user-score-count');
const computer_score_span = document.getElementById('computer-score-count');

const user_pick = document.querySelector('.user-result-span');
const computer_pick = document.querySelector('.computer-result-span');

const who_win = document.querySelector('#who-win');

// rock, paper, scissors
const rock_span = document.querySelector('#rock');
const paper_span = document.querySelector('#paper');
const scissors_span = document.querySelector('#scissors');


function game_main(){

    // getting choice from computer
    function compChoice(){
        const comp_choice = ['rock', 'paper', 'scissors'];
        let comp_choice_index = Math.floor(Math.random() * 3);
        return comp_choice[comp_choice_index];
    };

    function win(userChoice, computerChoice){
        user_score++;
        user_score_span.innerHTML = `${user_score}`;
        user_pick.innerHTML = `${userChoice.toUpperCase()}`;
        computer_pick.innerHTML = `${computerChoice.toUpperCase()}`;
        who_win.innerHTML = `You Win 🎉`
        document.querySelector(`#${userChoice}`).classList.add('win-green');
        setTimeout( () => document.querySelector(`#${userChoice}`).classList.remove('win-green'), 400 );
    };

    function loose(userChoice, computerChoice){
        computer_score++;
        computer_score_span.innerHTML = `${computer_score}`;
        user_pick.innerHTML = `${userChoice.toUpperCase()}`;
        computer_pick.innerHTML = `${computerChoice.toUpperCase()}`;
        who_win.innerHTML = `You Loose`
        document.querySelector(`#${userChoice}`).classList.add('loose-red');
        setTimeout( () => document.querySelector(`#${userChoice}`).classList.remove('loose-red'), 400 );
    };

    function draw(userChoice, computerChoice){
        user_pick.innerHTML = `${userChoice.toUpperCase()}`;
        computer_pick.innerHTML = `${computerChoice.toUpperCase()}`;
        who_win.innerHTML = `It's a draw`
        document.querySelector(`#${userChoice}`).classList.add('draw-yellow');
        setTimeout( () => document.querySelector(`#${userChoice}`).classList.remove('draw-yellow'), 400 );
    };

    function game(userChoice) {
        let computerChoice = compChoice();
        switch (`${userChoice}_${computerChoice}`){
            case 'rock_scissors':
            case 'paper_rock':
            case 'scissors_paper':
                console.log('you win');
                win(userChoice, computerChoice );
                break;
            case 'rock_paper':
            case 'paper_scissors':
            case 'scissors_rock':
                console.log('you loose');
                loose(userChoice, computerChoice );
                break;
            case 'rock_rock':
            case 'paper_paper':
            case 'scissors_scissors':
                console.log('draww');
                draw(userChoice, computerChoice );
                break;
        };
    };




    rock_span.addEventListener('click', () =>{ game('rock') });
    paper_span.addEventListener('click', () =>{ game('paper') });
    scissors_span.addEventListener('click', () =>{ game('scissors') });

};

game_main();