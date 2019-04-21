import React, { Component } from 'react';
import Board from './board';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      values : { topLeft : ' ', topMiddle: ' ', topRight : ' ', 
                  middleLeft : ' ', middleMiddle : ' ', middleRight: ' ', 
                  bottomLeft : ' ', bottomMiddle : ' ', bottomRight : ' '
      }, 
      turn : 0, 
      showModal : false, 
      gameOver : false, 
      gameStarted : false,
      players : {1 : 'Player One', 2: 'Player 2'}
    }
    this.player1 = React.createRef(); 
    this.player2 = React.createRef(); 
    this.toggleBoard = this.toggleBoard.bind(this)
    this.winningCondition = this.winningCondition.bind(this)
    this.resetBoard = this.resetBoard.bind(this)
    this.startGame = this.startGame.bind(this)

    this.handleShow = () => {
      this.setState({ show: true , gameOver : true});
    };

    this.handleHide = () => {

      this.setState({ show: false });
    };
  }



  startGame(){
    this.setState({players : {1: this.player1.current.value, 2:this.player2.current.value }, gameStarted : true})
    this.player1.current.value = this.player1.current.value + ' is Player 1'
    this.player2.current.value = this.player2.current.value + ' is Player 2'

  }
  
  toggleBoard(position){
    if (this.state.gameOver === false && this.state.values[position] === ' '){ 
      this.setState({values :
                    {...this.state.values, 
                      [position] : this.state.turn  % 2 === 0 ? 'X' : '0'
                    }, turn: this.state.turn + 1
                  }, this.winningCondition
                  )}

  }


  winningCondition() {
    if ((this.state.values['topLeft'] === this.state.values['topMiddle'] && this.state.values['topLeft']  === this.state.values['topRight'] && this.state.values['topLeft'] !== ' ')
    || (this.state.values['middleLeft'] === this.state.values['middleMiddle'] && this.state.values['middleLeft']  === this.state.values['middleRight'] && this.state.values['middleLeft'] !== ' ')
    || (this.state.values['bottomLeft'] === this.state.values['bottomMiddle'] && this.state.values['bottomLeft']  === this.state.values['bottomRight'] && this.state.values['bottomLeft'] !== ' ')
    || (this.state.values['topLeft'] === this.state.values['middleLeft'] && this.state.values['topLeft']  === this.state.values['bottomLeft'] && this.state.values['topLeft'] !== ' ')
    ){
      this.handleShow()
    } else if (1 === 2){

    }
    else {
      return false
    }
  }
  

  resetBoard(){
    this.setState({values : { topLeft : ' ', topMiddle: ' ', topRight : ' ', 
                                   middleLeft : ' ', middleMiddle : ' ', middleRight: ' ', 
                                    bottomLeft : ' ', bottomMiddle : ' ', bottomRight : ' '},
                                    gameOver: false,
                                    show: false
                                    
                                  })
  }

  render() {
    return (
      <Container >
      
      <Jumbotron>
    <h1>Tic Tac Toe!</h1>
       
       
    {this.state.gameStarted === false ? (
      <div>
       <p>
      Enter your names below and press "Ready" to play!
        </p>
    <p>   

  
  <InputGroup className="mb-3">
  <InputGroup.Prepend>
  <Button variant="outline-secondary" onClick={this.startGame}>Ready?</Button>
  </InputGroup.Prepend>
  <FormControl ref={this.player1} placeholder="Player One"/>
  <FormControl ref={this.player2} placeholder="Player Two" />
  </InputGroup> 
    </p>
    </div>) : ''}
  


  <h2 className="turnCounter">  {this.state.gameStarted === true ? "It's " + this.state.players[this.state.turn % 2 +1] + 's turn' : 'Waiting To Start'}</h2>
</Jumbotron>
    <Board values={this.state.values} changeBoard = {this.toggleBoard} />
    


        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Game Over !!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
               {this.state.players[(this.state.turn - 1) % 2 + 1]} wins! 

            </p>
            <Button onClick={this.resetBoard}> Play Again?</Button>
          </Modal.Body>
        </Modal>
    </Container>
     
    );
  }
}

export default App;
