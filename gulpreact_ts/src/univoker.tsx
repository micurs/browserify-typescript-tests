/// <reference path="../typings/uniq/uniq.d.ts"/>
/// <reference path="../typings/react/react.d.ts"/>
/// <reference path="../typings/lodash/lodash.d.ts"/>

import * as unique from 'uniq';
import _ = require('lodash');
import React = require('react');

interface UnivokerProps {  
  values: string[];
}

interface UnivokerState {
  sortedUniques: string[];
}
export default class Univoker extends React.Component<UnivokerProps, UnivokerState> {  
  
  sortedUniques: number[];
  
  constructor( props: UnivokerProps ) {
    super(props);
    this.state = { 
      sortedUniques : _.sortBy( unique(props.values), ( n ) => n )
    }; 
  }
  
  render() {
    var numbers = _.map( this.state.sortedUniques,
      ( v ) => <li key={v}>{v}</li> 
    );
    return <ol>{numbers}</ol>;
  }
}

 

