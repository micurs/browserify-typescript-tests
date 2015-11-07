/// <reference path="../typings/react-dom/react-dom.d.ts"/>
/// <reference path="../typings/react/react.d.ts"/>
/// <reference path="./gltest.tsx"/>

import * as React from 'react';
import * as ReactDOM  from "react-dom";
import * as ReactDom from 'react';
import GlTest from './gltest';


ReactDOM.render(<GlTest width={600} height={500} />, document.getElementById('out') );
