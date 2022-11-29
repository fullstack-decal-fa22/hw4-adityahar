import React, { useState } from 'react';
import Color from './Color';


const Menu = (props) => {

    return (
      <div className="colorOptions">
          <Color handleClick={props.handle} color='red'/>
          <Color handleClick={props.handle} color='pink'/>
          <Color handleClick={props.handle} color='blue'/>
          <Color handleClick={props.handle} color='green'/>
      </div>
    );
}

export default Menu;