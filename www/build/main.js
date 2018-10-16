webpackJsonp([1],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallTtsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_media__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gif_change_gif_change__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__save_data_save_data__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_text_to_speech__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CallTtsProvider = (function () {
    function CallTtsProvider(file, txfr, http, Data, media, gif, platform, tts) {
        this.file = file;
        this.txfr = txfr;
        this.http = http;
        this.Data = Data;
        this.media = media;
        this.gif = gif;
        this.platform = platform;
        this.tts = tts;
    }
    CallTtsProvider.prototype.synthesize = function (text) {
        var _this = this;
        this.gif.events.publish("gif", "speakGif");
        this.tts.speak({
            text: text,
            locale: 'pt-BR',
            rate: 1.5
        })
            .then(function () {
            console.log('Success tts.speak: ' + text);
            _this.gif.events.publish("gif", "waitingGif");
        })
            .catch(function (reason) { return console.log('Success tts.speak: ' + reason); });
    };
    CallTtsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_7__save_data_save_data__["a" /* SaveDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_6__gif_change_gif_change__["a" /* GifChangeProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_text_to_speech__["a" /* TextToSpeech */]])
    ], CallTtsProvider);
    return CallTtsProvider;
}());

//# sourceMappingURL=call-tts.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_save_data_save_data__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigPage = (function () {
    function ConfigPage(navCtrl, navParams, saveDataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.saveDataProvider = saveDataProvider;
        this.bee = true;
        this.generic = false;
    }
    ConfigPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.saveDataProvider.recoverLocalData("username").then(function (val) {
            _this.username = val;
        });
        this.saveDataProvider.recoverLocalData("password").then(function (val) {
            _this.password = val;
        });
        this.saveDataProvider.recoverLocalData("workspaceId").then(function (val) {
            _this.workspaceId = val;
        });
        this.saveDataProvider.recoverLocalData("token").then(function (val) {
            _this.token = val;
        });
        this.saveDataProvider.recoverLocalData("radio").then(function (val) {
            if (val == "bee") {
                _this.bee = true;
                _this.generic = false;
            }
            else {
                _this.bee = false;
                _this.generic = true;
            }
        });
    };
    ConfigPage.prototype.setCampoValor = function (campo, valor) {
        this.saveDataProvider.saveLocaData(campo, valor);
    };
    ConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-config',template:/*ion-inline-start:"/Users/baldini/git/marketbotapp/src/pages/config/config.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Orchestrator</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list radio-group>\n\n    <ion-grid>\n      <ion-col>\n        <ion-row>\n          <p>Assistente Genérico</p>\n        </ion-row>\n        <ion-item id="radioGeneric">\n          <ion-label>\n            <p>\n              <b>Usar Watson Conversation</b>\n            </p>\n          </ion-label>\n          <ion-radio (click)="setCampoValor(\'radio\', radioGenericTag.value)" checked="{{generic}}" value="generic" #radioGenericTag></ion-radio>\n        </ion-item>\n        <ion-row>\n          <ion-input placeholder="Username" (ionBlur)="setCampoValor(\'username\', usernameTag.value)" value="{{username}}" #usernameTag></ion-input>\n          <!-- <ion-img class="imgQrCode" src="assets/imgs/qr.png"></ion-img> -->\n        </ion-row>\n        <ion-row>\n          <ion-input type="password" placeholder="Password" (ionBlur)="setCampoValor(\'password\', passwordTag.value)" value="{{password}}"\n            #passwordTag></ion-input>\n          <!-- <ion-img class="imgQrCode" src="assets/imgs/qr.png"></ion-img> -->\n        </ion-row>\n        <ion-row>\n          <ion-input placeholder="Workspace ID" (ionBlur)="setCampoValor(\'workspaceId\', workspaceIdTag.value)" value="{{workspaceId}}"\n            #workspaceIdTag></ion-input>\n          <!-- <ion-img class="imgQrCode" src="assets/imgs/qr.png"></ion-img> -->\n        </ion-row>\n        <ion-row id="rowBee">\n          <p>Assistente Tree Lab</p>\n        </ion-row>\n        <ion-item id="radioBee">\n          <ion-label>\n            <p>\n              <b>Talk to MarketBot</b>\n            </p>\n          </ion-label>\n          <ion-radio (click)="setCampoValor(\'radio\', radioBeeTag.value)" checked="{{bee}}" value="bee" #radioBeeTag></ion-radio>\n        </ion-item>\n        <ion-row>\n          <ion-input type="password" placeholder="Token" (ionBlur)="setCampoValor(\'token\', tokenTag.value)" value="{{token}}" #tokenTag></ion-input>\n        </ion-row>\n      </ion-col>\n    </ion-grid>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/baldini/git/marketbotapp/src/pages/config/config.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_save_data_save_data__["a" /* SaveDataProvider */]])
    ], ConfigPage);
    return ConfigPage;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/config/config.module": [
		694,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 213;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallChatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__save_data_save_data__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CallChatProvider = (function () {
    function CallChatProvider(http, saveDataProvider, alertCtrl) {
        var _this = this;
        this.http = http;
        this.saveDataProvider = saveDataProvider;
        this.alertCtrl = alertCtrl;
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Accept': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        this.saveDataProvider.userEmitter.subscribe(function (res) { return _this.username = res; });
        this.saveDataProvider.passwordEmitter.subscribe(function (res) { return _this.password = res; });
        this.saveDataProvider.workspaceIdEmitter.subscribe(function (res) { return _this.workspaceId = res; });
        this.saveDataProvider.targetEmitter.subscribe(function (res) { return _this.target = res; });
        this.setCredentials();
    }
    CallChatProvider.prototype.setChatbot = function (inputParam) {
        console.log("=== Orquestrador ===");
        var html = "https://orchalexa.mybluemix.net/marketbotapp";
        return this.http
            .post(html, inputParam, this.options)
            .map(this.extractData).catch(this.handleError);
    };
    CallChatProvider.prototype.setCredentials = function () {
        var _this = this;
        this.saveDataProvider.recoverLocalData("username").then(function (val) { return _this.username = val; });
        this.saveDataProvider.recoverLocalData("password").then(function (val) { return _this.password = val; });
        this.saveDataProvider.recoverLocalData("workspaceId").then(function (val) { return _this.workspaceId = val; });
        this.saveDataProvider.recoverLocalData("radio").then(function (val) { return _this.target = val; });
    };
    CallChatProvider.prototype.presentAlert = function (errorMsg) {
        var alert = this.alertCtrl.create({
            title: 'Algo não está certo',
            subTitle: errorMsg,
            buttons: [{
                    text: 'Ok',
                    role: 'Ok'
                }]
        });
        alert.present();
    };
    CallChatProvider.prototype.extractData = function (res) {
        console.log("=== extractData   = " + res);
        var body = res.json();
        return body || {};
    };
    CallChatProvider.prototype.handleError = function (error) {
        console.log("=== handleError   = " + error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error);
    };
    CallChatProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_8__save_data_save_data__["a" /* SaveDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], CallChatProvider);
    return CallChatProvider;
}());

//# sourceMappingURL=call-chat.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/baldini/git/marketbotapp/src/pages/home/home.html"*/'\n<ion-header></ion-header>\n\n<ion-content padding no-bounce>\n  <ion-slides #pageSlider options="{overflow: hidden}">\n    <ion-slide class="slideP1">\n      <voice-chat></voice-chat>\n    </ion-slide>\n    <ion-slide class="slideP2">\n      <text-chat></text-chat>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/baldini/git/marketbotapp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallVoiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gif_change_gif_change__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_speech_recognition__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__context_chat_context_chat__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var CallVoiceProvider = (function () {
    function CallVoiceProvider(contextChatProvider, speechRecognition, gif, platform) {
        this.contextChatProvider = contextChatProvider;
        this.speechRecognition = speechRecognition;
        this.gif = gif;
        this.platform = platform;
        this.isRecording = false;
    }
    CallVoiceProvider.prototype.stopListening = function () {
        var _this = this;
        this.speechRecognition.stopListening().then(function () {
            _this.isRecording = false;
            _this.gif.events.publish("gif", "waitingGif");
        });
    };
    CallVoiceProvider.prototype.startListening = function () {
        var _this = this;
        if (this.platform.is('ios')) {
            this.gif.events.publish("gif", "listenGifIOS");
        }
        else {
            this.gif.events.publish("gif", "listenGif");
        }
        var options = {
            // Android only
            language: 'pt-BR',
            showPopup: false // Android only 
        };
        //debugger;
        this.speechRecognition.startListening(options)
            .subscribe(function (matches) {
            if (true) {
            }
            _this.contextChatProvider.setTextUsuario(matches[0], "voice");
            console.log(matches[0]);
        });
        this.isRecording = true;
        if (this.platform.is('ios')) {
            (function () { return __awaiter(_this, void 0, void 0, function () {
                var delay;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            delay = function (time) { return new Promise(function (res) { return setTimeout(function () { return res(); }, time); }); };
                            return [4 /*yield*/, delay(3000)];
                        case 1:
                            _a.sent();
                            this.stopListening();
                            return [2 /*return*/];
                    }
                });
            }); })();
        }
    };
    CallVoiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__context_chat_context_chat__["a" /* ContextChatProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
            __WEBPACK_IMPORTED_MODULE_0__gif_change_gif_change__["a" /* GifChangeProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Platform */]])
    ], CallVoiceProvider);
    return CallVoiceProvider;
}());

