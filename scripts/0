webpackJsonp([0],{

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(758);

// 待办路由
module.exports = {
  path: 'info',
  indexRoute: {
    onEnter: function onEnter() {
      typeof jw.setHeaderLine == 'function' ? jw.setHeaderLine({ status: 0 }) : '';
    },
    getComponent: function getComponent(nextState, cb) {
      __webpack_require__.e/* require.ensure */(3).then((function (require) {
        var model = __webpack_require__(908)["default"];
        (0, _constants.registerModel)(app, model);
        cb(null, __webpack_require__(901)["default"]);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }
};

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(758);

// 待办路由
module.exports = {
  path: 'money-info',
  indexRoute: {
    onEnter: function onEnter() {
      typeof jw.setHeaderLine == 'function' ? jw.setHeaderLine({ status: 0 }) : '';
      jw.setTitle({ title: '费用明细' });
    },
    getComponent: function getComponent(nextState, cb) {
      __webpack_require__.e/* require.ensure */(4).then((function (require) {
        var model = __webpack_require__(909)["default"];
        (0, _constants.registerModel)(app, model);
        cb(null, __webpack_require__(902)["default"]);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }
};

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(758);

// 待办路由
module.exports = {
  path: 'todos',
  indexRoute: {
    onEnter: function onEnter() {
      typeof jw.setHeaderLine == 'function' ? jw.setHeaderLine({ status: 0 }) : '';
    },
    getComponent: function getComponent(nextState, cb) {
      __webpack_require__.e/* require.ensure */(2).then((function (require) {
        var model = __webpack_require__(910)["default"];
        (0, _constants.registerModel)(app, model);
        cb(null, __webpack_require__(903)["default"]);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }
};

/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var registerModel = exports.registerModel = function registerModel(app, model) {
  if (!(app._models.filter(function (m) {
    return m.namespace === model.namespace;
  }).length === 1)) {
    app.model(model);
  }
};
var getUsers = exports.getUsers = function getUsers(val, type, callback) {
  jw.getUsers({
    users: val,
    type: type
  }, {
    success: callback,
    fail: callback
  });
};
// ?jwstyle=077655

var openChart = exports.openChart = function openChart(data) {
  var userList = [window.userinfo["employee_id"], data["parentData"]['data']['OriginatorEmpCode']].join(',');
  console.log(data, userList, '这个是啥');
  jw.chartInit({
    id: data['title'][0]["DisplayData"],
    name: data['title'][0]["DisplayData"],
    users: userList,
    type: 'num',
    user_src: true
    // mobileurl:window.location.origin+'/eps/#/orderHomepage?orderid='+orderNumber
  }, {
    success: function success(res) {},
    fail: function fail(res) {}
  });
};

var DataLength = exports.DataLength = function DataLength(fData) {
  var intLength = 0;
  for (var i = 0; i < fData.length; i++) {
    if (fData.charCodeAt(i) < 0 || fData.charCodeAt(i) > 255) intLength = intLength + 2;else intLength = intLength + 1;
  }
  return intLength;
};

Number.prototype.formatMoney = function (places, symbol, thousand, decimal) {
  places = !isNaN(places = Math.abs(places)) ? places : 2;
  symbol = symbol !== undefined ? symbol : "$";
  thousand = thousand || ",";
  decimal = decimal || ".";
  var number = this,
      negative = number < 0 ? "-" : "",
      i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
      j = (j = i.length) > 3 ? j % 3 : 0;
  var data = symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
  return data;
};

String.prototype.formatMoney = function (places, symbol, thousand, decimal) {
  var str = this;
  if (_.isNumber(str)) str = 0;
  return Number(str).formatMoney(places, symbol, thousand, decimal);
};

/***/ })

});