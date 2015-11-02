/// <reference path="../typings/uniq/uniq.d.ts"/>
/// <reference path="../typings/react/react.d.ts"/>
/// <reference path="../typings/lodash/lodash.d.ts"/>

import * as unique from 'uniq';
import _ = require('lodash');
import React = require('react');

interface UnivokerProps {  
  values: number[];
}

export default class Univoker extends React.Component<UnivokerProps, {}> {  
  render() {
    var numbers = _.map( unique(this.props.values), ( v ) => <li key={v}>{v}</li> );
    return <ul>{numbers}</ul>
  }
}

 