//# sourceMappingURL=call-voice.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(367);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_gif_change_gif_change__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_speech_recognition__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_autosize_autosize__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_body_text_chat_body_text_chat__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_config_config__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_text_chat_text_chat__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_call_chat_call_chat__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_voice_chat_voice_chat__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_call_voice_call_voice__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_context_chat_context_chat__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_save_data_save_data__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_call_tts_call_tts__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_media__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_file__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_network__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_text_to_speech__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__directives_autosize_autosize__["a" /* Autosize */],
                __WEBPACK_IMPORTED_MODULE_11__components_body_text_chat_body_text_chat__["a" /* BodyTextChatComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_config_config__["a" /* ConfigPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__components_text_chat_text_chat__["a" /* TextChatComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_voice_chat_voice_chat__["a" /* VoiceChatComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/config/config.module#ConfigPageModule', name: 'ConfigPage', segment: 'config', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__pages_config_config__["a" /* ConfigPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__components_body_text_chat_body_text_chat__["a" /* BodyTextChatComponent */],
                __WEBPACK_IMPORTED_MODULE_16__providers_call_chat_call_chat__["a" /* CallChatProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_call_tts_call_tts__["a" /* CallTtsProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_call_voice_call_voice__["a" /* CallVoiceProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_context_chat_context_chat__["a" /* ContextChatProvider */],
                __WEBPACK_IMPORTED_MODULE_17__components_voice_chat_voice_chat__["a" /* VoiceChatComponent */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_media__["a" /* Media */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
                __WEBPACK_IMPORTED_MODULE_20__providers_save_data_save_data__["a" /* SaveDataProvider */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
                __WEBPACK_IMPORTED_MODULE_0__providers_gif_change_gif_change__["a" /* GifChangeProvider */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_text_to_speech__["a" /* TextToSpeech */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Autosize; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Autosize = (function () {
    function Autosize(element) {
        this.element = element;
    }
    Autosize.prototype.onInput = function (textArea) {
        this.adjust();
    };
    Autosize.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.adjust(); }, 0);
    };
    Autosize.prototype.adjust = function () {
        var textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
        var aux = String(textArea.scrollHeight);
        aux = aux.replace('px', '');
        var height = parseInt(aux);
        if (height <= 110) {
            textArea.style.overflow = 'hidden';
            textArea.style.height = 'auto';
            textArea.style.height = textArea.scrollHeight + "px";
        }
        else {
            textArea.style.overflow = 'scroll';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('input', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HTMLTextAreaElement]),
        __metadata("design:returntype", void 0)
    ], Autosize.prototype, "onInput", null);
    Autosize = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: 'ion-textarea[autosize]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], Autosize);
    return Autosize;
}());

//# sourceMappingURL=autosize.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyTextChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_context_chat_context_chat__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var BodyTextChatComponent = (function () {
    function BodyTextChatComponent(contextChatProvider) {
        this.contextChatProvider = contextChatProvider;
        this.mensagens = [];
    }
    BodyTextChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contextChatProvider.arrayMensagensEmitter
            .subscribe(function (res) { return _this.setArrayMsg(res); });
    };
    BodyTextChatComponent.prototype.changeWords = function (text) {
        text = text.replace(/Bi/g, "Bee");
        text = text.replace(/Triléb/g, "Tree Lab");
        text = text.replace(/Uótson/g, "Watson");
        text = text.replace(/Fhínkin/g, "Thinking");
        text = text.replace(/Startap/g, "Startup");
        text = text.replace(/startaps/g, "startups");
        text = text.replace(/internéchonal bíznis maxiní/g, "International Business Machine");
        return text;
    };
    BodyTextChatComponent.prototype.setArrayMsg = function (msgArray) {
        var _this = this;
        for (var i = 0; i < msgArray.length; i++) {
            msgArray[i].texto = this.changeWords(msgArray[i].texto);
        }
        this.mensagens = msgArray;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var delay;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        delay = function (time) { return new Promise(function (res) { return setTimeout(function () { return res(); }, time); }); };
                        return [4 /*yield*/, delay(10)];
                    case 1:
                        _a.sent();
                        this.updateScroll();
                        return [2 /*return*/];
                }
            });
        }); })();
    };
    BodyTextChatComponent.prototype.updateScroll = function () {
        var element = document.getElementById("bodyChat");
        element.scrollTop = element.scrollHeight;
    };
    BodyTextChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'body-text-chat',template:/*ion-inline-start:"/Users/baldini/git/marketbotapp/src/components/body-text-chat/body-text-chat.html"*/'<div class="container" id="bodyChat">\n\n  <div *ngFor="let msg of mensagens" class="{{msg.pStyle}}">\n    <p>{{msg.texto}}</p>\n  </div>\n\n</div>\n'/*ion-inline-end:"/Users/baldini/git/marketbotapp/src/components/body-text-chat/body-text-chat.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_context_chat_context_chat__["a" /* ContextChatProvider */]])
    ], BodyTextChatComponent);
    return BodyTextChatComponent;
}());

