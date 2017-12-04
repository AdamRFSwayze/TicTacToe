


var turn = 0;

var players = ['player1', 'player2'];

var XandO = ['X', 'O'];

var occupied_spots = {
    player1 : [],
    player2 : []
};


function winning_condition(){
    if (occupied_spots['player1'].includes('middleLeft') || occupied_spots['player2'].includes('middleLeft') ){
        return true
    } else {
        return false
    }
}



//Handling the placement of X's and O's
$('td').on('click', function(){
  var id_string = $(this).prop('id');
  if (occupied_spots['player1'].includes(id_string) || occupied_spots['player2'].includes(id_string)){
      console.log('Taken')} else {
      $(this).html(XandO[turn % 2]);
      occupied_spots[players[turn % 2]].push($(this).prop('id'));
      turn += 1;
  }
  console.log(occupied_spots)

  if( winning_condition()==true){
      console.log('Congrats')
  }
})
