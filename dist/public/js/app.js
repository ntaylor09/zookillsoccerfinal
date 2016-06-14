(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _StaticImage = require('./StaticImage.js');

var _StaticImage2 = _interopRequireDefault(_StaticImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Animal.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The critters that Trump tries to stop from getting the Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Animal = function (_Character) {
  _inherits(Animal, _Character);

  function Animal(config) {
    _classCallCheck(this, Animal);

    // Animals get RandomWalk motion

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Animal).call(this, config));

    _this.mover.initRandomWalk(0.02, 'bottom');
    return _this;
  }

  _createClass(Animal, [{
    key: 'update',
    value: function update() {
      this.mover.updateRandomWalk();
    }
  }]);

  return Animal;
}(_Character3.default);

exports.default = Animal;

},{"./Character.js":7,"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./StaticImage.js":28}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Area2 = require('./Area.js');

var _Area3 = _interopRequireDefault(_Area2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AnimalArea.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The region animals move through to get to Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Area
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Cage = function (_Area) {
  _inherits(Cage, _Area);

  function Cage(config) {
    _classCallCheck(this, Cage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Cage).call(this, config));
  }

  return Cage;
}(_Area3.default);

exports.default = Cage;

},{"./Area.js":3,"./GamePiece.js":12}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _StaticImage = require('./StaticImage.js');

var _StaticImage2 = _interopRequireDefault(_StaticImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Area.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A generic region of the game screen. Used to add visual objects, and 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * create bounds for collision detection.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Info, Image, StaticImage
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Area = function (_GamePiece) {
  _inherits(Area, _GamePiece);

  function Area(config) {
    _classCallCheck(this, Area);

    // create a <div>, add to DOM, with optional image

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Area).call(this, config));

    _this.addToDOM(config.name, config.container, config.path);

    // position with absolute coordinated
    _this.setDOMPosition(config.position); //inherited from GamePiece
    _this.setDOMSize(config.size);
    return _this;
  }

  // create DOM element, Load a background image, and insert into container


  _createClass(Area, [{
    key: 'addToDOM',
    value: function addToDOM(name, container, imgPath) {
      this.dom = document.createElement('div');
      this.dom.id = name + '-area';

      // position absolutely
      this.dom.style.position = 'absolute';

      // Don't allow padding or margins or borders for Areas
      this.dom.style.margin = '0px';
      this.dom.style.padding = '0px';

      // add to the DOM
      container.insertBefore(this.dom, container.childNodes[0]);

      // if we have an image, insert in element background
      if (imgPath) {

        this.image = new _StaticImage2.default({
          name: this.dom.id + '-image'
        });

        this.image.loadBackgroundImage(this.dom, imgPath);
      }
    }

    // bounds detector for supplied Character

  }]);

  return Area;
}(_GamePiece3.default);

exports.default = Area;

},{"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./StaticImage.js":28}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _StaticImage2 = require('./StaticImage.js');

var _StaticImage3 = _interopRequireDefault(_StaticImage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Background.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Game Logos, LogoTypes, Brand Name
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Background = function (_StaticImage) {
  _inherits(Background, _StaticImage);

  function Background(config) {
    _classCallCheck(this, Background);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Background).call(this, config));

    _this.setSource(config.source);
    _this.setAuthor(config.author);
    _this.loadBackgroundImage(config.domId, config.path);
    return _this;
  }

  return Background;
}(_StaticImage3.default);

exports.default = Background;

},{"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./StaticImage.js":28}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Animal2 = require('./Animal.js');

var _Animal3 = _interopRequireDefault(_Animal2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Bear.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A Tiger, who tries to get the Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Bear = function (_Animal) {
  _inherits(Bear, _Animal);

  function Bear(config) {
    _classCallCheck(this, Bear);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Bear).call(this, config));
  }

  return Bear;
}(_Animal3.default);

exports.default = Bear;

},{"./Animal.js":1,"./Character.js":7,"./GamePiece.js":12}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Area2 = require('./Area.js');

var _Area3 = _interopRequireDefault(_Area2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The region where animals are caged.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Area
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Cage = function (_Area) {
  _inherits(Cage, _Area);

  function Cage(config) {
    _classCallCheck(this, Cage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Cage).call(this, config));
  }

  return Cage;
}(_Area3.default);

exports.default = Cage;

},{"./Area.js":3,"./GamePiece.js":12}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _StaticImage = require('./StaticImage.js');

var _StaticImage2 = _interopRequireDefault(_StaticImage);

var _Mover = require('./Mover.js');

var _Mover2 = _interopRequireDefault(_Mover);

var _Collider = require('./Collider.js');

var _Collider2 = _interopRequireDefault(_Collider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Character.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Game-generated or user avatars. Characters are rendered in Canvas, but have their
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * position computed and updated outside canvas.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Character = function (_GamePiece) {
  _inherits(Character, _GamePiece);

  function Character(config) {
    _classCallCheck(this, Character);

    // Set position and size from configuration

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Character).call(this, config));

    _this.position = config.position;
    _this.size = config.size;

    // store a reference to the game object
    _this.game = config.game;

    _this.image = new _StaticImage2.default({
      name: config.name + '-image',
      path: config.path
    });

    //initialize the Mover object (animation)
    _this.mover = new _Mover2.default(_this);

    // Images don't automatically load when they're not attached to the DOM,
    // or a CSS background image
    _this.image.load(config.path, function () {
      console.log('loaded:' + config.name);
    });
    return _this;
  }

  // override default draw with our own


  _createClass(Character, [{
    key: 'draw',
    value: function draw(context) {
      if (this.image) {
        var img = this.image.data;
        console.log('drawing');
        if (img) {
          // draw image into HTML5 canvas
          context.drawImage(img, this.position.left, this.position.top);
        }
      }
    }
  }]);

  return Character;
}(_GamePiece3.default);

exports.default = Character;

},{"./Collider.js":8,"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./Mover.js":21,"./StaticImage.js":28}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 * @class Collider
 * @description create the collision matrix defining which objects can collide 
 * with which objects. Objects that can collide have their potential colliders 
 * added as references, e.g. Player.trump or Trump.player.
 * @param Array characterArray the array of Characters who might be involved 
 * in collisions.
 */

var Collider = function () {
  function Collider(characterArray) {
    _classCallCheck(this, Collider);

    this.characterArray = characterArray;
    this.animalArray = []; //filled up in setUpCollisions
    this.setUpCollisions();
  }

  _createClass(Collider, [{
    key: 'setUpCollisions',
    value: function setUpCollisions() {
      for (var i = 0, len = this.characterArray.length; i < len; i++) {
        switch (this.characterArray[i].constructor.name) {
          case 'Lion':
          case 'Tiger':
          case 'Bear':
          case 'Gorilla':
            this.animalArray.push(this.characterArray[i]);
            break;
          case 'Trump':
            this.trump = this.characterArray[i];
            break;
          case 'Player':
            this.player = this.characterArray[i];
            break;
          default:
            break;
        }
      }

      //cross-connect the impactors
      this.trump.player = this.player;
      this.trump.animals = this.animalArray;
      this.player.trump = this.trump;

      //DEBUG
      window.animals = this.trump.animals;
    }
  }]);

  return Collider;
}();

exports.default = Collider;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text2 = require('./Text.js');

var _Text3 = _interopRequireDefault(_Text2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * DynamicText.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Text that can be changed by user (e.g. input field), or 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * updated by the game itself.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var DynamicText = function (_Text) {
  _inherits(DynamicText, _Text);

  function DynamicText(config) {
    _classCallCheck(this, DynamicText);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DynamicText).call(this, config));
  }

  return DynamicText;
}(_Text3.default);

exports.default = DynamicText;

},{"./GamePiece.js":12,"./Info.js":18,"./Text.js":30}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * EndScreen.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Ending screen for the game.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits Screen, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var EndScreen = function (_Screen) {
  _inherits(EndScreen, _Screen);

  function EndScreen(config) {
    _classCallCheck(this, EndScreen);

    // load the background image

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EndScreen).call(this, config));

    _this.loadBackground('img/screens/end-screen.png');

    // Load EndScreen sub-objects
    _this.loadInputScore();
    _this.loadHighScores();

    // Bind "play again" and "instructions" buttons.
    _this.bindReplay();
    _this.bindInstructions();
    return _this;
  }

  _createClass(EndScreen, [{
    key: 'loadInputScore',
    value: function loadInputScore() {}
  }, {
    key: 'loadHighScores',
    value: function loadHighScores() {}
  }, {
    key: 'bindReplay',
    value: function bindReplay() {
      console.log("in bindStart, this.game:" + this.game);
      // we use bind() to link the function below to StartScreen (otherwise, it thinks it is inside window)
      document.querySelector('#end-screen-play-button').addEventListener('click', function (e) {
        //alert("in handler, game:" + this.game)
        e.preventDefault();
        this.game.startGame();
      }.bind(this));
    }
  }, {
    key: 'bindInstructions',
    value: function bindInstructions() {
      console.log("in bindStart, this.game:" + this.game);
      // we use bind() to link the function below to StartScreen (otherwise, it thinks it is inside window)
      document.querySelector('#end-screen-instructions-button').addEventListener('click', function (e) {
        //alert("in handler, game:" + this.game)
        e.preventDefault();
        this.game.loadGame();
      }.bind(this));
    }
  }]);

  return EndScreen;
}(_Screen3.default);

exports.default = EndScreen;

},{"./GamePiece.js":12,"./Screen.js":25}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

var _Screen = require('./Screen.js');

var _Screen2 = _interopRequireDefault(_Screen);

var _StartScreen = require('./StartScreen.js');

var _StartScreen2 = _interopRequireDefault(_StartScreen);

var _GameScreen = require('./GameScreen.js');

var _GameScreen2 = _interopRequireDefault(_GameScreen);

var _EndScreen = require('./EndScreen.js');

var _EndScreen2 = _interopRequireDefault(_EndScreen);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _StaticText = require('./StaticText.js');

var _StaticText2 = _interopRequireDefault(_StaticText);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _Identity = require('./Identity.js');

var _Identity2 = _interopRequireDefault(_Identity);

var _Instructions = require('./Instructions.js');

var _Instructions2 = _interopRequireDefault(_Instructions);

var _DynamicText = require('./DynamicText.js');

var _DynamicText2 = _interopRequireDefault(_DynamicText);

var _Score = require('./Score.js');

var _Score2 = _interopRequireDefault(_Score);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Trump = require('./Trump.js');

var _Trump2 = _interopRequireDefault(_Trump);

var _Player = require('./Player.js');

var _Player2 = _interopRequireDefault(_Player);

var _Animal = require('./Animal.js');

var _Animal2 = _interopRequireDefault(_Animal);

var _Lion = require('./Lion.js');

var _Lion2 = _interopRequireDefault(_Lion);

var _Tiger = require('./Tiger.js');

var _Tiger2 = _interopRequireDefault(_Tiger);

var _Bear = require('./Bear.js');

var _Bear2 = _interopRequireDefault(_Bear);

var _Gorilla = require('./Gorilla.js');

var _Gorilla2 = _interopRequireDefault(_Gorilla);

var _Health = require('./Health.js');

var _Health2 = _interopRequireDefault(_Health);

var _Area = require('./Area.js');

var _Area2 = _interopRequireDefault(_Area);

var _Cage = require('./Cage.js');

var _Cage2 = _interopRequireDefault(_Cage);

var _AnimalArea = require('./AnimalArea.js');

var _AnimalArea2 = _interopRequireDefault(_AnimalArea);

var _PlayerArea = require('./PlayerArea.js');

var _PlayerArea2 = _interopRequireDefault(_PlayerArea);

var _Collider = require('./Collider.js');

var _Collider2 = _interopRequireDefault(_Collider);

var _Sounder = require('./Sounder.js');

var _Sounder2 = _interopRequireDefault(_Sounder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Game.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The entire Game object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


//Screen inheritance


//Info inheritance


//Character inheritance


//Area inheritance.


//import Collider and Sounder objects


var Game = function (_GamePiece) {
	_inherits(Game, _GamePiece);

	function Game(config) {
		_classCallCheck(this, Game);

		//game copyright

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Game).call(this, config));

		_this.warning = 'This game belongs to us, and nobody else.';

		//game reverts to StartScreen if unplayed
		_this.TIMEOUT = 5555;

		// define Id link to DOM
		_this.START_SCREEN_ID = 'start-screen';
		_this.GAME_SCREEN_ID = 'game-screen';
		_this.END_SCREEN_ID = 'end-screen';

		// model storage, screens
		_this.screens = [];

		// model storage, dynamic characters
		_this.displayCharacters = [];

		// initialize game, load start screen
		_this.init();

		return _this;
	} //end of constructor

	_createClass(Game, [{
		key: 'init',
		value: function init() {

			// Grab the HTML screen elements and encapsulate in a Screen class
			this.screens[this.START_SCREEN_ID] = new _StartScreen2.default({ name: 'Start Screen', id: this.START_SCREEN_ID, game: this });
			this.screens[this.GAME_SCREEN_ID] = new _GameScreen2.default({ name: 'Game Screen', id: this.GAME_SCREEN_ID, game: this });
			this.screens[this.END_SCREEN_ID] = new _EndScreen2.default({ name: 'End Screen', id: this.END_SCREEN_ID, game: this });

			// load the canvas
			this.loadCanvas();

			// make the start screen visible
			this.loadGame();
		}

		// get a reference to the HTML5 canvas context

	}, {
		key: 'loadCanvas',
		value: function loadCanvas() {
			this.canvas = document.querySelector('#game-screen-arena canvas');
			this.context = this.canvas.getContext("2d");
		}

		/**
   * Load Characters
   * dynamic Characters (e.g. those that animate) are loaded by Game.
   * Other static visual objects are loaded by Screen classes.
   */

	}, {
		key: 'loadPlayers',
		value: function loadPlayers() {
			this.displayCharacters.push(new _Player2.default({
				name: 'Player', position: { top: 510, left: 200 },
				path: 'img/players/player.png',
				game: this
			}));
		}
	}, {
		key: 'loadAnimals',
		value: function loadAnimals() {
			this.displayCharacters.push(new _Lion2.default({
				name: 'Lion',
				position: { top: 15, left: 94 },
				path: 'img/animals/lion.png',
				game: this
			}));
			this.displayCharacters.push(new _Tiger2.default({
				name: 'Tiger',
				position: { top: 15, left: 333 },
				path: 'img/animals/tiger.png',
				game: this
			}));
			this.displayCharacters.push(new _Bear2.default({
				name: 'Bear', position: { top: 15, left: 570 },
				path: 'img/animals/bear.png',
				game: this
			}));
			this.displayCharacters.push(new _Gorilla2.default({
				name: 'Gorilla', position: { top: 15, left: 812 },
				path: 'img/animals/gorilla.png',
				game: this
			}));
		}
	}, {
		key: 'loadTrumps',
		value: function loadTrumps() {
			this.displayCharacters.push(new _Trump2.default({
				name: 'Trump', position: { top: 450, left: 200 },
				path: 'img/trumps/trump.png',
				game: this
			}));
		}
	}, {
		key: 'loadGame',
		value: function loadGame() {

			//load Info assets

			console.log('loading splash screen');
			this.screens[this.END_SCREEN_ID].hideScreen();
			this.screens[this.START_SCREEN_ID].showScreen();
		}
	}, {
		key: 'startGame',
		value: function startGame() {

			//load Characters
			this.loadAnimals();
			this.loadPlayers();
			this.loadTrumps();

			//add collision matrix
			this.collider = new _Collider2.default(this.displayCharacters);
			//load audio samples
			this.soundPool = new _Sounder2.default();

			//load audio samples
			this.soundPool = new _Sounder2.default();
			this.soundPool.addSound('kick', 0.7);
			this.soundPool.addSound('lion', 0.7);
			this.soundPool.addSound('tiger', 0.7);
			this.soundPool.addSound('bear', 0.7);
			this.soundPool.addSound('gorilla', 0.7);

			//make GameScreen visible

			// initialize elapsed time
			this.startTime = new Date();

			// show GameScreen, hide others
			console.log('starting game');
			this.screens[this.START_SCREEN_ID].hideScreen();
			this.screens[this.END_SCREEN_ID].hideScreen();
			this.screens[this.GAME_SCREEN_ID].showScreen();
			this.gameLoop();
		}
	}, {
		key: 'endGame',
		value: function endGame() {

			console.log('ending game');

			// reset timer
			this.startTime = 0;

			// turn off animation
			cancelAnimationFrame(this.globalId);
			this.globalId = null;

			// go to end screen
			this.screens[this.GAME_SCREEN_ID].hideScreen();
			this.screens[this.END_SCREEN_ID].showScreen();
		}
	}, {
		key: 'elapsed',
		value: function elapsed() {

			// record time we have been in gameLoop
			this.endTime = new Date();

			// time difference in ms

			var timeDiff = (this.endTime - this.startTime) / 1000;

			// get seconds (Original had 'round' which incorrectly counts 0:28, 0:29, 1:30 ... 1:59, 1:0)
			return Math.round(timeDiff % 60);
		}
	}, {
		key: 'checkIfComplete',
		value: function checkIfComplete() {

			// game logic to see if the game should reset
			/////////////console.log('ELAPSED:' + this.elapsed());

			if (this.elapsed() > this.TIMEOUT) {
				// if idle too long, reset game to start
				return true;
			}

			return false;
		}
	}, {
		key: 'update',
		value: function update() {

			for (var i = 0, len = this.displayCharacters.length; i < len; i++) {

				var character = this.displayCharacters[i];

				switch (character.getClass()) {
					case 'Player':
					case 'Trump':
					case 'Lion':
					case 'Tiger':
					case 'Bear':
					case 'Gorilla':
					default:
						break;
				}

				character.update();
			}
		}
	}, {
		key: 'draw',
		value: function draw() {

			for (var i = 0, len = this.displayCharacters.length; i < len; i++) {
				this.displayCharacters[i].draw(this.context);
			}
		}
	}, {
		key: 'gameLoop',
		value: function gameLoop() {

			if (this.checkIfComplete()) {
				this.endGame();
				return;
			}
			this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.update();
			this.draw();

			//console.log('looping...')
			this.globalId = requestAnimationFrame(this.gameLoop.bind(this));
		}
	}]);

	return Game;
}(_GamePiece3.default);

exports.default = Game;

},{"./Animal.js":1,"./AnimalArea.js":2,"./Area.js":3,"./Bear.js":5,"./Cage.js":6,"./Character.js":7,"./Collider.js":8,"./DynamicText.js":9,"./EndScreen.js":10,"./GamePiece.js":12,"./GameScreen.js":13,"./Gorilla.js":14,"./Health.js":15,"./Identity.js":16,"./Image.js":17,"./Info.js":18,"./Instructions.js":19,"./Lion.js":20,"./Player.js":22,"./PlayerArea.js":23,"./Score.js":24,"./Screen.js":25,"./Sounder.js":26,"./StartScreen.js":27,"./StaticText.js":29,"./Text.js":30,"./Tiger.js":31,"./Trump.js":32}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 * GamePiece.js
 * Basic Game object
 *
 * To make this work, you must be running the Babel transpiler, 
 * and watching for changes in this file with browserify. Two 
 * Terminal windows need to be open:
 * 1. one window where you typed the command "grunt"
 * 2. one window where you typed the command "npm start"
 */

var GamePiece = function () {
  function GamePiece(config) {
    _classCallCheck(this, GamePiece);

    //TODO: use super();
    this.name = config.name;
    this.uuid = this.setId();
    this.ready = true; // change to false for deferred loads
  }

  /** 
   * Set a position for the object, also the position of the 
   * DOM representation of the object
   */


  _createClass(GamePiece, [{
    key: 'setDOMPosition',
    value: function setDOMPosition(position) {
      this.position = position;
      if (this.dom) {
        this.dom.style.top = position.top + 'px';
        this.dom.style.left = position.left + 'px';
      }
    }

    /** 
     * Set the object size, also its DOM size
     */

  }, {
    key: 'setDOMSize',
    value: function setDOMSize(size) {
      this.size = size;
      if (this.dom) {
        this.dom.style.width = size.width + 'px';
        this.dom.style.height = size.height + 'px';
      }
    }

    /** 
     * Generate a unique ID for every game object.
     * @link http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
     */

  }, {
    key: 'setId',
    value: function setId() {
      var d = new Date().getTime();
      if (window.performance && typeof window.performance.now === "function") {
        d += performance.now(); //use high-precision timer if available
      }
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
      });
      return uuid;
    }

    /** 
     * Return the given name of this object
     */

  }, {
    key: 'getName',
    value: function getName() {
      return this.name;
    }

    /** 
     * return the class of the object
     */

  }, {
    key: 'getClass',
    value: function getClass() {
      return this.constructor.name;
    }

    /** 
     * Return the unique id of this object.
     */

  }, {
    key: 'getId',
    value: function getId() {
      return this.uuid;
    }

    /** 
     * Get the enclosing box outside the object for external collisions
     */

  }, {
    key: 'getCollisionRect',
    value: function getCollisionRect() {}

    /** 
     * Get the internal box when this object acts as a container for another
     */

  }, {
    key: 'getBoundsRect',
    value: function getBoundsRect() {}

    /** 
     * Generic 'ready' function (e.g. for delayed asset loads)
     */

  }, {
    key: 'setReady',
    value: function setReady(val) {
      this.ready = val;
    }

    /** 
     * Generic update (override)
     */

  }, {
    key: 'update',
    value: function update() {}

    /** 
     * generic draw (override)
     */

  }, {
    key: 'draw',
    value: function draw() {}
  }]);

  return GamePiece;
}();

exports.default = GamePiece;

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

var _Area = require('./Area.js');

var _Area2 = _interopRequireDefault(_Area);

var _AnimalArea = require('./AnimalArea.js');

var _AnimalArea2 = _interopRequireDefault(_AnimalArea);

var _PlayerArea = require('./PlayerArea.js');

var _PlayerArea2 = _interopRequireDefault(_PlayerArea);

var _Cage = require('./Cage.js');

var _Cage2 = _interopRequireDefault(_Cage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * GameScreen.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Main game screen object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Screen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var GameScreen = function (_Screen) {
  _inherits(GameScreen, _Screen);

  function GameScreen(config) {
    _classCallCheck(this, GameScreen);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GameScreen).call(this, config));

    _this.cages = [];
    _this.animalAreas = [];
    _this.playerAreas = [];

    //GameScreen should hide its local header and footer
    _this.hideHeader();
    _this.hideFooter();

    // load the background image
    _this.loadBackground('img/screens/game-screen.png');

    // get the section that has the canvas for overlay
    var arena = document.getElementById('game-screen-arena');

    // load sub-objects into the Arena
    _this.cages = _this.loadCages(arena, 'img/areas/cage.png');
    _this.animalArea = _this.loadAnimalArea();
    _this.playerArea = _this.loadPlayerArea();

    return _this;
  }

  _createClass(GameScreen, [{
    key: 'loadCages',
    value: function loadCages(container, imgPath) {
      // load 4 Cages
      this.cages.push(new _Cage2.default({
        name: 'lion-cage',
        position: { top: 0, left: 70 },
        size: { width: 100, height: 100 },
        container: container,
        path: imgPath
      }));
      this.cages.push(new _Cage2.default({
        name: 'tiger-cage',
        position: { top: 0, left: 310 },
        size: { width: 100, height: 100 },
        container: container,
        path: imgPath
      }));
      this.cages.push(new _Cage2.default({
        name: 'bear-cage',
        position: { top: 0, left: 550 },
        size: { width: 100, height: 100 },
        container: container,
        path: imgPath
      }));
      this.cages.push(new _Cage2.default({
        name: 'gorilla-cage',
        position: { top: 0, left: 790 },
        size: { width: 100, height: 100 },
        container: container,
        path: imgPath
      }));
    }
  }, {
    key: 'loadAnimalArea',
    value: function loadAnimalArea() {
      // load Animal movement area
      this.animalAreas.push(new _AnimalArea2.default({
        name: 'Zoo',
        position: { top: 104, left: 6 },
        size: { width: 970, height: 410 },
        container: this.dom,
        path: null
      }));
    }
  }, {
    key: 'loadPlayerArea',
    value: function loadPlayerArea() {
      // load the Player
      this.playerAreas.push(new _PlayerArea2.default({
        name: 'Player Area',
        position: { top: 514, left: 6 },
        size: { width: 970, height: 100 },
        container: this.dom,
        path: null
      }));
    }
  }]);

  return GameScreen;
}(_Screen3.default);

exports.default = GameScreen;

},{"./AnimalArea.js":2,"./Area.js":3,"./Cage.js":6,"./GamePiece.js":12,"./PlayerArea.js":23,"./Screen.js":25}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Animal2 = require('./Animal.js');

var _Animal3 = _interopRequireDefault(_Animal2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Gorilla.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A Gorilla, who tries to get the Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Gorilla = function (_Animal) {
  _inherits(Gorilla, _Animal);

  function Gorilla(config) {
    _classCallCheck(this, Gorilla);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Gorilla).call(this, config));
  }

  return Gorilla;
}(_Animal3.default);

exports.default = Gorilla;

},{"./Animal.js":1,"./Character.js":7,"./GamePiece.js":12}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Health.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The critters that Trump tries to stop from getting the Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Health = function (_Character) {
  _inherits(Health, _Character);

  function Health(config) {
    _classCallCheck(this, Health);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Health).call(this, config));
  }

  return Health;
}(_Character3.default);

exports.default = Health;

},{"./Character.js":7,"./GamePiece.js":12}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _StaticImage2 = require('./StaticImage.js');

var _StaticImage3 = _interopRequireDefault(_StaticImage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Identity.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Game Logos, LogoTypes, Brand Name
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Identity = function (_StaticImage) {
	_inherits(Identity, _StaticImage);

	function Identity(config) {
		_classCallCheck(this, Identity);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Identity).call(this, config));

		_this.setSource(config.source);
		_this.setAuthor(config.author);
		_this.loadImageToDOM(config.domId, config.path);

		//Hide any <h2> text equivalent of identity in this CSS box
		var textIdentity = document.querySelector('#' + config.domId + ' h2');
		textIdentity.style.display = 'none';
		return _this;
	}

	return Identity;
}(_StaticImage3.default);

exports.default = Identity;

},{"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./StaticImage.js":28}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info2 = require('./Info.js');

