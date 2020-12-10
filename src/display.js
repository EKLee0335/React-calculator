import PropTypes from 'prop-types';
// import React, {Component} from 'react';
import './display.css'
function Display(props){
    // console.log(props.num1);
    return(
        <div className = 'display'>
            {props.input}
        </div>
    );
}

//propTypes
Display.prototype = {
    input : PropTypes.string,
}
export default Display;