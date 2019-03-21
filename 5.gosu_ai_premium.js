(window.webpackJsonp = window.webpackJsonp || []).push([[5], {
    "+ofC": function(n, l, e) {
        "use strict";
        var t = e("CcnG"),
            a = e("O5jI"),
            i = e("ugZo"),
            u = e("/hnu"),
            r = e("Gqqv"),
            o = e("lTbF"),
            s = e("ZYCi"),
            c = e("Ip0R"),
            d = e("A7o+"),
            p = function() {
                return function() {
                    this.isCollapsed = !1, this.onIsCollapsedChanged = new t.EventEmitter
                }
            }(),
            _ = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".stats__expand[_ngcontent-%COMP%]{left:0;bottom:0;width:100%;height:100%;display:none;position:absolute;align-items:flex-end;box-sizing:border-box;justify-content:center;padding-bottom:30px;background:linear-gradient(180deg,rgba(0,0,0,0) 0,#171717 85%)}.stats__expand-isShown[_ngcontent-%COMP%]{display:flex}.stats__collapse[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:20px;padding-bottom:20px}.stats__collapse-isHidden[_ngcontent-%COMP%]{display:none}.stats__toggle-collapse[_ngcontent-%COMP%], .stats__toggle-expand[_ngcontent-%COMP%]{font-size:16px;font-weight:700;line-height:40px;text-transform:none}"]],
                data: {}
            });
        function f(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 12, "div", [["class", "stats"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 5, "div", [["class", "stats__expand"]], null, null, null, null, null)), t["\u0275did"](2, 278528, null, 0, c.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](3, {
                "stats__expand-isShown": 0
            }), (n()(), t["\u0275eld"](4, 0, null, null, 2, "button", [["class", "stats__toggle-collapse btn btn_primary btn_rounded"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0,
                    a = n.component;
                return "click" === l && (t = !1 !== a.onIsCollapsedChanged.emit(a.isCollapsed = !a.isCollapsed) && t), t
            }, null, null)), (n()(), t["\u0275ted"](5, null, [" ", " "])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](7, 0, null, null, 5, "div", [["class", "stats__collapse"]], null, null, null, null, null)), t["\u0275did"](8, 278528, null, 0, c.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](9, {
                "stats__collapse-isHidden": 0
            }), (n()(), t["\u0275eld"](10, 0, null, null, 2, "button", [["class", "stats__toggle-collapse btn btn_primary btn_rounded"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0,
                    a = n.component;
                return "click" === l && (t = !1 !== a.onIsCollapsedChanged.emit(a.isCollapsed = !a.isCollapsed) && t), t
            }, null, null)), (n()(), t["\u0275ted"](11, null, [" ", " "])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], function(n, l) {
                var e = l.component,
                    t = n(l, 3, 0, e.isCollapsed);
                n(l, 2, 0, "stats__expand", t);
                var a = n(l, 9, 0, e.isCollapsed);
                n(l, 8, 0, "stats__collapse", a)
            }, function(n, l) {
                n(l, 5, 0, t["\u0275unv"](l, 5, 0, t["\u0275nov"](l, 6).transform("MATCH.SHOW_DETAILS"))), n(l, 11, 0, t["\u0275unv"](l, 11, 0, t["\u0275nov"](l, 12).transform("MATCH.CLOSE_DETAILS")))
            })
        }
        var g = e("YI7S"),
            m = function() {
                function n(n) {
                    this.match = n, this.isCollapsed = !0
                }
                return Object.defineProperty(n.prototype, "matchData", {
                    get: function() {
                        return this.match.matchData$.getValue().match
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.onIsCollapsedChanged = function(n) {
                    this.isCollapsed = n
                }, n
            }(),
            h = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".summary__wrapper[_ngcontent-%COMP%]{position:relative;width:1024px;height:690px;border-bottom:1px solid #3b3b3b;transition:height .3s ease-in-out;margin:20px auto 0}.summary__wrapper_hidden[_ngcontent-%COMP%]{overflow:hidden;height:260px}"]],
                data: {}
            });
        function v(n) {
            return t["\u0275vid"](2, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "div", [["class", "summary__wrapper"]], [[2, "summary__wrapper_hidden", null]], null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 1, "gosu-match-stats", [], null, null, null, r.b, r.a)), t["\u0275did"](2, 573440, null, 0, o.a, [s.Router, t.ChangeDetectorRef], {
                data: [0, "data"],
                matchData: [1, "matchData"]
            }, null), (n()(), t["\u0275eld"](3, 0, null, null, 1, "gosu-collapsed-button", [], null, [[null, "onIsCollapsedChanged"]], function(n, l, e) {
                var t = !0;
                return "onIsCollapsedChanged" === l && (t = !1 !== n.component.onIsCollapsedChanged(e) && t), t
            }, f, _)), t["\u0275did"](4, 49152, null, 0, p, [], {
                isCollapsed: [0, "isCollapsed"]
            }, {
                onIsCollapsedChanged: "onIsCollapsedChanged"
            })], function(n, l) {
                var e = l.component;
                n(l, 2, 0, e.data.summary, e.matchData), n(l, 4, 0, e.isCollapsed)
            }, function(n, l) {
                n(l, 0, 0, l.component.isCollapsed)
            })
        }
        var x = e("Z/LD"),
            y = function() {
                function n() {
                    this.replacement = [{
                        expression: new RegExp("\\*\\*\\*([^*]+)\\*\\*\\*", "igm"),
                        replaceTo: '<span class="text-fail">$1</span>'
                    }, {
                        expression: new RegExp("\\*\\*([^*]+)\\*\\*", "igm"),
                        replaceTo: '<span class="text-yellow">$1</span>'
                    }, {
                        expression: new RegExp("\\*([^*]+)\\*", "igm"),
                        replaceTo: '<span class="text-success">$1</span>'
                    }]
                }
                return n.prototype.transform = function(n) {
                    return this.replacement.reduce(function(n, l) {
                        return n.replace(l.expression, l.replaceTo)
                    }, n)
                }, n
            }(),
            b = e("PZyQ"),
            O = e("Arey"),
            C = e("CMaV"),
            T = e("Km7r"),
            P = e("QoFZ"),
            M = e("26FU"),
            R = e("6kEK"),
            I = function() {
                function n(n) {
                    this.match = n, this.sectionMap = R.a, this.isCollapsed$ = new M.a(!1)
                }
                return Object.defineProperty(n.prototype, "data", {
                    set: function(n) {
                        this.isCollapsed$.next(n.summary.advice.length > 250), this.matchAdvice = n
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "matchInfo", {
                    get: function() {
                        var n = this.match.matchData$.getValue();
                        return {
                            matchId: n.match.match_id,
                            slot: n.match.slot
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.onIsCollapsedChanged = function(n) {
                    this.isCollapsed$.next(n)
                }, n
            }(),
            w = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".root[_ngcontent-%COMP%]{background-color:#080808;text-align:center;margin:30px auto 0;position:relative;color:#fff;width:100%;max-width:1024px}.root_hidden[_ngcontent-%COMP%]{overflow:hidden;height:260px}.advices[_ngcontent-%COMP%]{padding-top:25px}.advices__title[_ngcontent-%COMP%]{font-size:13px;letter-spacing:.1em;text-transform:uppercase;margin-bottom:17px;display:flex;justify-content:center;align-items:center}.advices__body[_ngcontent-%COMP%]{line-height:35px;font-size:30px;max-width:636px;width:100%;margin:0 auto 50px}.advices__footer[_ngcontent-%COMP%]{display:flex;align-items:center;height:44px;font-size:11px;padding:0 30px}.advices__icon[_ngcontent-%COMP%]{width:20px;height:20px;display:inline-block;margin:0 4px;border-radius:50%}"]],
                data: {}
            });
        function A(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "gosu-collapsed-button", [], null, [[null, "onIsCollapsedChanged"]], function(n, l, e) {
                var t = !0;
                return "onIsCollapsedChanged" === l && (t = !1 !== n.component.onIsCollapsedChanged(e) && t), t
            }, f, _)), t["\u0275did"](1, 49152, null, 0, p, [], {
                isCollapsed: [0, "isCollapsed"]
            }, {
                onIsCollapsedChanged: "onIsCollapsedChanged"
            }), t["\u0275pid"](131072, c.AsyncPipe, [t.ChangeDetectorRef])], function(n, l) {
                var e = l.component;
                n(l, 1, 0, t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 2).transform(e.isCollapsed$)))
            }, null)
        }
        function k(n) {
            return t["\u0275vid"](2, [t["\u0275pid"](0, x.a, []), t["\u0275pid"](0, y, []), (n()(), t["\u0275eld"](2, 0, null, null, 16, "section", [["class", "root"]], [[2, "root_hidden", null]], null, null, null, null)), t["\u0275pid"](131072, c.AsyncPipe, [t.ChangeDetectorRef]), (n()(), t["\u0275eld"](4, 0, null, null, 14, "div", [["class", "advices"]], null, null, null, null, null)), (n()(), t["\u0275eld"](5, 0, null, null, 6, "div", [["class", "advices__title"]], null, null, null, null, null)), (n()(), t["\u0275ted"](6, null, [" ", " "])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](8, 0, null, null, 1, "figure", [], [[8, "className", 0]], null, null, null, null)), t["\u0275ppd"](9, 2), (n()(), t["\u0275ted"](10, null, [" ", " "])), t["\u0275ppd"](11, 2), (n()(), t["\u0275eld"](12, 0, null, null, 1, "div", [["class", "advices__body"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275ppd"](13, 1), (n()(), t["\u0275and"](16777216, null, null, 1, null, A)), t["\u0275did"](15, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](16, 0, null, null, 2, "div", [["class", "advices__footer"]], null, null, null, null, null)), (n()(), t["\u0275eld"](17, 0, null, null, 1, "gosu-section-rate", [], null, null, null, b.c, b.a)), t["\u0275did"](18, 245760, null, 0, O.a, [C.a, T.a, P.a], {
                section: [0, "section"],
                matchInfo: [1, "matchInfo"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 15, 0, e.matchAdvice.summary.advice.length > 250), n(l, 18, 0, e.sectionMap.heroAdvice, e.matchInfo)
            }, function(n, l) {
                var e = l.component;
                n(l, 2, 0, t["\u0275unv"](l, 2, 0, t["\u0275nov"](l, 3).transform(e.isCollapsed$))), n(l, 6, 0, t["\u0275unv"](l, 6, 0, t["\u0275nov"](l, 7).transform("MATCH.GENERAL_ADVICE_FOR")));
                var a = t["\u0275inlineInterpolate"](1, "advices__icon icon-", t["\u0275unv"](l, 8, 0, n(l, 9, 0, t["\u0275nov"](l, 0), e.matchAdvice.summary.hero_id, "name")), "");
                n(l, 8, 0, a);
                var i = t["\u0275unv"](l, 10, 0, n(l, 11, 0, t["\u0275nov"](l, 0), e.matchAdvice.summary.hero_id, "localized_name"));
                n(l, 10, 0, i);
                var u = t["\u0275unv"](l, 12, 0, n(l, 13, 0, t["\u0275nov"](l, 1), e.matchAdvice.summary.advice));
                n(l, 12, 0, u)
            })
        }
        var D = e("iia2"),
            E = e("42t3"),
            S = e("unCD"),
            N = e("Sy1n"),
            L = function() {
                function n() {
                    this.stopFragment = N.b, this.section = R.a.laneDamage
                }
                return Object.defineProperty(n.prototype, "isSoloLane", {
                    get: function() {
                        return 1 === this.laningData.heroDamage.length
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "laningData", {
                    get: function() {
                        return this.data.summary
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "matchInfo", {
                    get: function() {
                        return {
                            matchId: this.matchData.match.match_id,
                            slot: this.matchData.match.slot
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.getHeroSlot = function(n) {
                    return function(l, e) {
                        for (var t = 0; t < l.length; t++)
                            if (l[t].hero_id === +n)
                                return t
                    }(this.matchData.match.players)
                }, n
            }(),
            H = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".laning[_ngcontent-%COMP%]{width:1024px;margin:30px auto 0;background-color:#080808;box-sizing:border-box}.laning__wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:20px 30px}.laning__wrapper[_ngcontent-%COMP%]   gosu-premium-content[_ngcontent-%COMP%]{width:100%}.laning__header[_ngcontent-%COMP%]{display:flex}.laning__heading[_ngcontent-%COMP%]{font-size:34px;color:#fff;margin:0;line-height:normal}.laning__supheader[_ngcontent-%COMP%]{font-size:13px;color:#fff;letter-spacing:.1em;text-transform:uppercase;line-height:normal;margin:0}.laning__supheader_faded[_ngcontent-%COMP%]{opacity:.5;letter-spacing:normal;margin-left:4px;padding-top:14px}.laning__subheader[_ngcontent-%COMP%]{line-height:25px;font-size:16px;color:#fff}.laning__col[_ngcontent-%COMP%]{display:flex;flex-direction:column}.laning__col_info[_ngcontent-%COMP%]{padding:0 20px 0 15px}.laning__col_total[_ngcontent-%COMP%]{text-align:center;padding-right:15px}.laning__col_detailed[_ngcontent-%COMP%]{flex-direction:row}.laning__col_hero[_ngcontent-%COMP%]{padding:0 15px}.laning__col_header[_ngcontent-%COMP%]{width:180px}.laning__text[_ngcontent-%COMP%]{font-size:16px;color:#fff;line-height:25px}.laning__text_cell[_ngcontent-%COMP%]{line-height:40px;font-size:13px;text-transform:uppercase}.laning__text_done[_ngcontent-%COMP%]{color:#5ae1a1}.laning__text_received[_ngcontent-%COMP%]{color:#d94118}.laning__text_large[_ngcontent-%COMP%]{line-height:40px;font-size:40px;font-weight:900;margin-top:10px}.laning__text_marg[_ngcontent-%COMP%]{margin-top:12px}.laning__text_padded[_ngcontent-%COMP%]{padding-right:50px}.laning__text_medium[_ngcontent-%COMP%]{font-size:20px;line-height:25px;margin-top:15px;color:#fff}.laning__text_between[_ngcontent-%COMP%]{padding:0 10px}.laning__avatar[_ngcontent-%COMP%]{width:31px;height:31px;border-radius:50%}.laning__helper[_ngcontent-%COMP%]{width:auto;height:auto;border-radius:50%;margin-bottom:5px}.laning__helper_link[_ngcontent-%COMP%]{border:3px solid #080808;transition:.2s ease-in-out;transition-property:border-color,transform,-webkit-transform;-webkit-transform:translateY(0);transform:translateY(0);cursor:pointer}.laning__helper_link[_ngcontent-%COMP%]:hover{-webkit-transform:translateY(-10px);transform:translateY(-10px);border-color:#53e29f}.laning__info[_ngcontent-%COMP%]{display:flex;flex-grow:2;justify-content:center}.laning__advice[_ngcontent-%COMP%]{width:245px}.laning__heroes[_ngcontent-%COMP%]{display:flex;align-items:center}.laning__total[_ngcontent-%COMP%]{display:flex}.laning__total[_ngcontent-%COMP%]   .laning__text_cell[_ngcontent-%COMP%]{margin-right:5px}.laning__total[_ngcontent-%COMP%]   .laning__text_large[_ngcontent-%COMP%]{margin-right:15px}.laning__rate[_ngcontent-%COMP%]{display:block;background-color:#000;padding:0 30px;color:#fff}.mock[_ngcontent-%COMP%]{position:relative}.mock__text[_ngcontent-%COMP%]{position:absolute;top:120px;left:360px;color:#fff}"]],
                data: {}
            });
        function F(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 11, "div", [["class", "laning__col laning__col_hero"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 6, "div", [["class", "laning__helper"]], null, [[null, "click"]], function(n, l, e) {
                var a = !0;
                return "click" === l && (a = !1 !== t["\u0275nov"](n, 2).onClick() && a), a
            }, null, null)), t["\u0275did"](2, 16384, null, 0, s.RouterLink, [s.Router, s.ActivatedRoute, [8, null], t.Renderer2, t.ElementRef], {
                fragment: [0, "fragment"],
                routerLink: [1, "routerLink"]
            }, null), t["\u0275pad"](3, 3), t["\u0275pid"](131072, D.LocalizeRouterPipe, [E.LocalizeRouterService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](5, 0, null, null, 2, "div", [["class", "laning__helper laning__helper_link"]], null, null, null, null, null)), (n()(), t["\u0275eld"](6, 0, null, null, 1, "div", [], [[8, "className", 0]], null, null, null, null)), t["\u0275ppd"](7, 2), (n()(), t["\u0275eld"](8, 0, null, null, 1, "div", [["class", "laning__text laning__text_cell"]], null, null, null, null, null)), (n()(), t["\u0275ted"](9, null, ["", ""])), (n()(), t["\u0275eld"](10, 0, null, null, 1, "div", [["class", "laning__text laning__text_cell laning__text_marg"]], null, null, null, null, null)), (n()(), t["\u0275ted"](11, null, ["", ""]))], function(n, l) {
                var e = l.component,
                    a = e.stopFragment,
                    i = t["\u0275unv"](l, 2, 1, t["\u0275nov"](l, 4).transform(n(l, 3, 0, "/match", e.matchData.match.match_id, e.getHeroSlot(l.context.$implicit.heroId))));
                n(l, 2, 0, a, i)
            }, function(n, l) {
                var e = t["\u0275inlineInterpolate"](1, "laning__avatar laning__avatar_link icon-", t["\u0275unv"](l, 6, 0, n(l, 7, 0, t["\u0275nov"](l.parent.parent.parent, 0), l.context.$implicit.heroId, "name")), "");
                n(l, 6, 0, e), n(l, 9, 0, l.context.$implicit.damageDone), n(l, 11, 0, l.context.$implicit.damageReceived)
            })
        }
        function V(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 18, "div", [["class", "laning__info"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 6, "div", [["class", "laning__col laning__col_info"]], null, null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 1, "div", [], [[8, "className", 0]], null, null, null, null)), t["\u0275ppd"](3, 2), (n()(), t["\u0275eld"](4, 0, null, null, 1, "div", [["class", "laning__text_cell laning__text_done"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](6, 0, null, null, 1, "div", [["class", "laning__text_cell laning__text_received laning__text_marg"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](8, 0, null, null, 7, "div", [["class", "laning__col laning__col_total"]], null, null, null, null, null)), (n()(), t["\u0275eld"](9, 0, null, null, 2, "div", [["class", "laning__text laning__text_padded"]], null, null, null, null, null)), (n()(), t["\u0275ted"](10, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](12, 0, null, null, 1, "div", [["class", "laning__text_large laning__text_done"]], null, null, null, null, null)), (n()(), t["\u0275ted"](13, null, ["", ""])), (n()(), t["\u0275eld"](14, 0, null, null, 1, "div", [["class", "laning__text_large laning__text_received"]], null, null, null, null, null)), (n()(), t["\u0275ted"](15, null, ["", ""])), (n()(), t["\u0275eld"](16, 0, null, null, 2, "div", [["class", "laning__col laning__col_detailed"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, F)), t["\u0275did"](18, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(n, l) {
                n(l, 18, 0, l.component.laningData.heroDamage)
            }, function(n, l) {
                var e = l.component,
                    a = t["\u0275inlineInterpolate"](1, "laning__avatar icon-", t["\u0275unv"](l, 2, 0, n(l, 3, 0, t["\u0275nov"](l.parent.parent, 0), e.laningData.heroId, "name")), "");
                n(l, 2, 0, a), n(l, 4, 0, t["\u0275unv"](l, 4, 0, t["\u0275nov"](l, 5).transform("MATCH.DONE"))), n(l, 6, 0, t["\u0275unv"](l, 6, 0, t["\u0275nov"](l, 7).transform("MATCH.RECEIVED"))), n(l, 10, 0, t["\u0275unv"](l, 10, 0, t["\u0275nov"](l, 11).transform("MATCH.LANING_VS"))), n(l, 13, 0, e.laningData.totalDamageDone), n(l, 15, 0, e.laningData.totalDamageReceived)
            })
        }
        function j(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 19, "section", [["class", "laning"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 16, "div", [["class", "laning__wrapper"], ["content-premium", "real"]], null, null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 8, "div", [["class", "laning__col laning__col_header"]], null, null, null, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 5, "div", [["class", "laning__header"]], null, null, null, null, null)), (n()(), t["\u0275eld"](4, 0, null, null, 1, "h2", [["class", "laning__heading"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](6, 0, null, null, 2, "sup", [["class", "laning__supheader laning__supheader_faded"]], null, null, null, null, null)), (n()(), t["\u0275ted"](7, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](9, 0, null, null, 1, "div", [["class", "laning__text"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275and"](16777216, null, null, 1, null, V)), t["\u0275did"](12, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"],
                ngIfElse: [1, "ngIfElse"]
            }, null), (n()(), t["\u0275eld"](13, 0, null, null, 4, "div", [["class", "laning__advice"]], null, null, null, null, null)), (n()(), t["\u0275eld"](14, 0, null, null, 1, "h3", [["class", "laning__supheader"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](16, 0, null, null, 1, "div", [["class", "laning__text_medium"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275ppd"](17, 2), (n()(), t["\u0275eld"](18, 0, null, null, 1, "gosu-section-rate", [["class", "laning__rate"]], null, null, null, b.c, b.a)), t["\u0275did"](19, 245760, null, 0, O.a, [C.a, T.a, P.a], {
                section: [0, "section"],
                matchInfo: [1, "matchInfo"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 12, 0, !e.isSoloLane, t["\u0275nov"](l.parent, 4)), n(l, 19, 0, e.section, e.matchInfo)
            }, function(n, l) {
                var e = l.component;
                n(l, 4, 0, t["\u0275unv"](l, 4, 0, t["\u0275nov"](l, 5).transform("MATCH.LANING"))), n(l, 7, 0, t["\u0275unv"](l, 7, 0, t["\u0275nov"](l, 8).transform("MATCH.LANING_BETA"))), n(l, 9, 0, t["\u0275unv"](l, 9, 0, t["\u0275nov"](l, 10).transform("MATCH.DAMAGE_IN_THE_LANE"))), n(l, 14, 0, t["\u0275unv"](l, 14, 0, t["\u0275nov"](l, 15).transform("MATCH.ADVICE")));
                var a = t["\u0275unv"](l, 16, 0, n(l, 17, 0, t["\u0275nov"](l.parent, 1), e.laningData.advice, "success"));
                n(l, 16, 0, a)
            })
        }
        function G(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 16, "div", [["class", "laning__empty"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 6, "div", [["class", "laning__heroes"]], null, null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 1, "div", [], [[8, "className", 0]], null, null, null, null)), t["\u0275ppd"](3, 2), (n()(), t["\u0275eld"](4, 0, null, null, 1, "div", [["class", "laning__text laning__text_between"]], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["vs"])), (n()(), t["\u0275eld"](6, 0, null, null, 1, "div", [], [[8, "className", 0]], null, null, null, null)), t["\u0275ppd"](7, 2), (n()(), t["\u0275eld"](8, 0, null, null, 8, "div", [["class", "laning__total"]], null, null, null, null, null)), (n()(), t["\u0275eld"](9, 0, null, null, 1, "div", [["class", "laning__text_cell laning__text_done"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](11, 0, null, null, 1, "div", [["class", "laning__text_large laning__text_done"]], null, null, null, null, null)), (n()(), t["\u0275ted"](12, null, ["", ""])), (n()(), t["\u0275eld"](13, 0, null, null, 1, "div", [["class", "laning__text_cell laning__text_received"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](15, 0, null, null, 1, "div", [["class", "laning__text_large laning__text_received"]], null, null, null, null, null)), (n()(), t["\u0275ted"](16, null, ["", ""]))], null, function(n, l) {
                var e = l.component,
                    a = t["\u0275inlineInterpolate"](1, "laning__avatar icon-", t["\u0275unv"](l, 2, 0, n(l, 3, 0, t["\u0275nov"](l.parent, 0), e.laningData.heroId, "name")), "");
                n(l, 2, 0, a);
                var i = t["\u0275inlineInterpolate"](1, "laning__avatar icon-", t["\u0275unv"](l, 6, 0, n(l, 7, 0, t["\u0275nov"](l.parent, 0), e.laningData.heroDamage[0].heroId, "name")), "");
                n(l, 6, 0, i), n(l, 9, 0, t["\u0275unv"](l, 9, 0, t["\u0275nov"](l, 10).transform("MATCH.DONE"))), n(l, 12, 0, e.laningData.totalDamageDone), n(l, 13, 0, t["\u0275unv"](l, 13, 0, t["\u0275nov"](l, 14).transform("MATCH.RECEIVED"))), n(l, 16, 0, e.laningData.totalDamageReceived)
            })
        }
        function $(n) {
            return t["\u0275vid"](2, [t["\u0275pid"](0, x.a, []), t["\u0275pid"](0, S.a, []), (n()(), t["\u0275and"](16777216, null, null, 1, null, j)), t["\u0275did"](3, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](0, [["elseBlock", 2]], null, 0, null, G))], function(n, l) {
                n(l, 3, 0, !!l.component.laningData.heroDamage.length)
            }, null)
        }
        var z = function() {
                function n() {}
                return Object.defineProperty(n.prototype, "max", {
                    get: function() {
                        return Math.max(this.indicators[0].data, this.indicators[1].data) || .01
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "min", {
                    get: function() {
                        return Math.min(this.indicators[0].data, this.indicators[1].data) || .01
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.getTransform = function(n) {
                    return "scaleX(" + ((this.invertAxis ? this.min / (n || .01) : (n || .01) / this.max) || .01) + ")"
                }, n
            }(),
            U = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".compare-section[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:25px}.compare-section__header[_ngcontent-%COMP%]{line-height:25px;font-size:20px;color:#fff;margin:0;text-transform:capitalize;align-self:flex-start}.compare-section__header_tooltiped[_ngcontent-%COMP%]{cursor:help;position:relative}.compare-section__header_tooltiped[_ngcontent-%COMP%]:hover{color:#f8c018}.compare-section__header_tooltiped[_ngcontent-%COMP%]:hover   .compare-section__tooltip[_ngcontent-%COMP%]{display:block}.compare-section__row[_ngcontent-%COMP%]{display:flex;align-items:center;color:#fff;width:240px;font-size:16px}.compare-section__row_dire[_ngcontent-%COMP%], .compare-section__row_radiant[_ngcontent-%COMP%]{height:5px;margin-bottom:15px;-webkit-transform-origin:left;transform-origin:left}.compare-section__row_radiant[_ngcontent-%COMP%]{background:#88db00}.compare-section__row_dire[_ngcontent-%COMP%]{background:#ea592b}.compare-section__subtext[_ngcontent-%COMP%]{opacity:.2}.compare-section__icon[_ngcontent-%COMP%]{margin:0 7px 0 2px}.compare-section__tooltip[_ngcontent-%COMP%]{display:none;background-color:#0062ff;border-radius:30px;color:#fff;line-height:25px;font-size:13px;text-align:center;position:absolute;top:0;left:50%;-webkit-transform:translateY(-100%) translateX(-50%);transform:translateY(-100%) translateX(-50%);margin-top:-10px;padding:15px 20px;width:300px;text-transform:none}.compare-section__tooltip[_ngcontent-%COMP%]:after{content:'';position:absolute;top:98%;left:50%;margin-left:-25px;width:0;height:0;border-top:10px solid #0062ff;border-right:25px solid transparent;border-left:25px solid transparent}"]],
                data: {}
            });
        function W(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "div", [["class", "compare-section__tooltip"]], null, null, null, null, null)), (n()(), t["\u0275ted"](1, null, [" ", " "])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                var e = l.component;
                n(l, 1, 0, t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 2).transform("COMPARE." + e.details)))
            })
        }
        function Y(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 9, "div", [["class", "compare-section__info"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 6, "div", [["class", "compare-section__row"]], null, null, null, null, null)), (n()(), t["\u0275ted"](2, null, [" ", " "])), (n()(), t["\u0275eld"](3, 0, null, null, 0, "div", [], [[8, "className", 0]], null, null, null, null)), (n()(), t["\u0275eld"](4, 0, null, null, 3, "span", [["class", "compare-section__subtext"]], null, null, null, null, null)), (n()(), t["\u0275ted"](5, null, [" ", " "])), t["\u0275pod"](6, {
                count: 0
            }), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](8, 0, null, null, 1, "div", [["class", "compare-section__row compare-section__row"]], [[4, "transform", null]], null, null, null, null)), t["\u0275did"](9, 278528, null, 0, c.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null)], function(n, l) {
                n(l, 9, 0, "compare-section__row compare-section__row", 0 === l.context.index ? "compare-section__row_radiant" : "compare-section__row_dire")
            }, function(n, l) {
                var e = l.component;
                n(l, 2, 0, l.context.$implicit.data), n(l, 3, 0, t["\u0275inlineInterpolate"](1, "compare-section__icon icon-", l.context.$implicit.icon, ""));
                var a = l.context.$implicit.units && t["\u0275unv"](l, 5, 0, t["\u0275nov"](l, 7).transform("COMPARE." + l.context.$implicit.units, n(l, 6, 0, l.context.$implicit.subData.toString())));
                n(l, 5, 0, a), n(l, 8, 0, e.getTransform(l.context.$implicit.data))
            })
        }
        function K(n) {
            return t["\u0275vid"](2, [(n()(), t["\u0275eld"](0, 0, null, null, 8, "div", [["class", "compare-section"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 4, "h3", [["class", "compare-section__header"]], [[2, "compare-section__header_tooltiped", null]], null, null, null, null)), (n()(), t["\u0275ted"](2, null, [" ", " "])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275and"](16777216, null, null, 1, null, W)), t["\u0275did"](5, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](6, 0, null, null, 2, "div", [["class", "compare-section__wrapper"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, Y)), t["\u0275did"](8, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 5, 0, e.details), n(l, 8, 0, e.indicators)
            }, function(n, l) {
                var e = l.component;
                n(l, 1, 0, !!e.details), n(l, 2, 0, t["\u0275unv"](l, 2, 0, t["\u0275nov"](l, 3).transform("COMPARE." + e.blockName)))
            })
        }
        var B,
            Z = e("uQDU"),
            X = e("cvA/"),
            q = e("E/eG"),
            Q = {
                LANING: [{
                    id: "laneDeaths",
                    name: "LANE_DEATHS",
                    isReverted: !0,
                    roles: [1, 2, 3, 4, 5]
                }, {
                    id: "laneDamage",
                    name: "LANE_DAMAGE",
                    isReverted: !1,
                    roles: [4, 5]
                }, {
                    id: "laneGold",
                    name: "LANE_GOLD",
                    isReverted: !1,
                    roles: [1, 2, 3]
                }],
                MAP_CONTROL: [{
                    id: "pressure",
                    name: "PRESSURE",
                    isReverted: !1,
                    roles: [1, 2, 3, 4, 5],
                    details: "GOLD_FOR_KILLINGS"
                }, {
                    id: "deaths",
                    name: "DEATHS_BLOCK",
                    isReverted: !0,
                    roles: [1, 2, 3],
                    details: "GOLD_LOST"
                }, {
                    id: "dewarding",
                    name: "DEWARDING",
                    isReverted: !1,
                    roles: [4, 5],
                    details: "NUMBER_OF_ELIMINATED_WARDS"
                }, {
                    id: "neutralCreeps",
                    name: "NEUTRAL_CREEPS_BLOCK",
                    isReverted: !1,
                    roles: [1, 2, 3],
                    details: "GOLD_FOR_NEUTRAL_CREEPS"
                }, {
                    id: "push",
                    name: "PUSH",
                    isReverted: !1,
                    roles: [1, 2, 3],
                    details: "GOLD_FOR_DENYING"
                }, {
                    id: "runeControl",
                    name: "RUNE_CONTROL",
                    isReverted: !1,
                    roles: [4, 5],
                    details: "NUMBER_OF_RUNES"
                }, {
                    id: "splitPush",
                    name: "SPLIT_PUSH",
                    isReverted: !1,
                    roles: [1, 2, 3],
                    details: "GOLD_FOR_LANE_CREEPS"
                }, {
                    id: "stacks",
                    name: "STACKS",
                    isReverted: !1,
                    roles: [4, 5]
                }, {
                    id: "supportCosts",
                    name: "SUPPORT_COSTS",
                    isReverted: !1,
                    roles: [4, 5],
                    details: "GOLD_SPENT_ON_CONSUMABLE"
                }, {
                    id: "vision",
                    name: "VISION",
                    isReverted: !1,
                    roles: [4, 5],
                    details: "AVERAGE_NUMBER_OF_WARDS"
                }]
            },
            J = function(n) {
                return n[n.Carry = 1] = "Carry", n[n.Mid = 2] = "Mid", n[n.Offlane = 3] = "Offlane", n[n.Support4 = 4] = "Support4", n[n.Support5 = 5] = "Support5", n[n.Jungler = 6] = "Jungler", n
            }({}),
            nn = ((B = {})[J.Carry] = "CARRY", B[J.Mid] = "MID", B[J.Offlane] = "OFFLANE", B[J.Support4] = "SUPPORT", B[J.Support5] = "SUPPORT", B[J.Jungler] = "JUNGLER", B),
            ln = function() {
                function n(n) {
                    this.match = n, this.sectionMap = R.a, this.sectionsMap = Q, this.rolesList = nn
                }
                return Object.defineProperty(n.prototype, "matchInfo", {
                    get: function() {
                        var n = this.match.matchData$.getValue();
                        return {
                            matchId: n.match.match_id,
                            slot: n.match.slot
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "sectionsList", {
                    get: function() {
                        return Object.keys(Q)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "players", {
                    get: function() {
                        return this.data.summary
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.getPlayerShield = function(n) {
                    var l = this.match.getShields().find(function(l) {
                        return l.slot === n
                    });
                    return l && l.shield
                }, n
            }(),
            en = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".root[_ngcontent-%COMP%]{max-width:1024px;width:100%;background-color:#080808;box-sizing:border-box;margin-top:30px;color:#fff}.players-compare[_ngcontent-%COMP%]{width:100%;padding:30px 60px 30px 80px;box-sizing:border-box;display:flex}.players-compare__wrapper[_ngcontent-%COMP%]{width:1024px;margin-top:30px;background:#080808}.players-compare__player[_ngcontent-%COMP%]{width:350px;height:350px;border-radius:50%;flex-shrink:0;background-position:top}.players-compare__player_radiant[_ngcontent-%COMP%]{border:5px solid #bddb00}.players-compare__player_dire[_ngcontent-%COMP%]{border:5px solid #ea592b}.players-compare__player[_ngcontent-%COMP%]:first-child{margin-bottom:24px}.players-compare__mount[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;height:100%;background-color:rgba(0,0,0,.5);align-self:auto;border-radius:50%}.players-compare__shield[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;line-height:35px;font-size:16px;color:#fff}.players-compare__shield_icon[_ngcontent-%COMP%]{width:36px;height:31px;margin-left:5px}.players-compare__name[_ngcontent-%COMP%]{line-height:35px;font-size:30px;text-align:center;margin:0}.players-compare__name_radiant[_ngcontent-%COMP%]{color:#bddb00}.players-compare__name_dire[_ngcontent-%COMP%]{color:#ea592b}.players-compare__text[_ngcontent-%COMP%]{color:#fff;line-height:25px;font-size:13px;text-align:center;font-weight:200}.players-compare__avatars[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:350px;margin-right:110px;flex-shrink:0}.players-compare__details[_ngcontent-%COMP%]{width:100%}.players-compare__subheader[_ngcontent-%COMP%]{line-height:25px;font-size:11px;margin:0 0 20px;color:rgba(255,255,255,.25);text-transform:uppercase}.players-compare__header[_ngcontent-%COMP%]{font-size:34px;margin:0;line-height:normal;color:#fff;padding:30px 60px 0}.players-compare__rate[_ngcontent-%COMP%]{display:block;color:#fff;padding:0 30px}.mock[_ngcontent-%COMP%]{position:relative}.mock__text[_ngcontent-%COMP%]{position:absolute;top:500px;left:400px;color:#fff}.mock__image[_ngcontent-%COMP%]{width:100%}"]],
                data: {}
            });
        function tn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 15, "div", [], null, null, null, null, null)), t["\u0275did"](1, 278528, null, 0, c.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275ppd"](2, 2), (n()(), t["\u0275eld"](3, 0, null, null, 12, "div", [["class", "players-compare__mount"]], null, null, null, null, null)), (n()(), t["\u0275eld"](4, 0, null, null, 11, "div", [["class", "players-compare__info"]], null, null, null, null, null)), (n()(), t["\u0275eld"](5, 0, null, null, 2, "h3", [["class", "players-compare__name"]], null, null, null, null, null)), t["\u0275did"](6, 278528, null, 0, c.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (n()(), t["\u0275ted"](7, null, [" ", " "])), (n()(), t["\u0275eld"](8, 0, null, null, 3, "div", [["class", "players-compare__shield"]], null, null, null, null, null)), (n()(), t["\u0275ted"](9, null, [" ", " "])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](11, 0, null, null, 0, "div", [], [[8, "className", 0]], null, null, null, null)), (n()(), t["\u0275eld"](12, 0, null, null, 3, "div", [["class", "players-compare__text"]], null, null, null, null, null)), (n()(), t["\u0275ted"](13, null, [" ", " ", ", ", " "])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], function(n, l) {
                var e = t["\u0275inlineInterpolate"](1, "players-compare__player icon-vert_", t["\u0275unv"](l, 1, 0, n(l, 2, 0, t["\u0275nov"](l.parent, 0), l.context.$implicit.heroId, "name")), "");
                n(l, 1, 0, e, 0 === l.context.index ? "players-compare__player_radiant" : "players-compare__player_dire"), n(l, 6, 0, "players-compare__name", 0 === l.context.index ? "players-compare__name_radiant" : "players-compare__name_dire")
            }, function(n, l) {
                var e = l.component;
                n(l, 7, 0, l.context.$implicit.playerName), n(l, 9, 0, t["\u0275unv"](l, 9, 0, t["\u0275nov"](l, 10).transform("COMPARE.PLAYED_LIKE"))), n(l, 11, 0, t["\u0275inlineInterpolate"](1, "players-compare__shield_icon icon-mmr_", e.getPlayerShield(l.context.$implicit.playerSlot), "")), n(l, 13, 0, l.context.$implicit.level, t["\u0275unv"](l, 13, 1, t["\u0275nov"](l, 14).transform("COMPARE.LVL")), t["\u0275unv"](l, 13, 2, t["\u0275nov"](l, 15).transform("COMPARE." + e.rolesList[l.context.$implicit.role])))
            })
        }
        function an(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "gosu-compare-block", [], null, null, null, K, U)), t["\u0275did"](1, 49152, null, 0, z, [], {
                blockName: [0, "blockName"],
                details: [1, "details"],
                indicators: [2, "indicators"],
                invertAxis: [3, "invertAxis"]
            }, null), t["\u0275pad"](2, 2)], function(n, l) {
                var e = l.component,
                    t = l.parent.context.$implicit.name,
                    a = l.parent.context.$implicit.details,
                    i = n(l, 2, 0, e.players[0].blocks[l.parent.context.$implicit.id], e.players[1].blocks[l.parent.context.$implicit.id]);
                n(l, 1, 0, t, a, i, l.parent.context.$implicit.isReverted)
            }, null)
        }
        function un(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, an)), t["\u0275did"](2, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](0, null, null, 0))], function(n, l) {
                var e = l.context.$implicit.roles.includes(l.component.players[0].role);
                n(l, 2, 0, e)
            }, null)
        }
        function rn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 5, "div", [["class", "players-compare__section"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 2, "h2", [["class", "players-compare__subheader"]], null, null, null, null, null)), (n()(), t["\u0275ted"](2, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275and"](16777216, null, null, 1, null, un)), t["\u0275did"](5, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(n, l) {
                n(l, 5, 0, l.component.sectionsMap[l.context.$implicit])
            }, function(n, l) {
                n(l, 2, 0, t["\u0275unv"](l, 2, 0, t["\u0275nov"](l, 3).transform("COMPARE." + l.context.$implicit)))
            })
        }
        function on(n) {
            return t["\u0275vid"](2, [t["\u0275pid"](0, x.a, []), t["\u0275pid"](0, Z.a, []), (n()(), t["\u0275eld"](2, 0, null, null, 20, "div", [["class", "root"]], null, null, null, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 2, "h2", [["class", "players-compare__header"]], null, null, null, null, null)), (n()(), t["\u0275ted"](4, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](6, 0, null, null, 14, "gosu-premium-content", [], null, null, null, X.b, X.a)), t["\u0275did"](7, 114688, null, 0, q.a, [C.a], {
                block: [0, "block"]
            }, null), (n()(), t["\u0275eld"](8, 0, null, 1, 7, "div", [["class", "players-compare__wrapper"], ["content-premium", "real"]], null, null, null, null, null)), (n()(), t["\u0275eld"](9, 0, null, null, 6, "div", [["class", "players-compare"]], null, null, null, null, null)), (n()(), t["\u0275eld"](10, 0, null, null, 2, "div", [["class", "players-compare__avatars"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, tn)), t["\u0275did"](12, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275eld"](13, 0, null, null, 2, "div", [["class", "players-compare__details"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, rn)), t["\u0275did"](15, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275eld"](16, 0, null, 0, 4, "div", [["class", "mock"], ["content-premium", "mock"]], null, null, null, null, null)), (n()(), t["\u0275eld"](17, 0, null, null, 1, "div", [["class", "mock__text"]], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["That is a mock data, sorry :("])), (n()(), t["\u0275eld"](19, 0, null, null, 1, "img", [["alt", "players compare mock image"], ["class", "mock__image"]], [[8, "src", 4]], null, null, null, null)), t["\u0275ppd"](20, 1), (n()(), t["\u0275eld"](21, 0, null, null, 1, "gosu-section-rate", [["class", "players-compare__rate"]], null, null, null, b.c, b.a)), t["\u0275did"](22, 245760, null, 0, O.a, [C.a, T.a, P.a], {
                section: [0, "section"],
                matchInfo: [1, "matchInfo"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 7, 0, e.sectionMap.roleStat.key), n(l, 12, 0, e.players), n(l, 15, 0, e.sectionsList), n(l, 22, 0, e.sectionMap.roleStat, e.matchInfo)
            }, function(n, l) {
                n(l, 4, 0, t["\u0275unv"](l, 4, 0, t["\u0275nov"](l, 5).transform("COMPARE.PLAYERS_COMPARISON")));
                var e = t["\u0275unv"](l, 19, 0, n(l, 20, 0, t["\u0275nov"](l, 1), "/assets/images/players-comparation.png"));
                n(l, 19, 0, e)
            })
        }
        var sn = e("S5bw"),
            cn = function() {
                function n(n) {
                    this.match = n, this.sectionMap = R.a, this.winrates$ = new sn.a(1)
                }
                return Object.defineProperty(n.prototype, "data", {
                    set: function(n) {
                        var l;
                        this.winrates$.next({
                            data: n,
                            theBestWinrate: (l = n.summary.winrates, l.reduce(function(n, l) {
                                return n.winrate > l.winrate ? n : l
                            }))
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "matchInfo", {
                    get: function() {
                        var n = this.match.matchData$.getValue();
                        return {
                            matchId: n.match.match_id,
                            slot: n.match.slot
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), n
            }(),
            dn = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".root[_ngcontent-%COMP%]{max-width:1024px;width:100%;background-color:#080808;box-sizing:border-box;margin-top:30px;color:#fff}.winrates[_ngcontent-%COMP%]{padding:15px 30px 0}.winrates__header[_ngcontent-%COMP%], .winrates__inner[_ngcontent-%COMP%]{display:flex;flex-direction:row}.winrates__title[_ngcontent-%COMP%]{font-size:34px;margin:0;line-height:normal;max-width:400px;width:100%}.winrates__subheader[_ngcontent-%COMP%]{line-height:25px;font-size:16px;margin-top:7px}.winrates__hero[_ngcontent-%COMP%]{width:60px;height:60px;border-radius:50%}.winrates__content[_ngcontent-%COMP%]{margin-left:40px;margin-top:15px;display:flex;margin-bottom:24px}.winrates__hero-you[_ngcontent-%COMP%]{margin-right:40px}.winrates__name[_ngcontent-%COMP%]{line-height:25px;margin-top:10px;text-align:center}.winrates__name-best[_ngcontent-%COMP%]{color:#5ae1a1}.winrates__footer[_ngcontent-%COMP%]{padding:0 30px}.hero__block[_ngcontent-%COMP%]{padding:0 12.5px}.mock[_ngcontent-%COMP%]{position:relative}.mock__text[_ngcontent-%COMP%]{position:absolute;top:100px;left:360px;color:#fff}.mock__image[_ngcontent-%COMP%]{width:100%}"]],
                data: {}
            });
        function pn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 7, "div", [["class", "winrates__teammates"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 6, "div", [["class", "hero__block"]], null, null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 1, "div", [], [[8, "className", 0]], null, null, null, null)), t["\u0275ppd"](3, 2), (n()(), t["\u0275eld"](4, 0, null, null, 3, "div", [["class", "winrates__name"]], null, null, null, null, null)), t["\u0275did"](5, 278528, null, 0, c.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](6, {
                "winrates__name-best": 0
            }), (n()(), t["\u0275ted"](7, null, ["", ""]))], function(n, l) {
                var e = n(l, 6, 0, l.context.$implicit.heroId === l.parent.context.ngIf.theBestWinrate.heroId);
                n(l, 5, 0, "winrates__name", e)
            }, function(n, l) {
                var e = t["\u0275inlineInterpolate"](1, "icon-", t["\u0275unv"](l, 2, 0, n(l, 3, 0, t["\u0275nov"](l.parent.parent, 0), l.context.$implicit.heroId, "name")), " winrates__hero");
                n(l, 2, 0, e), n(l, 7, 0, l.context.$implicit.winrate)
            })
        }
        function _n(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 30, "section", [["class", "root"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 26, "gosu-premium-content", [], null, null, null, X.b, X.a)), t["\u0275did"](2, 114688, null, 0, q.a, [C.a], {
                block: [0, "block"]
            }, null), (n()(), t["\u0275eld"](3, 0, null, 1, 19, "div", [["class", "winrates"], ["content-premium", "real"]], null, null, null, null, null)), (n()(), t["\u0275eld"](4, 0, null, null, 18, "div", [["class", "winrates__inner"]], null, null, null, null, null)), (n()(), t["\u0275eld"](5, 0, null, null, 7, "div", [["class", "winrates__col"]], null, null, null, null, null)), (n()(), t["\u0275eld"](6, 0, null, null, 3, "div", [["class", "winrates__header"]], null, null, null, null, null)), (n()(), t["\u0275eld"](7, 0, null, null, 2, "h2", [["class", "winrates__title"]], null, null, null, null, null)), (n()(), t["\u0275ted"](8, null, [" ", " "])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](10, 0, null, null, 2, "div", [["class", "winrates__subheader"]], null, null, null, null, null)), (n()(), t["\u0275ted"](11, null, [" ", " "])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](13, 0, null, null, 9, "div", [["class", "winrates__info"]], null, null, null, null, null)), (n()(), t["\u0275eld"](14, 0, null, null, 8, "div", [["class", "winrates__content"]], null, null, null, null, null)), (n()(), t["\u0275eld"](15, 0, null, null, 5, "div", [["class", "hero__block winrates__hero-you"]], null, null, null, null, null)), (n()(), t["\u0275eld"](16, 0, null, null, 1, "div", [], [[8, "className", 0]], null, null, null, null)), t["\u0275ppd"](17, 2), (n()(), t["\u0275eld"](18, 0, null, null, 2, "div", [["class", "winrates__name"]], null, null, null, null, null)), (n()(), t["\u0275ted"](19, null, [" ", " "])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275and"](16777216, null, null, 1, null, pn)), t["\u0275did"](22, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275eld"](23, 0, null, 0, 4, "div", [["class", "mock"], ["content-premium", "mock"]], null, null, null, null, null)), (n()(), t["\u0275eld"](24, 0, null, null, 1, "div", [["class", "mock__text"]], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["That is a mock data, sorry :("])), (n()(), t["\u0275eld"](26, 0, null, null, 1, "img", [["alt", "winrates mock image"], ["class", "mock__image"]], [[8, "src", 4]], null, null, null, null)), t["\u0275ppd"](27, 1), (n()(), t["\u0275eld"](28, 0, null, null, 2, "div", [["class", "winrates__footer"]], null, null, null, null, null)), (n()(), t["\u0275eld"](29, 0, null, null, 1, "gosu-section-rate", [], null, null, null, b.c, b.a)), t["\u0275did"](30, 245760, null, 0, O.a, [C.a, T.a, P.a], {
                section: [0, "section"],
                matchInfo: [1, "matchInfo"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 2, 0, e.sectionMap.heroPairedWinrate.key), n(l, 22, 0, l.context.ngIf.data.summary.winrates), n(l, 30, 0, e.sectionMap.heroPairedWinrate, e.matchInfo)
            }, function(n, l) {
                n(l, 8, 0, t["\u0275unv"](l, 8, 0, t["\u0275nov"](l, 9).transform("MATCH.HOW_GOOD_IS_YOUR_HERO"))), n(l, 11, 0, t["\u0275unv"](l, 11, 0, t["\u0275nov"](l, 12).transform("MATCH.LOOK_AT_HERO_HERO_WINRATES")));
                var e = t["\u0275inlineInterpolate"](1, "icon-", t["\u0275unv"](l, 16, 0, n(l, 17, 0, t["\u0275nov"](l.parent, 0), l.context.ngIf.data.summary.heroId, "name")), " winrates__hero");
                n(l, 16, 0, e), n(l, 19, 0, t["\u0275unv"](l, 19, 0, t["\u0275nov"](l, 20).transform("MATCH.YOU")));
                var a = t["\u0275unv"](l, 26, 0, n(l, 27, 0, t["\u0275nov"](l.parent, 1), "/assets/images/winrates.png"));
                n(l, 26, 0, a)
            })
        }
        function fn(n) {
            return t["\u0275vid"](2, [t["\u0275pid"](0, x.a, []), t["\u0275pid"](0, Z.a, []), (n()(), t["\u0275and"](16777216, null, null, 2, null, _n)), t["\u0275did"](3, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), t["\u0275pid"](131072, c.AsyncPipe, [t.ChangeDetectorRef])], function(n, l) {
                var e = l.component;
                n(l, 3, 0, t["\u0275unv"](l, 3, 0, t["\u0275nov"](l, 4).transform(e.winrates$)))
            }, null)
        }
        var gn = e("nXul"),
            mn = e("OvAT"),
            hn = e("67Y/"),
            vn = e("YbnI"),
            xn = e("DI59"),
            yn = e("xqV8"),
            bn = e("UTPA"),
            On = function() {
                function n(n, l, e, t, a, i) {
                    this.user = n, this.cd = l, this.modal = e, this.router = t, this.api = a, this.session = i, this.costOfAnalysis = 400, this.analysisStatuses = bn.a
                }
                return Object.defineProperty(n.prototype, "neededGold", {
                    get: function() {
                        return this.costOfAnalysis - this.user.profileData.money.gold
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "handmadeAnalysis", {
                    get: function() {
                        return this.matchData.manualAnalysis
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "neededMoney", {
                    get: function() {
                        return this.neededGold * xn.a
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "currency", {
                    get: function() {
                        return this.session.nonAuthUserData.cheapestPlan.currency
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.ngOnInit = function() {
                    var n = this;
                    this.hasGold$ = this.user.profileData$.pipe(Object(hn.a)(function(l) {
                        return n.user.isAuthenticated && l.money.gold >= n.costOfAnalysis
                    }))
                }, n.prototype.order = function() {
                    var n = this;
                    this.user.isAuthenticated ? this.user.profileData.money.gold < this.costOfAnalysis ? this.showAddGoldPopup() : this.api.post("dota/api/manual-analysis/buy/" + this.user.meta.steamId + "/" + this.matchData.match.match_id + "/" + this.matchData.match.slot, {}).subscribe(function() {
                        n.handmadeAnalysis.status = n.analysisStatuses.REQUESTED, n.cd.markForCheck()
                    }, function() {
                        return alert("Failed to send request \xaf\\_(\u30c4)_/\xaf.")
                    }) : this.router.navigate(["/login"])
                }, n.prototype.showAddGoldPopup = function() {
                    var n = this.modal.open(vn.a, void 0, "add-gold");
                    n.componentInstance.goldNeeded = this.costOfAnalysis, n.componentInstance.purchaseItem = "MATCH.HMA", n.afterClosed().subscribe()
                }, n
            }(),
            Cn = t["\u0275crt"]({
                encapsulation: 2,
                styles: [[".analysis__wrapper{display:flex;width:1024px;padding:15px 30px 40px;background:url(/dota/analysis/./static/assets/images/roshan.png) 90%/contain no-repeat,0 0/contain #0d2956;margin:30px auto 0;box-sizing:border-box}.analysis__title{line-height:40px;font-size:40px;color:#fff;margin:0;width:330px;padding-right:30px}.analysis__text{line-height:normal;font-size:16px;color:#fff;margin-bottom:18px}.analysis__text_golden{color:#f8c018;font-weight:900;display:flex;align-items:center}.analysis__text_green{color:#53e19e;margin-top:10px}.analysis__text_unmarg{margin:0}.analysis__purchase{width:250px}.analysis__button{display:flex;align-items:center;justify-content:center;border-radius:100px;background:#0062ff;width:240px;color:#fff;font-size:16px;font-weight:900;height:41px;padding:0;margin:0;text-transform:none}.analysis__button .icon-gold{margin-left:5px}.analysis__button .icon-custom-large{margin-left:5px;width:20px!important;height:20px!important;margin-bottom:0!important}.analysis__button_short{width:192px;margin-left:10px}.analysis__button_short .icon-gold{margin-right:5px}.analysis__button_disabled{pointer-events:none;opacity:.5}.analysis__got-money{background-color:#db4000;border-radius:0 0 13px 13px;width:100%;height:71px;display:flex;align-items:center;justify-content:center}"]],
                data: {}
            });
        function Tn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 12, "div", [["class", "analysis__purchase"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 1, "div", [["class", "analysis__text"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](3, 0, null, null, 2, "a", [["class", "analysis__text analysis__text_golden"], ["target", "_blank"]], [[8, "href", 4], [8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](6, 0, null, null, 6, "div", [["class", "btn analysis__button"]], [[2, "analysis__button_disabled", null]], [[null, "click"]], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.order() && t), t
            }, null, null)), t["\u0275pid"](131072, c.AsyncPipe, [t.ChangeDetectorRef]), (n()(), t["\u0275ted"](8, null, [" ", " ", " "])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](10, 0, null, null, 2, "i", [], null, null, null, null, null)), t["\u0275did"](11, 278528, null, 0, c.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngClass: [0, "ngClass"]
            }, null), t["\u0275ppd"](12, 1)], function(n, l) {
                var e = t["\u0275unv"](l, 11, 0, n(l, 12, 0, t["\u0275nov"](l.parent, 0), "icon-gold"));
                n(l, 11, 0, e)
            }, function(n, l) {
                var e = l.component;
                n(l, 1, 0, t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 2).transform("MATCH.ORDER_HANDMADE"))), n(l, 3, 0, t["\u0275unv"](l, 3, 0, t["\u0275nov"](l, 4).transform("MATCH.EXAMPLE_URL")), t["\u0275unv"](l, 3, 1, t["\u0275nov"](l, 5).transform("MATCH.EXAMPLE"))), n(l, 6, 0, !t["\u0275unv"](l, 6, 0, t["\u0275nov"](l, 7).transform(e.hasGold$))), n(l, 8, 0, t["\u0275unv"](l, 8, 0, t["\u0275nov"](l, 9).transform("MATCH.BUY_FOR")), e.costOfAnalysis)
            })
        }
        function Pn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 8, "div", [["class", "analysis__purchase"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 1, "div", [["class", "analysis__text analysis__text_green"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](3, 0, null, null, 5, "div", [["class", "btn analysis__button"]], null, [[null, "click"]], function(n, l, e) {
                var a = !0;
                return "click" === l && (a = !1 !== t["\u0275nov"](n, 4).onClick() && a), a
            }, null, null)), t["\u0275did"](4, 16384, null, 0, s.RouterLink, [s.Router, s.ActivatedRoute, [8, null], t.Renderer2, t.ElementRef], {
                routerLink: [0, "routerLink"]
            }, null), t["\u0275pad"](5, 3), t["\u0275pid"](131072, D.LocalizeRouterPipe, [E.LocalizeRouterService, t.ChangeDetectorRef]), (n()(), t["\u0275ted"](7, null, [" ", " "])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], function(n, l) {
                var e = l.component,
                    a = t["\u0275unv"](l, 4, 0, t["\u0275nov"](l, 6).transform(n(l, 5, 0, "/handmade-analysis", e.handmadeAnalysis.matchId, e.handmadeAnalysis.slot)));
                n(l, 4, 0, a)
            }, function(n, l) {
                n(l, 1, 0, t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 2).transform("MATCH.ANALYSIS_READY"))), n(l, 7, 0, t["\u0275unv"](l, 7, 0, t["\u0275nov"](l, 8).transform("MATCH.VIEW_ANALYSIS")))
            })
        }
        function Mn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "div", [["class", "analysis__purchase"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 1, "div", [["class", "analysis__text analysis__text_green"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](3, 0, null, null, 1, "div", [["class", "analysis__text"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                n(l, 1, 0, t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 2).transform("MATCH.ORDER_ACCEPTED"))), n(l, 3, 0, t["\u0275unv"](l, 3, 0, t["\u0275nov"](l, 4).transform("MATCH.SENT_REVIEW")))
            })
        }
        function Rn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 7, "div", [["class", "analysis__got-money"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 1, "div", [["class", "analysis__text analysis__text_unmarg"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](3, 0, null, null, 4, "div", [["class", "btn analysis__button analysis__button_short"]], [[8, "innerHTML", 1]], [[null, "click"]], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.showAddGoldPopup() && t), t
            }, null, null)), t["\u0275ppd"](4, 4), t["\u0275ppd"](5, 1), t["\u0275pod"](6, {
                neededGold: 0,
                neededMoney: 1,
                iconClass: 2
            }), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                var e = l.component;
                n(l, 1, 0, t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 2).transform("MATCH.NO_ENOUGH_COINS")));
                var a = t["\u0275unv"](l, 3, 0, t["\u0275nov"](l, 7).transform("MATCH.BUY_GOLD", n(l, 6, 0, e.neededGold, t["\u0275unv"](l, 3, 0, n(l, 4, 0, t["\u0275nov"](l.parent.parent, 1), e.neededMoney, e.currency, "symbol-narrow", "1.0-2")), t["\u0275unv"](l, 3, 0, n(l, 5, 0, t["\u0275nov"](l.parent.parent, 0), "icon-gold")))));
                n(l, 3, 0, a)
            })
        }
        function In(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, null, null, null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 2, null, Rn)), t["\u0275did"](2, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), t["\u0275pid"](131072, c.AsyncPipe, [t.ChangeDetectorRef]), (n()(), t["\u0275and"](0, null, null, 0))], function(n, l) {
                var e = l.component;
                n(l, 2, 0, !t["\u0275unv"](l, 2, 0, t["\u0275nov"](l, 3).transform(e.hasGold$)))
            }, null)
        }
        function wn(n) {
            return t["\u0275vid"](2, [t["\u0275pid"](0, gn.a, [C.a, mn.a]), t["\u0275pid"](0, c.CurrencyPipe, [t.LOCALE_ID]), (n()(), t["\u0275eld"](2, 0, null, null, 13, "div", [["class", "analysis"]], null, null, null, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 10, "div", [["class", "analysis__wrapper"]], null, null, null, null, null)), (n()(), t["\u0275eld"](4, 0, null, null, 1, "h2", [["class", "analysis__title"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](6, 0, null, null, 7, null, null, null, null, null, null, null)), t["\u0275did"](7, 16384, null, 0, c.NgSwitch, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Tn)), t["\u0275did"](9, 278528, null, 0, c.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, c.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Pn)), t["\u0275did"](11, 278528, null, 0, c.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, c.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Mn)), t["\u0275did"](13, 16384, null, 0, c.NgSwitchDefault, [t.ViewContainerRef, t.TemplateRef, c.NgSwitch], null, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, In)), t["\u0275did"](15, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 7, 0, e.handmadeAnalysis.status), n(l, 9, 0, e.analysisStatuses.NOT_REQUESTED), n(l, 11, 0, e.analysisStatuses.COMPLETED), n(l, 15, 0, e.handmadeAnalysis.status === e.analysisStatuses.NOT_REQUESTED)
            }, function(n, l) {
                n(l, 4, 0, t["\u0275unv"](l, 4, 0, t["\u0275nov"](l, 5).transform("MATCH.HANDMADE_ANALYSIS")))
            })
        }
        var An = e("eZrl"),
            kn = e("d+rO"),
            Dn = e("EGkj"),
            En = e("WBVv"),
            Sn = e("55uZ"),
            Nn = function() {
                function n(n, l, e) {
                    this.user = n, this.match = l, this.i18nService = e, this.sectionMap = R.a
                }
                return n.getSummary = function(n) {
                    return n.is_error ? {
                        title: "Lost after teamfights",
                        major: n.advantage_duration.toFixed(0) + "s",
                        value: 100
                    } : null
                }, Object.defineProperty(n.prototype, "graphicAdvice", {
                    get: function() {
                        return this.i18nService.currentLang
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "isPremiumUser", {
                    get: function() {
                        return true //this.user.hasFeature(En.a.MatchTeamfightAdvice)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "matchInfo", {
                    get: function() {
                        var n = this.match.matchData$.getValue();
                        return {
                            matchId: n.match.match_id,
                            slot: n.match.slot
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), n
            }(),
            Ln = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".advice[_ngcontent-%COMP%]{display:flex;align-items:stretch;box-sizing:border-box;background-color:#282828}.advice__gap[_ngcontent-%COMP%] + .advice[_ngcontent-%COMP%]{-webkit-filter:blur(24px);filter:blur(24px);-webkit-transform:scale(1.12);transform:scale(1.12)}.advice__wrapper[_ngcontent-%COMP%]{overflow:hidden;position:relative;width:100%;margin:30px auto 0}.advice__gap[_ngcontent-%COMP%]{top:0;left:0;z-index:1;width:100%;height:100%;display:flex;position:absolute;align-items:center;flex-direction:column;justify-content:center;background-color:rgba(0,0,0,.2)}.advice__gap-header[_ngcontent-%COMP%]{color:#db4000;font-size:28px;font-weight:300;line-height:30px;text-align:center;margin-bottom:7px;width:365px}.advice__gap-title[_ngcontent-%COMP%]{color:#fff;font-size:11px;font-weight:700;text-align:center;letter-spacing:1px;margin-bottom:18px;width:260px;text-transform:uppercase}.advice__gap-button[_ngcontent-%COMP%]{font-size:15px;line-height:39px;text-transform:none;padding:0 50px}.advice__content[_ngcontent-%COMP%]{width:50%;flex-shrink:0;box-sizing:border-box;padding:25px 60px 70px 40px}.advice__illustration[_ngcontent-%COMP%]{width:50%;display:flex;flex-shrink:0;align-items:center;flex-direction:column;justify-content:center;background-color:#171717;padding-bottom:25px}.advice__illustration-header[_ngcontent-%COMP%]{color:#db4000;width:80%;text-align:center}.advice__title[_ngcontent-%COMP%]{color:#fff;font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:10px}.advice__rate[_ngcontent-%COMP%]{color:#fff;padding-left:60px;background-color:#000}.advice__text[_ngcontent-%COMP%]{line-height:30px;font-size:28px;color:#db4000;margin-bottom:50px}.advice__example[_ngcontent-%COMP%]{color:#fff;font-size:20px;font-weight:300;line-height:28px}.advice__example-chunk[_ngcontent-%COMP%]{margin-right:5px}.advice__example-chunk_heroes[_ngcontent-%COMP%]{margin-left:4px}.advice__example-chunk_period[_ngcontent-%COMP%]{color:#f2c94c}.advice__example-chunk_period[_ngcontent-%COMP%]:before{content:'{'}.advice__example-chunk_period:after{content:'}'}.advice__hero[_ngcontent-%COMP%]{width:28px;height:28px;margin-right:4px;border-radius:50%;display:inline-block;vertical-align:middle}.advice__hero[_ngcontent-%COMP%]:last-child{margin-right:0}"]],
                data: {}
            });
        function Hn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "div", [["class", "advice__gap-header"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                n(l, 0, 0, t["\u0275unv"](l, 0, 0, t["\u0275nov"](l, 1).transform("MATCH.TEAM_WON_GAME")))
            })
        }
        function Fn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "div", [["class", "advice__gap-header"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                n(l, 0, 0, t["\u0275unv"](l, 0, 0, t["\u0275nov"](l, 1).transform("MATCH.TEAM_LOST")))
            })
        }
        function Vn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 12, "div", [["class", "advice__gap"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 0, "div", [["class", "icon-lock"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, Hn)), t["\u0275did"](3, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Fn)), t["\u0275did"](5, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](6, 0, null, null, 1, "div", [["class", "advice__gap-title"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](8, 0, null, null, 4, "a", [["class", "advice__gap-button btn btn_primary btn_rounded"]], [[8, "innerHTML", 1], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function(n, l, e) {
                var a = !0;
                return "click" === l && (a = !1 !== t["\u0275nov"](n, 9).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && a), a
            }, null, null)), t["\u0275did"](9, 671744, null, 0, s.RouterLinkWithHref, [s.Router, s.ActivatedRoute, c.LocationStrategy], {
                routerLink: [0, "routerLink"]
            }, null), t["\u0275pad"](10, 1), t["\u0275pid"](131072, D.LocalizeRouterPipe, [E.LocalizeRouterService, t.ChangeDetectorRef]), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], function(n, l) {
                var e = l.component;
                n(l, 3, 0, e.data.won), n(l, 5, 0, !e.data.won);
                var a = t["\u0275unv"](l, 9, 0, t["\u0275nov"](l, 11).transform(n(l, 10, 0, "/payment")));
                n(l, 9, 0, a)
            }, function(n, l) {
                n(l, 6, 0, t["\u0275unv"](l, 6, 0, t["\u0275nov"](l, 7).transform("MATCH.ADVICE_TEAMFIGTHS"))), n(l, 8, 0, t["\u0275unv"](l, 8, 0, t["\u0275nov"](l, 12).transform("MATCH.GO_PREMIUM_ADVICE")), t["\u0275nov"](l, 9).target, t["\u0275nov"](l, 9).href)
            })
        }
        function jn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "span", [], [[8, "className", 0]], null, null, null, null)), t["\u0275ppd"](1, 2)], null, function(n, l) {
                var e = t["\u0275inlineInterpolate"](1, "advice__hero icon-", t["\u0275unv"](l, 0, 0, n(l, 1, 0, t["\u0275nov"](l.parent, 2), l.context.$implicit, "name")), "");
                n(l, 0, 0, e)
            })
        }
        function Gn(n) {
            return t["\u0275vid"](2, [t["\u0275pid"](0, An.DateFormatPipe, []), t["\u0275pid"](0, kn.FromUnixPipe, []), t["\u0275pid"](0, x.a, []), t["\u0275pid"](0, Dn.a, []), (n()(), t["\u0275eld"](4, 0, null, null, 39, "div", [["class", "advice__wrapper"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, Vn)), t["\u0275did"](6, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](7, 0, null, null, 33, "div", [["class", "advice"]], [[8, "id", 0]], null, null, null, null)), (n()(), t["\u0275eld"](8, 0, null, null, 28, "div", [["class", "advice__content"]], null, null, null, null, null)), (n()(), t["\u0275eld"](9, 0, null, null, 1, "div", [["class", "advice__title"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](11, 0, null, null, 1, "div", [["class", "advice__text"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](13, 0, null, null, 1, "div", [["class", "advice__title"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](15, 0, null, null, 21, "div", [["class", "advice__example"]], null, null, null, null, null)), (n()(), t["\u0275eld"](16, 0, null, null, 1, "span", [["class", "advice__example-chunk"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](18, 0, null, null, 0, "span", [], null, null, null, null, null)), (n()(), t["\u0275eld"](19, 0, null, null, 5, "span", [["class", "advice__example-chunk advice__example-chunk_period"]], null, null, null, null, null)), (n()(), t["\u0275ted"](20, null, ["", " - ", ""])), t["\u0275ppd"](21, 1), t["\u0275ppd"](22, 2), t["\u0275ppd"](23, 1), t["\u0275ppd"](24, 2), (n()(), t["\u0275eld"](25, 0, null, null, 0, "span", [], null, null, null, null, null)), (n()(), t["\u0275eld"](26, 0, null, null, 1, "span", [["class", "advice__example-chunk"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](28, 0, null, null, 0, "span", [], null, null, null, null, null)), (n()(), t["\u0275eld"](29, 0, null, null, 2, "span", [["class", "advice__example-chunk advice__example-chunk_heroes"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, jn)), t["\u0275did"](31, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275eld"](32, 0, null, null, 4, "span", [["class", "advice__example-chunk"]], null, null, null, null, null)), (n()(), t["\u0275eld"](33, 0, null, null, 3, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275ppd"](34, 2), t["\u0275pod"](35, {
                durationSeconds: 0
            }), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](37, 0, null, null, 3, "div", [["class", "advice__illustration"]], null, null, null, null, null)), (n()(), t["\u0275eld"](38, 0, null, null, 1, "h3", [["class", "advice__illustration-header"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](40, 0, null, null, 0, "div", [], [[8, "className", 0]], null, null, null, null)), (n()(), t["\u0275eld"](41, 0, null, null, 2, "div", [["class", "advice__rate"]], null, null, null, null, null)), (n()(), t["\u0275eld"](42, 0, null, null, 1, "gosu-section-rate", [], null, null, null, b.c, b.a)), t["\u0275did"](43, 245760, null, 0, O.a, [C.a, T.a, P.a], {
                section: [0, "section"],
                matchInfo: [1, "matchInfo"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 6, 0, !e.isPremiumUser), n(l, 31, 0, e.data.dead_heroes), n(l, 43, 0, e.sectionMap.teamfights_errors_analysis, e.matchInfo)
            }, function(n, l) {
                var e = l.component;
                n(l, 7, 0, e.data.name), n(l, 9, 0, t["\u0275unv"](l, 9, 0, t["\u0275nov"](l, 10).transform("MATCH.ADVICE_TITLE"))), n(l, 11, 0, t["\u0275unv"](l, 11, 0, t["\u0275nov"](l, 12).transform("MATCH.AFTER_TEAMFIGHT"))), n(l, 13, 0, t["\u0275unv"](l, 13, 0, t["\u0275nov"](l, 14).transform("MATCH.AN_EXAMPLE"))), n(l, 16, 0, t["\u0275unv"](l, 16, 0, t["\u0275nov"](l, 17).transform("MATCH.AFTER_TEAMFIGHT_TITLE")));
                var a = t["\u0275unv"](l, 20, 0, n(l, 22, 0, t["\u0275nov"](l, 0), t["\u0275unv"](l, 20, 0, n(l, 21, 0, t["\u0275nov"](l, 1), e.data.fight_start_time)), "mm:ss")),
                    i = t["\u0275unv"](l, 20, 1, n(l, 24, 0, t["\u0275nov"](l, 0), t["\u0275unv"](l, 20, 1, n(l, 23, 0, t["\u0275nov"](l, 1), e.data.fight_end_time)), "mm:ss"));
                n(l, 20, 0, a, i), n(l, 26, 0, t["\u0275unv"](l, 26, 0, t["\u0275nov"](l, 27).transform("MATCH.IN_WHICH")));
                var u = t["\u0275unv"](l, 33, 0, t["\u0275nov"](l, 36).transform("MATCH.YOU_GAINED_ADVANTAGE", n(l, 35, 0, t["\u0275unv"](l, 33, 0, n(l, 34, 0, t["\u0275nov"](l, 3), e.data.advantage_duration, 0)))));
                n(l, 33, 0, u), n(l, 38, 0, t["\u0275unv"](l, 38, 0, t["\u0275nov"](l, 39).transform("MATCH.NEXT_TIME_ADVICE"))), n(l, 40, 0, t["\u0275inlineInterpolate"](1, "advice__image icon-graphic-advice-", e.graphicAdvice, ""))
            })
        }
        var $n = function() {
                function n() {}
                return n.prototype.transform = function(n) {
                    return Math.abs(n)
                }, n
            }(),
            zn = e("mrSG"),
            Un = e("DLNa"),
            Wn = function() {
                function n() {
                    this.reasons = {}
                }
                return Object.defineProperty(n.prototype, "death", {
                    set: function(n) {
                        var l;
                        this.deathItem = n, this.reasons = (l = n).reasons ? l.reasons.reduce(function(n, l) {
                            var e;
                            return zn.__assign({}, n, ((e = {})[l.key] = l.data, e))
                        }, {}) : {}
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "hasReasons", {
                    get: function() {
                        return !!this.reasons && Object.keys(this.reasons).length > 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "detailsStyle", {
                    get: function() {
                        if (!this.deathItem || !this.scale)
                            return {
                                right: "0",
                                bottom: "0"
                            };
                        var n = this.deathItem,
                            l = n.x,
                            e = n.y,
                            t = this.scale.x.range()[1],
                            a = this.scale.y.range()[1];
                        return {
                            right: t - this.scale.x(l) + "px",
                            bottom: a - this.scale.y(e) + "px"
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "attackers", {
                    get: function() {
                        var n = this;
                        if (!this.deathItem || !this.scale)
                            return [];
                        var l = this.deathItem,
                            e = l.x,
                            t = l.y;
                        return this.deathItem.killers_name.map(function(l, a) {
                            var i = Un.a[l],
                                u = e + 17 * Math.cos(1.075 * Math.PI + .15 * Math.PI * a),
                                r = t + 17 * Math.sin(1.075 * Math.PI + .15 * Math.PI * a);
                            return zn.__assign({}, i, {
                                style: {
                                    left: n.scale.x(u) + "px",
                                    top: n.scale.y(r) + "px"
                                }
                            })
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "targets", {
                    get: function() {
                        var n = this;
                        if (!this.deathItem || !this.scale)
                            return [];
                        var l = this.deathItem,
                            e = l.x,
                            t = l.y;
                        return this.deathItem.target_name.map(function(l, a) {
                            var i = Un.a[l],
                                u = e + 17 * Math.cos(.425 * Math.PI - .15 * Math.PI * a),
                                r = t + 17 * Math.sin(.425 * Math.PI - .15 * Math.PI * a);
                            return zn.__assign({}, i, {
                                style: {
                                    left: n.scale.x(u) + "px",
                                    top: n.scale.y(r) + "px"
                                }
                            })
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), n
            }(),
            Yn = t["\u0275crt"]({
                encapsulation: 0,
                styles: [["[_nghost-%COMP%]{display:block;position:absolute;left:0;top:0;width:100%;height:100%;z-index:2}.death[_ngcontent-%COMP%]{width:100%;height:100%}.death__details[_ngcontent-%COMP%]{position:absolute;background-color:#000;padding:10px 15px;margin-right:20px;margin-bottom:30px;min-width:160px;border-radius:20px;color:#53e29f}.death__details_fail[_ngcontent-%COMP%]{color:#db4000}.death__heading[_ngcontent-%COMP%]{font-size:13px;font-weight:700}.death__subheader[_ngcontent-%COMP%]{margin-top:10px;font-size:9px;font-weight:700;text-transform:uppercase}.death__reason-title[_ngcontent-%COMP%]{font-size:13px;font-weight:300;color:#fff;margin:3px 0}.death__reason-img[_ngcontent-%COMP%]{display:block;width:25px;height:25px;border-radius:50%;margin-right:2px}.death__reason-group[_ngcontent-%COMP%]{display:inline-flex;align-items:center;margin-right:10px}.death__reason-text[_ngcontent-%COMP%]{color:#fff;font-size:11px;font-weight:700}.death__hero[_ngcontent-%COMP%]{position:absolute;margin-top:-35px;margin-left:-17.5px}.death__avatar[_ngcontent-%COMP%]{width:35px;height:35px;border-radius:50%;box-sizing:border-box;border:2px solid transparent;box-shadow:0 0 6px 2px rgba(0,0,0,.7)}.death__hero_attacker[_ngcontent-%COMP%]   .death__avatar[_ngcontent-%COMP%]{border-color:#db4000}.death__hero_target[_ngcontent-%COMP%]   .death__avatar[_ngcontent-%COMP%]{border-color:#53e29f}"]],
                data: {}
            });
        function Kn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "div", [["class", "death__reason"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 1, "div", [["class", "death__reason-title"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](3, 0, null, null, 0, "div", [["class", "death__reason-img icon-ward_observer"]], null, null, null, null, null))], null, function(n, l) {
                n(l, 1, 0, t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 2).transform("MATCH.ENEMIES_TITLE")))
            })
        }
        function Bn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "div", [["class", "death__reason-group"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 1, "div", [], [[8, "className", 0]], null, null, null, null)), t["\u0275ppd"](2, 2), (n()(), t["\u0275eld"](3, 0, null, null, 1, "div", [["class", "death__reason-text"]], null, null, null, null, null)), (n()(), t["\u0275ted"](4, null, ["x", ""]))], null, function(n, l) {
                var e = t["\u0275inlineInterpolate"](1, "death__reason-img icon-", t["\u0275unv"](l, 1, 0, n(l, 2, 0, t["\u0275nov"](l.parent.parent.parent, 3), l.context.$implicit.slot_name, "name")), "");
                n(l, 1, 0, e), n(l, 4, 0, l.context.$implicit.count)
            })
        }
        function Zn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "div", [["class", "death__reason"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 1, "div", [["class", "death__reason-title"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275and"](16777216, null, null, 1, null, Bn)), t["\u0275did"](4, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(n, l) {
                n(l, 4, 0, l.component.reasons.attacker_on_ward)
            }, function(n, l) {
                n(l, 1, 0, t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 2).transform("MATCH.YOU_SAW_THE_ENEMY")))
            })
        }
        function Xn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "div", [["class", "death__reason"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 1, "div", [["class", "death__reason-title"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](3, 0, null, null, 0, "div", [["class", "death__reason-img icon-rakal"]], null, null, null, null, null))], null, function(n, l) {
                n(l, 1, 0, t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 2).transform("MATCH.SENSELESS_DEATH")))
            })
        }
        function qn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 8, "div", [["class", "death__reasons"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 1, "div", [["class", "death__subheader"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275and"](16777216, null, null, 1, null, Kn)), t["\u0275did"](4, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Zn)), t["\u0275did"](6, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Xn)), t["\u0275did"](8, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 4, 0, e.reasons.target_on_ward), n(l, 6, 0, e.reasons.attacker_on_ward), n(l, 8, 0, e.reasons.solo_feed)
            }, function(n, l) {
                n(l, 1, 0, t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 2).transform("MATCH.REASONS_SUBHEADER")))
            })
        }
        function Qn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "div", [["class", "death__hero death__hero_attacker"]], null, null, null, null, null)), t["\u0275did"](1, 278528, null, 0, c.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), (n()(), t["\u0275eld"](2, 0, null, null, 0, "div", [], [[8, "className", 0]], null, null, null, null))], function(n, l) {
                n(l, 1, 0, l.context.$implicit.style)
            }, function(n, l) {
                n(l, 2, 0, t["\u0275inlineInterpolate"](1, "death__avatar icon-", l.context.$implicit.name, ""))
            })
        }
        function Jn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "div", [["class", "death__hero death__hero_target"]], null, null, null, null, null)), t["\u0275did"](1, 278528, null, 0, c.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), (n()(), t["\u0275eld"](2, 0, null, null, 0, "div", [], [[8, "className", 0]], null, null, null, null))], function(n, l) {
                n(l, 1, 0, l.context.$implicit.style)
            }, function(n, l) {
                n(l, 2, 0, t["\u0275inlineInterpolate"](1, "death__avatar icon-", l.context.$implicit.name, ""))
            })
        }
        function nl(n) {
            return t["\u0275vid"](0, [t["\u0275pid"](0, An.DateFormatPipe, []), t["\u0275pid"](0, kn.FromUnixPipe, []), t["\u0275pid"](0, $n, []), t["\u0275pid"](0, x.a, []), (n()(), t["\u0275eld"](4, 0, null, null, 21, "div", [["class", "death"]], null, null, null, null, null)), (n()(), t["\u0275eld"](5, 0, null, null, 16, "div", [["class", "death__details"]], [[2, "death__details_fail", null]], null, null, null, null)), t["\u0275did"](6, 278528, null, 0, c.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), (n()(), t["\u0275eld"](7, 0, null, null, 12, "div", [["class", "death__heading"]], null, null, null, null, null)), (n()(), t["\u0275eld"](8, 0, null, null, 4, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](9, null, ["", "", ""])), t["\u0275ppd"](10, 1), t["\u0275ppd"](11, 1), t["\u0275ppd"](12, 2), (n()(), t["\u0275eld"](13, 0, null, null, 1, "span", [["class", "death__header-dl"]], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u2014"])), (n()(), t["\u0275eld"](15, 0, null, null, 4, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](16, null, ["", "", ""])), t["\u0275ppd"](17, 1), t["\u0275ppd"](18, 1), t["\u0275ppd"](19, 2), (n()(), t["\u0275and"](16777216, null, null, 1, null, qn)), t["\u0275did"](21, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Qn)), t["\u0275did"](23, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Jn)), t["\u0275did"](25, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 6, 0, e.detailsStyle), n(l, 21, 0, e.hasReasons), n(l, 23, 0, e.attackers), n(l, 25, 0, e.targets)
            }, function(n, l) {
                var e = l.component;
                n(l, 5, 0, "escape" !== e.deathItem.type);
                var a = e.deathItem.start > 0 ? "" : "-",
                    i = t["\u0275unv"](l, 9, 1, n(l, 12, 0, t["\u0275nov"](l, 0), t["\u0275unv"](l, 9, 1, n(l, 11, 0, t["\u0275nov"](l, 1), t["\u0275unv"](l, 9, 1, n(l, 10, 0, t["\u0275nov"](l, 2), e.deathItem.start)))), "mm:ss"));
                n(l, 9, 0, a, i);
                var u = e.deathItem.end > 0 ? "" : "-",
                    r = t["\u0275unv"](l, 16, 1, n(l, 19, 0, t["\u0275nov"](l, 0), t["\u0275unv"](l, 16, 1, n(l, 18, 0, t["\u0275nov"](l, 1), t["\u0275unv"](l, 16, 1, n(l, 17, 0, t["\u0275nov"](l, 2), e.deathItem.end)))), "mm:ss"));
                n(l, 16, 0, u, r)
            })
        }
        var ll = e("4jaM"),
            el = e("wd/R"),
            tl = e("K9Ia"),
            al = e("pugT"),
            il = e("x1Tk"),
            ul = e("t9fZ"),
            rl = function() {
                function n() {
                    this.deathsSubject = new M.a([])
                }
                return Object.defineProperty(n.prototype, "death$", {
                    get: function() {
                        return this.deathsSubject.asObservable()
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.setDeaths = function(n) {
                    this.deathsSubject.next(n)
                }, n
            }(),
            ol = function() {
                function n(n, l, e) {
                    this.deaths = n, this.cd = l, this.ngZone = e, this.scaleSubject = new tl.a, this.subscription = new al.a
                }
                return Object.defineProperty(n.prototype, "is720Patch", {
                    get: function() {
                        return el.utc("2018-11-19 19:00:00").unix() <= this.matchDate
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.ngOnInit = function() {
                    this.scale$ = this.scaleSubject.asObservable(), this.markers$ = this.scale$.pipe(Object(il.a)(this.deaths.death$), Object(hn.a)(function(n) {
                        var l = n[0];
                        return n[1].map(function(n) {
                            return {
                                death: n,
                                style: {
                                    left: l.x(n.x) + "px",
                                    top: l.y(n.y) + "px"
                                }
                            }
                        })
                    }))
                }, n.prototype.ngAfterContentInit = function() {
                    var n = this;
                    this.subscription.add(this.ngZone.onStable.pipe(Object(ul.a)(1)).subscribe(function() {
                        n.onMapReady(n.mapImage.nativeElement)
                    }))
                }, n.prototype.ngOnDestroy = function() {
                    this.subscription.unsubscribe()
                }, n.prototype.onMapReady = function(n) {
                    this.scale = {
                        x: Object(ll.a)().domain([64, 191]).range([0, n.offsetWidth]),
                        y: Object(ll.a)().domain([191, 64]).range([0, n.offsetHeight])
                    }, this.cd.detectChanges(), this.scaleSubject.next(this.scale)
                }, n.prototype.markerTracker = function(n) {
                    return n
                }, n
            }(),
            sl = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".deaths[_ngcontent-%COMP%]{position:relative;margin-bottom:20px}.deaths__map[_ngcontent-%COMP%]{display:block;width:100%;height:0;padding-bottom:100%}.deaths__marker[_ngcontent-%COMP%]{position:absolute;display:block;cursor:pointer;margin-left:-22px;margin-top:-50px}.deaths__marker[_ngcontent-%COMP%]:before{color:#53e29f;font-size:44px;display:block;text-shadow:0 2px 5px rgba(0,0,0,.5)}.deaths__marker.unsuccessful[_ngcontent-%COMP%]:before{color:#db4000}.deaths__marker.selected[_ngcontent-%COMP%]{z-index:3}.deaths__marker.selected[_ngcontent-%COMP%]:before{color:#0062ff}.deaths__marker[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;position:absolute;font-size:18px;font-weight:700;left:0;width:100%;display:block;text-align:center;top:8px}.deaths__overlay[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;left:0;top:0;background-color:rgba(0,0,0,.7);z-index:1}"]],
                data: {}
            });
        function cl(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 0, "div", [["class", "deaths__overlay"]], null, null, null, null, null))], null, null)
        }
        function dl(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "div", [["class", "deaths__marker gosu-icon-marker"]], [[2, "selected", null], [2, "unsuccessful", null]], [[null, "mouseenter"], [null, "mouseleave"]], function(n, l, e) {
                var t = !0,
                    a = n.component;
                return "mouseenter" === l && (t = !1 !== (a.selectedDeath = n.context.$implicit.death) && t), "mouseleave" === l && (t = !1 !== (a.selectedDeath = null) && t), t
            }, null, null)), t["\u0275did"](1, 278528, null, 0, c.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), (n()(), t["\u0275eld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](3, null, ["", ""]))], function(n, l) {
                n(l, 1, 0, l.context.$implicit.style)
            }, function(n, l) {
                n(l, 0, 0, l.context.$implicit.death === l.component.selectedDeath, "death" === l.context.$implicit.death.type), n(l, 3, 0, l.context.index + 1)
            })
        }
        function pl(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "gosu-death-data", [], null, null, null, nl, Yn)), t["\u0275did"](1, 49152, null, 0, Wn, [], {
                death: [0, "death"],
                scale: [1, "scale"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 1, 0, e.selectedDeath, e.scale)
            }, null)
        }
        function _l(n) {
            return t["\u0275vid"](2, [t["\u0275qud"](402653184, 1, {
                mapImage: 0
            }), (n()(), t["\u0275eld"](1, 0, null, null, 9, "div", [["class", "deaths"]], null, null, null, null, null)), (n()(), t["\u0275eld"](2, 0, [[1, 0], ["mapImage", 1]], null, 1, "div", [["class", "deaths__map"]], null, null, null, null, null)), t["\u0275did"](3, 278528, null, 0, c.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, cl)), t["\u0275did"](5, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 2, null, dl)), t["\u0275did"](7, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"],
                ngForTrackBy: [1, "ngForTrackBy"]
            }, null), t["\u0275pid"](131072, c.AsyncPipe, [t.ChangeDetectorRef]), (n()(), t["\u0275and"](16777216, null, null, 1, null, pl)), t["\u0275did"](10, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 3, 0, "deaths__map", e.is720Patch ? "icon-gosu-minimap720" : "icon-gosu-minimap"), n(l, 5, 0, e.selectedDeath), n(l, 7, 0, t["\u0275unv"](l, 7, 0, t["\u0275nov"](l, 8).transform(e.markers$)), e.markerTracker), n(l, 10, 0, e.scale && e.selectedDeath)
            }, null)
        }
        var fl = e("iFu3"),
            gl = e("L2wq"),
            ml = e("RTd+"),
            hl = e("6guK"),
            vl = e("Fhgx"),
            xl = e("LaNc"),
            yl = e("bwpd"),
            bl = e("OPpi"),
            Ol = e("ZYjt"),
            Cl = e("Ty6Q"),
            Tl = e("BpIG"),
            Pl = "all",
            Ml = function() {
                function n(n, l, e) {
                    this.match = n, this.deaths = l, this.platformId = e, this.sectionMap = R.a, this.deathList = [], this.reasons = []
                }
                return Object.defineProperty(n.prototype, "data", {
                    set: function(n) {
                        n && (this.blockData = n, this.deathList = n.data || [], this.reasons = function(n) {
                            var l = n.reduce(function(n, l) {
                                return l.reasons && 0 !== l.reasons.length ? (l.reasons.forEach(function(l) {
                                    var e = l.key;
                                    return n[e] = n[e] ? n[e] + 1 : 1
                                }), n) : n
                            }, {});
                            return Object.keys(l).map(function(n) {
                                return {
                                    key: n,
                                    count: l[n],
                                    image: Rl(n),
                                    title: n
                                }
                            }).sort(function(n, l) {
                                return l.count - n.count
                            })
                        }(this.deathList), this.applyFilter(Pl))
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.getSummary = function(n) {
                    return {
                        title: "Deaths analysis",
                        description: "You managed to avoid death in " + n.efficiency.toFixed(0) + "% of cases",
                        major: n.efficiency.toFixed(0) + "%",
                        value: 100 - n.efficiency
                    }
                }, Object.defineProperty(n.prototype, "deathCount", {
                    get: function() {
                        return this.blockData.summary.sum_all_gangs - this.blockData.summary.successful_escape
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "isBrowser", {
                    get: function() {
                        return Object(c.isPlatformBrowser)(this.platformId)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "filters", {
                    get: function() {
                        var n = this.deathList.reduce(function(n, l) {
                            var e;
                            return zn.__assign({}, n, ((e = {})[l.type] = void 0, e))
                        }, {});
                        return [Pl].concat(Object.keys(n)).map(function(n) {
                            return {
                                key: n,
                                title: n
                            }
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.ngOnInit = function() {
                    this.matchData$ = this.match.matchData$
                }, n.prototype.applyFilter = function(n) {
                    this.activeFilter = n, this.deaths.setDeaths(n === Pl ? this.deathList : this.deathList.filter(function(l) {
                        return l.type === n
                    }))
                }, n
            }();
        function Rl(n) {
            switch (n) {
            case "target_on_ward":
            case "attacker_on_ward":
                return "ward_observer";
            default:
                return "rakal"
            }
        }
        var Il = t["\u0275crt"]({
            encapsulation: 0,
            styles: [[".escapes[_ngcontent-%COMP%]{width:100%;margin:30px auto 0}.escapes__content[_ngcontent-%COMP%]{display:flex;background-color:#000;margin:0 -60px}.escapes__aside[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:330px;box-sizing:border-box;color:#fff;background-color:#000;padding:10px 0;margin-right:30px;flex-shrink:0}.escapes__header[_ngcontent-%COMP%]{margin:0;padding:0 30px 15px;border-bottom:1px solid #4a4a4a;font-size:34px;font-weight:700;color:#fff}.escapes__summary[_ngcontent-%COMP%]{padding:0 30px 15px;border-bottom:1px solid #4a4a4a}.escapes__text[_ngcontent-%COMP%]{margin-top:15px;font-size:20px;font-weight:700;line-height:20.8px}.escapes__text_fail[_ngcontent-%COMP%]{color:#db4000}.escapes__text_success[_ngcontent-%COMP%]{color:#53e29f}.escapes__efficiency[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 30px;border-bottom:1px solid #4a4a4a}.escapes__efficiency-value[_ngcontent-%COMP%]{font-size:40px;font-weight:700;line-height:60px;margin-right:5px}.escapes__efficiency-image[_ngcontent-%COMP%]{width:50px;height:50px;margin-right:10px;flex-shrink:0}.escapes__efficiency-text[_ngcontent-%COMP%]{font-size:13px;font-weight:700;width:110px}.escapes__filters[_ngcontent-%COMP%]{display:flex;padding:20px 0 15px}.escapes__filter[_ngcontent-%COMP%]{font-size:13px;font-weight:700;color:#fff;padding:5px 10px;border-radius:12px;text-transform:capitalize;cursor:pointer}.escapes__filter[_ngcontent-%COMP%]:hover{opacity:.7}.escapes__filter_active[_ngcontent-%COMP%]{background-color:#0062ff}.escapes__filter_active[_ngcontent-%COMP%]:hover{opacity:1}.escapes__data[_ngcontent-%COMP%]{padding-right:25px;width:100%}.escapes__reasons[_ngcontent-%COMP%]{margin-top:10px}.escapes__reason[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:5px}.escapes__reason-img[_ngcontent-%COMP%]{display:block;width:25px;height:25px;border-radius:50%;margin-right:3px;flex-shrink:0}.target_on_ward[_ngcontent-%COMP%]   .escapes__reason-img[_ngcontent-%COMP%]{border:2px solid #53e29f}.attacker_on_ward[_ngcontent-%COMP%]   .escapes__reason-img[_ngcontent-%COMP%]{border:2px solid #db4000}.escapes__reason-title[_ngcontent-%COMP%]{font-size:13px;line-height:11px;font-weight:700;color:#fff}@media screen and (max-width:1024px){.escapes[_ngcontent-%COMP%]{margin-top:15px}.escapes__content[_ngcontent-%COMP%]{flex-direction:column;margin:0 -20px}.escapes__aside[_ngcontent-%COMP%]{margin:0;width:100%;padding-bottom:0}.escapes__data[_ngcontent-%COMP%]{padding:0}.escapes__efficiency[_ngcontent-%COMP%]{border-bottom:0}}.mock[_ngcontent-%COMP%]{position:relative}.mock__text[_ngcontent-%COMP%]{position:absolute;top:300px;left:210px;color:#fff}"]],
            data: {}
        });
        function wl(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pod"](1, {
                times: 0,
                gold: 1,
                level: 2
            }), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                var e = l.component,
                    a = t["\u0275unv"](l, 0, 0, t["\u0275nov"](l, 2).transform("MATCH.DEATH_ANALYSIS_TEXT", n(l, 1, 0, e.deathCount, e.blockData.summary.sum_lost_gold, e.blockData.summary.sum_lost_xp.value)));
                n(l, 0, 0, a)
            })
        }
        function Al(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 7, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275ppd"](1, 1), t["\u0275ppd"](2, 1), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), t["\u0275ppd"](5, 2), t["\u0275pod"](6, {
                times: 0,
                gold: 1,
                timeDuration: 2
            }), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                var e = l.component,
                    a = t["\u0275unv"](l, 0, 0, t["\u0275nov"](l, 7).transform("MATCH.DEATH_ANALYSIS_TEXT_MAX_LVL", n(l, 6, 0, e.deathCount, e.blockData.summary.sum_lost_gold, t["\u0275unv"](l, 0, 0, n(l, 5, 0, t["\u0275nov"](l.parent.parent, 0), t["\u0275unv"](l, 0, 0, n(l, 2, 0, t["\u0275nov"](l.parent.parent, 1), t["\u0275unv"](l, 0, 0, n(l, 1, 0, t["\u0275nov"](l.parent.parent, 2), e.blockData.summary.sum_lost_xp.value)))), "m[" + t["\u0275unv"](l, 0, 0, t["\u0275nov"](l, 3).transform("COMMON.MINUTE_CHAR")) + "] s[" + t["\u0275unv"](l, 0, 0, t["\u0275nov"](l, 4).transform("COMMON.SECOND_CHAR")) + "]")))));
                n(l, 0, 0, a)
            })
        }
        function kl(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 6, "div", [["class", "escapes__reason"]], null, null, null, null, null)), t["\u0275did"](1, 278528, null, 0, c.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (n()(), t["\u0275eld"](2, 0, null, null, 0, "div", [], [[8, "className", 0]], null, null, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 3, "div", [["class", "escapes__reason-title"]], null, null, null, null, null)), (n()(), t["\u0275ted"](4, null, ["", " \xd7 ", ""])), t["\u0275ppd"](5, 2), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], function(n, l) {
                n(l, 1, 0, "escapes__reason", l.context.$implicit.key)
            }, function(n, l) {
                n(l, 2, 0, t["\u0275inlineInterpolate"](1, "escapes__reason-img icon-", l.context.$implicit.image, ""));
                var e = t["\u0275unv"](l, 4, 0, t["\u0275nov"](l, 6).transform(t["\u0275unv"](l, 4, 0, n(l, 5, 0, t["\u0275nov"](l.parent.parent, 3), l.context.$implicit.title, "MATCH.DEATHS_REASON_"))));
                n(l, 4, 0, e, l.context.$implicit.count)
            })
        }
        function Dl(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "div", [["class", "escapes__filter"]], [[2, "escapes__filter_active", null]], [[null, "click"]], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.applyFilter(n.context.$implicit.key) && t), t
            }, null, null)), (n()(), t["\u0275ted"](1, null, ["", ""])), t["\u0275ppd"](2, 2), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                n(l, 0, 0, l.context.$implicit.key === l.component.activeFilter);
                var e = t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 3).transform(t["\u0275unv"](l, 1, 0, n(l, 2, 0, t["\u0275nov"](l.parent.parent, 3), l.context.$implicit.title, "MATCH.DEATHS_REASON_"))));
                n(l, 1, 0, e)
            })
        }
        function El(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "gosu-deaths-map", [], null, null, null, _l, sl)), t["\u0275did"](1, 1294336, null, 0, ol, [rl, t.ChangeDetectorRef, t.NgZone], {
                matchDate: [0, "matchDate"]
            }, null)], function(n, l) {
                n(l, 1, 0, l.component.matchDate)
            }, null)
        }
        function Sl(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 62, "gosu-match-section", [["id", "escape"]], null, null, null, fl.b, fl.a)), t["\u0275did"](1, 49152, null, 0, gl.a, [ml.a, g.a], {
                rate: [0, "rate"],
                header: [1, "header"]
            }, null), (n()(), t["\u0275eld"](2, 0, null, 2, 60, "div", [["class", "escapes__content"], ["section-content", ""]], null, null, null, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 44, "aside", [["class", "escapes__aside"]], null, null, null, null, null)), (n()(), t["\u0275eld"](4, 0, null, null, 1, "h2", [["class", "escapes__header"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](6, 0, null, null, 28, "div", [["class", "escapes__summary"]], null, null, null, null, null)), (n()(), t["\u0275eld"](7, 0, null, null, 7, "div", [["class", "escapes__text"]], null, null, null, null, null)), (n()(), t["\u0275ted"](8, null, [" ", " ", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](10, 0, null, null, 2, "span", [["class", "escapes__text_success"]], null, null, null, null, null)), (n()(), t["\u0275ted"](11, null, ["", " ", " "])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275ted"](13, null, [" ", " "])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](15, 0, null, null, 4, "div", [["class", "escapes__text"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, wl)), t["\u0275did"](17, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Al)), t["\u0275did"](19, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](20, 0, null, null, 2, "div", [["class", "escapes__reasons"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, kl)), t["\u0275did"](22, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275eld"](23, 0, null, null, 11, "div", [["class", "escapes__text escapes__text_summary"]], null, null, null, null, null)), (n()(), t["\u0275eld"](24, 0, null, null, 10, "span", [], null, null, null, null, null)), (n()(), t["\u0275eld"](25, 0, null, null, 2, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](26, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](28, 0, null, null, 6, "span", [["class", "escapes__text_fail"]], null, null, null, null, null)), (n()(), t["\u0275ted"](29, null, [" ", ""])), t["\u0275ppd"](30, 1), t["\u0275ppd"](31, 1), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), t["\u0275ppd"](34, 2), (n()(), t["\u0275eld"](35, 0, null, null, 12, "div", [["class", "escapes__efficiency"]], null, null, null, null, null)), (n()(), t["\u0275eld"](36, 0, null, null, 2, "gosu-ranks-tooltip", [], null, null, null, hl.b, hl.a)), t["\u0275did"](37, 49152, null, 0, vl.a, [], null, null), (n()(), t["\u0275eld"](38, 0, null, 0, 0, "div", [], [[8, "className", 0]], null, null, null, null)), (n()(), t["\u0275eld"](39, 0, null, null, 8, "div", [["class", "escapes__efficiency-text"]], null, null, null, null, null)), (n()(), t["\u0275eld"](40, 0, null, null, 7, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275ppd"](41, 1), t["\u0275ppd"](42, 2), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), t["\u0275ppd"](44, 1), t["\u0275pod"](45, {
                rank: 0,
                color: 1
            }), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), t["\u0275ppd"](47, 1), (n()(), t["\u0275eld"](48, 0, null, null, 14, "div", [["class", "escapes__data"]], null, null, null, null, null)), (n()(), t["\u0275eld"](49, 0, null, null, 13, "gosu-premium-content", [], null, null, null, X.b, X.a)), t["\u0275did"](50, 114688, null, 0, q.a, [C.a], {
                block: [0, "block"]
            }, null), (n()(), t["\u0275eld"](51, 0, null, 1, 6, "div", [["content-premium", "real"]], null, null, null, null, null)), (n()(), t["\u0275eld"](52, 0, null, null, 2, "div", [["class", "escapes__filters"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, Dl)), t["\u0275did"](54, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275eld"](55, 0, null, null, 2, "div", [["class", "escapes__map"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, El)), t["\u0275did"](57, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](58, 0, null, 0, 4, "div", [["class", "mock"], ["content-premium", "mock"]], null, null, null, null, null)), (n()(), t["\u0275eld"](59, 0, null, null, 1, "div", [["class", "mock__text"]], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["That is a mock data, sorry :("])), (n()(), t["\u0275eld"](61, 0, null, null, 1, "img", [["alt", "deaths mock image"], ["height", "639"], ["width", "639"]], [[8, "src", 4]], null, null, null, null)), t["\u0275ppd"](62, 1)], function(n, l) {
                var e = l.component;
                n(l, 1, 0, e.sectionMap.escape, !1), n(l, 17, 0, "lvl" === e.blockData.summary.sum_lost_xp.xp_type), n(l, 19, 0, "lvl" !== e.blockData.summary.sum_lost_xp.xp_type), n(l, 22, 0, e.reasons), n(l, 50, 0, e.sectionMap.escape.key), n(l, 54, 0, e.filters), n(l, 57, 0, e.isBrowser)
            }, function(n, l) {
                var e = l.component;
                n(l, 4, 0, t["\u0275unv"](l, 4, 0, t["\u0275nov"](l, 5).transform("MATCH.DEATHS_ANALYSIS"))), n(l, 8, 0, e.blockData.summary.sum_all_gangs, t["\u0275unv"](l, 8, 1, t["\u0275nov"](l, 9).transform("MATCH.ATTEMPTS_COM"))), n(l, 11, 0, e.blockData.summary.successful_escape, t["\u0275unv"](l, 11, 1, t["\u0275nov"](l, 12).transform("MATCH.CASES"))), n(l, 13, 0, t["\u0275unv"](l, 13, 0, t["\u0275nov"](l, 14).transform("MATCH.MANAGE_TO_AVOID_DEATH"))), n(l, 26, 0, t["\u0275unv"](l, 26, 0, t["\u0275nov"](l, 27).transform("MATCH.YOU_WERE_DEAD")));
                var a = t["\u0275unv"](l, 29, 0, n(l, 34, 0, t["\u0275nov"](l.parent, 0), t["\u0275unv"](l, 29, 0, n(l, 31, 0, t["\u0275nov"](l.parent, 1), t["\u0275unv"](l, 29, 0, n(l, 30, 0, t["\u0275nov"](l.parent, 2), e.blockData.summary.duration_resp_time)))), "m[" + t["\u0275unv"](l, 29, 0, t["\u0275nov"](l, 32).transform("COMMON.MINUTE_CHAR")) + "] s[" + t["\u0275unv"](l, 29, 0, t["\u0275nov"](l, 33).transform("COMMON.SECOND_CHAR")) + "]"));
                n(l, 29, 0, a), n(l, 38, 0, t["\u0275inlineInterpolate"](1, "escapes__efficiency-image icon-mmr_", e.blockData.summary.shield, ""));
                var i = t["\u0275unv"](l, 40, 0, n(l, 47, 0, t["\u0275nov"](l.parent, 4), t["\u0275unv"](l, 40, 0, t["\u0275nov"](l, 46).transform("MATCH.YOU_PLAYED_IT_ON", n(l, 45, 0, t["\u0275unv"](l, 40, 0, t["\u0275nov"](l, 43).transform(t["\u0275unv"](l, 40, 0, n(l, 42, 0, t["\u0275nov"](l.parent, 3), t["\u0275unv"](l, 40, 0, n(l, 41, 0, t["\u0275nov"](l.parent, 5), e.blockData.summary.shield)), "COMMON.RANK_")))), t["\u0275unv"](l, 40, 0, n(l, 44, 0, t["\u0275nov"](l.parent, 6), e.blockData.summary.shield - 1 / 6 * 100)))))));
                n(l, 40, 0, i);
                var u = t["\u0275unv"](l, 61, 0, n(l, 62, 0, t["\u0275nov"](l.parent, 7), "/assets/images/match-death.png"));
                n(l, 61, 0, u)
            })
        }
        function Nl(n) {
            return t["\u0275vid"](2, [t["\u0275pid"](0, An.DateFormatPipe, []), t["\u0275pid"](0, xl.a, [Sn.a]), t["\u0275pid"](0, kn.FromUnixPipe, []), t["\u0275pid"](0, yl.a, []), t["\u0275pid"](0, bl.a, [Ol.c]), t["\u0275pid"](0, Cl.a, []), t["\u0275pid"](0, Tl.a, []), t["\u0275pid"](0, Z.a, []), (n()(), t["\u0275eld"](8, 0, null, null, 2, "div", [["class", "escapes"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, Sl)), t["\u0275did"](10, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                n(l, 10, 0, l.component.blockData.data)
            }, null)
        }
        var Ll = "GANKS_ALL_FILTER",
            Hl = function() {
                function n() {
                    this.hasActiveGankSubject = new M.a(!1), this.filterSubject = new M.a(Ll), this.selectedGankSubject = new M.a(void 0)
                }
                return Object.defineProperty(n.prototype, "activeFilter$", {
                    get: function() {
                        return this.filterSubject.asObservable()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "activeGankItem$", {
                    get: function() {
                        return this.selectedGankSubject.asObservable()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "hasActiveGank$", {
                    get: function() {
                        return this.hasActiveGankSubject.asObservable()
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.selectFilter = function(n) {
                    this.filterSubject.next(n)
                }, n.prototype.selectGankItem = function(n) {
                    this.selectedGankSubject.next(n)
                }, n.prototype.registerListRef = function(n) {
                    this.listElement = n
                }, n.prototype.registerGanks = function(n) {
                    this.gankList = n
                }, n.prototype.toggleHasActiveGank = function(n) {
                    this.hasActiveGankSubject.next(n)
                }, n.prototype.scrollListIntoGank = function(n) {
                    var l = this;
                    setTimeout(function() {
                        if (l.listElement) {
                            var e = l.listElement.directiveRef.elementRef.nativeElement,
                                t = l.gankList.find(function(l) {
                                    return l.gank === n
                                });
                            if (t) {
                                var a = l.listElement.directiveRef.geometry().h;
                                t.offsetTop > a - e.offsetHeight ? l.listElement.directiveRef.scrollToBottom(0, 300) : l.listElement.directiveRef.scrollToY(t.offsetTop, 300)
                            }
                        }
                    })
                }, n
            }(),
            Fl = function() {
                function n(n, l) {
                    this.ganks = n, this.elementRef = l
                }
                return Object.defineProperty(n.prototype, "offsetTop", {
                    get: function() {
                        return this.elementRef.nativeElement.offsetTop
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "activeGank$", {
                    get: function() {
                        return this.ganks.activeGankItem$
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.selectGank = function() {
                    this.ganks.selectGankItem(this.gank), this.ganks.toggleHasActiveGank(!0)
                }, Object.defineProperty(n.prototype, "attackers", {
                    get: function() {
                        return this.gank.killers_name.map(function(n) {
                            return Un.a[n]
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "targets", {
                    get: function() {
                        return this.gank.target_name.map(function(n) {
                            return Un.a[n]
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), n
            }(),
            Vl = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".gank_active[_ngcontent-%COMP%]   .gank__header[_ngcontent-%COMP%]{background-color:#454545;cursor:default}.gank_active[_ngcontent-%COMP%]   .gank__header[_ngcontent-%COMP%]:hover{opacity:1}.gank__header[_ngcontent-%COMP%]{padding:10px 30px;color:#fff;font-size:13px;font-weight:700;cursor:pointer;display:flex;align-items:center}.gank__header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{margin-right:4px}.gank__header[_ngcontent-%COMP%]:hover{opacity:.7}.gank__header-space[_ngcontent-%COMP%]{margin:0 4px}.gank__body[_ngcontent-%COMP%]{padding:10px 30px;background-color:#454545}.gank__profit[_ngcontent-%COMP%]{display:flex;margin-bottom:10px}.gank__profit[_ngcontent-%COMP%] + .gank__versus[_ngcontent-%COMP%]{margin-top:5px}.gank__cell[_ngcontent-%COMP%]{width:25%;flex-shrink:0;color:#53e29f}.gank__value[_ngcontent-%COMP%]{font-size:20px;font-weight:700}.gank__desc[_ngcontent-%COMP%]{font-size:11px;font-weight:300;line-height:11px;width:60px;word-break:break-word}.gank__indicator[_ngcontent-%COMP%]{display:inline-block;width:15px;height:15px;border-radius:50%;margin-left:auto}.gank__indicator_positive[_ngcontent-%COMP%]{background:url(/dota/analysis/./static/assets/icons/success.svg) center no-repeat #53e29f}.gank__indicator_negative[_ngcontent-%COMP%]{background:url(/dota/analysis/./static/assets/icons/fail.svg) center no-repeat #db4000}"]],
                data: {}
            });
        function jl(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 20, "div", [["class", "gank__profit"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 4, "div", [["class", "gank__cell"]], null, null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 1, "div", [["class", "gank__value"]], null, null, null, null, null)), (n()(), t["\u0275ted"](3, null, ["", ""])), (n()(), t["\u0275eld"](4, 0, null, null, 1, "div", [["class", "gank__desc"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](6, 0, null, null, 4, "div", [["class", "gank__cell"]], null, null, null, null, null)), (n()(), t["\u0275eld"](7, 0, null, null, 1, "div", [["class", "gank__value"]], null, null, null, null, null)), (n()(), t["\u0275ted"](8, null, ["", ""])), (n()(), t["\u0275eld"](9, 0, null, null, 1, "div", [["class", "gank__desc"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](11, 0, null, null, 4, "div", [["class", "gank__cell"]], null, null, null, null, null)), (n()(), t["\u0275eld"](12, 0, null, null, 1, "div", [["class", "gank__value"]], null, null, null, null, null)), (n()(), t["\u0275ted"](13, null, ["", ""])), (n()(), t["\u0275eld"](14, 0, null, null, 1, "div", [["class", "gank__desc"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](16, 0, null, null, 4, "div", [["class", "gank__cell"]], null, null, null, null, null)), (n()(), t["\u0275eld"](17, 0, null, null, 1, "div", [["class", "gank__value"]], null, null, null, null, null)), (n()(), t["\u0275ted"](18, null, ["", ""])), (n()(), t["\u0275eld"](19, 0, null, null, 1, "div", [["class", "gank__desc"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                var e = l.component;
                n(l, 3, 0, e.gank.gold || 0), n(l, 4, 0, t["\u0275unv"](l, 4, 0, t["\u0275nov"](l, 5).transform("MATCH.GOLD_EARNED"))), n(l, 8, 0, e.gank.gold_team || 0), n(l, 9, 0, t["\u0275unv"](l, 9, 0, t["\u0275nov"](l, 10).transform("MATCH.TOTAL_GOLD_EARNED"))), n(l, 13, 0, e.gank.xp || 0), n(l, 14, 0, t["\u0275unv"](l, 14, 0, t["\u0275nov"](l, 15).transform("MATCH.XP_EARNED"))), n(l, 18, 0, e.gank.xp_team || 0), n(l, 19, 0, t["\u0275unv"](l, 19, 0, t["\u0275nov"](l, 20).transform("MATCH.TOTAL_XP_EARNED")))
            })
        }
        function Gl(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "div", [["class", "gank__body"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, jl)), t["\u0275did"](2, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                n(l, 2, 0, !l.component.gank.isUnsuccessful)
            }, null)
        }
        function $l(n) {
            return t["\u0275vid"](2, [t["\u0275pid"](0, An.DateFormatPipe, []), t["\u0275pid"](0, kn.FromUnixPipe, []), t["\u0275pid"](0, $n, []), (n()(), t["\u0275eld"](3, 0, null, null, 21, "div", [["class", "gank"]], [[2, "gank_active", null]], [[null, "click"]], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.selectGank() && t), t
            }, null, null)), t["\u0275pid"](131072, c.AsyncPipe, [t.ChangeDetectorRef]), (n()(), t["\u0275eld"](5, 0, null, null, 16, "div", [["class", "gank__header"]], null, null, null, null, null)), (n()(), t["\u0275eld"](6, 0, null, null, 14, "span", [["class", "gank__header-text"]], null, null, null, null, null)), (n()(), t["\u0275eld"](7, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](8, null, ["", "."])), (n()(), t["\u0275eld"](9, 0, null, null, 4, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](10, null, ["", "", ""])), t["\u0275ppd"](11, 1), t["\u0275ppd"](12, 1), t["\u0275ppd"](13, 2), (n()(), t["\u0275eld"](14, 0, null, null, 1, "span", [["class", "gank__header-space"]], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" \u2014 "])), (n()(), t["\u0275eld"](16, 0, null, null, 4, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](17, null, ["", "", ""])), t["\u0275ppd"](18, 1), t["\u0275ppd"](19, 1), t["\u0275ppd"](20, 2), (n()(), t["\u0275eld"](21, 0, null, null, 0, "span", [], [[8, "className", 0]], null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 2, null, Gl)), t["\u0275did"](23, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), t["\u0275pid"](131072, c.AsyncPipe, [t.ChangeDetectorRef])], function(n, l) {
                var e = l.component;
                n(l, 23, 0, t["\u0275unv"](l, 23, 0, t["\u0275nov"](l, 24).transform(e.activeGank$)) === e.gank)
            }, function(n, l) {
                var e = l.component;
                n(l, 3, 0, t["\u0275unv"](l, 3, 0, t["\u0275nov"](l, 4).transform(e.activeGank$)) === e.gank), n(l, 8, 0, e.idx + 1);
                var a = e.gank.start > 0 ? "" : "-",
                    i = t["\u0275unv"](l, 10, 1, n(l, 13, 0, t["\u0275nov"](l, 0), t["\u0275unv"](l, 10, 1, n(l, 12, 0, t["\u0275nov"](l, 1), t["\u0275unv"](l, 10, 1, n(l, 11, 0, t["\u0275nov"](l, 2), e.gank.start)))), "mm:ss"));
                n(l, 10, 0, a, i);
                var u = e.gank.end > 0 ? "" : "-",
                    r = t["\u0275unv"](l, 17, 1, n(l, 20, 0, t["\u0275nov"](l, 0), t["\u0275unv"](l, 17, 1, n(l, 19, 0, t["\u0275nov"](l, 1), t["\u0275unv"](l, 17, 1, n(l, 18, 0, t["\u0275nov"](l, 2), e.gank.end)))), "mm:ss"));
                n(l, 17, 0, u, r), n(l, 21, 0, t["\u0275inlineInterpolate"](1, "gank__indicator gank__indicator_", e.gank.isUnsuccessful ? "negative" : "positive", ""))
            })
        }
        var zl = e("iXb4"),
            Ul = e("bse0"),
            Wl = function() {
                function n() {}
                return Object.defineProperty(n.prototype, "healList", {
                    get: function() {
                        return this.reason.map(function(n) {
                            return {
                                src: n.name,
                                text: n.value
                            }
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), n
            }(),
            Yl = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".heal[_ngcontent-%COMP%]{display:flex}.heal__item[_ngcontent-%COMP%]{display:flex;align-items:center}.heal__image[_ngcontent-%COMP%]{width:25px;height:25px;border-radius:50%}.heal__count[_ngcontent-%COMP%]{font-size:11px;font-weight:700;margin-left:2px}.icon-magic_wand[_ngcontent-%COMP%]{background-size:100% 100%}"]],
                data: {}
            });
        function Kl(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "div", [["class", "heal__item"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 0, "div", [], [[8, "className", 0]], null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 1, "div", [["class", "heal__count"]], null, null, null, null, null)), (n()(), t["\u0275ted"](3, null, ["", "hp"]))], null, function(n, l) {
                n(l, 1, 0, t["\u0275inlineInterpolate"](1, "heal__image icon-", l.context.$implicit.src, "")), n(l, 3, 0, l.context.$implicit.text)
            })
        }
        function Bl(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "div", [["class", "heal"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, Kl)), t["\u0275did"](2, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(n, l) {
                n(l, 2, 0, l.component.healList)
            }, null)
        }
        var Zl = function() {
                function n() {}
                return Object.defineProperty(n.prototype, "targets", {
                    get: function() {
                        return this.reason.map(function(n) {
                            return {
                                hero: Un.a[n.targetname[0]],
                                damage: n.damage
                            }
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), n
            }(),
            Xl = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".tower[_ngcontent-%COMP%]{display:flex}.tower__target[_ngcontent-%COMP%]{display:flex;align-items:center}.tower__avatar[_ngcontent-%COMP%]{width:25px;height:25px;border-radius:50%}.tower__damage[_ngcontent-%COMP%]{color:#db4000;font-size:11px;font-weight:700;margin-left:2px}"]],
                data: {}
            });
        function ql(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "div", [["class", "tower__target"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 0, "div", [], [[8, "className", 0]], null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 1, "div", [["class", "tower__damage"]], null, null, null, null, null)), (n()(), t["\u0275ted"](3, null, ["", ""]))], null, function(n, l) {
                n(l, 1, 0, t["\u0275inlineInterpolate"](1, "tower__avatar icon-", l.context.$implicit.hero.name, "")), n(l, 3, 0, l.context.$implicit.damage)
            })
        }
        function Ql(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "div", [["class", "tower"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, ql)), t["\u0275did"](2, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(n, l) {
                n(l, 2, 0, l.component.targets)
            }, null)
        }
        var Jl = function() {
                function n() {}
                return Object.defineProperty(n.prototype, "heroes", {
                    get: function() {
                        return this.reason.map(function(n) {
                            return Un.a[n.slot_name[0]]
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), n
            }(),
            ne = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".busted__avatar[_ngcontent-%COMP%]{width:25px;height:25px;border-radius:50%}"]],
                data: {}
            });
        function le(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "div", [["class", "busted__hero"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 0, "div", [], [[8, "className", 0]], null, null, null, null))], null, function(n, l) {
                n(l, 1, 0, t["\u0275inlineInterpolate"](1, "busted__avatar icon-", l.context.$implicit.name, ""))
            })
        }
        function ee(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "div", [["class", "busted"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, le)), t["\u0275did"](2, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(n, l) {
                n(l, 2, 0, l.component.heroes)
            }, null)
        }
        var te = function() {
                function n() {}
                return Object.defineProperty(n.prototype, "abilities", {
                    get: function() {
                        return this.reason.map(function(n) {
                            return {
                                src: n.name,
                                value: n.value
                            }
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), n
            }(),
            ae = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".abilities[_ngcontent-%COMP%]{display:flex}.abilities__item[_ngcontent-%COMP%]{display:flex;align-items:center}.abilities__image[_ngcontent-%COMP%]{width:25px;height:25px;border-radius:50%}.abilities__count[_ngcontent-%COMP%]{font-size:11px;font-weight:700;margin-left:2px}"]],
                data: {}
            });
        function ie(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "div", [["class", "abilities__item"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 0, "div", [], [[8, "className", 0]], null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 1, "div", [["class", "abilities__count"]], null, null, null, null, null)), (n()(), t["\u0275ted"](3, null, ["x", ""]))], null, function(n, l) {
                n(l, 1, 0, t["\u0275inlineInterpolate"](1, "abilities__image icon-", l.context.$implicit.src, "")), n(l, 3, 0, l.context.$implicit.value)
            })
        }
        function ue(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "div", [["class", "abilities"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, ie)), t["\u0275did"](2, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(n, l) {
                n(l, 2, 0, l.component.abilities)
            }, null)
        }
        var re = function() {
                function n() {}
                return Object.defineProperty(n.prototype, "heroes", {
                    get: function() {
                        return this.reason.map(function(n) {
                            return Un.a[n]
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), n
            }(),
            oe = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".bite[_ngcontent-%COMP%]{display:flex}.bite__hero[_ngcontent-%COMP%]{margin-right:5px}.bite__avatar[_ngcontent-%COMP%]{width:25px;height:25px;border-radius:50%}"]],
                data: {}
            });
        function se(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "div", [["class", "bite__hero"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 0, "div", [], [[8, "className", 0]], null, null, null, null))], null, function(n, l) {
                n(l, 1, 0, t["\u0275inlineInterpolate"](1, "bite__avatar icon-", l.context.$implicit.name, ""))
            })
        }
        function ce(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "div", [["class", "bite"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, se)), t["\u0275did"](2, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(n, l) {
                n(l, 2, 0, l.component.heroes)
            }, null)
        }
        var de = function() {
                function n() {}
                return Object.defineProperty(n.prototype, "heroes", {
                    get: function() {
                        return this.reason.map(function(n) {
                            return Un.a[n]
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), n
            }(),
            pe = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".tp[_ngcontent-%COMP%]{display:flex}.tp__hero[_ngcontent-%COMP%]{margin-right:5px}.tp__avatar[_ngcontent-%COMP%]{width:25px;height:25px;border-radius:50%}"]],
                data: {}
            });
        function _e(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "div", [["class", "tp__hero"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 0, "div", [], [[8, "className", 0]], null, null, null, null))], null, function(n, l) {
                n(l, 1, 0, t["\u0275inlineInterpolate"](1, "tp__avatar icon-", l.context.$implicit.name, ""))
            })
        }
        function fe(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "div", [["class", "tp"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, _e)), t["\u0275did"](2, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(n, l) {
                n(l, 2, 0, l.component.heroes)
            }, null)
        }
        var ge = function() {
                function n() {}
                return Object.defineProperty(n.prototype, "gankItem", {
                    set: function(n) {
                        n && (this.gank = n, this.reasons = this.parseReasons(n))
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "hasReasons", {
                    get: function() {
                        return !!this.reasons && Object.keys(this.reasons).length > 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "detailsStyle", {
                    get: function() {
                        if (!this.gank || !this.scale)
                            return {
                                right: "0",
                                bottom: "0"
                            };
                        var n = this.gank,
                            l = n.x,
                            e = n.y,
                            t = this.scale.x.range()[1],
                            a = this.scale.y.range()[1];
                        return {
                            right: t - this.scale.x(l) + "px",
                            bottom: a - this.scale.y(e) + "px"
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "attackers", {
                    get: function() {
                        var n = this;
                        if (!this.gank || !this.scale)
                            return [];
                        var l = this.gank,
                            e = l.x,
                            t = l.y;
                        return this.gank.killers_name.map(function(l, a) {
                            var i = Un.a[l],
                                u = e + 17 * Math.cos(1.075 * Math.PI + .15 * Math.PI * a),
                                r = t + 17 * Math.sin(1.075 * Math.PI + .15 * Math.PI * a);
                            return zn.__assign({}, i, {
                                style: {
                                    left: n.scale.x(u) + "px",
                                    top: n.scale.y(r) + "px"
                                }
                            })
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "targets", {
                    get: function() {
                        var n = this;
                        if (!this.gank || !this.scale)
                            return [];
                        var l = this.gank,
                            e = l.x,
                            t = l.y;
                        return this.gank.target_name.map(function(l, a) {
                            var i = Un.a[l],
                                u = e + 17 * Math.cos(.425 * Math.PI - .15 * Math.PI * a),
                                r = t + 17 * Math.sin(.425 * Math.PI - .15 * Math.PI * a);
                            return zn.__assign({}, i, {
                                style: {
                                    left: n.scale.x(u) + "px",
                                    top: n.scale.y(r) + "px"
                                }
                            })
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.parseReasons = function(n) {
                    return n.reasons ? n.reasons.reduce(function(n, l) {
                        var e;
                        return zn.__assign({}, n, ((e = {})[l.key] = l.data, e))
                    }, {}) : {}
                }, n
            }(),
            me = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".gank__hero[_ngcontent-%COMP%]{position:absolute;margin-top:-35px;margin-left:-17.5px}.gank__avatar[_ngcontent-%COMP%]{width:35px;height:35px;border-radius:50%;box-sizing:border-box;border:2px solid transparent;box-shadow:0 0 6px 2px rgba(0,0,0,.7)}.gank__hero_attacker[_ngcontent-%COMP%]   .gank__avatar[_ngcontent-%COMP%]{border-color:#53e29f}.gank__hero_target[_ngcontent-%COMP%]   .gank__avatar[_ngcontent-%COMP%]{border-color:#db4000}.gank__details[_ngcontent-%COMP%]{position:absolute;background-color:#353535;padding:10px 15px;margin-right:20px;margin-bottom:30px;min-width:160px;border-radius:20px}.gank__header[_ngcontent-%COMP%]{font-size:9px;font-weight:700;text-transform:uppercase;color:#db4000}.gank__title[_ngcontent-%COMP%]{font-size:13px;font-weight:300;color:#fff;margin:3px 0}.gank__reason[_ngcontent-%COMP%]{color:#fff;margin-bottom:10px}"]],
                data: {}
            });
        function he(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "div", [["class", "gank__reason"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 1, "div", [["class", "gank__title"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](3, 0, null, null, 1, "gosu-gank-reason-heal", [], null, null, null, Bl, Yl)), t["\u0275did"](4, 49152, null, 0, Wl, [], {
                reason: [0, "reason"]
            }, null)], function(n, l) {
                n(l, 4, 0, l.component.reasons.heal)
            }, function(n, l) {
                n(l, 1, 0, t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 2).transform("MATCH.ENEMY_WAS_HEALED")))
            })
        }
        function ve(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "div", [["class", "gank__reason"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 1, "div", [["class", "gank__title"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](3, 0, null, null, 1, "gosu-gank-reason-tower", [], null, null, null, Ql, Xl)), t["\u0275did"](4, 49152, null, 0, Zl, [], {
                reason: [0, "reason"]
            }, null)], function(n, l) {
                n(l, 4, 0, l.component.reasons.tower_attacks)
            }, function(n, l) {
                n(l, 1, 0, t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 2).transform("MATCH.YOU_DIVED_UNDER_THE_TOWER")))
            })
        }
        function xe(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "div", [["class", "gank__reason"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 1, "div", [["class", "gank__title"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](3, 0, null, null, 1, "gosu-gank-reason-ward", [], null, null, null, ee, ne)), t["\u0275did"](4, 49152, null, 0, Jl, [], {
                reason: [0, "reason"]
            }, null)], function(n, l) {
                n(l, 4, 0, l.component.reasons.show_hero_on_ward)
            }, function(n, l) {
                n(l, 1, 0, t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 2).transform("MATCH.ENEMY_WARD")))
            })
        }
        function ye(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "div", [["class", "gank__reason"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 1, "div", [["class", "gank__title"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](3, 0, null, null, 1, "gosu-gank-reason-ability", [], null, null, null, ue, ae)), t["\u0275did"](4, 49152, null, 0, te, [], {
                reason: [0, "reason"]
            }, null)], function(n, l) {
                n(l, 4, 0, l.component.reasons.save_ability)
            }, function(n, l) {
                n(l, 1, 0, t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 2).transform("MATCH.ENEMY_WAS_SAVED")))
            })
        }
        function be(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "div", [["class", "gank__reason"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 1, "div", [["class", "gank__title"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](3, 0, null, null, 1, "gosu-gank-reason-bite", [], null, null, null, ce, oe)), t["\u0275did"](4, 49152, null, 0, re, [], {
                reason: [0, "reason"]
            }, null)], function(n, l) {
                n(l, 4, 0, l.component.reasons.teamsavers)
            }, function(n, l) {
                n(l, 1, 0, t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 2).transform("MATCH.ENEMIES_WERE_WAITING")))
            })
        }
        function Oe(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "div", [["class", "gank__reason"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 1, "div", [["class", "gank__title"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](3, 0, null, null, 1, "gosu-gank-reason-tp", [], null, null, null, fe, pe)), t["\u0275did"](4, 49152, null, 0, de, [], {
                reason: [0, "reason"]
            }, null)], function(n, l) {
                n(l, 4, 0, l.component.reasons.save_tp)
            }, function(n, l) {
                n(l, 1, 0, t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 2).transform("MATCH.ENEMIES_TP")))
            })
        }
        function Ce(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 15, "div", [["class", "gank__details"]], null, null, null, null, null)), t["\u0275did"](1, 278528, null, 0, c.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), (n()(), t["\u0275eld"](2, 0, null, null, 1, "div", [["class", "gank__header"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275and"](16777216, null, null, 1, null, he)), t["\u0275did"](5, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, ve)), t["\u0275did"](7, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, xe)), t["\u0275did"](9, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, ye)), t["\u0275did"](11, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, be)), t["\u0275did"](13, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Oe)), t["\u0275did"](15, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 1, 0, e.detailsStyle), n(l, 5, 0, e.reasons.heal), n(l, 7, 0, e.reasons.tower_attacks), n(l, 9, 0, e.reasons.show_hero_on_ward), n(l, 11, 0, e.reasons.save_ability), n(l, 13, 0, e.reasons.teamsavers), n(l, 15, 0, e.reasons.save_tp)
            }, function(n, l) {
                n(l, 2, 0, t["\u0275unv"](l, 2, 0, t["\u0275nov"](l, 3).transform("MATCH.GANK_REASON")))
            })
        }
        function Te(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "div", [["class", "gank__hero gank__hero_attacker"]], null, null, null, null, null)), t["\u0275did"](1, 278528, null, 0, c.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), (n()(), t["\u0275eld"](2, 0, null, null, 0, "div", [], [[8, "className", 0]], null, null, null, null))], function(n, l) {
                n(l, 1, 0, l.context.$implicit.style)
            }, function(n, l) {
                n(l, 2, 0, t["\u0275inlineInterpolate"](1, "gank__avatar icon-", l.context.$implicit.name, ""))
            })
        }
        function Pe(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "div", [["class", "gank__hero gank__hero_target"]], null, null, null, null, null)), t["\u0275did"](1, 278528, null, 0, c.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), (n()(), t["\u0275eld"](2, 0, null, null, 0, "div", [], [[8, "className", 0]], null, null, null, null))], function(n, l) {
                n(l, 1, 0, l.context.$implicit.style)
            }, function(n, l) {
                n(l, 2, 0, t["\u0275inlineInterpolate"](1, "gank__avatar icon-", l.context.$implicit.name, ""))
            })
        }
        function Me(n) {
            return t["\u0275vid"](2, [(n()(), t["\u0275eld"](0, 0, null, null, 6, "div", [["class", "gank"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, Ce)), t["\u0275did"](2, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Te)), t["\u0275did"](4, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Pe)), t["\u0275did"](6, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 2, 0, e.hasReasons), n(l, 4, 0, e.attackers), n(l, 6, 0, e.targets)
            }, null)
        }
        var Re = function() {
                function n(n, l) {
                    this.ganks = n, this.ngZone = l, this.subscription = new al.a
                }
                return Object.defineProperty(n.prototype, "mapElementRef", {
                    set: function(n) {
                        this.mapElement = n.nativeElement
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "is720Patch", {
                    get: function() {
                        return el.utc("2018-11-19 19:00:00").unix() <= this.matchDate
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "mapScale", {
                    get: function() {
                        return this.scale
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "hasActiveGank$", {
                    get: function() {
                        return this.ganks.hasActiveGank$
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "activeGankItem$", {
                    get: function() {
                        return this.ganks.activeGankItem$
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "markers$", {
                    get: function() {
                        var n = this;
                        if (this.scale)
                            return this.activeGankItem$.pipe(Object(hn.a)(function(l) {
                                return n.gankList.map(function(e, t) {
                                    return {
                                        type: "point gosu-icon-marker" + (e === l ? " selected" : "") + (e.isUnsuccessful ? " unsuccessful" : ""),
                                        value: (t + 1).toString(),
                                        style: n.calcStyles(e),
                                        handler: n.selectGank.bind(n, e)
                                    }
                                })
                            }))
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.ngAfterContentInit = function() {
                    var n = this;
                    this.subscription.add(this.ngZone.onStable.pipe(Object(ul.a)(1)).subscribe(function() {
                        n.onBgReady()
                    }))
                }, n.prototype.ngOnDestroy = function() {
                    this.subscription.unsubscribe()
                }, n.prototype.onBgReady = function() {
                    this.defineSizes(), this.ganks.toggleHasActiveGank(!0)
                }, n.prototype.onSelectGank = function(n) {
                    this.ganks.toggleHasActiveGank(!0), n.handler && n.handler()
                }, n.prototype.onBlurGank = function() {
                    this.ganks.toggleHasActiveGank(!1)
                }, n.prototype.markerTrackBy = function(n) {
                    return n
                }, n.prototype.selectGank = function(n) {
                    this.ganks.selectGankItem(n), this.ganks.scrollListIntoGank(n)
                }, n.prototype.defineSizes = function() {
                    this.width = this.mapElement.offsetWidth, this.height = this.mapElement.offsetHeight, this.scale = {
                        x: Object(ll.a)().domain([64, 191]).range([0, this.width]),
                        y: Object(ll.a)().domain([191, 64]).range([0, this.height])
                    }
                }, n.prototype.calcStyles = function(n) {
                    return {
                        top: this.scale.y(n.y) + "px",
                        left: this.scale.x(n.x) + "px"
                    }
                }, n
            }(),
            Ie = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".map[_ngcontent-%COMP%]{position:relative;margin:20px 30px 20px 0}.map_preview[_ngcontent-%COMP%]:before{content:'';width:100%;height:100%;display:block;position:absolute;left:0;top:0;background-color:rgba(0,0,0,.5)}.map__bg[_ngcontent-%COMP%]{width:100%;height:0;padding-bottom:100%;display:block}.map_preview[_ngcontent-%COMP%]   .map__marker[_ngcontent-%COMP%]{opacity:1;color:#454545}.map_preview[_ngcontent-%COMP%]   .map__marker[_ngcontent-%COMP%]:before{color:#137044}.map_preview[_ngcontent-%COMP%]   .map__marker.unsuccessful[_ngcontent-%COMP%]:before{color:#5c1b00}.map_preview[_ngcontent-%COMP%]   .map__marker.selected[_ngcontent-%COMP%]:before{color:#0062ff}.map_preview[_ngcontent-%COMP%]   .map__marker.point[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#aaa}.map_preview[_ngcontent-%COMP%]   .map__marker.point.selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}.map__marker[_ngcontent-%COMP%]{position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:opacity .2s ease}.map__marker.selected[_ngcontent-%COMP%]{z-index:2}.map__marker.point[_ngcontent-%COMP%]{display:block;cursor:pointer;margin-left:-22px;margin-top:-50px}.map__marker.point[_ngcontent-%COMP%]:before{color:#53e29f;font-size:44px;display:block;text-shadow:0 2px 5px rgba(0,0,0,.5)}.map__marker.point.unsuccessful[_ngcontent-%COMP%]:before{color:#db4000}.map__marker.point.selected[_ngcontent-%COMP%]:before{color:#0062ff}.map__marker.point[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;position:absolute;font-size:18px;font-weight:700;left:0;width:100%;display:block;text-align:center;top:8px}@media screen and (max-width:1024px){.map[_ngcontent-%COMP%]{margin:0}}"]],
                data: {}
            });
        function we(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "div", [["class", "map__marker"]], null, [[null, "mouseenter"], [null, "mouseleave"]], function(n, l, e) {
                var t = !0,
                    a = n.component;
                return "mouseenter" === l && (t = !1 !== a.onSelectGank(n.context.$implicit) && t), "mouseleave" === l && (t = !1 !== a.onBlurGank() && t), t
            }, null, null)), t["\u0275did"](1, 278528, null, 0, c.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275did"](2, 278528, null, 0, c.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), (n()(), t["\u0275eld"](3, 0, null, null, 1, "span", [["class", "map__marker-value"]], null, null, null, null, null)), (n()(), t["\u0275ted"](4, null, ["", ""]))], function(n, l) {
                n(l, 1, 0, "map__marker", l.context.$implicit.type), n(l, 2, 0, l.context.$implicit.style)
            }, function(n, l) {
                n(l, 4, 0, l.context.$implicit.value)
            })
        }
        function Ae(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "div", [["class", "map__gank"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 2, "gosu-gank-data", [], null, null, null, Me, me)), t["\u0275did"](2, 49152, null, 0, ge, [], {
                gankItem: [0, "gankItem"],
                scale: [1, "scale"]
            }, null), t["\u0275pid"](131072, c.AsyncPipe, [t.ChangeDetectorRef])], function(n, l) {
                var e = l.component;
                n(l, 2, 0, t["\u0275unv"](l, 2, 0, t["\u0275nov"](l, 3).transform(e.activeGankItem$)), e.mapScale)
            }, null)
        }
        function ke(n) {
            return t["\u0275vid"](2, [t["\u0275qud"](402653184, 1, {
                mapElementRef: 0
            }), (n()(), t["\u0275eld"](1, 0, null, null, 9, "div", [["class", "map"]], [[2, "map_preview", null]], null, null, null, null)), t["\u0275pid"](131072, c.AsyncPipe, [t.ChangeDetectorRef]), (n()(), t["\u0275eld"](3, 0, [[1, 0], ["mapElement", 1]], null, 1, "div", [["class", "map__bg"]], null, null, null, null, null)), t["\u0275did"](4, 278528, null, 0, c.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 2, null, we)), t["\u0275did"](6, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"],
                ngForTrackBy: [1, "ngForTrackBy"]
            }, null), t["\u0275pid"](131072, c.AsyncPipe, [t.ChangeDetectorRef]), (n()(), t["\u0275and"](16777216, null, null, 2, null, Ae)), t["\u0275did"](9, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), t["\u0275pid"](131072, c.AsyncPipe, [t.ChangeDetectorRef])], function(n, l) {
                var e = l.component;
                n(l, 4, 0, "map__bg", e.is720Patch ? "icon-gosu-minimap720" : "icon-gosu-minimap"), n(l, 6, 0, t["\u0275unv"](l, 6, 0, t["\u0275nov"](l, 7).transform(e.markers$)), e.markerTrackBy), n(l, 9, 0, t["\u0275unv"](l, 9, 0, t["\u0275nov"](l, 10).transform(e.hasActiveGank$)))
            }, function(n, l) {
                var e = l.component;
                n(l, 1, 0, t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 2).transform(e.hasActiveGank$)))
            })
        }
        var De = e("m9VD"),
            Ee = e("dzgT"),
            Se = function() {
                function n(n) {
                    this.user = n, this.cost$ = new M.a(void 0)
                }
                return Object.defineProperty(n.prototype, "cost", {
                    set: function(n) {
                        this.cost$.next(n)
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.ngOnInit = function() {
                    this.costs$ = Object(Ee.b)(this.cost$.asObservable(), this.user.profileData$).pipe(Object(hn.a)(function(n) {
                        var l = n[0],
                            e = n[1];
                        if (!e)
                            return [{
                                icon: "gold",
                                amount: l
                            }];
                        if (e.money.charge >= l)
                            return [{
                                icon: "eye",
                                amount: l
                            }];
                        var t = [{
                            icon: "gold",
                            amount: l - e.money.charge
                        }];
                        return e.money.charge > 0 && t.unshift({
                            icon: "eye",
                            amount: e.money.charge
                        }), t
                    }))
                }, n
            }(),
            Ne = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".ui-cost__col[_ngcontent-%COMP%]{display:inline-flex;justify-content:center;align-items:center;align-content:center}.ui-cost__col[_ngcontent-%COMP%]:before{content:'+';margin:0 5px}.ui-cost__col[_ngcontent-%COMP%]:first-child:before{content:none}.ui-cost__icon[_ngcontent-%COMP%]{margin-left:2px;flex-grow:0;flex-shrink:0}.ui-cost__value[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:0;letter-spacing:0}"]],
                data: {}
            });
        function Le(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "span", [["class", "ui-cost__col"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 1, "span", [["class", "ui-cost__value"]], null, null, null, null, null)), (n()(), t["\u0275ted"](2, null, ["", ""])), (n()(), t["\u0275eld"](3, 0, null, null, 0, "i", [], [[8, "className", 0]], null, null, null, null))], null, function(n, l) {
                n(l, 2, 0, l.context.$implicit.amount), n(l, 3, 0, t["\u0275inlineInterpolate"](1, "ui-cost__icon icon-", l.context.$implicit.icon, ""))
            })
        }
        function He(n) {
            return t["\u0275vid"](2, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "span", [["class", "ui-cost"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 2, null, Le)), t["\u0275did"](2, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), t["\u0275pid"](131072, c.AsyncPipe, [t.ChangeDetectorRef])], function(n, l) {
                var e = l.component;
                n(l, 2, 0, t["\u0275unv"](l, 2, 0, t["\u0275nov"](l, 3).transform(e.costs$)))
            }, null)
        }
        var Fe = e("O2QY"),
            Ve = function() {
                function n(n, l, e) {
                    this.user = n, this.session = l, this.paymentCallback = e, this.initialState = {
                        x: 0,
                        y: 0
                    }, this.onAnimationDone$ = new t.EventEmitter, this.isAnimationDone = !1
                }
                return Object.defineProperty(n.prototype, "destRect", {
                    get: function() {
                        return this.user.profileData.money.charge < this.cost ? this.paymentCallback.getGoldRects() : this.paymentCallback.getDailyRects()
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.onClick = function() {
                    !this.isAnimationDone && this.session.isAuthenticated() && (this.prepareState ? this.animatePrepare() : this.animateTranslate())
                }, n.prototype.animateTranslate = function() {
                    var n,
                        l,
                        e = this.paymentRef.nativeElement.getBoundingClientRect();
                    this.animationOptions = {
                        value: "purchase",
                        params: (n = je(this.destRect), l = je(e), {
                            x: n.x - l.x,
                            y: n.y - l.y
                        })
                    }
                }, n.prototype.animatePrepare = function() {
                    this.animationOptions = {
                        value: "prepare",
                        params: this.prepareState
                    }
                }, n.prototype.ngOnInit = function() {
                    this.animationOptions = {
                        value: "none",
                        params: this.initialState
                    }
                }, n.prototype.onAnimationDone = function(n) {
                    var l = n.toState;
                    "none" === n.fromState && "prepare" === l && this.animateTranslate(), "purchase" === l && (this.onAnimationDone$.emit(void 0), this.isAnimationDone = !0)
                }, n
            }();
        function je(n) {
            return {
                x: n.left + n.width / 2,
                y: n.top + n.height / 2
            }
        }
        var Ge = t["\u0275crt"]({
            encapsulation: 0,
            styles: [[".payment[_ngcontent-%COMP%]{top:0;left:0;width:100%;height:100%;position:absolute;justify-content:center;align-items:center;display:flex;line-height:1.15}.payment__inner[_ngcontent-%COMP%]{opacity:0;padding:5px 15px;background-color:#0062ff;border-radius:20px;color:#fff;position:relative;z-index:100}"]],
            data: {
                animation: [{
                    type: 7,
                    name: "payment",
                    definitions: [{
                        type: 0,
                        name: "prepare",
                        styles: {
                            type: 6,
                            styles: {
                                transform: "translate({{x}}px, {{y}}px)",
                                opacity: "{{opacity}}"
                            },
                            offset: null
                        },
                        options: {
                            params: {
                                x: 0,
                                y: 0,
                                opacity: 1
                            }
                        }
                    }, {
                        type: 0,
                        name: "purchase",
                        styles: {
                            type: 6,
                            styles: {
                                transform: "translate({{x}}px, {{y}}px)",
                                opacity: 0
                            },
                            offset: null
                        },
                        options: {
                            params: {
                                x: 0,
                                y: 0
                            }
                        }
                    }, {
                        type: 0,
                        name: "none",
                        styles: {
                            type: 6,
                            styles: {
                                transform: "translate({{x}}px, {{y}}px)",
                                opacity: 0
                            },
                            offset: null
                        },
                        options: {
                            params: {
                                x: 0,
                                y: 0
                            }
                        }
                    }, {
                        type: 1,
                        expr: "none => purchase",
                        animation: {
                            type: 4,
                            styles: null,
                            timings: "350ms ease-in-out"
                        },
                        options: null
                    }, {
                        type: 1,
                        expr: "none => prepare",
                        animation: {
                            type: 4,
                            styles: null,
                            timings: "75ms ease-out"
                        },
                        options: null
                    }, {
                        type: 1,
                        expr: "prepare => purchase",
                        animation: {
                            type: 4,
                            styles: null,
                            timings: "300ms ease-in"
                        },
                        options: null
                    }],
                    options: {}
                }]
            }
        });
        function $e(n) {
            return t["\u0275vid"](2, [t["\u0275qud"](402653184, 1, {
                paymentRef: 0
            }), (n()(), t["\u0275eld"](1, 0, null, null, 5, "div", [["class", "payment"]], null, null, null, null, null)), (n()(), t["\u0275eld"](2, 0, [[1, 0], ["payment", 1]], null, 4, "div", [["class", "payment__inner"]], [[24, "@payment", 0]], [[null, "@payment.done"]], function(n, l, e) {
                var t = !0;
                return "@payment.done" === l && (t = !1 !== n.component.onAnimationDone(e) && t), t
            }, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 3, "span", [["class", "payment__content"]], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["- "])), (n()(), t["\u0275eld"](5, 0, null, null, 1, "gosu-cost", [], null, null, null, He, Ne)), t["\u0275did"](6, 114688, null, 0, Se, [C.a], {
                cost: [0, "cost"]
            }, null)], function(n, l) {
                n(l, 6, 0, l.component.cost)
            }, function(n, l) {
                n(l, 2, 0, l.component.animationOptions)
            })
        }
        var ze = function() {
                function n(n, l, e, t) {
                    this.match = n, this.session = l, this.router = e, this.platformId = t
                }
                return Object.defineProperty(n.prototype, "matchData", {
                    get: function() {
                        return this.match.matchData$.getValue()
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.ngOnInit = function() {
                    this.isBrowser = Object(c.isPlatformBrowser)(this.platformId)
                }, n.prototype.openBlock = function() {
                    if (!this.session.isAuthenticated())
                        return this.router.navigate(["/login"]);
                    this.match.openBlock(this.block).subscribe()
                }, n
            }(),
            Ue = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".gap[_ngcontent-%COMP%]{margin-top:30px;margin-bottom:-30px;position:relative;color:#fff;margin-left:-25px}.gap__inner[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;left:0;top:0;display:flex;flex-direction:column;justify-content:center;align-items:center}.gap__title[_ngcontent-%COMP%]{font-size:48px;font-weight:700;line-height:49px;max-width:600px;text-align:center}.gap__text[_ngcontent-%COMP%]{font-size:20px;font-weight:300;margin-top:15px;width:265px;text-align:center}.gap__muted[_ngcontent-%COMP%]{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.69px;margin-top:30px;margin-bottom:10px}.gap__muted_footer[_ngcontent-%COMP%]{opacity:.7;width:245px;line-height:1;font-size:18px;font-weight:300;text-align:center;margin:15px 0 0;text-transform:none}.gap__btn[_ngcontent-%COMP%]{line-height:52px;padding:0;font-size:24px;font-weight:700;width:185px;text-align:center;position:relative}.gap__btn_change[_ngcontent-%COMP%]{font-size:16px;text-transform:lowercase}.gap__btn_change[_ngcontent-%COMP%]:first-letter{text-transform:uppercase}.gap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;display:block;pointer-events:none;min-height:300px}@media screen and (max-width:1024px){.gap[_ngcontent-%COMP%]{margin-top:15px;margin-bottom:-15px}}"]],
                data: {}
            });
        function We(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "div", [["class", "gap__muted"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                n(l, 0, 0, t["\u0275unv"](l, 0, 0, t["\u0275nov"](l, 1).transform("MATCH.UNLOCK_DETAIL_ANYLYSIS")))
            })
        }
        function Ye(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 0, "br", [], null, null, null, null, null))], null, null)
        }
        function Ke(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "gosu-payment-callback", [], null, [[null, "click"]], function(n, l, e) {
                var a = !0,
                    i = n.component;
                return "click" === l && (a = !1 !== t["\u0275nov"](n, 1).onClick() && a), "click" === l && (a = !1 !== i.openBlock() && a), a
            }, $e, Ge)), t["\u0275did"](1, 114688, null, 0, Ve, [C.a, u.a, Fe.a], {
                cost: [0, "cost"],
                initialState: [1, "initialState"],
                prepareState: [2, "prepareState"]
            }, null), t["\u0275pod"](2, {
                x: 0,
                y: 1
            }), t["\u0275pod"](3, {
                x: 0,
                y: 1
            })], function(n, l) {
                var e = n(l, 2, 0, 0, 0),
                    t = n(l, 3, 0, 0, -25);
                n(l, 1, 0, 1, e, t)
            }, null)
        }
        function Be(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "button", [["class", "gap__btn btn btn_primary btn_rounded"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 1, "gosu-cost", [], null, null, null, He, Ne)), t["\u0275did"](2, 114688, null, 0, Se, [C.a], {
                cost: [0, "cost"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Ke)), t["\u0275did"](4, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 2, 0, 1), n(l, 4, 0, e.isBrowser)
            }, null)
        }
        function Ze(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "button", [["class", "gap__btn btn btn_primary btn_rounded gap__btn_change"]], [[8, "innerHTML", 1]], [[null, "click"]], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.openSwitcher() && t), t
            }, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                n(l, 0, 0, t["\u0275unv"](l, 0, 0, t["\u0275nov"](l, 1).transform("MATCH.ACTIVATE_BTN")))
            })
        }
        function Xe(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "div", [["class", "gap__muted gap__muted_footer"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                n(l, 0, 0, t["\u0275unv"](l, 0, 0, t["\u0275nov"](l, 1).transform("MATCH.FOR_PREMIUM_USERS")))
            })
        }
        function qe(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 16, "div", [["class", "gap"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 0, "div", [], [[8, "className", 0]], null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 14, "div", [["class", "gap__inner"]], null, null, null, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 1, "div", [["class", "gap__title"]], null, null, null, null, null)), (n()(), t["\u0275ted"](4, null, ["", ""])), (n()(), t["\u0275eld"](5, 0, null, null, 1, "div", [["class", "gap__text"]], null, null, null, null, null)), (n()(), t["\u0275ted"](6, null, ["", ""])), (n()(), t["\u0275and"](16777216, null, null, 1, null, We)), t["\u0275did"](8, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Ye)), t["\u0275did"](10, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Be)), t["\u0275did"](12, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Ze)), t["\u0275did"](14, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Xe)), t["\u0275did"](16, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 8, 0, 2 !== e.matchData.experiment_id), n(l, 10, 0, e.matchData.experiment_id >= 2), n(l, 12, 0, 2 !== e.matchData.experiment_id), n(l, 14, 0, e.matchData.experiment_id >= 2), n(l, 16, 0, e.matchData.experiment_id >= 2)
            }, function(n, l) {
                var e = l.component;
                n(l, 1, 0, t["\u0275inlineInterpolate"](1, "icon-", e.block, "")), n(l, 4, 0, e.title), n(l, 6, 0, e.text)
            })
        }
        var Qe,
            Je = ((Qe = {})[Ll] = "All", Qe.unsuccessful = "failed", Qe),
            nt = {
                teamsavers: "MATCH.GANK_FAIL_TEAMSAVERS",
                tower_attacks: "MATCH.GANK_FAIL_TOWER_ATTACKS",
                save_tp: "MATCH.GANK_FAIL_SAVE_TP",
                save_ability: "MATCH.GANK_FAIL_SAVE_ABILITY",
                show_hero_on_ward: "MATCH.GANK_FAIL_SHOW_HERO_ON_WARD",
                heal: "MATCH.GANK_FAIL_HEAL"
            },
            lt = function() {
                function n(n, l, e, t) {
                    this.match = n, this.route = l, this.ganks = e, this.platformId = t, this.sectionMap = R.a
                }
                return Object.defineProperty(n.prototype, "listElementRef", {
                    set: function(n) {
                        n && this.ganks.registerListRef(n)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "gankList", {
                    set: function(n) {
                        n && this.ganks.registerGanks(n)
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.getSummary = function(n) {
                    return {
                        title: "Kill attempts",
                        description: "Your kill attempts success rate is " + n.efficiency + "%",
                        major: n.efficiency + "%",
                        value: 100 - n.efficiency
                    }
                }, Object.defineProperty(n.prototype, "isBrowser", {
                    get: function() {
                        return Object(c.isPlatformBrowser)(this.platformId)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "reasonsSummary", {
                    get: function() {
                        var n = this,
                            l = Array.prototype.concat.apply([], Object.keys(this.data.data).map(function(l) {
                                return n.data.data[l]
                            })).filter(function(n) {
                                var l = n.reasons;
                                return l && l.length > 0
                            }).reduce(function(n, l) {
                                return l.reasons.forEach(function(l) {
                                    var e = l.key;
                                    return n[e] = n[e] ? n[e] + 1 : 1
                                }), n
                            }, {});
                        return Object.keys(l).map(function(n) {
                            return {
                                i18nKey: nt[n],
                                image: et(n),
                                count: l[n]
                            }
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "successfulAttemptsCount", {
                    get: function() {
                        return this.allGangs.filter(function(n) {
                            return !n.isUnsuccessful
                        }).length
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "unsuccessfulAttemptsCount", {
                    get: function() {
                        return this.allGangs.filter(function(n) {
                            return n.isUnsuccessful
                        }).length
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "overallGold", {
                    get: function() {
                        return this.allGangs.reduce(function(n, l) {
                            return n + (l.gold || 0)
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "overallXP", {
                    get: function() {
                        return this.allGangs.reduce(function(n, l) {
                            return n + (l.xp || 0)
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "filters", {
                    get: function() {
                        return [Ll].concat(["best", "worst", "solo", "team", "unsuccessful"]).map(function(n) {
                            return {
                                key: n,
                                title: Je[n] || n
                            }
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "activeFilter$", {
                    get: function() {
                        return this.ganks.activeFilter$
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "allGangs", {
                    get: function() {
                        var n = this.data.data,
                            l = n.solo,
                            e = n.team,
                            t = n.unsuccessful,
                            a = n.worst;
                        return t.forEach(function(n) {
                            return n.isUnsuccessful = !0
                        }), a.forEach(function(n) {
                            return n.isUnsuccessful = !0
                        }), [].concat(l, e, t).sort(function(n, l) {
                            return n.start - l.start
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "ganks$", {
                    get: function() {
                        var n = this;
                        return this.activeFilter$.pipe(Object(hn.a)(function(l) {
                            return l === Ll ? n.allGangs : n.data.data[l]
                        }))
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.ngOnInit = function() {
                    var n = this;
                    this.matchData$ = this.match.matchData$, this.subscription = this.route.params.subscribe(function() {
                        n.data.data && (n.ganks.selectFilter(Ll), n.ganks.selectGankItem(n.allGangs[0]))
                    })
                }, n.prototype.ngOnDestroy = function() {
                    this.subscription && this.subscription.unsubscribe()
                }, n.prototype.selectFilter = function(n) {
                    this.ganks.selectFilter(n), this.ganks.selectGankItem(n === Ll ? this.allGangs[0] : this.data.data[n][0])
                }, n.prototype.filterTrackBy = function(n, l) {
                    return l.key
                }, n.prototype.trackByIndex = function(n) {
                    return n
                }, n
            }();
        function et(n) {
            switch (n) {
            case "teamsavers":
                return "bait";
            case "tower_attacks":
                return "tower";
            case "save_tp":
                return "tpscroll";
            case "save_ability":
                return "dazzle_shallow_grave";
            case "show_hero_on_ward":
                return "ward_observer";
            case "heal":
                return "flask"
            }
        }
        var tt = t["\u0275crt"]({
            encapsulation: 0,
            styles: [[".ganks[_ngcontent-%COMP%]{width:100%;margin:30px auto 0}.ganks__content[_ngcontent-%COMP%]{display:flex;background-color:#000;margin:0 -60px}.ganks__aside[_ngcontent-%COMP%]{display:flex;flex-shrink:0;flex-direction:column;width:330px;margin-right:30px;min-height:700px;padding-bottom:20px}.ganks__header[_ngcontent-%COMP%]{border-bottom:1px solid #4a4a4a;padding:0 30px}.ganks__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;padding:10px 0 15px;font-size:34px;font-weight:700;color:#fff}.ganks__text[_ngcontent-%COMP%]{font-size:20px;font-weight:700;color:#fff;padding:0 30px;margin-top:15px}.ganks__text_success[_ngcontent-%COMP%]{color:#53e29f}.ganks__text_fail[_ngcontent-%COMP%]{color:#db4000}.ganks__filters[_ngcontent-%COMP%]{padding-top:15px;border-top:1px solid #4a4a4a;text-align:center;margin-bottom:20px}.ganks__filter[_ngcontent-%COMP%]{color:#fff;display:inline-block;font-size:13px;font-weight:700;text-transform:capitalize;padding:5px 10px;cursor:pointer}.ganks__filter[_ngcontent-%COMP%]:hover{opacity:.7}.ganks__filter_active[_ngcontent-%COMP%]{border-radius:12px;background-color:#0062ff}.ganks__filter_active[_ngcontent-%COMP%]:hover{opacity:1}.ganks__list[_ngcontent-%COMP%]{height:300px;overflow:hidden}.ganks__map[_ngcontent-%COMP%]{width:100%}.ganks__efficiency[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 30px;border-top:1px solid #4a4a4a;margin-top:15px;flex-shrink:0}.ganks__efficiency-value[_ngcontent-%COMP%]{font-size:40px;font-weight:700;line-height:60px;margin-right:5px}.ganks__efficiency-image[_ngcontent-%COMP%]{width:50px;height:50px;margin-right:10px;flex-shrink:0}.ganks__efficiency-text[_ngcontent-%COMP%]{font-size:13px;font-weight:700;width:100px;color:#fff}.ganks__reasons[_ngcontent-%COMP%]{flex-shrink:0;padding:0 30px;margin-top:5px}.ganks__reason[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:10px}.ganks__reason-image[_ngcontent-%COMP%]{width:25px;height:25px;border-radius:50%;margin-right:3px}.ganks__reason-text[_ngcontent-%COMP%]{color:#fff;font-size:13px;font-weight:700}.ganks__reason[_ngcontent-%COMP%]   .icon-flask[_ngcontent-%COMP%]{background-size:130% 100%}.ganks__paragraph[_ngcontent-%COMP%]{margin:5px 0}.mock[_ngcontent-%COMP%]{position:relative}.mock__text[_ngcontent-%COMP%]{position:absolute;top:300px;left:230px;color:#fff}"]],
            data: {}
        });
        function at(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "p", [["class", "ganks__paragraph"]], null, null, null, null, null)), (n()(), t["\u0275ted"](1, null, ["", ":"])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                n(l, 1, 0, t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 2).transform("MATCH.GANK_TEXT_UNSUCCESSFUL_FAILS")))
            })
        }
        function it(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "div", [["class", "ganks__reason"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 0, "div", [], [[8, "className", 0]], null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 2, "div", [["class", "ganks__reason-text"]], null, null, null, null, null)), (n()(), t["\u0275ted"](3, null, ["", " \xd7 ", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                n(l, 1, 0, t["\u0275inlineInterpolate"](1, "ganks__reason-image icon-", l.context.$implicit.image, "")), n(l, 3, 0, t["\u0275unv"](l, 3, 0, t["\u0275nov"](l, 4).transform(l.context.$implicit.i18nKey)), l.context.$implicit.count)
            })
        }
        function ut(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "div", [["class", "ganks__filter"]], [[2, "ganks__filter_active", null]], [[null, "click"]], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.selectFilter(n.context.$implicit.key) && t), t
            }, null, null)), t["\u0275pid"](131072, c.AsyncPipe, [t.ChangeDetectorRef]), (n()(), t["\u0275ted"](2, null, ["", ""])), t["\u0275ppd"](3, 2), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                var e = l.component;
                n(l, 0, 0, l.context.$implicit.key === t["\u0275unv"](l, 0, 0, t["\u0275nov"](l, 1).transform(e.activeFilter$)));
                var a = t["\u0275unv"](l, 2, 0, t["\u0275nov"](l, 4).transform(t["\u0275unv"](l, 2, 0, n(l, 3, 0, t["\u0275nov"](l.parent.parent, 3), l.context.$implicit.title, "MATCH.GANGS_FILTER_"))));
                n(l, 2, 0, a)
            })
        }
        function rt(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "gosu-ganks-item", [], null, null, null, $l, Vl)), t["\u0275did"](1, 49152, [[2, 4]], 0, Fl, [Hl, t.ElementRef], {
                idx: [0, "idx"],
                gank: [1, "gank"]
            }, null)], function(n, l) {
                n(l, 1, 0, l.context.index, l.context.$implicit)
            }, null)
        }
        function ot(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "perfect-scrollbar", [], [[2, "ps-show-limits", null], [2, "ps-show-active", null]], null, null, zl.b, zl.a)), t["\u0275did"](1, 507904, [[1, 4]], 0, Ul.b, [t.NgZone, t.ChangeDetectorRef, t.PLATFORM_ID], null, null), (n()(), t["\u0275and"](16777216, null, 0, 2, null, rt)), t["\u0275did"](3, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), t["\u0275pid"](131072, c.AsyncPipe, [t.ChangeDetectorRef])], function(n, l) {
                var e = l.component;
                n(l, 1, 0), n(l, 3, 0, t["\u0275unv"](l, 3, 0, t["\u0275nov"](l, 4).transform(e.ganks$)))
            }, function(n, l) {
                n(l, 0, 0, t["\u0275nov"](l, 1).autoPropagation, t["\u0275nov"](l, 1).scrollIndicators)
            })
        }
        function st(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "gosu-ganks-map", [["content-premium", "real"]], null, null, null, ke, Ie)), t["\u0275did"](1, 1228800, null, 0, Re, [Hl, t.NgZone], {
                matchDate: [0, "matchDate"],
                gankList: [1, "gankList"]
            }, null), t["\u0275pid"](131072, c.AsyncPipe, [t.ChangeDetectorRef])], function(n, l) {
                var e = l.component;
                n(l, 1, 0, e.matchDate, t["\u0275unv"](l, 1, 1, t["\u0275nov"](l, 2).transform(e.ganks$)))
            }, null)
        }
        function ct(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 61, "gosu-match-section", [], [[8, "id", 0]], null, null, fl.b, fl.a)), t["\u0275did"](1, 49152, null, 0, gl.a, [ml.a, g.a], {
                rate: [0, "rate"],
                header: [1, "header"]
            }, null), (n()(), t["\u0275eld"](2, 0, null, 1, 2, "div", [["class", "ganks__overall-efficiency hide@desktop hide@tablet"], ["section-header-minor", ""]], [[4, "color", null]], null, null, null, null)), t["\u0275did"](3, 16384, null, 0, De.a, [], {
                rate: [0, "rate"]
            }, null), (n()(), t["\u0275ted"](4, null, ["", "%"])), (n()(), t["\u0275eld"](5, 0, null, 2, 56, "div", [["class", "ganks__content"], ["section-content", ""]], null, null, null, null, null)), (n()(), t["\u0275eld"](6, 0, null, null, 45, "div", [["class", "ganks__aside"]], null, null, null, null, null)), (n()(), t["\u0275eld"](7, 0, null, null, 2, "div", [["class", "ganks__header"]], null, null, null, null, null)), (n()(), t["\u0275eld"](8, 0, null, null, 1, "h2", [], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](10, 0, null, null, 22, "div", [["class", "ganks__summary"]], null, null, null, null, null)), (n()(), t["\u0275eld"](11, 0, null, null, 3, "div", [["class", "ganks__text"]], null, null, null, null, null)), (n()(), t["\u0275eld"](12, 0, null, null, 2, "span", [["class", "ganks__text_success"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pod"](13, {
                successfulAttemptsCount: 0,
                overallGold: 1,
                overallXP: 2
            }), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](15, 0, null, null, 5, "div", [["class", "ganks__text"]], null, null, null, null, null)), (n()(), t["\u0275eld"](16, 0, null, null, 2, "p", [["class", "ganks__paragraph"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pod"](17, {
                unsuccessfulAttemptsCount: 0
            }), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275and"](16777216, null, null, 1, null, at)), t["\u0275did"](20, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](21, 0, null, null, 2, "div", [["class", "ganks__reasons"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, it)), t["\u0275did"](23, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"],
                ngForTrackBy: [1, "ngForTrackBy"]
            }, null), (n()(), t["\u0275eld"](24, 0, null, null, 8, "div", [["class", "ganks__text"]], null, null, null, null, null)), (n()(), t["\u0275eld"](25, 0, null, null, 5, "span", [["class", "ganks__text_success"]], null, null, null, null, null)), (n()(), t["\u0275ted"](26, null, ["", " "])), t["\u0275ppd"](27, 1), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), t["\u0275ppd"](30, 2), (n()(), t["\u0275eld"](31, 0, null, null, 1, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](33, 0, null, null, 12, "div", [["class", "ganks__efficiency"]], null, null, null, null, null)), (n()(), t["\u0275eld"](34, 0, null, null, 2, "gosu-ranks-tooltip", [], null, null, null, hl.b, hl.a)), t["\u0275did"](35, 49152, null, 0, vl.a, [], null, null), (n()(), t["\u0275eld"](36, 0, null, 0, 0, "div", [], [[8, "className", 0]], null, null, null, null)), (n()(), t["\u0275eld"](37, 0, null, null, 8, "div", [["class", "ganks__efficiency-text"]], null, null, null, null, null)), (n()(), t["\u0275eld"](38, 0, null, null, 7, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275ppd"](39, 1), t["\u0275ppd"](40, 2), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), t["\u0275ppd"](42, 1), t["\u0275pod"](43, {
                rank: 0,
                color: 1
            }), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), t["\u0275ppd"](45, 1), (n()(), t["\u0275eld"](46, 0, null, null, 2, "div", [["class", "ganks__filters"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, ut)), t["\u0275did"](48, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"],
                ngForTrackBy: [1, "ngForTrackBy"]
            }, null), (n()(), t["\u0275eld"](49, 0, null, null, 2, "div", [["class", "ganks__list"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, ot)), t["\u0275did"](51, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](52, 0, null, null, 9, "div", [["class", "ganks__map"]], null, null, null, null, null)), (n()(), t["\u0275eld"](53, 0, null, null, 8, "gosu-premium-content", [], null, null, null, X.b, X.a)), t["\u0275did"](54, 114688, null, 0, q.a, [C.a], {
                block: [0, "block"]
            }, null), (n()(), t["\u0275and"](16777216, null, 1, 1, null, st)), t["\u0275did"](56, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](57, 0, null, 0, 4, "div", [["class", "mock"], ["content-premium", "mock"]], null, null, null, null, null)), (n()(), t["\u0275eld"](58, 0, null, null, 1, "div", [["class", "mock__text"]], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["That is a mock data, sorry :("])), (n()(), t["\u0275eld"](60, 0, null, null, 1, "img", [["alt", "ganks mock image"], ["height", "639"], ["width", "639"]], [[8, "src", 4]], null, null, null, null)), t["\u0275ppd"](61, 1)], function(n, l) {
                var e = l.component;
                n(l, 1, 0, e.sectionMap.gangs, !1), n(l, 3, 0, 100 - e.data.summary.efficiency), n(l, 20, 0, e.reasonsSummary.length), n(l, 23, 0, e.reasonsSummary, e.trackByIndex), n(l, 48, 0, e.filters, e.filterTrackBy), n(l, 51, 0, e.isBrowser), n(l, 54, 0, e.sectionMap.gangs.key), n(l, 56, 0, e.isBrowser)
            }, function(n, l) {
                var e = l.component;
                n(l, 0, 0, e.data.name), n(l, 2, 0, t["\u0275nov"](l, 3).hostColor), n(l, 4, 0, e.data.summary.efficiency), n(l, 8, 0, t["\u0275unv"](l, 8, 0, t["\u0275nov"](l, 9).transform("MATCH.KILLING_ATTEMPTS")));
                var a = t["\u0275unv"](l, 12, 0, t["\u0275nov"](l, 14).transform("MATCH.GANK_TEXT_SUCCESS", n(l, 13, 0, e.successfulAttemptsCount, e.overallGold, e.overallXP)));
                n(l, 12, 0, a);
                var i = t["\u0275unv"](l, 16, 0, t["\u0275nov"](l, 18).transform("MATCH.GANK_TEXT_UNSUCCESSFUL", n(l, 17, 0, e.unsuccessfulAttemptsCount)));
                n(l, 16, 0, i);
                var u = t["\u0275unv"](l, 26, 0, n(l, 30, 0, t["\u0275nov"](l.parent, 0), t["\u0275unv"](l, 26, 0, n(l, 27, 0, t["\u0275nov"](l.parent, 1), e.data.summary.duration_all_gangs)), "m[" + t["\u0275unv"](l, 26, 0, t["\u0275nov"](l, 28).transform("COMMON.MINUTE_CHAR")) + "] s[" + t["\u0275unv"](l, 26, 0, t["\u0275nov"](l, 29).transform("COMMON.SECOND_CHAR")) + "]"));
                n(l, 26, 0, u), n(l, 31, 0, t["\u0275unv"](l, 31, 0, t["\u0275nov"](l, 32).transform("MATCH.SPENT_IN_TOTAL"))), n(l, 36, 0, t["\u0275inlineInterpolate"](1, "ganks__efficiency-image icon-mmr_", e.data.summary.shield, ""));
                var r = t["\u0275unv"](l, 38, 0, n(l, 45, 0, t["\u0275nov"](l.parent, 2), t["\u0275unv"](l, 38, 0, t["\u0275nov"](l, 44).transform("MATCH.YOU_PLAYED_IT_ON", n(l, 43, 0, t["\u0275unv"](l, 38, 0, t["\u0275nov"](l, 41).transform(t["\u0275unv"](l, 38, 0, n(l, 40, 0, t["\u0275nov"](l.parent, 3), t["\u0275unv"](l, 38, 0, n(l, 39, 0, t["\u0275nov"](l.parent, 4), e.data.summary.shield)), "COMMON.RANK_")))), t["\u0275unv"](l, 38, 0, n(l, 42, 0, t["\u0275nov"](l.parent, 5), e.data.summary.shield - 1 / 6 * 100)))))));
                n(l, 38, 0, r);
                var o = t["\u0275unv"](l, 60, 0, n(l, 61, 0, t["\u0275nov"](l.parent, 6), "/assets/images/match-death.png"));
                n(l, 60, 0, o)
            })
        }
        function dt(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "gosu-section-gap", [], null, null, null, qe, Ue)), t["\u0275did"](1, 114688, null, 0, ze, [g.a, u.a, s.Router, t.PLATFORM_ID], {
                block: [0, "block"],
                title: [1, "title"],
                text: [2, "text"]
            }, null)], function(n, l) {
                n(l, 1, 0, l.component.data.name, "Kill attempts", "")
            }, null)
        }
        function pt(n) {
            return t["\u0275vid"](2, [t["\u0275pid"](0, An.DateFormatPipe, []), t["\u0275pid"](0, kn.FromUnixPipe, []), t["\u0275pid"](0, bl.a, [Ol.c]), t["\u0275pid"](0, yl.a, []), t["\u0275pid"](0, Cl.a, []), t["\u0275pid"](0, Tl.a, []), t["\u0275pid"](0, Z.a, []), t["\u0275qud"](671088640, 1, {
                listElementRef: 0
            }), t["\u0275qud"](671088640, 2, {
                gankList: 1
            }), (n()(), t["\u0275eld"](9, 0, null, null, 2, "div", [["class", "ganks"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, ct)), t["\u0275did"](11, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, dt)), t["\u0275did"](13, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 11, 0, e.data.data), n(l, 13, 0, !e.data.data)
            }, null)
        }
        var _t = function() {
                function n(n) {
                    this.elementRef = n
                }
                return Object.defineProperty(n.prototype, "laneYPoint", {
                    get: function() {
                        var n = this.elementRef.nativeElement;
                        return n.offsetTop - this.containerElement.offsetTop + n.offsetHeight / 2
                    },
                    enumerable: !0,
                    configurable: !0
                }), n
            }(),
            ft = t["\u0275crt"]({
                encapsulation: 0,
                styles: [["[_nghost-%COMP%]{display:block}.entity[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:10px;box-shadow:0 0 5px rgba(0,0,0,.5);border-radius:33px;padding:7px 10px}.entity_damage[_ngcontent-%COMP%]   .entity__priority[_ngcontent-%COMP%]{display:none}.entity__priority[_ngcontent-%COMP%]{font-size:16px;font-weight:700;line-height:1;color:#db4000;margin-right:5px}.entity_recommended[_ngcontent-%COMP%]   .entity__hero-descriptions[_ngcontent-%COMP%]{display:none}.entity__hero[_ngcontent-%COMP%]{display:flex;align-items:center}.entity__hero[_ngcontent-%COMP%] + .entity__hero[_ngcontent-%COMP%]{margin-top:5px}.entity__hero-avatar[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;margin-right:5px}.entity__hero-name[_ngcontent-%COMP%]{font-size:13px;font-weight:700;line-height:15px;color:#fff}.entity__hero-data[_ngcontent-%COMP%]{display:flex;font-size:11px;font-weight:700;margin-top:3px;line-height:1}.entity__hero-values[_ngcontent-%COMP%]{margin-right:5px;color:#db4000}.entity__hero-descriptions[_ngcontent-%COMP%]{color:#fff;font-weight:300}@media screen and (max-width:1024px){.entity__hero[_ngcontent-%COMP%]{height:50px}.entity__hero-name[_ngcontent-%COMP%]{font-size:12px;line-height:12px}.entity__hero-avatar[_ngcontent-%COMP%]{width:30px;height:30px}.entity__hero-descriptions[_ngcontent-%COMP%]{font-size:9px}.entity__hero-values[_ngcontent-%COMP%]{margin-right:2px}.entity[_ngcontent-%COMP%]{padding:5px}}"]],
                data: {}
            });
        function gt(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (n()(), t["\u0275ted"](1, null, ["", ""])), t["\u0275ppd"](2, 2)], null, function(n, l) {
                var e = l.component,
                    a = t["\u0275unv"](l, 1, 0, n(l, 2, 0, t["\u0275nov"](l.parent.parent, 0), e.entity.damageScaled, 2));
                n(l, 1, 0, a)
            })
        }
        function mt(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (n()(), t["\u0275ted"](1, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                n(l, 1, 0, t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 2).transform("MATCH.FOCUS_DAMAGE_TO_MAX_HP")))
            })
        }
        function ht(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 15, "div", [["class", "entity__hero"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 0, "div", [], [[8, "className", 0]], null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 13, "div", [["class", "entity__hero-info"]], null, null, null, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 1, "div", [["class", "entity__hero-name"]], null, null, null, null, null)), (n()(), t["\u0275ted"](4, null, ["", ""])), (n()(), t["\u0275eld"](5, 0, null, null, 10, "div", [["class", "entity__hero-data"]], null, null, null, null, null)), (n()(), t["\u0275eld"](6, 0, null, null, 4, "div", [["class", "entity__hero-values"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, gt)), t["\u0275did"](8, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](9, 0, null, null, 1, "div", [], null, null, null, null, null)), (n()(), t["\u0275ted"](10, null, ["", ""])), (n()(), t["\u0275eld"](11, 0, null, null, 4, "div", [["class", "entity__hero-descriptions"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, mt)), t["\u0275did"](13, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](14, 0, null, null, 1, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], function(n, l) {
                var e = l.component;
                n(l, 8, 0, null != e.entity.damageScaled), n(l, 13, 0, null != e.entity.damageScaled)
            }, function(n, l) {
                var e = l.component;
                n(l, 1, 0, t["\u0275inlineInterpolate"](1, "entity__hero-avatar icon-", l.context.$implicit.name, "")), n(l, 4, 0, l.context.$implicit.localized_name), n(l, 10, 0, e.entity.damage), n(l, 14, 0, t["\u0275unv"](l, 14, 0, t["\u0275nov"](l, 15).transform("MATCH.ALL_DAMAGE")))
            })
        }
        function vt(n) {
            return t["\u0275vid"](2, [t["\u0275pid"](0, Dn.a, []), (n()(), t["\u0275eld"](1, 0, null, null, 6, "div", [["class", "entity"]], null, null, null, null, null)), t["\u0275did"](2, 278528, null, 0, c.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (n()(), t["\u0275eld"](3, 0, null, null, 1, "div", [["class", "entity__priority"]], null, null, null, null, null)), (n()(), t["\u0275ted"](4, null, ["", ""])), (n()(), t["\u0275eld"](5, 0, null, null, 2, "div", [["class", "entity__heroes"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, ht)), t["\u0275did"](7, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 2, 0, "entity", e.entity.damage ? "entity_damage" : "entity_recommended"), n(l, 7, 0, e.entity.heroes)
            }, function(n, l) {
                n(l, 4, 0, l.component.entity.priority)
            })
        }
        var xt = function() {
                return function() {}
            }(),
            yt = t["\u0275crt"]({
                encapsulation: 0,
                styles: [["[_nghost-%COMP%]{font-size:0;display:inline-block;vertical-align:super}.hero[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;font-size:16px;line-height:1}.hero__avatar[_ngcontent-%COMP%]{width:15px;height:15px;padding:2px;border-radius:50%;display:inline-block;vertical-align:middle}.hero__name[_ngcontent-%COMP%]{color:#53e29f;display:inline;vertical-align:bottom}"]],
                data: {}
            });
        function bt(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "div", [["class", "hero"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 0, "div", [], [[8, "className", 0]], null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 1, "div", [["class", "hero__name"]], null, null, null, null, null)), (n()(), t["\u0275ted"](3, null, ["", ""]))], null, function(n, l) {
                var e = l.component;
                n(l, 1, 0, t["\u0275inlineInterpolate"](1, "hero__avatar icon-", e.hero.name, "")), n(l, 3, 0, e.hero.localized_name)
            })
        }
        var Ot,
            Ct = e("F/XL"),
            Tt = e("VnD/"),
            Pt = e("9NS1"),
            Mt = e("6OcZ"),
            Rt = ((Ot = {})[Mt.a.Desktop] = 60, Ot[Mt.a.Tablet] = 60, Ot[Mt.a.Mobile] = 20, Ot),
            It = function() {
                function n(n, l, e) {
                    this.device = n, this.cd = l, this.platformId = e
                }
                return Object.defineProperty(n.prototype, "isBrowser", {
                    get: function() {
                        return Object(c.isPlatformBrowser)(this.platformId)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "width", {
                    get: function() {
                        return this.svgElement.nativeElement.offsetWidth
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "lines$", {
                    get: function() {
                        var n = this;
                        return this.isBrowser ? this.entities.pipe(Object(Tt.a)(function(n) {
                            return !!n
                        }), Object(hn.a)(function(l) {
                            var e = l.reduce(function(n, l) {
                                    return n[l.entity.damage ? "damage" : "rec"].push(l), n
                                }, {
                                    damage: [],
                                    rec: []
                                }),
                                t = e.damage,
                                a = e.rec.reduce(function(n, l) {
                                    return l.entity.heroes.forEach(function(e) {
                                        return n[e.id] = l
                                    }), n
                                }, {});
                            return t.map(function(l) {
                                var e = a[l.entity.heroes[0].id],
                                    t = Rt[n.device.getCurrentDevice()];
                                return {
                                    meta: [{
                                        x: 2.5,
                                        y: l.laneYPoint
                                    }, {
                                        x: n.width - 2.5,
                                        y: e.laneYPoint
                                    }],
                                    data: "M0," + l.laneYPoint + " C" + t + "," + l.laneYPoint + " " + (n.width - t) + "," + e.laneYPoint + " " + n.width + "," + e.laneYPoint,
                                    modificator: l.entity.priority === e.entity.priority ? "standard" : l.entity.priority < e.entity.priority ? "negative" : "positive"
                                }
                            })
                        })) : Object(Ct.a)([])
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.ngOnInit = function() {
                    var n = this;
                    this.subscription = this.lines$.subscribe(function(l) {
                        n.lines = l, n.circles = Array.prototype.concat.apply([], l.map(function(n) {
                            var l = n.modificator;
                            return n.meta.map(function(n) {
                                return zn.__assign({}, n, {
                                    modificator: l
                                })
                            })
                        })), n.cd.detectChanges()
                    })
                }, n.prototype.ngOnDestroy = function() {
                    this.subscription && this.subscription.unsubscribe()
                }, n
            }(),
            wt = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".svg__parent[_ngcontent-%COMP%]{height:calc(100% + 40px);box-sizing:border-box;margin-top:-40px}svg[_ngcontent-%COMP%]{width:100%;height:100%}svg[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{fill:none;stroke-width:1px}svg[_ngcontent-%COMP%]   .line_standard[_ngcontent-%COMP%]{stroke:#747474}svg[_ngcontent-%COMP%]   .line_positive[_ngcontent-%COMP%]{stroke:#53e29f}svg[_ngcontent-%COMP%]   .line_negative[_ngcontent-%COMP%]{stroke:#db4000}svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:none}svg[_ngcontent-%COMP%]   circle.standard[_ngcontent-%COMP%]{fill:#747474}svg[_ngcontent-%COMP%]   circle.positive[_ngcontent-%COMP%]{fill:#53e29f}svg[_ngcontent-%COMP%]   circle.negative[_ngcontent-%COMP%]{fill:#db4000}@media screen and (max-width:1024px){svg[_ngcontent-%COMP%]{margin-top:-10px}}"]],
                data: {}
            });
        function At(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 0, ":svg:path", [], [[1, "class", 0], [1, "d", 0]], null, null, null, null))], null, function(n, l) {
                n(l, 0, 0, "line line_" + l.context.$implicit.modificator, l.context.$implicit.data)
            })
        }
        function kt(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 0, ":svg:circle", [["r", "2.5"]], [[1, "class", 0], [1, "cx", 0], [1, "cy", 0]], null, null, null, null))], null, function(n, l) {
                n(l, 0, 0, l.context.$implicit.modificator, l.context.$implicit.x, l.context.$implicit.y)
            })
        }
        function Dt(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, [[1, 0], ["svg", 1]], null, 5, "div", [["class", "svg__parent"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 4, ":svg:svg", [], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, At)), t["\u0275did"](3, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, kt)), t["\u0275did"](5, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 3, 0, e.lines), n(l, 5, 0, e.circles)
            }, null)
        }
        function Et(n) {
            return t["\u0275vid"](2, [t["\u0275qud"](671088640, 1, {
                svgElement: 0
            }), (n()(), t["\u0275and"](16777216, null, null, 1, null, Dt)), t["\u0275did"](2, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                n(l, 2, 0, l.component.isBrowser)
            }, null)
        }
        var St = function() {
                function n(n) {
                    this.match = n, this.sectionMap = R.a, this.entitiesSubject = new M.a(void 0)
                }
                return Object.defineProperty(n.prototype, "dataReceiver", {
                    set: function(n) {
                        if (this.data = n, n.description) {
                            var l = n.description.split("{{hero}}"),
                                e = l[0],
                                t = l[1],
                                a = Un.a[this.match.getCurrentUser().hero_id];
                            this.content = {
                                start: e,
                                end: t,
                                hero: a
                            }
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.getSummary = function(n) {
                    return {
                        title: "Damage priority",
                        description: "Correct prioritization of target selection for damaging heroes in team fights",
                        major: n.concordance.toFixed(0) + "%",
                        value: 100 - n.concordance
                    }
                }, Object.defineProperty(n.prototype, "performance", {
                    get: function() {
                        var n = this.data.actual.reduce(function(n, l) {
                                return l.targets.forEach(function(e) {
                                    return n[e] = l.priority
                                }), n
                            }, {}),
                            l = this.data.recommended.reduce(function(n, l) {
                                return l.targets.forEach(function(e) {
                                    return n[e] = l.priority
                                }), n
                            }, {});
                        return Object.keys(l).reduce(function(e, t, a, i) {
                            return e + (n[t] === l[t] ? 100 / i.length : 0)
                        }, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "damageList", {
                    get: function() {
                        return this.data.actual.sort(function(n, l) {
                            return n.priority - l.priority
                        }).map(function(n) {
                            return {
                                damage: n.damage,
                                heroes: [Un.a[n.targets[0]]],
                                priority: n.priority,
                                damageScaled: n.damage_scaled
                            }
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "recommendedList", {
                    get: function() {
                        return this.data.recommended.sort(function(n, l) {
                            return n.priority - l.priority
                        }).map(function(n) {
                            return {
                                priority: n.priority,
                                heroes: n.targets.map(function(n) {
                                    return Un.a[n]
                                })
                            }
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "entityList", {
                    get: function() {
                        return this.entitiesSubject.asObservable()
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.ngOnInit = function() {
                    this.isExperimentalBlur$ = this.match.matchData$.pipe(Object(hn.a)(function(n) {
                        var l = n.experiment_id;
                        return 1 === l || !(3 !== l || !n.config.find(function(n) {
                                return n.name === R.a.focusPriority.key
                            }))
                    }))
                }, n.prototype.ngAfterViewInit = function() {
                    var n = this;
                    this.entities.notifyOnChanges(), this.entitiesSubject.next(this.entities), this.subscription = this.entities.changes.subscribe(function() {
                        return n.entitiesSubject.next(n.entities)
                    })
                }, n.prototype.ngOnDestroy = function() {
                    this.subscription && this.subscription.unsubscribe()
                }, n
            }(),
            Nt = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".focus[_ngcontent-%COMP%]{width:100%;margin:30px auto 0}.focus__content[_ngcontent-%COMP%]{display:flex;background-color:#000;margin:0 -60px}.focus__aside[_ngcontent-%COMP%]{flex-shrink:0;width:330px}.focus__header[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;padding:20px 30px 10px;margin:0 0 20px;color:#fff;font-size:34px;font-weight:700;line-height:34px;border-bottom:1px solid #4a4a4a}.focus__summary[_ngcontent-%COMP%]{box-sizing:border-box;width:100%;padding:0 30px;font-size:16px;font-weight:300;color:#fff}.focus__assessment[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 30px;border-top:1px solid #4a4a4a;border-bottom:1px solid #4a4a4a;margin-top:15px;color:#fff}.focus__assessment-value[_ngcontent-%COMP%]{font-size:40px;font-weight:700;line-height:60px;margin-right:5px}.focus__assessment-image[_ngcontent-%COMP%]{width:50px;height:50px;margin-right:10px;flex-shrink:0}.focus__assessment-description[_ngcontent-%COMP%]{width:100px;font-size:13px;font-weight:700}.focus__result[_ngcontent-%COMP%]{width:100%;display:flex;padding:40px 30px 50px;box-sizing:border-box}.focus__recommended[_ngcontent-%COMP%]   .focus__subheader[_ngcontent-%COMP%]{margin-left:23px}.focus__subheader[_ngcontent-%COMP%]{font-size:11px;font-weight:700;line-height:20px;text-transform:uppercase;letter-spacing:1px;color:#fff;margin-bottom:15px}.focus__recommende[_ngcontent-%COMP%]   .focus__subheader[_ngcontent-%COMP%]{margin-left:15px}.focus__graphs[_ngcontent-%COMP%]{width:160px;flex-shrink:0;box-sizing:border-box;padding:0 15px}.mock[_ngcontent-%COMP%]{position:relative}.mock__text[_ngcontent-%COMP%]{position:absolute;top:210px;left:210px;color:#fff}"]],
                data: {}
            });
        function Lt(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "gosu-focus-entity", [], null, null, null, vt, ft)), t["\u0275did"](1, 49152, [[1, 4]], 0, _t, [t.ElementRef], {
                entity: [0, "entity"],
                containerElement: [1, "containerElement"]
            }, null)], function(n, l) {
                n(l, 1, 0, l.context.$implicit, t["\u0275nov"](l.parent, 28))
            }, null)
        }
        function Ht(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "gosu-focus-entity", [], null, null, null, vt, ft)), t["\u0275did"](1, 49152, [[1, 4]], 0, _t, [t.ElementRef], {
                entity: [0, "entity"],
                containerElement: [1, "containerElement"]
            }, null)], function(n, l) {
                n(l, 1, 0, l.context.$implicit, t["\u0275nov"](l.parent, 28))
            }, null)
        }
        function Ft(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 48, "gosu-match-section", [], [[8, "id", 0]], null, null, fl.b, fl.a)), t["\u0275did"](1, 49152, null, 0, gl.a, [ml.a, g.a], {
                rate: [0, "rate"],
                header: [1, "header"]
            }, null), (n()(), t["\u0275eld"](2, 0, null, 2, 46, "div", [["class", "focus__content"], ["section-content", ""]], null, null, null, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 21, "aside", [["class", "focus__aside"]], null, null, null, null, null)), (n()(), t["\u0275eld"](4, 0, null, null, 1, "h2", [["class", "focus__header"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](6, 0, null, null, 5, "div", [["class", "focus__summary"]], null, null, null, null, null)), (n()(), t["\u0275eld"](7, 0, null, null, 4, "div", [["class", "focus__description"]], null, null, null, null, null)), (n()(), t["\u0275ted"](8, null, [" ", " "])), (n()(), t["\u0275eld"](9, 0, null, null, 1, "gosu-focus-hero", [], null, null, null, bt, yt)), t["\u0275did"](10, 49152, null, 0, xt, [], {
                hero: [0, "hero"]
            }, null), (n()(), t["\u0275ted"](11, null, [" ", " "])), (n()(), t["\u0275eld"](12, 0, null, null, 12, "div", [["class", "focus__assessment"]], null, null, null, null, null)), (n()(), t["\u0275eld"](13, 0, null, null, 2, "gosu-ranks-tooltip", [], null, null, null, hl.b, hl.a)), t["\u0275did"](14, 49152, null, 0, vl.a, [], null, null), (n()(), t["\u0275eld"](15, 0, null, 0, 0, "div", [], [[8, "className", 0]], null, null, null, null)), (n()(), t["\u0275eld"](16, 0, null, null, 8, "div", [["class", "focus__assessment-description"]], null, null, null, null, null)), (n()(), t["\u0275eld"](17, 0, null, null, 7, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275ppd"](18, 1), t["\u0275ppd"](19, 2), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), t["\u0275ppd"](21, 1), t["\u0275pod"](22, {
                rank: 0,
                color: 1
            }), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), t["\u0275ppd"](24, 1), (n()(), t["\u0275eld"](25, 0, null, null, 23, "div", [["class", "focus__result-wrapper"]], null, null, null, null, null)), (n()(), t["\u0275eld"](26, 0, null, null, 22, "gosu-premium-content", [], null, null, null, X.b, X.a)), t["\u0275did"](27, 114688, null, 0, q.a, [C.a], {
                block: [0, "block"]
            }, null), (n()(), t["\u0275eld"](28, 0, [["container", 1]], 1, 15, "div", [["class", "focus__result"], ["content-premium", "real"]], null, null, null, null, null)), (n()(), t["\u0275eld"](29, 0, null, null, 5, "div", [["class", "focus__damage"]], null, null, null, null, null)), (n()(), t["\u0275eld"](30, 0, null, null, 2, "div", [["class", "focus__subheader"]], null, null, null, null, null)), (n()(), t["\u0275ted"](31, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275and"](16777216, null, null, 1, null, Lt)), t["\u0275did"](34, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275eld"](35, 0, null, null, 2, "div", [["class", "focus__graphs"]], null, null, null, null, null)), (n()(), t["\u0275eld"](36, 0, null, null, 1, "gosu-focus-canvas", [], null, null, null, Et, wt)), t["\u0275did"](37, 245760, null, 0, It, [Pt.a, t.ChangeDetectorRef, t.PLATFORM_ID], {
                entities: [0, "entities"]
            }, null), (n()(), t["\u0275eld"](38, 0, null, null, 5, "div", [["class", "focus__recommended"]], null, null, null, null, null)), (n()(), t["\u0275eld"](39, 0, null, null, 2, "div", [["class", "focus__subheader"]], null, null, null, null, null)), (n()(), t["\u0275ted"](40, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275and"](16777216, null, null, 1, null, Ht)), t["\u0275did"](43, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275eld"](44, 0, null, 0, 4, "div", [["class", "mock"], ["content-premium", "mock"]], null, null, null, null, null)), (n()(), t["\u0275eld"](45, 0, null, null, 1, "div", [["class", "mock__text"]], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["That is a mock data, sorry :("])), (n()(), t["\u0275eld"](47, 0, null, null, 1, "img", [["alt", "focus mock image"], ["height", "445"], ["width", "582"]], [[8, "src", 4]], null, null, null, null)), t["\u0275ppd"](48, 1)], function(n, l) {
                var e = l.component;
                n(l, 1, 0, e.sectionMap.focusPriority, !1), n(l, 10, 0, e.content.hero), n(l, 27, 0, e.sectionMap.focusPriority.key), n(l, 34, 0, e.damageList), n(l, 37, 0, e.entityList), n(l, 43, 0, e.recommendedList)
            }, function(n, l) {
                var e = l.component;
                n(l, 0, 0, e.data.name), n(l, 4, 0, t["\u0275unv"](l, 4, 0, t["\u0275nov"](l, 5).transform("MATCH.FOCUS_ON_ENEMY_HEROES"))), n(l, 8, 0, e.content.start), n(l, 11, 0, e.content.end), n(l, 15, 0, t["\u0275inlineInterpolate"](1, "focus__assessment-image icon-mmr_", e.data.summary.shield, ""));
                var a = t["\u0275unv"](l, 17, 0, n(l, 24, 0, t["\u0275nov"](l.parent, 0), t["\u0275unv"](l, 17, 0, t["\u0275nov"](l, 23).transform("MATCH.YOU_PLAYED_IT_ON", n(l, 22, 0, t["\u0275unv"](l, 17, 0, t["\u0275nov"](l, 20).transform(t["\u0275unv"](l, 17, 0, n(l, 19, 0, t["\u0275nov"](l.parent, 1), t["\u0275unv"](l, 17, 0, n(l, 18, 0, t["\u0275nov"](l.parent, 2), e.data.summary.shield)), "COMMON.RANK_")))), t["\u0275unv"](l, 17, 0, n(l, 21, 0, t["\u0275nov"](l.parent, 3), e.data.summary.shield - 1 / 6 * 100)))))));
                n(l, 17, 0, a), n(l, 31, 0, t["\u0275unv"](l, 31, 0, t["\u0275nov"](l, 32).transform("MATCH.FOCUS_YOUR_PRIORITY"))), n(l, 40, 0, t["\u0275unv"](l, 40, 0, t["\u0275nov"](l, 41).transform("MATCH.FOCUS_RECOMMENDED")));
                var i = t["\u0275unv"](l, 47, 0, n(l, 48, 0, t["\u0275nov"](l.parent, 4), "/assets/images/focus-result.png"));
                n(l, 47, 0, i)
            })
        }
        function Vt(n) {
            return t["\u0275vid"](2, [t["\u0275pid"](0, bl.a, [Ol.c]), t["\u0275pid"](0, yl.a, []), t["\u0275pid"](0, Cl.a, []), t["\u0275pid"](0, Tl.a, []), t["\u0275pid"](0, Z.a, []), t["\u0275qud"](671088640, 1, {
                entities: 1
            }), (n()(), t["\u0275eld"](6, 0, null, null, 2, "div", [["class", "focus"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, Ft)), t["\u0275did"](8, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                n(l, 8, 0, l.component.data.data)
            }, null)
        }
        var jt = function() {
                function n(n, l) {
                    void 0 === n && (n = 1 / 0), void 0 === l && (l = -1 / 0), this.min = n, this.max = l
                }
                return n.prototype.calcRate = function(n) {
                    return n !== this.min ? n !== this.max ? (n - this.min) / (this.max - this.min) * 100 : 100 : 0
                }, n
            }(),
            Gt = function() {
                return function() {
                    this.rateColors = ["#da9d84", "#da9d84", "#da9d84", "#da9d84", "#da9d84", "#da9d84", "#da9d84", "#d6724a", "#cf5e17", "#aa2626"], this.hotKeys = ["q", "w", "e", "r", "d", "f"], this.L = {
                        mouse_quickbuy: "Purchase Quickbuy",
                        mouse_courier_use: "Courier Deliver Items",
                        mouse_ability_train: "Learn Ability",
                        mouse_tp_purchase: "Purchase Town Portal Scroll",
                        mouse_take_from_stash: "Take Stash Items",
                        mouse_glyph: "Activate Glyph"
                    }
                }
            }(),
            $t = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".lt-event[_ngcontent-%COMP%]{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.lt-event[_ngcontent-%COMP%]:hover, .lt-event_selected[_ngcontent-%COMP%]{background-color:#1a1a1a}.lt-event__major[_ngcontent-%COMP%]{display:flex;align-items:center;padding:8px 12px}.lt-event__table[_ngcontent-%COMP%]{width:100%}.lt-event__wasted[_ngcontent-%COMP%]{width:50px;font-size:20px;color:#aa2626;flex-shrink:0}.lt-event__title[_ngcontent-%COMP%]{font-size:13px}.lt-event__count[_ngcontent-%COMP%]{width:20px;font-size:9px;font-weight:700;text-align:right;letter-spacing:.69px}.lt-event__explainer[_ngcontent-%COMP%]{display:none}"]],
                data: {}
            });
        function zt(n) {
            return t["\u0275vid"](2, [t["\u0275pid"](0, An.DateFormatPipe, []), t["\u0275pid"](0, kn.FromUnixPipe, []), t["\u0275pid"](0, yl.a, []), (n()(), t["\u0275eld"](3, 0, null, null, 19, "div", [["class", "lt-event"]], null, null, null, null, null)), t["\u0275did"](4, 278528, null, 0, c.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (n()(), t["\u0275eld"](5, 0, null, null, 15, "div", [["class", "lt-event__major"]], null, null, null, null, null)), (n()(), t["\u0275eld"](6, 0, null, null, 14, "table", [["class", "lt-event__table"]], null, null, null, null, null)), (n()(), t["\u0275eld"](7, 0, null, null, 13, "tbody", [], null, null, null, null, null)), (n()(), t["\u0275eld"](8, 0, null, null, 12, "tr", [], null, null, null, null, null)), (n()(), t["\u0275eld"](9, 0, null, null, 5, "td", [["class", "lt-event__wasted"]], [[4, "color", null]], null, null, null, null)), t["\u0275did"](10, 16384, null, 0, De.a, [], {
                rateColors: [0, "rateColors"],
                rate: [1, "rate"]
            }, null), (n()(), t["\u0275ted"](11, null, ["", "", ""])), t["\u0275ppd"](12, 1), t["\u0275ppd"](13, 2), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](15, 0, null, null, 3, "td", [["class", "lt-event__title"]], null, null, null, null, null)), (n()(), t["\u0275ted"](16, null, ["", ""])), t["\u0275ppd"](17, 2), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](19, 0, null, null, 1, "td", [["class", "lt-event__count"]], null, null, null, null, null)), (n()(), t["\u0275ted"](20, null, ["\xd7", ""])), (n()(), t["\u0275eld"](21, 0, null, null, 1, "div", [["class", "lt-event__explainer"]], null, null, null, null, null)), t["\u0275ncd"](null, 0)], function(n, l) {
                var e = l.component;
                n(l, 4, 0, "lt-event", e.isSelected && "lt-event_selected"), n(l, 10, 0, e.rateColors, e.range.calcRate(e.event.wasted_time))
            }, function(n, l) {
                var e = l.component;
                n(l, 9, 0, t["\u0275nov"](l, 10).hostColor);
                var a = t["\u0275unv"](l, 11, 0, n(l, 13, 0, t["\u0275nov"](l, 0), t["\u0275unv"](l, 11, 0, n(l, 12, 0, t["\u0275nov"](l, 1), e.event.wasted_time)), "s.S"));
                n(l, 11, 0, a, t["\u0275unv"](l, 11, 1, t["\u0275nov"](l, 14).transform("COMMON.SECOND_CHAR")));
                var i = t["\u0275unv"](l, 16, 0, t["\u0275nov"](l, 18).transform(t["\u0275unv"](l, 16, 0, n(l, 17, 0, t["\u0275nov"](l, 2), e.event.type, "MATCH.LOST_TIME_"))));
                n(l, 16, 0, i), n(l, 20, 0, e.event.events_count)
            })
        }
        var Ut = function() {
                function n(n) {
                    this.match = n, this.sectionMap = R.a
                }
                return Object.defineProperty(n.prototype, "lostTimeEvents", {
                    get: function() {
                        return (this.data.mouse_wasted_time_list || []).filter(function(n) {
                            return !!n.wasted_time
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "lostTimeRange", {
                    get: function() {
                        return this.lostTimeEvents.reduce(function(n, l) {
                            var e = l.wasted_time;
                            return e < n.min && (n.min = e), e > n.max && (n.max = e), n
                        }, new jt)
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.ngOnInit = function() {
                    this.matchData$ = this.match.matchData$, this.prepareViewData(this.data)
                }, n.prototype.ngOnChanges = function(n) {
                    n.data.previousValue && n.data.previousValue !== n.data.currentValue && this.prepareViewData(n.data.currentValue)
                }, n.getSummary = function(n) {
                    return {
                        title: "Hotkeys efficiency",
                        description: "The time that were lost because of using mouse instead of hotkeys",
                        major: el.unix(n.mouse_wasted_time_total).format("s.S") + "s",
                        value: 100 / 30 * n.mouse_wasted_time_total
                    }
                }, n.prototype.ngOnDestroy = function() {
                    this.tabsSubscription && this.tabsSubscription.unsubscribe()
                }, Object.defineProperty(n.prototype, "lostTimeRate", {
                    get: function() {
                        var n = this.data.summary.mouse_wasted_time_total;
                        return n > 50 ? 100 : 10 * Math.floor(n / 5)
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.prepareViewData = function(n) {
                    this.currentEventType = n.data ? n.mouse_wasted_time_list[0].type : void 0
                }, n
            }(),
            Wt = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".lost-time[_ngcontent-%COMP%]{color:#fff;width:100%;margin:30px auto 0}.lost-time__top[_ngcontent-%COMP%]{display:flex;align-items:center;padding:10px 0;border-bottom:2px solid #494949}.lost-time__rate[_ngcontent-%COMP%]{font-size:60px;font-weight:700}.lost-time__subheader[_ngcontent-%COMP%]{width:305px;margin-left:20px;font-size:20px;line-height:22px}.lost-time__filtration[_ngcontent-%COMP%]{padding:10px 0 9px;border-bottom:1px solid #494949}.lost-time__filter[_ngcontent-%COMP%]{padding:0 14px;line-height:24px;background-color:transparent}.lost-time__filter.selected[_ngcontent-%COMP%]{cursor:default;background-color:#0062ff}.lost-time__filter.selected[_ngcontent-%COMP%]:hover{opacity:1}.lost-time__row[_ngcontent-%COMP%]{padding-top:30px}.lost-time__events[_ngcontent-%COMP%]{padding-right:30px}.lost-time__link[_ngcontent-%COMP%]{position:relative;display:block;width:100%;height:0;padding-bottom:62.79069767%}.lost-time__link[_ngcontent-%COMP%]:hover{opacity:1}.lost-time__link-img[_ngcontent-%COMP%]{display:block;width:100%;height:0;padding-bottom:62.79069767%}.lost-time__content[_ngcontent-%COMP%]{padding-bottom:50px}.lost-time__preload[_ngcontent-%COMP%]{position:absolute;top:-9999999px;left:-9999999px;height:0;visibility:hidden}.lost-time__preload[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:1px;height:1px}@media screen and (max-width:1024px){.lost-time[_ngcontent-%COMP%]{margin-top:15px}.lost-time__content[_ngcontent-%COMP%]{padding-bottom:30px}.lost-time__top[_ngcontent-%COMP%]{border-bottom-width:1px}.lost-time__subheader[_ngcontent-%COMP%]{font-size:13px;line-height:15px}.lost-time__row[_ngcontent-%COMP%]{padding-top:15px}.lost-time__events[_ngcontent-%COMP%]{padding:0}}.mock[_ngcontent-%COMP%]{position:relative}.mock__text[_ngcontent-%COMP%]{position:absolute;top:200px;left:350px;color:#fff}"]],
                data: {}
            });
        function Yt(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "gosu-lost-time-event", [], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== (n.component.currentEventType = n.context.$implicit.type) && t), t
            }, zt, $t)), t["\u0275did"](1, 49152, [[1, 4]], 0, Gt, [], {
                event: [0, "event"],
                range: [1, "range"],
                isSelected: [2, "isSelected"]
            }, null), (n()(), t["\u0275eld"](2, 0, null, 0, 1, "div", [["class", "lost-time__link icon-background"]], null, null, null, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 0, "span", [], [[8, "className", 0]], null, null, null, null))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, l.context.$implicit, e.lostTimeRange, e.currentEventType === l.context.$implicit.type)
            }, function(n, l) {
                n(l, 3, 0, t["\u0275inlineInterpolate"](1, "lost-time__link-img icon-", l.component.currentEventType, ""))
            })
        }
        function Kt(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 29, "div", [["class", "lost-time"]], [[8, "id", 0]], null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 28, "gosu-match-section", [], null, null, null, fl.b, fl.a)), t["\u0275did"](2, 49152, null, 0, gl.a, [ml.a, g.a], {
                rate: [0, "rate"],
                shield: [1, "shield"]
            }, null), (n()(), t["\u0275eld"](3, 0, null, 0, 1, "h2", [["section-title", ""]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](5, 0, null, 2, 24, "div", [["class", "lost-time__content"], ["section-content", ""]], null, null, null, null, null)), (n()(), t["\u0275eld"](6, 0, null, null, 8, "div", [["class", "lost-time__top"]], null, null, null, null, null)), (n()(), t["\u0275eld"](7, 0, null, null, 5, "div", [["class", "lost-time__rate"]], [[4, "color", null]], null, null, null, null)), t["\u0275did"](8, 16384, null, 0, De.a, [], {
                rate: [0, "rate"]
            }, null), (n()(), t["\u0275ted"](9, null, [" ", "", " "])), t["\u0275ppd"](10, 1), t["\u0275ppd"](11, 2), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](13, 0, null, null, 1, "div", [["class", "lost-time__subheader"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](15, 0, null, null, 14, "gosu-premium-content", [], null, null, null, X.b, X.a)), t["\u0275did"](16, 114688, null, 0, q.a, [C.a], {
                block: [0, "block"]
            }, null), (n()(), t["\u0275eld"](17, 0, null, 1, 7, "div", [["class", "lost-time__row row"], ["content-premium", "real"]], null, null, null, null, null)), (n()(), t["\u0275eld"](18, 0, null, null, 3, "div", [["class", "gr-4 gr-12@mobile"]], null, null, null, null, null)), (n()(), t["\u0275eld"](19, 0, null, null, 2, "div", [["class", "lost-time__events"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, Yt)), t["\u0275did"](21, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275eld"](22, 0, null, null, 2, "div", [["class", "lost-time__gap gr-8 hide@mobile"]], null, null, null, null, null)), (n()(), t["\u0275eld"](23, 0, null, null, 1, "div", [["class", "lost-time__link icon-background"]], null, null, null, null, null)), (n()(), t["\u0275eld"](24, 0, null, null, 0, "div", [], [[8, "className", 0]], null, null, null, null)), (n()(), t["\u0275eld"](25, 0, null, 0, 4, "div", [["class", "mock"], ["content-premium", "mock"]], null, null, null, null, null)), (n()(), t["\u0275eld"](26, 0, null, null, 1, "div", [["class", "mock__text"]], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["That is a mock data, sorry :("])), (n()(), t["\u0275eld"](28, 0, null, null, 1, "img", [["alt", "lost time mock image"], ["height", "405"], ["width", "905"]], [[8, "src", 4]], null, null, null, null)), t["\u0275ppd"](29, 1)], function(n, l) {
                var e = l.component;
                n(l, 2, 0, e.sectionMap.lostTime, e.data.summary.shield), n(l, 8, 0, e.lostTimeRate), n(l, 16, 0, e.sectionMap.lostTime.key), n(l, 21, 0, e.lostTimeEvents)
            }, function(n, l) {
                var e = l.component;
                n(l, 0, 0, e.data.name), n(l, 3, 0, t["\u0275unv"](l, 3, 0, t["\u0275nov"](l, 4).transform("MATCH.LOST_TIME_TITLE"))), n(l, 7, 0, t["\u0275nov"](l, 8).hostColor);
                var a = t["\u0275unv"](l, 9, 0, n(l, 11, 0, t["\u0275nov"](l.parent, 0), t["\u0275unv"](l, 9, 0, n(l, 10, 0, t["\u0275nov"](l.parent, 1), e.data.summary.mouse_wasted_time_total)), "s.S"));
                n(l, 9, 0, a, t["\u0275unv"](l, 9, 1, t["\u0275nov"](l, 12).transform("COMMON.SECOND_CHAR"))), n(l, 13, 0, t["\u0275unv"](l, 13, 0, t["\u0275nov"](l, 14).transform("MATCH.LOST_TIME"))), n(l, 24, 0, t["\u0275inlineInterpolate"](1, "lost-time__link-img icon-", e.currentEventType, ""));
                var i = t["\u0275unv"](l, 28, 0, n(l, 29, 0, t["\u0275nov"](l.parent, 2), "/assets/images/lost-time.png"));
                n(l, 28, 0, i)
            })
        }
        function Bt(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "gosu-section-gap", [], null, null, null, qe, Ue)), t["\u0275did"](1, 114688, null, 0, ze, [g.a, u.a, s.Router, t.PLATFORM_ID], {
                block: [0, "block"],
                title: [1, "title"],
                text: [2, "text"]
            }, null)], function(n, l) {
                n(l, 1, 0, l.component.data.name, "Lost time", "Time you have lost for using mouse instead of hotkeys")
            }, null)
        }
        function Zt(n) {
            return t["\u0275vid"](2, [t["\u0275pid"](0, An.DateFormatPipe, []), t["\u0275pid"](0, kn.FromUnixPipe, []), t["\u0275pid"](0, Z.a, []), t["\u0275qud"](671088640, 1, {
                tabs: 1
            }), (n()(), t["\u0275and"](16777216, null, null, 1, null, Kt)), t["\u0275did"](5, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Bt)), t["\u0275did"](7, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 5, 0, e.data.data), n(l, 7, 0, !e.data.data)
            }, null)
        }
        var Xt = function() {
                return function(n) {
                    this.state = n
                }
            }(),
            qt = function(n) {
                return n[n.Active = 0] = "Active", n[n.Marked = 1] = "Marked", n[n.Muted = 2] = "Muted", n
            }({}),
            Qt = function() {
                function n() {}
                return Object.defineProperty(n.prototype, "indicators", {
                    get: function() {
                        var n = this.totalCount - this.activeCount - this.killedCount;
                        return [].concat(Jt(this.activeCount, qt.Active), Jt(n, qt.Marked), Jt(this.killedCount, qt.Muted))
                    },
                    enumerable: !0,
                    configurable: !0
                }), n
            }();
        function Jt(n, l) {
            for (var e = new Xt(l), t = [], a = 0; a < n; a++)
                t.push(e);
            return t
        }
        var na = t["\u0275crt"]({
            encapsulation: 0,
            styles: [[".indicator[_ngcontent-%COMP%]{display:inline-block;width:5px;height:5px;margin-top:10px;margin-right:10px;background-color:#171717;border-radius:50%}.indicator_0[_ngcontent-%COMP%]{background-color:#0062ff}.indicator_1[_ngcontent-%COMP%]{background-color:#db4000}.indicator__list[_ngcontent-%COMP%]{width:65px}@media screen and (min-width:1361px){.indicator[_ngcontent-%COMP%]:nth-child(-n+5){margin-top:0}.indicator[_ngcontent-%COMP%]:nth-child(5n){margin-right:0}}@media screen and (min-width:1025px) and (max-width:1360px){.indicator[_ngcontent-%COMP%]:nth-child(-n+5){margin-top:0}.indicator[_ngcontent-%COMP%]:nth-child(5n){margin-right:0}}@media screen and (max-width:1024px){.indicator[_ngcontent-%COMP%]{margin-top:0;margin-bottom:10px;margin-right:15px}.indicator__list[_ngcontent-%COMP%]{width:calc(100% + 20px);margin:0 auto}}"]],
            data: {}
        });
        function la(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 0, "div", [], [[8, "className", 0]], null, null, null, null))], null, function(n, l) {
                n(l, 0, 0, t["\u0275inlineInterpolate"](1, "indicator indicator_", l.context.$implicit.state, ""))
            })
        }
        function ea(n) {
            return t["\u0275vid"](2, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "div", [["class", "indicator__list"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, la)), t["\u0275did"](2, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(n, l) {
                n(l, 2, 0, l.component.indicators)
            }, null)
        }
        var ta = function() {
                return function() {}
            }(),
            aa = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".card[_ngcontent-%COMP%]{padding:11px 22px 22px;color:#fff;background-color:#171717}.card__title[_ngcontent-%COMP%]{margin-bottom:11px;font-size:9px;font-weight:700;letter-spacing:.69px;text-transform:uppercase}"]],
                data: {}
            });
        function ia(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "div", [["class", "card"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 1, "div", [["class", "card__title"]], null, null, null, null, null)), (n()(), t["\u0275ted"](2, null, ["", ""])), (n()(), t["\u0275eld"](3, 0, null, null, 1, "div", [["class", "card__content"]], null, null, null, null, null)), t["\u0275ncd"](null, 0)], null, function(n, l) {
                n(l, 2, 0, l.component.title)
            })
        }
        var ua = {
                OTHER: void 0,
                NOT_TRIED_TO_ATTACK: void 0,
                LATE_CREEP_STATS: void 0,
                TOWER_CREEP_STATS: void 0,
                DEATHS_WHILE_TRADING: void 0,
                EARLY_CREEP_STATS: void 0
            },
            ra = function() {
                function n(n) {
                    this.match = n, this.sectionMap = R.a, this.activeFilter = 0
                }
                return n.getSummary = function(n) {
                    return {
                        title: "Farming",
                        description: "Creeps that should be killed on your lane",
                        major: Math.floor(100 - n.creeps_lost_percent) + "%",
                        minor: n.creeps_killed + "/" + n.creeps_total + " creeps \nwere killed",
                        value: n.creeps_lost_percent
                    }
                }, Object.defineProperty(n.prototype, "creepStats", {
                    get: function() {
                        return this.data.creep_stats_list.filter(function(n) {
                            return !!n.value && ua.hasOwnProperty(n.description.toUpperCase())
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.ngOnInit = function() {
                    this.matchData$ = this.match.matchData$
                }, n.prototype.ngOnChanges = function(n) {
                    var l = n.data,
                        e = l.previousValue;
                    e && e !== l.currentValue && (this.activeFilter = 0)
                }, n
            }(),
            oa = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".farm[_ngcontent-%COMP%]{width:100%;margin:30px auto 0}.farm__top[_ngcontent-%COMP%]{display:flex;align-items:center;padding:7px 0 10px;border-bottom:2px solid #494949}.farm__rate[_ngcontent-%COMP%]{font-size:60px;font-weight:700;display:flex}.farm__dl[_ngcontent-%COMP%]{margin:0 10px}.farm__heading[_ngcontent-%COMP%]{max-width:420px;margin-left:20px;font-size:20px;line-height:22px;color:#fff}.farm__info[_ngcontent-%COMP%]{display:flex;padding-top:30px}.farm__indicator[_ngcontent-%COMP%]{margin-right:30px}.farm__detail[_ngcontent-%COMP%]{display:flex;align-items:center;padding:13px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(255,255,255,0)}.farm__detail_active[_ngcontent-%COMP%]{background-color:#171717}.farm__detail-count[_ngcontent-%COMP%]{width:40px;font-size:24px;font-weight:700;color:#db4000}.farm__detail-description[_ngcontent-%COMP%]{font-size:16px;color:#fff}.farm__sidebar[_ngcontent-%COMP%]{padding-top:30px}.farm__card[_ngcontent-%COMP%]{margin-top:20px}.farm__card[_ngcontent-%COMP%]:first-child{margin-top:0}.farm__content[_ngcontent-%COMP%]{padding-bottom:85px}@media screen and (max-width:1024px){.farm[_ngcontent-%COMP%]{margin-top:10px}.farm__top[_ngcontent-%COMP%]{border-bottom:0;padding-bottom:0}.farm__heading[_ngcontent-%COMP%]{width:auto;font-size:13px;line-height:15px}.farm__info[_ngcontent-%COMP%]{flex-direction:column;padding-top:23px}.farm__indicator[_ngcontent-%COMP%]{margin-right:0;margin-bottom:15px}.farm__content[_ngcontent-%COMP%]{padding-bottom:30px}}.info__badge[_ngcontent-%COMP%]{font-size:60px;font-weight:700;color:#d2977e}.info__content[_ngcontent-%COMP%]{color:#d2977e}.info_muted[_ngcontent-%COMP%]{font-size:24px;font-weight:300;line-height:28px;color:#7ec2d2}.mock[_ngcontent-%COMP%]{position:relative}.mock__text[_ngcontent-%COMP%]{left:350px;position:absolute;top:140px;color:#fff}"]],
                data: {}
            });
        function sa(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 7, "div", [["class", "farm__detail"]], null, [[null, "mouseenter"]], function(n, l, e) {
                var t = !0;
                return "mouseenter" === l && (t = !1 !== (n.component.activeFilter = n.context.index) && t), t
            }, null, null)), t["\u0275did"](1, 278528, null, 0, c.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (n()(), t["\u0275eld"](2, 0, null, null, 1, "div", [["class", "farm__detail-count"]], null, null, null, null, null)), (n()(), t["\u0275ted"](3, null, ["", ""])), (n()(), t["\u0275eld"](4, 0, null, null, 3, "div", [["class", "farm__detail-description"]], null, null, null, null, null)), (n()(), t["\u0275ted"](5, null, ["", ""])), t["\u0275ppd"](6, 2), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], function(n, l) {
                n(l, 1, 0, "farm__detail", l.component.activeFilter === l.context.index ? "farm__detail_active" : "")
            }, function(n, l) {
                n(l, 3, 0, l.context.$implicit.value);
                var e = t["\u0275unv"](l, 5, 0, t["\u0275nov"](l, 7).transform(t["\u0275unv"](l, 5, 0, n(l, 6, 0, t["\u0275nov"](l.parent.parent, 0), l.context.$implicit.description, "MATCH.FARMING_REASON_"))));
                n(l, 5, 0, e)
            })
        }
        function ca(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 49, "div", [["class", "farm"]], [[8, "id", 0]], null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 48, "gosu-match-section", [], null, null, null, fl.b, fl.a)), t["\u0275did"](2, 49152, null, 0, gl.a, [ml.a, g.a], {
                rate: [0, "rate"],
                shield: [1, "shield"]
            }, null), (n()(), t["\u0275eld"](3, 0, null, 0, 2, "h2", [["section-title", ""]], null, null, null, null, null)), (n()(), t["\u0275ted"](4, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](6, 0, null, 2, 43, "div", [["class", "farm__content"], ["section-content", ""]], null, null, null, null, null)), (n()(), t["\u0275eld"](7, 0, null, null, 11, "div", [["class", "farm__top"]], null, null, null, null, null)), (n()(), t["\u0275eld"](8, 0, null, null, 8, "div", [["class", "farm__rate"]], [[4, "color", null]], null, null, null, null)), t["\u0275did"](9, 16384, null, 0, De.a, [], {
                rate: [0, "rate"]
            }, null), (n()(), t["\u0275eld"](10, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](11, null, ["", ""])), (n()(), t["\u0275eld"](12, 0, null, null, 2, "span", [["class", "farm__dl"]], null, null, null, null, null)), (n()(), t["\u0275ted"](13, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](15, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](16, null, ["", ""])), (n()(), t["\u0275eld"](17, 0, null, null, 1, "div", [["class", "farm__heading"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](19, 0, null, null, 30, "gosu-premium-content", [], null, null, null, X.b, X.a)), t["\u0275did"](20, 114688, null, 0, q.a, [C.a], {
                block: [0, "block"]
            }, null), (n()(), t["\u0275eld"](21, 0, null, 1, 23, "div", [["class", "farm__row row"], ["content-premium", "real"]], null, null, null, null, null)), (n()(), t["\u0275eld"](22, 0, null, null, 7, "div", [["class", "gr-adapt gr-8@tablet gr-8@desktop"]], null, null, null, null, null)), (n()(), t["\u0275eld"](23, 0, null, null, 6, "div", [["class", "farm__info"]], null, null, null, null, null)), (n()(), t["\u0275eld"](24, 0, null, null, 2, "div", [["class", "farm__indicator"]], null, null, null, null, null)), (n()(), t["\u0275eld"](25, 0, null, null, 1, "gosu-farm-rate-indicator", [], null, null, null, ea, na)), t["\u0275did"](26, 49152, null, 0, Qt, [], {
                stats: [0, "stats"],
                totalCount: [1, "totalCount"],
                activeCount: [2, "activeCount"],
                killedCount: [3, "killedCount"]
            }, null), (n()(), t["\u0275eld"](27, 0, null, null, 2, "div", [["class", "farm__details"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, sa)), t["\u0275did"](29, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275eld"](30, 0, null, null, 14, "aside", [["class", "farm__sidebar gr-adapt gr-4@desktop gr-4@tablet"]], null, null, null, null, null)), (n()(), t["\u0275eld"](31, 0, null, null, 13, "div", [["class", "farm__card"]], null, null, null, null, null)), (n()(), t["\u0275eld"](32, 0, null, null, 12, "gosu-info-card", [], null, null, null, ia, aa)), t["\u0275did"](33, 49152, null, 0, ta, [], {
                title: [0, "title"]
            }, null), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](35, 0, null, 0, 9, "div", [["class", "info info_primary"]], null, null, null, null, null)), (n()(), t["\u0275eld"](36, 0, null, null, 3, "div", [["class", "info__badge"]], [[4, "color", null]], null, null, null, null)), t["\u0275did"](37, 16384, null, 0, De.a, [], {
                rate: [0, "rate"]
            }, null), (n()(), t["\u0275ted"](38, null, ["", "%"])), t["\u0275ppd"](39, 1), (n()(), t["\u0275eld"](40, 0, null, null, 4, "div", [["class", "info__content"]], [[8, "innerHTML", 1], [4, "color", null]], null, null, null, null)), t["\u0275did"](41, 16384, null, 0, De.a, [], {
                rate: [0, "rate"]
            }, null), t["\u0275ppd"](42, 1), t["\u0275pod"](43, {
                percent: 0
            }), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](45, 0, null, 0, 4, "div", [["class", "mock"], ["content-premium", "mock"]], null, null, null, null, null)), (n()(), t["\u0275eld"](46, 0, null, null, 1, "div", [["class", "mock__text"]], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["That is a mock data, sorry :("])), (n()(), t["\u0275eld"](48, 0, null, null, 1, "img", [["alt", "farming mock image"], ["height", "295"], ["width", "919"]], [[8, "src", 4]], null, null, null, null)), t["\u0275ppd"](49, 1)], function(n, l) {
                var e = l.component;
                n(l, 2, 0, e.sectionMap.farming, e.data.summary.shield), n(l, 9, 0, e.data.summary.creeps_lost_percent), n(l, 20, 0, e.sectionMap.farming.key), n(l, 26, 0, e.data.creep_stats_list, e.data.summary.creeps_total, e.creepStats[e.activeFilter].value, e.data.summary.creeps_killed), n(l, 29, 0, e.creepStats), n(l, 33, 0, t["\u0275unv"](l, 33, 0, t["\u0275nov"](l, 34).transform("MATCH.FARMING_NUMBERS"))), n(l, 37, 0, e.data.summary.creeps_lost_percent), n(l, 41, 0, e.data.summary.creeps_lost_percent)
            }, function(n, l) {
                var e = l.component;
                n(l, 0, 0, e.data.name), n(l, 4, 0, t["\u0275unv"](l, 4, 0, t["\u0275nov"](l, 5).transform("MATCH.FARMING_TITLE"))), n(l, 8, 0, t["\u0275nov"](l, 9).hostColor), n(l, 11, 0, e.data.summary.creeps_killed), n(l, 13, 0, t["\u0275unv"](l, 13, 0, t["\u0275nov"](l, 14).transform("MATCH.FARMING_OF"))), n(l, 16, 0, e.data.summary.creeps_total), n(l, 17, 0, t["\u0275unv"](l, 17, 0, t["\u0275nov"](l, 18).transform("MATCH.FARM_HEADING"))), n(l, 36, 0, t["\u0275nov"](l, 37).hostColor);
                var a = t["\u0275unv"](l, 38, 0, n(l, 39, 0, t["\u0275nov"](l.parent, 1), e.data.summary.creeps_lost_percent));
                n(l, 38, 0, a);
                var i = t["\u0275unv"](l, 40, 0, t["\u0275nov"](l, 44).transform("MATCH.YOU_LOST_CREEPS", n(l, 43, 0, t["\u0275unv"](l, 40, 0, n(l, 42, 0, t["\u0275nov"](l.parent, 1), e.data.summary.creeps_lost_percent)))));
                n(l, 40, 0, i, t["\u0275nov"](l, 41).hostColor);
                var u = t["\u0275unv"](l, 48, 0, n(l, 49, 0, t["\u0275nov"](l.parent, 2), "/assets/images/farming.png"));
                n(l, 48, 0, u)
            })
        }
        function da(n) {
            return t["\u0275vid"](2, [t["\u0275pid"](0, yl.a, []), t["\u0275pid"](0, Dn.a, []), t["\u0275pid"](0, Z.a, []), (n()(), t["\u0275and"](16777216, null, null, 1, null, ca)), t["\u0275did"](4, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                n(l, 4, 0, l.component.data.data)
            }, null)
        }
        var pa = e("ZXcd"),
            _a = e("9Bjs"),
            fa = e("Ygy7"),
            ma = function() {
                function n(n) {
                    this.device = n, this.onSelect = new t.EventEmitter
                }
                return Object.defineProperty(n.prototype, "header", {
                    get: function() {
                        var n = this.total,
                            l = n[1],
                            e = n[2],
                            t = void 0 === e ? "" : e;
                        return n[0].toFixed() + "/" + l.toFixed() + t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "deviceIsMobile", {
                    get: function() {
                        return this.device.getCurrentDevice() === Mt.a.Mobile
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.select = function() {
                    this.onSelect.next(this)
                }, n
            }(),
            ha = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".mistake_active[_ngcontent-%COMP%]   .mistake__header[_ngcontent-%COMP%]{background-color:#131313;cursor:default}.mistake_active[_ngcontent-%COMP%]   .mistake__header[_ngcontent-%COMP%]:hover{opacity:1}.mistake__header[_ngcontent-%COMP%]{padding:13px 11px;display:flex;box-sizing:border-box;cursor:pointer}.mistake__header[_ngcontent-%COMP%]:hover{opacity:.7}.mistake__content[_ngcontent-%COMP%]{padding:0 11px 18px;box-sizing:border-box;background-color:#131313;color:#fff}.mistake__title[_ngcontent-%COMP%]{color:#fff;font-size:13px;font-weight:700}.mistake__assessment[_ngcontent-%COMP%]{font-size:13px;font-weight:700;margin-left:auto}.mistake__total[_ngcontent-%COMP%]{display:flex;align-items:flex-start}.mistake__percent[_ngcontent-%COMP%]{font-size:32px;font-weight:700;text-transform:uppercase;line-height:24px}.mistake__summary[_ngcontent-%COMP%]{font-size:13px;font-weight:700;margin-left:7px}.mistake__description[_ngcontent-%COMP%]{font-size:13px;font-weight:300;margin:11px 0 15px;padding:0}.mistake__data[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.mistake__subtitle[_ngcontent-%COMP%]{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:1px}.mistake__number[_ngcontent-%COMP%]{font-size:13px;font-weight:700;margin-top:7px}.mistake__help[_ngcontent-%COMP%]{font-size:13px;font-weight:300;color:#c7846b;padding:11px 12px;margin-top:4px;background-color:#131313}.mistake__visualization[_ngcontent-%COMP%]{height:200px}@media screen and (max-width:1024px){.mistake__help[_ngcontent-%COMP%]{margin-top:0}}"]],
                data: {}
            });
        function va(n) {
            return t["\u0275vid"](0, [t["\u0275ncd"](null, 0), (n()(), t["\u0275and"](0, null, null, 0))], null, null)
        }
        function xa(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "div", [["class", "mistake__assessment"]], [[4, "color", null]], null, null, null, null)), t["\u0275did"](1, 16384, null, 0, De.a, [], {
                rate: [0, "rate"]
            }, null), (n()(), t["\u0275ted"](2, null, ["", "%"])), t["\u0275ppd"](3, 2)], function(n, l) {
                n(l, 1, 0, 100 - l.component.performance)
            }, function(n, l) {
                var e = l.component;
                n(l, 0, 0, t["\u0275nov"](l, 1).hostColor);
                var a = t["\u0275unv"](l, 2, 0, n(l, 3, 0, t["\u0275nov"](l.parent, 0), e.performance, 0));
                n(l, 2, 0, a)
            })
        }
        function ya(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 7, "div", [["class", "mistake__info"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 3, "div", [["class", "mistake__subtitle"]], null, null, null, null, null)), (n()(), t["\u0275ted"](2, null, ["", ""])), t["\u0275ppd"](3, 2), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](5, 0, null, null, 2, "div", [["class", "mistake__number"]], [[4, "color", null]], null, null, null, null)), t["\u0275did"](6, 16384, null, 0, De.a, [], {
                rate: [0, "rate"]
            }, null), (n()(), t["\u0275ted"](7, null, ["", ""]))], function(n, l) {
                n(l, 6, 0, null === l.context.$implicit.performance ? null : 100 - l.context.$implicit.performance)
            }, function(n, l) {
                var e = t["\u0275unv"](l, 2, 0, t["\u0275nov"](l, 4).transform(t["\u0275unv"](l, 2, 0, n(l, 3, 0, t["\u0275nov"](l.parent.parent, 1), l.context.$implicit.header, "MATCH.MM_STAGE_"))));
                n(l, 2, 0, e), n(l, 5, 0, t["\u0275nov"](l, 6).hostColor), n(l, 7, 0, l.context.$implicit.value)
            })
        }
        function ba(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 12, "div", [["class", "mistake__content"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 6, "div", [["class", "mistake__total"]], [[4, "color", null]], null, null, null, null)), t["\u0275did"](2, 16384, null, 0, De.a, [], {
                rate: [0, "rate"]
            }, null), (n()(), t["\u0275eld"](3, 0, null, null, 2, "div", [["class", "mistake__percent"]], null, null, null, null, null)), (n()(), t["\u0275ted"](4, null, ["", "%"])), t["\u0275ppd"](5, 2), (n()(), t["\u0275eld"](6, 0, null, null, 1, "div", [["class", "mistake__summary"]], null, null, null, null, null)), (n()(), t["\u0275ted"](7, null, ["", ""])), (n()(), t["\u0275eld"](8, 0, null, null, 1, "p", [["class", "mistake__description"]], null, null, null, null, null)), (n()(), t["\u0275ted"](9, null, ["", ""])), (n()(), t["\u0275eld"](10, 0, null, null, 2, "div", [["class", "mistake__data"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, ya)), t["\u0275did"](12, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 2, 0, 100 - e.performance), n(l, 12, 0, e.data)
            }, function(n, l) {
                var e = l.component;
                n(l, 1, 0, t["\u0275nov"](l, 2).hostColor);
                var a = t["\u0275unv"](l, 4, 0, n(l, 5, 0, t["\u0275nov"](l.parent, 0), e.performance, 0));
                n(l, 4, 0, a), n(l, 7, 0, e.header), n(l, 9, 0, e.description)
            })
        }
        function Oa(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null)
        }
        function Ca(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "div", [["class", "mistake__visualization"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, Oa)), t["\u0275did"](2, 540672, null, 0, c.NgTemplateOutlet, [t.ViewContainerRef], {
                ngTemplateOutlet: [0, "ngTemplateOutlet"]
            }, null)], function(n, l) {
                n(l, 2, 0, t["\u0275nov"](l.parent, 3))
            }, null)
        }
        function Ta(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "div", [["class", "mistake__help"]], null, null, null, null, null)), t["\u0275ncd"](null, 1)], null, null)
        }
        function Pa(n) {
            return t["\u0275vid"](2, [t["\u0275pid"](0, Dn.a, []), t["\u0275pid"](0, yl.a, []), t["\u0275qud"](402653184, 1, {
                visualization: 0
            }), (n()(), t["\u0275and"](0, [[1, 2], ["visualization", 2]], null, 0, null, va)), (n()(), t["\u0275eld"](4, 0, null, null, 11, "div", [["class", "mistake"]], [[2, "mistake_active", null]], null, null, null, null)), (n()(), t["\u0275eld"](5, 0, null, null, 4, "div", [["class", "mistake__header"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.select() && t), t
            }, null, null)), (n()(), t["\u0275eld"](6, 0, null, null, 1, "div", [["class", "mistake__title"]], null, null, null, null, null)), (n()(), t["\u0275ted"](7, null, ["", ""])), (n()(), t["\u0275and"](16777216, null, null, 1, null, xa)), t["\u0275did"](9, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, ba)), t["\u0275did"](11, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Ca)), t["\u0275did"](13, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Ta)), t["\u0275did"](15, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 9, 0, !e.isActive), n(l, 11, 0, e.isActive), n(l, 13, 0, e.isActive && e.deviceIsMobile), n(l, 15, 0, e.isActive)
            }, function(n, l) {
                var e = l.component;
                n(l, 4, 0, e.isActive), n(l, 7, 0, e.title)
            })
        }
        var Ma = e("p0ib"),
            Ra = e("psW0"),
            Ia = function() {
                function n(n, l, e, t) {
                    this.translate = n, this.match = l, this.device = e, this.cd = t, this.sectionMap = R.a
                }
                return n.getSummary = function(n) {
                    return {
                        title: "Micro Control",
                        description: "The efficiency of micro-actions: Hit&Run, Power Treads usage, minimap control",
                        major: Math.floor(n.mechanical_performance) + "%",
                        value: 100 - n.mechanical_performance
                    }
                }, Object.defineProperty(n.prototype, "deviceIsMobile", {
                    get: function() {
                        return this.device.getCurrentDevice() === Mt.a.Mobile
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "summary", {
                    get: function() {
                        var n = this.data,
                            l = n.mechanical_hit_n_run,
                            e = n.mechanical_minimap,
                            t = n.mechanical_power_treads,
                            a = [];
                        return l && a.push({
                            value: 100 - l.total.performance,
                            header: Math.floor(l.total.total_hit_n_run_time / 60) + "/" + Math.floor(l.total.total_damage_time / 60) + this.translate.instant("COMMON.MINUTE_CHAR"),
                            text: this.translate.instant("MATCH.HIT_N_RUN_SHORT_DESC")
                        }), e && a.push({
                            value: 100 - e.total.performance,
                            header: e.total.uses.toFixed() + "/" + e.total.pivot.toFixed(),
                            text: this.translate.instant("MATCH.MINIMAP_SHORT_DESC")
                        }), t && a.push({
                            value: 100 - t.total.performance,
                            header: t.total.mana_saved.toFixed() + "/" + t.total.mana_could_be_saved.toFixed(),
                            text: this.translate.instant("MATCH.PT_SHORT_DESC")
                        }), a
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "hitAndRunData", {
                    get: function() {
                        var n = this,
                            l = this.data.mechanical_hit_n_run;
                        return Object.keys({
                            early: l.early,
                            mid: l.mid,
                            late: l.late
                        }).map(function(l) {
                            return {
                                header: l,
                                performance: n.data.mechanical_hit_n_run[l].total_damage_time ? 100 * n.data.mechanical_hit_n_run[l].fraction : null,
                                value: n.data.mechanical_hit_n_run[l].total_hit_n_run_time && n.data.mechanical_hit_n_run[l].total_damage_time ? n.data.mechanical_hit_n_run[l].total_hit_n_run_time.toFixed() + "/" + n.data.mechanical_hit_n_run[l].total_damage_time.toFixed() + n.translate.instant("COMMON.SECOND_CHAR") : "0/0" + n.translate.instant("COMMON.SECOND_CHAR")
                            }
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "minimapData", {
                    get: function() {
                        var n = this.data.mechanical_minimap,
                            l = n.early,
                            e = n.mid,
                            t = n.late;
                        return [{
                            header: "early",
                            performance: l.pivot ? 100 * l.fraction : null,
                            value: l.uses.toFixed() + "/" + l.pivot.toFixed()
                        }, {
                            header: "mid",
                            performance: e.pivot ? 100 * e.fraction : null,
                            value: e.uses.toFixed() + "/" + e.pivot.toFixed()
                        }, {
                            header: "late",
                            performance: t.pivot ? 100 * t.fraction : null,
                            value: t.uses.toFixed() + "/" + t.pivot.toFixed()
                        }]
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "ptData", {
                    get: function() {
                        var n = this.data.mechanical_power_treads,
                            l = n.early,
                            e = n.mid,
                            t = n.late;
                        return [{
                            header: "early",
                            performance: l.mana_could_be_saved ? 100 * l.performance : null,
                            value: l.mana_saved.toFixed() + "/" + l.mana_could_be_saved.toFixed()
                        }, {
                            header: "mid",
                            performance: e.mana_could_be_saved ? 100 * e.performance : null,
                            value: e.mana_saved.toFixed() + "/" + e.mana_could_be_saved.toFixed()
                        }, {
                            header: "late",
                            performance: t.mana_could_be_saved ? 100 * t.performance : null,
                            value: t.mana_saved.toFixed() + "/" + t.mana_could_be_saved.toFixed()
                        }]
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.ngOnInit = function() {
                    this.matchData$ = this.match.matchData$
                }, n.prototype.ngAfterViewInit = function() {
                    var n = this;
                    this.mistakeList.notifyOnChanges(), this.subscription = Object(Ma.a)(Object(Ct.a)(void 0), this.mistakeList.changes).pipe(Object(Ra.a)(function() {
                        return Ma.a.apply(void 0, n.mistakeList.map(function(n) {
                            return n.onSelect
                        }))
                    })).subscribe(function(l) {
                        n.mistakeVisualization = l.visualization, n.mistakeList.forEach(function(n) {
                            return n.isActive = !1
                        }), l.isActive = !0, n.cd.markForCheck()
                    }), this.selectFirstTab()
                }, n.prototype.ngOnChanges = function(n) {
                    var l = n.data,
                        e = l.previousValue,
                        t = l.currentValue;
                    this.mistakeList && !(void 0 === e ? {} : e).data && (void 0 === t ? {} : t).data && this.selectFirstTab()
                }, n.prototype.ngOnDestroy = function() {
                    this.subscription && this.subscription.unsubscribe()
                }, n.prototype.selectFirstTab = function() {
                    var n = this;
                    setTimeout(function() {
                        return n.mistakeList.first && n.mistakeList.first.select()
                    })
                }, n
            }(),
            wa = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".mistakes[_ngcontent-%COMP%]{width:100%;margin:30px auto 0}.mistakes__content[_ngcontent-%COMP%]{padding-bottom:60px}.mistakes__summary[_ngcontent-%COMP%]{display:flex;padding-top:25px;padding-bottom:15px;border-bottom:2px solid #4a4a4a;margin-bottom:20px}.mistakes__row[_ngcontent-%COMP%]{display:flex}.mistakes__aside[_ngcontent-%COMP%]{width:240px;padding-right:30px;flex-shrink:0}.mistakes__visual[_ngcontent-%COMP%]{width:100%;min-height:360px}.mistakes__info[_ngcontent-%COMP%]{margin-right:30px}.mistakes__rate[_ngcontent-%COMP%]{font-size:32px;font-weight:700;line-height:1}.mistakes__text[_ngcontent-%COMP%]{width:105px;font-size:13px;font-weight:300;line-height:15px;color:#fff}.mistakes__assessment[_ngcontent-%COMP%]{margin-left:auto}.mistakes__assessment-value[_ngcontent-%COMP%]{font-size:60px;font-weight:700;line-height:1}.mistakes__assessment-label[_ngcontent-%COMP%]{font-size:11px;font-weight:700;line-height:15px;text-transform:uppercase}.mistakes__visualization[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%;height:360px}.mistakes__visualization_minimap[_ngcontent-%COMP%]{width:100%;height:100%;background:url(/dota/analysis/./static/assets/images/hotkeys/background.jpg) 0 0/cover}.mistakes__visualization_minimap[_ngcontent-%COMP%]:before{content:'';display:block;width:100%;height:100%;background:url(/dota/analysis/./static/assets/images/dota-cursor-highlight.png) left bottom/14% no-repeat}.mistakes__feature[_ngcontent-%COMP%]{font-size:13px;font-weight:700;opacity:.24;cursor:not-allowed;color:#fff;display:flex;justify-content:space-between;padding:13px 11px;box-sizing:border-box}.mistakes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:5px;margin-left:15px;list-style-type:square}.mock[_ngcontent-%COMP%]{position:relative}.mock__text[_ngcontent-%COMP%]{position:absolute;top:170px;left:350px;color:#fff}"]],
                data: {}
            });
        function Aa(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 5, "div", [["class", "mistakes__info"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 2, "div", [["class", "mistakes__rate"]], [[4, "color", null]], null, null, null, null)), t["\u0275did"](2, 16384, null, 0, De.a, [], {
                rate: [0, "rate"]
            }, null), (n()(), t["\u0275ted"](3, null, ["", ""])), (n()(), t["\u0275eld"](4, 0, null, null, 1, "div", [["class", "mistakes__text"]], null, null, null, null, null)), (n()(), t["\u0275ted"](5, null, ["", ""]))], function(n, l) {
                n(l, 2, 0, l.context.$implicit.value)
            }, function(n, l) {
                n(l, 1, 0, t["\u0275nov"](l, 2).hostColor), n(l, 3, 0, l.context.$implicit.header), n(l, 5, 0, l.context.$implicit.text)
            })
        }
        function ka(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 10, "gosu-match-mistake", [], null, null, null, Pa, ha)), t["\u0275did"](1, 49152, [[1, 4]], 0, ma, [Pt.a], {
                title: [0, "title"],
                performance: [1, "performance"],
                total: [2, "total"],
                description: [3, "description"],
                data: [4, "data"]
            }, null), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), t["\u0275pad"](4, 3), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](6, 0, null, 0, 1, "div", [["class", "mistakes__visualization mistakes__visualization_hitnrun"]], null, null, null, null, null)), (n()(), t["\u0275eld"](7, 0, null, null, 0, "iframe", [["allowfullscreen", ""], ["frameborder", "0"], ["height", "315"], ["src", "https://www.youtube.com/embed/h5HJiwOA0u8?rel=0&controls=0&showinfo=0&start=438"], ["width", "560"]], null, null, null, null, null)), (n()(), t["\u0275eld"](8, 0, null, 1, 2, "div", [["class", "mistakes__help help"]], null, null, null, null, null)), (n()(), t["\u0275ted"](9, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], function(n, l) {
                var e = l.component,
                    a = t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 2).transform("MATCH.HIT_N_RUN")),
                    i = e.data.mechanical_hit_n_run.total.performance,
                    u = n(l, 4, 0, e.data.mechanical_hit_n_run.total.total_hit_n_run_time, e.data.mechanical_hit_n_run.total.total_damage_time, t["\u0275unv"](l, 1, 2, t["\u0275nov"](l, 3).transform("COMMON.SECOND_CHAR")));
                n(l, 1, 0, a, i, u, t["\u0275unv"](l, 1, 3, t["\u0275nov"](l, 5).transform("MATCH.HIT_N_RUN_DESC")), e.hitAndRunData)
            }, function(n, l) {
                n(l, 9, 0, t["\u0275unv"](l, 9, 0, t["\u0275nov"](l, 10).transform("MATCH.HIT_N_RUN_HELP")))
            })
        }
        function Da(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 9, "gosu-match-mistake", [], null, null, null, Pa, ha)), t["\u0275did"](1, 49152, [[1, 4]], 0, ma, [Pt.a], {
                title: [0, "title"],
                performance: [1, "performance"],
                total: [2, "total"],
                description: [3, "description"],
                data: [4, "data"]
            }, null), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), t["\u0275pad"](4, 3), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](6, 0, null, 0, 0, "div", [["class", "mistakes__visualization mistakes__visualization_minimap"]], null, null, null, null, null)), (n()(), t["\u0275eld"](7, 0, null, 1, 2, "div", [["class", "mistakes__help help"]], null, null, null, null, null)), (n()(), t["\u0275ted"](8, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], function(n, l) {
                var e = l.component,
                    a = t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 2).transform("MATCH.MINIMAP")),
                    i = e.data.mechanical_minimap.total.performance,
                    u = n(l, 4, 0, e.data.mechanical_minimap.total.uses, e.data.mechanical_minimap.total.pivot, " " + t["\u0275unv"](l, 1, 2, t["\u0275nov"](l, 3).transform("COMMON.TIMES")));
                n(l, 1, 0, a, i, u, t["\u0275unv"](l, 1, 3, t["\u0275nov"](l, 5).transform("MATCH.MINIMAP_DESC")), e.minimapData)
            }, function(n, l) {
                n(l, 8, 0, t["\u0275unv"](l, 8, 0, t["\u0275nov"](l, 9).transform("MATCH.MINIMAP_HELP")))
            })
        }
        function Ea(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 8, "gosu-match-mistake", [], null, null, null, Pa, ha)), t["\u0275did"](1, 49152, [[1, 4]], 0, ma, [Pt.a], {
                title: [0, "title"],
                performance: [1, "performance"],
                total: [2, "total"],
                description: [3, "description"],
                data: [4, "data"]
            }, null), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), t["\u0275pad"](3, 3), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](5, 0, null, 0, 1, "div", [["class", "mistakes__visualization mistakes__visualization_pt"]], null, null, null, null, null)), (n()(), t["\u0275eld"](6, 0, null, null, 0, "iframe", [["allowfullscreen", ""], ["frameborder", "0"], ["src", "https://www.youtube.com/embed/OFi7xbIY6dk?rel=0&controls=0&showinfo=0&mute=1&start=321"]], null, null, null, null, null)), (n()(), t["\u0275eld"](7, 0, null, 1, 1, "div", [["class", "mistakes__help help"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], function(n, l) {
                var e = l.component,
                    a = t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 2).transform("MATCH.PT")),
                    i = e.data.mechanical_power_treads.total.performance,
                    u = n(l, 3, 0, e.data.mechanical_power_treads.total.mana_saved, e.data.mechanical_power_treads.total.mana_could_be_saved, " mana saved");
                n(l, 1, 0, a, i, u, t["\u0275unv"](l, 1, 3, t["\u0275nov"](l, 4).transform("MATCH.PT_DESC")), e.ptData)
            }, function(n, l) {
                n(l, 7, 0, t["\u0275unv"](l, 7, 0, t["\u0275nov"](l, 8).transform("MATCH.PT_HELP")))
            })
        }
        function Sa(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null)
        }
        function Na(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "div", [["class", "mistakes__visual"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, Sa)), t["\u0275did"](2, 540672, null, 0, c.NgTemplateOutlet, [t.ViewContainerRef], {
                ngTemplateOutlet: [0, "ngTemplateOutlet"]
            }, null)], function(n, l) {
                n(l, 2, 0, l.component.mistakeVisualization)
            }, null)
        }
        function La(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 34, "div", [["class", "mistakes"]], [[8, "id", 0]], null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 33, "gosu-match-section", [], null, null, null, fl.b, fl.a)), t["\u0275did"](2, 49152, null, 0, gl.a, [ml.a, g.a], {
                rate: [0, "rate"],
                shield: [1, "shield"]
            }, null), (n()(), t["\u0275eld"](3, 0, null, 0, 2, "h2", [["section-title", ""]], null, null, null, null, null)), (n()(), t["\u0275ted"](4, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](6, 0, null, 2, 28, "div", [["class", "mistakes__content"], ["section-content", ""]], null, null, null, null, null)), (n()(), t["\u0275eld"](7, 0, null, null, 10, "div", [["class", "mistakes__summary"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, Aa)), t["\u0275did"](9, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275eld"](10, 0, null, null, 7, "div", [["class", "mistakes__assessment"]], [[4, "color", null]], null, null, null, null)), t["\u0275did"](11, 16384, null, 0, De.a, [], {
                rate: [0, "rate"]
            }, null), (n()(), t["\u0275eld"](12, 0, null, null, 2, "div", [["class", "mistakes__assessment-value"]], null, null, null, null, null)), (n()(), t["\u0275ted"](13, null, ["", "%"])), t["\u0275ppd"](14, 2), (n()(), t["\u0275eld"](15, 0, null, null, 2, "div", [["class", "mistakes__assessment-label hide@mobile"]], null, null, null, null, null)), (n()(), t["\u0275ted"](16, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](18, 0, null, null, 16, "gosu-premium-content", [], null, null, null, X.b, X.a)), t["\u0275did"](19, 114688, null, 0, q.a, [C.a], {
                block: [0, "block"]
            }, null), (n()(), t["\u0275eld"](20, 0, null, 1, 9, "div", [["class", "mistakes__row"], ["content-premium", "real"]], null, null, null, null, null)), (n()(), t["\u0275eld"](21, 0, null, null, 6, "div", [["class", "mistakes__aside"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, ka)), t["\u0275did"](23, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Da)), t["\u0275did"](25, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Ea)), t["\u0275did"](27, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Na)), t["\u0275did"](29, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](30, 0, null, 0, 4, "div", [["class", "mock"], ["content-premium", "mock"]], null, null, null, null, null)), (n()(), t["\u0275eld"](31, 0, null, null, 1, "div", [["class", "mock__text"]], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["That is a mock data, sorry :("])), (n()(), t["\u0275eld"](33, 0, null, null, 1, "img", [["alt", "mistakes mock image"], ["height", "373"], ["width", "904"]], [[8, "src", 4]], null, null, null, null)), t["\u0275ppd"](34, 1)], function(n, l) {
                var e = l.component;
                n(l, 2, 0, e.sectionMap.mechanicalMistakes, e.data.summary.shield), n(l, 9, 0, e.summary), n(l, 11, 0, 100 - e.data.summary.mechanical_performance), n(l, 19, 0, e.sectionMap.mechanicalMistakes.key), n(l, 23, 0, e.data.mechanical_hit_n_run), n(l, 25, 0, e.data.mechanical_minimap), n(l, 27, 0, e.data.mechanical_power_treads), n(l, 29, 0, !e.deviceIsMobile)
            }, function(n, l) {
                var e = l.component;
                n(l, 0, 0, e.data.name), n(l, 4, 0, t["\u0275unv"](l, 4, 0, t["\u0275nov"](l, 5).transform("MATCH.MICRO_CONTROL"))), n(l, 10, 0, t["\u0275nov"](l, 11).hostColor);
                var a = t["\u0275unv"](l, 13, 0, n(l, 14, 0, t["\u0275nov"](l.parent, 0), e.data.summary.mechanical_performance, 0));
                n(l, 13, 0, a), n(l, 16, 0, t["\u0275unv"](l, 16, 0, t["\u0275nov"](l, 17).transform("MATCH.AVG_EFFICIENCY")));
                var i = t["\u0275unv"](l, 33, 0, n(l, 34, 0, t["\u0275nov"](l.parent, 1), "/assets/images/micro-control.png"));
                n(l, 33, 0, i)
            })
        }
        function Ha(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "gosu-section-gap", [], null, null, null, qe, Ue)), t["\u0275did"](1, 114688, null, 0, ze, [g.a, u.a, s.Router, t.PLATFORM_ID], {
                block: [0, "block"],
                title: [1, "title"],
                text: [2, "text"]
            }, null)], function(n, l) {
                n(l, 1, 0, l.component.data.name, "Micro control", "The calculated efficiency of your micro actions")
            }, null)
        }
        function Fa(n) {
            return t["\u0275vid"](2, [t["\u0275pid"](0, Dn.a, []), t["\u0275pid"](0, Z.a, []), t["\u0275qud"](671088640, 1, {
                mistakeList: 1
            }), (n()(), t["\u0275and"](16777216, null, null, 1, null, La)), t["\u0275did"](4, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Ha)), t["\u0275did"](6, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 4, 0, e.data.data), n(l, 6, 0, !e.data.data)
            }, null)
        }
        var Va = e("2fsI"),
            ja = e("vnqu"),
            Ga = e("3Fae"),
            $a = e("DBpu"),
            za = e("5DXk"),
            Ua = {
                LINE: "#01e89e",
                LINE_DELAY: "#eb0700",
                LINE_FOCUS: "#3e3e3e",
                MUTED: "#af7a67",
                POINT: "#e7c000",
                TICK: "#535353"
            },
            Wa = function() {
                return function(n, l) {
                    void 0 === l && (l = !1), this.x = n.x + 30 * (l ? 1 : -1), this.y = n.y
                }
            }(),
            Ya = function() {
                return function(n, l, e, t) {
                    this.color = Ua.LINE, this.vector = [{
                        x: n,
                        y: e
                    }, {
                        x: l,
                        y: t
                    }]
                }
            }(),
            Ka = function(n) {
                function l() {
                    var l = null !== n && n.apply(this, arguments) || this;
                    return l.color = Ua.LINE_DELAY, l
                }
                return zn.__extends(l, n), l
            }(Ya),
            Ba = function() {
                function n(n, l) {
                    this.ngZone = n, this.i18nService = l, this.margin = [20, 20, 35, 60], this.subscription = new al.a
                }
                return Object.defineProperty(n.prototype, "graph", {
                    set: function(n) {
                        this.graphElement = n.nativeElement
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.ngAfterContentInit = function() {
                    var n = this;
                    this.subscription.add(this.ngZone.onStable.pipe(Object(ul.a)(1)).subscribe(function() {
                        n.drawGraph()
                    }))
                }, n.prototype.ngOnDestroy = function() {
                    this.subscription.unsubscribe()
                }, n.prototype.ngOnChanges = function(n) {
                    var l = n.data;
                    l.previousValue && l.previousValue !== l.currentValue && this.drawGraph()
                }, n.prototype.drawGraph = function() {
                    this.defineSizes(), this.graphElement.offsetWidth && this.graphElement.offsetHeight && (Object(Va.d)(this.graphElement).selectAll("svg").remove(), this.d3Graph = Object(Va.d)(this.graphElement).append("svg:svg").attr("width", this.width + this.margin[1] + this.margin[3]).attr("height", this.height + this.margin[0] + this.margin[2]).append("svg:g").attr("transform", "translate(" + this.margin[3] + ", " + this.margin[0] + ")"), this.drawAxis(), this.drawLines(), this.drawPoints(), this.attachFocus())
                }, n.prototype.defineSizes = function() {
                    var n = this.data,
                        l = n.time,
                        e = [].concat(n.level, n.level_no_midas);
                    this.width = this.graphElement.offsetWidth - this.margin[1] - this.margin[3], this.height = this.graphElement.offsetHeight - this.margin[0] - this.margin[2];
                    var t = Object(Ga.f)(e) - 1,
                        a = Object(Ga.d)(e);
                    this.scale = {
                        x: Object(ll.a)().domain([Object(Ga.f)(l), Object(Ga.d)(l)]).range([0, this.width]).nice(10),
                        y: Object(ll.a)().domain([t, a]).range([this.height, 0]).nice(a)
                    }
                }, n.prototype.drawAxis = function() {
                    this.drawXAxis(), this.drawYAxis()
                }, n.prototype.drawXAxis = function() {
                    var n = this.scale.x.ticks().slice(-1)[0],
                        l = Object(ja.a)(this.scale.x).ticks(30).tickFormat(function(l, e) {
                            return 0 !== e && l !== n ? "" : el.unix(l).format("mm:ss")
                        }).tickPadding(10).tickSizeInner(10).tickSizeOuter(15);
                    this.d3Graph.append("svg:g").attr("class", "axis axis_x").attr("transform", "translate(0, " + this.height + ")").call(l).select(".domain").remove()
                }, n.prototype.drawYAxis = function() {
                    var n = this,
                        l = this.data,
                        e = [].concat(l.level, l.level_no_midas),
                        t = Object(Ga.d)(e),
                        a = Object(Ga.f)(e) - 1,
                        i = t - a,
                        u = Object(ja.b)(this.scale.y).ticks(i).tickFormat(function(l, e) {
                            return 0 !== e && l !== t ? "" : "ru" === n.i18nService.currentLang ? l + " \u0443\u0440." : l + " lvl"
                        }).tickPadding(10).tickSizeInner(10).tickSizeOuter(15),
                        r = this.d3Graph.append("svg:g").attr("class", "axis axis_y").attr("transform", "translate(-15, 0)").call(u);
                    r.selectAll(".domain").remove(), r.selectAll(".tick line").style("stroke", Ua.TICK).style("width", 10)
                }, n.prototype.drawLines = function() {
                    var n = Object($a.a)().x(function(n) {
                            return n.x
                        }).y(function(n) {
                            return n.y
                        }),
                        l = this.getLinesData();
                    this.d3Graph.append("svg:g").attr("class", "graph__inner").selectAll("path").data(l).enter().append("path").attr("d", function(l) {
                        return n(l.vector)
                    }).attr("fill", "none").attr("stroke-width", 1).attr("stroke", function(n) {
                        return n.color
                    }).style("stroke-dasharray", function(n) {
                        return n.dashArray ? n.dashArray : void 0
                    })
                }, n.prototype.getLinesData = function() {
                    return this.primaryLineDataFactory().concat([this.secondaryLineDataFactory()])
                }, n.prototype.primaryLineDataFactory = function() {
                    var n = this.data,
                        l = n.level,
                        e = n.time,
                        t = this.scale,
                        a = t.x,
                        i = t.y,
                        u = n.using_delay.map(function(n, t) {
                            var u = n.start,
                                r = n.end,
                                o = e[t],
                                s = e[t + 1],
                                c = [];
                            if (s) {
                                var d = l[t],
                                    p = l[t + 1],
                                    _ = Object(ll.a)().domain([o, s]).range([i(d), i(p)]),
                                    f = a(u),
                                    g = a(r),
                                    m = _(u),
                                    h = _(r);
                                c.push(new Ya(a(o), f, _(o), m)), c.push(new Ka(f, g, m, h)), r === s && c.push(new Ya(g, a(s), h, _(s)))
                            }
                            return 0 === c.length ? void 0 : c
                        }).filter(function(n) {
                            return !!n
                        }),
                        r = Array.prototype.concat.apply([], u);
                    return r[0].vector.unshift(new Wa(r[0].vector[0])), r[r.length - 1].vector.unshift(new Wa(r[r.length - 1].vector[r[r.length - 1].vector.length - 1], !0)), r
                }, n.prototype.secondaryLineDataFactory = function() {
                    var n = this.data,
                        l = n.level_no_midas,
                        e = this.scale,
                        t = e.x,
                        a = e.y;
                    return {
                        vector: n.time.map(function(n, e) {
                            return {
                                x: t(n),
                                y: a(l[e])
                            }
                        }),
                        color: Ua.MUTED,
                        dashArray: "3,2"
                    }
                }, n.prototype.drawPoints = function() {
                    var n = this,
                        l = this.data,
                        e = l.level,
                        t = l.time,
                        a = t.map(function(n, l) {
                            return {
                                x: n,
                                y: e[l]
                            }
                        }),
                        i = t.indexOf(this.payback),
                        u = a.splice(i, 1)[0],
                        r = [zn.__assign({}, a.shift(), {
                            content: "ru" === this.i18nService.currentLang ? "\u041f\u043e\u043a\u0443\u043f\u043a\u0430" : "Purchasing"
                        }), zn.__assign({}, u, {
                            content: "ru" === this.i18nService.currentLang ? "\u041f\u043e\u043a\u0443\u043f\u043a\u0430 \u043e\u043a\u0443\u043f\u0438\u043b\u0430\u0441\u044c" : "You covered the expenses"
                        })],
                        o = this.d3Graph.append("svg:g").attr("class", "graph__points");
                    o.selectAll("circle").data(a).enter().append("circle").attr("cx", function(l) {
                        return n.scale.x(l.x)
                    }).attr("cy", function(l) {
                        return n.scale.y(l.y)
                    }).attr("r", 3).attr("fill", Ua.POINT), o.append("svg:g").selectAll("image").data(r).enter().append("svg:image").attr("xlink:href", za).attr("x", function(l) {
                        return n.scale.x(l.x) - 6
                    }).attr("y", function(l) {
                        return n.scale.y(l.y) - 6 - 1
                    }).attr("width", 12).attr("height", 12), Object(Va.d)(this.graphElement).selectAll(".graph-midas__label.graph-midas__label_point").data(r).enter().append("div").attr("class", "graph-midas__label graph-midas__label_point").style("left", function(l) {
                        return n.margin[3] + n.scale.x(l.x) - 12 + "px"
                    }).style("top", function(l) {
                        return n.margin[0] + n.scale.y(l.y) + 6 + "px"
                    }).text(function(n) {
                        return n.content
                    })
                }, n.prototype.attachFocus = function() {
                    var n = this,
                        l = this.data,
                        e = l.level,
                        t = l.time.map(function(n, l) {
                            return {
                                x: n,
                                y: e[l]
                            }
                        }),
                        a = Object(Ga.c)(function(n) {
                            return n && n.x
                        }).left,
                        i = this.d3Graph.append("svg:g").style("display", "none"),
                        u = Object(Va.d)(this.graphElement),
                        r = u.append("div").attr("class", "graph-midas__label graph-midas__label_tick graph-midas__label_tick-x"),
                        o = u.append("div").attr("class", "graph-midas__label graph-midas__label_tick graph-midas__label_tick-y");
                    i.append("line").attr("class", "x").style("stroke", Ua.LINE_FOCUS).style("stroke-dasharray", "1,5").attr("y1", 0).attr("y2", this.height), i.append("line").attr("class", "y").style("stroke", Ua.LINE_FOCUS).style("stroke-dasharray", "1,5").attr("x1", this.width).attr("x2", this.width), i.append("circle").attr("class", "y").style("fill", Ua.POINT).attr("r", 6), this.d3Graph.append("svg:g").append("rect").attr("width", this.width).attr("height", this.height).style("fill", "none").style("pointer-events", "all").on("mouseover", function() {
                        return [i, r, o].forEach(function(n) {
                            return n.style("display", void 0)
                        })
                    }).on("mouseout", function() {
                        return [i, r, o].forEach(function(n) {
                            return n.style("display", "none")
                        })
                    }).on("mousemove", function(l, e, u) {
                        var s = u[0],
                            c = n.scale,
                            d = c.x,
                            p = c.y,
                            _ = n.scale.x.invert(Object(Va.b)(s)[0]),
                            f = a(t, _, 1),
                            g = t[f - 1],
                            m = t[f],
                            h = t[f - 1] ? m && _ - g.x > m.x - _ ? m : g : m;
                        i.select("circle.y").style("display", void 0).attr("transform", "translate(" + d(h.x) + ", " + p(h.y) + ")"), r.style("display", void 0).style("left", d(h.x) + n.margin[3] + "px").style("bottom", "7px").text(el.unix(h.x).format("mm:ss")), o.style("display", void 0).style("left", "3px").style("top", p(h.y) + n.margin[0] + "px").text("ru" === n.i18nService.currentLang ? h.y + " \u0443\u0440." : h.y + " lvl"), i.select("text.y").attr("transform", "translate(0, " + p(h.y) + ")").text(h.y), i.select(".x").attr("transform", "translate(" + d(h.x) + ", " + p(h.y) + ")").attr("y2", n.height - p(h.y)), i.select(".y").attr("transform", "translate(" + -1 * n.width + ", " + p(h.y) + ")").attr("x2", n.width + d(h.x))
                    })
                }, n
            }(),
            Za = t["\u0275crt"]({
                encapsulation: 2,
                styles: [[".graph-midas{width:100%;height:360px;position:relative}.graph-midas__label{position:absolute}.graph-midas__label_point{font-size:11px;line-height:13px;color:#53e29f}.graph-midas__label_tick{font-size:9px;font-weight:700;color:#53e29f}.graph-midas__label_tick-x{margin-left:-10px}.graph-midas__label_tick-y{margin-top:-5px}.graph-midas .axis text{fill:#fff;font-size:9px;font-family:CircularPro,sans-serif}.graph-midas .axis .tick line{stroke:#535353}"]],
                data: {}
            });
        function Xa(n) {
            return t["\u0275vid"](2, [t["\u0275qud"](402653184, 1, {
                graph: 0
            }), (n()(), t["\u0275eld"](1, 0, [[1, 0], ["graph", 1]], null, 0, "div", [["class", "graph-midas"]], null, null, null, null, null))], null, null)
        }
        var qa = function() {
                function n() {
                    this.sectionMap = R.a
                }
                return n.getSummary = function() {
                    return {
                        title: "Items efficiency",
                        description: "Check out how you used \xabHand of Midas\xbb",
                        major: "Midas",
                        value: "#c7846b"
                    }
                }, Object.defineProperty(n.prototype, "graphData", {
                    get: function() {
                        return this.data.midas_graph
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "midasData", {
                    get: function() {
                        return this.data.midas
                    },
                    enumerable: !0,
                    configurable: !0
                }), n
            }(),
            Qa = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".midas[_ngcontent-%COMP%]{width:100%;margin:30px auto 0}.midas__content[_ngcontent-%COMP%]{display:flex;padding:15px 0 35px}.midas__aside[_ngcontent-%COMP%]{width:240px;padding:10px 30px;box-sizing:border-box;background-color:#171717;margin-right:35px;flex-shrink:0;color:#fff}.midas__img[_ngcontent-%COMP%]{width:40px;height:0;padding-bottom:72%;margin-right:5px;vertical-align:top}.midas__item[_ngcontent-%COMP%]{display:flex;align-items:center}.midas__title[_ngcontent-%COMP%]{font-size:13px;font-weight:700}.midas__usage[_ngcontent-%COMP%]{margin-top:20px;color:#53e29f}.midas__heading[_ngcontent-%COMP%]{font-size:16px;line-height:1;font-weight:700}.midas__description[_ngcontent-%COMP%]{font-size:13px;margin-top:5px}.midas__rates[_ngcontent-%COMP%]{margin-top:20px}.midas__rate-number[_ngcontent-%COMP%]{font-size:32px;font-weight:700;line-height:1}.midas__rate-number_success[_ngcontent-%COMP%]{color:#53e29f}.midas__rate-number_fail[_ngcontent-%COMP%]{color:#db4000}.midas__rate-description[_ngcontent-%COMP%]{font-size:13px;line-height:15px;margin-top:1px}.midas__row[_ngcontent-%COMP%]:nth-child(n+2){margin-top:15px}.midas__graph[_ngcontent-%COMP%]{width:100%;height:360px}.midas__graph-inner[_ngcontent-%COMP%]{width:100%;height:100%}@media screen and (max-width:1024px){.midas[_ngcontent-%COMP%]{margin-top:10px}.midas__content[_ngcontent-%COMP%]{flex-direction:column}.midas__aside[_ngcontent-%COMP%]{width:100%}.midas__graph[_ngcontent-%COMP%]{background-color:#171717;margin-top:-20px;overflow-x:scroll;overflow-y:hidden}.midas__graph-inner[_ngcontent-%COMP%]{width:480px}.midas__helper[_ngcontent-%COMP%]{color:#fff;margin-top:10px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;border-top:1px solid #4a4a4a;padding-top:5px;line-height:30px;text-align:center}}.mock[_ngcontent-%COMP%]{position:relative}.mock__text[_ngcontent-%COMP%]{position:absolute;top:150px;left:250px;color:#fff}.mock__image[_ngcontent-%COMP%]{width:100%}"]],
                data: {}
            });
        function Ja(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 51, "div", [["class", "midas"]], [[8, "id", 0]], null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 50, "gosu-match-section", [], null, null, null, fl.b, fl.a)), t["\u0275did"](2, 49152, null, 0, gl.a, [ml.a, g.a], {
                rate: [0, "rate"],
                shield: [1, "shield"]
            }, null), (n()(), t["\u0275eld"](3, 0, null, 0, 1, "h2", [["section-title", ""]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](5, 0, null, 2, 46, "div", [["class", "midas__content"], ["section-content", ""]], null, null, null, null, null)), (n()(), t["\u0275eld"](6, 0, null, null, 34, "div", [["class", "midas__aside"]], null, null, null, null, null)), (n()(), t["\u0275eld"](7, 0, null, null, 4, "div", [["class", "midas__item"]], null, null, null, null, null)), (n()(), t["\u0275eld"](8, 0, null, null, 1, "div", [["class", "midas__image"]], null, null, null, null, null)), (n()(), t["\u0275eld"](9, 0, null, null, 0, "div", [["class", "midas__img icon-hand_of_midas"]], null, null, null, null, null)), (n()(), t["\u0275eld"](10, 0, null, null, 1, "div", [["class", "midas__title"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](12, 0, null, null, 26, "div", [["class", "midas__rates"]], null, null, null, null, null)), (n()(), t["\u0275eld"](13, 0, null, null, 12, "div", [["class", "midas__row row"]], null, null, null, null, null)), (n()(), t["\u0275eld"](14, 0, null, null, 6, "div", [["class", "midas__rate gr-6"]], null, null, null, null, null)), (n()(), t["\u0275eld"](15, 0, null, null, 3, "div", [["class", "midas__rate-number midas__rate-number_fail"]], null, null, null, null, null)), (n()(), t["\u0275ted"](16, null, ["", ""])), t["\u0275ppd"](17, 1), t["\u0275ppd"](18, 2), (n()(), t["\u0275eld"](19, 0, null, null, 1, "div", [["class", "midas__rate-description"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](21, 0, null, null, 4, "div", [["class", "midas__rate gr-6"]], null, null, null, null, null)), (n()(), t["\u0275eld"](22, 0, null, null, 1, "div", [["class", "midas__rate-number midas__rate-number_fail"]], null, null, null, null, null)), (n()(), t["\u0275ted"](23, null, ["", ""])), (n()(), t["\u0275eld"](24, 0, null, null, 1, "div", [["class", "midas__rate-description"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](26, 0, null, null, 12, "div", [["class", "midas__row row"]], null, null, null, null, null)), (n()(), t["\u0275eld"](27, 0, null, null, 5, "div", [["class", "midas__rate gr-6"]], null, null, null, null, null)), (n()(), t["\u0275eld"](28, 0, null, null, 2, "div", [["class", "midas__rate-number midas__rate-number_success"]], null, null, null, null, null)), (n()(), t["\u0275ted"](29, null, ["", ""])), t["\u0275ppd"](30, 2), (n()(), t["\u0275eld"](31, 0, null, null, 1, "div", [["class", "midas__rate-description"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](33, 0, null, null, 5, "div", [["class", "midas__rate gr-6"]], null, null, null, null, null)), (n()(), t["\u0275eld"](34, 0, null, null, 2, "div", [["class", "midas__rate-number midas__rate-number_success"]], null, null, null, null, null)), (n()(), t["\u0275ted"](35, null, ["", ""])), t["\u0275ppd"](36, 2), (n()(), t["\u0275eld"](37, 0, null, null, 1, "div", [["class", "midas__rate-description"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](39, 0, null, null, 1, "div", [["class", "midas__helper hide@desktop hide@tablet show@mobile"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](41, 0, null, null, 10, "div", [["class", "midas__graph"]], null, null, null, null, null)), (n()(), t["\u0275eld"](42, 0, null, null, 9, "div", [["class", "midas__graph-inner"]], null, null, null, null, null)), (n()(), t["\u0275eld"](43, 0, null, null, 8, "gosu-premium-content", [], null, null, null, X.b, X.a)), t["\u0275did"](44, 114688, null, 0, q.a, [C.a], null, null), (n()(), t["\u0275eld"](45, 0, null, 1, 1, "gosu-midas-graph", [["content-premium", "real"]], null, null, null, Xa, Za)), t["\u0275did"](46, 1753088, null, 0, Ba, [t.NgZone, Sn.a], {
                data: [0, "data"],
                payback: [1, "payback"]
            }, null), (n()(), t["\u0275eld"](47, 0, null, 0, 4, "div", [["class", "mock"], ["content-premium", "mock"]], null, null, null, null, null)), (n()(), t["\u0275eld"](48, 0, null, null, 1, "div", [["class", "mock__text"]], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["That is a mock data, sorry :("])), (n()(), t["\u0275eld"](50, 0, null, null, 1, "img", [["alt", "midas mock image"], ["class", "mock__image"]], [[8, "src", 4]], null, null, null, null)), t["\u0275ppd"](51, 1)], function(n, l) {
                var e = l.component;
                n(l, 2, 0, e.sectionMap.itemsEfficiency, e.data.summary.shield), n(l, 44, 0), n(l, 46, 0, e.graphData, e.midasData.payback_time)
            }, function(n, l) {
                var e = l.component;
                n(l, 0, 0, e.data.name), n(l, 3, 0, t["\u0275unv"](l, 3, 0, t["\u0275nov"](l, 4).transform("MATCH.ITEMS_EFFICIENCE"))), n(l, 10, 0, t["\u0275unv"](l, 10, 0, t["\u0275nov"](l, 11).transform("MATCH.HAND_OF_MIDAS")));
                var a = t["\u0275unv"](l, 16, 0, n(l, 18, 0, t["\u0275nov"](l.parent, 0), t["\u0275unv"](l, 16, 0, n(l, 17, 0, t["\u0275nov"](l.parent, 1), e.midasData.time_lost)), "m:ss"));
                n(l, 16, 0, a), n(l, 19, 0, t["\u0275unv"](l, 19, 0, t["\u0275nov"](l, 20).transform("MATCH.TIME_COOLDOWNS"))), n(l, 23, 0, e.midasData.gold_lost), n(l, 24, 0, t["\u0275unv"](l, 24, 0, t["\u0275nov"](l, 25).transform("MATCH.GOLD_COULD_EARN")));
                var i = t["\u0275unv"](l, 29, 0, n(l, 30, 0, t["\u0275nov"](l.parent, 2), e.midasData.xpm_gain, 0));
                n(l, 29, 0, i), n(l, 31, 0, t["\u0275unv"](l, 31, 0, t["\u0275nov"](l, 32).transform("MATCH.XPM_MORE_MIDAS")));
                var u = t["\u0275unv"](l, 35, 0, n(l, 36, 0, t["\u0275nov"](l.parent, 2), e.midasData.gpm_gain, 0));
                n(l, 35, 0, u), n(l, 37, 0, t["\u0275unv"](l, 37, 0, t["\u0275nov"](l, 38).transform("MATCH.GPM_MORE_MIDAS"))), n(l, 39, 0, t["\u0275unv"](l, 39, 0, t["\u0275nov"](l, 40).transform("MATCH.SWIPE_LEFT")));
                var r = t["\u0275unv"](l, 50, 0, n(l, 51, 0, t["\u0275nov"](l.parent, 3), "/assets/images/midas.png"));
                n(l, 50, 0, r)
            })
        }
        function ni(n) {
            return t["\u0275vid"](0, [t["\u0275pid"](0, An.DateFormatPipe, []), t["\u0275pid"](0, kn.FromUnixPipe, []), t["\u0275pid"](0, Dn.a, []), t["\u0275pid"](0, Z.a, []), (n()(), t["\u0275and"](16777216, null, null, 1, null, Ja)), t["\u0275did"](5, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 5, 0, e.data.data && null !== e.midasData.payback_time)
            }, null)
        }
        var li = e("2Hsl"),
            ei = e("1DKR"),
            ti = e("FUk0"),
            ai = e("tMtz"),
            ii = e("rX+l"),
            ui = function() {
                function n(n, l) {
                    this.session = n, this.match = l
                }
                return Object.defineProperty(n.prototype, "cheapestPlan", {
                    get: function() {
                        return this.session.nonAuthUserData.cheapestPlan
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.ngOnInit = function() {
                    this.currentUser$ = this.match.getCurrentUser$(), this.hero$ = this.currentUser$.pipe(Object(hn.a)(function(n) {
                        return Un.a[n.hero_id]
                    }))
                }, n
            }(),
            ri = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".header[_ngcontent-%COMP%]{width:1024px;display:flex;margin:0 auto;padding-top:20px}.header__tile[_ngcontent-%COMP%]{display:flex;align-items:center;border-radius:30px;height:50px;background-color:#080808;padding:0 20px}.header__tile[_ngcontent-%COMP%]:first-child{margin-right:5px}.header__text[_ngcontent-%COMP%]{color:#fff;flex-shrink:0;font-size:16px;font-weight:700;line-height:16px}.header__hero[_ngcontent-%COMP%], .header__user[_ngcontent-%COMP%]{display:flex;align-items:center}.header__username[_ngcontent-%COMP%]{color:#d2977e;font-size:16px;font-weight:700;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:90px;width:100%}.header__img[_ngcontent-%COMP%]{margin:0 4px 0 0;width:26px;height:26px;border-radius:50%;background-size:cover;flex-shrink:0}.header__hero-img[_ngcontent-%COMP%]{margin:0 4px 0 0;width:26px;height:26px;border-radius:50%;flex-shrink:0}.header__profile[_ngcontent-%COMP%]{margin:0;display:flex;line-height:50px;align-items:center}.header__profile[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .header__profile[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .header__tile[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .header__tile[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-right:5px}.header__profile[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child, .header__profile[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child, .header__tile[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child, .header__tile[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child{margin-right:0}.header__action[_ngcontent-%COMP%]{flex-shrink:0;color:#171717;padding:0 22px;font-size:16px;font-weight:700;line-height:50px;margin-left:auto;text-transform:none;letter-spacing:initial;background-color:#fbbf00}"]],
                data: {}
            });
        function oi(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "figure", [["class", "header__img"]], [[4, "background-image", null]], null, null, null, null)), t["\u0275ppd"](1, 1)], null, function(n, l) {
                var e = t["\u0275unv"](l, 0, 0, n(l, 1, 0, t["\u0275nov"](l.parent.parent, 0), l.parent.context.ngIf.avatar_url));
                n(l, 0, 0, e)
            })
        }
        function si(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "div", [["class", "header__hero"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 0, "figure", [], [[8, "className", 0]], null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 1, "div", [["class", "header__username"]], [[8, "title", 0]], null, null, null, null)), (n()(), t["\u0275ted"](3, null, ["", ""]))], null, function(n, l) {
                n(l, 1, 0, t["\u0275inlineInterpolate"](1, "header__hero-img icon-", l.context.ngIf.name, "")), n(l, 2, 0, l.context.ngIf.localized_name), n(l, 3, 0, l.context.ngIf.localized_name)
            })
        }
        function ci(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 9, "a", [["class", "header__tile"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function(n, l, e) {
                var a = !0;
                return "click" === l && (a = !1 !== t["\u0275nov"](n, 1).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && a), a
            }, null, null)), t["\u0275did"](1, 671744, null, 0, s.RouterLinkWithHref, [s.Router, s.ActivatedRoute, c.LocationStrategy], {
                routerLink: [0, "routerLink"]
            }, null), t["\u0275pad"](2, 2), t["\u0275pid"](131072, D.LocalizeRouterPipe, [E.LocalizeRouterService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](4, 0, null, null, 5, "h1", [["class", "header__profile"]], null, null, null, null, null)), (n()(), t["\u0275eld"](5, 0, null, null, 1, "span", [["class", "header__username"]], [[8, "title", 0]], null, null, null, null)), (n()(), t["\u0275ted"](6, null, ["", ""])), (n()(), t["\u0275eld"](7, 0, null, null, 2, "span", [["class", "header__text"]], null, null, null, null, null)), (n()(), t["\u0275ted"](8, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], function(n, l) {
                var e = t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 3).transform(n(l, 2, 0, "/summary", l.parent.context.ngIf.account_id)));
                n(l, 1, 0, e)
            }, function(n, l) {
                n(l, 0, 0, t["\u0275nov"](l, 1).target, t["\u0275nov"](l, 1).href), n(l, 5, 0, l.parent.context.ngIf.player_name), n(l, 6, 0, l.parent.context.ngIf.player_name), n(l, 8, 0, t["\u0275unv"](l, 8, 0, t["\u0275nov"](l, 9).transform("HEADER.DOTA_2_PROFILE")))
            })
        }
        function di(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 7, "div", [["class", "header__action btn btn_rounded logs__match_go-to-premium"]], null, [[null, "click"]], function(n, l, e) {
                var a = !0;
                return "click" === l && (a = !1 !== t["\u0275nov"](n, 1).onClick() && a), a
            }, null, null)), t["\u0275did"](1, 16384, null, 0, s.RouterLink, [s.Router, s.ActivatedRoute, [8, null], t.Renderer2, t.ElementRef], {
                routerLink: [0, "routerLink"]
            }, null), t["\u0275pad"](2, 1), t["\u0275pid"](131072, D.LocalizeRouterPipe, [E.LocalizeRouterService, t.ChangeDetectorRef]), (n()(), t["\u0275ted"](4, null, ["", ""])), t["\u0275ppd"](5, 4), t["\u0275pod"](6, {
                cost: 0
            }), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], function(n, l) {
                var e = t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 3).transform(n(l, 2, 0, "/payment")));
                n(l, 1, 0, e)
            }, function(n, l) {
                var e = l.component,
                    a = t["\u0275unv"](l, 4, 0, t["\u0275nov"](l, 7).transform("COMMON.GO_PREMIUM_FOR", n(l, 6, 0, t["\u0275unv"](l, 4, 0, n(l, 5, 0, t["\u0275nov"](l.parent.parent, 1), e.cheapestPlan.amount, e.cheapestPlan.currency, "symbol-narrow", "1.0-2")))));
                n(l, 4, 0, a)
            })
        }
        function pi(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 18, "header", [["class", "header"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 13, "div", [["class", "header__tile"]], null, null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 1, "div", [["class", "header__text"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](4, 0, null, null, 4, "div", [["class", "header__user"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, oi)), t["\u0275did"](6, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](7, 0, null, null, 1, "div", [["class", "header__username"]], [[8, "title", 0]], null, null, null, null)), (n()(), t["\u0275ted"](8, null, ["", ""])), (n()(), t["\u0275eld"](9, 0, null, null, 2, "div", [["class", "header__text"]], null, null, null, null, null)), (n()(), t["\u0275ted"](10, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275and"](16777216, null, null, 2, null, si)), t["\u0275did"](13, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), t["\u0275pid"](131072, c.AsyncPipe, [t.ChangeDetectorRef]), (n()(), t["\u0275and"](16777216, null, null, 1, null, ci)), t["\u0275did"](16, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, di)), t["\u0275did"](18, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 6, 0, l.context.ngIf.avatar_url), n(l, 13, 0, t["\u0275unv"](l, 13, 0, t["\u0275nov"](l, 14).transform(e.hero$))), n(l, 16, 0, l.context.ngIf.avatar_url), n(l, 18, 0, e.cheapestPlan)
            }, function(n, l) {
                n(l, 2, 0, t["\u0275unv"](l, 2, 0, t["\u0275nov"](l, 3).transform("MATCH.ANALYSIS_FOR"))), n(l, 7, 0, l.context.ngIf.player_name), n(l, 8, 0, l.context.ngIf.player_name), n(l, 10, 0, t["\u0275unv"](l, 10, 0, t["\u0275nov"](l, 11).transform("MATCH.INTRO_DL_AS")))
            })
        }
        function _i(n) {
            return t["\u0275vid"](2, [t["\u0275pid"](0, ii.a, [Ol.c]), t["\u0275pid"](0, c.CurrencyPipe, [t.LOCALE_ID]), (n()(), t["\u0275and"](16777216, null, null, 2, null, pi)), t["\u0275did"](3, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), t["\u0275pid"](131072, c.AsyncPipe, [t.ChangeDetectorRef])], function(n, l) {
                var e = l.component;
                n(l, 3, 0, t["\u0275unv"](l, 3, 0, t["\u0275nov"](l, 4).transform(e.currentUser$)))
            }, null)
        }
        var fi = function() {
                function n(n, l, e) {
                    this.match = n, this.router = l, this.route = e
                }
                return Object.defineProperty(n.prototype, "teams", {
                    get: function() {
                        return this.match.getTeams()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "url", {
                    get: function() {
                        return this.route.snapshot.url.slice(0, -1).map(function(n) {
                            return n.path
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.ngOnInit = function() {}, n.prototype.teamsTracker = function(n) {
                    return n.i18nTitle
                }, n.prototype.playersTracker = function(n) {
                    return n.hero_id
                }, n.prototype.navigate = function(n) {
                    this.router.navigate(["/match"].concat(this.url, [n]))
                }, n
            }(),
            gi = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".meta[_ngcontent-%COMP%]{display:flex;width:1024px;margin:0 auto;align-items:flex-start;padding-top:15px}.meta__datetime[_ngcontent-%COMP%]{display:flex;flex-direction:column}.meta__date[_ngcontent-%COMP%]{color:#fff;font-size:40px;font-weight:700;line-height:40px}.meta__date[_ngcontent-%COMP%]::first-letter{text-transform:uppercase}.meta__time[_ngcontent-%COMP%]{color:#fff;font-size:16px;padding-top:4px;font-weight:700;line-height:16px}.meta__teams[_ngcontent-%COMP%]{display:flex;margin-left:auto}.meta__team[_ngcontent-%COMP%]{color:#fff;font-size:11px;font-weight:700;letter-spacing:.692308px;text-transform:uppercase;margin-right:25px}.meta__team[_ngcontent-%COMP%]:last-child{margin-right:0}.meta__team_victory[_ngcontent-%COMP%]{color:#53e29f}.meta__team_defeat[_ngcontent-%COMP%]{color:#db4000}.meta__header[_ngcontent-%COMP%]{display:flex;align-items:center}.meta__status[_ngcontent-%COMP%]{display:none}.meta__team_defeat[_ngcontent-%COMP%]   .meta__status[_ngcontent-%COMP%], .meta__team_victory[_ngcontent-%COMP%]   .meta__status[_ngcontent-%COMP%]{display:block;margin-left:4px}.meta__players[_ngcontent-%COMP%]{display:flex;padding-top:10px}.meta__heroimage[_ngcontent-%COMP%]{margin:0;border-radius:50%;width:35px;height:35px;border:3px solid transparent;transition:.2s ease-in-out;transition-property:border-color,transform,-webkit-transform;-webkit-transform:translateY(0);transform:translateY(0)}.meta__heroimage-link[_ngcontent-%COMP%]{cursor:pointer;margin-right:5px}.meta__heroimage-link[_ngcontent-%COMP%]:hover{opacity:1}.meta__heroimage-link[_ngcontent-%COMP%]:hover   .meta__heroimage[_ngcontent-%COMP%]{opacity:1;-webkit-transform:translateY(-10px);transform:translateY(-10px);border-color:#53e29f}.meta__heroimage[_ngcontent-%COMP%]:last-child{margin-right:0}.meta__heroimage-link_current[_ngcontent-%COMP%]{cursor:default}.meta__heroimage-link_current[_ngcontent-%COMP%]   .meta__heroimage[_ngcontent-%COMP%]{border-color:#53e29f}.meta__heroimage-link_current[_ngcontent-%COMP%]:hover   .meta__heroimage[_ngcontent-%COMP%]{-webkit-transform:translateY(0);transform:translateY(0)}.meta__player[_ngcontent-%COMP%]{margin:0;display:block;border-radius:50%;width:100%;height:100%}.meta__player_cheater[_ngcontent-%COMP%]{position:relative}.meta__player_cheater[_ngcontent-%COMP%]:before{top:-6px;right:-6px;content:'';width:17px;height:17px;background:url(/dota/analysis/./static/assets/images/cheater.png) center no-repeat;position:absolute}"]],
                data: {}
            });
        function mi(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "a", [["class", "meta__heroimage-link"]], [[2, "meta__heroimage-link_current", null]], [[null, "click"]], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.navigate(n.context.$implicit.index) && t), t
            }, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 2, "div", [["class", "meta__heroimage"]], null, null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 1, "figure", [], [[8, "className", 0], [2, "meta__player_cheater", null]], null, null, null, null)), t["\u0275ppd"](3, 2)], null, function(n, l) {
                var e = l.component;
                n(l, 0, 0, l.context.$implicit === e.matchData.match.players[e.matchData.match.slot]);
                var a = t["\u0275inlineInterpolate"](1, "meta__player icon-", t["\u0275unv"](l, 2, 0, n(l, 3, 0, t["\u0275nov"](l.parent.parent, 3), l.context.$implicit.hero_id, "name")), "");
                n(l, 2, 0, a, null == l.context.$implicit.cheating ? null : l.context.$implicit.cheating.length)
            })
        }
        function hi(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 12, "div", [["class", "meta__team"]], null, null, null, null, null)), t["\u0275did"](1, 278528, null, 0, c.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275pod"](2, {
                meta__team_victory: 0,
                meta__team_defeat: 1
            }), (n()(), t["\u0275eld"](3, 0, null, null, 6, "div", [["class", "meta__header"]], null, null, null, null, null)), (n()(), t["\u0275eld"](4, 0, null, null, 2, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](5, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](7, 0, null, null, 2, "span", [["class", "meta__status"]], null, null, null, null, null)), (n()(), t["\u0275ted"](8, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](10, 0, null, null, 2, "div", [["class", "meta__players"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, mi)), t["\u0275did"](12, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"],
                ngForTrackBy: [1, "ngForTrackBy"]
            }, null)], function(n, l) {
                var e = l.component,
                    t = n(l, 2, 0, l.context.$implicit.isPlayerTeam && l.context.$implicit.isWinner, l.context.$implicit.isPlayerTeam && !l.context.$implicit.isWinner);
                n(l, 1, 0, "meta__team", t), n(l, 12, 0, l.context.$implicit.players, e.playersTracker)
            }, function(n, l) {
                n(l, 5, 0, t["\u0275unv"](l, 5, 0, t["\u0275nov"](l, 6).transform(l.context.$implicit.i18nTitle))), n(l, 8, 0, t["\u0275unv"](l, 8, 0, t["\u0275nov"](l, 9).transform(l.context.$implicit.isWinner ? "MATCH.VICTORY" : "MATCH.DEFEAT")))
            })
        }
        function vi(n) {
            return t["\u0275vid"](2, [t["\u0275pid"](0, An.DateFormatPipe, []), t["\u0275pid"](0, xl.a, [Sn.a]), t["\u0275pid"](0, kn.FromUnixPipe, []), t["\u0275pid"](0, x.a, []), (n()(), t["\u0275eld"](4, 0, null, null, 25, "div", [["class", "meta"]], null, null, null, null, null)), (n()(), t["\u0275eld"](5, 0, null, null, 21, "time", [["class", "meta__datetime"]], [[1, "datetime", 0]], null, null, null, null)), t["\u0275ppd"](6, 1), t["\u0275ppd"](7, 1), t["\u0275ppd"](8, 1), (n()(), t["\u0275eld"](9, 0, null, null, 4, "span", [["class", "meta__date"]], null, null, null, null, null)), (n()(), t["\u0275ted"](10, null, ["", ""])), t["\u0275ppd"](11, 1), t["\u0275ppd"](12, 1), t["\u0275ppd"](13, 2), (n()(), t["\u0275eld"](14, 0, null, null, 12, "span", [["class", "meta__time"]], null, null, null, null, null)), (n()(), t["\u0275eld"](15, 0, null, null, 4, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](16, null, ["", ""])), t["\u0275ppd"](17, 1), t["\u0275ppd"](18, 1), t["\u0275ppd"](19, 2), (n()(), t["\u0275eld"](20, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u2014"])), (n()(), t["\u0275eld"](22, 0, null, null, 4, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](23, null, ["", ""])), t["\u0275ppd"](24, 1), t["\u0275ppd"](25, 1), t["\u0275ppd"](26, 2), (n()(), t["\u0275eld"](27, 0, null, null, 2, "div", [["class", "meta__teams"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, hi)), t["\u0275did"](29, 278528, null, 0, c.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"],
                ngForTrackBy: [1, "ngForTrackBy"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 29, 0, e.teams, e.teamsTracker)
            }, function(n, l) {
                var e = l.component,
                    a = t["\u0275unv"](l, 5, 0, n(l, 8, 0, t["\u0275nov"](l, 0), t["\u0275unv"](l, 5, 0, n(l, 7, 0, t["\u0275nov"](l, 1), t["\u0275unv"](l, 5, 0, n(l, 6, 0, t["\u0275nov"](l, 2), e.matchData.match.start_time))))));
                n(l, 5, 0, a);
                var i = t["\u0275unv"](l, 10, 0, n(l, 13, 0, t["\u0275nov"](l, 0), t["\u0275unv"](l, 10, 0, n(l, 12, 0, t["\u0275nov"](l, 1), t["\u0275unv"](l, 10, 0, n(l, 11, 0, t["\u0275nov"](l, 2), e.matchData.match.start_time)))), "MMM D, YYYY"));
                n(l, 10, 0, i);
                var u = t["\u0275unv"](l, 16, 0, n(l, 19, 0, t["\u0275nov"](l, 0), t["\u0275unv"](l, 16, 0, n(l, 18, 0, t["\u0275nov"](l, 1), t["\u0275unv"](l, 16, 0, n(l, 17, 0, t["\u0275nov"](l, 2), e.matchData.match.start_time)))), "HH:mm"));
                n(l, 16, 0, u);
                var r = t["\u0275unv"](l, 23, 0, n(l, 26, 0, t["\u0275nov"](l, 0), t["\u0275unv"](l, 23, 0, n(l, 25, 0, t["\u0275nov"](l, 1), t["\u0275unv"](l, 23, 0, n(l, 24, 0, t["\u0275nov"](l, 2), e.matchData.match.start_time + e.matchData.match.duration)))), "HH:mm"));
                n(l, 23, 0, r)
            })
        }
        var xi = e("90/+"),
            yi = e("g7BD"),
            bi = e("S3gD"),
            Oi = e("AytR"),
            Ci = function() {
                function n(n, l, e, t, a, i) {
                    this.route = n, this.matchUtmService = l, this.directApi = e, this.userService = t, this.user = a, this.match = i
                }
                return n.prototype.ngOnInit = function() {
                    var n = this,
                        l = (this.size || 30) + "px";
                    this.providerStyle = {
                        width: l,
                        height: l,
                        fill: this.color || "#000000"
                    };
                    var e = this.route.snapshot.params,
                        t = e.matchId,
                        a = e.playerSlot;
                    this.config = {
                        url: Oi.a.domain + "/match/" + t + "/" + a,
                        title: "Check out my Dota2 match result | GOSU.AI",
                        image: ("/" === Oi.a.sharingURL[0] ? Oi.a.domain + Oi.a.sharingURL : Oi.a.sharingURL) + "/vk/" + t + "/" + a,
                        description: "GOSU.AI Lab",
                        hashtags: "dota2,gosuai",
                        via: "gosuai"
                    }, this.canGetAnalysis = this.match.matchData$.pipe(Object(il.a)(this.user.profileData$), Object(Tt.a)(function(n) {
                        return !!n[0]
                    }), Object(hn.a)(function(l) {
                        var e = l[0].match;
                        return e.players[e.slot].account_id === l[1].accountId && n.user.isAuthenticated
                    }))
                }, n.prototype.catchShareClick = function(n) {
                    var l = this,
                        e = this.route.snapshot.params,
                        t = e.matchId,
                        a = e.playerSlot;
                    this.matchUtmService.setUtm(n), ga("send", "event", "Click", "Share"), this.canGetAnalysis.subscribe(function(e) {
                        e && l.userService.profileData.userShareStatus.userShareStatus && l.directApi.post("money/api/create-share-reward/" + l.userService.profileData.accountId + "/" + t + "/" + a + "/" + n, {
                            sharedLink: l.getUrl(n)
                        }).pipe(Object(ul.a)(1)).subscribe()
                    }).unsubscribe(), this.openProviderWindow(this.getUrl(n)).then(function() {
                        return l.userService.fetchProfile().pipe(Object(ul.a)(1)).subscribe()
                    })
                }, n.prototype.openProviderWindow = function(n) {
                    return new Promise(function(l) {
                        var e = window.open(n, "_blank");
                        !function n() {
                            e.closed ? l() : requestAnimationFrame(n)
                        }()
                    })
                }, n.prototype.getUrl = function(n) {
                    switch (n) {
                    case "fb":
                        return this.getFbUrl();
                    case "tw":
                        return this.getTwUrl();
                    case "vk":
                        return this.getVkUrl();
                    default:
                        return ""
                    }
                }, n.prototype.getVkUrl = function() {
                    return "https://vk.com/share.php?" + Ti(zn.__assign({}, this.config, {
                        url: this.config.url + "?" + this.matchUtmService.generateUtm("vk")
                    }))
                }, n.prototype.getFbUrl = function() {
                    return "https://www.facebook.com/dialog/feed?" + Ti({
                        app_id: "107355456605471",
                        display: "popup",
                        link: this.config.url + "?" + this.matchUtmService.generateUtm("fb"),
                        redirect_uri: this.config.url + "?" + this.matchUtmService.generateUtm("default")
                    })
                }, n.prototype.getTwUrl = function() {
                    return "https://twitter.com/intent/tweet?" + Ti(zn.__assign({}, this.config, {
                        url: this.config.url + "?" + this.matchUtmService.generateUtm("tw"),
                        text: this.config.title
                    }))
                }, n
            }();
        function Ti(n) {
            return Object.keys(n).map(function(l) {
                return l + "=" + encodeURIComponent(n[l])
            }).join("&")
        }
        var Pi = t["\u0275crt"]({
            encapsulation: 0,
            styles: [[".match-share[_ngcontent-%COMP%]{display:flex;align-items:center;color:#000}.match-share__title[_ngcontent-%COMP%]{display:none}.match-share__link[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;margin-left:10px}.match-share__link[_ngcontent-%COMP%]:first-child{margin-left:0}.match-share__providers[_ngcontent-%COMP%]{font-size:0}.match-share__provider[_ngcontent-%COMP%]{display:inline-block;width:30px;height:30px;pointer-events:none;cursor:pointer}.match-share__provider[_ngcontent-%COMP%]:first-child{margin-left:0}.match-share__provider[_ngcontent-%COMP%]:hover{opacity:.7}.match-share__ellipse[_ngcontent-%COMP%]{fill:transparent;stroke:#000;stroke-width:3px}"]],
            data: {}
        });
        function Mi(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 16, "div", [["class", "match-share"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 15, "div", [["class", "match-share__providers"]], [[4, "height", null]], null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 4, "div", [["class", "match-share__link pma-fb-share"], ["id", "pma-fb-share"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.catchShareClick("fb") && t), t
            }, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 3, ":svg:svg", [["class", "match-share__provider match-share__provider_fb"], ["viewBox", "0 0 54 51"]], null, null, null, null, null)), t["\u0275did"](4, 278528, null, 0, c.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), (n()(), t["\u0275eld"](5, 0, null, null, 0, ":svg:ellipse", [["class", "match-share__ellipse"], ["cx", "26.8480303"], ["cy", "24.5"], ["rx", "24"], ["ry", "24"], ["stroke-width", "2"]], [[4, "stroke", null], [4, "strokeWidth", null]], null, null, null, null)), (n()(), t["\u0275eld"](6, 0, null, null, 0, ":svg:path", [["class", "match-share__path"], ["d", "M27.1261267,37.4377362 L27.1261267,25.5162744 L31.3477466,25.5162744 L31.9798743,20.8702692 L27.1261267,20.8702692 L27.1261267,17.9040884 C27.1261267,16.5589627 27.5201984,15.6423039 29.5552059,15.6423039 L32.1507605,15.6412288 L32.1507605,11.4858045 C31.7018692,11.4291852 30.161121,11.3026878 28.3685803,11.3026878 C24.6263491,11.3026878 22.0643164,13.4678373 22.0643164,17.4439673 L22.0643164,20.8702692 L17.8318586,20.8702692 L17.8318586,25.5162744 L22.0643164,25.5162744 L22.0643164,37.4377362 L27.1261267,37.4377362 L27.1261267,37.4377362 Z"]], null, null, null, null, null)), (n()(), t["\u0275eld"](7, 0, null, null, 4, "div", [["class", "match-share__link pma-tw-share"], ["id", "pma-tw-share"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.catchShareClick("tw") && t), t
            }, null, null)), (n()(), t["\u0275eld"](8, 0, null, null, 3, ":svg:svg", [["class", "match-share__provider match-share__provider_tw"], ["viewBox", "0 0 54 51"]], null, null, null, null, null)), t["\u0275did"](9, 278528, null, 0, c.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), (n()(), t["\u0275eld"](10, 0, null, null, 0, ":svg:ellipse", [["class", "match-share__ellipse"], ["cx", "26.1415726"], ["cy", "24.4577307"], ["rx", "24"], ["ry", "24"], ["stroke-width", "2"]], [[4, "stroke", null], [4, "strokeWidth", null]], null, null, null, null)), (n()(), t["\u0275eld"](11, 0, null, null, 0, ":svg:path", [["class", "match-share__path"], ["d", "M39.0592457,17.551517 C38.1314578,17.9423622 37.1349449,18.2029257 36.0811611,18.3223506 C37.1578533,17.7143692 37.9768265,16.7535413 38.3662684,15.6027192 C37.3468471,16.1781303 36.2300654,16.5798323 35.0674669,16.7969686 C34.1224978,15.8415691 32.7766326,15.2444444 31.2875903,15.2444444 C28.4240474,15.2444444 26.0988506,17.4429489 26.0988506,20.1625803 C26.0988506,20.5425687 26.1446673,20.9225571 26.2363007,21.2808319 C21.9238051,21.0745525 18.1038388,19.1203263 15.5438315,16.1455598 C15.0971188,16.8729662 14.845127,17.7143692 14.845127,18.6154846 C14.845127,20.320004 15.7614607,21.8291009 17.1531426,22.7085027 C16.3284422,22.6813606 15.5209231,22.4750812 14.7993103,22.0950928 L14.7993103,22.1548052 C14.7993103,24.5378755 16.5861611,26.5246721 18.9629017,26.9752298 C18.5219161,27.0892263 18.0694763,27.1489387 17.5941282,27.1489387 C17.2619572,27.1489387 16.9355133,27.1163683 16.6205236,27.0620842 C17.2791385,29.010882 19.1919851,30.4331244 21.4656382,30.4711232 C19.6845145,31.7902258 17.4509511,32.5773447 15.0226667,32.5773447 C14.6045894,32.5773447 14.1922392,32.5556311 13.7856161,32.5067754 C16.0821775,33.9018758 18.8082704,34.7161367 21.7348112,34.7161367 C31.2704091,34.7161367 36.4877842,27.2249364 36.4877842,20.7325629 C36.4877842,20.520855 36.4820571,20.3091472 36.470603,20.0974394 C37.4900242,19.4026034 38.3662684,18.5394869 39.0592457,17.551517 Z"]], null, null, null, null, null)), (n()(), t["\u0275eld"](12, 0, null, null, 4, "div", [["class", "match-share__link pma-vk-share"], ["id", "pma-vk-share"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.catchShareClick("vk") && t), t
            }, null, null)), (n()(), t["\u0275eld"](13, 0, null, null, 3, ":svg:svg", [["class", "match-share__provider match-share__provider_vk"], ["viewBox", "0 0 54 51"]], null, null, null, null, null)), t["\u0275did"](14, 278528, null, 0, c.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), (n()(), t["\u0275eld"](15, 0, null, null, 0, ":svg:ellipse", [["class", "match-share__ellipse"], ["cx", "26.1415726"], ["cy", "24.4577307"], ["rx", "24"], ["ry", "24"], ["stroke-width", "2"]], [[4, "stroke", null], [4, "strokeWidth", null]], null, null, null, null)), (n()(), t["\u0275eld"](16, 0, null, null, 0, ":svg:path", [["class", "match-share__path"], ["d", "M24.8309817,31.2687282 L26.3577047,31.2687282 C26.3577047,31.2687282 26.8187619,31.2181338 27.0545071,30.965608 C27.2711842,30.7334991 27.2642584,30.2979372 27.2642584,30.2979372 C27.2642584,30.2979372 27.2343966,28.2583895 28.1850234,27.958045 C29.1225183,27.661999 30.3260695,29.929178 31.601667,30.8010186 C32.5663255,31.4605404 33.2993756,31.3161889 33.2993756,31.3161889 L36.7105326,31.2687282 C36.7105326,31.2687282 38.4948575,31.1591214 37.6487467,29.76235 C37.5794893,29.6482656 37.1558491,28.7291439 35.1123932,26.8407532 C32.9733257,24.8642469 33.2600698,25.1840232 35.8365389,21.7651657 C37.4056259,19.6830828 38.0328112,18.4120367 37.8368213,17.8676739 C37.6500958,17.349011 36.4959242,17.4860197 36.4959242,17.4860197 L32.6552808,17.5096604 C32.6552808,17.5096604 32.3703356,17.4710653 32.159325,17.5967905 C31.9529013,17.7197401 31.8204129,18.0070105 31.8204129,18.0070105 C31.8204129,18.0070105 31.212296,19.6180708 30.4018932,20.9884256 C28.6916825,23.879576 28.0077423,24.0326137 27.7281938,23.8528011 C27.0778027,23.4343427 27.2403329,22.1720723 27.2403329,21.275069 C27.2403329,18.4731083 27.6672113,17.3048636 26.4090632,17.0024599 C25.9916293,16.902166 25.6841081,16.8358108 24.6163732,16.8249756 C23.245884,16.8110956 22.0862255,16.8291842 21.4294486,17.1494977 C20.9924968,17.3625329 20.6553836,17.8371379 20.8608175,17.8644499 C21.1147317,17.8981201 21.6894792,18.0189206 21.994212,18.4317375 C22.3879005,18.9649964 22.374139,20.1620756 22.374139,20.1620756 C22.374139,20.1620756 22.60035,23.4604011 21.8459829,23.8699944 C21.3283507,24.1509962 20.6181465,23.577351 19.093402,20.9543077 C18.3123214,19.6107276 17.7223733,18.1253934 17.7223733,18.1253934 C17.7223733,18.1253934 17.6087728,17.8478837 17.4058575,17.6993232 C17.1597687,17.5193314 16.8159097,17.4622896 16.8159097,17.4622896 L13.1661305,17.4860197 C13.1661305,17.4860197 12.6183652,17.5012429 12.4170687,17.7384557 C12.2379887,17.9496102 12.4027688,18.3857991 12.4027688,18.3857991 C12.4027688,18.3857991 15.2599559,25.041194 18.4954491,28.3951293 C21.4624584,31.4705698 24.8309817,31.2687282 24.8309817,31.2687282"]], null, null, null, null, null))], function(n, l) {
                var e = l.component;
                n(l, 4, 0, e.providerStyle), n(l, 9, 0, e.providerStyle), n(l, 14, 0, e.providerStyle)
            }, function(n, l) {
                var e = l.component;
                n(l, 1, 0, e.providerStyle.height), n(l, 5, 0, e.color, e.circleWidth), n(l, 10, 0, e.color, e.circleWidth), n(l, 15, 0, e.color, e.circleWidth)
            })
        }
        var Ri,
            Ii = e("xMyE"),
            wi = e("15JJ"),
            Ai = e("UmH+"),
            ki = e("XRZb");
        !function(n) {
            n.PAID = "PAID", n.REQUESTED = "REQUESTED", n.READY = "READY", n.ERROR = "ERROR", n.NOT_REQUESTED = "NOT_REQUESTED"
        }(Ri || (Ri = {}));
        var Di = function() {
            function n(n, l, e, t, a, i, u) {
                this.busy = n, this.cd = l, this.session = e, this.modal = t, this.match = a, this.router = i, this.userService = u, this.HIGHLIGHTS_STATES = Ri
            }
            return Object.defineProperty(n.prototype, "user", {
                get: function() {
                    return this.match.getCurrentUser()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "userProfile", {
                get: function() {
                    return this.userService.profileData
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "highlightsData$", {
                get: function() {
                    return this.match.matchData$.pipe(Object(hn.a)(function(n) {
                        var l = n.highlightPrice,
                            e = l.old;
                        return {
                            highlightPrice: l,
                            hasHighlights: void 0 !== n.highlights && n.highlights_length > 2,
                            highlightDiscount: null !== e ? Math.round((e - l.current) / e * 100) : null
                        }
                    }))
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.ngOnInit = function() {
                var n = this;
                this.highlightsState$ = this.match.matchData$.pipe(Object(hn.a)(Ei)), this.highlightsSubscription = this.highlightsData$.pipe(Object(Ii.a)(function(l) {
                    n.highlightsData = l, n.cd.markForCheck()
                })).subscribe(), this.canGetAnalysis = Object(Ee.b)(this.match.matchData$, this.userService.profileData$).pipe(Object(Tt.a)(function(n) {
                    return !!n[0]
                }), Object(hn.a)(function(l) {
                    var e = l[0].match;
                    return e.players[e.slot].account_id === l[1].accountId && n.userService.isAuthenticated
                }))
            }, n.prototype.ngOnDestroy = function() {
                this.highlightsSubscription && this.highlightsSubscription.unsubscribe()
            }, n.prototype.feedbackGosuIndex = function() {
                var n = this.modal.open(ki.a);
                Object.assign(n.componentInstance, {
                    sectionKey: "shield",
                    rate: 0
                }), n.afterClosed().subscribe()
            }, n.prototype.purchaseVideo = function() {
                var n = this;
                this.busy.toggleIsBusy(!0);
                var l = this.session.isAuthenticated() ? Object(Ct.a)(void 0) : this.session.oAuthSignIn("steam").pipe(Object(Ra.a)(function() {
                    return n.session.authenticate()
                }));
                ga("send", "event", "Click", "Video"), l.pipe(Object(hn.a)(function() {
                    if (!n.session.hasBot())
                        throw new Error("NoBotError")
                }), Object(wi.a)(function() {
                    return n.match.buyHighlightsVideo()
                }), Object(Ii.a)(function() {
                    return n.busy.toggleIsBusy(!1)
                })).subscribe(function() {}, function(l) {
                    var e = l.error;
                    ga("send", "event", "Error", "Video"), e && "ApiRequestError<buy_video>" === e.message ? n.showAddGoldPopup() : n.highlightsStatus = Ri.ERROR, n.busy.toggleIsBusy(!1), n.cd.markForCheck()
                })
            }, n.prototype.showAddGoldPopup = function() {
                var n = this.modal.open(vn.a, void 0, "add-gold");
                n.componentInstance.goldNeeded = this.highlightsData.highlightPrice.current, n.componentInstance.purchaseItem = "PAYMENT.VIDEO_HIGHLIGHTS", n.afterClosed().subscribe()
            }, n
        }();
        function Ei(n) {
            return n.highlights ? n.highlights.state === Ri.ERROR || n.highlights.state === Ri.REQUESTED ? Ri.PAID : Ri[n.highlights.state] : Ri.NOT_REQUESTED
        }
        var Si = t["\u0275crt"]({
            encapsulation: 0,
            styles: [[".tiles[_ngcontent-%COMP%]{display:flex;width:1024px;margin:0 auto;padding-top:25px;justify-content:space-between}.tiles__tile[_ngcontent-%COMP%]{flex-grow:1;flex-shrink:0;box-sizing:border-box;background-color:#000;margin-right:10px;min-width:calc(50% - 5px)}.tiles__tile[_ngcontent-%COMP%]:last-child{margin-right:0}.summary[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;padding:15px 0;background-color:#080808}.summary__rank[_ngcontent-%COMP%]{width:60px;height:60px}.summary__text[_ngcontent-%COMP%]{color:#fff;font-size:30px;font-weight:700;line-height:35px;text-align:center;width:350px;margin-top:-5px}.summary__share[_ngcontent-%COMP%]{display:flex;align-items:center;padding-top:15px}.summary__share-title[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:700;line-height:35px;margin-right:10px}.summary__feedback[_ngcontent-%COMP%]{cursor:pointer;font-size:13px;line-height:35px;color:rgba(255,255,255,.3)}.summary__feedback[_ngcontent-%COMP%]:hover{opacity:.7}.summary__earnings[_ngcontent-%COMP%]{display:flex;font-size:13px;line-height:normal;padding:13px 0 5px}.summary__earnings[_ngcontent-%COMP%]     i{margin:0 3px}.summary__in-person[_ngcontent-%COMP%]{color:#f8c018;display:flex;align-items:center}.summary__total[_ngcontent-%COMP%]{margin-left:8px;color:rgba(255,255,255,.28);display:flex;align-items:center}.highlights[_ngcontent-%COMP%]{display:flex;position:relative;align-items:center;flex-direction:column;justify-content:center}.highlights[_ngcontent-%COMP%]   .icon-gold-custom[_ngcontent-%COMP%]{height:25px;width:25px;margin-left:-4px;margin-top:-4px}.highlights__discount[_ngcontent-%COMP%]{display:flex;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-weight:700;position:absolute;border-radius:50%;align-items:center;top:10px;right:10px;flex-direction:column;width:60px;height:60px;justify-content:center;-webkit-transform-origin:center;transform-origin:center;background-color:#fbbf00;-webkit-transform:rotate(-26.63deg);transform:rotate(-26.63deg)}.highlights__discount-value[_ngcontent-%COMP%]{font-size:20px}.highlights__discount-text[_ngcontent-%COMP%]{font-size:10px}.highlights__demo[_ngcontent-%COMP%]{display:flex;align-items:center;padding-top:15px}.highlights__demo-icon[_ngcontent-%COMP%]{width:20px;height:22px;background:url(/dota/analysis/./static/assets/icons/watch-demo.svg) center/contain no-repeat;margin-right:5px}.highlights__demo-text[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:700;line-height:22px}.highlights__demo[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%]{margin-left:5px;font-size:11px;top:-.8em}.highlights__btn[_ngcontent-%COMP%]{display:flex;text-align:center;align-items:center;box-sizing:border-box;justify-content:center;padding:0 38px;font-size:16px;line-height:40px;margin-top:20px}.highlights__btn[_ngcontent-%COMP%]:hover{opacity:1;color:#d9d9d9;background-color:#0045b3}.highlights__muted[_ngcontent-%COMP%]{color:#aeaeae;font-size:13px;font-weight:300;width:242px;padding-bottom:33px;padding-top:13px}.highlights__price_old[_ngcontent-%COMP%]{margin:0 5px;color:rgba(255,255,255,.4);position:relative}.highlights__price_old[_ngcontent-%COMP%]:before{left:0;top:9px;height:0;content:'';width:140%;display:block;position:absolute;-webkit-transform-origin:left;transform-origin:left;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-top:2px solid #db4000}.highlights__price_current[_ngcontent-%COMP%]{color:gold;margin-right:2px}.highlights__title[_ngcontent-%COMP%]{color:#fff;font-size:30px;font-weight:700;line-height:35px}.highlights__title_sm[_ngcontent-%COMP%]{font-size:13px;line-height:40px;text-align:center;letter-spacing:1px;text-transform:uppercase}.highlights__description[_ngcontent-%COMP%]{color:#fff;font-size:16px;text-align:center;width:210px;margin-top:10px}.highlights__status[_ngcontent-%COMP%]{font-size:30px;font-weight:700;line-height:30px;text-align:center;color:#53e29f;width:200px}.highlights__status_ready[_ngcontent-%COMP%]{width:175px}.highlights__status_error[_ngcontent-%COMP%]{color:#db4000}.highlights__status-text[_ngcontent-%COMP%]{color:#fff;font-size:16px;text-align:center;width:295px;margin-top:15px}.highlights__status-text_error[_ngcontent-%COMP%]{width:245px}"]],
            data: {}
        });
        function Ni(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "div", [["class", "summary__in-person"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275ppd"](1, 1), t["\u0275pod"](2, {
                iconClass: 0
            }), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                var e = t["\u0275unv"](l, 0, 0, t["\u0275nov"](l, 3).transform("MATCH.EARN_ONE_GOLD", n(l, 2, 0, t["\u0275unv"](l, 0, 0, n(l, 1, 0, t["\u0275nov"](l.parent.parent, 0), "icon-gold")))));
                n(l, 0, 0, e)
            })
        }
        function Li(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 7, "div", [["class", "summary__earnings"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 2, null, Ni)), t["\u0275did"](2, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), t["\u0275pid"](131072, c.AsyncPipe, [t.ChangeDetectorRef]), (n()(), t["\u0275eld"](4, 0, null, null, 3, "div", [["class", "summary__total"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275ppd"](5, 1), t["\u0275pod"](6, {
                earnedGold: 0,
                iconClass: 1
            }), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], function(n, l) {
                var e = l.component;
                n(l, 2, 0, t["\u0275unv"](l, 2, 0, t["\u0275nov"](l, 3).transform(e.userProfile.userShareStatus.userShareStatus && e.canGetAnalysis)))
            }, function(n, l) {
                var e = l.component,
                    a = t["\u0275unv"](l, 4, 0, t["\u0275nov"](l, 7).transform("MATCH.SUMMARY_TOTAL", n(l, 6, 0, e.userProfile.userShareStatus.userFreeGoldEarned.toString(), t["\u0275unv"](l, 4, 0, n(l, 5, 0, t["\u0275nov"](l.parent, 0), "icon-gold")))));
                n(l, 4, 0, a)
            })
        }
        function Hi(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 5, "div", [["class", "highlights__discount"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 1, "div", [["class", "highlights__discount-value"]], null, null, null, null, null)), (n()(), t["\u0275ted"](2, null, ["", "%"])), (n()(), t["\u0275eld"](3, 0, null, null, 2, "div", [["class", "highlights__discount-text"]], null, null, null, null, null)), (n()(), t["\u0275ted"](4, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                n(l, 2, 0, l.component.highlightsData.highlightDiscount), n(l, 4, 0, t["\u0275unv"](l, 4, 0, t["\u0275nov"](l, 5).transform("MATCH.DISCOUNT_TEXT")))
            })
        }
        function Fi(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 21, null, null, null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 2, "div", [["class", "highlights__title"]], null, null, null, null, null)), (n()(), t["\u0275ted"](2, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](4, 0, null, null, 2, "div", [["class", "highlights__description"]], null, null, null, null, null)), (n()(), t["\u0275ted"](5, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](7, 0, null, null, 4, "a", [["class", "highlights__demo"], ["href", "https://www.youtube.com/watch?v=brYyD13mpNs"], ["rel", "nofollow"], ["target", "_blank"]], null, null, null, null, null)), (n()(), t["\u0275eld"](8, 0, null, null, 0, "div", [["class", "highlights__demo-icon"]], null, null, null, null, null)), (n()(), t["\u0275eld"](9, 0, null, null, 2, "div", [["class", "highlights__demo-text"]], null, null, null, null, null)), (n()(), t["\u0275ted"](10, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](12, 0, null, null, 9, "button", [["class", "highlights__btn btn btn_primary btn_lg btn_rounded"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.purchaseVideo() && t), t
            }, null, null)), (n()(), t["\u0275eld"](13, 0, null, null, 1, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](15, 0, null, null, 1, "span", [["class", "highlights__price highlights__price_old"]], null, null, null, null, null)), (n()(), t["\u0275ted"](16, null, ["", ""])), (n()(), t["\u0275eld"](17, 0, null, null, 1, "span", [["class", "highlights__price highlights__price_current"]], null, null, null, null, null)), (n()(), t["\u0275ted"](18, null, ["", ""])), (n()(), t["\u0275eld"](19, 0, null, null, 2, "i", [["class", "icon"]], null, null, null, null, null)), t["\u0275did"](20, 278528, null, 0, c.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275ppd"](21, 1)], function(n, l) {
                var e = t["\u0275unv"](l, 20, 1, n(l, 21, 0, t["\u0275nov"](l.parent.parent, 0), "icon-gold"));
                n(l, 20, 0, "icon", e)
            }, function(n, l) {
                var e = l.component;
                n(l, 2, 0, t["\u0275unv"](l, 2, 0, t["\u0275nov"](l, 3).transform("MATCH.HIGHLIGHTS"))), n(l, 5, 0, t["\u0275unv"](l, 5, 0, t["\u0275nov"](l, 6).transform("MATCH.HIGHLIGHTS_DESCRIPTION"))), n(l, 10, 0, t["\u0275unv"](l, 10, 0, t["\u0275nov"](l, 11).transform("MATCH.HIGHLIGHTS_WATCH_DEMO"))), n(l, 13, 0, t["\u0275unv"](l, 13, 0, t["\u0275nov"](l, 14).transform("MATCH.BUY_FOR"))), n(l, 16, 0, e.highlightsData.highlightPrice.old), n(l, 18, 0, e.highlightsData.highlightPrice.current)
            })
        }
        function Vi(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 9, null, null, null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 2, "div", [["class", "highlights__title highlights__title_sm"]], null, null, null, null, null)), (n()(), t["\u0275ted"](2, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](4, 0, null, null, 2, "div", [["class", "highlights__status"]], null, null, null, null, null)), (n()(), t["\u0275ted"](5, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](7, 0, null, null, 2, "div", [["class", "highlights__status-text"]], null, null, null, null, null)), (n()(), t["\u0275ted"](8, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                n(l, 2, 0, t["\u0275unv"](l, 2, 0, t["\u0275nov"](l, 3).transform("MATCH.HIGHLIGHTS"))), n(l, 5, 0, t["\u0275unv"](l, 5, 0, t["\u0275nov"](l, 6).transform("MATCH.SUCCESSFUL_PAYMENT"))), n(l, 8, 0, t["\u0275unv"](l, 8, 0, t["\u0275nov"](l, 9).transform("MATCH.PROCEEDING_VIDEO")))
            })
        }
        function ji(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 9, null, null, null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 2, "div", [["class", "highlights__title highlights__title_sm"]], null, null, null, null, null)), (n()(), t["\u0275ted"](2, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](4, 0, null, null, 2, "div", [["class", "highlights__status highlights__status_ready"]], null, null, null, null, null)), (n()(), t["\u0275ted"](5, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](7, 0, null, null, 2, "a", [["class", "highlights__btn btn btn_primary btn_lg btn_rounded"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (n()(), t["\u0275ted"](8, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                var e = l.component;
                n(l, 2, 0, t["\u0275unv"](l, 2, 0, t["\u0275nov"](l, 3).transform("MATCH.HIGHLIGHTS"))), n(l, 5, 0, t["\u0275unv"](l, 5, 0, t["\u0275nov"](l, 6).transform("MATCH.VIDEO_IS_READY"))), n(l, 7, 0, null == e.matchData.highlights ? null : e.matchData.highlights.url), n(l, 8, 0, t["\u0275unv"](l, 8, 0, t["\u0275nov"](l, 9).transform("MATCH.DOWNLOAD")))
            })
        }
        function Gi(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 9, null, null, null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 2, "div", [["class", "highlights__title highlights__title_sm"]], null, null, null, null, null)), (n()(), t["\u0275ted"](2, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](4, 0, null, null, 2, "div", [["class", "highlights__status highlights__status_error"]], null, null, null, null, null)), (n()(), t["\u0275ted"](5, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](7, 0, null, null, 2, "div", [["class", "highlights__status-text highlights__status-text_error"]], null, null, null, null, null)), (n()(), t["\u0275ted"](8, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                n(l, 2, 0, t["\u0275unv"](l, 2, 0, t["\u0275nov"](l, 3).transform("MATCH.HIGHLIGHTS"))), n(l, 5, 0, t["\u0275unv"](l, 5, 0, t["\u0275nov"](l, 6).transform("COMMON.ERROR"))), n(l, 8, 0, t["\u0275unv"](l, 8, 0, t["\u0275nov"](l, 9).transform("MATCH.HIGHLIGHTS_ERROR_TEXT")))
            })
        }
        function $i(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 14, "div", [["class", "tiles__tile"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 13, "div", [["class", "highlights icon-highlights-demo"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, Hi)), t["\u0275did"](3, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](4, 0, null, null, 10, null, null, null, null, null, null, null)), t["\u0275did"](5, 16384, null, 0, c.NgSwitch, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), t["\u0275pid"](131072, c.AsyncPipe, [t.ChangeDetectorRef]), (n()(), t["\u0275and"](16777216, null, null, 1, null, Fi)), t["\u0275did"](8, 278528, null, 0, c.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, c.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Vi)), t["\u0275did"](10, 278528, null, 0, c.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, c.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, ji)), t["\u0275did"](12, 278528, null, 0, c.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, c.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Gi)), t["\u0275did"](14, 278528, null, 0, c.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, c.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 3, 0, null !== (null == e.highlightsData ? null : e.highlightsData.highlightDiscount)), n(l, 5, 0, e.highlightsStatus || t["\u0275unv"](l, 5, 0, t["\u0275nov"](l, 6).transform(e.highlightsState$))), n(l, 8, 0, e.HIGHLIGHTS_STATES.NOT_REQUESTED), n(l, 10, 0, e.HIGHLIGHTS_STATES.PAID), n(l, 12, 0, e.HIGHLIGHTS_STATES.READY), n(l, 14, 0, e.HIGHLIGHTS_STATES.ERROR)
            }, null)
        }
        function zi(n) {
            return t["\u0275vid"](2, [t["\u0275pid"](0, gn.a, [C.a, mn.a]), (n()(), t["\u0275eld"](1, 0, null, null, 19, "div", [["class", "tiles"]], null, null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 16, "div", [["class", "tiles__tile"]], null, null, null, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 15, "div", [["class", "summary"]], null, null, null, null, null)), (n()(), t["\u0275eld"](4, 0, null, null, 0, "div", [], [[8, "className", 0]], null, null, null, null)), (n()(), t["\u0275eld"](5, 0, null, null, 5, "div", [["class", "summary__text"]], null, null, null, null, null)), (n()(), t["\u0275eld"](6, 0, null, null, 2, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pod"](7, {
                username: 0
            }), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](9, 0, null, null, 1, "gosu-rank-title", [], null, null, null, xi.b, xi.a)), t["\u0275did"](10, 49152, null, 0, yi.a, [], {
                shield: [0, "shield"]
            }, null), (n()(), t["\u0275eld"](11, 0, null, null, 5, "div", [["class", "summary__share"]], null, null, null, null, null)), (n()(), t["\u0275eld"](12, 0, null, null, 2, "div", [["class", "summary__share-title"]], null, null, null, null, null)), (n()(), t["\u0275ted"](13, null, ["", ""])), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](15, 0, null, null, 1, "gosu-match-share", [], null, null, null, Mi, Pi)), t["\u0275did"](16, 114688, null, 0, Ci, [s.ActivatedRoute, bi.a, yn.a, C.a, C.a, g.a], {
                size: [0, "size"],
                color: [1, "color"],
                circleWidth: [2, "circleWidth"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Li)), t["\u0275did"](18, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, $i)), t["\u0275did"](20, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 10, 0, e.matchData.match.shield), n(l, 16, 0, 40, "#FFFFFF", 2), n(l, 18, 0, e.userProfile), n(l, 20, 0, e.highlightsData.hasHighlights)
            }, function(n, l) {
                var e = l.component;
                n(l, 4, 0, t["\u0275inlineInterpolate"](1, "summary__rank icon-mmr_", e.matchData.match.shield, ""));
                var a = t["\u0275unv"](l, 6, 0, t["\u0275nov"](l, 8).transform("MATCH.PERF_DESCRIPTION", n(l, 7, 0, e.user.player_name)));
                n(l, 6, 0, a), n(l, 13, 0, t["\u0275unv"](l, 13, 0, t["\u0275nov"](l, 14).transform("MATCH.SHARE_TEXT_ROW")))
            })
        }
        var Ui = function() {
                function n(n) {
                    this.elementRef = n;
                    try {
                        this.vkIsInitialized = "ru" === navigator.language.slice(0, 2) && !!VK
                    } catch (l) {}
                }
                return n.prototype.ngAfterContentInit = function() {
                    try {
                        twttr.widgets.load(this.widgetInner.nativeElement)
                    } catch (n) {}
                }, n.prototype.ngOnDestroy = function() {}, n
            }(),
            Wi = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".widget[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;justify-content:center;margin-top:50px}.widget__text[_ngcontent-%COMP%]{color:#fff;text-align:center}.widget__title[_ngcontent-%COMP%]{font-size:34px;font-weight:700}.widget__description[_ngcontent-%COMP%]{width:345px;font-size:20px;font-weight:300;text-align:center;margin:5px auto 0;padding-bottom:20px}"]],
                data: {}
            });
        function Yi(n) {
            return t["\u0275vid"](0, [t["\u0275qud"](402653184, 1, {
                widgetInner: 0
            }), (n()(), t["\u0275eld"](1, 0, null, null, 8, "div", [["class", "widget"]], null, null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 4, "div", [["class", "widget__text"]], null, null, null, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 1, "div", [["class", "widget__title"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](5, 0, null, null, 1, "div", [["class", "widget__description"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, d.TranslatePipe, [d.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](7, 0, null, null, 2, "div", [["class", "widget__embed"]], null, null, null, null, null)), (n()(), t["\u0275eld"](8, 0, [[1, 0], ["widgetInner", 1]], null, 1, "a", [["class", "twitter-follow-button"], ["data-size", "large"], ["href", "https://twitter.com/gosuai"]], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Follow @GOSU.AI"]))], null, function(n, l) {
                n(l, 3, 0, t["\u0275unv"](l, 3, 0, t["\u0275nov"](l, 4).transform("MATCH.JOIN_OUR_COMMUNITY"))), n(l, 5, 0, t["\u0275unv"](l, 5, 0, t["\u0275nov"](l, 6).transform("MATCH.WE_WOULD_LOVE")))
            })
        }
        var Ki = e("9jMT"),
            Bi = e("cDr6");
        e.d(l, "a", function() {
            return yu
        });
        var Zi = t["\u0275crt"]({
            encapsulation: 0,
            styles: [[".match-container[_ngcontent-%COMP%]{background-color:#171717}.match-fixed-ad[_ngcontent-%COMP%]{display:block;top:60px;right:10px;position:fixed}@media screen and (min-width:0px) and (max-width:1670px){.match-fixed-ad[_ngcontent-%COMP%]{display:none}}.match-row-ad[_ngcontent-%COMP%], .match-split-ads[_ngcontent-%COMP%]{display:flex;margin:0 auto;width:960px;justify-content:center}.match-split-ad[_ngcontent-%COMP%]{display:block}.match-split-ad[_ngcontent-%COMP%]:not(:last-child){margin-right:20px}.match[_ngcontent-%COMP%]{display:flex;position:relative;width:1024px;margin:0 auto}.match__switch[_ngcontent-%COMP%]{font-size:16px;line-height:36px;padding:0 20px}.match__popover[_ngcontent-%COMP%]{color:#fff;font-size:13px;font-weight:300;margin-left:11px;line-height:21px;position:relative;border-radius:30px;background-color:#171717;padding:0 10px}.match__popover[_ngcontent-%COMP%]:before{top:8px;width:0;height:0;left:-7px;content:'';display:block;position:absolute;border-style:solid;border-width:2.5px 7px 2.5px 0;border-color:transparent #171717 transparent transparent}.match__details[_ngcontent-%COMP%]{width:100%;padding-bottom:100px}.match__details_ordered[_ngcontent-%COMP%]{display:flex;flex-direction:column}.match__details_ordered[_ngcontent-%COMP%]   .match__share-section[_ngcontent-%COMP%], .match__details_ordered[_ngcontent-%COMP%]   gosu-match-analysis[_ngcontent-%COMP%], .match__details_ordered[_ngcontent-%COMP%]   gosu-match-teamfight-advice[_ngcontent-%COMP%], .match__details_ordered[_ngcontent-%COMP%]   gosu-share-n-highlights[_ngcontent-%COMP%]{order:-1}.match__share-section[_ngcontent-%COMP%]{margin-top:30px}.match[_ngcontent-%COMP%]   .adsense[_ngcontent-%COMP%]{display:none;transition:-webkit-transform 150ms ease-in-out;transition:transform 150ms ease-in-out;transition:transform 150ms ease-in-out,-webkit-transform 150ms ease-in-out}@media screen and (min-width:1601px){.match[_ngcontent-%COMP%]   .adsense[_ngcontent-%COMP%]{margin-top:30px;position:fixed;right:10px;top:50px;display:block}.match[_ngcontent-%COMP%]   .adsense[_ngcontent-%COMP%]:hover{-webkit-transform:scale(1.075);transform:scale(1.075);-webkit-transform-origin:center;transform-origin:center}}.match[_ngcontent-%COMP%]   .adsense[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{opacity:1}.match[_ngcontent-%COMP%]   .high-order[_ngcontent-%COMP%]{order:-1}@media screen and (min-width:1361px){.match__sidebar[_ngcontent-%COMP%]{height:100%}}@media screen and (min-width:1025px) and (max-width:1360px){.match[_ngcontent-%COMP%]{flex-direction:column;width:960px}.match__sidebar[_ngcontent-%COMP%]{width:100%}}@media screen and (max-width:1024px){.match[_ngcontent-%COMP%]{flex-direction:column;width:100%}.match__details[_ngcontent-%COMP%]{padding-bottom:0}.match__sidebar[_ngcontent-%COMP%]{width:100%}.match[_ngcontent-%COMP%]   .adsense[_ngcontent-%COMP%], .match__share-section[_ngcontent-%COMP%]{margin-top:15px}}"]],
            data: {}
        });
        function Xi(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "gosu-google-ad", [["class", "match-row-ad"]], null, null, null, a.b, a.a)), t["\u0275did"](1, 114688, null, 0, i.a, [u.a], null, null), (n()(), t["\u0275eld"](2, 0, null, 0, 0, "ins", [["class", "adsbygoogle"], ["data-ad-client", "ca-pub-4450509890783427"], ["data-ad-slot", "1290931919"], ["style", "display:inline-block;width:728px;height:90px"]], null, null, null, null, null))], function(n, l) {
                n(l, 1, 0)
            }, null)
        }
        function qi(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "gosu-google-ad", [["class", "fixed-ad"]], null, null, null, a.b, a.a)), t["\u0275did"](1, 114688, null, 0, i.a, [u.a], {
                isVert: [0, "isVert"]
            }, null), (n()(), t["\u0275eld"](2, 0, null, 0, 0, "ins", [["class", "adsbygoogle"], ["data-ad-client", "ca-pub-4450509890783427"], ["data-ad-slot", "6550287014"], ["style", "display:inline-block;width:300px;height:600px"]], null, null, null, null, null))], function(n, l) {
                n(l, 1, 0, !0)
            }, null)
        }
        function Qi(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "gosu-match-summary-stats", [["class", "high-order logs__match_summary-stats"]], null, null, null, v, h)), t["\u0275did"](1, 49152, null, 0, m, [g.a], {
                data: [0, "data"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 1, 0, null == e.sectionsData ? null : e.sectionsData.summaryTable)
            }, null)
        }
        function Ji(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "gosu-match-advices", [["class", "logs__match_advices"]], null, null, null, k, w)), t["\u0275did"](1, 49152, null, 0, I, [g.a], {
                data: [0, "data"]
            }, null)], function(n, l) {
                n(l, 1, 0, l.component.sectionsData.hero_advice)
            }, null)
        }
        function nu(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "gosu-match-laning", [["class", "logs__match_laning"]], null, null, null, $, H)), t["\u0275did"](1, 49152, null, 0, L, [], {
                data: [0, "data"],
                matchData: [1, "matchData"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 1, 0, null == e.sectionsData ? null : e.sectionsData.laneDamage, e.matchData)
            }, null)
        }
        function lu(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 5, "gosu-google-ad", [["class", "match-split-ads"]], null, null, null, a.b, a.a)), t["\u0275did"](1, 114688, null, 0, i.a, [u.a], null, null), (n()(), t["\u0275eld"](2, 0, null, 0, 1, "div", [["class", "match-split-ad"]], null, null, null, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 0, "ins", [["class", "adsbygoogle"], ["data-ad-client", "ca-pub-4450509890783427"], ["data-ad-slot", "2419470311"], ["style", "display:inline-block;width:336px;height:280px"]], null, null, null, null, null)), (n()(), t["\u0275eld"](4, 0, null, 0, 1, "div", [["class", "match-split-ad"]], null, null, null, null, null)), (n()(), t["\u0275eld"](5, 0, null, null, 0, "ins", [["class", "adsbygoogle"], ["data-ad-client", "ca-pub-4450509890783427"], ["data-ad-slot", "2227898629"], ["style", "display:inline-block;width:336px;height:280px"]], null, null, null, null, null))], function(n, l) {
                n(l, 1, 0)
            }, null)
        }
        function eu(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "gosu-match-players-compare", [["class", "logs__match_players-compare"]], null, null, null, on, en)), t["\u0275did"](1, 49152, null, 0, ln, [g.a], {
                data: [0, "data"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 1, 0, null == e.sectionsData ? null : e.sectionsData.roleStat)
            }, null)
        }
        function tu(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "gosu-match-winrates", [["class", "logs__match_winrates"]], null, null, null, fn, dn)), t["\u0275did"](1, 49152, null, 0, cn, [g.a], {
                data: [0, "data"]
            }, null)], function(n, l) {
                n(l, 1, 0, l.component.sectionsData.heroPairedWinrate)
            }, null)
        }
        function au(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "gosu-match-analysis", [["class", "logs__match_analysis"]], null, null, null, wn, Cn)), t["\u0275did"](1, 114688, null, 0, On, [C.a, t.ChangeDetectorRef, T.a, s.Router, yn.a, u.a], {
                matchData: [0, "matchData"]
            }, null)], function(n, l) {
                n(l, 1, 0, l.component.matchData)
            }, null)
        }
        function iu(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "gosu-google-ad", [["class", "match-row-ad"]], null, null, null, a.b, a.a)), t["\u0275did"](1, 114688, null, 0, i.a, [u.a], null, null), (n()(), t["\u0275eld"](2, 0, null, 0, 0, "ins", [["class", "adsbygoogle"], ["data-ad-client", "ca-pub-4450509890783427"], ["data-ad-slot", "9116794503"], ["style", "display:inline-block;width:728px;height:90px"]], null, null, null, null, null))], function(n, l) {
                n(l, 1, 0)
            }, null)
        }
        function uu(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "gosu-match-teamfight-advice", [["class", "logs__match_teamfight-advice"]], null, null, null, Gn, Ln)), t["\u0275did"](1, 49152, null, 0, Nn, [C.a, g.a, Sn.a], {
                data: [0, "data"]
            }, null)], function(n, l) {
                n(l, 1, 0, l.component.sectionsData.teamfights_errors_analysis)
            }, null)
        }
        function ru(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "gosu-match-deaths", [["class", "logs__match_deaths"]], [[2, "high-order", null]], null, null, Nl, Il)), t["\u0275prd"](512, null, rl, rl, []), t["\u0275did"](2, 114688, null, 0, Ml, [g.a, rl, t.PLATFORM_ID], {
                data: [0, "data"],
                matchDate: [1, "matchDate"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 2, 0, e.sectionsData.escape, e.matchData.match.start_time)
            }, function(n, l) {
                var e = l.component;
                n(l, 0, 0, null == e.sectionsData.escape ? null : e.sectionsData.escape.data)
            })
        }
        function ou(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "gosu-match-ganks", [["class", "logs__match_ganks"]], [[2, "high-order", null]], null, null, pt, tt)), t["\u0275prd"](512, null, Hl, Hl, []), t["\u0275did"](2, 245760, null, 0, lt, [g.a, s.ActivatedRoute, Hl, t.PLATFORM_ID], {
                data: [0, "data"],
                matchDate: [1, "matchDate"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 2, 0, e.sectionsData.gangs, e.matchData.match.start_time)
            }, function(n, l) {
                var e = l.component;
                n(l, 0, 0, null == e.sectionsData.gangs ? null : e.sectionsData.gangs.data)
            })
        }
        function su(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "gosu-google-ad", [["class", "match-row-ad"]], null, null, null, a.b, a.a)), t["\u0275did"](1, 114688, null, 0, i.a, [u.a], null, null), (n()(), t["\u0275eld"](2, 0, null, 0, 0, "ins", [["class", "adsbygoogle"], ["data-ad-client", "ca-pub-4450509890783427"], ["data-ad-slot", "3098181063"], ["style", "display:inline-block;width:728px;height:90px"]], null, null, null, null, null))], function(n, l) {
                n(l, 1, 0)
            }, null)
        }
        function cu(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "gosu-match-focus", [["class", "logs__match_focus"]], [[2, "high-order", null]], null, null, Vt, Nt)), t["\u0275did"](1, 4440064, null, 0, St, [g.a], {
                dataReceiver: [0, "dataReceiver"]
            }, null)], function(n, l) {
                n(l, 1, 0, l.component.sectionsData.focusPriority)
            }, function(n, l) {
                var e = l.component;
                n(l, 0, 0, null == e.sectionsData.focusPriority ? null : e.sectionsData.focusPriority.data)
            })
        }
        function du(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "gosu-match-lost-time", [["class", "logs__match_lost-time"]], [[2, "high-order", null]], null, null, Zt, Wt)), t["\u0275did"](1, 770048, null, 0, Ut, [g.a], {
                data: [0, "data"]
            }, null)], function(n, l) {
                n(l, 1, 0, l.component.sectionsData.lostTime)
            }, function(n, l) {
                var e = l.component;
                n(l, 0, 0, null == e.sectionsData.lostTime ? null : e.sectionsData.lostTime.data)
            })
        }
        function pu(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 5, "gosu-google-ad", [["class", "match-split-ads"]], null, null, null, a.b, a.a)), t["\u0275did"](1, 114688, null, 0, i.a, [u.a], null, null), (n()(), t["\u0275eld"](2, 0, null, 0, 1, "div", [["class", "match-split-ad"]], null, null, null, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 0, "ins", [["class", "adsbygoogle"], ["data-ad-client", "ca-pub-4450509890783427"], ["data-ad-slot", "1210384325"], ["style", "display:inline-block;width:336px;height:280px"]], null, null, null, null, null)), (n()(), t["\u0275eld"](4, 0, null, 0, 1, "div", [["class", "match-split-ad"]], null, null, null, null, null)), (n()(), t["\u0275eld"](5, 0, null, null, 0, "ins", [["class", "adsbygoogle"], ["data-ad-client", "ca-pub-4450509890783427"], ["data-ad-slot", "7368598566"], ["style", "display:inline-block;width:336px;height:280px"]], null, null, null, null, null))], function(n, l) {
                n(l, 1, 0)
            }, null)
        }
        function _u(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "gosu-match-farm", [["class", "logs__match_farm"]], [[2, "high-order", null]], null, null, da, oa)), t["\u0275did"](1, 638976, null, 0, ra, [g.a], {
                data: [0, "data"]
            }, null)], function(n, l) {
                n(l, 1, 0, l.component.sectionsData.farming)
            }, function(n, l) {
                var e = l.component;
                n(l, 0, 0, null == e.sectionsData.farming ? null : e.sectionsData.farming.data)
            })
        }
        function fu(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "gosu-match-warding", [["class", "logs__match_warding"]], [[2, "high-order", null]], [["window", "scroll"]], function(n, l, e) {
                var a = !0;
                return "window:scroll" === l && (a = !1 !== t["\u0275nov"](n, 2).onScroll() && a), a
            }, pa.b, pa.a)), t["\u0275prd"](512, null, _a.a, _a.a, []), t["\u0275did"](2, 770048, null, 0, fa.a, [g.a, _a.a, t.PLATFORM_ID], {
                data: [0, "data"],
                matchDate: [1, "matchDate"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 2, 0, e.sectionsData.warding, e.matchData.match.start_time)
            }, function(n, l) {
                var e = l.component;
                n(l, 0, 0, null == e.sectionsData.warding ? null : e.sectionsData.warding.data)
            })
        }
        function gu(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "gosu-match-mechanical-mistakes", [["class", "logs__match_mechanical-mistakes"]], [[2, "high-order", null]], null, null, Fa, wa)), t["\u0275did"](1, 4964352, null, 0, Ia, [d.TranslateService, g.a, Pt.a, t.ChangeDetectorRef], {
                data: [0, "data"]
            }, null)], function(n, l) {
                n(l, 1, 0, l.component.sectionsData.mechanicalMistakes)
            }, function(n, l) {
                var e = l.component;
                n(l, 0, 0, null == e.sectionsData.mechanicalMistakes ? null : e.sectionsData.mechanicalMistakes.data)
            })
        }
        function mu(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "gosu-match-midas", [["class", "logs__match_midas"]], [[2, "high-order", null]], null, null, ni, Qa)), t["\u0275did"](1, 49152, null, 0, qa, [], {
                data: [0, "data"]
            }, null)], function(n, l) {
                n(l, 1, 0, l.component.sectionsData.itemsEfficiency)
            }, function(n, l) {
                var e = l.component;
                n(l, 0, 0, null == e.sectionsData.itemsEfficiency ? null : e.sectionsData.itemsEfficiency.data)
            })
        }
        function hu(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "gosu-google-ad", [["class", "match-row-ad"]], null, null, null, a.b, a.a)), t["\u0275did"](1, 114688, null, 0, i.a, [u.a], null, null), (n()(), t["\u0275eld"](2, 0, null, 0, 0, "ins", [["class", "adsbygoogle"], ["data-ad-client", "ca-pub-4450509890783427"], ["data-ad-slot", "9910947525"], ["style", "display:inline-block;width:728px;height:90px"]], null, null, null, null, null))], function(n, l) {
                n(l, 1, 0)
            }, null)
        }
        function vu(n) {
            return t["\u0275vid"](2, [(n()(), t["\u0275eld"](0, 0, null, null, 60, "gosu-footer-wrap", [], null, null, null, li.b, li.a)), t["\u0275did"](1, 49152, null, 0, ei.a, [], {
                bgc: [0, "bgc"]
            }, null), (n()(), t["\u0275eld"](2, 0, null, 0, 58, "div", [["class", "match-container"]], null, null, null, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 1, "gosu-header", [], null, null, null, ti.b, ti.a)), t["\u0275did"](4, 114688, null, 0, ai.a, [u.a, C.a, Sn.a], null, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Xi)), t["\u0275did"](6, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](7, 0, null, null, 1, "gosu-match-header", [], null, null, null, _i, ri)), t["\u0275did"](8, 114688, null, 0, ui, [u.a, g.a], null, null), (n()(), t["\u0275eld"](9, 0, null, null, 1, "gosu-match-meta", [], null, null, null, vi, gi)), t["\u0275did"](10, 114688, null, 0, fi, [g.a, s.Router, s.ActivatedRoute], {
                matchData: [0, "matchData"]
            }, null), (n()(), t["\u0275eld"](11, 0, null, null, 2, "gosu-match-tiles", [["class", "logs__match_tiles"]], null, null, null, zi, Si)), t["\u0275did"](12, 245760, null, 0, Di, [Ai.a, t.ChangeDetectorRef, u.a, T.a, g.a, s.Router, C.a], {
                matchData: [0, "matchData"],
                canGetAnalysis: [1, "canGetAnalysis"]
            }, null), t["\u0275pid"](131072, c.AsyncPipe, [t.ChangeDetectorRef]), (n()(), t["\u0275eld"](14, 0, null, null, 46, "div", [["class", "match"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, qi)), t["\u0275did"](16, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](17, 0, null, null, 43, "div", [["class", "match__details"], ["id", "match-details"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, Qi)), t["\u0275did"](19, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Ji)), t["\u0275did"](21, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, nu)), t["\u0275did"](23, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, lu)), t["\u0275did"](25, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, eu)), t["\u0275did"](27, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, tu)), t["\u0275did"](29, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 2, null, au)), t["\u0275did"](31, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), t["\u0275pid"](131072, c.AsyncPipe, [t.ChangeDetectorRef]), (n()(), t["\u0275and"](16777216, null, null, 1, null, iu)), t["\u0275did"](34, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, uu)), t["\u0275did"](36, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, ru)), t["\u0275did"](38, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, ou)), t["\u0275did"](40, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, su)), t["\u0275did"](42, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, cu)), t["\u0275did"](44, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, du)), t["\u0275did"](46, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, pu)), t["\u0275did"](48, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, _u)), t["\u0275did"](50, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, fu)), t["\u0275did"](52, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, gu)), t["\u0275did"](54, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, mu)), t["\u0275did"](56, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, hu)), t["\u0275did"](58, 16384, null, 0, c.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](59, 0, null, null, 1, "gosu-match-social-widget", [], null, null, null, Yi, Wi)), t["\u0275did"](60, 1228800, null, 0, Ui, [t.ElementRef], null, null)], function(n, l) {
                var e = l.component;
                n(l, 1, 0, "#171717"), n(l, 4, 0), n(l, 6, 0, e.hasAds), n(l, 8, 0), n(l, 10, 0, e.matchData), n(l, 12, 0, e.matchData, t["\u0275unv"](l, 12, 1, t["\u0275nov"](l, 13).transform(e.canGetHighlight))), n(l, 16, 0, e.hasAds), n(l, 19, 0, null == e.sectionsData ? null : e.sectionsData.summaryTable), n(l, 21, 0, e.sectionsData.hero_advice), n(l, 23, 0, !(null == e.sectionsData || !e.sectionsData.laneDamage)), n(l, 25, 0, e.hasAds), n(l, 27, 0, null == e.sectionsData ? null : e.sectionsData.roleStat), n(l, 29, 0, null == e.sectionsData.heroPairedWinrate ? null : null == e.sectionsData.heroPairedWinrate.summary ? null : e.sectionsData.heroPairedWinrate.summary.winrates.length), n(l, 31, 0, t["\u0275unv"](l, 31, 0, t["\u0275nov"](l, 32).transform(e.canGetAnalysis))), n(l, 34, 0, e.hasAds), n(l, 36, 0, e.sectionsData.teamfights_errors_analysis), n(l, 38, 0, e.sectionsData.escape), n(l, 40, 0, e.sectionsData.gangs), n(l, 42, 0, e.hasAds), n(l, 44, 0, e.sectionsData.focusPriority), n(l, 46, 0, e.sectionsData.lostTime), n(l, 48, 0, e.hasAds), n(l, 50, 0, e.sectionsData.farming), n(l, 52, 0, e.sectionsData.warding), n(l, 54, 0, e.sectionsData.mechanicalMistakes), n(l, 56, 0, e.sectionsData.itemsEfficiency), n(l, 58, 0, e.hasAds)
            }, null)
        }
        function xu(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "gosu-match", [], null, [["document", "scroll"]], function(n, l, e) {
                var a = !0;
                return "document:scroll" === l && (a = !1 !== t["\u0275nov"](n, 1).onScroll() && a), a
            }, vu, Zi)), t["\u0275did"](1, 4440064, null, 0, Ki.a, [d.TranslateService, Pt.a, s.ActivatedRoute, Bi.d, bi.a, C.a, g.a, c.DOCUMENT, t.PLATFORM_ID], null, null), t["\u0275prd"](256, null, ml.a, "default", [])], function(n, l) {
                n(l, 1, 0)
            }, null)
        }
        var yu = t["\u0275ccf"]("gosu-match", Ki.a, xu, {}, {}, [])
    },
    "3n8S": function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        var t = {
            offlaner_early8_w0: [{
                x: 99.50537634408602,
                y: 154.29973118279568
            }, {
                x: 99.33467741935483,
                y: 159.07930107526883
            }, {
                x: 100.87096774193549,
                y: 158.90860215053766
            }, {
                x: 101.04166666666669,
                y: 154.4704301075269
            }, {
                x: 99.50537634408602,
                y: 154.29973118279568
            }],
            offlaner_early13_w0: [{
                x: 166.2486559139785,
                y: 124.25672043010752
            }, {
                x: 167.95564516129033,
                y: 124.25672043010752
            }, {
                x: 167.95564516129033,
                y: 122.20833333333334
            }, {
                x: 166.2486559139785,
                y: 122.37903225806451
            }, {
                x: 166.2486559139785,
                y: 124.25672043010752
            }],
            midallgame_4_w0: [{
                x: 137.57123655913978,
                y: 105.6505376344086
            }, {
                x: 139.96102150537635,
                y: 109.91801075268818
            }, {
                x: 143.88709677419354,
                y: 109.23521505376344
            }, {
                x: 145.93548387096774,
                y: 107.18682795698923
            }, {
                x: 148.32526881720432,
                y: 105.6505376344086
            }, {
                x: 151.05645161290326,
                y: 106.16263440860214
            }, {
                x: 146.61827956989245,
                y: 102.5779569892473
            }, {
                x: 141.3266129032258,
                y: 105.13844086021506
            }, {
                x: 137.57123655913978,
                y: 105.6505376344086
            }],
            pusht1_all3_w0: [{
                x: 153.44623655913978,
                y: 135.69354838709677
            }, {
                x: 157.372311827957,
                y: 135.35215053763443
            }, {
                x: 157.5430107526882,
                y: 129.71908602150538
            }, {
                x: 153.27553763440858,
                y: 129.71908602150538
            }, {
                x: 153.44623655913978,
                y: 135.69354838709677
            }],
            pusht1_all3_w1: [{
                x: 151.22715053763443,
                y: 119.81854838709678
            }, {
                x: 151.05645161290326,
                y: 123.74462365591398
            }, {
                x: 153.44623655913978,
                y: 124.08602150537635
            }, {
                x: 153.78763440860217,
                y: 119.98924731182795
            }, {
                x: 151.22715053763443,
                y: 119.81854838709678
            }],
            pusht1_all2_w0: [{
                x: 165.73655913978496,
                y: 134.6693548387097
            }, {
                x: 168.1263440860215,
                y: 134.6693548387097
            }, {
                x: 168.1263440860215,
                y: 133.30376344086022
            }, {
                x: 165.73655913978496,
                y: 133.13306451612902
            }, {
                x: 165.73655913978496,
                y: 134.6693548387097
            }],
            midallgame_5_w0: [{
                x: 123.74462365591398,
                y: 133.47446236559142
            }, {
                x: 123.06182795698923,
                y: 132.96236559139786
            }, {
                x: 123.40322580645163,
                y: 130.57258064516128
            }, {
                x: 128.18279569892474,
                y: 126.47580645161293
            }, {
                x: 129.20698924731184,
                y: 125.45161290322581
            }, {
                x: 131.4260752688172,
                y: 125.45161290322581
            }, {
                x: 132.45026881720432,
                y: 124.93951612903227
            }, {
                x: 132.96236559139786,
                y: 125.622311827957
            }, {
                x: 131.5967741935484,
                y: 126.6465053763441
            }, {
                x: 129.20698924731184,
                y: 126.98790322580645
            }, {
                x: 124.42741935483872,
                y: 130.74327956989248
            }, {
                x: 123.74462365591398,
                y: 133.47446236559142
            }],
            offlaner_early12_w0: [{
                x: 169.66263440860217,
                y: 85.84946236559139
            }, {
                x: 171.54032258064518,
                y: 83.8010752688172
            }, {
                x: 172.9059139784946,
                y: 80.8991935483871
            }, {
                x: 176.31989247311827,
                y: 83.28897849462365
            }, {
                x: 172.39381720430106,
                y: 88.9220430107527
            }, {
                x: 169.66263440860217,
                y: 85.84946236559139
            }],
            offlaner_early9_w0: [{
                x: 107.01612903225808,
                y: 153.95833333333334
            }, {
                x: 107.18682795698923,
                y: 158.05510752688173
            }, {
                x: 110.9422043010753,
                y: 158.22580645161293
            }, {
                x: 111.11290322580645,
                y: 153.95833333333334
            }, {
                x: 107.01612903225808,
                y: 153.95833333333334
            }],
            offlaner_early10_w0: [{
                x: 166.59005376344086,
                y: 100.7002688172043
            }, {
                x: 169.15053763440858,
                y: 100.7002688172043
            }, {
                x: 168.97983870967744,
                y: 89.26344086021506
            }, {
                x: 166.93145161290326,
                y: 87.38575268817205
            }, {
                x: 152.2513440860215,
                y: 86.02016129032259
            }, {
                x: 148.4959677419355,
                y: 86.36155913978494
            }, {
                x: 149.17876344086022,
                y: 88.58064516129032
            }, {
                x: 156.17741935483872,
                y: 88.06854838709677
            }, {
                x: 159.76209677419354,
                y: 88.23924731182797
            }, {
                x: 164.71236559139788,
                y: 89.77553763440861
            }, {
                x: 167.10215053763443,
                y: 91.31182795698923
            }, {
                x: 166.59005376344086,
                y: 100.7002688172043
            }],
            midallgame_7_w0: [{
                x: 148.32526881720432,
                y: 117.25806451612905
            }, {
                x: 147.98387096774198,
                y: 121.18413978494623
            }, {
                x: 142.69220430107524,
                y: 121.35483870967742
            }, {
                x: 139.79032258064518,
                y: 123.5739247311828
            }, {
                x: 138.2540322580645,
                y: 121.35483870967742
            }, {
                x: 142.00940860215053,
                y: 119.30645161290323
            }, {
                x: 143.71639784946237,
                y: 117.94086021505377
            }, {
                x: 148.32526881720432,
                y: 117.25806451612905
            }],
            block_12all_w0: [{
                x: 128.35349462365593,
                y: 151.73924731182797
            }, {
                x: 128.35349462365593,
                y: 157.7137096774194
            }, {
                x: 121.18413978494623,
                y: 157.5430107526882
            }, {
                x: 121.5255376344086,
                y: 151.73924731182797
            }, {
                x: 128.35349462365593,
                y: 151.73924731182797
            }],
            pusht1_all1_w0: [{
                x: 172.9059139784946,
                y: 120.5013440860215
            }, {
                x: 177.68548387096774,
                y: 120.5013440860215
            }, {
                x: 178.0268817204301,
                y: 124.25672043010752
            }, {
                x: 172.2231182795699,
                y: 124.93951612903227
            }, {
                x: 172.9059139784946,
                y: 120.5013440860215
            }],
            midallgame_6_w0: [{
                x: 119.30645161290323,
                y: 140.81451612903226
            }, {
                x: 119.81854838709678,
                y: 137.91263440860217
            }, {
                x: 122.54973118279571,
                y: 135.18145161290323
            }, {
                x: 125.79301075268818,
                y: 138.08333333333334
            }, {
                x: 122.37903225806451,
                y: 139.10752688172042
            }, {
                x: 119.30645161290323,
                y: 140.81451612903226
            }],
            offlaner_early11_w0: [{
                x: 157.5430107526882,
                y: 83.11827956989248
            }, {
                x: 158.22580645161293,
                y: 78.16801075268819
            }, {
                x: 149.5201612903226,
                y: 78.16801075268819
            }, {
                x: 149.5201612903226,
                y: 81.75268817204302
            }, {
                x: 157.5430107526882,
                y: 83.11827956989248
            }],
            block_0all_w0: [{
                x: 93.18951612903227,
                y: 122.20833333333334
            }, {
                x: 88.40994623655914,
                y: 122.37903225806451
            }, {
                x: 88.23924731182797,
                y: 127.67069892473118
            }, {
                x: 93.01881720430107,
                y: 127.67069892473118
            }, {
                x: 93.18951612903227,
                y: 122.20833333333334
            }],
            block_10all_w0: [{
                x: 109.91801075268818,
                y: 161.81048387096774
            }, {
                x: 109.57661290322581,
                y: 167.95564516129033
            }, {
                x: 103.09005376344086,
                y: 167.61424731182797
            }, {
                x: 103.77284946236558,
                y: 161.98118279569894
            }, {
                x: 109.91801075268818,
                y: 161.81048387096774
            }],
            roshkill_all1_w0: [{
                x: 100.87096774193549,
                y: 146.44758064516128
            }, {
                x: 103.77284946236558,
                y: 149.34946236559142
            }, {
                x: 101.55376344086021,
                y: 150.88575268817203
            }, {
                x: 98.48118279569893,
                y: 148.32526881720432
            }, {
                x: 100.87096774193549,
                y: 146.44758064516128
            }],
            midallgame_2_w0: [{
                x: 114.86827956989248,
                y: 127.32930107526882
            }, {
                x: 116.06317204301077,
                y: 128.01209677419357
            }, {
                x: 117.77016129032259,
                y: 124.76881720430107
            }, {
                x: 121.6962365591398,
                y: 119.98924731182795
            }, {
                x: 127.67069892473118,
                y: 119.30645161290323
            }, {
                x: 125.45161290322581,
                y: 117.77016129032259
            }, {
                x: 120.84274193548387,
                y: 119.30645161290323
            }, {
                x: 114.86827956989248,
                y: 127.32930107526882
            }],
            offlaner_early15_w0: [{
                x: 157.5430107526882,
                y: 120.5013440860215
            }, {
                x: 162.15188172043008,
                y: 120.6720430107527
            }, {
                x: 161.98118279569894,
                y: 118.4529569892473
            }, {
                x: 157.5430107526882,
                y: 118.79435483870968
            }, {
                x: 157.5430107526882,
                y: 120.5013440860215
            }],
            pusht1_all5_w0: [{
                x: 123.74462365591398,
                y: 141.6680107526882
            }, {
                x: 127.5,
                y: 142.00940860215053
            }, {
                x: 135.18145161290323,
                y: 143.88709677419354
            }, {
                x: 135.5228494623656,
                y: 147.64247311827958
            }, {
                x: 127.15860215053765,
                y: 148.83736559139788
            }, {
                x: 126.6465053763441,
                y: 144.05779569892476
            }, {
                x: 123.74462365591398,
                y: 141.6680107526882
            }],
            pusht1_all4_w0: [{
                x: 136.20564516129033,
                y: 136.03494623655916
            }, {
                x: 139.27822580645162,
                y: 141.15591397849462
            }, {
                x: 143.88709677419354,
                y: 137.22983870967744
            }, {
                x: 139.96102150537635,
                y: 132.6209677419355
            }, {
                x: 136.20564516129033,
                y: 136.03494623655916
            }],
            offlaner_early14_w0: [{
                x: 154.29973118279568,
                y: 113.33198924731184
            }, {
                x: 155.3239247311828,
                y: 114.52688172043013
            }, {
                x: 160.1034946236559,
                y: 110.60080645161293
            }, {
                x: 158.73790322580646,
                y: 109.06451612903227
            }, {
                x: 154.29973118279568,
                y: 113.33198924731184
            }],
            midallgame_3_w0: [{
                x: 130.40188172043008,
                y: 115.20967741935483
            }, {
                x: 132.10887096774195,
                y: 117.25806451612905
            }, {
                x: 138.93682795698922,
                y: 112.81989247311829
            }, {
                x: 137.22983870967744,
                y: 110.25940860215056
            }, {
                x: 130.40188172043008,
                y: 115.20967741935483
            }],
            block_2all_w1: [{
                x: 95.92069892473118,
                y: 128.69489247311827
            }, {
                x: 95.57930107526884,
                y: 136.20564516129033
            }, {
                x: 101.21236559139786,
                y: 136.3763440860215
            }, {
                x: 101.04166666666669,
                y: 128.35349462365593
            }, {
                x: 95.92069892473118,
                y: 128.69489247311827
            }],
            roshkill_all2_w0: [{
                x: 114.52688172043013,
                y: 142.00940860215053
            }, {
                x: 116.23387096774192,
                y: 142.86290322580646
            }, {
                x: 113.67338709677419,
                y: 148.66666666666669
            }, {
                x: 111.625,
                y: 147.81317204301075
            }, {
                x: 114.52688172043013,
                y: 142.00940860215053
            }],
            midallgame_1_w0: [{
                x: 105.30913978494623,
                y: 133.6451612903226
            }, {
                x: 106.67473118279571,
                y: 133.30376344086022
            }, {
                x: 106.50403225806451,
                y: 131.08467741935485
            }, {
                x: 108.72311827956992,
                y: 132.10887096774195
            }, {
                x: 113.16129032258064,
                y: 131.93817204301078
            }, {
                x: 115.89247311827957,
                y: 129.71908602150538
            }, {
                x: 105.99193548387099,
                y: 128.01209677419357
            }, {
                x: 104.7970430107527,
                y: 128.01209677419357
            }, {
                x: 105.30913978494623,
                y: 133.6451612903226
            }],
            offlaner_early16_w0: [{
                x: 151.90994623655916,
                y: 119.30645161290323
            }, {
                x: 153.95833333333334,
                y: 117.94086021505377
            }, {
                x: 156.34811827956992,
                y: 118.79435483870968
            }, {
                x: 156.00672043010755,
                y: 116.40456989247312
            }, {
                x: 153.95833333333334,
                y: 116.5752688172043
            }, {
                x: 152.5927419354839,
                y: 117.5994623655914
            }, {
                x: 151.90994623655916,
                y: 119.30645161290323
            }],
            offlaner_early17_w0: [{
                x: 154.81182795698925,
                y: 102.23655913978494
            }, {
                x: 158.56720430107524,
                y: 102.23655913978494
            }, {
                x: 159.07930107526883,
                y: 97.79838709677419
            }, {
                x: 154.1290322580645,
                y: 97.96908602150538
            }, {
                x: 154.81182795698925,
                y: 102.23655913978494
            }],
            antisplitpush_radiant_all3_w0: [{
                x: 187.0739247311828,
                y: 129.5483870967742
            }, {
                x: 189.122311827957,
                y: 129.71908602150538
            }, {
                x: 189.122311827957,
                y: 124.25672043010752
            }, {
                x: 186.90322580645162,
                y: 124.59811827956992
            }, {
                x: 187.0739247311828,
                y: 129.5483870967742
            }],
            pusht1safe_dire_all1_w0: [{
                x: 92.84811827956987,
                y: 118.28225806451613
            }, {
                x: 92.84811827956987,
                y: 120.6720430107527
            }, {
                x: 95.57930107526884,
                y: 120.33064516129032
            }, {
                x: 95.75,
                y: 118.28225806451613
            }, {
                x: 92.84811827956987,
                y: 118.28225806451613
            }],
            block_6all_w5: [{
                x: 149.69086021505376,
                y: 89.43413978494623
            }, {
                x: 149.5201612903226,
                y: 96.26209677419355
            }, {
                x: 156.34811827956992,
                y: 96.26209677419355
            }, {
                x: 156.17741935483872,
                y: 89.09274193548387
            }, {
                x: 149.69086021505376,
                y: 89.43413978494623
            }],
            safecorefarmdire_early1_w0: [{
                x: 86.8736559139785,
                y: 148.15456989247312
            }, {
                x: 74.24193548387099,
                y: 148.4959677419355
            }, {
                x: 74.58333333333334,
                y: 153.10483870967744
            }, {
                x: 86.19086021505377,
                y: 152.08064516129033
            }, {
                x: 86.8736559139785,
                y: 152.08064516129033
            }, {
                x: 86.8736559139785,
                y: 148.15456989247312
            }],
            antisplitpush_radiant_all2_w0: [{
                x: 150.71505376344086,
                y: 69.29166666666667
            }, {
                x: 150.3736559139785,
                y: 71.68145161290323
            }, {
                x: 145.4233870967742,
                y: 71.68145161290323
            }, {
                x: 145.252688172043,
                y: 68.60887096774194
            }, {
                x: 150.71505376344086,
                y: 69.29166666666667
            }],
            block_14all_w0: [{
                x: 125.28091397849462,
                y: 143.375
            }, {
                x: 119.47715053763443,
                y: 143.375
            }, {
                x: 119.81854838709678,
                y: 149.86155913978496
            }, {
                x: 125.28091397849462,
                y: 149.86155913978496
            }, {
                x: 125.28091397849462,
                y: 143.375
            }],
            antisplitpush_radiant_all0_w0: [{
                x: 64.68279569892474,
                y: 133.98655913978496
            }, {
                x: 66.21908602150539,
                y: 134.15725806451613
            }, {
                x: 66.56048387096774,
                y: 128.52419354838707
            }, {
                x: 64.17069892473118,
                y: 128.52419354838707
            }, {
                x: 64.68279569892474,
                y: 133.98655913978496
            }],
            pusht1safe_dire_all2_w0: [{
                x: 81.9233870967742,
                y: 135.5228494623656
            }, {
                x: 75.9489247311828,
                y: 135.35215053763443
            }, {
                x: 76.11962365591398,
                y: 128.01209677419357
            }, {
                x: 82.9475806451613,
                y: 127.5
            }, {
                x: 81.9233870967742,
                y: 135.5228494623656
            }],
            pusht1safe_dire_all3_w0: [{
                x: 85.84946236559139,
                y: 128.86559139784947
            }, {
                x: 85.67876344086021,
                y: 132.10887096774195
            }, {
                x: 94.8965053763441,
                y: 132.27956989247312
            }, {
                x: 94.8965053763441,
                y: 128.35349462365593
            }, {
                x: 85.84946236559139,
                y: 128.86559139784947
            }],
            antisplitpush_radiant_all1_w0: [{
                x: 103.77284946236558,
                y: 186.04973118279568
            }, {
                x: 109.23521505376344,
                y: 186.04973118279568
            }, {
                x: 109.23521505376344,
                y: 184.34274193548384
            }, {
                x: 103.77284946236558,
                y: 184.34274193548384
            }, {
                x: 103.77284946236558,
                y: 186.04973118279568
            }],
            pusht1mid_radiant_all1_w0: [{
                x: 155.3239247311828,
                y: 147.3010752688172
            }, {
                x: 158.73790322580646,
                y: 148.66666666666669
            }, {
                x: 155.3239247311828,
                y: 151.56854838709674
            }, {
                x: 152.5927419354839,
                y: 155.3239247311828
            }, {
                x: 149.69086021505376,
                y: 151.56854838709674
            }, {
                x: 152.5927419354839,
                y: 149.5201612903226
            }, {
                x: 155.3239247311828,
                y: 147.3010752688172
            }],
            pusht1off_dire_all1_w0: [{
                x: 146.95967741935485,
                y: 92.16532258064517
            }, {
                x: 144.05779569892476,
                y: 88.7513440860215
            }, {
                x: 138.93682795698922,
                y: 86.7029569892473
            }, {
                x: 136.5470430107527,
                y: 87.21505376344086
            }, {
                x: 137.05913978494624,
                y: 101.7244623655914
            }, {
                x: 144.74059139784947,
                y: 100.87096774193549
            }, {
                x: 147.98387096774198,
                y: 97.11559139784949
            }, {
                x: 146.95967741935485,
                y: 92.16532258064517
            }],
            antisplitpush_radiant_all4_w0: [{
                x: 118.79435483870968,
                y: 93.70161290322581
            }, {
                x: 120.50134408602152,
                y: 93.70161290322581
            }, {
                x: 121.01344086021506,
                y: 91.48252688172043
            }, {
                x: 119.30645161290323,
                y: 91.14112903225808
            }, {
                x: 118.79435483870968,
                y: 93.70161290322581
            }],
            pusht1mid_dire_all1_w0: [{
                x: 122.89112903225808,
                y: 115.72177419354837
            }, {
                x: 124.76881720430107,
                y: 115.03897849462366
            }, {
                x: 124.42741935483872,
                y: 110.08870967741936
            }, {
                x: 117.77016129032259,
                y: 102.7486559139785
            }, {
                x: 114.52688172043013,
                y: 106.33333333333334
            }, {
                x: 115.38037634408606,
                y: 108.38172043010752
            }, {
                x: 119.64784946236558,
                y: 111.11290322580645
            }, {
                x: 122.89112903225808,
                y: 115.72177419354837
            }],
            block_4all_w2: [{
                x: 111.28360215053765,
                y: 96.60349462365593
            }, {
                x: 116.91666666666669,
                y: 96.77419354838709
            }, {
                x: 116.91666666666669,
                y: 91.65322580645163
            }, {
                x: 111.11290322580645,
                y: 91.14112903225808
            }, {
                x: 111.28360215053765,
                y: 96.60349462365593
            }],
            pusht1mid_dire_all3_w0: [{
                x: 99.33467741935483,
                y: 113.33198924731184
            }, {
                x: 102.7486559139785,
                y: 116.23387096774192
            }, {
                x: 101.55376344086021,
                y: 117.08736559139786
            }, {
                x: 98.13978494623656,
                y: 114.35618279569893
            }, {
                x: 99.33467741935483,
                y: 113.33198924731184
            }],
            block_8all_w0: [{
                x: 122.54973118279571,
                y: 98.13978494623656
            }, {
                x: 122.89112903225808,
                y: 104.45564516129032
            }, {
                x: 129.20698924731184,
                y: 103.77284946236558
            }, {
                x: 128.86559139784947,
                y: 97.45698924731184
            }, {
                x: 122.54973118279571,
                y: 98.13978494623656
            }],
            block_16all_w0: [{
                x: 158.90860215053766,
                y: 136.5470430107527
            }, {
                x: 164.02956989247318,
                y: 136.3763440860215
            }, {
                x: 164.02956989247318,
                y: 131.93817204301078
            }, {
                x: 158.90860215053766,
                y: 132.10887096774195
            }, {
                x: 158.90860215053766,
                y: 136.5470430107527
            }],
            pusht1mid_dire_all2_w0: [{
                x: 108.21102150537635,
                y: 108.38172043010752
            }, {
                x: 104.11424731182795,
                y: 110.7715053763441
            }, {
                x: 101.55376344086021,
                y: 111.45430107526882
            }, {
                x: 106.84543010752688,
                y: 114.86827956989248
            }, {
                x: 110.9422043010753,
                y: 110.9422043010753
            }, {
                x: 108.21102150537635,
                y: 108.38172043010752
            }],
            pusht2off_radiant_all4_w0: [{
                x: 135.69354838709677,
                y: 175.80779569892476
            }, {
                x: 136.20564516129033,
                y: 173.247311827957
            }, {
                x: 135.18145161290323,
                y: 170.51612903225808
            }, {
                x: 143.03360215053766,
                y: 170.3454301075269
            }, {
                x: 143.03360215053766,
                y: 175.80779569892476
            }, {
                x: 135.69354838709677,
                y: 175.80779569892476
            }],
            block_1all_w0: [{
                x: 102.40725806451613,
                y: 118.96505376344086
            }, {
                x: 102.23655913978494,
                y: 126.8172043010753
            }, {
                x: 110.08870967741936,
                y: 126.30510752688171
            }, {
                x: 109.91801075268818,
                y: 119.30645161290323
            }, {
                x: 102.40725806451613,
                y: 118.96505376344086
            }],
            block_13all_w0: [{
                x: 139.79032258064518,
                y: 150.3736559139785
            }, {
                x: 139.61962365591398,
                y: 158.05510752688173
            }, {
                x: 131.93817204301078,
                y: 158.22580645161293
            }, {
                x: 131.5967741935484,
                y: 150.54435483870967
            }, {
                x: 139.79032258064518,
                y: 150.3736559139785
            }],
            pusht2off_radiant_all2_w0: [{
                x: 134.4986559139785,
                y: 166.41935483870967
            }, {
                x: 136.88844086021504,
                y: 166.2486559139785
            }, {
                x: 137.22983870967744,
                y: 164.02956989247312
            }, {
                x: 134.4986559139785,
                y: 164.20026881720432
            }, {
                x: 134.4986559139785,
                y: 166.41935483870967
            }],
            safecorefarmradiant_early0_w0: [{
                x: 187.0739247311828,
                y: 103.94354838709677
            }, {
                x: 181.61155913978496,
                y: 103.77284946236558
            }, {
                x: 179.22177419354838,
                y: 98.65188172043013
            }, {
                x: 168.1263440860215,
                y: 104.45564516129032
            }, {
                x: 167.95564516129033,
                y: 107.6989247311828
            }, {
                x: 176.1491935483871,
                y: 107.35752688172043
            }, {
                x: 186.04973118279568,
                y: 107.86962365591398
            }, {
                x: 186.73252688172042,
                y: 107.86962365591398
            }, {
                x: 187.0739247311828,
                y: 103.94354838709677
            }],
            pusht2off_radiant_all3_w0: [{
                x: 128.35349462365593,
                y: 167.95564516129033
            }, {
                x: 133.47446236559142,
                y: 168.2970430107527
            }, {
                x: 133.6451612903226,
                y: 166.93145161290326
            }, {
                x: 128.01209677419357,
                y: 166.76075268817203
            }, {
                x: 128.35349462365593,
                y: 167.95564516129033
            }],
            pusht2off_radiant_all3_w1: [{
                x: 138.76612903225808,
                y: 162.66397849462368
            }, {
                x: 140.47311827956992,
                y: 162.83467741935485
            }, {
                x: 140.13172043010752,
                y: 158.3965053763441
            }, {
                x: 138.42473118279568,
                y: 158.22580645161293
            }, {
                x: 138.76612903225808,
                y: 162.66397849462368
            }],
            highground_wards_dire_w0: [{
                x: 151.90994623655916,
                y: 164.88306451612902
            }, {
                x: 155.15322580645162,
                y: 164.02956989247312
            }, {
                x: 154.1290322580645,
                y: 160.95698924731184
            }, {
                x: 151.90994623655916,
                y: 164.88306451612902
            }],
            highground_wards_dire_w1: [{
                x: 152.08064516129033,
                y: 178.0268817204301
            }, {
                x: 157.03091397849462,
                y: 177.51478494623657
            }, {
                x: 156.68951612903226,
                y: 179.0510752688172
            }, {
                x: 151.90994623655916,
                y: 179.73387096774198
            }, {
                x: 152.08064516129033,
                y: 178.0268817204301
            }],
            highground_wards_dire_w2: [{
                x: 162.66397849462368,
                y: 150.88575268817203
            }, {
                x: 165.73655913978496,
                y: 156.00672043010755
            }, {
                x: 167.10215053763443,
                y: 149.86155913978496
            }, {
                x: 162.66397849462368,
                y: 150.88575268817203
            }],
            highground_wards_dire_w3: [{
                x: 181.61155913978496,
                y: 147.64247311827958
            }, {
                x: 181.44086021505376,
                y: 149.00806451612902
            }, {
                x: 183.489247311828,
                y: 148.83736559139788
            }, {
                x: 183.489247311828,
                y: 147.64247311827958
            }, {
                x: 181.61155913978496,
                y: 147.64247311827958
            }],
            block_3all_w4: [{
                x: 126.13440860215056,
                y: 110.25940860215056
            }, {
                x: 125.96370967741936,
                y: 115.5510752688172
            }, {
                x: 130.91397849462368,
                y: 115.38037634408606
            }, {
                x: 131.25537634408602,
                y: 110.43010752688171
            }, {
                x: 126.13440860215056,
                y: 110.25940860215056
            }],
            pusht2off_radiant_all1_w0: [{
                x: 117.94086021505377,
                y: 165.90725806451616
            }, {
                x: 118.28225806451613,
                y: 159.42069892473117
            }, {
                x: 124.08602150537635,
                y: 159.76209677419354
            }, {
                x: 123.91532258064517,
                y: 166.0779569892473
            }, {
                x: 117.94086021505377,
                y: 165.90725806451616
            }],
            block_11all_w0: [{
                x: 111.11290322580645,
                y: 159.59139784946237
            }, {
                x: 111.28360215053765,
                y: 164.3709677419355
            }, {
                x: 116.91666666666669,
                y: 164.02956989247312
            }, {
                x: 116.74596774193549,
                y: 159.59139784946237
            }, {
                x: 111.11290322580645,
                y: 159.59139784946237
            }],
            offlaner_early1_w0: [{
                x: 84.14247311827958,
                y: 154.98252688172042
            }, {
                x: 83.63037634408602,
                y: 164.71236559139788
            }, {
                x: 87.89784946236558,
                y: 164.88306451612902
            }, {
                x: 87.89784946236558,
                y: 154.81182795698925
            }, {
                x: 84.14247311827958,
                y: 154.98252688172042
            }],
            pusht2safe_radiant_all1_w0: [{
                x: 170.0040322580645,
                y: 138.76612903225805
            }, {
                x: 171.88172043010755,
                y: 136.88844086021504
            }, {
                x: 178.53897849462368,
                y: 137.40053763440858
            }, {
                x: 178.88037634408605,
                y: 143.375
            }, {
                x: 171.02822580645162,
                y: 143.20430107526883
            }, {
                x: 170.0040322580645,
                y: 138.76612903225805
            }],
            offlaner_early2_w0: [{
                x: 88.58064516129032,
                y: 165.73655913978496
            }, {
                x: 100.87096774193549,
                y: 168.2970430107527
            }, {
                x: 101.38306451612905,
                y: 160.95698924731184
            }, {
                x: 89.43413978494623,
                y: 161.127688172043
            }, {
                x: 88.58064516129032,
                y: 165.73655913978496
            }],
            block_15all_w0: [{
                x: 143.54569892473117,
                y: 126.47580645161293
            }, {
                x: 143.71639784946237,
                y: 131.4260752688172
            }, {
                x: 151.3978494623656,
                y: 130.91397849462368
            }, {
                x: 151.05645161290326,
                y: 126.30510752688171
            }, {
                x: 143.54569892473117,
                y: 126.47580645161293
            }],
            block_7all_w6: [{
                x: 163.85887096774198,
                y: 89.43413978494623
            }, {
                x: 164.71236559139788,
                y: 96.26209677419355
            }, {
                x: 158.90860215053766,
                y: 96.26209677419355
            }, {
                x: 158.56720430107524,
                y: 89.09274193548387
            }, {
                x: 163.85887096774198,
                y: 89.43413978494623
            }],
            offlaner_early3_w0: [{
                x: 98.82258064516131,
                y: 177.3440860215054
            }, {
                x: 105.13844086021506,
                y: 177.17338709677418
            }, {
                x: 105.13844086021506,
                y: 172.56451612903226
            }, {
                x: 99.33467741935483,
                y: 172.56451612903226
            }, {
                x: 98.82258064516131,
                y: 177.3440860215054
            }],
            offlaner_early7_w0: [{
                x: 89.9462365591398,
                y: 134.6693548387097
            }, {
                x: 93.872311827957,
                y: 134.6693548387097
            }, {
                x: 93.872311827957,
                y: 133.30376344086022
            }, {
                x: 89.77553763440861,
                y: 133.30376344086022
            }, {
                x: 89.9462365591398,
                y: 134.6693548387097
            }],
            block_17all_w0: [{
                x: 164.54166666666669,
                y: 120.5013440860215
            }, {
                x: 154.98252688172042,
                y: 120.84274193548387
            }, {
                x: 155.15322580645162,
                y: 126.13440860215056
            }, {
                x: 164.54166666666669,
                y: 125.96370967741936
            }, {
                x: 164.54166666666669,
                y: 120.5013440860215
            }],
            block_5all_w3: [{
                x: 128.35349462365593,
                y: 88.58064516129032
            }, {
                x: 128.01209677419357,
                y: 95.23790322580645
            }, {
                x: 134.3279569892473,
                y: 95.23790322580645
            }, {
                x: 135.01075268817206,
                y: 89.26344086021506
            }, {
                x: 128.35349462365593,
                y: 88.58064516129032
            }],
            block_9all_w0: [{
                x: 91.48252688172043,
                y: 153.78763440860217
            }, {
                x: 91.31182795698923,
                y: 158.73790322580646
            }, {
                x: 96.60349462365593,
                y: 158.73790322580646
            }, {
                x: 96.77419354838709,
                y: 154.4704301075269
            }, {
                x: 91.48252688172043,
                y: 153.78763440860217
            }],
            highground_wards_radiant_w0: [{
                x: 83.28897849462365,
                y: 103.60215053763443
            }, {
                x: 83.28897849462365,
                y: 100.18817204301077
            }, {
                x: 86.36155913978494,
                y: 101.21236559139786
            }, {
                x: 83.28897849462365,
                y: 103.60215053763443
            }],
            highground_wards_radiant_w1: [{
                x: 95.92069892473118,
                y: 94.38440860215056
            }, {
                x: 98.48118279569893,
                y: 88.7513440860215
            }, {
                x: 93.53091397849462,
                y: 89.77553763440861
            }, {
                x: 95.92069892473118,
                y: 94.38440860215056
            }],
            highground_wards_radiant_w2: [{
                x: 98.99327956989248,
                y: 73.72983870967742
            }, {
                x: 98.99327956989248,
                y: 74.58333333333334
            }, {
                x: 100.52956989247312,
                y: 74.75403225806451
            }, {
                x: 100.7002688172043,
                y: 73.21774193548387
            }, {
                x: 98.99327956989248,
                y: 73.72983870967742
            }],
            offlaner_early6_w0: [{
                x: 95.57930107526884,
                y: 143.03360215053766
            }, {
                x: 96.60349462365593,
                y: 144.2284946236559
            }, {
                x: 99.16397849462366,
                y: 141.6680107526882
            }, {
                x: 98.13978494623656,
                y: 140.6438172043011
            }, {
                x: 95.57930107526884,
                y: 143.03360215053766
            }],
            offlaner_early4_w0: [{
                x: 85.33736559139786,
                y: 169.32123655913978
            }, {
                x: 84.65456989247312,
                y: 172.73521505376343
            }, {
                x: 84.65456989247312,
                y: 176.31989247311833
            }, {
                x: 80.72849462365592,
                y: 172.56451612903226
            }, {
                x: 81.41129032258064,
                y: 169.15053763440858
            }, {
                x: 82.9475806451613,
                y: 166.59005376344086
            }, {
                x: 85.33736559139786,
                y: 169.32123655913978
            }],
            offlaner_early5_w0: [{
                x: 86.7029569892473,
                y: 144.74059139784947
            }, {
                x: 88.7513440860215,
                y: 144.74059139784947
            }, {
                x: 88.9220430107527,
                y: 142.86290322580646
            }, {
                x: 86.53225806451613,
                y: 143.03360215053766
            }, {
                x: 86.7029569892473,
                y: 144.74059139784947
            }]
        }
    },
    "5DXk": function(n, l, e) {
        n.exports = e.p + "icon-star.fe164a07af0bc0638192.svg"
    },
    "9Bjs": function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return a
        });
        var t = e("26FU"),
            a = function() {
                function n() {
                    this.observerSubject$ = new t.a(void 0), this.zoneSubject$ = new t.a(void 0)
                }
                return Object.defineProperty(n.prototype, "observer$", {
                    get: function() {
                        return this.observerSubject$.asObservable()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "zone$", {
                    get: function() {
                        return this.zoneSubject$.asObservable()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "selectedObserverValue", {
                    get: function() {
                        return this.observerSubject$.getValue()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "selectedZoneValue", {
                    get: function() {
                        return this.zoneSubject$.getValue()
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.selectObserver = function(n) {
                    this.observerSubject$.next(n), this.zoneSubject$.next(void 0)
                }, n.prototype.selectZone = function(n) {
                    this.zoneSubject$.next(n), this.observerSubject$.next(void 0)
                }, n
            }()
    },
    "9jMT": function(n, l, e) {
        "use strict";
        var t = e("Ip0R"),
            a = e("x1Tk"),
            i = e("VnD/"),
            u = e("67Y/"),
            r = e("AytR"),
            o = (e("Z/Q5"), e("S3gD"), e("CMaV"), e("YI7S"), e("SzdH")),
            s = e("LsNx"),
            c = e("6OcZ"),
            d = (e("9NS1"), e("UTPA"));
        e.d(l, "a", function() {
            return p
        });
        var p = function() {
            function n(n, l, e, t, a, i, u, r, o) {
                this.translate = n, this.device = l, this.route = e, this.meta = t, this.matchUtmService = a, this.user = i, this.match = u, this.document = r, this.platformId = o, this.displaySidebarAd = !1
            }
            return Object.defineProperty(n.prototype, "hasAds", {
                get: function() {
                    return this.user.hasAds()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "nextSwitchDuration", {
                get: function() {
                    return this.matchData.modifiedAt && Object(s.a)(this.matchData.modifiedAt, this.translate)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "isAnalysisReady", {
                get: function() {
                    return this.matchData.manualAnalysis.status === d.a.COMPLETED
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.onScroll = function() {
                Object(t.isPlatformServer)(this.platformId) || (this.displaySidebarAd = this.document.documentElement.scrollTop > 100)
            }, n.prototype.ngOnInit = function() {
                var n = this;
                this.isAuthenticated$ = this.user.isAuthenticated$, this.matchDataSubscription = this.match.matchData$.subscribe(function(l) {
                    if (n.matchData = l, l) {
                        n.sectionsData = n.match.getBlocks(), n.hasHighlights = n.match.hasHighlights();
                        var e = n.user.meta;
                        e && e.role === o.a.autologin && n.user.toggleAnonymousAuthorization(e.matchId == l.match.match_id && e.playerSlot === l.match.slot);
                        var a = n.route.snapshot.params,
                            i = a.matchId,
                            u = a.playerSlot,
                            s = "/" === r.a.sharingURL[0] ? r.a.domain + r.a.sharingURL : r.a.sharingURL;
                        n.matchUtmService.setUtm(), n.meta.setTitle("Check out my Dota2 match result");
                        var d = n.route.snapshot.url.map(function(n) {
                            return n.path
                        }).join("/");
                        if (n.meta.setTag("og:url", r.a.domain + "/match/" + d), n.meta.setTag("og:image", s + "/fb/" + i + "/" + u), n.meta.setTag("twitter:title", "Check out my Dota2 match result"), n.meta.setTag("twitter:text:title", "Check out my Dota2 match result"), n.meta.setTag("twitter:image", s + "/tw/" + i + "/" + u), n.meta.setTag("twitter:via", "gosuai"), Object(t.isPlatformBrowser)(n.platformId) && n.device.getCurrentDevice() === c.a.Mobile) {
                            var p = document.querySelector('meta[name="viewport"]');
                            p && (n.oldViewport = p.content, p.content = "width=1024")
                        }
                    }
                }), this.canGetHighlight = this.match.matchData$.pipe(Object(a.a)(this.user.profileData$), Object(i.a)(function(n) {
                    return !!n[1]
                }), Object(u.a)(function(l) {
                    var e = l[0].match,
                        t = e.start_time;
                    return e.players[e.slot].account_id === l[1].accountId && Date.now() / 1e3 - t < 259200 && n.user.isAuthenticated
                })), this.canGetAnalysis = this.match.matchData$.pipe(Object(a.a)(this.user.profileData$), Object(i.a)(function(n) {
                    return !!n[1]
                }), Object(u.a)(function(l) {
                    var e = l[0].match.start_time;
                    return (Date.now() / 1e3 - e < 259200 || n.isAnalysisReady) && n.user.isAuthenticated
                }))
            }, n.prototype.ngAfterViewInit = function() {
                try {
                    (window.adsbygoogle = window.adsbygoogle || []).push({}), (window.adsbygoogle = window.adsbygoogle || []).push({}), (window.adsbygoogle = window.adsbygoogle || []).push({}), (window.adsbygoogle = window.adsbygoogle || []).push({}), (window.adsbygoogle = window.adsbygoogle || []).push({}), (window.adsbygoogle = window.adsbygoogle || []).push({}), (window.adsbygoogle = window.adsbygoogle || []).push({}), (window.adsbygoogle = window.adsbygoogle || []).push({}), (window.adsbygoogle = window.adsbygoogle || []).push({})
                } catch (n) {}
            }, n.prototype.ngOnDestroy = function() {
                if (this.matchDataSubscription && this.matchDataSubscription.unsubscribe(), Object(t.isPlatformBrowser)(this.platformId) && this.device.getCurrentDevice() === c.a.Mobile) {
                    var n = document.querySelector('meta[name="viewport"]');
                    n && this.oldViewport && (n.content = this.oldViewport)
                }
            }, n
        }()
    },
    BpIG: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return a
        });
        var t = e("IB/p"),
            a = function() {
                function n() {
                    this.colors = t.a
                }
                return n.prototype.transform = function(n) {
                    if (null != n)
                        return "string" == typeof n ? n : this.colors[Math.floor((n ? n >= 100 ? 99 : n < 0 ? 0 : n : 0) / 10)]
                }, n
            }()
    },
    DI59: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return u
        }), e.d(l, "b", function() {
            return r
        });
        var t = e("gIcY"),
            a = (e("/j7V"), e("67Y/")),
            i = e("15JJ"),
            u = (e("CMaV"), e("3TGi"), .04),
            r = function() {
                function n(n, l, e, t, a, i, u, r) {
                    var o = this;
                    this.meta = n, this.translate = l, this.payment = e, this.router = t, this.user = a, this.route = i, this.localize = u, this.fb = r, this.useDefaultPlan = !0, this.route.params.subscribe(function(n) {
                        o.steamOrAccountId = n.steamOrAccountId || o.user.profileData.accountId
                    })
                }
                return Object.defineProperty(n.prototype, "currentReferralLink", {
                    get: function() {
                        return "gosu.ai/ref/" + this.steamOrAccountId
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "absoluteReferralLink", {
                    get: function() {
                        return "https://gosu.ai/ref/" + this.steamOrAccountId
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "planList$", {
                    get: function() {
                        var n = this;
                        return this.payment.planList$.pipe(Object(a.a)(function(l) {
                            return l.filter(function(l) {
                                return 1 === (n.user.profileData && n.user.profileData.money.planId) || 1 !== l.id
                            })
                        }), Object(a.a)(function(n) {
                            return n.sort(function(n, l) {
                                return n.sortOrder - l.sortOrder
                            })
                        }))
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "currentPlanId", {
                    get: function() {
                        return this.user.profileData.money ? this.user.profileData.money.planId : void 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.ngOnInit = function() {
                    var n = this;
                    this.meta.setTitle(this.translate.instant("PAYMENT.META_TITLE")), this.currencyForm = this.fb.group({
                        gold: [50, t.o.required],
                        price: [2, t.o.required]
                    }), this.subscription = this.user.profileData$.pipe(Object(i.a)(function() {
                        return n.payment.planList$
                    })).subscribe(function(l) {
                        var e = l.find(function(n) {
                            return 0 === n.order
                        });
                        e && (n.useDefaultPlan = !!n.user.profileData.money && e.id === n.user.profileData.money.planId)
                    })
                }, n.prototype.ngOnDestroy = function() {
                    this.subscription && this.subscription.unsubscribe()
                }, n.prototype.onRedirectToAllMatches = function() {
                    var n = this.localize.translateRoute(["/summary/" + this.steamOrAccountId + "/all/last"]);
                    this.router.navigate(n, {
                        fragment: "allMatches"
                    }).then()
                }, n
            }()
    },
    "E/eG": function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return i
        });
        var t = e("67Y/"),
            a = (e("CMaV"), e("WBVv")),
            i = function() {
                function n(n) {
                    this.user = n, this.gapI18nText = "COMMON.PREMIUM_CONTENT_DEFAULT_GAP"
                }
                return n.prototype.ngOnInit = function() {
                    this.displayGap$ = this.user.hasFeature$(a.a.MatchPremiumContent).pipe(Object(t.a)(function(n) {
                        return !n
                    }))
                }, n
            }()
    },
    Gqqv: function(n, l, e) {
        "use strict";
        var t = e("CcnG"),
            a = e("A7o+"),
            i = e("Ip0R"),
            u = e("PSDj"),
            r = e("HXJx"),
            o = e("bwpd"),
            s = e("XZsM");
        e("lTbF"), e("ZYCi"), e.d(l, "a", function() {
            return c
        }), e.d(l, "b", function() {
            return M
        });
        var c = t["\u0275crt"]({
            encapsulation: 0,
            styles: [[".stats__highlighter[_ngcontent-%COMP%]{top:0;height:100%;position:absolute;background-color:#0062ff;transition:.2s ease;transition-property:width,left,top,opacity;opacity:0}.stats__highlighter_x[_ngcontent-%COMP%]{margin-top:6px;width:100%;height:30px}.stats__is-current[_ngcontent-%COMP%]   .stats__is-current-block[_ngcontent-%COMP%]{position:absolute;background-color:#0062ff;height:30px;width:100%;transition:background-color .2s ease}.stats__is-current[_ngcontent-%COMP%]   .player__info[_ngcontent-%COMP%]{color:#fff}.stats__shield[_ngcontent-%COMP%]{flex-shrink:0;margin-right:13px}.stats__team[_ngcontent-%COMP%]{line-height:1;font-size:13px;font-weight:700;padding-left:43px;margin-bottom:10px}.stats__team_radiant[_ngcontent-%COMP%]{color:#53e29f;margin-top:-22px}.stats__team_dire[_ngcontent-%COMP%]{color:#db4000}.stats__team-info[_ngcontent-%COMP%]{margin-right:4px}.stats__team-info_wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.stats__team[_ngcontent-%COMP%]   .icon-win[_ngcontent-%COMP%]{display:inline-block;width:13px;height:13px;background:url(/dota/analysis/./static/assets/icons/win.png) center/cover no-repeat}.stats__total[_ngcontent-%COMP%]{font-size:13px;font-weight:700}.stats__content[_ngcontent-%COMP%]{overflow:hidden;position:relative;box-sizing:border-box;padding:0 0 25px}.stats__table[_ngcontent-%COMP%] + .stats__table[_ngcontent-%COMP%]{margin-top:10px}.stats__wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;cursor:pointer;transition:background-color .2s ease}.stats__wrapper[_ngcontent-%COMP%]:last-child{margin:0;cursor:default}.stats__row[_ngcontent-%COMP%]{display:flex;padding:0 32px;position:relative;align-items:center}.stats__row_head[_ngcontent-%COMP%]{background-color:transparent!important;margin:0;cursor:default}.stats__row_head[_ngcontent-%COMP%]   .stats__col[_ngcontent-%COMP%]{opacity:.34}.stats__col[_ngcontent-%COMP%]{height:42px;display:flex;color:#fff;flex-shrink:0;font-size:13px;font-weight:300;padding-left:7px;align-items:center;box-sizing:border-box;justify-content:flex-start}.stats__col_highlighted[_ngcontent-%COMP%]{background-color:#0062ff}.stats__col_player[_ngcontent-%COMP%]{width:183px;padding-left:0}.stats__col_kda[_ngcontent-%COMP%]{width:76px;justify-content:space-between;box-sizing:border-box;padding-right:18px}.stats__col_gpm[_ngcontent-%COMP%], .stats__col_net[_ngcontent-%COMP%], .stats__col_xpm[_ngcontent-%COMP%]{width:40px}.stats__col_dn[_ngcontent-%COMP%], .stats__col_lh[_ngcontent-%COMP%]{width:31px}.stats__col_hd[_ngcontent-%COMP%]{width:45px}.stats__col_td[_ngcontent-%COMP%]{width:40px}.stats__col_heal[_ngcontent-%COMP%]{width:50px}.stats__col_items[_ngcontent-%COMP%]{padding-left:0;flex-grow:1}.stats__shield[_ngcontent-%COMP%]{width:30px;height:30px}.stats__for-partners[_ngcontent-%COMP%]   .stats__col_total[_ngcontent-%COMP%]{padding-left:32px}.stats__for-partners[_ngcontent-%COMP%]   .stats__shield[_ngcontent-%COMP%]{display:none}.stats__for-partners[_ngcontent-%COMP%]   .stats__team_radiant[_ngcontent-%COMP%]{margin-top:-42px}.stats__for-partners[_ngcontent-%COMP%]   .stats__team[_ngcontent-%COMP%]{display:flex;padding-left:32px}.stats__for-partners[_ngcontent-%COMP%]   .stats__team-info_wrapper[_ngcontent-%COMP%]{padding:6px 10px;background:#000;border-radius:30px}.stats__for-partners[_ngcontent-%COMP%]   .stats__team-info[_ngcontent-%COMP%]{max-width:137px;text-overflow:ellipsis;flex-shrink:0;white-space:nowrap;overflow:hidden;line-height:18px}.stats__for-partners[_ngcontent-%COMP%]   .stats__team_name[_ngcontent-%COMP%]{vertical-align:middle}.stats__for-partners[_ngcontent-%COMP%]   .stats__team_logo[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;height:18px;margin-right:4px}.stats__for-partners[_ngcontent-%COMP%]   .player__image_current[_ngcontent-%COMP%]{box-shadow:none}.stats__for-partners[_ngcontent-%COMP%]   .stats__col_player[_ngcontent-%COMP%]{width:175px}.kda[_ngcontent-%COMP%]{width:100%}.kda__numbers[_ngcontent-%COMP%]{width:100%;display:flex;margin-bottom:3px;justify-content:space-between}.kda__graph[_ngcontent-%COMP%]{margin-right:-3px}.player[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center}.player__image[_ngcontent-%COMP%]{width:28px;height:28px;margin-right:5px;border-radius:50%;flex-shrink:0}.player__image_current[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 2px #0062ff}.player__data[_ngcontent-%COMP%]{flex-grow:0;width:150px}.player__name[_ngcontent-%COMP%]{font-size:13px;font-weight:700;line-height:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.player__info[_ngcontent-%COMP%]{color:#646464;font-size:11px;line-height:13px}.stats__row[_ngcontent-%COMP%]:hover   .player__info[_ngcontent-%COMP%]{color:#fff}.item__icon[_ngcontent-%COMP%]{height:30px;width:41.25px}.item__gap[_ngcontent-%COMP%]{height:30px;width:41.25px;display:flex;align-items:center;justify-content:center}.item[_ngcontent-%COMP%]:nth-child(7)   .item__icon[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]:nth-child(8)   .item__icon[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]:nth-child(9)   .item__icon[_ngcontent-%COMP%]{opacity:.3}.mark[_ngcontent-%COMP%]{color:#53e29f}"]],
            data: {}
        });
        function d(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 0, "img", [["class", "stats__team_logo"]], [[1, "src", 4]], null, null, null, null))], null, function(n, l) {
                var e = l.component;
                n(l, 0, 0, null == e.teams[l.parent.context.index] ? null : e.teams[l.parent.context.index].avatarUrl)
            })
        }
        function p(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 0, "i", [["class", "icon icon-win"]], null, null, null, null, null))], null, null)
        }
        function _(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 0, "div", [["class", "stats__is-current-block"]], null, null, null, null, null))], null, null)
        }
        function f(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 0, "div", [], [[8, "className", 0]], null, null, null, null))], null, function(n, l) {
                n(l, 0, 0, t["\u0275inlineInterpolate"](1, "stats__shield icon-mmr_", l.parent.context.$implicit.player.shield, ""))
            })
        }
        function g(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 0, "div", [["class", "stats__shield stats__shield_fake"]], null, null, null, null, null))], null, null)
        }
        function m(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](1, null, [" ", ", "])), t["\u0275ppd"](2, 2), t["\u0275pid"](131072, a.TranslatePipe, [a.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                var e = t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 3).transform(t["\u0275unv"](l, 1, 0, n(l, 2, 0, t["\u0275nov"](l.parent.parent.parent.parent, 0), l.parent.parent.context.$implicit.player.lane + "_LANE", "SUMMARY.MATCH_LANE_"))));
                n(l, 1, 0, e)
            })
        }
        function h(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 13, "div", [["class", "player"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 0, "div", [], [[8, "className", 0], [2, "player__image_current", null]], null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 11, "div", [["class", "player__data"]], null, null, null, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 1, "div", [["class", "player__name"]], null, null, null, null, null)), (n()(), t["\u0275ted"](4, null, ["", ""])), (n()(), t["\u0275eld"](5, 0, null, null, 8, "div", [["class", "player__info"]], null, null, null, null, null)), (n()(), t["\u0275ted"](6, null, [" ", ", "])), t["\u0275ppd"](7, 2), t["\u0275pid"](131072, a.TranslatePipe, [a.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275and"](16777216, null, null, 1, null, m)), t["\u0275did"](10, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](11, 0, null, null, 2, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](12, null, ["", "", ""])), t["\u0275pid"](131072, a.TranslatePipe, [a.TranslateService, t.ChangeDetectorRef])], function(n, l) {
                n(l, 10, 0, l.parent.context.$implicit.player.lane)
            }, function(n, l) {
                n(l, 1, 0, t["\u0275inlineInterpolate"](1, "player__image icon-", l.parent.context.$implicit.player.heroName, ""), l.parent.context.$implicit.player.isCurrent), n(l, 4, 0, l.parent.context.$implicit.player.username);
                var e = t["\u0275unv"](l, 6, 0, t["\u0275nov"](l, 8).transform(t["\u0275unv"](l, 6, 0, n(l, 7, 0, t["\u0275nov"](l.parent.parent.parent, 0), l.parent.context.$implicit.player.role, "SUMMARY.MATCH_ROLE_"))));
                n(l, 6, 0, e), n(l, 12, 0, l.parent.context.$implicit.player.lvl.value, t["\u0275unv"](l, 12, 1, t["\u0275nov"](l, 13).transform("MATCH.LVL_STATS")))
            })
        }
        function v(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "div", [["class", "stats__total"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, a.TranslatePipe, [a.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                n(l, 0, 0, t["\u0275unv"](l, 0, 0, t["\u0275nov"](l, 1).transform("MATCH.TOTAL")))
            })
        }
        function x(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "span", [], [[2, "mark", null]], null, null, null, null)), (n()(), t["\u0275ted"](1, null, ["", ""]))], null, function(n, l) {
                n(l, 0, 0, l.context.$implicit.isMarked), n(l, 1, 0, l.context.$implicit.value)
            })
        }
        function y(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 0, "div", [], [[8, "className", 0]], null, null, null, null))], null, function(n, l) {
                n(l, 0, 0, t["\u0275inlineInterpolate"](1, "item__icon icon-", l.parent.context.$implicit.name, ""))
            })
        }
        function b(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 0, "div", [["class", "item__gap"]], null, null, null, null, null))], null, null)
        }
        function O(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "div", [["class", "item"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, y)), t["\u0275did"](2, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, b)), t["\u0275did"](4, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                n(l, 2, 0, null !== l.context.$implicit), n(l, 4, 0, null === l.context.$implicit)
            }, null)
        }
        function C(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "div", [["class", "stats__col stats__col_items"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, O)), t["\u0275did"](2, 278528, null, 0, i.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"],
                ngForTrackBy: [1, "ngForTrackBy"]
            }, null)], function(n, l) {
                n(l, 2, 0, l.parent.context.$implicit.items, l.component.tracker)
            }, null)
        }
        function T(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 54, "div", [["class", "stats__wrapper"]], [[2, "stats__is-current", null]], [[null, "click"], [null, "mouseenter"], [null, "mouseleave"]], function(n, l, e) {
                var t = !0,
                    a = n.component;
                return "click" === l && (t = !1 !== a.goToMatch(n.context.$implicit.player) && t), "mouseenter" === l && (t = !1 !== a.highlightRow(n.context.$implicit.player ? e : null) && t), "mouseleave" === l && (t = !1 !== a.cleanupRowHighlighter(e) && t), t
            }, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, _)), t["\u0275did"](2, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](3, 0, null, null, 51, "div", [["class", "stats__row"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, f)), t["\u0275did"](5, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, g)), t["\u0275did"](7, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](8, 0, null, null, 4, "div", [["class", "stats__col stats__col_player"]], [[2, "stats__col_total", null]], null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, h)), t["\u0275did"](10, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, v)), t["\u0275did"](12, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](13, 0, null, null, 7, "div", [["class", "stats__col stats__col_kda"]], null, [[null, "mouseleave"], [null, "mouseenter"]], function(n, l, e) {
                var t = !0,
                    a = n.component;
                return "mouseleave" === l && (t = !1 !== a.cleanupHighlighter(e) && t), "mouseenter" === l && (t = !1 !== a.highlightColumn(e) && t), t
            }, null, null)), (n()(), t["\u0275eld"](14, 0, null, null, 6, "div", [["class", "kda"]], null, null, null, null, null)), (n()(), t["\u0275eld"](15, 0, null, null, 2, "div", [["class", "kda__numbers"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, x)), t["\u0275did"](17, 278528, null, 0, i.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"],
                ngForTrackBy: [1, "ngForTrackBy"]
            }, null), (n()(), t["\u0275eld"](18, 0, null, null, 2, "div", [["class", "kda__graph"]], null, null, null, null, null)), (n()(), t["\u0275eld"](19, 0, null, null, 1, "gosu-kda", [], null, null, null, u.b, u.a)), t["\u0275did"](20, 49152, null, 0, r.a, [], {
                kills: [0, "kills"],
                deaths: [1, "deaths"],
                assists: [2, "assists"],
                height: [3, "height"],
                assistsColor: [4, "assistsColor"]
            }, null), (n()(), t["\u0275eld"](21, 0, null, null, 3, "div", [["class", "stats__col stats__col_net"]], null, [[null, "mouseleave"], [null, "mouseenter"]], function(n, l, e) {
                var t = !0,
                    a = n.component;
                return "mouseleave" === l && (t = !1 !== a.cleanupHighlighter(e) && t), "mouseenter" === l && (t = !1 !== a.highlightColumn(e) && t), t
            }, null, null)), (n()(), t["\u0275eld"](22, 0, null, null, 2, "span", [], [[2, "mark", null]], null, null, null, null)), (n()(), t["\u0275ted"](23, null, ["", ""])), t["\u0275ppd"](24, 1), (n()(), t["\u0275eld"](25, 0, null, null, 3, "div", [["class", "stats__col stats__col_gpm"]], null, [[null, "mouseleave"], [null, "mouseenter"]], function(n, l, e) {
                var t = !0,
                    a = n.component;
                return "mouseleave" === l && (t = !1 !== a.cleanupHighlighter(e) && t), "mouseenter" === l && (t = !1 !== a.highlightColumn(e) && t), t
            }, null, null)), (n()(), t["\u0275eld"](26, 0, null, null, 2, "span", [], [[2, "mark", null]], null, null, null, null)), (n()(), t["\u0275ted"](27, null, ["", ""])), t["\u0275ppd"](28, 1), (n()(), t["\u0275eld"](29, 0, null, null, 3, "div", [["class", "stats__col stats__col_xpm"]], null, [[null, "mouseleave"], [null, "mouseenter"]], function(n, l, e) {
                var t = !0,
                    a = n.component;
                return "mouseleave" === l && (t = !1 !== a.cleanupHighlighter(e) && t), "mouseenter" === l && (t = !1 !== a.highlightColumn(e) && t), t
            }, null, null)), (n()(), t["\u0275eld"](30, 0, null, null, 2, "span", [], [[2, "mark", null]], null, null, null, null)), (n()(), t["\u0275ted"](31, null, ["", ""])), t["\u0275ppd"](32, 1), (n()(), t["\u0275eld"](33, 0, null, null, 3, "div", [["class", "stats__col stats__col_lh"]], null, [[null, "mouseleave"], [null, "mouseenter"]], function(n, l, e) {
                var t = !0,
                    a = n.component;
                return "mouseleave" === l && (t = !1 !== a.cleanupHighlighter(e) && t), "mouseenter" === l && (t = !1 !== a.highlightColumn(e) && t), t
            }, null, null)), (n()(), t["\u0275eld"](34, 0, null, null, 2, "span", [], [[2, "mark", null]], null, null, null, null)), (n()(), t["\u0275ted"](35, null, ["", ""])), t["\u0275ppd"](36, 1), (n()(), t["\u0275eld"](37, 0, null, null, 3, "div", [["class", "stats__col stats__col_dn"]], null, [[null, "mouseleave"], [null, "mouseenter"]], function(n, l, e) {
                var t = !0,
                    a = n.component;
                return "mouseleave" === l && (t = !1 !== a.cleanupHighlighter(e) && t), "mouseenter" === l && (t = !1 !== a.highlightColumn(e) && t), t
            }, null, null)), (n()(), t["\u0275eld"](38, 0, null, null, 2, "span", [], [[2, "mark", null]], null, null, null, null)), (n()(), t["\u0275ted"](39, null, ["", ""])), t["\u0275ppd"](40, 1), (n()(), t["\u0275eld"](41, 0, null, null, 3, "div", [["class", "stats__col stats__col_hd"]], null, [[null, "mouseleave"], [null, "mouseenter"]], function(n, l, e) {
                var t = !0,
                    a = n.component;
                return "mouseleave" === l && (t = !1 !== a.cleanupHighlighter(e) && t), "mouseenter" === l && (t = !1 !== a.highlightColumn(e) && t), t
            }, null, null)), (n()(), t["\u0275eld"](42, 0, null, null, 2, "span", [], [[2, "mark", null]], null, null, null, null)), (n()(), t["\u0275ted"](43, null, ["", ""])), t["\u0275ppd"](44, 1), (n()(), t["\u0275eld"](45, 0, null, null, 3, "div", [["class", "stats__col stats__col_td"]], null, [[null, "mouseleave"], [null, "mouseenter"]], function(n, l, e) {
                var t = !0,
                    a = n.component;
                return "mouseleave" === l && (t = !1 !== a.cleanupHighlighter(e) && t), "mouseenter" === l && (t = !1 !== a.highlightColumn(e) && t), t
            }, null, null)), (n()(), t["\u0275eld"](46, 0, null, null, 2, "span", [], [[2, "mark", null]], null, null, null, null)), (n()(), t["\u0275ted"](47, null, ["", ""])), t["\u0275ppd"](48, 1), (n()(), t["\u0275eld"](49, 0, null, null, 3, "div", [["class", "stats__col stats__col_heal"]], null, [[null, "mouseleave"], [null, "mouseenter"]], function(n, l, e) {
                var t = !0,
                    a = n.component;
                return "mouseleave" === l && (t = !1 !== a.cleanupHighlighter(e) && t), "mouseenter" === l && (t = !1 !== a.highlightColumn(e) && t), t
            }, null, null)), (n()(), t["\u0275eld"](50, 0, null, null, 2, "span", [], [[2, "mark", null]], null, null, null, null)), (n()(), t["\u0275ted"](51, null, ["", ""])), t["\u0275ppd"](52, 1), (n()(), t["\u0275and"](16777216, null, null, 1, null, C)), t["\u0275did"](54, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 2, 0, l.context.$implicit.player && l.context.$implicit.player.isCurrent), n(l, 5, 0, l.context.$implicit.player), n(l, 7, 0, !l.context.$implicit.player), n(l, 10, 0, l.context.$implicit.player), n(l, 12, 0, !l.context.$implicit.player), n(l, 17, 0, l.context.$implicit.data.KDA, e.tracker), n(l, 20, 0, l.context.$implicit.data.KDA[0].value, l.context.$implicit.data.KDA[1].value, l.context.$implicit.data.KDA[2].value, "1px", "#828282"), n(l, 54, 0, l.context.$implicit.items)
            }, function(n, l) {
                n(l, 0, 0, l.context.$implicit.player && l.context.$implicit.player.isCurrent && l.component.isCurrentPlayerClassToggle), n(l, 8, 0, !l.context.$implicit.player), n(l, 22, 0, l.context.$implicit.data.NET.isMarked);
                var e = t["\u0275unv"](l, 23, 0, n(l, 24, 0, t["\u0275nov"](l.parent.parent, 1), l.context.$implicit.data.NET.value));
                n(l, 23, 0, e), n(l, 26, 0, l.context.$implicit.data.GPM.isMarked);
                var a = t["\u0275unv"](l, 27, 0, n(l, 28, 0, t["\u0275nov"](l.parent.parent, 1), l.context.$implicit.data.GPM.value));
                n(l, 27, 0, a), n(l, 30, 0, l.context.$implicit.data.XPM.isMarked);
                var i = t["\u0275unv"](l, 31, 0, n(l, 32, 0, t["\u0275nov"](l.parent.parent, 1), l.context.$implicit.data.XPM.value));
                n(l, 31, 0, i), n(l, 34, 0, l.context.$implicit.data.LH.isMarked);
                var u = t["\u0275unv"](l, 35, 0, n(l, 36, 0, t["\u0275nov"](l.parent.parent, 1), l.context.$implicit.data.LH.value));
                n(l, 35, 0, u), n(l, 38, 0, l.context.$implicit.data.DN.isMarked);
                var r = t["\u0275unv"](l, 39, 0, n(l, 40, 0, t["\u0275nov"](l.parent.parent, 1), l.context.$implicit.data.DN.value));
                n(l, 39, 0, r), n(l, 42, 0, l.context.$implicit.data.HD.isMarked);
                var o = t["\u0275unv"](l, 43, 0, n(l, 44, 0, t["\u0275nov"](l.parent.parent, 1), l.context.$implicit.data.HD.value));
                n(l, 43, 0, o), n(l, 46, 0, l.context.$implicit.data.TD.isMarked);
                var s = t["\u0275unv"](l, 47, 0, n(l, 48, 0, t["\u0275nov"](l.parent.parent, 1), l.context.$implicit.data.TD.value));
                n(l, 47, 0, s), n(l, 50, 0, l.context.$implicit.data.Heal.isMarked);
                var c = t["\u0275unv"](l, 51, 0, n(l, 52, 0, t["\u0275nov"](l.parent.parent, 1), l.context.$implicit.data.Heal.value));
                n(l, 51, 0, c)
            })
        }
        function P(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 14, "div", [["class", "stats__table"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 11, "div", [["class", "stats__team"]], null, null, null, null, null)), t["\u0275did"](2, 278528, null, 0, i.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (n()(), t["\u0275eld"](3, 0, null, null, 9, "div", [["class", "stats__team-info_wrapper"]], null, null, null, null, null)), (n()(), t["\u0275eld"](4, 0, null, null, 6, "div", [["class", "stats__team-info"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, d)), t["\u0275did"](6, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](7, 0, null, null, 3, "span", [["class", "stats__team_name"]], null, null, null, null, null)), (n()(), t["\u0275ted"](8, null, ["", ""])), t["\u0275pid"](131072, a.TranslatePipe, [a.TranslateService, t.ChangeDetectorRef]), t["\u0275pid"](131072, a.TranslatePipe, [a.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275and"](16777216, null, null, 1, null, p)), t["\u0275did"](12, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, T)), t["\u0275did"](14, 278528, null, 0, i.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"],
                ngForTrackBy: [1, "ngForTrackBy"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 2, 0, "stats__team", 0 === l.context.index ? "stats__team_radiant" : "stats__team_dire"), n(l, 6, 0, e.forPartners), n(l, 12, 0, 0 === l.context.index ? e.isRadiantVictory : !e.isRadiantVictory), n(l, 14, 0, l.context.$implicit, e.tracker)
            }, function(n, l) {
                var e = l.component;
                n(l, 8, 0, 0 === l.context.index ? (null == e.teams[l.context.index] ? null : e.teams[l.context.index].name) || t["\u0275unv"](l, 8, 0, t["\u0275nov"](l, 9).transform("COMMON.TEAM_RADIANT")) : (null == e.teams[l.context.index] ? null : e.teams[l.context.index].name) || t["\u0275unv"](l, 8, 0, t["\u0275nov"](l, 10).transform("COMMON.TEAM_DIRE")))
            })
        }
        function M(n) {
            return t["\u0275vid"](2, [t["\u0275pid"](0, o.a, []), t["\u0275pid"](0, s.a, []), (n()(), t["\u0275eld"](2, 0, null, null, 38, "section", [["class", "stats"]], [[2, "stats__for-partners", null]], null, null, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 37, "div", [["class", "stats__content"]], null, [[null, "mouseleave"]], function(n, l, e) {
                var t = !0;
                return "mouseleave" === l && (t = !1 !== n.component.onLeaveTable() && t), t
            }, null, null)), (n()(), t["\u0275eld"](4, 0, null, null, 2, "div", [["class", "stats__highlighter stats__highlighter_x"]], null, null, null, null, null)), t["\u0275did"](5, 278528, null, 0, i.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), t["\u0275pid"](131072, i.AsyncPipe, [t.ChangeDetectorRef]), (n()(), t["\u0275eld"](7, 0, null, null, 2, "div", [["class", "stats__highlighter stats__highlighter_y"]], null, null, null, null, null)), t["\u0275did"](8, 278528, null, 0, i.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), t["\u0275pid"](131072, i.AsyncPipe, [t.ChangeDetectorRef]), (n()(), t["\u0275eld"](10, 0, null, null, 28, "div", [["class", "stats__heading"]], null, null, null, null, null)), (n()(), t["\u0275eld"](11, 0, null, null, 27, "div", [["class", "stats__row stats__row_head"]], null, null, null, null, null)), (n()(), t["\u0275eld"](12, 0, null, null, 0, "div", [["class", "stats__shield stats__shield_fake"]], null, null, null, null, null)), (n()(), t["\u0275eld"](13, 0, null, null, 0, "div", [["class", "stats__col stats__col_player"]], null, null, null, null, null)), (n()(), t["\u0275eld"](14, 0, null, null, 6, "div", [["class", "stats__col stats__col_kda"]], null, null, null, null, null)), (n()(), t["\u0275eld"](15, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["K"])), (n()(), t["\u0275eld"](17, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["D"])), (n()(), t["\u0275eld"](19, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["A"])), (n()(), t["\u0275eld"](21, 0, null, null, 1, "div", [["class", "stats__col stats__col_net"]], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["NET"])), (n()(), t["\u0275eld"](23, 0, null, null, 1, "div", [["class", "stats__col stats__col_gpm"]], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["GPM"])), (n()(), t["\u0275eld"](25, 0, null, null, 1, "div", [["class", "stats__col stats__col_xpm"]], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["XPM"])), (n()(), t["\u0275eld"](27, 0, null, null, 1, "div", [["class", "stats__col stats__col_lh"]], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["LH"])), (n()(), t["\u0275eld"](29, 0, null, null, 1, "div", [["class", "stats__col stats__col_dn"]], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["DN"])), (n()(), t["\u0275eld"](31, 0, null, null, 1, "div", [["class", "stats__col stats__col_hd"]], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["HD"])), (n()(), t["\u0275eld"](33, 0, null, null, 1, "div", [["class", "stats__col stats__col_td"]], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["TD"])), (n()(), t["\u0275eld"](35, 0, null, null, 1, "div", [["class", "stats__col stats__col_heal"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, a.TranslatePipe, [a.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](37, 0, null, null, 1, "div", [["class", "stats__col stats__col_items"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, a.TranslatePipe, [a.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275and"](16777216, null, null, 1, null, P)), t["\u0275did"](40, 278528, null, 0, i.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"],
                ngForTrackBy: [1, "ngForTrackBy"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 5, 0, t["\u0275unv"](l, 5, 0, t["\u0275nov"](l, 6).transform(e.highlighterX$))), n(l, 8, 0, t["\u0275unv"](l, 8, 0, t["\u0275nov"](l, 9).transform(e.highlighterY$))), n(l, 40, 0, e.tables, e.tracker)
            }, function(n, l) {
                n(l, 2, 0, l.component.forPartners), n(l, 35, 0, t["\u0275unv"](l, 35, 0, t["\u0275nov"](l, 36).transform("MATCH.HEAL_STATS"))), n(l, 37, 0, t["\u0275unv"](l, 37, 0, t["\u0275nov"](l, 38).transform("MATCH.ITEM_BUILD")))
            })
        }
    },
    JyrT: function(n, l, e) {
        "use strict";
        e("9jMT"), e("xTpN"), e("Wqf6"), e("Wv4U"), e("lZxJ"), e("v9/1"), e.d(l, "a", function() {
            return t
        });
        var t = function() {
            return function() {}
        }()
    },
    L2wq: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        }), e("YI7S");
        var t = function() {
            function n(n, l) {
                this.modificator = n, this.match = l, this.header = !0
            }
            return Object.defineProperty(n.prototype, "matchInfo", {
                get: function() {
                    var n = this.match.matchData$.getValue();
                    return {
                        matchId: n.match.match_id,
                        slot: n.match.slot
                    }
                },
                enumerable: !0,
                configurable: !0
            }), n
        }()
    },
    OPpi: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        var t = function() {
            function n(n) {
                this.domSanitizer = n
            }
            return n.prototype.transform = function(n) {
                return this.domSanitizer.bypassSecurityTrustHtml(n)
            }, n
        }()
    },
    Oc7j: function(n, l, e) {
        "use strict";
        var t = e("CcnG"),
            a = e("ZXcd"),
            i = e("9Bjs"),
            u = e("Ygy7"),
            r = e("YI7S"),
            o = e("Ip0R"),
            s = e("A7o+"),
            c = e("Wqf6"),
            d = e("ZYCi"),
            p = e("RTd+");
        e.d(l, "a", function() {
            return v
        });
        var _ = t["\u0275crt"]({
            encapsulation: 0,
            styles: [[".block[_ngcontent-%COMP%]{margin-top:-30px;display:flex;justify-content:center;align-items:center;padding-top:30px;flex-direction:column}.block__section[_ngcontent-%COMP%]{width:960px}.block__header[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:30px}@media screen and (max-width:1024px){.block[_ngcontent-%COMP%]{margin-top:-15px;padding-top:15px}.block__section[_ngcontent-%COMP%]{width:100%}.block__header[_ngcontent-%COMP%]{margin-top:15px}.block[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{line-height:1.2;padding:15px 50px;text-align:center;margin:0 15px}}"]],
            data: {}
        });
        function f(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "gosu-match-warding", [], null, [["window", "scroll"]], function(n, l, e) {
                var a = !0;
                return "window:scroll" === l && (a = !1 !== t["\u0275nov"](n, 2).onScroll() && a), a
            }, a.b, a.a)), t["\u0275prd"](512, null, i.a, i.a, []), t["\u0275did"](2, 770048, null, 0, u.a, [r.a, i.a, t.PLATFORM_ID], null, null)], function(n, l) {
                n(l, 2, 0)
            }, null)
        }
        function g(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "div", [["class", "block__section"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, f)), t["\u0275did"](2, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                n(l, 2, 0, l.component.displayWarding)
            }, null)
        }
        function m(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 7, "div", [["class", "block"]], null, null, null, null, null)), t["\u0275did"](1, 16384, null, 0, o.NgSwitch, [], {
                ngSwitch: [0, "ngSwitch"]
            }, null), t["\u0275pid"](131072, o.AsyncPipe, [t.ChangeDetectorRef]), (n()(), t["\u0275eld"](3, 0, null, null, 2, "div", [["class", "block__header"]], null, null, null, null, null)), (n()(), t["\u0275eld"](4, 0, null, null, 1, "a", [["class", "btn btn_primary btn_lg btn_rounded"], ["href", "https://gosu.ai"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, s.TranslatePipe, [s.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275and"](16777216, null, null, 1, null, g)), t["\u0275did"](7, 278528, null, 0, o.NgSwitchCase, [t.ViewContainerRef, t.TemplateRef, o.NgSwitch], {
                ngSwitchCase: [0, "ngSwitchCase"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 1, 0, t["\u0275unv"](l, 1, 0, t["\u0275nov"](l, 2).transform(e.displayBlock))), n(l, 7, 0, "warding")
            }, function(n, l) {
                n(l, 4, 0, t["\u0275unv"](l, 4, 0, t["\u0275nov"](l, 5).transform("MATCH.TRY_OWN_MATCHES")))
            })
        }
        function h(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "gosu-match-block", [], null, null, null, m, _)), t["\u0275did"](1, 245760, null, 0, c.a, [d.ActivatedRoute, r.a, t.PLATFORM_ID], null, null), t["\u0275prd"](256, null, p.a, "default", [])], function(n, l) {
                n(l, 1, 0)
            }, null)
        }
        var v = t["\u0275ccf"]("gosu-match-block", c.a, h, {}, {}, [])
    },
    "RTd+": function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        var t = new (e("CcnG").InjectionToken)("MATCH_SECTION_MODIFICATOR")
    },
    S3gD: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        }), e("YI7S");
        var t = function() {
            function n(n) {
                this.matchService = n
            }
            return n.prototype.generateUtm = function(n) {
                void 0 === n && (n = "default");
                try {
                    return [["utm_source", n], ["utm_medium", this.matchService.getCurrentUser().account_id], ["utm_campaign", "Sharing"]].map(function(n) {
                        return n.join("=")
                    }).join("&")
                } catch (l) {
                    return ""
                }
            }, n.prototype.setUtm = function(n) {
                void 0 === n && (n = "default");
                var l = this.generateUtm(n);
                setTimeout(function() {
                    try {
                        var n = location.href.replace(/#.+$/, "").replace(location.search, "");
                        history.replaceState(void 0, void 0, n + "?" + l)
                    } catch (e) {}
                }, 30)
            }, n
        }()
    },
    UTPA: function(n, l, e) {
        "use strict";
        var t;
        e.d(l, "a", function() {
            return t
        }), function(n) {
            n.NOT_REQUESTED = "not_requested", n.REQUESTED = "requested", n.IN_PROGRESS = "in_progress", n.IN_REVIEW = "in_review", n.COMPLETED = "completed"
        }(t || (t = {}))
    },
    Wqf6: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return a
        });
        var t = e("FYXD"),
            a = (e("YI7S"), function() {
                function n(n, l, e) {
                    this.route = n, this.match = l, this.platformId = e
                }
                return n.prototype.ngOnInit = function() {
                    var n = this;
                    this.displayBlock = this.route.params.pipe(Object(t.a)("block")), this.subscription = this.route.data.pipe(Object(t.a)("matchData")).subscribe(function(l) {
                        n.matchData = l
                    })
                }, n.prototype.ngOnDestroy = function() {
                    this.subscription && this.subscription.unsubscribe()
                }, n
            }())
    },
    Wv4U: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        }), e("v9/1");
        var t = function() {
            function n(n) {
                this.match = n
            }
            return Object.defineProperty(n.prototype, "data", {
                get: function() {
                    return this.match.responceData.summary
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "matchData", {
                get: function() {
                    return this.match.responceData.match
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "teams", {
                get: function() {
                    return [this.match.responceData.radiant, this.match.responceData.dire]
                },
                enumerable: !0,
                configurable: !0
            }), n
        }()
    },
    XZsM: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        var t = function() {
            function n() {}
            return n.prototype.transform = function(n, l) {
                return void 0 === l && (l = !0), "number" != typeof n ? n : l && !n ? "\u2014" : n > 999 ? (n / 1e3).toFixed(1) + "k" : n.toString()
            }, n
        }()
    },
    Ygy7: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return s
        });
        var t = e("Ip0R"),
            a = e("wd/R"),
            i = (e("RiPy"), e("K9Ia")),
            u = (e("9Bjs"), e("3n8S")),
            r = e("6kEK"),
            o = (e("YI7S"), "default"),
            s = function() {
                function n(n, l, e) {
                    this.match = n, this.warding = l, this.platformId = e, this.isEmpty = !1, this.sectionMap = r.a, this.scrollStream$ = new i.a
                }
                return n.getSummary = function(n) {
                    return {
                        title: "Warding",
                        description: "Wards performance",
                        major: Math.floor(n.warding_performance) + "%",
                        value: 100 - n.warding_performance
                    }
                }, Object.defineProperty(n.prototype, "isBrowser", {
                    get: function() {
                        return Object(t.isPlatformBrowser)(this.platformId)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "summary", {
                    get: function() {
                        var n = this.data.observer_summary;
                        return n ? [{
                            header: a.duration(Math.floor(n.wards_live_time), "s").format("h:mm:ss"),
                            i18nKey: "MATCH.WARDING_TOTAL_TIME",
                            modificator: "success"
                        }, {
                            header: a.duration(Math.floor(n.wards_time_in_shop), "s").format("h:mm:ss"),
                            i18nKey: "MATCH.WARDING_TIME_WARDS",
                            modificator: "fail"
                        }, {
                            header: n.wards_purchased.toString(),
                            i18nKey: "MATCH.WARDING_TOTAL_AMOUNT_PURCHASED",
                            modificator: o
                        }, {
                            header: n.wards_placed.toString(),
                            i18nKey: "MATCH.WARDING_TOTAL_SET",
                            modificator: o
                        }, {
                            header: n.wards_nearby_opponents_deaths_count.toString(),
                            i18nKey: "MATCH.WARDING_TOTAL_KILLS",
                            modificator: o
                        }] : []
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "performance", {
                    get: function() {
                        var n = this.data.observer_log;
                        return Math.floor(n.filter(function(n) {
                            return n.performance > 0
                        }).length / n.length * 100)
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.ngOnInit = function() {
                    if (this.selectedObserver$ = this.warding.observer$, this.selectedZone$ = this.warding.zone$, this.matchData$ = this.match.matchData$, this.isEmpty)
                        return this.warding.selectZone(Object.keys(u.a)[0])
                }, n.prototype.ngOnChanges = function() {
                    if (this.data.data && !this.warding.selectedZoneValue && !this.warding.selectedObserverValue) {
                        var n = this.data.observer_log.find(function(n) {
                            return !!n.area_id
                        });
                        n ? this.warding.selectObserver(n) : this.warding.selectZone(Object.keys(u.a)[0])
                    }
                }, n.prototype.ngOnDestroy = function() {
                    this.matchDataSubscription && this.matchDataSubscription.unsubscribe()
                }, n.prototype.selectObserver = function(n) {
                    this.warding.selectObserver(n)
                }, n.prototype.onScroll = function() {
                    this.scrollStream$.next(window.pageYOffset)
                }, n
            }()
    },
    "Z/Q5": function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        var t = function() {
            function n() {}
            return n.prototype.isCurrentTeamPlayerFactory = function(n) {
                return function(l) {
                    return n.index > 4 ? l.index > 4 : l.index <= 4
                }
            }, n
        }()
    },
    ZXcd: function(n, l, e) {
        "use strict";
        var t = e("CcnG"),
            a = e("A7o+"),
            i = e("Ip0R"),
            u = e("m9VD"),
            r = e("lq1H"),
            o = e("8cOJ"),
            s = {
                d_block_all0: {
                    all: ["BLOCK_OF_A_LARGE_UPPER"],
                    early: ["THE_ADDITIONAL_WARDS", "GIVES_AN_OVERVIEW_UPPER"],
                    mid: null,
                    late: null
                },
                d_block_all1: {
                    all: ["BLOCK_OF_A_SMALL_CAMP"],
                    early: ["GIVES_VISION_AND_A_BLOCK"],
                    mid: null,
                    late: null
                },
                d_block_all2: {
                    all: ["BLOCK_OF_A_NEUTRAL_CAMP"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_block_all3: {
                    all: ["THE_ADDITIONAL_WARDS"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_block_all4: {
                    all: ["BLOCK_OF_AN_ACIENT", "GIVES_THE_NECESSARY_VISION"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_block_all5: {
                    all: ["BLOCK_OF_A_NEUTRAL_LOWER"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_block_all6: {
                    all: ["BLOCK_OF_A_NEUTRAL_LOWER"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_block_all7: {
                    all: ["BLOCK_OF_AN_ACIENT_LOWER"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_block_all9: {
                    all: ["BLOCK_OF_A_LARGE_LOWER"],
                    early: ["THE_ADDITIONAL_WARDS_OFFLANER", "GIVES_VISION_AND_A_BLOCK_LOWER"],
                    mid: null,
                    late: null
                },
                d_block_all10: {
                    all: ["BLOCK_A_SMALL_CAMP_LOWER"],
                    early: ["THE_ADDITIONAL_WARDS_OFFLANER", "GIVES_VISION_AND_A_BLOCK_LARGE_LOWER"],
                    mid: null,
                    late: null
                },
                d_block_all11: {
                    all: ["BLOCK_OF_A_NEUTRAL_LOWER_RADIANT"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_block_all12: {
                    all: ["BLOCK_OF_AN_LOWER"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_block_all13: {
                    all: ["BLOCK_OF_A_NEUTRAL_LOWER_RADIANT"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_block_all14: {
                    all: ["BLOCK_OF_A_NEUTRAL_LOWER_RADIANT"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_block_all15: {
                    all: ["BLOCK_OF_A_NEUTRAL_UPPER", "GIVES_THE_NECESSARY"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_block_all16: {
                    all: ["BLOCK_OF_A_NEUTRAL_UPPER"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_block_all17: {
                    all: ["BLOCK_OF_A_NEUTRAL_UPPER", "GIVES_THE_NECESSARY"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_block_all18: {
                    all: ["THE_ADDITIONAL_WARDS"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_offlaner_early0: {
                    all: null,
                    early: ["THE_ADDITIONAL_WARDS", "USEFUL_FOR_TRACKING", "GIVES_THE_NECESSARY_SAFELY_RECEIVE_XP", "PROVIDES_PROTECTION_FROM_GANKS"],
                    mid: null,
                    late: null
                },
                d_offlaner_early1: {
                    all: ["THE_ADDITIONAL_WARDS_OFFLANE", "TRACKS_THE_AREA_UPPER", "TRACKS_THE_AREA_UPPER_RIVER"],
                    early: ["THE_ADDITIONAL_WARDS", "USEFUL_FOR_TRACKING", "GIVES_THE_NECESSARY_SAFELY_RECEIVE_XP", "PROVIDES_PROTECTION_FROM_GANKS_BOUNTY_RUNE"],
                    mid: null,
                    late: null
                },
                d_offlaner_early2: {
                    all: ["THE_ADDITIONAL_WARDS_OFFLANE", "CONTROLS_AREA_APPROACH", "TRACKS_THE_AREA_T2_TOWER"],
                    early: ["THE_ADDITIONAL_WARDS", "USEFUL_FOR_TRACKINGs", "GIVES_THE_NECESSARY_SAFELY_RECEIVE_XP", "PROVIDES_PROTECTION_FROM_GANKS", "GIVES_AN_OVERVIEW"],
                    mid: null,
                    late: null
                },
                d_offlaner_early3: {
                    all: ["THE_ADDITIONAL_WARDS_OFFLANE", "GIVES_AN_OVERVIEW_BEHIND_THE_TOWER", "SHOWS_THE_NUMBER_OF_ENEMY", "GIVES_AN_OVERVIEW_INITIATORS", "GIVES_AN_OVERVIEW_DEFEND_TO_TOWER"],
                    early: ["THE_ADDITIONAL_WARDS", "SHOWS_THE_NUMBER_OF_ENEMY", "GIVES_AN_OVERVIEW_SMALL_CAMP", "GIVES_AN_OVERVIEW_HOLDING_THE_LANE"],
                    mid: null,
                    late: null
                },
                d_offlaner_early4: {
                    all: ["THE_ADDITIONAL_WARDS_OFFLANE", "GIVES_AN_OVERVIEW_IN_FRONT", "SHOWS_THE_NUMBER_OF_ENEMY"],
                    early: ["THE_ADDITIONAL_WARDS", "SHOWS_THE_NUMBER_OF_ENEMY", "GIVES_AN_OVERVIEW_LOCATION_HOLDING_THE_LANE"],
                    mid: null,
                    late: null
                },
                d_offlaner_early5: {
                    all: ["THE_ADDITIONAL_WARDS_EASY_LANE", "TRACKS_THE_AREA_NEAR", "SHOWS_THE_NUMBER_OF_ENEMY", "CONTROLS_AREA_APPROACH", " "],
                    early: ["THE_ADDITIONAL_WARDS", "TRACKS_THE_AGGRESSIVE", "PROVIDES_AN_OPPORTUNITY_CREEPS", "PROVIDES_A_SAFE_FARM"],
                    mid: ["THE_ADDITIONAL_WARDS_AGAINST"],
                    late: ["THE_ADDITIONAL_WARDS_AGAINST"]
                },
                d_offlaner_early6: {
                    all: null,
                    early: ["THE_ADDITIONAL_WARDS", "TRACKS_THE_AGGRESSIVE", "PROVIDES_AN_OPPORTUNITY"],
                    mid: ["THE_ADDITIONAL_WARDS_HARD_LANE"],
                    late: ["THE_ADDITIONAL_WARDS_HARD_LANE"]
                },
                d_offlaner_early7: {
                    all: null,
                    early: ["THE_ADDITIONAL_WARDS_OFFLANER", "TRACKS_THE_AGGRESSIVE", "GIVES_THE_NECESSARY_SAFELY_RECEIVE_XP", "PROVIDES_PROTECTION_FROM_GANKS", ""],
                    mid: null,
                    late: null
                },
                d_offlaner_early8: {
                    all: null,
                    early: ["THE_ADDITIONAL_WARDS_OFFLANER", "TRACKS_THE_AGGRESSIVE", "GIVES_THE_NECESSARY_SAFELY_RECEIVE_XP", "PROVIDES_PROTECTION_FROM_GANKS", ""],
                    mid: null,
                    late: null
                },
                d_offlaner_early9: {
                    all: null,
                    early: ["THE_ADDITIONAL_WARDS_OFFLANER", "TRACKS_THE_AGGRESSIVE", "GIVES_THE_NECESSARY_SAFELY_RECEIVE_XP", "PROVIDES_PROTECTION_FROM_GANKS", "GIVES_VISION_OF_BOUNTY_RUNE"],
                    mid: null,
                    late: null
                },
                d_offlaner_early10: {
                    all: ["THE_ADDITIONAL_WARDS_OFF_LANE", "GIVES_AN_OVERVIEW_BEHIND_THE_TOWER", "SHOWS_THE_NUMBER_OF_ENEMY", "GIVES_AN_OVERVIEW_OF_THE_HEROES"],
                    early: ["THE_ADDITIONAL_WARDS_OFFLANER", "SHOWS_THE_NUMBER_OF_ENEMY", "GIVES_AN_OVERVIEW_LOCATION_HOLDING_THE_LANE"],
                    mid: null,
                    late: null
                },
                d_offlaner_early11: {
                    all: ["THE_ADDITIONAL_WARDS_OFF_LANE", "GIVES_AN_OVERVIEW_IN_FRONT", "SHOWS_THE_NUMBER_OF_ENEMY"],
                    early: ["THE_ADDITIONAL_WARDS_OFFLANER", "SHOWS_THE_NUMBER_OF_ENEMY", "GIVES_AN_OVERVIEW_LOCATION_HOLDING_THE_LANE"],
                    mid: null,
                    late: null
                },
                d_offlaner_early12: {
                    all: null,
                    early: ["THE_ADDITIONAL_WARDS_OFFLANER", "TRACKS_THE_AGGRESSIVE", "PROVIDES_AN_OPPORTUNITY"],
                    mid: null,
                    late: null
                },
                d_offlaner_early13: {
                    all: null,
                    early: ["THE_ADDITIONAL_WARDS_OFFLANER", "TRACKS_THE_AGGRESSIVE", "PROVIDES_AN_OPPORTUNITY"],
                    mid: null,
                    late: null
                },
                s_midallgame0: {
                    all: ["STANDARD_WARD_ON", "IT_IS_USED_TO_TRACK", "TO_MONITOR_THE_ENEMY"],
                    early: null,
                    mid: null,
                    late: null
                },
                s_midallgame1: {
                    all: ["STANDART_WARD_ON", "IT_IS_USED_TO_TRACK_MID_LANER", "TO_OVER_AGGRO_CREEPS", "TO_MONITOR_THE_ENEMY_TELEPORTS"],
                    early: null,
                    mid: null,
                    late: null
                },
                s_midallgame2: {
                    all: ["CONVENIENT_WARD_AT_THE_TOP", "IT_IS_USED_TO_TRACK_THE_RUNE", "IT_IS_USEFUL_TO_TRACK"],
                    early: null,
                    mid: null,
                    late: null
                },
                s_midallgame3: {
                    all: ["CONVENIENT_WARD_AT_THE_TOP_DIRE", "IT_IS_USED_TO_TRACK_THE_RUNE", "IT_IS_USEFUL_TO_TRACK"],
                    early: null,
                    mid: null,
                    late: null
                },
                s_midallgame4: {
                    all: ["A_VERY_PRODUCTIVE", "USEFUL_AGAINST_HEROES", "PROVIDES_THE_NECESSARY"],
                    early: null,
                    mid: null,
                    late: null
                },
                s_midallgame5: {
                    all: ["CONVENIENT_WARD_IN_THE_LOWER", "IT_IS_USED_TO_TRACK_THE_RUNE", "IT_IS_USEFUL_TO_TRACK_OFF_LANER"],
                    early: null,
                    mid: null,
                    late: null
                },
                s_midallgame6: {
                    all: ["CONVENIENT_WARD_IN_THE_LOWER_RADIANT", "IT_IS_USED_TO_TRACK_THE_RUNE", "IT_IS_USEFUL_TO_TRACK_OFF_LANER"],
                    early: null,
                    mid: null,
                    late: null
                },
                s_midallgame7: {
                    all: ["CONVENIENT_WARD_WHICH_IS_PLACED", "IT_IS_USED_TO_TRACK_THE_RUNE_AND_GIVES", "IT_IS_USEFUL_TO_TRACK_OFF_LANER"],
                    early: null,
                    mid: null,
                    late: null
                },
                s_midallgame8: {
                    all: ["CONVENIENT_WARD_WHICH_IS_PLACED_DIRE", "IT_IS_USED_TO_TRACK_THE_RUNE_AND_GIVES", "IT_IS_USEFUL_TO_TRACK_OFF_LANER"],
                    early: null,
                    mid: null,
                    late: null
                },
                s_midallgame9: {
                    all: ["CONVENIENT_WARD_WHICH_DIRE", "IT_IS_USEFUL_TO_TRACK_OFF_LANER"],
                    early: null,
                    mid: null,
                    late: null
                },
                s_midallgame14: {
                    all: ["STANDARD_WARD_ON", "IT_IS_USED_TO_TRACK_MID_LANER", "TO_OVER_AGGRO_CREEPS", "TO_MONITOR_THE_ENEMY_TELEPORTS"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_pusht1_all0: {
                    all: ["THE_ADDITIONAL_WARDS_FOR_T1", "GIVES_AN_OVERVIEW_IN_FRONT", "SHOWS_THE_NUMBER_OF_ENEMY"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_pusht1_all1: {
                    all: ["THE_ADDITIONAL_WARDS_FOR_T1", "GIVES_AN_OVERVIEW_LOWER_JUNGLE"],
                    early: ["PROVIDES_A_SAFE_FARM_FOR_YOUR"],
                    mid: null,
                    late: null
                },
                d_pusht1_all2: {
                    all: ["THE_ADDITIONAL_WARDS_FOR_T1", "GIVES_AN_OVERVIEW_IN_FRONT_OF_THE_TOWER", "SHOWS_THE_NUMBER_OF_ENEMY", "GIVES_AN_OVERVIEW_INITIATORS"],
                    early: ["PROVIDES_A_SAFE_FARM_FOR_YOUR"],
                    mid: ["THE_ADDITIONAL_WARDS_AGAINST_A_SPLIT"],
                    late: ["THE_ADDITIONAL_WARDS_AGAINST_A_SPLIT"]
                },
                d_pusht1_all3: {
                    all: ["THE_ADDITIONAL_WARDS_FOR_T1", "GIVES_AN_OVERVIEW_IN_FRONT_OF_THE_TOWER", "SHOWS_THE_NUMBER_OF_ENEMY", "GIVES_AN_OVERVIEW_INITIATORS"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_pusht1_all7: {
                    all: ["THE_ADDITIONAL_WARDS_FOR_T1", "TRACKS_THE_LOWER", "SHOWS_THE_NUMBER"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_pusht1_all8: {
                    all: ["THE_ADDITIONAL_WARDS_FOR_T1", "TRACKS_THE_AREA_UPPER_THE_DIRE", "GIVES_AN_OVERVIEW_INITIATORS"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_pusht1_all4: {
                    all: null,
                    early: ["THE_ADDITIONAL_WARDS_TO_TRACK", "GIVES_AN_OVERVIEW_OF_THE_TOP"],
                    mid: null,
                    late: null
                },
                d_pusht1_all5: {
                    all: null,
                    early: ["THE_ADDITIONAL_WARDS_TO_TRACK_DIRE", "GIVES_AN_OVERVIEW_OF_THE_TOP"],
                    mid: null,
                    late: null
                },
                d_pusht1_all6: {
                    all: null,
                    early: ["CONTROLS_THE_AREA"],
                    mid: null,
                    late: null
                },
                d_pusht1off_dire_all0: {
                    all: ["THE_ADDITIONAL_WARDS_OFF_LANE", "TRACKS_THE_AREA_OF"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_pusht1off_dire_all1: {
                    all: ["THE_ADDITIONAL_WARDS_OFF_LANE", "TRACKS_THE_AREA_OF_LOWER_JUNGLE"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_pusht1off_dire_all2: {
                    all: ["THE_ADDITIONAL_WARDS_OFF_LANE", "TRACKS_THE_AREA_OF_LOWER_JUNGLE"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_pusht1off_dire_all3: {
                    all: ["THE_ADDITIONAL_WARDS_OFF_LANE", "TRACKS_THE_AREA_OF_LOWER_JUNGLE_RUNE"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_pusht1safe_dire_all0: {
                    all: ["THE_ADDITIONAL_WARDS_EASY_LANE", "GIVES_AN_OVERVIEW_OF_THE_AREA_BEHIND", "SHOWS_THE_NUMBER_OF_ENEMY", "GIVES_AN_OVERVIEW_INITIATORS", "GIVES_AN_OVERVIEW_DEFEND_TO_TOWER"],
                    early: null,
                    mid: ["THE_ADDITIONAL_WARDS_HARD_LANE"],
                    late: ["THE_ADDITIONAL_WARDS_HARD_LANE"]
                },
                d_pusht1safe_dire_all1: {
                    all: ["THE_ADDITIONAL_WARDS_EASY_LANE", "TRACKS_THE_AREA_UPPER_THE_RADIANT", "SHOWS_POSSIBLE", "GIVES_A_SMALL"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_pusht1safe_dire_all2: {
                    all: ["THE_ADDITIONAL_WARDS_EASY_LANE", "TRACKS_THE_AREA_NEAR_RUNE_AND_SHRINE", "TRACKS_THE_AREA_UPPER_THE_RADIANT"],
                    early: null,
                    mid: null,
                    late: null
                },
                s_midallgame10: {
                    all: null,
                    early: ["VERY_PRODUCTIVE_WARD", "ALLOWS_YOU_TO_SEE_ENEMY"],
                    mid: null,
                    late: null
                },
                s_midallgame11: {
                    all: null,
                    early: ["STANDARD_WARD_FOR_PUSHING", "IT_IS_LOCATED"],
                    mid: null,
                    late: null
                },
                s_midallgame12: {
                    all: null,
                    early: ["CONVENIENT_WARD_TO_CONTROL"],
                    mid: null,
                    late: null
                },
                s_midallgame13: {
                    all: null,
                    early: ["CONVENIENT_WARD_TO_CONTROL"],
                    mid: null,
                    late: null
                },
                d_safecorefarmdire_early1: {
                    all: ["WARDS_WHICH_ALLOW", "SHOWS_THE_ENEMY_HEROES", "GIVES_THE_NECESSARY_VISION"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_safecorefarmradiant_early0: {
                    all: ["WARDS_WHICH_ALLOW_YOUR", "TRACKS_THE_POSITION"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_antisplitpush_radiant_all0: {
                    all: null,
                    early: null,
                    mid: ["THE_ADDITIONAL_WARDS_AGAINST_A_SPLIT_PUSH"],
                    late: ["THE_ADDITIONAL_WARDS_AGAINST_A_SPLIT_PUSH"]
                },
                d_antisplitpush_radiant_all1: {
                    all: null,
                    early: null,
                    mid: ["THE_ADDITIONAL_WARDS_AGAINST_A_SPLIT_PUSH_OFF_LANE"],
                    late: ["THE_ADDITIONAL_WARDS_AGAINST_A_SPLIT_PUSH_OFF_LANE"]
                },
                d_antisplitpush_radiant_all2: {
                    all: null,
                    early: null,
                    mid: ["THE_ADDITIONAL_WARDS_AGAINST_A_SPLIT_PUSH_OFF_LANE"],
                    late: ["THE_ADDITIONAL_WARDS_AGAINST_A_SPLIT_PUSH_OFF_LANE"]
                },
                d_antisplitpush_radiant_all3: {
                    all: null,
                    early: null,
                    mid: ["THE_ADDITIONAL_WARDS_AGAINST_A_SPLIT_PUSH_EASY_LANE"],
                    late: ["THE_ADDITIONAL_WARDS_AGAINST_A_SPLIT_PUSH_EASY_LANE"]
                },
                d_antisplitpush_radiant_all4: {
                    all: null,
                    early: null,
                    mid: ["THE_ADDITIONAL_WARDS_AGAINST_A_SPLIT_PUSH_EASY_LANE"],
                    late: ["THE_ADDITIONAL_WARDS_AGAINST_A_SPLIT_PUSH_EASY_LANE"]
                },
                d_antisplitpush_radiant_all5: {
                    all: null,
                    early: null,
                    mid: ["THE_ADDITIONAL_WARDS_AGAINST_A_SPLIT_PUSH_EASY_LANE"],
                    late: ["THE_ADDITIONAL_WARDS_AGAINST_A_SPLIT_PUSH_EASY_LANE"]
                },
                d_antisplitpush_radiant_all6: {
                    all: null,
                    early: null,
                    mid: ["THE_ADDITIONAL_WARDS_AGAINST_A_SPLIT_PUSH_EASY_LANE"],
                    late: ["THE_ADDITIONAL_WARDS_AGAINST_A_SPLIT_PUSH_EASY_LANE"]
                },
                d_antisplitpush_dire_all1: {
                    all: null,
                    early: null,
                    mid: ["THE_ADDITIONAL_WARDS_AGAINST"],
                    late: ["THE_ADDITIONAL_WARDS_AGAINST"]
                },
                d_antisplitpush_dire_all2: {
                    all: null,
                    early: null,
                    mid: ["THE_ADDITIONAL_WARDS_AGAINST"],
                    late: ["THE_ADDITIONAL_WARDS_AGAINST"]
                },
                d_antisplitpush_dire_all3: {
                    all: null,
                    early: null,
                    mid: ["THE_ADDITIONAL_WARDS_AGAINST_A_SPLIT_PUSH_OFF_LANE_DIRE"],
                    late: ["THE_ADDITIONAL_WARDS_AGAINST_A_SPLIT_PUSH_OFF_LANE_DIRE"]
                },
                d_antisplitpush_dire_all4: {
                    all: null,
                    early: null,
                    mid: ["THE_ADDITIONAL_WARDS_AGAINST_A_SPLIT_PUSH_OFF_LANE_DIRE"],
                    late: ["THE_ADDITIONAL_WARDS_AGAINST_A_SPLIT_PUSH_OFF_LANE_DIRE"]
                },
                d_antisplitpush_dire_all5: {
                    all: null,
                    early: null,
                    mid: ["THE_ADDITIONAL_WARDS_AGAINST_A_SPLIT_PUSH_OFF_LANE_DIRE"],
                    late: ["THE_ADDITIONAL_WARDS_AGAINST_A_SPLIT_PUSH_OFF_LANE_DIRE"]
                },
                d_roshkill_dire_all0: {
                    all: ["GIVES_THE_NECESSARY"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_roshkill_dire_all1: {
                    all: ["GIVES_THE_NECESSARY"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_roshkill_dire_all2: {
                    all: ["GIVES_THE_NECESSARY"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_roshkill_radiant_all0: {
                    all: ["GIVES_THE_NECESSARY_VISION"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_roshkill_radiant_all1: {
                    all: ["GIVES_THE_NECESSARY_VISION"],
                    early: null,
                    mid: null,
                    late: null
                },
                d_roshkill_radiant_all2: {
                    all: ["GIVES_THE_NECESSARY_VISION"],
                    early: null,
                    mid: null,
                    late: null
                }
            },
            c = function() {
                function n() {}
                return Object.defineProperty(n.prototype, "zoneData", {
                    get: function() {
                        return s[n = this.zone] ? function(n, l) {
                            return {
                                header: "Zone " + (n.split("_").map(function(n) {
                                    return n[0]
                                }).join("") + (n.match(/\d+/g) || [0])[0]).toUpperCase(),
                                text: [{
                                    header: void 0,
                                    list: l.all
                                }, {
                                    header: l.early && "Early game",
                                    badge: "0-12 min",
                                    list: l.early
                                }, {
                                    header: l.mid && "Mid game",
                                    badge: "12-30 min",
                                    list: l.mid
                                }, {
                                    header: l.late && "Late game",
                                    badge: ">30 min",
                                    list: l.late
                                }]
                            }
                        }(n, s[n]) : void 0;
                        var n
                    },
                    enumerable: !0,
                    configurable: !0
                }), n
            }(),
            d = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".zone[_ngcontent-%COMP%]{margin-bottom:5px}.zone__header[_ngcontent-%COMP%]{color:#fff;font-size:13px;font-weight:700;background-color:#131313;padding:10px 13px}.zone__description[_ngcontent-%COMP%]{background-color:#171717;padding:10px;color:#fff;font-size:13px;font-weight:300}.zone__list[_ngcontent-%COMP%]{margin:0;padding:0}.zone__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none;margin:0}.zone__title[_ngcontent-%COMP%]{font-size:9px;font-weight:700;text-transform:uppercase;margin-bottom:7px}.zone__badge[_ngcontent-%COMP%]{text-transform:lowercase}"]],
                data: {}
            });
        function p(n) {
            return t["\u0275vid"](2, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "div", [["class", "zone"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 2, "div", [["class", "zone__header"]], null, null, null, null, null)), (n()(), t["\u0275ted"](2, null, ["", ""])), t["\u0275pid"](131072, a.TranslatePipe, [a.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                n(l, 2, 0, t["\u0275unv"](l, 2, 0, t["\u0275nov"](l, 3).transform("MATCH.ZONE_WILL_BE_ADDED")))
            })
        }
        var _ = function() {
                function n() {}
                return n.prototype.transform = function(n) {
                    var l = n && n.performance <= 0 ? "#db4000" : n && Math.abs(n.performance - 1) < .001 ? void 0 : "#5ce195";
                    return l ? {
                        color: l
                    } : void 0
                }, n
            }(),
            f = e("eZrl"),
            g = e("d+rO"),
            m = e("EGkj"),
            h = e("Zm3b"),
            v = e("Z/LD"),
            x = e("uQDU"),
            y = e("YI7S"),
            b = function() {
                function n(n) {
                    this.match = n, this.isActive = !1
                }
                return Object.defineProperty(n.prototype, "killedBy", {
                    get: function() {
                        var n = this.observer.killer_slot;
                        return null === n ? void 0 : this.match.matchData$.getValue().match.players[n]
                    },
                    enumerable: !0,
                    configurable: !0
                }), n
            }(),
            O = t["\u0275crt"]({
                encapsulation: 0,
                styles: [[".observer[_ngcontent-%COMP%]{margin-bottom:5px}.observer__header[_ngcontent-%COMP%]{padding:10px;background-color:#232323;color:#fff;font-size:13px;font-weight:700;display:flex;align-items:center;cursor:pointer}.observer__heading_right[_ngcontent-%COMP%]{margin-left:auto}.observer__header[_ngcontent-%COMP%]:hover, .observer_active[_ngcontent-%COMP%]   .observer__header[_ngcontent-%COMP%]{background-color:#131313}.observer__content[_ngcontent-%COMP%]{background-color:#171717;padding:5px 10px 0;display:flex;flex-wrap:wrap}.observer__data[_ngcontent-%COMP%]{width:50%;flex-shrink:0;flex-grow:0;display:flex;align-items:center;margin-bottom:10px;box-sizing:border-box}.observer__data[_ngcontent-%COMP%]:nth-child(2n+2){padding-left:10px}.observer__data_default[_ngcontent-%COMP%]{color:#c7846b}.observer__data_success[_ngcontent-%COMP%]{color:#53e29f}.observer__data_fail[_ngcontent-%COMP%]{color:#d02a05}.observer__col[_ngcontent-%COMP%]{font-size:11px;font-weight:300;line-height:11px}.observer__col[_ngcontent-%COMP%]:first-child{font-size:24px;line-height:initial;font-weight:700;margin-right:5px}.observer__col[_ngcontent-%COMP%]:first-child   img[_ngcontent-%COMP%]{display:block}.observer__col[_ngcontent-%COMP%]:nth-child(2){word-break:break-word}.observer__hero[_ngcontent-%COMP%]{width:25px;height:25px;border-radius:50%}.observer__tooltip[_ngcontent-%COMP%]{margin-left:10px;text-align:center;line-height:13px;width:13px;font-size:8px;background-color:#f8c018;color:#000;border-radius:50%;cursor:help}"]],
                data: {}
            });
        function C(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "div", [["class", "observer__data observer__data_success"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 1, "div", [["class", "observer__col"]], null, null, null, null, null)), (n()(), t["\u0275ted"](2, null, ["", ""])), (n()(), t["\u0275eld"](3, 0, null, null, 1, "div", [["class", "observer__col"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, a.TranslatePipe, [a.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                n(l, 2, 0, l.component.observer.deaths_count), n(l, 3, 0, t["\u0275unv"](l, 3, 0, t["\u0275nov"](l, 4).transform("MATCH.KILLED_HEROES")))
            })
        }
        function T(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 9, "div", [["class", "observer__data observer__data_fail"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 4, "div", [["class", "observer__col"]], null, null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 3, "img", [["class", "observer__hero"]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), t["\u0275ppd"](3, 2), t["\u0275ppd"](4, 1), t["\u0275ppd"](5, 2), (n()(), t["\u0275eld"](6, 0, null, null, 3, "div", [["class", "observer__col"]], null, null, null, null, null)), (n()(), t["\u0275ted"](7, null, ["", " ", ""])), t["\u0275pid"](131072, a.TranslatePipe, [a.TranslateService, t.ChangeDetectorRef]), t["\u0275ppd"](9, 2)], null, function(n, l) {
                var e = l.component,
                    a = t["\u0275unv"](l, 2, 0, n(l, 4, 0, t["\u0275nov"](l.parent.parent, 4), t["\u0275unv"](l, 2, 0, n(l, 3, 0, t["\u0275nov"](l.parent.parent, 5), e.killedBy.hero_id, "name")))),
                    i = t["\u0275unv"](l, 2, 1, n(l, 5, 0, t["\u0275nov"](l.parent.parent, 5), e.killedBy.hero_id, "localized_name"));
                n(l, 2, 0, a, i);
                var u = t["\u0275unv"](l, 7, 0, t["\u0275nov"](l, 8).transform("MATCH.KILLED_BY")),
                    r = t["\u0275unv"](l, 7, 1, n(l, 9, 0, t["\u0275nov"](l.parent.parent, 5), e.killedBy.hero_id, "localized_name"));
                n(l, 7, 0, u, r)
            })
        }
        function P(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 5, "div", [["class", "observer__data observer__data_fail"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 2, "div", [["class", "observer__col"]], null, null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 1, "img", [["alt", "Death"], ["class", "observer__hero"]], [[8, "src", 4]], null, null, null, null)), t["\u0275ppd"](3, 1), (n()(), t["\u0275eld"](4, 0, null, null, 1, "div", [["class", "observer__col"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, a.TranslatePipe, [a.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                var e = t["\u0275unv"](l, 2, 0, n(l, 3, 0, t["\u0275nov"](l.parent.parent, 6), "/assets/images/rakal.png"));
                n(l, 2, 0, e), n(l, 4, 0, t["\u0275unv"](l, 4, 0, t["\u0275nov"](l, 5).transform("MATCH.SET_BEFORE_YOUR_DEATH")))
            })
        }
        function M(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 5, "div", [["class", "observer__data observer__data_default"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 2, "div", [["class", "observer__col"]], null, null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 1, "img", [["alt", "Smoke of Deceit"], ["class", "observer__hero"]], [[8, "src", 4]], null, null, null, null)), t["\u0275ppd"](3, 1), (n()(), t["\u0275eld"](4, 0, null, null, 1, "div", [["class", "observer__col"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, a.TranslatePipe, [a.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                var e = t["\u0275unv"](l, 2, 0, n(l, 3, 0, t["\u0275nov"](l.parent.parent, 6), "/assets/images/smoke.png"));
                n(l, 2, 0, e), n(l, 4, 0, t["\u0275unv"](l, 4, 0, t["\u0275nov"](l, 5).transform("MATCH.WITH_SMOKE_OF")))
            })
        }
        function R(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 23, "div", [["class", "observer__content"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 7, "div", [["class", "observer__data observer__data_success"]], null, null, null, null, null)), t["\u0275did"](2, 278528, null, 0, i.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), t["\u0275ppd"](3, 1), (n()(), t["\u0275eld"](4, 0, null, null, 2, "div", [["class", "observer__col"]], null, null, null, null, null)), (n()(), t["\u0275ted"](5, null, ["", ""])), t["\u0275ppd"](6, 1), (n()(), t["\u0275eld"](7, 0, null, null, 1, "div", [["class", "observer__col"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, a.TranslatePipe, [a.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](9, 0, null, null, 6, "div", [["class", "observer__data observer__data_success"]], null, null, null, null, null)), (n()(), t["\u0275eld"](10, 0, null, null, 3, "div", [["class", "observer__col"]], null, null, null, null, null)), (n()(), t["\u0275ted"](11, null, ["", "", ""])), t["\u0275ppd"](12, 2), t["\u0275pid"](131072, a.TranslatePipe, [a.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](14, 0, null, null, 1, "div", [["class", "observer__col"]], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, a.TranslatePipe, [a.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275and"](16777216, null, null, 1, null, C)), t["\u0275did"](17, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, T)), t["\u0275did"](19, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, P)), t["\u0275did"](21, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, M)), t["\u0275did"](23, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                var e = l.component,
                    a = t["\u0275unv"](l, 2, 0, n(l, 3, 0, t["\u0275nov"](l.parent, 0), e.observer));
                n(l, 2, 0, a), n(l, 17, 0, e.observer.deaths_count), n(l, 19, 0, e.killedBy), n(l, 21, 0, e.observer.placed_before_death), n(l, 23, 0, e.observer.in_smoke)
            }, function(n, l) {
                var e = l.component,
                    a = t["\u0275unv"](l, 5, 0, n(l, 6, 0, t["\u0275nov"](l.parent, 3), e.observer.performance || 0));
                n(l, 5, 0, a), n(l, 7, 0, t["\u0275unv"](l, 7, 0, t["\u0275nov"](l, 8).transform("MATCH.WARD_QUALITY")));
                var i = t["\u0275unv"](l, 11, 0, n(l, 12, 0, t["\u0275nov"](l.parent, 3), e.observer.death_time - e.observer.place_time, 0));
                n(l, 11, 0, i, t["\u0275unv"](l, 11, 1, t["\u0275nov"](l, 13).transform("COMMON.SECOND_CHAR"))), n(l, 14, 0, t["\u0275unv"](l, 14, 0, t["\u0275nov"](l, 15).transform("MATCH.WARD_LIFETIME")))
            })
        }
        function I(n) {
            return t["\u0275vid"](0, [t["\u0275pid"](0, _, []), t["\u0275pid"](0, f.DateFormatPipe, []), t["\u0275pid"](0, g.FromUnixPipe, []), t["\u0275pid"](0, m.a, []), t["\u0275pid"](0, h.a, []), t["\u0275pid"](0, v.a, []), t["\u0275pid"](0, x.a, []), (n()(), t["\u0275eld"](7, 0, null, null, 26, "div", [["class", "observer"]], null, null, null, null, null)), t["\u0275did"](8, 278528, null, 0, i.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (n()(), t["\u0275eld"](9, 0, null, null, 22, "div", [["class", "observer__header"]], null, null, null, null, null)), (n()(), t["\u0275eld"](10, 0, null, null, 6, "span", [["class", "observer__heading observer__heading_left"]], null, null, null, null, null)), (n()(), t["\u0275eld"](11, 0, null, null, 3, "span", [], null, null, null, null, null)), t["\u0275did"](12, 278528, null, 0, i.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), t["\u0275ppd"](13, 1), (n()(), t["\u0275ted"](14, null, ["", "."])), (n()(), t["\u0275ted"](15, null, [" ", ""])), t["\u0275pid"](131072, a.TranslatePipe, [a.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](17, 0, null, null, 10, "span", [["class", "observer__heading observer__heading_right"]], null, null, null, null, null)), (n()(), t["\u0275eld"](18, 0, null, null, 3, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](19, null, ["", ""])), t["\u0275ppd"](20, 1), t["\u0275ppd"](21, 2), (n()(), t["\u0275eld"](22, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" \u2014 "])), (n()(), t["\u0275eld"](24, 0, null, null, 3, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](25, null, ["", ""])), t["\u0275ppd"](26, 1), t["\u0275ppd"](27, 2), (n()(), t["\u0275eld"](28, 0, null, null, 3, "div", [["class", "observer__tooltip"], ["gosuTooltip", ""], ["modificator", "lg"]], null, [[null, "mouseenter"], [null, "mouseleave"]], function(n, l, e) {
                var a = !0;
                return "mouseenter" === l && (a = !1 !== t["\u0275nov"](n, 29).onMouseEnter() && a), "mouseleave" === l && (a = !1 !== t["\u0275nov"](n, 29).onMouseLeave() && a), a
            }, null, null)), t["\u0275did"](29, 16384, null, 0, r.a, [o.a, t.ElementRef], {
                tooltipText: [0, "tooltipText"],
                modificator: [1, "modificator"]
            }, null), t["\u0275pid"](131072, a.TranslatePipe, [a.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275ted"](-1, null, [" ? "])), (n()(), t["\u0275and"](16777216, null, null, 1, null, R)), t["\u0275did"](33, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 8, 0, "observer", e.isActive ? "observer_active" : "");
                var a = t["\u0275unv"](l, 12, 0, n(l, 13, 0, t["\u0275nov"](l, 0), e.observer));
                n(l, 12, 0, a), n(l, 29, 0, t["\u0275unv"](l, 29, 0, t["\u0275nov"](l, 30).transform("MATCH.GOSU_TOOLTIP")), "lg"), n(l, 33, 0, e.isActive)
            }, function(n, l) {
                var e = l.component;
                n(l, 14, 0, e.idx + 1), n(l, 15, 0, t["\u0275unv"](l, 15, 0, t["\u0275nov"](l, 16).transform("MATCH.OBSERVER_HEADER")));
                var a = t["\u0275unv"](l, 19, 0, n(l, 21, 0, t["\u0275nov"](l, 1), t["\u0275unv"](l, 19, 0, n(l, 20, 0, t["\u0275nov"](l, 2), e.observer.place_time)), "m:ss"));
                n(l, 19, 0, a);
                var i = t["\u0275unv"](l, 25, 0, n(l, 27, 0, t["\u0275nov"](l, 1), t["\u0275unv"](l, 25, 0, n(l, 26, 0, t["\u0275nov"](l, 2), e.observer.death_time)), "m:ss"));
                n(l, 25, 0, i)
            })
        }
        var w = e("iXb4"),
            A = e("bse0"),
            k = e("mrSG"),
            D = e("K9Ia"),
            E = e("pugT"),
            S = e("wd/R"),
            N = e("2fsI"),
            L = e("4jaM"),
            H = e("3n8S"),
            F = e("9Bjs"),
            V = e("t9fZ"),
            j = function() {
                function n(n, l) {
                    this.warding = n, this.ngZone = l, this.isPatchGapClosed = !1, this.draw$ = new D.a, this.subscription = new E.a
                }
                return Object.defineProperty(n.prototype, "observers", {
                    set: function(n) {
                        this.observerList = n.slice(), this.areaObservers = n.reduce(function(n, l) {
                            var e;
                            return k.__assign({}, n, ((e = {})[l.area_id] = n[l.area_id] ? n[l.area_id].concat([l]) : [l], e))
                        }, {}), this.draw$.next()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "mapElementRef", {
                    set: function(n) {
                        this.mapElement = n.nativeElement
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "is720Patch", {
                    get: function() {
                        return S.utc("2018-11-19 19:00:00").unix() <= this.matchDate
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.ngOnInit = function() {
                    var n = this;
                    this.subscription.add(this.warding.observer$.subscribe(function(l) {
                        return n.selectedObserver = n.observerList.indexOf(l)
                    })), this.subscription.add(this.draw$.subscribe(this.draw.bind(this)))
                }, n.prototype.ngAfterContentInit = function() {
                    var n = this;
                    this.subscription.add(this.ngZone.onStable.pipe(Object(V.a)(1)).subscribe(function() {
                        n.draw()
                    }))
                }, n.prototype.ngOnDestroy = function() {
                    this.subscription.unsubscribe()
                }, n.prototype.onClickObserver = function(n) {
                    this.selectedObserver = n, this.warding.selectObserver(this.observerList[n])
                }, n.prototype.draw = function() {
                    var n = this;
                    this.defineSizes(), Object(N.d)(this.mapElement).selectAll("svg").remove(), this.d3MapElement = Object(N.d)(this.mapElement).append("svg:svg").attr("width", this.width).attr("height", this.height), this.drawAreas(), this.prepareObservers(), this.subscription.add(this.warding.zone$.subscribe(function(l) {
                        l && (n.selectedObserver = void 0), n.d3MapElement.selectAll("polygon").attr("class", function(e) {
                            return "map__area" + (l && l === e.areaId ? " map__area_selected" : "") + (n.areaObservers[e.areaId] ? " map__area_observable" : "")
                        })
                    }))
                }, n.prototype.defineSizes = function() {
                    this.width = this.mapElement.offsetWidth, this.height = this.mapElement.offsetHeight, this.scale = {
                        x: Object(L.a)().domain([64, 191]).range([0, this.width]),
                        y: Object(L.a)().domain([191, 64]).range([0, this.height])
                    }
                }, n.prototype.drawAreas = function() {
                    var n = this,
                        l = Object.keys(H.a).reduce(function(n, l) {
                            return n.push({
                                areaId: l,
                                vector: H.a[l]
                            }), n
                        }, []).sort(function(n, l) {
                            return G(l.vector) - G(n.vector)
                        });
                    this.d3MapElement.selectAll("polygon").data(l).enter().append("polygon").attr("points", function(l) {
                        return l.vector.map(function(l) {
                            var e = l.y;
                            return n.scale.x(l.x) + "," + n.scale.y(e)
                        }).join(" ")
                    }).on("click", function(l) {
                        return n.warding.selectZone(l.areaId)
                    })
                }, n.prototype.prepareObservers = function() {
                    var n = this;
                    this.viewObservers = this.observerList.map(function(l) {
                        return k.__assign({}, l, {
                            x: n.scale.x(l.x),
                            y: n.scale.y(l.y)
                        })
                    })
                }, n
            }();
        function G(n) {
            return Math.abs(n.slice(0, n.length - 1).reduce(function(l, e, t) {
                return l + (e.x * n[t + 1].y - e.y * n[t + 1].x)
            }, 0)) / 2
        }
        var $ = t["\u0275crt"]({
            encapsulation: 2,
            styles: [[".map{margin-left:20px;box-sizing:border-box;position:relative}.map__patch-gap{top:0;left:0;z-index:4;width:100%;height:100%;display:flex;position:absolute;align-items:center;flex-direction:column;justify-content:center;background-color:rgba(0,0,0,.8)}.map__patch-gap-text{width:365px;color:#fbbf00;font-size:28px;font-weight:700;line-height:30px;text-align:center}.map__patch-gap-close{width:28px;height:28px;display:block;cursor:pointer;position:absolute;top:25px;right:25px;background:url(/dota/analysis/./static/assets/icons/flat-close.svg) center/cover no-repeat}.map__patch-gap-close:hover{opacity:.7}.map__patch-gap-warning{margin-bottom:5px}.map__bg{width:100%;height:0;padding-bottom:100%;display:block}.map__ui{position:absolute;top:0;left:0;width:100%;height:100%}.map__area{fill:#d9c7c0;opacity:.7;cursor:pointer;transition:opacity 150ms ease}.map__area:hover{opacity:.95}.map__area_observable{fill:#53e29f;opacity:.75}.map__area_selected{fill:#0062ff}.map__area_selected:hover{opacity:.7}.map__observer{position:absolute;width:34px;height:48px;text-align:center;font-size:18px;font-weight:700;color:#fff;margin-top:-48px;margin-left:-17px;cursor:pointer;overflow:hidden}.map__observer_selected{z-index:1}.map__marker{position:absolute;left:0;top:0;color:#000;font-size:40px;margin-left:-4px}.map__marker_selected{color:#0062ff!important;z-index:1}.map__marker_selected+.map__marker-text{z-index:1}.map__marker-text{position:relative;top:12px}@media screen and (max-width:1024px){.map{margin:0 -20px}}"]],
            data: {}
        });
        function z(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 8, "div", [["class", "map__observer"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.onClickObserver(n.context.index) && t), t
            }, null, null)), t["\u0275did"](1, 278528, null, 0, i.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), t["\u0275pod"](2, {
                left: 0,
                top: 1
            }), (n()(), t["\u0275eld"](3, 0, null, null, 3, "i", [["class", "map__marker gosu-icon-marker"]], null, null, null, null, null)), t["\u0275did"](4, 278528, null, 0, i.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), t["\u0275did"](5, 278528, null, 0, i.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                ngStyle: [0, "ngStyle"]
            }, null), t["\u0275ppd"](6, 1), (n()(), t["\u0275eld"](7, 0, null, null, 1, "span", [["class", "map__marker-text"]], null, null, null, null, null)), (n()(), t["\u0275ted"](8, null, ["", ""]))], function(n, l) {
                var e = l.component,
                    a = n(l, 2, 0, l.context.$implicit.x + "px", l.context.$implicit.y + "px");
                n(l, 1, 0, a), n(l, 4, 0, "map__marker gosu-icon-marker", e.selectedObserver === l.context.index ? "map__marker_selected" : "");
                var i = t["\u0275unv"](l, 5, 0, n(l, 6, 0, t["\u0275nov"](l.parent, 0), l.context.$implicit));
                n(l, 5, 0, i)
            }, function(n, l) {
                n(l, 8, 0, l.context.index + 1)
            })
        }
        function U(n) {
            return t["\u0275vid"](0, [t["\u0275pid"](0, _, []), t["\u0275qud"](402653184, 1, {
                mapElementRef: 0
            }), (n()(), t["\u0275eld"](2, 0, null, null, 5, "div", [["class", "map"]], null, null, null, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 1, "div", [["class", "map__bg"]], null, null, null, null, null)), t["\u0275did"](4, 278528, null, 0, i.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (n()(), t["\u0275eld"](5, 0, [[1, 0], ["map", 1]], null, 0, "div", [["class", "map__ui"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, z)), t["\u0275did"](7, 278528, null, 0, i.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 4, 0, "map__bg", e.is720Patch ? "icon-gosu-minimap720" : "icon-gosu-minimap"), n(l, 7, 0, e.viewObservers)
            }, null)
        }
        var W = e("iFu3"),
            Y = e("L2wq"),
            K = e("RTd+"),
            B = e("cvA/"),
            Z = e("E/eG"),
            X = e("CMaV");
        e("Ygy7"), e.d(l, "a", function() {
            return q
        }), e.d(l, "b", function() {
            return rn
        });
        var q = t["\u0275crt"]({
            encapsulation: 0,
            styles: [[".warding[_ngcontent-%COMP%]{width:100%;margin:30px auto 0}.warding__header[_ngcontent-%COMP%]{display:flex;align-items:center}.warding__content[_ngcontent-%COMP%]{padding-bottom:60px}.warding__icon[_ngcontent-%COMP%]{margin-left:15px;display:inline-block}.warding__summary[_ngcontent-%COMP%]{padding-top:25px;display:flex;padding-bottom:15px;border-bottom:2px solid #4a4a4a}.warding__summary-item[_ngcontent-%COMP%]{flex-grow:0;margin-right:30px}.warding__summary-item[_ngcontent-%COMP%]:last-child{margin-right:0}.warding__summary-performance[_ngcontent-%COMP%]{margin-left:auto;align-self:center;font-size:60px;font-weight:700}.warding__heading[_ngcontent-%COMP%]{font-size:32px;font-weight:700;line-height:32px;margin-bottom:1px}.warding__heading_default[_ngcontent-%COMP%]{color:#c7846b}.warding__heading_success[_ngcontent-%COMP%]{color:#53e29f}.warding__heading_fail[_ngcontent-%COMP%]{color:#d02a05}.warding__desc[_ngcontent-%COMP%]{font-size:13px;font-weight:300;line-height:15px;color:#fff;width:90px}.warding__details[_ngcontent-%COMP%]{margin-top:25px;display:flex}.warding__observers[_ngcontent-%COMP%]{width:240px;flex-shrink:0;max-height:580px;overflow:hidden}.warding__map[_ngcontent-%COMP%]{width:100%}.warding__tooltip[_ngcontent-%COMP%]{align-self:flex-start;margin-top:10px;text-align:center;line-height:13px;width:13px;font-size:8px;background-color:#f8c018;color:#000;border-radius:50%;cursor:help}@media screen and (max-width:1024px){.warding[_ngcontent-%COMP%]{margin-top:15px}.warding__content[_ngcontent-%COMP%]{padding-bottom:35px}.warding__summary[_ngcontent-%COMP%]{display:none}.warding__details[_ngcontent-%COMP%]{flex-direction:column-reverse;margin-top:0;position:relative}.warding__observers[_ngcontent-%COMP%]{margin-top:25px;width:100%}}.mock[_ngcontent-%COMP%]{position:relative}.mock__text[_ngcontent-%COMP%]{position:absolute;top:300px;left:210px;color:#fff}.mock__image[_ngcontent-%COMP%]{width:100%;height:100%}"]],
            data: {}
        });
        function Q(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 5, "div", [["class", "warding__summary-item"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 1, "div", [], [[8, "className", 0]], null, null, null, null)), (n()(), t["\u0275ted"](2, null, ["", ""])), (n()(), t["\u0275eld"](3, 0, null, null, 2, "div", [["class", "warding__desc"]], null, null, null, null, null)), (n()(), t["\u0275ted"](4, null, ["", ""])), t["\u0275pid"](131072, a.TranslatePipe, [a.TranslateService, t.ChangeDetectorRef])], null, function(n, l) {
                n(l, 1, 0, t["\u0275inlineInterpolate"](1, "warding__heading warding__heading_", l.context.$implicit.modificator, "")), n(l, 2, 0, l.context.$implicit.header), n(l, 4, 0, t["\u0275unv"](l, 4, 0, t["\u0275nov"](l, 5).transform(l.context.$implicit.i18nKey)))
            })
        }
        function J(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 9, "div", [["class", "warding__summary"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, Q)), t["\u0275did"](2, 278528, null, 0, i.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(), t["\u0275eld"](3, 0, null, null, 2, "div", [["class", "warding__summary-performance"]], [[4, "color", null]], null, null, null, null)), t["\u0275did"](4, 16384, null, 0, u.a, [], {
                rate: [0, "rate"]
            }, null), (n()(), t["\u0275ted"](5, null, ["", "%"])), (n()(), t["\u0275eld"](6, 0, null, null, 3, "div", [["class", "warding__tooltip"], ["gosuTooltip", ""]], null, [[null, "mouseenter"], [null, "mouseleave"]], function(n, l, e) {
                var a = !0;
                return "mouseenter" === l && (a = !1 !== t["\u0275nov"](n, 7).onMouseEnter() && a), "mouseleave" === l && (a = !1 !== t["\u0275nov"](n, 7).onMouseLeave() && a), a
            }, null, null)), t["\u0275did"](7, 16384, null, 0, r.a, [o.a, t.ElementRef], {
                tooltipText: [0, "tooltipText"]
            }, null), t["\u0275pid"](131072, a.TranslatePipe, [a.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275ted"](-1, null, [" ? "]))], function(n, l) {
                var e = l.component;
                n(l, 2, 0, e.summary), n(l, 4, 0, 100 - e.performance), n(l, 7, 0, t["\u0275unv"](l, 7, 0, t["\u0275nov"](l, 8).transform("MATCH.GOSU_WARDING_TOOLTIP")))
            }, function(n, l) {
                var e = l.component;
                n(l, 3, 0, t["\u0275nov"](l, 4).hostColor), n(l, 5, 0, e.performance)
            })
        }
        function nn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "div", [["class", "warding__zone"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 2, "gosu-match-warding-zone", [], null, null, null, p, d)), t["\u0275did"](2, 49152, null, 0, c, [], {
                zone: [0, "zone"]
            }, null), t["\u0275pid"](131072, i.AsyncPipe, [t.ChangeDetectorRef])], function(n, l) {
                var e = l.component;
                n(l, 2, 0, t["\u0275unv"](l, 2, 0, t["\u0275nov"](l, 3).transform(e.selectedZone$)))
            }, null)
        }
        function ln(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "div", [["class", "warding__zone"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 1, "gosu-match-warding-zone", [], null, null, null, p, d)), t["\u0275did"](2, 49152, null, 0, c, [], {
                zone: [0, "zone"]
            }, null)], function(n, l) {
                n(l, 2, 0, l.parent.context.$implicit.area_id)
            }, null)
        }
        function en(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 7, "div", [["class", "warding__item"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 3, "div", [["class", "warding__observer"]], null, null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 2, "gosu-match-warding-observer", [], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                return "click" === l && (t = !1 !== n.component.selectObserver(n.context.$implicit) && t), t
            }, I, O)), t["\u0275did"](3, 49152, null, 0, b, [y.a], {
                observer: [0, "observer"],
                idx: [1, "idx"],
                isActive: [2, "isActive"]
            }, null), t["\u0275pid"](131072, i.AsyncPipe, [t.ChangeDetectorRef]), (n()(), t["\u0275and"](16777216, null, null, 2, null, ln)), t["\u0275did"](6, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), t["\u0275pid"](131072, i.AsyncPipe, [t.ChangeDetectorRef])], function(n, l) {
                var e = l.component;
                n(l, 3, 0, l.context.$implicit, l.context.index, t["\u0275unv"](l, 3, 2, t["\u0275nov"](l, 4).transform(e.selectedObserver$)) === l.context.$implicit), n(l, 6, 0, t["\u0275unv"](l, 6, 0, t["\u0275nov"](l, 7).transform(e.selectedObserver$)) === l.context.$implicit && l.context.$implicit.area_id)
            }, null)
        }
        function tn(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 6, "perfect-scrollbar", [], [[2, "ps-show-limits", null], [2, "ps-show-active", null]], null, null, w.b, w.a)), t["\u0275did"](1, 507904, null, 0, A.b, [t.NgZone, t.ChangeDetectorRef, t.PLATFORM_ID], null, null), (n()(), t["\u0275and"](16777216, null, 0, 2, null, nn)), t["\u0275did"](3, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), t["\u0275pid"](131072, i.AsyncPipe, [t.ChangeDetectorRef]), (n()(), t["\u0275and"](16777216, null, 0, 1, null, en)), t["\u0275did"](6, 278528, null, 0, i.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 1, 0), n(l, 3, 0, t["\u0275unv"](l, 3, 0, t["\u0275nov"](l, 4).transform(e.selectedZone$))), n(l, 6, 0, (null == e.data ? null : e.data.observer_log) || t["\u0275EMPTY_ARRAY"])
            }, function(n, l) {
                n(l, 0, 0, t["\u0275nov"](l, 1).autoPropagation, t["\u0275nov"](l, 1).scrollIndicators)
            })
        }
        function an(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "gosu-match-warding-map", [["content-premium", "real"]], null, null, null, U, $)), t["\u0275did"](1, 1294336, null, 0, j, [F.a, t.NgZone], {
                matchDate: [0, "matchDate"],
                observers: [1, "observers"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 1, 0, e.matchDate, (null == e.data ? null : e.data.observer_log) || t["\u0275EMPTY_ARRAY"])
            }, null)
        }
        function un(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 23, "div", [["class", "warding"]], [[8, "id", 0]], null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 22, "gosu-match-section", [], null, null, null, W.b, W.a)), t["\u0275did"](2, 49152, null, 0, Y.a, [K.a, y.a], {
                rate: [0, "rate"],
                shield: [1, "shield"]
            }, null), (n()(), t["\u0275eld"](3, 0, null, 0, 3, "h2", [["class", "warding__header"], ["section-title", ""]], null, null, null, null, null)), (n()(), t["\u0275eld"](4, 0, null, null, 1, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275pid"](131072, a.TranslatePipe, [a.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](6, 0, null, null, 0, "span", [["class", "warding__icon icon-ward-icon"]], null, null, null, null, null)), (n()(), t["\u0275eld"](7, 0, null, 2, 16, "div", [["class", "warding__content"], ["section-content", ""]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, J)), t["\u0275did"](9, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](10, 0, null, null, 13, "div", [["class", "warding__details"]], null, null, null, null, null)), (n()(), t["\u0275eld"](11, 0, null, null, 2, "div", [["class", "warding__observers"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, tn)), t["\u0275did"](13, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](14, 0, null, null, 9, "div", [["class", "warding__map"]], null, null, null, null, null)), (n()(), t["\u0275eld"](15, 0, null, null, 8, "gosu-premium-content", [], null, null, null, B.b, B.a)), t["\u0275did"](16, 114688, null, 0, Z.a, [X.a], {
                block: [0, "block"]
            }, null), (n()(), t["\u0275and"](16777216, null, 1, 1, null, an)), t["\u0275did"](18, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](19, 0, null, 0, 4, "div", [["class", "mock"], ["content-premium", "mock"]], null, null, null, null, null)), (n()(), t["\u0275eld"](20, 0, null, null, 1, "div", [["class", "mock__text"]], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["That is a mock data, sorry :("])), (n()(), t["\u0275eld"](22, 0, null, null, 1, "img", [["alt", "warding mock image"], ["class", "mock__image"]], [[8, "src", 4]], null, null, null, null)), t["\u0275ppd"](23, 1)], function(n, l) {
                var e = l.component;
                n(l, 2, 0, e.sectionMap.warding, e.data.summary.shield), n(l, 9, 0, !e.isEmpty), n(l, 13, 0, e.isBrowser), n(l, 16, 0, e.sectionMap.warding.key), n(l, 18, 0, e.isBrowser)
            }, function(n, l) {
                var e = l.component;
                n(l, 0, 0, (null == e.data ? null : e.data.name) || "warding"), n(l, 4, 0, t["\u0275unv"](l, 4, 0, t["\u0275nov"](l, 5).transform("MATCH.WARDING_TITLE")));
                var a = t["\u0275unv"](l, 22, 0, n(l, 23, 0, t["\u0275nov"](l.parent, 0), "/assets/images/warding.png"));
                n(l, 22, 0, a)
            })
        }
        function rn(n) {
            return t["\u0275vid"](0, [t["\u0275pid"](0, x.a, []), (n()(), t["\u0275and"](16777216, null, null, 1, null, un)), t["\u0275did"](2, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 2, 0, !e.data || e.data.data)
            }, null)
        }
    },
    "cvA/": function(n, l, e) {
        "use strict";
        var t = e("CcnG"),
            a = e("A7o+"),
            i = e("ZYCi"),
            u = e("Ip0R"),
            r = e("iia2"),
            o = e("42t3");
        e("E/eG"), e("CMaV"), e.d(l, "a", function() {
            return s
        }), e.d(l, "b", function() {
            return p
        });
        var s = t["\u0275crt"]({
            encapsulation: 0,
            styles: [[".premium[_ngcontent-%COMP%]{display:block;position:relative}.premium__gap[_ngcontent-%COMP%]{justify-content:center;flex-direction:column;align-items:center;position:absolute;display:flex;height:100%;width:100%;z-index:1;left:0;top:0}.premium__gap-text[_ngcontent-%COMP%]{margin:10px 0 20px;text-align:center;line-height:29px;font-size:24px;color:#fff;width:260px}.premium__gap-text_small[_ngcontent-%COMP%]{line-height:1;margin:15px 0 0;font-size:18px;width:190px;opacity:.7;font-weight:300}.premium__gap[_ngcontent-%COMP%] + .premium__content[_ngcontent-%COMP%]{-webkit-filter:blur(10px);filter:blur(10px)}.premium[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{text-transform:none;line-height:39px;font-size:15px}.premium[_ngcontent-%COMP%]   .icon-lock[_ngcontent-%COMP%]{height:30px;width:30px}"]],
            data: {}
        });
        function c(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 12, "div", [["class", "premium__wrapper"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 9, "div", [["class", "premium__gap"]], null, null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 0, "i", [["class", "icon-lock"]], null, null, null, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 2, "p", [["class", "premium__gap-text"]], null, null, null, null, null)), (n()(), t["\u0275ted"](4, null, ["", ""])), t["\u0275pid"](131072, a.TranslatePipe, [a.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](6, 0, null, null, 4, "a", [], [[8, "className", 0], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function(n, l, e) {
                var a = !0;
                return "click" === l && (a = !1 !== t["\u0275nov"](n, 7).onClick(e.button, e.ctrlKey, e.metaKey, e.shiftKey) && a), a
            }, null, null)), t["\u0275did"](7, 671744, null, 0, i.RouterLinkWithHref, [i.Router, i.ActivatedRoute, u.LocationStrategy], {
                routerLink: [0, "routerLink"]
            }, null), t["\u0275pid"](131072, r.LocalizeRouterPipe, [o.LocalizeRouterService, t.ChangeDetectorRef]), (n()(), t["\u0275ted"](9, null, ["", ""])), t["\u0275pid"](131072, a.TranslatePipe, [a.TranslateService, t.ChangeDetectorRef]), (n()(), t["\u0275eld"](11, 0, null, null, 1, "div", [["class", "premium__content"]], null, null, null, null, null)), t["\u0275ncd"](null, 0)], function(n, l) {
                n(l, 7, 0, t["\u0275unv"](l, 7, 0, t["\u0275nov"](l, 8).transform("/payment")))
            }, function(n, l) {
                var e = l.component;
                n(l, 4, 0, t["\u0275unv"](l, 4, 0, t["\u0275nov"](l, 5).transform(e.gapI18nText))), n(l, 6, 0, t["\u0275inlineInterpolate"](1, "logs__premium_", e.block, " btn btn_primary btn_rounded"), t["\u0275nov"](l, 7).target, t["\u0275nov"](l, 7).href), n(l, 9, 0, t["\u0275unv"](l, 9, 0, t["\u0275nov"](l, 10).transform("MATCH.GO_PREMIUM_ADVICE")))
            })
        }
        function d(n) {
            return t["\u0275vid"](0, [t["\u0275ncd"](null, 1), (n()(), t["\u0275and"](0, null, null, 0))], null, null)
        }
        function p(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "div", [["class", "premium"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 2, null, c)), t["\u0275did"](2, 16384, null, 0, u.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"],
                ngIfElse: [1, "ngIfElse"]
            }, null), t["\u0275pid"](131072, u.AsyncPipe, [t.ChangeDetectorRef]), (n()(), t["\u0275and"](0, [["premiumblock", 2]], null, 0, null, d))], function(n, l) {
                var e = l.component;
                n(l, 2, 0, t["\u0275unv"](l, 2, 0, t["\u0275nov"](l, 3).transform(e.displayGap$)), t["\u0275nov"](l, 4))
            }, null)
        }
    },
    dMgE: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        var t = function() {
            return function() {}
        }()
    },
    iFu3: function(n, l, e) {
        "use strict";
        var t = e("CcnG"),
            a = e("A7o+"),
            i = e("6guK"),
            u = e("Fhgx"),
            r = e("Ip0R"),
            o = e("PZyQ"),
            s = e("Arey"),
            c = e("CMaV"),
            d = e("Km7r"),
            p = e("QoFZ"),
            _ = e("OPpi"),
            f = e("ZYjt"),
            g = e("bwpd"),
            m = e("Ty6Q"),
            h = e("BpIG");
        e("L2wq"), e("RTd+"), e("YI7S"), e.d(l, "a", function() {
            return v
        }), e.d(l, "b", function() {
            return O
        });
        var v = t["\u0275crt"]({
            encapsulation: 2,
            styles: [[".match-section{background-color:#282828}.match-section__header{display:flex;align-items:center;height:85px;padding:0 60px;background-color:#000;box-sizing:border-box}.match-section__efficiency{display:flex;flex-shrink:0;align-items:center;margin-left:auto;color:#fff}.match-section__efficiency-image{width:80px;height:80px;margin-left:15px}.match-section__efficiency-text{width:120px;font-size:13px;font-weight:600;text-align:right}.match-section__title h1,.match-section__title h2,.match-section__title h3,.match-section__title h4,.match-section__title h5,.match-section__title h6,.match-section__title p,.match-section__title span{margin:0;font-size:34px;font-weight:700;color:#fff}.match-section__content{background-color:#000;padding:0 60px}.match-section__footer{color:#fff;background-color:#000;padding:0 30px}.match-section_half{height:100%;display:flex;flex-direction:column}.match-section_half .match-section__header{height:65px;padding:0 30px;font-size:24px;font-weight:700;line-height:24px;white-space:nowrap}.match-section_half .match-section__content{display:flex;height:100%}.match-section_half .match-section__title{width:50%}.match-section_half .match-section__title h1,.match-section_half .match-section__title h2,.match-section_half .match-section__title h3,.match-section_half .match-section__title h4,.match-section_half .match-section__title h5,.match-section_half .match-section__title h6,.match-section_half .match-section__title p,.match-section_half .match-section__title span{margin:0;font-size:24px;font-weight:700;line-height:24px;color:#fff}@media screen and (max-width:1024px){.match-section__header{padding:12px 20px;height:auto;align-items:center;justify-content:space-between;flex-direction:column}.match-section__title{width:100%;max-width:275px}.match-section__efficiency{margin-left:0}.match-section__content{padding:0 20px}.match-section_half .match-section__title{width:100%}.match-section_half .match-section__title h1,.match-section_half .match-section__title h2,.match-section_half .match-section__title h3,.match-section_half .match-section__title h4,.match-section_half .match-section__title h5,.match-section_half .match-section__title h6,.match-section_half .match-section__title p,.match-section_half .match-section__title span{margin:0;font-size:34px;font-weight:700;color:#fff;line-height:initial;padding-top:10px}}"]],
            data: {}
        });
        function x(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 12, "div", [["class", "match-section__efficiency"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 8, "div", [["class", "match-section__efficiency-text"]], null, null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 7, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), t["\u0275ppd"](3, 1), t["\u0275ppd"](4, 2), t["\u0275pid"](131072, a.TranslatePipe, [a.TranslateService, t.ChangeDetectorRef]), t["\u0275ppd"](6, 1), t["\u0275pod"](7, {
                rank: 0,
                color: 1
            }), t["\u0275pid"](131072, a.TranslatePipe, [a.TranslateService, t.ChangeDetectorRef]), t["\u0275ppd"](9, 1), (n()(), t["\u0275eld"](10, 0, null, null, 2, "gosu-ranks-tooltip", [], null, null, null, i.b, i.a)), t["\u0275did"](11, 49152, null, 0, u.a, [], {
                mode: [0, "mode"]
            }, null), (n()(), t["\u0275eld"](12, 0, null, 0, 0, "div", [], [[8, "className", 0]], null, null, null, null))], function(n, l) {
                n(l, 11, 0, "right-direction")
            }, function(n, l) {
                var e = l.component,
                    a = t["\u0275unv"](l, 2, 0, n(l, 9, 0, t["\u0275nov"](l.parent.parent, 0), t["\u0275unv"](l, 2, 0, t["\u0275nov"](l, 8).transform("MATCH.YOU_PLAYED_IT_ON", n(l, 7, 0, t["\u0275unv"](l, 2, 0, t["\u0275nov"](l, 5).transform(t["\u0275unv"](l, 2, 0, n(l, 4, 0, t["\u0275nov"](l.parent.parent, 1), t["\u0275unv"](l, 2, 0, n(l, 3, 0, t["\u0275nov"](l.parent.parent, 2), e.shield)), "COMMON.RANK_")))), t["\u0275unv"](l, 2, 0, n(l, 6, 0, t["\u0275nov"](l.parent.parent, 3), e.shield - 1 / 6 * 100)))))));
                n(l, 2, 0, a), n(l, 12, 0, t["\u0275inlineInterpolate"](1, "match-section__efficiency-image icon-mmr_", e.shield, ""))
            })
        }
        function y(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 6, "header", [["class", "match-section__header"]], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 1, "div", [["class", "match-section__title"]], null, null, null, null, null)), t["\u0275ncd"](null, 0), (n()(), t["\u0275eld"](3, 0, null, null, 1, "div", [["class", "match-section__header-minor"]], null, null, null, null, null)), t["\u0275ncd"](null, 1), (n()(), t["\u0275and"](16777216, null, null, 1, null, x)), t["\u0275did"](6, 16384, null, 0, r.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                n(l, 6, 0, l.component.shield)
            }, null)
        }
        function b(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "gosu-section-rate", [], null, null, null, o.c, o.a)), t["\u0275did"](1, 245760, null, 0, s.a, [c.a, d.a, p.a], {
                section: [0, "section"],
                matchInfo: [1, "matchInfo"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 1, 0, e.rate, e.matchInfo)
            }, null)
        }
        function O(n) {
            return t["\u0275vid"](0, [t["\u0275pid"](0, _.a, [f.c]), t["\u0275pid"](0, g.a, []), t["\u0275pid"](0, m.a, []), t["\u0275pid"](0, h.a, []), (n()(), t["\u0275eld"](4, 0, null, null, 7, "section", [], [[8, "className", 0]], null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, y)), t["\u0275did"](6, 16384, null, 0, r.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(), t["\u0275eld"](7, 0, null, null, 1, "section", [["class", "match-section__content"]], null, null, null, null, null)), t["\u0275ncd"](null, 2), (n()(), t["\u0275eld"](9, 0, null, null, 2, "footer", [["class", "match-section__footer"]], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, b)), t["\u0275did"](11, 16384, null, 0, r.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 6, 0, e.header), n(l, 11, 0, e.rate)
            }, function(n, l) {
                n(l, 4, 0, t["\u0275inlineInterpolate"](1, "match-section match-section_", l.component.modificator, ""))
            })
        }
    },
    iXb4: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return u
        }), e.d(l, "b", function() {
            return o
        });
        var t = e("CcnG"),
            a = e("bse0"),
            i = e("Ip0R"),
            u = t["\u0275crt"]({
                encapsulation: 2,
                styles: ["\n\nperfect-scrollbar {\n  position: relative;\n\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n\nperfect-scrollbar[hidden] {\n  display: none;\n}\n\nperfect-scrollbar[fxflex] {\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  min-width: 0;\n  min-height: 0;\n\n  -webkit-box-direction: column;\n  -webkit-box-orient: column;\n}\n\nperfect-scrollbar[fxflex] > .ps {\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  width: auto;\n  height: auto;\n  min-width: 0;\n  min-height: 0;\n\n  -webkit-box-flex: 1;\n}\n\nperfect-scrollbar[fxlayout] > .ps,\nperfect-scrollbar[fxlayout] > .ps > .ps-content {\n  display: flex;\n\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  flex-direction: inherit;\n  align-items: inherit;\n  align-content: inherit;\n  justify-content: inherit;\n  width: 100%;\n  height: 100%;\n\n  -webkit-box-align: inherit;\n  -webkit-box-direction: inherit;\n  -webkit-box-flex: 1;\n  -webkit-box-orient: inherit;\n  -webkit-box-pack: inherit;\n}\n\nperfect-scrollbar[fxlayout='row'] > .ps,\nperfect-scrollbar[fxlayout='row'] > .ps > .ps-content, {\n  flex-direction: row !important;\n\n  -webkit-box-direction: row !important;\n  -webkit-box-orient: row !important;\n}\n\nperfect-scrollbar[fxlayout='column'] > .ps,\nperfect-scrollbar[fxlayout='column'] > .ps > .ps-content {\n  flex-direction: column !important;\n\n  -webkit-box-direction: column !important;\n  -webkit-box-orient: column !important;\n}\n\nperfect-scrollbar > .ps {\n  position: static;\n\n  display: block;\n  width: inherit;\n  height: inherit;\n  max-width: inherit;\n  max-height: inherit;\n}\n\nperfect-scrollbar > .ps > .ps-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  display: block;\n  overflow: hidden;\n\n  pointer-events: none;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-top,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-left,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-right,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n  position: absolute;\n\n  opacity: 0;\n\n  transition: opacity 300ms ease-in-out;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-top,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n  left: 0;\n\n  min-width: 100%;\n  min-height: 24px;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-left,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-right {\n  top: 0;\n\n  min-width: 24px;\n  min-height: 100%;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-top {\n  top: 0;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-left {\n  left: 0;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-right {\n  right: 0;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n  bottom: 0;\n}\n\nperfect-scrollbar > .ps.ps--active-y > .ps__rail-y {\n  top: 0 !important;\n  right: 0 !important;\n  left: auto !important;\n\n  width: 10px;\n\n  cursor: default;\n\n  transition:\n    width 200ms linear,\n    opacity 200ms linear,\n    background-color 200ms linear;\n}\n\nperfect-scrollbar > .ps.ps--active-y > .ps__rail-y:hover,\nperfect-scrollbar > .ps.ps--active-y > .ps__rail-y.ps--clicking {\n  width: 15px;\n}\n\nperfect-scrollbar > .ps.ps--active-x > .ps__rail-x {\n  top: auto !important;\n  bottom: 0 !important;\n  left: 0 !important;\n\n  height: 10px;\n\n  cursor: default;\n\n  transition:\n    height 200ms linear,\n    opacity 200ms linear,\n    background-color 200ms linear;\n}\n\nperfect-scrollbar > .ps.ps--active-x > .ps__rail-x:hover,\nperfect-scrollbar > .ps.ps--active-x > .ps__rail-x.ps--clicking {\n  height: 15px;\n}\n\nperfect-scrollbar > .ps.ps--active-x.ps--active-y > .ps__rail-y {\n  margin: 0 0 10px;\n}\n\nperfect-scrollbar > .ps.ps--active-x.ps--active-y > .ps__rail-x {\n  margin: 0 10px 0 0;\n}\n\nperfect-scrollbar > .ps.ps--scrolling-y > .ps__rail-y,\nperfect-scrollbar > .ps.ps--scrolling-x > .ps__rail-x {\n  opacity: 0.9;\n\n  background-color: #eee;\n}\n\nperfect-scrollbar.ps-show-always > .ps.ps--active-y > .ps__rail-y,\nperfect-scrollbar.ps-show-always > .ps.ps--active-x > .ps__rail-x {\n  opacity: 0.6;\n}\n\nperfect-scrollbar.ps-show-active > .ps.ps--active-y > .ps-overlay:not(.ps-at-top) .ps-indicator-top {\n  opacity: 1;\n\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active > .ps.ps--active-y > .ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom {\n  opacity: 1;\n\n  background: linear-gradient(to top, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active > .ps.ps--active-x > .ps-overlay:not(.ps-at-left) .ps-indicator-left {\n  opacity: 1;\n\n  background: linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active > .ps.ps--active-x > .ps-overlay:not(.ps-at-right) .ps-indicator-right {\n  opacity: 1;\n\n  background: linear-gradient(to left, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-top .ps-indicator-top {\n  background: linear-gradient(to bottom, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-bottom .ps-indicator-bottom {\n  background: linear-gradient(to top, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-left .ps-indicator-left {\n  background: linear-gradient(to right, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-right .ps-indicator-right {\n  background: linear-gradient(to left, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show,\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show {\n  opacity: 1;\n}\n", "\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  \n  bottom: 0px;\n  \n  position: absolute;\n}\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  \n  right: 0;\n  \n  position: absolute;\n}\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  \n  bottom: 2px;\n  \n  position: absolute;\n}\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  \n  right: 2px;\n  \n  position: absolute;\n}\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x,\n.ps__rail-x.ps--clicking .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n\n\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n"],
                data: {}
            });
        function r(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "div", [["class", "ps-overlay"]], [[2, "ps-at-top", null], [2, "ps-at-left", null], [2, "ps-at-right", null], [2, "ps-at-bottom", null]], null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 0, "div", [["class", "ps-indicator-top"]], [[2, "ps-indicator-show", null]], null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 0, "div", [["class", "ps-indicator-left"]], [[2, "ps-indicator-show", null]], null, null, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 0, "div", [["class", "ps-indicator-right"]], [[2, "ps-indicator-show", null]], null, null, null, null)), (n()(), t["\u0275eld"](4, 0, null, null, 0, "div", [["class", "ps-indicator-bottom"]], [[2, "ps-indicator-show", null]], null, null, null, null))], null, function(n, l) {
                var e = l.component;
                n(l, 0, 0, e.states.top, e.states.left, e.states.right, e.states.bottom), n(l, 1, 0, e.indicatorY && e.interaction), n(l, 2, 0, e.indicatorX && e.interaction), n(l, 3, 0, e.indicatorX && e.interaction), n(l, 4, 0, e.indicatorY && e.interaction)
            })
        }
        function o(n) {
            return t["\u0275vid"](0, [t["\u0275qud"](402653184, 1, {
                directiveRef: 0
            }), (n()(), t["\u0275eld"](1, 0, null, null, 5, "div", [["style", "position: static;"]], [[2, "ps", null]], null, null, null, null)), t["\u0275did"](2, 999424, [[1, 4]], 0, a.c, [t.NgZone, t.KeyValueDiffers, t.ElementRef, t.PLATFORM_ID, [2, a.a]], {
                disabled: [0, "disabled"],
                config: [1, "config"]
            }, null), (n()(), t["\u0275eld"](3, 0, null, null, 1, "div", [["class", "ps-content"]], null, null, null, null, null)), t["\u0275ncd"](null, 0), (n()(), t["\u0275and"](16777216, null, null, 1, null, r)), t["\u0275did"](6, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 2, 0, e.disabled, e.config), n(l, 6, 0, e.scrollIndicators)
            }, function(n, l) {
                n(l, 1, 0, l.component.usePSClass)
            })
        }
    },
    lTbF: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return u
        });
        var t = e("K9Ia"),
            a = e("3Fae"),
            i = e("DLNa"),
            u = function() {
                function n(n, l) {
                    this.router = n, this.cd = l, this.forPartners = !1, this.teams = [], this.highlighterX$ = new t.a, this.highlighterY$ = new t.a, this.isCurrentPlayerClassToggle = !0
                }
                return Object.defineProperty(n.prototype, "tables", {
                    get: function() {
                        var n = this,
                            l = this.matchData.players[this.matchData.slot];
                        return [this.data.slice(0, 5), this.data.slice(-5)].map(function(e, t) {
                            var u = Object(a.d)(e, function(n) {
                                    return n.level
                                }) || -1 / 0,
                                r = Object(a.d)(e, function(n) {
                                    return n.kills
                                }) || -1 / 0,
                                o = Object(a.f)(e, function(n) {
                                    return n.deaths
                                }),
                                s = Object(a.d)(e, function(n) {
                                    return n.assists
                                }) || -1 / 0,
                                c = Object(a.d)(e, function(n) {
                                    return n.net_worth
                                }) || -1 / 0,
                                d = Object(a.d)(e, function(n) {
                                    return n.gold_per_min
                                }) || -1 / 0,
                                p = Object(a.d)(e, function(n) {
                                    return n.xp_per_min
                                }) || -1 / 0,
                                _ = Object(a.d)(e, function(n) {
                                    return n.last_hits
                                }) || -1 / 0,
                                f = Object(a.d)(e, function(n) {
                                    return n.denies
                                }) || -1 / 0,
                                g = Object(a.d)(e, function(n) {
                                    return n.hero_damage
                                }) || -1 / 0,
                                m = Object(a.d)(e, function(n) {
                                    return n.tower_damage
                                }) || -1 / 0,
                                h = Object(a.d)(e, function(n) {
                                    return n.hero_healing
                                }) || -1 / 0;
                            return e.map(function(e, a) {
                                var v = 5 * t + a;
                                return {
                                    player: {
                                        heroName: i.a[e.hero_id].name,
                                        username: e.player_name,
                                        shield: e.shield,
                                        role: e.role,
                                        lane: e.lane && e.lane.split(" ")[0],
                                        lvl: {
                                            value: e.level,
                                            isMarked: e.level === u
                                        },
                                        slot: v,
                                        isCurrent: v === l.index
                                    },
                                    data: {
                                        KDA: [{
                                            value: e.kills,
                                            isMarked: e.kills === r
                                        }, {
                                            value: e.deaths,
                                            isMarked: e.deaths === o
                                        }, {
                                            value: e.assists,
                                            isMarked: e.assists === s
                                        }],
                                        NET: {
                                            value: e.net_worth,
                                            isMarked: e.net_worth === c
                                        },
                                        GPM: {
                                            value: e.gold_per_min,
                                            isMarked: e.gold_per_min === d
                                        },
                                        XPM: {
                                            value: e.xp_per_min,
                                            isMarked: e.xp_per_min === p
                                        },
                                        LH: {
                                            value: e.last_hits,
                                            isMarked: e.last_hits === _
                                        },
                                        DN: {
                                            value: e.denies,
                                            isMarked: e.denies === f
                                        },
                                        HD: {
                                            value: e.hero_damage,
                                            isMarked: e.hero_damage === g
                                        },
                                        TD: {
                                            value: e.tower_damage,
                                            isMarked: e.tower_damage === m
                                        },
                                        Heal: {
                                            value: e.hero_healing,
                                            isMarked: e.hero_healing === h
                                        }
                                    },
                                    items: n.prepareItems(e.items)
                                }
                            })
                        }).map(function(n) {
                            return n.concat([{
                                data: {
                                    KDA: [{
                                        value: Object(a.i)(n, function(n) {
                                            return n.data.KDA[0].value
                                        }),
                                        isMarked: !1
                                    }, {
                                        value: Object(a.i)(n, function(n) {
                                            return n.data.KDA[1].value
                                        }),
                                        isMarked: !1
                                    }, {
                                        value: Object(a.i)(n, function(n) {
                                            return n.data.KDA[2].value
                                        }),
                                        isMarked: !1
                                    }],
                                    NET: {
                                        value: Object(a.i)(n, function(n) {
                                            return n.data.NET.value
                                        }),
                                        isMarked: !1
                                    },
                                    GPM: {
                                        value: Object(a.i)(n, function(n) {
                                            return n.data.GPM.value
                                        }),
                                        isMarked: !1
                                    },
                                    XPM: {
                                        value: Object(a.i)(n, function(n) {
                                            return n.data.XPM.value
                                        }),
                                        isMarked: !1
                                    },
                                    LH: {
                                        value: Object(a.i)(n, function(n) {
                                            return n.data.LH.value
                                        }),
                                        isMarked: !1
                                    },
                                    DN: {
                                        value: Object(a.i)(n, function(n) {
                                            return n.data.DN.value
                                        }),
                                        isMarked: !1
                                    },
                                    HD: {
                                        value: Object(a.i)(n, function(n) {
                                            return n.data.HD.value
                                        }),
                                        isMarked: !1
                                    },
                                    TD: {
                                        value: Object(a.i)(n, function(n) {
                                            return n.data.TD.value
                                        }),
                                        isMarked: !1
                                    },
                                    Heal: {
                                        value: Object(a.i)(n, function(n) {
                                            return n.data.Heal.value
                                        }),
                                        isMarked: !1
                                    }
                                }
                            }])
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "matchId", {
                    get: function() {
                        return this.matchData.match_id
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "isRadiantVictory", {
                    get: function() {
                        return this.matchData.radiant_win
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.ngOnChanges = function() {
                    this.cd.reattach()
                }, n.prototype.highlightColumn = function(n) {
                    this.highlighterY$.next({
                        width: n.target.offsetWidth + "px",
                        left: n.target.offsetLeft + "px",
                        opacity: 1
                    })
                }, n.prototype.highlightRow = function(n) {
                    n && (this.isCurrentPlayerClassToggle = !1, this.highlighterX$.next({
                        top: n.target.offsetTop + "px",
                        opacity: 1
                    }))
                }, n.prototype.cleanupHighlighter = function(n) {
                    this.highlighterY$.next({
                        width: n.target.offsetWidth + "px",
                        left: n.target.offsetLeft + "px",
                        opacity: 0
                    })
                }, n.prototype.cleanupRowHighlighter = function(n) {
                    this.highlighterX$.next({
                        top: n.target.offsetTop + "px",
                        opacity: 0
                    })
                }, n.prototype.goToMatch = function(n) {
                    this.router.navigate(["/match", this.matchId, n.slot]), this.cd.detach()
                }, n.prototype.tracker = function(n) {
                    return n
                }, n.prototype.prepareItems = function(n) {
                    return n.length < 9 ? n.concat(Array.apply(null, Array(9 - n.length)).map(function() {
                        return null
                    })) : n
                }, n.prototype.onLeaveTable = function() {
                    this.isCurrentPlayerClassToggle = !0
                }, n
            }()
    },
    lZxJ: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        }), e("v9/1");
        var t = function() {
            function n(n) {
                this.matchService = n
            }
            return n.prototype.resolve = function(n) {
                return this.matchService.fetchMatch(n.params.matchId)
            }, n
        }()
    },
    q69m: function(n, l, e) {
        "use strict";
        var t = e("CcnG"),
            a = e("eZrl"),
            i = e("d+rO"),
            u = e("uQDU"),
            r = e("Gqqv"),
            o = e("lTbF"),
            s = e("ZYCi"),
            c = e("Wv4U"),
            d = e("v9/1");
        e.d(l, "a", function() {
            return g
        });
        var p = t["\u0275crt"]({
            encapsulation: 0,
            styles: [["[_nghost-%COMP%]{display:block;background-color:#171717;min-height:100%;padding:40px 0 20px}[_nghost-%COMP%]   .partners-match[_ngcontent-%COMP%]{width:992px;margin:0 auto}[_nghost-%COMP%]   .partners-match__datetime[_ngcontent-%COMP%]{display:flex;padding-left:30px;margin-bottom:25px}[_nghost-%COMP%]   .partners-match__date[_ngcontent-%COMP%]{line-height:40px;font-size:40px;color:#fff;margin-right:10px;font-weight:900}[_nghost-%COMP%]   .partners-match__time[_ngcontent-%COMP%]{line-height:16px;font-size:16px;color:#fff;font-weight:900}[_nghost-%COMP%]   .partners-list[_ngcontent-%COMP%]{display:flex;border-top:1px solid rgba(255,255,255,.1)}[_nghost-%COMP%]   .partners-list__container[_ngcontent-%COMP%]{width:992px;margin:0 auto;padding:20px 0 10px;display:flex;align-items:center;justify-content:space-between}[_nghost-%COMP%]   .partners-list__partners[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .partners-list__link[_ngcontent-%COMP%]{display:block;color:#f2c94c;line-height:20px;font-size:20px}[_nghost-%COMP%]   .partners-list__link_image[_ngcontent-%COMP%]{display:block;margin-right:20px}[_nghost-%COMP%]   .partners-list__link_last[_ngcontent-%COMP%]{margin-right:0}[_nghost-%COMP%]   .partners-list__link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:20px}"]],
            data: {}
        });
        function _(n) {
            return t["\u0275vid"](2, [t["\u0275pid"](0, a.DateFormatPipe, []), t["\u0275pid"](0, i.FromUnixPipe, []), t["\u0275pid"](0, u.a, []), (n()(), t["\u0275eld"](3, 0, null, null, 20, "div", [["class", "partners-match"]], null, null, null, null, null)), (n()(), t["\u0275eld"](4, 0, null, null, 17, "time", [["class", "partners-match__datetime"]], [[1, "datetime", 0]], null, null, null, null)), t["\u0275ppd"](5, 1), t["\u0275ppd"](6, 1), (n()(), t["\u0275eld"](7, 0, null, null, 3, "span", [["class", "partners-match__date"]], null, null, null, null, null)), (n()(), t["\u0275ted"](8, null, ["", ""])), t["\u0275ppd"](9, 1), t["\u0275ppd"](10, 2), (n()(), t["\u0275eld"](11, 0, null, null, 10, "span", [["class", "partners-match__time"]], null, null, null, null, null)), (n()(), t["\u0275eld"](12, 0, null, null, 3, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](13, null, ["", ""])), t["\u0275ppd"](14, 1), t["\u0275ppd"](15, 2), (n()(), t["\u0275eld"](16, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["\u2014"])), (n()(), t["\u0275eld"](18, 0, null, null, 3, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](19, null, ["", ""])), t["\u0275ppd"](20, 1), t["\u0275ppd"](21, 2), (n()(), t["\u0275eld"](22, 0, null, null, 1, "gosu-match-stats", [], null, null, null, r.b, r.a)), t["\u0275did"](23, 573440, null, 0, o.a, [s.Router, t.ChangeDetectorRef], {
                data: [0, "data"],
                matchData: [1, "matchData"],
                forPartners: [2, "forPartners"],
                teams: [3, "teams"]
            }, null), (n()(), t["\u0275eld"](24, 0, null, null, 11, "div", [["class", "partners-list"]], null, null, null, null, null)), (n()(), t["\u0275eld"](25, 0, null, null, 10, "div", [["class", "partners-list__container"]], null, null, null, null, null)), (n()(), t["\u0275eld"](26, 0, null, null, 2, "div", [["class", "partners-list__owner"]], null, null, null, null, null)), (n()(), t["\u0275eld"](27, 0, null, null, 1, "a", [["class", "partners-list__link"], ["href", "https://vk.com/studanal"], ["target", "_blank"]], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["VK.COM/STUDANAL"])), (n()(), t["\u0275eld"](29, 0, null, null, 6, "div", [["class", "partners-list__partners"]], null, null, null, null, null)), (n()(), t["\u0275eld"](30, 0, null, null, 2, "a", [["class", "partners-list__link_image"], ["href", "https://gg.bet"], ["target", "_blank"]], null, null, null, null, null)), (n()(), t["\u0275eld"](31, 0, null, null, 1, "img", [], [[8, "src", 4]], null, null, null, null)), t["\u0275ppd"](32, 1), (n()(), t["\u0275eld"](33, 0, null, null, 2, "a", [["class", "partners-list__link_image partners-list__link_last"], ["href", "https://gosu.ai"], ["target", "_blank"]], null, null, null, null, null)), (n()(), t["\u0275eld"](34, 0, null, null, 1, "img", [], [[8, "src", 4]], null, null, null, null)), t["\u0275ppd"](35, 1)], function(n, l) {
                var e = l.component;
                n(l, 23, 0, e.data, e.matchData, !0, e.teams)
            }, function(n, l) {
                var e = l.component,
                    a = t["\u0275unv"](l, 4, 0, n(l, 6, 0, t["\u0275nov"](l, 0), t["\u0275unv"](l, 4, 0, n(l, 5, 0, t["\u0275nov"](l, 1), e.matchData.start_time))));
                n(l, 4, 0, a);
                var i = t["\u0275unv"](l, 8, 0, n(l, 10, 0, t["\u0275nov"](l, 0), t["\u0275unv"](l, 8, 0, n(l, 9, 0, t["\u0275nov"](l, 1), e.matchData.start_time)), "MMM D, YYYY"));
                n(l, 8, 0, i);
                var u = t["\u0275unv"](l, 13, 0, n(l, 15, 0, t["\u0275nov"](l, 0), t["\u0275unv"](l, 13, 0, n(l, 14, 0, t["\u0275nov"](l, 1), e.matchData.start_time)), "HH:mm"));
                n(l, 13, 0, u);
                var r = t["\u0275unv"](l, 19, 0, n(l, 21, 0, t["\u0275nov"](l, 0), t["\u0275unv"](l, 19, 0, n(l, 20, 0, t["\u0275nov"](l, 1), e.matchData.start_time + e.matchData.duration)), "HH:mm"));
                n(l, 19, 0, r);
                var o = t["\u0275unv"](l, 31, 0, n(l, 32, 0, t["\u0275nov"](l, 2), "/assets/partners/ggbet.svg"));
                n(l, 31, 0, o);
                var s = t["\u0275unv"](l, 34, 0, n(l, 35, 0, t["\u0275nov"](l, 2), "/assets/partners/gosu.svg"));
                n(l, 34, 0, s)
            })
        }
        function f(n) {
            return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "gosu-match-for-partners", [], null, null, null, _, p)), t["\u0275did"](1, 49152, null, 0, c.a, [d.a], null, null)], null, null)
        }
        var g = t["\u0275ccf"]("gosu-match-for-partners", c.a, f, {}, {}, [])
    },
    unCD: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        var t = function() {
            function n() {}
            return n.prototype.transform = function(n, l) {
                return this.parseText(n, l)
            }, n.prototype.parseText = function(n, l) {
                var e = 0;
                return n.split("").map(function(n) {
                    return "*" === n ? ++e % 2 != 0 ? '<span class="text-' + (l || "success") + '">' : "</span>" : n
                }).join("")
            }, n
        }()
    },
    "v9/1": function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return u
        });
        var t = e("XlPw"),
            a = e("xMyE"),
            i = e("9Z1F"),
            u = (e("xqV8"), e("Mnkj"), function() {
                function n(n, l, e) {
                    this.api = n, this.router = l, this.errSrv = e
                }
                return n.prototype.fetchMatch = function(n) {
                    var l = this;
                    return this.api.get("analyser/api/partner-match/" + n).pipe(Object(a.a)(function(n) {
                        return l.responceData = n.data
                    }), Object(i.a)(function(n) {
                        return 404 === n.status ? (l.router.navigate(["404"]), Object(t.a)(n)) : (l.errSrv.displayError(), Object(t.a)(n))
                    }))
                }, n
            }())
    },
    xTpN: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return u
        });
        var t = e("F/XL"),
            a = e("9Z1F"),
            i = e("15JJ"),
            u = (e("YI7S"), e("/hnu"), e("Mnkj"), function() {
                function n(n, l, e) {
                    this.matchService = n, this.session = l, this.error = e
                }
                return n.prototype.resolve = function(n, l) {
                    var e = this,
                        u = n.params,
                        r = u.matchId,
                        o = u.playerSlot;
                    return this.session.authenticate(n).pipe(Object(a.a)(function() {
                        return Object(t.a)(null)
                    }), Object(i.a)(function() {
                        return e.matchService.fetchMatch(r, o || 0)
                    }), Object(a.a)(function(n) {
                        return console.log(n), e.matchService.setEmptyMatchData(), e.error.displayError(), Object(t.a)(void 0)
                    }))
                }, n
            }())
    }
}]);