var _Info3 = _interopRequireDefault(_Info2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * StaticImage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Image-style Information that cannot be changed once the game is loaded
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Image = function (_Info) {
	_inherits(Image, _Info);

	// save scope
	// TODO: refactor with arrow function

	function Image(config) {
		_classCallCheck(this, Image);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Image).call(this, config));

		_this.ready = false; //over-ride GamePiece and info with deferrals
		_this.image = null;
		_this.path = config.path;
		_this.author = config.author;
		_this.source = config.source;
		return _this;
	}

	// load an image


	_createClass(Image, [{
		key: 'load',
		value: function load(path, callback) {
			var that = this;
			that.setReady(false);
			console.log('entering load inImage');
			var img = document.createElement('img');
			img.src = path;
			img.onload = function () {
				console.log(that.name + ' image loaded from:' + path + ' w:' + img.width + ' h:' + img.height);
				that.setReady(true);
				that.data = img;

				if (callback) {
					callback();
				}
			};
			img.onerror = function (e) {
				console.log('error loading img from:' + path);
			};
		}

		// load image, append to existing DOM element
		// NOTE: this is over-written in Character.js, which loads images into Canvas

	}, {
		key: 'loadImageToDOM',
		value: function loadImageToDOM(domId, path, callback) {
			var that = this;
			this.load(path, function () {
				console.log('foreground image ' + path + ' loaded');
				document.getElementById(domId).appendChild(that.data);
				if (callback) {
					callback();
				}
			});
		}

		// load image as a CSS background image into existing DOM element.
		// NOTE: no local reference to image in this case

	}, {
		key: 'loadBackgroundImage',
		value: function loadBackgroundImage(container, path, callback) {
			console.log('loading background image:' + path);
			container.style.backgroundImage = 'url(' + path + ')';
			this.setReady(true);
			if (callback) {
				callback();
			}
		}

		// Draw the image to a supplied canvas context

	}, {
		key: 'drawToCanvas',
		value: function drawToCanvas(context, position, size) {
			context.drawImage(img, position.top, position.left, size.width, size.height);
		}

		// Draw to the DOM. Assume the Image was already attached to the DOM

	}, {
		key: 'drawToDOM',
		value: function drawToDOM(position, size) {
			this.image.style.top = position.top;
			this.image.style.left = position.left;
			this.image.style.width = size.width;
			this.image.style.height = size.height;
		}
	}]);

	return Image;
}(_Info3.default);

exports.default = Image;

},{"./GamePiece.js":12,"./Info.js":18}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Info.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Generic informaiton object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Info = function (_GamePiece) {
	_inherits(Info, _GamePiece);

	function Info(config) {
		_classCallCheck(this, Info);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Info).call(this, config));
	}

	_createClass(Info, [{
		key: 'setAuthor',
		value: function setAuthor(author) {
			this.author = author;
		}
	}, {
		key: 'setSource',
		value: function setSource(source) {
			this.source = source;
		}
	}]);

	return Info;
}(_GamePiece3.default);

exports.default = Info;

},{"./GamePiece.js":12}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _StaticText2 = require('./StaticText.js');

var _StaticText3 = _interopRequireDefault(_StaticText2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Instructions.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Text which tells the Player how to play the game.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Instructions = function (_StaticText) {
  _inherits(Instructions, _StaticText);

  function Instructions(config) {
    _classCallCheck(this, Instructions);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Instructions).call(this, config));
  }

  return Instructions;
}(_StaticText3.default);

exports.default = Instructions;

},{"./GamePiece.js":12,"./Info.js":18,"./StaticText.js":29,"./Text.js":30}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Animal2 = require('./Animal.js');

var _Animal3 = _interopRequireDefault(_Animal2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Lion.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A Lion, who tries to get the Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Lion = function (_Animal) {
  _inherits(Lion, _Animal);

  function Lion(config) {
    _classCallCheck(this, Lion);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Lion).call(this, config));
  }

  return Lion;
}(_Animal3.default);

exports.default = Lion;

},{"./Animal.js":1,"./Character.js":7,"./GamePiece.js":12}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 * @class Mover
 * @description update position of object being animated by Game.
 */

var Mover = function () {
    function Mover(gameObj) {
        _classCallCheck(this, Mover);

        this.obj = gameObj;

        // Character has reference to Game
        this.game = gameObj.game;

        // Movement types
        this.type = 0;
        this.SLEW = 1;
        this.RANDOM = 2;
        this.PINGPOING = 3;

        if (!this.game.soundPool) {
            console.warn('no sounds initialized. Game will play silently');
        }
    }

    /** 
     * @method truncator
     * @description truncate (not round) number to fixed number of decimals
     * @param Number num floating-point number
     * @param Integer decimals the number of decimals points to round to
     * @returns Number the truncated number
     */


    _createClass(Mover, [{
        key: 'truncator',
        value: function truncator(num, decimals) {
            var numPower = Math.pow(10, decimals); // "numPowerConverter" might be better
            return ~ ~(num * numPower) / numPower;
        }

        /** 
         * @method randomizer
         * @description randomize a number
         */

    }, {
        key: 'randomizer',
        value: function randomizer() {
            var d = performance.now();
            d = parseInt(d) - d;
            d = this.truncator(d, 2) / 10;
            return d;
        }

        /** 
         * @method getCenter
         */

    }, {
        key: 'getCenter',
        value: function getCenter(x, y, width, height) {
            return {
                x: x + width / 2,
                y: y + height / 2
            };
        }

        /** 
         * @method initSlew
         * @description slew object horizontally with keypresses. Adds event 
         * listeners for keydown and keyup events. Used for 
         * Player characters moving horizontally in the PlayerArea
         */

    }, {
        key: 'initSlew',
        value: function initSlew() {
            var _this = this;

            console.log('init Slew motion');
            this.type = this.SLEW;

            this.speed = 0;
            this.ticker = 0;
            this.lastDir = 1;

            // add bottom, right to make a Rect for the PlayerArea
            this.bounds = this.game.screens['game-screen'].playerAreas[0].position;
            this.bounds.width = this.game.screens['game-screen'].playerAreas[0].size.width;
            this.bounds.height = this.game.screens['game-screen'].playerAreas[0].size.height;
            this.bounds.bottom = this.bounds.top + this.bounds.height;
            this.bounds.right = this.bounds.left + this.bounds.width;

            this.image = this.obj.image;

            // toggle the position of the Player when kicking
            this.unKick = this.obj.position.top;
            this.inKick = this.obj.position.top - 6;

            // NOTE: Trump is added to Player in Collider

            // flag our initialization
            this.inited = true;

            // listen for user events
            document.addEventListener('keydown', function (event) {
                return _this.slew(event);
            }, false);

            document.addEventListener('keyup', function (event) {
                return _this.unkick(event);
            }, false);
        }

        /** 
         * @method initRandomWalk
         * @description init random motions along a path from the 
         * top to the bottom of the screen. Used for 
         * Animal characters moving through the AnimalArea.
         * @param Number prefSpeed the speed of movement
         * @param String direction the direction the Animal ultimately moves, 
         * - 'top': overall movement up the screen
         * - 'left': overall movement to the screen left
         * - 'bottom': overall movement to the screen bottom (DEFAULT)
         * - 'right': overall movement to the screen right
         * - 'return': return immediately to the Cage area
         * - 'caged': stay in the Cage area
         */

    }, {
        key: 'initRandomWalk',
        value: function initRandomWalk(prefSpeed, direction) {
            console.log('init RandomWalk');
            this.type = this.RANDOM;

            this.speed = prefSpeed * this.timeStampRandom();
            this.delay = this.timeStampRandom() * 300;
            this.obj.direction = direction;
            this.counter = 0;
            this.delayCounter = 0;
            this.MAX = 30;
            this.MAX_DELAY = 300;

            // one-time play of Animal sound
            this.firstMove = true;

            // add bottom, right to make a Rect for the AnimalArea
            this.bounds = this.game.screens['game-screen'].animalAreas[0].position;
            this.bounds.width = this.game.screens['game-screen'].animalAreas[0].size.width;
            this.bounds.height = this.game.screens['game-screen'].animalAreas[0].size.height;
            this.bounds.bottom = this.bounds.top + this.bounds.height;
            this.bounds.right = this.bounds.left + this.bounds.width;

            // remember where we started (in the cage)
            this.startTop = this.obj.position.top;
            this.startLeft = this.obj.position.left;

            // cache position during new random moves
            this.newTop = 0, this.newLeft = 0;

            // get bottom and right from Character from its Image
            this.image = this.obj.image;

            // flag our initialization
            this.inited = true;
        }

        /** 
         * @method initPingPong
         * @description init a ping-pong style motion. Used for 
         * Trump characters moving through the AnimalArea.
         */

    }, {
        key: 'initPingPong',
        value: function initPingPong(prefSpeed) {
            console.log('init PingPong motion');
            this.type = this.PINGPONG;

            //Animal area
            // add bottom, right to make a Rect for the AnimalArea
            this.bounds = this.game.screens['game-screen'].animalAreas[0].position;
            this.bounds.width = this.game.screens['game-screen'].animalAreas[0].size.width;
            this.bounds.height = this.game.screens['game-screen'].animalAreas[0].size.height;
            this.bounds.bottom = this.bounds.top + this.bounds.height;
            this.bounds.right = this.bounds.left + this.bounds.width;

            this.obj.startTop = this.obj.position.top;

            // get bottom and right from Character from its Image
            this.image = this.obj.image;

            this.obj.speed = 0;
            this.obj.dx = 0;
            this.obj.dy = 0;

            // NOTE: Animals and Players are added to Trump in Collider

            // flag our initialization
            this.inited = true;
        }

        /** 
         * @method slew 
         * Move object slightly up for duration of space bar pressed down
            * Callback for keydown addEventListener
            * @param Event e the keydown event
            */

    }, {
        key: 'slew',
        value: function slew(e) {
            switch (e.keyCode) {
                case 32:
                case 38:
                    this.kick(e);
                    e.preventDefault(); //prevent scroll
                    break;
                case 37:
                    this.speed++;
                    this.ticker = 0;
                    this.obj.position.left -= this.speed;
                    this.lastDir = -1;
                    e.preventDefault(); //prevent scroll
                    break;
                case 39:
                    this.speed++;
                    this.ticker = 0;
                    this.obj.position.left += this.speed;
                    this.lastDir = 1;
                    e.preventDefault(); //prevent scroll
                    break;
                default:
                    break;
            }
        }

        /** 
         * @method updateSlew
         * @description move back and forth horizontally, with a simple easing motion
         * when left and right arrow keys are pressed. Handle collisions with the left 
         * and right walls of the PlayerArea.
         * Call in an update function inside the Character, e.g. 
         * update () { updateRandomWalk(); }
         * The main Game object automatically finds and 'fires' update() function in 
         * all Characters.
         */

    }, {
        key: 'updateSlew',
        value: function updateSlew() {
            if (!this.inited) {
                console.error('Player Slew NOT initialized (did you leave out of constructor?)');
                return;
            }
            this.ticker++;
            if (this.speed > 0) {
                if (this.ticker > 10) {
                    this.speed /= 2;
                    if (this.speed < 1) {
                        this.speed = 0;
                    }
                }
            }
            this.obj.position.left += this.lastDir * this.speed;

            //check bounds
            if (this.bounds) {
                if (this.image.data) {
                    var w = this.image.data.width;
                    if (this.obj.position.left < this.bounds.left) {
                        this.lastDir = 1;
                        this.speed /= 1.2;
                        this.obj.position.left = this.bounds.left + this.speed * 1.5;
                    } else if (this.obj.position.left > this.bounds.right - w) {
                        this.lastDir = -1;
                        this.speed /= 1.2;
                        this.obj.position.left = this.bounds.right - w - this.speed * 1.5;
                    }
                }
            }
        }

        /** 
         * @method kick
         * @description if foot is near Trump, kick him into the Animal
         */

    }, {
        key: 'kick',
        value: function kick(e) {
            //console.log('::::THIS TRUMP:::::' + this.obj.trump)
            this.obj.position.top = this.inKick;

            if (!this.obj.trump) {
                console.error('Error: missing collision matrix (did you include Collider?)');
                return;
            }

            // see if we're close enough to kick in the y axis
            var trumpYDist = this.obj.position.top - this.obj.trump.image.data.width - this.obj.trump.position.top;
            //console.log('trumpYDist:' + trumpYDist)

            // If Player is close in Y, and inside X range, kick the Trump into AnimalArea
            if (trumpYDist < 10) {

                // start the Trump moving, speed
                this.obj.trump.speed = 40;

                // if too close to left wall, pre-assign a value
                if (this.obj.trump.position.left < this.bounds.left + 20) {
                    console.log(">>Trump: left bound correction");
                    this.obj.trump.dx = -0.2;
                    this.obj.trump.dy = 0.8;
                    return;
                }

                // compute dx and dy for Trump
                var dist = (this.obj.position.left - this.obj.trump.position.left) / 50;
                if (Math.abs(dist) < 1.0) {
                    var dx = dist;
                    if (dx > 0.003 && dx < 0.8) {
                        this.obj.trump.dx = dx;
                        this.obj.trump.dy = 1.0 - dx;
                        // start the kicking sound
                    } else if (dx < 0 && dx > -0.8) {
                            this.obj.trump.dx = dx;
                            this.obj.trump.dy = 1.0 + dx;
                        } else if (Math.abs(dx) < 0.003) {
                            var d = this.randomizer();
                            d = d - this.randomizer();
                            this.obj.trump.dx = d;
                            this.obj.trump.dy = 1.0 + dx;
                            // start the kicking sound
                        } else {
                                this.obj.trump.dx = 0;
                                this.obj.trump.dy = 0;
                            }

                    // start the kicking sound
                    if (this.game.soundPool) {
                        this.game.soundPool.playSound('kick');
                    }
                }
            }
        } // end of function

        /** 
         * @method unkick
         * @description set position of Player back to original
         */

    }, {
        key: 'unkick',
        value: function unkick(e) {
            switch (e.keyCode) {
                case 32:
                case 38:
                    this.obj.position.top = this.unKick;
                    break;
            }
        }

        /** 
         * @method timeStampRandom
         * @description randomize in a 10-fold range using window.performance
         */

    }, {
        key: 'timeStampRandom',
        value: function timeStampRandom() {
            var d = new Date().getTime();
            if (window.performance && typeof window.performance.now === "function") {
                d += performance.now(); //use high-precision timer if available
            }
            var num = 'xxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 10) % 10 | 0;
                d = Math.floor(d / 10);
                return (c == 'x' ? r : r & 0x3 | 0x8).toString(10);
            });
            return num / 10000;
        }

        /**
         * Returns a random number between min (inclusive) and max (exclusive)
         * @link 
         */

    }, {
        key: 'getRandom',
        value: function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        /** 
         * @method updateRandomWalk
         * @description generate a random walk, with one preferred direction, 
         * giving the meandering motion used by Animals. 
         * Call in an update function inside the Character, e.g. 
         * update () { updateRandomWalk(); }
         * The main Game object automatically finds and 'fires' update() function in 
         * all Characters.
         */

    }, {
        key: 'updateRandomWalk',
        value: function updateRandomWalk() {
            if (!this.inited) {
                console.error('Animal RandomWalk NOT initialized (did you leave out of constructor?)');
                return;
            }
            this.counter++;
            this.delayCounter++;
            if (this.delayCounter < this.delay) {
                //console.log('delayCounter:' + this.delayCounter + ' MAX:' + this.MAX_DELAY);
                return;
            }

            // Play animal's opening sound ONCE at start of movement
            if (this.firstMove && this.game.soundPool) {
                this.game.soundPool.playSound(this.obj.constructor.name.toLowerCase(), 0.7);
                this.firstMove = false;
            }

            // compute dx and dy from random walk. store initial position
            this.oldLeft = this.obj.position.left;
            this.oldTop = this.obj.position.top;

            // this.obj.direction was set in initRandomWalk
            switch (this.obj.direction) {
                case 'top':
                    this.obj.position.top -= this.speed + 0.1 * this.getRandom(1, this.speed);
                    this.obj.position.left -= 10 * this.getRandom(-this.speed, this.speed / 2);
                    break;
                case 'left':
                    this.obj.position.left -= this.speed + 0.5 * this.getRandom(0, this.speed);
                    this.obj.position.top += 10 * this.getRandom(-this.speed, this.speed);
                    break;
                case 'bottom':
                    if (this.counter > this.MAX) {
                        this.MAX = this.getRandom(2, 15);
                        this.newLeft = this.getRandom(-this.speed, this.speed);
                        this.counter = 0;
                    } else if (this.counter > this.MAX / 2) {
                        this.speed = this.getRandom(-0.2, 1.2); //NOTE: fine-tune this to make gameplay harder
                    }
                    this.obj.position.top += this.speed;
                    var r = this.getRandom(-1, 1);
                    this.obj.position.left -= r * this.newLeft;
                    break;
                case 'right':
                    this.obj.position.left += this.speed + 0.5 * this.getRandom(0, this.speed);
                    this.obj.position.top += 10 * this.getRandom(-this.speed, this.speed);
                    break;
                case 'return':
                    // This is caused by a Trump collider running into the Animal
                    // TODO: return Animal to its cage
                    this.obj.direction = 'caged';
                    // TODO: write return arc
                    break;
                case 'caged':
                    this.obj.position.left = this.startLeft;
                    this.obj.position.top = this.startTop;
                    // TODO: when caged, reset until it is uncaged again
                    break;
                default:
                    console.error('Mover.setPrefDirection: invalid direction:' + this.obj.direction);
                    break;
            }

            // Compute dx and dy for Animals
            var xdist = this.oldLeft - this.obj.position.left;
            var ydist = this.oldTop - this.obj.position.top;
            var sum = xdist + ydist;
            if (sum > 0.0001) {
                this.obj.dx = xdist / sum;
                this.obj.dy = ydist / sum;
            } else {
                this.obj.dx = 0;
                this.obj.dy = 0;
            }

            // save our new position
            this.oldLeft = this.obj.position.left;
            this.oldTop = this.obj.position.top;

            //console.log(' dx:' + this.obj.dx + ' dy:' + this.obj.dy + ' sum:' + sum)
        }
    }, {
        key: 'calculateCollision',
        value: function calculateCollision(trump, animal) {
            var w = this.obj.image.data.width;
            var h = this.obj.image.data.height;
            var aw = animal.image.data.width;
            var ah = animal.image.data.height;

            if (this.obj.position.left < animal.position.left + aw && this.obj.position.left + w > animal.position.left && this.obj.position.top < animal.position.top + ah && this.obj.position.top + h > animal.position.top) {

                //get Trump centeral point
                var tXCenter = this.obj.position.left + w / 2;
                var tYCenter = this.obj.position.top + h / 2;

                //get Animal central point
                var aXCenter = animal.position.left + aw / 2;
                var aYCenter = animal.position.top + ah / 2;

                //compute x and y vector between centers
                var cXDiff = tXCenter - aXCenter;
                var cYDiff = tYCenter = aYCenter;

                // Trump doesn't react if not moving (even if animal does)
                if (trump.speed != 0 && trump.dx != 0 && trump.dy != 0) {

                    // move object so it isn't colliding anymore
                    if (cXDiff >= 0) {
                        trump.position.x += cXDiff + 1;
                    } else {
                        trump.position.x -= cXDiff + 1;
                    }

                    if (cYDiff >= 0) {
                        trump.position.y += cYDiff + 1;
                    } else {
                        trump.position.y -= cYDiff + 1;
                    }

                    // normalize new vectors
                    trump.dx = -cXDiff / cYDiff;
                    trump.dy = -cYDiff / cXDiff;

                    // rounding error
                    var ddif = Math.abs(trump.dx + trump.dy);
                    if (ddif > 1.0) {
                        if (trump.dx >= 0) {
                            trump.dy -= ddif;
                        } else {
                            trump.dy += ddif;
                        }
                    }
                } //end of Trump is moving
                //console.log('dx::::::' + trump.dx + ' dy::::::' + trump.dy)

                return true;
            }
            return false;
        }

        /** 
         * @method updatePingPong
         * @description move in a ping-pong style.
         * Call in an update function inside the Character, e.g. 
         * update () { updateRandomWalk(); }
         * The main Game object automatically finds and 'fires' update() function in 
         * all Characters.
         * Possible updates for motion:
         * 1. Collision with a Player (via kick() method) starts the Trump character moving
         * 2. Trump will bounce on all walls EXCEPT the bottom wall
         * 3. When the Trump intersects the bottom wall, they stop moving
         * 4. If they collide with an Animal, they bounce, and the Animal returns to its Cage.
         */

    }, {
        key: 'updatePingPong',
        value: function updatePingPong() {

            if (!this.inited) {
                console.error('Trump PingPong NOT initialized (did you leave out of constructor?)');
                return;
            }
            //console.log('dx:' + this.obj.dx + ' dy:' + this.obj.dy);
            this.obj.position.left -= this.obj.speed * this.obj.dx;
            this.obj.position.top -= this.obj.speed * this.obj.dy;

            //check bounds (AnimalArea)
            if (this.bounds) {
                if (this.obj.image.data) {

                    var w = this.obj.image.data.width;
                    var h = this.obj.image.data.height;

                    // catch cases where Trump gets into the Cage area
                    if (this.obj.position.top < this.bounds.top) {
                        if (this.obj.dy > 0) {
                            this.obj.dy = -this.obj.dy;
                        }
                        this.obj.position.top = this.bounds.top + 1;
                    }

                    // run this only if we are moving down the screen
                    if (this.obj.dy < 0) {
                        if (this.obj.position.top > this.obj.startTop - this.obj.dy * this.obj.speed) {
                            //this.obj.dy = -this.obj.dy;
                            this.obj.position.top = this.obj.startTop;
                            this.obj.dx = 0;
                            this.obj.dy = 0;
                        }
                        var dist = this.bounds.bottom - h - this.obj.position.top;
                        var spd = -this.obj.dy * this.obj.speed * 4;

                        // decelerate before stopping at bottom of AnimalArea
                        if (dist < spd && spd > 2) {
                            this.obj.speed /= 2;
                        }
                    } //end of dy negative (going down)

                    // bounce on the other 3 walls
                    if (this.obj.position.left < this.bounds.left) {
                        this.obj.dx = -this.obj.dx;
                    }
                    if (this.obj.position.top < this.bounds.top) {
                        this.obj.dy = -this.obj.dy;
                    }
                    if (this.obj.position.left > this.bounds.right - w) {
                        this.obj.dx = -this.obj.dx;
                    }

                    // If we encounder an animal, bounce, AND 'kick' the animal back into its cage
                    if (this.obj.animals) {
                        for (var i = 0, len = this.obj.animals.length; i < len; i++) {
                            var animal = this.obj.animals[i];

                            if (this.calculateCollision(this.obj, animal)) {
                                //set the Animal's state to return home
                                console.log('>>>RETURNING ANIMAL TO CAGE');
                                animal.direction = 'return';
                                if (this.obj.speed < 2) {
                                    this.obj.speed = 2;
                                }
                            }
                        }
                    }
                }
            }

            //break out of horizontal move
            if (this.obj.dy < 0.001 && this.obj.dx > 0.001) {
                var d = this.randomizer();
                this.obj.dy += d - this.randomizer();
            }
        }
    }]);

    return Mover;
}(); // end of class


exports.default = Mover;

},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Player.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * User-controlled Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Player = function (_Character) {
  _inherits(Player, _Character);

  function Player(config) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Player).call(this, config));

    _this.mover.initSlew();
    return _this;
  }

  _createClass(Player, [{
    key: 'update',
    value: function update() {
      this.mover.updateSlew(); //smooths motion, applies Collider
    }
  }]);

  return Player;
}(_Character3.default);

exports.default = Player;

},{"./Character.js":7,"./GamePiece.js":12}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Area2 = require('./Area.js');

var _Area3 = _interopRequireDefault(_Area2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * PlayerArea.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The region where the Player can move.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Area
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var PlayerArea = function (_Area) {
  _inherits(PlayerArea, _Area);

  function PlayerArea(config) {
    _classCallCheck(this, PlayerArea);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PlayerArea).call(this, config));
  }

  return PlayerArea;
}(_Area3.default);

exports.default = PlayerArea;

},{"./Area.js":3,"./GamePiece.js":12}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _DynamicText2 = require('./DynamicText.js');

var _DynamicText3 = _interopRequireDefault(_DynamicText2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Score.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Display user score
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits DynamicText, Text, Info, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Score = function (_DynamicText) {
  _inherits(Score, _DynamicText);

  function Score(config) {
    _classCallCheck(this, Score);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Score).call(this, config));
  }

  return Score;
}(_DynamicText3.default);

exports.default = Score;

},{"./DynamicText.js":9,"./GamePiece.js":12,"./Info.js":18,"./Text.js":30}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _StaticImage = require('./StaticImage.js');

var _StaticImage2 = _interopRequireDefault(_StaticImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Screen.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Generic Screen object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Screen = function (_GamePiece) {
  _inherits(Screen, _GamePiece);

  function Screen(config) {
    _classCallCheck(this, Screen);

    //init 'parent' GamePiece

    // save a reference to our parent Game object

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Screen).call(this, config));

    _this.game = config.game;

    window.config = config; /////////////////////////DEBUG ONLY

    // Screens are defined in HTML, so save a reference to our DOM id
    _this.domId = config.id;

    // save a reference to the DOM element we're connected to
    _this.dom = document.getElementById(_this.domId);

    // insert the copyright info from the main Game object
    _this.addWarning();
    return _this;
  }

  // load a background image into the Screen


  _createClass(Screen, [{
    key: 'loadBackground',
    value: function loadBackground(path, callback) {
      console.log("loading:" + this.domId);
      this.backgroundImage = new _Image2.default({
        name: this.name + '-image',
        domId: this.id + '-image',
        path: path,
        callback: callback
      });
      this.backgroundImage.loadBackgroundImage(this.dom, path, callback);
    }

    // show and hide regions of the Screen

  }, {
    key: 'showScreen',
    value: function showScreen() {
      console.log("showing:" + this.domId);
      this.dom.style.display = "block";
    }
  }, {
    key: 'hideScreen',
    value: function hideScreen() {
      console.log("hiding:" + this.domId);
      this.dom.style.display = "none";
    }
  }, {
    key: 'showHeader',
    value: function showHeader() {
      this.dom.querySelector('.header').style.display = "block";
    }
  }, {
    key: 'hideHeader',
    value: function hideHeader() {
      this.dom.querySelector('.header').style.display = "none";
    }
  }, {
    key: 'showFooter',
    value: function showFooter() {
      this.dom.querySelector('.footer').style.display = "block";
    }
  }, {
    key: 'hideFooter',
    value: function hideFooter() {
      this.dom.querySelector('.footer').style.display = "none";
    }
  }, {
    key: 'addWarning',
    value: function addWarning() {
      this.dom.querySelector('.footer').innerHTML = this.game.warning;
    }
  }]);

  return Screen;
}(_GamePiece3.default);

exports.default = Screen;
;

},{"./GamePiece.js":12,"./Image.js":17,"./StaticImage.js":28}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 * @class Sounder.js

 * @description provide sounds that other objects can play. Detects the kinds 
 * of audio files the web brower can play, and serves the first file it finds in 
 * the /audio folder of the distribution. Audio files are accessed by custom names 
 * for playback.

 * Adapted from
 * @http://blog.sklambert.com/html5-canvas-game-html5-audio-and-finishing-touches/

 * Sounder.js should be loaded in the main Game initialization process.

 * In addition, the distribution MUST have an /audio directory with files in multiple 
 * audio formats:
 * MP3 (.mp3)
 * Ogg-Vorbis (.ogg)
 * WAV (.wav)

 * Audio Editors:
 * Audacity (free)
 * @link http://www.audacityteam.org/
 * ProTools ($$$)
 * @link http://www.avid.com/pro-tools

 * Audio converters:
 * @link http://media.io/
 * @link https://sourceforge.net/projects/audacity/
 * @link http://www.mediahuman.com/audio-converter/
 * @link http://www.html5audioconverter.com/
 
 * Audio Samples:
 * @link http://www.grsites.com/archive/sounds/category/25/?offset=20
 * @link https://www.freesound.org
 */

