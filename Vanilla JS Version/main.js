


var turn = 0;


var players = ['player1', 'player2'];


var XandO = ['X', 'O'];

var occupied_spots = {
    player1 : [],
    player2 : []
};

var winning_moves = [['topLeft', 'topMiddle', 'topRight'],
                     ['middleLeft', 'middleMiddle', 'middleRight'],
                     ['bottomLeft', 'bottomMiddle', 'bottomRIght'],
                     ['topLeft', 'middleLeft', 'bottomLeft'],
                     ['topMiddle', 'middleMiddle', 'bottomMiddle'],
                     ['topRight', 'middleRight', 'bottomRight'],
                     ['topLeft', 'middleMiddle', 'bottomRight'],
                     ['topRight', 'middleMiddle', 'bottomLeft']]

function winning_condition(){
    for(i = 0; i < winning_moves.length ; i++){
        if (occupied_spots[players[turn % 2]].includes(winning_moves[i][0]) &&
            occupied_spots[players[turn % 2]].includes(winning_moves[i][1]) &&
            occupied_spots[players[turn % 2]].includes(winning_moves[i][2]) ){
                return true
            }
    }
    return false
}




//Handling the placement of X's and O's
$('td').on('click', function(){
  var id_string = $(this).prop('id');
  if (occupied_spots['player1'].includes(id_string) || occupied_spots['player2'].includes(id_string)){
      console.log('Taken')} else {
      $(this).html(XandO[turn % 2]);
      occupied_spots[player_names[turn % 2]].push($(this).prop('id'));

  }

  if( winning_condition()==true){
      alert(players[turn % 2] + " wins!")
  }
  turn += 1;
})
