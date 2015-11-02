/// <reference path="../typings/uniq/uniq.d.ts"/>

import unique = require('uniq');


export function univoque( data: number[] ) : number[] {
  return unique(data)
}

