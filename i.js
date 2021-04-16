! function(t) {
    function e(e) {
        for (var r, a, i = e[0], u = e[1], s = e[2], p = 0, f = []; p < i.length; p++) a = i[p], Object.prototype.hasOwnProperty.call(o, a) && o[a] && f.push(o[a][0]), o[a] = 0;
        for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (t[r] = u[r]);
        for (l && l(e); f.length;) f.shift()();
        return c.push.apply(c, s || []), n()
    }

    function n() {
        for (var t, e = 0; e < c.length; e++) {
            for (var n = c[e], r = !0, a = 1; a < n.length; a++) {
                var u = n[a];
                0 !== o[u] && (r = !1)
            }
            r && (c.splice(e--, 1), t = i(i.s = n[0]))
        }
        return t
    }
    var r = {},
        a = {
            90: 0
        },
        o = {
            90: 0
        },
        c = [];

    function i(e) {
        if (r[e]) return r[e].exports;
        var n = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.e = function(t) {
        var e = [];
        a[t] ? e.push(a[t]) : 0 !== a[t] && {
            2: 1,
            5: 1,
            6: 1,
            8: 1,
            9: 1,
            10: 1,
            11: 1,
            12: 1,
            13: 1,
            14: 1,
            15: 1,
            16: 1,
            17: 1,
            18: 1,
            19: 1,
            20: 1,
            21: 1,
            22: 1,
            23: 1,
            24: 1,
            25: 1,
            26: 1,
            27: 1,
            28: 1,
            29: 1,
            30: 1,
            31: 1,
            32: 1,
            33: 1,
            34: 1,
            35: 1,
            36: 1,
            37: 1,
            38: 1,
            39: 1,
            40: 1,
            41: 1,
            42: 1,
            43: 1,
            45: 1,
            46: 1,
            47: 1,
            48: 1,
            49: 1,
            50: 1,
            51: 1,
            52: 1,
            53: 1,
            54: 1,
            55: 1,
            57: 1,
            58: 1,
            59: 1,
            60: 1,
            62: 1,
            63: 1,
            65: 1,
            66: 1,
            67: 1,
            69: 1,
            70: 1,
            71: 1,
            72: 1,
            73: 1,
            74: 1,
            75: 1,
            77: 1,
            78: 1,
            79: 1,
            80: 1,
            81: 1,
            82: 1,
            83: 1,
            84: 1,
            85: 1,
            86: 1,
            87: 1,
            88: 1,
            89: 1
        } [t] && e.push(a[t] = new Promise(function(e, n) {
            for (var r = ({
                    2: "vendors",
                    4: "charts",
                    5: "components__Maintains",
                    6: "layouts",
                    8: "p__404",
                    9: "p__activity__customerMission",
                    10: "p__activity__forkConversion__index",
                    11: "p__activity__forkConversion__record",
                    12: "p__activity__staking__index",
                    13: "p__activity__staking__record",
                    14: "p__app-download",
                    15: "p__assets__balances",
                    16: "p__assets__record",
                    17: "p__assets__withdraw-address",
                    18: "p__auth__forget-password",
                    19: "p__auth__layout",
                    20: "p__auth__login",
                    21: "p__auth__register",
                    22: "p__auth__register-validate",
                    23: "p__auth__reset-password",
                    24: "p__cloud",
                    25: "p__etfIndex",
                    26: "p__financing__detail",
                    27: "p__financing__history",
                    28: "p__financing__layout",
                    29: "p__financing__list",
                    30: "p__hashrate__detail",
                    31: "p__hashrate__index",
                    32: "p__hashrate__record",
                    33: "p__home",
                    34: "p__info__about-us",
                    35: "p__info__coins",
                    36: "p__info__contact",
                    37: "p__info__fee",
                    38: "p__info__margin-step",
                    39: "p__info__privacy",
                    40: "p__info__risk",
                    41: "p__info__terms",
                    42: "p__info__vip",
                    43: "p__invite__rebate",
                    44: "p__invite__rebateLog",
                    45: "p__labs__detail",
                    46: "p__labs__layout",
                    47: "p__labs__list",
                    48: "p__labs__record",
                    49: "p__mday__detail",
                    50: "p__mday__main",
                    51: "p__mday__record",
                    52: "p__miningMachineMall__detail",
                    53: "p__miningMachineMall__index",
                    54: "p__miningMachineMall__record",
                    55: "p__mxc-financial__detail",
                    56: "p__mxc-financial__layout",
                    57: "p__mxc-financial__list",
                    58: "p__mxc-financial__record",
                    59: "p__official-verify",
                    60: "p__orders__CoinsOrder",
                    61: "p__orders__EtfIndex",
                    62: "p__orders__Margin",
                    63: "p__pos__detail",
                    64: "p__pos__layout",
                    65: "p__pos__list",
                    66: "p__pos__record",
                    67: "p__test",
                    68: "p__test__test",
                    69: "p__trade",
                    70: "p__trade-margin",
                    71: "p__tutorial__etf",
                    72: "p__tutorial__main",
                    73: "p__tutorial__school",
                    74: "p__ucenter__api",
                    75: "p__ucenter__bind-phone",
                    76: "p__ucenter__change-password",
                    77: "p__ucenter__change-phone",
                    78: "p__ucenter__frozen",
                    79: "p__ucenter__google-auth",
                    80: "p__ucenter__id-auth",
                    81: "p__ucenter__phishing",
                    82: "p__ucenter__profile",
                    83: "p__ucenter__sub-account",
                    84: "p__votingGovern__index",
                    85: "p__votingNew__detail",
                    86: "p__votingNew__list",
                    87: "p__votingNew__record",
                    88: "p__votingRanking__index",
                    89: "p__votingRecharge__index"
                } [t] || t) + "." + {
                    2: "20e8c3aa",
                    4: "31d6cfe0",
                    5: "804faf1f",
                    6: "6c6377ba",
                    8: "73a9ba17",
                    9: "c18be0de",
                    10: "a0288b64",
                    11: "77c8e680",
                    12: "af57f539",
                    13: "588003d0",
                    14: "6569bf69",
                    15: "e798552c",
                    16: "d4fd8564",
                    17: "a45b770b",
                    18: "04c0c1c0",
                    19: "21f89ced",
                    20: "077d62df",
                    21: "903d1124",
                    22: "5847dd36",
                    23: "96d4f721",
                    24: "8c165abd",
                    25: "cd1a3f16",
                    26: "77c64b8f",
                    27: "bee223c4",
                    28: "d45c20b1",
                    29: "497381fa",
                    30: "4b643732",
                    31: "edd1022c",
                    32: "df895f65",
                    33: "fdc6e906",
                    34: "b53c76f3",
                    35: "1e85d47d",
                    36: "48128642",
                    37: "10291b46",
                    38: "9a7d4737",
                    39: "b036412c",
                    40: "1ae4fc60",
                    41: "57216d24",
                    42: "6c3d8599",
                    43: "d7859c59",
                    44: "31d6cfe0",
                    45: "9a7391d0",
                    46: "a7a5b732",
                    47: "de505d53",
                    48: "66fbff92",
                    49: "126d8f65",
                    50: "9082d639",
                    51: "7beadf09",
                    52: "63c6d5dd",
                    53: "0a19b860",
                    54: "afeb2014",
                    55: "b8c3220d",
                    56: "31d6cfe0",
                    57: "72076f87",
                    58: "6ff201aa",
                    59: "29105550",
                    60: "26593c74",
                    61: "31d6cfe0",
                    62: "81b3ed0b",
                    63: "ccbb4748",
                    64: "31d6cfe0",
                    65: "da421155",
                    66: "24ce85e7",
                    67: "b8ad6774",
                    68: "31d6cfe0",
                    69: "53de5abb",
                    70: "5940fa5b",
                    71: "612b0097",
                    72: "22073b3d",
                    73: "bc579db9",
                    74: "f73bb45c",
                    75: "36164a8e",
                    76: "31d6cfe0",
                    77: "08be2c60",
                    78: "0dd0de0f",
                    79: "385d7045",
                    80: "c75c8b95",
                    81: "3785d7f5",
                    82: "a7443902",
                    83: "fac48001",
                    84: "e9d474bc",
                    85: "4f3d2453",
                    86: "ad397d38",
                    87: "46786854",
                    88: "1795758f",
                    89: "df5cc9f1"
                } [t] + ".chunk.css", o = i.p + r, c = document.getElementsByTagName("link"), u = 0; u < c.length; u++) {
                var s = (l = c[u]).getAttribute("data-href") || l.getAttribute("href");
                if ("stylesheet" === l.rel && (s === r || s === o)) return e()
            }
            var p = document.getElementsByTagName("style");
            for (u = 0; u < p.length; u++) {
                var l;
                if ((s = (l = p[u]).getAttribute("data-href")) === r || s === o) return e()
            }
            var f = document.createElement("link");
            f.rel = "stylesheet", f.type = "text/css", f.onload = e, f.onerror = function(e) {
                var r = e && e.target && e.target.src || o,
                    c = new Error("Loading CSS chunk " + t + " failed.\n(" + r + ")");
                c.code = "CSS_CHUNK_LOAD_FAILED", c.request = r, delete a[t], f.parentNode.removeChild(f), n(c)
            }, f.href = o, document.getElementsByTagName("head")[0].appendChild(f)
        }).then(function() {
            a[t] = 0
        }));
        var n = o[t];
        if (0 !== n)
            if (n) e.push(n[2]);
            else {
                var r = new Promise(function(e, r) {
                    n = o[t] = [e, r]
                });
                e.push(n[2] = r);
                var c, u = document.createElement("script");
                u.charset = "utf-8", u.timeout = 120, i.nc && u.setAttribute("nonce", i.nc), u.src = function(t) {
                    return i.p + "" + ({
                        2: "vendors",
                        4: "charts",
                        5: "components__Maintains",
                        6: "layouts",
                        8: "p__404",
                        9: "p__activity__customerMission",
                        10: "p__activity__forkConversion__index",
                        11: "p__activity__forkConversion__record",
                        12: "p__activity__staking__index",
                        13: "p__activity__staking__record",
                        14: "p__app-download",
                        15: "p__assets__balances",
                        16: "p__assets__record",
                        17: "p__assets__withdraw-address",
                        18: "p__auth__forget-password",
                        19: "p__auth__layout",
                        20: "p__auth__login",
                        21: "p__auth__register",
                        22: "p__auth__register-validate",
                        23: "p__auth__reset-password",
                        24: "p__cloud",
                        25: "p__etfIndex",
                        26: "p__financing__detail",
                        27: "p__financing__history",
                        28: "p__financing__layout",
                        29: "p__financing__list",
                        30: "p__hashrate__detail",
                        31: "p__hashrate__index",
                        32: "p__hashrate__record",
                        33: "p__home",
                        34: "p__info__about-us",
                        35: "p__info__coins",
                        36: "p__info__contact",
                        37: "p__info__fee",
                        38: "p__info__margin-step",
                        39: "p__info__privacy",
                        40: "p__info__risk",
                        41: "p__info__terms",
                        42: "p__info__vip",
                        43: "p__invite__rebate",
                        44: "p__invite__rebateLog",
                        45: "p__labs__detail",
                        46: "p__labs__layout",
                        47: "p__labs__list",
                        48: "p__labs__record",
                        49: "p__mday__detail",
                        50: "p__mday__main",
                        51: "p__mday__record",
                        52: "p__miningMachineMall__detail",
                        53: "p__miningMachineMall__index",
                        54: "p__miningMachineMall__record",
                        55: "p__mxc-financial__detail",
                        56: "p__mxc-financial__layout",
                        57: "p__mxc-financial__list",
                        58: "p__mxc-financial__record",
                        59: "p__official-verify",
                        60: "p__orders__CoinsOrder",
                        61: "p__orders__EtfIndex",
                        62: "p__orders__Margin",
                        63: "p__pos__detail",
                        64: "p__pos__layout",
                        65: "p__pos__list",
                        66: "p__pos__record",
                        67: "p__test",
                        68: "p__test__test",
                        69: "p__trade",
                        70: "p__trade-margin",
                        71: "p__tutorial__etf",
                        72: "p__tutorial__main",
                        73: "p__tutorial__school",
                        74: "p__ucenter__api",
                        75: "p__ucenter__bind-phone",
                        76: "p__ucenter__change-password",
                        77: "p__ucenter__change-phone",
                        78: "p__ucenter__frozen",
                        79: "p__ucenter__google-auth",
                        80: "p__ucenter__id-auth",
                        81: "p__ucenter__phishing",
                        82: "p__ucenter__profile",
                        83: "p__ucenter__sub-account",
                        84: "p__votingGovern__index",
                        85: "p__votingNew__detail",
                        86: "p__votingNew__list",
                        87: "p__votingNew__record",
                        88: "p__votingRanking__index",
                        89: "p__votingRecharge__index"
                    } [t] || t) + "." + {
                        2: "fadbe663",
                        4: "57030b38",
                        5: "5485a8d1",
                        6: "2e6ed082",
                        8: "e7bf861b",
                        9: "c9dc3a55",
                        10: "9e9428d8",
                        11: "fa912111",
                        12: "9239ab90",
                        13: "61bf6fe2",
                        14: "8c8fe590",
                        15: "dd6c165f",
                        16: "8b259f4b",
                        17: "cd9f9e5c",
                        18: "748344a6",
                        19: "5281a609",
                        20: "114199e0",
                        21: "145ea721",
                        22: "72b97078",
                        23: "4a64e616",
                        24: "fe370826",
                        25: "8d0847de",
                        26: "e88f01cd",
                        27: "e31bd6ae",
                        28: "f7dda1ad",
                        29: "19cc1e81",
                        30: "191eb7ce",
                        31: "e041d44e",
                        32: "eb1c401c",
                        33: "044cf2bc",
                        34: "415066b4",
                        35: "bdf69221",
                        36: "f0b37778",
                        37: "9a60b2b2",
                        38: "c270a6ee",
                        39: "526a6806",
                        40: "2ec1cd60",
                        41: "dcfc6b0c",
                        42: "a1b1c952",
                        43: "8c882c49",
                        44: "dc77da13",
                        45: "30cf1084",
                        46: "d2a50cd3",
                        47: "6aa6946d",
                        48: "bf3d5c4f",
                        49: "34936bdf",
                        50: "a672b0db",
                        51: "e3c1015e",
                        52: "10f9b1b5",
                        53: "8a14191a",
                        54: "029d99e4",
                        55: "9cb59dc7",
                        56: "4bf41794",
                        57: "b90eadbc",
                        58: "e156eade",
                        59: "6489f016",
                        60: "dd67b4f5",
                        61: "df5b89e9",
                        62: "7e65a9f1",
                        63: "3a220fa3",
                        64: "9980bbf8",
                        65: "243c1b03",
                        66: "82e9cd44",
                        67: "1e89a27d",
                        68: "8e325781",
                        69: "8afee682",
                        70: "2b35c1c1",
                        71: "2dd7ca40",
                        72: "1ef3a4af",
                        73: "b15d810b",
                        74: "2b9186c5",
                        75: "4eae9210",
                        76: "f92c092f",
                        77: "ed64b145",
                        78: "10543a7b",
                        79: "c28f1ef3",
                        80: "53bc9b2d",
                        81: "0b3bc4c7",
                        82: "4203e7da",
                        83: "425fba57",
                        84: "cddd28a1",
                        85: "a508a6d8",
                        86: "dfe453bd",
                        87: "3e752205",
                        88: "d82c3a64",
                        89: "32d3b2ac"
                    } [t] + ".async.js"
                }(t);
                var s = new Error;
                c = function(e) {
                    u.onerror = u.onload = null, clearTimeout(p);
                    var n = o[t];
                    if (0 !== n) {
                        if (n) {
                            var r = e && ("load" === e.type ? "missing" : e.type),
                                a = e && e.target && e.target.src;
                            s.message = "Loading chunk " + t + " failed.\n(" + r + ": " + a + ")", s.name = "ChunkLoadError", s.type = r, s.request = a, n[1](s)
                        }
                        o[t] = void 0
                    }
                };
                var p = setTimeout(function() {
                    c({
                        type: "timeout",
                        target: u
                    })
                }, 12e4);
                u.onerror = u.onload = c, document.head.appendChild(u)
            } return Promise.all(e)
    }, i.m = t, i.c = r, i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) i.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "/", i.oe = function(t) {
        throw t
    };
    var u = window.webpackJsonp = window.webpackJsonp || [],
        s = u.push.bind(u);
    u.push = e, u = u.slice();
    for (var p = 0; p < u.length; p++) e(u[p]);
    var l = s;
    c.push([1, 1, 3, 0, 7]), n()
}({
    "/+bz": function(t, e, n) {
        "use strict";
        e.a = {
            "zh-CN": {
                label: "ç®€ä½“ä¸­æ–‡",
                short: "zh"
            },
            "zh-TW": {
                label: "ç¹é«”ä¸­æ–‡",
                short: "zh"
            },
            "en-US": {
                label: "English",
                short: "en"
            },
            "ko-KR": {
                label: "í•œêµ­ì–´",
                short: "ko"
            },
            "ja-JP": {
                label: "æ—¥æœ¬èªž",
                short: "ja"
            },
            "vi-VN": {
                label: "Tiáº¿ng Viá»‡t",
                short: "vi"
            },
            "id-ID": {
                label: "Bahasa Indonesia",
                short: "id"
            },
            "ru-RU": {
                label: "PÑƒÑÑÐºÐ¸Ð¹",
                short: "ru"
            },
            "tr-TR": {
                label: "TÃ¼rkÃ§e",
                short: "tr"
            },
            "pt-PT": {
                label: "PortuguÃªs",
                short: "pt"
            }
        }
    },
    0: function(t, e) {},
    1: function(t, e, n) {
        t.exports = n("KyW6")
    },
    "1d6M": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("p0pE"),
            a = n.n(r),
            o = n("cr+I"),
            c = JSON.parse(window.localStorage.getItem("mxc.settings")) || {},
            i = Object(o.parse)(window.location.search);
        i.theme && (c.theme = i.theme), c.theme || (c.theme = "dark"), e.default = {
            namespace: "setting",
            state: c,
            reducers: {
                changeSetting: function(t, e) {
                    var n = e.payload,
                        r = a()({}, t, n);
                    return window.localStorage.setItem("mxc.settings", JSON.stringify(r)), r
                }
            }
        }
    },
    2: function(t, e) {},
    3: function(t, e) {},
    4: function(t, e) {},
    5: function(t, e) {},
    6: function(t, e) {},
    "6kh5": function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return l
        }), n.d(e, "c", function() {
            return f
        }), n.d(e, "d", function() {
            return d
        });
        var r = n("gFX4"),
            a = n.n(r),
            o = (n("H2UQ"), n("7Qib")),
            c = n("dCQc"),
            i = Object(o.o)("wbs"),
            u = a()(i, {
                transports: ["websocket"],
                upgrade: !1,
                timeout: 6e4,
                reconnectionDelay: 500
            }),
            s = {},
            p = null;
        window.addEventListener("beforeunload", function() {
            u && (u.close(), u = null), p && (clearInterval(p), p = null)
        });
        var l = function(t) {
                u.on("connect", function() {
                    t({
                        type: "setConnectState",
                        payload: "ok"
                    })
                }), u.on("reconnect", function(e) {
                    t({
                        type: "setConnectState",
                        payload: "ok"
                    }), Object.keys(s).forEach(function(t) {
                        u.emit(t, s[t])
                    })
                }), u.on("disconnect", function(e) {
                    "io server disconnect" === e && u.connect(), t({
                        type: "setConnectState",
                        payload: "error"
                    })
                }), u.on("error", function(e) {
                    t({
                        type: "setConnectState",
                        payload: "error"
                    })
                }), u.on("connect_error", function(e) {
                    t({
                        type: "setConnectState",
                        payload: "error"
                    })
                }), u.on("connect_timeout", function(e) {
                    t({
                        type: "setConnectState",
                        payload: "error"
                    })
                }), u.on("reconnect_failed", function() {
                    t({
                        type: "setConnectState",
                        payload: "error"
                    })
                }), u.on("pong", function(e) {
                    t({
                        type: "setDelayTime",
                        payload: e
                    })
                })
            },
            f = function(t) {
                u.on("push.symbols.delta", function(e) {
                    Object(c.Ub)().then(function(e) {
                        200 === e.code && t({
                            type: "setMarkets",
                            payload: e.data
                        })
                    })
                }), u.on("push.overview", function(e) {
                    t({
                        type: "setMarketsPush",
                        payload: e
                    })
                }), u.on("push.cny", function(e) {
                    t({
                        type: "setCnyPrices",
                        payload: e
                    })
                }), u.on("rs.symbol", function(e) {
                    t({
                        type: "setCurrentPairValue",
                        payload: e
                    })
                }), u.on("push.symbol", function(e) {
                    t({
                        type: "setPushPairValue",
                        payload: e
                    })
                }), u.on("rs.depth", function(e) {
                    t({
                        type: "setFullDepth",
                        payload: e
                    })
                }), u.on("push.personal.order", function(e) {
                    t({
                        type: "setPushOrders",
                        payload: e
                    })
                }), u.on("push.personal.trigger.order", function(e) {
                    t({
                        type: "setPushTriggerOrders",
                        payload: e
                    })
                })
            },
            d = function(t) {
                var e = t.channel,
                    n = t.message,
                    r = t.shouldCache,
                    a = void 0 === r || r,
                    o = t.noRepeat,
                    c = void 0 !== o && o;
                !u || s[e] && c || (u.emit(e, n), a && (s[e] = n))
            };
        e.a = u
    },
    "7Qib": function(t, e, n) {
        "use strict";
        n.d(e, "m", function() {
            return d
        }), n.d(e, "n", function() {
            return m
        }), n.d(e, "A", function() {
            return h
        }), n.d(e, "j", function() {
            return b
        }), n.d(e, "y", function() {
            return y
        }), n.d(e, "B", function() {
            return g
        }), n.d(e, "w", function() {
            return w
        }), n.d(e, "g", function() {
            return v
        }), n.d(e, "v", function() {
            return _
        }), n.d(e, "E", function() {
            return x
        }), n.d(e, "e", function() {
            return k
        }), n.d(e, "D", function() {
            return O
        }), n.d(e, "p", function() {
            return P
        }), n.d(e, "q", function() {
            return j
        }), n.d(e, "c", function() {
            return S
        }), n.d(e, "o", function() {
            return T
        }), n.d(e, "z", function() {
            return C
        }), n.d(e, "x", function() {
            return E
        }), n.d(e, "d", function() {
            return M
        }), n.d(e, "s", function() {
            return N
        }), n.d(e, "l", function() {
            return L
        }), n.d(e, "f", function() {
            return I
        }), n.d(e, "u", function() {
            return A
        }), n.d(e, "i", function() {
            return D
        }), n.d(e, "b", function() {
            return R
        }), n.d(e, "C", function() {
            return U
        }), n.d(e, "t", function() {
            return z
        }), n.d(e, "h", function() {
            return F
        }), n.d(e, "r", function() {
            return V
        }), n.d(e, "a", function() {
            return q
        }), n.d(e, "k", function() {
            return B
        });
        var r = n("gWZ8"),
            a = n.n(r),
            o = n("wd/R"),
            c = n.n(o),
            i = n("ZhIB"),
            u = n.n(i),
            s = n("3a4m"),
            p = n.n(s),
            l = n("LLXN"),
            f = 0,
            d = function() {
                return ++f
            },
            m = function(t) {
                if (document.cookie.length > 0) {
                    var e, n = document.cookie.indexOf(t + "=");
                    if (-1 !== n) return n = n + t.length + 1, -1 === (e = document.cookie.indexOf(";", n)) && (e = document.cookie.length), unescape(document.cookie.substring(n, e))
                }
                return ""
            },
            h = function(t, e) {
                var n = "en-US";
                /zh/i.test(t) && (n = "zh-CN"),
                    function(t, e, n) {
                        var r = t + "=" + e + ";path=/",
                            a = window.location.hostname,
                            o = a.split(".");
                        if (3 === o.length && (a = "." + o[1] + "." + o[2]), r += ";domain=" + a, n) {
                            var c = new Date;
                            c.setTime(c.getTime() + 24 * n * 60 * 60 * 1e3), r += ";expires=" + c.toGMTString()
                        }
                        document.cookie = r
                    }("lang", n, 360), Object(l.setLocale)(t, e)
            },
            b = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "CNY";
                if (isNaN(Number(t))) return "--";
                var r = {
                        CNY: "Â¥",
                        USD: "$"
                    } [n],
                    a = t.toString();
                if (/^\d+\.0*\d+$/i.test(a)) {
                    var o = a.replace(/^(\d+\.0*)(\d+)$/i, function(t, n, r) {
                        return n + r.slice(0, e)
                    });
                    return "".concat(r).concat(o)
                }
                return "".concat(r).concat(a)
            };

        function y(t) {
            var e = window.navigator.userAgent.toLowerCase().indexOf("firefox") >= 0;
            if (/^[\\.\d\w]$/.test(t.key)) {
                return "number" == typeof t.target.selectionStart ? "".concat(t.target.value.slice(0, t.target.selectionStart)).concat(t.key).concat(t.target.value.slice(t.target.selectionEnd)) : "".concat(t.target.value).concat(t.key)
            }
            e || t.preventDefault()
        }
        var g = function(t) {
                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                    r = Number(t) || 0;
                return r > 1e6 ? (e = (r / 1e6).toFixed(n), "".concat(e, "M")) : r > 1e3 ? (e = (r / 1e3).toFixed(n), "".concat(e, "K")) : r.toFixed(n)
            },
            w = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                    n = new Array(e).fill(0).join(""),
                    r = "0,0.".concat(n);
                return u()(t).format(r)
            },
            v = function(t, e) {
                var n = t || 0,
                    r = "^([0-9]+.[0-9]{".concat(e, "})[0-9]*$");
                if (n.toString().indexOf("e-") >= 0) {
                    var a = _(n).replace(new RegExp(r), "$1"),
                        o = a.split("."),
                        c = o[1];
                    return c.length < e ? (c += new Array(e - c.length).fill(0).join(""), o[0] + "." + c) : a
                }
                var i = n.toString().replace(new RegExp(r), "$1");
                return Number(i).toFixed(e)
            },
            _ = function(t) {
                var e = Number(t),
                    n = String(t);
                if (Math.abs(e) < 1) {
                    var r = parseInt(e.toString().split("e-")[1]);
                    if (r) {
                        var a = e < 0;
                        a && (e *= -1), e *= Math.pow(10, r - 1);
                        var o = Number(e.toFixed(r));
                        n = "0." + new Array(r).join("0") + o.toString().substring(2), a && (n = "-" + n)
                    }
                } else {
                    var c = parseInt(e.toString().split("+")[1]);
                    c > 20 && (c -= 20, n = (e /= Math.pow(10, c)).toString() + new Array(c + 1).join("0"))
                }
                return n
            };

        function x(t) {
            var e = document.getElementById(t || "root");
            return e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullScreen ? e.webkitRequestFullScreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen()
        }

        function k() {
            document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && window.top.document.msExitFullscreen()
        }
        var O = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD HH:mm:ss";
            return c()(t).format(e)
        };

        function P() {
            var t = window.location,
                e = t.pathname + (t.search || "");
            p.a.push({
                pathname: "/auth/signin",
                query: {
                    redirect: encodeURIComponent(e)
                }
            })
        }
        var j = function(t) {
            var e = t.location,
                n = t.history,
                r = t.initialHistoryLength,
                a = decodeURIComponent(e.query.redirect || ""),
                o = window.location.hostname.split(".").slice(-2).join("."),
                c = a.indexOf(o) > -1 && a.startsWith("https://") && !/javascript\:|\\|#|@/.test(a);
            a && a.startsWith("/") ? p.a.push(a) : c ? window.location.href = a : n.length - r > 0 ? p.a.goBack() : p.a.push("/")
        };

        function S() {
            var t = window.navigator.userAgent.toLowerCase();
            return {
                isMobile: /(iPhone|iPad|iPod|iOS|Android)/i.test(t),
                isIOS: /(iPhone|iPad|iPod|iOS)/i.test(t),
                isAndriod: /(Android)/i.test(t),
                isWechat: /(micromessenger)/i.test(t)
            }
        }

        function T(t) {
            return "otc" === t ? window.location.origin.replace("www.", "otc.") : "swap" === t ? window.location.origin.replace("www.", "swap.") : "contract" === t ? window.location.origin.replace("www.", "contract.") : "chat" === t ? window.location.origin.replace("www.", "chat.") : "wbs" === t ? "wss://" + window.location.hostname.replace("www.", "wbs.") : ""
        }
        var C = function(t) {
                return t.replace("www.mxc.com", window.location.hostname)
            },
            E = {
                topMessageHeight: 40,
                headerHeight: 60,
                tradeproHeaderHeight: 50,
                footerHeight: 430
            },
            M = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                return 0 === n ? 0 : t / (e / (1 + n)) - 1
            },
            N = ["USDT", "ETH", "BTC"],
            L = function(t, e) {
                var n;
                if (e.length > 0)
                    for (var r = 0; r < e.length; r++)
                        for (var a = 0; a < e[r].list.length; a++) {
                            var o = e[r].list[a];
                            if ((o.currencyDisplayName || o.currency) === t[0].toUpperCase() && o.market === t[1].toUpperCase()) {
                                n = o;
                                break
                            }
                        }
                return n
            },
            I = function(t, e) {
                return t.toLowerCase().localeCompare(e.toLowerCase())
            };

        function A(t) {
            var e = Number(t);
            return -1 !== e.toString().indexOf(".") ? e.toLocaleString() : e.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,")
        }
        var D = {
            ios: "https://mxc-download.approbatory.xyz:58888/downiosapp",
            android: {
                cn: "https://mxcapp.oss-cn-shenzhen.aliyuncs.com/mxc.apk",
                en: "https://mxcinternational.oss-ap-southeast-1.aliyuncs.com/mxc.apk"
            }
        };

        function R(t, e) {
            var n, r, a;
            try {
                n = _(t).toString().split(".")[1].length
            } catch (t) {
                n = 0
            }
            try {
                r = _(e).toString().split(".")[1].length
            } catch (t) {
                r = 0
            }
            return a = Math.pow(10, Math.max(n, r)), (Math.round(t * a) + Math.round(e * a)) / a
        }

        function U(t, e) {
            var n, r, a;
            try {
                n = _(t).toString().split(".")[1].length
            } catch (t) {
                n = 0
            }
            try {
                r = _(e).toString().split(".")[1].length
            } catch (t) {
                r = 0
            }
            return ((t * (a = Math.pow(10, Math.max(n, r))) - e * a) / a).toFixed(n >= r ? n : r)
        }

        function z(t, e) {
            var n = 0,
                r = _(t).toString(),
                a = _(e).toString();
            try {
                n += r.split(".")[1].length
            } catch (t) {}
            try {
                n += a.split(".")[1].length
            } catch (t) {}
            return Number(r.replace(".", "")) * Number(a.replace(".", "")) / Math.pow(10, n)
        }

        function F(t, e) {
            return z(t, 1 / e)
        }

        function V(t) {
            return t.filter(function(t) {
                return t.vcoinName.includes("-") && !t.vcoinName.includes("-LOOP") && "UNLINE" !== t.type
            }).reduce(function(e, n) {
                var r = n.vcoinName.split("-")[0],
                    o = t.find(function(t) {
                        return t.vcoinName === r
                    }) || {};
                return e[r] = [].concat(a()(e[r] || []), [n]), e[r].find(function(t) {
                    return t.vcoinName === r
                }) || e[r].push(o), e[r].sort(function(t, e) {
                    return t.sort - e.sort
                }), e
            }, {})
        }
        var q = {
                sites: ["www.mxc.io", "www.mxc.com", "www.mxc.co"]
            },
            B = function(t) {
                return t = t.replace(new RegExp(["\ud83c[\udf00-\udfff]", "\ud83d[\udc00-\ude4f]", "\ud83d[\ude80-\udeff]"].join("|"), "g"), "")
            }
    },
    "8r5T": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("p0pE"),
            a = n.n(r);
        e.default = {
            namespace: "transfer",
            state: {
                title: "",
                submitText: "",
                transferVisible: !1,
                currencyVisible: !0,
                tabVisible: !0,
                transferBtnVisible: !0,
                selectAllVisible: !0,
                loading: !1,
                currencyId: "",
                transferType: "otc",
                defaultCurrency: "USDT",
                transferPair: {},
                transferItem: {
                    pair: {
                        from: {},
                        to: {}
                    }
                },
                transferData: []
            },
            reducers: {
                save: function(t, e) {
                    var n = e.payload;
                    return a()({}, t, n)
                }
            },
            effects: {}
        }
    },
    "98iA": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("eHn4"),
            a = n.n(r),
            o = n("qIgq"),
            c = n.n(o),
            i = n("d6i3"),
            u = n.n(i),
            s = n("p0pE"),
            p = n.n(s),
            l = n("gWZ8"),
            f = n.n(l),
            d = n("6kh5"),
            m = n("7Qib"),
            h = n("dCQc"),
            b = n("LLXN"),
            y = Object(b.getLocale)(),
            g = JSON.parse(window.localStorage.getItem("mxc.trading")) || {},
            w = function(t, e, n) {
                var r = t;
                return e.forEach(function(t) {
                    var e = {
                            p: Number(t.p),
                            q: Number(t.q),
                            priceString: Object(m.g)(t.p, n)
                        },
                        a = r.findIndex(function(t) {
                            return Number(t.p) === e.p
                        });
                    a >= 0 ? (e.changed = !0, e.new = !1, r[a] = e) : (e.new = !0, r.push(e))
                }), r.filter(function(t) {
                    return Number(t.q) > 0
                }).sort(function(t, e) {
                    return e.p - t.p
                })
            },
            v = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return e.forEach(function(e) {
                    e.list.forEach(function(e) {
                        var n = "".concat(e.currencyDisplayName || e.currency, "_").concat(e.market);
                        e.favorite = t.some(function(t) {
                            return t === n
                        })
                    })
                }), f()(e)
            },
            _ = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return e.forEach(function(e) {
                    e.list.forEach(function(e) {
                        var n = "".concat(e.currency, "_").concat(e.market),
                            r = t.find(function(t) {
                                return n === "".concat(t.baseCurrency, "_").concat(t.quoteCurrency)
                            });
                        r && (e.ratio = r.ratio, e.margin = !0)
                    })
                }), f()(e)
            };
        e.default = {
            namespace: "trading",
            state: p()({}, {
                markets: [],
                firstLoadedMarkets: [],
                cnyPrices: {},
                selectedFiat: "CNY",
                currentPair: {},
                etfPair: {
                    currency: "BTC3L",
                    market: "USDT"
                },
                lastPair: "",
                asks: [],
                bids: [],
                trades: [],
                orders: [],
                margins: [],
                scales: {},
                etfs: {},
                triggerOrders: [],
                selectedPrice: "",
                selectedBidQuantity: "",
                selectedAskQuantity: "",
                userFavorites: [],
                showKlineOrDepth: "simple",
                showCollapsePairs: !1,
                ETFNetValue: 0,
                depthSymbol: "",
                klineInterval: "15",
                klineIndicator: {
                    MAIN: "MA",
                    SUB: ["VOL"]
                }
            }, g, {
                selectedFiat: y.startsWith("zh") ? "CNY" : "USD"
            }),
            effects: {
                saveLocal: u.a.mark(function t(e, n) {
                    var r, a, o;
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return n.call, n.put, r = n.select, t.next = 3, r(function(t) {
                                    return t.trading
                                });
                            case 3:
                                return a = t.sent, o = {
                                    markets: a.markets,
                                    firstLoadedMarkets: a.firstLoadedMarkets,
                                    cnyPrices: a.cnyPrices,
                                    selectedFiat: a.selectedFiat,
                                    currentPair: a.currentPair,
                                    etfPair: a.etfPair,
                                    showKlineOrDepth: a.showKlineOrDepth,
                                    margins: a.margins,
                                    scales: a.scales,
                                    klineInterval: a.klineInterval,
                                    klineIndicator: a.klineIndicator
                                }, t.next = 8, window.localStorage.setItem("mxc.trading", JSON.stringify(o));
                            case 8:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }),
                getUserFavorites: u.a.mark(function t(e, n) {
                    var r, a, o, c, i;
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = n.call, a = n.put, o = n.select, t.next = 3, o(function(t) {
                                    return t.auth
                                });
                            case 3:
                                return c = t.sent, t.next = 6, r(h.zc, c.user.id);
                            case 6:
                                return i = t.sent, t.next = 9, a({
                                    type: "setUserFavorites",
                                    payload: i
                                });
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }),
                getMargins: u.a.mark(function t(e, n) {
                    var r, a, o, c;
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = n.call, a = n.put, n.select, t.next = 3, r(h.cd);
                            case 3:
                                return o = t.sent, c = o.data, t.next = 7, a({
                                    type: "setMargins",
                                    payload: c.map(function(t) {
                                        var e = t.symbol.split("_");
                                        return {
                                            quoteCurrency: e[1],
                                            symbol: e.join("/"),
                                            baseCurrency: e[0],
                                            ratio: t.ratio,
                                            stopLine: t.stopLine,
                                            enableGradually: t.enableGradually
                                        }
                                    })
                                });
                            case 7:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }),
                getOrders: u.a.mark(function t(e, n) {
                    var r, a, o, c, i, s;
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = e.payload, a = n.call, o = n.put, n.select, c = {
                                    page: 1,
                                    page_size: 100,
                                    states: "1,3"
                                }, r && (c.currency = r.currency, c.market = r.market), t.next = 6, a(h.Bc, c);
                            case 6:
                                return i = t.sent, s = i.list, t.next = 10, o({
                                    type: "setOrders",
                                    payload: s || []
                                });
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }),
                getTriggerOrders: u.a.mark(function t(e, n) {
                    var r, a, o, c;
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = n.call, a = n.put, n.select, t.next = 3, r(h.xc, {
                                    page: 1,
                                    pageSize: 100,
                                    state: "NEW"
                                });
                            case 3:
                                return o = t.sent, c = o.list, t.next = 7, a({
                                    type: "setTriggerOrders",
                                    payload: c
                                });
                            case 7:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                })
            },
            reducers: {
                setShowKlineOrDepth: function(t, e) {
                    var n = e.payload;
                    return p()({}, t, {
                        showKlineOrDepth: n
                    })
                },
                setUserFavorites: function(t, e) {
                    var n = e.payload,
                        r = t.markets;
                    return p()({}, t, {
                        userFavorites: n,
                        markets: v(n, r)
                    })
                },
                setMargins: function(t, e) {
                    var n = e.payload,
                        r = t.markets,
                        a = _(n, r);
                    return p()({}, t, {
                        margins: n,
                        markets: a,
                        firstLoadedMarkets: a
                    })
                },
                setMarkets: function(t, e) {
                    var n = e.payload,
                        r = [],
                        o = [],
                        i = [],
                        u = {},
                        s = [],
                        l = {};
                    return Object.entries(n).forEach(function(t) {
                        var e = c()(t, 2),
                            n = e[0],
                            p = [];
                        e[1].forEach(function(t) {
                            var e;
                            if (t.etf) {
                                o.push(t);
                                var n = t.currency.slice(0, -2),
                                    c = t.etfMark < 0 ? "short" : "long";
                                u[n] || (u[n] = {}), u[n][c] ? u[n][c].push(t.etfMark) : u[n][c] = [t.etfMark]
                            } else "NEW" === t.type ? r.push(t) : "ASSESS" === t.type ? i.push(t) : p.push(t);
                            l["".concat(t.currency, "/").concat(t.market)] = (e = {}, a()(e, t.market, t.priceScale), a()(e, t.currency, t.quantityScale), e)
                        }), m.s.includes(n) && s.push({
                            marketName: n,
                            list: p
                        })
                    }), s = (s = s.sort(function(t, e) {
                        return m.s.indexOf(t.marketName) - m.s.indexOf(e.marketName)
                    })).concat([{
                        marketName: "ETF",
                        list: o
                    }, {
                        marketName: "market.new",
                        list: r
                    }, {
                        marketName: "market.assess",
                        list: i
                    }]), t.userFavorites.length && (s = v(t.userFavorites, s)), t.margins.length && _(t.margins, s), p()({}, t, {
                        markets: s,
                        scales: l,
                        etfs: u,
                        firstLoadedMarkets: s
                    })
                },
                setMarketsPush: function(t, e) {
                    var n = e.payload,
                        r = t.markets,
                        a = t.currentPair,
                        o = null;
                    return Object.entries(n).forEach(function(t) {
                        for (var e = c()(t, 2), n = e[0], i = e[1], u = n.split("_"), s = 0; s < r.length; s++)
                            for (var p = 0; p < r[s].list.length; p++) {
                                var l = r[s].list[p];
                                if (l.currency === u[0] && l.market === u[1]) {
                                    var f = i;
                                    l.c = f.p, l.rate = f.r, l.l = l.l - f.p > 0 ? f.p : l.l, l.h = l.h - f.p < 0 ? f.p : l.h, l.market === a.market && l.currency === a.currency && (l.q = a.q, l.a = a.a, o = l);
                                    break
                                }
                            }
                    }), p()({}, t, {
                        markets: f()(r),
                        currentPair: o ? p()({}, a, o) : a
                    })
                },
                setCnyPrices: function(t, e) {
                    var n = e.payload;
                    return p()({}, t, {
                        cnyPrices: n
                    })
                },
                setSelectedFiat: function(t, e) {
                    var n = e.payload;
                    return p()({}, t, {
                        selectedFiat: n
                    })
                },
                setSelectedFromMarkets: function(t, e) {
                    var n = e.payload;
                    return p()({}, t, n)
                },
                setShowCollapsePairs: function(t, e) {
                    var n = e.payload;
                    return p()({}, t, {
                        showCollapsePairs: n
                    })
                },
                setFullTrades: function(t, e) {
                    var n = e.payload,
                        r = n.symbol,
                        a = n.data,
                        o = t.currentPair,
                        c = o.currency,
                        i = o.market;
                    if (r !== "".concat(c, "_").concat(i)) return t;
                    var u = a.length > 50 && a.slice(0, 50);
                    return u = a.map(function(t) {
                        return p()({}, t, {
                            id: Object(m.m)()
                        })
                    }), p()({}, t, {
                        trades: u
                    })
                },
                setFullDepth: function(t, e) {
                    var n = e.payload,
                        r = n.symbol,
                        a = n.data,
                        o = t.currentPair,
                        c = o.currency,
                        i = o.market;
                    if (r !== "".concat(c, "_").concat(i)) return t;
                    var u = a.bids,
                        s = void 0 === u ? [] : u,
                        l = a.asks,
                        d = (void 0 === l ? [] : l).sort(function(t, e) {
                            return e.p - t.p
                        });
                    return p()({}, t, {
                        bids: f()(s),
                        asks: d,
                        depthSymbol: r
                    })
                },
                setCurrentPair: function(t, e) {
                    var n = e.payload,
                        r = t.etfPair,
                        a = t.margins,
                        o = n.currency,
                        c = n.market,
                        i = n,
                        u = a.find(function(t) {
                            return t.symbol === "".concat(o, "/").concat(c)
                        });
                    return o.indexOf("3") > 0 && (r = n), u && (i.margin = !0, i.ratio = u.ratio), p()({}, t, {
                        currentPair: n,
                        etfPair: r
                    })
                },
                setCurrentPairValue: function(t, e) {
                    var n = e.payload,
                        r = t.currentPair,
                        a = p()({}, r, n);
                    return p()({}, t, {
                        currentPair: a
                    })
                },
                setPushPairValue: function(t, e) {
                    var n, r, a, o, c = e.payload,
                        i = t.currentPair,
                        u = t.trades,
                        s = t.bids,
                        l = t.asks,
                        d = c || {},
                        h = d.symbol,
                        b = d.data,
                        y = i.currency,
                        g = i.market;
                    if (h !== "".concat(y, "_").concat(g)) return t;
                    if (b.deals) {
                        var v = 0,
                            _ = 0,
                            x = (n = (n = b.deals.map(function(t) {
                                return v += Number(t.q), _ += Number(t.q) * Number(t.p), p()({}, t, {
                                    id: Object(m.m)()
                                })
                            }).sort(function(t, e) {
                                return e.t - t.t
                            }).concat(u)).length > 50 ? n.slice(0, 50) : n)[0];
                        if (x) {
                            var k = Number(x.p),
                                O = v,
                                P = i.l > k ? k : i.l,
                                j = i.h < k ? k : i.h,
                                S = i.q + O,
                                T = Object(m.d)(k, i.c, i.rate);
                            o = p()({}, i, {
                                c: x.p,
                                rate: T,
                                l: P,
                                h: j,
                                q: S,
                                a: i.a + _
                            })
                        }
                    }
                    return b.asks && (a = w(l, b.asks, i.priceScale)), b.bids && (r = w(s, b.bids, i.priceScale)), p()({}, t, {
                        trades: n ? f()(n) : u,
                        currentPair: o || i,
                        asks: a ? f()(a) : l,
                        bids: r ? f()(r) : s
                    })
                },
                setOrders: function(t, e) {
                    var n = e.payload,
                        r = t.scales,
                        a = n.map(function(t) {
                            var e = r["".concat(t.currency, "/").concat(t.market)],
                                n = e && e[t.market] || 8,
                                a = e && e[t.currency] || 8;
                            return p()({}, t, {
                                priceString: Object(m.g)(t.price, n),
                                remainQuantityString: Object(m.g)(t.quantity - t.dealQuantity, a),
                                quantityString: Object(m.g)(t.quantity, a),
                                amountString: Object(m.g)(t.amount, n),
                                dealQuantityString: Object(m.g)(t.dealQuantity, a)
                            })
                        });
                    return p()({}, t, {
                        orders: a
                    })
                },
                setPushOrders: function(t, e) {
                    var n = e.payload,
                        r = t.orders,
                        a = t.scales,
                        o = t.currentPair,
                        c = o.market,
                        i = o.currencyDisplayName,
                        u = o.currency,
                        s = n.symbol_display,
                        l = n.symbol,
                        d = n.data,
                        h = (s || l).split("_");
                    if (window.localStorage.getItem("mxc.trade.only_show_current_pair") && ((i || u) !== h[0] || c !== h[1])) return t;
                    var b = a[l.replace("_", "/")],
                        y = b && b[h[1]] || 8,
                        g = b && b[h[0]] || 8,
                        w = f()(r),
                        v = 0 === Number(d.quantity) || 0 === Number(d.remainQuantity),
                        _ = r.findIndex(function(t) {
                            return t.id === d.id
                        }),
                        x = p()({}, d, {
                            currency: h[0],
                            market: h[1],
                            priceString: Object(m.g)(d.price, y),
                            remainQuantityString: Object(m.g)(d.remainQuantity, g),
                            quantityString: Object(m.g)(d.quantity, g),
                            amountString: Object(m.g)(d.amount, y),
                            dealQuantityString: Object(m.g)(d.quantity - d.remainQuantity, g)
                        });
                    return _ >= 0 ? v ? w.splice(_, 1) : w[_] = p()({}, w[_], x) : v || w.unshift(x), p()({}, t, {
                        orders: w
                    })
                },
                setTriggerOrders: function(t, e) {
                    var n = e.payload,
                        r = t.scales,
                        a = n.map(function(t) {
                            var e = r["".concat(t.currency, "/").concat(t.market)],
                                n = e && e[t.market] || 8,
                                a = e && e[t.currency] || 8,
                                o = Number(t.price) * Number(t.quantity);
                            return p()({}, t, {
                                amount: o,
                                priceString: Object(m.g)(t.price, n),
                                triggerPriceString: Object(m.g)(t.triggerPrice, n),
                                quantityString: Object(m.g)(t.quantity, a),
                                amountString: Object(m.g)(o, n)
                            })
                        });
                    return p()({}, t, {
                        triggerOrders: a
                    })
                },
                setPushTriggerOrders: function(t, e) {
                    var n = e.payload,
                        r = t.triggerOrders,
                        a = t.scales,
                        o = n.symbol,
                        c = n.symbol_display,
                        i = n.data,
                        u = (c || o).split("_"),
                        s = a[o.replace("_", "/")],
                        l = s && s[u[1]] || 8,
                        d = s && s[u[0]] || 8,
                        h = f()(r),
                        b = r.findIndex(function(t) {
                            return t.id === i.id
                        }),
                        y = Number(i.price) * Number(i.quantity),
                        g = p()({}, i, {
                            amount: y,
                            market: u[1],
                            priceString: Object(m.g)(i.price, l),
                            triggerPriceString: Object(m.g)(i.triggerPrice, l),
                            quantityString: Object(m.g)(i.quantity, d),
                            amountString: Object(m.g)(y, l)
                        });
                    return b >= 0 ? "NEW" !== i.state && h.splice(b, 1) : "NEW" === i.state && h.unshift(g), p()({}, t, {
                        triggerOrders: h
                    })
                },
                setLastPair: function(t, e) {
                    var n = e.payload;
                    return p()({}, t, {
                        lastPair: n
                    })
                },
                setETFNetValue: function(t, e) {
                    var n = e.payload;
                    return p()({}, t, {
                        ETFNetValue: n
                    })
                },
                setKlineInterval: function(t, e) {
                    var n = e.payload;
                    return p()({}, t, {
                        klineInterval: n
                    })
                },
                setKlineIndicator: function(t, e) {
                    var n = e.payload;
                    return p()({}, t, {
                        klineIndicator: n
                    })
                },
                setInitOrder: function(t, e) {
                    e.payload;
                    return p()({}, t, {
                        orders: [],
                        triggerOrders: []
                    })
                }
            },
            subscriptions: {
                socket: function(t) {
                    var e = t.dispatch;
                    return Object(d.c)(function(t) {
                        var n = t.type,
                            r = t.payload;
                        e({
                            type: n,
                            payload: r
                        })
                    })
                }
            }
        }
    },
    AKFz: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("gWZ8"),
            a = n.n(r),
            o = n("p0pE"),
            c = n.n(o),
            i = n("d6i3"),
            u = n.n(i),
            s = n("dCQc");
        e.default = {
            namespace: "financing",
            state: {
                getfinancialList: [],
                numberpage: ""
            },
            effects: {
                getAllFinancingHistoricalList: u.a.mark(function t(e, n) {
                    var r, a, o, c;
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = e.params, a = n.call, o = n.put, t.next = 4, a(s.H, r);
                            case 4:
                                if (0 !== (c = t.sent).code) {
                                    t.next = 8;
                                    break
                                }
                                return t.next = 8, o({
                                    type: "financial",
                                    payload: {
                                        data: c.data,
                                        page: c
                                    }
                                });
                            case 8:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                })
            },
            reducers: {
                financial: function(t, e) {
                    var n = e.payload,
                        r = n.data,
                        o = n.page;
                    return c()({}, t, {
                        getfinancialList: a()(r),
                        numberpage: o
                    })
                }
            }
        }
    },
    CDZx: function(t, e, n) {
        "use strict";
        var r = n("2Taf"),
            a = n.n(r),
            o = n("vZ4D"),
            c = n.n(o),
            i = n("Hg0r"),
            u = n("LLXN"),
            s = Object(u.getLocale)(),
            p = function() {
                function t() {
                    a()(this, t), this.errorData = {}
                }
                return c()(t, [{
                    key: "getErrorCode",
                    value: function() {
                        var t = this,
                            e = new Promise(function(t, e) {
                                return Object(i.c)("".concat(window.location.origin, "/code/main/").concat(s, ".json")).then(function(t) {
                                    return t.json()
                                }).then(function(e) {
                                    t(e)
                                })
                            }),
                            n = new Promise(function(t, e) {
                                return Object(i.c)("".concat(window.location.origin, "/code/margin/").concat(s, ".json")).then(function(t) {
                                    return t.json()
                                }).then(function(e) {
                                    t(e)
                                })
                            });
                        Promise.all([e, n]).then(function(e) {
                            var n = e.reduce(function(t, e) {
                                return Object.assign(t, e)
                            }, {});
                            t.errorData = n
                        }).catch(function(t) {})
                    }
                }, {
                    key: "getErrorData",
                    value: function() {
                        return this.errorData
                    }
                }]), t
            }();
        n.d(e, "a", function() {
            return l
        });
        var l = new p
    },
    ERIh: function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "dva", function() {
            return r
        });
        var r = {
            config: {
                onError: function(t) {
                    t.preventDefault()
                }
            }
        }
    },
    F03t: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("p0pE"),
            a = n.n(r),
            o = n("gWZ8"),
            c = n.n(o),
            i = n("d6i3"),
            u = n.n(i),
            s = n("dCQc");
        e.default = {
            namespace: "global",
            state: {
                initialHistoryLength: 0,
                announcements: [],
                serverClientTimeDiff: 0,
                countryList: [],
                topMessageClosed: !1,
                MXStatistics: {},
                coinList: [],
                sitesInfo: [],
                customerGuideInfo: {}
            },
            effects: {
                getAnnouncements: u.a.mark(function t(e, n) {
                    var r, a, o, c, i;
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = e.payload, a = n.call, o = n.put, n.select, t.next = 4, a(s.K, {
                                    lang: r.lang,
                                    showProgress: !1
                                });
                            case 4:
                                if (0 !== (c = t.sent).code) {
                                    t.next = 9;
                                    break
                                }
                                return i = c.msg, t.next = 9, o({
                                    type: "saveAnnouncements",
                                    payload: i
                                });
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }),
                getServerTimestamp: u.a.mark(function t(e, n) {
                    var r, a, o, c, i, p;
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = n.call, a = n.put, n.select, o = (new Date).getTime(), t.next = 4, r(s.rc);
                            case 4:
                                return c = t.sent, i = 0, c.msg && !isNaN(Number(c.msg)) && (p = (new Date).getTime(), i = Number(c.msg) - Date.now() + parseInt((p - o) / 2)), t.next = 9, a({
                                    type: "saveServerClientTimeDiff",
                                    payload: i
                                });
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }),
                getCountryList: u.a.mark(function t(e, n) {
                    var r, a, o, i;
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = n.call, a = n.put, n.select, t.next = 3, r(s.Y);
                            case 3:
                                return o = t.sent, i = o.data, t.next = 7, a({
                                    type: "saveCountryList",
                                    payload: c()(i)
                                });
                            case 7:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }),
                getMxStatistics: u.a.mark(function t(e, n) {
                    var r, a, o;
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = n.call, a = n.put, n.select, t.next = 3, r(s.Nb);
                            case 3:
                                return o = t.sent, t.next = 6, a({
                                    type: "saveMxStatistics",
                                    payload: o || {}
                                });
                            case 6:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }),
                getCoinList: u.a.mark(function t(e, n) {
                    var r, a, o, i;
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = n.call, a = n.put, n.select, t.next = 3, r(s.V);
                            case 3:
                                return o = t.sent, i = o.data.filter(function(t) {
                                    return !!t
                                }), t.next = 7, a({
                                    type: "saveCoinList",
                                    payload: c()(i)
                                });
                            case 7:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }),
                getCustomerGuideInfo: u.a.mark(function t(e, n) {
                    var r, o, c, i;
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = n.call, o = n.put, n.select, t.next = 3, r(s.sb);
                            case 3:
                                return c = t.sent, i = c.data, t.next = 7, o({
                                    type: "saveCustomerGuideInfo",
                                    payload: a()({}, i)
                                });
                            case 7:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                })
            },
            reducers: {
                saveInitialHistoryLength: function(t, e) {
                    var n = e.payload;
                    return a()({}, t, {
                        initialHistoryLength: n
                    })
                },
                saveAnnouncements: function(t, e) {
                    var n = e.payload || [];
                    return a()({}, t, {
                        announcements: n,
                        topMessageClosed: 0 === n.length || t.topMessageClosed
                    })
                },
                saveServerClientTimeDiff: function(t, e) {
                    var n = e.payload;
                    return a()({}, t, {
                        serverClientTimeDiff: n
                    })
                },
                saveCountryList: function(t, e) {
                    var n = e.payload;
                    return a()({}, t, {
                        countryList: n
                    })
                },
                saveTopMessageClosed: function(t, e) {
                    var n = e.payload;
                    return a()({}, t, {
                        topMessageClosed: n
                    })
                },
                saveMxStatistics: function(t, e) {
                    var n = e.payload;
                    return a()({}, t, {
                        MXStatistics: n
                    })
                },
                saveCoinList: function(t, e) {
                    var n = e.payload;
                    return a()({}, t, {
                        coinList: n
                    })
                },
                saveSites: function(t, e) {
                    var n = e.payload;
                    return a()({}, t, {
                        sitesInfo: n
                    })
                },
                saveCustomerGuideInfo: function(t, e) {
                    var n = e.payload;
                    return a()({}, t, {
                        customerGuideInfo: n
                    })
                }
            }
        }
    },
    H2UQ: function(t, e, n) {
        "use strict";
        var r;

        function a() {
            return document[r]
        }
        n.d(e, "a", function() {
            return a
        }), void 0 !== document.hidden ? r = "hidden" : void 0 !== document.msHidden ? r = "msHidden" : void 0 !== document.webkitHidden && (r = "webkitHidden")
    },
    KyW6: function(t, e, n) {
        "use strict";
        n.r(e);
        n("Y/ft"), n("qIgq");
        var r = n("d6i3"),
            a = n.n(r),
            o = n("p0pE"),
            c = n.n(o),
            i = n("1l/V"),
            u = n.n(i),
            s = (n("d2HX"), n("Ipxd"), n("cqqd"), n("V/yg"), n("0wlq"), n("dcFJ"), n("VxKu"), n("OERk"), n("VTuv"), n("QsMh"), n("kgWH"), n("/gYn"), n("Q6cQ"), n("nwK/"), n("O42g"), n("LHRQ"), n("1zZW"), n("gnIS"), n("PLPm"), n("6bQo"), n("BF/d"), n("B27t"), n("B2JY"), n("bvNB"), n("Zdr8"), n("Evga"), n("st4x"), n("vhRF"), n("gy4I"), n("Ik6R"), n("5IjG"), n("MWzG"), n("0X7h"), n("v7O2"), n("A32q"), n("t4pn"), n("cYnM"), n("mazr"), n("gAq7"), n("Ptqo"), n("HYqK"), n("L+ph"), n("XrRV"), n("jN/G"), n("PkQq"), n("P3J+"), n("YNMy"), n("er1Y"), n("7PEA"), n("ZDZP"), n("/mWb"), n("jjMW"), n("VQiV"), n("OHgp"), n("QmyS"), n("kKcJ"), n("8Dir"), n("80Mw"), n("qLc/"), n("1iIN"), n("EEQl"), n("HXXR"), n("kWR5"), n("wf8o"), n("v7GP"), n("mn6W"), n("DYk9"), n("10w+"), n("g7jo"), n("ekhv"), n("kBT5"), n("aAN9"), n("uMDL"), n("vhKY"), n("uirv"), n("SiLs"), n("Bz7s"), n("lZXM"), n("DBt0"), n("hIUm"), n("G7Hh"), n("DFAo"), n("0sxA"), n("rUcv"), n("3m+/"), n("UAKv"), n("A0Wa"), n("QU+u"), n("kaCT"), n("Osm3"), n("8hS5"), n("CwZJ"), n("14Wo"), n("Vtwo"), n("/dRK"), n("3mkd"), n("qA8X"), n("WKJr"), n("Cl4P"), n("9nSz"), n("IR7R"), n("c77p"), n("0UTP"), n("YXFI"), n("gDk6"), n("cvJw"), n("x2NH"), n("1akq"), n("UQt1"), n("u2w5"), n("zxrt"), n("Bus3"), n("OR3X"), n("o175"), n("XP1/"), n("w8uh"), n("HCMe"), n("QEzc"), n("QeHl"), n("SPFY"), n("7RDE"), n("fKm+"), n("N4uP"), n("zr8x"), n("zQzA"), n("wOl0"), n("8fg/"), n("RFCh"), n("/xke"), n("TeRw")),
            p = (n("miYZ"), n("tsqr")),
            l = (n("FoZm"), n("cr+I")),
            f = n("LLXN"),
            d = n("/+bz"),
            m = n("7Qib"),
            h = n("oxDv"),
            b = n("CDZx");
        n("Tpqy");

        function y(t, e) {
            var n;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (n = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return g(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(t, e)
                    }(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var r = 0,
                        a = function() {};
                    return {
                        s: a,
                        n: function() {
                            return r >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[r++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: a
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0,
                i = !1;
            return {
                s: function() {
                    n = t[Symbol.iterator]()
                },
                n: function() {
                    var t = n.next();
                    return c = t.done, t
                },
                e: function(t) {
                    i = !0, o = t
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (i) throw o
                    }
                }
            }
        }

        function g(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r
        }
        p.a.config({
            maxCount: 1
        }), s.a.config({
            duration: 5
        });
        var w = Object(f.getLocale)(),
            v = Object(l.parse)(window.location.search);
        if (Object(h.a)(), v.lang) {
            window.localStorage.setItem("mxc.lang.fromUrl", v.lang), delete v.lang;
            var _ = Object.keys(v).length <= 0;
            window.location.href = window.location.pathname + (_ ? "" : "?".concat(Object(l.stringify)(v)))
        }
        var x = window.localStorage.getItem("mxc.lang.fromUrl");
        if (x && d.a[x] && x !== w) window.localStorage.removeItem("mxc.lang.fromUrl"), Object(m.A)(x, !1);
        else if (!w || w && !d.a[w] && /[A-Z]/.test(w)) Object(f.setLocale)("en-US", !1);
        else if (w && Object(m.c)().isIOS && !/[A-Z]/.test(w)) {
            var k = w.split("-"),
                O = 2 === k.length ? "".concat(k[0], "-").concat(k[1].toUpperCase()) : "en-US";
            Object(f.setLocale)(O, !1)
        }
        "serviceWorker" in navigator && navigator.serviceWorker.getRegistrations().then(function(t) {
            var e, n = y(t);
            try {
                for (n.s(); !(e = n.n()).done;) {
                    e.value.unregister()
                }
            } catch (t) {
                n.e(t)
            } finally {
                n.f()
            }
        }), b.a.getErrorCode();
        var P = n("q1tI"),
            j = n.n(P),
            S = n("i8i4"),
            T = n.n(S),
            C = n("sa7a"),
            E = n.n(C);
        n.d(e, "ReactDOMServer", function() {});
        var M = n("PszG");
        window.g_plugins = M, M.init({
            validKeys: ["patchRoutes", "render", "rootContainer", "modifyRouteProps", "onRouteChange", "modifyInitialProps", "initialProps", "dva", "locale"]
        }), M.use(n("3JrO")), M.use(n("ERIh"));
        var N = n("xg5P")._onCreate();
        window.g_app = N;
        var L = function() {
                var t = u()(a.a.mark(function t() {
                    var e, r, o, i, u;
                    return a.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (window.g_isBrowser = !0, e = {}, !window.g_useSSR) {
                                    t.next = 6;
                                    break
                                }
                                e = window.g_initialData, t.next = 18;
                                break;
                            case 6:
                                if (r = location.pathname, !((o = E()(n("i4x8").routes, r)) && o.component && o.component.getInitialProps)) {
                                    t.next = 18;
                                    break
                                }
                                if (i = M.apply("modifyInitialProps", {
                                        initialValue: {}
                                    }), !o.component.getInitialProps) {
                                    t.next = 16;
                                    break
                                }
                                return t.next = 13, o.component.getInitialProps(c()({
                                    route: o,
                                    isServer: !1,
                                    location: location
                                }, i));
                            case 13:
                                t.t0 = t.sent, t.next = 17;
                                break;
                            case 16:
                                t.t0 = {};
                            case 17:
                                e = t.t0;
                            case 18:
                                u = M.apply("rootContainer", {
                                    initialValue: j.a.createElement(n("i4x8").default, e)
                                }), T.a[window.g_useSSR ? "hydrate" : "render"](u, document.getElementById("root"));
                            case 20:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }));
                return function() {
                    return t.apply(this, arguments)
                }
            }(),
            I = M.compose("render", {
                initialValue: L
            });
        Promise.all([]).then(function() {
            I()
        }).catch(function(t) {
            window.console && window.console.error(t)
        });
        e.default = null;
        n("hh8c")
    },
    RFCh: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("fwAN").default({
            basename: window.routerBase
        });
        window.g_history = r, e.default = r
    },
    bFNV: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("gWZ8"),
            a = n.n(r),
            o = n("Y/ft"),
            c = n.n(o),
            i = n("d6i3"),
            u = n.n(i),
            s = n("p0pE"),
            p = n.n(s),
            l = n("dCQc"),
            f = n("LvDl"),
            d = n("7Qib"),
            m = ["MX", "BTC", "USDT", "ETH", "DOT"],
            h = {
                accountName: "",
                stopOutPrice: "0",
                stopLine: "1.1",
                withdrawLine: "1.5",
                riskRate: "0",
                btcAmount: "0",
                usdtAmount: "0",
                cynAmount: "0",
                currencyAsset: {
                    name: "",
                    total: "0",
                    available: "0",
                    frozen: "0",
                    borrow: "0",
                    interest: "0"
                },
                marketAsset: {
                    name: "",
                    total: "0",
                    available: "0",
                    frozen: "0",
                    borrow: "0",
                    interest: "0"
                }
            };
        e.default = {
            namespace: "assets",
            state: {
                allList: [],
                list: [],
                balances: {
                    revenue: 0,
                    millionUSDT: 0,
                    mxBalances: 0,
                    btcValue: 0,
                    cnyValue: 0,
                    usdValue: 0,
                    discount: {},
                    otc: {
                        btcValue: 0,
                        cnyValue: 0,
                        usdValue: 0
                    },
                    contract: {
                        btcValue: 0,
                        cnyValue: 0,
                        usdValue: 0
                    },
                    main: {
                        btcValue: 0,
                        cnyValue: 0,
                        usdValue: 0
                    }
                },
                chartsData: [],
                currentPairBalance: {},
                contractBalances: [],
                contractHistoryData: {
                    data: [],
                    total: 0,
                    page: 0
                },
                otcBalances: [],
                otcHistoryData: {
                    data: [],
                    total: 0,
                    page: 0
                },
                canPoolList: [],
                hasPoolList: [],
                assetItem: {},
                marginData: [],
                marginAllData: [],
                marginHistoryData: {
                    data: [],
                    total: 0,
                    page: 0
                },
                marginAmount: {
                    netBtc: 0,
                    netCny: 0,
                    netUsdt: 0,
                    btc: 0,
                    cny: 0,
                    usdt: 0
                },
                contractExist: !0,
                coboList: [],
                coboItem: {},
                navigateTabKey: "balances",
                baseChain: {}
            },
            reducers: {
                save: function(t, e) {
                    var n = e.payload;
                    return p()({}, t, n)
                },
                saveAssetBalance: function(t, e) {
                    var n = e.payload;
                    return p()({}, t, {
                        currentPairBalance: n || {}
                    })
                }
            },
            effects: {
                getOverview: u.a.mark(function t(e, n) {
                    var r, a, o, c, i, s, p, f, h, b, y, g, w, v, _, x, k, O, P, j, S, T, C, E, M, N, L, I, A, D;
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = n.call, a = n.put, o = n.select, t.next = 3, r(l.R);
                            case 3:
                                if (c = t.sent, i = c.code, s = c.assetInfo, p = c.revenue, f = c.millionUSDT, h = c.cobo, b = c.discount, y = s.assetList, g = s.btcValue, w = s.cnyValue, v = s.usdValue, _ = s.otc, x = void 0 === _ ? null : _, k = s.contract, O = [], P = [], j = x || {
                                        btcValue: 0,
                                        cnyValue: 0,
                                        usdValue: 0
                                    }, S = (void 0 === k ? null : k) || {
                                        btcValue: 0,
                                        cnyValue: 0,
                                        usdValue: 0
                                    }, T = {
                                        revenue: p,
                                        discount: b,
                                        millionUSDT: f,
                                        mxBalances: 0,
                                        btcValue: g + j.btcValue + S.btcValue,
                                        cnyValue: w + j.cnyValue + S.cnyValue,
                                        usdValue: v + j.usdValue + S.usdValue,
                                        otc: j,
                                        contract: S,
                                        main: {
                                            btcValue: g,
                                            cnyValue: w,
                                            usdValue: v
                                        }
                                    }, 0 !== i) {
                                    t.next = 26;
                                    break
                                }
                                return y.map(function(t) {
                                    return t.vcoinNameEn = t.vcoinNameEn.toUpperCase(), t.isMain = m.includes(t.vcoinNameEn) ? 1 : 0, t.markets = t.marketName ? t.marketName.split(",").map(function(e) {
                                        return {
                                            vcoinNameDisplay: t.vcoinNameDisplay,
                                            vcoinNameEn: t.vcoinNameEn,
                                            market: e
                                        }
                                    }) : [], "MX" === t.vcoinNameEn && (T.mxBalances = t.balanceAmount), t.usdtValue > 0 && P.push({
                                        value: t.usdtValue,
                                        name: t.vcoinNameDisplay || t.vcoinNameEn
                                    }), Object.keys(h).includes(t.vcoinNameEn) && O.push(t), t.recharge = !1, t.cash = !1, t
                                }), y.sort(function(t, e) {
                                    return e.isMain - t.isMain
                                }), C = Object(d.r)(y), E = y.filter(function(t) {
                                    return !t.vcoinNameEn.includes("-")
                                }), M = E.filter(function(t) {
                                    return "MAIN" === t.type
                                }), t.next = 19, o(function(t) {
                                    return t.assets
                                });
                            case 19:
                                return N = t.sent, L = N.assetItem, I = L.vcoinNameEn ? E.find(function(t) {
                                    return t.vcoinNameEn === L.vcoinNameEn
                                }) : M[0], A = window.localStorage.getItem("mxc.assets.cobo.coin") || "", D = O.find(function(t) {
                                    return t.vcoinNameEn === A
                                }) || O[0], t.next = 26, a({
                                    type: "save",
                                    payload: {
                                        list: M,
                                        allList: E,
                                        balances: T,
                                        coboList: O,
                                        baseChain: C,
                                        chartsData: P,
                                        assetItem: I,
                                        coboItem: D
                                    }
                                });
                            case 26:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }),
                getAssetBalance: u.a.mark(function t(e, n) {
                    var r, a, o, i, s;
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = e.payload, a = n.call, o = n.put, n.select, t.next = 4, a(l.O, r);
                            case 4:
                                return i = t.sent, i.code, i.msg, s = c()(i, ["code", "msg"]), t.next = 8, o({
                                    type: "saveAssetBalance",
                                    payload: s
                                });
                            case 8:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }),
                getAssetSysBalance: u.a.mark(function t(e, n) {
                    var r, a, o, c;
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = e.payload, a = n.call, o = n.put, n.select, t.next = 4, a(l.Q, r);
                            case 4:
                                if (c = t.sent, 0 !== c.code) {
                                    t.next = 13;
                                    break
                                }
                                if ("OTC" !== r.sys) {
                                    t.next = 10;
                                    break
                                }
                                return t.next = 10, o({
                                    type: "save",
                                    payload: {
                                        otcBalances: c.balances
                                    }
                                });
                            case 10:
                                if ("SWAP" !== r.sys) {
                                    t.next = 13;
                                    break
                                }
                                return t.next = 13, o({
                                    type: "save",
                                    payload: {
                                        contractBalances: c.balances
                                    }
                                });
                            case 13:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }),
                getTransferHistory: u.a.mark(function t(e, n) {
                    var r, a, o, c;
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = e.payload, a = n.call, o = n.put, n.select, t.next = 4, a(l.Td, r);
                            case 4:
                                if (c = t.sent, 0 !== c.code) {
                                    t.next = 16;
                                    break
                                }
                                if ("MARGIN_V2" !== r.sys) {
                                    t.next = 10;
                                    break
                                }
                                return t.next = 10, o({
                                    type: "save",
                                    payload: {
                                        marginHistoryData: c
                                    }
                                });
                            case 10:
                                if ("SWAP" !== r.sys) {
                                    t.next = 13;
                                    break
                                }
                                return t.next = 13, o({
                                    type: "save",
                                    payload: {
                                        contractHistoryData: c
                                    }
                                });
                            case 13:
                                if ("OTC" !== r.sys) {
                                    t.next = 16;
                                    break
                                }
                                return t.next = 16, o({
                                    type: "save",
                                    payload: {
                                        otcHistoryData: c
                                    }
                                });
                            case 16:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }),
                getPoolList: u.a.mark(function t(e, n) {
                    var r, a, o, c, i, s, p;
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = e.payload, a = n.call, o = n.put, n.select, t.next = 4, a(l.ic, r);
                            case 4:
                                if (c = t.sent, i = c.code, s = c.memberPools, p = c.allPools, 0 !== i) {
                                    t.next = 9;
                                    break
                                }
                                return t.next = 9, o({
                                    type: "save",
                                    payload: {
                                        hasPoolList: s,
                                        canPoolList: p || []
                                    }
                                });
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }),
                getMarginAssetList: u.a.mark(function t(e, n) {
                    var r, o, c, i, s, d, m, b, y, g, w, v, _, x, k, O, P, j, S;
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e.payload, r = n.call, o = n.put, c = n.select, t.next = 4, r(l.nd, {
                                    accountType: "STEP"
                                });
                            case 4:
                                return i = t.sent, t.next = 7, c(function(t) {
                                    return t.trading
                                });
                            case 7:
                                if (s = t.sent, d = s.margins, m = s.cnyPrices, b = i.code, y = i.data, g = [], w = [], v = {
                                        netBtc: 0,
                                        netCny: 0,
                                        netUsdt: 0,
                                        btc: 0,
                                        cny: 0,
                                        usdt: 0
                                    }, 200 === b) {
                                    for (_ = d.map(function(t) {
                                            var e = t.symbol,
                                                n = p()({}, Object(f.cloneDeep)(h), {
                                                    accountName: e,
                                                    notOpen: !0
                                                });
                                            return n.currencyAsset.name = e.split("/")[0], n.marketAsset.name = e.split("/")[1], y.find(function(t) {
                                                return t.accountName === e
                                            }) || n
                                        }), g = Object(f.uniqBy)([].concat(a()(_), a()(y)), "accountName"), x = 0; x < g.length; x++) k = g[x], O = k.netBtcAmount || 0, P = k.btcAmount || 0, j = k.cynAmount || 0, S = k.usdtAmount || 0, v.netBtc += Number(O), v.netCny += Number(O * m.BTC), v.netUsdt += Number(O * m.BTC / m.USDT), v.btc += Number(P), v.cny += Number(j), v.usdt += Number(S);
                                    w = Object(f.uniqBy)([].concat(a()(_), a()(y)), "accountName")
                                }
                                return t.next = 16, o({
                                    type: "margin/setMarginOpenAccounts",
                                    payload: y.map(function(t) {
                                        return t.accountName
                                    })
                                });
                            case 16:
                                return t.next = 18, o({
                                    type: "save",
                                    payload: {
                                        marginData: g,
                                        marginAllData: w,
                                        marginAmount: v
                                    }
                                });
                            case 18:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }),
                getContractAccountExist: u.a.mark(function t(e, n) {
                    var r, a, o, c, i, s;
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = e.payload, a = n.call, o = n.put, n.select, t.next = 4, a(l.W, r);
                            case 4:
                                if (c = t.sent, i = c.code, s = c.exist, 0 !== i) {
                                    t.next = 9;
                                    break
                                }
                                return t.next = 9, o({
                                    type: "save",
                                    payload: {
                                        contractExist: s
                                    }
                                });
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                })
            }
        }
    },
    "btD+": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("p0pE"),
            a = n.n(r),
            o = n("d6i3"),
            c = n.n(o),
            i = n("dCQc");
        e.default = {
            namespace: "etfIndex",
            state: {
                symbols: [],
                netValues: {},
                etfCurrency: "",
                orders: [],
                coinList: [],
                orderType: "subscribe"
            },
            effects: {
                getEtfSymbols: c.a.mark(function t(e, n) {
                    var r, a, o, u, s;
                    return c.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e.payload, r = n.call, a = n.put, n.select, t.next = 4, r(i.jb);
                            case 4:
                                if (o = t.sent, u = o.code, s = o.data, 200 !== u) {
                                    t.next = 9;
                                    break
                                }
                                return t.next = 9, a({
                                    type: "save",
                                    payload: {
                                        symbols: s
                                    }
                                });
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }),
                getEtfNetValue: c.a.mark(function t(e, n) {
                    var r, a, o, u, s, p;
                    return c.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = e.payload, a = n.call, o = n.put, n.select, t.next = 4, a(i.gb, r);
                            case 4:
                                if (u = t.sent, s = u.code, p = u.data, 200 !== s) {
                                    t.next = 9;
                                    break
                                }
                                return t.next = 9, o({
                                    type: "save",
                                    payload: {
                                        netValues: p.value_info,
                                        coinList: p.coin_Ratio
                                    }
                                });
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }),
                getEtfOrderList: c.a.mark(function t(e, n) {
                    var r, a, o, u, s, p, l;
                    return c.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = e.payload, a = n.call, o = n.put, n.select, t.next = 4, a(i.ib, r);
                            case 4:
                                if (u = t.sent, s = u.code, p = u.data, l = p.resultList, 200 !== s) {
                                    t.next = 10;
                                    break
                                }
                                return t.next = 10, o({
                                    type: "save",
                                    payload: {
                                        orders: l
                                    }
                                });
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                })
            },
            reducers: {
                save: function(t, e) {
                    var n = e.payload;
                    return a()({}, t, n)
                }
            }
        }
    },
    cNfG: function(t, e) {
        t.exports = window.TradingView
    },
    dCQc: function(t, e, n) {
        "use strict";
        var r = n("p0pE"),
            a = n.n(r),
            o = n("d6i3"),
            c = n.n(o),
            i = n("Y/ft"),
            u = n.n(i),
            s = n("1l/V"),
            p = n.n(s),
            l = n("cr+I"),
            f = (n("miYZ"), n("tsqr")),
            d = n("Hg0r"),
            m = n("3a4m"),
            h = n.n(m),
            b = n("7Qib"),
            y = n("Mj6V"),
            g = n.n(y),
            w = n("gjeX"),
            v = n.n(w),
            _ = n("LLXN"),
            x = n("/+bz"),
            k = n("LvDl"),
            O = n("CDZx"),
            P = Object(_.getLocale)(),
            j = P.startsWith("zh") ? P : x.a[P] ? x.a[P].short : "zh",
            S = "abcdefghijklmnopqrstuvwxyz-0123456789_";
        console.log(n);
        console.trace();
        function T(t, e) {
            var n = O.a.getErrorData(),
                r = a()({
                    showProgress: !0,
                    showErrorMsg: !0,
                    crossDomain: !1,
                    credentials: "include",
                    customHeaders: !0,
                    needSignature: !0
                }, e);
            if (r.customHeaders && (r.headers = a()({
                    language: j
                }, r.headers)), r.isUC && (r.headers["Ucenter-Token"] = Object(b.n)("u_id") || ""), ("POST" === r.method || "PUT" === r.method) && r.body) {
                r.headers = a()({
                    "Content-Type": "application/x-www-form-urlencoded"
                }, r.headers);
                var o = r.body;
                if ("application/json" === r.headers["Content-Type"].toString().toLowerCase() ? "string" != typeof r.body && (r.body = JSON.stringify(r.body)) : r.body instanceof FormData || "string" == typeof r.body || (r.body = Object(l.stringify)(r.body)), r.needSignature) {
                    var c = Date.now();
                    if (window.g_app && window.g_app._store) {
                        var i = window.g_app._store.getState() || {};
                        c += i.global ? i.global.serverClientTimeDiff : 0
                    }
                    var u = "";
                    if (o instanceof FormData) {
                        var s = Object.fromEntries(o);
                        u = Object(l.stringify)(s)
                    } else if ("string" != typeof o) u = Object(l.stringify)(o);
                    else {
                        var p;
                        try {
                            p = JSON.parse(o)
                        } catch (t) {}
                        u = "object" == typeof p ? Object(l.stringify)(p) : o
                    }
                    console.log(v().toString());
                    console.trace();
                    var m = [S[20], S[37], S[8], S[3]].join(""),
                        y = Object(b.n)(m),
                        w = v()(y + c).substr(7),
                        _ = v()(c + u + w),
                        x = [S[23], S[26], S[12], S[23], S[2], S[26], S[18], S[8], S[6], S[13]].join(""),
                        P = [S[23], S[26], S[12], S[23], S[2], S[26], S[13], S[14], S[13], S[2], S[4]].join(""),
                        T = [S[7], S[4], S[0], S[3], S[4], S[17], S[18]].join("");
                    r[T][x] = _, r[T][P] = c
                }
            }
            r.showProgress && g.a.start();
            var C = {
                __localError__: !0
            };
            return Object(d.c)(t, r).then(function(t) {
                if (t.status >= 200 && t.status < 300) return t;
                var e = new Error(t.status || "error");
                throw e.response = t || C, e.name = t.status, e
            }).then(function(t) {
                return 204 === t.status ? t.text() : t.json()
            }).then(function(t) {
                var e = t.code,
                    n = t.msg,
                    r = t.message;
                if (!t || e && 0 !== e && 200 !== e) {
                    var a = new Error(n || r || "error");
                    throw a.response = t || C, a.code = e, a.isBussinessError = !0, a
                }
                return t || C
            }).catch(function(t) {
                var e = ["/maintain", "/auth/", "/ucenter/"].some(function(t) {
                    return window.location.pathname.includes(t)
                });
                if (500 !== t.code || "Maintenanceing" !== t.message || e || h.a.push({
                        pathname: "/maintain",
                        query: {
                            announcement: encodeURIComponent(t.response.url || "/"),
                            redirect: window.location.href
                        }
                    }), t.isBussinessError) {
                    if (r.showErrorMsg) {
                        var a = RegExp(/{([\s\S]+?)}/);
                        if (n[t.code])
                            if (t.response._extend) {
                                var o = Object(k.template)(n[t.code]);
                                f.a.error(o(t.response._extend))
                            } else a.test(n[t.code]) ? f.a.error(t.msg || t.message) : f.a.error(n[t.code]);
                        else f.a.error(t.msg || t.message)
                    }
                    t.message.toLowerCase().endsWith("arguments") && window.location.reload()
                } else r.showErrorMsg;
                return t.response || C
            }).finally(function() {
                r.showProgress && g.a.done()
            })
        }
        k.templateSettings.interpolate = /{([\s\S]+?)}/g;
        n("ea93");
        var C = n("oxDv");
        n.d(e, "Xd", function() {
            return M
        }), n.d(e, "Zd", function() {
            return L
        }), n.d(e, "yd", function() {
            return A
        }), n.d(e, "Bd", function() {
            return R
        }), n.d(e, "zd", function() {
            return z
        }), n.d(e, "Ad", function() {
            return V
        }), n.d(e, "Ed", function() {
            return B
        }), n.d(e, "Yd", function() {
            return H
        }), n.d(e, "Wd", function() {
            return K
        }), n.d(e, "Z", function() {
            return Y
        }), n.d(e, "Pb", function() {
            return Z
        }), n.d(e, "vd", function() {
            return $
        }), n.d(e, "O", function() {
            return et
        }), n.d(e, "Rc", function() {
            return rt
        }), n.d(e, "n", function() {
            return ot
        }), n.d(e, "l", function() {
            return it
        }), n.d(e, "Sc", function() {
            return st
        }), n.d(e, "zc", function() {
            return lt
        }), n.d(e, "a", function() {
            return dt
        }), n.d(e, "w", function() {
            return ht
        }), n.d(e, "Bc", function() {
            return yt
        }), n.d(e, "R", function() {
            return wt
        }), n.d(e, "wc", function() {
            return _t
        }), n.d(e, "cb", function() {
            return kt
        }), n.d(e, "db", function() {
            return Pt
        }), n.d(e, "Jc", function() {
            return St
        }), n.d(e, "Kc", function() {
            return Ct
        }), n.d(e, "Mc", function() {
            return Mt
        }), n.d(e, "p", function() {
            return Lt
        }), n.d(e, "Gd", function() {
            return At
        }), n.d(e, "Fd", function() {
            return Rt
        }), n.d(e, "Nb", function() {
            return zt
        }), n.d(e, "b", function() {
            return Vt
        }), n.d(e, "A", function() {
            return Bt
        }), n.d(e, "x", function() {
            return Ht
        }), n.d(e, "pb", function() {
            return Kt
        }), n.d(e, "K", function() {
            return Yt
        }), n.d(e, "t", function() {
            return Zt
        }), n.d(e, "Fb", function() {
            return $t
        }), n.d(e, "Eb", function() {
            return ee
        }), n.d(e, "Hb", function() {
            return re
        }), n.d(e, "Gb", function() {
            return oe
        }), n.d(e, "Vb", function() {
            return ie
        }), n.d(e, "d", function() {
            return se
        }), n.d(e, "j", function() {
            return le
        }), n.d(e, "h", function() {
            return de
        }), n.d(e, "Y", function() {
            return he
        }), n.d(e, "Db", function() {
            return ye
        }), n.d(e, "xc", function() {
            return we
        }), n.d(e, "o", function() {
            return _e
        }), n.d(e, "rc", function() {
            return ke
        }), n.d(e, "qc", function() {
            return Pe
        }), n.d(e, "Dc", function() {
            return Se
        }), n.d(e, "U", function() {
            return Ce
        }), n.d(e, "y", function() {
            return Me
        }), n.d(e, "Ec", function() {
            return Le
        }), n.d(e, "Cc", function() {
            return Ae
        }), n.d(e, "J", function() {
            return Re
        }), n.d(e, "H", function() {
            return ze
        }), n.d(e, "I", function() {
            return Ve
        }), n.d(e, "Ac", function() {
            return Be
        }), n.d(e, "Bb", function() {
            return He
        }), n.d(e, "Cb", function() {
            return Ke
        }), n.d(e, "Ab", function() {
            return Ye
        }), n.d(e, "oc", function() {
            return Ze
        }), n.d(e, "f", function() {
            return $e
        }), n.d(e, "Q", function() {
            return en
        }), n.d(e, "Td", function() {
            return rn
        }), n.d(e, "yc", function() {
            return on
        }), n.d(e, "Tc", function() {
            return un
        }), n.d(e, "Uc", function() {
            return pn
        }), n.d(e, "rb", function() {
            return fn
        }), n.d(e, "Pc", function() {
            return mn
        }), n.d(e, "qb", function() {
            return bn
        }), n.d(e, "Cd", function() {
            return gn
        }), n.d(e, "pc", function() {
            return vn
        }), n.d(e, "M", function() {
            return xn
        }), n.d(e, "c", function() {
            return On
        }), n.d(e, "N", function() {
            return jn
        }), n.d(e, "q", function() {
            return Tn
        }), n.d(e, "Oc", function() {
            return En
        }), n.d(e, "xd", function() {
            return Nn
        }), n.d(e, "Jd", function() {
            return In
        }), n.d(e, "Hc", function() {
            return Dn
        }), n.d(e, "T", function() {
            return Un
        }), n.d(e, "g", function() {
            return Fn
        }), n.d(e, "L", function() {
            return qn
        }), n.d(e, "F", function() {
            return Qn
        }), n.d(e, "eb", function() {
            return Wn
        }), n.d(e, "Ib", function() {
            return Gn
        }), n.d(e, "dc", function() {
            return Xn
        }), n.d(e, "lc", function() {
            return Jn
        }), n.d(e, "fc", function() {
            return tr
        }), n.d(e, "Ld", function() {
            return nr
        }), n.d(e, "Nd", function() {
            return ar
        }), n.d(e, "Lc", function() {
            return cr
        }), n.d(e, "ec", function() {
            return ur
        }), n.d(e, "jc", function() {
            return pr
        }), n.d(e, "ic", function() {
            return fr
        }), n.d(e, "kc", function() {
            return mr
        }), n.d(e, "gc", function() {
            return br
        }), n.d(e, "hc", function() {
            return gr
        }), n.d(e, "Mb", function() {
            return vr
        }), n.d(e, "Md", function() {
            return xr
        }), n.d(e, "Od", function() {
            return Or
        }), n.d(e, "xb", function() {
            return jr
        }), n.d(e, "yb", function() {
            return Tr
        }), n.d(e, "Lb", function() {
            return Er
        }), n.d(e, "V", function() {
            return Nr
        }), n.d(e, "Dd", function() {
            return Ir
        }), n.d(e, "vc", function() {
            return Dr
        }), n.d(e, "Sd", function() {
            return Ur
        }), n.d(e, "bc", function() {
            return Fr
        }), n.d(e, "W", function() {
            return qr
        }), n.d(e, "B", function() {
            return Qr
        }), n.d(e, "bb", function() {
            return Wr
        }), n.d(e, "mb", function() {
            return Gr
        }), n.d(e, "lb", function() {
            return Xr
        }), n.d(e, "ab", function() {
            return Jr
        }), n.d(e, "cc", function() {
            return ta
        }), n.d(e, "ud", function() {
            return na
        }), n.d(e, "nc", function() {
            return aa
        }), n.d(e, "mc", function() {
            return ca
        }), n.d(e, "bd", function() {
            return ua
        }), n.d(e, "cd", function() {
            return pa
        }), n.d(e, "qd", function() {
            return fa
        }), n.d(e, "md", function() {
            return ma
        }), n.d(e, "rd", function() {
            return ba
        }), n.d(e, "od", function() {
            return ga
        }), n.d(e, "pd", function() {
            return va
        }), n.d(e, "nd", function() {
            return xa
        }), n.d(e, "fd", function() {
            return Oa
        }), n.d(e, "ed", function() {
            return ja
        }), n.d(e, "jd", function() {
            return Ta
        }), n.d(e, "Xc", function() {
            return Ea
        }), n.d(e, "Zc", function() {
            return Na
        }), n.d(e, "Vc", function() {
            return Ia
        }), n.d(e, "ld", function() {
            return Da
        }), n.d(e, "ad", function() {
            return Ua
        }), n.d(e, "gd", function() {
            return Fa
        }), n.d(e, "dd", function() {
            return qa
        }), n.d(e, "kd", function() {
            return Qa
        }), n.d(e, "Yc", function() {
            return Wa
        }), n.d(e, "Wc", function() {
            return Ga
        }), n.d(e, "hd", function() {
            return Xa
        }), n.d(e, "id", function() {
            return Ja
        }), n.d(e, "Vd", function() {
            return to
        }), n.d(e, "wb", function() {
            return no
        }), n.d(e, "wd", function() {
            return ao
        }), n.d(e, "gb", function() {
            return co
        }), n.d(e, "td", function() {
            return uo
        }), n.d(e, "ib", function() {
            return po
        }), n.d(e, "jb", function() {
            return fo
        }), n.d(e, "fb", function() {
            return ho
        }), n.d(e, "kb", function() {
            return yo
        }), n.d(e, "hb", function() {
            return wo
        }), n.d(e, "m", function() {
            return _o
        }), n.d(e, "Sb", function() {
            return ko
        }), n.d(e, "Ub", function() {
            return Po
        }), n.d(e, "Qb", function() {
            return So
        }), n.d(e, "Rb", function() {
            return Co
        }), n.d(e, "Tb", function() {
            return Mo
        }), n.d(e, "Nc", function() {
            return Lo
        }), n.d(e, "s", function() {
            return Ao
        }), n.d(e, "zb", function() {
            return Ro
        }), n.d(e, "Qc", function() {
            return zo
        }), n.d(e, "Gc", function() {
            return Vo
        }), n.d(e, "Fc", function() {
            return Bo
        }), n.d(e, "z", function() {
            return Ho
        }), n.d(e, "Zb", function() {
            return Ko
        }), n.d(e, "e", function() {
            return Yo
        }), n.d(e, "Id", function() {
            return Zo
        }), n.d(e, "Hd", function() {
            return $o
        }), n.d(e, "ob", function() {
            return ec
        }), n.d(e, "nb", function() {
            return rc
        }), n.d(e, "X", function() {
            return oc
        }), n.d(e, "u", function() {
            return ic
        }), n.d(e, "C", function() {
            return sc
        }), n.d(e, "E", function() {
            return lc
        }), n.d(e, "D", function() {
            return dc
        }), n.d(e, "ac", function() {
            return hc
        }), n.d(e, "Kd", function() {
            return yc
        }), n.d(e, "S", function() {
            return wc
        }), n.d(e, "sb", function() {
            return _c
        }), n.d(e, "Pd", function() {
            return kc
        }), n.d(e, "Qd", function() {
            return Pc
        }), n.d(e, "sc", function() {
            return Sc
        }), n.d(e, "r", function() {
            return Cc
        }), n.d(e, "v", function() {
            return Mc
        }), n.d(e, "G", function() {
            return Lc
        }), n.d(e, "Ud", function() {
            return Ac
        }), n.d(e, "Ob", function() {
            return Rc
        }), n.d(e, "uc", function() {
            return zc
        }), n.d(e, "Rd", function() {
            return Vc
        }), n.d(e, "tc", function() {
            return Bc
        }), n.d(e, "sd", function() {
            return Hc
        }), n.d(e, "Jb", function() {
            return Kc
        }), n.d(e, "Kb", function() {
            return Yc
        }), n.d(e, "ub", function() {
            return Zc
        }), n.d(e, "tb", function() {
            return $c
        }), n.d(e, "i", function() {
            return ei
        }), n.d(e, "vb", function() {
            return ri
        }), n.d(e, "Xb", function() {
            return oi
        }), n.d(e, "Wb", function() {
            return ii
        }), n.d(e, "k", function() {
            return si
        }), n.d(e, "Yb", function() {
            return li
        }), n.d(e, "Ic", function() {
            return di
        }), n.d(e, "P", function() {
            return hi
        });
        var E = "".concat(Object(b.o)("otc"), "/api");

        function M(t) {
            return N.apply(this, arguments)
        }

        function N() {
            return (N = p()(c.a.mark(function t(e) {
                var n;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return n = t.sent, t.abrupt("return", T("".concat(n, "/login"), {
                                method: "POST",
                                body: e,
                                isUC: !0
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function L(t) {
            return I.apply(this, arguments)
        }

        function I() {
            return (I = p()(c.a.mark(function t(e) {
                var n;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return n = t.sent, t.abrupt("return", T("".concat(n, "/register"), {
                                method: "POST",
                                body: e,
                                isUC: !0
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function A(t) {
            return D.apply(this, arguments)
        }

        function D() {
            return (D = p()(c.a.mark(function t(e) {
                var n;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return n = t.sent, t.abrupt("return", T("".concat(n, "/password/reset"), {
                                method: "POST",
                                body: e,
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                isUC: !0
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function R(t) {
            return U.apply(this, arguments)
        }

        function U() {
            return (U = p()(c.a.mark(function t(e) {
                var n;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return n = t.sent, t.abrupt("return", T("".concat(n, "/password/reset_check_account"), {
                                method: "POST",
                                body: e,
                                showErrorMsg: !0,
                                isUC: !0
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function z(t) {
            return F.apply(this, arguments)
        }

        function F() {
            return (F = p()(c.a.mark(function t(e) {
                var n;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return n = t.sent, t.abrupt("return", T("".concat(n, "/password/reset_check_code"), {
                                method: "POST",
                                body: e,
                                isUC: !0
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function V(t) {
            return q.apply(this, arguments)
        }

        function q() {
            return (q = p()(c.a.mark(function t(e) {
                var n;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return n = t.sent, t.abrupt("return", T("".concat(n, "/password/reset_by_support"), {
                                method: "POST",
                                body: e,
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                isUC: !0
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function B(t) {
            return Q.apply(this, arguments)
        }

        function Q() {
            return (Q = p()(c.a.mark(function t(e) {
                var n;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return n = t.sent, t.abrupt("return", T("".concat(n, "/login/second_auth"), {
                                method: "POST",
                                body: e,
                                isUC: !0
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function H() {
            return W.apply(this, arguments)
        }

        function W() {
            return (W = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/user/logout")));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function K() {
            return G.apply(this, arguments)
        }

        function G() {
            return (G = p()(c.a.mark(function t() {
                var e;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return e = t.sent, t.abrupt("return", T("".concat(e, "/logout"), {
                                method: "POST",
                                showProgress: !1,
                                isUC: !0
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Y(t) {
            return X.apply(this, arguments)
        }

        function X() {
            return (X = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/market/introduce/").concat(e), {
                                showErrorMsg: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Z(t) {
            return J.apply(this, arguments)
        }

        function J() {
            return (J = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/index/banner?").concat(Object(l.stringify)(e))));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function $() {
            return tt.apply(this, arguments)
        }

        function tt() {
            return (tt = p()(c.a.mark(function t() {
                var e;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return e = t.sent, t.abrupt("return", T("".concat(e, "/login/validation"), {
                                method: "POST",
                                showProgress: !1,
                                showErrorMsg: !1,
                                isUC: !0
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function et(t) {
            return nt.apply(this, arguments)
        }

        function nt() {
            return (nt = p()(c.a.mark(function t(e) {
                var n, r;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return n = e.currency, r = u()(e, ["currency"]), t.abrupt("return", T("".concat("/api", "/member/asset/balances?currency=").concat(n), a()({}, r)));
                        case 2:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function rt(t) {
            return at.apply(this, arguments)
        }

        function at() {
            return (at = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/order"), {
                                method: "POST",
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function ot(t) {
            return ct.apply(this, arguments)
        }

        function ct() {
            return (ct = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/order/cancel?").concat(Object(l.stringify)(e)), {
                                method: "DELETE"
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function it(t) {
            return ut.apply(this, arguments)
        }

        function ut() {
            return (ut = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/order/cancelAll?").concat(Object(l.stringify)(e)), {
                                method: "DELETE"
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function st(t) {
            return pt.apply(this, arguments)
        }

        function pt() {
            return (pt = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/order/trigger/place"), {
                                method: "POST",
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function lt(t) {
            return ft.apply(this, arguments)
        }

        function ft() {
            return (ft = p()(c.a.mark(function t(e) {
                var n;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (!e) {
                                t.next = 4;
                                break
                            }
                            return t.abrupt("return", T("".concat("/api", "/member/preference/collect"), {
                                showProgress: !1
                            }));
                        case 4:
                            return n = JSON.parse(window.localStorage.getItem("mxc.user.local_favorites")) || [], t.abrupt("return", new Promise(function(t) {
                                return t(n)
                            }));
                        case 6:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function dt(t, e) {
            return mt.apply(this, arguments)
        }

        function mt() {
            return (mt = p()(c.a.mark(function t(e, n) {
                var r;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (!n) {
                                t.next = 4;
                                break
                            }
                            return t.abrupt("return", T("".concat("/api", "/member/preference/collect"), {
                                method: "POST",
                                body: e
                            }));
                        case 4:
                            return r = JSON.parse(window.localStorage.getItem("mxc.user.local_favorites")) || [], r.findIndex(function(t) {
                                return t === e.symbol
                            }) < 0 && (r.push(e.symbol), window.localStorage.setItem("mxc.user.local_favorites", JSON.stringify(r))), t.abrupt("return", new Promise(function(t) {
                                return t()
                            }));
                        case 8:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function ht(t, e) {
            return bt.apply(this, arguments)
        }

        function bt() {
            return (bt = p()(c.a.mark(function t(e, n) {
                var r, a;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (!n) {
                                t.next = 4;
                                break
                            }
                            return t.abrupt("return", T("".concat("/api", "/member/preference/collect?").concat(Object(l.stringify)(e)), {
                                method: "DELETE"
                            }));
                        case 4:
                            return r = JSON.parse(window.localStorage.getItem("mxc.user.local_favorites")) || [], (a = r.findIndex(function(t) {
                                return t === e.symbol
                            })) >= 0 && (r.splice(a, 1), window.localStorage.setItem("mxc.user.local_favorites", JSON.stringify(r))), t.abrupt("return", new Promise(function(t) {
                                return t()
                            }));
                        case 8:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function yt(t) {
            return gt.apply(this, arguments)
        }

        function gt() {
            return (gt = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/order/list?").concat(Object(l.stringify)(e))));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function wt() {
            return vt.apply(this, arguments)
        }

        function vt() {
            return (vt = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/asset/overview")));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function _t(t) {
            return xt.apply(this, arguments)
        }

        function xt() {
            return (xt = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/order/deals?").concat(Object(l.stringify)(e))));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function kt(t) {
            return Ot.apply(this, arguments)
        }

        function Ot() {
            return (Ot = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/asset/build_recharge_address"), {
                                method: "POST",
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Pt(t) {
            return jt.apply(this, arguments)
        }

        function jt() {
            return (jt = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/asset/deposit?").concat(Object(l.stringify)(e))));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function St(t) {
            return Tt.apply(this, arguments)
        }

        function Tt() {
            return (Tt = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/asset/markList?").concat(Object(l.stringify)(e)), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Ct(t) {
            return Et.apply(this, arguments)
        }

        function Et() {
            return (Et = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/asset/page_mark?").concat(Object(l.stringify)(e))));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Mt(t) {
            return Nt.apply(this, arguments)
        }

        function Nt() {
            return (Nt = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/asset/withdraw_history?").concat(Object(l.stringify)(e))));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Lt(t) {
            return It.apply(this, arguments)
        }

        function It() {
            return (It = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/asset/withdraw/cancel"), {
                                method: "POST",
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function At(t) {
            return Dt.apply(this, arguments)
        }

        function Dt() {
            return (Dt = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/code/send_sms_code"), {
                                method: "POST",
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Rt(t) {
            return Ut.apply(this, arguments)
        }

        function Ut() {
            return (Ut = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/code/send_mail_code"), {
                                method: "POST",
                                body: a()({
                                    language: "zh-CN" === Object(_.getLocale)() ? "CN" : "EN"
                                }, e)
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function zt(t) {
            return Ft.apply(this, arguments)
        }

        function Ft() {
            return (Ft = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/statistics/mx?").concat(Object(l.stringify)(e))));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Vt(t) {
            return qt.apply(this, arguments)
        }

        function qt() {
            return (qt = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/asset/add_mark"), {
                                method: "POST",
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Bt(t) {
            return Qt.apply(this, arguments)
        }

        function Qt() {
            return (Qt = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/asset/do_withdraw"), {
                                method: "POST",
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Ht(t) {
            return Wt.apply(this, arguments)
        }

        function Wt() {
            return (Wt = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/asset/remove_mark?").concat(Object(l.stringify)(e))));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Kt() {
            return Gt.apply(this, arguments)
        }

        function Gt() {
            return (Gt = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/common/geetest/token")));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Yt(t) {
            return Xt.apply(this, arguments)
        }

        function Xt() {
            return (Xt = p()(c.a.mark(function t(e) {
                var n, r;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return n = e.lang, r = u()(e, ["lang"]), t.abrupt("return", T("".concat("/api", "/notice?lang=").concat(n), r));
                        case 2:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Zt(t) {
            return Jt.apply(this, arguments)
        }

        function Jt() {
            return (Jt = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/asset/check_withdraw_amount"), {
                                method: "POST",
                                body: e,
                                showErrorMsg: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function $t(t) {
            return te.apply(this, arguments)
        }

        function te() {
            return (te = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/launchpad/list?").concat(Object(l.stringify)(e))));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function ee(t) {
            return ne.apply(this, arguments)
        }

        function ne() {
            return (ne = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/launchpad/detail?pid=").concat(e)));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function re(t) {
            return ae.apply(this, arguments)
        }

        function ae() {
            return (ae = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/launchpad/member_bought_log?").concat(Object(l.stringify)(e))));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function oe(t) {
            return ce.apply(this, arguments)
        }

        function ce() {
            return (ce = p()(c.a.mark(function t(e) {
                var n;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return n = {
                                pid: e
                            }, t.abrupt("return", T("".concat("/api", "/launchpad/do_draw"), {
                                method: "POST",
                                body: n
                            }));
                        case 2:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function ie(t) {
            return ue.apply(this, arguments)
        }

        function ue() {
            return (ue = p()(c.a.mark(function t(e) {
                var n;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return n = {
                                pid: e
                            }, t.abrupt("return", T("".concat("/api", "/launchpad/do_draw_now"), {
                                method: "POST",
                                body: n
                            }));
                        case 2:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function se(t) {
            return pe.apply(this, arguments)
        }

        function pe() {
            return (pe = p()(c.a.mark(function t(e) {
                var n;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return n = {
                                pid: e
                            }, t.abrupt("return", T("".concat("/api", "/launchpad/do_apply"), {
                                method: "POST",
                                body: n
                            }));
                        case 2:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function le(t) {
            return fe.apply(this, arguments)
        }

        function fe() {
            return (fe = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/launchpad/do_buy"), {
                                method: "POST",
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function de(t) {
            return me.apply(this, arguments)
        }

        function me() {
            return (me = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/launchpad/do_bidding"), {
                                method: "POST",
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function he() {
            return be.apply(this, arguments)
        }

        function be() {
            return (be = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/common/country"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function ye(t) {
            return ge.apply(this, arguments)
        }

        function ge() {
            return (ge = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/market/kline?").concat(Object(l.stringify)(e)), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function we(t) {
            return ve.apply(this, arguments)
        }

        function ve() {
            return (ve = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/order/trigger/list?").concat(Object(l.stringify)(e)), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function _e(t) {
            return xe.apply(this, arguments)
        }

        function xe() {
            return (xe = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/order/trigger/cancel"), {
                                method: "POST",
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function ke() {
            return Oe.apply(this, arguments)
        }

        function Oe() {
            return (Oe = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/common/ping"), {
                                showProgress: !1,
                                showErrorMsg: !1,
                                credentials: "same-origin"
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Pe() {
            return je.apply(this, arguments)
        }

        function je() {
            return (je = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/servicefee/zh_cn")));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Se() {
            return Te.apply(this, arguments)
        }

        function Te() {
            return (Te = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/vote/coin/phases"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Ce(t) {
            return Ee.apply(this, arguments)
        }

        function Ee() {
            return (Ee = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/vote/coin/remain_votes?phaseProjectId=").concat(e)));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Me(t) {
            return Ne.apply(this, arguments)
        }

        function Ne() {
            return (Ne = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/vote/coin/do_vote"), {
                                method: "POST",
                                body: e,
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Le() {
            return Ie.apply(this, arguments)
        }

        function Ie() {
            return (Ie = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/vote/coin/my_vote")));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Ae(t) {
            return De.apply(this, arguments)
        }

        function De() {
            return (De = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/vote/coin/coin_detail?phaseProjectId=").concat(e)));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Re() {
            return Ue.apply(this, arguments)
        }

        function Ue() {
            return (Ue = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/fund/p_list")));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function ze(t) {
            return Fe.apply(this, arguments)
        }

        function Fe() {
            return (Fe = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/fund/lock_product?").concat(Object(l.stringify)(e))));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Ve(t) {
            return qe.apply(this, arguments)
        }

        function qe() {
            return (qe = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/fund/p_detail?").concat(Object(l.stringify)(e))));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Be(t) {
            return Qe.apply(this, arguments)
        }

        function Qe() {
            return (Qe = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/fund/member_lock_log?").concat(Object(l.stringify)(e))));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function He(t) {
            return We.apply(this, arguments)
        }

        function We() {
            return (We = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/commission/info?").concat(Object(l.stringify)(e)), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Ke(t) {
            return Ge.apply(this, arguments)
        }

        function Ge() {
            return (Ge = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/commission/invites?").concat(Object(l.stringify)(e)), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Ye(t) {
            return Xe.apply(this, arguments)
        }

        function Xe() {
            return (Xe = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/commission/list?").concat(Object(l.stringify)(e)), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Ze(t) {
            return Je.apply(this, arguments)
        }

        function Je() {
            return (Je = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/commission/topn?").concat(Object(l.stringify)(e))));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function $e(t) {
            return tn.apply(this, arguments)
        }

        function tn() {
            return (tn = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/asset/transfer"), {
                                method: "POST",
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function en(t) {
            return nn.apply(this, arguments)
        }

        function nn() {
            return (nn = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/asset/sys_balances?").concat(Object(l.stringify)(e))));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function rn(t) {
            return an.apply(this, arguments)
        }

        function an() {
            return (an = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/asset/transfer_history?").concat(Object(l.stringify)(e))));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function on() {
            return cn.apply(this, arguments)
        }

        function cn() {
            return (cn = p()(c.a.mark(function t() {
                var e;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return e = t.sent, t.abrupt("return", T("".concat(e, "/user_info"), {
                                showProgress: !1,
                                showErrorMsg: !1,
                                isUC: !0
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function un(t) {
            return sn.apply(this, arguments)
        }

        function sn() {
            return (sn = p()(c.a.mark(function t(e) {
                var n;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return n = t.sent, t.abrupt("return", T("".concat(n, "/mobile/bind?").concat(Object(l.stringify)(e)), {
                                isUC: !0
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function pn(t) {
            return ln.apply(this, arguments)
        }

        function ln() {
            return (ln = p()(c.a.mark(function t(e) {
                var n;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return n = t.sent, t.abrupt("return", T("".concat(n, "/mobile/modify?").concat(Object(l.stringify)(e)), {
                                isUC: !0
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function fn() {
            return dn.apply(this, arguments)
        }

        function dn() {
            return (dn = p()(c.a.mark(function t() {
                var e;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return e = t.sent, t.abrupt("return", T("".concat(e, "/google_auth/info"), {
                                method: "POST",
                                showProgress: !1,
                                showErrorMsg: !1,
                                isUC: !0
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function mn() {
            return hn.apply(this, arguments)
        }

        function hn() {
            return (hn = p()(c.a.mark(function t() {
                var e, n, r, a = arguments;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return e = a.length > 0 && void 0 !== a[0] ? a[0] : "bind", n = a.length > 1 && void 0 !== a[1] ? a[1] : {}, t.next = 4, Object(C.b)();
                        case 4:
                            return r = t.sent, t.abrupt("return", T("".concat(r, "/google_auth/").concat(e), {
                                method: "POST",
                                body: n,
                                showProgress: !1,
                                isUC: !0
                            }));
                        case 6:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function bn() {
            return yn.apply(this, arguments)
        }

        function yn() {
            return (yn = p()(c.a.mark(function t() {
                var e;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return e = t.sent, t.abrupt("return", T("".concat(e, "/google_auth/check"), {
                                isUC: !0
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function gn() {
            return wn.apply(this, arguments)
        }

        function wn() {
            return (wn = p()(c.a.mark(function t() {
                var e, n = arguments;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return e = n.length > 0 && void 0 !== n[0] ? n[0] : {}, t.abrupt("return", T("".concat("/api", "/member/ucenter/saveIdentityAuth"), {
                                method: "POST",
                                body: e,
                                showProgress: !1
                            }));
                        case 2:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function vn() {
            return _n.apply(this, arguments)
        }

        function _n() {
            return (_n = p()(c.a.mark(function t() {
                var e;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return e = t.sent, t.abrupt("return", T("".concat(e, "/secure/check"), {
                                showProgress: !1,
                                isUC: !0
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function xn() {
            return kn.apply(this, arguments)
        }

        function kn() {
            return (kn = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/apiKey/getApiKeyList"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function On(t) {
            return Pn.apply(this, arguments)
        }

        function Pn() {
            return (Pn = p()(c.a.mark(function t(e) {
                var n, r = arguments;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return n = r.length > 1 && void 0 !== r[1] ? r[1] : "add", t.abrupt("return", T("".concat("/api", "/apiKey/").concat(n), {
                                method: "POST",
                                body: e,
                                showProgress: !1
                            }));
                        case 2:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function jn() {
            return Sn.apply(this, arguments)
        }

        function Sn() {
            return (Sn = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/apiKey/permissions"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Tn(t) {
            return Cn.apply(this, arguments)
        }

        function Cn() {
            return (Cn = p()(c.a.mark(function t(e) {
                var n;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return n = t.sent, t.abrupt("return", T("".concat(n, "/password/change"), {
                                method: "POST",
                                body: e,
                                showProgress: !1,
                                isUC: !0
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function En(t) {
            return Mn.apply(this, arguments)
        }

        function Mn() {
            return (Mn = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/fund/do_lock"), {
                                method: "POST",
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Nn() {
            return Ln.apply(this, arguments)
        }

        function Ln() {
            return (Ln = p()(c.a.mark(function t() {
                var e, n = arguments;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return e = n.length > 0 && void 0 !== n[0] ? n[0] : {}, t.abrupt("return", T("".concat("/api", "/rgvalid"), {
                                method: "POST",
                                body: e
                            }));
                        case 2:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function In() {
            return An.apply(this, arguments)
        }

        function An() {
            return (An = p()(c.a.mark(function t() {
                var e, n = arguments;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return e = n.length > 0 && void 0 !== n[0] ? n[0] : {}, t.abrupt("return", T("".concat("/api", "/sendMail"), {
                                method: "POST",
                                body: a()({
                                    language: "zh-CN" === Object(_.getLocale)() ? "CN" : "EN"
                                }, e)
                            }));
                        case 2:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Dn(t) {
            return Rn.apply(this, arguments)
        }

        function Rn() {
            return (Rn = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat(e, "/api/common/ping"), {
                                showProgress: !1,
                                showErrorMsg: !1,
                                credentials: "same-origin",
                                customHeaders: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Un() {
            return zn.apply(this, arguments)
        }

        function zn() {
            return (zn = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/apiKey/availableSymbols"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Fn(t) {
            return Vn.apply(this, arguments)
        }

        function Vn() {
            return (Vn = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/ucenter/set_fishing_code"), {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: {
                                    phishingCode: e
                                }
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function qn() {
            return Bn.apply(this, arguments)
        }

        function Bn() {
            return (Bn = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/ucenter/get_fishing_code"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Qn(t) {
            return Hn.apply(this, arguments)
        }

        function Hn() {
            return (Hn = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/ucenter/selfFrozen"), {
                                method: "POST",
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Wn() {
            return Kn.apply(this, arguments)
        }

        function Kn() {
            return (Kn = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/commission/position"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Gn(t) {
            return Yn.apply(this, arguments)
        }

        function Yn() {
            return (Yn = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/launchpad/question?lang=").concat(e), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Xn() {
            return Zn.apply(this, arguments)
        }

        function Zn() {
            return (Zn = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/ucenter/get_fishing_code"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Jn(t) {
            return $n.apply(this, arguments)
        }

        function $n() {
            return ($n = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/miner_pool/commissions?").concat(Object(l.stringify)(e)), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function tr(t) {
            return er.apply(this, arguments)
        }

        function er() {
            return (er = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/miner_pool/detail?poolId=").concat(e), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function nr(t) {
            return rr.apply(this, arguments)
        }

        function rr() {
            return (rr = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/miner_pool/pool_in"), {
                                method: "POST",
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function ar(t) {
            return or.apply(this, arguments)
        }

        function or() {
            return (or = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/miner_pool/pool_out"), {
                                method: "POST",
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function cr() {
            return ir.apply(this, arguments)
        }

        function ir() {
            return (ir = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/asset/withdraw_amount"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function ur() {
            return sr.apply(this, arguments)
        }

        function sr() {
            return (sr = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/miner_pool/defi_list"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function pr() {
            return lr.apply(this, arguments)
        }

        function lr() {
            return (lr = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/miner_pool/lock_list"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function fr() {
            return dr.apply(this, arguments)
        }

        function dr() {
            return (dr = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/miner_pool/hold_list"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function mr() {
            return hr.apply(this, arguments)
        }

        function hr() {
            return (hr = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/miner_pool/margin_list"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function br() {
            return yr.apply(this, arguments)
        }

        function yr() {
            return (yr = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/miner_pool/finance_list"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function gr(t) {
            return wr.apply(this, arguments)
        }

        function wr() {
            return (wr = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/miner_pool/history_profit?poolId=").concat(e), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function vr(t) {
            return _r.apply(this, arguments)
        }

        function _r() {
            return (_r = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/miner_pool/lock_record_detail?").concat(Object(l.stringify)(e)), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function xr(t) {
            return kr.apply(this, arguments)
        }

        function kr() {
            return (kr = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/miner_pool/apply_lock"), {
                                method: "POST",
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Or(t) {
            return Pr.apply(this, arguments)
        }

        function Pr() {
            return (Pr = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/miner_pool/apply_unlock"), {
                                method: "POST",
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function jr(t) {
            return Sr.apply(this, arguments)
        }

        function Sr() {
            return (Sr = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/miner_pool/hold_record?").concat(Object(l.stringify)(e)), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Tr(t) {
            return Cr.apply(this, arguments)
        }

        function Cr() {
            return (Cr = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/miner_pool/hold_record_detail?").concat(Object(l.stringify)(e)), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Er(t) {
            return Mr.apply(this, arguments)
        }

        function Mr() {
            return (Mr = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/miner_pool/lock_record?").concat(Object(l.stringify)(e)), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Nr() {
            return Lr.apply(this, arguments)
        }

        function Lr() {
            return (Lr = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/miner_pool/coins"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Ir(t) {
            return Ar.apply(this, arguments)
        }

        function Ar() {
            return (Ar = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/asset/save_remark"), {
                                method: "POST",
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Dr() {
            return Rr.apply(this, arguments)
        }

        function Rr() {
            return (Rr = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/launchpad/suters_balance"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Ur(t) {
            return zr.apply(this, arguments)
        }

        function zr() {
            return (zr = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/launchpad/suters_convert"), {
                                method: "POST",
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Fr(t) {
            return Vr.apply(this, arguments)
        }

        function Vr() {
            return (Vr = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/asset/trans_log?").concat(Object(l.stringify)(e))));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function qr() {
            return Br.apply(this, arguments)
        }

        function Br() {
            return (Br = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/swap/account/exist"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Qr(t) {
            return Hr.apply(this, arguments)
        }

        function Hr() {
            return (Hr = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/asset/enable_fee_discount"), {
                                method: "POST",
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Wr(t) {
            return Kr.apply(this, arguments)
        }

        function Kr() {
            return (Kr = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/market/coin/").concat(e), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Gr(t) {
            return Yr.apply(this, arguments)
        }

        function Yr() {
            return (Yr = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/common/etf/funding_rate/").concat(e), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Xr(t) {
            return Zr.apply(this, arguments)
        }

        function Zr() {
            return (Zr = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/common/etf/net_worth/").concat(e), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Jr(t) {
            return $r.apply(this, arguments)
        }

        function $r() {
            return ($r = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat(E, "/common/coin/").concat(e), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function ta(t) {
            return ea.apply(this, arguments)
        }

        function ea() {
            return (ea = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat(E, "/common/currency/").concat(e), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function na(t) {
            return ra.apply(this, arguments)
        }

        function ra() {
            return (ra = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat(E, "/order/flush_trade_match"), {
                                method: "POST",
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function aa(t) {
            return oa.apply(this, arguments)
        }

        function oa() {
            return (oa = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat(E, "/common/reference_price?").concat(Object(l.stringify)(e)), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function ca(t) {
            return ia.apply(this, arguments)
        }

        function ia() {
            return (ia = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat(E, "/common/coins"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function ua() {
            return sa.apply(this, arguments)
        }

        function sa() {
            return (sa = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/margin/account/check"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function pa() {
            return la.apply(this, arguments)
        }

        function la() {
            return (la = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/margin/common/symbols"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function fa() {
            return da.apply(this, arguments)
        }

        function da() {
            return (da = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/margin/account/open"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function ma(t) {
            return ha.apply(this, arguments)
        }

        function ha() {
            return (ha = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/margin/account/query?").concat(Object(l.stringify)(e)), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function ba(t) {
            return ya.apply(this, arguments)
        }

        function ya() {
            return (ya = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/margin/account/change_trade_mode"), {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function ga(t) {
            return wa.apply(this, arguments)
        }

        function wa() {
            return (wa = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/margin/asset/avl_borrow?accountType=STEP&symbol=").concat(e), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function va(t) {
            return _a.apply(this, arguments)
        }

        function _a() {
            return (_a = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/margin/asset/avl_transfer?accountType=STEP&").concat(Object(l.stringify)(e)), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function xa(t) {
            return ka.apply(this, arguments)
        }

        function ka() {
            return (ka = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/margin/asset/balance?").concat(Object(l.stringify)(e)), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Oa(t) {
            return Pa.apply(this, arguments)
        }

        function Pa() {
            return (Pa = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/margin/order/open_order?").concat(Object(l.stringify)(e)), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function ja(t) {
            return Sa.apply(this, arguments)
        }

        function Sa() {
            return (Sa = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/margin/order/list?").concat(Object(l.stringify)(e)), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Ta(t) {
            return Ca.apply(this, arguments)
        }

        function Ca() {
            return (Ca = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/margin/order/trigger/list?").concat(Object(l.stringify)(e)), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Ea(t) {
            return Ma.apply(this, arguments)
        }

        function Ma() {
            return (Ma = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/margin/order/cancel/STEP/").concat(e), {
                                showProgress: !1,
                                method: "DELETE"
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Na(t) {
            return La.apply(this, arguments)
        }

        function La() {
            return (La = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/margin/order/place "), {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    nonce: Math.random().toString().slice(2, 15)
                                },
                                body: e,
                                needFingerprint: !0
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Ia(t) {
            return Aa.apply(this, arguments)
        }

        function Aa() {
            return (Aa = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/margin/asset/borrow_list?").concat(Object(l.stringify)(e)), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Da(t) {
            return Ra.apply(this, arguments)
        }

        function Ra() {
            return (Ra = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/margin/asset/repay_list?").concat(Object(l.stringify)(e)), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Ua(t) {
            return za.apply(this, arguments)
        }

        function za() {
            return (za = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/margin/asset/borrow "), {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: e,
                                needFingerprint: !0
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Fa(t) {
            return Va.apply(this, arguments)
        }

        function Va() {
            return (Va = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/margin/asset/repay "), {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: e,
                                needFingerprint: !0
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function qa(t) {
            return Ba.apply(this, arguments)
        }

        function Ba() {
            return (Ba = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/margin/order/deal_list?").concat(Object(l.stringify)(e)), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Qa(t) {
            return Ha.apply(this, arguments)
        }

        function Ha() {
            return (Ha = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/margin/order/trigger/place"), {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    nonce: Math.random().toString().slice(2, 15)
                                },
                                body: e,
                                needFingerprint: !0
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Wa(t) {
            return Ka.apply(this, arguments)
        }

        function Ka() {
            return (Ka = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/margin/order/trigger/cancel/").concat(e), {
                                showProgress: !1,
                                method: "DELETE"
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Ga(t) {
            return Ya.apply(this, arguments)
        }

        function Ya() {
            return (Ya = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/margin/order/cancel_by_symbol?").concat(Object(l.stringify)(e)), {
                                showProgress: !1,
                                method: "DELETE"
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Xa(t) {
            return Za.apply(this, arguments)
        }

        function Za() {
            return (Za = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/margin/common/gradually_symbols?").concat(Object(l.stringify)(e)), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Ja(t) {
            return $a.apply(this, arguments)
        }

        function $a() {
            return ($a = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/margin/account/level?accountType=STEP&").concat(Object(l.stringify)(e))));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function to(t) {
            return eo.apply(this, arguments)
        }

        function eo() {
            return (eo = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/vote/coin/return_by_user?").concat(Object(l.stringify)(e)), {
                                method: "GET",
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function no(t) {
            return ro.apply(this, arguments)
        }

        function ro() {
            return (ro = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/launchpad/holdCurrencyDetail?").concat(Object(l.stringify)(e))));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function ao(t) {
            return oo.apply(this, arguments)
        }

        function oo() {
            return (oo = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/launchpad/query_trade_amount"), {
                                method: "POST",
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function co(t) {
            return io.apply(this, arguments)
        }

        function io() {
            return (io = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/etf_index/info/").concat(e), {
                                showProgress: !1,
                                showErrorMsg: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function uo(t) {
            return so.apply(this, arguments)
        }

        function so() {
            return (so = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/etf_index/order"), {
                                method: "POST",
                                body: e,
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function po(t) {
            return lo.apply(this, arguments)
        }

        function lo() {
            return (lo = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/etf_index/list"), {
                                method: "POST",
                                body: e,
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function fo() {
            return mo.apply(this, arguments)
        }

        function mo() {
            return (mo = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/etf_index/symbols")));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function ho(t) {
            return bo.apply(this, arguments)
        }

        function bo() {
            return (bo = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/etf_index/config_limit/").concat(e), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function yo(t) {
            return go.apply(this, arguments)
        }

        function go() {
            return (go = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/etf_index/etf_line"), {
                                method: "POST",
                                body: e,
                                showProgress: !1,
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function wo(t) {
            return vo.apply(this, arguments)
        }

        function vo() {
            return (vo = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/etf_index/index_line"), {
                                method: "POST",
                                body: e,
                                showProgress: !1,
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function _o(t) {
            return xo.apply(this, arguments)
        }

        function xo() {
            return (xo = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/etf_index/order_cancel"), {
                                method: "POST",
                                body: e,
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function ko(t) {
            return Oo.apply(this, arguments)
        }

        function Oo() {
            return (Oo = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/market/market_order/").concat(e), {
                                method: "GET"
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Po() {
            return jo.apply(this, arguments)
        }

        function jo() {
            return (jo = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/spot/market/symbols"), {
                                method: "GET"
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function So(t) {
            return To.apply(this, arguments)
        }

        function To() {
            return (To = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/spot/market/deals?symbol=").concat(e), {
                                method: "GET"
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Co(t) {
            return Eo.apply(this, arguments)
        }

        function Eo() {
            return (Eo = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/spot/market/depth?symbol=").concat(e), {
                                method: "GET"
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Mo(t) {
            return No.apply(this, arguments)
        }

        function No() {
            return (No = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/platform", "/spot/market/symbol?symbol=").concat(e), {
                                method: "GET"
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Lo(t) {
            return Io.apply(this, arguments)
        }

        function Io() {
            return (Io = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/im/get_zendesk_jwt_token"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Ao(t) {
            return Do.apply(this, arguments)
        }

        function Do() {
            return (Do = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/asset/check_address"), {
                                method: "POST",
                                body: e,
                                showErrorMsg: !1,
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Ro(t) {
            return Uo.apply(this, arguments)
        }

        function Uo() {
            return (Uo = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/platform/spot/market/hot_search"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function zo(t) {
            return Fo.apply(this, arguments)
        }

        function Fo() {
            return (Fo = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/login/login_by_ucenter"), {
                                method: "POST",
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Vo() {
            return qo.apply(this, arguments)
        }

        function qo() {
            return (qo = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/vote/simple/vote_activity_list"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Bo(t) {
            return Qo.apply(this, arguments)
        }

        function Qo() {
            return (Qo = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/vote/simple/vote_info?code=").concat(e), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Ho(t) {
            return Wo.apply(this, arguments)
        }

        function Wo() {
            return (Wo = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/vote/simple/voting?").concat(Object(l.stringify)(e)), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Ko(t) {
            return Go.apply(this, arguments)
        }

        function Go() {
            return (Go = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/vote/simple/my_vote?code=").concat(e), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Yo(t) {
            return Xo.apply(this, arguments)
        }

        function Xo() {
            return (Xo = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/asset/token_exchange"), {
                                method: "POST",
                                body: e,
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Zo(t) {
            return Jo.apply(this, arguments)
        }

        function Jo() {
            return (Jo = p()(c.a.mark(function t(e) {
                var n;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return n = t.sent, t.abrupt("return", T("".concat(n, "/code/send_sms_code"), {
                                method: "POST",
                                body: e,
                                isUC: !0
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function $o(t) {
            return tc.apply(this, arguments)
        }

        function tc() {
            return (tc = p()(c.a.mark(function t(e) {
                var n;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return n = t.sent, t.abrupt("return", T("".concat(n, "/code/send_mail_code"), {
                                method: "POST",
                                body: a()({
                                    language: "zh-CN" === Object(_.getLocale)() ? "CN" : "EN"
                                }, e),
                                isUC: !0
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function ec() {
            return nc.apply(this, arguments)
        }

        function nc() {
            return (nc = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/activity/deposit/info"), {
                                method: "GET",
                                showProgress: !1,
                                showErrorMsg: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function rc() {
            return ac.apply(this, arguments)
        }

        function ac() {
            return (ac = p()(c.a.mark(function t() {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/activity/deposit/rank/info"), {
                                method: "GET",
                                showProgress: !1,
                                showErrorMsg: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function oc(t) {
            return cc.apply(this, arguments)
        }

        function cc() {
            return (cc = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/ucenter/country/is_limit"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function ic(t) {
            return uc.apply(this, arguments)
        }

        function uc() {
            return (uc = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/ucenter/country/confirm_limit"), {
                                method: "POST",
                                body: e,
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function sc(t) {
            return pc.apply(this, arguments)
        }

        function pc() {
            return (pc = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/fork/convert"), {
                                method: "POST",
                                body: e,
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function lc(t) {
            return fc.apply(this, arguments)
        }

        function fc() {
            return (fc = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/fork/merge"), {
                                method: "POST",
                                body: e,
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function dc(t) {
            return mc.apply(this, arguments)
        }

        function mc() {
            return (mc = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/fork/history?").concat(Object(l.stringify)(e)), {
                                method: "GET",
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function hc(t) {
            return bc.apply(this, arguments)
        }

        function bc() {
            return (bc = p()(c.a.mark(function t(e) {
                var n;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return n = t.sent, t.abrupt("return", T("".concat(n, "/nickname/query_effective"), {
                                method: "POST",
                                body: e,
                                showProgress: !1
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function yc(t) {
            return gc.apply(this, arguments)
        }

        function gc() {
            return (gc = p()(c.a.mark(function t(e) {
                var n;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return n = t.sent, t.abrupt("return", T("".concat(n, "/nickname/submit"), {
                                method: "POST",
                                body: e,
                                showProgress: !1
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function wc(t) {
            return vc.apply(this, arguments)
        }

        function vc() {
            return (vc = p()(c.a.mark(function t(e) {
                var n;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return n = t.sent, t.abrupt("return", T("".concat(n, "/nickname/query_ineffective"), {
                                method: "POST",
                                body: e,
                                showProgress: !1
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function _c(t) {
            return xc.apply(this, arguments)
        }

        function xc() {
            return (xc = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/user/guideInfo?").concat(Object(l.stringify)(e)), {
                                method: "GET",
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function kc(t) {
            return Oc.apply(this, arguments)
        }

        function Oc() {
            return (Oc = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/fork/convert"), {
                                method: "POST",
                                body: e,
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Pc(t) {
            return jc.apply(this, arguments)
        }

        function jc() {
            return (jc = p()(c.a.mark(function t(e) {
                var n;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return n = t.sent, t.abrupt("return", T("".concat(n, "/sub_account/create_status"), {
                                method: "GET",
                                body: e,
                                isUC: !0
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Sc() {
            return Tc.apply(this, arguments)
        }

        function Tc() {
            return (Tc = p()(c.a.mark(function t() {
                var e, n, r, a = arguments;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return e = a.length > 0 && void 0 !== a[0] ? a[0] : "GET", n = a.length > 1 ? a[1] : void 0, t.next = 4, Object(C.b)();
                        case 4:
                            return r = t.sent, t.abrupt("return", T("".concat(r, "/sub_account"), {
                                method: e,
                                body: n,
                                isUC: !0
                            }));
                        case 6:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Cc(t) {
            return Ec.apply(this, arguments)
        }

        function Ec() {
            return (Ec = p()(c.a.mark(function t(e) {
                var n;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return n = t.sent, t.abrupt("return", T("".concat(n, "/sub_account/check"), {
                                method: "POST",
                                body: e,
                                isUC: !0
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Mc(t) {
            return Nc.apply(this, arguments)
        }

        function Nc() {
            return (Nc = p()(c.a.mark(function t(e) {
                var n;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return n = t.sent, t.abrupt("return", T("".concat(n, "/sub_account/second_auth"), {
                                method: "POST",
                                body: e,
                                isUC: !0
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Lc(t) {
            return Ic.apply(this, arguments)
        }

        function Ic() {
            return (Ic = p()(c.a.mark(function t(e) {
                var n;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return n = t.sent, t.abrupt("return", T("".concat(n, "/sub_account/frozen"), {
                                method: "PUT",
                                body: e,
                                isUC: !0
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Ac(t) {
            return Dc.apply(this, arguments)
        }

        function Dc() {
            return (Dc = p()(c.a.mark(function t(e) {
                var n;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(C.b)();
                        case 2:
                            return n = t.sent, t.abrupt("return", T("".concat(n, "/sub_account/unfrozen"), {
                                method: "PUT",
                                body: e,
                                isUC: !0
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Rc(t) {
            return Uc.apply(this, arguments)
        }

        function Uc() {
            return (Uc = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/account/transfer_history?").concat(Object(l.stringify)(e)), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function zc(t) {
            return Fc.apply(this, arguments)
        }

        function Fc() {
            return (Fc = p()(c.a.mark(function t(e) {
                var n, r;
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return n = e.uid, r = e.currency, t.abrupt("return", T("".concat("/api", "/account/balance/").concat(n, "/").concat(r), {
                                showErrorMsg: !1,
                                showProgress: !1
                            }));
                        case 2:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Vc(t) {
            return qc.apply(this, arguments)
        }

        function qc() {
            return (qc = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/account/transfer"), {
                                method: "POST",
                                body: e,
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Bc(t) {
            return Qc.apply(this, arguments)
        }

        function Qc() {
            return (Qc = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/account_sub/transfer_history?").concat(Object(l.stringify)(e)), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Hc(t) {
            return Wc.apply(this, arguments)
        }

        function Wc() {
            return (Wc = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/common/official_verify"), {
                                method: "POST",
                                body: e,
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Kc(t) {
            return Gc.apply(this, arguments)
        }

        function Gc() {
            return (Gc = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/asset/recent_deposit"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Yc(t) {
            return Xc.apply(this, arguments)
        }

        function Xc() {
            return (Xc = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/member/asset/recent_withdraw_history"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function Zc(t) {
            return Jc.apply(this, arguments)
        }

        function Jc() {
            return (Jc = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/cloud/hashrate/list"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function $c(t) {
            return ti.apply(this, arguments)
        }

        function ti() {
            return (ti = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/cloud/hashrate/detail/").concat(e), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function ei(t) {
            return ni.apply(this, arguments)
        }

        function ni() {
            return (ni = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/cloud/hashrate/buy"), {
                                method: "POST",
                                showProgress: !1,
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function ri(t) {
            return ai.apply(this, arguments)
        }

        function ai() {
            return (ai = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/cloud/hashrate/record?").concat(Object(l.stringify)(e)), {
                                method: "GET",
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function oi(t) {
            return ci.apply(this, arguments)
        }

        function ci() {
            return (ci = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/operateactivity", "/cloud/mining_machine/list"), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function ii(t) {
            return ui.apply(this, arguments)
        }

        function ui() {
            return (ui = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/operateactivity", "/cloud/mining_machine/detail/").concat(e), {
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function si(t) {
            return pi.apply(this, arguments)
        }

        function pi() {
            return (pi = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/operateactivity", "/cloud/mining_machine/buy"), {
                                method: "POST",
                                showProgress: !1,
                                body: e
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function li(t) {
            return fi.apply(this, arguments)
        }

        function fi() {
            return (fi = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api/operateactivity", "/cloud/mining_machine/record?").concat(Object(l.stringify)(e)), {
                                method: "GET",
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function di(t) {
            return mi.apply(this, arguments)
        }

        function mi() {
            return (mi = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/platform/member/asset/coin_list"), {
                                method: "GET",
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function hi(t) {
            return bi.apply(this, arguments)
        }

        function bi() {
            return (bi = p()(c.a.mark(function t(e) {
                return c.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", T("".concat("/api", "/platform/member/asset/chain_list?").concat(Object(l.stringify)(e)), {
                                method: "GET",
                                showProgress: !1
                            }));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }
    },
    dX6P: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("p0pE"),
            a = n.n(r),
            o = n("d6i3"),
            c = n.n(o),
            i = n("dCQc"),
            u = n("7Qib");
        e.default = {
            namespace: "auth",
            state: {
                user: {},
                kycInfo: {},
                authStatus: {},
                vipLevel: null,
                logList: null,
                loginMember: null,
                isOpenMargin: !1,
                isFirstCheck: !0,
                isFirstLogin: !1,
                validLoading: !1,
                subAccountStatus: {}
            },
            effects: {
                fetchCurrent: c.a.mark(function t(e, n) {
                    var r, a, o, s, p;
                    return c.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = n.call, a = n.put, n.select, t.next = 3, r(i.vd);
                            case 3:
                                if (o = t.sent, s = o.code, o.msg, p = o.data, 0 !== s) {
                                    t.next = 13;
                                    break
                                }
                                if (!p.token || Object(u.n)("u_id")) {
                                    t.next = 9;
                                    break
                                }
                                return t.next = 9, a({
                                    type: "putLoginByUcenter",
                                    payload: {
                                        ucenterToken: p.token
                                    }
                                });
                            case 9:
                                return t.next = 11, a({
                                    type: "saveCurrentUser",
                                    payload: p
                                });
                            case 11:
                                t.next = 18;
                                break;
                            case 13:
                                if (10059 !== s && 99999 !== s) {
                                    t.next = 18;
                                    break
                                }
                                if (!Object(u.n)("u_id")) {
                                    t.next = 18;
                                    break
                                }
                                return Object(i.Yd)(), t.next = 18, a({
                                    type: "saveCurrentUser",
                                    payload: {}
                                });
                            case 18:
                                return t.next = 20, a({
                                    type: "saveValidLoading",
                                    payload: !0
                                });
                            case 20:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }),
                getUcenterIndexInfo: c.a.mark(function t(e, n) {
                    var r, a, o, u;
                    return c.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = n.call, a = n.put, n.select, t.next = 3, r(i.yc);
                            case 3:
                                return o = t.sent, o.code, o.msg, u = o.data, t.next = 9, a({
                                    type: "saveUcenterIndexInfo",
                                    payload: {
                                        loginMember: u,
                                        vipLevel: u.vipLevel,
                                        logList: u.logList,
                                        kycInfo: u.kycInfo
                                    }
                                });
                            case 9:
                                return t.next = 11, a({
                                    type: "saveAuthStatus",
                                    payload: u.kycInfo
                                });
                            case 11:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }),
                checkMarginAccountState: c.a.mark(function t(e, n) {
                    var r, a, o, u, s;
                    return c.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = n.call, a = n.put, n.select, t.next = 3, r(i.bd);
                            case 3:
                                if (o = t.sent, u = o.code, o.msg, s = o.data, 200 !== u) {
                                    t.next = 8;
                                    break
                                }
                                return t.next = 8, a({
                                    type: "saveMarginAccountState",
                                    payload: s
                                });
                            case 8:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }),
                putLoginByUcenter: c.a.mark(function t(e, n) {
                    var r, a, o;
                    return c.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = e.payload, a = n.call, n.put, n.select, t.next = 4, a(i.Qc, r);
                            case 4:
                                return o = t.sent, t.abrupt("return", o);
                            case 6:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }),
                getSubAccountStatus: c.a.mark(function t(e, n) {
                    var r, a, o, u, s;
                    return c.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = n.call, a = n.put, n.select, t.next = 3, r(i.Qd);
                            case 3:
                                if (o = t.sent, u = o.code, o.msg, s = o.data, 0 !== u) {
                                    t.next = 8;
                                    break
                                }
                                return t.next = 8, a({
                                    type: "save",
                                    payload: {
                                        subAccountStatus: s
                                    }
                                });
                            case 8:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                })
            },
            reducers: {
                save: function(t, e) {
                    var n = e.payload;
                    return a()({}, t, n)
                },
                saveCurrentUser: function(t, e) {
                    var n = e.payload;
                    return a()({}, t, {
                        user: n
                    })
                },
                saveUcenterIndexInfo: function(t, e) {
                    return a()({}, t, e.payload)
                },
                saveMarginAccountState: function(t, e) {
                    var n = e.payload;
                    return a()({}, t, {
                        isOpenMargin: n,
                        isFirstCheck: !1
                    })
                },
                saveAuthStatus: function(t, e) {
                    var n = e.payload || {},
                        r = n.junior,
                        o = n.senior,
                        c = {
                            juniorUnverified: !r,
                            juniorIng: r && 0 === r.status,
                            juniorReject: r && 2 === r.status,
                            juniorSuccess: r && 1 === r.status,
                            seniorUnverified: !o,
                            seniorIng: o && 0 === o.status,
                            seniorReject: o && 2 === o.status,
                            seniorSuccess: o && 1 === o.status
                        };
                    return a()({}, t, {
                        authStatus: c
                    })
                },
                saveIsFirstLogin: function(t, e) {
                    var n = e.payload;
                    return a()({}, t, {
                        isFirstLogin: n
                    })
                },
                saveValidLoading: function(t, e) {
                    var n = e.payload;
                    return a()({}, t, {
                        validLoading: n
                    })
                }
            }
        }
    },
    ea93: function(t, e, n) {
        "use strict";
        e.a = {
            id: "1d3385c1-4b59-4849-894d-fe519261429e",
            org: "1470190511068154",
            app: "kefuchannelapp71200",
            userApi: "https://a1-vip5.easemob.com/".concat("1470190511068154", "/").concat("kefuchannelapp71200", "/users")
        }
    },
    hh8c: function(t, e, n) {
        t.exports = {
            "scroll-container": "scroll-container",
            nprogress: "nprogress",
            spinner: "spinner",
            "hx-left": "hx-left",
            "easemobim-chat-panel": "easemobim-chat-panel",
            "ant-page-header": "ant-page-header",
            "ant-page-header-heading-title": "ant-page-header-heading-title",
            "ant-dropdown-menu-item": "ant-dropdown-menu-item",
            active: "active",
            anticon: "anticon",
            "ant-switch": "ant-switch",
            "ant-switch-checked": "ant-switch-checked",
            "ant-checkbox-wrapper": "ant-checkbox-wrapper",
            "ant-checkbox-inner": "ant-checkbox-inner",
            "ant-checkbox-disabled": "ant-checkbox-disabled",
            "ant-select": "ant-select",
            "ant-select-disabled": "ant-select-disabled",
            "ant-select-selection": "ant-select-selection",
            "ant-select-arrow": "ant-select-arrow",
            "ant-select-selection__clear": "ant-select-selection__clear",
            "ant-input": "ant-input",
            "ant-input-group": "ant-input-group",
            "ant-input-search-icon": "ant-input-search-icon",
            "ant-input-password-icon": "ant-input-password-icon",
            "ant-input-clear-icon": "ant-input-clear-icon",
            "ant-input-affix-wrapper": "ant-input-affix-wrapper",
            "ant-input-prefix": "ant-input-prefix",
            "ant-input-suffix": "ant-input-suffix",
            "ant-btn-background-ghost": "ant-btn-background-ghost",
            "ant-btn-primary-disabled": "ant-btn-primary-disabled",
            "ant-btn-primary": "ant-btn-primary",
            disabled: "disabled",
            "ant-tabs": "ant-tabs",
            "ant-tabs-tab": "ant-tabs-tab",
            "ant-popover-title": "ant-popover-title",
            "ant-calendar-footer": "ant-calendar-footer",
            "ant-calendar-header": "ant-calendar-header",
            "ant-calendar-input-wrap": "ant-calendar-input-wrap",
            "ant-calendar-range": "ant-calendar-range",
            "ant-calendar-body": "ant-calendar-body",
            "ant-calendar-input": "ant-calendar-input",
            "ant-calendar-picker-clear": "ant-calendar-picker-clear",
            "ant-calendar-picker-icon": "ant-calendar-picker-icon",
            "ant-calendar-range-picker-separator": "ant-calendar-range-picker-separator",
            "ant-dropdown-menu-item-divider": "ant-dropdown-menu-item-divider",
            "ant-dropdown-menu-submenu-title-divider": "ant-dropdown-menu-submenu-title-divider",
            "ant-table": "ant-table",
            "ant-table-thead": "ant-table-thead",
            "ant-table-placeholder": "ant-table-placeholder",
            "ant-table-small": "ant-table-small",
            "ant-table-content": "ant-table-content",
            "ant-table-header": "ant-table-header",
            "ant-table-tbody": "ant-table-tbody",
            "ant-table-row-hover": "ant-table-row-hover",
            "ant-table-expanded-row": "ant-table-expanded-row",
            "ant-table-row-selected": "ant-table-row-selected",
            "ant-pagination": "ant-pagination",
            "ant-pagination-item": "ant-pagination-item",
            "ant-pagination-item-active": "ant-pagination-item-active",
            "ant-pagination-next": "ant-pagination-next",
            "ant-pagination-prev": "ant-pagination-prev",
            "ant-modal": "ant-modal",
            "ant-modal-confirm-body": "ant-modal-confirm-body",
            "ant-modal-confirm-content": "ant-modal-confirm-content",
            "ant-modal-confirm-title": "ant-modal-confirm-title",
            "ant-modal-title": "ant-modal-title",
            "ant-modal-content": "ant-modal-content",
            "ant-modal-header": "ant-modal-header",
            "ant-page-header-title-view-title": "ant-page-header-title-view-title",
            "ant-radio-wrapper": "ant-radio-wrapper",
            "ant-radio-wrapper-checked": "ant-radio-wrapper-checked",
            "ant-radio-inner": "ant-radio-inner",
            "ant-radio-button-wrapper": "ant-radio-button-wrapper",
            "ant-radio-button-wrapper-checked": "ant-radio-button-wrapper-checked",
            "ant-radio-button-wrapper-disabled": "ant-radio-button-wrapper-disabled",
            "ant-tooltip-placement-top": "ant-tooltip-placement-top",
            "ant-tooltip-arrow": "ant-tooltip-arrow",
            "ant-tooltip-placement-topLeft": "ant-tooltip-placement-topLeft",
            "ant-tooltip-placement-topRight": "ant-tooltip-placement-topRight",
            "ant-tooltip-placement-left": "ant-tooltip-placement-left",
            "ant-tooltip-placement-leftBottom": "ant-tooltip-placement-leftBottom",
            "ant-tooltip-placement-leftTop": "ant-tooltip-placement-leftTop",
            "ant-tooltip-placement-bottom": "ant-tooltip-placement-bottom",
            "ant-tooltip-placement-bottomLeft": "ant-tooltip-placement-bottomLeft",
            "ant-tooltip-placement-bottomRight": "ant-tooltip-placement-bottomRight",
            "ant-select-dropdown-menu-item": "ant-select-dropdown-menu-item",
            "ant-select-dropdown-menu-item-disabled": "ant-select-dropdown-menu-item-disabled",
            "select-check": "select-check",
            "ant-select-dropdown--single": "ant-select-dropdown--single",
            "ant-select-dropdown-menu-item-selected": "ant-select-dropdown-menu-item-selected",
            jitter: "jitter"
        }
    },
    i1Ax: function(t, e, n) {
        "use strict";
        var r = n("2Taf"),
            a = n.n(r),
            o = n("vZ4D"),
            c = n.n(o),
            i = function() {
                function t(e, n) {
                    a()(this, t), this.instance = null, this.url = e, this.protol = n, this.channelMap = {}, this.subscribeMap = {}, this.timeout = n.checkinterval || 3e3, this.serverTimeout = n.checkinterval || 5e3, this.timeoutObj = null, this.serverTimeoutObj = null, this.lockReconnect = !1, this.wsStatus = "", this.connect()
                }
                return c()(t, [{
                    key: "connect",
                    value: function() {
                        this.ws = new WebSocket(this.url), this.init()
                    }
                }, {
                    key: "init",
                    value: function() {
                        var t = this;
                        this.ws.onopen = function(e) {
                            t.status = "open", t.wsStatus = "ok", t.protol.heartCheck && t.heartCheck()
                        }, this.ws.onclose = function() {
                            t.wsStatus = "error", "close" !== t.status && t.reconnect()
                        }, this.ws.onerror = function() {
                            t.wsStatus = "error", "close" !== t.status && t.reconnect()
                        }, this.ws.onmessage = function(e) {
                            try {
                                var n = JSON.parse(e.data);
                                if (t.channelMap[n.channel]) {
                                    var r = t.channelMap[n.channel].callback,
                                        a = t.channelMap[n.channel].allBack;
                                    r && "function" == typeof r && r(a ? n : n.data)
                                }
                            } catch (t) {}
                            t.protol.heartCheck && t.heartCheck()
                        }
                    }
                }, {
                    key: "reconnect",
                    value: function() {
                        var t = this;
                        if (!this.lockReconnect) {
                            this.lockReconnect = !0;
                            var e = this;
                            this.reconnectTimer && clearTimeout(this.reconnectTimer), this.resubTimer && clearTimeout(this.resubTimer), this.reconnectTimer = setTimeout(function() {
                                t.connect(), t.lockReconnect = !1, t.resubTimer = setTimeout(function() {
                                    if (1 === e.ws.readyState)
                                        for (var t in e.subscribeMap)
                                            if (e.subscribeMap.hasOwnProperty(t)) {
                                                var n = e.subscribeMap[t];
                                                e.ws.send(n)
                                            }
                                }, 2e3)
                            }, 4e3)
                        }
                    }
                }, {
                    key: "heartCheck",
                    value: function() {
                        var t = this;
                        this.timeoutObj && clearTimeout(this.timeoutObj), this.serverTimeoutObj && clearTimeout(this.serverTimeoutObj), this.timeoutObj = setTimeout(function() {
                            t.ws.send("ping"), t.serverTimeoutObj = setTimeout(function() {
                                t.ws.close()
                            }, t.serverTimeout)
                        }, this.timeout)
                    }
                }, {
                    key: "closeHandle",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        "close" !== this.status && (void 0 !== this.pingInterval && void 0 !== this.pongInterval && this.close(), this.connect())
                    }
                }, {
                    key: "on",
                    value: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        this.channelMap[t] = {
                            channel: t,
                            callback: e,
                            allBack: n
                        }
                    }
                }, {
                    key: "sendMessage",
                    value: function(t) {
                        1 === this.ws.readyState && (/sub|get/.test(t.op) && (this.subscribeMap[t.op] = JSON.stringify(t)), this.ws.send(JSON.stringify(t)))
                    }
                }, {
                    key: "close",
                    value: function() {
                        clearInterval(this.pingInterval), clearInterval(this.pongInterval), this.status = "close", this.pingPong = "ping", this.ws.close()
                    }
                }], [{
                    key: "getInstance",
                    value: function() {
                        return this.instance || (this.instance = new t), this.instance
                    }
                }]), t
            }(),
            u = n("7Qib");
        n.d(e, "b", function() {
            return p
        }), n.d(e, "c", function() {
            return l
        });
        var s = new i("".concat(Object(u.o)("wbs")).concat("/raw", "/ws"), {
                heartCheck: !0,
                checkinterval: 5e3,
                serverTimeout: 1e4
            }),
            p = function(t) {
                s.on("push.margin.personal.order", function(e) {
                    t({
                        type: "setPushOrders",
                        payload: e
                    })
                }), s.on("push.margin.personal.trigger.order.v2", function(e) {
                    t({
                        type: "setPushTriggerOrders",
                        payload: e
                    })
                }), s.on("push.margin.personal.safety", function(e) {
                    t({
                        type: "setMarginAccount",
                        payload: e
                    })
                }, !0)
            },
            l = function(t) {
                return s.sendMessage(t)
            };
        e.a = s
    },
    i4x8: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("2Taf"),
            a = n.n(r),
            o = n("vZ4D"),
            c = n.n(o),
            i = n("MhPg"),
            u = n.n(i),
            s = n("l4Ni"),
            p = n.n(s),
            l = n("ujKo"),
            f = n.n(l),
            d = n("q1tI"),
            m = n.n(d),
            h = n("Crw4"),
            b = n.n(h),
            y = n("RFCh"),
            g = (n("bY7g"), n("A2FF")),
            w = n("qIgq"),
            v = n.n(w),
            _ = (n("Ksrn"), n("MR/8")),
            x = n("p0pE"),
            k = n.n(x),
            O = n("LLXN");
        n("UDhR"), n("B55N"), n("Ivi+"), n("8mBD"), n("lXzo"), n("DoHr"), n("KSF8"), n("XDpg"), n("kOpN"), n("wd/R");

        function P(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else n = r.apply(this, arguments);
                return p()(this, n)
            }
        }
        var j, S = ((j = function(t, e) {
                return Object(O._setIntlObject)(e.intl), t.children
            }).contextTypes = {
                intl: O.intlShape
            }, j),
            T = n("bMEk");
        T = T.default || T;
        var C = {
                "en-US": {
                    messages: k()({}, function(t) {
                        return t.__esModule ? t.default : t
                    }(n("KW4L"))),
                    locale: "en-US",
                    antd: n("bMEk"),
                    data: n("5K6I"),
                    momentLocale: ""
                },
                "id-ID": {
                    messages: k()({}, function(t) {
                        return t.__esModule ? t.default : t
                    }(n("7A3l"))),
                    locale: "id-ID",
                    antd: n("WRbS"),
                    data: n("aPg0"),
                    momentLocale: "id"
                },
                "ja-JP": {
                    messages: k()({}, function(t) {
                        return t.__esModule ? t.default : t
                    }(n("FWT3"))),
                    locale: "ja-JP",
                    antd: n("FcVI"),
                    data: n("Ob3k"),
                    momentLocale: "ja"
                },
                "ko-KR": {
                    messages: k()({}, function(t) {
                        return t.__esModule ? t.default : t
                    }(n("nmn8"))),
                    locale: "ko-KR",
                    antd: n("w6vJ"),
                    data: n("yhjW"),
                    momentLocale: "ko"
                },
                "pt-PT": {
                    messages: k()({}, function(t) {
                        return t.__esModule ? t.default : t
                    }(n("Kmzy"))),
                    locale: "pt-PT",
                    antd: n("PE7z"),
                    data: n("cXDg"),
                    momentLocale: "pt"
                },
                "ru-RU": {
                    messages: k()({}, function(t) {
                        return t.__esModule ? t.default : t
                    }(n("t/ck"))),
                    locale: "ru-RU",
                    antd: n("KI7/"),
                    data: n("waCW"),
                    momentLocale: "ru"
                },
                "tr-TR": {
                    messages: k()({}, function(t) {
                        return t.__esModule ? t.default : t
                    }(n("wCHT"))),
                    locale: "tr-TR",
                    antd: n("wiEg"),
                    data: n("BEUy"),
                    momentLocale: "tr"
                },
                "vi-VN": {
                    messages: k()({}, function(t) {
                        return t.__esModule ? t.default : t
                    }(n("EPxD"))),
                    locale: "vi-VN",
                    antd: n("WsKD"),
                    data: n("8x0/"),
                    momentLocale: "vi"
                },
                "zh-CN": {
                    messages: k()({}, function(t) {
                        return t.__esModule ? t.default : t
                    }(n("L27e"))),
                    locale: "zh-CN",
                    antd: n("FcfS"),
                    data: n("ExVV"),
                    momentLocale: "zh-cn"
                },
                "zh-TW": {
                    messages: k()({}, function(t) {
                        return t.__esModule ? t.default : t
                    }(n("FEz5"))),
                    locale: "zh-TW",
                    antd: n("4pv8"),
                    data: n("ExVV"),
                    momentLocale: "zh-tw"
                }
            },
            E = function(t) {
                u()(r, t);
                var e = P(r);

                function r() {
                    var t;
                    a()(this, r);
                    for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++) o[c] = arguments[c];
                    return (t = e.call.apply(e, [this].concat(o))).state = {
                        locale: "en-US"
                    }, t.reloadAppLocale = function() {
                        var e = t.getAppLocale();
                        t.setState({
                            locale: e.locale
                        })
                    }, t
                }
                return c()(r, [{
                    key: "getAppLocale",
                    value: function() {
                        var t = {
                                locale: "en-US",
                                messages: {},
                                data: n("5K6I"),
                                momentLocale: ""
                            },
                            e = n("PszG").mergeConfig("locale") || {},
                            r = "function" == typeof e.default ? e.default() : e.default;
                        t = "undefined" != typeof localStorage && localStorage.getItem("umi_locale") && C[localStorage.getItem("umi_locale")] ? C[localStorage.getItem("umi_locale")] : "undefined" != typeof navigator && C[navigator.language] ? C[navigator.language] : C[r] ? C[r] : C["en-US"] || t, window.g_lang = t.locale, window.g_langSeparator = "-", t.data && Object(O.addLocaleData)(t.data);
                        var a = typeof e.messages;
                        if ("object" === a || "function" === a) {
                            var o = "object" === a ? e.messages[t.locale] : e.messages()[t.locale];
                            Object.assign(t.messages, o || {})
                        }
                        return t
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            e = this.getAppLocale(),
                            r = e.locale.split("-").join("-"),
                            a = {
                                locale: r,
                                reloadAppLocale: this.reloadAppLocale
                            },
                            o = this.props.children;
                        o = m.a.createElement(O.IntlProvider, {
                            locale: r,
                            messages: e.messages
                        }, m.a.createElement(S, null, m.a.createElement(O.LangContext.Provider, {
                            value: a
                        }, m.a.createElement(O.LangContext.Consumer, null, function(e) {
                            return Object(O._setLocaleContext)(e), t.props.children
                        }))));
                        var c = _.b,
                            i = "".concat(g.a || "").split("."),
                            u = v()(i, 2),
                            s = u[0],
                            p = u[1];
                        if (Number(s) > 3 || Number(s) >= 3 && Number(p) >= 21) try {
                            c = n("wEI+").default
                        } catch (t) {}
                        return m.a.createElement(c, {
                            locale: e.antd ? e.antd.default || e.antd : T
                        }, o)
                    }
                }]), r
            }(m.a.Component),
            M = n("Hg0r");

        function N(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else n = r.apply(this, arguments);
                return p()(this, n)
            }
        }
        n.d(e, "routes", function() {
            return I
        }), n.d(e, "default", function() {
            return D
        });
        var L = M.d.ConnectedRouter,
            I = [{
                path: "/maintain",
                component: Object(M.b)({
                    component: function() {
                        return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(5)]).then(n.bind(null, "3c5R"))
                    }
                }),
                exact: !0
            }, {
                path: "/",
                component: Object(M.b)({
                    component: function() {
                        return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(6)]).then(n.bind(null, "aArQ"))
                    }
                }),
                routes: [{
                    path: "/",
                    name: "",
                    exact: !0,
                    component: Object(M.b)({
                        component: function() {
                            return Promise.all([n.e(1), n.e(3), n.e(4), n.e(0), n.e(2), n.e(33)]).then(n.bind(null, "4EvU"))
                        }
                    })
                }, {
                    path: "/trade.html",
                    name: "trading page",
                    component: Object(M.b)({
                        component: function() {
                            return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(69)]).then(n.bind(null, "ieR6"))
                        }
                    }),
                    exact: !0
                }, {
                    path: "/trade/:mode",
                    name: "trading page",
                    component: Object(M.b)({
                        component: function() {
                            return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(69)]).then(n.bind(null, "ieR6"))
                        }
                    }),
                    exact: !0
                }, {
                    path: "/margin",
                    name: "margin page",
                    redirect: "/margin/easy",
                    exact: !0
                }, {
                    path: "/margin/:mode",
                    name: "margin page",
                    component: Object(M.b)({
                        component: function() {
                            return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(70)]).then(n.bind(null, "h8Zu"))
                        }
                    }),
                    exact: !0
                }, {
                    path: "/mobileApp",
                    name: "download page",
                    component: Object(M.b)({
                        component: function() {
                            return Promise.all([n.e(1), n.e(0), n.e(2), n.e(14)]).then(n.bind(null, "KcQA"))
                        }
                    }),
                    exact: !0
                }, {
                    path: "/auth",
                    component: Object(M.b)({
                        component: function() {
                            return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(19)]).then(n.bind(null, "EjWP"))
                        }
                    }),
                    authorized: "no-auth",
                    Routes: [n("pvMe").default],
                    routes: [{
                        path: "/auth/signin",
                        name: "header.signin",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(20)]).then(n.bind(null, "51nA"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/auth/signup",
                        name: "header.signup",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(21)]).then(n.bind(null, "9kwM"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/auth/reset-password",
                        name: "auth.resetPwd",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(23)]).then(n.bind(null, "NnuR"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/auth/forget-password",
                        name: "auth.forgetPwd",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(18)]).then(n.bind(null, "9aZH"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/auth/rgvalid",
                        name: "auth.title.register_validate",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(0), n.e(2), n.e(22)]).then(n.bind(null, "lzLd"))
                            }
                        }),
                        exact: !0
                    }]
                }, {
                    path: "/ucenter",
                    authorized: "auth",
                    Routes: [n("pvMe").default],
                    routes: [{
                        path: "/ucenter/profile",
                        name: "header.user_center",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(82)]).then(n.bind(null, "Ybz2"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/ucenter/change-password",
                        name: "ucenter.change_password.title",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(76)]).then(n.bind(null, "tDCd"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/ucenter/google-auth",
                        name: "ucenter.google_auth.open.title",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(79)]).then(n.bind(null, "ckIw"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/ucenter/id-auth",
                        name: "ucenter.index.features.kyc",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(80)]).then(n.bind(null, "x9XR"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/ucenter/bind-phone",
                        name: "ucenter.index.features.mobile",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(75)]).then(n.bind(null, "ie0A"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/ucenter/change-phone",
                        name: "ucenter.index.features.mobile",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(77)]).then(n.bind(null, "+o6t"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/ucenter/openapi",
                        name: "ucenter.api.title",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(74)]).then(n.bind(null, "ZepQ"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/ucenter/phishing",
                        name: "ucenter.features.phishing",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(81)]).then(n.bind(null, "+Ifj"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/ucenter/frozen",
                        name: "ucenter.features.frozen",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(78)]).then(n.bind(null, "/jUh"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/ucenter/sub-account",
                        name: "ucenter.features.frozen",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(83)]).then(n.bind(null, "hOHX"))
                            }
                        }),
                        exact: !0
                    }]
                }, {
                    path: "/uassets",
                    authorized: "auth",
                    Routes: [n("pvMe").default],
                    routes: [{
                        path: "/uassets/balances",
                        name: "header.asset.my",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(4), n.e(0), n.e(2), n.e(15)]).then(n.bind(null, "T/at"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/uassets/withdraw-address",
                        name: "user.title.address_manage",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(17)]).then(n.bind(null, "xOSY"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/uassets/record",
                        name: "header.fund_record",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(16)]).then(n.bind(null, "DiMc"))
                            }
                        }),
                        exact: !0
                    }]
                }, {
                    path: "/orders",
                    authorized: "auth",
                    Routes: [n("pvMe").default],
                    component: Object(M.b)({
                        component: function() {
                            return n.e(2).then(n.bind(null, "5+AO"))
                        }
                    }),
                    routes: [{
                        path: "/orders/coins",
                        name: "order.title.historic",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(60)]).then(n.bind(null, "lv/G"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/orders/margin",
                        name: "order.title.historic",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(62)]).then(n.bind(null, "9LDS"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/orders/etfIndex",
                        name: "etfIndex.orders.title",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(61)]).then(n.bind(null, "H8Jx"))
                            }
                        }),
                        exact: !0
                    }]
                }, {
                    path: "/invite",
                    authorized: "auth",
                    Routes: [n("pvMe").default],
                    routes: [{
                        path: "/invite/rebate",
                        name: "invite.rebate.title",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(43)]).then(n.bind(null, "+Lb1"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/invite/rebateLog",
                        name: "invite.title.rebate-list",
                        authorized: "auth",
                        Routes: [n("pvMe").default],
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(44)]).then(n.bind(null, "ZXCF"))
                            }
                        }),
                        exact: !0
                    }]
                }, {
                    path: "/financing",
                    component: Object(M.b)({
                        component: function() {
                            return n.e(28).then(n.bind(null, "5r3y"))
                        }
                    }),
                    routes: [{
                        path: "/financing/list",
                        name: "header.financing",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(4), n.e(0), n.e(2), n.e(29)]).then(n.bind(null, "Tw6j"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/financing/detail/:id",
                        name: "common.title.product_detail",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(4), n.e(0), n.e(2), n.e(26)]).then(n.bind(null, "uhWp"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/financing/history",
                        name: "header.my_financial",
                        authorized: "auth",
                        Routes: [n("pvMe").default],
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(27)]).then(n.bind(null, "nVRe"))
                            }
                        }),
                        exact: !0
                    }]
                }, {
                    path: "/pos",
                    component: Object(M.b)({
                        component: function() {
                            return n.e(64).then(n.bind(null, "iZDA"))
                        }
                    }),
                    routes: [{
                        path: "/pos/list",
                        name: "pos.title.nav",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(65)]).then(n.bind(null, "LYDj"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/pos/detail/:currency",
                        authorized: "auth",
                        Routes: [n("pvMe").default],
                        name: "pos.title.my_pos_record",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(4), n.e(0), n.e(2), n.e(63)]).then(n.bind(null, "csEm"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/pos/record",
                        name: "pos.title.nav",
                        authorized: "auth",
                        Routes: [n("pvMe").default],
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(66)]).then(n.bind(null, "38hG"))
                            }
                        }),
                        exact: !0
                    }]
                }, {
                    path: "/mx-defi",
                    component: Object(M.b)({
                        component: function() {
                            return n.e(56).then(n.bind(null, "BneU"))
                        }
                    }),
                    routes: [{
                        path: "/mx-defi/list",
                        name: "finance.title.nav",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(57)]).then(n.bind(null, "8KDj"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/mx-defi/detail/:currency",
                        authorized: "auth",
                        Routes: [n("pvMe").default],
                        name: "pos.title.my_pos_record",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(4), n.e(0), n.e(2), n.e(55)]).then(n.bind(null, "Y2db"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/mx-defi/record",
                        name: "pos.title.nav",
                        authorized: "auth",
                        Routes: [n("pvMe").default],
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(58)]).then(n.bind(null, "Xssb"))
                            }
                        }),
                        exact: !0
                    }]
                }, {
                    path: "/spaceM",
                    component: Object(M.b)({
                        component: function() {
                            return Promise.all([n.e(1), n.e(3), n.e(0), n.e(46)]).then(n.bind(null, "71kr"))
                        }
                    }),
                    routes: [{
                        path: "/spaceM/list",
                        name: "common.title.labs",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(47)]).then(n.bind(null, "f+3k"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/spaceM/detail/:id",
                        name: "common.title.project_detail",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(45)]).then(n.bind(null, "YgaY"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/spaceM/record",
                        name: "labs.title.my_record",
                        authorized: "auth",
                        Routes: [n("pvMe").default],
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(48)]).then(n.bind(null, "rWhi"))
                            }
                        }),
                        exact: !0
                    }]
                }, {
                    path: "/voting",
                    routes: [{
                        path: "/voting/list",
                        name: "voting.index.nav2",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(86)]).then(n.bind(null, "FJ3Y"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/voting/detail/:id",
                        name: "common.title.project_detail",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(85)]).then(n.bind(null, "ZE+R"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/voting/record",
                        name: "voting.index.mine_voting.btn",
                        authorized: "auth",
                        Routes: [n("pvMe").default],
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(87)]).then(n.bind(null, "Kfi0"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/voting/govern",
                        name: "votingGovern.index.title",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(84)]).then(n.bind(null, "iOBp"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/voting/recharge",
                        name: "voting.index.nav",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(89)]).then(n.bind(null, "MM7e"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/voting/ranking",
                        name: "",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(88)]).then(n.bind(null, "pLio"))
                            }
                        }),
                        exact: !0
                    }]
                }, {
                    path: "/info",
                    routes: [{
                        path: "/info/about-us",
                        name: "home.title.footer_link_about",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(0), n.e(2), n.e(34)]).then(n.bind(null, "u7oI"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/info/terms",
                        name: "home.title.footer_link_terms",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(0), n.e(2), n.e(41)]).then(n.bind(null, "bmEi"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/info/privacy",
                        name: "home.title.footer_link_privacy",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(0), n.e(2), n.e(39)]).then(n.bind(null, "ZVS8"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/info/fee",
                        name: "home.title.footer_link_fee",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(37)]).then(n.bind(null, "akBV"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/info/coins",
                        name: "footer.assets.intro",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(35)]).then(n.bind(null, "f9/A"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/info/contact",
                        name: "contact.title",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(36)]).then(n.bind(null, "nd//"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/info/risk",
                        name: "info.title.risk.title",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(0), n.e(2), n.e(40)]).then(n.bind(null, "xxON"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/info/vip",
                        name: "info.title.vip.title",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(42)]).then(n.bind(null, "5Eg6"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/info/margin-step",
                        name: "info.title.vip.title",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(38)]).then(n.bind(null, "mfD/"))
                            }
                        }),
                        exact: !0
                    }]
                }, {
                    path: "/about",
                    name: "home.title.footer_link_about",
                    component: Object(M.b)({
                        component: function() {
                            return Promise.all([n.e(1), n.e(0), n.e(2), n.e(34)]).then(n.bind(null, "u7oI"))
                        }
                    }),
                    exact: !0
                }, {
                    path: "/terms",
                    name: "home.title.footer_link_terms",
                    component: Object(M.b)({
                        component: function() {
                            return Promise.all([n.e(1), n.e(0), n.e(2), n.e(41)]).then(n.bind(null, "bmEi"))
                        }
                    }),
                    exact: !0
                }, {
                    path: "/fee",
                    name: "home.title.footer_link_fee",
                    component: Object(M.b)({
                        component: function() {
                            return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(37)]).then(n.bind(null, "akBV"))
                        }
                    }),
                    exact: !0
                }, {
                    path: "/vip",
                    name: "info.title.vip.title",
                    component: Object(M.b)({
                        component: function() {
                            return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(42)]).then(n.bind(null, "5Eg6"))
                        }
                    }),
                    exact: !0
                }, {
                    path: "/tutorial",
                    name: "header.title.new-fish",
                    component: Object(M.b)({
                        component: function() {
                            return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(73)]).then(n.bind(null, "nfQ7"))
                        }
                    }),
                    exact: !0
                }, {
                    path: "/activity",
                    routes: [{
                        path: "/activity/fork-conversion",
                        name: "",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(10)]).then(n.bind(null, "6Idr"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/activity/customer-mission",
                        name: "",
                        authorized: "auth",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(9)]).then(n.bind(null, "/kIA"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/activity/fork-conversion/record",
                        name: "",
                        authorized: "auth",
                        Routes: [n("pvMe").default],
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(11)]).then(n.bind(null, "8XC4"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/activity/eth-staking",
                        name: "",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(12)]).then(n.bind(null, "jRt9"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/activity/eth-staking/record",
                        name: "",
                        authorized: "auth",
                        Routes: [n("pvMe").default],
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(13)]).then(n.bind(null, "lrfb"))
                            }
                        }),
                        exact: !0
                    }]
                }, {
                    path: "/mDay",
                    routes: [{
                        path: "/mDay/main",
                        name: "common.title.mday",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(50)]).then(n.bind(null, "brTE"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/mDay/detail/:id",
                        name: "common.title.project_detail",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(49)]).then(n.bind(null, "16KN"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/mDay/record",
                        name: "labs.title.my_record",
                        authorized: "auth",
                        Routes: [n("pvMe").default],
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(51)]).then(n.bind(null, "sACh"))
                            }
                        }),
                        exact: !0
                    }]
                }, {
                    path: "/tutorial",
                    routes: [{
                        path: "/tutorial/main",
                        name: "header.title.new-fish",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(72)]).then(n.bind(null, "U5Xa"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/tutorial/etf",
                        name: "header.title.new-fish",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(4), n.e(0), n.e(2), n.e(71)]).then(n.bind(null, "0IN5"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/tutorial/school",
                        name: "header.title.new-fish",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(73)]).then(n.bind(null, "nfQ7"))
                            }
                        }),
                        exact: !0
                    }]
                }, {
                    path: "/cloud",
                    name: "cloud.title.nav",
                    component: Object(M.b)({
                        component: function() {
                            return Promise.all([n.e(1), n.e(0), n.e(2), n.e(24)]).then(n.bind(null, "e3qL"))
                        }
                    }),
                    exact: !0
                }, {
                    path: "/etfIndex",
                    name: "etfIndex.header.title",
                    component: Object(M.b)({
                        component: function() {
                            return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(25)]).then(n.bind(null, "NcDk"))
                        }
                    }),
                    exact: !0
                }, {
                    path: "/hashrate",
                    name: "mc_clound_mining_place",
                    routes: [{
                        path: "/hashrate/list",
                        name: "mc_clound_mining",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(31)]).then(n.bind(null, "qY7L"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/hashrate/detail/:id",
                        name: "mc_clound_mining",
                        authorized: "auth",
                        Routes: [n("pvMe").default],
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(30)]).then(n.bind(null, "rICT"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/hashrate/record",
                        name: "mc_clound_mining",
                        authorized: "auth",
                        Routes: [n("pvMe").default],
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(32)]).then(n.bind(null, "MjJ5"))
                            }
                        }),
                        exact: !0
                    }]
                }, {
                    path: "/miningMachine",
                    name: "mc_clound_mining_market",
                    routes: [{
                        path: "/miningMachine/list",
                        name: "mc_clound_mining_market",
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(53)]).then(n.bind(null, "rIeW"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/miningMachine/detail/:id",
                        name: "mc_clound_mining_market",
                        authorized: "auth",
                        Routes: [n("pvMe").default],
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(52)]).then(n.bind(null, "6WCq"))
                            }
                        }),
                        exact: !0
                    }, {
                        path: "/miningMachine/record",
                        name: "mc_clound_mining_market",
                        authorized: "auth",
                        Routes: [n("pvMe").default],
                        component: Object(M.b)({
                            component: function() {
                                return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(54)]).then(n.bind(null, "+xhK"))
                            }
                        }),
                        exact: !0
                    }]
                }, {
                    path: "/official-verify",
                    name: "mc_official_verify_title",
                    component: Object(M.b)({
                        component: function() {
                            return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(59)]).then(n.bind(null, "5TDK"))
                        }
                    }),
                    exact: !0
                }, {
                    path: "/test",
                    component: Object(M.b)({
                        component: function() {
                            return Promise.all([n.e(1), n.e(3), n.e(0), n.e(2), n.e(67)]).then(n.bind(null, "Bilc"))
                        }
                    }),
                    exact: !0
                }, {
                    path: "/test1",
                    component: Object(M.b)({
                        component: function() {
                            return n.e(68).then(n.bind(null, "0x4O"))
                        }
                    }),
                    exact: !0
                }, {
                    component: Object(M.b)({
                        component: function() {
                            return Promise.all([n.e(1), n.e(3), n.e(0), n.e(8)]).then(n.bind(null, "w2l6"))
                        }
                    }),
                    exact: !0
                }]
            }];
        window.g_routes = I;
        var A = n("PszG");
        A.applyForEach("patchRoutes", {
            initialValue: I
        });
        var D = function(t) {
            u()(n, t);
            var e = N(n);

            function n(t) {
                var r;

                function o(t, e) {
                    A.applyForEach("onRouteChange", {
                        initialValue: {
                            routes: I,
                            location: t,
                            action: e
                        }
                    })
                }
                return a()(this, n), (r = e.call(this, t)).unListen = y.default.listen(o), y.default.listen.toString().indexOf("callback(history.location, history.action)") > -1 || o(y.default.location), r
            }
            return c()(n, [{
                key: "unListen",
                value: function() {}
            }]), c()(n, [{
                key: "componentWillUnmount",
                value: function() {
                    this.unListen()
                }
            }, {
                key: "render",
                value: function() {
                    var t = this.props || {};
                    return m.a.createElement(E, null, m.a.createElement(L, {
                        history: y.default
                    }, b()(I, t)))
                }
            }]), n
        }(m.a.Component)
    },
    j9m8: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("p0pE"),
            a = n.n(r),
            o = n("6kh5");
        e.default = {
            namespace: "wsStatus",
            state: {
                connectState: "",
                delayTime: 0
            },
            effects: {},
            reducers: {
                setConnectState: function(t, e) {
                    return a()({}, t, {
                        connectState: e.payload
                    })
                },
                setDelayTime: function(t, e) {
                    return a()({}, t, {
                        delayTime: e.payload
                    })
                }
            },
            subscriptions: {
                socket: function(t) {
                    var e = t.dispatch;
                    return Object(o.b)(function(t) {
                        e(t)
                    })
                }
            }
        }
    },
    oxDv: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return u
        }), n.d(e, "b", function() {
            return p
        });
        var r = n("d6i3"),
            a = n.n(r),
            o = n("1l/V"),
            c = n.n(o),
            i = "https://mexccommonconfig.oss-accelerate.aliyuncs.com/web/mxcweb.json";

        function u() {
            return s.apply(this, arguments)
        }

        function s() {
            return (s = c()(a.a.mark(function t() {
                var e;
                return a.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (!window.SITESDATA) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return", window.SITESDATA);
                        case 2:
                            return e = Date.parse(new Date), t.abrupt("return", fetch("".concat(i, "?v=").concat(e)).then(function(t) {
                                return t.json()
                            }).then(function(t) {
                                return window.SITESDATA = t, t
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }

        function p() {
            return l.apply(this, arguments)
        }

        function l() {
            return (l = c()(a.a.mark(function t() {
                var e, n;
                return a.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, u();
                        case 2:
                            return e = t.sent, n = "".concat("/api".replace("/api", ""), "/ucenter/api"), e && e.ucenter_sites && e.ucenter_sites[0] && (n = e.ucenter_sites[0]), t.abrupt("return", n);
                        case 6:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))).apply(this, arguments)
        }
    },
    pvMe: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("q1tI"),
            a = n.n(r),
            o = n("/MKj"),
            c = n("7Qib");
        e.default = Object(o.c)(function(t) {
            return {
                user: t.auth.user
            }
        })(function(t) {
            var e = t.route,
                n = t.location,
                o = t.user,
                i = t.children,
                u = e.authorized,
                s = Object(c.n)("uc_token");
            return Object(r.useEffect)(function() {
                if ((o.id || s) && "no-auth" === u && Object(c.q)(t), !o.id && !s && "auth" === u) {
                    var e = n.pathname,
                        r = n.search,
                        a = encodeURIComponent(e + (r || ""));
                    window.location.href = "/auth/signin?redirect=".concat(a)
                }
            }, [o.id, s]), "auth" === u && o.id || "no-auth" === u && !o.id ? a.a.createElement(a.a.Fragment, null, i) : null
        })
    },
    qIrL: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("gWZ8"),
            a = n.n(r),
            o = n("p0pE"),
            c = n.n(o),
            i = n("d6i3"),
            u = n.n(i),
            s = n("qIgq"),
            p = n.n(s),
            l = n("Y/ft"),
            f = n.n(l),
            d = n("i1Ax"),
            m = (n("7Qib"), n("dCQc")),
            h = {
                1: "margin.title.risk_1",
                2: "margin.title.risk_2",
                3: "margin.title.risk_3"
            };
        e.default = {
            namespace: "margin",
            state: {
                accounts: [],
                safety: {
                    cryptoCurrency: "",
                    marginAppdLine: 0,
                    marginAssetQty: 0,
                    marginCrncy: " ",
                    marginGroupNo: "0",
                    marginLeverRatio: 0,
                    marginQty: 0,
                    marginStopLine: 0,
                    marginWarnLine: 0,
                    safeRatio: 2,
                    safetyText: "margin.title.risk_1",
                    safeRatioStatus: "1",
                    totalAssetQty: 0,
                    updateTimes: "0"
                },
                account: {
                    currencyAsset: {
                        borrow: 0,
                        interest: 0,
                        name: "BTC",
                        total: 0
                    },
                    liquidationPrice: "0",
                    marketAsset: {
                        borrow: 0,
                        interest: 0,
                        name: "USDT",
                        total: 0
                    },
                    stopLine: "0",
                    riskRate: "0"
                },
                openAccounts: [],
                orders: [],
                triggerOrders: [],
                quantityScale: "",
                lastPair: "",
                currentPairBalance: {},
                currentPair: {},
                collapse: !1,
                marginType: "cross",
                isRegist: !1
            },
            effects: {
                getMarginBalance: u.a.mark(function t(e, n) {
                    var r, a, o, c, i, s, l, d, h, b, y, g, w, v;
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = e.payload, a = n.call, o = n.put, n.select, t.next = 4, a(m.nd, {
                                    accountType: r.accountType,
                                    symbol: r.symbol
                                });
                            case 4:
                                return c = t.sent, c.code, c.msg, i = f()(c, ["code", "msg"]), s = r.symbol.split("_"), l = p()(s, 2), d = l[0], h = l[1], b = i.data.find(function(t) {
                                    return t.accountName === r.symbol.replace("_", "/")
                                }) || {
                                    assetItem: [],
                                    accountName: "",
                                    stopOutPrice: "0",
                                    stopLine: "--",
                                    withdrawLine: "--",
                                    riskRate: "0",
                                    btcAmount: "0",
                                    usdtAmount: "0",
                                    cynAmount: "0"
                                }, (y = {}).btcAmount = b.btcAmount, y.usdtAmount = b.usdtAmount, y.cynAmount = b.cynAmount, y[d] = b.currencyAsset || {
                                    available: "0"
                                }, y[h] = b.marketAsset || {
                                    available: "0"
                                }, t.next = 16, o({
                                    type: "saveMarginBalance",
                                    payload: {
                                        balances: y
                                    }
                                });
                            case 16:
                                return g = b.currencyAsset || {}, w = b.marketAsset || {}, v = b.accountName ? b.accountName : r.symbol.replace("_", "/"), t.next = 21, o({
                                    type: "setMarginAccount",
                                    payload: {
                                        data: {
                                            currencyAsset: {
                                                borrow: g.borrow,
                                                interest: g.interest,
                                                name: g.name,
                                                total: g.total
                                            },
                                            liquidationPrice: b.stopOutPrice,
                                            marketAsset: {
                                                borrow: w.borrow,
                                                interest: w.interest,
                                                name: w.name,
                                                total: w.total
                                            },
                                            btcAmount: b.btcAmount,
                                            netBtcAmount: b.netBtcAmount,
                                            riskRate: b.riskRate,
                                            stopLine: b.stopLine,
                                            usdtAmount: b.usdtAmount,
                                            cynAmount: b.cynAmount,
                                            withdrawLine: b.withdrawLine
                                        },
                                        symbol: v
                                    }
                                });
                            case 21:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }),
                getMarginAccounts: u.a.mark(function t(e, n) {
                    var r, a, o, c, i;
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = e.payload, a = n.call, o = n.put, n.select, t.next = 4, a(m.md, {
                                    accountType: "STEP",
                                    symbol: r.symbol
                                });
                            case 4:
                                if (c = t.sent, i = c.data, 200 !== c.code) {
                                    t.next = 9;
                                    break
                                }
                                return t.next = 9, o({
                                    type: "setMarginAccounts",
                                    payload: i
                                });
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }),
                getMarginOrder: u.a.mark(function t(e, n) {
                    var r, a, o, c, i, s, p;
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = e.payload, a = n.call, o = n.put, n.select, t.next = 4, a(m.fd, r);
                            case 4:
                                if (c = t.sent, i = c.data, s = c.code, p = i.resultList, 200 !== s) {
                                    t.next = 10;
                                    break
                                }
                                return t.next = 10, o({
                                    type: "setOrders",
                                    payload: {
                                        data: p
                                    }
                                });
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }),
                getMarginTriggerOrder: u.a.mark(function t(e, n) {
                    var r, a, o, c, i, s;
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = e.payload, a = n.call, o = n.put, n.select, t.next = 4, a(m.jd, r);
                            case 4:
                                if (c = t.sent, i = c.data, 200 !== c.code) {
                                    t.next = 10;
                                    break
                                }
                                return s = i.resultList, t.next = 10, o({
                                    type: "setTriggerOrders",
                                    payload: {
                                        data: s
                                    }
                                });
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                })
            },
            reducers: {
                setSafety: function(t, e) {
                    var n = e.payload;
                    return n.safetyText = h[n.safeRatioStatus] || "margin.title.risk_1", c()({}, t, {
                        safety: n
                    })
                },
                setMarginAccount: function(t, e) {
                    var n = e.payload,
                        r = n.data,
                        a = n.symbol,
                        o = n.channel,
                        i = {};
                    return i = "".concat(t.currentPair.currency).concat(o ? "_" : "/").concat(t.currentPair.market) === a ? c()({}, t.account, r) : c()({}, t.account), c()({}, t, {
                        account: i
                    })
                },
                setMarginAccounts: function(t, e) {
                    var n = e.payload,
                        r = a()(n);
                    return c()({}, t, {
                        accounts: r
                    })
                },
                setOrders: function(t, e) {
                    var n = (e.payload.data || []).map(function(t) {
                        var e = t.symbol.split("_");
                        return c()({}, t, {
                            currency: e[0],
                            market: e[1]
                        })
                    });
                    return c()({}, t, {
                        orders: n
                    })
                },
                setPushOrders: function(t, e) {
                    var n = e.payload,
                        r = t.orders,
                        o = t.currentPair,
                        i = o.market,
                        u = o.currency,
                        s = n,
                        p = s.symbol.split("_");
                    if (window.localStorage.getItem("mxc.trade.only_show_current_pair") && (u !== p[0] || i !== p[1])) return t;
                    var l = a()(r),
                        f = 0 === Number(s.quantity) || 0 === Number(s.remainQuantity) || "CANCELED" === s.status || "PARTIALLY_CANCELED" === s.status || "FILLED" === s.status,
                        d = r.findIndex(function(t) {
                            return t.orderNo === s.orderNo
                        }),
                        m = c()({}, s, {
                            currency: p[0],
                            market: p[1]
                        });
                    return d >= 0 ? f ? l.splice(d, 1) : l[d] = c()({}, l[d], m) : f || l.unshift(m), c()({}, t, {
                        orders: l
                    })
                },
                saveMarginBalance: function(t, e) {
                    var n = e.payload;
                    return c()({}, t, {
                        currentPairBalance: n || {}
                    })
                },
                setCurrentPair: function(t, e) {
                    var n = e.payload;
                    return c()({}, t, {
                        currentPair: n || {}
                    })
                },
                setRegist: function(t, e) {
                    var n = e.payload;
                    return c()({}, t, {
                        isRegist: n
                    })
                },
                setLastPair: function(t, e) {
                    var n = e.payload;
                    return c()({}, t, {
                        lastPair: n
                    })
                },
                toggleCollapse: function(t) {
                    return c()({}, t, {
                        collapse: !t.collapse
                    })
                },
                setMarginType: function(t, e) {
                    var n = e.payload;
                    return c()({}, t, {
                        marginType: n
                    })
                },
                setMarginOpenAccounts: function(t, e) {
                    var n = e.payload;
                    return c()({}, t, {
                        openAccounts: n
                    })
                },
                setTriggerOrders: function(t, e) {
                    var n = e.payload.data.map(function(t) {
                        var e = t.symbol.split("_"),
                            n = Number(t.price) * Number(t.quantity);
                        return c()({}, t, {
                            currency: e[0],
                            market: e[1],
                            amount: n
                        })
                    });
                    return c()({}, t, {
                        triggerOrders: n
                    })
                },
                setPushTriggerOrders: function(t, e) {
                    var n = e.payload,
                        r = t.triggerOrders,
                        o = t.currentPair,
                        i = o.market,
                        u = n;
                    if (o.currency !== u.currency || i !== u.market) return t;
                    var s = a()(r),
                        p = r.findIndex(function(t) {
                            return t.orderNo === u.id
                        }),
                        l = Number(u.price) * Number(u.quantity),
                        f = c()({}, u, {
                            amount: l,
                            orderNo: u.id
                        });
                    return p >= 0 ? "NEW" !== u.state && s.splice(p, 1) : "NEW" === u.state && s.unshift(f), c()({}, t, {
                        triggerOrders: s
                    })
                }
            },
            subscriptions: {
                socket: function(t) {
                    var e = t.dispatch;
                    return Object(d.b)(function(t) {
                        var n = t.type,
                            r = t.payload;
                        e({
                            type: n,
                            payload: r
                        })
                    })
                }
            }
        }
    },
    xg5P: function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "_onCreate", function() {
            return x
        }), n.d(e, "getApp", function() {
            return k
        }), n.d(e, "_DvaContainer", function() {
            return O
        });
        var r = n("2Taf"),
            a = n.n(r),
            o = n("vZ4D"),
            c = n.n(o),
            i = n("MhPg"),
            u = n.n(i),
            s = n("l4Ni"),
            p = n.n(s),
            l = n("ujKo"),
            f = n.n(l),
            d = n("p0pE"),
            m = n.n(d),
            h = n("Hg0r"),
            b = n("q1tI"),
            y = n("0Wa5"),
            g = n.n(y),
            w = n("RFCh");

        function v(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = f()(t);
                if (e) {
                    var a = f()(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else n = r.apply(this, arguments);
                return p()(this, n)
            }
        }
        var _ = null;

        function x() {
            var t = n("PszG").mergeConfig("dva");
            return (_ = Object(h.a)(m()({
                history: w.default
            }, t.config || {}, window.g_useSSR ? {
                initialState: window.g_initialData
            } : {}))).use(g()()), (t.plugins || []).forEach(function(t) {
                _.use(t)
            }), _.model(m()({
                namespace: "assets"
            }, n("bFNV").default)), _.model(m()({
                namespace: "auth"
            }, n("dX6P").default)), _.model(m()({
                namespace: "etfIndex"
            }, n("btD+").default)), _.model(m()({
                namespace: "financing"
            }, n("AKFz").default)), _.model(m()({
                namespace: "global"
            }, n("F03t").default)), _.model(m()({
                namespace: "margin"
            }, n("qIrL").default)), _.model(m()({
                namespace: "setting"
            }, n("1d6M").default)), _.model(m()({
                namespace: "trading"
            }, n("98iA").default)), _.model(m()({
                namespace: "transfer"
            }, n("8r5T").default)), _.model(m()({
                namespace: "wsStatus"
            }, n("j9m8").default)), _
        }

        function k() {
            return _
        }
        var O = function(t) {
            u()(n, t);
            var e = v(n);

            function n() {
                return a()(this, n), e.apply(this, arguments)
            }
            return c()(n, [{
                key: "render",
                value: function() {
                    var t = this,
                        e = k();
                    return e.router(function() {
                        return t.props.children
                    }), e.start()()
                }
            }]), n
        }(b.Component)
    }
});