//# sourceMappingURL=body-text-chat.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GifChangeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GifChangeProvider = (function () {
    function GifChangeProvider(events) {
        this.events = events;
    }
    GifChangeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], GifChangeProvider);
    return GifChangeProvider;
}());

//# sourceMappingURL=gif-change.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SaveDataProvider = (function () {
    function SaveDataProvider(storage) {
        this.storage = storage;
        this.userEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.passwordEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.workspaceIdEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.tokenEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.targetEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    SaveDataProvider.prototype.saveLocaData = function (campo, valor) {
        this.storage.set(campo, valor);
        switch (campo) {
            case "username": {
                this.userEmitter.emit(valor);
                break;
            }
            case "password": {
                this.passwordEmitter.emit(valor);
                break;
            }
            case "workspaceId": {
                this.workspaceIdEmitter.emit(valor);
                break;
            }
            case "token": {
                this.tokenEmitter.emit(valor);
                break;
            }
            case "radio": {
                if (valor == "generic") {
                    this.targetEmitter.emit(valor);
                }
                else {
                    this.targetEmitter.emit(valor);
                }
                break;
            }
        }
    };
    SaveDataProvider.prototype.recoverLocalData = function (campo) {
        return this.storage.get(campo);
    };
    SaveDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], SaveDataProvider);
    return SaveDataProvider;
}());

