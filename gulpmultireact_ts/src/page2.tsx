/// <reference path="../typings/react-dom/react-dom.d.ts"/>
/// <reference path="../typings/react/react.d.ts"/>
/// <reference path="./component2.tsx"/>

import * as React from 'react';
import * as ReactDOM  from "react-dom";
import * as ReactDom from 'react';

import Compoent2 from './component2';

ReactDOM.render(<Compoent2 parent="Page 2"  />, document.getElementById('out') );
