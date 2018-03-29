webpackJsonp([3],{

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(252);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _dva = __webpack_require__(232);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 加载组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 功能说明: 列表下拉加载更多
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 使用说明：
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 		(1) demo案例
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 				let bindtoref = this.refs.listwrap;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 				let onEndReached = (pageno)=>{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 					// fetchdata by pageno
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 					// set loading = true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 					// fetchdata end 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 					// set loading = false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 				}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 				<LoadMore pagesize=20 totalnum=200 pageno=0 loading={ false } bindtoref={ bindtoref } onEndReached={ ()=>{this.onEndReached(pageno)} }/>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 		(2) 参数说明
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 			pagesize number  每页条数  可选
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 			totalnum number  总条数   必填
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 			pageno  number  当前页数  必填
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 			loading  bool   加载状态  必填
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 			bindtoref react component's ref  监听滚动事件的宿主 可选  默认为body scroll
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 			onEndReached 回调函数  到达底部后回调事件，回调中可以根据pageno去加载下一页数据
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var LoadMore = function (_Component) {
	_inherits(LoadMore, _Component);

	function LoadMore() {
		_classCallCheck(this, LoadMore);

		return _possibleConstructorReturn(this, (LoadMore.__proto__ || Object.getPrototypeOf(LoadMore)).apply(this, arguments));
	}

	_createClass(LoadMore, [{
		key: 'render',
		value: function render() {
			var data = this.props.data;
			return _react2.default.createElement(
				'div',
				{ className: "loading-bounce-w " + (data['hide'] ? 'hide' : '') + ' ' + (data['fix'] ? 'fix' : '') },
				_react2.default.createElement('div', { className: 'loading-bounce-bg' }),
				_react2.default.createElement(
					'div',
					{ className: 'loading-gif' },
					_react2.default.createElement('img', { src: 'images/loading.gif' })
				)
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var self = this;
			var data = this.props.data;
			console.log('Marlin LoadMore end', data);
			if (this.props['container']) {
				console.log("container", this.props['container']);
				$("." + this.props['container']).on("scroll", function (evt) {
					if (data["loading"]['fix'] || data['loading']['loading']) return;
					var scrollTop = $('.' + self.props['container']).scrollTop();
					var clientHeight = $('.' + self.props['container']).height();
					var target = $('.loading-bounce-w');
					// let target = $('.todos-list-loadmore');
					if (target.length == 0) return;
					if (clientHeight + 80 >= target.offset().top) {
						self.props.onEndReached(evt);
					}
				});
			} else {}
		}
	}]);

	return LoadMore;
}(_react.Component);

;

LoadMore.propTypes = {};

exports.default = (0, _dva.connect)(function (state) {
	return state;
})(LoadMore);

/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fetch = __webpack_require__(752);

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  var error = new Error(response.statusText);
  error.response = response;
  throw error;
}
function checkError(response, url, requestParams) {
  if (response['errorMsg']) {
    alert(response['errorMsg']);
    // Toast.fail(response['errorMsg'],1)
  }
}
function combineUrlParam(url, params) {
  if (params) {
    if (url.indexOf('?') != -1) {
      url += '&';
    } else {
      url += '?';
    }
  }
  var newArray = [];
  _.each(params, function (item, key) {
    // if(item){
    newArray.push(key + '=' + item);
    // }
  });
  return url + '' + newArray.join('&');
}

exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, options) {
    var requestParams, response, data, b, ret;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            requestParams = void 0;
            _context.t0 = options.method;
            _context.next = _context.t0 === 'POST' ? 4 : _context.t0 === 'PUT' ? 6 : _context.t0 === 'PATCH' ? 6 : _context.t0 === 'DELETE' ? 6 : 8;
            break;

          case 4:
            requestParams = _.extend({
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
              }
            }, options);
            return _context.abrupt('break', 11);

          case 6:
            requestParams = options;
            return _context.abrupt('break', 11);

          case 8:
            requestParams = {
              method: 'GET'
            };
            url = combineUrlParam(url, options.body);
            return _context.abrupt('break', 11);

          case 11:
            _context.prev = 11;

            if (requestParams['headers']) {} else {
              requestParams['headers'] = {};
            }
            requestParams['credentials'] = 'include';
            // 发起请求
            _context.next = 16;
            return (0, _fetch2.default)(url, requestParams);

          case 16:
            response = _context.sent;

            // 校验返回状态
            checkStatus(response, url, requestParams);
            _context.next = 20;
            return response.text();

          case 20:
            data = _context.sent;
            b = data.replace('let a =', '');

            if (b[0] == '(') {
              b = b.substring(1, b.length);
            } else {
              b = b.substring(2, b.length);
            }
            b = b.substring(0, b.length - 1);
            console.log(b, 'asdasdas');
            data = JSON.parse(b);
            checkError(data, url, requestParams);
            // 拼装返回值
            ret = {
              data: data,
              headers: {}
            };
            return _context.abrupt('return', ret);

          case 31:
            _context.prev = 31;
            _context.t1 = _context['catch'](11);
            return _context.abrupt('return', {
              data: {
                errcode: 'no-network',
                errmemo: '请求失败，请检查网络连接',
                errinfo: _context.t1,
                success: false,
                statusText: '请求失败，请检查网络连接'
              },
              headers: {}
            });

          case 34:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[11, 31]]);
  }));

  function request(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return request;
}();

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {


module.exports = __webpack_require__(753);


/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(800);
module.exports = self.fetch.bind(self);


/***/ }),