//# sourceMappingURL=save-data.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextChatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gif_change_gif_change__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__call_chat_call_chat__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__call_tts_call_tts__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__save_data_save_data__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContextChatProvider = (function () {
    function ContextChatProvider(callChatProvider, device, saveDataProvider, callTtsProvider, alertCtrl, gif) {
        this.callChatProvider = callChatProvider;
        this.device = device;
        this.saveDataProvider = saveDataProvider;
        this.callTtsProvider = callTtsProvider;
        this.alertCtrl = alertCtrl;
        this.gif = gif;
        this.arrayMensagens = [];
        this.context = {};
        this.arrayMensagensEmitter = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
    }
    ContextChatProvider.prototype.popularChat = function (status, text, type) {
        if (status) {
            var obj = {
                "pStyle": "bubble",
                "type": type,
                "texto": text
            };
            this.arrayMensagens.push(obj);
        }
        else {
            var obj2 = {
                "pStyle": "bubble bubble-alt green",
                "type": type,
                "texto": text
            };
            this.arrayMensagens.push(obj2);
        }
        this.arrayMensagensEmitter.emit(this.arrayMensagens);
    };
    ContextChatProvider.prototype.setTextUsuario = function (text, type) {
        var _this = this;
        var deviceID = this.device.uuid;
        var token = "";
        this.saveDataProvider.recoverLocalData("token").then(function (val) {
            token = val;
            if (type == "voice") {
                _this.gif.events.publish("gif", "classfyingGif");
            }
            _this.popularChat(false, text, type);
            var obj = {
                "input": { "text": text },
                "context": _this.context,
                "user": deviceID,
                "token": token
            };
            _this.callChatProvider.setChatbot(obj).subscribe(function (res) {
                console.log(res);
                _this.popularChat(true, res.output.text[0], "chatBot");
                _this.context = res.context;
                console.log("resposta bot: ", res);
                if (type == "voice") {
                    _this.gif.events.publish("gif", "classfyingGif");
                    _this.callTtsProvider.synthesize(res.output.text[0]);
                }
            }, function (err) {
                var erro = JSON.parse(err._body);
                console.log("teste erro", erro.error);
                _this.presentAlert(erro.error);
            });
        });
    };
    ContextChatProvider.prototype.presentAlert = function (errorMsg) {
        var alert = this.alertCtrl.create({
            title: 'Algo não está certo',
            subTitle: errorMsg,
            buttons: [{
                    text: 'Ok',
                    role: 'Ok'
                }]
        });
        alert.present();
    };
    ContextChatProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__call_chat_call_chat__["a" /* CallChatProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_6__save_data_save_data__["a" /* SaveDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__call_tts_call_tts__["a" /* CallTtsProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__gif_change_gif_change__["a" /* GifChangeProvider */]])
    ], ContextChatProvider);
    return ContextChatProvider;
}());

