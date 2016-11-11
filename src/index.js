import React from 'react';
import ReactDOM from 'react-dom';

import {observable} from "mobx"
import {observer} from "mobx-react"

import Select from './Select';

ReactDOM.render(
  <Select
    values={["State.", "Should.", "Be.", "Synchronous."]}
    onSelect={value => console.log(value)}
  />,
  document.getElementById('root')
);
