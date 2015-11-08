/// <reference path="../typings/react-dom/react-dom.d.ts"/>
/// <reference path="../typings/react/react.d.ts"/>

/// <reference path="./component1.tsx"/>

import * as React from 'react';
import * as ReactDOM  from "react-dom";
import * as ReactDom from 'react';

import Component1 from './component1';


ReactDOM.render(<Component1 />, document.getElementById('out') );
