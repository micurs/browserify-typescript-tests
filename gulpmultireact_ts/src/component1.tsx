/// <reference path="../typings/react/react.d.ts"/>
/// <reference path="../typings/lodash/lodash.d.ts"/>

/// <reference path="./component2.tsx"/>

import _ = require('lodash');
import React = require('react');
import Component2 from './component2';

interface Component1Props {  
}

interface Component1State {
}
export default class Component1 extends React.Component<Component1Props, Component1State> {  
  
  sortedUniques: number[];
  
  constructor( props: Component1Props ) {
    super(props);
    this.state = {  }; 
  }
  
  render() {
    return ( <div>
              <h2>Outer Component #1</h2> 
              <Component2 parent="Component1" />
             </div>);
  }
}

 