//# sourceMappingURL=context-chat.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //statusBar.styleDefault();
            statusBar.backgroundColorByHexString("#ffffff");
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/baldini/git/marketbotapp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/baldini/git/marketbotapp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_context_chat_context_chat__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextChatComponent = (function () {
    function TextChatComponent(contextChatProvider) {
        this.contextChatProvider = contextChatProvider;
    }
    TextChatComponent.prototype.setUserMsg = function (msg) {
        if (msg.length > 0) {
            this.contextChatProvider.setTextUsuario(msg, "text");
        }
    };
    TextChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'text-chat',template:/*ion-inline-start:"/Users/baldini/git/marketbotapp/src/components/text-chat/text-chat.html"*/'<div class="container">\n\n  <body-text-chat></body-text-chat>\n</div>\n\n  <div class="row" style="overflow: auto;">\n    <div class="col-md-9">\n      <div class="inputRow">\n        <ion-input class="ionTextarea" rows="1" #userMsg placeholder="Type with MarketBot!"></ion-input>\n      </div>\n    </div>\n\n    <div class="input">\n    <div class="col-md-3">\n      <div class="send">\n        <img src="assets/imgs/ic_send_white_24px.svg" ng-if="userMsg.length != 0" (click)="setUserMsg(userMsg.value); userMsg.value = null">\n      </div>\n    </div>\n  </div>\n  </div>\n'/*ion-inline-end:"/Users/baldini/git/marketbotapp/src/components/text-chat/text-chat.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_context_chat_context_chat__["a" /* ContextChatProvider */]])
    ], TextChatComponent);
    return TextChatComponent;
}());

