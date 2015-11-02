/// <reference path="../typings/jquery/jquery.d.ts"/>

import $ = require('jquery');
import mod = require('./module');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

var out = mod.univoque(data);
$('#out').text( JSON.stringify(out) );
  
