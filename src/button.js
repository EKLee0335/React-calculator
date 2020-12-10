// import ReactDOM from 'react-dom';
// import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import {GlobalHotKeys} from 'react-hotkeys'
import './button.css'
function Button(props){
  return(
      <div className = "buttonSet">
            <button className = 'item1' onClick = {props.reset}>N</button>
            <button className = 'item2' onClick = {props.handelClick}>/</button>
            <button className = 'item3' onClick = {props.handelClick}>*</button>
            <button className = 'item4' onClick = {props.handelClick}>-</button>
            <button className = 'item5' onClick = {props.handelClick}>7</button>
            <button className = 'item6' onClick = {props.handelClick}>8</button>
            <button className = 'item7' onClick = {props.handelClick}>9</button>
            <button className = 'item8' onClick = {props.handelClick}>+</button>
            <button className = 'item9' onClick = {props.handelClick}>4</button>
            <button className = 'item10'onClick = {props.handelClick}>5</button>
            <button className = 'item11'onClick = {props.handelClick}>6</button>
            <button className = 'item12'onClick = {props.handelClick}>1</button>
            <button className = 'item13'onClick = {props.handelClick}>2</button>
            <button className = 'item14'onClick = {props.handelClick}>3</button>
            <button className = 'item15'onClick = {props.clickEqual}>=</button>
            <button className = 'item16'onClick = {props.handelClick}>0</button>
            <button className = 'item17'onClick = {props.handelClick}>.</button>
      </div>
        
  )
}

//propTypes
Button.prototype = {
    handelClick: PropTypes.func,
    clickEqual: PropTypes.func,
    reset: PropTypes.func,
}
export default Button;