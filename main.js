


var turn = 0;

var XandO = ['X', 'O'];




$('td').on('click', function(){
  $(this).html(XandO[turn % 2]);
  turn += 1;
})