//# sourceMappingURL=text-chat.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoiceChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_speech_recognition__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_call_voice_call_voice__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_call_tts_call_tts__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_config_config__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_context_chat_context_chat__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_gif_change_gif_change__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var VoiceChatComponent = (function () {
    function VoiceChatComponent(toast, network, statusBar, navCtrl, callVoiceProvider, contextChatProvider, speechRecognition, tts, gif) {
        this.toast = toast;
        this.network = network;
        this.statusBar = statusBar;
        this.navCtrl = navCtrl;
        this.callVoiceProvider = callVoiceProvider;
        this.contextChatProvider = contextChatProvider;
        this.speechRecognition = speechRecognition;
        this.tts = tts;
        this.gif = gif;
        this.listening = true;
        this.isWorking = true;
        this.selectGif("waitingGif");
    }
    VoiceChatComponent_1 = VoiceChatComponent;
    VoiceChatComponent.prototype.displayNetworkUpdate = function (connectionstate) {
        this.toast.create({
            message: "Voce esta  " + connectionstate,
            duration: 3000
        }).present();
    };
    VoiceChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.statusBar.backgroundColorByHexString("#000000");
        this.speechRecognition.hasPermission()
            .then(function (hasPermission) {
            if (!hasPermission) {
                _this.speechRecognition.requestPermission()
                    .then(function () { return console.log('Granted'); }, function () { return console.log('Denied'); });
            }
        });
        this.gif.events
            .subscribe("gif", function (res) { return _this.selectGif(res); });
    };
    VoiceChatComponent.prototype.pushPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_config_config__["a" /* ConfigPage */], {
            type: 'push'
        });
    };
    VoiceChatComponent.prototype.startListening = function () {
        var _this = this;
        this.speechRecognition.hasPermission()
            .then(function (hasPermission) {
            if (!hasPermission) {
                _this.speechRecognition.requestPermission()
                    .then(function () { return console.log('Granted'); }, function () { return console.log('Denied'); });
            }
        });
        this.callVoiceProvider.startListening();
        this.isWorking = false;
        console.log("Start!!!!!!");
    };
    VoiceChatComponent.prototype.stopListening = function () {
        this.callVoiceProvider.stopListening();
        this.isWorking = true;
        console.log("STOP!!!!!!");
    };
    VoiceChatComponent.prototype.initRefresh = function () {
        var _this = this;
        this.refresh();
        this.timeoutId = setInterval(function () { return _this.refresh(); }, 5 * 10);
    };
    VoiceChatComponent.prototype.refresh = function () { };
    VoiceChatComponent.prototype.ionViewDidEnter = function () {
        this.initRefresh();
    };
    VoiceChatComponent.prototype.ionViewDidLeave = function () {
        var _this = this;
        this.stopRefresh();
        this.network.onDisconnect().subscribe(function (data) {
            console.log(data);
            _this.displayNetworkUpdate(data.type);
        }, function (error) { return console.error(error); });
        this.network.onConnect().subscribe(function (data) {
            console.log(data);
            _this.displayNetworkUpdate(data.type);
        }, function (error) { return console.log(error); });
    };
    VoiceChatComponent.prototype.stopRefresh = function () {
        clearInterval(this.timeoutId);
    };
    VoiceChatComponent.prototype.selectGif = function (call) {
        switch (call) {
            case "classfyingGif": {
                this.imgPath = "assets/imgs/watson_think.gif";
                this.tapOption = "Classificando...";
                break;
            }
            case "listenGif": {
                this.imgPath = "assets/imgs/watson_listen.gif";
                this.tapOption = "Ouvindo...";
                break;
            }
            case "listenGifIOS": {
                this.imgPath = "assets/imgs/watson_listen.gif";
                this.tapOption = "Ouvindo. Clique para enviar...";
                break;
            }
            case "speakGif": {
                this.imgPath = "assets/imgs/watson_speak.gif";
                this.tapOption = "Falando...";
                break;
            }
            case "synthesizingGif": {
                this.imgPath = "assets/imgs/watson_think.gif";
                this.tapOption = "Sintetizando...";
                break;
            }
            case "waitingGif": {
                this.imgPath = "assets/imgs/watson_idle.gif";
                this.tapOption = "Clique para falar com o MarketBot!";
                break;
            }
            default: {
                this.imgPath = "assets/imgs/watson_idle.gif";
                this.tapOption = "Clique para falar com o MarketBot!";
                this.listening = true;
                break;
            }
        }
        this.initRefresh();
    };
    VoiceChatComponent = VoiceChatComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'voice-chat',template:/*ion-inline-start:"/Users/baldini/git/marketbotapp/src/components/voice-chat/voice-chat.html"*/'<ion-grid class="gridTela">\n  <ion-row class="gridRowGif">\n    <ion-col>\n      <ion-img #imgGif name="imgGif" class="imgGif" src="{{imgPath}}"></ion-img>\n    </ion-col>\n  </ion-row>\n  <ion-row class="footer" id="footerRow">\n    <ion-col col-1>\n      <!-- <a class="Button" (click)="pushPage()">...</a> -->\n    </ion-col>\n    <ion-col col-10>\n      <a ion-button clear class="Button" (click)="isWorking ? startListening() : stopListening() ">{{tapOption}}</a>\n    </ion-col>\n    <ion-col col-1></ion-col>\n  </ion-row>\n</ion-grid>\n\n\n'/*ion-inline-end:"/Users/baldini/git/marketbotapp/src/components/voice-chat/voice-chat.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [],
            declarations: [
                VoiceChatComponent_1
            ],
            exports: [
                VoiceChatComponent_1
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_call_voice_call_voice__["a" /* CallVoiceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_context_chat_context_chat__["a" /* ContextChatProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_speech_recognition__["a" /* SpeechRecognition */], __WEBPACK_IMPORTED_MODULE_5__providers_call_tts_call_tts__["a" /* CallTtsProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_gif_change_gif_change__["a" /* GifChangeProvider */]])
    ], VoiceChatComponent);
    return VoiceChatComponent;
    var VoiceChatComponent_1;
}());

//# sourceMappingURL=voice-chat.js.map

/***/ })

},[362]);
//# sourceMappingURL=main.js.map