/***/ 901:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(252);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _dva = __webpack_require__(232);

var _UserCard = __webpack_require__(907);

var _UserCard2 = _interopRequireDefault(_UserCard);

var _MoneyDetail = __webpack_require__(904);

var _MoneyDetail2 = _interopRequireDefault(_MoneyDetail);

var _LoadMore = __webpack_require__(750);

var _LoadMore2 = _interopRequireDefault(_LoadMore);

var _constants = __webpack_require__(758);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Info = function (_Component) {
  _inherits(Info, _Component);

  function Info(props) {
    _classCallCheck(this, Info);

    var store = new Store('Joywok:cache:tabs:info');
    if (store['data']['tab:cache']) {
      var dispatch = props.dispatch;
      dispatch({
        type: 'info/changeData',
        payload: {
          parentData: store['data']['tab:cache']
        }
      });
    }

    var _this = _possibleConstructorReturn(this, (Info.__proto__ || Object.getPrototypeOf(Info)).call(this, props));

    _this.state = {
      containerHeight: 'auto'
    };
    return _this;
  }

  _createClass(Info, [{
    key: 'render',
    value: function render() {
      var self = this;
      var data = this.props.info;
      return _react2.default.createElement(
        'div',
        { className: 'root-container' },
        _react2.default.createElement(
          'div',
          { className: 'root-container-w' },
          _react2.default.createElement(
            'header',
            { className: 'header', ref: 'header' },
            _react2.default.createElement(
              'div',
              { className: 'header-bg-specail' },
              _react2.default.createElement('div', { className: 'header-bg' }),
              _react2.default.createElement('div', { className: 'header-bg-2' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'header-c' },
              _react2.default.createElement(_UserCard2.default, { data: data["title"] })
            )
          ),
          _react2.default.createElement(
            'sesstion',
            { className: 'main' },
            _react2.default.createElement(
              'div',
              { className: 'info-list-speacail' },
              _react2.default.createElement(
                'div',
                { className: 'info-list-speacail-c' },
                _react2.default.createElement(
                  'div',
                  { className: 'info-list-h' },
                  _react2.default.createElement('i', { className: '' }),
                  _react2.default.createElement(
                    'span',
                    null,
                    '\u8D39\u7528\u660E\u7EC6'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'info-list-title' },
                  _react2.default.createElement(
                    'div',
                    { className: 'info-list-year' },
                    '\u5E74\u4EFD'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'info-list-type' },
                    '\u8D39\u7528\u7C7B\u578B'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'info-list-money' },
                    '\u62A5\u9500\u91D1\u989D(RMB)'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'main-c ', ref: 'listC', style: {
                  maxHeight: this.state.containerHeight || 'auto',
                  paddingBottom: "0"
                } },
              _react2.default.createElement(
                'div',
                { className: 'main-w' },
                _react2.default.createElement(
                  'div',
                  { className: 'info-list' },
                  _react2.default.createElement(
                    'div',
                    { className: 'info-list-c' },
                    _react2.default.createElement(
                      'div',
                      { className: 'info-list-main' },
                      _.map(data['money'], function (i, key) {
                        return _react2.default.createElement(
                          'div',
                          { className: 'info-list-i  border-line-h before', onClick: function onClick(e) {
                              return self.openMoneyInfo(i);
                            } },
                          _react2.default.createElement(
                            'div',
                            { className: 'info-list-year' },
                            i["年份"] || '-'
                          ),
                          _react2.default.createElement(
                            'div',
                            { className: 'info-list-type' },
                            i["费用类型"] || '-'
                          ),
                          _react2.default.createElement(
                            'div',
                            { className: 'info-list-money' },
                            i["报销金额(RMB)"] || '-'
                          )
                        );
                      })
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(_MoneyDetail2.default, { data: data['count'] }),
          data['loading']['loading'] ? _react2.default.createElement(_LoadMore2.default, { data: {
              hide: data["loading"]['hide'],
              loading: data["loading"]['loading'],
              fix: data["loading"]['fix']
            } }) : ''
        )
      );
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}
  }, {
    key: 'openMoneyInfo',
    value: function openMoneyInfo(data) {
      var info = this.props.info;
      var rownum = data['_RowNumber'] || data['rownum'];
      jw.pushWebView(window.location.origin + '/#/money-info?ProcInstId=' + info['ProcInstID'] + '&RowNumber=' + rownum + '&GridID=' + info['panelId'] + '&LanCode=CN&EmpCode=' + window.userinfo["id"] + '&jwstyle=077655');
    }
  }, {
    key: 'setHeight',
    value: function setHeight() {
      var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
      // this.s
      var height = $('.header').height() || 0;
      var detail = $('.money-info-detail-summary').height() || 0;
      var specaiHeader = $('.info-list-speacail').height() || 0;
      console.log(height + '-' + detail + '-' + specaiHeader, '--------');
      this.setState({
        containerHeight: clientHeight - height - detail - specaiHeader - 70 + 'px'
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      // NProgress.done();
      this.setHeight();
      jw.setFuncBtns([{ type: 4 }]);
      window.onJwNavBtnClick = function (data) {
        if (data['type'] == '4') {
          var _data = self.props.info;
          (0, _constants.openChart)(_data);
        }
      };

      var search = window.location.hash.split('?')[1].split('&');
      var data = {};
      _.each(search, function (i) {
        var datas = i.split('=');
        data[datas[0]] = datas[1];
      });
      var dispatch = this.props.dispatch;
      console.log(data, '过去的数据是啥');
      setTimeout(function () {
        dispatch({
          type: 'info/fetch',
          payload: data
        });
      }, 100);
    }
  }]);

  return Info;
}(_react.Component);

exports.default = (0, _dva.connect)(function (state) {
  return state;
})(Info);

/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _dva = __webpack_require__(232);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // MoneyDetail.js


var MoneyDetail = function (_Component) {
	_inherits(MoneyDetail, _Component);

	function MoneyDetail() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, MoneyDetail);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MoneyDetail.__proto__ || Object.getPrototypeOf(MoneyDetail)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			hide: true
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(MoneyDetail, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
			var data = this.props.data;
			var newData = [];
			var allMoney = 0;
			_.each(data, function (i) {
				if (i['Res_Name'] && i['Res_Name'] == '总费用合计') {
					allMoney = i['DisplayData'];
				} else {
					newData.push(i);
				}
			});
			return _react2.default.createElement(
				'div',
				{ className: "money-info-detail " + (this.state.hide ? '' : 'active') },
				_react2.default.createElement('div', { className: 'money-info-detail-bg', onClick: function onClick(e) {
						return _this2.showInfo(e);
					}, style: {
						opacity: this.state.hide ? '0' : '0.5'
					} }),
				_react2.default.createElement(
					'div',
					{ className: 'money-info-detail-info border-line-h after', style: {
							width: clientWidth + 'px',
							left: this.state.hide ? '100%' : '0px'
						} },
					_.map(data, function (item) {
						return _react2.default.createElement(
							'div',
							{ className: 'money-detail-info-i' },
							_react2.default.createElement(
								'span',
								null,
								item['Res_Name']
							),
							_react2.default.createElement(
								'span',
								null,
								item['DisplayData']
							)
						);
					})
				),
				_react2.default.createElement(
					'div',
					{ className: 'money-info-detail-summary animated fadeInUp', onClick: function onClick(e) {
							return _this2.showInfo(e);
						} },
					_react2.default.createElement('div', { className: "money-info-opear " + (this.state.hide ? 'icon-money-opear' : 'icon-money-opear-active') }),
					_react2.default.createElement(
						'div',
						{ className: 'money-info-number' },
						allMoney
					),
					_react2.default.createElement(
						'div',
						{ className: 'money-info-summary-label' },
						'\u603B\u8D39\u7528\u5408\u8BA1'
					)
				)
			);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			var self = this;
			setTimeout(function () {
				if (self.state.hide) {
					$('.main-c').removeClass('clear-scroll');
				} else {
					$('.main-c').addClass('clear-scroll');
				}
			}, 0);
		}
	}, {
		key: 'showInfo',
		value: function showInfo() {
			var status = this.state.hide;
			if (status) {
				this.setState({
					hide: false
				});
			} else {
				this.setState({
					hide: true
				});
			}
		}
	}]);

	return MoneyDetail;
}(_react.Component);

exports.default = (0, _dva.connect)(function (state) {
	return state;
})(MoneyDetail);

/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _dva = __webpack_require__(232);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserCard = function (_Component) {
	_inherits(UserCard, _Component);

	function UserCard() {
		_classCallCheck(this, UserCard);

		return _possibleConstructorReturn(this, (UserCard.__proto__ || Object.getPrototypeOf(UserCard)).apply(this, arguments));
	}

	_createClass(UserCard, [{
		key: 'render',
		value: function render() {
			var data = this.props.data || {};
			return _react2.default.createElement(
				'div',
				{ className: 'user-card' },
				_react2.default.createElement(
					'div',
					{ className: 'user-card-c' },
					_react2.default.createElement(
						'div',
						{ className: 'user-card-avatar' },
						_react2.default.createElement('img', { src: window.userinfo ? window.userinfo["avatar"]["avatar_l"] : 'https://www.joywok.com/public/images/avatar/l.jpg', alt: '' })
					),
					_react2.default.createElement(
						'div',
						{ className: 'user-card-info' },
						_.map(data, function (i, key) {
							return _react2.default.createElement(
								'div',
								{ className: 'user-card-info-i' },
								_react2.default.createElement(
									'span',
									{ className: 'user-card-label' },
									i["Res_Name"]
								),
								_react2.default.createElement(
									'span',
									{ className: 'user-card-val' },
									i["DisplayData"]
								)
							);
						})
					)
				)
			);
		}
	}]);

	return UserCard;
}(_react.Component);

exports.default = (0, _dva.connect)(function (state) {
	return state;
})(UserCard);

/***/ }),

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _request = __webpack_require__(751);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function firstFetch(parame) {
  var url = '/bpmapi/MobileService.ashx';
  var datas = {
    Method: "GetProcessDetails",
    ProcInstId: '',
    ActInstDestId: '',
    LanCode: 'CN',
    EmpCode: window.userinfo["employee_id"],
    callback: 'let a = '
  };
  return (0, _request2.default)(url, {
    method: 'GET',
    body: _.extend({}, datas, parame)
  });
}
exports.default = {
  namespace: 'info',
  state: {
    loading: {
      loading: true,
      fix: true,
      hide: false
    },
    title: [],
    money: [],
    count: []
  },
  reducers: {
    changeData: function changeData(state, action) {
      return _extends({}, state, action.payload);
    }
  },
  effects: {
    fetch: /*#__PURE__*/regeneratorRuntime.mark(function fetch(_ref, _ref2) {
      var payload = _ref.payload,
          dispatch = _ref.dispatch;
      var call = _ref2.call,
          put = _ref2.put,
          select = _ref2.select;
      var datas, firstData, title, money, count, panelId, loading, allData;
      return regeneratorRuntime.wrap(function fetch$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              NProgress.start();
              _context.next = 3;
              return select();

            case 3:
              datas = _context.sent;
              _context.next = 6;
              return call(firstFetch, payload);

            case 6:
              firstData = _context.sent;

              firstData = firstData['data'];
              // let title = firstData['panel'][0]['data'][0];
              title = [];
              money = [];
              count = [];
              panelId = '';

              _.each(firstData['panel'], function (i) {
                if (i['Res_Name'] == '申请人信息') {
                  _.each(i['data'][0], function (item) {
                    if (typeof item != 'string') {
                      title = item;
                    }
                  });
                } else if (i['Res_Name'] == '费用明细') {
                  money = i['data'][0]['data'];
                  panelId = i['data'][0]['panelId'];
                  _.each(i['data'][1], function (item) {
                    if (typeof item != 'string') {
                      count = item;
                    }
                  });
                }
              });
              loading = datas["info"]['loading'];

              loading['loading'] = false;
              loading['hide'] = true;
              allData = _.extend({
                loading: loading
              }, {
                title: title,
                money: money,
                count: count,
                panelId: panelId,
                ProcInstID: firstData['ProcInstID'],
                ActInstDestID: firstData['ActInstDestID']
              });

              jw.setTitle({ title: title[0]['DisplayData'] });
              NProgress.done();
              _context.next = 21;
              return put({
                type: 'changeData',
                payload: allData
              });

            case 21:
            case 'end':
              return _context.stop();
          }
        }
      }, fetch, this);
    })
  },
  subscriptions: {}
};

/***/ })

});