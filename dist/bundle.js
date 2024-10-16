(() => {
  var e = {
      594: (e, t, n) => {
        "use strict";
        n.d(t, { A: () => r });
        var o = n(601),
          s = n.n(o),
          a = n(314),
          i = n.n(a)()(s());
        i.push([
          e.id,
          "@import url(https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap);",
        ]),
          i.push([
            e.id,
            "@import url(https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap);",
          ]),
          i.push([
            e.id,
            ":root {\n    --main-dark: #4A4947;\n    --secondary-dark: #B17457;\n    --main-light: #FAF7F0;\n    --secondary-light: #D8D2C2;\n\n    --danger: #f30;\n    --info: #4379F2;\n    --success: #798645;\n    --warning: #DD761C;\n}\n\n* {\n    box-sizing: border-box;\n    font-family: 'Nunito', sans-serif;\n    font-size: large;\n}\n\nhtml {\n    width: 100%;\n}\n\nbody {\n    background-color: var(--main-dark);\n}\n\n/* CSS Rules for desktop */\n@media screen and (min-width: 1200px) {\n    body {\n        margin-left: 15%;\n        margin-right: 15%;\n    }\n}\n\n/* CSS Rules for tablet */\n@media screen and (min-width: 768px) and (max-width: 1199px) {\n    body {\n        margin-left: 10%;\n        margin-right: 10%;\n    }\n}\n\n/* CSS Rules for phone */\n@media screen and (max-width: 767px) {\n    \n}",
            "",
          ]);
        const r = i;
      },
      958: (e, t, n) => {
        "use strict";
        n.d(t, { A: () => c });
        var o = n(601),
          s = n.n(o),
          a = n(314),
          i = n.n(a),
          r = n(594),
          l = i()(s());
        l.i(r.A),
          l.push([
            e.id,
            "form {\n    background-color: var(--main-light);\n    padding: 1rem 1rem;\n    border-radius: 8px;\n}\n\n.card-title {\n    font-size: 1.4rem;\n}\n    \n.form-group {\n    display: grid;\n    gap: 5px;\n}\n\n.validation-message {\n    margin-block-start: 0;\n    color: var(--danger);\n}\n\nbutton {\n    background-color: var(--secondary-dark);\n    color: var(--main-light);\n    font-weight: 400;\n    letter-spacing: 2px;\n    padding: 5px;\n    text-transform: uppercase;\n}\n\nmain {\n    background-color: var(--main-light);\n    border-radius: 8px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 1rem;\n    margin-top: 1rem;\n    padding: 1rem;\n}\n\nmain > .card-title {\n    grid-column: span 2;\n}\n\nmain > .notes-filter {\n    grid-column: span 1;\n    align-self: center;\n    text-align: end;\n    display: flex;\n    flex-wrap: nowrap;\n    gap: 10px;\n    justify-content: end;\n    align-items: center;\n}\n\n.material-symbols-outlined {\n    margin-left: 10px;\n}\n\n.list {\n    grid-column: span 3;\n    margin: 0;\n    padding: 0;\n    display: grid;\n    gap: 1rem;\n}\n\n.list > note-item {\n    padding: 4px 8px;\n    border: 1px solid var(--main-dark);\n    border-radius: 5px;\n    box-shadow: .2px .5px 10px .1px var(--secondary-light);\n}\n    \n.list h3 {\n    color:var(--main-dark);\n}\n\n.list p {\n    color: var(--main-dark);\n}\n\n/* CSS Rules for desktop */\n@media screen and (min-width: 1200px) {\n    form {\n        padding: 1.5rem 3rem;\n    }\n\n    main {\n        padding: 1.5rem 3rem;\n    }\n\n    .list {\n        grid-template-columns: 1fr 1fr 1fr;\n    }\n\n\n}\n\n/* CSS Rules for tablet */\n@media screen and (min-width: 768px) and (max-width: 1199px) {\n    .list {\n        grid-template-columns: 1fr 1fr;\n    }\n}\n\n/* CSS Rules for phone */\n@media screen and (max-width: 767px) {\n\n}",
            "",
          ]);
        const c = l;
      },
      314: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  o = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  o &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {",
                    )),
                  (n += e(t)),
                  o && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, o, s, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (o)
                for (var r = 0; r < this.length; r++) {
                  var l = this[r][0];
                  null != l && (i[l] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var d = [].concat(e[c]);
                (o && i[d[0]]) ||
                  (void 0 !== a &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = a)),
                  n &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = n))
                      : (d[2] = n)),
                  s &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = s))
                      : (d[4] = "".concat(s))),
                  t.push(d));
              }
            }),
            t
          );
        };
      },
      601: (e) => {
        "use strict";
        e.exports = function (e) {
          return e[1];
        };
      },
      72: (e) => {
        "use strict";
        var t = [];
        function n(e) {
          for (var n = -1, o = 0; o < t.length; o++)
            if (t[o].identifier === e) {
              n = o;
              break;
            }
          return n;
        }
        function o(e, o) {
          for (var a = {}, i = [], r = 0; r < e.length; r++) {
            var l = e[r],
              c = o.base ? l[0] + o.base : l[0],
              d = a[c] || 0,
              u = "".concat(c, " ").concat(d);
            a[c] = d + 1;
            var p = n(u),
              m = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== p) t[p].references++, t[p].updater(m);
            else {
              var w = s(m, o);
              (o.byIndex = r),
                t.splice(r, 0, { identifier: u, updater: w, references: 1 });
            }
            i.push(u);
          }
          return i;
        }
        function s(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, s) {
          var a = o((e = e || []), (s = s || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var r = n(a[i]);
              t[r].references--;
            }
            for (var l = o(e, s), c = 0; c < a.length; c++) {
              var d = n(a[c]);
              0 === t[d].references && (t[d].updater(), t.splice(d, 1));
            }
            a = l;
          };
        };
      },
      659: (e) => {
        "use strict";
        var t = {};
        e.exports = function (e, n) {
          var o = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          o.appendChild(n);
        };
      },
      540: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      56: (e, t, n) => {
        "use strict";
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      825: (e) => {
        "use strict";
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var o = "";
                n.supports && (o += "@supports (".concat(n.supports, ") {")),
                  n.media && (o += "@media ".concat(n.media, " {"));
                var s = void 0 !== n.layer;
                s &&
                  (o += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (o += n.css),
                  s && (o += "}"),
                  n.media && (o += "}"),
                  n.supports && (o += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */",
                    )),
                  t.styleTagTransform(o, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      113: (e) => {
        "use strict";
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      465: function (e) {
        (e.exports = (function () {
          "use strict";
          function e(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object",
            );
          }
          function t(t, n) {
            return t.get(e(t, n));
          }
          function n(e, t, n) {
            (function (e, t) {
              if (t.has(e))
                throw new TypeError(
                  "Cannot initialize the same private elements twice on an object",
                );
            })(e, t),
              t.set(e, n);
          }
          const o = {},
            s = (e) =>
              new Promise((t) => {
                if (!e) return t();
                const n = window.scrollX,
                  s = window.scrollY;
                (o.restoreFocusTimeout = setTimeout(() => {
                  o.previousActiveElement instanceof HTMLElement
                    ? (o.previousActiveElement.focus(),
                      (o.previousActiveElement = null))
                    : document.body && document.body.focus(),
                    t();
                }, 100)),
                  window.scrollTo(n, s);
              }),
            a = "swal2-",
            i = [
              "container",
              "shown",
              "height-auto",
              "iosfix",
              "popup",
              "modal",
              "no-backdrop",
              "no-transition",
              "toast",
              "toast-shown",
              "show",
              "hide",
              "close",
              "title",
              "html-container",
              "actions",
              "confirm",
              "deny",
              "cancel",
              "default-outline",
              "footer",
              "icon",
              "icon-content",
              "image",
              "input",
              "file",
              "range",
              "select",
              "radio",
              "checkbox",
              "label",
              "textarea",
              "inputerror",
              "input-label",
              "validation-message",
              "progress-steps",
              "active-progress-step",
              "progress-step",
              "progress-step-line",
              "loader",
              "loading",
              "styled",
              "top",
              "top-start",
              "top-end",
              "top-left",
              "top-right",
              "center",
              "center-start",
              "center-end",
              "center-left",
              "center-right",
              "bottom",
              "bottom-start",
              "bottom-end",
              "bottom-left",
              "bottom-right",
              "grow-row",
              "grow-column",
              "grow-fullscreen",
              "rtl",
              "timer-progress-bar",
              "timer-progress-bar-container",
              "scrollbar-measure",
              "icon-success",
              "icon-warning",
              "icon-info",
              "icon-question",
              "icon-error",
            ].reduce((e, t) => ((e[t] = a + t), e), {}),
            r = ["success", "warning", "info", "question", "error"].reduce(
              (e, t) => ((e[t] = a + t), e),
              {},
            ),
            l = "SweetAlert2:",
            c = (e) => e.charAt(0).toUpperCase() + e.slice(1),
            d = (e) => {
              console.warn(`${l} ${"object" == typeof e ? e.join(" ") : e}`);
            },
            u = (e) => {
              console.error(`${l} ${e}`);
            },
            p = [],
            m = function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
              var n;
              (n = `"${e}" is deprecated and will be removed in the next major release.${t ? ` Use "${t}" instead.` : ""}`),
                p.includes(n) || (p.push(n), d(n));
            },
            w = (e) => ("function" == typeof e ? e() : e),
            h = (e) => e && "function" == typeof e.toPromise,
            g = (e) => (h(e) ? e.toPromise() : Promise.resolve(e)),
            f = (e) => e && Promise.resolve(e) === e,
            b = () => document.body.querySelector(`.${i.container}`),
            v = (e) => {
              const t = b();
              return t ? t.querySelector(e) : null;
            },
            y = (e) => v(`.${e}`),
            x = () => y(i.popup),
            C = () => y(i.icon),
            k = () => y(i.title),
            E = () => y(i["html-container"]),
            A = () => y(i.image),
            T = () => y(i["progress-steps"]),
            L = () => y(i["validation-message"]),
            $ = () => v(`.${i.actions} .${i.confirm}`),
            S = () => v(`.${i.actions} .${i.cancel}`),
            B = () => v(`.${i.actions} .${i.deny}`),
            P = () => v(`.${i.loader}`),
            M = () => y(i.actions),
            O = () => y(i.footer),
            j = () => y(i["timer-progress-bar"]),
            H = () => y(i.close),
            I = () => {
              const e = x();
              if (!e) return [];
              const t = e.querySelectorAll(
                  '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])',
                ),
                n = Array.from(t).sort((e, t) => {
                  const n = parseInt(e.getAttribute("tabindex") || "0"),
                    o = parseInt(t.getAttribute("tabindex") || "0");
                  return n > o ? 1 : n < o ? -1 : 0;
                }),
                o = e.querySelectorAll(
                  '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n',
                ),
                s = Array.from(o).filter(
                  (e) => "-1" !== e.getAttribute("tabindex"),
                );
              return [...new Set(n.concat(s))].filter((e) => ee(e));
            },
            z = () =>
              q(document.body, i.shown) &&
              !q(document.body, i["toast-shown"]) &&
              !q(document.body, i["no-backdrop"]),
            D = () => {
              const e = x();
              return !!e && q(e, i.toast);
            },
            _ = (e, t) => {
              if (((e.textContent = ""), t)) {
                const n = new DOMParser().parseFromString(t, "text/html"),
                  o = n.querySelector("head");
                o &&
                  Array.from(o.childNodes).forEach((t) => {
                    e.appendChild(t);
                  });
                const s = n.querySelector("body");
                s &&
                  Array.from(s.childNodes).forEach((t) => {
                    t instanceof HTMLVideoElement ||
                    t instanceof HTMLAudioElement
                      ? e.appendChild(t.cloneNode(!0))
                      : e.appendChild(t);
                  });
              }
            },
            q = (e, t) => {
              if (!t) return !1;
              const n = t.split(/\s+/);
              for (let t = 0; t < n.length; t++)
                if (!e.classList.contains(n[t])) return !1;
              return !0;
            },
            V = (e, t, n) => {
              if (
                (((e, t) => {
                  Array.from(e.classList).forEach((n) => {
                    Object.values(i).includes(n) ||
                      Object.values(r).includes(n) ||
                      Object.values(t.showClass || {}).includes(n) ||
                      e.classList.remove(n);
                  });
                })(e, t),
                !t.customClass)
              )
                return;
              const o = t.customClass[n];
              o &&
                ("string" == typeof o || o.forEach
                  ? U(e, o)
                  : d(
                      `Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof o}"`,
                    ));
            },
            N = (e, t) => {
              if (!t) return null;
              switch (t) {
                case "select":
                case "textarea":
                case "file":
                  return e.querySelector(`.${i.popup} > .${i[t]}`);
                case "checkbox":
                  return e.querySelector(`.${i.popup} > .${i.checkbox} input`);
                case "radio":
                  return (
                    e.querySelector(
                      `.${i.popup} > .${i.radio} input:checked`,
                    ) ||
                    e.querySelector(
                      `.${i.popup} > .${i.radio} input:first-child`,
                    )
                  );
                case "range":
                  return e.querySelector(`.${i.popup} > .${i.range} input`);
                default:
                  return e.querySelector(`.${i.popup} > .${i.input}`);
              }
            },
            R = (e) => {
              if ((e.focus(), "file" !== e.type)) {
                const t = e.value;
                (e.value = ""), (e.value = t);
              }
            },
            F = (e, t, n) => {
              e &&
                t &&
                ("string" == typeof t && (t = t.split(/\s+/).filter(Boolean)),
                t.forEach((t) => {
                  Array.isArray(e)
                    ? e.forEach((e) => {
                        n ? e.classList.add(t) : e.classList.remove(t);
                      })
                    : n
                      ? e.classList.add(t)
                      : e.classList.remove(t);
                }));
            },
            U = (e, t) => {
              F(e, t, !0);
            },
            K = (e, t) => {
              F(e, t, !1);
            },
            Y = (e, t) => {
              const n = Array.from(e.children);
              for (let e = 0; e < n.length; e++) {
                const o = n[e];
                if (o instanceof HTMLElement && q(o, t)) return o;
              }
            },
            Z = (e, t, n) => {
              n === `${parseInt(n)}` && (n = parseInt(n)),
                n || 0 === parseInt(n)
                  ? e.style.setProperty(t, "number" == typeof n ? `${n}px` : n)
                  : e.style.removeProperty(t);
            },
            W = function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "flex";
              e && (e.style.display = t);
            },
            J = (e) => {
              e && (e.style.display = "none");
            },
            X = function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "block";
              e &&
                new MutationObserver(() => {
                  Q(e, e.innerHTML, t);
                }).observe(e, { childList: !0, subtree: !0 });
            },
            G = (e, t, n, o) => {
              const s = e.querySelector(t);
              s && s.style.setProperty(n, o);
            },
            Q = function (e, t) {
              t
                ? W(
                    e,
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : "flex",
                  )
                : J(e);
            },
            ee = (e) =>
              !(
                !e ||
                !(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
              ),
            te = (e) => !!(e.scrollHeight > e.clientHeight),
            ne = (e) => {
              const t = window.getComputedStyle(e),
                n = parseFloat(t.getPropertyValue("animation-duration") || "0"),
                o = parseFloat(
                  t.getPropertyValue("transition-duration") || "0",
                );
              return n > 0 || o > 0;
            },
            oe = function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              const n = j();
              n &&
                ee(n) &&
                (t && ((n.style.transition = "none"), (n.style.width = "100%")),
                setTimeout(() => {
                  (n.style.transition = `width ${e / 1e3}s linear`),
                    (n.style.width = "0%");
                }, 10));
            },
            se =
              `\n <div aria-labelledby="${i.title}" aria-describedby="${i["html-container"]}" class="${i.popup}" tabindex="-1">\n   <button type="button" class="${i.close}"></button>\n   <ul class="${i["progress-steps"]}"></ul>\n   <div class="${i.icon}"></div>\n   <img class="${i.image}" />\n   <h2 class="${i.title}" id="${i.title}"></h2>\n   <div class="${i["html-container"]}" id="${i["html-container"]}"></div>\n   <input class="${i.input}" id="${i.input}" />\n   <input type="file" class="${i.file}" />\n   <div class="${i.range}">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="${i.select}" id="${i.select}"></select>\n   <div class="${i.radio}"></div>\n   <label class="${i.checkbox}">\n     <input type="checkbox" id="${i.checkbox}" />\n     <span class="${i.label}"></span>\n   </label>\n   <textarea class="${i.textarea}" id="${i.textarea}"></textarea>\n   <div class="${i["validation-message"]}" id="${i["validation-message"]}"></div>\n   <div class="${i.actions}">\n     <div class="${i.loader}"></div>\n     <button type="button" class="${i.confirm}"></button>\n     <button type="button" class="${i.deny}"></button>\n     <button type="button" class="${i.cancel}"></button>\n   </div>\n   <div class="${i.footer}"></div>\n   <div class="${i["timer-progress-bar-container"]}">\n     <div class="${i["timer-progress-bar"]}"></div>\n   </div>\n </div>\n`.replace(
                /(^|\n)\s*/g,
                "",
              ),
            ae = () => {
              o.currentInstance.resetValidationMessage();
            },
            ie = (e) => {
              const t = (() => {
                const e = b();
                return (
                  !!e &&
                  (e.remove(),
                  K(
                    [document.documentElement, document.body],
                    [i["no-backdrop"], i["toast-shown"], i["has-column"]],
                  ),
                  !0)
                );
              })();
              if (
                "undefined" == typeof window ||
                "undefined" == typeof document
              )
                return void u("SweetAlert2 requires document to initialize");
              const n = document.createElement("div");
              (n.className = i.container),
                t && U(n, i["no-transition"]),
                _(n, se);
              const o =
                "string" == typeof (s = e.target)
                  ? document.querySelector(s)
                  : s;
              var s;
              o.appendChild(n),
                ((e) => {
                  const t = x();
                  t.setAttribute("role", e.toast ? "alert" : "dialog"),
                    t.setAttribute(
                      "aria-live",
                      e.toast ? "polite" : "assertive",
                    ),
                    e.toast || t.setAttribute("aria-modal", "true");
                })(e),
                ((e) => {
                  "rtl" === window.getComputedStyle(e).direction &&
                    U(b(), i.rtl);
                })(o),
                (() => {
                  const e = x(),
                    t = Y(e, i.input),
                    n = Y(e, i.file),
                    o = e.querySelector(`.${i.range} input`),
                    s = e.querySelector(`.${i.range} output`),
                    a = Y(e, i.select),
                    r = e.querySelector(`.${i.checkbox} input`),
                    l = Y(e, i.textarea);
                  (t.oninput = ae),
                    (n.onchange = ae),
                    (a.onchange = ae),
                    (r.onchange = ae),
                    (l.oninput = ae),
                    (o.oninput = () => {
                      ae(), (s.value = o.value);
                    }),
                    (o.onchange = () => {
                      ae(), (s.value = o.value);
                    });
                })();
            },
            re = (e, t) => {
              e instanceof HTMLElement
                ? t.appendChild(e)
                : "object" == typeof e
                  ? le(e, t)
                  : e && _(t, e);
            },
            le = (e, t) => {
              e.jquery ? ce(t, e) : _(t, e.toString());
            },
            ce = (e, t) => {
              if (((e.textContent = ""), 0 in t))
                for (let n = 0; n in t; n++) e.appendChild(t[n].cloneNode(!0));
              else e.appendChild(t.cloneNode(!0));
            },
            de = (e, t) => {
              const n = M(),
                o = P();
              n &&
                o &&
                (t.showConfirmButton || t.showDenyButton || t.showCancelButton
                  ? W(n)
                  : J(n),
                V(n, t, "actions"),
                (function (e, t, n) {
                  const o = $(),
                    s = B(),
                    a = S();
                  o &&
                    s &&
                    a &&
                    (ue(o, "confirm", n),
                    ue(s, "deny", n),
                    ue(a, "cancel", n),
                    (function (e, t, n, o) {
                      o.buttonsStyling
                        ? (U([e, t, n], i.styled),
                          o.confirmButtonColor &&
                            ((e.style.backgroundColor = o.confirmButtonColor),
                            U(e, i["default-outline"])),
                          o.denyButtonColor &&
                            ((t.style.backgroundColor = o.denyButtonColor),
                            U(t, i["default-outline"])),
                          o.cancelButtonColor &&
                            ((n.style.backgroundColor = o.cancelButtonColor),
                            U(n, i["default-outline"])))
                        : K([e, t, n], i.styled);
                    })(o, s, a, n),
                    n.reverseButtons &&
                      (n.toast
                        ? (e.insertBefore(a, o), e.insertBefore(s, o))
                        : (e.insertBefore(a, t),
                          e.insertBefore(s, t),
                          e.insertBefore(o, t))));
                })(n, o, t),
                _(o, t.loaderHtml || ""),
                V(o, t, "loader"));
            };
          function ue(e, t, n) {
            const o = c(t);
            Q(e, n[`show${o}Button`], "inline-block"),
              _(e, n[`${t}ButtonText`] || ""),
              e.setAttribute("aria-label", n[`${t}ButtonAriaLabel`] || ""),
              (e.className = i[t]),
              V(e, n, `${t}Button`);
          }
          const pe = (e, t) => {
            const n = b();
            n &&
              ((function (e, t) {
                "string" == typeof t
                  ? (e.style.background = t)
                  : t ||
                    U(
                      [document.documentElement, document.body],
                      i["no-backdrop"],
                    );
              })(n, t.backdrop),
              (function (e, t) {
                t &&
                  (t in i
                    ? U(e, i[t])
                    : (d(
                        'The "position" parameter is not valid, defaulting to "center"',
                      ),
                      U(e, i.center)));
              })(n, t.position),
              (function (e, t) {
                t && U(e, i[`grow-${t}`]);
              })(n, t.grow),
              V(n, t, "container"));
          };
          var me = { innerParams: new WeakMap(), domCache: new WeakMap() };
          const we = [
              "input",
              "file",
              "range",
              "select",
              "radio",
              "checkbox",
              "textarea",
            ],
            he = (e) => {
              if (!e.input) return;
              if (!Ce[e.input])
                return void u(
                  `Unexpected type of input! Expected ${Object.keys(Ce).join(" | ")}, got "${e.input}"`,
                );
              const t = ye(e.input);
              if (!t) return;
              const n = Ce[e.input](t, e);
              W(t),
                e.inputAutoFocus &&
                  setTimeout(() => {
                    R(n);
                  });
            },
            ge = (e, t) => {
              const n = x();
              if (!n) return;
              const o = N(n, e);
              if (o) {
                ((e) => {
                  for (let t = 0; t < e.attributes.length; t++) {
                    const n = e.attributes[t].name;
                    ["id", "type", "value", "style"].includes(n) ||
                      e.removeAttribute(n);
                  }
                })(o);
                for (const e in t) o.setAttribute(e, t[e]);
              }
            },
            fe = (e) => {
              if (!e.input) return;
              const t = ye(e.input);
              t && V(t, e, "input");
            },
            be = (e, t) => {
              !e.placeholder &&
                t.inputPlaceholder &&
                (e.placeholder = t.inputPlaceholder);
            },
            ve = (e, t, n) => {
              if (n.inputLabel) {
                const o = document.createElement("label"),
                  s = i["input-label"];
                o.setAttribute("for", e.id),
                  (o.className = s),
                  "object" == typeof n.customClass &&
                    U(o, n.customClass.inputLabel),
                  (o.innerText = n.inputLabel),
                  t.insertAdjacentElement("beforebegin", o);
              }
            },
            ye = (e) => {
              const t = x();
              if (t) return Y(t, i[e] || i.input);
            },
            xe = (e, t) => {
              ["string", "number"].includes(typeof t)
                ? (e.value = `${t}`)
                : f(t) ||
                  d(
                    `Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`,
                  );
            },
            Ce = {};
          (Ce.text =
            Ce.email =
            Ce.password =
            Ce.number =
            Ce.tel =
            Ce.url =
            Ce.search =
            Ce.date =
            Ce["datetime-local"] =
            Ce.time =
            Ce.week =
            Ce.month =
              (e, t) => (
                xe(e, t.inputValue),
                ve(e, e, t),
                be(e, t),
                (e.type = t.input),
                e
              )),
            (Ce.file = (e, t) => (ve(e, e, t), be(e, t), e)),
            (Ce.range = (e, t) => {
              const n = e.querySelector("input"),
                o = e.querySelector("output");
              return (
                xe(n, t.inputValue),
                (n.type = t.input),
                xe(o, t.inputValue),
                ve(n, e, t),
                e
              );
            }),
            (Ce.select = (e, t) => {
              if (((e.textContent = ""), t.inputPlaceholder)) {
                const n = document.createElement("option");
                _(n, t.inputPlaceholder),
                  (n.value = ""),
                  (n.disabled = !0),
                  (n.selected = !0),
                  e.appendChild(n);
              }
              return ve(e, e, t), e;
            }),
            (Ce.radio = (e) => ((e.textContent = ""), e)),
            (Ce.checkbox = (e, t) => {
              const n = N(x(), "checkbox");
              (n.value = "1"), (n.checked = Boolean(t.inputValue));
              const o = e.querySelector("span");
              return _(o, t.inputPlaceholder || t.inputLabel), n;
            }),
            (Ce.textarea = (e, t) => {
              xe(e, t.inputValue), be(e, t), ve(e, e, t);
              return (
                setTimeout(() => {
                  if ("MutationObserver" in window) {
                    const n = parseInt(window.getComputedStyle(x()).width);
                    new MutationObserver(() => {
                      if (!document.body.contains(e)) return;
                      const o =
                        e.offsetWidth +
                        ((s = e),
                        parseInt(window.getComputedStyle(s).marginLeft) +
                          parseInt(window.getComputedStyle(s).marginRight));
                      var s;
                      o > n
                        ? (x().style.width = `${o}px`)
                        : Z(x(), "width", t.width);
                    }).observe(e, {
                      attributes: !0,
                      attributeFilter: ["style"],
                    });
                  }
                }),
                e
              );
            });
          const ke = (e, t) => {
              const n = E();
              n &&
                (X(n),
                V(n, t, "htmlContainer"),
                t.html
                  ? (re(t.html, n), W(n, "block"))
                  : t.text
                    ? ((n.textContent = t.text), W(n, "block"))
                    : J(n),
                ((e, t) => {
                  const n = x();
                  if (!n) return;
                  const o = me.innerParams.get(e),
                    s = !o || t.input !== o.input;
                  we.forEach((e) => {
                    const o = Y(n, i[e]);
                    o &&
                      (ge(e, t.inputAttributes),
                      (o.className = i[e]),
                      s && J(o));
                  }),
                    t.input && (s && he(t), fe(t));
                })(e, t));
            },
            Ee = (e, t) => {
              for (const [n, o] of Object.entries(r)) t.icon !== n && K(e, o);
              U(e, t.icon && r[t.icon]), Le(e, t), Ae(), V(e, t, "icon");
            },
            Ae = () => {
              const e = x();
              if (!e) return;
              const t = window
                  .getComputedStyle(e)
                  .getPropertyValue("background-color"),
                n = e.querySelectorAll(
                  "[class^=swal2-success-circular-line], .swal2-success-fix",
                );
              for (let e = 0; e < n.length; e++) n[e].style.backgroundColor = t;
            },
            Te = (e, t) => {
              if (!t.icon && !t.iconHtml) return;
              let n = e.innerHTML,
                o = "";
              t.iconHtml
                ? (o = $e(t.iconHtml))
                : "success" === t.icon
                  ? ((o =
                      '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n'),
                    (n = n.replace(/ style=".*?"/g, "")))
                  : "error" === t.icon
                    ? (o =
                        '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n')
                    : t.icon &&
                      (o = $e(
                        { question: "?", warning: "!", info: "i" }[t.icon],
                      )),
                n.trim() !== o.trim() && _(e, o);
            },
            Le = (e, t) => {
              if (t.iconColor) {
                (e.style.color = t.iconColor),
                  (e.style.borderColor = t.iconColor);
                for (const n of [
                  ".swal2-success-line-tip",
                  ".swal2-success-line-long",
                  ".swal2-x-mark-line-left",
                  ".swal2-x-mark-line-right",
                ])
                  G(e, n, "background-color", t.iconColor);
                G(e, ".swal2-success-ring", "border-color", t.iconColor);
              }
            },
            $e = (e) => `<div class="${i["icon-content"]}">${e}</div>`,
            Se = (e, t) => {
              const n = t.showClass || {};
              (e.className = `${i.popup} ${ee(e) ? n.popup : ""}`),
                t.toast
                  ? (U(
                      [document.documentElement, document.body],
                      i["toast-shown"],
                    ),
                    U(e, i.toast))
                  : U(e, i.modal),
                V(e, t, "popup"),
                "string" == typeof t.customClass && U(e, t.customClass),
                t.icon && U(e, i[`icon-${t.icon}`]);
            },
            Be = (e) => {
              const t = document.createElement("li");
              return U(t, i["progress-step"]), _(t, e), t;
            },
            Pe = (e) => {
              const t = document.createElement("li");
              return (
                U(t, i["progress-step-line"]),
                e.progressStepsDistance &&
                  Z(t, "width", e.progressStepsDistance),
                t
              );
            },
            Me = (e, t) => {
              ((e, t) => {
                const n = b(),
                  o = x();
                if (n && o) {
                  if (t.toast) {
                    Z(n, "width", t.width), (o.style.width = "100%");
                    const e = P();
                    e && o.insertBefore(e, C());
                  } else Z(o, "width", t.width);
                  Z(o, "padding", t.padding),
                    t.color && (o.style.color = t.color),
                    t.background && (o.style.background = t.background),
                    J(L()),
                    Se(o, t);
                }
              })(0, t),
                pe(0, t),
                ((e, t) => {
                  const n = T();
                  if (!n) return;
                  const { progressSteps: o, currentProgressStep: s } = t;
                  o && 0 !== o.length && void 0 !== s
                    ? (W(n),
                      (n.textContent = ""),
                      s >= o.length &&
                        d(
                          "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)",
                        ),
                      o.forEach((e, a) => {
                        const r = Be(e);
                        if (
                          (n.appendChild(r),
                          a === s && U(r, i["active-progress-step"]),
                          a !== o.length - 1)
                        ) {
                          const e = Pe(t);
                          n.appendChild(e);
                        }
                      }))
                    : J(n);
                })(0, t),
                ((e, t) => {
                  const n = me.innerParams.get(e),
                    o = C();
                  if (o) {
                    if (n && t.icon === n.icon) return Te(o, t), void Ee(o, t);
                    if (t.icon || t.iconHtml) {
                      if (t.icon && -1 === Object.keys(r).indexOf(t.icon))
                        return (
                          u(
                            `Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`,
                          ),
                          void J(o)
                        );
                      W(o),
                        Te(o, t),
                        Ee(o, t),
                        U(o, t.showClass && t.showClass.icon);
                    } else J(o);
                  }
                })(e, t),
                ((e, t) => {
                  const n = A();
                  n &&
                    (t.imageUrl
                      ? (W(n, ""),
                        n.setAttribute("src", t.imageUrl),
                        n.setAttribute("alt", t.imageAlt || ""),
                        Z(n, "width", t.imageWidth),
                        Z(n, "height", t.imageHeight),
                        (n.className = i.image),
                        V(n, t, "image"))
                      : J(n));
                })(0, t),
                ((e, t) => {
                  const n = k();
                  n &&
                    (X(n),
                    Q(n, t.title || t.titleText, "block"),
                    t.title && re(t.title, n),
                    t.titleText && (n.innerText = t.titleText),
                    V(n, t, "title"));
                })(0, t),
                ((e, t) => {
                  const n = H();
                  n &&
                    (_(n, t.closeButtonHtml || ""),
                    V(n, t, "closeButton"),
                    Q(n, t.showCloseButton),
                    n.setAttribute("aria-label", t.closeButtonAriaLabel || ""));
                })(0, t),
                ke(e, t),
                de(0, t),
                ((e, t) => {
                  const n = O();
                  n &&
                    (X(n),
                    Q(n, t.footer, "block"),
                    t.footer && re(t.footer, n),
                    V(n, t, "footer"));
                })(0, t);
              const n = x();
              "function" == typeof t.didRender && n && t.didRender(n),
                o.eventEmitter.emit("didRender", n);
            },
            Oe = () => {
              var e;
              return null === (e = $()) || void 0 === e ? void 0 : e.click();
            },
            je = Object.freeze({
              cancel: "cancel",
              backdrop: "backdrop",
              close: "close",
              esc: "esc",
              timer: "timer",
            }),
            He = (e) => {
              e.keydownTarget &&
                e.keydownHandlerAdded &&
                (e.keydownTarget.removeEventListener(
                  "keydown",
                  e.keydownHandler,
                  { capture: e.keydownListenerCapture },
                ),
                (e.keydownHandlerAdded = !1));
            },
            Ie = (e, t) => {
              var n;
              const o = I();
              if (o.length)
                return (
                  (e += t) === o.length
                    ? (e = 0)
                    : -1 === e && (e = o.length - 1),
                  void o[e].focus()
                );
              null === (n = x()) || void 0 === n || n.focus();
            },
            ze = ["ArrowRight", "ArrowDown"],
            De = ["ArrowLeft", "ArrowUp"],
            _e = (e, t, n) => {
              e &&
                (t.isComposing ||
                  229 === t.keyCode ||
                  (e.stopKeydownPropagation && t.stopPropagation(),
                  "Enter" === t.key
                    ? qe(t, e)
                    : "Tab" === t.key
                      ? Ve(t)
                      : [...ze, ...De].includes(t.key)
                        ? Ne(t.key)
                        : "Escape" === t.key && Re(t, e, n)));
            },
            qe = (e, t) => {
              if (!w(t.allowEnterKey)) return;
              const n = N(x(), t.input);
              if (
                e.target &&
                n &&
                e.target instanceof HTMLElement &&
                e.target.outerHTML === n.outerHTML
              ) {
                if (["textarea", "file"].includes(t.input)) return;
                Oe(), e.preventDefault();
              }
            },
            Ve = (e) => {
              const t = e.target,
                n = I();
              let o = -1;
              for (let e = 0; e < n.length; e++)
                if (t === n[e]) {
                  o = e;
                  break;
                }
              e.shiftKey ? Ie(o, -1) : Ie(o, 1),
                e.stopPropagation(),
                e.preventDefault();
            },
            Ne = (e) => {
              const t = M(),
                n = $(),
                o = B(),
                s = S();
              if (!(t && n && o && s)) return;
              const a = [n, o, s];
              if (
                document.activeElement instanceof HTMLElement &&
                !a.includes(document.activeElement)
              )
                return;
              const i = ze.includes(e)
                ? "nextElementSibling"
                : "previousElementSibling";
              let r = document.activeElement;
              if (r) {
                for (let e = 0; e < t.children.length; e++) {
                  if (((r = r[i]), !r)) return;
                  if (r instanceof HTMLButtonElement && ee(r)) break;
                }
                r instanceof HTMLButtonElement && r.focus();
              }
            },
            Re = (e, t, n) => {
              w(t.allowEscapeKey) && (e.preventDefault(), n(je.esc));
            };
          var Fe = {
            swalPromiseResolve: new WeakMap(),
            swalPromiseReject: new WeakMap(),
          };
          const Ue = () => {
              Array.from(document.body.children).forEach((e) => {
                e.hasAttribute("data-previous-aria-hidden")
                  ? (e.setAttribute(
                      "aria-hidden",
                      e.getAttribute("data-previous-aria-hidden") || "",
                    ),
                    e.removeAttribute("data-previous-aria-hidden"))
                  : e.removeAttribute("aria-hidden");
              });
            },
            Ke = "undefined" != typeof window && !!window.GestureEvent,
            Ye = () => {
              const e = b();
              if (!e) return;
              let t;
              (e.ontouchstart = (e) => {
                t = Ze(e);
              }),
                (e.ontouchmove = (e) => {
                  t && (e.preventDefault(), e.stopPropagation());
                });
            },
            Ze = (e) => {
              const t = e.target,
                n = b(),
                o = E();
              return !(
                !n ||
                !o ||
                We(e) ||
                Je(e) ||
                (t !== n &&
                  (te(n) ||
                    !(t instanceof HTMLElement) ||
                    "INPUT" === t.tagName ||
                    "TEXTAREA" === t.tagName ||
                    (te(o) && o.contains(t))))
              );
            },
            We = (e) =>
              e.touches &&
              e.touches.length &&
              "stylus" === e.touches[0].touchType,
            Je = (e) => e.touches && e.touches.length > 1;
          let Xe = null;
          const Ge = (e) => {
            null === Xe &&
              (document.body.scrollHeight > window.innerHeight ||
                "scroll" === e) &&
              ((Xe = parseInt(
                window
                  .getComputedStyle(document.body)
                  .getPropertyValue("padding-right"),
              )),
              (document.body.style.paddingRight = `${
                Xe +
                (() => {
                  const e = document.createElement("div");
                  (e.className = i["scrollbar-measure"]),
                    document.body.appendChild(e);
                  const t = e.getBoundingClientRect().width - e.clientWidth;
                  return document.body.removeChild(e), t;
                })()
              }px`));
          };
          function Qe(e, t, n, a) {
            D() ? rt(e, a) : (s(n).then(() => rt(e, a)), He(o)),
              Ke
                ? (t.setAttribute("style", "display:none !important"),
                  t.removeAttribute("class"),
                  (t.innerHTML = ""))
                : t.remove(),
              z() &&
                (null !== Xe &&
                  ((document.body.style.paddingRight = `${Xe}px`), (Xe = null)),
                (() => {
                  if (q(document.body, i.iosfix)) {
                    const e = parseInt(document.body.style.top, 10);
                    K(document.body, i.iosfix),
                      (document.body.style.top = ""),
                      (document.body.scrollTop = -1 * e);
                  }
                })(),
                Ue()),
              K(
                [document.documentElement, document.body],
                [i.shown, i["height-auto"], i["no-backdrop"], i["toast-shown"]],
              );
          }
          function et(e) {
            e = st(e);
            const t = Fe.swalPromiseResolve.get(this),
              n = tt(this);
            this.isAwaitingPromise
              ? e.isDismissed || (ot(this), t(e))
              : n && t(e);
          }
          const tt = (e) => {
            const t = x();
            if (!t) return !1;
            const n = me.innerParams.get(e);
            if (!n || q(t, n.hideClass.popup)) return !1;
            K(t, n.showClass.popup), U(t, n.hideClass.popup);
            const o = b();
            return (
              K(o, n.showClass.backdrop),
              U(o, n.hideClass.backdrop),
              at(e, t, n),
              !0
            );
          };
          function nt(e) {
            const t = Fe.swalPromiseReject.get(this);
            ot(this), t && t(e);
          }
          const ot = (e) => {
              e.isAwaitingPromise &&
                (delete e.isAwaitingPromise,
                me.innerParams.get(e) || e._destroy());
            },
            st = (e) =>
              void 0 === e
                ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
                : Object.assign(
                    { isConfirmed: !1, isDenied: !1, isDismissed: !1 },
                    e,
                  ),
            at = (e, t, n) => {
              const s = b(),
                a = ne(t);
              "function" == typeof n.willClose && n.willClose(t),
                o.eventEmitter.emit("willClose", t),
                a
                  ? it(e, t, s, n.returnFocus, n.didClose)
                  : Qe(e, s, n.returnFocus, n.didClose);
            },
            it = (e, t, n, s, a) => {
              (o.swalCloseEventFinishedCallback = Qe.bind(null, e, n, s, a)),
                t.addEventListener("animationend", function (e) {
                  e.target === t &&
                    (o.swalCloseEventFinishedCallback(),
                    delete o.swalCloseEventFinishedCallback);
                });
            },
            rt = (e, t) => {
              setTimeout(() => {
                "function" == typeof t && t.bind(e.params)(),
                  o.eventEmitter.emit("didClose"),
                  e._destroy && e._destroy();
              });
            },
            lt = (e) => {
              let t = x();
              if ((t || new Vn(), (t = x()), !t)) return;
              const n = P();
              D() ? J(C()) : ct(t, e),
                W(n),
                t.setAttribute("data-loading", "true"),
                t.setAttribute("aria-busy", "true"),
                t.focus();
            },
            ct = (e, t) => {
              const n = M(),
                o = P();
              n &&
                o &&
                (!t && ee($()) && (t = $()),
                W(n),
                t &&
                  (J(t),
                  o.setAttribute("data-button-to-replace", t.className),
                  n.insertBefore(o, t)),
                U([e, n], i.loading));
            },
            dt = (e) => (e.checked ? 1 : 0),
            ut = (e) => (e.checked ? e.value : null),
            pt = (e) =>
              e.files && e.files.length
                ? null !== e.getAttribute("multiple")
                  ? e.files
                  : e.files[0]
                : null,
            mt = (e, t) => {
              const n = x();
              if (!n) return;
              const o = (e) => {
                "select" === t.input
                  ? (function (e, t, n) {
                      const o = Y(e, i.select);
                      if (!o) return;
                      const s = (e, t, o) => {
                        const s = document.createElement("option");
                        (s.value = o),
                          _(s, t),
                          (s.selected = gt(o, n.inputValue)),
                          e.appendChild(s);
                      };
                      t.forEach((e) => {
                        const t = e[0],
                          n = e[1];
                        if (Array.isArray(n)) {
                          const e = document.createElement("optgroup");
                          (e.label = t),
                            (e.disabled = !1),
                            o.appendChild(e),
                            n.forEach((t) => s(e, t[1], t[0]));
                        } else s(o, n, t);
                      }),
                        o.focus();
                    })(n, ht(e), t)
                  : "radio" === t.input &&
                    (function (e, t, n) {
                      const o = Y(e, i.radio);
                      if (!o) return;
                      t.forEach((e) => {
                        const t = e[0],
                          s = e[1],
                          a = document.createElement("input"),
                          r = document.createElement("label");
                        (a.type = "radio"),
                          (a.name = i.radio),
                          (a.value = t),
                          gt(t, n.inputValue) && (a.checked = !0);
                        const l = document.createElement("span");
                        _(l, s),
                          (l.className = i.label),
                          r.appendChild(a),
                          r.appendChild(l),
                          o.appendChild(r);
                      });
                      const s = o.querySelectorAll("input");
                      s.length && s[0].focus();
                    })(n, ht(e), t);
              };
              h(t.inputOptions) || f(t.inputOptions)
                ? (lt($()),
                  g(t.inputOptions).then((t) => {
                    e.hideLoading(), o(t);
                  }))
                : "object" == typeof t.inputOptions
                  ? o(t.inputOptions)
                  : u(
                      "Unexpected type of inputOptions! Expected object, Map or Promise, got " +
                        typeof t.inputOptions,
                    );
            },
            wt = (e, t) => {
              const n = e.getInput();
              n &&
                (J(n),
                g(t.inputValue)
                  .then((o) => {
                    (n.value =
                      "number" === t.input ? `${parseFloat(o) || 0}` : `${o}`),
                      W(n),
                      n.focus(),
                      e.hideLoading();
                  })
                  .catch((t) => {
                    u(`Error in inputValue promise: ${t}`),
                      (n.value = ""),
                      W(n),
                      n.focus(),
                      e.hideLoading();
                  }));
            };
          const ht = (e) => {
              const t = [];
              return (
                e instanceof Map
                  ? e.forEach((e, n) => {
                      let o = e;
                      "object" == typeof o && (o = ht(o)), t.push([n, o]);
                    })
                  : Object.keys(e).forEach((n) => {
                      let o = e[n];
                      "object" == typeof o && (o = ht(o)), t.push([n, o]);
                    }),
                t
              );
            },
            gt = (e, t) => !!t && t.toString() === e.toString(),
            ft = (e, t) => {
              const n = me.innerParams.get(e);
              if (!n.input)
                return void u(
                  `The "input" parameter is needed to be set when using returnInputValueOn${c(t)}`,
                );
              const o = e.getInput(),
                s = ((e, t) => {
                  const n = e.getInput();
                  if (!n) return null;
                  switch (t.input) {
                    case "checkbox":
                      return dt(n);
                    case "radio":
                      return ut(n);
                    case "file":
                      return pt(n);
                    default:
                      return t.inputAutoTrim ? n.value.trim() : n.value;
                  }
                })(e, n);
              n.inputValidator
                ? bt(e, s, t)
                : o && !o.checkValidity()
                  ? (e.enableButtons(),
                    e.showValidationMessage(
                      n.validationMessage || o.validationMessage,
                    ))
                  : "deny" === t
                    ? vt(e, s)
                    : Ct(e, s);
            },
            bt = (e, t, n) => {
              const o = me.innerParams.get(e);
              e.disableInput(),
                Promise.resolve()
                  .then(() => g(o.inputValidator(t, o.validationMessage)))
                  .then((o) => {
                    e.enableButtons(),
                      e.enableInput(),
                      o
                        ? e.showValidationMessage(o)
                        : "deny" === n
                          ? vt(e, t)
                          : Ct(e, t);
                  });
            },
            vt = (e, t) => {
              const n = me.innerParams.get(e || void 0);
              n.showLoaderOnDeny && lt(B()),
                n.preDeny
                  ? ((e.isAwaitingPromise = !0),
                    Promise.resolve()
                      .then(() => g(n.preDeny(t, n.validationMessage)))
                      .then((n) => {
                        !1 === n
                          ? (e.hideLoading(), ot(e))
                          : e.close({
                              isDenied: !0,
                              value: void 0 === n ? t : n,
                            });
                      })
                      .catch((t) => xt(e || void 0, t)))
                  : e.close({ isDenied: !0, value: t });
            },
            yt = (e, t) => {
              e.close({ isConfirmed: !0, value: t });
            },
            xt = (e, t) => {
              e.rejectPromise(t);
            },
            Ct = (e, t) => {
              const n = me.innerParams.get(e || void 0);
              n.showLoaderOnConfirm && lt(),
                n.preConfirm
                  ? (e.resetValidationMessage(),
                    (e.isAwaitingPromise = !0),
                    Promise.resolve()
                      .then(() => g(n.preConfirm(t, n.validationMessage)))
                      .then((n) => {
                        ee(L()) || !1 === n
                          ? (e.hideLoading(), ot(e))
                          : yt(e, void 0 === n ? t : n);
                      })
                      .catch((t) => xt(e || void 0, t)))
                  : yt(e, t);
            };
          function kt() {
            const e = me.innerParams.get(this);
            if (!e) return;
            const t = me.domCache.get(this);
            J(t.loader),
              D() ? e.icon && W(C()) : Et(t),
              K([t.popup, t.actions], i.loading),
              t.popup.removeAttribute("aria-busy"),
              t.popup.removeAttribute("data-loading"),
              (t.confirmButton.disabled = !1),
              (t.denyButton.disabled = !1),
              (t.cancelButton.disabled = !1);
          }
          const Et = (e) => {
            const t = e.popup.getElementsByClassName(
              e.loader.getAttribute("data-button-to-replace"),
            );
            t.length
              ? W(t[0], "inline-block")
              : !ee($()) && !ee(B()) && !ee(S()) && J(e.actions);
          };
          function At() {
            const e = me.innerParams.get(this),
              t = me.domCache.get(this);
            return t ? N(t.popup, e.input) : null;
          }
          function Tt(e, t, n) {
            const o = me.domCache.get(e);
            t.forEach((e) => {
              o[e].disabled = n;
            });
          }
          function Lt(e, t) {
            const n = x();
            if (n && e)
              if ("radio" === e.type) {
                const e = n.querySelectorAll(`[name="${i.radio}"]`);
                for (let n = 0; n < e.length; n++) e[n].disabled = t;
              } else e.disabled = t;
          }
          function $t() {
            Tt(this, ["confirmButton", "denyButton", "cancelButton"], !1);
          }
          function St() {
            Tt(this, ["confirmButton", "denyButton", "cancelButton"], !0);
          }
          function Bt() {
            Lt(this.getInput(), !1);
          }
          function Pt() {
            Lt(this.getInput(), !0);
          }
          function Mt(e) {
            const t = me.domCache.get(this),
              n = me.innerParams.get(this);
            _(t.validationMessage, e),
              (t.validationMessage.className = i["validation-message"]),
              n.customClass &&
                n.customClass.validationMessage &&
                U(t.validationMessage, n.customClass.validationMessage),
              W(t.validationMessage);
            const o = this.getInput();
            o &&
              (o.setAttribute("aria-invalid", "true"),
              o.setAttribute("aria-describedby", i["validation-message"]),
              R(o),
              U(o, i.inputerror));
          }
          function Ot() {
            const e = me.domCache.get(this);
            e.validationMessage && J(e.validationMessage);
            const t = this.getInput();
            t &&
              (t.removeAttribute("aria-invalid"),
              t.removeAttribute("aria-describedby"),
              K(t, i.inputerror));
          }
          const jt = {
              title: "",
              titleText: "",
              text: "",
              html: "",
              footer: "",
              icon: void 0,
              iconColor: void 0,
              iconHtml: void 0,
              template: void 0,
              toast: !1,
              animation: !0,
              showClass: {
                popup: "swal2-show",
                backdrop: "swal2-backdrop-show",
                icon: "swal2-icon-show",
              },
              hideClass: {
                popup: "swal2-hide",
                backdrop: "swal2-backdrop-hide",
                icon: "swal2-icon-hide",
              },
              customClass: {},
              target: "body",
              color: void 0,
              backdrop: !0,
              heightAuto: !0,
              allowOutsideClick: !0,
              allowEscapeKey: !0,
              allowEnterKey: !0,
              stopKeydownPropagation: !0,
              keydownListenerCapture: !1,
              showConfirmButton: !0,
              showDenyButton: !1,
              showCancelButton: !1,
              preConfirm: void 0,
              preDeny: void 0,
              confirmButtonText: "OK",
              confirmButtonAriaLabel: "",
              confirmButtonColor: void 0,
              denyButtonText: "No",
              denyButtonAriaLabel: "",
              denyButtonColor: void 0,
              cancelButtonText: "Cancel",
              cancelButtonAriaLabel: "",
              cancelButtonColor: void 0,
              buttonsStyling: !0,
              reverseButtons: !1,
              focusConfirm: !0,
              focusDeny: !1,
              focusCancel: !1,
              returnFocus: !0,
              showCloseButton: !1,
              closeButtonHtml: "&times;",
              closeButtonAriaLabel: "Close this dialog",
              loaderHtml: "",
              showLoaderOnConfirm: !1,
              showLoaderOnDeny: !1,
              imageUrl: void 0,
              imageWidth: void 0,
              imageHeight: void 0,
              imageAlt: "",
              timer: void 0,
              timerProgressBar: !1,
              width: void 0,
              padding: void 0,
              background: void 0,
              input: void 0,
              inputPlaceholder: "",
              inputLabel: "",
              inputValue: "",
              inputOptions: {},
              inputAutoFocus: !0,
              inputAutoTrim: !0,
              inputAttributes: {},
              inputValidator: void 0,
              returnInputValueOnDeny: !1,
              validationMessage: void 0,
              grow: !1,
              position: "center",
              progressSteps: [],
              currentProgressStep: void 0,
              progressStepsDistance: void 0,
              willOpen: void 0,
              didOpen: void 0,
              didRender: void 0,
              willClose: void 0,
              didClose: void 0,
              didDestroy: void 0,
              scrollbarPadding: !0,
            },
            Ht = [
              "allowEscapeKey",
              "allowOutsideClick",
              "background",
              "buttonsStyling",
              "cancelButtonAriaLabel",
              "cancelButtonColor",
              "cancelButtonText",
              "closeButtonAriaLabel",
              "closeButtonHtml",
              "color",
              "confirmButtonAriaLabel",
              "confirmButtonColor",
              "confirmButtonText",
              "currentProgressStep",
              "customClass",
              "denyButtonAriaLabel",
              "denyButtonColor",
              "denyButtonText",
              "didClose",
              "didDestroy",
              "footer",
              "hideClass",
              "html",
              "icon",
              "iconColor",
              "iconHtml",
              "imageAlt",
              "imageHeight",
              "imageUrl",
              "imageWidth",
              "preConfirm",
              "preDeny",
              "progressSteps",
              "returnFocus",
              "reverseButtons",
              "showCancelButton",
              "showCloseButton",
              "showConfirmButton",
              "showDenyButton",
              "text",
              "title",
              "titleText",
              "willClose",
            ],
            It = { allowEnterKey: void 0 },
            zt = [
              "allowOutsideClick",
              "allowEnterKey",
              "backdrop",
              "focusConfirm",
              "focusDeny",
              "focusCancel",
              "returnFocus",
              "heightAuto",
              "keydownListenerCapture",
            ],
            Dt = (e) => Object.prototype.hasOwnProperty.call(jt, e),
            _t = (e) => -1 !== Ht.indexOf(e),
            qt = (e) => It[e],
            Vt = (e) => {
              Dt(e) || d(`Unknown parameter "${e}"`);
            },
            Nt = (e) => {
              zt.includes(e) &&
                d(`The parameter "${e}" is incompatible with toasts`);
            },
            Rt = (e) => {
              const t = qt(e);
              t && m(e, t);
            };
          function Ft(e) {
            const t = x(),
              n = me.innerParams.get(this);
            if (!t || q(t, n.hideClass.popup))
              return void d(
                "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.",
              );
            const o = Ut(e),
              s = Object.assign({}, n, o);
            Me(this, s),
              me.innerParams.set(this, s),
              Object.defineProperties(this, {
                params: {
                  value: Object.assign({}, this.params, e),
                  writable: !1,
                  enumerable: !0,
                },
              });
          }
          const Ut = (e) => {
            const t = {};
            return (
              Object.keys(e).forEach((n) => {
                _t(n) ? (t[n] = e[n]) : d(`Invalid parameter to update: ${n}`);
              }),
              t
            );
          };
          function Kt() {
            const e = me.domCache.get(this),
              t = me.innerParams.get(this);
            t
              ? (e.popup &&
                  o.swalCloseEventFinishedCallback &&
                  (o.swalCloseEventFinishedCallback(),
                  delete o.swalCloseEventFinishedCallback),
                "function" == typeof t.didDestroy && t.didDestroy(),
                o.eventEmitter.emit("didDestroy"),
                Yt(this))
              : Zt(this);
          }
          const Yt = (e) => {
              Zt(e),
                delete e.params,
                delete o.keydownHandler,
                delete o.keydownTarget,
                delete o.currentInstance;
            },
            Zt = (e) => {
              e.isAwaitingPromise
                ? (Wt(me, e), (e.isAwaitingPromise = !0))
                : (Wt(Fe, e),
                  Wt(me, e),
                  delete e.isAwaitingPromise,
                  delete e.disableButtons,
                  delete e.enableButtons,
                  delete e.getInput,
                  delete e.disableInput,
                  delete e.enableInput,
                  delete e.hideLoading,
                  delete e.disableLoading,
                  delete e.showValidationMessage,
                  delete e.resetValidationMessage,
                  delete e.close,
                  delete e.closePopup,
                  delete e.closeModal,
                  delete e.closeToast,
                  delete e.rejectPromise,
                  delete e.update,
                  delete e._destroy);
            },
            Wt = (e, t) => {
              for (const n in e) e[n].delete(t);
            };
          var Jt = Object.freeze({
            __proto__: null,
            _destroy: Kt,
            close: et,
            closeModal: et,
            closePopup: et,
            closeToast: et,
            disableButtons: St,
            disableInput: Pt,
            disableLoading: kt,
            enableButtons: $t,
            enableInput: Bt,
            getInput: At,
            handleAwaitingPromise: ot,
            hideLoading: kt,
            rejectPromise: nt,
            resetValidationMessage: Ot,
            showValidationMessage: Mt,
            update: Ft,
          });
          const Xt = (e, t, n) => {
              t.popup.onclick = () => {
                (e && (Gt(e) || e.timer || e.input)) || n(je.close);
              };
            },
            Gt = (e) =>
              !!(
                e.showConfirmButton ||
                e.showDenyButton ||
                e.showCancelButton ||
                e.showCloseButton
              );
          let Qt = !1;
          const en = (e) => {
              e.popup.onmousedown = () => {
                e.container.onmouseup = function (t) {
                  (e.container.onmouseup = () => {}),
                    t.target === e.container && (Qt = !0);
                };
              };
            },
            tn = (e) => {
              e.container.onmousedown = (t) => {
                t.target === e.container && t.preventDefault(),
                  (e.popup.onmouseup = function (t) {
                    (e.popup.onmouseup = () => {}),
                      (t.target === e.popup ||
                        (t.target instanceof HTMLElement &&
                          e.popup.contains(t.target))) &&
                        (Qt = !0);
                  });
              };
            },
            nn = (e, t, n) => {
              t.container.onclick = (o) => {
                Qt
                  ? (Qt = !1)
                  : o.target === t.container &&
                    w(e.allowOutsideClick) &&
                    n(je.backdrop);
              };
            },
            on = (e) =>
              e instanceof Element ||
              ((e) => "object" == typeof e && e.jquery)(e);
          const sn = () => {
              if (o.timeout)
                return (
                  (() => {
                    const e = j();
                    if (!e) return;
                    const t = parseInt(window.getComputedStyle(e).width);
                    e.style.removeProperty("transition"),
                      (e.style.width = "100%");
                    const n =
                      (t / parseInt(window.getComputedStyle(e).width)) * 100;
                    e.style.width = `${n}%`;
                  })(),
                  o.timeout.stop()
                );
            },
            an = () => {
              if (o.timeout) {
                const e = o.timeout.start();
                return oe(e), e;
              }
            };
          let rn = !1;
          const ln = {};
          const cn = (e) => {
            for (let t = e.target; t && t !== document; t = t.parentNode)
              for (const e in ln) {
                const n = t.getAttribute(e);
                if (n) return void ln[e].fire({ template: n });
              }
          };
          o.eventEmitter = new (class {
            constructor() {
              this.events = {};
            }
            _getHandlersByEventName(e) {
              return (
                void 0 === this.events[e] && (this.events[e] = []),
                this.events[e]
              );
            }
            on(e, t) {
              const n = this._getHandlersByEventName(e);
              n.includes(t) || n.push(t);
            }
            once(e, t) {
              var n = this;
              const o = function () {
                n.removeListener(e, o);
                for (
                  var s = arguments.length, a = new Array(s), i = 0;
                  i < s;
                  i++
                )
                  a[i] = arguments[i];
                t.apply(n, a);
              };
              this.on(e, o);
            }
            emit(e) {
              for (
                var t = arguments.length,
                  n = new Array(t > 1 ? t - 1 : 0),
                  o = 1;
                o < t;
                o++
              )
                n[o - 1] = arguments[o];
              this._getHandlersByEventName(e).forEach((e) => {
                try {
                  e.apply(this, n);
                } catch (e) {
                  console.error(e);
                }
              });
            }
            removeListener(e, t) {
              const n = this._getHandlersByEventName(e),
                o = n.indexOf(t);
              o > -1 && n.splice(o, 1);
            }
            removeAllListeners(e) {
              void 0 !== this.events[e] && (this.events[e].length = 0);
            }
            reset() {
              this.events = {};
            }
          })();
          var dn = Object.freeze({
            __proto__: null,
            argsToParams: (e) => {
              const t = {};
              return (
                "object" != typeof e[0] || on(e[0])
                  ? ["title", "html", "icon"].forEach((n, o) => {
                      const s = e[o];
                      "string" == typeof s || on(s)
                        ? (t[n] = s)
                        : void 0 !== s &&
                          u(
                            `Unexpected type of ${n}! Expected "string" or "Element", got ${typeof s}`,
                          );
                    })
                  : Object.assign(t, e[0]),
                t
              );
            },
            bindClickHandler: function () {
              (ln[
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "data-swal-template"
              ] = this),
                rn || (document.body.addEventListener("click", cn), (rn = !0));
            },
            clickCancel: () => {
              var e;
              return null === (e = S()) || void 0 === e ? void 0 : e.click();
            },
            clickConfirm: Oe,
            clickDeny: () => {
              var e;
              return null === (e = B()) || void 0 === e ? void 0 : e.click();
            },
            enableLoading: lt,
            fire: function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return new this(...t);
            },
            getActions: M,
            getCancelButton: S,
            getCloseButton: H,
            getConfirmButton: $,
            getContainer: b,
            getDenyButton: B,
            getFocusableElements: I,
            getFooter: O,
            getHtmlContainer: E,
            getIcon: C,
            getIconContent: () => y(i["icon-content"]),
            getImage: A,
            getInputLabel: () => y(i["input-label"]),
            getLoader: P,
            getPopup: x,
            getProgressSteps: T,
            getTimerLeft: () => o.timeout && o.timeout.getTimerLeft(),
            getTimerProgressBar: j,
            getTitle: k,
            getValidationMessage: L,
            increaseTimer: (e) => {
              if (o.timeout) {
                const t = o.timeout.increase(e);
                return oe(t, !0), t;
              }
            },
            isDeprecatedParameter: qt,
            isLoading: () => {
              const e = x();
              return !!e && e.hasAttribute("data-loading");
            },
            isTimerRunning: () => !(!o.timeout || !o.timeout.isRunning()),
            isUpdatableParameter: _t,
            isValidParameter: Dt,
            isVisible: () => ee(x()),
            mixin: function (e) {
              return class extends this {
                _main(t, n) {
                  return super._main(t, Object.assign({}, e, n));
                }
              };
            },
            off: (e, t) => {
              e
                ? t
                  ? o.eventEmitter.removeListener(e, t)
                  : o.eventEmitter.removeAllListeners(e)
                : o.eventEmitter.reset();
            },
            on: (e, t) => {
              o.eventEmitter.on(e, t);
            },
            once: (e, t) => {
              o.eventEmitter.once(e, t);
            },
            resumeTimer: an,
            showLoading: lt,
            stopTimer: sn,
            toggleTimer: () => {
              const e = o.timeout;
              return e && (e.running ? sn() : an());
            },
          });
          class un {
            constructor(e, t) {
              (this.callback = e),
                (this.remaining = t),
                (this.running = !1),
                this.start();
            }
            start() {
              return (
                this.running ||
                  ((this.running = !0),
                  (this.started = new Date()),
                  (this.id = setTimeout(this.callback, this.remaining))),
                this.remaining
              );
            }
            stop() {
              return (
                this.started &&
                  this.running &&
                  ((this.running = !1),
                  clearTimeout(this.id),
                  (this.remaining -=
                    new Date().getTime() - this.started.getTime())),
                this.remaining
              );
            }
            increase(e) {
              const t = this.running;
              return (
                t && this.stop(),
                (this.remaining += e),
                t && this.start(),
                this.remaining
              );
            }
            getTimerLeft() {
              return (
                this.running && (this.stop(), this.start()), this.remaining
              );
            }
            isRunning() {
              return this.running;
            }
          }
          const pn = ["swal-title", "swal-html", "swal-footer"],
            mn = (e) => {
              const t = {};
              return (
                Array.from(e.querySelectorAll("swal-param")).forEach((e) => {
                  xn(e, ["name", "value"]);
                  const n = e.getAttribute("name"),
                    o = e.getAttribute("value");
                  n &&
                    o &&
                    (t[n] =
                      "boolean" == typeof jt[n]
                        ? "false" !== o
                        : "object" == typeof jt[n]
                          ? JSON.parse(o)
                          : o);
                }),
                t
              );
            },
            wn = (e) => {
              const t = {};
              return (
                Array.from(e.querySelectorAll("swal-function-param")).forEach(
                  (e) => {
                    const n = e.getAttribute("name"),
                      o = e.getAttribute("value");
                    n && o && (t[n] = new Function(`return ${o}`)());
                  },
                ),
                t
              );
            },
            hn = (e) => {
              const t = {};
              return (
                Array.from(e.querySelectorAll("swal-button")).forEach((e) => {
                  xn(e, ["type", "color", "aria-label"]);
                  const n = e.getAttribute("type");
                  n &&
                    ["confirm", "cancel", "deny"].includes(n) &&
                    ((t[`${n}ButtonText`] = e.innerHTML),
                    (t[`show${c(n)}Button`] = !0),
                    e.hasAttribute("color") &&
                      (t[`${n}ButtonColor`] = e.getAttribute("color")),
                    e.hasAttribute("aria-label") &&
                      (t[`${n}ButtonAriaLabel`] =
                        e.getAttribute("aria-label")));
                }),
                t
              );
            },
            gn = (e) => {
              const t = {},
                n = e.querySelector("swal-image");
              return (
                n &&
                  (xn(n, ["src", "width", "height", "alt"]),
                  n.hasAttribute("src") &&
                    (t.imageUrl = n.getAttribute("src") || void 0),
                  n.hasAttribute("width") &&
                    (t.imageWidth = n.getAttribute("width") || void 0),
                  n.hasAttribute("height") &&
                    (t.imageHeight = n.getAttribute("height") || void 0),
                  n.hasAttribute("alt") &&
                    (t.imageAlt = n.getAttribute("alt") || void 0)),
                t
              );
            },
            fn = (e) => {
              const t = {},
                n = e.querySelector("swal-icon");
              return (
                n &&
                  (xn(n, ["type", "color"]),
                  n.hasAttribute("type") && (t.icon = n.getAttribute("type")),
                  n.hasAttribute("color") &&
                    (t.iconColor = n.getAttribute("color")),
                  (t.iconHtml = n.innerHTML)),
                t
              );
            },
            bn = (e) => {
              const t = {},
                n = e.querySelector("swal-input");
              n &&
                (xn(n, ["type", "label", "placeholder", "value"]),
                (t.input = n.getAttribute("type") || "text"),
                n.hasAttribute("label") &&
                  (t.inputLabel = n.getAttribute("label")),
                n.hasAttribute("placeholder") &&
                  (t.inputPlaceholder = n.getAttribute("placeholder")),
                n.hasAttribute("value") &&
                  (t.inputValue = n.getAttribute("value")));
              const o = Array.from(e.querySelectorAll("swal-input-option"));
              return (
                o.length &&
                  ((t.inputOptions = {}),
                  o.forEach((e) => {
                    xn(e, ["value"]);
                    const n = e.getAttribute("value");
                    if (!n) return;
                    const o = e.innerHTML;
                    t.inputOptions[n] = o;
                  })),
                t
              );
            },
            vn = (e, t) => {
              const n = {};
              for (const o in t) {
                const s = t[o],
                  a = e.querySelector(s);
                a &&
                  (xn(a, []),
                  (n[s.replace(/^swal-/, "")] = a.innerHTML.trim()));
              }
              return n;
            },
            yn = (e) => {
              const t = pn.concat([
                "swal-param",
                "swal-function-param",
                "swal-button",
                "swal-image",
                "swal-icon",
                "swal-input",
                "swal-input-option",
              ]);
              Array.from(e.children).forEach((e) => {
                const n = e.tagName.toLowerCase();
                t.includes(n) || d(`Unrecognized element <${n}>`);
              });
            },
            xn = (e, t) => {
              Array.from(e.attributes).forEach((n) => {
                -1 === t.indexOf(n.name) &&
                  d([
                    `Unrecognized attribute "${n.name}" on <${e.tagName.toLowerCase()}>.`,
                    t.length
                      ? `Allowed attributes are: ${t.join(", ")}`
                      : "To set the value, use HTML within the element.",
                  ]);
              });
            },
            Cn = (e) => {
              const t = b(),
                n = x();
              "function" == typeof e.willOpen && e.willOpen(n),
                o.eventEmitter.emit("willOpen", n);
              const s = window.getComputedStyle(document.body).overflowY;
              Tn(t, n, e),
                setTimeout(() => {
                  En(t, n);
                }, 10),
                z() &&
                  (An(t, e.scrollbarPadding, s),
                  (() => {
                    const e = b();
                    Array.from(document.body.children).forEach((t) => {
                      t.contains(e) ||
                        (t.hasAttribute("aria-hidden") &&
                          t.setAttribute(
                            "data-previous-aria-hidden",
                            t.getAttribute("aria-hidden") || "",
                          ),
                        t.setAttribute("aria-hidden", "true"));
                    });
                  })()),
                D() ||
                  o.previousActiveElement ||
                  (o.previousActiveElement = document.activeElement),
                "function" == typeof e.didOpen &&
                  setTimeout(() => e.didOpen(n)),
                o.eventEmitter.emit("didOpen", n),
                K(t, i["no-transition"]);
            },
            kn = (e) => {
              const t = x();
              if (e.target !== t) return;
              const n = b();
              t.removeEventListener("animationend", kn),
                (n.style.overflowY = "auto");
            },
            En = (e, t) => {
              ne(t)
                ? ((e.style.overflowY = "hidden"),
                  t.addEventListener("animationend", kn))
                : (e.style.overflowY = "auto");
            },
            An = (e, t, n) => {
              (() => {
                if (Ke && !q(document.body, i.iosfix)) {
                  const e = document.body.scrollTop;
                  (document.body.style.top = -1 * e + "px"),
                    U(document.body, i.iosfix),
                    Ye();
                }
              })(),
                t && "hidden" !== n && Ge(n),
                setTimeout(() => {
                  e.scrollTop = 0;
                });
            },
            Tn = (e, t, n) => {
              U(e, n.showClass.backdrop),
                n.animation
                  ? (t.style.setProperty("opacity", "0", "important"),
                    W(t, "grid"),
                    setTimeout(() => {
                      U(t, n.showClass.popup),
                        t.style.removeProperty("opacity");
                    }, 10))
                  : W(t, "grid"),
                U([document.documentElement, document.body], i.shown),
                n.heightAuto &&
                  n.backdrop &&
                  !n.toast &&
                  U(
                    [document.documentElement, document.body],
                    i["height-auto"],
                  );
            };
          var Ln = (e, t) =>
              /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(e)
                ? Promise.resolve()
                : Promise.resolve(t || "Invalid email address"),
            $n = (e, t) =>
              /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
                e,
              )
                ? Promise.resolve()
                : Promise.resolve(t || "Invalid URL");
          function Sn(e) {
            (function (e) {
              e.inputValidator ||
                ("email" === e.input && (e.inputValidator = Ln),
                "url" === e.input && (e.inputValidator = $n));
            })(e),
              e.showLoaderOnConfirm &&
                !e.preConfirm &&
                d(
                  "showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request",
                ),
              (function (e) {
                (!e.target ||
                  ("string" == typeof e.target &&
                    !document.querySelector(e.target)) ||
                  ("string" != typeof e.target && !e.target.appendChild)) &&
                  (d('Target parameter is not valid, defaulting to "body"'),
                  (e.target = "body"));
              })(e),
              "string" == typeof e.title &&
                (e.title = e.title.split("\n").join("<br />")),
              ie(e);
          }
          let Bn;
          var Pn = new WeakMap();
          class Mn {
            constructor() {
              if ((n(this, Pn, void 0), "undefined" == typeof window)) return;
              Bn = this;
              for (
                var t = arguments.length, o = new Array(t), s = 0;
                s < t;
                s++
              )
                o[s] = arguments[s];
              const a = Object.freeze(this.constructor.argsToParams(o));
              var i, r, l;
              (this.params = a),
                (this.isAwaitingPromise = !1),
                (i = Pn),
                (r = this),
                (l = this._main(Bn.params)),
                i.set(e(i, r), l);
            }
            _main(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if (
                (((e) => {
                  !1 === e.backdrop &&
                    e.allowOutsideClick &&
                    d(
                      '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`',
                    );
                  for (const t in e) Vt(t), e.toast && Nt(t), Rt(t);
                })(Object.assign({}, t, e)),
                o.currentInstance)
              ) {
                const e = Fe.swalPromiseResolve.get(o.currentInstance),
                  { isAwaitingPromise: t } = o.currentInstance;
                o.currentInstance._destroy(),
                  t || e({ isDismissed: !0 }),
                  z() && Ue();
              }
              o.currentInstance = Bn;
              const n = jn(e, t);
              Sn(n),
                Object.freeze(n),
                o.timeout && (o.timeout.stop(), delete o.timeout),
                clearTimeout(o.restoreFocusTimeout);
              const s = Hn(Bn);
              return Me(Bn, n), me.innerParams.set(Bn, n), On(Bn, s, n);
            }
            then(e) {
              return t(Pn, this).then(e);
            }
            finally(e) {
              return t(Pn, this).finally(e);
            }
          }
          const On = (e, t, n) =>
              new Promise((s, a) => {
                const i = (t) => {
                  e.close({ isDismissed: !0, dismiss: t });
                };
                Fe.swalPromiseResolve.set(e, s),
                  Fe.swalPromiseReject.set(e, a),
                  (t.confirmButton.onclick = () => {
                    ((e) => {
                      const t = me.innerParams.get(e);
                      e.disableButtons(),
                        t.input ? ft(e, "confirm") : Ct(e, !0);
                    })(e);
                  }),
                  (t.denyButton.onclick = () => {
                    ((e) => {
                      const t = me.innerParams.get(e);
                      e.disableButtons(),
                        t.returnInputValueOnDeny ? ft(e, "deny") : vt(e, !1);
                    })(e);
                  }),
                  (t.cancelButton.onclick = () => {
                    ((e, t) => {
                      e.disableButtons(), t(je.cancel);
                    })(e, i);
                  }),
                  (t.closeButton.onclick = () => {
                    i(je.close);
                  }),
                  ((e, t, n) => {
                    e.toast ? Xt(e, t, n) : (en(t), tn(t), nn(e, t, n));
                  })(n, t, i),
                  ((e, t, n) => {
                    He(e),
                      t.toast ||
                        ((e.keydownHandler = (e) => _e(t, e, n)),
                        (e.keydownTarget = t.keydownListenerCapture
                          ? window
                          : x()),
                        (e.keydownListenerCapture = t.keydownListenerCapture),
                        e.keydownTarget.addEventListener(
                          "keydown",
                          e.keydownHandler,
                          { capture: e.keydownListenerCapture },
                        ),
                        (e.keydownHandlerAdded = !0));
                  })(o, n, i),
                  ((e, t) => {
                    "select" === t.input || "radio" === t.input
                      ? mt(e, t)
                      : ["text", "email", "number", "tel", "textarea"].some(
                          (e) => e === t.input,
                        ) &&
                        (h(t.inputValue) || f(t.inputValue)) &&
                        (lt($()), wt(e, t));
                  })(e, n),
                  Cn(n),
                  In(o, n, i),
                  zn(t, n),
                  setTimeout(() => {
                    t.container.scrollTop = 0;
                  });
              }),
            jn = (e, t) => {
              const n = ((e) => {
                  const t =
                    "string" == typeof e.template
                      ? document.querySelector(e.template)
                      : e.template;
                  if (!t) return {};
                  const n = t.content;
                  return (
                    yn(n),
                    Object.assign(
                      mn(n),
                      wn(n),
                      hn(n),
                      gn(n),
                      fn(n),
                      bn(n),
                      vn(n, pn),
                    )
                  );
                })(e),
                o = Object.assign({}, jt, t, n, e);
              return (
                (o.showClass = Object.assign({}, jt.showClass, o.showClass)),
                (o.hideClass = Object.assign({}, jt.hideClass, o.hideClass)),
                !1 === o.animation &&
                  ((o.showClass = { backdrop: "swal2-noanimation" }),
                  (o.hideClass = {})),
                o
              );
            },
            Hn = (e) => {
              const t = {
                popup: x(),
                container: b(),
                actions: M(),
                confirmButton: $(),
                denyButton: B(),
                cancelButton: S(),
                loader: P(),
                closeButton: H(),
                validationMessage: L(),
                progressSteps: T(),
              };
              return me.domCache.set(e, t), t;
            },
            In = (e, t, n) => {
              const o = j();
              J(o),
                t.timer &&
                  ((e.timeout = new un(() => {
                    n("timer"), delete e.timeout;
                  }, t.timer)),
                  t.timerProgressBar &&
                    (W(o),
                    V(o, t, "timerProgressBar"),
                    setTimeout(() => {
                      e.timeout && e.timeout.running && oe(t.timer);
                    })));
            },
            zn = (e, t) => {
              if (!t.toast)
                return w(t.allowEnterKey)
                  ? void (Dn(e) || _n(e, t) || Ie(-1, 1))
                  : (m("allowEnterKey"), void qn());
            },
            Dn = (e) => {
              const t = e.popup.querySelectorAll("[autofocus]");
              for (const e of t)
                if (e instanceof HTMLElement && ee(e)) return e.focus(), !0;
              return !1;
            },
            _n = (e, t) =>
              t.focusDeny && ee(e.denyButton)
                ? (e.denyButton.focus(), !0)
                : t.focusCancel && ee(e.cancelButton)
                  ? (e.cancelButton.focus(), !0)
                  : !(
                      !t.focusConfirm ||
                      !ee(e.confirmButton) ||
                      (e.confirmButton.focus(), 0)
                    ),
            qn = () => {
              document.activeElement instanceof HTMLElement &&
                "function" == typeof document.activeElement.blur &&
                document.activeElement.blur();
            };
          if (
            "undefined" != typeof window &&
            /^ru\b/.test(navigator.language) &&
            location.host.match(/\.(ru|su|by|xn--p1ai)$/)
          ) {
            const e = new Date(),
              t = localStorage.getItem("swal-initiation");
            t
              ? (e.getTime() - Date.parse(t)) / 864e5 > 3 &&
                setTimeout(() => {
                  document.body.style.pointerEvents = "none";
                  const e = document.createElement("audio");
                  (e.src =
                    "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3"),
                    (e.loop = !0),
                    document.body.appendChild(e),
                    setTimeout(() => {
                      e.play().catch(() => {});
                    }, 2500);
                }, 500)
              : localStorage.setItem("swal-initiation", `${e}`);
          }
          (Mn.prototype.disableButtons = St),
            (Mn.prototype.enableButtons = $t),
            (Mn.prototype.getInput = At),
            (Mn.prototype.disableInput = Pt),
            (Mn.prototype.enableInput = Bt),
            (Mn.prototype.hideLoading = kt),
            (Mn.prototype.disableLoading = kt),
            (Mn.prototype.showValidationMessage = Mt),
            (Mn.prototype.resetValidationMessage = Ot),
            (Mn.prototype.close = et),
            (Mn.prototype.closePopup = et),
            (Mn.prototype.closeModal = et),
            (Mn.prototype.closeToast = et),
            (Mn.prototype.rejectPromise = nt),
            (Mn.prototype.update = Ft),
            (Mn.prototype._destroy = Kt),
            Object.assign(Mn, dn),
            Object.keys(Jt).forEach((e) => {
              Mn[e] = function () {
                return Bn && Bn[e] ? Bn[e](...arguments) : null;
              };
            }),
            (Mn.DismissReason = je),
            (Mn.version = "11.14.2");
          const Vn = Mn;
          return (Vn.default = Vn), Vn;
        })()),
          void 0 !== this &&
            this.Sweetalert2 &&
            (this.swal =
              this.sweetAlert =
              this.Swal =
              this.SweetAlert =
                this.Sweetalert2),
          "undefined" != typeof document &&
            (function (e, t) {
              var n = e.createElement("style");
              if (
                (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet)
              )
                n.styleSheet.disabled || (n.styleSheet.cssText = t);
              else
                try {
                  n.innerHTML = t;
                } catch (e) {
                  n.innerText = t;
                }
            })(
              document,
              '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:hsl(0,0%,33%);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid hsl(0,0%,85%);border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:hsl(0,0%,94%);color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:rgb(249.95234375,205.965625,167.74765625);color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:rgb(156.7033492823,224.2822966507,246.2966507177);color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:rgb(200.8064516129,217.9677419355,225.1935483871);color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}',
            );
      },
    },
    t = {};
  function n(o) {
    var s = t[o];
    if (void 0 !== s) return s.exports;
    var a = (t[o] = { id: o, exports: {} });
    return e[o].call(a.exports, a, a.exports, n), a.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) &&
          !n.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.nc = void 0),
    (() => {
      "use strict";
      var e = n(72),
        t = n.n(e),
        o = n(825),
        s = n.n(o),
        a = n(659),
        i = n.n(a),
        r = n(56),
        l = n.n(r),
        c = n(540),
        d = n.n(c),
        u = n(113),
        p = n.n(u),
        m = n(958),
        w = {};
      (w.styleTagTransform = p()),
        (w.setAttributes = l()),
        (w.insert = i().bind(null, "head")),
        (w.domAPI = s()),
        (w.insertStyleElement = d()),
        t()(m.A, w),
        m.A && m.A.locals && m.A.locals;
      const h = "https://notes-api.dicoding.dev/v2",
        g = "sort",
        f = "scope",
        b = "render_notes",
        v = "store_note",
        y = "archive_note",
        x = "unarchive_note",
        C = "delete_note",
        k = (e, t) =>
          "desc" == localStorage.getItem(g)
            ? new Date(t.createdAt).getTime() - new Date(e.createdAt).getTime()
            : new Date(e.createdAt).getTime() - new Date(t.createdAt).getTime();
      document.addEventListener(
        b,
        async (e) => {
          let t = { day: "numeric", month: "long", year: "numeric" },
            n = [];
          const o = document.querySelector("notes-container");
          (n =
            "true" === localStorage.getItem(f)
              ? await (async () => {
                  let e = [];
                  return (
                    (e = await fetch(`${h}/notes/archived`)
                      .then((e) => e.json())
                      .then((e) => {
                        if (!e.error) return e.data;
                        console.log(e);
                      })
                      .catch((e) => {
                        console.log(e);
                      })),
                    e
                  );
                })()
              : await (async () => {
                  let e = [];
                  return (
                    (e = await fetch(`${h}/notes`)
                      .then((e) => e.json())
                      .then((e) => {
                        if (!e.error) return e.data;
                        console.log(e);
                      })
                      .catch((e) => {
                        console.log(e);
                      })),
                    e
                  );
                })()),
            n.sort(k),
            (o.innerHTML = ""),
            n.forEach((e) => {
              let n = document.createElement("note-item");
              n.setAttribute("notes-id", e.id),
                n.setAttribute("notes-title", e.title),
                n.setAttribute("notes-body", e.body),
                n.setAttribute("notes-archived", e.archived),
                n.setAttribute(
                  "notes-created",
                  new Date(e.createdAt).toLocaleDateString("en-UK", t),
                ),
                o.appendChild(n);
            });
        },
        !1,
      ),
        document.addEventListener(
          C,
          async (e) => {
            let { id: t } = e.detail;
            try {
              if (!t) throw new ClientError("Id tidak valid");
              let e = await (async (e) =>
                await fetch(`${h}/notes/${e}`, { method: "DELETE" })
                  .then((e) => e.json())
                  .then((e) => "success" == e.status)
                  .catch((e) => {
                    console.log(e.getMessage());
                  }))(t);
              e
                ? (document.dispatchEvent(new CustomEvent(b)),
                  console.log("DELETE NOTE: success"))
                : console.log("DELETE NOTE: failed");
            } catch (e) {}
          },
          !1,
        ),
        document.addEventListener(
          v,
          async (e) => {
            let { title: t, body: n } = e.detail;
            (
              await (async (e) =>
                await fetch(`${h}/notes`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(e),
                })
                  .then((e) => e.json())
                  .then((e) => {
                    if (!e.error) return e.data;
                    console.log(e);
                  })
                  .catch((e) => {
                    console.log(e);
                  }))({ title: t, body: n })
            ).id && document.dispatchEvent(new CustomEvent(b));
          },
          !1,
        ),
        document.addEventListener(
          y,
          async (e) => {
            let { id: t } = e.detail,
              n = await (async (e) =>
                await fetch(`${h}/notes/${e}/archive`, { method: "POST" })
                  .then((e) => e.json())
                  .then((e) => "success" == e.status)
                  .catch((e) => {
                    console.log(e.getMessage());
                  }))(t);
            n
              ? (document.dispatchEvent(new CustomEvent(b)),
                console.log("ARCHIVE NOTE: success"))
              : console.log("ARCHIVE NOTE: failed");
          },
          !1,
        ),
        document.addEventListener(
          x,
          async (e) => {
            let { id: t } = e.detail,
              n = await (async (e) =>
                await fetch(`${h}/notes/${e}/unarchive`, { method: "POST" })
                  .then((e) => e.json())
                  .then((e) => "success" == e.status)
                  .catch((e) => {
                    console.log(e.getMessage());
                  }))(t);
            n
              ? (document.dispatchEvent(new CustomEvent(b)),
                console.log("UNARCHIVE NOTE: success"))
              : console.log("UNARCHIVE NOTE: failed");
          },
          !1,
        );
      var E = n(465);
      class A extends HTMLElement {
        static observedAttributes = ["notes-id", "notes-title", "notes-body"];
        constructor() {
          super();
        }
        connectedCallback() {
          const e = document.createElement("h3");
          e.textContent = this.getAttribute("notes-title");
          const t = document.createElement("p");
          t.innerHTML = this.getAttribute("notes-body");
          const n = document.createElement("p");
          (n.innerHTML = this.getAttribute("notes-created")),
            (n.style = "margin-bottom: 0px;");
          const o = document.createElement("a");
          (o.innerHTML = JSON.parse(this.getAttribute("notes-archived"))
            ? "Activate"
            : "Archive"),
            (o.style = "font-size: smaller; color: #4379F2; cursor: pointer;"),
            o.addEventListener("click", this.archive.bind(this));
          const s = document.createElement("a");
          (s.innerHTML = "Delete"),
            (s.style =
              "font-size: smaller; color: #4379F2; cursor: pointer; margin-left: 4px;"),
            s.addEventListener("click", this.destroy.bind(this)),
            this.append(e, t, n, o, s);
        }
        archive() {
          const e = this.getAttribute("notes-id");
          "true" == this.getAttribute("notes-archived")
            ? (document.dispatchEvent(
                new CustomEvent(x, { detail: { id: e } }),
              ),
              E.fire("Catatan berhasil di unarchive"))
            : (document.dispatchEvent(
                new CustomEvent(y, { detail: { id: e } }),
              ),
              E.fire("Catatan berhasil di archive"));
        }
        destroy() {
          let e = this.getAttribute("notes-id");
          document.dispatchEvent(new CustomEvent(C, { detail: { id: e } })) &&
            document.dispatchEvent(new CustomEvent(b));
        }
      }
      customElements.define("note-item", A);
      class T extends HTMLElement {
        _shadowRoot = null;
        constructor() {
          super(), (this._shadowRoot = this.attachShadow({ mode: "closed" }));
        }
        renderStyle() {
          let e = document.createElement("style");
          return (
            (e.textContent =
              '\n            header > * {\n                color: white;\n                font-family: "Caveat", sans-serif;\n            }\n\n            header h2 {\n                font-size: 2rem;\n            }\n\n            @media screen and (min-width: 768px) {\n                header {\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                }\n            }\n        '),
            e
          );
        }
        renderHeader() {
          let e = document.createElement("header"),
            t = document.createElement("div");
          t.classList.add("logo");
          let n = document.createElement("h2");
          return (
            (n.textContent = "Notes App"), t.appendChild(n), e.appendChild(t), e
          );
        }
        connectedCallback() {
          this.render();
        }
        render() {
          this._shadowRoot.appendChild(this.renderStyle()),
            this._shadowRoot.appendChild(this.renderHeader());
        }
      }
      customElements.define("app-logo", T);
      class L extends HTMLElement {
        _shadowRoot = null;
        constructor() {
          super(), (this._shadowRoot = this.attachShadow({ mode: "closed" }));
        }
        renderStyle() {
          let e = document.createElement("style");
          return (
            (e.textContent =
              "\n        footer > * {\n            color: white;\n            font-family: sans-serif;\n        }\n\n        @media screen and (min-width: 768px) {\n            footer {\n                display: flex;\n                justify-content: center;\n                align-items: center;\n            }\n        }\n        "),
            e
          );
        }
        renderFooter() {
          let e = document.createElement("footer"),
            t = document.createElement("p");
          return (t.textContent = "Made by Setiawan Joko"), e.appendChild(t), e;
        }
        connectedCallback() {
          this.render();
        }
        render() {
          this._shadowRoot.appendChild(this.renderStyle()),
            this._shadowRoot.appendChild(this.renderFooter());
        }
      }
      customElements.define("app-footer", L);
      class $ extends HTMLElement {
        constructor() {
          super(), this.render();
        }
        render() {
          try {
            document.dispatchEvent(new CustomEvent(b));
          } catch (e) {
            console.log(e.message);
          }
        }
      }
      customElements.define("notes-container", $);
      class S extends HTMLElement {
        static observedAttributes = ["active", "archive"];
        _mapping = { false: "Active", true: "Archived" };
        _shadowRoot = null;
        constructor() {
          super(),
            (this._shadowRoot = this.attachShadow({ mode: "closed" })),
            this.addEventListener("click", this.click),
            (this._archive = localStorage.getItem(f)),
            this._archive === this.getAttribute("archive") &&
              this.setAttribute("active", "true");
        }
        render() {
          this._shadowRoot.innerHTML = "";
          const e = document.createElement("a");
          this.hasAttribute("active")
            ? (e.style = "text-decoration: underline;")
            : (e.style =
                "text-decoration: none; color: #4379F2; cursor: pointer;"),
            (e.textContent = this._mapping[this.getAttribute("archive")]),
            this._shadowRoot.appendChild(e);
        }
        click() {
          document
            .querySelector("notes-filter[active]")
            .toggleAttribute("active"),
            this.toggleAttribute("active"),
            localStorage.setItem(f, this.getAttribute("archive")),
            document.dispatchEvent(new CustomEvent(b)),
            this.render();
        }
        attributeChangedCallback() {
          this.render();
        }
      }
      customElements.define("notes-filter", S);
      class B extends HTMLElement {
        constructor() {
          super(), (this._sort = localStorage.getItem(g));
        }
        connectedCallback() {
          this.addEventListener("click", this.click), this.render();
        }
        click() {
          let e = "asc" == this._sort ? "desc" : "asc";
          try {
            localStorage.setItem(g, e),
              (this._sort = e),
              document.dispatchEvent(new CustomEvent(b));
          } catch (e) {
            console.log(e.message);
          }
        }
        render() {
          let e = document.createElement("span");
          (e.className = "material-symbols-outlined"),
            (e.textContent = "swap_vert"),
            (e.style = "cursor: pointer;"),
            this.appendChild(e);
        }
      }
      customElements.define("notes-sort", B);
      const P = (e) => {
          e.target.setCustomValidity(""),
            e.target.validity.valueMissing
              ? e.target.setCustomValidity("Catatan wajib diisi")
              : e.target.validity.tooShort &&
                e.target.setCustomValidity("Catatan minimal 10 karakter");
        },
        M = (e) => {
          const t = e.target.validity.valid,
            n = e.target.validationMessage,
            o = e.target.getAttribute("aria-describedby"),
            s = o ? document.getElementById(o) : null;
          s.innerText = s && n && !t ? n : "";
        },
        O = (e) => {
          e.target.setCustomValidity(""),
            e.target.validity.valueMissing
              ? e.target.setCustomValidity("Judul catatan wajib diisi")
              : e.target.validity.tooShort &&
                e.target.setCustomValidity("Judul catatan minimal 10 karakter");
        },
        j = document.querySelector("form"),
        H = j.elements.notetitle,
        I = j.elements.notebody;
      j.addEventListener("submit", (e) => {
        e.preventDefault();
        const t = H.value,
          n = I.value;
        document.dispatchEvent(
          new CustomEvent(v, { detail: { title: t, body: n } }),
        );
      }),
        H.addEventListener("change", O),
        H.addEventListener("invalid", O),
        H.addEventListener("blur", M),
        I.addEventListener("change", P),
        I.addEventListener("invalid", P),
        I.addEventListener("blur", M),
        "undefined" != typeof Storage
          ? (null === localStorage.getItem(f) &&
              localStorage.setItem(f, "false"),
            null === localStorage.getItem(g) && localStorage.setItem(g, "asc"))
          : alert("Browser yang Anda gunakan tidak mendukung Web Storage");
    })();
})();
