/// <reference path="../typings/react-dom/react-dom.d.ts"/>
/// <reference path="../typings/react/react.d.ts"/>
/// <reference path="./univoker.tsx"/>

import * as React from 'react';
import * as ReactDOM  from "react-dom";
import * as ReactDom from 'react';
// import Uni = require('./univoker');
import Univoker from './univoker';

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

ReactDOM.render(<Univoker values={data} />, document.getElementById('out') );
