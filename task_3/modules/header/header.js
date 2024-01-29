// modules/header/header.js
import $ from 'jquery';

console.log('Init header');

const headerContainer = $('<div id="logo-container"></div>').appendTo('body');
$('<img id="logo" src="assets/holberton-logo.jpg" alt="Holberton Logo" />').appendTo(headerContainer);
$('<h1>Holberton Dashboard</h1>').appendTo(headerContainer);
