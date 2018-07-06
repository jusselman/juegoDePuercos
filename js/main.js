


var scores, roundScore, activePlayer, dice, gamePlaying;

init();




document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {

  // GENERATE RANDOM NUMBER //
      var dice = Math.floor(Math.random() * 6) + 1;

    // GENERATE DISPLAY //
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'img/dice-' + dice + '.png';

    // UPDATE THE ROUND SCORE IF NUMBER IS NOT 1 //
        if(dice !== 1) {
          // ADD SCORE //
          roundScore  += dice;
          document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
          // NEXT PLAYER //
           nextPlayer();
        }
      }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
  if (gamePlaying) {
    //  ADD CURRENT SCORE TO GLOBAL SCORE //
    scores[activePlayer] += roundScore;


    // UPADTE USER INTERFACE //
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // CHECK IF PLAYER WON THE GAME //
    if (scores[activePlayer] >= 20) {
      document.querySelector('#name-' + activePlayer).textContent = '¡Cochinazo!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      // document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;

    } else {
      // GO TO NEXT PLAYER //
      nextPlayer();
    }
  }
});

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = "0";
  document.getElementById('current-1').textContent = "0";

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector('.dice').style.display = 'none';
}

  document.querySelector('.btn-new').addEventListener('click', init);



  function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
  }





//  = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// var x = document.querySelector("#score-0").textContent;
