(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var rangemin = 0;
var rangemax = 8;
var moves = 0;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomPlay() {
  var number = getRandomInt(rangemin, rangemax);
  var randomTileID = 'tile' + number;
  var tile = document.getElementById(randomTileID);
  if (tile.textContent) randomPlay();else tile.textContent = 'o';
}

var body = document.querySelector('body');
body.addEventListener('click', function (event) {
  var tile = event.target;
  if (tile.className !== 'tile') return;
  if (tile.textContent) return;
  moves = moves + 2;
  tile.textContent = 'x';
  if (gameOver()) console.log('game over');else randomPlay();
});

function gameOver() {
  return moves >= 9;
  // if (moves >= 9) {
  //   return true
  // } else if (moves < 9) {
  //   return false
  // }
}

},{}]},{},[1]);
