import React from 'react';

import './App.css';



const Board = (props) => {
    
     const toggleSquare = (position) => {
        props.changeBoard(position)
        //console.log(position)


    } 
    return (
        <div className="boardDiv">
        <table className="board">
            <tbody>
            <tr>   
                <td id="topLeft"><button onClick={ () => toggleSquare('topLeft')}> {props.values['topLeft']}</button></td> 
                <td id="topMiddle"> <button onClick= { () => toggleSquare('topMiddle')} > {props.values['topMiddle']}</button></td>
                <td id="topRight"> <button onClick= { () => toggleSquare('topRight')}> {props.values['topRight']}</button></td>
            </tr>
            <tr>   
                <td id="middleLeft"> <button onClick={ () => toggleSquare('middleLeft')}> {props.values['middleLeft']}</button></td> 
                <td id="middleMiddle"><button onClick={ () => toggleSquare('middleMiddle')}> {props.values['middleMiddle']}</button></td>
                <td id="middleRight"><button onClick={ () => toggleSquare('middleRight')}> {props.values['middleRight']}</button></td>
            </tr>
            <tr>   
                <td id="bottomLeft"><button onClick={ () => toggleSquare('bottomLeft')}> {props.values['bottomLeft']}</button></td> 
                <td id="bottomMiddle"><button onClick={ () => toggleSquare('bottomMiddle')}> {props.values['bottomMiddle']}</button></td>
                <td id="bottomRight"><button onClick={ () => toggleSquare('bottomRight')}> {props.values['bottomRight']}</button></td>
            </tr>
            </tbody>
        </table>
        </div>
    )




}


export default Board;