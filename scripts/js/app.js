(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
    {
        "context": " You are a parent considering sending your child to Washington University Nursery School. You’ve learned that the curriculum is play-based and you want to know how learning is incorporated into a play-based context. You have some ideas about how language learning might happen, but are less sure about math. ",
        "question": "Find some examples of how math learning is incorporated at Washington University Nursery School.",
        "tag": "math"
    },
    {
        "context": "You are investigating pre-school options for your 4 year old. Both you and your spouse work, so you need to fully understand what scheduling constraints each option involves. One of your schools of interest is the Washington University Nursery School.",
        "question": "When does school start and end each day? What is the longest period of time that your child can be there?",
        "tag": "school_day"
    },
    {
        "context": "You are investigating pre-school options for your 3.5 year old. You’ve been told that one of the hallmarks of a good program is teachers who have been there for a long time. You want your child to attend in the mornings only.",
        "question": "Which teachers would your child have and how long have they been at the school?",
        "tag": "teacher_tenure"
    },
    {
        "context": "You are starting to look at summer camp options and have heard good things about Washington University Nursery School for young children.",
        "question": "What are the daily camp hours? Are there any extended day opportunities?",
        "tag": "summer_camp"
    },
    {
        "context": "You are investigating pre-school options for your spirited 3 year old and want to understand their approach to discipline.",
        "question": "How do teachers at Washington University approach discipline?",
        "tag": "discipline"
    },
    {
        "context": "Your daughter is in the Teddy Bear class at Washington University Nursery School. She came home this week singing a song in Spanish about shapes, but you are pretty sure that she has some of the words wrong.",
        "question": "What are the correct lyrics?",
        "tag": "spanish_song"
    },
    {
        "context": "It is mid-December and you are thinking about things to do over your daughter's upcoming school break. She is 3 years old and attends the Washington University Nursery School and is in the Teddy Bear classroom. You are planning a trip to the library and want to check out some books that connect with something she is doing in school.",
        "question": "What are some potential book topics that relate to something that is going on in her classroom this week?",
        "tag": "books"
    },
    {
        "context": "You are a parent with a child who has just been accepted to attend as a full time student at the Washington University Nursery School. You want to accept the offer of admission.",
        "question": "Figure out what you need to do at this time to finalize your child’s place at the school.",
        "tag": "admission_2"
    },
    {
        "context": "You are a parent with a child who has just been accepted to attend as a full time student at the Washington University Nursery School. You need to pay one month of tuition as a deposit.",
        "question": "Find out how much one month of tuition is and whether or not it is possible to pay online.",
        "tag": "deposit"
    },
    {
        "context": "You are looking at Nursery Schools for your soon to be 3 year old. He has never been in school or daycare before and you are somewhat worried about the transition. You'd like to ensure that you'll be able to have strong communicationat his new school.",
        "question": "How does the Washington University Nursery School handle communicating with parents?",
        "tag": "communication"
    },
    {
        "context": "You are moving to St. Louis from Beijing and looking for a Pre-K program for your daughter, age 5. She is very close to her friends and you are worried that the move might be hard on her. She may need some extra support from her new teachers learning English, adapting to American culture, and making new friends.",
        "question": "How does the Washington University Nursery School staff approach providing extra help to students who need it?",
        "tag": "help"
    }
]

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('data loaded.');
var urlParams = new URL(window.location.href).searchParams;
exports.urlData = {
    raw: urlParams.toString(),
    assignmentID: urlParams.get('assignmentId'),
    hitID: urlParams.get('hitId'),
    workerID: urlParams.get('workerId'),
    submitTo: urlParams.get('turkSubmitTo'),
};
var Data = /** @class */ (function () {
    function Data(rawMturkURLData) {
        this.logs = {};
        this.data = {};
        this.errors = [];
        this.urlData = rawMturkURLData;
    }
    Data.prototype.serialize = function () {
        return JSON.stringify(this);
    };
    return Data;
}());
exports.Data = Data;
exports.data = new Data(exports.urlData);
Object.assign(window, { data: exports.data });
},{}],3:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("../utils/funcs");
console_wrapper_1.log("event loaded.", 2 /* BASIC */);
function objectToTrackerEvent(obj, action) {
    obj.action = action;
    obj.time = funcs_1.now();
}
exports.objectToTrackerEvent = objectToTrackerEvent;
function isTrackerEvent(obj) {
    return obj.action !== undefined && obj.time !== undefined;
}
exports.isTrackerEvent = isTrackerEvent;
var BaseTrackerEvent = /** @class */ (function () {
    function BaseTrackerEvent(action, eventInitDict) {
        this.custEv = new CustomEvent(action, eventInitDict);
        this.action = action;
        this.time = funcs_1.now();
    }
    Object.defineProperty(BaseTrackerEvent.prototype, "detail", {
        get: function () {
            return this.custEv.detail;
        },
        enumerable: true,
        configurable: true
    });
    return BaseTrackerEvent;
}());
exports.BaseTrackerEvent = BaseTrackerEvent;
// tslint:disable-next-line: max-classes-per-file
var ClickEvent = /** @class */ (function (_super) {
    __extends(ClickEvent, _super);
    function ClickEvent(x, y, id, eventInitDict) {
        var _this = _super.call(this, "click" /* CLICK */, eventInitDict) || this;
        _this.detail.x = x;
        _this.detail.y = y;
        _this.detail.id = id;
        return _this;
    }
    return ClickEvent;
}(BaseTrackerEvent));
exports.ClickEvent = ClickEvent;
// tslint:disable-next-line: max-classes-per-file
var ButtonEvent = /** @class */ (function (_super) {
    __extends(ButtonEvent, _super);
    function ButtonEvent(key, id, eventInitDict) {
        var _this = _super.call(this, "click" /* CLICK */, eventInitDict) || this;
        _this.detail.key = key;
        _this.detail.id = id;
        return _this;
    }
    return ButtonEvent;
}(BaseTrackerEvent));
exports.ButtonEvent = ButtonEvent;
// tslint:disable-next-line: max-classes-per-file
var HistoryEvent = /** @class */ (function (_super) {
    __extends(HistoryEvent, _super);
    function HistoryEvent(url, extra, eventInitDict) {
        var _this = _super.call(this, "history" /* HISTORY */, eventInitDict) || this;
        _this.detail.url = url;
        _this.detail.extra = extra;
        return _this;
    }
    return HistoryEvent;
}(BaseTrackerEvent));
exports.HistoryEvent = HistoryEvent;
},{"../utils/console_wrapper":16,"../utils/funcs":17}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("../utils/console_wrapper");
var event_1 = require("./event");
console_wrapper_1.log("receiver loaded.", 2 /* BASIC */);
var EventReceiver = /** @class */ (function () {
    function EventReceiver() {
        this.map = new Map();
        this.emitter = new EventTarget();
    }
    EventReceiver.prototype.register = function (eventType, callback) {
        this.emitter.addEventListener(eventType, function (event) {
            var trackEv = event
                .detail;
            if (event_1.isTrackerEvent(trackEv) && callback) {
                callback(trackEv);
            }
        });
        if (callback) {
            this.map.set(eventType, callback);
        }
    };
    EventReceiver.prototype.doEvent = function (event) {
        var callback = this.map.get("" + event.action);
        if (callback) {
            callback(event);
        }
    };
    return EventReceiver;
}());
exports.EventReceiver = EventReceiver;
},{"../utils/console_wrapper":16,"./event":3}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("../router/router");
var console_wrapper_1 = require("../utils/console_wrapper");
var history_1 = require("./../router/history");
var document_1 = require("./document");
var elements_1 = require("./elements");
console_wrapper_1.log("banner loaded.", 2 /* BASIC */);
var TopBanner = /** @class */ (function () {
    function TopBanner() {
    }
    TopBanner.show = function () {
        TopBanner.showing = true;
        document_1.D.display(elements_1.Elements.ddUp, true);
        document_1.D.display(elements_1.Elements.ddDown, false);
        document_1.D.display(elements_1.Elements.ddContent, true);
    };
    TopBanner.hide = function () {
        TopBanner.showing = false;
        document_1.D.display(elements_1.Elements.ddDown, true);
        document_1.D.display(elements_1.Elements.ddUp, false);
        document_1.D.display(elements_1.Elements.ddContent, false);
    };
    TopBanner.doDisplayChange = function () {
        TopBanner.showing ? TopBanner.hide() : TopBanner.show();
    };
    TopBanner.setup = function () {
        document_1.D.addEventListener(elements_1.Elements.ddArrow, "click", TopBanner.doDisplayChange);
    };
    TopBanner.showing = true;
    return TopBanner;
}());
exports.TopBanner = TopBanner;
document_1.D.addEventListener("mturk-top-banner-back", "click", function (e) {
    if (history_1.History.canBackward()) {
        router_1.Router.loadWithPathPrefix(history_1.History.backward());
    }
    else {
        alert("There is no page history to go back for at this time!");
    }
});
},{"../router/router":14,"../utils/console_wrapper":16,"./../router/history":13,"./document":6,"./elements":7}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("./../utils/console_wrapper");
console_wrapper_1.log("document loaded.", 2 /* BASIC */);
var D = /** @class */ (function () {
    function D() {
    }
    D.elem = function (elem) {
        if (typeof elem === "string") {
            return D.id(elem);
        }
        else {
            return elem;
        }
    };
    D.display = function (elem, show) {
        elem = D.elem(elem);
        if (show) {
            elem.classList.remove("none");
            elem.classList.add("display");
        }
        else {
            elem.classList.remove("display");
            elem.classList.add("none");
        }
    };
    D.id = function (id) {
        var element = D.doc.getElementById(id);
        if (element === null) {
            throw new Error("Element was not found, id: <" + id + ">.");
        }
        else {
            return element;
        }
    };
    D.claz = function (claz) {
        return D.doc.getElementsByClassName(claz);
    };
    D.tag = function (tag) {
        return D.doc.getElementsByTagName(tag);
    };
    D.image = function (id, url) {
        console_wrapper_1.error(function () { return D.id(id).setAttribute("src", url); });
    };
    D.addEventListener = function (elem, type, listener) {
        elem = this.elem(elem);
        var wrapperFunc = function (e) {
            try {
                listener(e);
            }
            catch (err) {
                console.error(err);
            }
        };
        elem.addEventListener(type, wrapperFunc);
        return wrapperFunc;
    };
    D.each = function (elem, apply) {
        elem = this.elem(elem);
        var children = elem.children;
        for (var i = 0; i < children.length; i++) {
            apply(children[i]);
        }
    };
    D.eachRecur = function (elem, apply) {
        elem = this.elem(elem);
        var children = elem.children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            apply(child);
            D.eachRecur(child, apply);
        }
    };
    D.create = function (tagName, options) {
        return document.createElement(tagName, options);
    };
    D.doc = document;
    return D;
}());
exports.D = D;
},{"./../utils/console_wrapper":16}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("../utils/console_wrapper");
var document_1 = require("./document");
console_wrapper_1.log('element loaded.', 2 /* BASIC */);
/**
 * These are elements that are in every single project. Even if they are not used they should
 * be place in the project and display should be set to none. This simplifies configuration
 * and some common functions and allows less null checks to be performed overall. If the
 * element does not exist at run time an empty div with that id is created and its display
 * is set to none then appended to the body.
 */
/**
 * Attempts to get an element, if unsuccessful, creates div with id and appends to body.
 *
 * @param id - the id of the element to retrieve.
 */
function makeElemIfNotExist(id) {
    var elem;
    try {
        elem = document_1.D.id(id);
    }
    catch (err) {
        elem = document_1.D.create('div');
        elem.id = id;
        elem.style.display = 'none';
        document.body.append(elem);
    }
    return elem;
}
/**
 * Commonly accessed elements, allows for clearer dom manip on these elements.
 */
exports.Elements = {
    document: document_1.D.doc.documentElement,
    wrapper: makeElemIfNotExist('wrapper'),
    htmlLoc: makeElemIfNotExist('html-loc'),
    innerBody: makeElemIfNotExist('inner-body'),
    ddDown: makeElemIfNotExist('mturk-top-banner-drop-down-button'),
    ddUp: makeElemIfNotExist('mturk-top-banner-collapse-button'),
    ddContent: makeElemIfNotExist('mturk-top-banner-drop-down-content'),
    backButton: makeElemIfNotExist('mturk-top-banner-back'),
    ddArrow: makeElemIfNotExist('mturk-top-banner-arrow'),
    mtTopBannerText: makeElemIfNotExist('mturk-top-banner-text'),
    mtScenarioContext: makeElemIfNotExist('scenario_context'),
    mtScenarioQuestion: makeElemIfNotExist('scenario_question'),
    logFileInput: makeElemIfNotExist('mturk-top-banner-drop-down-content-log-file-input'),
    submitForm: makeElemIfNotExist('mturk-submit-form'),
    modal: makeElemIfNotExist('modal'),
};
},{"../utils/console_wrapper":16,"./document":6}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("../utils/console_wrapper");
var elements_1 = require("./../dom/elements");
console_wrapper_1.log('html loc loaded.', 2 /* BASIC */);
var AppEnum;
(function (AppEnum) {
    AppEnum["INFORMATION_FORAGING"] = "information-foraging";
    AppEnum["COGNITIVE_LOAD"] = "cognitive-load";
    AppEnum["GENDER_MAG"] = "gender-mag";
    AppEnum["ERROR"] = "error";
})(AppEnum = exports.AppEnum || (exports.AppEnum = {}));
var ModeEnum;
(function (ModeEnum) {
    ModeEnum["REAL"] = "real";
    ModeEnum["SANDBOX"] = "sandbox";
    ModeEnum["TEST"] = "test";
    ModeEnum["ERROR"] = "error";
})(ModeEnum = exports.ModeEnum || (exports.ModeEnum = {}));
var HTMLLoc = /** @class */ (function () {
    function HTMLLoc() {
    }
    HTMLLoc.setup = function () {
        HTMLLoc.app = HTMLLoc.elem.dataset.app || AppEnum.ERROR;
        HTMLLoc.mode =
            HTMLLoc.elem.dataset.mode || ModeEnum.ERROR;
        HTMLLoc.scenario = HTMLLoc.elem.dataset.scenario || 'error';
    };
    HTMLLoc.elem = elements_1.Elements.htmlLoc;
    return HTMLLoc;
}());
exports.HTMLLoc = HTMLLoc;
},{"../utils/console_wrapper":16,"./../dom/elements":7}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("./../utils/console_wrapper");
var document_1 = require("./document");
var elements_1 = require("./elements");
console_wrapper_1.log('modal loaded.', 2 /* BASIC */);
var Modal = /** @class */ (function () {
    function Modal() {
    }
    Modal.display = function (src) {
        Modal.elem.setAttribute('style', "left: " + Math.round(window.pageXOffset) + "px; top: " + Math.round(window.pageYOffset) + "px;");
        Modal.elem.classList.replace('hide-modal', 'show-modal');
        document_1.D.each(Modal.elem, function (node) {
            node.src = src;
        });
        document.body.classList.add('noscroll');
    };
    Modal.hide = function () {
        Modal.elem.classList.replace('show-modal', 'hide-modal');
        document_1.D.each(Modal.elem, function (node) {
            node.src = '';
        });
        document.body.classList.remove('noscroll');
    };
    Modal.elem = elements_1.Elements.modal;
    return Modal;
}());
exports.Modal = Modal;
document_1.D.addEventListener(Modal.elem, 'click', function (e) {
    Modal.hide();
});
document_1.D.each(Modal.elem, function (node) {
    document_1.D.addEventListener(node, 'click', function (e) {
        e.preventDefault();
    });
});
},{"./../utils/console_wrapper":16,"./document":6,"./elements":7}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("./../utils/funcs");
console_wrapper_1.log('scroll loaded.', 2 /* BASIC */);
/**
 * Linear implementation of scrolling.
 * Follows the singleton pattern, call do to start a scroll operation.
 *
 * If a scroll is called when another scroll has already begun an
 * error will be thrown, but the first scroll will continue until completion.
 */