var Sounder = function () {
	function Sounder() {
		_classCallCheck(this, Sounder);

		// Create an array of loaded sounds
		this.path = 'audio/';

		this.sounds = [];
		this.checkAudio();
	}

	/** 
  * @method checkAudio
  * @description see which audio file formats can be played by the browser.
  */


	_createClass(Sounder, [{
		key: 'checkAudio',
		value: function checkAudio() {
			var elem = document.createElement('audio');
			var bool = false;

			try {
				if (bool = !!elem.canPlayType) {
					bool = new Boolean(bool);
					bool.ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '');
					bool.mp3 = elem.canPlayType('audio/mpeg;').replace(/^no$/, '');
					bool.wav = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '');
					bool.m4a = (elem.canPlayType('audio/x-m4a;') || elem.canPlayType('audio/aac;')).replace(/^no$/, '');
				}
			} catch (e) {}
			// list supported audio types
			//elem = null;
			this.type = bool;

			for (var i in this.type) {
				console.log(i + ' support:' + this.type[i]);
			}
		}

		/** 
   * @method setSound
   * @description callback for loading sound, adds to the 
   * sounds array for later playback.
   */

	}, {
		key: 'setSound',
		value: function setSound(e, name, volume) {
			if (!volume) {
				volume = 0.5;
			}
			this.sounds[name] = e.target;
			this.sounds[name].volume = volume;
		}

		/** 
   * @method soundError
   * @description callback for failed loads of sound files.
   */

	}, {
		key: 'soundError',
		value: function soundError(e, name) {
			console.error('Audio ' + name + ' faied to load');
			this.sounds[name] = null;
		}

		/** 
   * @method addSound
   * @description add a new sound. 
   * @param String name the name of the sound. The sound name 
   * must match the file containing the audio, e.g. for a sound called 
   * 'kick' there must be a file /audio/kick.mp3 
   * Possible formats (create them all during production)
   * - MP3 (.mp3)
   * - Ogg-Vorbis (.ogg)
   * - WAV (.wav)
   * @param Number volume the loudness of the sound, between 0 (silent) 
   * and 1.0 (as loud as possible).
   */

	}, {
		key: 'addSound',
		value: function addSound(name, volume) {
			var _this = this;

			if (!name) {
				console.error('tried to load audio file without a name and/or path, aborting');
				return;
			}
			// try creating the sound
			var snd;
			// get the extension and remaining path
			for (var i in this.type) {
				console.log('this.type[' + i + ']=' + this.type[i]);
				if (this.type[i] != "") {
					//returned dataType for elem.canPlayType(...)

					var filePath = this.path + name + '.' + i;
					console.log("TRYING TO LOAD:" + this.path + name + '.' + i);

					// Create the Audio object
					snd = new Audio(filePath);

					// trap load and error events
					snd.addEventListener('loadeddata', function (event) {
						return _this.setSound(event, name, volume);
					}, false);

					snd.addEventListener('error', function (event) {
						return _this.soundError(event, name);
					}, false);

					// start loading the sound
					snd.load();
					break;
				}
			}
			if (!snd) {
				console.error('sound file for:' + name + ' not found in audio');
			}
		}

		/** 
   * @method playSound
   * @description
   * @params String name the name of the sound. Must match the filename 
   * WITHOUT a file extension in the /audio folder for the game.
   */

	}, {
		key: 'playSound',
		value: function playSound(name) {
			if (this.sounds[name]) {
				this.sounds[name].play();
			} else {
				console.error('no sound file with name:' + name + ' in audio folder');
			}
		}

		/** 
   * @method fileExists
   * @description detect if a file is present on the server. Uses an 
   * synchronous Ajax technique, so SLOW if you are using a remote server. 
   * No comparable method exists for determining if a folder exists in 
   * client-side vanilla JavaScript.
   * @param String url the path to the file on the server.
   */

	}, {
		key: 'fileExists',
		value: function fileExists(url) {
			var xhr = new XMLHttpRequest();
			xhr.open('HEAD', url, false);
			xhr.send();
			if (xhr.status == '404') {
				return false;
			} else {
				return true;
			}
		}
	}]);

	return Sounder;
}(); // end of class


exports.default = Sounder;

},{}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _StaticText = require('./StaticText.js');

var _StaticText2 = _interopRequireDefault(_StaticText);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _Identity = require('./Identity.js');

var _Identity2 = _interopRequireDefault(_Identity);

var _Background = require('./Background.js');

var _Background2 = _interopRequireDefault(_Background);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * StartScreen.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Opening screen for game.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Screen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var StartScreen = function (_Screen) {
	_inherits(StartScreen, _Screen);

	function StartScreen(config) {
		_classCallCheck(this, StartScreen);

		// this.dom defined in Screen

		// Load StartScreen sub-objects

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StartScreen).call(this, config));

		_this.loadBackground('img/screens/start-screen.png');

		// load identity image
		_this.loadIdentity();

		// load instructions
		_this.loadInstructions();

		// Make the start button open the main game screen
		_this.bindStart();
		return _this;
	}

	_createClass(StartScreen, [{
		key: 'loadIdentity',
		value: function loadIdentity() {
			this.identity = new _Identity2.default({
				name: 'identity',
				domId: 'start-screen-identity',
				path: 'img/identity/logo.png',
				author: 'pete markiewicz',
				source: 'plyojump'
			});

			// set position of Identity
			this.identity.setDOMPosition({
				top: 0,
				left: 0
			});
		}
	}, {
		key: 'loadInstructions',
		value: function loadInstructions() {

			this.instructions = new _StaticText2.default({
				name: 'game instructions',
				domId: 'instructions',
				text: 'Play to win. That is all Trump cares about, and so should you.'
			});

			this.instructions.setDOMPosition({
				top: 0,
				left: 0
			});
		}
	}, {
		key: 'bindStart',
		value: function bindStart() {
			console.log("in bindStart, this.game:" + this.game);
			// we use bind() to link the function below to StartScreen (otherwise, it thinks it is inside window)
			document.querySelector('#start-screen-play-button').addEventListener('click', function (e) {
				//alert("in handler, game:" + this.game)
				e.preventDefault();
				this.game.startGame();
			}.bind(this));
		}
	}]);

	return StartScreen;
}(_Screen3.default);

exports.default = StartScreen;

},{"./Background.js":4,"./GamePiece.js":12,"./Identity.js":16,"./Image.js":17,"./Info.js":18,"./Screen.js":25,"./StaticText.js":29,"./Text.js":30}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Image2 = require('./Image.js');

var _Image3 = _interopRequireDefault(_Image2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * StaticImage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Image-style Information that cannot be changed once the game is loaded
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var StaticImage = function (_Image) {
  _inherits(StaticImage, _Image);

  function StaticImage(config) {
    _classCallCheck(this, StaticImage);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StaticImage).call(this, config));

    _this.static = true;

    return _this;
  }

  return StaticImage;
}(_Image3.default);

exports.default = StaticImage;

},{"./GamePiece.js":12,"./Image.js":17,"./Info.js":18}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text2 = require('./Text.js');

var _Text3 = _interopRequireDefault(_Text2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * StaticText.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Text that cannot be changed after loaded by the game
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var StaticText = function (_Text) {
  _inherits(StaticText, _Text);

  function StaticText(config) {
    _classCallCheck(this, StaticText);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StaticText).call(this, config));

    _this.static = true;

    return _this;
  }

  return StaticText;
}(_Text3.default);

exports.default = StaticText;

},{"./GamePiece.js":12,"./Info.js":18,"./Text.js":30}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info2 = require('./Info.js');

var _Info3 = _interopRequireDefault(_Info2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Text.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Creates a text-type Info object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits Info, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Text = function (_Info) {
  _inherits(Text, _Info);

  function Text(config) {
    _classCallCheck(this, Text);

    // set the text

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Text).call(this, config));

    _this.setText(config.text);

    // set the DOMId
    _this.addToDOM(config.domId);
    return _this;
  }

  _createClass(Text, [{
    key: 'setText',
    value: function setText(txt) {
      this.text = txt;
    }
  }, {
    key: 'addToDOM',
    value: function addToDOM(domId) {

      this.dom = document.createElement('div');
      this.dom.id = name + '-Text';
      this.dom.innerHTML = this.text;

      // container
      var container = document.getElementById(domId);

      // add to the DOM
      container.insertBefore(this.dom, container.childNodes[0]);
    }
  }]);

  return Text;
}(_Info3.default);

exports.default = Text;

},{"./GamePiece.js":12,"./Info.js":18}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Animal2 = require('./Animal.js');

var _Animal3 = _interopRequireDefault(_Animal2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Tiger.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A Tiger, who tries to get the Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Tiger = function (_Animal) {
  _inherits(Tiger, _Animal);

  function Tiger(config) {
    _classCallCheck(this, Tiger);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tiger).call(this, config));
  }

  return Tiger;
}(_Animal3.default);

exports.default = Tiger;

},{"./Animal.js":1,"./Character.js":7,"./GamePiece.js":12}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Trump.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The ball-like Character you kick into Animals
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Trump = function (_Character) {
   _inherits(Trump, _Character);

   function Trump(config) {
      _classCallCheck(this, Trump);

      //Trump gets PingPong motion

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Trump).call(this, config));

      _this.mover.initPingPong(0, _this); //pingpong won't start yet
      return _this;
   }

   _createClass(Trump, [{
      key: 'update',
      value: function update() {
         this.mover.updatePingPong(); //allows pingpong motion
      }
   }]);

   return Trump;
}(_Character3.default);

