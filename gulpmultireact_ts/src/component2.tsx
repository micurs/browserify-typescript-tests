/// <reference path="../typings/react/react.d.ts"/>
/// <reference path="../typings/lodash/lodash.d.ts"/>

import _ = require('lodash');
import React = require('react');

interface Component2Props {  
  parent: string;
}

interface Component2State {
}
export default class Component2 extends React.Component<Component2Props, Component2State> {  
  
  sortedUniques: number[];
  
  constructor( props: Component2Props ) {
    super(props);
  }
  
  render() {
    return (<div>
              <h3>Component # 2</h3>
              <p>Embedded in {this.props.parent}</p>
            </div>);
  }
}

 