var Scroll = /** @class */ (function () {
    function Scroll(endPos, duration, complete) {
        this.endPos = endPos;
        this.duration = duration;
        this.complete = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            document.dispatchEvent(new CustomEvent('scroll'));
            complete(args);
        };
    }
    Scroll.callback = function (endPos, duration, complete) {
        if (duration === void 0) { duration = 200; }
        if (complete === void 0) { complete = funcs_1.noop; }
        if (Scroll.running) {
            throw new Error('Cannot make multiple calls to scroll at the same time.');
        }
        Scroll.running = true;
        var oldComplete = complete;
        complete = function () {
            Scroll.running = false;
            console_wrapper_1.error(oldComplete);
        };
        this.instance.update(endPos, duration, complete).attemptScroll();
    };
    Scroll.promise = function (endPos, duration) {
        var _this = this;
        if (duration === void 0) { duration = 200; }
        if (Scroll.running) {
            throw new Error('Cannot make multiple calls to scroll at the same time.');
        }
        Scroll.running = true;
        return new Promise(function (resolve, reject) {
            try {
                var runResolver = function () {
                    Scroll.running = false;
                    resolve();
                };
                _this.instance
                    .update(endPos, duration, runResolver)
                    .attemptScroll();
            }
            catch (err) {
                Scroll.running = false;
                reject(err);
            }
        });
    };
    Object.defineProperty(Scroll, "isRunning", {
        get: function () {
            return Scroll.running;
        },
        enumerable: true,
        configurable: true
    });
    Scroll.prototype.update = function (endPos, duration, complete) {
        this.endPos = endPos;
        this.duration = duration;
        this.complete = complete;
        return this;
    };
    Scroll.prototype.calcScrollAmount = function () {
        var curTime = funcs_1.now();
        var steps = Math.max(1, (this.duration - curTime) / Scroll.STEP_IN_MS);
        var curPos = window.pageYOffset;
        return Math.ceil((this.endPos - curPos) / steps);
    };
    Scroll.prototype.scroll = function () {
        window.scroll(0, this.calcScrollAmount());
        if (window.pageYOffset === this.endPos) {
            this.complete();
        }
        else {
            requestAnimationFrame(this.scroll);
        }
    };
    Scroll.prototype.attemptScroll = function () {
        if ('requestAnimationFrame' in window === false) {
            window.scroll(0, this.endPos);
        }
        this.scroll();
    };
    Scroll.STEP_IN_MS = 17;
    Scroll.running = false;
    Scroll.instance = new Scroll(0, 0, funcs_1.noop);
    return Scroll;
}());
exports.Scroll = Scroll;
},{"../utils/console_wrapper":16,"./../utils/funcs":17}],11:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var funcs_1 = require("../utils/funcs");
var data_1 = require("./../data-log/data");
var console_wrapper_1 = require("./../utils/console_wrapper");
var q_params_1 = require("./../utils/q_params");
var document_1 = require("./document");
var elements_1 = require("./elements");
console_wrapper_1.log('submit form loaded.', 2 /* BASIC */);
var k = 'NcF2WRkUbf5tzj4bIvI981FqmS6pMlO83g2j7u5R';
var gate = 'https://2ykopq1oha.execute-api.us-east-1.amazonaws.com/PROD/logs';
var AllowSubmissionDefault = {
    allow: function () { return null; },
    preSubmit: funcs_1.noop,
};
var SubmitForm = /** @class */ (function () {
    function SubmitForm() {
    }
    SubmitForm.setup = function (allowSubmission) {
        var _this = this;
        if (allowSubmission === void 0) { allowSubmission = AllowSubmissionDefault; }
        SubmitForm.submitFunc = function (event) { return __awaiter(_this, void 0, void 0, function () {
            var allowed, qp, resp, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        event.preventDefault();
                        allowed = allowSubmission.allow();
                        if (!(allowed === null)) return [3 /*break*/, 5];
                        qp = new URL(window.location.href).searchParams;
                        data_1.data.urlData.raw = window.location.href;
                        data_1.data.urlData.assignmentID = qp.get('assignmentId');
                        data_1.data.urlData.hitID = qp.get('hitId');
                        data_1.data.urlData.workerID = qp.get('workerId');
                        data_1.data.urlData.submitTo =
                            qp.get('turkSubmitTo') + 'mturk/externalSubmit';
                        if (data_1.data.urlData.assignmentID !== null) {
                            document_1.D.id('assignment-id').value =
                                data_1.data.urlData.assignmentID;
                        }
                        if (data_1.data.urlData.hitID !== null) {
                            document_1.D.id('hit-id').value =
                                data_1.data.urlData.hitID;
                        }
                        elements_1.Elements.submitForm.action = data_1.data.urlData
                            .submitTo;
                        allowSubmission.preSubmit();
                        return [4 /*yield*/, fetch(gate, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'x-api-key': k,
                                },
                                body: JSON.stringify({
                                    sandbox: q_params_1.params.sandbox,
                                    wustl_key: q_params_1.params.wustl_key,
                                    project: q_params_1.params.project,
                                    iteration: q_params_1.params.iteration,
                                    tag: q_params_1.params.tag,
                                    assignmentID: data_1.data.urlData.assignmentID,
                                    hitID: data_1.data.urlData.hitID,
                                    workerID: data_1.data.urlData.workerID,
                                    log: data_1.data.serialize(),
                                }),
                            })];
                    case 1:
                        resp = _e.sent();
                        console.log(resp.status);
                        _b = (_a = console).log;
                        return [4 /*yield*/, resp.json()];
                    case 2:
                        _b.apply(_a, [_e.sent()]);
                        if (!(resp.status !== 200)) return [3 /*break*/, 4];
                        _c = alert;
                        _d = 'You made a bad request with your submission. The server thinks that you made this error: ';
                        return [4 /*yield*/, resp.json()];
                    case 3:
                        _c.apply(void 0, [_d +
                                (_e.sent()).error]);
                        return [2 /*return*/];
                    case 4:
                        SubmitForm.elem.removeEventListener('submit', SubmitForm.submitFunc);
                        SubmitForm.elem.submit();
                        return [3 /*break*/, 6];
                    case 5:
                        alert(allowed);
                        _e.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        SubmitForm.elem.addEventListener('submit', SubmitForm.submitFunc);
    };
    SubmitForm.elem = elements_1.Elements.submitForm;
    SubmitForm.allowSubmitDefault = { allow: function () { return true; }, preSubmit: funcs_1.noop };
    return SubmitForm;
}());
exports.SubmitForm = SubmitForm;
},{"../utils/funcs":17,"./../data-log/data":2,"./../utils/console_wrapper":16,"./../utils/q_params":20,"./document":6,"./elements":7}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var banner_1 = require("./banner");
var html_loc_1 = require("./html_loc");
var TrackerElements = /** @class */ (function () {
    function TrackerElements() {
    }
    TrackerElements.setupTrackerElements = function () {
        // setup dom elements
        banner_1.TopBanner.setup();
        html_loc_1.HTMLLoc.setup();
    };
    return TrackerElements;
}());
exports.TrackerElements = TrackerElements;
},{"./banner":5,"./html_loc":8}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tracker_1 = require("./../tracker/tracker");
function newHistoryEntry(currURL, hasPrevURL, prevEntry, extra) {
    tracker_1.Tracker.getEventDispatchFunc('history')({ url: currURL, extra: extra });
    return {
        currURL: currURL,
        hasPrevURL: hasPrevURL,
        prevEntry: prevEntry,
        extra: extra,
        nextEntries: [],
    };
}
var History = /** @class */ (function () {
    function History() {
    }
    History.forward = function (url, extra) {
        var histEnt = newHistoryEntry(url, true, History.currhistory, extra);
        History.currhistory.nextEntries.push(histEnt);
        History.currhistory = histEnt;
        return url;
    };
    History.canBackward = function () {
        var _a, _b;
        return (History.currhistory.hasPrevURL &&
            !((_b = (_a = History.currhistory.prevEntry) === null || _a === void 0 ? void 0 : _a.extra) === null || _b === void 0 ? void 0 : _b.wrapper));
    };
    History.backward = function () {
        if (!History.canBackward()) {
            throw new Error('Cannot go back any further.');
        }
        console.log(History.currhistory.prevEntry);
        var prevEntry = History.currhistory.prevEntry;
        var nextURL = prevEntry.currURL;
        var histEnt = newHistoryEntry(nextURL, prevEntry.hasPrevURL, prevEntry.prevEntry, { back: true });
        History.currhistory = histEnt;
        return nextURL;
    };
    History.setup = function (url, extra) {
        History.firstHistory = newHistoryEntry(url, false, undefined, extra);
        History.currhistory = History.firstHistory;
    };
    return History;
}());
exports.History = History;
window.h = History;
},{"./../tracker/tracker":15}],14:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("../dom/document");
var elements_1 = require("../dom/elements");
var modal_1 = require("../dom/modal");
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("../utils/funcs");
var html_loader_1 = require("../utils/html_loader");
var history_1 = require("./history");
console_wrapper_1.log('router loaded.', 2 /* BASIC */);
function testOn(elem, config) {
    return (elem.tagName === config.module &&
        (config.mode === 1 /* ON */ ||
            config.mode === 2 /* STANDARD_ALLOWANCES */));
}
function testAllowance(config) {
    return config.mode === 2 /* STANDARD_ALLOWANCES */;
}
var Router = /** @class */ (function () {
    function Router() {
    }
    Router.configure = function (configs, pathPrefix) {
        configs.forEach(function (config) {
            Router.configs.set(config.module, Router.upgradeConfig(config));
        });
        Router.pathPrefix = pathPrefix;
    };
    Router.setup = function (elem) {
        document_1.D.eachRecur(elem, function (node) {
            var e_1, _a;
            try {
                for (var _b = __values(Router.configs.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var config = _c.value;
                    if (testOn(node, config)) {
                        config.setup(config, node);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    };
    Router.STANDARD_LINK_LISTENER = function (e) {
        return console_wrapper_1.error(function () {
            e.preventDefault();
            var target = e.target;
            var url = target.href;
            history_1.History.forward(Router.getPathName(url));
            var ret = html_loader_1.HTMLLoader.loadURL(url, elements_1.Elements.htmlLoc);
            window.dispatchEvent(new CustomEvent('newPageLoad'));
            return ret;
        });
    };
    Router.ON_COMPLETE_SLL = function (post) {
        var _this = this;
        return function (e) {
            console_wrapper_1.error(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Router.STANDARD_LINK_LISTENER(e)];
                        case 1:
                            _a.sent();
                            post(e);
                            return [2 /*return*/];
                    }
                });
            }); });
        };
    };
    Router.IMAGE_LINK_LISTENER = function (e) {
        return console_wrapper_1.error(function () {
            e.preventDefault();
        });
    };
    Router.FORM_OFF_LISTENER = function (e) {
        e.preventDefault();
        console.error('All forms except for the one in the top header are inactive.');
    };
    Router.defaultAllowancesOn = function () {
        Router.registerAllowance({ regex: Router.EMPTY, func: Router.EMPTY_RESPONDER }, { regex: Router.HASH_TAGS, func: Router.HASH_TAG_RESPONDER }, { regex: Router.AT_SYMBOL, func: Router.AT_SYMBOL_RESPONDER });
    };
    Router.defaultAllowancesOff = function () {
        Router.unregisterAllowance(Router.EMPTY, Router.HASH_TAGS, Router.AT_SYMBOL);
    };
    Router.registerAllowance = function () {
        var regexs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            regexs[_i] = arguments[_i];
        }
        regexs.forEach(function (regex) {
            return Router.linkAllowances.set(regex.regex, regex.func);
        });
    };
    Router.unregisterAllowance = function () {
        var regexs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            regexs[_i] = arguments[_i];
        }
        regexs.forEach(function (regex) { return Router.linkAllowances.delete(regex); });
    };
    Router.clearAllowances = function () {
        Router.linkAllowances.clear();
    };
    Router.load = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        history_1.History.forward(Router.getPathName(url));
                        return [4 /*yield*/, html_loader_1.HTMLLoader.loadURL(url, elements_1.Elements.htmlLoc)];
                    case 1:
                        ret = _a.sent();
                        window.dispatchEvent(new CustomEvent('newPageLoad'));
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    Router.loadWithPathPrefix = function (page) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                ret = html_loader_1.HTMLLoader.loadURL(Router.pathPrefix + page, elements_1.Elements.htmlLoc);
                window.dispatchEvent(new CustomEvent('newPageLoad'));
                return [2 /*return*/, ret];
            });
        });
    };
    Router.upgradeConfig = function (config) {
        return {
            module: config.module,
            mode: config.mode,
            setup: Router.SetupFunctions[config.module],
        };
    };
    Router.getPathName = function (url) {
        var ret = Router.pathRegex.exec(url);
        return ret === null ? url : ret.length > 1 ? ret[1] : url;
    };
    Router.HASH_TAGS = new RegExp('#');
    Router.EMPTY = new RegExp('^$');
    Router.AT_SYMBOL = new RegExp('@');
    Router.HASH_TAG_RESPONDER = funcs_1.noop;
    Router.EMPTY_RESPONDER = function (event) { return event.preventDefault(); };
    Router.AT_SYMBOL_RESPONDER = function (event) {
        return event.preventDefault();
    };
    Router.pathPrefix = '';
    Router.SetupFunctions = {
        A: function (config, elem) {
            var aNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_1 = true;
                var href_1 = aNode.href;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = regex.test(href_1);
                    passesRegexTest_1 = passesRegexTest_1 && !test;
                    if (test) {
                        document_1.D.addEventListener(elem, 'click', func);
                    }
                });
                if (passesRegexTest_1) {
                    if (href_1.substr(href_1.length - 3) === 'pdf') {
                        document_1.D.addEventListener(elem, 'click', function (e) {
                            e.preventDefault();
                            modal_1.Modal.display(href_1);
                        });
                    }
                    else {
                        document_1.D.addEventListener(elem, 'click', function (e) {
                            return Router.STANDARD_LINK_LISTENER(e);
                        });
                    }
                }
            }
            else {
                document_1.D.addEventListener(elem, 'click', function (e) {
                    return Router.STANDARD_LINK_LISTENER(e);
                });
            }
        },
        IMG: function (config, elem) {
            var imgNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_2 = true;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = !regex.test(imgNode.src);
                    passesRegexTest_2 = passesRegexTest_2 && test;
                    if (test) {
                        document_1.D.addEventListener(elem, 'click', func);
                    }
                });
                if (passesRegexTest_2) {
                    document_1.D.addEventListener(elem, 'click', function (e) {
                        return Router.IMAGE_LINK_LISTENER(e);
                    });
                }
            }
            else {
                document_1.D.addEventListener(elem, 'click', function (e) {
                    return Router.IMAGE_LINK_LISTENER(e);
                });
            }
        },
        FORM: function (config, elem) {
            var formNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_3 = true;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = !regex.test(formNode.src);
                    passesRegexTest_3 = passesRegexTest_3 && test;
                    if (test) {
                        document_1.D.addEventListener(elem, 'click', func);
                    }
                });
                if (passesRegexTest_3) {
                    document_1.D.addEventListener(elem, 'submit', Router.FORM_OFF_LISTENER);
                }
            }
            else {
                document_1.D.addEventListener(elem, 'submit', Router.FORM_OFF_LISTENER);
            }
        },
    };
    Router.configs = new Map();
    Router.linkAllowances = new Map();
    Router.pathRegex = /\/([\w]+.html)/;
    return Router;
}());
exports.Router = Router;
},{"../dom/document":6,"../dom/elements":7,"../dom/modal":9,"../utils/console_wrapper":16,"../utils/funcs":17,"../utils/html_loader":18,"./history":13}],15:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var event_1 = require("../data-log/event");
var receiver_1 = require("../data-log/receiver");
var elements_1 = require("../dom/elements");
var tracker_elems_1 = require("../dom/tracker_elems");
var console_wrapper_1 = require("../utils/console_wrapper");
var data_1 = require("./../data-log/data");
var submit_form_1 = require("./../dom/submit_form");
console_wrapper_1.log('tracker loaded.', 2 /* BASIC */);
var Tracker = /** @class */ (function () {
    function Tracker() {
    }
    Tracker.loadScenario = function (scen) {
        var sub = scen.context;
        if (sub.length > 50) {
            sub = sub.substring(0, 50);
            var inds = [
                sub.lastIndexOf(' '),
                sub.lastIndexOf('.'),
                sub.lastIndexOf(','),
                sub.lastIndexOf('?'),
                sub.lastIndexOf('!'),
            ];
            var ind = Math.max.apply(Math, __spread(inds));
            sub = sub.substring(0, ind) + '...';
        }
        elements_1.Elements.mtTopBannerText.innerText = sub;
        elements_1.Elements.mtScenarioContext.innerText = scen.context;
        elements_1.Elements.mtScenarioQuestion.innerText = scen.question;
        elements_1.Elements.htmlLoc.dataset.task = scen.tag;
    };
    Tracker.start = function (config) {
        console_wrapper_1.setDebugLevel(config.debugLevel);
        // configure tracker specific elements
        tracker_elems_1.TrackerElements.setupTrackerElements();
        submit_form_1.SubmitForm.setup(config.allowSubmission);
        data_1.data.data.task = elements_1.Elements.htmlLoc.dataset.task;
        config.setup();
    };
    Tracker.registerEvent = function (eventType) {
        data_1.data.logs[eventType] = [];
        this.receiver.register(eventType, function (event) {
            data_1.data.logs[eventType].push(event);
        });
        return this.getEventDispatchFunc(eventType);
    };
    Tracker.getEventDispatchFunc = function (eventType) {
        var _this = this;
        return function (evData) {
            if (typeof evData === 'object') {
                if (!event_1.isTrackerEvent(evData)) {
                    event_1.objectToTrackerEvent(evData, eventType);
                }
                _this.receiver.doEvent(evData);
            }
        };
    };
    Tracker.attachData = function (key, attribute) {
        data_1.data.data[key] = attribute;
    };
    Tracker.computeAttribute = function (name, compute) {
        data_1.data.data[name] = compute(data_1.data.data[name]);
    };
    Tracker.lastPos = { x: 0, y: 0, time: 0 };
    Tracker.receiver = new receiver_1.EventReceiver();
    return Tracker;
}());
exports.Tracker = Tracker;
},{"../data-log/event":3,"../data-log/receiver":4,"../dom/elements":7,"../dom/tracker_elems":12,"../utils/console_wrapper":16,"./../data-log/data":2,"./../dom/submit_form":11}],16:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./../data-log/data");
log("console wrapper loaded.", 2 /* BASIC */);
function error(func) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, errorHO(func)()];
        });
    });
}
exports.error = error;
function errorHO(func) {
    var _this = this;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, func(args)];
                }
                catch (error) {
                    data_1.data.errors.push(error);
                    console.error(error);
                }
                return [2 /*return*/];
            });
        });
    };
}
exports.errorHO = errorHO;
var debugLevel = 2 /* BASIC */;
function setDebugLevel(level) {
    debugLevel = level;
}
exports.setDebugLevel = setDebugLevel;
function log(message, importance) {
    if (debugLevel >= importance) {
        console.log(message);
    }
}
exports.log = log;
},{"./../data-log/data":2}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("./console_wrapper");
console_wrapper_1.log("funcs loaded.", 2 /* BASIC */);
// tslint:disable-next-line: no-empty
function noop() { }
exports.noop = noop;
function now() {
    return new Date().getTime();
}
exports.now = now;
},{"./console_wrapper":16}],18:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("../dom/document");
var console_wrapper_1 = require("./console_wrapper");
var funcs_1 = require("./funcs");
console_wrapper_1.log('html loader loaded.', 2 /* BASIC */);
var HTMLLoader = /** @class */ (function () {
    function HTMLLoader() {
    }
    HTMLLoader.finish = function () {
        HTMLLoader.finished = true;
        HTMLLoader.flattenTSLoadTags();
    };
    HTMLLoader.isFinished = function () {
        return HTMLLoader.finished;
    };
    HTMLLoader.cacheHTML = function (name, content) {
        if (HTMLLoader.finished) {
            throw new Error('Cannot cache new HTML entities after the application has been started.');
        }
        var tsl = document.createElement('ts-load');
        tsl.dataset.name = name;
        tsl.innerHTML = content;
        this.CACHE[name] = tsl;
    };
    HTMLLoader.registerPostLoadFunc = function (func) {
        console_wrapper_1.log('regsiter post load function', 3 /* DETAILED */);
        HTMLLoader.postLoadFunc = func;
    };
    HTMLLoader.load = function (html, elem) {
        return new Promise(function (resolve, reject) {
            try {
                console_wrapper_1.log('begin load', 3 /* DETAILED */);
                var context = document_1.D.elem(elem);
                var range = document.createRange();
                range.selectNodeContents(context);
                var frag = range.createContextualFragment(html);
                HTMLLoader.removeTagsFromDocumentFragment(frag, 'script');
                HTMLLoader.loadAllCachedElements(frag);
                context.innerHTML = '';
                context.appendChild(frag);
                console_wrapper_1.log('end load', 3 /* DETAILED */);
                HTMLLoader.postLoadFunc();
                resolve(true);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    HTMLLoader.loadURL = function (url, elem) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = HTMLLoader).load;
                        return [4 /*yield*/, HTMLLoader.getHTML(url)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), elem])];
                }
            });
        });
    };
    HTMLLoader.getHTML = function (url) {
        return new Promise(function (resolve, reject) {
            try {
                console_wrapper_1.log('begin request', 3 /* DETAILED */);
                var request_1 = new XMLHttpRequest();
                request_1.open('GET', url, true);
                request_1.send(null);
                request_1.onreadystatechange = function () {
                    if (request_1.readyState === 4) {
                        console_wrapper_1.log('resolve request', 3 /* DETAILED */);
                        resolve(request_1.responseText);
                    }
                };
            }
            catch (err) {
                reject(err);
            }
        });
    };
    HTMLLoader.removeTagsFromDocumentFragment = function (frag, tagName) {
        frag.querySelectorAll(tagName).forEach(function (tag) { return frag.removeChild(tag); });
    };
    HTMLLoader.flattenTSLoadTags = function () {
        console_wrapper_1.log('Flattening', 3 /* DETAILED */);
        var s = new Set();
        Object.keys(HTMLLoader.CACHE).forEach(function (name) {
            return (HTMLLoader.CACHE[name] = HTMLLoader.flattenTSLoadTag(HTMLLoader.getCachedContent(name), s, 0));
        });
    };
    HTMLLoader.multipleTabs = function (n) {
        var ret = '';
        for (var i = 0; i < n; i++) {
            ret += '\t';
        }
        return ret;
    };
    HTMLLoader.flattenTSLoadTag = function (elem, flattened, count) {
        var tabs = HTMLLoader.multipleTabs(count);
        if (count > 100) {
            alert('Check the console, an error has occurred.');
            throw new Error('It seems like you might have infinitely recursively nested tags.' +
                '\nHere are all of the tags that have been flattened so far: ' +
                flattened +
                '\nHere is the name of the current element: ' +
                elem.getAttribute('data-name'));
        }
        var name = elem.getAttribute('data-name');
        if (name === null) {
            return null;
        }
        var content = HTMLLoader.getCachedContent(name);
        if (content === null) {
            return null;
        }
        if (flattened.has(name)) {
            return content;
        }
        content.querySelectorAll('script').forEach(function (e) { return e.remove(); });
        content.querySelectorAll('ts-load').forEach(function (e) {
            var child = HTMLLoader.flattenTSLoadTag(e, flattened, count + 1);
            if (child !== null) {
                e.replaceWith(child);
            }
        });
        flattened.add(name);
        return content;
    };
    HTMLLoader.getCachedContent = function (name) {
        if (name === undefined || name === null) {
            return null;
        }
        var content = HTMLLoader.CACHE[name];
        if (content === undefined || content === null) {
            return null;
        }
        return content.cloneNode(true);
    };
    HTMLLoader.loadAllCachedElements = function (frag) {
        frag.querySelectorAll('ts-load').forEach(function (elem) {
            var name = elem.getAttribute('data-name');
            var content = HTMLLoader.getCachedContent(name);
            if (content != null) {
                elem.replaceWith(content);
            }
        });
    };
    HTMLLoader.CACHE = {};
    HTMLLoader.finished = false;
    HTMLLoader.postLoadFunc = funcs_1.noop;
    return HTMLLoader;
}());
exports.HTMLLoader = HTMLLoader;
},{"../dom/document":6,"./console_wrapper":16,"./funcs":17}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var elements_1 = require("../dom/elements");
var document_1 = require("./../dom/document");
var console_wrapper_1 = require("./console_wrapper");
console_wrapper_1.log("id generator loaded", 2 /* BASIC */);
var IDGenerator = /** @class */ (function () {
    function IDGenerator() {
    }
    IDGenerator.reset = function () {
        IDGenerator.idCount = 0;
    };
    Object.defineProperty(IDGenerator, "next", {
        get: function () {
            IDGenerator.idCount += 1;
            return IDGenerator.prefix + IDGenerator.idCount;
        },
        enumerable: true,
        configurable: true
    });
    IDGenerator.applyID = function (elem) {
        elem.id = elem.id ? elem.id : IDGenerator.next;
    };
    /**
     * Recursively adds ids to all elements that are below the given
     * element in the heirarchy.
     *
     * @param elem - the element to start applying ids to its children.
     *                  Will not apply an id to this element.
     */
    IDGenerator.applyRecur = function (elem) {
        document_1.D.eachRecur(elem, this.applyID);
    };
    /**
     * Attaches ids to all html elements in the target location in the DOM that do not have ids.
     */
    IDGenerator.attachIdsToAllElements = function () {
        IDGenerator.applyRecur(elements_1.Elements.htmlLoc);
    };
    IDGenerator.idCount = 0;
    IDGenerator.prefix = "auto_gen_id_unq_";
    return IDGenerator;
}());
exports.IDGenerator = IDGenerator;
},{"../dom/elements":7,"./../dom/document":6,"./console_wrapper":16}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qParams = new URL(window.location.href).searchParams;
exports.params = {
    wustl_key: '',
    sandbox: false,
    project: '',
    iteration: 0,
    tag: '',
};
try {
    qParams.forEach(console.log);
    if (['wustl_key', 'sandbox', 'project', 'iteration', 'tag'].every(function (key) {
        console.log('key: ' + qParams.has(key));
        return qParams.has(key);
    })) {
        exports.params.wustl_key = qParams.get('wustl_key');
        exports.params.sandbox = qParams.get('sandbox') === 'true';
        exports.params.project = qParams.get('project');
        exports.params.iteration = parseInt(qParams.get('iteration'), 10);
        exports.params.tag = qParams.get('tag');
    }
    else {
        console.log('missing query params');
        alert('This HIT is missing neccessary metadata, sorry for the inconvenience. Please contact the Requester as this is not intended to happen.');
    }
}
catch (e) {
    console.log(e);
    alert(e);
    alert('This HIT is broken, sorry for the inconvenience. Please contact the Requester as this is not intended to happen.');
}
},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("./console_wrapper");
console_wrapper_1.log("ready loaded", 2 /* BASIC */);
var ready = false;
var resolveFunc;
var rejectFunc;
var readyPromise = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    rejectFunc = reject;
});
document.addEventListener("DOMContentLoaded", function () {
    console_wrapper_1.log("document is ready", 3 /* DETAILED */);
    ready = true;
    resolveFunc(true);
});
function isReady() {
    return ready;
}
exports.isReady = isReady;
function waitUntilReady() {
    return ready ? Promise.resolve(true) : readyPromise;
}
exports.waitUntilReady = waitUntilReady;
},{"./console_wrapper":16}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line: no-var-requires
exports.scenarios = require('./../../../../scenarios/scenarios.json');
window.scenarios = exports.scenarios;
},{"./../../../../scenarios/scenarios.json":1}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("./../core/dom/document");
var Accordion = /** @class */ (function () {
    function Accordion(outer) {
        var _this = this;
        this.outer = outer;
        document_1.D.addEventListener(outer, "click", function () {
            /* Toggle between adding and removing the "active" class,
                      to highlight the button that controls the panel */
            _this.outer.classList.toggle("active");
            /* Toggle between hiding and showing the active panel */
            var panel = _this.outer.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            }
            else {
                panel.style.display = "block";
            }
        });
    }
    Accordion.setupAll = function () {
        Accordion.discardAll();
        var accordions = document_1.D.claz("accordion");
        for (var accIndex = 0; accIndex < accordions.length; ++accIndex) {
            var elem = accordions.item(accIndex);
            if (elem == null) {
                continue;
            }
            Accordion.accordions.push(new Accordion(elem));
        }
    };
    Accordion.discardAll = function () {
        Accordion.accordions = [];
    };
    Accordion.accordions = [];
    return Accordion;
}());
exports.Accordion = Accordion;
},{"./../core/dom/document":6}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function doSomething() {
    console.log("Put some code in here!");
}
exports.doSomething = doSomething;
},{}],25:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var html_loader_1 = require("../core/utils/html_loader");
var accordion_1 = require("./accordion");
var do_something_1 = require("./do-something");
var html_imports_1 = require("./html-imports");
var slideshow_1 = require("./slideshow");
// Put all function calls that need to be made on every page load inside the setupAll function body.
function PutStudentPageLoadOperationsInsideThisStudentBody() {
    // TODO: Put all operations that you want to happen on ever page load in this function.
    // For example you could write: Sticky.setup()
    do_something_1.doSomething();
}
exports.PutStudentPageLoadOperationsInsideThisStudentBody = PutStudentPageLoadOperationsInsideThisStudentBody;
function setupAll() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 100); })];
                case 1:
                    _a.sent();
                    console.log('reloading');
                    slideshow_1.Slideshow.setupAll();
                    accordion_1.Accordion.setupAll();
                    PutStudentPageLoadOperationsInsideThisStudentBody();
                    console.log('reloaded');
                    return [2 /*return*/];
            }
        });
    });
}
exports.setupAll = setupAll;
html_imports_1.itemsToCache.forEach(function (item) {
    html_loader_1.HTMLLoader.cacheHTML(item.name, item.content);
});
window.HTMLLoader = html_loader_1.HTMLLoader;
console.log('dynamic-dom loaded');
// Do not touch this line, needed to reinitialize code in the dynamic-dom.ts setupAll function
window.addEventListener('newPageLoad', function () { return setupAll(); });
},{"../core/utils/html_loader":18,"./accordion":23,"./do-something":24,"./html-imports":26,"./slideshow":29}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// An HTMLContent object should look like the following:
// {
//     name: 'footer',
//     content: require('./html/footer.html'),
// }
// Then you can reference that content in your html using the following tag with the corresponding name attribute.
// <ts-load data-name="header"></ts-load>
// You can specify as many as you want inside of the array and they will all be bundled up with your website.
// Make sure to make a corresponding html file in the html file folder for each element you specify.
exports.itemsToCache = [
    // Feel free to change the content inside any of the html files in the html file folder to suit your needs.
    {
        name: 'header',
        content: require('./html/header.html'),
    },
    {
        name: 'footer',
        content: require('./html/footer.html'),
    },
];
},{"./html/footer.html":27,"./html/header.html":28}],27:[function(require,module,exports){
module.exports = "<footer id=\"colophon\" class=\"footer\" role=\"contentinfo\">\n  <div class=\"container\">\n    <div class=\"footer-widgets\">\n      <aside class=\"widget site-contact\">\n        <h2 class=\"footer-widget-title\">Nursery School</h2>\n        <p>6926 Forest Park Parkway</p>\n        <p>St. Louis, MO 63130</p>\n        <p class=\"phone\">314-935-6689 <span>|</span> Fax: 314-935-7249</p>\n        <p>\n          <a href=\"files/mailto:nursery@wustl.edu\">nursery@wustl.edu</a>\n        </p>\n      </aside>\n\n      <div class=\"widget-wrapper\">\n        <aside id=\"text-4\" class=\"widget widget_text widget-count-2\">\n          <h2 class=\"footer-widget-title\">Hours of Operation</h2>\n          <div class=\"textwidget\">\n            <p>\n              Classes meet Mon. through Fri.<br />\n              Morning: 9-11:45 a.m.<br />\n              Afternoon: 12:30-3:15 p.m.<br />\n              Full day: 9 a.m.-3:15 p.m.\n            </p>\n          </div>\n        </aside>\n        <aside id=\"text-3\" class=\"widget widget_text widget-count-2\">\n          <h2 class=\"footer-widget-title\">Apply for the Nursery School</h2>\n          <div class=\"textwidget\">\n            <p>\n              Experience the innovative approach and dynamic teaching\n              environment of the Washington University Nursery School.\n            </p>\n            <a href=\"files/apply.html\">Register Now</a>\n          </div>\n        </aside>\n      </div>\n    </div>\n    <div class=\"site-info\">\n      <p class=\"footer-copyright\">©2019 Washington University in St. Louis</p>\n    </div>\n  </div>\n</footer>";

},{}],28:[function(require,module,exports){
module.exports = "<div id=\"wustl-branding\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"321\" height=\"28\" viewBox=\"0 0 321 28\" class=\"washu-logo\"\n    aria-labelledby=\"title\">\n    <title id=\"title\">Washington University in St. Louis</title>\n    <path fill=\"#FFF\"\n      d=\"M10.46 1.76c-.09 0-4.41.04-10.46-1.21V18c0 .27.01.47.01.47v.02c.04.81.28 1.45.77 2 .32.34.76.7 1.38 1.05.17.1.35.18.55.28.15.07.31.14.47.2.14.06.55.24.69.29l6.59 2.5 6.59-2.5c.15-.05.56-.24.69-.29.16-.07.32-.14.47-.2.19-.1.38-.18.55-.28.62-.35 1.06-.7 1.38-1.05.48-.55.73-1.19.77-2v-.02s0-.19.01-.47V.55C14.86 1.8 10.55 1.76 10.46 1.76z\">\n    </path>\n    <path fill=\"#007360\"\n      d=\"M10.46 2.8c-.09 0-4.03.04-9.56-1.1v15.95c0 .25.01.43.01.44v.02c.04.74.25 1.33.7 1.83.29.31.7.64 1.26.95.15.09.32.17.5.26.14.07.28.13.44.19.12.05.5.22.63.27l6.03 2.29 6.03-2.29c.13-.05.51-.22.63-.27.15-.06.3-.13.44-.19.18-.09.35-.17.5-.26.56-.31.97-.64 1.26-.95.44-.5.66-1.09.7-1.83v-.02s0-.18.01-.44V1.7c-5.55 1.14-9.5 1.1-9.58 1.1z\">\n    </path>\n    <path fill=\"#E1C4AC\"\n      d=\"M10.46 3.75c-.08 0-3.68.04-8.74-1.02v4.08c5.05 1.05 8.67 1.02 8.74 1.02s3.68.04 8.74-1.02V2.73c-5.06 1.05-8.66 1.02-8.74 1.02z\">\n    </path>\n    <path fill=\"#A51417\"\n      d=\"M10.46 7.83c-.08 0-3.68.04-8.74-1.02v9.05c5.05 1.05 8.67 1.02 8.74 1.02s3.68.04 8.74-1.02V6.82c-5.06 1.04-8.66 1.01-8.74 1.01z\">\n    </path>\n    <path fill=\"#E1C4AC\"\n      d=\"M1.72 17.72c.03.69.23 1.23.64 1.68.26.28.64.58 1.15.87.15.08.29.15.46.23.13.06.26.12.4.17.11.05.46.2.58.24L10.46 23l5.51-2.09c.12-.04.46-.2.58-.24.14-.06.27-.12.4-.17.16-.08.32-.15.46-.23.51-.29.88-.58 1.15-.87.41-.46.6-1 .64-1.68v-.02s0-.16.01-.4v-1.44c-5.05 1.05-8.67 1.02-8.74 1.02s-3.68.04-8.74-1.02v1.45c-.02.25-.01.41-.01.41z\">\n    </path>\n    <path fill=\"#007360\"\n      d=\"M4.8 3.69l.41 1.23 1.29.01-1.04.77.39 1.24-1.05-.76-1.05.76.39-1.24-1.04-.77 1.29-.01.41-1.23zm11.31 0l.42 1.23 1.29.01-1.04.77.39 1.24-1.06-.76-1.05.76.39-1.24-1.04-.77 1.29-.01.41-1.23zm-5.65.48l.42 1.23 1.29.01-1.04.77.39 1.24-1.06-.76-1.06.75.39-1.24-1.04-.77 1.3-.01.41-1.22zM10.46 17.21l-.46.45v1.22l.23.65v1.09h.45v-1.09l.23-.65v-1.22l-.45-.45zm.22 4.41v-.65h-.45v.65l-.23.42.46.56.46-.56-.24-.42zm.33-.65v.5l.29.31.51-.41v-.41h-.8zm.54-2.04l-.54.6v1.09h.44v-.65l.43-.46.55.36.35-.36v-.58h-1.23zm-1.64 2.04v.5l-.29.31-.52-.41v-.41h.81zm-.55-2.04l.54.6v1.09h-.43v-.65l-.43-.46-.55.36-.35-.36v-.58h1.22z\">\n    </path>\n    <path fill=\"#E1C4AC\"\n      d=\"M14.62 9.27v5.19h-3.49l-.25.21-.43.37-.43-.37-.25-.21H6.29V9.27l-.74.54v5.38h4.12l.37.31.43.38.43-.38.37-.31h4.12V9.81l-.77-.54z\">\n    </path>\n    <path fill=\"#E1C4AC\"\n      d=\"M11.02 8.83l-.14.11-.43.38-.43-.38-.12-.11H7.03v4.89h2.88l.2.17.35.31.36-.31.19-.17h2.88V8.83h-2.87zM16.11 10.35v3.31c.95-.14 1.98-.31 3.08-.54V9.81a50.5 50.5 0 0 1-3.08.54zm-11.31 0c-.95-.14-1.98-.31-3.08-.54v3.31c1.1.23 2.14.41 3.08.54v-3.31z\">\n    </path>\n    <path fill=\"#007360\"\n      d=\"M16.11 16.76l-.31.32v.86l.15.46v.77h.31v-.77l.16-.46v-.86l-.31-.32zm.16 3.09v-.45h-.31v.46l-.15.3.31.4.32-.4-.17-.31zm.23-.45v.35l.2.22.36-.28v-.29h-.56zm.38-1.43l-.38.43v.77h.31v-.46l.3-.33.38.25.24-.25v-.41h-.85zm-1.14 1.43v.35l-.21.22-.35-.28v-.29h.56zm-.39-1.43l.39.43v.77h-.31v-.46l-.3-.33-.39.25-.24-.25v-.41h.85zM4.8 16.76l-.32.32v.86l.16.46v.77h.31v-.77l.15-.46v-.86l-.3-.32zm.16 3.09v-.45h-.31v.46l-.16.3.32.4.31-.4-.16-.31zm.22-.45v.35l.21.22.35-.28v-.29h-.56zm.39-1.43l-.39.43v.77h.31v-.46l.3-.33.39.25.24-.25v-.41h-.85zM4.42 19.4v.35l-.2.22-.36-.28v-.29h.56zm-.38-1.43l.38.43v.77h-.31v-.46l-.3-.33-.38.25-.24-.25v-.41h.85z\">\n    </path>\n    <g fill=\"#FFF\" class=\"washu-logo-text\">\n      <path\n        d=\"M232.47 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zm13.82 12.03v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.06 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 1.99 1.68v7.64c0 1.43-.7 1.55-1.21 1.68-.03 0-.06-.01-.1 0-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.29 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.31 0 1.15-.13 2.53-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06V13.1c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.26 0 .73-.2.45-.44-.68-.5-1.97.3-1.95-2.04zM48.91 2.4c.37-.05.55-.19.55-.19 0-.24-.05-.3-.39-.3-.65 0-1.05.11-1.69.11-.71 0-1.25-.08-1.85-.08-.34 0-.31.11-.31.3 0 .21.65.08 1.02.89.21.44.13 1.36-.08 1.9l-5.01 13.74-2.14-6.1-.83-2.23s-.13.06.46-1.79l1.17-3.52c.57-1.73 1.14-2.64 1.88-2.65.92-.02.92-.57.21-.57s-1.13.06-1.75.06c-.65 0-.99-.06-1.69-.06-.26 0-.55.08-.52.3.03.21.42.14.71.3.47.24.78 1.25.45 2.3l-1.38 4.42-1.58-4.13c-.31-.78-.73-2.52.03-2.67.73-.15.63-.52.18-.52-.86 0-1.32.11-2.15.11-.91 0-1.59-.11-2.45-.11-.18 0-.52.03-.42.38.05.21.49.14.76.3 1.05.68 1.25 1.55 1.62 2.52l2.3 6.48c.42 1.16.45.74.11 1.73l-2 5.5-4.95-14.11c-.39-1.06-.6-1.79.26-2.2.37-.19.47-.22.52-.3.05-.07.1-.32-.45-.3-.89.03-1.43.11-2.32.11-.94 0-1.59-.11-2.45-.11-.29 0-.34.14-.34.35 0 .33.71.11 1.31.81.34.38.99 1.66 1.14 2.12L32.8 22.3c.11.25.14.76.48.76.27 0 .33-.57.42-.79l3.13-8.59 3.05 8.16c.13.33.31 1.22.63 1.22.26 0 .36-.43.49-.83l5.9-16.87c.5-1.36 1.07-2.79 2.01-2.96zm65.46 6.71c-3.26 0-5.77 3.28-5.77 7.13 0 1.96.52 3.51 1.42 4.63-.31.21-.92.7-2.15.7-1.07 0-1.68-.64-1.74-2V11.2l3.38-.01c.22 0 .65-1.44.67-1.52.04-.18.1-.33.12-.46.04-.28-.17-.3-.37-.01-.15.15-.32.55-.99.55h-2.81c0-2.41.03-3.51-.35-3.51-.36 0-.3.1-.63 1.17-.44 1.44-1.79 2.23-2.63 2.68-.38.09-.81.12-1.29.01-.74-.16-1.6-1.06-3.83-1.06-2.38 0-4.46 1.95-4.46 4.55 0 1.4.62 2.76 1.71 3.48-.2.12-1.53 1.24-1.37 2.56 0 0-.03 1.37 1.05 1.82-.33.14-.67.36-.96.63-.7-.26-1.72-.06-1.72-1.91V15.1c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-.73.99-2.91 1.55-.13.03-.43.1-.44.34 0 .65 1.75-.71 1.76 1.68v7.64c0 1.65-1.31 1.65-1.54 1.67-.1 0-.19 0-.31.01-.55-.05-1.51-.3-1.51-1.34V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.78-.86 2.01-1.43 2.03-.69-.09-1.22-.37-1.22-1.41v-5.14c0-2.65-1.01-6.07-4.33-6.07-1.47 0-2.75.81-3.73 1.92V2.41c0-.31-.15-.48-.31-.49-.4-.03-1.07 1.19-2.96 1.63-.13.03-.62.07-.62.25 0 .65 1.97-.31 1.99 1.69V20.6c0 1.51-1.3 1.31-1.53 1.79-.04.21.08.31.26.31.42 0 1.55-.12 2.35-.12s2.1.12 2.64.12c.31 0 .44-.06.44-.44-.27-.52-2.28.28-2.28-2.37v-6.5c0-1.57 1.87-2.78 3.03-2.78.91 0 3.14.71 3.14 4.53v5.64c0 1.11-1.18 1.23-1.27 1.57 0 .24.15.34.42.34.28 0 1.11-.12 2.12-.12.56 0 1.07.03 1.5.06.23.05.57.05.99.05.28 0 1-.11 1.82-.11s1.48.07 1.99.11c.1.01.2.01.3.01.04 0 .08.01.12.01h.01c.32.01.61 0 .74 0 .31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c0 2-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c.93 0 1.53.07 1.91.1-.29.42-.48.9-.51 1.4-.14 2.51 2.93 3.41 5.51 3.37 5.12-.07 6.57-3.62 5.51-5.51-1.09-1.95-3.44-1.87-5.68-1.86-4.2.02-3.41-2.59-1.69-2.49.4.02.2.14 1.57.14 2.43 0 4.76-1.66 4.7-4.38-.01-.23.05-1.03-.53-2.14 1.14.01.69 0 2.41 0l-.01 7.63c0 3.45 1.64 4.03 2.87 4.03 1.74 0 3.01-1.15 3.24-1.68 1.03 1.1 2.46 1.68 4.12 1.68 3.19 0 5.6-2.93 5.6-6.78 0-5.8-3.65-6.96-5.61-6.96zM95.62 21.72c.21-.01.27.08 2.64.17 2.45.06 3.33.77 3.49 1.4.26 1.12-.53 3.52-4.05 3.29-2.22-.15-2.87-1.2-3.03-1.44-.84-1.16-.16-3.35.95-3.42zm2.01-4.57c-2.08 0-2.78-2-2.78-3.91 0-1.96.59-3.58 2.67-3.58 2.11 0 2.95 2.16 2.95 4.07.01 1.93-.87 3.42-2.84 3.42zm16.99 4.81c-3.03 0-4.22-3.76-4.22-6.82 0-2.65 1.04-5.1 3.57-5.1 3.08 0 4.19 3.29 4.19 6.51.01 3.87-1.36 5.41-3.54 5.41z\">\n      </path>\n      <path\n        d=\"M131.11 20.19v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.07 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 2 1.68v7.64c0 2-1.35 1.52-1.66 2.04-.15.27.25.33.59.33.31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.26 0 .73-.2.44-.44-.65-.49-1.94.31-1.92-2.03zM77.41 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6.02.35.77 1.57 1.07 1.57zm-17.3 6.96c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.04 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.1-.74-2.55-.74-.11 0-.52-.01-.6-.02-.13 0-.28.02-.28.02-1.81-.03-3.5 1.11-3.45 3.53.05 2.21 2.64 3.47 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.61-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52 0 .51-.01.98-.01 1.38-.07.36-.2.7-.54.72-1.24.08-.94-1.9-.94-2.95v-6.43c-.06-1.97-1.54-3.25-3.8-3.25-3.09 0-5.31 3.81-4.25 5 .25.28 1.26-.8 1.32-.86s.08-.13.08-.13c-.01-1.3.97-2.95 2.37-3.09 1.6-.15 2.4 1.04 2.4 2.65v2.09c-6.06 1.21-6.93 3.22-6.93 4.87 0 2.21 1.55 3.2 3.23 3.2 1.45 0 2.88-.69 3.96-1.8.34 1.03 1.01 1.65 2.02 1.62.35-.01.41.09 1.46-.37.37-.1.35-.09.77-.01.56.19 1.32.57 2.66.57 2.03.03 3.85-1.85 3.85-4.17 0-1.5-.43-2.41-2.39-3.63zm-8.43 4.32c0 1.65-1.68 2.52-2.6 2.52-1.38 0-2.33-.89-2.33-2.66 0-2.73 3.28-3.23 4.94-3.67-.01-.01-.01 3.81-.01 3.81zm219.99.19c-.31 0-1.07 1.29-1.07 1.63 0 .34.77 1.6 1.07 1.6.33 0 1.07-1.23 1.07-1.6s-.73-1.63-1.07-1.63zm33.71 1.12V9.92c0-.61-.34-.77-.44-.77-.39 0-.61.1-.88.16-.27.1-.58.23-1.29.23-.13 0-.79-.12-.76.25.04.37 1.57.15 1.58 1.23v7.83c-.12 1.37-1.27 2.88-2.66 2.88-.32 0-2.39-.22-2.37-3.65V9.92c0-.61-.34-.77-.44-.77-.39 0-.61.1-.88.16-.27.1-.61.22-1.32.19-.38-.02-.79-.07-.73.29.06.32 1.59 0 1.59 1.23v7.51c0 2.74 1.61 4.32 3.56 4.32 1.3 0 2.49-.28 3.24-1.8h.05v1.32c0 .13.03.48.22.48.37 0 .56-.3.83-.4.29-.07.37-.33 1.28-.42.39-.04.82-.24.82-.5-.11-.53-1.4.06-1.4-.78zM290.09 9.11c-3.26 0-5.77 3.28-5.77 7.13 0 1.73.42 3.15 1.13 4.23-.79.57-2.23 1.1-4.96 1.1-2.13 0-1.93-.74-1.93-2.55V4.57c0-2.66 1.99-1.89 2.03-2.37.03-.34-.28-.26-.61-.26-.38 0-1.07.15-2.52.15-1.25 0-2.34-.12-2.88-.12-.33 0-.63.1-.52.35.25.57 2.14.05 2.14 1.65v15.1c0 1.44.21 2.36-.45 2.73-.81.49-1.76.51-1.68.83.05.19.45.2.68.2 1.02 0 2.42-.13 3.44-.15 1.94-.06 3.86.13 5.79.13 1.12 0 1.4-.22 2.22-1.33.01-.02.02-.03.04-.05 1.01.94 2.34 1.44 3.87 1.44 3.19 0 5.6-2.93 5.6-6.78.01-5.82-3.65-6.98-5.62-6.98zm.26 12.85c-3.03 0-4.22-3.76-4.22-6.82 0-2.65 1.04-5.1 3.57-5.1 3.08 0 4.19 3.29 4.19 6.51.01 3.87-1.36 5.41-3.54 5.41zm-32.03-10.49c-.75-.37-1.85-1.04-2.39-1.36-2.37-1.37-3.3-2.26-3.37-3.52-.12-2.21 2.04-3.52 3.58-3.35 1.96 0 3.57 1.19 4.24 3.73.07.27.31.89.56.89.22 0 .26-.2.24-.45l-.33-4.02c-.02-.33-.14-.42-.27-.42-.22 0-.36.33-.56.33-.31 0-1.1-1.11-3.8-1.09-.18-.01-.43.02-.43.02-2.63-.05-5.1 1.7-5.02 5.4.07 3.37 3.85 5.3 5.89 6.59 1.51.9 3.09 2.34 3.04 3.95-.08 2.47-1.63 4.08-3.58 3.94-4.59-.08-3.96-6.13-4.78-6.13-.56 0-.45 1.52-.46 2.32 0 1.92-.08 3.49.14 3.77.07.09.29.05.74.05.9 0 2 1.05 4.65 1.05 2.95.05 5.38-2.69 5.38-6.25-.01-2.19-.62-3.58-3.47-5.45zm51.69-3.31c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zM312.64 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.33 0 .76-.8.07-.69zm5.98-6.88c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.05 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.11-.74-2.55-.74-.11 0-.52-.01-.6-.01-.13 0-.28.01-.28.01-1.81-.03-3.5 1.11-3.44 3.53.05 2.21 2.64 3.46 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.61-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52-.01 1.25-.06 2.28.1 2.46.05.06.2.03.5.03.62 0 1.38.69 3.19.69 2.03.03 3.85-1.85 3.85-4.17-.01-1.48-.43-2.39-2.39-3.6zm-48.73 5.66c-.26.13-.85.77-2.28.77-1.07 0-1.68-.64-1.74-2v-8.82l3.38-.01c.22 0 .65-1.44.67-1.52.04-.18.1-.33.12-.46.04-.28-.17-.3-.37-.01-.15.15-.32.55-.99.55h-2.81c0-2.41.03-3.04-.35-3.04-.36 0-.3.1-.63 1.17-.54 1.79-2.52 2.58-3.15 2.97-.15.08-.15.11-.15.19-.01.23.75.14 2.31.17l-.01 8.07c0 3.45 1.64 4.03 2.87 4.03 1.87 0 3.21-1.34 3.28-1.8.03-.25 0-.28-.15-.26zm-81.32-1.09c-.57 0-1.42 1.62-3.66 1.62-1.58 0-4.17-1.53-4.17-6.66h6.9c.6 0 .88.03.88-.52 0-1.25-1.4-4.95-4.59-4.95-3.24 0-5.08 3.33-5.08 7.31 0 2.05 1.35 6.38 5.24 6.38 2.33 0 4.59-2.24 4.59-2.95-.01-.11-.01-.23-.11-.23zm-5.08-9.81c1.42 0 2.88 1.56 2.88 3.3 0 .46-.15.62-.52.62h-5.11c0-1.71 1.13-3.92 2.75-3.92zm-31.7-7.33c.1-.16-.25-.24-.37-.24-.42 0-1.37.11-1.8.11-.89 0-1.64-.09-2.53-.09-.07 0-.46.05-.46.18-.01.63 2.13-.11 2.13 2.6v10.57c0 3.13-.99 6.41-5.29 6.41-3.09 0-4.76-1.94-4.76-6.17V4.41c0-1.91 1.49-1.49 1.52-1.92.03-.41-1.33-.16-1.43-.16-.71 0-1.21.08-1.95.08-.62 0-1.37-.1-1.97-.1-.12 0-.53-.02-.61.15-.23.56 1.91.26 1.91 1.83v10.92c0 4.08 1.14 8.08 7.17 7.97 7.14-.12 7.01-6.54 7.01-7.83V5.12c.01-2.43 1.2-2.2 1.43-2.57zm28.19 7.24c.17-.2.22-.53-.57-.46-.45 0-.77.08-1.22.08-.57 0-.68-.02-1.22-.04-.68-.02-.86.05-.82.25.12.6 1.55.01 1.36 1.8-.16 1.5-.65 2.79-1.14 4.07l-1.73 4.62-2.54-7.7c-.31-.96-.45-1.47-.45-1.57 0-.96 1.16-.75 1.42-1.14.16-.26-.17-.4-.54-.4-.31 0-.67.11-1.63.13-.79.02-1.36.02-1.7-.05-.89-.16-.82.33-.51.48s.46.01.91 1.36l3.91 11.06c.08.22.18.77.52.77.39 0 .39-.39.88-1.69 0 0 3.75-10.48 4-10.86.51-.74.89-.5 1.07-.71zm14.47-.5c-1.07 0-1.8 1.28-2.33 2.16h-.05V9.53c0-.3-.15-.48-.3-.48-.41 0-.72.81-2.87 1.33-.13.03-.48.1-.48.28 0 .64 1.82-.19 1.82 1.93v8.07c0 1.25-1.29 1.12-1.29 1.77 0 .18.08.27.28.27.17 0 .63-.12 2.32-.12 1.41 0 2.02.12 2.37.12.28 0 .41-.06.41-.34 0-.98-2.25.48-2.25-2.34v-6.88c0-.4.6-1.8 1.64-1.8.91 0 1.02.7 1.5.7.3 0 .91-.91.91-1.38-.01-.58-1.16-1.37-1.68-1.37zm32.55.1c-.27 0-.96.04-1.59.04-.76 0-1.13-.09-1.45-.09-.48 0-.96 0-.87.32.1.36 1.73.23 1.73 2.01 0 .23 0 .52-.33 1.71l-2.08 6.63-2.9-8.15s-.14-.26-.14-.79c0-1.32 1.54-1.17 1.6-1.41.05-.19-.21-.4-.62-.4h-3.63c-.02 0-.03.01-.05.01h-2.81c0-2.41.03-3.04-.35-3.04-.36 0-.3.1-.63 1.17-.54 1.79-2.52 2.58-3.15 2.97-.15.08-.15.11-.15.19-.01.22.76.14 2.31.17l-.01 8.07c0 3.45 1.64 4.03 2.87 4.03 1.87 0 3.21-1.33 3.28-1.8 0-.27-.04-.29-.18-.27-.26.13-.85.77-2.28.77-1.07 0-1.68-.64-1.74-2V10.7s2.5-.01 3.21-.01c.04.06.08.13.1.19l2.99 8.45c.24.69.39.92.68 2.14.19.79.12 1.51.12 1.51-.29 1.27-1.07 1.99-2.26 4.34-.12.22 1.71-.02 1.81-.05.15-.05.13-.09.31-.42l1.32-3.93 3.69-11.34c.54-1.98 1.39-1.62 1.53-1.89.12-.13 0-.3-.33-.3z\">\n      </path>\n      <path\n        d=\"M222.22 22.76l-.07.19V23l.07-.24zm-14.74-14.6c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zM210.11 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.33 0 .76-.8.07-.69zM166.52 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.77 1.57 1.07 1.57zM169.17 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04h-.17c-.54-.1-1.06-.32-1.05-1.79v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.07 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 2 1.68v7.64c0 2-1.35 1.52-1.66 2.04-.15.27.25.33.59.33.31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.04 0 .09-.01.13-.01.11 0 .21.01.34.01.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.34.02.75-.78.08-.67zm32.72-6.89c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.05 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.1-.74-2.55-.74-.11 0-.52-.01-.6-.02-.13 0-.28.02-.28.02-1.81-.03-3.5 1.11-3.45 3.53.05 2.21 2.64 3.46 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.62-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52 0 1.25-.06 2.28.1 2.46.05.06.2.03.5.03.62 0 1.38.69 3.19.69 2.03.03 3.85-1.85 3.85-4.17 0-1.47-.42-2.38-2.38-3.6z\">\n      </path>\n    </g>\n  </svg>\n</div>\n<header role=\"banner\">\n  <div class=\"container\">\n    <a class=\"site-title\" href=\"files/index.html\">Nursery School</a>\n  </div>\n  <div id=\"main-menu-container\">\n    <div class=\"container\">\n      <div class=\"navbar\">\n        <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a id=\"about\" href=\"files/about.html\">About\n            </a>\n          </button>\n          <div class=\"dropdown-content\">\n            <a id=\"tuition\" href=\"files/tuition.html\">Tuition</a>\n            <a id=\"staff\" href=\"files/staff.html\">Staff</a>\n            <a id=\"parent-handbook\" href=\"files/parent_handbook.html\">Parent Handbook</a>\n          </div>\n        </div>\n        <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a id=\"classrooms\" href=\"files/classrooms.html\">Classrooms\n            </a>\n          </button>\n          <div class=\"dropdown-content\">\n            <a id=\"curriculum-overview\" href=\"files/curriculum_overview.html\">Curriculum Overview</a>\n            <a id=\"teddy-bears\" href=\"files/teddy_bears.html\">Teddy Bears</a>\n            <a id=\"panda-bears\" href=\"files/panda_bears.html\">Panda Bears</a>\n            <a id=\"bear-cubs\" href=\"files/bear_cubs.html\">Bear Cubs</a>\n            <a id=\"big-bears\" href=\"files/big_bears.html\">Big Bears</a>\n            <a id=\"sun-bears\" href=\"files/sun_bears.html\">Sun Bears</a>\n            <a id=\"bear-tracks\" href=\"files/bear_tracks.html\">Bear Tracks</a>\n            <a id=\"enrichment-program\" href=\"files/enrichment_programs.html\">Enrichment Program</a>\n          </div>\n        </div>\n        <a id=\"calendar\" href=\"files/calendar.html\">Calendar</a>\n        <a id=\"summer-camp\" href=\"files/summer_camp.html\">Summer Camp</a>\n        <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a id=\"get-involved\" href=\"files/get_involved.html\">Get Involved</a>\n          </button>\n          <div class=\"dropdown-content\">\n            <a id=\"nursery-school-merchandise\" href=\"files/nursery_school_merchandise.html\">Nursery School\n              Merchandise</a>\n            <a id=\"parent-association\" href=\"files/parent_association.html\">Parent Association</a>\n          </div>\n        </div>\n\n        <a id=\"apply\" href=\"files/apply.html\">Apply</a>\n        <a id=\"forms\" href=\"files/forms.html\">Forms</a>\n\n        <a id=\"parent-resources\" href=\"files/parent_resources.html\">Parent Resources</a>\n      </div>\n    </div>\n  </div>\n</header>";

},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("./../core/dom/document");
var Slideshow = /** @class */ (function () {
    function Slideshow(outer) {
        var _this = this;
        this.outer = outer;
        this.slideIndex = 0;
        this.slideCount = 0;
        this.slides = [];
        this.dots = [];
        document_1.D.eachRecur(this.outer, function (elem) {
            var cList = elem.classList;
            if (cList.contains("prev-slideshow-button")) {
                document_1.D.addEventListener(elem, "click", function () { return _this.minusSlide(1); });
            }
            else if (cList.contains("next-slideshow-button")) {
                document_1.D.addEventListener(elem, "click", function () { return _this.plusSlide(1); });
            }
            else if (cList.contains("slideshow-entry")) {
                _this.slides.push(elem);
            }
            else if (cList.contains("slideshow-dot")) {
                _this.dots.push(elem);
            }
        });
        var _loop_1 = function (i) {
            document_1.D.addEventListener(this_1.dots[i], "click", function () { return _this.showSlide(i); });
        };
        var this_1 = this;
        for (var i = 0; i < this.dots.length; ++i) {
            _loop_1(i);
        }
        this.slideCount = this.slides.length;
        this.showSlide(this.slideIndex);
    }
    Slideshow.setupAll = function () {
        Slideshow.discardAll();
        var slideshows = document_1.D.claz("slideshow");
        for (var ssIndex = 0; ssIndex < slideshows.length; ++ssIndex) {
            var elem = slideshows.item(ssIndex);
            if (elem == null) {
                continue;
            }
            Slideshow.slideshows.push(new Slideshow(elem));
        }
    };
    Slideshow.discardAll = function () {
        Slideshow.slideshows = [];
    };
    Slideshow.prototype.plusSlide = function (n) {
        this.showSlide((this.slideIndex += n));
    };
    Slideshow.prototype.minusSlide = function (n) {
        this.showSlide((this.slideIndex -= n));
    };
    Slideshow.prototype.showSlide = function (index) {
        this.slideIndex = index % this.slideCount;
        this.slideIndex = Math.max(this.slideIndex, -1 * this.slideIndex);
        for (var i = 0; i < this.slides.length; ++i) {
            this.slides[i].style.display = "none";
        }
        for (var i = 0; i < this.dots.length; i++) {
            this.dots[i].classList.remove("active");
        }
        this.slides[this.slideIndex].style.display = "block";
        this.dots[this.slideIndex].classList.add("active");
    };
    Slideshow.slideshows = [];
    return Slideshow;
}());
exports.Slideshow = Slideshow;
},{"./../core/dom/document":6}],30:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var q_params_1 = require("../core/utils/q_params");
var data_1 = require("./../core/data-log/data");
var document_1 = require("./../core/dom/document");
var elements_1 = require("./../core/dom/elements");
var scroll_1 = require("./../core/dom/scroll");
var history_1 = require("./../core/router/history");
var router_1 = require("./../core/router/router");
var tracker_1 = require("./../core/tracker/tracker");
var html_loader_1 = require("./../core/utils/html_loader");
var id_generator_1 = require("./../core/utils/id_generator");
var ready_1 = require("./../core/utils/ready");
var scenarios_1 = require("./../core/utils/scenarios");
var setup = function () { return __awaiter(void 0, void 0, void 0, function () {
    var scenario;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ready_1.waitUntilReady()];
            case 1:
                _a.sent();
                scenario = scenarios_1.scenarios.find(function (scen) { return scen.tag === q_params_1.params.tag; });
                if (!q_params_1.params.sandbox) {
                    if (scenario === null || scenario === undefined) {
                        alert('This HIT is broken and cannot be completed at this time.');
                    }
                    else {
                        tracker_1.Tracker.loadScenario(scenario);
                    }
                }
                tracker_1.Tracker.start({
                    keyPrefix: 'information-foraging',
                    bucketName: 'cse-256-log',
                    allowSubmission: {
                        allow: function () {
                            try {
                                var textArea = document_1.D.id('text-area');
                                console.log(textArea.value);
                                if (textArea.value === '') {
                                    return 'You must fill out the text box to turn this HIT in.';
                                }
                                else {
                                    return null;
                                }
                            }
                            catch (error) {
                                console.log(error);
                                return 'There was an error fill out the form and try again.';
                            }
                        },
                        preSubmit: function () {
                            data_1.data.data.response = document_1.D.id('text-area').value;
                            return;
                        },
                    },
                    debugLevel: 1 /* NONE */,
                    setup: function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var sElem;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        // configure router
                                        router_1.Router.defaultAllowancesOn();
                                        router_1.Router.configure([
                                            {
                                                mode: 2 /* STANDARD_ALLOWANCES */,
                                                module: "A" /* A */,
                                            },
                                            { mode: 0 /* OFF */, module: "FORM" /* FORM */ },
                                            {
                                                mode: 2 /* STANDARD_ALLOWANCES */,
                                                module: "IMG" /* IMG */,
                                            },
                                        ], 'files/');
                                        history_1.History.setup(window.location.href, { wrapper: true });
                                        // configure html loader post operation
                                        html_loader_1.HTMLLoader.finish();
                                        html_loader_1.HTMLLoader.registerPostLoadFunc(function () {
                                            id_generator_1.IDGenerator.reset();
                                            id_generator_1.IDGenerator.attachIdsToAllElements();
                                            router_1.Router.setup(elements_1.Elements.htmlLoc);
                                            scroll_1.Scroll.promise(0);
                                        });
                                        // configure listeners on html loc
                                        document_1.D.addEventListener(elements_1.Elements.htmlLoc, "click" /* CLICK */, function (e) {
                                            var ev = e;
                                            var obj = {
                                                x: ev.clientX,
                                                y: ev.clientY,
                                                id: ev.target.id,
                                            };
                                            tracker_1.Tracker.getEventDispatchFunc("click" /* CLICK */)(obj);
                                        });
                                        document_1.D.addEventListener(elements_1.Elements.document, 'keypress', function (e) {
                                            var ev = e;
                                            var obj = {
                                                key: ev.key,
                                                id: ev.srcElement.id,
                                            };
                                            tracker_1.Tracker.getEventDispatchFunc("button" /* BUTTON */)(obj);
                                        });
                                        sElem = document.scrollingElement;
                                        document.addEventListener('scroll', function (e) {
                                            var dx = sElem.scrollLeft;
                                            var dy = sElem.scrollTop;
                                            var dtime = new Date().getTime();
                                            if (Math.abs(tracker_1.Tracker.lastPos.x - dx) > 10 ||
                                                (Math.abs(tracker_1.Tracker.lastPos.y - dy) > 10 &&
                                                    dtime - tracker_1.Tracker.lastPos.time > 100)) {
                                                tracker_1.Tracker.lastPos.x = dx;
                                                tracker_1.Tracker.lastPos.y = dy;
                                                tracker_1.Tracker.lastPos.time = dtime;
                                                var obj = { x: dx, y: dy };
                                                tracker_1.Tracker.getEventDispatchFunc("scroll" /* SCROLL */)(obj);
                                            }
                                        });
                                        // configure tracked events
                                        tracker_1.Tracker.registerEvent("history" /* HISTORY */);
                                        tracker_1.Tracker.registerEvent("button" /* BUTTON */);
                                        tracker_1.Tracker.registerEvent("click" /* CLICK */);
                                        tracker_1.Tracker.registerEvent("scroll" /* SCROLL */);
                                        // load first page
                                        return [4 /*yield*/, router_1.Router.load('files/index.html')];
                                    case 1:
                                        // load first page
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    },
                });
                return [2 /*return*/];
        }
    });
}); };
setup();
},{"../core/utils/q_params":20,"./../core/data-log/data":2,"./../core/dom/document":6,"./../core/dom/elements":7,"./../core/dom/scroll":10,"./../core/router/history":13,"./../core/router/router":14,"./../core/tracker/tracker":15,"./../core/utils/html_loader":18,"./../core/utils/id_generator":19,"./../core/utils/ready":21,"./../core/utils/scenarios":22}]},{},[25,30])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY2VuYXJpb3Mvc2NlbmFyaW9zLmpzb24iLCJzY3JpcHRzL3RzL2NvcmUvZGF0YS1sb2cvZGF0YS50cyIsInNjcmlwdHMvdHMvY29yZS9kYXRhLWxvZy9ldmVudC50cyIsInNjcmlwdHMvdHMvY29yZS9kYXRhLWxvZy9yZWNlaXZlci50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vYmFubmVyLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9kb2N1bWVudC50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vZWxlbWVudHMudHMiLCJzY3JpcHRzL3RzL2NvcmUvZG9tL2h0bWxfbG9jLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9tb2RhbC50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vc2Nyb2xsLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9zdWJtaXRfZm9ybS50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vdHJhY2tlcl9lbGVtcy50cyIsInNjcmlwdHMvdHMvY29yZS9yb3V0ZXIvaGlzdG9yeS50cyIsInNjcmlwdHMvdHMvY29yZS9yb3V0ZXIvcm91dGVyLnRzIiwic2NyaXB0cy90cy9jb3JlL3RyYWNrZXIvdHJhY2tlci50cyIsInNjcmlwdHMvdHMvY29yZS91dGlscy9jb25zb2xlX3dyYXBwZXIudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvZnVuY3MudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvaHRtbF9sb2FkZXIudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvaWRfZ2VuZXJhdG9yLnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3FfcGFyYW1zLnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3JlYWR5LnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3NjZW5hcmlvcy50cyIsInNjcmlwdHMvdHMvZHluYW1pYy1kb20vYWNjb3JkaW9uLnRzIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9kby1zb21ldGhpbmcuanMiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2R5bmFtaWMtZG9tLnRzIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9odG1sLWltcG9ydHMudHMiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2h0bWwvZm9vdGVyLmh0bWwiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2h0bWwvaGVhZGVyLmh0bWwiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL3NsaWRlc2hvdy50cyIsInNjcmlwdHMvdHMvdHJhY2tlci90cmFja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN4REEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQVM1QixJQUFNLFNBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQztBQUVoRCxRQUFBLE9BQU8sR0FBaUI7SUFDakMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUU7SUFDekIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQzNDLEtBQUssRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUM3QixRQUFRLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFD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QUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnREFDdkIsaUJBQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztnREFDN0IsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztnREFDN0IsaUJBQU8sQ0FBQyxvQkFBb0IsdUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUM7NkNBQ3hEO3dDQUNMLENBQUMsQ0FBQyxDQUFDO3dDQUNILDJCQUEyQjt3Q0FDM0IsaUJBQU8sQ0FBQyxhQUFhLHlCQUFvQixDQUFDO3dDQUMxQyxpQkFBTyxDQUFDLGFBQWEsdUJBQW1CLENBQUM7d0NBQ3pDLGlCQUFPLENBQUMsYUFBYSxxQkFBa0IsQ0FBQzt3Q0FDeEMsaUJBQU8sQ0FBQyxhQUFhLHVCQUFtQixDQUFDO3dDQUN6QyxrQkFBa0I7d0NBQ2xCLHFCQUFNLGVBQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBQTs7d0NBRHJDLGtCQUFrQjt3Q0FDbEIsU0FBcUMsQ0FBQzs7Ozs7cUJBQ3pDO2lCQUNKLENBQUMsQ0FBQzs7OztLQUNOLENBQUM7QUFFRixLQUFLLEVBQUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIm1vZHVsZS5leHBvcnRzPVtcclxuICAgIHtcclxuICAgICAgICBcImNvbnRleHRcIjogXCIgWW91IGFyZSBhIHBhcmVudCBjb25zaWRlcmluZyBzZW5kaW5nIHlvdXIgY2hpbGQgdG8gV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLiBZb3XigJl2ZSBsZWFybmVkIHRoYXQgdGhlIGN1cnJpY3VsdW0gaXMgcGxheS1iYXNlZCBhbmQgeW91IHdhbnQgdG8ga25vdyBob3cgbGVhcm5pbmcgaXMgaW5jb3Jwb3JhdGVkIGludG8gYSBwbGF5LWJhc2VkIGNvbnRleHQuIFlvdSBoYXZlIHNvbWUgaWRlYXMgYWJvdXQgaG93IGxhbmd1YWdlIGxlYXJuaW5nIG1pZ2h0IGhhcHBlbiwgYnV0IGFyZSBsZXNzIHN1cmUgYWJvdXQgbWF0aC4gXCIsXHJcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIkZpbmQgc29tZSBleGFtcGxlcyBvZiBob3cgbWF0aCBsZWFybmluZyBpcyBpbmNvcnBvcmF0ZWQgYXQgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLlwiLFxyXG4gICAgICAgIFwidGFnXCI6IFwibWF0aFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgaW52ZXN0aWdhdGluZyBwcmUtc2Nob29sIG9wdGlvbnMgZm9yIHlvdXIgNCB5ZWFyIG9sZC4gQm90aCB5b3UgYW5kIHlvdXIgc3BvdXNlIHdvcmssIHNvIHlvdSBuZWVkIHRvIGZ1bGx5IHVuZGVyc3RhbmQgd2hhdCBzY2hlZHVsaW5nIGNvbnN0cmFpbnRzIGVhY2ggb3B0aW9uIGludm9sdmVzLiBPbmUgb2YgeW91ciBzY2hvb2xzIG9mIGludGVyZXN0IGlzIHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuXCIsXHJcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIldoZW4gZG9lcyBzY2hvb2wgc3RhcnQgYW5kIGVuZCBlYWNoIGRheT8gV2hhdCBpcyB0aGUgbG9uZ2VzdCBwZXJpb2Qgb2YgdGltZSB0aGF0IHlvdXIgY2hpbGQgY2FuIGJlIHRoZXJlP1wiLFxyXG4gICAgICAgIFwidGFnXCI6IFwic2Nob29sX2RheVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgaW52ZXN0aWdhdGluZyBwcmUtc2Nob29sIG9wdGlvbnMgZm9yIHlvdXIgMy41IHllYXIgb2xkLiBZb3XigJl2ZSBiZWVuIHRvbGQgdGhhdCBvbmUgb2YgdGhlIGhhbGxtYXJrcyBvZiBhIGdvb2QgcHJvZ3JhbSBpcyB0ZWFjaGVycyB3aG8gaGF2ZSBiZWVuIHRoZXJlIGZvciBhIGxvbmcgdGltZS4gWW91IHdhbnQgeW91ciBjaGlsZCB0byBhdHRlbmQgaW4gdGhlIG1vcm5pbmdzIG9ubHkuXCIsXHJcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIldoaWNoIHRlYWNoZXJzIHdvdWxkIHlvdXIgY2hpbGQgaGF2ZSBhbmQgaG93IGxvbmcgaGF2ZSB0aGV5IGJlZW4gYXQgdGhlIHNjaG9vbD9cIixcclxuICAgICAgICBcInRhZ1wiOiBcInRlYWNoZXJfdGVudXJlXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBzdGFydGluZyB0byBsb29rIGF0IHN1bW1lciBjYW1wIG9wdGlvbnMgYW5kIGhhdmUgaGVhcmQgZ29vZCB0aGluZ3MgYWJvdXQgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sIGZvciB5b3VuZyBjaGlsZHJlbi5cIixcclxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiV2hhdCBhcmUgdGhlIGRhaWx5IGNhbXAgaG91cnM/IEFyZSB0aGVyZSBhbnkgZXh0ZW5kZWQgZGF5IG9wcG9ydHVuaXRpZXM/XCIsXHJcbiAgICAgICAgXCJ0YWdcIjogXCJzdW1tZXJfY2FtcFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgaW52ZXN0aWdhdGluZyBwcmUtc2Nob29sIG9wdGlvbnMgZm9yIHlvdXIgc3Bpcml0ZWQgMyB5ZWFyIG9sZCBhbmQgd2FudCB0byB1bmRlcnN0YW5kIHRoZWlyIGFwcHJvYWNoIHRvIGRpc2NpcGxpbmUuXCIsXHJcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIkhvdyBkbyB0ZWFjaGVycyBhdCBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgYXBwcm9hY2ggZGlzY2lwbGluZT9cIixcclxuICAgICAgICBcInRhZ1wiOiBcImRpc2NpcGxpbmVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNvbnRleHRcIjogXCJZb3VyIGRhdWdodGVyIGlzIGluIHRoZSBUZWRkeSBCZWFyIGNsYXNzIGF0IFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC4gU2hlIGNhbWUgaG9tZSB0aGlzIHdlZWsgc2luZ2luZyBhIHNvbmcgaW4gU3BhbmlzaCBhYm91dCBzaGFwZXMsIGJ1dCB5b3UgYXJlIHByZXR0eSBzdXJlIHRoYXQgc2hlIGhhcyBzb21lIG9mIHRoZSB3b3JkcyB3cm9uZy5cIixcclxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiV2hhdCBhcmUgdGhlIGNvcnJlY3QgbHlyaWNzP1wiLFxyXG4gICAgICAgIFwidGFnXCI6IFwic3BhbmlzaF9zb25nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiSXQgaXMgbWlkLURlY2VtYmVyIGFuZCB5b3UgYXJlIHRoaW5raW5nIGFib3V0IHRoaW5ncyB0byBkbyBvdmVyIHlvdXIgZGF1Z2h0ZXIncyB1cGNvbWluZyBzY2hvb2wgYnJlYWsuIFNoZSBpcyAzIHllYXJzIG9sZCBhbmQgYXR0ZW5kcyB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sIGFuZCBpcyBpbiB0aGUgVGVkZHkgQmVhciBjbGFzc3Jvb20uIFlvdSBhcmUgcGxhbm5pbmcgYSB0cmlwIHRvIHRoZSBsaWJyYXJ5IGFuZCB3YW50IHRvIGNoZWNrIG91dCBzb21lIGJvb2tzIHRoYXQgY29ubmVjdCB3aXRoIHNvbWV0aGluZyBzaGUgaXMgZG9pbmcgaW4gc2Nob29sLlwiLFxyXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJXaGF0IGFyZSBzb21lIHBvdGVudGlhbCBib29rIHRvcGljcyB0aGF0IHJlbGF0ZSB0byBzb21ldGhpbmcgdGhhdCBpcyBnb2luZyBvbiBpbiBoZXIgY2xhc3Nyb29tIHRoaXMgd2Vlaz9cIixcclxuICAgICAgICBcInRhZ1wiOiBcImJvb2tzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBhIHBhcmVudCB3aXRoIGEgY2hpbGQgd2hvIGhhcyBqdXN0IGJlZW4gYWNjZXB0ZWQgdG8gYXR0ZW5kIGFzIGEgZnVsbCB0aW1lIHN0dWRlbnQgYXQgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC4gWW91IHdhbnQgdG8gYWNjZXB0IHRoZSBvZmZlciBvZiBhZG1pc3Npb24uXCIsXHJcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIkZpZ3VyZSBvdXQgd2hhdCB5b3UgbmVlZCB0byBkbyBhdCB0aGlzIHRpbWUgdG8gZmluYWxpemUgeW91ciBjaGlsZOKAmXMgcGxhY2UgYXQgdGhlIHNjaG9vbC5cIixcclxuICAgICAgICBcInRhZ1wiOiBcImFkbWlzc2lvbl8yXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBhIHBhcmVudCB3aXRoIGEgY2hpbGQgd2hvIGhhcyBqdXN0IGJlZW4gYWNjZXB0ZWQgdG8gYXR0ZW5kIGFzIGEgZnVsbCB0aW1lIHN0dWRlbnQgYXQgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC4gWW91IG5lZWQgdG8gcGF5IG9uZSBtb250aCBvZiB0dWl0aW9uIGFzIGEgZGVwb3NpdC5cIixcclxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiRmluZCBvdXQgaG93IG11Y2ggb25lIG1vbnRoIG9mIHR1aXRpb24gaXMgYW5kIHdoZXRoZXIgb3Igbm90IGl0IGlzIHBvc3NpYmxlIHRvIHBheSBvbmxpbmUuXCIsXHJcbiAgICAgICAgXCJ0YWdcIjogXCJkZXBvc2l0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBsb29raW5nIGF0IE51cnNlcnkgU2Nob29scyBmb3IgeW91ciBzb29uIHRvIGJlIDMgeWVhciBvbGQuIEhlIGhhcyBuZXZlciBiZWVuIGluIHNjaG9vbCBvciBkYXljYXJlIGJlZm9yZSBhbmQgeW91IGFyZSBzb21ld2hhdCB3b3JyaWVkIGFib3V0IHRoZSB0cmFuc2l0aW9uLiBZb3UnZCBsaWtlIHRvIGVuc3VyZSB0aGF0IHlvdSdsbCBiZSBhYmxlIHRvIGhhdmUgc3Ryb25nIGNvbW11bmljYXRpb25hdCBoaXMgbmV3IHNjaG9vbC5cIixcclxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiSG93IGRvZXMgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbCBoYW5kbGUgY29tbXVuaWNhdGluZyB3aXRoIHBhcmVudHM/XCIsXHJcbiAgICAgICAgXCJ0YWdcIjogXCJjb21tdW5pY2F0aW9uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBtb3ZpbmcgdG8gU3QuIExvdWlzIGZyb20gQmVpamluZyBhbmQgbG9va2luZyBmb3IgYSBQcmUtSyBwcm9ncmFtIGZvciB5b3VyIGRhdWdodGVyLCBhZ2UgNS4gU2hlIGlzIHZlcnkgY2xvc2UgdG8gaGVyIGZyaWVuZHMgYW5kIHlvdSBhcmUgd29ycmllZCB0aGF0IHRoZSBtb3ZlIG1pZ2h0IGJlIGhhcmQgb24gaGVyLiBTaGUgbWF5IG5lZWQgc29tZSBleHRyYSBzdXBwb3J0IGZyb20gaGVyIG5ldyB0ZWFjaGVycyBsZWFybmluZyBFbmdsaXNoLCBhZGFwdGluZyB0byBBbWVyaWNhbiBjdWx0dXJlLCBhbmQgbWFraW5nIG5ldyBmcmllbmRzLlwiLFxyXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJIb3cgZG9lcyB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sIHN0YWZmIGFwcHJvYWNoIHByb3ZpZGluZyBleHRyYSBoZWxwIHRvIHN0dWRlbnRzIHdobyBuZWVkIGl0P1wiLFxyXG4gICAgICAgIFwidGFnXCI6IFwiaGVscFwiXHJcbiAgICB9XHJcbl1cclxuIiwiaW1wb3J0IHsgVHJhY2tlckV2ZW50IH0gZnJvbSAnLi9ldmVudCc7XG5jb25zb2xlLmxvZygnZGF0YSBsb2FkZWQuJyk7XG5leHBvcnQgaW50ZXJmYWNlIE10dXJrVVJMRGF0YSB7XG4gICAgcmF3OiBzdHJpbmc7XG4gICAgYXNzaWdubWVudElEOiBzdHJpbmcgfCBudWxsO1xuICAgIGhpdElEOiBzdHJpbmcgfCBudWxsO1xuICAgIHdvcmtlcklEOiBzdHJpbmcgfCBudWxsO1xuICAgIHN1Ym1pdFRvOiBzdHJpbmcgfCBudWxsO1xufVxuXG5jb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5zZWFyY2hQYXJhbXM7XG5cbmV4cG9ydCBjb25zdCB1cmxEYXRhOiBNdHVya1VSTERhdGEgPSB7XG4gICAgcmF3OiB1cmxQYXJhbXMudG9TdHJpbmcoKSxcbiAgICBhc3NpZ25tZW50SUQ6IHVybFBhcmFtcy5nZXQoJ2Fzc2lnbm1lbnRJZCcpLFxuICAgIGhpdElEOiB1cmxQYXJhbXMuZ2V0KCdoaXRJZCcpLFxuICAgIHdvcmtlcklEOiB1cmxQYXJhbXMuZ2V0KCd3b3JrZXJJZCcpLFxuICAgIHN1Ym1pdFRvOiB1cmxQYXJhbXMuZ2V0KCd0dXJrU3VibWl0VG8nKSxcbn07XG5cbmV4cG9ydCBjbGFzcyBEYXRhIHtcbiAgICBwdWJsaWMgbG9nczogeyBbZXZlbnRUeXBlOiBzdHJpbmddOiBUcmFja2VyRXZlbnRbXSB9ID0ge307XG4gICAgcHVibGljIGRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICBwdWJsaWMgZXJyb3JzOiBhbnlbXSA9IFtdO1xuICAgIHB1YmxpYyB1cmxEYXRhOiBNdHVya1VSTERhdGE7XG5cbiAgICBjb25zdHJ1Y3RvcihyYXdNdHVya1VSTERhdGE6IE10dXJrVVJMRGF0YSkge1xuICAgICAgICB0aGlzLnVybERhdGEgPSByYXdNdHVya1VSTERhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIHNlcmlhbGl6ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZGF0YSA9IG5ldyBEYXRhKHVybERhdGEpO1xuXG5PYmplY3QuYXNzaWduKHdpbmRvdywgeyBkYXRhIH0pO1xuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuLi91dGlscy9jb25zb2xlX3dyYXBwZXJcIjtcbmltcG9ydCB7IG5vdyB9IGZyb20gXCIuLi91dGlscy9mdW5jc1wiO1xubG9nKFwiZXZlbnQgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY29uc3QgZW51bSBBY3Rpb25FbnVtIHtcbiAgQ0xJQ0sgPSBcImNsaWNrXCIsXG4gIEJVVFRPTiA9IFwiYnV0dG9uXCIsXG4gIFNDUk9MTCA9IFwic2Nyb2xsXCIsXG4gIEhJU1RPUlkgPSBcImhpc3RvcnlcIixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFja2VyRXZlbnQge1xuICBhY3Rpb246IHN0cmluZztcbiAgdGltZTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0VG9UcmFja2VyRXZlbnQob2JqOiBhbnksIGFjdGlvbjogc3RyaW5nKSB7XG4gIG9iai5hY3Rpb24gPSBhY3Rpb247XG4gIG9iai50aW1lID0gbm93KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RyYWNrZXJFdmVudChvYmo6IGFueSk6IG9iaiBpcyBUcmFja2VyRXZlbnQge1xuICByZXR1cm4gb2JqLmFjdGlvbiAhPT0gdW5kZWZpbmVkICYmIG9iai50aW1lICE9PSB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBCYXNlVHJhY2tlckV2ZW50PFQ+IGltcGxlbWVudHMgVHJhY2tlckV2ZW50IHtcbiAgcHVibGljIGN1c3RFdjogQ3VzdG9tRXZlbnQ7XG4gIHB1YmxpYyBhY3Rpb246IHN0cmluZztcbiAgcHVibGljIHRpbWU6IG51bWJlcjtcbiAgY29uc3RydWN0b3IoYWN0aW9uOiBzdHJpbmcsIGV2ZW50SW5pdERpY3Q/OiBDdXN0b21FdmVudEluaXQ8VD4gfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLmN1c3RFdiA9IG5ldyBDdXN0b21FdmVudChhY3Rpb24sIGV2ZW50SW5pdERpY3QpO1xuICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgIHRoaXMudGltZSA9IG5vdygpO1xuICB9XG5cbiAgcHVibGljIGdldCBkZXRhaWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VzdEV2LmRldGFpbDtcbiAgfVxufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1jbGFzc2VzLXBlci1maWxlXG5leHBvcnQgY2xhc3MgQ2xpY2tFdmVudCBleHRlbmRzIEJhc2VUcmFja2VyRXZlbnQ8e1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgaWQ6IHN0cmluZztcbn0+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgeDogbnVtYmVyLFxuICAgIHk6IG51bWJlcixcbiAgICBpZDogc3RyaW5nLFxuICAgIGV2ZW50SW5pdERpY3Q/OlxuICAgICAgfCBDdXN0b21FdmVudEluaXQ8eyB4OiBudW1iZXI7IHk6IG51bWJlcjsgaWQ6IHN0cmluZyB9PlxuICAgICAgfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgc3VwZXIoQWN0aW9uRW51bS5DTElDSywgZXZlbnRJbml0RGljdCk7XG4gICAgdGhpcy5kZXRhaWwueCA9IHg7XG4gICAgdGhpcy5kZXRhaWwueSA9IHk7XG4gICAgdGhpcy5kZXRhaWwuaWQgPSBpZDtcbiAgfVxufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1jbGFzc2VzLXBlci1maWxlXG5leHBvcnQgY2xhc3MgQnV0dG9uRXZlbnQgZXh0ZW5kcyBCYXNlVHJhY2tlckV2ZW50PHsga2V5OiBzdHJpbmc7IGlkOiBzdHJpbmcgfT4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBpZDogc3RyaW5nLFxuICAgIGV2ZW50SW5pdERpY3Q/OiBDdXN0b21FdmVudEluaXQ8eyBrZXk6IHN0cmluZzsgaWQ6IHN0cmluZyB9PiB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBzdXBlcihBY3Rpb25FbnVtLkNMSUNLLCBldmVudEluaXREaWN0KTtcbiAgICB0aGlzLmRldGFpbC5rZXkgPSBrZXk7XG4gICAgdGhpcy5kZXRhaWwuaWQgPSBpZDtcbiAgfVxufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1jbGFzc2VzLXBlci1maWxlXG5leHBvcnQgY2xhc3MgSGlzdG9yeUV2ZW50IGV4dGVuZHMgQmFzZVRyYWNrZXJFdmVudDx7XG4gIHVybDogc3RyaW5nO1xuICBleHRyYT86IGFueTtcbn0+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZXh0cmE/OiBhbnksXG4gICAgZXZlbnRJbml0RGljdD86IEN1c3RvbUV2ZW50SW5pdDx7IHVybDogc3RyaW5nIH0+IHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHN1cGVyKEFjdGlvbkVudW0uSElTVE9SWSwgZXZlbnRJbml0RGljdCk7XG4gICAgdGhpcy5kZXRhaWwudXJsID0gdXJsO1xuICAgIHRoaXMuZGV0YWlsLmV4dHJhID0gZXh0cmE7XG4gIH1cbn1cbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi4vdXRpbHMvY29uc29sZV93cmFwcGVyXCI7XG5pbXBvcnQgeyBpc1RyYWNrZXJFdmVudCwgVHJhY2tlckV2ZW50IH0gZnJvbSBcIi4vZXZlbnRcIjtcbmxvZyhcInJlY2VpdmVyIGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGNsYXNzIEV2ZW50UmVjZWl2ZXIge1xuICBwcml2YXRlIG1hcCA9IG5ldyBNYXA8c3RyaW5nLCAoZXZlbnQ6IFRyYWNrZXJFdmVudCkgPT4gdm9pZD4oKTtcbiAgcHJpdmF0ZSBlbWl0dGVyID0gbmV3IEV2ZW50VGFyZ2V0KCk7XG5cbiAgcHVibGljIHJlZ2lzdGVyKGV2ZW50VHlwZTogc3RyaW5nLCBjYWxsYmFjaz86IChldmVudDogVHJhY2tlckV2ZW50KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5lbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB0cmFja0V2ID0gKChldmVudCBhcyB1bmtub3duKSBhcyBDdXN0b21FdmVudClcbiAgICAgICAgLmRldGFpbCBhcyBUcmFja2VyRXZlbnQ7XG4gICAgICBpZiAoaXNUcmFja2VyRXZlbnQodHJhY2tFdikgJiYgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sodHJhY2tFdik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm1hcC5zZXQoZXZlbnRUeXBlLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRvRXZlbnQoZXZlbnQ6IFRyYWNrZXJFdmVudCkge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5tYXAuZ2V0KFwiXCIgKyBldmVudC5hY3Rpb24pO1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4uL3JvdXRlci9yb3V0ZXJcIjtcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi4vdXRpbHMvY29uc29sZV93cmFwcGVyXCI7XG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSBcIi4vLi4vcm91dGVyL2hpc3RvcnlcIjtcbmltcG9ydCB7IEQgfSBmcm9tIFwiLi9kb2N1bWVudFwiO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiLi9lbGVtZW50c1wiO1xubG9nKFwiYmFubmVyIGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGNsYXNzIFRvcEJhbm5lciB7XG4gIHB1YmxpYyBzdGF0aWMgc2hvdygpIHtcbiAgICBUb3BCYW5uZXIuc2hvd2luZyA9IHRydWU7XG4gICAgRC5kaXNwbGF5KEVsZW1lbnRzLmRkVXAsIHRydWUpO1xuICAgIEQuZGlzcGxheShFbGVtZW50cy5kZERvd24sIGZhbHNlKTtcbiAgICBELmRpc3BsYXkoRWxlbWVudHMuZGRDb250ZW50LCB0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaGlkZSgpIHtcbiAgICBUb3BCYW5uZXIuc2hvd2luZyA9IGZhbHNlO1xuICAgIEQuZGlzcGxheShFbGVtZW50cy5kZERvd24sIHRydWUpO1xuICAgIEQuZGlzcGxheShFbGVtZW50cy5kZFVwLCBmYWxzZSk7XG4gICAgRC5kaXNwbGF5KEVsZW1lbnRzLmRkQ29udGVudCwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkb0Rpc3BsYXlDaGFuZ2UoKSB7XG4gICAgVG9wQmFubmVyLnNob3dpbmcgPyBUb3BCYW5uZXIuaGlkZSgpIDogVG9wQmFubmVyLnNob3coKTtcbiAgfVxuICBwdWJsaWMgc3RhdGljIHNldHVwKCkge1xuICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihFbGVtZW50cy5kZEFycm93LCBcImNsaWNrXCIsIFRvcEJhbm5lci5kb0Rpc3BsYXlDaGFuZ2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc2hvd2luZyA9IHRydWU7XG59XG5cbkQuYWRkRXZlbnRMaXN0ZW5lcihcIm10dXJrLXRvcC1iYW5uZXItYmFja1wiLCBcImNsaWNrXCIsIChlKSA9PiB7XG4gIGlmIChIaXN0b3J5LmNhbkJhY2t3YXJkKCkpIHtcbiAgICBSb3V0ZXIubG9hZFdpdGhQYXRoUHJlZml4KEhpc3RvcnkuYmFja3dhcmQoKSk7XG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoXCJUaGVyZSBpcyBubyBwYWdlIGhpc3RvcnkgdG8gZ28gYmFjayBmb3IgYXQgdGhpcyB0aW1lIVwiKTtcbiAgfVxufSk7XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgZXJyb3IsIGxvZyB9IGZyb20gXCIuLy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlclwiO1xubG9nKFwiZG9jdW1lbnQgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY2xhc3MgRCB7XG4gIHB1YmxpYyBzdGF0aWMgZG9jOiBEb2N1bWVudCA9IGRvY3VtZW50O1xuXG4gIHB1YmxpYyBzdGF0aWMgZWxlbShlbGVtOiBFbGVtZW50IHwgc3RyaW5nKTogRWxlbWVudCB7XG4gICAgaWYgKHR5cGVvZiBlbGVtID09PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gRC5pZChlbGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVsZW0gYXMgRWxlbWVudDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRpc3BsYXkoZWxlbTogRWxlbWVudCB8IHN0cmluZywgc2hvdzogYm9vbGVhbik6IHZvaWQge1xuICAgIGVsZW0gPSBELmVsZW0oZWxlbSk7XG4gICAgaWYgKHNob3cpIHtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7XG4gICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5XCIpO1xuICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlkKGlkOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgZWxlbWVudCA9IEQuZG9jLmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFbGVtZW50IHdhcyBub3QgZm91bmQsIGlkOiA8JHtpZH0+LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cbiAgcHVibGljIHN0YXRpYyBjbGF6KGNsYXo6IHN0cmluZyk6IEhUTUxDb2xsZWN0aW9uT2Y8RWxlbWVudD4ge1xuICAgIHJldHVybiBELmRvYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXopO1xuICB9XG4gIHB1YmxpYyBzdGF0aWMgdGFnKHRhZzogc3RyaW5nKTogSFRNTENvbGxlY3Rpb25PZjxFbGVtZW50PiB7XG4gICAgcmV0dXJuIEQuZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZyk7XG4gIH1cbiAgcHVibGljIHN0YXRpYyBpbWFnZShpZDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIGVycm9yKCgpID0+IEQuaWQoaWQpLnNldEF0dHJpYnV0ZShcInNyY1wiLCB1cmwpKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBlbGVtOiBFbGVtZW50IHwgc3RyaW5nLFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICBsaXN0ZW5lcjogKGU6IEV2ZW50KSA9PiBhbnlcbiAgKSB7XG4gICAgZWxlbSA9IHRoaXMuZWxlbShlbGVtKTtcbiAgICBjb25zdCB3cmFwcGVyRnVuYyA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGlzdGVuZXIoZSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH07XG4gICAgKGVsZW0gYXMgRWxlbWVudCkuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCB3cmFwcGVyRnVuYyk7XG4gICAgcmV0dXJuIHdyYXBwZXJGdW5jO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBlYWNoKGVsZW06IEVsZW1lbnQgfCBzdHJpbmcsIGFwcGx5OiAobm9kZTogRWxlbWVudCkgPT4gYW55KSB7XG4gICAgZWxlbSA9IHRoaXMuZWxlbShlbGVtKTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGVsZW0uY2hpbGRyZW47XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgYXBwbHkoY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZWFjaFJlY3VyKFxuICAgIGVsZW06IEVsZW1lbnQgfCBzdHJpbmcsXG4gICAgYXBwbHk6IChub2RlOiBFbGVtZW50KSA9PiBhbnlcbiAgKSB7XG4gICAgZWxlbSA9IHRoaXMuZWxlbShlbGVtKTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGVsZW0uY2hpbGRyZW47XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIGFwcGx5KGNoaWxkKTtcbiAgICAgIEQuZWFjaFJlY3VyKGNoaWxkLCBhcHBseSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjcmVhdGU8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4oXG4gICAgdGFnTmFtZTogSyxcbiAgICBvcHRpb25zPzogRWxlbWVudENyZWF0aW9uT3B0aW9uc1xuICApOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10ge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIG9wdGlvbnMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSAnLi4vdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IEQgfSBmcm9tICcuL2RvY3VtZW50JztcbmxvZygnZWxlbWVudCBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuLyoqXG4gKiBUaGVzZSBhcmUgZWxlbWVudHMgdGhhdCBhcmUgaW4gZXZlcnkgc2luZ2xlIHByb2plY3QuIEV2ZW4gaWYgdGhleSBhcmUgbm90IHVzZWQgdGhleSBzaG91bGRcbiAqIGJlIHBsYWNlIGluIHRoZSBwcm9qZWN0IGFuZCBkaXNwbGF5IHNob3VsZCBiZSBzZXQgdG8gbm9uZS4gVGhpcyBzaW1wbGlmaWVzIGNvbmZpZ3VyYXRpb25cbiAqIGFuZCBzb21lIGNvbW1vbiBmdW5jdGlvbnMgYW5kIGFsbG93cyBsZXNzIG51bGwgY2hlY2tzIHRvIGJlIHBlcmZvcm1lZCBvdmVyYWxsLiBJZiB0aGVcbiAqIGVsZW1lbnQgZG9lcyBub3QgZXhpc3QgYXQgcnVuIHRpbWUgYW4gZW1wdHkgZGl2IHdpdGggdGhhdCBpZCBpcyBjcmVhdGVkIGFuZCBpdHMgZGlzcGxheVxuICogaXMgc2V0IHRvIG5vbmUgdGhlbiBhcHBlbmRlZCB0byB0aGUgYm9keS5cbiAqL1xuXG4vKipcbiAqIEF0dGVtcHRzIHRvIGdldCBhbiBlbGVtZW50LCBpZiB1bnN1Y2Nlc3NmdWwsIGNyZWF0ZXMgZGl2IHdpdGggaWQgYW5kIGFwcGVuZHMgdG8gYm9keS5cbiAqXG4gKiBAcGFyYW0gaWQgLSB0aGUgaWQgb2YgdGhlIGVsZW1lbnQgdG8gcmV0cmlldmUuXG4gKi9cbmZ1bmN0aW9uIG1ha2VFbGVtSWZOb3RFeGlzdChpZDogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgIGxldCBlbGVtO1xuICAgIHRyeSB7XG4gICAgICAgIGVsZW0gPSBELmlkKGlkKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgZWxlbSA9IEQuY3JlYXRlKCdkaXYnKTtcbiAgICAgICAgZWxlbS5pZCA9IGlkO1xuICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGVsZW0pO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbTtcbn1cblxuLyoqXG4gKiBDb21tb25seSBhY2Nlc3NlZCBlbGVtZW50cywgYWxsb3dzIGZvciBjbGVhcmVyIGRvbSBtYW5pcCBvbiB0aGVzZSBlbGVtZW50cy5cbiAqL1xuZXhwb3J0IGNvbnN0IEVsZW1lbnRzID0ge1xuICAgIGRvY3VtZW50OiBELmRvYy5kb2N1bWVudEVsZW1lbnQsXG4gICAgd3JhcHBlcjogbWFrZUVsZW1JZk5vdEV4aXN0KCd3cmFwcGVyJyksXG4gICAgaHRtbExvYzogbWFrZUVsZW1JZk5vdEV4aXN0KCdodG1sLWxvYycpLFxuICAgIGlubmVyQm9keTogbWFrZUVsZW1JZk5vdEV4aXN0KCdpbm5lci1ib2R5JyksXG4gICAgZGREb3duOiBtYWtlRWxlbUlmTm90RXhpc3QoJ210dXJrLXRvcC1iYW5uZXItZHJvcC1kb3duLWJ1dHRvbicpLFxuICAgIGRkVXA6IG1ha2VFbGVtSWZOb3RFeGlzdCgnbXR1cmstdG9wLWJhbm5lci1jb2xsYXBzZS1idXR0b24nKSxcbiAgICBkZENvbnRlbnQ6IG1ha2VFbGVtSWZOb3RFeGlzdCgnbXR1cmstdG9wLWJhbm5lci1kcm9wLWRvd24tY29udGVudCcpLFxuICAgIGJhY2tCdXR0b246IG1ha2VFbGVtSWZOb3RFeGlzdCgnbXR1cmstdG9wLWJhbm5lci1iYWNrJyksXG4gICAgZGRBcnJvdzogbWFrZUVsZW1JZk5vdEV4aXN0KCdtdHVyay10b3AtYmFubmVyLWFycm93JyksXG4gICAgbXRUb3BCYW5uZXJUZXh0OiBtYWtlRWxlbUlmTm90RXhpc3QoJ210dXJrLXRvcC1iYW5uZXItdGV4dCcpLFxuICAgIG10U2NlbmFyaW9Db250ZXh0OiBtYWtlRWxlbUlmTm90RXhpc3QoJ3NjZW5hcmlvX2NvbnRleHQnKSxcbiAgICBtdFNjZW5hcmlvUXVlc3Rpb246IG1ha2VFbGVtSWZOb3RFeGlzdCgnc2NlbmFyaW9fcXVlc3Rpb24nKSxcbiAgICBsb2dGaWxlSW5wdXQ6IG1ha2VFbGVtSWZOb3RFeGlzdChcbiAgICAgICAgJ210dXJrLXRvcC1iYW5uZXItZHJvcC1kb3duLWNvbnRlbnQtbG9nLWZpbGUtaW5wdXQnXG4gICAgKSxcbiAgICBzdWJtaXRGb3JtOiBtYWtlRWxlbUlmTm90RXhpc3QoJ210dXJrLXN1Ym1pdC1mb3JtJyksXG4gICAgbW9kYWw6IG1ha2VFbGVtSWZOb3RFeGlzdCgnbW9kYWwnKSxcbn07XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSAnLi4vdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnLi8uLi9kb20vZWxlbWVudHMnO1xubG9nKCdodG1sIGxvYyBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGVudW0gQXBwRW51bSB7XG4gICAgSU5GT1JNQVRJT05fRk9SQUdJTkcgPSAnaW5mb3JtYXRpb24tZm9yYWdpbmcnLFxuICAgIENPR05JVElWRV9MT0FEID0gJ2NvZ25pdGl2ZS1sb2FkJyxcbiAgICBHRU5ERVJfTUFHID0gJ2dlbmRlci1tYWcnLFxuICAgIEVSUk9SID0gJ2Vycm9yJyxcbn1cblxuZXhwb3J0IGVudW0gTW9kZUVudW0ge1xuICAgIFJFQUwgPSAncmVhbCcsXG4gICAgU0FOREJPWCA9ICdzYW5kYm94JyxcbiAgICBURVNUID0gJ3Rlc3QnLFxuICAgIEVSUk9SID0gJ2Vycm9yJyxcbn1cblxuZXhwb3J0IGNsYXNzIEhUTUxMb2Mge1xuICAgIHB1YmxpYyBzdGF0aWMgZWxlbSA9IEVsZW1lbnRzLmh0bWxMb2M7XG4gICAgcHVibGljIHN0YXRpYyBhcHA6IEFwcEVudW07XG4gICAgcHVibGljIHN0YXRpYyBtb2RlOiBNb2RlRW51bTtcbiAgICBwdWJsaWMgc3RhdGljIHNjZW5hcmlvOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldHVwKCkge1xuICAgICAgICBIVE1MTG9jLmFwcCA9IChIVE1MTG9jLmVsZW0uZGF0YXNldC5hcHAgYXMgQXBwRW51bSkgfHwgQXBwRW51bS5FUlJPUjtcbiAgICAgICAgSFRNTExvYy5tb2RlID1cbiAgICAgICAgICAgIChIVE1MTG9jLmVsZW0uZGF0YXNldC5tb2RlIGFzIE1vZGVFbnVtKSB8fCBNb2RlRW51bS5FUlJPUjtcbiAgICAgICAgSFRNTExvYy5zY2VuYXJpbyA9IEhUTUxMb2MuZWxlbS5kYXRhc2V0LnNjZW5hcmlvIHx8ICdlcnJvcic7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gJy4vLi4vdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IEQgfSBmcm9tICcuL2RvY3VtZW50JztcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnLi9lbGVtZW50cyc7XG5sb2coJ21vZGFsIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY2xhc3MgTW9kYWwge1xuICAgIHB1YmxpYyBzdGF0aWMgZWxlbSA9IEVsZW1lbnRzLm1vZGFsO1xuXG4gICAgcHVibGljIHN0YXRpYyBkaXNwbGF5KHNyYzogc3RyaW5nKSB7XG4gICAgICAgIE1vZGFsLmVsZW0uc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgJ3N0eWxlJyxcbiAgICAgICAgICAgIGBsZWZ0OiAke01hdGgucm91bmQod2luZG93LnBhZ2VYT2Zmc2V0KX1weDsgdG9wOiAke01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICApfXB4O2BcbiAgICAgICAgKTtcbiAgICAgICAgTW9kYWwuZWxlbS5jbGFzc0xpc3QucmVwbGFjZSgnaGlkZS1tb2RhbCcsICdzaG93LW1vZGFsJyk7XG4gICAgICAgIEQuZWFjaChNb2RhbC5lbGVtLCAobm9kZSkgPT4ge1xuICAgICAgICAgICAgKG5vZGUgYXMgSFRNTElGcmFtZUVsZW1lbnQpLnNyYyA9IHNyYztcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbm9zY3JvbGwnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGhpZGUoKSB7XG4gICAgICAgIE1vZGFsLmVsZW0uY2xhc3NMaXN0LnJlcGxhY2UoJ3Nob3ctbW9kYWwnLCAnaGlkZS1tb2RhbCcpO1xuICAgICAgICBELmVhY2goTW9kYWwuZWxlbSwgKG5vZGUpID0+IHtcbiAgICAgICAgICAgIChub2RlIGFzIEhUTUxJRnJhbWVFbGVtZW50KS5zcmMgPSAnJztcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9zY3JvbGwnKTtcbiAgICB9XG59XG5cbkQuYWRkRXZlbnRMaXN0ZW5lcihNb2RhbC5lbGVtLCAnY2xpY2snLCAoZSkgPT4ge1xuICAgIE1vZGFsLmhpZGUoKTtcbn0pO1xuRC5lYWNoKE1vZGFsLmVsZW0sIChub2RlKSA9PiB7XG4gICAgRC5hZGRFdmVudExpc3RlbmVyKG5vZGUsICdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbn0pO1xuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGVycm9yLCBsb2cgfSBmcm9tICcuLi91dGlscy9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgbm9vcCwgbm93IH0gZnJvbSAnLi8uLi91dGlscy9mdW5jcyc7XG5sb2coJ3Njcm9sbCBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuLyoqXG4gKiBMaW5lYXIgaW1wbGVtZW50YXRpb24gb2Ygc2Nyb2xsaW5nLlxuICogRm9sbG93cyB0aGUgc2luZ2xldG9uIHBhdHRlcm4sIGNhbGwgZG8gdG8gc3RhcnQgYSBzY3JvbGwgb3BlcmF0aW9uLlxuICpcbiAqIElmIGEgc2Nyb2xsIGlzIGNhbGxlZCB3aGVuIGFub3RoZXIgc2Nyb2xsIGhhcyBhbHJlYWR5IGJlZ3VuIGFuXG4gKiBlcnJvciB3aWxsIGJlIHRocm93biwgYnV0IHRoZSBmaXJzdCBzY3JvbGwgd2lsbCBjb250aW51ZSB1bnRpbCBjb21wbGV0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgU2Nyb2xsIHtcbiAgICBwdWJsaWMgc3RhdGljIFNURVBfSU5fTVMgPSAxNztcblxuICAgIHB1YmxpYyBzdGF0aWMgY2FsbGJhY2soXG4gICAgICAgIGVuZFBvczogbnVtYmVyLFxuICAgICAgICBkdXJhdGlvbjogbnVtYmVyID0gMjAwLFxuICAgICAgICBjb21wbGV0ZTogKC4uLmFyZ3M6IGFueSkgPT4gYW55ID0gbm9vcFxuICAgICk6IHZvaWQge1xuICAgICAgICBpZiAoU2Nyb2xsLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAnQ2Fubm90IG1ha2UgbXVsdGlwbGUgY2FsbHMgdG8gc2Nyb2xsIGF0IHRoZSBzYW1lIHRpbWUuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBTY3JvbGwucnVubmluZyA9IHRydWU7XG4gICAgICAgIGNvbnN0IG9sZENvbXBsZXRlID0gY29tcGxldGU7XG4gICAgICAgIGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgU2Nyb2xsLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGVycm9yKG9sZENvbXBsZXRlKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS51cGRhdGUoZW5kUG9zLCBkdXJhdGlvbiwgY29tcGxldGUpLmF0dGVtcHRTY3JvbGwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHByb21pc2UoZW5kUG9zOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIgPSAyMDApIHtcbiAgICAgICAgaWYgKFNjcm9sbC5ydW5uaW5nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0Nhbm5vdCBtYWtlIG11bHRpcGxlIGNhbGxzIHRvIHNjcm9sbCBhdCB0aGUgc2FtZSB0aW1lLidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgU2Nyb2xsLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgcmVzb2x2ZTogKHZhbHVlPzogdW5rbm93bikgPT4gdm9pZCxcbiAgICAgICAgICAgICAgICByZWplY3Q6IChhcmcwOiBhbnkpID0+IHZvaWRcbiAgICAgICAgICAgICkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJ1blJlc29sdmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgU2Nyb2xsLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZShlbmRQb3MsIGR1cmF0aW9uLCBydW5SZXNvbHZlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRlbXB0U2Nyb2xsKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIFNjcm9sbC5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBydW5uaW5nID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2UgPSBuZXcgU2Nyb2xsKDAsIDAsIG5vb3ApO1xuICAgIHByaXZhdGUgY29tcGxldGU6ICguLi5hcmdzOiBhbnkpID0+IGFueTtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZW5kUG9zOiBudW1iZXIsXG4gICAgICAgIHByaXZhdGUgZHVyYXRpb246IG51bWJlcixcbiAgICAgICAgY29tcGxldGU6ICguLi5hcmdzOiBhbnkpID0+IGFueVxuICAgICkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gKC4uLmFyZ3M6IGFueSkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3Njcm9sbCcpKTtcbiAgICAgICAgICAgIGNvbXBsZXRlKGFyZ3MpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGlzUnVubmluZygpIHtcbiAgICAgICAgcmV0dXJuIFNjcm9sbC5ydW5uaW5nO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlKFxuICAgICAgICBlbmRQb3M6IG51bWJlcixcbiAgICAgICAgZHVyYXRpb246IG51bWJlcixcbiAgICAgICAgY29tcGxldGU6ICguLi5hcmdzOiBhbnkpID0+IGFueVxuICAgICk6IFNjcm9sbCB7XG4gICAgICAgIHRoaXMuZW5kUG9zID0gZW5kUG9zO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjU2Nyb2xsQW1vdW50KCkge1xuICAgICAgICBjb25zdCBjdXJUaW1lID0gbm93KCk7XG4gICAgICAgIGNvbnN0IHN0ZXBzID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAxLFxuICAgICAgICAgICAgKHRoaXMuZHVyYXRpb24gLSBjdXJUaW1lKSAvIFNjcm9sbC5TVEVQX0lOX01TXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGN1clBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCgodGhpcy5lbmRQb3MgLSBjdXJQb3MpIC8gc3RlcHMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2Nyb2xsKCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIHRoaXMuY2FsY1Njcm9sbEFtb3VudCgpKTtcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA9PT0gdGhpcy5lbmRQb3MpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnNjcm9sbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGF0dGVtcHRTY3JvbGwoKSB7XG4gICAgICAgIGlmICgncmVxdWVzdEFuaW1hdGlvbkZyYW1lJyBpbiB3aW5kb3cgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIHRoaXMuZW5kUG9zKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcm9sbCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IG5vb3AgfSBmcm9tICcuLi91dGlscy9mdW5jcyc7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi8uLi9kYXRhLWxvZy9kYXRhJztcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tICcuLy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlcic7XG5pbXBvcnQgeyBwYXJhbXMgfSBmcm9tICcuLy4uL3V0aWxzL3FfcGFyYW1zJztcbmltcG9ydCB7IEQgfSBmcm9tICcuL2RvY3VtZW50JztcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnLi9lbGVtZW50cyc7XG5sb2coJ3N1Ym1pdCBmb3JtIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgaW50ZXJmYWNlIEFsbG93U3VibWlzc2lvbiB7XG4gICAgYWxsb3coKTogc3RyaW5nIHwgbnVsbDtcbiAgICBwcmVTdWJtaXQoLi4uYXJnczogYW55KTogYW55O1xufVxuXG5jb25zdCBrID0gJ05jRjJXUmtVYmY1dHpqNGJJdkk5ODFGcW1TNnBNbE84M2cyajd1NVInO1xuY29uc3QgZ2F0ZSA9ICdodHRwczovLzJ5a29wcTFvaGEuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vUFJPRC9sb2dzJztcblxuY29uc3QgQWxsb3dTdWJtaXNzaW9uRGVmYXVsdDogQWxsb3dTdWJtaXNzaW9uID0ge1xuICAgIGFsbG93OiAoKSA9PiBudWxsLFxuICAgIHByZVN1Ym1pdDogbm9vcCxcbn07XG5cbmV4cG9ydCBjbGFzcyBTdWJtaXRGb3JtIHtcbiAgICBwdWJsaWMgc3RhdGljIGVsZW0gPSBFbGVtZW50cy5zdWJtaXRGb3JtIGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICBwdWJsaWMgc3RhdGljIGFsbG93U3VibWl0RGVmYXVsdCA9IHsgYWxsb3c6ICgpID0+IHRydWUsIHByZVN1Ym1pdDogbm9vcCB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBzZXR1cChcbiAgICAgICAgYWxsb3dTdWJtaXNzaW9uOiBBbGxvd1N1Ym1pc3Npb24gPSBBbGxvd1N1Ym1pc3Npb25EZWZhdWx0XG4gICAgKSB7XG4gICAgICAgIFN1Ym1pdEZvcm0uc3VibWl0RnVuYyA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGFsbG93ZWQgPSBhbGxvd1N1Ym1pc3Npb24uYWxsb3coKTtcbiAgICAgICAgICAgIGlmIChhbGxvd2VkID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcXAgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5zZWFyY2hQYXJhbXM7XG4gICAgICAgICAgICAgICAgZGF0YS51cmxEYXRhLnJhdyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS5hc3NpZ25tZW50SUQgPSBxcC5nZXQoJ2Fzc2lnbm1lbnRJZCcpO1xuICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS5oaXRJRCA9IHFwLmdldCgnaGl0SWQnKTtcbiAgICAgICAgICAgICAgICBkYXRhLnVybERhdGEud29ya2VySUQgPSBxcC5nZXQoJ3dvcmtlcklkJyk7XG4gICAgICAgICAgICAgICAgZGF0YS51cmxEYXRhLnN1Ym1pdFRvID1cbiAgICAgICAgICAgICAgICAgICAgcXAuZ2V0KCd0dXJrU3VibWl0VG8nKSArICdtdHVyay9leHRlcm5hbFN1Ym1pdCc7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudXJsRGF0YS5hc3NpZ25tZW50SUQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgKEQuaWQoJ2Fzc2lnbm1lbnQtaWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnVybERhdGEuYXNzaWdubWVudElEO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS51cmxEYXRhLmhpdElEICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIChELmlkKCdoaXQtaWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnVybERhdGEuaGl0SUQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIChFbGVtZW50cy5zdWJtaXRGb3JtIGFzIEhUTUxGb3JtRWxlbWVudCkuYWN0aW9uID0gZGF0YS51cmxEYXRhXG4gICAgICAgICAgICAgICAgICAgIC5zdWJtaXRUbyBhcyBzdHJpbmc7XG4gICAgICAgICAgICAgICAgYWxsb3dTdWJtaXNzaW9uLnByZVN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChnYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3gtYXBpLWtleSc6IGssXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbmRib3g6IHBhcmFtcy5zYW5kYm94LFxuICAgICAgICAgICAgICAgICAgICAgICAgd3VzdGxfa2V5OiBwYXJhbXMud3VzdGxfa2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdDogcGFyYW1zLnByb2plY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRpb246IHBhcmFtcy5pdGVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6IHBhcmFtcy50YWcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50SUQ6IGRhdGEudXJsRGF0YS5hc3NpZ25tZW50SUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBoaXRJRDogZGF0YS51cmxEYXRhLmhpdElELFxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VySUQ6IGRhdGEudXJsRGF0YS53b3JrZXJJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZzogZGF0YS5zZXJpYWxpemUoKSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgfSk7IC8vIFRPRE86IHZlcmlmeSB0aGlzIGFjdHVhbGx5IHdvcmtzXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcC5zdGF0dXMpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGF3YWl0IHJlc3AuanNvbigpKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcC5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgICdZb3UgbWFkZSBhIGJhZCByZXF1ZXN0IHdpdGggeW91ciBzdWJtaXNzaW9uLiBUaGUgc2VydmVyIHRoaW5rcyB0aGF0IHlvdSBtYWRlIHRoaXMgZXJyb3I6ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhd2FpdCByZXNwLmpzb24oKSkuZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBTdWJtaXRGb3JtLmVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAgICAgJ3N1Ym1pdCcsXG4gICAgICAgICAgICAgICAgICAgIFN1Ym1pdEZvcm0uc3VibWl0RnVuY1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgU3VibWl0Rm9ybS5lbGVtLnN1Ym1pdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChhbGxvd2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgU3VibWl0Rm9ybS5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIFN1Ym1pdEZvcm0uc3VibWl0RnVuYyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgc3VibWl0RnVuYzogKGV2ZW50OiBFdmVudCkgPT4gYW55O1xufVxuIiwiaW1wb3J0IHsgVG9wQmFubmVyIH0gZnJvbSBcIi4vYmFubmVyXCI7XG5pbXBvcnQgeyBIVE1MTG9jIH0gZnJvbSBcIi4vaHRtbF9sb2NcIjtcblxuZXhwb3J0IGNsYXNzIFRyYWNrZXJFbGVtZW50cyB7XG4gIHB1YmxpYyBzdGF0aWMgc2V0dXBUcmFja2VyRWxlbWVudHMoKSB7XG4gICAgLy8gc2V0dXAgZG9tIGVsZW1lbnRzXG4gICAgVG9wQmFubmVyLnNldHVwKCk7XG4gICAgSFRNTExvYy5zZXR1cCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUcmFja2VyIH0gZnJvbSAnLi8uLi90cmFja2VyL3RyYWNrZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhpc3RvcnlFbnRyeSB7XG4gICAgaGFzUHJldlVSTDogYm9vbGVhbjtcbiAgICBwcmV2RW50cnk/OiBIaXN0b3J5RW50cnk7XG4gICAgY3VyclVSTDogc3RyaW5nO1xuICAgIGV4dHJhPzogYW55O1xuICAgIG5leHRFbnRyaWVzOiBIaXN0b3J5RW50cnlbXTtcbn1cblxuZnVuY3Rpb24gbmV3SGlzdG9yeUVudHJ5KFxuICAgIGN1cnJVUkw6IHN0cmluZyxcbiAgICBoYXNQcmV2VVJMOiBib29sZWFuLFxuICAgIHByZXZFbnRyeT86IEhpc3RvcnlFbnRyeSxcbiAgICBleHRyYT86IGFueVxuKTogSGlzdG9yeUVudHJ5IHtcbiAgICBUcmFja2VyLmdldEV2ZW50RGlzcGF0Y2hGdW5jKCdoaXN0b3J5JykoeyB1cmw6IGN1cnJVUkwsIGV4dHJhIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJVUkwsXG4gICAgICAgIGhhc1ByZXZVUkwsXG4gICAgICAgIHByZXZFbnRyeSxcbiAgICAgICAgZXh0cmEsXG4gICAgICAgIG5leHRFbnRyaWVzOiBbXSxcbiAgICB9O1xufVxuXG5leHBvcnQgY2xhc3MgSGlzdG9yeSB7XG4gICAgcHVibGljIHN0YXRpYyBmb3J3YXJkKHVybDogc3RyaW5nLCBleHRyYT86IGFueSk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGhpc3RFbnQgPSBuZXdIaXN0b3J5RW50cnkodXJsLCB0cnVlLCBIaXN0b3J5LmN1cnJoaXN0b3J5LCBleHRyYSk7XG4gICAgICAgIEhpc3RvcnkuY3Vycmhpc3RvcnkubmV4dEVudHJpZXMucHVzaChoaXN0RW50KTtcbiAgICAgICAgSGlzdG9yeS5jdXJyaGlzdG9yeSA9IGhpc3RFbnQ7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjYW5CYWNrd2FyZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIEhpc3RvcnkuY3Vycmhpc3RvcnkuaGFzUHJldlVSTCAmJlxuICAgICAgICAgICAgIUhpc3RvcnkuY3Vycmhpc3RvcnkucHJldkVudHJ5Py5leHRyYT8ud3JhcHBlclxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYmFja3dhcmQoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCFIaXN0b3J5LmNhbkJhY2t3YXJkKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGdvIGJhY2sgYW55IGZ1cnRoZXIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coSGlzdG9yeS5jdXJyaGlzdG9yeS5wcmV2RW50cnkpO1xuICAgICAgICBjb25zdCBwcmV2RW50cnkgPSBIaXN0b3J5LmN1cnJoaXN0b3J5LnByZXZFbnRyeSBhcyBIaXN0b3J5RW50cnk7XG4gICAgICAgIGNvbnN0IG5leHRVUkwgPSBwcmV2RW50cnkuY3VyclVSTDtcbiAgICAgICAgY29uc3QgaGlzdEVudCA9IG5ld0hpc3RvcnlFbnRyeShcbiAgICAgICAgICAgIG5leHRVUkwsXG4gICAgICAgICAgICBwcmV2RW50cnkuaGFzUHJldlVSTCxcbiAgICAgICAgICAgIHByZXZFbnRyeS5wcmV2RW50cnksXG4gICAgICAgICAgICB7IGJhY2s6IHRydWUgfVxuICAgICAgICApO1xuICAgICAgICBIaXN0b3J5LmN1cnJoaXN0b3J5ID0gaGlzdEVudDtcbiAgICAgICAgcmV0dXJuIG5leHRVUkw7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzZXR1cCh1cmw6IHN0cmluZywgZXh0cmE/OiBhbnkpIHtcbiAgICAgICAgSGlzdG9yeS5maXJzdEhpc3RvcnkgPSBuZXdIaXN0b3J5RW50cnkodXJsLCBmYWxzZSwgdW5kZWZpbmVkLCBleHRyYSk7XG4gICAgICAgIEhpc3RvcnkuY3Vycmhpc3RvcnkgPSBIaXN0b3J5LmZpcnN0SGlzdG9yeTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBmaXJzdEhpc3Rvcnk6IEhpc3RvcnlFbnRyeTtcbiAgICBwcml2YXRlIHN0YXRpYyBjdXJyaGlzdG9yeTogSGlzdG9yeUVudHJ5O1xufVxuXG4od2luZG93IGFzIGFueSkuaCA9IEhpc3Rvcnk7XG4iLCJpbXBvcnQgeyBEIH0gZnJvbSAnLi4vZG9tL2RvY3VtZW50JztcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnLi4vZG9tL2VsZW1lbnRzJztcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vZG9tL21vZGFsJztcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBlcnJvciwgbG9nIH0gZnJvbSAnLi4vdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuLi91dGlscy9mdW5jcyc7XG5pbXBvcnQgeyBIVE1MTG9hZGVyIH0gZnJvbSAnLi4vdXRpbHMvaHRtbF9sb2FkZXInO1xuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJy4vaGlzdG9yeSc7XG5sb2coJ3JvdXRlciBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGNvbnN0IGVudW0gUm91dGVyTW9kZSB7XG4gICAgT0ZGLFxuICAgIE9OLFxuICAgIFNUQU5EQVJEX0FMTE9XQU5DRVMsXG59XG5cbi8vIFRPRE86IE5lZWQgdG8gaW1wcm92ZSB0aGlzIHRvIHRha2UgaW4gYSBmdW5jdGlvbiBmb3IgdGhlIGFsbG93YW5jZSBvciByZWR1Y2UgYWJzdHJhY3RuZXNzIG92ZXJhbGwuXG5cbmV4cG9ydCBjb25zdCBlbnVtIFJvdXRlck1vZHVsZSB7XG4gICAgQSA9ICdBJyxcbiAgICBJTUcgPSAnSU1HJyxcbiAgICBGT1JNID0gJ0ZPUk0nLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlckNvbmZpZyB7XG4gICAgbW9kdWxlOiBSb3V0ZXJNb2R1bGU7XG4gICAgbW9kZTogUm91dGVyTW9kZTtcbn1cblxuaW50ZXJmYWNlIEZ1bGxSb3V0ZXJDb25maWcgZXh0ZW5kcyBSb3V0ZXJDb25maWcge1xuICAgIHNldHVwKGNvbmZpZzogRnVsbFJvdXRlckNvbmZpZywgZWxlbTogRWxlbWVudCk6IGFueTtcbn1cblxuZnVuY3Rpb24gdGVzdE9uKGVsZW06IEVsZW1lbnQsIGNvbmZpZzogUm91dGVyQ29uZmlnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgZWxlbS50YWdOYW1lID09PSBjb25maWcubW9kdWxlICYmXG4gICAgICAgIChjb25maWcubW9kZSA9PT0gUm91dGVyTW9kZS5PTiB8fFxuICAgICAgICAgICAgY29uZmlnLm1vZGUgPT09IFJvdXRlck1vZGUuU1RBTkRBUkRfQUxMT1dBTkNFUylcbiAgICApO1xufVxuZnVuY3Rpb24gdGVzdEFsbG93YW5jZShjb25maWc6IFJvdXRlckNvbmZpZykge1xuICAgIHJldHVybiBjb25maWcubW9kZSA9PT0gUm91dGVyTW9kZS5TVEFOREFSRF9BTExPV0FOQ0VTO1xufVxuXG5leHBvcnQgY2xhc3MgUm91dGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIEhBU0hfVEFHUyA9IG5ldyBSZWdFeHAoJyMnKTtcbiAgICBwdWJsaWMgc3RhdGljIEVNUFRZID0gbmV3IFJlZ0V4cCgnXiQnKTtcbiAgICBwdWJsaWMgc3RhdGljIEFUX1NZTUJPTCA9IG5ldyBSZWdFeHAoJ0AnKTtcblxuICAgIHB1YmxpYyBzdGF0aWMgSEFTSF9UQUdfUkVTUE9OREVSID0gbm9vcDtcbiAgICBwdWJsaWMgc3RhdGljIEVNUFRZX1JFU1BPTkRFUiA9IChldmVudDogRXZlbnQpID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcHVibGljIHN0YXRpYyBBVF9TWU1CT0xfUkVTUE9OREVSID0gKGV2ZW50OiBFdmVudCkgPT5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHB1YmxpYyBzdGF0aWMgcGF0aFByZWZpeCA9ICcnO1xuXG4gICAgcHVibGljIHN0YXRpYyBjb25maWd1cmUoY29uZmlnczogUm91dGVyQ29uZmlnW10sIHBhdGhQcmVmaXg6IHN0cmluZykge1xuICAgICAgICBjb25maWdzLmZvckVhY2goKGNvbmZpZykgPT4ge1xuICAgICAgICAgICAgUm91dGVyLmNvbmZpZ3Muc2V0KGNvbmZpZy5tb2R1bGUsIFJvdXRlci51cGdyYWRlQ29uZmlnKGNvbmZpZykpO1xuICAgICAgICB9KTtcbiAgICAgICAgUm91dGVyLnBhdGhQcmVmaXggPSBwYXRoUHJlZml4O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0dXAoZWxlbTogRWxlbWVudCB8IHN0cmluZykge1xuICAgICAgICBELmVhY2hSZWN1cihlbGVtLCAobm9kZSkgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBjb25maWcgb2YgUm91dGVyLmNvbmZpZ3MudmFsdWVzKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGVzdE9uKG5vZGUsIGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLnNldHVwKGNvbmZpZywgbm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIFNUQU5EQVJEX0xJTktfTElTVEVORVIoZTogTW91c2VFdmVudCkge1xuICAgICAgICByZXR1cm4gZXJyb3IoKCkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSB0YXJnZXQuaHJlZjtcbiAgICAgICAgICAgIEhpc3RvcnkuZm9yd2FyZChSb3V0ZXIuZ2V0UGF0aE5hbWUodXJsKSk7XG4gICAgICAgICAgICBjb25zdCByZXQgPSBIVE1MTG9hZGVyLmxvYWRVUkwodXJsLCBFbGVtZW50cy5odG1sTG9jKTtcbiAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbmV3UGFnZUxvYWQnKSk7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIE9OX0NPTVBMRVRFX1NMTChwb3N0OiAoZTogTW91c2VFdmVudCkgPT4gYW55KSB7XG4gICAgICAgIHJldHVybiAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgZXJyb3IoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGF3YWl0IFJvdXRlci5TVEFOREFSRF9MSU5LX0xJU1RFTkVSKGUpO1xuICAgICAgICAgICAgICAgIHBvc3QoZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIElNQUdFX0xJTktfTElTVEVORVIoZTogTW91c2VFdmVudCkge1xuICAgICAgICByZXR1cm4gZXJyb3IoKCkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIEZPUk1fT0ZGX0xJU1RFTkVSKGU6IEV2ZW50KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICdBbGwgZm9ybXMgZXhjZXB0IGZvciB0aGUgb25lIGluIHRoZSB0b3AgaGVhZGVyIGFyZSBpbmFjdGl2ZS4nXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0QWxsb3dhbmNlc09uKCkge1xuICAgICAgICBSb3V0ZXIucmVnaXN0ZXJBbGxvd2FuY2UoXG4gICAgICAgICAgICB7IHJlZ2V4OiBSb3V0ZXIuRU1QVFksIGZ1bmM6IFJvdXRlci5FTVBUWV9SRVNQT05ERVIgfSxcbiAgICAgICAgICAgIHsgcmVnZXg6IFJvdXRlci5IQVNIX1RBR1MsIGZ1bmM6IFJvdXRlci5IQVNIX1RBR19SRVNQT05ERVIgfSxcbiAgICAgICAgICAgIHsgcmVnZXg6IFJvdXRlci5BVF9TWU1CT0wsIGZ1bmM6IFJvdXRlci5BVF9TWU1CT0xfUkVTUE9OREVSIH1cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0QWxsb3dhbmNlc09mZigpIHtcbiAgICAgICAgUm91dGVyLnVucmVnaXN0ZXJBbGxvd2FuY2UoXG4gICAgICAgICAgICBSb3V0ZXIuRU1QVFksXG4gICAgICAgICAgICBSb3V0ZXIuSEFTSF9UQUdTLFxuICAgICAgICAgICAgUm91dGVyLkFUX1NZTUJPTFxuICAgICAgICApO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyQWxsb3dhbmNlKFxuICAgICAgICAuLi5yZWdleHM6IEFycmF5PHsgcmVnZXg6IFJlZ0V4cDsgZnVuYzogKGV2ZW50OiBFdmVudCkgPT4gYW55IH0+XG4gICAgKSB7XG4gICAgICAgIHJlZ2V4cy5mb3JFYWNoKChyZWdleCkgPT5cbiAgICAgICAgICAgIFJvdXRlci5saW5rQWxsb3dhbmNlcy5zZXQocmVnZXgucmVnZXgsIHJlZ2V4LmZ1bmMpXG4gICAgICAgICk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgdW5yZWdpc3RlckFsbG93YW5jZSguLi5yZWdleHM6IFJlZ0V4cFtdKSB7XG4gICAgICAgIHJlZ2V4cy5mb3JFYWNoKChyZWdleCkgPT4gUm91dGVyLmxpbmtBbGxvd2FuY2VzLmRlbGV0ZShyZWdleCkpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGNsZWFyQWxsb3dhbmNlcygpIHtcbiAgICAgICAgUm91dGVyLmxpbmtBbGxvd2FuY2VzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBsb2FkKHVybDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIEhpc3RvcnkuZm9yd2FyZChSb3V0ZXIuZ2V0UGF0aE5hbWUodXJsKSk7XG4gICAgICAgIGNvbnN0IHJldCA9IGF3YWl0IEhUTUxMb2FkZXIubG9hZFVSTCh1cmwsIEVsZW1lbnRzLmh0bWxMb2MpO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ25ld1BhZ2VMb2FkJykpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbG9hZFdpdGhQYXRoUHJlZml4KHBhZ2U6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBjb25zdCByZXQgPSBIVE1MTG9hZGVyLmxvYWRVUkwoXG4gICAgICAgICAgICBSb3V0ZXIucGF0aFByZWZpeCArIHBhZ2UsXG4gICAgICAgICAgICBFbGVtZW50cy5odG1sTG9jXG4gICAgICAgICk7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbmV3UGFnZUxvYWQnKSk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgU2V0dXBGdW5jdGlvbnMgPSB7XG4gICAgICAgIEE6IChjb25maWc6IEZ1bGxSb3V0ZXJDb25maWcsIGVsZW06IEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFOb2RlID0gZWxlbSBhcyBIVE1MQW5jaG9yRWxlbWVudDtcbiAgICAgICAgICAgIGlmICh0ZXN0QWxsb3dhbmNlKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFzc2VzUmVnZXhUZXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBocmVmID0gYU5vZGUuaHJlZjtcbiAgICAgICAgICAgICAgICBSb3V0ZXIubGlua0FsbG93YW5jZXMuZm9yRWFjaCgoZnVuYywgcmVnZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVzdCA9IHJlZ2V4LnRlc3QoaHJlZik7XG4gICAgICAgICAgICAgICAgICAgIHBhc3Nlc1JlZ2V4VGVzdCA9IHBhc3Nlc1JlZ2V4VGVzdCAmJiAhdGVzdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCBmdW5jKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwYXNzZXNSZWdleFRlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhyZWYuc3Vic3RyKGhyZWYubGVuZ3RoIC0gMykgPT09ICdwZGYnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9kYWwuZGlzcGxheShocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdjbGljaycsIChlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5TVEFOREFSRF9MSU5LX0xJU1RFTkVSKGUgYXMgTW91c2VFdmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCAoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLlNUQU5EQVJEX0xJTktfTElTVEVORVIoZSBhcyBNb3VzZUV2ZW50KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIElNRzogKGNvbmZpZzogRnVsbFJvdXRlckNvbmZpZywgZWxlbTogRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1nTm9kZSA9IGVsZW0gYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICAgICAgICAgIGlmICh0ZXN0QWxsb3dhbmNlKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFzc2VzUmVnZXhUZXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIubGlua0FsbG93YW5jZXMuZm9yRWFjaCgoZnVuYywgcmVnZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVzdCA9ICFyZWdleC50ZXN0KGltZ05vZGUuc3JjKTtcbiAgICAgICAgICAgICAgICAgICAgcGFzc2VzUmVnZXhUZXN0ID0gcGFzc2VzUmVnZXhUZXN0ICYmIHRlc3Q7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgJ2NsaWNrJywgZnVuYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocGFzc2VzUmVnZXhUZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCAoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5JTUFHRV9MSU5LX0xJU1RFTkVSKGUgYXMgTW91c2VFdmVudClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCAoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLklNQUdFX0xJTktfTElTVEVORVIoZSBhcyBNb3VzZUV2ZW50KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIEZPUk06IChjb25maWc6IEZ1bGxSb3V0ZXJDb25maWcsIGVsZW06IEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1Ob2RlID0gZWxlbSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAodGVzdEFsbG93YW5jZShjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhc3Nlc1JlZ2V4VGVzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgUm91dGVyLmxpbmtBbGxvd2FuY2VzLmZvckVhY2goKGZ1bmMsIHJlZ2V4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlc3QgPSAhcmVnZXgudGVzdChmb3JtTm9kZS5zcmMpO1xuICAgICAgICAgICAgICAgICAgICBwYXNzZXNSZWdleFRlc3QgPSBwYXNzZXNSZWdleFRlc3QgJiYgdGVzdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCBmdW5jKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwYXNzZXNSZWdleFRlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdWJtaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLkZPUk1fT0ZGX0xJU1RFTkVSXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgJ3N1Ym1pdCcsIFJvdXRlci5GT1JNX09GRl9MSVNURU5FUik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHByaXZhdGUgc3RhdGljIGNvbmZpZ3MgPSBuZXcgTWFwPFJvdXRlck1vZHVsZSwgRnVsbFJvdXRlckNvbmZpZz4oKTtcblxuICAgIHByaXZhdGUgc3RhdGljIGxpbmtBbGxvd2FuY2VzOiBNYXA8UmVnRXhwLCAoZXZlbnQ6IEV2ZW50KSA9PiBhbnk+ID0gbmV3IE1hcDxcbiAgICAgICAgUmVnRXhwLFxuICAgICAgICAoZXZlbnQ6IEV2ZW50KSA9PiBhbnlcbiAgICA+KCk7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBwYXRoUmVnZXggPSAvXFwvKFtcXHddKy5odG1sKS87XG5cbiAgICBwcml2YXRlIHN0YXRpYyB1cGdyYWRlQ29uZmlnKGNvbmZpZzogUm91dGVyQ29uZmlnKTogRnVsbFJvdXRlckNvbmZpZyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb2R1bGU6IGNvbmZpZy5tb2R1bGUsXG4gICAgICAgICAgICBtb2RlOiBjb25maWcubW9kZSxcbiAgICAgICAgICAgIHNldHVwOiBSb3V0ZXIuU2V0dXBGdW5jdGlvbnNbY29uZmlnLm1vZHVsZV0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByaXZhdGUgc3RhdGljIGdldFBhdGhOYW1lKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgcmV0ID0gUm91dGVyLnBhdGhSZWdleC5leGVjKHVybCk7XG4gICAgICAgIHJldHVybiByZXQgPT09IG51bGwgPyB1cmwgOiByZXQubGVuZ3RoID4gMSA/IHJldFsxXSA6IHVybDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBpc1RyYWNrZXJFdmVudCwgb2JqZWN0VG9UcmFja2VyRXZlbnQgfSBmcm9tICcuLi9kYXRhLWxvZy9ldmVudCc7XG5pbXBvcnQgeyBFdmVudFJlY2VpdmVyIH0gZnJvbSAnLi4vZGF0YS1sb2cvcmVjZWl2ZXInO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tICcuLi9kb20vZWxlbWVudHMnO1xuaW1wb3J0IHsgVHJhY2tlckVsZW1lbnRzIH0gZnJvbSAnLi4vZG9tL3RyYWNrZXJfZWxlbXMnO1xuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZywgc2V0RGVidWdMZXZlbCB9IGZyb20gJy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlcic7XG5pbXBvcnQgeyBTY2VuYXJpbyB9IGZyb20gJy4uL3V0aWxzL3NjZW5hcmlvcyc7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi8uLi9kYXRhLWxvZy9kYXRhJztcbmltcG9ydCB7IEFsbG93U3VibWlzc2lvbiwgU3VibWl0Rm9ybSB9IGZyb20gJy4vLi4vZG9tL3N1Ym1pdF9mb3JtJztcblxubG9nKCd0cmFja2VyIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tlckNvbmZpZ3VyYXRpb24ge1xuICAgIGFsbG93U3VibWlzc2lvbjogQWxsb3dTdWJtaXNzaW9uO1xuICAgIGRlYnVnTGV2ZWw6IERlYnVnTGV2ZWxFbnVtO1xuICAgIGJ1Y2tldE5hbWU6IHN0cmluZztcbiAgICBrZXlQcmVmaXg6IHN0cmluZztcbiAgICBzZXR1cCgpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgVHJhY2tlciB7XG4gICAgcHVibGljIHN0YXRpYyBsYXN0UG9zID0geyB4OiAwLCB5OiAwLCB0aW1lOiAwIH07XG5cbiAgICBwdWJsaWMgc3RhdGljIGxvYWRTY2VuYXJpbyhzY2VuOiBTY2VuYXJpbykge1xuICAgICAgICBsZXQgc3ViID0gc2Nlbi5jb250ZXh0O1xuICAgICAgICBpZiAoc3ViLmxlbmd0aCA+IDUwKSB7XG4gICAgICAgICAgICBzdWIgPSBzdWIuc3Vic3RyaW5nKDAsIDUwKTtcbiAgICAgICAgICAgIGNvbnN0IGluZHMgPSBbXG4gICAgICAgICAgICAgICAgc3ViLmxhc3RJbmRleE9mKCcgJyksXG4gICAgICAgICAgICAgICAgc3ViLmxhc3RJbmRleE9mKCcuJyksXG4gICAgICAgICAgICAgICAgc3ViLmxhc3RJbmRleE9mKCcsJyksXG4gICAgICAgICAgICAgICAgc3ViLmxhc3RJbmRleE9mKCc/JyksXG4gICAgICAgICAgICAgICAgc3ViLmxhc3RJbmRleE9mKCchJyksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgY29uc3QgaW5kID0gTWF0aC5tYXgoLi4uaW5kcyk7XG4gICAgICAgICAgICBzdWIgPSBzdWIuc3Vic3RyaW5nKDAsIGluZCkgKyAnLi4uJztcbiAgICAgICAgfVxuXG4gICAgICAgIEVsZW1lbnRzLm10VG9wQmFubmVyVGV4dC5pbm5lclRleHQgPSBzdWI7XG4gICAgICAgIEVsZW1lbnRzLm10U2NlbmFyaW9Db250ZXh0LmlubmVyVGV4dCA9IHNjZW4uY29udGV4dDtcbiAgICAgICAgRWxlbWVudHMubXRTY2VuYXJpb1F1ZXN0aW9uLmlubmVyVGV4dCA9IHNjZW4ucXVlc3Rpb247XG4gICAgICAgIEVsZW1lbnRzLmh0bWxMb2MuZGF0YXNldC50YXNrID0gc2Nlbi50YWc7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzdGFydChjb25maWc6IFRyYWNrZXJDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHNldERlYnVnTGV2ZWwoY29uZmlnLmRlYnVnTGV2ZWwpO1xuICAgICAgICAvLyBjb25maWd1cmUgdHJhY2tlciBzcGVjaWZpYyBlbGVtZW50c1xuICAgICAgICBUcmFja2VyRWxlbWVudHMuc2V0dXBUcmFja2VyRWxlbWVudHMoKTtcbiAgICAgICAgU3VibWl0Rm9ybS5zZXR1cChjb25maWcuYWxsb3dTdWJtaXNzaW9uKTtcbiAgICAgICAgZGF0YS5kYXRhLnRhc2sgPSBFbGVtZW50cy5odG1sTG9jLmRhdGFzZXQudGFzaztcbiAgICAgICAgY29uZmlnLnNldHVwKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlckV2ZW50KGV2ZW50VHlwZTogc3RyaW5nKSB7XG4gICAgICAgIGRhdGEubG9nc1tldmVudFR5cGVdID0gW107XG4gICAgICAgIHRoaXMucmVjZWl2ZXIucmVnaXN0ZXIoZXZlbnRUeXBlLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRhdGEubG9nc1tldmVudFR5cGVdLnB1c2goZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXZlbnREaXNwYXRjaEZ1bmMoZXZlbnRUeXBlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEV2ZW50RGlzcGF0Y2hGdW5jKGV2ZW50VHlwZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiAoZXZEYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXZEYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGlmICghaXNUcmFja2VyRXZlbnQoZXZEYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RUb1RyYWNrZXJFdmVudChldkRhdGEsIGV2ZW50VHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucmVjZWl2ZXIuZG9FdmVudChldkRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXR0YWNoRGF0YShrZXk6IHN0cmluZywgYXR0cmlidXRlOiBhbnkpIHtcbiAgICAgICAgZGF0YS5kYXRhW2tleV0gPSBhdHRyaWJ1dGU7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjb21wdXRlQXR0cmlidXRlKG5hbWU6IHN0cmluZywgY29tcHV0ZTogKHZhbDogYW55KSA9PiBhbnkpIHtcbiAgICAgICAgZGF0YS5kYXRhW25hbWVdID0gY29tcHV0ZShkYXRhLmRhdGFbbmFtZV0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHJlY2VpdmVyID0gbmV3IEV2ZW50UmVjZWl2ZXIoKTtcbn1cbiIsImltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi8uLi9kYXRhLWxvZy9kYXRhXCI7XG5sb2coXCJjb25zb2xlIHdyYXBwZXIgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXJyb3I8VD4oXG4gIGZ1bmM6ICguLi5hcmdzOiBhbnkpID0+IFRcbik6IFByb21pc2U8VCB8IHVuZGVmaW5lZD4ge1xuICByZXR1cm4gZXJyb3JITyhmdW5jKSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JITzxUPihcbiAgZnVuYzogKC4uLmFyZ3M6IGFueSkgPT4gVFxuKTogKC4uLmFyZ3M6IGFueSkgPT4gUHJvbWlzZTxUIHwgdW5kZWZpbmVkPiB7XG4gIHJldHVybiBhc3luYyAoLi4uYXJnczogYW55KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jKGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkYXRhLmVycm9ycy5wdXNoKGVycm9yKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gRGVidWdMZXZlbEVudW0ge1xuICBOT05FID0gMSxcbiAgQkFTSUMgPSAyLFxuICBERVRBSUxFRCA9IDMsXG59XG5cbmxldCBkZWJ1Z0xldmVsOiBEZWJ1Z0xldmVsRW51bSA9IERlYnVnTGV2ZWxFbnVtLkJBU0lDO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVidWdMZXZlbChsZXZlbDogRGVidWdMZXZlbEVudW0pIHtcbiAgZGVidWdMZXZlbCA9IGxldmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nKG1lc3NhZ2U6IHN0cmluZywgaW1wb3J0YW5jZTogRGVidWdMZXZlbEVudW0pIHtcbiAgaWYgKGRlYnVnTGV2ZWwgPj0gaW1wb3J0YW5jZSkge1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4vY29uc29sZV93cmFwcGVyXCI7XG5sb2coXCJmdW5jcyBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZW1wdHlcbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge31cbmV4cG9ydCBmdW5jdGlvbiBub3coKTogbnVtYmVyIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufVxuIiwiaW1wb3J0IHsgRCB9IGZyb20gJy4uL2RvbS9kb2N1bWVudCc7XG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSAnLi9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vZnVuY3MnO1xubG9nKCdodG1sIGxvYWRlciBsb2FkZWQuJywgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuZXhwb3J0IGludGVyZmFjZSBDYWNoZSB7XG4gICAgW25hbWU6IHN0cmluZ106IEVsZW1lbnQ7XG59XG5leHBvcnQgY2xhc3MgSFRNTExvYWRlciB7XG4gICAgcHVibGljIHN0YXRpYyBDQUNIRTogQ2FjaGUgPSB7fTtcblxuICAgIHB1YmxpYyBzdGF0aWMgZmluaXNoKCkge1xuICAgICAgICBIVE1MTG9hZGVyLmZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgSFRNTExvYWRlci5mbGF0dGVuVFNMb2FkVGFncygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaXNGaW5pc2hlZCgpIHtcbiAgICAgICAgcmV0dXJuIEhUTUxMb2FkZXIuZmluaXNoZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjYWNoZUhUTUwobmFtZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKEhUTUxMb2FkZXIuZmluaXNoZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAnQ2Fubm90IGNhY2hlIG5ldyBIVE1MIGVudGl0aWVzIGFmdGVyIHRoZSBhcHBsaWNhdGlvbiBoYXMgYmVlbiBzdGFydGVkLidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdHNsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHMtbG9hZCcpO1xuICAgICAgICB0c2wuZGF0YXNldC5uYW1lID0gbmFtZTtcbiAgICAgICAgdHNsLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMuQ0FDSEVbbmFtZV0gPSB0c2w7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlclBvc3RMb2FkRnVuYyhmdW5jOiAoKSA9PiBhbnkpIHtcbiAgICAgICAgbG9nKCdyZWdzaXRlciBwb3N0IGxvYWQgZnVuY3Rpb24nLCBEZWJ1Z0xldmVsRW51bS5ERVRBSUxFRCk7XG4gICAgICAgIEhUTUxMb2FkZXIucG9zdExvYWRGdW5jID0gZnVuYztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGxvYWQoaHRtbDogc3RyaW5nLCBlbGVtOiBFbGVtZW50IHwgc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxvZygnYmVnaW4gbG9hZCcsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gRC5lbGVtKGVsZW0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgICAgICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoY29udGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZnJhZyA9IHJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChodG1sKTtcbiAgICAgICAgICAgICAgICBIVE1MTG9hZGVyLnJlbW92ZVRhZ3NGcm9tRG9jdW1lbnRGcmFnbWVudChmcmFnLCAnc2NyaXB0Jyk7XG4gICAgICAgICAgICAgICAgSFRNTExvYWRlci5sb2FkQWxsQ2FjaGVkRWxlbWVudHMoZnJhZyk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICBjb250ZXh0LmFwcGVuZENoaWxkKGZyYWcpO1xuICAgICAgICAgICAgICAgIGxvZygnZW5kIGxvYWQnLCBEZWJ1Z0xldmVsRW51bS5ERVRBSUxFRCk7XG4gICAgICAgICAgICAgICAgSFRNTExvYWRlci5wb3N0TG9hZEZ1bmMoKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbG9hZFVSTCh1cmw6IHN0cmluZywgZWxlbTogRWxlbWVudCB8IHN0cmluZykge1xuICAgICAgICByZXR1cm4gSFRNTExvYWRlci5sb2FkKGF3YWl0IEhUTUxMb2FkZXIuZ2V0SFRNTCh1cmwpLCBlbGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEhUTUwodXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxvZygnYmVnaW4gcmVxdWVzdCcsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2VuZChudWxsKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nKCdyZXNvbHZlIHJlcXVlc3QnLCBEZWJ1Z0xldmVsRW51bS5ERVRBSUxFRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmluaXNoZWQgPSBmYWxzZTtcblxuICAgIHByaXZhdGUgc3RhdGljIHBvc3RMb2FkRnVuYzogKCkgPT4gYW55ID0gbm9vcDtcblxuICAgIHByaXZhdGUgc3RhdGljIHJlbW92ZVRhZ3NGcm9tRG9jdW1lbnRGcmFnbWVudChcbiAgICAgICAgZnJhZzogRG9jdW1lbnRGcmFnbWVudCxcbiAgICAgICAgdGFnTmFtZTogc3RyaW5nXG4gICAgKSB7XG4gICAgICAgIGZyYWcucXVlcnlTZWxlY3RvckFsbCh0YWdOYW1lKS5mb3JFYWNoKCh0YWcpID0+IGZyYWcucmVtb3ZlQ2hpbGQodGFnKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmxhdHRlblRTTG9hZFRhZ3MoKSB7XG4gICAgICAgIGxvZygnRmxhdHRlbmluZycsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgICAgICAgY29uc3QgcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgICAgICBPYmplY3Qua2V5cyhIVE1MTG9hZGVyLkNBQ0hFKS5mb3JFYWNoKFxuICAgICAgICAgICAgKG5hbWUpID0+XG4gICAgICAgICAgICAgICAgKEhUTUxMb2FkZXIuQ0FDSEVbbmFtZV0gPSBIVE1MTG9hZGVyLmZsYXR0ZW5UU0xvYWRUYWcoXG4gICAgICAgICAgICAgICAgICAgIEhUTUxMb2FkZXIuZ2V0Q2FjaGVkQ29udGVudChuYW1lKSBhcyBFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBzLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgKSBhcyBFbGVtZW50KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIG11bHRpcGxlVGFicyhuOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBsZXQgcmV0ID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICByZXQgKz0gJ1xcdCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBmbGF0dGVuVFNMb2FkVGFnKFxuICAgICAgICBlbGVtOiBFbGVtZW50LFxuICAgICAgICBmbGF0dGVuZWQ6IFNldDxzdHJpbmc+LFxuICAgICAgICBjb3VudDogbnVtYmVyXG4gICAgKTogRWxlbWVudCB8IG51bGwge1xuICAgICAgICBjb25zdCB0YWJzID0gSFRNTExvYWRlci5tdWx0aXBsZVRhYnMoY291bnQpO1xuICAgICAgICBpZiAoY291bnQgPiAxMDApIHtcbiAgICAgICAgICAgIGFsZXJ0KCdDaGVjayB0aGUgY29uc29sZSwgYW4gZXJyb3IgaGFzIG9jY3VycmVkLicpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdJdCBzZWVtcyBsaWtlIHlvdSBtaWdodCBoYXZlIGluZmluaXRlbHkgcmVjdXJzaXZlbHkgbmVzdGVkIHRhZ3MuJyArXG4gICAgICAgICAgICAgICAgICAgICdcXG5IZXJlIGFyZSBhbGwgb2YgdGhlIHRhZ3MgdGhhdCBoYXZlIGJlZW4gZmxhdHRlbmVkIHNvIGZhcjogJyArXG4gICAgICAgICAgICAgICAgICAgIGZsYXR0ZW5lZCArXG4gICAgICAgICAgICAgICAgICAgICdcXG5IZXJlIGlzIHRoZSBuYW1lIG9mIHRoZSBjdXJyZW50IGVsZW1lbnQ6ICcgK1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmFtZSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcbiAgICAgICAgaWYgKG5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBIVE1MTG9hZGVyLmdldENhY2hlZENvbnRlbnQobmFtZSk7XG4gICAgICAgIGlmIChjb250ZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmxhdHRlbmVkLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKS5mb3JFYWNoKChlKSA9PiBlLnJlbW92ZSgpKTtcbiAgICAgICAgY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCd0cy1sb2FkJykuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBIVE1MTG9hZGVyLmZsYXR0ZW5UU0xvYWRUYWcoZSwgZmxhdHRlbmVkLCBjb3VudCArIDEpO1xuICAgICAgICAgICAgaWYgKGNoaWxkICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZS5yZXBsYWNlV2l0aChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBmbGF0dGVuZWQuYWRkKG5hbWUpO1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXRDYWNoZWRDb250ZW50KFxuICAgICAgICBuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkXG4gICAgKTogRWxlbWVudCB8IG51bGwge1xuICAgICAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkIHx8IG5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBIVE1MTG9hZGVyLkNBQ0hFW25hbWVdO1xuICAgICAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkIHx8IGNvbnRlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZW50LmNsb25lTm9kZSh0cnVlKSBhcyBFbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGxvYWRBbGxDYWNoZWRFbGVtZW50cyhmcmFnOiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgIGZyYWcucXVlcnlTZWxlY3RvckFsbCgndHMtbG9hZCcpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gSFRNTExvYWRlci5nZXRDYWNoZWRDb250ZW50KG5hbWUpO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGVsZW0ucmVwbGFjZVdpdGgoY29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIi4uL2RvbS9lbGVtZW50c1wiO1xuaW1wb3J0IHsgRCB9IGZyb20gXCIuLy4uL2RvbS9kb2N1bWVudFwiO1xuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuL2NvbnNvbGVfd3JhcHBlclwiO1xubG9nKFwiaWQgZ2VuZXJhdG9yIGxvYWRlZFwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY2xhc3MgSURHZW5lcmF0b3Ige1xuICBwdWJsaWMgc3RhdGljIHJlc2V0KCkge1xuICAgIElER2VuZXJhdG9yLmlkQ291bnQgPSAwO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXQgbmV4dCgpIHtcbiAgICBJREdlbmVyYXRvci5pZENvdW50ICs9IDE7XG4gICAgcmV0dXJuIElER2VuZXJhdG9yLnByZWZpeCArIElER2VuZXJhdG9yLmlkQ291bnQ7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGFwcGx5SUQoZWxlbTogRWxlbWVudCkge1xuICAgIGVsZW0uaWQgPSBlbGVtLmlkID8gZWxlbS5pZCA6IElER2VuZXJhdG9yLm5leHQ7XG4gIH1cblxuICAvKipcbiAgICogUmVjdXJzaXZlbHkgYWRkcyBpZHMgdG8gYWxsIGVsZW1lbnRzIHRoYXQgYXJlIGJlbG93IHRoZSBnaXZlblxuICAgKiBlbGVtZW50IGluIHRoZSBoZWlyYXJjaHkuXG4gICAqXG4gICAqIEBwYXJhbSBlbGVtIC0gdGhlIGVsZW1lbnQgdG8gc3RhcnQgYXBwbHlpbmcgaWRzIHRvIGl0cyBjaGlsZHJlbi5cbiAgICogICAgICAgICAgICAgICAgICBXaWxsIG5vdCBhcHBseSBhbiBpZCB0byB0aGlzIGVsZW1lbnQuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFwcGx5UmVjdXIoZWxlbTogRWxlbWVudCB8IHN0cmluZykge1xuICAgIEQuZWFjaFJlY3VyKGVsZW0sIHRoaXMuYXBwbHlJRCk7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoZXMgaWRzIHRvIGFsbCBodG1sIGVsZW1lbnRzIGluIHRoZSB0YXJnZXQgbG9jYXRpb24gaW4gdGhlIERPTSB0aGF0IGRvIG5vdCBoYXZlIGlkcy5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXR0YWNoSWRzVG9BbGxFbGVtZW50cygpIHtcbiAgICBJREdlbmVyYXRvci5hcHBseVJlY3VyKEVsZW1lbnRzLmh0bWxMb2MpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgaWRDb3VudCA9IDA7XG4gIHByaXZhdGUgc3RhdGljIHByZWZpeCA9IFwiYXV0b19nZW5faWRfdW5xX1wiO1xufVxuIiwiY29uc3QgcVBhcmFtcyA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcztcclxuZXhwb3J0IGNvbnN0IHBhcmFtcyA9IHtcclxuICAgIHd1c3RsX2tleTogJycsXHJcbiAgICBzYW5kYm94OiBmYWxzZSxcclxuICAgIHByb2plY3Q6ICcnLFxyXG4gICAgaXRlcmF0aW9uOiAwLFxyXG4gICAgdGFnOiAnJyxcclxufTtcclxudHJ5IHtcclxuICAgIHFQYXJhbXMuZm9yRWFjaChjb25zb2xlLmxvZyk7XHJcbiAgICBpZiAoXHJcbiAgICAgICAgWyd3dXN0bF9rZXknLCAnc2FuZGJveCcsICdwcm9qZWN0JywgJ2l0ZXJhdGlvbicsICd0YWcnXS5ldmVyeSgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdrZXk6ICcgKyBxUGFyYW1zLmhhcyhrZXkpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHFQYXJhbXMuaGFzKGtleSk7XHJcbiAgICAgICAgfSlcclxuICAgICkge1xyXG4gICAgICAgIHBhcmFtcy53dXN0bF9rZXkgPSBxUGFyYW1zLmdldCgnd3VzdGxfa2V5JykgYXMgc3RyaW5nO1xyXG4gICAgICAgIHBhcmFtcy5zYW5kYm94ID0gcVBhcmFtcy5nZXQoJ3NhbmRib3gnKSA9PT0gJ3RydWUnO1xyXG4gICAgICAgIHBhcmFtcy5wcm9qZWN0ID0gcVBhcmFtcy5nZXQoJ3Byb2plY3QnKSBhcyBzdHJpbmc7XHJcbiAgICAgICAgcGFyYW1zLml0ZXJhdGlvbiA9IHBhcnNlSW50KHFQYXJhbXMuZ2V0KCdpdGVyYXRpb24nKSBhcyBzdHJpbmcsIDEwKTtcclxuICAgICAgICBwYXJhbXMudGFnID0gcVBhcmFtcy5nZXQoJ3RhZycpIGFzIHN0cmluZztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ21pc3NpbmcgcXVlcnkgcGFyYW1zJyk7XHJcbiAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICdUaGlzIEhJVCBpcyBtaXNzaW5nIG5lY2Nlc3NhcnkgbWV0YWRhdGEsIHNvcnJ5IGZvciB0aGUgaW5jb252ZW5pZW5jZS4gUGxlYXNlIGNvbnRhY3QgdGhlIFJlcXVlc3RlciBhcyB0aGlzIGlzIG5vdCBpbnRlbmRlZCB0byBoYXBwZW4uJ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgYWxlcnQoZSk7XHJcbiAgICBhbGVydChcclxuICAgICAgICAnVGhpcyBISVQgaXMgYnJva2VuLCBzb3JyeSBmb3IgdGhlIGluY29udmVuaWVuY2UuIFBsZWFzZSBjb250YWN0IHRoZSBSZXF1ZXN0ZXIgYXMgdGhpcyBpcyBub3QgaW50ZW5kZWQgdG8gaGFwcGVuLidcclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuL2NvbnNvbGVfd3JhcHBlclwiO1xuXG5sb2coXCJyZWFkeSBsb2FkZWRcIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuXG5sZXQgcmVhZHkgPSBmYWxzZTtcblxubGV0IHJlc29sdmVGdW5jOiAodmFsOiBib29sZWFuKSA9PiBhbnk7XG5sZXQgcmVqZWN0RnVuYztcbmNvbnN0IHJlYWR5UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlOiAodmFsOiBib29sZWFuKSA9PiBhbnksIHJlamVjdCkgPT4ge1xuICByZXNvbHZlRnVuYyA9IHJlc29sdmU7XG4gIHJlamVjdEZ1bmMgPSByZWplY3Q7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBsb2coXCJkb2N1bWVudCBpcyByZWFkeVwiLCBEZWJ1Z0xldmVsRW51bS5ERVRBSUxFRCk7XG4gIHJlYWR5ID0gdHJ1ZTtcbiAgcmVzb2x2ZUZ1bmModHJ1ZSk7XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVhZHkoKSB7XG4gIHJldHVybiByZWFkeTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3YWl0VW50aWxSZWFkeSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgcmV0dXJuIHJlYWR5ID8gUHJvbWlzZS5yZXNvbHZlKHRydWUpIDogcmVhZHlQcm9taXNlO1xufVxuIiwiZXhwb3J0IGludGVyZmFjZSBTY2VuYXJpbyB7XHJcbiAgICBjb250ZXh0OiBzdHJpbmc7XHJcbiAgICBxdWVzdGlvbjogc3RyaW5nO1xyXG4gICAgdGFnOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdmFyLXJlcXVpcmVzXHJcbmV4cG9ydCBjb25zdCBzY2VuYXJpb3M6IFNjZW5hcmlvW10gPSByZXF1aXJlKCcuLy4uLy4uLy4uLy4uL3NjZW5hcmlvcy9zY2VuYXJpb3MuanNvbicpO1xyXG4od2luZG93IGFzIGFueSkuc2NlbmFyaW9zID0gc2NlbmFyaW9zO1xyXG4iLCJpbXBvcnQgeyBEIH0gZnJvbSBcIi4vLi4vY29yZS9kb20vZG9jdW1lbnRcIjtcblxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbiB7XG4gIHB1YmxpYyBzdGF0aWMgc2V0dXBBbGwoKSB7XG4gICAgQWNjb3JkaW9uLmRpc2NhcmRBbGwoKTtcbiAgICBjb25zdCBhY2NvcmRpb25zID0gRC5jbGF6KFwiYWNjb3JkaW9uXCIpO1xuICAgIGZvciAobGV0IGFjY0luZGV4ID0gMDsgYWNjSW5kZXggPCBhY2NvcmRpb25zLmxlbmd0aDsgKythY2NJbmRleCkge1xuICAgICAgY29uc3QgZWxlbSA9IGFjY29yZGlvbnMuaXRlbShhY2NJbmRleCk7XG4gICAgICBpZiAoZWxlbSA9PSBudWxsKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgQWNjb3JkaW9uLmFjY29yZGlvbnMucHVzaChuZXcgQWNjb3JkaW9uKGVsZW0pKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRpc2NhcmRBbGwoKSB7XG4gICAgQWNjb3JkaW9uLmFjY29yZGlvbnMgPSBbXTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGFjY29yZGlvbnM6IEFjY29yZGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdXRlcjogRWxlbWVudCkge1xuICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihvdXRlciwgXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvKiBUb2dnbGUgYmV0d2VlbiBhZGRpbmcgYW5kIHJlbW92aW5nIHRoZSBcImFjdGl2ZVwiIGNsYXNzLFxuICAgICAgICAgICAgICAgIHRvIGhpZ2hsaWdodCB0aGUgYnV0dG9uIHRoYXQgY29udHJvbHMgdGhlIHBhbmVsICovXG4gICAgICB0aGlzLm91dGVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgICAgIC8qIFRvZ2dsZSBiZXR3ZWVuIGhpZGluZyBhbmQgc2hvd2luZyB0aGUgYWN0aXZlIHBhbmVsICovXG4gICAgICBjb25zdCBwYW5lbCA9IHRoaXMub3V0ZXIubmV4dEVsZW1lbnRTaWJsaW5nIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHBhbmVsLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgICBwYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZG9Tb21ldGhpbmcoKSB7XG4gIGNvbnNvbGUubG9nKFwiUHV0IHNvbWUgY29kZSBpbiBoZXJlIVwiKTtcbn1cbiIsImltcG9ydCB7IEhUTUxMb2FkZXIgfSBmcm9tICcuLi9jb3JlL3V0aWxzL2h0bWxfbG9hZGVyJztcbmltcG9ydCB7IEFjY29yZGlvbiB9IGZyb20gJy4vYWNjb3JkaW9uJztcbmltcG9ydCB7IGRvU29tZXRoaW5nIH0gZnJvbSAnLi9kby1zb21ldGhpbmcnO1xuaW1wb3J0IHsgSFRNTENvbnRlbnQsIGl0ZW1zVG9DYWNoZSB9IGZyb20gJy4vaHRtbC1pbXBvcnRzJztcbmltcG9ydCB7IFNsaWRlc2hvdyB9IGZyb20gJy4vc2xpZGVzaG93JztcblxuLy8gUHV0IGFsbCBmdW5jdGlvbiBjYWxscyB0aGF0IG5lZWQgdG8gYmUgbWFkZSBvbiBldmVyeSBwYWdlIGxvYWQgaW5zaWRlIHRoZSBzZXR1cEFsbCBmdW5jdGlvbiBib2R5LlxuZXhwb3J0IGZ1bmN0aW9uIFB1dFN0dWRlbnRQYWdlTG9hZE9wZXJhdGlvbnNJbnNpZGVUaGlzU3R1ZGVudEJvZHkoKSB7XG4gICAgLy8gVE9ETzogUHV0IGFsbCBvcGVyYXRpb25zIHRoYXQgeW91IHdhbnQgdG8gaGFwcGVuIG9uIGV2ZXIgcGFnZSBsb2FkIGluIHRoaXMgZnVuY3Rpb24uXG4gICAgLy8gRm9yIGV4YW1wbGUgeW91IGNvdWxkIHdyaXRlOiBTdGlja3kuc2V0dXAoKVxuICAgIGRvU29tZXRoaW5nKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXR1cEFsbCgpIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocjogYW55KSA9PiBzZXRUaW1lb3V0KHIsIDEwMCkpO1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWRpbmcnKTtcbiAgICBTbGlkZXNob3cuc2V0dXBBbGwoKTtcbiAgICBBY2NvcmRpb24uc2V0dXBBbGwoKTtcbiAgICBQdXRTdHVkZW50UGFnZUxvYWRPcGVyYXRpb25zSW5zaWRlVGhpc1N0dWRlbnRCb2R5KCk7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZGVkJyk7XG59XG5cbml0ZW1zVG9DYWNoZS5mb3JFYWNoKChpdGVtOiBIVE1MQ29udGVudCkgPT4ge1xuICAgIEhUTUxMb2FkZXIuY2FjaGVIVE1MKGl0ZW0ubmFtZSwgaXRlbS5jb250ZW50KTtcbn0pO1xuKHdpbmRvdyBhcyBhbnkpLkhUTUxMb2FkZXIgPSBIVE1MTG9hZGVyO1xuXG5jb25zb2xlLmxvZygnZHluYW1pYy1kb20gbG9hZGVkJyk7XG4vLyBEbyBub3QgdG91Y2ggdGhpcyBsaW5lLCBuZWVkZWQgdG8gcmVpbml0aWFsaXplIGNvZGUgaW4gdGhlIGR5bmFtaWMtZG9tLnRzIHNldHVwQWxsIGZ1bmN0aW9uXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbmV3UGFnZUxvYWQnLCAoKSA9PiBzZXR1cEFsbCgpKTtcbiIsImRlY2xhcmUgZnVuY3Rpb24gcmVxdWlyZShpZDogc3RyaW5nKTogc3RyaW5nO1xuXG4vLyBUaGlzIGRlZmluZXMgdGhlIGRhdGEgdGhhdCBuZWVkcyB0byBiZSBwYXNzZWQgdG8gdGhlIEhUTUxMb2FkZXIgdG8gY2FjaGUgeW91ciBodG1sIGNvbnRlbnQuXG5leHBvcnQgaW50ZXJmYWNlIEhUTUxDb250ZW50IHtcbiAgICBuYW1lOiBzdHJpbmc7IC8vIFRoZSBuYW1lIHRoYXQgeW91IHdpbGwgdXNlIHRvIHJlZmVyZW5jZSB0aGUgY29udGVudCBpbiB5b3VyIGh0bWwgcGFnZXMuXG4gICAgY29udGVudDogc3RyaW5nOyAvLyBUaGUgYWN0dWFsIGh0bWwgc3RyaW5nIHRoYXQgd2lsbCBiZSBwdWxsZWQgZnJvbSB0aGUgc291cmNlIGZpbGUgdGhhdCB5b3Ugc3BlY2lmeS5cbn1cblxuLy8gQW4gSFRNTENvbnRlbnQgb2JqZWN0IHNob3VsZCBsb29rIGxpa2UgdGhlIGZvbGxvd2luZzpcbi8vIHtcbi8vICAgICBuYW1lOiAnZm9vdGVyJyxcbi8vICAgICBjb250ZW50OiByZXF1aXJlKCcuL2h0bWwvZm9vdGVyLmh0bWwnKSxcbi8vIH1cblxuLy8gVGhlbiB5b3UgY2FuIHJlZmVyZW5jZSB0aGF0IGNvbnRlbnQgaW4geW91ciBodG1sIHVzaW5nIHRoZSBmb2xsb3dpbmcgdGFnIHdpdGggdGhlIGNvcnJlc3BvbmRpbmcgbmFtZSBhdHRyaWJ1dGUuXG4vLyA8dHMtbG9hZCBkYXRhLW5hbWU9XCJoZWFkZXJcIj48L3RzLWxvYWQ+XG5cbi8vIFlvdSBjYW4gc3BlY2lmeSBhcyBtYW55IGFzIHlvdSB3YW50IGluc2lkZSBvZiB0aGUgYXJyYXkgYW5kIHRoZXkgd2lsbCBhbGwgYmUgYnVuZGxlZCB1cCB3aXRoIHlvdXIgd2Vic2l0ZS5cbi8vIE1ha2Ugc3VyZSB0byBtYWtlIGEgY29ycmVzcG9uZGluZyBodG1sIGZpbGUgaW4gdGhlIGh0bWwgZmlsZSBmb2xkZXIgZm9yIGVhY2ggZWxlbWVudCB5b3Ugc3BlY2lmeS5cblxuZXhwb3J0IGNvbnN0IGl0ZW1zVG9DYWNoZSA9IFtcbiAgICAvLyBGZWVsIGZyZWUgdG8gY2hhbmdlIHRoZSBjb250ZW50IGluc2lkZSBhbnkgb2YgdGhlIGh0bWwgZmlsZXMgaW4gdGhlIGh0bWwgZmlsZSBmb2xkZXIgdG8gc3VpdCB5b3VyIG5lZWRzLlxuICAgIHtcbiAgICAgICAgbmFtZTogJ2hlYWRlcicsXG4gICAgICAgIGNvbnRlbnQ6IHJlcXVpcmUoJy4vaHRtbC9oZWFkZXIuaHRtbCcpLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnZm9vdGVyJyxcbiAgICAgICAgY29udGVudDogcmVxdWlyZSgnLi9odG1sL2Zvb3Rlci5odG1sJyksXG4gICAgfSxcbiAgICAvLyBQdXQgbW9yZSBpdGVtcyBpbiB0aGUgYXJyYXkgYmVsb3cgaGVyZS5cbl07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvb3RlciBpZD1cXFwiY29sb3Bob25cXFwiIGNsYXNzPVxcXCJmb290ZXJcXFwiIHJvbGU9XFxcImNvbnRlbnRpbmZvXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvb3Rlci13aWRnZXRzXFxcIj5cXG4gICAgICA8YXNpZGUgY2xhc3M9XFxcIndpZGdldCBzaXRlLWNvbnRhY3RcXFwiPlxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJmb290ZXItd2lkZ2V0LXRpdGxlXFxcIj5OdXJzZXJ5IFNjaG9vbDwvaDI+XFxuICAgICAgICA8cD42OTI2IEZvcmVzdCBQYXJrIFBhcmt3YXk8L3A+XFxuICAgICAgICA8cD5TdC4gTG91aXMsIE1PIDYzMTMwPC9wPlxcbiAgICAgICAgPHAgY2xhc3M9XFxcInBob25lXFxcIj4zMTQtOTM1LTY2ODkgPHNwYW4+fDwvc3Bhbj4gRmF4OiAzMTQtOTM1LTcyNDk8L3A+XFxuICAgICAgICA8cD5cXG4gICAgICAgICAgPGEgaHJlZj1cXFwiZmlsZXMvbWFpbHRvOm51cnNlcnlAd3VzdGwuZWR1XFxcIj5udXJzZXJ5QHd1c3RsLmVkdTwvYT5cXG4gICAgICAgIDwvcD5cXG4gICAgICA8L2FzaWRlPlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIndpZGdldC13cmFwcGVyXFxcIj5cXG4gICAgICAgIDxhc2lkZSBpZD1cXFwidGV4dC00XFxcIiBjbGFzcz1cXFwid2lkZ2V0IHdpZGdldF90ZXh0IHdpZGdldC1jb3VudC0yXFxcIj5cXG4gICAgICAgICAgPGgyIGNsYXNzPVxcXCJmb290ZXItd2lkZ2V0LXRpdGxlXFxcIj5Ib3VycyBvZiBPcGVyYXRpb248L2gyPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0d2lkZ2V0XFxcIj5cXG4gICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgIENsYXNzZXMgbWVldCBNb24uIHRocm91Z2ggRnJpLjxiciAvPlxcbiAgICAgICAgICAgICAgTW9ybmluZzogOS0xMTo0NSBhLm0uPGJyIC8+XFxuICAgICAgICAgICAgICBBZnRlcm5vb246IDEyOjMwLTM6MTUgcC5tLjxiciAvPlxcbiAgICAgICAgICAgICAgRnVsbCBkYXk6IDkgYS5tLi0zOjE1IHAubS5cXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9hc2lkZT5cXG4gICAgICAgIDxhc2lkZSBpZD1cXFwidGV4dC0zXFxcIiBjbGFzcz1cXFwid2lkZ2V0IHdpZGdldF90ZXh0IHdpZGdldC1jb3VudC0yXFxcIj5cXG4gICAgICAgICAgPGgyIGNsYXNzPVxcXCJmb290ZXItd2lkZ2V0LXRpdGxlXFxcIj5BcHBseSBmb3IgdGhlIE51cnNlcnkgU2Nob29sPC9oMj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dHdpZGdldFxcXCI+XFxuICAgICAgICAgICAgPHA+XFxuICAgICAgICAgICAgICBFeHBlcmllbmNlIHRoZSBpbm5vdmF0aXZlIGFwcHJvYWNoIGFuZCBkeW5hbWljIHRlYWNoaW5nXFxuICAgICAgICAgICAgICBlbnZpcm9ubWVudCBvZiB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJmaWxlcy9hcHBseS5odG1sXFxcIj5SZWdpc3RlciBOb3c8L2E+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9hc2lkZT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNpdGUtaW5mb1xcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcImZvb3Rlci1jb3B5cmlnaHRcXFwiPsKpMjAxOSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgaW4gU3QuIExvdWlzPC9wPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZm9vdGVyPlwiO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgaWQ9XFxcInd1c3RsLWJyYW5kaW5nXFxcIj5cXG4gIDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiMzIxXFxcIiBoZWlnaHQ9XFxcIjI4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMzIxIDI4XFxcIiBjbGFzcz1cXFwid2FzaHUtbG9nb1xcXCJcXG4gICAgYXJpYS1sYWJlbGxlZGJ5PVxcXCJ0aXRsZVxcXCI+XFxuICAgIDx0aXRsZSBpZD1cXFwidGl0bGVcXFwiPldhc2hpbmd0b24gVW5pdmVyc2l0eSBpbiBTdC4gTG91aXM8L3RpdGxlPlxcbiAgICA8cGF0aCBmaWxsPVxcXCIjRkZGXFxcIlxcbiAgICAgIGQ9XFxcIk0xMC40NiAxLjc2Yy0uMDkgMC00LjQxLjA0LTEwLjQ2LTEuMjFWMThjMCAuMjcuMDEuNDcuMDEuNDd2LjAyYy4wNC44MS4yOCAxLjQ1Ljc3IDIgLjMyLjM0Ljc2LjcgMS4zOCAxLjA1LjE3LjEuMzUuMTguNTUuMjguMTUuMDcuMzEuMTQuNDcuMi4xNC4wNi41NS4yNC42OS4yOWw2LjU5IDIuNSA2LjU5LTIuNWMuMTUtLjA1LjU2LS4yNC42OS0uMjkuMTYtLjA3LjMyLS4xNC40Ny0uMi4xOS0uMS4zOC0uMTguNTUtLjI4LjYyLS4zNSAxLjA2LS43IDEuMzgtMS4wNS40OC0uNTUuNzMtMS4xOS43Ny0ydi0uMDJzMC0uMTkuMDEtLjQ3Vi41NUMxNC44NiAxLjggMTAuNTUgMS43NiAxMC40NiAxLjc2elxcXCI+XFxuICAgIDwvcGF0aD5cXG4gICAgPHBhdGggZmlsbD1cXFwiIzAwNzM2MFxcXCJcXG4gICAgICBkPVxcXCJNMTAuNDYgMi44Yy0uMDkgMC00LjAzLjA0LTkuNTYtMS4xdjE1Ljk1YzAgLjI1LjAxLjQzLjAxLjQ0di4wMmMuMDQuNzQuMjUgMS4zMy43IDEuODMuMjkuMzEuNy42NCAxLjI2Ljk1LjE1LjA5LjMyLjE3LjUuMjYuMTQuMDcuMjguMTMuNDQuMTkuMTIuMDUuNS4yMi42My4yN2w2LjAzIDIuMjkgNi4wMy0yLjI5Yy4xMy0uMDUuNTEtLjIyLjYzLS4yNy4xNS0uMDYuMy0uMTMuNDQtLjE5LjE4LS4wOS4zNS0uMTcuNS0uMjYuNTYtLjMxLjk3LS42NCAxLjI2LS45NS40NC0uNS42Ni0xLjA5LjctMS44M3YtLjAyczAtLjE4LjAxLS40NFYxLjdjLTUuNTUgMS4xNC05LjUgMS4xLTkuNTggMS4xelxcXCI+XFxuICAgIDwvcGF0aD5cXG4gICAgPHBhdGggZmlsbD1cXFwiI0UxQzRBQ1xcXCJcXG4gICAgICBkPVxcXCJNMTAuNDYgMy43NWMtLjA4IDAtMy42OC4wNC04Ljc0LTEuMDJ2NC4wOGM1LjA1IDEuMDUgOC42NyAxLjAyIDguNzQgMS4wMnMzLjY4LjA0IDguNzQtMS4wMlYyLjczYy01LjA2IDEuMDUtOC42NiAxLjAyLTguNzQgMS4wMnpcXFwiPlxcbiAgICA8L3BhdGg+XFxuICAgIDxwYXRoIGZpbGw9XFxcIiNBNTE0MTdcXFwiXFxuICAgICAgZD1cXFwiTTEwLjQ2IDcuODNjLS4wOCAwLTMuNjguMDQtOC43NC0xLjAydjkuMDVjNS4wNSAxLjA1IDguNjcgMS4wMiA4Ljc0IDEuMDJzMy42OC4wNCA4Ljc0LTEuMDJWNi44MmMtNS4wNiAxLjA0LTguNjYgMS4wMS04Ljc0IDEuMDF6XFxcIj5cXG4gICAgPC9wYXRoPlxcbiAgICA8cGF0aCBmaWxsPVxcXCIjRTFDNEFDXFxcIlxcbiAgICAgIGQ9XFxcIk0xLjcyIDE3LjcyYy4wMy42OS4yMyAxLjIzLjY0IDEuNjguMjYuMjguNjQuNTggMS4xNS44Ny4xNS4wOC4yOS4xNS40Ni4yMy4xMy4wNi4yNi4xMi40LjE3LjExLjA1LjQ2LjIuNTguMjRMMTAuNDYgMjNsNS41MS0yLjA5Yy4xMi0uMDQuNDYtLjIuNTgtLjI0LjE0LS4wNi4yNy0uMTIuNC0uMTcuMTYtLjA4LjMyLS4xNS40Ni0uMjMuNTEtLjI5Ljg4LS41OCAxLjE1LS44Ny40MS0uNDYuNi0xIC42NC0xLjY4di0uMDJzMC0uMTYuMDEtLjR2LTEuNDRjLTUuMDUgMS4wNS04LjY3IDEuMDItOC43NCAxLjAycy0zLjY4LjA0LTguNzQtMS4wMnYxLjQ1Yy0uMDIuMjUtLjAxLjQxLS4wMS40MXpcXFwiPlxcbiAgICA8L3BhdGg+XFxuICAgIDxwYXRoIGZpbGw9XFxcIiMwMDczNjBcXFwiXFxuICAgICAgZD1cXFwiTTQuOCAzLjY5bC40MSAxLjIzIDEuMjkuMDEtMS4wNC43Ny4zOSAxLjI0LTEuMDUtLjc2LTEuMDUuNzYuMzktMS4yNC0xLjA0LS43NyAxLjI5LS4wMS40MS0xLjIzem0xMS4zMSAwbC40MiAxLjIzIDEuMjkuMDEtMS4wNC43Ny4zOSAxLjI0LTEuMDYtLjc2LTEuMDUuNzYuMzktMS4yNC0xLjA0LS43NyAxLjI5LS4wMS40MS0xLjIzem0tNS42NS40OGwuNDIgMS4yMyAxLjI5LjAxLTEuMDQuNzcuMzkgMS4yNC0xLjA2LS43Ni0xLjA2Ljc1LjM5LTEuMjQtMS4wNC0uNzcgMS4zLS4wMS40MS0xLjIyek0xMC40NiAxNy4yMWwtLjQ2LjQ1djEuMjJsLjIzLjY1djEuMDloLjQ1di0xLjA5bC4yMy0uNjV2LTEuMjJsLS40NS0uNDV6bS4yMiA0LjQxdi0uNjVoLS40NXYuNjVsLS4yMy40Mi40Ni41Ni40Ni0uNTYtLjI0LS40MnptLjMzLS42NXYuNWwuMjkuMzEuNTEtLjQxdi0uNDFoLS44em0uNTQtMi4wNGwtLjU0LjZ2MS4wOWguNDR2LS42NWwuNDMtLjQ2LjU1LjM2LjM1LS4zNnYtLjU4aC0xLjIzem0tMS42NCAyLjA0di41bC0uMjkuMzEtLjUyLS40MXYtLjQxaC44MXptLS41NS0yLjA0bC41NC42djEuMDloLS40M3YtLjY1bC0uNDMtLjQ2LS41NS4zNi0uMzUtLjM2di0uNThoMS4yMnpcXFwiPlxcbiAgICA8L3BhdGg+XFxuICAgIDxwYXRoIGZpbGw9XFxcIiNFMUM0QUNcXFwiXFxuICAgICAgZD1cXFwiTTE0LjYyIDkuMjd2NS4xOWgtMy40OWwtLjI1LjIxLS40My4zNy0uNDMtLjM3LS4yNS0uMjFINi4yOVY5LjI3bC0uNzQuNTR2NS4zOGg0LjEybC4zNy4zMS40My4zOC40My0uMzguMzctLjMxaDQuMTJWOS44MWwtLjc3LS41NHpcXFwiPlxcbiAgICA8L3BhdGg+XFxuICAgIDxwYXRoIGZpbGw9XFxcIiNFMUM0QUNcXFwiXFxuICAgICAgZD1cXFwiTTExLjAyIDguODNsLS4xNC4xMS0uNDMuMzgtLjQzLS4zOC0uMTItLjExSDcuMDN2NC44OWgyLjg4bC4yLjE3LjM1LjMxLjM2LS4zMS4xOS0uMTdoMi44OFY4LjgzaC0yLjg3ek0xNi4xMSAxMC4zNXYzLjMxYy45NS0uMTQgMS45OC0uMzEgMy4wOC0uNTRWOS44MWE1MC41IDUwLjUgMCAwIDEtMy4wOC41NHptLTExLjMxIDBjLS45NS0uMTQtMS45OC0uMzEtMy4wOC0uNTR2My4zMWMxLjEuMjMgMi4xNC40MSAzLjA4LjU0di0zLjMxelxcXCI+XFxuICAgIDwvcGF0aD5cXG4gICAgPHBhdGggZmlsbD1cXFwiIzAwNzM2MFxcXCJcXG4gICAgICBkPVxcXCJNMTYuMTEgMTYuNzZsLS4zMS4zMnYuODZsLjE1LjQ2di43N2guMzF2LS43N2wuMTYtLjQ2di0uODZsLS4zMS0uMzJ6bS4xNiAzLjA5di0uNDVoLS4zMXYuNDZsLS4xNS4zLjMxLjQuMzItLjQtLjE3LS4zMXptLjIzLS40NXYuMzVsLjIuMjIuMzYtLjI4di0uMjloLS41NnptLjM4LTEuNDNsLS4zOC40M3YuNzdoLjMxdi0uNDZsLjMtLjMzLjM4LjI1LjI0LS4yNXYtLjQxaC0uODV6bS0xLjE0IDEuNDN2LjM1bC0uMjEuMjItLjM1LS4yOHYtLjI5aC41NnptLS4zOS0xLjQzbC4zOS40M3YuNzdoLS4zMXYtLjQ2bC0uMy0uMzMtLjM5LjI1LS4yNC0uMjV2LS40MWguODV6TTQuOCAxNi43NmwtLjMyLjMydi44NmwuMTYuNDZ2Ljc3aC4zMXYtLjc3bC4xNS0uNDZ2LS44NmwtLjMtLjMyem0uMTYgMy4wOXYtLjQ1aC0uMzF2LjQ2bC0uMTYuMy4zMi40LjMxLS40LS4xNi0uMzF6bS4yMi0uNDV2LjM1bC4yMS4yMi4zNS0uMjh2LS4yOWgtLjU2em0uMzktMS40M2wtLjM5LjQzdi43N2guMzF2LS40NmwuMy0uMzMuMzkuMjUuMjQtLjI1di0uNDFoLS44NXpNNC40MiAxOS40di4zNWwtLjIuMjItLjM2LS4yOHYtLjI5aC41NnptLS4zOC0xLjQzbC4zOC40M3YuNzdoLS4zMXYtLjQ2bC0uMy0uMzMtLjM4LjI1LS4yNC0uMjV2LS40MWguODV6XFxcIj5cXG4gICAgPC9wYXRoPlxcbiAgICA8ZyBmaWxsPVxcXCIjRkZGXFxcIiBjbGFzcz1cXFwid2FzaHUtbG9nby10ZXh0XFxcIj5cXG4gICAgICA8cGF0aFxcbiAgICAgICAgZD1cXFwiTTIzMi40NyA4LjE2Yy4zMyAwIDEuMDctMS4yIDEuMDctMS41NyAwLS4zNi0uNzQtMS42LTEuMDctMS42LS4zIDAtMS4wNyAxLjI2LTEuMDcgMS42cy43NiAxLjU3IDEuMDcgMS41N3ptMTMuODIgMTIuMDN2LTUuMDhjMC0yLjM0LS43Ni01Ljc2LTQuMjItNS43Ni0yLjUxIDAtMy44MSAyLjM4LTMuNzYgMi4wMVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLTEuMDQgMS4wMS0zLjA2IDEuNjItLjEzLjAzLS41LjA0LS41MS4yNyAwIC42NSAyLjAzLS44NCAxLjk5IDEuNjh2Ny42NGMwIDEuNDMtLjcgMS41NS0xLjIxIDEuNjgtLjAzIDAtLjA2LS4wMS0uMSAwLS41Mi0uMDMtMS42My0uMjMtMS42My0xLjM1VjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtLjk4IDEuMDgtMi42MyAxLjY0LS4xMy4wMy0uMzcuMDYtLjM3LjI0IDAgLjY1IDEuNDktLjYxIDEuNDIgMS42OXY3LjI3Yy4wNiAxLjg2LS45NiAyLjA0LTEuNTIgMi4wNC0uODQtLjAxLS42My4xLS42My4zNi4wMy4zMS41My4zMyAxLjM3LjM0LjI5IDAgMS0uMTEgMS44Mi0uMTEgMS4wNyAwIDEuODcuMTIgMi40MS4xMi4zMSAwIDEuMTUtLjEzIDIuNTMtLjEzIDEuNSAwIDIuMDIuMTMgMi40Ni4xMy4zOSAwIC44My0uMTcuNTctLjQ0LS40Mi0uNDEtMi4yOC4wNi0yLjI4LTIuMDZWMTMuMWMtLjAzLS40OS44OC0yLjQgMy4wNi0yLjQgMi4xIDAgMy4wMyAyLjMxIDMuMDMgMy44NXY1Ljc2Yy0uMDMgMi4yNy0uOCAxLjU1LTEuMTEgMi0uMTcuMjUuMTMuMzcuNDYuMzdzLjg4LS4xMyAxLjg3LS4xM2MxLjI3IDAgMS44Mi4xMiAyLjE2LjEyLjI2IDAgLjczLS4yLjQ1LS40NC0uNjgtLjUtMS45Ny4zLTEuOTUtMi4wNHpNNDguOTEgMi40Yy4zNy0uMDUuNTUtLjE5LjU1LS4xOSAwLS4yNC0uMDUtLjMtLjM5LS4zLS42NSAwLTEuMDUuMTEtMS42OS4xMS0uNzEgMC0xLjI1LS4wOC0xLjg1LS4wOC0uMzQgMC0uMzEuMTEtLjMxLjMgMCAuMjEuNjUuMDggMS4wMi44OS4yMS40NC4xMyAxLjM2LS4wOCAxLjlsLTUuMDEgMTMuNzQtMi4xNC02LjEtLjgzLTIuMjNzLS4xMy4wNi40Ni0xLjc5bDEuMTctMy41MmMuNTctMS43MyAxLjE0LTIuNjQgMS44OC0yLjY1LjkyLS4wMi45Mi0uNTcuMjEtLjU3cy0xLjEzLjA2LTEuNzUuMDZjLS42NSAwLS45OS0uMDYtMS42OS0uMDYtLjI2IDAtLjU1LjA4LS41Mi4zLjAzLjIxLjQyLjE0LjcxLjMuNDcuMjQuNzggMS4yNS40NSAyLjNsLTEuMzggNC40Mi0xLjU4LTQuMTNjLS4zMS0uNzgtLjczLTIuNTIuMDMtMi42Ny43My0uMTUuNjMtLjUyLjE4LS41Mi0uODYgMC0xLjMyLjExLTIuMTUuMTEtLjkxIDAtMS41OS0uMTEtMi40NS0uMTEtLjE4IDAtLjUyLjAzLS40Mi4zOC4wNS4yMS40OS4xNC43Ni4zIDEuMDUuNjggMS4yNSAxLjU1IDEuNjIgMi41MmwyLjMgNi40OGMuNDIgMS4xNi40NS43NC4xMSAxLjczbC0yIDUuNS00Ljk1LTE0LjExYy0uMzktMS4wNi0uNi0xLjc5LjI2LTIuMi4zNy0uMTkuNDctLjIyLjUyLS4zLjA1LS4wNy4xLS4zMi0uNDUtLjMtLjg5LjAzLTEuNDMuMTEtMi4zMi4xMS0uOTQgMC0xLjU5LS4xMS0yLjQ1LS4xMS0uMjkgMC0uMzQuMTQtLjM0LjM1IDAgLjMzLjcxLjExIDEuMzEuODEuMzQuMzguOTkgMS42NiAxLjE0IDIuMTJMMzIuOCAyMi4zYy4xMS4yNS4xNC43Ni40OC43Ni4yNyAwIC4zMy0uNTcuNDItLjc5bDMuMTMtOC41OSAzLjA1IDguMTZjLjEzLjMzLjMxIDEuMjIuNjMgMS4yMi4yNiAwIC4zNi0uNDMuNDktLjgzbDUuOS0xNi44N2MuNS0xLjM2IDEuMDctMi43OSAyLjAxLTIuOTZ6bTY1LjQ2IDYuNzFjLTMuMjYgMC01Ljc3IDMuMjgtNS43NyA3LjEzIDAgMS45Ni41MiAzLjUxIDEuNDIgNC42My0uMzEuMjEtLjkyLjctMi4xNS43LTEuMDcgMC0xLjY4LS42NC0xLjc0LTJWMTEuMmwzLjM4LS4wMWMuMjIgMCAuNjUtMS40NC42Ny0xLjUyLjA0LS4xOC4xLS4zMy4xMi0uNDYuMDQtLjI4LS4xNy0uMy0uMzctLjAxLS4xNS4xNS0uMzIuNTUtLjk5LjU1aC0yLjgxYzAtMi40MS4wMy0zLjUxLS4zNS0zLjUxLS4zNiAwLS4zLjEtLjYzIDEuMTctLjQ0IDEuNDQtMS43OSAyLjIzLTIuNjMgMi42OC0uMzguMDktLjgxLjEyLTEuMjkuMDEtLjc0LS4xNi0xLjYtMS4wNi0zLjgzLTEuMDYtMi4zOCAwLTQuNDYgMS45NS00LjQ2IDQuNTUgMCAxLjQuNjIgMi43NiAxLjcxIDMuNDgtLjIuMTItMS41MyAxLjI0LTEuMzcgMi41NiAwIDAtLjAzIDEuMzcgMS4wNSAxLjgyLS4zMy4xNC0uNjcuMzYtLjk2LjYzLS43LS4yNi0xLjcyLS4wNi0xLjcyLTEuOTFWMTUuMWMwLTIuMzQtLjc2LTUuNzYtNC4yMi01Ljc2LTIuNTEgMC0zLjgxIDIuMzgtMy43NiAyLjAxVjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtLjczLjk5LTIuOTEgMS41NS0uMTMuMDMtLjQzLjEtLjQ0LjM0IDAgLjY1IDEuNzUtLjcxIDEuNzYgMS42OHY3LjY0YzAgMS42NS0xLjMxIDEuNjUtMS41NCAxLjY3LS4xIDAtLjE5IDAtLjMxLjAxLS41NS0uMDUtMS41MS0uMy0xLjUxLTEuMzRWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuNzgtLjg2IDIuMDEtMS40MyAyLjAzLS42OS0uMDktMS4yMi0uMzctMS4yMi0xLjQxdi01LjE0YzAtMi42NS0xLjAxLTYuMDctNC4zMy02LjA3LTEuNDcgMC0yLjc1LjgxLTMuNzMgMS45MlYyLjQxYzAtLjMxLS4xNS0uNDgtLjMxLS40OS0uNC0uMDMtMS4wNyAxLjE5LTIuOTYgMS42My0uMTMuMDMtLjYyLjA3LS42Mi4yNSAwIC42NSAxLjk3LS4zMSAxLjk5IDEuNjlWMjAuNmMwIDEuNTEtMS4zIDEuMzEtMS41MyAxLjc5LS4wNC4yMS4wOC4zMS4yNi4zMS40MiAwIDEuNTUtLjEyIDIuMzUtLjEyczIuMS4xMiAyLjY0LjEyYy4zMSAwIC40NC0uMDYuNDQtLjQ0LS4yNy0uNTItMi4yOC4yOC0yLjI4LTIuMzd2LTYuNWMwLTEuNTcgMS44Ny0yLjc4IDMuMDMtMi43OC45MSAwIDMuMTQuNzEgMy4xNCA0LjUzdjUuNjRjMCAxLjExLTEuMTggMS4yMy0xLjI3IDEuNTcgMCAuMjQuMTUuMzQuNDIuMzQuMjggMCAxLjExLS4xMiAyLjEyLS4xMi41NiAwIDEuMDcuMDMgMS41LjA2LjIzLjA1LjU3LjA1Ljk5LjA1LjI4IDAgMS0uMTEgMS44Mi0uMTFzMS40OC4wNyAxLjk5LjExYy4xLjAxLjIuMDEuMy4wMS4wNCAwIC4wOC4wMS4xMi4wMWguMDFjLjMyLjAxLjYxIDAgLjc0IDAgLjMxIDAgLjgzLS4xMyAyLjItLjEzIDEuNSAwIDIuMDIuMTMgMi40Ni4xMy4zOSAwIC44My0uMTcuNTctLjQ0LS40Mi0uNDEtMi4yOC4wNi0yLjI4LTIuMDZ2LTcuMDljLS4wMy0uNDkuODgtMi40IDMuMDYtMi40IDIuMSAwIDMuMDMgMi4zMSAzLjAzIDMuODV2NS43NmMwIDItLjggMS41NS0xLjExIDItLjE3LjI1LjEzLjM3LjQ2LjM3cy44OC0uMTMgMS44Ny0uMTNjLjkzIDAgMS41My4wNyAxLjkxLjEtLjI5LjQyLS40OC45LS41MSAxLjQtLjE0IDIuNTEgMi45MyAzLjQxIDUuNTEgMy4zNyA1LjEyLS4wNyA2LjU3LTMuNjIgNS41MS01LjUxLTEuMDktMS45NS0zLjQ0LTEuODctNS42OC0xLjg2LTQuMi4wMi0zLjQxLTIuNTktMS42OS0yLjQ5LjQuMDIuMi4xNCAxLjU3LjE0IDIuNDMgMCA0Ljc2LTEuNjYgNC43LTQuMzgtLjAxLS4yMy4wNS0xLjAzLS41My0yLjE0IDEuMTQuMDEuNjkgMCAyLjQxIDBsLS4wMSA3LjYzYzAgMy40NSAxLjY0IDQuMDMgMi44NyA0LjAzIDEuNzQgMCAzLjAxLTEuMTUgMy4yNC0xLjY4IDEuMDMgMS4xIDIuNDYgMS42OCA0LjEyIDEuNjggMy4xOSAwIDUuNi0yLjkzIDUuNi02Ljc4IDAtNS44LTMuNjUtNi45Ni01LjYxLTYuOTZ6TTk1LjYyIDIxLjcyYy4yMS0uMDEuMjcuMDggMi42NC4xNyAyLjQ1LjA2IDMuMzMuNzcgMy40OSAxLjQuMjYgMS4xMi0uNTMgMy41Mi00LjA1IDMuMjktMi4yMi0uMTUtMi44Ny0xLjItMy4wMy0xLjQ0LS44NC0xLjE2LS4xNi0zLjM1Ljk1LTMuNDJ6bTIuMDEtNC41N2MtMi4wOCAwLTIuNzgtMi0yLjc4LTMuOTEgMC0xLjk2LjU5LTMuNTggMi42Ny0zLjU4IDIuMTEgMCAyLjk1IDIuMTYgMi45NSA0LjA3LjAxIDEuOTMtLjg3IDMuNDItMi44NCAzLjQyem0xNi45OSA0LjgxYy0zLjAzIDAtNC4yMi0zLjc2LTQuMjItNi44MiAwLTIuNjUgMS4wNC01LjEgMy41Ny01LjEgMy4wOCAwIDQuMTkgMy4yOSA0LjE5IDYuNTEuMDEgMy44Ny0xLjM2IDUuNDEtMy41NCA1LjQxelxcXCI+XFxuICAgICAgPC9wYXRoPlxcbiAgICAgIDxwYXRoXFxuICAgICAgICBkPVxcXCJNMTMxLjExIDIwLjE5di01LjA4YzAtMi4zNC0uNzYtNS43Ni00LjIyLTUuNzYtMi41MSAwLTMuODEgMi4zOC0zLjc2IDIuMDFWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0xLjA0IDEuMDEtMy4wNyAxLjYyLS4xMy4wMy0uNS4wNC0uNTEuMjcgMCAuNjUgMi4wMy0uODQgMiAxLjY4djcuNjRjMCAyLTEuMzUgMS41Mi0xLjY2IDIuMDQtLjE1LjI3LjI1LjMzLjU5LjMzLjMxIDAgLjgzLS4xMyAyLjItLjEzIDEuNSAwIDIuMDIuMTMgMi40Ni4xMy4zOSAwIC44My0uMTcuNTctLjQ0LS40Mi0uNDEtMi4yOC4wNi0yLjI4LTIuMDZ2LTcuMDljLS4wMy0uNDkuODgtMi40IDMuMDYtMi40IDIuMSAwIDMuMDMgMi4zMSAzLjAzIDMuODV2NS43NmMtLjAzIDIuMjctLjggMS41NS0xLjExIDItLjE3LjI1LjEzLjM3LjQ2LjM3cy44OC0uMTMgMS44Ny0uMTNjMS4yNyAwIDEuODIuMTIgMi4xNi4xMi4yNiAwIC43My0uMi40NC0uNDQtLjY1LS40OS0xLjk0LjMxLTEuOTItMi4wM3pNNzcuNDEgOC4xNmMuMzMgMCAxLjA3LTEuMiAxLjA3LTEuNTcgMC0uMzYtLjc0LTEuNi0xLjA3LTEuNi0uMyAwLTEuMDcgMS4yNi0xLjA3IDEuNi4wMi4zNS43NyAxLjU3IDEuMDcgMS41N3ptLTE3LjMgNi45NmMtLjUxLS4yNC0xLjI3LS42OC0xLjY1LS44OC0xLjYzLS44OS0yLjI3LTEuNDctMi4zMS0yLjMtLjA4LTEuNDQgMS4xNS0yLjE5IDIuMjEtMi4wOCAyLjU0LS4wNCAyLjg4IDIuOCAzLjE0IDIuOC4zOSAwIC4yOC0uMzcuMjgtMS4yMSAwLS4yMS4wMy0xLjI3LS4xMy0xLjUyLS4zMS0uNDYtMi4xLS43NC0yLjU1LS43NC0uMTEgMC0uNTItLjAxLS42LS4wMi0uMTMgMC0uMjguMDItLjI4LjAyLTEuODEtLjAzLTMuNSAxLjExLTMuNDUgMy41My4wNSAyLjIxIDIuNjQgMy40NyA0LjA0IDQuMyAxLjA0LjU5IDIuMjYgMS4xNSAyLjI0IDIuNTctLjAyIDEuNjEtMS4yNyAyLjY4LTIuNjEgMi42LTMuMTUtLjA1LTIuNzItNC0zLjI4LTQtLjM5IDAtLjMxIDEtLjMxIDEuNTIgMCAuNTEtLjAxLjk4LS4wMSAxLjM4LS4wNy4zNi0uMi43LS41NC43Mi0xLjI0LjA4LS45NC0xLjktLjk0LTIuOTV2LTYuNDNjLS4wNi0xLjk3LTEuNTQtMy4yNS0zLjgtMy4yNS0zLjA5IDAtNS4zMSAzLjgxLTQuMjUgNSAuMjUuMjggMS4yNi0uOCAxLjMyLS44NnMuMDgtLjEzLjA4LS4xM2MtLjAxLTEuMy45Ny0yLjk1IDIuMzctMy4wOSAxLjYtLjE1IDIuNCAxLjA0IDIuNCAyLjY1djIuMDljLTYuMDYgMS4yMS02LjkzIDMuMjItNi45MyA0Ljg3IDAgMi4yMSAxLjU1IDMuMiAzLjIzIDMuMiAxLjQ1IDAgMi44OC0uNjkgMy45Ni0xLjguMzQgMS4wMyAxLjAxIDEuNjUgMi4wMiAxLjYyLjM1LS4wMS40MS4wOSAxLjQ2LS4zNy4zNy0uMS4zNS0uMDkuNzctLjAxLjU2LjE5IDEuMzIuNTcgMi42Ni41NyAyLjAzLjAzIDMuODUtMS44NSAzLjg1LTQuMTcgMC0xLjUtLjQzLTIuNDEtMi4zOS0zLjYzem0tOC40MyA0LjMyYzAgMS42NS0xLjY4IDIuNTItMi42IDIuNTItMS4zOCAwLTIuMzMtLjg5LTIuMzMtMi42NiAwLTIuNzMgMy4yOC0zLjIzIDQuOTQtMy42Ny0uMDEtLjAxLS4wMSAzLjgxLS4wMSAzLjgxem0yMTkuOTkuMTljLS4zMSAwLTEuMDcgMS4yOS0xLjA3IDEuNjMgMCAuMzQuNzcgMS42IDEuMDcgMS42LjMzIDAgMS4wNy0xLjIzIDEuMDctMS42cy0uNzMtMS42My0xLjA3LTEuNjN6bTMzLjcxIDEuMTJWOS45MmMwLS42MS0uMzQtLjc3LS40NC0uNzctLjM5IDAtLjYxLjEtLjg4LjE2LS4yNy4xLS41OC4yMy0xLjI5LjIzLS4xMyAwLS43OS0uMTItLjc2LjI1LjA0LjM3IDEuNTcuMTUgMS41OCAxLjIzdjcuODNjLS4xMiAxLjM3LTEuMjcgMi44OC0yLjY2IDIuODgtLjMyIDAtMi4zOS0uMjItMi4zNy0zLjY1VjkuOTJjMC0uNjEtLjM0LS43Ny0uNDQtLjc3LS4zOSAwLS42MS4xLS44OC4xNi0uMjcuMS0uNjEuMjItMS4zMi4xOS0uMzgtLjAyLS43OS0uMDctLjczLjI5LjA2LjMyIDEuNTkgMCAxLjU5IDEuMjN2Ny41MWMwIDIuNzQgMS42MSA0LjMyIDMuNTYgNC4zMiAxLjMgMCAyLjQ5LS4yOCAzLjI0LTEuOGguMDV2MS4zMmMwIC4xMy4wMy40OC4yMi40OC4zNyAwIC41Ni0uMy44My0uNC4yOS0uMDcuMzctLjMzIDEuMjgtLjQyLjM5LS4wNC44Mi0uMjQuODItLjUtLjExLS41My0xLjQuMDYtMS40LS43OHpNMjkwLjA5IDkuMTFjLTMuMjYgMC01Ljc3IDMuMjgtNS43NyA3LjEzIDAgMS43My40MiAzLjE1IDEuMTMgNC4yMy0uNzkuNTctMi4yMyAxLjEtNC45NiAxLjEtMi4xMyAwLTEuOTMtLjc0LTEuOTMtMi41NVY0LjU3YzAtMi42NiAxLjk5LTEuODkgMi4wMy0yLjM3LjAzLS4zNC0uMjgtLjI2LS42MS0uMjYtLjM4IDAtMS4wNy4xNS0yLjUyLjE1LTEuMjUgMC0yLjM0LS4xMi0yLjg4LS4xMi0uMzMgMC0uNjMuMS0uNTIuMzUuMjUuNTcgMi4xNC4wNSAyLjE0IDEuNjV2MTUuMWMwIDEuNDQuMjEgMi4zNi0uNDUgMi43My0uODEuNDktMS43Ni41MS0xLjY4LjgzLjA1LjE5LjQ1LjIuNjguMiAxLjAyIDAgMi40Mi0uMTMgMy40NC0uMTUgMS45NC0uMDYgMy44Ni4xMyA1Ljc5LjEzIDEuMTIgMCAxLjQtLjIyIDIuMjItMS4zMy4wMS0uMDIuMDItLjAzLjA0LS4wNSAxLjAxLjk0IDIuMzQgMS40NCAzLjg3IDEuNDQgMy4xOSAwIDUuNi0yLjkzIDUuNi02Ljc4LjAxLTUuODItMy42NS02Ljk4LTUuNjItNi45OHptLjI2IDEyLjg1Yy0zLjAzIDAtNC4yMi0zLjc2LTQuMjItNi44MiAwLTIuNjUgMS4wNC01LjEgMy41Ny01LjEgMy4wOCAwIDQuMTkgMy4yOSA0LjE5IDYuNTEuMDEgMy44Ny0xLjM2IDUuNDEtMy41NCA1LjQxem0tMzIuMDMtMTAuNDljLS43NS0uMzctMS44NS0xLjA0LTIuMzktMS4zNi0yLjM3LTEuMzctMy4zLTIuMjYtMy4zNy0zLjUyLS4xMi0yLjIxIDIuMDQtMy41MiAzLjU4LTMuMzUgMS45NiAwIDMuNTcgMS4xOSA0LjI0IDMuNzMuMDcuMjcuMzEuODkuNTYuODkuMjIgMCAuMjYtLjIuMjQtLjQ1bC0uMzMtNC4wMmMtLjAyLS4zMy0uMTQtLjQyLS4yNy0uNDItLjIyIDAtLjM2LjMzLS41Ni4zMy0uMzEgMC0xLjEtMS4xMS0zLjgtMS4wOS0uMTgtLjAxLS40My4wMi0uNDMuMDItMi42My0uMDUtNS4xIDEuNy01LjAyIDUuNC4wNyAzLjM3IDMuODUgNS4zIDUuODkgNi41OSAxLjUxLjkgMy4wOSAyLjM0IDMuMDQgMy45NS0uMDggMi40Ny0xLjYzIDQuMDgtMy41OCAzLjk0LTQuNTktLjA4LTMuOTYtNi4xMy00Ljc4LTYuMTMtLjU2IDAtLjQ1IDEuNTItLjQ2IDIuMzIgMCAxLjkyLS4wOCAzLjQ5LjE0IDMuNzcuMDcuMDkuMjkuMDUuNzQuMDUuOSAwIDIgMS4wNSA0LjY1IDEuMDUgMi45NS4wNSA1LjM4LTIuNjkgNS4zOC02LjI1LS4wMS0yLjE5LS42Mi0zLjU4LTMuNDctNS40NXptNTEuNjktMy4zMWMuMzMgMCAxLjA3LTEuMiAxLjA3LTEuNTcgMC0uMzYtLjc0LTEuNi0xLjA3LTEuNi0uMyAwLTEuMDcgMS4yNi0xLjA3IDEuNnMuNzYgMS41NyAxLjA3IDEuNTd6TTMxMi42NCAyMmMtLjUyLS4wMy0xLjYzLS4yMy0xLjYzLTEuMzVWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuODYtLjk2IDIuMDQtMS41MiAyLjA0LS44NC0uMDEtLjYzLjEtLjYzLjM2LjAzLjMxLjUzLjMzIDEuMzcuMzQuMjggMCAxLS4xMSAxLjgyLS4xMSAxLjA3IDAgMS44Ny4xMiAyLjQxLjEyLjMzIDAgLjc2LS44LjA3LS42OXptNS45OC02Ljg4Yy0uNTEtLjI0LTEuMjctLjY4LTEuNjUtLjg4LTEuNjMtLjg5LTIuMjctMS40Ny0yLjMxLTIuMy0uMDgtMS40NCAxLjE1LTIuMTkgMi4yMS0yLjA4IDIuNTQtLjA1IDIuODggMi44IDMuMTQgMi44LjM5IDAgLjI4LS4zNy4yOC0xLjIxIDAtLjIxLjAzLTEuMjctLjEzLTEuNTItLjMxLS40Ni0yLjExLS43NC0yLjU1LS43NC0uMTEgMC0uNTItLjAxLS42LS4wMS0uMTMgMC0uMjguMDEtLjI4LjAxLTEuODEtLjAzLTMuNSAxLjExLTMuNDQgMy41My4wNSAyLjIxIDIuNjQgMy40NiA0LjA0IDQuMyAxLjA0LjU5IDIuMjYgMS4xNSAyLjI0IDIuNTctLjAyIDEuNjEtMS4yNyAyLjY4LTIuNjEgMi42LTMuMTUtLjA1LTIuNzItNC0zLjI4LTQtLjM5IDAtLjMxIDEtLjMxIDEuNTItLjAxIDEuMjUtLjA2IDIuMjguMSAyLjQ2LjA1LjA2LjIuMDMuNS4wMy42MiAwIDEuMzguNjkgMy4xOS42OSAyLjAzLjAzIDMuODUtMS44NSAzLjg1LTQuMTctLjAxLTEuNDgtLjQzLTIuMzktMi4zOS0zLjZ6bS00OC43MyA1LjY2Yy0uMjYuMTMtLjg1Ljc3LTIuMjguNzctMS4wNyAwLTEuNjgtLjY0LTEuNzQtMnYtOC44MmwzLjM4LS4wMWMuMjIgMCAuNjUtMS40NC42Ny0xLjUyLjA0LS4xOC4xLS4zMy4xMi0uNDYuMDQtLjI4LS4xNy0uMy0uMzctLjAxLS4xNS4xNS0uMzIuNTUtLjk5LjU1aC0yLjgxYzAtMi40MS4wMy0zLjA0LS4zNS0zLjA0LS4zNiAwLS4zLjEtLjYzIDEuMTctLjU0IDEuNzktMi41MiAyLjU4LTMuMTUgMi45Ny0uMTUuMDgtLjE1LjExLS4xNS4xOS0uMDEuMjMuNzUuMTQgMi4zMS4xN2wtLjAxIDguMDdjMCAzLjQ1IDEuNjQgNC4wMyAyLjg3IDQuMDMgMS44NyAwIDMuMjEtMS4zNCAzLjI4LTEuOC4wMy0uMjUgMC0uMjgtLjE1LS4yNnptLTgxLjMyLTEuMDljLS41NyAwLTEuNDIgMS42Mi0zLjY2IDEuNjItMS41OCAwLTQuMTctMS41My00LjE3LTYuNjZoNi45Yy42IDAgLjg4LjAzLjg4LS41MiAwLTEuMjUtMS40LTQuOTUtNC41OS00Ljk1LTMuMjQgMC01LjA4IDMuMzMtNS4wOCA3LjMxIDAgMi4wNSAxLjM1IDYuMzggNS4yNCA2LjM4IDIuMzMgMCA0LjU5LTIuMjQgNC41OS0yLjk1LS4wMS0uMTEtLjAxLS4yMy0uMTEtLjIzem0tNS4wOC05LjgxYzEuNDIgMCAyLjg4IDEuNTYgMi44OCAzLjMgMCAuNDYtLjE1LjYyLS41Mi42MmgtNS4xMWMwLTEuNzEgMS4xMy0zLjkyIDIuNzUtMy45MnptLTMxLjctNy4zM2MuMS0uMTYtLjI1LS4yNC0uMzctLjI0LS40MiAwLTEuMzcuMTEtMS44LjExLS44OSAwLTEuNjQtLjA5LTIuNTMtLjA5LS4wNyAwLS40Ni4wNS0uNDYuMTgtLjAxLjYzIDIuMTMtLjExIDIuMTMgMi42djEwLjU3YzAgMy4xMy0uOTkgNi40MS01LjI5IDYuNDEtMy4wOSAwLTQuNzYtMS45NC00Ljc2LTYuMTdWNC40MWMwLTEuOTEgMS40OS0xLjQ5IDEuNTItMS45Mi4wMy0uNDEtMS4zMy0uMTYtMS40My0uMTYtLjcxIDAtMS4yMS4wOC0xLjk1LjA4LS42MiAwLTEuMzctLjEtMS45Ny0uMS0uMTIgMC0uNTMtLjAyLS42MS4xNS0uMjMuNTYgMS45MS4yNiAxLjkxIDEuODN2MTAuOTJjMCA0LjA4IDEuMTQgOC4wOCA3LjE3IDcuOTcgNy4xNC0uMTIgNy4wMS02LjU0IDcuMDEtNy44M1Y1LjEyYy4wMS0yLjQzIDEuMi0yLjIgMS40My0yLjU3em0yOC4xOSA3LjI0Yy4xNy0uMi4yMi0uNTMtLjU3LS40Ni0uNDUgMC0uNzcuMDgtMS4yMi4wOC0uNTcgMC0uNjgtLjAyLTEuMjItLjA0LS42OC0uMDItLjg2LjA1LS44Mi4yNS4xMi42IDEuNTUuMDEgMS4zNiAxLjgtLjE2IDEuNS0uNjUgMi43OS0xLjE0IDQuMDdsLTEuNzMgNC42Mi0yLjU0LTcuN2MtLjMxLS45Ni0uNDUtMS40Ny0uNDUtMS41NyAwLS45NiAxLjE2LS43NSAxLjQyLTEuMTQuMTYtLjI2LS4xNy0uNC0uNTQtLjQtLjMxIDAtLjY3LjExLTEuNjMuMTMtLjc5LjAyLTEuMzYuMDItMS43LS4wNS0uODktLjE2LS44Mi4zMy0uNTEuNDhzLjQ2LjAxLjkxIDEuMzZsMy45MSAxMS4wNmMuMDguMjIuMTguNzcuNTIuNzcuMzkgMCAuMzktLjM5Ljg4LTEuNjkgMCAwIDMuNzUtMTAuNDggNC0xMC44Ni41MS0uNzQuODktLjUgMS4wNy0uNzF6bTE0LjQ3LS41Yy0xLjA3IDAtMS44IDEuMjgtMi4zMyAyLjE2aC0uMDVWOS41M2MwLS4zLS4xNS0uNDgtLjMtLjQ4LS40MSAwLS43Mi44MS0yLjg3IDEuMzMtLjEzLjAzLS40OC4xLS40OC4yOCAwIC42NCAxLjgyLS4xOSAxLjgyIDEuOTN2OC4wN2MwIDEuMjUtMS4yOSAxLjEyLTEuMjkgMS43NyAwIC4xOC4wOC4yNy4yOC4yNy4xNyAwIC42My0uMTIgMi4zMi0uMTIgMS40MSAwIDIuMDIuMTIgMi4zNy4xMi4yOCAwIC40MS0uMDYuNDEtLjM0IDAtLjk4LTIuMjUuNDgtMi4yNS0yLjM0di02Ljg4YzAtLjQuNi0xLjggMS42NC0xLjguOTEgMCAxLjAyLjcgMS41LjcuMyAwIC45MS0uOTEuOTEtMS4zOC0uMDEtLjU4LTEuMTYtMS4zNy0xLjY4LTEuMzd6bTMyLjU1LjFjLS4yNyAwLS45Ni4wNC0xLjU5LjA0LS43NiAwLTEuMTMtLjA5LTEuNDUtLjA5LS40OCAwLS45NiAwLS44Ny4zMi4xLjM2IDEuNzMuMjMgMS43MyAyLjAxIDAgLjIzIDAgLjUyLS4zMyAxLjcxbC0yLjA4IDYuNjMtMi45LTguMTVzLS4xNC0uMjYtLjE0LS43OWMwLTEuMzIgMS41NC0xLjE3IDEuNi0xLjQxLjA1LS4xOS0uMjEtLjQtLjYyLS40aC0zLjYzYy0uMDIgMC0uMDMuMDEtLjA1LjAxaC0yLjgxYzAtMi40MS4wMy0zLjA0LS4zNS0zLjA0LS4zNiAwLS4zLjEtLjYzIDEuMTctLjU0IDEuNzktMi41MiAyLjU4LTMuMTUgMi45Ny0uMTUuMDgtLjE1LjExLS4xNS4xOS0uMDEuMjIuNzYuMTQgMi4zMS4xN2wtLjAxIDguMDdjMCAzLjQ1IDEuNjQgNC4wMyAyLjg3IDQuMDMgMS44NyAwIDMuMjEtMS4zMyAzLjI4LTEuOCAwLS4yNy0uMDQtLjI5LS4xOC0uMjctLjI2LjEzLS44NS43Ny0yLjI4Ljc3LTEuMDcgMC0xLjY4LS42NC0xLjc0LTJWMTAuN3MyLjUtLjAxIDMuMjEtLjAxYy4wNC4wNi4wOC4xMy4xLjE5bDIuOTkgOC40NWMuMjQuNjkuMzkuOTIuNjggMi4xNC4xOS43OS4xMiAxLjUxLjEyIDEuNTEtLjI5IDEuMjctMS4wNyAxLjk5LTIuMjYgNC4zNC0uMTIuMjIgMS43MS0uMDIgMS44MS0uMDUuMTUtLjA1LjEzLS4wOS4zMS0uNDJsMS4zMi0zLjkzIDMuNjktMTEuMzRjLjU0LTEuOTggMS4zOS0xLjYyIDEuNTMtMS44OS4xMi0uMTMgMC0uMy0uMzMtLjN6XFxcIj5cXG4gICAgICA8L3BhdGg+XFxuICAgICAgPHBhdGhcXG4gICAgICAgIGQ9XFxcIk0yMjIuMjIgMjIuNzZsLS4wNy4xOVYyM2wuMDctLjI0em0tMTQuNzQtMTQuNmMuMzMgMCAxLjA3LTEuMiAxLjA3LTEuNTcgMC0uMzYtLjc0LTEuNi0xLjA3LTEuNi0uMyAwLTEuMDcgMS4yNi0xLjA3IDEuNnMuNzYgMS41NyAxLjA3IDEuNTd6TTIxMC4xMSAyMmMtLjUyLS4wMy0xLjYzLS4yMy0xLjYzLTEuMzVWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuODYtLjk2IDIuMDQtMS41MiAyLjA0LS44NC0uMDEtLjYzLjEtLjYzLjM2LjAzLjMxLjUzLjMzIDEuMzcuMzQuMjggMCAxLS4xMSAxLjgyLS4xMSAxLjA3IDAgMS44Ny4xMiAyLjQxLjEyLjMzIDAgLjc2LS44LjA3LS42OXpNMTY2LjUyIDguMTZjLjMzIDAgMS4wNy0xLjIgMS4wNy0xLjU3IDAtLjM2LS43NC0xLjYtMS4wNy0xLjYtLjMgMC0xLjA3IDEuMjYtMS4wNyAxLjZzLjc3IDEuNTcgMS4wNyAxLjU3ek0xNjkuMTcgMjJjLS41Mi0uMDMtMS42My0uMjMtMS42My0xLjM1VjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtLjk4IDEuMDgtMi42MyAxLjY0LS4xMy4wMy0uMzcuMDYtLjM3LjI0IDAgLjY1IDEuNDktLjYxIDEuNDIgMS42OXY3LjI3Yy4wNiAxLjg2LS45NiAyLjA0LTEuNTIgMi4wNGgtLjE3Yy0uNTQtLjEtMS4wNi0uMzItMS4wNS0xLjc5di01LjA4YzAtMi4zNC0uNzYtNS43Ni00LjIyLTUuNzYtMi41MSAwLTMuODEgMi4zOC0zLjc2IDIuMDFWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0xLjA0IDEuMDEtMy4wNyAxLjYyLS4xMy4wMy0uNS4wNC0uNTEuMjcgMCAuNjUgMi4wMy0uODQgMiAxLjY4djcuNjRjMCAyLTEuMzUgMS41Mi0xLjY2IDIuMDQtLjE1LjI3LjI1LjMzLjU5LjMzLjMxIDAgLjgzLS4xMyAyLjItLjEzIDEuNSAwIDIuMDIuMTMgMi40Ni4xMy4zOSAwIC44My0uMTcuNTctLjQ0LS40Mi0uNDEtMi4yOC4wNi0yLjI4LTIuMDZ2LTcuMDljLS4wMy0uNDkuODgtMi40IDMuMDYtMi40IDIuMSAwIDMuMDMgMi4zMSAzLjAzIDMuODV2NS43NmMtLjAzIDIuMjctLjggMS41NS0xLjExIDItLjE3LjI1LjEzLjM3LjQ2LjM3cy44OC0uMTMgMS44Ny0uMTNjMS4yNyAwIDEuODIuMTIgMi4xNi4xMi4wNCAwIC4wOS0uMDEuMTMtLjAxLjExIDAgLjIxLjAxLjM0LjAxLjI4IDAgMS0uMTEgMS44Mi0uMTEgMS4wNyAwIDEuODcuMTIgMi40MS4xMi4zNC4wMi43NS0uNzguMDgtLjY3em0zMi43Mi02Ljg5Yy0uNTEtLjI0LTEuMjctLjY4LTEuNjUtLjg4LTEuNjMtLjg5LTIuMjctMS40Ny0yLjMxLTIuMy0uMDgtMS40NCAxLjE1LTIuMTkgMi4yMS0yLjA4IDIuNTQtLjA1IDIuODggMi44IDMuMTQgMi44LjM5IDAgLjI4LS4zNy4yOC0xLjIxIDAtLjIxLjAzLTEuMjctLjEzLTEuNTItLjMxLS40Ni0yLjEtLjc0LTIuNTUtLjc0LS4xMSAwLS41Mi0uMDEtLjYtLjAyLS4xMyAwLS4yOC4wMi0uMjguMDItMS44MS0uMDMtMy41IDEuMTEtMy40NSAzLjUzLjA1IDIuMjEgMi42NCAzLjQ2IDQuMDQgNC4zIDEuMDQuNTkgMi4yNiAxLjE1IDIuMjQgMi41Ny0uMDIgMS42Mi0xLjI3IDIuNjgtMi42MSAyLjYtMy4xNS0uMDUtMi43Mi00LTMuMjgtNC0uMzkgMC0uMzEgMS0uMzEgMS41MiAwIDEuMjUtLjA2IDIuMjguMSAyLjQ2LjA1LjA2LjIuMDMuNS4wMy42MiAwIDEuMzguNjkgMy4xOS42OSAyLjAzLjAzIDMuODUtMS44NSAzLjg1LTQuMTcgMC0xLjQ3LS40Mi0yLjM4LTIuMzgtMy42elxcXCI+XFxuICAgICAgPC9wYXRoPlxcbiAgICA8L2c+XFxuICA8L3N2Zz5cXG48L2Rpdj5cXG48aGVhZGVyIHJvbGU9XFxcImJhbm5lclxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICA8YSBjbGFzcz1cXFwic2l0ZS10aXRsZVxcXCIgaHJlZj1cXFwiZmlsZXMvaW5kZXguaHRtbFxcXCI+TnVyc2VyeSBTY2hvb2w8L2E+XFxuICA8L2Rpdj5cXG4gIDxkaXYgaWQ9XFxcIm1haW4tbWVudS1jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImRyb3BidG5cXFwiPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJhYm91dFxcXCIgaHJlZj1cXFwiZmlsZXMvYWJvdXQuaHRtbFxcXCI+QWJvdXRcXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICA8YSBpZD1cXFwidHVpdGlvblxcXCIgaHJlZj1cXFwiZmlsZXMvdHVpdGlvbi5odG1sXFxcIj5UdWl0aW9uPC9hPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJzdGFmZlxcXCIgaHJlZj1cXFwiZmlsZXMvc3RhZmYuaHRtbFxcXCI+U3RhZmY8L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcInBhcmVudC1oYW5kYm9va1xcXCIgaHJlZj1cXFwiZmlsZXMvcGFyZW50X2hhbmRib29rLmh0bWxcXFwiPlBhcmVudCBIYW5kYm9vazwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGJ0blxcXCI+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcImNsYXNzcm9vbXNcXFwiIGhyZWY9XFxcImZpbGVzL2NsYXNzcm9vbXMuaHRtbFxcXCI+Q2xhc3Nyb29tc1xcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJjdXJyaWN1bHVtLW92ZXJ2aWV3XFxcIiBocmVmPVxcXCJmaWxlcy9jdXJyaWN1bHVtX292ZXJ2aWV3Lmh0bWxcXFwiPkN1cnJpY3VsdW0gT3ZlcnZpZXc8L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcInRlZGR5LWJlYXJzXFxcIiBocmVmPVxcXCJmaWxlcy90ZWRkeV9iZWFycy5odG1sXFxcIj5UZWRkeSBCZWFyczwvYT5cXG4gICAgICAgICAgICA8YSBpZD1cXFwicGFuZGEtYmVhcnNcXFwiIGhyZWY9XFxcImZpbGVzL3BhbmRhX2JlYXJzLmh0bWxcXFwiPlBhbmRhIEJlYXJzPC9hPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJiZWFyLWN1YnNcXFwiIGhyZWY9XFxcImZpbGVzL2JlYXJfY3Vicy5odG1sXFxcIj5CZWFyIEN1YnM8L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcImJpZy1iZWFyc1xcXCIgaHJlZj1cXFwiZmlsZXMvYmlnX2JlYXJzLmh0bWxcXFwiPkJpZyBCZWFyczwvYT5cXG4gICAgICAgICAgICA8YSBpZD1cXFwic3VuLWJlYXJzXFxcIiBocmVmPVxcXCJmaWxlcy9zdW5fYmVhcnMuaHRtbFxcXCI+U3VuIEJlYXJzPC9hPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJiZWFyLXRyYWNrc1xcXCIgaHJlZj1cXFwiZmlsZXMvYmVhcl90cmFja3MuaHRtbFxcXCI+QmVhciBUcmFja3M8L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcImVucmljaG1lbnQtcHJvZ3JhbVxcXCIgaHJlZj1cXFwiZmlsZXMvZW5yaWNobWVudF9wcm9ncmFtcy5odG1sXFxcIj5FbnJpY2htZW50IFByb2dyYW08L2E+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8YSBpZD1cXFwiY2FsZW5kYXJcXFwiIGhyZWY9XFxcImZpbGVzL2NhbGVuZGFyLmh0bWxcXFwiPkNhbGVuZGFyPC9hPlxcbiAgICAgICAgPGEgaWQ9XFxcInN1bW1lci1jYW1wXFxcIiBocmVmPVxcXCJmaWxlcy9zdW1tZXJfY2FtcC5odG1sXFxcIj5TdW1tZXIgQ2FtcDwvYT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZHJvcGJ0blxcXCI+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcImdldC1pbnZvbHZlZFxcXCIgaHJlZj1cXFwiZmlsZXMvZ2V0X2ludm9sdmVkLmh0bWxcXFwiPkdldCBJbnZvbHZlZDwvYT5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJudXJzZXJ5LXNjaG9vbC1tZXJjaGFuZGlzZVxcXCIgaHJlZj1cXFwiZmlsZXMvbnVyc2VyeV9zY2hvb2xfbWVyY2hhbmRpc2UuaHRtbFxcXCI+TnVyc2VyeSBTY2hvb2xcXG4gICAgICAgICAgICAgIE1lcmNoYW5kaXNlPC9hPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJwYXJlbnQtYXNzb2NpYXRpb25cXFwiIGhyZWY9XFxcImZpbGVzL3BhcmVudF9hc3NvY2lhdGlvbi5odG1sXFxcIj5QYXJlbnQgQXNzb2NpYXRpb248L2E+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8YSBpZD1cXFwiYXBwbHlcXFwiIGhyZWY9XFxcImZpbGVzL2FwcGx5Lmh0bWxcXFwiPkFwcGx5PC9hPlxcbiAgICAgICAgPGEgaWQ9XFxcImZvcm1zXFxcIiBocmVmPVxcXCJmaWxlcy9mb3Jtcy5odG1sXFxcIj5Gb3JtczwvYT5cXG5cXG4gICAgICAgIDxhIGlkPVxcXCJwYXJlbnQtcmVzb3VyY2VzXFxcIiBocmVmPVxcXCJmaWxlcy9wYXJlbnRfcmVzb3VyY2VzLmh0bWxcXFwiPlBhcmVudCBSZXNvdXJjZXM8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9oZWFkZXI+XCI7XG4iLCJpbXBvcnQgeyBEIH0gZnJvbSBcIi4vLi4vY29yZS9kb20vZG9jdW1lbnRcIjtcblxuZXhwb3J0IGNsYXNzIFNsaWRlc2hvdyB7XG4gIHB1YmxpYyBzdGF0aWMgc2V0dXBBbGwoKSB7XG4gICAgU2xpZGVzaG93LmRpc2NhcmRBbGwoKTtcbiAgICBjb25zdCBzbGlkZXNob3dzID0gRC5jbGF6KFwic2xpZGVzaG93XCIpO1xuICAgIGZvciAobGV0IHNzSW5kZXggPSAwOyBzc0luZGV4IDwgc2xpZGVzaG93cy5sZW5ndGg7ICsrc3NJbmRleCkge1xuICAgICAgY29uc3QgZWxlbSA9IHNsaWRlc2hvd3MuaXRlbShzc0luZGV4KTtcbiAgICAgIGlmIChlbGVtID09IG51bGwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBTbGlkZXNob3cuc2xpZGVzaG93cy5wdXNoKG5ldyBTbGlkZXNob3coZWxlbSkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGlzY2FyZEFsbCgpIHtcbiAgICBTbGlkZXNob3cuc2xpZGVzaG93cyA9IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc2xpZGVzaG93czogU2xpZGVzaG93W10gPSBbXTtcblxuICBwcml2YXRlIHNsaWRlSW5kZXggPSAwO1xuICBwcml2YXRlIHNsaWRlQ291bnQgPSAwO1xuICBwcml2YXRlIHNsaWRlczogRWxlbWVudFtdID0gW107XG4gIHByaXZhdGUgZG90czogRWxlbWVudFtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdXRlcjogRWxlbWVudCkge1xuICAgIEQuZWFjaFJlY3VyKHRoaXMub3V0ZXIsIChlbGVtKSA9PiB7XG4gICAgICBjb25zdCBjTGlzdCA9IGVsZW0uY2xhc3NMaXN0O1xuICAgICAgaWYgKGNMaXN0LmNvbnRhaW5zKFwicHJldi1zbGlkZXNob3ctYnV0dG9uXCIpKSB7XG4gICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCBcImNsaWNrXCIsICgpID0+IHRoaXMubWludXNTbGlkZSgxKSk7XG4gICAgICB9IGVsc2UgaWYgKGNMaXN0LmNvbnRhaW5zKFwibmV4dC1zbGlkZXNob3ctYnV0dG9uXCIpKSB7XG4gICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCBcImNsaWNrXCIsICgpID0+IHRoaXMucGx1c1NsaWRlKDEpKTtcbiAgICAgIH0gZWxzZSBpZiAoY0xpc3QuY29udGFpbnMoXCJzbGlkZXNob3ctZW50cnlcIikpIHtcbiAgICAgICAgdGhpcy5zbGlkZXMucHVzaChlbGVtKTtcbiAgICAgIH0gZWxzZSBpZiAoY0xpc3QuY29udGFpbnMoXCJzbGlkZXNob3ctZG90XCIpKSB7XG4gICAgICAgIHRoaXMuZG90cy5wdXNoKGVsZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kb3RzLmxlbmd0aDsgKytpKSB7XG4gICAgICBELmFkZEV2ZW50TGlzdGVuZXIodGhpcy5kb3RzW2ldLCBcImNsaWNrXCIsICgpID0+IHRoaXMuc2hvd1NsaWRlKGkpKTtcbiAgICB9XG4gICAgdGhpcy5zbGlkZUNvdW50ID0gdGhpcy5zbGlkZXMubGVuZ3RoO1xuICAgIHRoaXMuc2hvd1NsaWRlKHRoaXMuc2xpZGVJbmRleCk7XG4gIH1cblxuICBwdWJsaWMgcGx1c1NsaWRlKG46IG51bWJlcikge1xuICAgIHRoaXMuc2hvd1NsaWRlKCh0aGlzLnNsaWRlSW5kZXggKz0gbikpO1xuICB9XG4gIHB1YmxpYyBtaW51c1NsaWRlKG46IG51bWJlcikge1xuICAgIHRoaXMuc2hvd1NsaWRlKCh0aGlzLnNsaWRlSW5kZXggLT0gbikpO1xuICB9XG4gIHB1YmxpYyBzaG93U2xpZGUoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuc2xpZGVJbmRleCA9IGluZGV4ICUgdGhpcy5zbGlkZUNvdW50O1xuICAgIHRoaXMuc2xpZGVJbmRleCA9IE1hdGgubWF4KHRoaXMuc2xpZGVJbmRleCwgLTEgKiB0aGlzLnNsaWRlSW5kZXgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbGlkZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICh0aGlzLnNsaWRlc1tpXSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5kb3RzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICAgICh0aGlzLnNsaWRlc1t0aGlzLnNsaWRlSW5kZXhdIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHRoaXMuZG90c1t0aGlzLnNsaWRlSW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH1cbn1cbiIsImltcG9ydCB7IHBhcmFtcyB9IGZyb20gJy4uL2NvcmUvdXRpbHMvcV9wYXJhbXMnO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vLi4vY29yZS9kYXRhLWxvZy9kYXRhJztcbmltcG9ydCB7IEFjdGlvbkVudW0gfSBmcm9tICcuLy4uL2NvcmUvZGF0YS1sb2cvZXZlbnQnO1xuaW1wb3J0IHsgRCB9IGZyb20gJy4vLi4vY29yZS9kb20vZG9jdW1lbnQnO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tICcuLy4uL2NvcmUvZG9tL2VsZW1lbnRzJztcbmltcG9ydCB7IFNjcm9sbCB9IGZyb20gJy4vLi4vY29yZS9kb20vc2Nyb2xsJztcbmltcG9ydCB7IEhpc3RvcnkgfSBmcm9tICcuLy4uL2NvcmUvcm91dGVyL2hpc3RvcnknO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJNb2RlLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICcuLy4uL2NvcmUvcm91dGVyL3JvdXRlcic7XG5pbXBvcnQgeyBUcmFja2VyIH0gZnJvbSAnLi8uLi9jb3JlL3RyYWNrZXIvdHJhY2tlcic7XG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSB9IGZyb20gJy4vLi4vY29yZS91dGlscy9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgSFRNTExvYWRlciB9IGZyb20gJy4vLi4vY29yZS91dGlscy9odG1sX2xvYWRlcic7XG5pbXBvcnQgeyBJREdlbmVyYXRvciB9IGZyb20gJy4vLi4vY29yZS91dGlscy9pZF9nZW5lcmF0b3InO1xuaW1wb3J0IHsgd2FpdFVudGlsUmVhZHkgfSBmcm9tICcuLy4uL2NvcmUvdXRpbHMvcmVhZHknO1xuaW1wb3J0IHsgc2NlbmFyaW9zLCBTY2VuYXJpbyB9IGZyb20gJy4vLi4vY29yZS91dGlscy9zY2VuYXJpb3MnO1xuXG5jb25zdCBzZXR1cCA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCB3YWl0VW50aWxSZWFkeSgpO1xuICAgIGNvbnN0IHNjZW5hcmlvID0gc2NlbmFyaW9zLmZpbmQoKHNjZW4pID0+IHNjZW4udGFnID09PSBwYXJhbXMudGFnKTtcbiAgICBpZiAoIXBhcmFtcy5zYW5kYm94KSB7XG4gICAgICAgIGlmIChzY2VuYXJpbyA9PT0gbnVsbCB8fCBzY2VuYXJpbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhbGVydCgnVGhpcyBISVQgaXMgYnJva2VuIGFuZCBjYW5ub3QgYmUgY29tcGxldGVkIGF0IHRoaXMgdGltZS4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFRyYWNrZXIubG9hZFNjZW5hcmlvKHNjZW5hcmlvIGFzIFNjZW5hcmlvKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBUcmFja2VyLnN0YXJ0KHtcbiAgICAgICAga2V5UHJlZml4OiAnaW5mb3JtYXRpb24tZm9yYWdpbmcnLFxuICAgICAgICBidWNrZXROYW1lOiAnY3NlLTI1Ni1sb2cnLFxuICAgICAgICBhbGxvd1N1Ym1pc3Npb246IHtcbiAgICAgICAgICAgIGFsbG93KCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRBcmVhID0gRC5pZCgndGV4dC1hcmVhJykgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGV4dEFyZWEudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dEFyZWEudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1lvdSBtdXN0IGZpbGwgb3V0IHRoZSB0ZXh0IGJveCB0byB0dXJuIHRoaXMgSElUIGluLic7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdUaGVyZSB3YXMgYW4gZXJyb3IgZmlsbCBvdXQgdGhlIGZvcm0gYW5kIHRyeSBhZ2Fpbi4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmVTdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5kYXRhLnJlc3BvbnNlID0gKEQuaWQoXG4gICAgICAgICAgICAgICAgICAgICd0ZXh0LWFyZWEnXG4gICAgICAgICAgICAgICAgKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGRlYnVnTGV2ZWw6IERlYnVnTGV2ZWxFbnVtLk5PTkUsXG5cbiAgICAgICAgYXN5bmMgc2V0dXAoKSB7XG4gICAgICAgICAgICAvLyBjb25maWd1cmUgcm91dGVyXG4gICAgICAgICAgICBSb3V0ZXIuZGVmYXVsdEFsbG93YW5jZXNPbigpO1xuICAgICAgICAgICAgUm91dGVyLmNvbmZpZ3VyZShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IFJvdXRlck1vZGUuU1RBTkRBUkRfQUxMT1dBTkNFUyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZTogUm91dGVyTW9kdWxlLkEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbW9kZTogUm91dGVyTW9kZS5PRkYsIG1vZHVsZTogUm91dGVyTW9kdWxlLkZPUk0gfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogUm91dGVyTW9kZS5TVEFOREFSRF9BTExPV0FOQ0VTLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBSb3V0ZXJNb2R1bGUuSU1HLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgJ2ZpbGVzLydcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBIaXN0b3J5LnNldHVwKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB7IHdyYXBwZXI6IHRydWUgfSk7XG4gICAgICAgICAgICAvLyBjb25maWd1cmUgaHRtbCBsb2FkZXIgcG9zdCBvcGVyYXRpb25cbiAgICAgICAgICAgIEhUTUxMb2FkZXIuZmluaXNoKCk7XG4gICAgICAgICAgICBIVE1MTG9hZGVyLnJlZ2lzdGVyUG9zdExvYWRGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICBJREdlbmVyYXRvci5yZXNldCgpO1xuICAgICAgICAgICAgICAgIElER2VuZXJhdG9yLmF0dGFjaElkc1RvQWxsRWxlbWVudHMoKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuc2V0dXAoRWxlbWVudHMuaHRtbExvYyk7XG4gICAgICAgICAgICAgICAgU2Nyb2xsLnByb21pc2UoMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGNvbmZpZ3VyZSBsaXN0ZW5lcnMgb24gaHRtbCBsb2NcbiAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihFbGVtZW50cy5odG1sTG9jLCBBY3Rpb25FbnVtLkNMSUNLLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ID0gZSBhcyBNb3VzZUV2ZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogZXYuY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgICAgeTogZXYuY2xpZW50WSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IChldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgVHJhY2tlci5nZXRFdmVudERpc3BhdGNoRnVuYyhBY3Rpb25FbnVtLkNMSUNLKShvYmopO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoRWxlbWVudHMuZG9jdW1lbnQsICdrZXlwcmVzcycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXYgPSBlIGFzIEtleWJvYXJkRXZlbnQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGV2LmtleSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IChldi5zcmNFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5pZCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFRyYWNrZXIuZ2V0RXZlbnREaXNwYXRjaEZ1bmMoQWN0aW9uRW51bS5CVVRUT04pKG9iaik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFNQRUNJQUwgQ0FTRTogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IGRvZXMgbm90IGJlaGF2ZSB0aGUgc2FtZSB3YXkgYXMgZG9jdW1lbnQgc28gdGhlIGJlbG93IGZ1bmN0aW9uIG11c3QgYmVoYXZlIGRpZmZlcmVudGx5IHRoYW4gdGhlIGxpc3RlbmVycyBhYm92ZS5cbiAgICAgICAgICAgIGNvbnN0IHNFbGVtID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCBhcyBFbGVtZW50O1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkeCA9IHNFbGVtLnNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgICAgY29uc3QgZHkgPSBzRWxlbS5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgY29uc3QgZHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIE1hdGguYWJzKFRyYWNrZXIubGFzdFBvcy54IC0gZHgpID4gMTAgfHxcbiAgICAgICAgICAgICAgICAgICAgKE1hdGguYWJzKFRyYWNrZXIubGFzdFBvcy55IC0gZHkpID4gMTAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGR0aW1lIC0gVHJhY2tlci5sYXN0UG9zLnRpbWUgPiAxMDApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIFRyYWNrZXIubGFzdFBvcy54ID0gZHg7XG4gICAgICAgICAgICAgICAgICAgIFRyYWNrZXIubGFzdFBvcy55ID0gZHk7XG4gICAgICAgICAgICAgICAgICAgIFRyYWNrZXIubGFzdFBvcy50aW1lID0gZHRpbWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHsgeDogZHgsIHk6IGR5IH07XG4gICAgICAgICAgICAgICAgICAgIFRyYWNrZXIuZ2V0RXZlbnREaXNwYXRjaEZ1bmMoQWN0aW9uRW51bS5TQ1JPTEwpKG9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjb25maWd1cmUgdHJhY2tlZCBldmVudHNcbiAgICAgICAgICAgIFRyYWNrZXIucmVnaXN0ZXJFdmVudChBY3Rpb25FbnVtLkhJU1RPUlkpO1xuICAgICAgICAgICAgVHJhY2tlci5yZWdpc3RlckV2ZW50KEFjdGlvbkVudW0uQlVUVE9OKTtcbiAgICAgICAgICAgIFRyYWNrZXIucmVnaXN0ZXJFdmVudChBY3Rpb25FbnVtLkNMSUNLKTtcbiAgICAgICAgICAgIFRyYWNrZXIucmVnaXN0ZXJFdmVudChBY3Rpb25FbnVtLlNDUk9MTCk7XG4gICAgICAgICAgICAvLyBsb2FkIGZpcnN0IHBhZ2VcbiAgICAgICAgICAgIGF3YWl0IFJvdXRlci5sb2FkKCdmaWxlcy9pbmRleC5odG1sJyk7XG4gICAgICAgIH0sXG4gICAgfSk7XG59O1xuXG5zZXR1cCgpO1xuIl19
