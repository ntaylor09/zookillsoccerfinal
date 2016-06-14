/**
 * Player.js
 * User-controlled Character
 * @inherits GamePiece, Character
 */
 import GamePiece from './GamePiece.js';
 import Character from './Character.js';

 export default class Player extends Character {

 	constructor (config) {
 		super (config);

    this.mover.initSlew();
 	}

  update () {
  this.mover.updateSlew(); //smooths motion, applies Collider
       }
 }
