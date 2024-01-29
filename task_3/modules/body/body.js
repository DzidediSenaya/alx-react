// modules/body/body.js
import $ from 'jquery';
import _ from 'lodash';

const bodyContainer = $('<div id="body-container"></div>').appendTo('body');
$('<button id="startButton">Click here to get started</button>').appendTo(bodyContainer);
$('<p id="count"></p>').appendTo(bodyContainer);
