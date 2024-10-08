/**
 * <div id='parent'>
 *      <div id= 'child'>
 *          <h1> This si the value </h1>
 *      </div>
 * </div>
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

const head = React.createElement(
    "h1", 
    {},
    "This is the value"
)
const child = React.createElement("div", {id: "child1"}, head);
const parent = React.createElement("div", {id:"parent"}, child);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