exports.default = Trump;

},{"./Character.js":7,"./GamePiece.js":12}],33:[function(require,module,exports){
'use strict';

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Game = require('./Game.js');

var _Game2 = _interopRequireDefault(_Game);

var _Screen = require('./Screen.js');

var _Screen2 = _interopRequireDefault(_Screen);

var _StartScreen = require('./StartScreen.js');

var _StartScreen2 = _interopRequireDefault(_StartScreen);

var _GameScreen = require('./GameScreen.js');

var _GameScreen2 = _interopRequireDefault(_GameScreen);

var _EndScreen = require('./EndScreen.js');

var _EndScreen2 = _interopRequireDefault(_EndScreen);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _StaticText = require('./StaticText.js');

var _StaticText2 = _interopRequireDefault(_StaticText);

var _Identity = require('./Identity.js');

var _Identity2 = _interopRequireDefault(_Identity);

var _Instructions = require('./Instructions.js');

var _Instructions2 = _interopRequireDefault(_Instructions);

var _DynamicText = require('./DynamicText.js');

var _DynamicText2 = _interopRequireDefault(_DynamicText);

var _Score = require('./Score.js');

var _Score2 = _interopRequireDefault(_Score);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Trump = require('./Trump.js');

var _Trump2 = _interopRequireDefault(_Trump);

var _Player = require('./Player.js');

var _Player2 = _interopRequireDefault(_Player);

var _Animal = require('./Animal.js');

var _Animal2 = _interopRequireDefault(_Animal);

var _Lion = require('./Lion.js');

var _Lion2 = _interopRequireDefault(_Lion);

var _Tiger = require('./Tiger.js');

var _Tiger2 = _interopRequireDefault(_Tiger);

var _Bear = require('./Bear.js');

var _Bear2 = _interopRequireDefault(_Bear);

var _Gorilla = require('./Gorilla.js');

var _Gorilla2 = _interopRequireDefault(_Gorilla);

var _Health = require('./Health.js');

var _Health2 = _interopRequireDefault(_Health);

var _Area = require('./Area.js');

var _Area2 = _interopRequireDefault(_Area);

var _Cage = require('./Cage.js');

var _Cage2 = _interopRequireDefault(_Cage);

var _AnimalArea = require('./AnimalArea.js');

var _AnimalArea2 = _interopRequireDefault(_AnimalArea);

var _PlayerArea = require('./PlayerArea.js');

var _PlayerArea2 = _interopRequireDefault(_PlayerArea);

var _Tests = require('../../tests/Tests.js');

var _Tests2 = _interopRequireDefault(_Tests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** 
 * Set up tests.
 */


//Character inheritance


//The entire game
var myTests = new _Tests2.default();

/**
 * Set up the Game
 */


//Test file (very simple testrunner)


//Area inheritance.


//Info inheritance


//Screen inheritance
/** 
 * Create the game. Import the primary classes, and 'composite' 
 * the overall Game object out of instances of the classes.
 */
var myGame = new _Game2.default({ name: "ZooKillSoccer" });

/** 
 * EXPORT TO WEB CONSOLE
 * To make something visible in Web console for debuggint, attach to window object
 * NOTE: Professional code uses specialized testing modules like Mocha, Karma, and 
 * similar testing libraries.
 */

// we can run this test manually with tests.run();
window.tests = myTests;

// make the game object visible so we can inspect it.
window.game = myGame;

console.log('ZOOKILLSOCCER Game initialized. Access game via "game". Use Tests.run() to test.');

},{"../../tests/Tests.js":34,"./Animal.js":1,"./AnimalArea.js":2,"./Area.js":3,"./Bear.js":5,"./Cage.js":6,"./Character.js":7,"./DynamicText.js":9,"./EndScreen.js":10,"./Game.js":11,"./GamePiece.js":12,"./GameScreen.js":13,"./Gorilla.js":14,"./Health.js":15,"./Identity.js":16,"./Info.js":18,"./Instructions.js":19,"./Lion.js":20,"./Player.js":22,"./PlayerArea.js":23,"./Score.js":24,"./Screen.js":25,"./StartScreen.js":27,"./StaticText.js":29,"./Text.js":30,"./Tiger.js":31,"./Trump.js":32}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

//The entire game


//Screen inheritance


//Info inheritance


//Character inheritance


//Area inheritance.


var _GamePiece = require('../modules/js/GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Game = require('../modules/js/Game.js');

var _Game2 = _interopRequireDefault(_Game);

var _Screen = require('../modules/js/Screen.js');

var _Screen2 = _interopRequireDefault(_Screen);

var _StartScreen = require('../modules/js/StartScreen.js');

var _StartScreen2 = _interopRequireDefault(_StartScreen);

var _GameScreen = require('../modules/js/GameScreen.js');

var _GameScreen2 = _interopRequireDefault(_GameScreen);

var _EndScreen = require('../modules/js/EndScreen.js');

var _EndScreen2 = _interopRequireDefault(_EndScreen);

var _Info = require('../modules/js/Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('../modules/js/Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _StaticText = require('../modules/js/StaticText.js');

var _StaticText2 = _interopRequireDefault(_StaticText);

var _Identity = require('../modules/js/Identity.js');

var _Identity2 = _interopRequireDefault(_Identity);

var _Instructions = require('../modules/js/Instructions.js');

var _Instructions2 = _interopRequireDefault(_Instructions);

var _DynamicText = require('../modules/js/DynamicText.js');

var _DynamicText2 = _interopRequireDefault(_DynamicText);

var _Score = require('../modules/js/Score.js');

var _Score2 = _interopRequireDefault(_Score);

var _Character = require('../modules/js/Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Trump = require('../modules/js/Trump.js');

var _Trump2 = _interopRequireDefault(_Trump);

var _Player = require('../modules/js/Player.js');

var _Player2 = _interopRequireDefault(_Player);

var _Animal = require('../modules/js/Animal.js');

var _Animal2 = _interopRequireDefault(_Animal);

var _Lion = require('../modules/js/Lion.js');

var _Lion2 = _interopRequireDefault(_Lion);

var _Tiger = require('../modules/js/Tiger.js');

var _Tiger2 = _interopRequireDefault(_Tiger);

var _Bear = require('../modules/js/Bear.js');

var _Bear2 = _interopRequireDefault(_Bear);

var _Gorilla = require('../modules/js/Gorilla.js');

var _Gorilla2 = _interopRequireDefault(_Gorilla);

var _Health = require('../modules/js/Health.js');

var _Health2 = _interopRequireDefault(_Health);

var _Area = require('../modules/js/Area.js');

var _Area2 = _interopRequireDefault(_Area);

var _Cage = require('../modules/js/Cage.js');

var _Cage2 = _interopRequireDefault(_Cage);

var _AnimalArea = require('../modules/js/AnimalArea.js');

var _AnimalArea2 = _interopRequireDefault(_AnimalArea);

var _PlayerArea = require('../modules/js/PlayerArea.js');

var _PlayerArea2 = _interopRequireDefault(_PlayerArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 * TESTBED - Test all our objects. This is a very basic testing system. 
 * NOTE: Professional code uses testing libraries like Karma and Mocha.
 */

var Tests = function () {
	function Tests() {
		_classCallCheck(this, Tests);
	}

	// Because we make these objects with 'var' they are scoped to the run() function.


	_createClass(Tests, [{
		key: 'run',
		value: function run() {

			var config = { name: 'Forest Trump or Donald Gump rulz' };

			// Make some test game objects
			var game = new _Game2.default(config);
			console.log(game.getName());

			//test Game Object
			var myGame = new _Game2.default({ name: "ZooKillSoccer" });
			console.log(myGame.getName());

			//other objects
			var myScreen = new _Screen2.default({ name: "Opening Screen" });
			console.log(myScreen.getName());

			var myStartScreen = new _StartScreen2.default({ name: "Start Screen" });
			console.log(myStartScreen.getName());

			var myGameScreen = new _GameScreen2.default({ name: "Game Screen" });
			console.log(myGameScreen.getName());

			var myEndScreen = new _EndScreen2.default({ name: "End Screen" });
			console.log(myEndScreen.getName());

			var myInfo = new _Info2.default({ name: "Generic Information" });
			console.log(myInfo.getName());

			var myText = new _Text2.default({ name: "Generic Text Object" });
			console.log(myText.getName());

			var myStaticText = new _StaticText2.default({ name: "Generic Static Text Object" });
			console.log(myStaticText.getName());

			var myIdentity = new _Identity2.default({ name: "Generic Identity Object" });
			console.log(myIdentity.getName());

			var myInstructions = new _Instructions2.default({ name: "Generic Instructions Object" });
			console.log(myInstructions.getName());

			var myDynamicText = new _DynamicText2.default({ name: "Generic Dynamic Text Object" });
			console.log(myDynamicText.getName());

			var myScore = new _Score2.default({ name: "scores..." });
			console.log(myScore.getName());

			var myCharacter = new _Character2.default({ name: "Generic Character" });
			console.log(myCharacter.getName());

			var myTrump = new _Trump2.default({ name: "Donald Trump" });
			console.log(myTrump.getName());

			var myPlayer = new _Player2.default({ name: "End User" });
			console.log(myPlayer.getName());

			var myAnimal = new _Animal2.default({ name: "Generic Animal" });
			console.log(myAnimal.getName());

			var myLion = new _Lion2.default({ name: "Cowardly the Lion" });
			console.log(myLion.getName());

			var myTiger = new _Tiger2.default({ name: "Chomper the Tiger" });
			console.log(myTiger.getName());

			var myBear = new _Bear2.default({ name: "Mauler the Bear" });
			console.log(myBear.getName());

			var myGorilla = new _Gorilla2.default({ name: "Spunky the Gorilla" });
			console.log(myGorilla.getName());

			var myHealth = new _Health2.default({ name: "One Health Kit" });
			console.log(myHealth.getName());

			//Area inheritance.
			var myArea = new _Area2.default({ name: "Generic Area" });
			console.log(myArea.getName());

			var myCage = new _Cage2.default({ name: "Generic Area" });
			console.log(myCage.getName());

			var myAnimalArea = new _AnimalArea2.default({ name: "AnimalArea" });
			console.log(myAnimalArea.getName());

			var myPlayerArea = new _PlayerArea2.default({ name: "PlayerArea" });
			console.log(myPlayerArea.getName());
		}
	}]);

	return Tests;
}();

exports.default = Tests;

},{"../modules/js/Animal.js":1,"../modules/js/AnimalArea.js":2,"../modules/js/Area.js":3,"../modules/js/Bear.js":5,"../modules/js/Cage.js":6,"../modules/js/Character.js":7,"../modules/js/DynamicText.js":9,"../modules/js/EndScreen.js":10,"../modules/js/Game.js":11,"../modules/js/GamePiece.js":12,"../modules/js/GameScreen.js":13,"../modules/js/Gorilla.js":14,"../modules/js/Health.js":15,"../modules/js/Identity.js":16,"../modules/js/Info.js":18,"../modules/js/Instructions.js":19,"../modules/js/Lion.js":20,"../modules/js/Player.js":22,"../modules/js/PlayerArea.js":23,"../modules/js/Score.js":24,"../modules/js/Screen.js":25,"../modules/js/StartScreen.js":27,"../modules/js/StaticText.js":29,"../modules/js/Text.js":30,"../modules/js/Tiger.js":31,"../modules/js/Trump.js":32}]},{},[33])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0FuaW1hbC5qcyIsIm1vZHVsZXMvanMvQW5pbWFsQXJlYS5qcyIsIm1vZHVsZXMvanMvQXJlYS5qcyIsIm1vZHVsZXMvanMvQmFja2dyb3VuZC5qcyIsIm1vZHVsZXMvanMvQmVhci5qcyIsIm1vZHVsZXMvanMvQ2FnZS5qcyIsIm1vZHVsZXMvanMvQ2hhcmFjdGVyLmpzIiwibW9kdWxlcy9qcy9Db2xsaWRlci5qcyIsIm1vZHVsZXMvanMvRHluYW1pY1RleHQuanMiLCJtb2R1bGVzL2pzL0VuZFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvR2FtZS5qcyIsIm1vZHVsZXMvanMvR2FtZVBpZWNlLmpzIiwibW9kdWxlcy9qcy9HYW1lU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9Hb3JpbGxhLmpzIiwibW9kdWxlcy9qcy9IZWFsdGguanMiLCJtb2R1bGVzL2pzL0lkZW50aXR5LmpzIiwibW9kdWxlcy9qcy9JbWFnZS5qcyIsIm1vZHVsZXMvanMvSW5mby5qcyIsIm1vZHVsZXMvanMvSW5zdHJ1Y3Rpb25zLmpzIiwibW9kdWxlcy9qcy9MaW9uLmpzIiwibW9kdWxlcy9qcy9Nb3Zlci5qcyIsIm1vZHVsZXMvanMvUGxheWVyLmpzIiwibW9kdWxlcy9qcy9QbGF5ZXJBcmVhLmpzIiwibW9kdWxlcy9qcy9TY29yZS5qcyIsIm1vZHVsZXMvanMvU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9Tb3VuZGVyLmpzIiwibW9kdWxlcy9qcy9TdGFydFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvU3RhdGljSW1hZ2UuanMiLCJtb2R1bGVzL2pzL1N0YXRpY1RleHQuanMiLCJtb2R1bGVzL2pzL1RleHQuanMiLCJtb2R1bGVzL2pzL1RpZ2VyLmpzIiwibW9kdWxlcy9qcy9UcnVtcC5qcyIsIm1vZHVsZXMvanMvaW5kZXguanMiLCJ0ZXN0cy9UZXN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoi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anMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIEFuaW1hbC5qc1xuICogVGhlIGNyaXR0ZXJzIHRoYXQgVHJ1bXAgdHJpZXMgdG8gc3RvcCBmcm9tIGdldHRpbmcgdGhlIFBsYXllci5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5cbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYWwgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuXG4gICAgLy8gQW5pbWFscyBnZXQgUmFuZG9tV2FsayBtb3Rpb25cbiAgICAgXHRcdHRoaXMubW92ZXIuaW5pdFJhbmRvbVdhbGsoMC4wMiwgJ2JvdHRvbScpO1xuIFx0fVxuXG5cbiAgdXBkYXRlICgpIHtcbiAgICAgXHRcdHRoaXMubW92ZXIudXBkYXRlUmFuZG9tV2FsaygpO1xuICAgIFx0XHR9XG5cbiB9XG4iLCIvKiogXG4gKiBBbmltYWxBcmVhLmpzXG4gKiBUaGUgcmVnaW9uIGFuaW1hbHMgbW92ZSB0aHJvdWdoIHRvIGdldCB0byBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBBcmVhXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FnZSBleHRlbmRzIEFyZWEge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7XG4gXHR9XG5cbiB9IiwiLyoqIFxuICogQXJlYS5qc1xuICogQSBnZW5lcmljIHJlZ2lvbiBvZiB0aGUgZ2FtZSBzY3JlZW4uIFVzZWQgdG8gYWRkIHZpc3VhbCBvYmplY3RzLCBhbmQgXG4gKiBjcmVhdGUgYm91bmRzIGZvciBjb2xsaXNpb24gZGV0ZWN0aW9uLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgSW5mbywgSW1hZ2UsIFN0YXRpY0ltYWdlXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuIGltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL1N0YXRpY0ltYWdlLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyZWEgZXh0ZW5kcyBHYW1lUGllY2Uge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7XG5cbiBcdFx0Ly8gY3JlYXRlIGEgPGRpdj4sIGFkZCB0byBET00sIHdpdGggb3B0aW9uYWwgaW1hZ2VcbiBcdFx0dGhpcy5hZGRUb0RPTShjb25maWcubmFtZSwgY29uZmlnLmNvbnRhaW5lciwgY29uZmlnLnBhdGgpO1xuXG4gXHRcdC8vIHBvc2l0aW9uIHdpdGggYWJzb2x1dGUgY29vcmRpbmF0ZWRcbiBcdFx0dGhpcy5zZXRET01Qb3NpdGlvbihjb25maWcucG9zaXRpb24pOyAvL2luaGVyaXRlZCBmcm9tIEdhbWVQaWVjZVxuIFx0XHR0aGlzLnNldERPTVNpemUoY29uZmlnLnNpemUpO1xuIFx0fVxuXG4gXHQvLyBjcmVhdGUgRE9NIGVsZW1lbnQsIExvYWQgYSBiYWNrZ3JvdW5kIGltYWdlLCBhbmQgaW5zZXJ0IGludG8gY29udGFpbmVyXG4gXHRhZGRUb0RPTSAobmFtZSwgY29udGFpbmVyLCBpbWdQYXRoKSB7XG4gXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gXHRcdHRoaXMuZG9tLmlkID0gbmFtZSArICctYXJlYSc7XG5cbiBcdFx0Ly8gcG9zaXRpb24gYWJzb2x1dGVseVxuIFx0XHR0aGlzLmRvbS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cbiBcdFx0Ly8gRG9uJ3QgYWxsb3cgcGFkZGluZyBvciBtYXJnaW5zIG9yIGJvcmRlcnMgZm9yIEFyZWFzXG4gXHRcdHRoaXMuZG9tLnN0eWxlLm1hcmdpbiA9ICcwcHgnO1xuIFx0XHR0aGlzLmRvbS5zdHlsZS5wYWRkaW5nID0gJzBweCc7XG5cbiBcdFx0Ly8gYWRkIHRvIHRoZSBET01cbiBcdFx0Y29udGFpbmVyLmluc2VydEJlZm9yZSh0aGlzLmRvbSwgY29udGFpbmVyLmNoaWxkTm9kZXNbMF0pO1xuXG4gXHRcdC8vIGlmIHdlIGhhdmUgYW4gaW1hZ2UsIGluc2VydCBpbiBlbGVtZW50IGJhY2tncm91bmRcbiBcdFx0aWYgKGltZ1BhdGgpIHtcblxuIFx0XHRcdHRoaXMuaW1hZ2UgPSBuZXcgU3RhdGljSW1hZ2UoXG4gXHRcdFx0XHR7XG4gXHRcdFx0XHRcdG5hbWU6IHRoaXMuZG9tLmlkICsgJy1pbWFnZSdcbiBcdFx0XHRcdH1cbiBcdFx0XHQpO1xuXG4gXHRcdFx0dGhpcy5pbWFnZS5sb2FkQmFja2dyb3VuZEltYWdlICh0aGlzLmRvbSwgaW1nUGF0aCk7XG4gXHRcdH1cblxuIFx0fVxuXG4gXHQvLyBib3VuZHMgZGV0ZWN0b3IgZm9yIHN1cHBsaWVkIENoYXJhY3RlclxuXG5cbiB9IiwiLyoqIFxuICogQmFja2dyb3VuZC5qc1xuICogR2FtZSBMb2dvcywgTG9nb1R5cGVzLCBCcmFuZCBOYW1lXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmQgZXh0ZW5kcyBTdGF0aWNJbWFnZSB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cblx0XHR0aGlzLnNldFNvdXJjZShjb25maWcuc291cmNlKTtcblx0XHR0aGlzLnNldEF1dGhvcihjb25maWcuYXV0aG9yKTtcblx0XHR0aGlzLmxvYWRCYWNrZ3JvdW5kSW1hZ2UoY29uZmlnLmRvbUlkLCBjb25maWcucGF0aCk7XG5cdH1cblxufVxuIiwiLyoqIFxuICogQmVhci5qc1xuICogQSBUaWdlciwgd2hvIHRyaWVzIHRvIGdldCB0aGUgUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbiBpbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlYXIgZXh0ZW5kcyBBbmltYWwge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuIFx0fVxuXG5cbiB9IiwiLyoqIFxuICogQ2FnZS5qc1xuICogVGhlIHJlZ2lvbiB3aGVyZSBhbmltYWxzIGFyZSBjYWdlZC5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEFyZWFcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBDYWdlIGV4dGVuZHMgQXJlYSB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblxuIFx0XHRzdXBlcihjb25maWcpO1xuXG4gXHR9XG5cbiB9IiwiLyoqXG4gKiBDaGFyYWN0ZXIuanNcbiAqIEdhbWUtZ2VuZXJhdGVkIG9yIHVzZXIgYXZhdGFycy4gQ2hhcmFjdGVycyBhcmUgcmVuZGVyZWQgaW4gQ2FudmFzLCBidXQgaGF2ZSB0aGVpclxuICogcG9zaXRpb24gY29tcHV0ZWQgYW5kIHVwZGF0ZWQgb3V0c2lkZSBjYW52YXMuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuIGltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL1N0YXRpY0ltYWdlLmpzJztcblxuIGltcG9ydCBNb3ZlciBmcm9tICcuL01vdmVyLmpzJztcbiBpbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBHYW1lUGllY2Uge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuXG4gXHRcdC8vIFNldCBwb3NpdGlvbiBhbmQgc2l6ZSBmcm9tIGNvbmZpZ3VyYXRpb25cbiBcdFx0dGhpcy5wb3NpdGlvbiA9IGNvbmZpZy5wb3NpdGlvbjtcbiBcdFx0dGhpcy5zaXplID0gY29uZmlnLnNpemU7XG5cbiBcdFx0Ly8gc3RvcmUgYSByZWZlcmVuY2UgdG8gdGhlIGdhbWUgb2JqZWN0XG4gXHRcdHRoaXMuZ2FtZSA9IGNvbmZpZy5nYW1lO1xuXG4gXHRcdHRoaXMuaW1hZ2UgPSBuZXcgU3RhdGljSW1hZ2UoXG4gXHRcdFx0e1xuIFx0XHRcdFx0bmFtZTogY29uZmlnLm5hbWUgKyAnLWltYWdlJyxcbiBcdFx0XHRcdHBhdGg6IGNvbmZpZy5wYXRoXG4gXHRcdFx0fVxuIFx0XHQpO1xuXG4gICAgLy9pbml0aWFsaXplIHRoZSBNb3ZlciBvYmplY3QgKGFuaW1hdGlvbilcbiAgICB0aGlzLm1vdmVyID0gbmV3IE1vdmVyKHRoaXMpO1xuXG4gXHRcdC8vIEltYWdlcyBkb24ndCBhdXRvbWF0aWNhbGx5IGxvYWQgd2hlbiB0aGV5J3JlIG5vdCBhdHRhY2hlZCB0byB0aGUgRE9NLFxuIFx0XHQvLyBvciBhIENTUyBiYWNrZ3JvdW5kIGltYWdlXG4gXHRcdHRoaXMuaW1hZ2UubG9hZChjb25maWcucGF0aCwgZnVuY3Rpb24gKCkge2NvbnNvbGUubG9nKCdsb2FkZWQ6JyArIGNvbmZpZy5uYW1lKTt9KTtcbiBcdH1cblxuIFx0Ly8gb3ZlcnJpZGUgZGVmYXVsdCBkcmF3IHdpdGggb3VyIG93blxuIFx0ZHJhdyAoY29udGV4dCkge1xuXHRcdGlmICh0aGlzLmltYWdlKSB7XG5cdFx0XHR2YXIgaW1nID0gdGhpcy5pbWFnZS5kYXRhO1xuXHRcdFx0Y29uc29sZS5sb2coJ2RyYXdpbmcnKVxuXHRcdFx0aWYgKGltZykge1xuXHRcdFx0XHQvLyBkcmF3IGltYWdlIGludG8gSFRNTDUgY2FudmFzXG4gXHRcdCBcdFx0Y29udGV4dC5kcmF3SW1hZ2UoaW1nLCB0aGlzLnBvc2l0aW9uLmxlZnQsIHRoaXMucG9zaXRpb24udG9wKTtcblx0XHRcdH1cblx0XHR9XG4gXHR9XG4gfVxuIiwiLyoqIFxuICogQGNsYXNzIENvbGxpZGVyXG4gKiBAZGVzY3JpcHRpb24gY3JlYXRlIHRoZSBjb2xsaXNpb24gbWF0cml4IGRlZmluaW5nIHdoaWNoIG9iamVjdHMgY2FuIGNvbGxpZGUgXG4gKiB3aXRoIHdoaWNoIG9iamVjdHMuIE9iamVjdHMgdGhhdCBjYW4gY29sbGlkZSBoYXZlIHRoZWlyIHBvdGVudGlhbCBjb2xsaWRlcnMgXG4gKiBhZGRlZCBhcyByZWZlcmVuY2VzLCBlLmcuIFBsYXllci50cnVtcCBvciBUcnVtcC5wbGF5ZXIuXG4gKiBAcGFyYW0gQXJyYXkgY2hhcmFjdGVyQXJyYXkgdGhlIGFycmF5IG9mIENoYXJhY3RlcnMgd2hvIG1pZ2h0IGJlIGludm9sdmVkIFxuICogaW4gY29sbGlzaW9ucy5cbiAqL1xuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpZGVyIHtcblxuIFx0Y29uc3RydWN0b3IgKGNoYXJhY3RlckFycmF5KSB7XG4gXHRcdHRoaXMuY2hhcmFjdGVyQXJyYXkgPSBjaGFyYWN0ZXJBcnJheTtcbiBcdFx0dGhpcy5hbmltYWxBcnJheSA9IFtdOyAvL2ZpbGxlZCB1cCBpbiBzZXRVcENvbGxpc2lvbnNcbiBcdFx0dGhpcy5zZXRVcENvbGxpc2lvbnMoKTtcbiBcdH1cblxuIFx0c2V0VXBDb2xsaXNpb25zICgpIHtcbiBcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuY2hhcmFjdGVyQXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiBcdFx0XHRzd2l0Y2ggKHRoaXMuY2hhcmFjdGVyQXJyYXlbaV0uY29uc3RydWN0b3IubmFtZSkge1xuIFx0XHRcdFx0Y2FzZSAnTGlvbic6XG4gXHRcdFx0XHRjYXNlICdUaWdlcic6XG4gXHRcdFx0XHRjYXNlICdCZWFyJzpcbiBcdFx0XHRcdGNhc2UgJ0dvcmlsbGEnOlxuIFx0XHRcdFx0XHR0aGlzLmFuaW1hbEFycmF5LnB1c2godGhpcy5jaGFyYWN0ZXJBcnJheVtpXSk7XG4gXHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0Y2FzZSAnVHJ1bXAnOlxuIFx0XHRcdFx0XHR0aGlzLnRydW1wID0gdGhpcy5jaGFyYWN0ZXJBcnJheVtpXTtcbiBcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRjYXNlICdQbGF5ZXInOlxuIFx0XHRcdFx0XHR0aGlzLnBsYXllciA9IHRoaXMuY2hhcmFjdGVyQXJyYXlbaV07XG4gXHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly9jcm9zcy1jb25uZWN0IHRoZSBpbXBhY3RvcnNcbiBcdFx0dGhpcy50cnVtcC5wbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiBcdFx0dGhpcy50cnVtcC5hbmltYWxzID0gdGhpcy5hbmltYWxBcnJheTtcbiBcdFx0dGhpcy5wbGF5ZXIudHJ1bXAgPSB0aGlzLnRydW1wO1xuXG4gXHRcdC8vREVCVUdcbiBcdFx0d2luZG93LmFuaW1hbHMgPSB0aGlzLnRydW1wLmFuaW1hbHM7XG4gXHRcdFxuXG4gXHR9XG4gfSIsIi8qKiBcbiAqIER5bmFtaWNUZXh0LmpzXG4gKiBUZXh0IHRoYXQgY2FuIGJlIGNoYW5nZWQgYnkgdXNlciAoZS5nLiBpbnB1dCBmaWVsZCksIG9yIFxuICogdXBkYXRlZCBieSB0aGUgZ2FtZSBpdHNlbGYuXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNUZXh0IGV4dGVuZHMgVGV4dCB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cdH1cbn1cbiIsIi8qKiBcbiAqIEVuZFNjcmVlbi5qc1xuICogRW5kaW5nIHNjcmVlbiBmb3IgdGhlIGdhbWUuXG4gKiBAaW5oZXJpdHMgU2NyZWVuLCBHYW1lUGllY2VcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuIFxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZFNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIoY29uZmlnKTtcblxuIFx0XHQvLyBsb2FkIHRoZSBiYWNrZ3JvdW5kIGltYWdlXG4gXHRcdHRoaXMubG9hZEJhY2tncm91bmQoJ2ltZy9zY3JlZW5zL2VuZC1zY3JlZW4ucG5nJyk7XG5cbiBcdFx0Ly8gTG9hZCBFbmRTY3JlZW4gc3ViLW9iamVjdHNcbiBcdFx0dGhpcy5sb2FkSW5wdXRTY29yZSgpO1xuIFx0XHR0aGlzLmxvYWRIaWdoU2NvcmVzKCk7XG5cbiBcdFx0Ly8gQmluZCBcInBsYXkgYWdhaW5cIiBhbmQgXCJpbnN0cnVjdGlvbnNcIiBidXR0b25zLlxuIFx0XHR0aGlzLmJpbmRSZXBsYXkoKTtcbiBcdFx0dGhpcy5iaW5kSW5zdHJ1Y3Rpb25zKCk7XG4gXHR9XG5cbiBcdGxvYWRJbnB1dFNjb3JlICgpIHtcblxuIFx0fVxuXG4gXHRsb2FkSGlnaFNjb3JlcyAoKSB7XG5cbiBcdH1cblxuIFx0YmluZFJlcGxheSAoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJpbiBiaW5kU3RhcnQsIHRoaXMuZ2FtZTpcIiArIHRoaXMuZ2FtZSlcblx0XHQvLyB3ZSB1c2UgYmluZCgpIHRvIGxpbmsgdGhlIGZ1bmN0aW9uIGJlbG93IHRvIFN0YXJ0U2NyZWVuIChvdGhlcndpc2UsIGl0IHRoaW5rcyBpdCBpcyBpbnNpZGUgd2luZG93KVxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmQtc2NyZWVuLXBsYXktYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBcblx0XHRcdGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdC8vYWxlcnQoXCJpbiBoYW5kbGVyLCBnYW1lOlwiICsgdGhpcy5nYW1lKVxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdHRoaXMuZ2FtZS5zdGFydEdhbWUoKTtcblxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdGJpbmRJbnN0cnVjdGlvbnMgKCkge1xuXHRcdGNvbnNvbGUubG9nKFwiaW4gYmluZFN0YXJ0LCB0aGlzLmdhbWU6XCIgKyB0aGlzLmdhbWUpXG5cdFx0Ly8gd2UgdXNlIGJpbmQoKSB0byBsaW5rIHRoZSBmdW5jdGlvbiBiZWxvdyB0byBTdGFydFNjcmVlbiAob3RoZXJ3aXNlLCBpdCB0aGlua3MgaXQgaXMgaW5zaWRlIHdpbmRvdylcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kLXNjcmVlbi1pbnN0cnVjdGlvbnMtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBcblx0XHRcdGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdC8vYWxlcnQoXCJpbiBoYW5kbGVyLCBnYW1lOlwiICsgdGhpcy5nYW1lKVxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdHRoaXMuZ2FtZS5sb2FkR2FtZSgpO1xuXG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG4gfSIsIi8qKlxuICogR2FtZS5qc1xuICogVGhlIGVudGlyZSBHYW1lIG9iamVjdFxuICogQGluaGVyaXRzIEdhbWVQaWVjZVxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuLy9TY3JlZW4gaW5oZXJpdGFuY2VcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuaW1wb3J0IFN0YXJ0U2NyZWVuIGZyb20gJy4vU3RhcnRTY3JlZW4uanMnO1xuaW1wb3J0IEdhbWVTY3JlZW4gZnJvbSAnLi9HYW1lU2NyZWVuLmpzJztcbmltcG9ydCBFbmRTY3JlZW4gZnJvbSAnLi9FbmRTY3JlZW4uanMnO1xuXG4vL0luZm8gaW5oZXJpdGFuY2VcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi9TdGF0aWNUZXh0LmpzJztcbmltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbmltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbmltcG9ydCBJZGVudGl0eSBmcm9tICcuL0lkZW50aXR5LmpzJztcbmltcG9ydCBJbnN0cnVjdGlvbnMgZnJvbSAnLi9JbnN0cnVjdGlvbnMuanMnO1xuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4vRHluYW1pY1RleHQuanMnO1xuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUuanMnO1xuXG4vL0NoYXJhY3RlciBpbmhlcml0YW5jZVxuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5pbXBvcnQgVHJ1bXAgZnJvbSAnLi9UcnVtcC5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyLmpzJztcbmltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuaW1wb3J0IExpb24gZnJvbSAnLi9MaW9uLmpzJztcbmltcG9ydCBUaWdlciBmcm9tICcuL1RpZ2VyLmpzJztcbmltcG9ydCBCZWFyIGZyb20gJy4vQmVhci5qcyc7XG5pbXBvcnQgR29yaWxsYSBmcm9tICcuL0dvcmlsbGEuanMnO1xuaW1wb3J0IEhlYWx0aCBmcm9tICcuL0hlYWx0aC5qcyc7XG5cbi8vQXJlYSBpbmhlcml0YW5jZS5cbmltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XG5pbXBvcnQgQ2FnZSBmcm9tICcuL0NhZ2UuanMnO1xuaW1wb3J0IEFuaW1hbEFyZWEgZnJvbSAnLi9BbmltYWxBcmVhLmpzJztcbmltcG9ydCBQbGF5ZXJBcmVhIGZyb20gJy4vUGxheWVyQXJlYS5qcyc7XG5cblxuLy9pbXBvcnQgQ29sbGlkZXIgYW5kIFNvdW5kZXIgb2JqZWN0c1xuaW1wb3J0IENvbGxpZGVyIGZyb20gJy4vQ29sbGlkZXIuanMnO1xuaW1wb3J0IFNvdW5kZXIgZnJvbSAnLi9Tb3VuZGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIEdhbWVQaWVjZSB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXG5cdFx0c3VwZXIoY29uZmlnKTtcblxuXHRcdC8vZ2FtZSBjb3B5cmlnaHRcblx0XHR0aGlzLndhcm5pbmcgPSAnVGhpcyBnYW1lIGJlbG9uZ3MgdG8gdXMsIGFuZCBub2JvZHkgZWxzZS4nO1xuXG5cdFx0Ly9nYW1lIHJldmVydHMgdG8gU3RhcnRTY3JlZW4gaWYgdW5wbGF5ZWRcblx0XHR0aGlzLlRJTUVPVVQgPSA1NTU1O1xuXG5cdFx0Ly8gZGVmaW5lIElkIGxpbmsgdG8gRE9NXG5cdFx0dGhpcy5TVEFSVF9TQ1JFRU5fSUQgPSAnc3RhcnQtc2NyZWVuJztcblx0XHR0aGlzLkdBTUVfU0NSRUVOX0lEID0gJ2dhbWUtc2NyZWVuJztcblx0XHR0aGlzLkVORF9TQ1JFRU5fSUQgPSAnZW5kLXNjcmVlbic7XG5cblx0XHQvLyBtb2RlbCBzdG9yYWdlLCBzY3JlZW5zXG5cdFx0dGhpcy5zY3JlZW5zID0gW107XG5cblx0XHQvLyBtb2RlbCBzdG9yYWdlLCBkeW5hbWljIGNoYXJhY3RlcnNcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzID0gW107XG5cblx0XHQvLyBpbml0aWFsaXplIGdhbWUsIGxvYWQgc3RhcnQgc2NyZWVuXG5cdFx0dGhpcy5pbml0KCk7XG5cblx0fSAvL2VuZCBvZiBjb25zdHJ1Y3RvclxuXG5cdGluaXQgKCkge1xuXG5cdFx0Ly8gR3JhYiB0aGUgSFRNTCBzY3JlZW4gZWxlbWVudHMgYW5kIGVuY2Fwc3VsYXRlIGluIGEgU2NyZWVuIGNsYXNzXG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuU1RBUlRfU0NSRUVOX0lEXSA9IG5ldyBTdGFydFNjcmVlbih7bmFtZTogJ1N0YXJ0IFNjcmVlbicsIGlkOiB0aGlzLlNUQVJUX1NDUkVFTl9JRCwgZ2FtZTogdGhpc30pO1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkdBTUVfU0NSRUVOX0lEXSA9IG5ldyBHYW1lU2NyZWVuKHtuYW1lOiAnR2FtZSBTY3JlZW4nLCBpZDogdGhpcy5HQU1FX1NDUkVFTl9JRCwgZ2FtZTogdGhpc30pO1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkVORF9TQ1JFRU5fSURdID0gbmV3IEVuZFNjcmVlbih7bmFtZTogJ0VuZCBTY3JlZW4nLCBpZDogdGhpcy5FTkRfU0NSRUVOX0lELCBnYW1lOiB0aGlzfSk7XG5cblx0XHQvLyBsb2FkIHRoZSBjYW52YXNcblx0XHR0aGlzLmxvYWRDYW52YXMoKTtcblxuXHRcdC8vIG1ha2UgdGhlIHN0YXJ0IHNjcmVlbiB2aXNpYmxlXG5cdFx0dGhpcy5sb2FkR2FtZSgpO1xuXHR9XG5cblx0Ly8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBIVE1MNSBjYW52YXMgY29udGV4dFxuXHRsb2FkQ2FudmFzICgpIHtcblx0XHR0aGlzLmNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lLXNjcmVlbi1hcmVuYSBjYW52YXMnKTtcblx0XHR0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cdH1cblxuXHQvKipcblx0ICogTG9hZCBDaGFyYWN0ZXJzXG5cdCAqIGR5bmFtaWMgQ2hhcmFjdGVycyAoZS5nLiB0aG9zZSB0aGF0IGFuaW1hdGUpIGFyZSBsb2FkZWQgYnkgR2FtZS5cblx0ICogT3RoZXIgc3RhdGljIHZpc3VhbCBvYmplY3RzIGFyZSBsb2FkZWQgYnkgU2NyZWVuIGNsYXNzZXMuXG5cdCAqL1xuXHRsb2FkUGxheWVycyAoKSB7XG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxuXHRcdFx0bmV3IFBsYXllcihcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICdQbGF5ZXInLCBwb3NpdGlvbjoge3RvcDogNTEwLCBsZWZ0OiAyMDB9LFxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvcGxheWVycy9wbGF5ZXIucG5nJyxcblx0XHRcdFx0XHRnYW1lOiB0aGlzXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXHR9XG5cblx0bG9hZEFuaW1hbHMgKCkge1xuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcblx0XHRcdG5ldyBMaW9uKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ0xpb24nLFxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAxNSwgbGVmdDogOTR9LFxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvYW5pbWFscy9saW9uLnBuZycsXG5cdFx0XHRcdFx0Z2FtZTogdGhpc1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0KTtcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLnB1c2goXG5cdFx0XHRuZXcgVGlnZXIoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnVGlnZXInLFxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAxNSwgbGVmdDogMzMzfSxcblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvdGlnZXIucG5nJyxcblx0XHRcdFx0XHRnYW1lOiB0aGlzXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcblx0XHRcdG5ldyBCZWFyKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ0JlYXInLCBwb3NpdGlvbjoge3RvcDogMTUsIGxlZnQ6IDU3MH0sXG5cdFx0XHRcdFx0cGF0aDogJ2ltZy9hbmltYWxzL2JlYXIucG5nJyxcblx0XHRcdFx0XHRnYW1lOiB0aGlzXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcblx0XHRcdG5ldyBHb3JpbGxhKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ0dvcmlsbGEnLCBwb3NpdGlvbjoge3RvcDogMTUsIGxlZnQ6IDgxMn0sXG5cdFx0XHRcdFx0cGF0aDogJ2ltZy9hbmltYWxzL2dvcmlsbGEucG5nJyxcblx0XHRcdFx0XHRnYW1lOiB0aGlzXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXG5cdH1cblxuXHRsb2FkVHJ1bXBzICgpIHtcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLnB1c2goXG5cdFx0XHRuZXcgVHJ1bXAoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnVHJ1bXAnLCBwb3NpdGlvbjoge3RvcDogNDUwLCBsZWZ0OiAyMDB9LFxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvdHJ1bXBzL3RydW1wLnBuZycsXG5cdFx0XHRcdFx0Z2FtZTogdGhpc1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0KTtcblxuXHR9XG5cblx0bG9hZEdhbWUgKCkge1xuXG5cdFx0Ly9sb2FkIEluZm8gYXNzZXRzXG5cblx0XHRjb25zb2xlLmxvZygnbG9hZGluZyBzcGxhc2ggc2NyZWVuJyk7XG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuRU5EX1NDUkVFTl9JRF0uaGlkZVNjcmVlbigpXG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuU1RBUlRfU0NSRUVOX0lEXS5zaG93U2NyZWVuKCk7XG5cdH1cblxuXHRzdGFydEdhbWUgKCkge1xuXG5cblxuXHRcdC8vbG9hZCBDaGFyYWN0ZXJzXG5cdFx0dGhpcy5sb2FkQW5pbWFscygpO1xuXHRcdHRoaXMubG9hZFBsYXllcnMoKTtcblx0XHR0aGlzLmxvYWRUcnVtcHMoKTtcblxuXHRcdC8vYWRkIGNvbGxpc2lvbiBtYXRyaXhcblx0XHR0aGlzLmNvbGxpZGVyID0gbmV3IENvbGxpZGVyKHRoaXMuZGlzcGxheUNoYXJhY3RlcnMpO1xuXHRcdC8vbG9hZCBhdWRpbyBzYW1wbGVzXG5cdFx0dGhpcy5zb3VuZFBvb2wgPSBuZXcgU291bmRlcigpO1xuXG5cdFx0Ly9sb2FkIGF1ZGlvIHNhbXBsZXNcbiAgICB0aGlzLnNvdW5kUG9vbCA9IG5ldyBTb3VuZGVyKCk7XG4gICAgdGhpcy5zb3VuZFBvb2wuYWRkU291bmQoJ2tpY2snLCAwLjcpO1xuICAgIHRoaXMuc291bmRQb29sLmFkZFNvdW5kKCdsaW9uJywgMC43KTtcbiAgICB0aGlzLnNvdW5kUG9vbC5hZGRTb3VuZCgndGlnZXInLCAwLjcpO1xuICAgIHRoaXMuc291bmRQb29sLmFkZFNvdW5kKCdiZWFyJywgMC43KTtcbiAgICB0aGlzLnNvdW5kUG9vbC5hZGRTb3VuZCgnZ29yaWxsYScsIDAuNyk7XG5cblx0XHQvL21ha2UgR2FtZVNjcmVlbiB2aXNpYmxlXG5cblx0XHQvLyBpbml0aWFsaXplIGVsYXBzZWQgdGltZVxuXHRcdHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcblxuXHRcdC8vIHNob3cgR2FtZVNjcmVlbiwgaGlkZSBvdGhlcnNcblx0XHRjb25zb2xlLmxvZygnc3RhcnRpbmcgZ2FtZScpO1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLlNUQVJUX1NDUkVFTl9JRF0uaGlkZVNjcmVlbigpO1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkVORF9TQ1JFRU5fSURdLmhpZGVTY3JlZW4oKTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5HQU1FX1NDUkVFTl9JRF0uc2hvd1NjcmVlbigpO1xuXHRcdHRoaXMuZ2FtZUxvb3AoKTtcblx0fVxuXG5cdGVuZEdhbWUgKCkge1xuXG5cdFx0Y29uc29sZS5sb2coJ2VuZGluZyBnYW1lJyk7XG5cblx0XHQvLyByZXNldCB0aW1lclxuXHRcdHRoaXMuc3RhcnRUaW1lID0gMDtcblxuXHRcdC8vIHR1cm4gb2ZmIGFuaW1hdGlvblxuXHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2xvYmFsSWQpO1xuXHRcdHRoaXMuZ2xvYmFsSWQgPSBudWxsO1xuXG5cdFx0Ly8gZ28gdG8gZW5kIHNjcmVlblxuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkdBTUVfU0NSRUVOX0lEXS5oaWRlU2NyZWVuKCk7XG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuRU5EX1NDUkVFTl9JRF0uc2hvd1NjcmVlbigpO1xuXHR9XG5cblx0ZWxhcHNlZCAoKSB7XG5cblx0XHQvLyByZWNvcmQgdGltZSB3ZSBoYXZlIGJlZW4gaW4gZ2FtZUxvb3Bcblx0XHR0aGlzLmVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG5cdFx0Ly8gdGltZSBkaWZmZXJlbmNlIGluIG1zXG5cblx0XHR2YXIgdGltZURpZmYgPSAodGhpcy5lbmRUaW1lIC0gdGhpcy5zdGFydFRpbWUpIC8gMTAwMDtcblxuXHRcdC8vIGdldCBzZWNvbmRzIChPcmlnaW5hbCBoYWQgJ3JvdW5kJyB3aGljaCBpbmNvcnJlY3RseSBjb3VudHMgMDoyOCwgMDoyOSwgMTozMCAuLi4gMTo1OSwgMTowKVxuXHRcdHJldHVybiBNYXRoLnJvdW5kKHRpbWVEaWZmICUgNjApO1xuXHR9XG5cblx0Y2hlY2tJZkNvbXBsZXRlICgpIHtcblxuXHRcdC8vIGdhbWUgbG9naWMgdG8gc2VlIGlmIHRoZSBnYW1lIHNob3VsZCByZXNldFxuXHRcdC8vLy8vLy8vLy8vLy9jb25zb2xlLmxvZygnRUxBUFNFRDonICsgdGhpcy5lbGFwc2VkKCkpO1xuXG5cdFx0aWYgKHRoaXMuZWxhcHNlZCgpID4gdGhpcy5USU1FT1VUKSB7XG5cdFx0XHQvLyBpZiBpZGxlIHRvbyBsb25nLCByZXNldCBnYW1lIHRvIHN0YXJ0XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR1cGRhdGUgKCkge1xuXG5cdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuZGlzcGxheUNoYXJhY3RlcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblxuXHRcdFx0dmFyIGNoYXJhY3RlciA9IHRoaXMuZGlzcGxheUNoYXJhY3RlcnNbaV07XG5cblx0XHRcdHN3aXRjaCAoY2hhcmFjdGVyLmdldENsYXNzKCkpIHtcblx0XHRcdFx0Y2FzZSAnUGxheWVyJzpcblx0XHRcdFx0Y2FzZSAnVHJ1bXAnOlxuXHRcdFx0XHRjYXNlICdMaW9uJzpcblx0XHRcdFx0Y2FzZSAnVGlnZXInOlxuXHRcdFx0XHRjYXNlICdCZWFyJzpcblx0XHRcdFx0Y2FzZSAnR29yaWxsYSc6XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGNoYXJhY3Rlci51cGRhdGUoKTtcblx0XHR9XG5cdH1cblxuXHRkcmF3ICgpIHtcblxuXHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzW2ldLmRyYXcodGhpcy5jb250ZXh0KTtcblx0XHR9XG5cdH1cblxuXHRnYW1lTG9vcCAoKSB7XG5cblx0XHRpZiAodGhpcy5jaGVja0lmQ29tcGxldGUoKSkge1xuXHRcdFx0dGhpcy5lbmRHYW1lKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0XHR0aGlzLmRyYXcoKTtcblxuXHRcdC8vY29uc29sZS5sb2coJ2xvb3BpbmcuLi4nKVxuXHRcdHRoaXMuZ2xvYmFsSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lTG9vcC5iaW5kKHRoaXMpKTtcblx0fVxuXG59XG4iLCIvKiogXG4gKiBHYW1lUGllY2UuanNcbiAqIEJhc2ljIEdhbWUgb2JqZWN0XG4gKlxuICogVG8gbWFrZSB0aGlzIHdvcmssIHlvdSBtdXN0IGJlIHJ1bm5pbmcgdGhlIEJhYmVsIHRyYW5zcGlsZXIsIFxuICogYW5kIHdhdGNoaW5nIGZvciBjaGFuZ2VzIGluIHRoaXMgZmlsZSB3aXRoIGJyb3dzZXJpZnkuIFR3byBcbiAqIFRlcm1pbmFsIHdpbmRvd3MgbmVlZCB0byBiZSBvcGVuOlxuICogMS4gb25lIHdpbmRvdyB3aGVyZSB5b3UgdHlwZWQgdGhlIGNvbW1hbmQgXCJncnVudFwiXG4gKiAyLiBvbmUgd2luZG93IHdoZXJlIHlvdSB0eXBlZCB0aGUgY29tbWFuZCBcIm5wbSBzdGFydFwiXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQaWVjZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgICAgIC8vVE9ETzogdXNlIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgICAgICB0aGlzLnV1aWQgPSB0aGlzLnNldElkKCk7XG4gICAgICAgIHRoaXMucmVhZHkgPSB0cnVlOyAvLyBjaGFuZ2UgdG8gZmFsc2UgZm9yIGRlZmVycmVkIGxvYWRzXG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIFNldCBhIHBvc2l0aW9uIGZvciB0aGUgb2JqZWN0LCBhbHNvIHRoZSBwb3NpdGlvbiBvZiB0aGUgXG4gICAgICogRE9NIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvYmplY3RcbiAgICAgKi9cbiAgICBzZXRET01Qb3NpdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICBpZiAodGhpcy5kb20pIHtcbiAgICAgICAgICAgIHRoaXMuZG9tLnN0eWxlLnRvcCA9IHBvc2l0aW9uLnRvcCArICdweCc7XG4gICAgICAgICAgICB0aGlzLmRvbS5zdHlsZS5sZWZ0ID0gcG9zaXRpb24ubGVmdCArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogU2V0IHRoZSBvYmplY3Qgc2l6ZSwgYWxzbyBpdHMgRE9NIHNpemVcbiAgICAgKi9cbiAgICBzZXRET01TaXplIChzaXplKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIGlmICh0aGlzLmRvbSkge1xuICAgICAgICAgICAgdGhpcy5kb20uc3R5bGUud2lkdGggPSBzaXplLndpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuZG9tLnN0eWxlLmhlaWdodCA9IHNpemUuaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBHZW5lcmF0ZSBhIHVuaXF1ZSBJRCBmb3IgZXZlcnkgZ2FtZSBvYmplY3QuXG4gICAgICogQGxpbmsgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDUwMzQvY3JlYXRlLWd1aWQtdXVpZC1pbi1qYXZhc2NyaXB0XG4gICAgICovXG4gICAgc2V0SWQgKCkge1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlICYmIHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7IC8vdXNlIGhpZ2gtcHJlY2lzaW9uIHRpbWVyIGlmIGF2YWlsYWJsZVxuICAgICAgICB9XG4gICAgICAgIHZhciB1dWlkID0gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgdmFyIHIgPSAoZCArIE1hdGgucmFuZG9tKCkqMTYpJTE2IHwgMDtcbiAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQvMTYpO1xuICAgICAgICAgICAgcmV0dXJuIChjPT0neCcgPyByIDogKHImMHgzfDB4OCkpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1dWlkO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBSZXR1cm4gdGhlIGdpdmVuIG5hbWUgb2YgdGhpcyBvYmplY3RcbiAgICAgKi9cbiAgICBnZXROYW1lICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogcmV0dXJuIHRoZSBjbGFzcyBvZiB0aGUgb2JqZWN0XG4gICAgICovXG4gICAgZ2V0Q2xhc3MgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBSZXR1cm4gdGhlIHVuaXF1ZSBpZCBvZiB0aGlzIG9iamVjdC5cbiAgICAgKi9cbiAgICBnZXRJZCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnV1aWQ7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIEdldCB0aGUgZW5jbG9zaW5nIGJveCBvdXRzaWRlIHRoZSBvYmplY3QgZm9yIGV4dGVybmFsIGNvbGxpc2lvbnNcbiAgICAgKi9cbiAgICBnZXRDb2xsaXNpb25SZWN0ICgpIHtcblxuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBHZXQgdGhlIGludGVybmFsIGJveCB3aGVuIHRoaXMgb2JqZWN0IGFjdHMgYXMgYSBjb250YWluZXIgZm9yIGFub3RoZXJcbiAgICAgKi9cbiAgICBnZXRCb3VuZHNSZWN0ICgpIHtcblxuICAgIH1cblx0XG5cdC8qKiBcblx0ICogR2VuZXJpYyAncmVhZHknIGZ1bmN0aW9uIChlLmcuIGZvciBkZWxheWVkIGFzc2V0IGxvYWRzKVxuXHQgKi9cblx0c2V0UmVhZHkgKHZhbCkge1xuXHRcdHRoaXMucmVhZHkgPSB2YWw7XG5cdH1cblxuICAgIC8qKiBcbiAgICAgKiBHZW5lcmljIHVwZGF0ZSAob3ZlcnJpZGUpXG4gICAgICovXG4gICAgdXBkYXRlICgpIHtcblxuICAgIH1cblxuICAgICAvKiogXG4gICAgICAqIGdlbmVyaWMgZHJhdyAob3ZlcnJpZGUpXG4gICAgICAqL1xuICAgIGRyYXcgKCkge1xuXG4gICAgfVxufVxuXG5cbiIsIi8qKiBcbiAqIEdhbWVTY3JlZW4uanNcbiAqIE1haW4gZ2FtZSBzY3JlZW4gb2JqZWN0XG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBTY3JlZW5cbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuXG4gaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcbiBpbXBvcnQgQW5pbWFsQXJlYSBmcm9tICcuL0FuaW1hbEFyZWEuanMnO1xuIGltcG9ydCBQbGF5ZXJBcmVhIGZyb20gJy4vUGxheWVyQXJlYS5qcyc7XG4gaW1wb3J0IENhZ2UgZnJvbSAnLi9DYWdlLmpzJztcblxuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIoY29uZmlnKTtcblxuIFx0XHR0aGlzLmNhZ2VzID0gW107XG4gXHRcdHRoaXMuYW5pbWFsQXJlYXMgPSBbXTtcbiBcdFx0dGhpcy5wbGF5ZXJBcmVhcyA9IFtdO1xuXG4gXHRcdC8vR2FtZVNjcmVlbiBzaG91bGQgaGlkZSBpdHMgbG9jYWwgaGVhZGVyIGFuZCBmb290ZXJcbiBcdFx0dGhpcy5oaWRlSGVhZGVyKCk7XG4gXHRcdHRoaXMuaGlkZUZvb3RlcigpO1xuXG4gXHRcdC8vIGxvYWQgdGhlIGJhY2tncm91bmQgaW1hZ2VcbiBcdFx0dGhpcy5sb2FkQmFja2dyb3VuZCgnaW1nL3NjcmVlbnMvZ2FtZS1zY3JlZW4ucG5nJyk7XG5cbiBcdFx0Ly8gZ2V0IHRoZSBzZWN0aW9uIHRoYXQgaGFzIHRoZSBjYW52YXMgZm9yIG92ZXJsYXlcbiBcdFx0dmFyIGFyZW5hID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc2NyZWVuLWFyZW5hJyk7XG5cbiBcdFx0Ly8gbG9hZCBzdWItb2JqZWN0cyBpbnRvIHRoZSBBcmVuYVxuIFx0XHR0aGlzLmNhZ2VzICAgPSB0aGlzLmxvYWRDYWdlcyhhcmVuYSwgJ2ltZy9hcmVhcy9jYWdlLnBuZycpO1xuIFx0XHR0aGlzLmFuaW1hbEFyZWEgPSB0aGlzLmxvYWRBbmltYWxBcmVhKCk7XG4gXHRcdHRoaXMucGxheWVyQXJlYSA9IHRoaXMubG9hZFBsYXllckFyZWEoKTtcblxuIFx0fVxuXG4gXHRsb2FkQ2FnZXMgKGNvbnRhaW5lciwgaW1nUGF0aCkge1xuIFx0XHQvLyBsb2FkIDQgQ2FnZXNcbiBcdFx0dGhpcy5jYWdlcy5wdXNoKFxuIFx0XHRcdG5ldyBDYWdlKFxuIFx0XHRcdFx0e1xuIFx0XHRcdFx0XHRuYW1lOiAnbGlvbi1jYWdlJywgXG4gXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAwLCBsZWZ0OiA3MH0sIFxuIFx0XHRcdFx0XHRzaXplOiB7d2lkdGg6IDEwMCwgaGVpZ2h0OjEwMH0sIFxuIFx0XHRcdFx0XHRjb250YWluZXI6IGNvbnRhaW5lciwgXG4gXHRcdFx0XHRcdHBhdGg6IGltZ1BhdGhcbiBcdFx0XHRcdH1cbiBcdFx0XHQpXG4gXHRcdCk7XG5cdFx0dGhpcy5jYWdlcy5wdXNoKFxuXHRcdFx0bmV3IENhZ2UoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAndGlnZXItY2FnZScsIFxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAwLCBsZWZ0OiAzMTB9LCBcblx0XHRcdFx0XHRzaXplOiB7d2lkdGg6IDEwMCwgaGVpZ2h0OjEwMH0sIFxuXHRcdFx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLCBcblx0XHRcdFx0XHRwYXRoOiBpbWdQYXRoXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXHRcdHRoaXMuY2FnZXMucHVzaChcblx0XHRcdG5ldyBDYWdlKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ2JlYXItY2FnZScsIFxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAwLCBsZWZ0OiA1NTB9LCBcblx0XHRcdFx0XHRzaXplOiB7d2lkdGg6IDEwMCwgaGVpZ2h0OjEwMH0sXG5cdFx0XHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsIFxuXHRcdFx0XHRcdHBhdGg6IGltZ1BhdGhcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG5cdFx0dGhpcy5jYWdlcy5wdXNoKFxuXHRcdFx0bmV3IENhZ2UoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnZ29yaWxsYS1jYWdlJywgXG5cdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDAsIGxlZnQ6IDc5MH0sIFxuXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogMTAwLCBoZWlnaHQ6MTAwfSxcblx0XHRcdFx0XHRjb250YWluZXI6IGNvbnRhaW5lciwgXG5cdFx0XHRcdFx0cGF0aDogaW1nUGF0aFxuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0KTtcbiBcdH1cblxuIFx0bG9hZEFuaW1hbEFyZWEgKCkge1xuIFx0XHQvLyBsb2FkIEFuaW1hbCBtb3ZlbWVudCBhcmVhXG4gXHRcdHRoaXMuYW5pbWFsQXJlYXMucHVzaChcbiBcdFx0XHRuZXcgQW5pbWFsQXJlYShcbiBcdFx0XHRcdHtcbiBcdFx0XHRcdFx0bmFtZTogJ1pvbycsIFxuIFx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMTA0LCBsZWZ0OiA2fSwgXG4gXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogOTcwLCBoZWlnaHQ6IDQxMH0sXG4gXHRcdFx0XHRcdGNvbnRhaW5lcjogdGhpcy5kb20sIFxuIFx0XHRcdFx0XHRwYXRoOiBudWxsXG4gXHRcdFx0XHR9XG4gXHRcdFx0KVxuIFx0XHQpO1xuIFx0fVxuXG4gXHRsb2FkUGxheWVyQXJlYSAoKSB7XG4gXHRcdC8vIGxvYWQgdGhlIFBsYXllclxuIFx0XHR0aGlzLnBsYXllckFyZWFzLnB1c2goXG4gXHRcdFx0bmV3IFBsYXllckFyZWEoXG4gXHRcdFx0XHR7XG4gXHRcdFx0XHRcdG5hbWU6ICdQbGF5ZXIgQXJlYScsIFxuIFx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogNTE0LCBsZWZ0OiA2fSwgXG4gXHRcdFx0XHRcdHNpemU6IHt3aWR0aDogOTcwLCBoZWlnaHQ6IDEwMH0sXG4gXHRcdFx0XHRcdGNvbnRhaW5lcjogdGhpcy5kb20sIFxuIFx0XHRcdFx0XHRwYXRoOiBudWxsXG4gXHRcdFx0XHR9XG4gXHRcdFx0KVxuIFx0XHQpO1xuIFx0fVxuXG4gfVxuXG4iLCIvKiogXG4gKiBHb3JpbGxhLmpzXG4gKiBBIEdvcmlsbGEsIHdobyB0cmllcyB0byBnZXQgdGhlIFBsYXllci5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG4gaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBHb3JpbGxhIGV4dGVuZHMgQW5pbWFsIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcbiBcdH1cbiB9IiwiLyoqIFxuICogSGVhbHRoLmpzXG4gKiBUaGUgY3JpdHRlcnMgdGhhdCBUcnVtcCB0cmllcyB0byBzdG9wIGZyb20gZ2V0dGluZyB0aGUgUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWx0aCBleHRlbmRzIENoYXJhY3RlciB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG4gXHR9XG5cbiB9IiwiLyoqIFxuICogSWRlbnRpdHkuanNcbiAqIEdhbWUgTG9nb3MsIExvZ29UeXBlcywgQnJhbmQgTmFtZVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZGVudGl0eSBleHRlbmRzIFN0YXRpY0ltYWdlIHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblxuXHRcdHRoaXMuc2V0U291cmNlKGNvbmZpZy5zb3VyY2UpO1xuXHRcdHRoaXMuc2V0QXV0aG9yKGNvbmZpZy5hdXRob3IpO1xuXHRcdHRoaXMubG9hZEltYWdlVG9ET00oY29uZmlnLmRvbUlkLCBjb25maWcucGF0aCk7XG5cblx0XHQvL0hpZGUgYW55IDxoMj4gdGV4dCBlcXVpdmFsZW50IG9mIGlkZW50aXR5IGluIHRoaXMgQ1NTIGJveFxuXHRcdHZhciB0ZXh0SWRlbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGNvbmZpZy5kb21JZCArICcgaDInKTtcblx0XHR0ZXh0SWRlbnRpdHkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fVxuXG59XG4iLCIvKiogXG4gKiBTdGF0aWNJbWFnZS5qc1xuICogSW1hZ2Utc3R5bGUgSW5mb3JtYXRpb24gdGhhdCBjYW5ub3QgYmUgY2hhbmdlZCBvbmNlIHRoZSBnYW1lIGlzIGxvYWRlZFxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBJbmZvIHtcblxuXHQvLyBzYXZlIHNjb3BlXG5cdC8vIFRPRE86IHJlZmFjdG9yIHdpdGggYXJyb3cgZnVuY3Rpb25cblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblx0XHR0aGlzLnJlYWR5ID0gZmFsc2U7IC8vb3Zlci1yaWRlIEdhbWVQaWVjZSBhbmQgaW5mbyB3aXRoIGRlZmVycmFsc1xuXHRcdHRoaXMuaW1hZ2UgPSBudWxsO1xuXHRcdHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoO1xuXHRcdHRoaXMuYXV0aG9yID0gY29uZmlnLmF1dGhvcjtcblx0XHR0aGlzLnNvdXJjZSA9IGNvbmZpZy5zb3VyY2U7XG5cdH1cblxuXHQvLyBsb2FkIGFuIGltYWdlXG5cdGxvYWQgKHBhdGgsIGNhbGxiYWNrKSB7XG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdHRoYXQuc2V0UmVhZHkoZmFsc2UpO1xuXHRcdGNvbnNvbGUubG9nKCdlbnRlcmluZyBsb2FkIGluSW1hZ2UnKTtcblx0XHR2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdFx0aW1nLnNyYyA9IHBhdGg7XG5cdFx0aW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnNvbGUubG9nKHRoYXQubmFtZSArICcgaW1hZ2UgbG9hZGVkIGZyb206JyArIHBhdGggKyAnIHc6JyArIGltZy53aWR0aCArICcgaDonICsgaW1nLmhlaWdodClcblx0XHRcdHRoYXQuc2V0UmVhZHkodHJ1ZSk7XG5cdFx0XHR0aGF0LmRhdGEgPSBpbWc7XG5cdFx0XHRcblx0XHRcdGlmKGNhbGxiYWNrKSB7XG5cdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGltZy5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdlcnJvciBsb2FkaW5nIGltZyBmcm9tOicgKyBwYXRoKTtcblx0XHR9XG5cdH1cblxuXHQvLyBsb2FkIGltYWdlLCBhcHBlbmQgdG8gZXhpc3RpbmcgRE9NIGVsZW1lbnRcblx0Ly8gTk9URTogdGhpcyBpcyBvdmVyLXdyaXR0ZW4gaW4gQ2hhcmFjdGVyLmpzLCB3aGljaCBsb2FkcyBpbWFnZXMgaW50byBDYW52YXNcblx0bG9hZEltYWdlVG9ET00gKGRvbUlkLCBwYXRoLCBjYWxsYmFjaykge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHR0aGlzLmxvYWQocGF0aCwgZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2ZvcmVncm91bmQgaW1hZ2UgJyArIHBhdGggKyAnIGxvYWRlZCcpXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb21JZCkuYXBwZW5kQ2hpbGQodGhhdC5kYXRhKTtcblx0XHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdH1cblxuXHQvLyBsb2FkIGltYWdlIGFzIGEgQ1NTIGJhY2tncm91bmQgaW1hZ2UgaW50byBleGlzdGluZyBET00gZWxlbWVudC4gXG5cdC8vIE5PVEU6IG5vIGxvY2FsIHJlZmVyZW5jZSB0byBpbWFnZSBpbiB0aGlzIGNhc2Vcblx0bG9hZEJhY2tncm91bmRJbWFnZSAoY29udGFpbmVyLCBwYXRoLCBjYWxsYmFjaykge1xuXHRcdGNvbnNvbGUubG9nKCdsb2FkaW5nIGJhY2tncm91bmQgaW1hZ2U6JyArIHBhdGgpXG5cdFx0Y29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZT0ndXJsKCcgKyBwYXRoICsgJyknO1xuXHRcdHRoaXMuc2V0UmVhZHkodHJ1ZSk7XG5cdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHRjYWxsYmFjaygpO1xuXHRcdH1cblx0fVxuXG5cdC8vIERyYXcgdGhlIGltYWdlIHRvIGEgc3VwcGxpZWQgY2FudmFzIGNvbnRleHRcblx0ZHJhd1RvQ2FudmFzIChjb250ZXh0LCBwb3NpdGlvbiwgc2l6ZSkge1xuXHRcdGNvbnRleHQuZHJhd0ltYWdlKGltZywgcG9zaXRpb24udG9wLCBwb3NpdGlvbi5sZWZ0LCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG5cdH1cblxuXHQvLyBEcmF3IHRvIHRoZSBET00uIEFzc3VtZSB0aGUgSW1hZ2Ugd2FzIGFscmVhZHkgYXR0YWNoZWQgdG8gdGhlIERPTVxuXHRkcmF3VG9ET00gKHBvc2l0aW9uLCBzaXplKSB7XG5cdFx0dGhpcy5pbWFnZS5zdHlsZS50b3AgPSBwb3NpdGlvbi50b3A7XG5cdFx0dGhpcy5pbWFnZS5zdHlsZS5sZWZ0ID0gcG9zaXRpb24ubGVmdDtcblx0XHR0aGlzLmltYWdlLnN0eWxlLndpZHRoID0gc2l6ZS53aWR0aDtcblx0XHR0aGlzLmltYWdlLnN0eWxlLmhlaWdodCA9IHNpemUuaGVpZ2h0O1xuXHR9XG5cbn1cbiIsIi8qKiBcbiAqIEluZm8uanNcbiAqIEdlbmVyaWMgaW5mb3JtYWl0b24gb2JqZWN0XG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlXG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvIGV4dGVuZHMgR2FtZVBpZWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXHR9XG5cblx0c2V0QXV0aG9yIChhdXRob3IpIHtcblx0XHR0aGlzLmF1dGhvciA9IGF1dGhvcjtcblx0fVxuXG5cdHNldFNvdXJjZSAoc291cmNlKSB7XG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdH1cblxufSIsIi8qKiBcbiAqIEluc3RydWN0aW9ucy5qc1xuICogVGV4dCB3aGljaCB0ZWxscyB0aGUgUGxheWVyIGhvdyB0byBwbGF5IHRoZSBnYW1lLlxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuIGltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3RydWN0aW9ucyBleHRlbmRzIFN0YXRpY1RleHQge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXHR9XG59XG4iLCIvKiogXG4gKiBMaW9uLmpzXG4gKiBBIExpb24sIHdobyB0cmllcyB0byBnZXQgdGhlIFBsYXllci5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG4gaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBMaW9uIGV4dGVuZHMgQW5pbWFsIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcbiBcdH1cbiB9IiwiLyoqIFxuICogQGNsYXNzIE1vdmVyXG4gKiBAZGVzY3JpcHRpb24gdXBkYXRlIHBvc2l0aW9uIG9mIG9iamVjdCBiZWluZyBhbmltYXRlZCBieSBHYW1lLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZlciB7XG5cblx0Y29uc3RydWN0b3IgKGdhbWVPYmopIHtcblx0XHR0aGlzLm9iaiA9IGdhbWVPYmo7XG5cbiAgICAgICAgLy8gQ2hhcmFjdGVyIGhhcyByZWZlcmVuY2UgdG8gR2FtZVxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lT2JqLmdhbWU7XG5cbiAgICAgICAgLy8gTW92ZW1lbnQgdHlwZXNcbiAgICAgICAgdGhpcy50eXBlID0gMDtcbiAgICAgICAgdGhpcy5TTEVXID0gMTtcbiAgICAgICAgdGhpcy5SQU5ET00gPSAyO1xuICAgICAgICB0aGlzLlBJTkdQT0lORyA9IDM7XG5cbiAgICAgICAgaWYgKCF0aGlzLmdhbWUuc291bmRQb29sKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ25vIHNvdW5kcyBpbml0aWFsaXplZC4gR2FtZSB3aWxsIHBsYXkgc2lsZW50bHknKTtcbiAgICAgICAgfVxuXG5cdH1cblxuICAgIC8qKiBcbiAgICAgKiBAbWV0aG9kIHRydW5jYXRvclxuICAgICAqIEBkZXNjcmlwdGlvbiB0cnVuY2F0ZSAobm90IHJvdW5kKSBudW1iZXIgdG8gZml4ZWQgbnVtYmVyIG9mIGRlY2ltYWxzXG4gICAgICogQHBhcmFtIE51bWJlciBudW0gZmxvYXRpbmctcG9pbnQgbnVtYmVyXG4gICAgICogQHBhcmFtIEludGVnZXIgZGVjaW1hbHMgdGhlIG51bWJlciBvZiBkZWNpbWFscyBwb2ludHMgdG8gcm91bmQgdG9cbiAgICAgKiBAcmV0dXJucyBOdW1iZXIgdGhlIHRydW5jYXRlZCBudW1iZXJcbiAgICAgKi9cbiAgICB0cnVuY2F0b3IgKG51bSwgZGVjaW1hbHMpIHsgICAgXG4gICAgICAgIHZhciBudW1Qb3dlciA9IE1hdGgucG93KDEwLCBkZWNpbWFscyk7IC8vIFwibnVtUG93ZXJDb252ZXJ0ZXJcIiBtaWdodCBiZSBiZXR0ZXJcbiAgICAgICAgcmV0dXJuIH5+KG51bSAqIG51bVBvd2VyKS9udW1Qb3dlcjtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogQG1ldGhvZCByYW5kb21pemVyXG4gICAgICogQGRlc2NyaXB0aW9uIHJhbmRvbWl6ZSBhIG51bWJlclxuICAgICAqL1xuICAgIHJhbmRvbWl6ZXIgKCkge1xuICAgICAgICB2YXIgZCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAoZCA9IHBhcnNlSW50KGQpIC0gZCk7XG4gICAgICAgIGQgPSB0aGlzLnRydW5jYXRvcihkLCAyKSAvIDEwO1xuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogQG1ldGhvZCBnZXRDZW50ZXJcbiAgICAgKi9cbiAgICBnZXRDZW50ZXIgKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHggKyAod2lkdGgvMiksXG4gICAgICAgICAgICB5OiB5ICsgKGhlaWdodC8yKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIEBtZXRob2QgaW5pdFNsZXdcbiAgICAgKiBAZGVzY3JpcHRpb24gc2xldyBvYmplY3QgaG9yaXpvbnRhbGx5IHdpdGgga2V5cHJlc3Nlcy4gQWRkcyBldmVudCBcbiAgICAgKiBsaXN0ZW5lcnMgZm9yIGtleWRvd24gYW5kIGtleXVwIGV2ZW50cy4gVXNlZCBmb3IgXG4gICAgICogUGxheWVyIGNoYXJhY3RlcnMgbW92aW5nIGhvcml6b250YWxseSBpbiB0aGUgUGxheWVyQXJlYVxuICAgICAqL1xuXHRpbml0U2xldyAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbml0IFNsZXcgbW90aW9uJyk7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMuU0xFVztcblxuXG4gICAgICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgICAgICB0aGlzLnRpY2tlciA9IDA7XG4gICAgICAgIHRoaXMubGFzdERpciA9IDE7XG5cbiAgICAgICAgLy8gYWRkIGJvdHRvbSwgcmlnaHQgdG8gbWFrZSBhIFJlY3QgZm9yIHRoZSBQbGF5ZXJBcmVhXG4gICAgICAgIHRoaXMuYm91bmRzID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10ucGxheWVyQXJlYXNbMF0ucG9zaXRpb247XG4gICAgICAgIHRoaXMuYm91bmRzLndpZHRoID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10ucGxheWVyQXJlYXNbMF0uc2l6ZS53aWR0aDtcbiAgICAgICAgdGhpcy5ib3VuZHMuaGVpZ2h0ID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10ucGxheWVyQXJlYXNbMF0uc2l6ZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYm91bmRzLmJvdHRvbSA9IHRoaXMuYm91bmRzLnRvcCArIHRoaXMuYm91bmRzLmhlaWdodDtcbiAgICAgICAgdGhpcy5ib3VuZHMucmlnaHQgPSB0aGlzLmJvdW5kcy5sZWZ0ICsgdGhpcy5ib3VuZHMud2lkdGg7XG5cbiAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMub2JqLmltYWdlO1xuXG4gICAgICAgIC8vIHRvZ2dsZSB0aGUgcG9zaXRpb24gb2YgdGhlIFBsYXllciB3aGVuIGtpY2tpbmdcbiAgICAgICAgdGhpcy51bktpY2sgPSB0aGlzLm9iai5wb3NpdGlvbi50b3A7XG4gICAgICAgIHRoaXMuaW5LaWNrID0gdGhpcy5vYmoucG9zaXRpb24udG9wIC0gNjtcblxuICAgICAgICAvLyBOT1RFOiBUcnVtcCBpcyBhZGRlZCB0byBQbGF5ZXIgaW4gQ29sbGlkZXJcblxuICAgICAgICAvLyBmbGFnIG91ciBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmluaXRlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gbGlzdGVuIGZvciB1c2VyIGV2ZW50c1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgXG4gICAgICAgICAgICBldmVudCA9PiB0aGlzLnNsZXcoZXZlbnQpLCBmYWxzZSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLFxuICAgICAgICAgICAgZXZlbnQgPT4gdGhpcy51bmtpY2soZXZlbnQpLCBmYWxzZSk7XG5cdH1cblxuICAgIC8qKiBcbiAgICAgKiBAbWV0aG9kIGluaXRSYW5kb21XYWxrXG4gICAgICogQGRlc2NyaXB0aW9uIGluaXQgcmFuZG9tIG1vdGlvbnMgYWxvbmcgYSBwYXRoIGZyb20gdGhlIFxuICAgICAqIHRvcCB0byB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4uIFVzZWQgZm9yIFxuICAgICAqIEFuaW1hbCBjaGFyYWN0ZXJzIG1vdmluZyB0aHJvdWdoIHRoZSBBbmltYWxBcmVhLlxuICAgICAqIEBwYXJhbSBOdW1iZXIgcHJlZlNwZWVkIHRoZSBzcGVlZCBvZiBtb3ZlbWVudFxuICAgICAqIEBwYXJhbSBTdHJpbmcgZGlyZWN0aW9uIHRoZSBkaXJlY3Rpb24gdGhlIEFuaW1hbCB1bHRpbWF0ZWx5IG1vdmVzLCBcbiAgICAgKiAtICd0b3AnOiBvdmVyYWxsIG1vdmVtZW50IHVwIHRoZSBzY3JlZW5cbiAgICAgKiAtICdsZWZ0Jzogb3ZlcmFsbCBtb3ZlbWVudCB0byB0aGUgc2NyZWVuIGxlZnRcbiAgICAgKiAtICdib3R0b20nOiBvdmVyYWxsIG1vdmVtZW50IHRvIHRoZSBzY3JlZW4gYm90dG9tIChERUZBVUxUKVxuICAgICAqIC0gJ3JpZ2h0Jzogb3ZlcmFsbCBtb3ZlbWVudCB0byB0aGUgc2NyZWVuIHJpZ2h0XG4gICAgICogLSAncmV0dXJuJzogcmV0dXJuIGltbWVkaWF0ZWx5IHRvIHRoZSBDYWdlIGFyZWFcbiAgICAgKiAtICdjYWdlZCc6IHN0YXkgaW4gdGhlIENhZ2UgYXJlYVxuICAgICAqL1xuICAgIGluaXRSYW5kb21XYWxrIChwcmVmU3BlZWQsIGRpcmVjdGlvbikge1xuICAgICAgICBjb25zb2xlLmxvZygnaW5pdCBSYW5kb21XYWxrJyk7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMuUkFORE9NO1xuXG4gICAgICAgIHRoaXMuc3BlZWQgPSBwcmVmU3BlZWQgKiB0aGlzLnRpbWVTdGFtcFJhbmRvbSgpO1xuICAgICAgICB0aGlzLmRlbGF5ID0gdGhpcy50aW1lU3RhbXBSYW5kb20oKSAqIDMwMDtcbiAgICAgICAgdGhpcy5vYmouZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLmRlbGF5Q291bnRlciA9IDA7XG4gICAgICAgIHRoaXMuTUFYID0gMzA7XG4gICAgICAgIHRoaXMuTUFYX0RFTEFZID0gMzAwO1xuXG4gICAgICAgIC8vIG9uZS10aW1lIHBsYXkgb2YgQW5pbWFsIHNvdW5kXG4gICAgICAgIHRoaXMuZmlyc3RNb3ZlID0gdHJ1ZTtcblxuICAgICAgICAvLyBhZGQgYm90dG9tLCByaWdodCB0byBtYWtlIGEgUmVjdCBmb3IgdGhlIEFuaW1hbEFyZWFcbiAgICAgICAgdGhpcy5ib3VuZHMgPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5hbmltYWxBcmVhc1swXS5wb3NpdGlvbjtcbiAgICAgICAgdGhpcy5ib3VuZHMud2lkdGggPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5hbmltYWxBcmVhc1swXS5zaXplLndpZHRoO1xuICAgICAgICB0aGlzLmJvdW5kcy5oZWlnaHQgPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5hbmltYWxBcmVhc1swXS5zaXplLmhlaWdodDtcbiAgICAgICAgdGhpcy5ib3VuZHMuYm90dG9tID0gdGhpcy5ib3VuZHMudG9wICsgdGhpcy5ib3VuZHMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJvdW5kcy5yaWdodCA9IHRoaXMuYm91bmRzLmxlZnQgKyB0aGlzLmJvdW5kcy53aWR0aDtcblxuICAgICAgICAvLyByZW1lbWJlciB3aGVyZSB3ZSBzdGFydGVkIChpbiB0aGUgY2FnZSlcbiAgICAgICAgdGhpcy5zdGFydFRvcCA9IHRoaXMub2JqLnBvc2l0aW9uLnRvcDtcbiAgICAgICAgdGhpcy5zdGFydExlZnQgPSB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0O1xuXG4gICAgICAgIC8vIGNhY2hlIHBvc2l0aW9uIGR1cmluZyBuZXcgcmFuZG9tIG1vdmVzXG4gICAgICAgIHRoaXMubmV3VG9wID0gMCwgdGhpcy5uZXdMZWZ0ID0gMDtcblxuICAgICAgICAvLyBnZXQgYm90dG9tIGFuZCByaWdodCBmcm9tIENoYXJhY3RlciBmcm9tIGl0cyBJbWFnZVxuICAgICAgICB0aGlzLmltYWdlID0gdGhpcy5vYmouaW1hZ2U7XG5cbiAgICAgICAgLy8gZmxhZyBvdXIgaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBAbWV0aG9kIGluaXRQaW5nUG9uZ1xuICAgICAqIEBkZXNjcmlwdGlvbiBpbml0IGEgcGluZy1wb25nIHN0eWxlIG1vdGlvbi4gVXNlZCBmb3IgXG4gICAgICogVHJ1bXAgY2hhcmFjdGVycyBtb3ZpbmcgdGhyb3VnaCB0aGUgQW5pbWFsQXJlYS5cbiAgICAgKi9cbiAgICBpbml0UGluZ1BvbmcgKHByZWZTcGVlZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW5pdCBQaW5nUG9uZyBtb3Rpb24nKTtcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5QSU5HUE9ORztcblxuICAgICAgICAvL0FuaW1hbCBhcmVhXG4gICAgICAgIC8vIGFkZCBib3R0b20sIHJpZ2h0IHRvIG1ha2UgYSBSZWN0IGZvciB0aGUgQW5pbWFsQXJlYVxuICAgICAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLmJvdW5kcy53aWR0aCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnNpemUud2lkdGg7XG4gICAgICAgIHRoaXMuYm91bmRzLmhlaWdodCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLmFuaW1hbEFyZWFzWzBdLnNpemUuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJvdW5kcy5ib3R0b20gPSB0aGlzLmJvdW5kcy50b3AgKyB0aGlzLmJvdW5kcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYm91bmRzLnJpZ2h0ID0gdGhpcy5ib3VuZHMubGVmdCArIHRoaXMuYm91bmRzLndpZHRoO1xuXG4gICAgICAgIHRoaXMub2JqLnN0YXJ0VG9wID0gdGhpcy5vYmoucG9zaXRpb24udG9wO1xuXG4gICAgICAgIC8vIGdldCBib3R0b20gYW5kIHJpZ2h0IGZyb20gQ2hhcmFjdGVyIGZyb20gaXRzIEltYWdlXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLm9iai5pbWFnZTtcblxuICAgICAgICB0aGlzLm9iai5zcGVlZCA9IDA7XG4gICAgICAgIHRoaXMub2JqLmR4ID0gMDtcbiAgICAgICAgdGhpcy5vYmouZHkgPSAwO1xuXG4gICAgICAgIC8vIE5PVEU6IEFuaW1hbHMgYW5kIFBsYXllcnMgYXJlIGFkZGVkIHRvIFRydW1wIGluIENvbGxpZGVyXG5cbiAgICAgICAgLy8gZmxhZyBvdXIgaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgIH1cblxuXHQvKiogXG5cdCAqIEBtZXRob2Qgc2xldyBcblx0ICogTW92ZSBvYmplY3Qgc2xpZ2h0bHkgdXAgZm9yIGR1cmF0aW9uIG9mIHNwYWNlIGJhciBwcmVzc2VkIGRvd25cbiAgICAgKiBDYWxsYmFjayBmb3Iga2V5ZG93biBhZGRFdmVudExpc3RlbmVyXG4gICAgICogQHBhcmFtIEV2ZW50IGUgdGhlIGtleWRvd24gZXZlbnRcbiAgICAgKi9cblx0c2xldyAoZSkge1xuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgdGhpcy5raWNrKGUpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy9wcmV2ZW50IHNjcm9sbFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkKys7XG4gICAgICAgICAgICAgICAgdGhpcy50aWNrZXIgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3REaXIgPSAtMTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vcHJldmVudCBzY3JvbGxcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCsrO1xuICAgICAgICAgICAgICAgIHRoaXMudGlja2VyID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0RGlyID0gMTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vcHJldmVudCBzY3JvbGxcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblx0fVxuXG4gICAgLyoqIFxuICAgICAqIEBtZXRob2QgdXBkYXRlU2xld1xuICAgICAqIEBkZXNjcmlwdGlvbiBtb3ZlIGJhY2sgYW5kIGZvcnRoIGhvcml6b250YWxseSwgd2l0aCBhIHNpbXBsZSBlYXNpbmcgbW90aW9uXG4gICAgICogd2hlbiBsZWZ0IGFuZCByaWdodCBhcnJvdyBrZXlzIGFyZSBwcmVzc2VkLiBIYW5kbGUgY29sbGlzaW9ucyB3aXRoIHRoZSBsZWZ0IFxuICAgICAqIGFuZCByaWdodCB3YWxscyBvZiB0aGUgUGxheWVyQXJlYS5cbiAgICAgKiBDYWxsIGluIGFuIHVwZGF0ZSBmdW5jdGlvbiBpbnNpZGUgdGhlIENoYXJhY3RlciwgZS5nLiBcbiAgICAgKiB1cGRhdGUgKCkgeyB1cGRhdGVSYW5kb21XYWxrKCk7IH1cbiAgICAgKiBUaGUgbWFpbiBHYW1lIG9iamVjdCBhdXRvbWF0aWNhbGx5IGZpbmRzIGFuZCAnZmlyZXMnIHVwZGF0ZSgpIGZ1bmN0aW9uIGluIFxuICAgICAqIGFsbCBDaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHVwZGF0ZVNsZXcgKCkge1xuICAgICAgICBpZiAoIXRoaXMuaW5pdGVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdQbGF5ZXIgU2xldyBOT1QgaW5pdGlhbGl6ZWQgKGRpZCB5b3UgbGVhdmUgb3V0IG9mIGNvbnN0cnVjdG9yPyknKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpY2tlcisrO1xuICAgICAgICBpZiAodGhpcy5zcGVlZCA+IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpY2tlciA+IDEwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCAvPSAyO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwZWVkIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCArPSAodGhpcy5sYXN0RGlyICogdGhpcy5zcGVlZCk7XG5cbiAgICAgICAgLy9jaGVjayBib3VuZHNcbiAgICAgICAgaWYgKHRoaXMuYm91bmRzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIHcgPSB0aGlzLmltYWdlLmRhdGEud2lkdGg7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPCB0aGlzLmJvdW5kcy5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdERpciA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgLz0gMS4yO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ID0gdGhpcy5ib3VuZHMubGVmdCArICh0aGlzLnNwZWVkICogMS41KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPiB0aGlzLmJvdW5kcy5yaWdodCAtIHcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0RGlyID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgLz0gMS4yO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ID0gdGhpcy5ib3VuZHMucmlnaHQgLSB3IC0gKHRoaXMuc3BlZWQgKiAxLjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBAbWV0aG9kIGtpY2tcbiAgICAgKiBAZGVzY3JpcHRpb24gaWYgZm9vdCBpcyBuZWFyIFRydW1wLCBraWNrIGhpbSBpbnRvIHRoZSBBbmltYWxcbiAgICAgKi9cbiAgICBraWNrIChlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJzo6OjpUSElTIFRSVU1QOjo6OjonICsgdGhpcy5vYmoudHJ1bXApXG4gICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCA9IHRoaXMuaW5LaWNrO1xuXG4gICAgICAgIGlmICghdGhpcy5vYmoudHJ1bXApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiBtaXNzaW5nIGNvbGxpc2lvbiBtYXRyaXggKGRpZCB5b3UgaW5jbHVkZSBDb2xsaWRlcj8pJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZWUgaWYgd2UncmUgY2xvc2UgZW5vdWdoIHRvIGtpY2sgaW4gdGhlIHkgYXhpc1xuICAgICAgICB2YXIgdHJ1bXBZRGlzdCA9IHRoaXMub2JqLnBvc2l0aW9uLnRvcCAtIHRoaXMub2JqLnRydW1wLmltYWdlLmRhdGEud2lkdGggLSB0aGlzLm9iai50cnVtcC5wb3NpdGlvbi50b3A7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3RydW1wWURpc3Q6JyArIHRydW1wWURpc3QpXG5cbiAgICAgICAgLy8gSWYgUGxheWVyIGlzIGNsb3NlIGluIFksIGFuZCBpbnNpZGUgWCByYW5nZSwga2ljayB0aGUgVHJ1bXAgaW50byBBbmltYWxBcmVhXG4gICAgICAgIGlmICh0cnVtcFlEaXN0IDwgMTApIHtcblxuICAgICAgICAgICAgLy8gc3RhcnQgdGhlIFRydW1wIG1vdmluZywgc3BlZWRcbiAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLnNwZWVkID0gNDA7XG5cbiAgICAgICAgICAgIC8vIGlmIHRvbyBjbG9zZSB0byBsZWZ0IHdhbGwsIHByZS1hc3NpZ24gYSB2YWx1ZVxuICAgICAgICAgICAgaWYgKHRoaXMub2JqLnRydW1wLnBvc2l0aW9uLmxlZnQgPCAodGhpcy5ib3VuZHMubGVmdCArIDIwKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPj5UcnVtcDogbGVmdCBib3VuZCBjb3JyZWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHggPSAtMC4yO1xuICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR5ID0gMC44O1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY29tcHV0ZSBkeCBhbmQgZHkgZm9yIFRydW1wXG4gICAgICAgICAgICB2YXIgZGlzdCA9ICh0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IC0gdGhpcy5vYmoudHJ1bXAucG9zaXRpb24ubGVmdCkgLyA1MDtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaXN0KSA8IDEuMCkge1xuICAgICAgICAgICAgICAgIHZhciBkeCA9IGRpc3Q7XG4gICAgICAgICAgICAgICAgaWYoZHggPiAwLjAwMyAmJiBkeCA8IDAuOCkge1xuICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR4ID0gZHg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR5ID0gMS4wIC0gZHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIHN0YXJ0IHRoZSBraWNraW5nIHNvdW5kXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkeCA8IDAgJiYgZHggPiAtMC44KSB7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHggPSBkeDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHkgPSAxLjAgKyBkeDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGR4KSA8IDAuMDAzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gdGhpcy5yYW5kb21pemVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGQgPSBkIC0gdGhpcy5yYW5kb21pemVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR4ID0gZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHkgPSAxLjAgKyBkeDtcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RhcnQgdGhlIGtpY2tpbmcgc291bmRcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR5ID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBzdGFydCB0aGUga2lja2luZyBzb3VuZFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWUuc291bmRQb29sKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5zb3VuZFBvb2wucGxheVNvdW5kKCdraWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IC8vIGVuZCBvZiBmdW5jdGlvblxuXG4gICAgLyoqIFxuICAgICAqIEBtZXRob2QgdW5raWNrXG4gICAgICogQGRlc2NyaXB0aW9uIHNldCBwb3NpdGlvbiBvZiBQbGF5ZXIgYmFjayB0byBvcmlnaW5hbFxuICAgICAqL1xuICAgIHVua2ljayAoZSkge1xuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24udG9wID0gdGhpcy51bktpY2s7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogQG1ldGhvZCB0aW1lU3RhbXBSYW5kb21cbiAgICAgKiBAZGVzY3JpcHRpb24gcmFuZG9taXplIGluIGEgMTAtZm9sZCByYW5nZSB1c2luZyB3aW5kb3cucGVyZm9ybWFuY2VcbiAgICAgKi9cblx0dGltZVN0YW1wUmFuZG9tICgpIHtcblx0XHR2YXIgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlICYmIHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7IC8vdXNlIGhpZ2gtcHJlY2lzaW9uIHRpbWVyIGlmIGF2YWlsYWJsZVxuICAgICAgICB9XG5cdFx0dmFyIG51bSA9ICd4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICB2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSoxMCklMTAgfCAwO1xuICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZC8xMCk7XG4gICAgICAgICAgICByZXR1cm4gKGM9PSd4JyA/IHIgOiAociYweDN8MHg4KSkudG9TdHJpbmcoMTApO1xuICAgICAgICB9KTtcbiAgICAgIHJldHVybiBudW0gLyAxMDAwMDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiAoaW5jbHVzaXZlKSBhbmQgbWF4IChleGNsdXNpdmUpXG5cdCAqIEBsaW5rIFxuXHQgKi9cblx0Z2V0UmFuZG9tKG1pbiwgbWF4KSB7XG4gICBcdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuXHR9XG5cbiAgICAvKiogXG4gICAgICogQG1ldGhvZCB1cGRhdGVSYW5kb21XYWxrXG4gICAgICogQGRlc2NyaXB0aW9uIGdlbmVyYXRlIGEgcmFuZG9tIHdhbGssIHdpdGggb25lIHByZWZlcnJlZCBkaXJlY3Rpb24sIFxuICAgICAqIGdpdmluZyB0aGUgbWVhbmRlcmluZyBtb3Rpb24gdXNlZCBieSBBbmltYWxzLiBcbiAgICAgKiBDYWxsIGluIGFuIHVwZGF0ZSBmdW5jdGlvbiBpbnNpZGUgdGhlIENoYXJhY3RlciwgZS5nLiBcbiAgICAgKiB1cGRhdGUgKCkgeyB1cGRhdGVSYW5kb21XYWxrKCk7IH1cbiAgICAgKiBUaGUgbWFpbiBHYW1lIG9iamVjdCBhdXRvbWF0aWNhbGx5IGZpbmRzIGFuZCAnZmlyZXMnIHVwZGF0ZSgpIGZ1bmN0aW9uIGluIFxuICAgICAqIGFsbCBDaGFyYWN0ZXJzLlxuICAgICAqL1xuXHR1cGRhdGVSYW5kb21XYWxrICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmluaXRlZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQW5pbWFsIFJhbmRvbVdhbGsgTk9UIGluaXRpYWxpemVkIChkaWQgeW91IGxlYXZlIG91dCBvZiBjb25zdHJ1Y3Rvcj8pJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblx0XHR0aGlzLmNvdW50ZXIrKztcblx0XHR0aGlzLmRlbGF5Q291bnRlcisrO1xuXHRcdGlmICh0aGlzLmRlbGF5Q291bnRlciA8IHRoaXMuZGVsYXkpIHtcblx0XHRcdC8vY29uc29sZS5sb2coJ2RlbGF5Q291bnRlcjonICsgdGhpcy5kZWxheUNvdW50ZXIgKyAnIE1BWDonICsgdGhpcy5NQVhfREVMQVkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuICAgICAgICAvLyBQbGF5IGFuaW1hbCdzIG9wZW5pbmcgc291bmQgT05DRSBhdCBzdGFydCBvZiBtb3ZlbWVudFxuICAgICAgICBpZiAodGhpcy5maXJzdE1vdmUgJiYgdGhpcy5nYW1lLnNvdW5kUG9vbCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnNvdW5kUG9vbC5wbGF5U291bmQodGhpcy5vYmouY29uc3RydWN0b3IubmFtZS50b0xvd2VyQ2FzZSgpLCAwLjcpO1xuICAgICAgICAgICAgdGhpcy5maXJzdE1vdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbXB1dGUgZHggYW5kIGR5IGZyb20gcmFuZG9tIHdhbGsuIHN0b3JlIGluaXRpYWwgcG9zaXRpb25cbiAgICAgICAgdGhpcy5vbGRMZWZ0ID0gdGhpcy5vYmoucG9zaXRpb24ubGVmdDtcbiAgICAgICAgdGhpcy5vbGRUb3AgPSB0aGlzLm9iai5wb3NpdGlvbi50b3A7XG5cbiAgICAgICAgLy8gdGhpcy5vYmouZGlyZWN0aW9uIHdhcyBzZXQgaW4gaW5pdFJhbmRvbVdhbGtcblx0XHRzd2l0Y2ggKHRoaXMub2JqLmRpcmVjdGlvbikge1xuXHRcdFx0Y2FzZSAndG9wJzpcblx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24udG9wIC09ICh0aGlzLnNwZWVkICsgKDAuMSAqIHRoaXMuZ2V0UmFuZG9tKDEsIHRoaXMuc3BlZWQpKSk7XG5cdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgLT0gMTAgKiAodGhpcy5nZXRSYW5kb20oLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQvMikpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2xlZnQnOlxuXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IC09ICh0aGlzLnNwZWVkICsgKDAuNSAqIHRoaXMuZ2V0UmFuZG9tKDAsIHRoaXMuc3BlZWQpKSk7XG5cdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLnRvcCArPSAxMCAqKHRoaXMuZ2V0UmFuZG9tKC10aGlzLnNwZWVkLCB0aGlzLnNwZWVkKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnYm90dG9tJzpcbiBcdFx0XHRcdGlmICh0aGlzLmNvdW50ZXIgPiB0aGlzLk1BWCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLk1BWCA9IHRoaXMuZ2V0UmFuZG9tKDIsIDE1KTtcblx0XHRcdFx0XHR0aGlzLm5ld0xlZnQgPSAodGhpcy5nZXRSYW5kb20oLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpKTtcblx0XHRcdFx0XHR0aGlzLmNvdW50ZXIgPSAwO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlciA+IHRoaXMuTUFYIC8gMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5nZXRSYW5kb20oLTAuMiwgMS4yKSAvL05PVEU6IGZpbmUtdHVuZSB0aGlzIHRvIG1ha2UgZ2FtZXBsYXkgaGFyZGVyXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24udG9wICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSB0aGlzLmdldFJhbmRvbSgtMSwgMSk7XG5cdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgLT0gciAqIHRoaXMubmV3TGVmdDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdyaWdodCc6XG5cdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgKz0gKHRoaXMuc3BlZWQgKyAoMC41ICogdGhpcy5nZXRSYW5kb20oMCwgdGhpcy5zcGVlZCkpKTtcblx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24udG9wICs9IDEwICogKHRoaXMuZ2V0UmFuZG9tKC10aGlzLnNwZWVkLCB0aGlzLnNwZWVkKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncmV0dXJuJzpcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGNhdXNlZCBieSBhIFRydW1wIGNvbGxpZGVyIHJ1bm5pbmcgaW50byB0aGUgQW5pbWFsXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogcmV0dXJuIEFuaW1hbCB0byBpdHMgY2FnZVxuICAgICAgICAgICAgICAgIHRoaXMub2JqLmRpcmVjdGlvbiA9ICdjYWdlZCc7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogd3JpdGUgcmV0dXJuIGFyY1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2FnZWQnOlxuICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPSB0aGlzLnN0YXJ0TGVmdDtcbiAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgPSB0aGlzLnN0YXJ0VG9wO1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IHdoZW4gY2FnZWQsIHJlc2V0IHVudGlsIGl0IGlzIHVuY2FnZWQgYWdhaW5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ01vdmVyLnNldFByZWZEaXJlY3Rpb246IGludmFsaWQgZGlyZWN0aW9uOicgKyB0aGlzLm9iai5kaXJlY3Rpb24pO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cbiAgICAgICAgLy8gQ29tcHV0ZSBkeCBhbmQgZHkgZm9yIEFuaW1hbHNcbiAgICAgICAgdmFyIHhkaXN0ID0gdGhpcy5vbGRMZWZ0IC0gdGhpcy5vYmoucG9zaXRpb24ubGVmdDtcbiAgICAgICAgdmFyIHlkaXN0ID0gdGhpcy5vbGRUb3AgLSB0aGlzLm9iai5wb3NpdGlvbi50b3A7XG4gICAgICAgIHZhciBzdW0gPSB4ZGlzdCArIHlkaXN0O1xuICAgICAgICBpZiAoc3VtID4gMC4wMDAxKSB7XG4gICAgICAgICAgICB0aGlzLm9iai5keCA9IHhkaXN0IC8gc3VtO1xuICAgICAgICAgICAgdGhpcy5vYmouZHkgPSB5ZGlzdCAvIHN1bTsgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vYmouZHggPSAwO1xuICAgICAgICAgICAgdGhpcy5vYmouZHkgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2F2ZSBvdXIgbmV3IHBvc2l0aW9uXG4gICAgICAgIHRoaXMub2xkTGVmdCA9IHRoaXMub2JqLnBvc2l0aW9uLmxlZnQ7XG4gICAgICAgIHRoaXMub2xkVG9wID0gdGhpcy5vYmoucG9zaXRpb24udG9wO1xuXG4gICAgICAgIC8vY29uc29sZS5sb2coJyBkeDonICsgdGhpcy5vYmouZHggKyAnIGR5OicgKyB0aGlzLm9iai5keSArICcgc3VtOicgKyBzdW0pXG4gICAgfVxuXG4gICAgY2FsY3VsYXRlQ29sbGlzaW9uICh0cnVtcCwgYW5pbWFsKSB7XG4gICAgICAgIHZhciB3ID0gdGhpcy5vYmouaW1hZ2UuZGF0YS53aWR0aDtcbiAgICAgICAgdmFyIGggPSB0aGlzLm9iai5pbWFnZS5kYXRhLmhlaWdodDtcbiAgICAgICAgdmFyIGF3ID0gYW5pbWFsLmltYWdlLmRhdGEud2lkdGg7XG4gICAgICAgIHZhciBhaCA9IGFuaW1hbC5pbWFnZS5kYXRhLmhlaWdodDtcblxuICAgICAgICBpZiAodGhpcy5vYmoucG9zaXRpb24ubGVmdCA8IGFuaW1hbC5wb3NpdGlvbi5sZWZ0ICsgYXcgJiZcbiAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgKyB3ID4gYW5pbWFsLnBvc2l0aW9uLmxlZnQgJiZcbiAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCA8IGFuaW1hbC5wb3NpdGlvbi50b3AgKyBhaCAmJlxuICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24udG9wICsgaCA+IGFuaW1hbC5wb3NpdGlvbi50b3ApIHsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy9nZXQgVHJ1bXAgY2VudGVyYWwgcG9pbnRcbiAgICAgICAgICAgICAgICB2YXIgdFhDZW50ZXIgPSB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ICsgdy8yO1xuICAgICAgICAgICAgICAgIHZhciB0WUNlbnRlciA9IHRoaXMub2JqLnBvc2l0aW9uLnRvcCAgKyBoLzI7XG5cbiAgICAgICAgICAgICAgICAvL2dldCBBbmltYWwgY2VudHJhbCBwb2ludFxuICAgICAgICAgICAgICAgIHZhciBhWENlbnRlciA9IGFuaW1hbC5wb3NpdGlvbi5sZWZ0ICsgYXcvMjtcbiAgICAgICAgICAgICAgICB2YXIgYVlDZW50ZXIgPSBhbmltYWwucG9zaXRpb24udG9wICsgYWgvMjtcblxuICAgICAgICAgICAgICAgIC8vY29tcHV0ZSB4IGFuZCB5IHZlY3RvciBiZXR3ZWVuIGNlbnRlcnNcbiAgICAgICAgICAgICAgICB2YXIgY1hEaWZmID0gdFhDZW50ZXIgLSBhWENlbnRlcjtcbiAgICAgICAgICAgICAgICB2YXIgY1lEaWZmID0gdFlDZW50ZXIgPSBhWUNlbnRlcjtcblxuICAgICAgICAgICAgICAgIC8vIFRydW1wIGRvZXNuJ3QgcmVhY3QgaWYgbm90IG1vdmluZyAoZXZlbiBpZiBhbmltYWwgZG9lcylcbiAgICAgICAgICAgICAgICBpZiAodHJ1bXAuc3BlZWQgIT0gMCAmJiB0cnVtcC5keCAhPSAwICYmIHRydW1wLmR5ICE9IDApIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBtb3ZlIG9iamVjdCBzbyBpdCBpc24ndCBjb2xsaWRpbmcgYW55bW9yZVxuICAgICAgICAgICAgICAgICAgICBpZiAoY1hEaWZmID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydW1wLnBvc2l0aW9uLnggKz0gKGNYRGlmZiArIDEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1bXAucG9zaXRpb24ueCAtPSAoY1hEaWZmICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY1lEaWZmID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydW1wLnBvc2l0aW9uLnkgKz0gKGNZRGlmZiArIDEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1bXAucG9zaXRpb24ueSAtPSAoY1lEaWZmICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBub3JtYWxpemUgbmV3IHZlY3RvcnNcbiAgICAgICAgICAgICAgICAgICAgdHJ1bXAuZHggPSAtY1hEaWZmIC8gY1lEaWZmO1xuICAgICAgICAgICAgICAgICAgICB0cnVtcC5keSA9IC1jWURpZmYgLyBjWERpZmY7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcm91bmRpbmcgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRkaWYgPSBNYXRoLmFicyh0cnVtcC5keCArIHRydW1wLmR5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRkaWYgPiAxLjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cnVtcC5keCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1bXAuZHkgLT0gZGRpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1bXAuZHkgKz0gZGRpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy9lbmQgb2YgVHJ1bXAgaXMgbW92aW5nXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZHg6Ojo6OjonICsgdHJ1bXAuZHggKyAnIGR5Ojo6Ojo6JyArIHRydW1wLmR5KVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogQG1ldGhvZCB1cGRhdGVQaW5nUG9uZ1xuICAgICAqIEBkZXNjcmlwdGlvbiBtb3ZlIGluIGEgcGluZy1wb25nIHN0eWxlLlxuICAgICAqIENhbGwgaW4gYW4gdXBkYXRlIGZ1bmN0aW9uIGluc2lkZSB0aGUgQ2hhcmFjdGVyLCBlLmcuIFxuICAgICAqIHVwZGF0ZSAoKSB7IHVwZGF0ZVJhbmRvbVdhbGsoKTsgfVxuICAgICAqIFRoZSBtYWluIEdhbWUgb2JqZWN0IGF1dG9tYXRpY2FsbHkgZmluZHMgYW5kICdmaXJlcycgdXBkYXRlKCkgZnVuY3Rpb24gaW4gXG4gICAgICogYWxsIENoYXJhY3RlcnMuXG4gICAgICogUG9zc2libGUgdXBkYXRlcyBmb3IgbW90aW9uOlxuICAgICAqIDEuIENvbGxpc2lvbiB3aXRoIGEgUGxheWVyICh2aWEga2ljaygpIG1ldGhvZCkgc3RhcnRzIHRoZSBUcnVtcCBjaGFyYWN0ZXIgbW92aW5nXG4gICAgICogMi4gVHJ1bXAgd2lsbCBib3VuY2Ugb24gYWxsIHdhbGxzIEVYQ0VQVCB0aGUgYm90dG9tIHdhbGxcbiAgICAgKiAzLiBXaGVuIHRoZSBUcnVtcCBpbnRlcnNlY3RzIHRoZSBib3R0b20gd2FsbCwgdGhleSBzdG9wIG1vdmluZ1xuICAgICAqIDQuIElmIHRoZXkgY29sbGlkZSB3aXRoIGFuIEFuaW1hbCwgdGhleSBib3VuY2UsIGFuZCB0aGUgQW5pbWFsIHJldHVybnMgdG8gaXRzIENhZ2UuXG4gICAgICovXG4gICAgdXBkYXRlUGluZ1BvbmcgKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5pbml0ZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RydW1wIFBpbmdQb25nIE5PVCBpbml0aWFsaXplZCAoZGlkIHlvdSBsZWF2ZSBvdXQgb2YgY29uc3RydWN0b3I/KScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2R4OicgKyB0aGlzLm9iai5keCArICcgZHk6JyArIHRoaXMub2JqLmR5KTtcbiAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCAtPSB0aGlzLm9iai5zcGVlZCAqIHRoaXMub2JqLmR4O1xuICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgLT0gdGhpcy5vYmouc3BlZWQgKiB0aGlzLm9iai5keTtcblxuICAgICAgICAvL2NoZWNrIGJvdW5kcyAoQW5pbWFsQXJlYSlcbiAgICAgICAgaWYgKHRoaXMuYm91bmRzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vYmouaW1hZ2UuZGF0YSkge1xuXG4gICAgICAgICAgICAgICAgdmFyIHcgPSB0aGlzLm9iai5pbWFnZS5kYXRhLndpZHRoO1xuICAgICAgICAgICAgICAgIHZhciBoID0gdGhpcy5vYmouaW1hZ2UuZGF0YS5oZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAvLyBjYXRjaCBjYXNlcyB3aGVyZSBUcnVtcCBnZXRzIGludG8gdGhlIENhZ2UgYXJlYVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5wb3NpdGlvbi50b3AgPCB0aGlzLmJvdW5kcy50b3ApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLmR5ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouZHkgPSAtdGhpcy5vYmouZHk7XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCA9IHRoaXMuYm91bmRzLnRvcCArIDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gcnVuIHRoaXMgb25seSBpZiB3ZSBhcmUgbW92aW5nIGRvd24gdGhlIHNjcmVlblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5keSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLnRvcCA+ICh0aGlzLm9iai5zdGFydFRvcCAtICh0aGlzLm9iai5keSAqIHRoaXMub2JqLnNwZWVkKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5vYmouZHkgPSAtdGhpcy5vYmouZHk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgPSB0aGlzLm9iai5zdGFydFRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLmR4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLmR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdCA9IHRoaXMuYm91bmRzLmJvdHRvbSAtIGggLSB0aGlzLm9iai5wb3NpdGlvbi50b3A7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzcGQgPSAtdGhpcy5vYmouZHkgKiB0aGlzLm9iai5zcGVlZCAqIDQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGRlY2VsZXJhdGUgYmVmb3JlIHN0b3BwaW5nIGF0IGJvdHRvbSBvZiBBbmltYWxBcmVhXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXN0IDwgc3BkICYmIHNwZCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnNwZWVkIC89IDI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vZW5kIG9mIGR5IG5lZ2F0aXZlIChnb2luZyBkb3duKVxuXG4gICAgICAgICAgICAgICAgLy8gYm91bmNlIG9uIHRoZSBvdGhlciAzIHdhbGxzXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPCB0aGlzLmJvdW5kcy5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLmR4ID0gLXRoaXMub2JqLmR4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmoucG9zaXRpb24udG9wIDwgdGhpcy5ib3VuZHMudG9wKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLmR5ID0gLXRoaXMub2JqLmR5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmoucG9zaXRpb24ubGVmdCA+IHRoaXMuYm91bmRzLnJpZ2h0IC0gdykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5keCA9IC10aGlzLm9iai5keDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBlbmNvdW5kZXIgYW4gYW5pbWFsLCBib3VuY2UsIEFORCAna2ljaycgdGhlIGFuaW1hbCBiYWNrIGludG8gaXRzIGNhZ2VcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmouYW5pbWFscykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5vYmouYW5pbWFscy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFuaW1hbCA9IHRoaXMub2JqLmFuaW1hbHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbGN1bGF0ZUNvbGxpc2lvbih0aGlzLm9iaiwgYW5pbWFsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0IHRoZSBBbmltYWwncyBzdGF0ZSB0byByZXR1cm4gaG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc+Pj5SRVRVUk5JTkcgQU5JTUFMIFRPIENBR0UnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hbC5kaXJlY3Rpb24gPSAncmV0dXJuJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmouc3BlZWQgPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnNwZWVkID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2JyZWFrIG91dCBvZiBob3Jpem9udGFsIG1vdmVcbiAgICAgICAgaWYgKHRoaXMub2JqLmR5IDwgMC4wMDEgJiYgdGhpcy5vYmouZHggPiAwLjAwMSkge1xuICAgICAgICAgICAgdmFyIGQgPSB0aGlzLnJhbmRvbWl6ZXIoKTtcbiAgICAgICAgICAgIHRoaXMub2JqLmR5ICs9IGQgLSB0aGlzLnJhbmRvbWl6ZXIoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59IC8vIGVuZCBvZiBjbGFzc1xuIiwiLyoqXG4gKiBQbGF5ZXIuanNcbiAqIFVzZXItY29udHJvbGxlZCBDaGFyYWN0ZXJcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuXG4gICAgdGhpcy5tb3Zlci5pbml0U2xldygpO1xuIFx0fVxuXG4gIHVwZGF0ZSAoKSB7XG4gIHRoaXMubW92ZXIudXBkYXRlU2xldygpOyAvL3Ntb290aHMgbW90aW9uLCBhcHBsaWVzIENvbGxpZGVyXG4gICAgICAgfVxuIH1cbiIsIi8qKiBcbiAqIFBsYXllckFyZWEuanNcbiAqIFRoZSByZWdpb24gd2hlcmUgdGhlIFBsYXllciBjYW4gbW92ZS5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEFyZWFcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJBcmVhIGV4dGVuZHMgQXJlYSB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIoY29uZmlnKTtcbiBcdH1cblxuIH0iLCIvKiogXG4gKiBTY29yZS5qc1xuICogRGlzcGxheSB1c2VyIHNjb3JlXG4gKiBAaW5oZXJpdHMgRHluYW1pY1RleHQsIFRleHQsIEluZm8sIEdhbWVQaWVjZVxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4vRHluYW1pY1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSBleHRlbmRzIER5bmFtaWNUZXh0IHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblx0fVxufSIsIi8qKiBcbiAqIFNjcmVlbi5qc1xuICogR2VuZXJpYyBTY3JlZW4gb2JqZWN0XG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLmpzXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG4gaW1wb3J0IElkZW50aXR5IGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyZWVuIGV4dGVuZHMgR2FtZVBpZWNlIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpOyAvL2luaXQgJ3BhcmVudCcgR2FtZVBpZWNlXG5cbiBcdFx0Ly8gc2F2ZSBhIHJlZmVyZW5jZSB0byBvdXIgcGFyZW50IEdhbWUgb2JqZWN0XG4gXHRcdHRoaXMuZ2FtZSA9IGNvbmZpZy5nYW1lO1xuXG4gXHRcdHdpbmRvdy5jb25maWcgPSBjb25maWc7IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9ERUJVRyBPTkxZXG5cbiBcdFx0Ly8gU2NyZWVucyBhcmUgZGVmaW5lZCBpbiBIVE1MLCBzbyBzYXZlIGEgcmVmZXJlbmNlIHRvIG91ciBET00gaWRcbiBcdFx0dGhpcy5kb21JZCA9IGNvbmZpZy5pZDtcblxuIFx0XHQvLyBzYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBET00gZWxlbWVudCB3ZSdyZSBjb25uZWN0ZWQgdG9cbiBcdFx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRvbUlkKTtcblxuIFx0XHQvLyBpbnNlcnQgdGhlIGNvcHlyaWdodCBpbmZvIGZyb20gdGhlIG1haW4gR2FtZSBvYmplY3RcbiBcdFx0dGhpcy5hZGRXYXJuaW5nKCk7XG4gXHR9XG5cbiBcdC8vIGxvYWQgYSBiYWNrZ3JvdW5kIGltYWdlIGludG8gdGhlIFNjcmVlblxuIFx0bG9hZEJhY2tncm91bmQgKHBhdGgsIGNhbGxiYWNrKSB7XG4gXHRcdGNvbnNvbGUubG9nKFwibG9hZGluZzpcIiArIHRoaXMuZG9tSWQpO1xuIFx0XHR0aGlzLmJhY2tncm91bmRJbWFnZSA9IG5ldyBTdGF0aWNJbWFnZShcbiBcdFx0XHR7XG4gXHRcdFx0XHRuYW1lOiB0aGlzLm5hbWUgKyAnLWltYWdlJyxcbiBcdFx0XHRcdGRvbUlkOiB0aGlzLmlkICsgJy1pbWFnZScsXG4gXHRcdFx0XHRwYXRoOiBwYXRoLFxuIFx0XHRcdFx0Y2FsbGJhY2s6IGNhbGxiYWNrXG4gXHRcdFx0fVxuIFx0XHQpO1xuIFx0XHR0aGlzLmJhY2tncm91bmRJbWFnZS5sb2FkQmFja2dyb3VuZEltYWdlKHRoaXMuZG9tLCBwYXRoLCBjYWxsYmFjayk7XG4gXHR9XG5cbiBcdC8vIHNob3cgYW5kIGhpZGUgcmVnaW9ucyBvZiB0aGUgU2NyZWVuXG4gXHRzaG93U2NyZWVuICgpIHtcbiBcdFx0Y29uc29sZS5sb2coXCJzaG93aW5nOlwiICsgdGhpcy5kb21JZCk7XG4gXHRcdHRoaXMuZG9tLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gXHR9XG5cbiBcdGhpZGVTY3JlZW4gKCkge1xuIFx0XHRjb25zb2xlLmxvZyhcImhpZGluZzpcIiArIHRoaXMuZG9tSWQpO1xuIFx0XHR0aGlzLmRvbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gXHR9XG5cbiBcdHNob3dIZWFkZXIgKCkge1xuIFx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiBcdH1cblxuIFx0aGlkZUhlYWRlciAoKSB7XG5cdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuIFx0fVxuXG4gXHRzaG93Rm9vdGVyICgpIHtcblx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuIFx0fVxuXG4gXHRoaWRlRm9vdGVyICgpIHtcblx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gXHR9XG5cbiBcdGFkZFdhcm5pbmcgKCkge1xuIFx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykuaW5uZXJIVE1MID0gdGhpcy5nYW1lLndhcm5pbmc7XG4gXHR9XG5cbiB9OyIsIi8qKiBcbiAqIEBjbGFzcyBTb3VuZGVyLmpzXG5cbiAqIEBkZXNjcmlwdGlvbiBwcm92aWRlIHNvdW5kcyB0aGF0IG90aGVyIG9iamVjdHMgY2FuIHBsYXkuIERldGVjdHMgdGhlIGtpbmRzIFxuICogb2YgYXVkaW8gZmlsZXMgdGhlIHdlYiBicm93ZXIgY2FuIHBsYXksIGFuZCBzZXJ2ZXMgdGhlIGZpcnN0IGZpbGUgaXQgZmluZHMgaW4gXG4gKiB0aGUgL2F1ZGlvIGZvbGRlciBvZiB0aGUgZGlzdHJpYnV0aW9uLiBBdWRpbyBmaWxlcyBhcmUgYWNjZXNzZWQgYnkgY3VzdG9tIG5hbWVzIFxuICogZm9yIHBsYXliYWNrLlxuXG4gKiBBZGFwdGVkIGZyb21cbiAqIEBodHRwOi8vYmxvZy5za2xhbWJlcnQuY29tL2h0bWw1LWNhbnZhcy1nYW1lLWh0bWw1LWF1ZGlvLWFuZC1maW5pc2hpbmctdG91Y2hlcy9cblxuICogU291bmRlci5qcyBzaG91bGQgYmUgbG9hZGVkIGluIHRoZSBtYWluIEdhbWUgaW5pdGlhbGl6YXRpb24gcHJvY2Vzcy5cblxuICogSW4gYWRkaXRpb24sIHRoZSBkaXN0cmlidXRpb24gTVVTVCBoYXZlIGFuIC9hdWRpbyBkaXJlY3Rvcnkgd2l0aCBmaWxlcyBpbiBtdWx0aXBsZSBcbiAqIGF1ZGlvIGZvcm1hdHM6XG4gKiBNUDMgKC5tcDMpXG4gKiBPZ2ctVm9yYmlzICgub2dnKVxuICogV0FWICgud2F2KVxuXG4gKiBBdWRpbyBFZGl0b3JzOlxuICogQXVkYWNpdHkgKGZyZWUpXG4gKiBAbGluayBodHRwOi8vd3d3LmF1ZGFjaXR5dGVhbS5vcmcvXG4gKiBQcm9Ub29scyAoJCQkKVxuICogQGxpbmsgaHR0cDovL3d3dy5hdmlkLmNvbS9wcm8tdG9vbHNcblxuICogQXVkaW8gY29udmVydGVyczpcbiAqIEBsaW5rIGh0dHA6Ly9tZWRpYS5pby9cbiAqIEBsaW5rIGh0dHBzOi8vc291cmNlZm9yZ2UubmV0L3Byb2plY3RzL2F1ZGFjaXR5L1xuICogQGxpbmsgaHR0cDovL3d3dy5tZWRpYWh1bWFuLmNvbS9hdWRpby1jb252ZXJ0ZXIvXG4gKiBAbGluayBodHRwOi8vd3d3Lmh0bWw1YXVkaW9jb252ZXJ0ZXIuY29tL1xuIFxuICogQXVkaW8gU2FtcGxlczpcbiAqIEBsaW5rIGh0dHA6Ly93d3cuZ3JzaXRlcy5jb20vYXJjaGl2ZS9zb3VuZHMvY2F0ZWdvcnkvMjUvP29mZnNldD0yMFxuICogQGxpbmsgaHR0cHM6Ly93d3cuZnJlZXNvdW5kLm9yZ1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VuZGVyIHtcblxuXHRjb25zdHJ1Y3RvciAoKSB7XG5cblx0XHQvLyBDcmVhdGUgYW4gYXJyYXkgb2YgbG9hZGVkIHNvdW5kc1xuXHRcdHRoaXMucGF0aCA9ICdhdWRpby8nO1xuXG5cdFx0dGhpcy5zb3VuZHMgPSBbXTtcblx0XHR0aGlzLmNoZWNrQXVkaW8oKTtcblx0fVxuXG5cdC8qKiBcblx0ICogQG1ldGhvZCBjaGVja0F1ZGlvXG5cdCAqIEBkZXNjcmlwdGlvbiBzZWUgd2hpY2ggYXVkaW8gZmlsZSBmb3JtYXRzIGNhbiBiZSBwbGF5ZWQgYnkgdGhlIGJyb3dzZXIuXG5cdCAqL1xuXHRjaGVja0F1ZGlvICgpIHtcblx0XHR2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XG5cdFx0dmFyIGJvb2wgPSBmYWxzZTtcblxuXHRcdHRyeSB7XG5cdFx0XHRpZiAoYm9vbCA9ICEhZWxlbS5jYW5QbGF5VHlwZSkge1xuXHRcdFx0XHRib29sID0gbmV3IEJvb2xlYW4oYm9vbCk7XG5cdFx0XHRcdGJvb2wub2dnID0gZWxlbS5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJ2b3JiaXNcIicpLnJlcGxhY2UoL15ubyQvLCcnKTtcblx0XHRcdFx0Ym9vbC5tcDMgPSBlbGVtLmNhblBsYXlUeXBlKCdhdWRpby9tcGVnOycpLnJlcGxhY2UoL15ubyQvLCcnKTtcblx0XHRcdFx0Ym9vbC53YXYgPSBlbGVtLmNhblBsYXlUeXBlKCdhdWRpby93YXY7IGNvZGVjcz1cIjFcIicpLnJlcGxhY2UoL15ubyQvLCcnKTtcblx0XHRcdFx0Ym9vbC5tNGEgPSAoZWxlbS5jYW5QbGF5VHlwZSgnYXVkaW8veC1tNGE7JykgfHwgZWxlbS5jYW5QbGF5VHlwZSgnYXVkaW8vYWFjOycpKS5yZXBsYWNlKC9ebm8kLywnJyk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdC8vIGxpc3Qgc3VwcG9ydGVkIGF1ZGlvIHR5cGVzXG5cdFx0XHQvL2VsZW0gPSBudWxsOyBcblx0XHRcdHRoaXMudHlwZSA9IGJvb2w7XG5cblx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy50eXBlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGkgKyAnIHN1cHBvcnQ6JyArIHRoaXMudHlwZVtpXSk7XG5cdFx0XHR9XG5cdH1cblxuXHQvKiogXG5cdCAqIEBtZXRob2Qgc2V0U291bmRcblx0ICogQGRlc2NyaXB0aW9uIGNhbGxiYWNrIGZvciBsb2FkaW5nIHNvdW5kLCBhZGRzIHRvIHRoZSBcblx0ICogc291bmRzIGFycmF5IGZvciBsYXRlciBwbGF5YmFjay5cblx0ICovXG5cdHNldFNvdW5kIChlLCBuYW1lLCB2b2x1bWUpIHtcblx0XHRpZiAoIXZvbHVtZSkge1xuXHRcdFx0dm9sdW1lID0gMC41O1xuXHRcdH1cblx0XHR0aGlzLnNvdW5kc1tuYW1lXSA9IGUudGFyZ2V0O1xuXHRcdHRoaXMuc291bmRzW25hbWVdLnZvbHVtZSA9IHZvbHVtZTtcblx0fVxuXG5cdC8qKiBcblx0ICogQG1ldGhvZCBzb3VuZEVycm9yXG5cdCAqIEBkZXNjcmlwdGlvbiBjYWxsYmFjayBmb3IgZmFpbGVkIGxvYWRzIG9mIHNvdW5kIGZpbGVzLlxuXHQgKi9cblx0c291bmRFcnJvciAoZSwgbmFtZSkge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ0F1ZGlvICcgKyBuYW1lICsgJyBmYWllZCB0byBsb2FkJyk7XG5cdFx0dGhpcy5zb3VuZHNbbmFtZV0gPSBudWxsO1xuXHR9XG5cblx0LyoqIFxuXHQgKiBAbWV0aG9kIGFkZFNvdW5kXG5cdCAqIEBkZXNjcmlwdGlvbiBhZGQgYSBuZXcgc291bmQuIFxuXHQgKiBAcGFyYW0gU3RyaW5nIG5hbWUgdGhlIG5hbWUgb2YgdGhlIHNvdW5kLiBUaGUgc291bmQgbmFtZSBcblx0ICogbXVzdCBtYXRjaCB0aGUgZmlsZSBjb250YWluaW5nIHRoZSBhdWRpbywgZS5nLiBmb3IgYSBzb3VuZCBjYWxsZWQgXG5cdCAqICdraWNrJyB0aGVyZSBtdXN0IGJlIGEgZmlsZSAvYXVkaW8va2ljay5tcDMgXG5cdCAqIFBvc3NpYmxlIGZvcm1hdHMgKGNyZWF0ZSB0aGVtIGFsbCBkdXJpbmcgcHJvZHVjdGlvbilcblx0ICogLSBNUDMgKC5tcDMpXG5cdCAqIC0gT2dnLVZvcmJpcyAoLm9nZylcblx0ICogLSBXQVYgKC53YXYpXG5cdCAqIEBwYXJhbSBOdW1iZXIgdm9sdW1lIHRoZSBsb3VkbmVzcyBvZiB0aGUgc291bmQsIGJldHdlZW4gMCAoc2lsZW50KSBcblx0ICogYW5kIDEuMCAoYXMgbG91ZCBhcyBwb3NzaWJsZSkuXG5cdCAqL1xuXHRhZGRTb3VuZCAobmFtZSwgdm9sdW1lKSB7XG5cdFx0aWYgKCFuYW1lKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCd0cmllZCB0byBsb2FkIGF1ZGlvIGZpbGUgd2l0aG91dCBhIG5hbWUgYW5kL29yIHBhdGgsIGFib3J0aW5nJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIHRyeSBjcmVhdGluZyB0aGUgc291bmRcblx0XHR2YXIgc25kO1xuXHRcdC8vIGdldCB0aGUgZXh0ZW5zaW9uIGFuZCByZW1haW5pbmcgcGF0aFxuXHRcdGZvciAodmFyIGkgaW4gdGhpcy50eXBlKSB7XG5cdFx0XHRjb25zb2xlLmxvZygndGhpcy50eXBlWycgKyBpICsgJ109JyArIHRoaXMudHlwZVtpXSk7XG5cdFx0XHRpZiAodGhpcy50eXBlW2ldICE9IFwiXCIpIHsgLy9yZXR1cm5lZCBkYXRhVHlwZSBmb3IgZWxlbS5jYW5QbGF5VHlwZSguLi4pXG5cblx0XHRcdFx0dmFyIGZpbGVQYXRoID0gdGhpcy5wYXRoICsgbmFtZSArICcuJyArIGk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiVFJZSU5HIFRPIExPQUQ6XCIgKyB0aGlzLnBhdGggKyBuYW1lICsgJy4nICsgaSk7XG5cblx0XHRcdFx0Ly8gQ3JlYXRlIHRoZSBBdWRpbyBvYmplY3Rcblx0XHRcdFx0c25kID0gbmV3IEF1ZGlvKGZpbGVQYXRoKTtcblxuXHRcdFx0XHQvLyB0cmFwIGxvYWQgYW5kIGVycm9yIGV2ZW50c1xuXHRcdFx0XHRzbmQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkZGF0YScsIFxuXHRcdFx0XHRcdGV2ZW50ID0+IHRoaXMuc2V0U291bmQoZXZlbnQsIG5hbWUsIHZvbHVtZSksIGZhbHNlKTtcblxuXHRcdFx0XHRzbmQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBcblx0XHRcdFx0XHRldmVudCA9PiB0aGlzLnNvdW5kRXJyb3IoZXZlbnQsIG5hbWUpLCBmYWxzZSk7XG5cblx0XHRcdFx0Ly8gc3RhcnQgbG9hZGluZyB0aGUgc291bmRcblx0XHRcdFx0c25kLmxvYWQoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghc25kKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdzb3VuZCBmaWxlIGZvcjonICsgbmFtZSArICcgbm90IGZvdW5kIGluIGF1ZGlvJyk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKiogXG5cdCAqIEBtZXRob2QgcGxheVNvdW5kXG5cdCAqIEBkZXNjcmlwdGlvblxuXHQgKiBAcGFyYW1zIFN0cmluZyBuYW1lIHRoZSBuYW1lIG9mIHRoZSBzb3VuZC4gTXVzdCBtYXRjaCB0aGUgZmlsZW5hbWUgXG5cdCAqIFdJVEhPVVQgYSBmaWxlIGV4dGVuc2lvbiBpbiB0aGUgL2F1ZGlvIGZvbGRlciBmb3IgdGhlIGdhbWUuXG5cdCAqL1xuXHRwbGF5U291bmQgKG5hbWUpIHtcblx0XHRpZiAodGhpcy5zb3VuZHNbbmFtZV0pIHtcblx0XHRcdHRoaXMuc291bmRzW25hbWVdLnBsYXkoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5lcnJvcignbm8gc291bmQgZmlsZSB3aXRoIG5hbWU6JyArIG5hbWUgKyAnIGluIGF1ZGlvIGZvbGRlcicpO1xuXHRcdH1cblx0fVxuXG5cdC8qKiBcblx0ICogQG1ldGhvZCBmaWxlRXhpc3RzXG5cdCAqIEBkZXNjcmlwdGlvbiBkZXRlY3QgaWYgYSBmaWxlIGlzIHByZXNlbnQgb24gdGhlIHNlcnZlci4gVXNlcyBhbiBcblx0ICogc3luY2hyb25vdXMgQWpheCB0ZWNobmlxdWUsIHNvIFNMT1cgaWYgeW91IGFyZSB1c2luZyBhIHJlbW90ZSBzZXJ2ZXIuIFxuXHQgKiBObyBjb21wYXJhYmxlIG1ldGhvZCBleGlzdHMgZm9yIGRldGVybWluaW5nIGlmIGEgZm9sZGVyIGV4aXN0cyBpbiBcblx0ICogY2xpZW50LXNpZGUgdmFuaWxsYSBKYXZhU2NyaXB0LlxuXHQgKiBAcGFyYW0gU3RyaW5nIHVybCB0aGUgcGF0aCB0byB0aGUgZmlsZSBvbiB0aGUgc2VydmVyLlxuXHQgKi9cblx0ZmlsZUV4aXN0cyh1cmwpIHtcblx0XHR2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdFx0eGhyLm9wZW4oJ0hFQUQnLCB1cmwsIGZhbHNlKTtcblx0XHR4aHIuc2VuZCgpO1xuXHRcdGlmICh4aHIuc3RhdHVzID09ICc0MDQnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG59IC8vIGVuZCBvZiBjbGFzcyIsIi8qKiBcbiAqIFN0YXJ0U2NyZWVuLmpzXG4gKiBPcGVuaW5nIHNjcmVlbiBmb3IgZ2FtZS5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIFNjcmVlblxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuXG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcbmltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcyc7XG5cbmltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbmltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbmltcG9ydCBJZGVudGl0eSBmcm9tICcuL0lkZW50aXR5LmpzJztcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vQmFja2dyb3VuZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0U2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblxuXHRcdC8vIHRoaXMuZG9tIGRlZmluZWQgaW4gU2NyZWVuXG5cblx0XHQvLyBMb2FkIFN0YXJ0U2NyZWVuIHN1Yi1vYmplY3RzXG5cdFx0dGhpcy5sb2FkQmFja2dyb3VuZCgnaW1nL3NjcmVlbnMvc3RhcnQtc2NyZWVuLnBuZycpO1xuXG5cdFx0Ly8gbG9hZCBpZGVudGl0eSBpbWFnZVxuXHRcdHRoaXMubG9hZElkZW50aXR5KCk7XG5cblx0XHQvLyBsb2FkIGluc3RydWN0aW9uc1xuXHRcdHRoaXMubG9hZEluc3RydWN0aW9ucygpO1xuXG5cdFx0Ly8gTWFrZSB0aGUgc3RhcnQgYnV0dG9uIG9wZW4gdGhlIG1haW4gZ2FtZSBzY3JlZW5cblx0XHR0aGlzLmJpbmRTdGFydCgpO1xuXHR9XG5cblx0bG9hZElkZW50aXR5ICgpIHtcblx0XHR0aGlzLmlkZW50aXR5ID0gbmV3IElkZW50aXR5KFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnaWRlbnRpdHknLCBcblx0XHRcdFx0ZG9tSWQ6ICdzdGFydC1zY3JlZW4taWRlbnRpdHknLFxuXHRcdFx0XHRwYXRoOiAnaW1nL2lkZW50aXR5L2xvZ28ucG5nJywgXG5cdFx0XHRcdGF1dGhvcjogJ3BldGUgbWFya2lld2ljeicsIFxuXHRcdFx0XHRzb3VyY2U6ICdwbHlvanVtcCdcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0Ly8gc2V0IHBvc2l0aW9uIG9mIElkZW50aXR5XG5cdFx0dGhpcy5pZGVudGl0eS5zZXRET01Qb3NpdGlvbiAoXG5cdFx0XHR7XG5cdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0bGVmdDogMFxuXHRcdFx0fVxuXHRcdCk7XG5cblx0fVxuXG5cdGxvYWRJbnN0cnVjdGlvbnMgKCkge1xuXG5cdFx0dGhpcy5pbnN0cnVjdGlvbnMgPSBuZXcgU3RhdGljVGV4dChcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ2dhbWUgaW5zdHJ1Y3Rpb25zJyxcblx0XHRcdFx0ZG9tSWQ6ICdpbnN0cnVjdGlvbnMnLFxuXHRcdFx0XHR0ZXh0OiAnUGxheSB0byB3aW4uIFRoYXQgaXMgYWxsIFRydW1wIGNhcmVzIGFib3V0LCBhbmQgc28gc2hvdWxkIHlvdS4nXG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaW5zdHJ1Y3Rpb25zLnNldERPTVBvc2l0aW9uKFxuXHRcdFx0e1xuXHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHR9XG5cdFx0KTtcblxuXHR9XG5cblx0YmluZFN0YXJ0ICgpIHtcblx0XHRjb25zb2xlLmxvZyhcImluIGJpbmRTdGFydCwgdGhpcy5nYW1lOlwiICsgdGhpcy5nYW1lKVxuXHRcdC8vIHdlIHVzZSBiaW5kKCkgdG8gbGluayB0aGUgZnVuY3Rpb24gYmVsb3cgdG8gU3RhcnRTY3JlZW4gKG90aGVyd2lzZSwgaXQgdGhpbmtzIGl0IGlzIGluc2lkZSB3aW5kb3cpXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXJ0LXNjcmVlbi1wbGF5LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXG5cdFx0XHRmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHQvL2FsZXJ0KFwiaW4gaGFuZGxlciwgZ2FtZTpcIiArIHRoaXMuZ2FtZSlcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLmdhbWUuc3RhcnRHYW1lKCk7XG5cblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cbn0iLCIvKipcbiAqIFN0YXRpY0ltYWdlLmpzXG4gKiBJbWFnZS1zdHlsZSBJbmZvcm1hdGlvbiB0aGF0IGNhbm5vdCBiZSBjaGFuZ2VkIG9uY2UgdGhlIGdhbWUgaXMgbG9hZGVkXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGljSW1hZ2UgZXh0ZW5kcyBJbWFnZSB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cblx0XHR0aGlzLnN0YXRpYyA9IHRydWU7XG5cblx0fVxuXG5cblxufVxuIiwiLyoqIFxuICogU3RhdGljVGV4dC5qc1xuICogVGV4dCB0aGF0IGNhbm5vdCBiZSBjaGFuZ2VkIGFmdGVyIGxvYWRlZCBieSB0aGUgZ2FtZVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aWNUZXh0IGV4dGVuZHMgVGV4dCB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cblx0XHR0aGlzLnN0YXRpYyA9IHRydWU7XG5cblx0fVxuXG59XG4iLCIvKiogXG4gKiBUZXh0LmpzXG4gKiBDcmVhdGVzIGEgdGV4dC10eXBlIEluZm8gb2JqZWN0XG4gKiBAaW5oZXJpdHMgSW5mbywgR2FtZVBpZWNlXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIEluZm8ge1xuXG4gXHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiBcdFx0c3VwZXIoY29uZmlnKTtcblxuIFx0XHQvLyBzZXQgdGhlIHRleHRcbiBcdFx0dGhpcy5zZXRUZXh0KGNvbmZpZy50ZXh0KTtcblxuIFx0XHQvLyBzZXQgdGhlIERPTUlkXG4gXHRcdHRoaXMuYWRkVG9ET00oY29uZmlnLmRvbUlkKTtcbiBcdH1cblxuIFx0c2V0VGV4dCAodHh0KSB7XG4gXHRcdHRoaXMudGV4dCA9IHR4dDtcbiBcdH1cblxuIFx0YWRkVG9ET00gKGRvbUlkKSB7XG5cbiBcdFx0dGhpcy5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiBcdFx0dGhpcy5kb20uaWQgPSBuYW1lICsgJy1UZXh0JztcbiBcdFx0dGhpcy5kb20uaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xuXG4gXHRcdC8vIGNvbnRhaW5lclxuIFx0XHR2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZG9tSWQpO1xuXG4gXHRcdC8vIGFkZCB0byB0aGUgRE9NXG4gXHRcdGNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGhpcy5kb20sIGNvbnRhaW5lci5jaGlsZE5vZGVzWzBdKTtcblxuXHR9XG5cbiB9IiwiLyoqIFxuICogVGlnZXIuanNcbiAqIEEgVGlnZXIsIHdobyB0cmllcyB0byBnZXQgdGhlIFBsYXllci5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG4gaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBUaWdlciBleHRlbmRzIEFuaW1hbCB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG4gXHR9XG4gfSIsIi8qKlxuICogVHJ1bXAuanNcbiAqIFRoZSBiYWxsLWxpa2UgQ2hhcmFjdGVyIHlvdSBraWNrIGludG8gQW5pbWFsc1xuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRydW1wIGV4dGVuZHMgQ2hhcmFjdGVyIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcblxuICAgIC8vVHJ1bXAgZ2V0cyBQaW5nUG9uZyBtb3Rpb25cbiAgICB0aGlzLm1vdmVyLmluaXRQaW5nUG9uZygwLCB0aGlzKTsgLy9waW5ncG9uZyB3b24ndCBzdGFydCB5ZXRcbiBcdH1cblxuICB1cGRhdGUgKCkge1xuICAgICAgICAgdGhpcy5tb3Zlci51cGRhdGVQaW5nUG9uZygpOyAvL2FsbG93cyBwaW5ncG9uZyBtb3Rpb25cbiAgICB9XG4gfVxuIiwiLyoqIFxuICogQ3JlYXRlIHRoZSBnYW1lLiBJbXBvcnQgdGhlIHByaW1hcnkgY2xhc3NlcywgYW5kICdjb21wb3NpdGUnIFxuICogdGhlIG92ZXJhbGwgR2FtZSBvYmplY3Qgb3V0IG9mIGluc3RhbmNlcyBvZiB0aGUgY2xhc3Nlcy5cbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbi8vVGhlIGVudGlyZSBnYW1lXG5pbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUuanMnO1xuXG4vL1NjcmVlbiBpbmhlcml0YW5jZVxuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5pbXBvcnQgU3RhcnRTY3JlZW4gZnJvbSAnLi9TdGFydFNjcmVlbi5qcyc7XG5pbXBvcnQgR2FtZVNjcmVlbiBmcm9tICcuL0dhbWVTY3JlZW4uanMnO1xuaW1wb3J0IEVuZFNjcmVlbiBmcm9tICcuL0VuZFNjcmVlbi5qcyc7XG5cbi8vSW5mbyBpbmhlcml0YW5jZVxuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuL1N0YXRpY1RleHQuanMnO1xuaW1wb3J0IElkZW50aXR5IGZyb20gJy4vSWRlbnRpdHkuanMnO1xuaW1wb3J0IEluc3RydWN0aW9ucyBmcm9tICcuL0luc3RydWN0aW9ucy5qcyc7XG5pbXBvcnQgRHluYW1pY1RleHQgZnJvbSAnLi9EeW5hbWljVGV4dC5qcyc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZS5qcyc7XG5cbi8vQ2hhcmFjdGVyIGluaGVyaXRhbmNlXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbmltcG9ydCBUcnVtcCBmcm9tICcuL1RydW1wLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXIuanMnO1xuaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5pbXBvcnQgTGlvbiBmcm9tICcuL0xpb24uanMnO1xuaW1wb3J0IFRpZ2VyIGZyb20gJy4vVGlnZXIuanMnO1xuaW1wb3J0IEJlYXIgZnJvbSAnLi9CZWFyLmpzJztcbmltcG9ydCBHb3JpbGxhIGZyb20gJy4vR29yaWxsYS5qcyc7XG5pbXBvcnQgSGVhbHRoIGZyb20gJy4vSGVhbHRoLmpzJztcblxuLy9BcmVhIGluaGVyaXRhbmNlLlxuaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcbmltcG9ydCBDYWdlIGZyb20gJy4vQ2FnZS5qcyc7XG5pbXBvcnQgQW5pbWFsQXJlYSBmcm9tICcuL0FuaW1hbEFyZWEuanMnO1xuaW1wb3J0IFBsYXllckFyZWEgZnJvbSAnLi9QbGF5ZXJBcmVhLmpzJztcblxuLy9UZXN0IGZpbGUgKHZlcnkgc2ltcGxlIHRlc3RydW5uZXIpXG5pbXBvcnQgVGVzdHMgZnJvbSAnLi4vLi4vdGVzdHMvVGVzdHMuanMnO1xuXG4vKiogXG4gKiBTZXQgdXAgdGVzdHMuXG4gKi9cbnZhciBteVRlc3RzID0gbmV3IFRlc3RzKCk7XG5cbi8qKlxuICogU2V0IHVwIHRoZSBHYW1lXG4gKi9cbnZhciBteUdhbWUgPSBuZXcgR2FtZSh7bmFtZTogXCJab29LaWxsU29jY2VyXCJ9KTtcblxuLyoqIFxuICogRVhQT1JUIFRPIFdFQiBDT05TT0xFXG4gKiBUbyBtYWtlIHNvbWV0aGluZyB2aXNpYmxlIGluIFdlYiBjb25zb2xlIGZvciBkZWJ1Z2dpbnQsIGF0dGFjaCB0byB3aW5kb3cgb2JqZWN0XG4gKiBOT1RFOiBQcm9mZXNzaW9uYWwgY29kZSB1c2VzIHNwZWNpYWxpemVkIHRlc3RpbmcgbW9kdWxlcyBsaWtlIE1vY2hhLCBLYXJtYSwgYW5kIFxuICogc2ltaWxhciB0ZXN0aW5nIGxpYnJhcmllcy5cbiAqL1xuXG4vLyB3ZSBjYW4gcnVuIHRoaXMgdGVzdCBtYW51YWxseSB3aXRoIHRlc3RzLnJ1bigpO1xud2luZG93LnRlc3RzID0gbXlUZXN0cztcblxuLy8gbWFrZSB0aGUgZ2FtZSBvYmplY3QgdmlzaWJsZSBzbyB3ZSBjYW4gaW5zcGVjdCBpdC5cbndpbmRvdy5nYW1lID0gbXlHYW1lO1xuXG5jb25zb2xlLmxvZygnWk9PS0lMTFNPQ0NFUiBHYW1lIGluaXRpYWxpemVkLiBBY2Nlc3MgZ2FtZSB2aWEgXCJnYW1lXCIuIFVzZSBUZXN0cy5ydW4oKSB0byB0ZXN0LicpXG5cblxuXG5cblxuXG5cbiIsImltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi4vbW9kdWxlcy9qcy9HYW1lUGllY2UuanMnO1xuXG4vL1RoZSBlbnRpcmUgZ2FtZVxuaW1wb3J0IEdhbWUgZnJvbSAnLi4vbW9kdWxlcy9qcy9HYW1lLmpzJztcblxuLy9TY3JlZW4gaW5oZXJpdGFuY2VcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi4vbW9kdWxlcy9qcy9TY3JlZW4uanMnO1xuaW1wb3J0IFN0YXJ0U2NyZWVuIGZyb20gJy4uL21vZHVsZXMvanMvU3RhcnRTY3JlZW4uanMnO1xuaW1wb3J0IEdhbWVTY3JlZW4gZnJvbSAnLi4vbW9kdWxlcy9qcy9HYW1lU2NyZWVuLmpzJztcbmltcG9ydCBFbmRTY3JlZW4gZnJvbSAnLi4vbW9kdWxlcy9qcy9FbmRTY3JlZW4uanMnO1xuXG4vL0luZm8gaW5oZXJpdGFuY2VcbmltcG9ydCBJbmZvIGZyb20gJy4uL21vZHVsZXMvanMvSW5mby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuLi9tb2R1bGVzL2pzL1RleHQuanMnO1xuaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi4vbW9kdWxlcy9qcy9TdGF0aWNUZXh0LmpzJztcbmltcG9ydCBJZGVudGl0eSBmcm9tICcuLi9tb2R1bGVzL2pzL0lkZW50aXR5LmpzJztcbmltcG9ydCBJbnN0cnVjdGlvbnMgZnJvbSAnLi4vbW9kdWxlcy9qcy9JbnN0cnVjdGlvbnMuanMnO1xuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4uL21vZHVsZXMvanMvRHluYW1pY1RleHQuanMnO1xuaW1wb3J0IFNjb3JlIGZyb20gJy4uL21vZHVsZXMvanMvU2NvcmUuanMnO1xuXG4vL0NoYXJhY3RlciBpbmhlcml0YW5jZVxuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuLi9tb2R1bGVzL2pzL0NoYXJhY3Rlci5qcyc7XG5pbXBvcnQgVHJ1bXAgZnJvbSAnLi4vbW9kdWxlcy9qcy9UcnVtcC5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL21vZHVsZXMvanMvUGxheWVyLmpzJztcbmltcG9ydCBBbmltYWwgZnJvbSAnLi4vbW9kdWxlcy9qcy9BbmltYWwuanMnO1xuaW1wb3J0IExpb24gZnJvbSAnLi4vbW9kdWxlcy9qcy9MaW9uLmpzJztcbmltcG9ydCBUaWdlciBmcm9tICcuLi9tb2R1bGVzL2pzL1RpZ2VyLmpzJztcbmltcG9ydCBCZWFyIGZyb20gJy4uL21vZHVsZXMvanMvQmVhci5qcyc7XG5pbXBvcnQgR29yaWxsYSBmcm9tICcuLi9tb2R1bGVzL2pzL0dvcmlsbGEuanMnO1xuaW1wb3J0IEhlYWx0aCBmcm9tICcuLi9tb2R1bGVzL2pzL0hlYWx0aC5qcyc7XG5cbi8vQXJlYSBpbmhlcml0YW5jZS5cbmltcG9ydCBBcmVhIGZyb20gJy4uL21vZHVsZXMvanMvQXJlYS5qcyc7XG5pbXBvcnQgQ2FnZSBmcm9tICcuLi9tb2R1bGVzL2pzL0NhZ2UuanMnO1xuaW1wb3J0IEFuaW1hbEFyZWEgZnJvbSAnLi4vbW9kdWxlcy9qcy9BbmltYWxBcmVhLmpzJztcbmltcG9ydCBQbGF5ZXJBcmVhIGZyb20gJy4uL21vZHVsZXMvanMvUGxheWVyQXJlYS5qcyc7XG5cbi8qKiBcbiAqIFRFU1RCRUQgLSBUZXN0IGFsbCBvdXIgb2JqZWN0cy4gVGhpcyBpcyBhIHZlcnkgYmFzaWMgdGVzdGluZyBzeXN0ZW0uIFxuICogTk9URTogUHJvZmVzc2lvbmFsIGNvZGUgdXNlcyB0ZXN0aW5nIGxpYnJhcmllcyBsaWtlIEthcm1hIGFuZCBNb2NoYS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdHMge1xuXG5cdGNvbnN0cnVjdG9yICgpIHtcblx0fVxuXG5cdC8vIEJlY2F1c2Ugd2UgbWFrZSB0aGVzZSBvYmplY3RzIHdpdGggJ3ZhcicgdGhleSBhcmUgc2NvcGVkIHRvIHRoZSBydW4oKSBmdW5jdGlvbi5cblx0cnVuICgpIHtcblxuXHRcdHZhciBjb25maWcgPSB7bmFtZTonRm9yZXN0IFRydW1wIG9yIERvbmFsZCBHdW1wIHJ1bHonfTtcblxuXHRcdC8vIE1ha2Ugc29tZSB0ZXN0IGdhbWUgb2JqZWN0c1xuXHRcdHZhciBnYW1lID0gbmV3IEdhbWUoY29uZmlnKTtcblx0XHRjb25zb2xlLmxvZyhnYW1lLmdldE5hbWUoKSk7XG5cblx0XHQvL3Rlc3QgR2FtZSBPYmplY3Rcblx0XHR2YXIgbXlHYW1lID0gbmV3IEdhbWUoe25hbWU6IFwiWm9vS2lsbFNvY2NlclwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlHYW1lLmdldE5hbWUoKSk7XG5cblx0XHQvL290aGVyIG9iamVjdHNcblx0XHR2YXIgbXlTY3JlZW4gPSBuZXcgU2NyZWVuKHtuYW1lOiBcIk9wZW5pbmcgU2NyZWVuXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVNjcmVlbi5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15U3RhcnRTY3JlZW4gPSBuZXcgU3RhcnRTY3JlZW4oe25hbWU6IFwiU3RhcnQgU2NyZWVuXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVN0YXJ0U2NyZWVuLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlHYW1lU2NyZWVuID0gbmV3IEdhbWVTY3JlZW4oe25hbWU6IFwiR2FtZSBTY3JlZW5cIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15R2FtZVNjcmVlbi5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15RW5kU2NyZWVuID0gbmV3IEVuZFNjcmVlbih7bmFtZTogXCJFbmQgU2NyZWVuXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUVuZFNjcmVlbi5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15SW5mbyA9IG5ldyBJbmZvKHtuYW1lOiBcIkdlbmVyaWMgSW5mb3JtYXRpb25cIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15SW5mby5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15VGV4dCA9IG5ldyBUZXh0KHtuYW1lOiBcIkdlbmVyaWMgVGV4dCBPYmplY3RcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15VGV4dC5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15U3RhdGljVGV4dCA9IG5ldyBTdGF0aWNUZXh0KHtuYW1lOiBcIkdlbmVyaWMgU3RhdGljIFRleHQgT2JqZWN0XCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVN0YXRpY1RleHQuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUlkZW50aXR5ID0gbmV3IElkZW50aXR5KHtuYW1lOiBcIkdlbmVyaWMgSWRlbnRpdHkgT2JqZWN0XCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUlkZW50aXR5LmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlJbnN0cnVjdGlvbnMgPSBuZXcgSW5zdHJ1Y3Rpb25zKHtuYW1lOiBcIkdlbmVyaWMgSW5zdHJ1Y3Rpb25zIE9iamVjdFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlJbnN0cnVjdGlvbnMuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUR5bmFtaWNUZXh0ID0gbmV3IER5bmFtaWNUZXh0KHtuYW1lOiBcIkdlbmVyaWMgRHluYW1pYyBUZXh0IE9iamVjdFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlEeW5hbWljVGV4dC5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15U2NvcmUgPSBuZXcgU2NvcmUoe25hbWU6IFwic2NvcmVzLi4uXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVNjb3JlLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlDaGFyYWN0ZXIgPSBuZXcgQ2hhcmFjdGVyKHtuYW1lOiBcIkdlbmVyaWMgQ2hhcmFjdGVyXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUNoYXJhY3Rlci5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15VHJ1bXAgPSBuZXcgVHJ1bXAoe25hbWU6IFwiRG9uYWxkIFRydW1wXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVRydW1wLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlQbGF5ZXIgPSBuZXcgUGxheWVyKHtuYW1lOiBcIkVuZCBVc2VyXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVBsYXllci5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15QW5pbWFsID0gbmV3IEFuaW1hbCh7bmFtZTogXCJHZW5lcmljIEFuaW1hbFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlBbmltYWwuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUxpb24gPSBuZXcgTGlvbih7bmFtZTogXCJDb3dhcmRseSB0aGUgTGlvblwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlMaW9uLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlUaWdlciA9IG5ldyBUaWdlcih7bmFtZTogXCJDaG9tcGVyIHRoZSBUaWdlclwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlUaWdlci5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15QmVhciA9IG5ldyBCZWFyKHtuYW1lOiBcIk1hdWxlciB0aGUgQmVhclwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlCZWFyLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlHb3JpbGxhID0gbmV3IEdvcmlsbGEoeyBuYW1lOiBcIlNwdW5reSB0aGUgR29yaWxsYVwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlHb3JpbGxhLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlIZWFsdGggPSBuZXcgSGVhbHRoKHtuYW1lOiBcIk9uZSBIZWFsdGggS2l0XCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUhlYWx0aC5nZXROYW1lKCkpO1xuXG5cdFx0Ly9BcmVhIGluaGVyaXRhbmNlLlxuXHRcdHZhciBteUFyZWEgPSBuZXcgQXJlYSh7bmFtZTogXCJHZW5lcmljIEFyZWFcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15QXJlYS5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15Q2FnZSA9IG5ldyBDYWdlKHtuYW1lOiBcIkdlbmVyaWMgQXJlYVwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlDYWdlLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlBbmltYWxBcmVhID0gbmV3IEFuaW1hbEFyZWEoe25hbWU6IFwiQW5pbWFsQXJlYVwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlBbmltYWxBcmVhLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlQbGF5ZXJBcmVhID0gbmV3IFBsYXllckFyZWEoe25hbWU6IFwiUGxheWVyQXJlYVwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlQbGF5ZXJBcmVhLmdldE5hbWUoKSk7XG5cdH1cbn1cbiJdfQ==
