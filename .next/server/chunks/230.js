exports.id = 230;
exports.ids = [230];
exports.modules = {

/***/ 3956:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 768:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5313))

/***/ }),

/***/ 4672:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9692));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9666));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9358))

/***/ }),

/***/ 9666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnimationLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(569);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function AnimationLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__/* .AnimatePresence */ .M, {
        mode: "wait",
        children: children
    });
}


/***/ }),

/***/ 9692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4571);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(569);
/* __next_internal_client_entry_do_not_use__ default auto */ 





function Header() {
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showSections, setShowSections] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showBourses, setShowBourses] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showGuide, setShowGuide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();
    const sections = [
        {
            name: "UGESM Rabat",
            id: "rabat"
        },
        {
            name: "UGESM Casablanca",
            id: "casablanca"
        },
        {
            name: "UGESM F\xe8s",
            id: "fes"
        },
        {
            name: "UGESM Mekn\xe8s",
            id: "meknes"
        },
        {
            name: "UGESM Marrakech",
            id: "marrakech"
        },
        {
            name: "UGESM Agadir",
            id: "agadir"
        },
        {
            name: "UGESM Oujda",
            id: "oujda"
        },
        {
            name: "UGESM La\xe2youne",
            id: "laayoune"
        },
        {
            name: "UGESM Tanger",
            id: "tanger"
        },
        {
            name: "UGESM El Jadida",
            id: "el-jadida"
        },
        {
            name: "UGESM Beni Mellal",
            id: "beni-mellal"
        },
        {
            name: "UGESM K\xe9nitra",
            id: "kenitra"
        },
        {
            name: "UGESM Benguerir",
            id: "benguerir"
        }
    ];
    const bourses = [
        {
            href: "/bourse-amci",
            label: "Bourse AMCI"
        },
        {
            href: "/bourse-senegal",
            label: "Bourse S\xe9n\xe9gal"
        }
    ];
    const links = [
        {
            label: "Publications",
            href: "/publications"
        },
        {
            label: "Actualit\xe9s",
            href: "/actualites"
        },
        {
            label: "Guide \xc9tudiant",
            href: "#",
            hasDropdown: true,
            dropdownType: "guide"
        },
        {
            label: "Sections",
            href: "#",
            hasDropdown: true,
            dropdownType: "sections"
        },
        {
            label: "Bourses",
            href: "#",
            hasDropdown: true,
            dropdownType: "bourses"
        }
    ];
    const guide = [
        {
            href: "/bourse-senegal",
            label: "Bourse S\xe9n\xe9gal"
        },
        {
            href: "/bourse-amci",
            label: "Bourse AMCI"
        },
        {
            href: "/carte-sejour",
            label: "Carte de S\xe9jour"
        },
        {
            href: "/couverture-medicale",
            label: "Couverture M\xe9dicale"
        }
    ];
    const dropdownVariants = {
        hidden: {
            opacity: 0,
            y: -10,
            transition: {
                duration: 0.2
            }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: -10,
            transition: {
                duration: 0.2
            }
        }
    };
    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -10
        },
        visible: (i)=>({
                opacity: 1,
                x: 0,
                transition: {
                    delay: i * 0.05,
                    duration: 0.2
                }
            }),
        hover: {
            x: 10,
            transition: {
                duration: 0.2
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: "fixed w-full z-50 bg-green-700 shadow-lg py-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                className: "flex items-center space-x-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        src: "/images/logo.png",
                                        alt: "UGESM Logo",
                                        width: 50,
                                        height: 50,
                                        className: "w-12 h-12"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-2xl font-bold text-white",
                                                children: "UGESM"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "text-[10px] text-gray-100 leading-tight",
                                                children: [
                                                    "Union G\xe9n\xe9rale des Etudiants Et ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    " Stagiaires s\xe9n\xe9galais au Maroc"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "hidden lg:flex items-center ml-auto space-x-8",
                            children: links.map((link)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                        link.hasDropdown ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            onMouseEnter: ()=>{
                                                if (link.dropdownType === "bourses") {
                                                    setShowBourses(true);
                                                    setShowSections(false);
                                                    setShowGuide(false);
                                                } else if (link.dropdownType === "sections") {
                                                    setShowSections(true);
                                                    setShowBourses(false);
                                                    setShowGuide(false);
                                                } else if (link.dropdownType === "guide") {
                                                    setShowGuide(true);
                                                    setShowSections(false);
                                                    setShowBourses(false);
                                                }
                                            },
                                            className: "text-white hover:text-green-200 hover:underline transition-colors duration-200 flex items-center",
                                            children: [
                                                link.label,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .E.svg, {
                                                    className: "w-4 h-4 ml-1",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    initial: {
                                                        rotate: 0
                                                    },
                                                    animate: {
                                                        rotate: link.dropdownType === "bourses" ? showBourses ? 180 : 0 : link.dropdownType === "sections" ? showSections ? 180 : 0 : link.dropdownType === "guide" ? showGuide ? 180 : 0 : 0
                                                    },
                                                    transition: {
                                                        duration: 0.3
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M19 9l-7 7-7-7"
                                                    })
                                                })
                                            ]
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: link.href,
                                            className: "text-white hover:text-green-200 hover:underline transition-colors duration-200",
                                            children: link.label
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_6__/* .AnimatePresence */ .M, {
                                            children: [
                                                link.dropdownType === "bourses" && showBourses && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .E.div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: -10
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        y: -10
                                                    },
                                                    transition: {
                                                        duration: 0.2
                                                    },
                                                    onMouseLeave: ()=>setShowBourses(false),
                                                    className: "absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50",
                                                    children: bourses.map((bourse, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .E.div, {
                                                            initial: {
                                                                opacity: 0,
                                                                x: -20
                                                            },
                                                            animate: {
                                                                opacity: 1,
                                                                x: 0
                                                            },
                                                            transition: {
                                                                delay: index * 0.05
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: bourse.href,
                                                                className: "block px-4 py-2 text-gray-800 hover:bg-green-100 hover:text-green-600 transition-colors duration-200",
                                                                children: bourse.label
                                                            })
                                                        }, bourse.href))
                                                }),
                                                link.dropdownType === "sections" && showSections && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .E.div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: -10
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        y: -10
                                                    },
                                                    transition: {
                                                        duration: 0.2
                                                    },
                                                    onMouseLeave: ()=>setShowSections(false),
                                                    className: "absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 max-h-[70vh] overflow-y-auto",
                                                    children: sections.map((section, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .E.div, {
                                                            initial: {
                                                                opacity: 0,
                                                                x: -20
                                                            },
                                                            animate: {
                                                                opacity: 1,
                                                                x: 0
                                                            },
                                                            transition: {
                                                                delay: index * 0.05
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: `/sections/${section.id}`,
                                                                className: "block px-4 py-2.5 text-gray-800 hover:bg-green-100 hover:text-green-600 transition-colors duration-200",
                                                                children: section.name
                                                            })
                                                        }, section.id))
                                                }),
                                                link.dropdownType === "guide" && showGuide && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .E.div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: -10
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        y: -10
                                                    },
                                                    transition: {
                                                        duration: 0.2
                                                    },
                                                    onMouseLeave: ()=>setShowGuide(false),
                                                    className: "absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 max-h-[70vh] overflow-y-auto",
                                                    children: guide.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .E.div, {
                                                            initial: {
                                                                opacity: 0,
                                                                x: -20
                                                            },
                                                            animate: {
                                                                opacity: 1,
                                                                x: 0
                                                            },
                                                            transition: {
                                                                delay: index * 0.05
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: item.href,
                                                                className: "block px-4 py-2.5 text-gray-800 hover:bg-green-100 hover:text-green-600 transition-colors duration-200",
                                                                children: item.label
                                                            })
                                                        }, item.href))
                                                })
                                            ]
                                        })
                                    ]
                                }, link.label))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>setIsOpen(!isOpen),
                            className: "lg:hidden ml-auto text-white p-2 hover:bg-green-600 rounded-lg transition-colors duration-200",
                            "aria-label": isOpen ? "Fermer le menu" : "Ouvrir le menu",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .E.svg, {
                                className: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                animate: {
                                    rotate: isOpen ? 90 : 0
                                },
                                transition: {
                                    duration: 0.3
                                },
                                children: isOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M4 6h16M4 12h16M4 18h16"
                                })
                            })
                        })
                    ]
                }),
                isOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:hidden mt-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "space-y-4",
                        children: links.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative",
                                children: link.hasDropdown ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            onClick: ()=>{
                                                if (link.dropdownType === "bourses") {
                                                    setShowBourses(!showBourses);
                                                    setShowSections(false);
                                                    setShowGuide(false);
                                                } else if (link.dropdownType === "sections") {
                                                    setShowSections(!showSections);
                                                    setShowBourses(false);
                                                    setShowGuide(false);
                                                } else if (link.dropdownType === "guide") {
                                                    setShowGuide(!showGuide);
                                                    setShowSections(false);
                                                    setShowBourses(false);
                                                }
                                            },
                                            className: "text-white hover:text-green-200 hover:underline transition-colors duration-200 w-full text-left flex items-center justify-between",
                                            children: [
                                                link.label,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .E.svg, {
                                                    className: "w-4 h-4",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    initial: {
                                                        rotate: 0
                                                    },
                                                    animate: {
                                                        rotate: link.dropdownType === "bourses" ? showBourses ? 180 : 0 : link.dropdownType === "sections" ? showSections ? 180 : 0 : link.dropdownType === "guide" ? showGuide ? 180 : 0 : 0
                                                    },
                                                    transition: {
                                                        duration: 0.3
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M19 9l-7 7-7-7"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_6__/* .AnimatePresence */ .M, {
                                            children: [
                                                link.dropdownType === "bourses" && showBourses && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .E.div, {
                                                    initial: {
                                                        opacity: 0,
                                                        height: 0
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        height: "auto"
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        height: 0
                                                    },
                                                    transition: {
                                                        duration: 0.3
                                                    },
                                                    className: "mt-2 pl-4 space-y-2 overflow-hidden",
                                                    children: bourses.map((bourse, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .E.div, {
                                                            initial: {
                                                                opacity: 0,
                                                                x: -20
                                                            },
                                                            animate: {
                                                                opacity: 1,
                                                                x: 0
                                                            },
                                                            transition: {
                                                                delay: index * 0.05
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: bourse.href,
                                                                className: "block text-white hover:text-green-200 py-1 transition-colors duration-200",
                                                                children: bourse.label
                                                            })
                                                        }, bourse.href))
                                                }),
                                                link.dropdownType === "sections" && showSections && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .E.div, {
                                                    initial: {
                                                        opacity: 0,
                                                        height: 0
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        height: "auto"
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        height: 0
                                                    },
                                                    transition: {
                                                        duration: 0.3
                                                    },
                                                    className: "mt-2 pl-4 space-y-2 overflow-y-auto max-h-[60vh] bg-green-700/95 rounded-lg",
                                                    children: sections.map((section, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .E.div, {
                                                            initial: {
                                                                opacity: 0,
                                                                x: -20
                                                            },
                                                            animate: {
                                                                opacity: 1,
                                                                x: 0
                                                            },
                                                            transition: {
                                                                delay: index * 0.05
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: `/sections/${section.id}`,
                                                                className: "block text-white hover:text-green-200 py-2 px-2 transition-colors duration-200",
                                                                children: section.name
                                                            })
                                                        }, section.id))
                                                }),
                                                link.dropdownType === "guide" && showGuide && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .E.div, {
                                                    initial: {
                                                        opacity: 0,
                                                        height: 0
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        height: "auto"
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        height: 0
                                                    },
                                                    transition: {
                                                        duration: 0.3
                                                    },
                                                    className: "mt-2 pl-4 space-y-2 overflow-hidden",
                                                    children: guide.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .E.div, {
                                                            initial: {
                                                                opacity: 0,
                                                                x: -20
                                                            },
                                                            animate: {
                                                                opacity: 1,
                                                                x: 0
                                                            },
                                                            transition: {
                                                                delay: index * 0.05
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: item.href,
                                                                className: "block text-white hover:text-green-200 py-1 transition-colors duration-200",
                                                                children: item.label
                                                            })
                                                        }, item.href))
                                                })
                                            ]
                                        })
                                    ]
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: link.href,
                                    className: "block text-white hover:text-green-200 transition-colors duration-200",
                                    children: link.label
                                })
                            }, link.label))
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 5313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9692);
/* harmony import */ var _shared_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2679);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function MainLayout({ children }) {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();
    const hideHeaderOnPages = [
        "/publications",
        "/developers"
    ];
    const shouldShowHeader = !hideHeaderOnPages.includes(pathname);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            shouldShowHeader && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: `flex-grow ${!shouldShowHeader ? "pt-0" : ""}`,
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {})
        ]
    });
}


/***/ }),

/***/ 9358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Breadcrumbs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_24_solid_esm_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3542);
/* harmony import */ var _heroicons_react_24_solid_esm_HomeIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2974);
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Breadcrumbs() {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const paths = pathname.split("/").filter(Boolean);
    if (paths.length === 0) return null;
    const breadcrumbs = paths.map((path, index)=>{
        const href = `/${paths.slice(0, index + 1).join("/")}`;
        const label = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " ");
        const isLast = index === paths.length - 1;
        return {
            href,
            label,
            isLast
        };
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "flex px-4 py-2 text-sm text-gray-600 bg-gray-100/50 rounded-lg mb-4",
        "aria-label": "Breadcrumb",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
            className: "inline-flex items-center space-x-1 md:space-x-3",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "inline-flex items-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/",
                        className: "inline-flex items-center hover:text-green-600",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_esm_HomeIcon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                className: "w-4 h-4 mr-2"
                            }),
                            "Accueil"
                        ]
                    })
                }),
                breadcrumbs.map(({ href, label, isLast })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_esm_ChevronRightIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    className: "w-4 h-4 mx-1"
                                }),
                                isLast ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-gray-500",
                                    children: label
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: href,
                                    className: "hover:text-green-600",
                                    children: label
                                })
                            ]
                        })
                    }, href))
            ]
        })
    });
}


/***/ }),

/***/ 2679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Footer() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "bg-gradient-to-b from-green-50 to-white text-gray-800",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container mx-auto px-4 py-12",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-12",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-span-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: "/images/logo.png",
                                    alt: "UGESM Logo",
                                    width: 200,
                                    height: 100,
                                    className: "mb-4"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-gray-600 mt-4",
                                    children: "Union G\xe9n\xe9rale des \xc9tudiants Et Stagiaires S\xe9n\xe9galais au Maroc"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-span-1",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                    className: "text-xl font-bold mb-6 relative inline-block text-gray-800",
                                    children: [
                                        "Contact",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute bottom-0 left-0 w-1/2 h-0.5 bg-green-600"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-start space-x-3",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    className: "w-6 h-6 text-green-600 mt-1",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-gray-600",
                                                    children: "Av. des Forces Arm\xe9es Royales, Rabat"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-start space-x-3",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    className: "w-6 h-6 text-green-600 mt-1",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-gray-600",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "(+212) 700 634 882"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "(+212) 690 035 988"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "(+212) 765 536 008"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-span-1",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                    className: "text-xl font-bold mb-6 relative inline-block text-gray-800",
                                    children: [
                                        "Perma Links",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute bottom-0 left-0 w-1/2 h-0.5 bg-green-600"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/",
                                                className: "text-gray-600 hover:text-green-600 transition-colors duration-300",
                                                children: "Accueil"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/toutes-nos-sections",
                                                className: "text-gray-600 hover:text-green-600 transition-colors duration-300",
                                                children: "Nos Sections"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/publications",
                                                className: "text-gray-600 hover:text-green-600 transition-colors duration-300",
                                                children: "Publications"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/developers",
                                                className: "text-gray-600 hover:text-green-600 transition-colors duration-300",
                                                children: "D\xe9veloppeurs"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/about",
                                                className: "text-gray-600 hover:text-green-600 transition-colors duration-300",
                                                children: "\xc0 propos"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/contact",
                                                className: "text-gray-600 hover:text-green-600 transition-colors duration-300",
                                                children: "Contact"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-span-1",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                    className: "text-xl font-bold mb-6 relative inline-block text-gray-800",
                                    children: [
                                        "Suivez Nous",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute bottom-0 left-0 w-1/2 h-0.5 bg-green-600"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex space-x-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "#",
                                            className: "text-gray-600 hover:text-green-600 transition-colors duration-300",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                className: "w-6 h-6",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "#",
                                            className: "text-gray-600 hover:text-green-600 transition-colors duration-300",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                className: "w-6 h-6",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "border-t border-gray-200",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container mx-auto px-4 py-6",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-center text-gray-600",
                        children: [
                            "\xa9 ",
                            new Date().getFullYear(),
                            " UGESM. Tous droits r\xe9serv\xe9s."
                        ]
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 1404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(4490);
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
;// CONCATENATED MODULE: ./src/app/config.ts
const config_siteConfig = {
    name: "UGESM",
    description: "Union G\xe9n\xe9rale des \xc9tudiants et Stagiaires S\xe9n\xe9galais au Maroc",
    url: "https://ugesm.org",
    ogImage: "/logo.png",
    links: {
        twitter: "https://twitter.com/ugesmc",
        instagram: "https://www.instagram.com/ugesmrabat/"
    },
    keywords: [
        "UGESM",
        "\xe9tudiants s\xe9n\xe9galais au maroc",
        "Maroc",
        "\xe9tudes au Maroc",
        "communaut\xe9 estudiantine",
        "association \xe9tudiante",
        "S\xe9n\xe9gal",
        "enseignement sup\xe9rieur",
        "Comment \xe9tudier au Maroc en tant qu'\xe9tudiant s\xe9n\xe9galais",
        "Bourses d'\xe9tudes pour \xe9tudiants s\xe9n\xe9galais au Maroc",
        "Universit\xe9s marocaines populaires aupr\xe8s des \xe9tudiants s\xe9n\xe9galais",
        "Co\xfbt de la vie pour un \xe9tudiant s\xe9n\xe9galais au Maroc",
        "Proc\xe9dure d'inscription universitaire au Maroc pour S\xe9n\xe9galais",
        "Communaut\xe9 des \xe9tudiants s\xe9n\xe9galais au Maroc",
        "Trouver un logement \xe9tudiant au Maroc",
        "Vie culturelle et int\xe9gration des S\xe9n\xe9galais au Maroc",
        "Les d\xe9fis des \xe9tudiants s\xe9n\xe9galais au Maroc",
        "Stages et emplois pour \xe9tudiants s\xe9n\xe9galais au Maroc",
        "Partenariats acad\xe9miques entre le S\xe9n\xe9gal et le Maroc",
        "R\xe9seau professionnel pour S\xe9n\xe9galais dipl\xf4m\xe9s au Maroc",
        "Perspectives apr\xe8s des \xe9tudes au Maroc pour les S\xe9n\xe9galais",
        "Astuces pour bien g\xe9rer son budget \xe9tudiant au Maroc",
        "Guide pour obtenir un visa \xe9tudiant marocain depuis le S\xe9n\xe9gal",
        "Meilleurs quartiers pour vivre en tant qu'\xe9tudiant \xe0 Marrakech, Casablanca, Rabat",
        "Acc\xe8s aux soins m\xe9dicaux pour \xe9tudiants s\xe9n\xe9galais au Maroc",
        "Comment renouveler son titre de s\xe9jour \xe9tudiant au Maroc",
        "Groupes Facebook ou WhatsApp pour \xe9tudiants s\xe9n\xe9galais au Maroc",
        "Associations \xe9tudiantes africaines au Maroc",
        "T\xe9moignages d'\xe9tudiants s\xe9n\xe9galais vivant au Maroc",
        "Adaptation au mode de vie marocain en tant qu'\xe9tudiant s\xe9n\xe9galais",
        "C\xe9l\xe9brations religieuses au Maroc pour les \xe9tudiants musulmans s\xe9n\xe9galais",
        "Transport en commun pour \xe9tudiants \xe0 Marrakech et autres villes",
        "D\xe9couvrir le Maroc en tant qu'\xe9tudiant s\xe9n\xe9galais",
        "Histoire et missions de l'UGESM",
        "Contacts UGESM pour les nouveaux \xe9tudiants s\xe9n\xe9galais au Maroc",
        "Calendrier des \xe9v\xe9nements organis\xe9s par l'UGESM",
        "UGESM, soutien acad\xe9mique et social pour les \xe9tudiants s\xe9n\xe9galais",
        "R\xf4le de l'UGESM dans l'int\xe9gration des S\xe9n\xe9galais au Maroc",
        "UGESM, opportunit\xe9s pour les nouveaux arrivants",
        "Histoire et missions de l'UGESM",
        "Contacts UGESM pour les nouveaux \xe9tudiants s\xe9n\xe9galais au Maroc",
        "Calendrier des \xe9v\xe9nements organis\xe9s par l'UGESM",
        "UGESM, soutien acad\xe9mique et social pour les \xe9tudiants s\xe9n\xe9galais",
        "R\xf4le de l'UGESM dans l'int\xe9gration des S\xe9n\xe9galais au Maroc",
        "UGESM, opportunit\xe9s pour les nouveaux arrivants",
        "Comment \xe9tudier au Maroc en tant qu'\xe9tudiant s\xe9n\xe9galais",
        "Bourses d'\xe9tudes pour \xe9tudiants s\xe9n\xe9galais au Maroc",
        "Universit\xe9s marocaines populaires aupr\xe8s des \xe9tudiants s\xe9n\xe9galais",
        "Co\xfbt de la vie pour un \xe9tudiant s\xe9n\xe9galais au Maroc",
        "Proc\xe9dure d'inscription universitaire au Maroc pour S\xe9n\xe9galais",
        "Communaut\xe9 des \xe9tudiants s\xe9n\xe9galais au Maroc",
        "Trouver un logement \xe9tudiant au Maroc",
        "Vie culturelle et int\xe9gration des S\xe9n\xe9galais au Maroc",
        "Les d\xe9fis des \xe9tudiants s\xe9n\xe9galais au Maroc",
        "Stages et emplois pour \xe9tudiants s\xe9n\xe9galais au Maroc",
        "Partenariats acad\xe9miques entre le S\xe9n\xe9gal et le Maroc",
        "R\xe9seau professionnel pour S\xe9n\xe9galais dipl\xf4m\xe9s au Maroc",
        "Perspectives apr\xe8s des \xe9tudes au Maroc pour les S\xe9n\xe9galais",
        "Astuces pour bien g\xe9rer son budget \xe9tudiant au Maroc",
        "Guide pour obtenir un visa \xe9tudiant marocain depuis le S\xe9n\xe9gal",
        "Meilleurs quartiers pour vivre en tant qu'\xe9tudiant \xe0 Marrakech, Casablanca, Rabat",
        "Acc\xe8s aux soins m\xe9dicaux pour \xe9tudiants s\xe9n\xe9galais au Maroc",
        "Comment renouveler son titre de s\xe9jour \xe9tudiant au Maroc",
        "Groupes Facebook ou WhatsApp pour \xe9tudiants s\xe9n\xe9galais au Maroc",
        "Associations \xe9tudiantes africaines au Maroc",
        "T\xe9moignages d'\xe9tudiants s\xe9n\xe9galais vivant au Maroc",
        "Adaptation au mode de vie marocain en tant qu'\xe9tudiant s\xe9n\xe9galais",
        "C\xe9l\xe9brations religieuses au Maroc pour les \xe9tudiants musulmans s\xe9n\xe9galais",
        "Transport en commun pour \xe9tudiants \xe0 Marrakech et autres villes",
        "D\xe9couvrir le Maroc en tant qu'\xe9tudiant s\xe9n\xe9galais",
        "Meilleurs plans pour \xe9conomiser en tant qu'\xe9tudiant au Maroc",
        "Top restaurants africains fr\xe9quent\xe9s par les \xe9tudiants s\xe9n\xe9galais au Maroc",
        "Comment g\xe9rer la nostalgie en tant qu'\xe9tudiant s\xe9n\xe9galais \xe0 l'\xe9tranger",
        "R\xe9unions et rencontres entre \xe9tudiants s\xe9n\xe9galais au Maroc",
        "Impact des traditions marocaines sur les \xe9tudiants s\xe9n\xe9galais",
        "Programmes d'\xe9change S\xe9n\xe9gal-Maroc pour \xe9tudiants",
        "R\xf4le des consulats s\xe9n\xe9galais dans la vie des \xe9tudiants au Maroc",
        "Clubs \xe9tudiants pour S\xe9n\xe9galais au Maroc",
        "Comment organiser ses \xe9tudes et loisirs au Maroc",
        "Les meilleures biblioth\xe8ques pour \xe9tudiants \xe0 Rabat, Casablanca, et Marrakech",
        "Comparaison entre le syst\xe8me \xe9ducatif marocain et s\xe9n\xe9galais",
        "T\xe9moignages de r\xe9ussite d'\xe9tudiants s\xe9n\xe9galais au Maroc",
        "Outils num\xe9riques pour \xe9tudiants s\xe9n\xe9galais au Maroc",
        "F\xeates nationales marocaines et leur impact sur les \xe9tudiants \xe9trangers",
        "Programme de volontariat pour \xe9tudiants au Maroc",
        "\xc9tudier la m\xe9decine au Maroc en tant qu'\xe9tudiant s\xe9n\xe9galais",
        "Les meilleures \xe9coles d'ing\xe9nieurs pour S\xe9n\xe9galais au Maroc",
        "\xc9quivalence des dipl\xf4mes s\xe9n\xe9galais au Maroc",
        "Frais de scolarit\xe9 pour \xe9tudiants \xe9trangers au Maroc",
        "Pr\xe9parer un concours au Maroc en tant qu'\xe9tudiant s\xe9n\xe9galais",
        "Trouver des colocataires s\xe9n\xe9galais au Maroc",
        "Opportunit\xe9s de stage au Maroc pour \xe9tudiants \xe9trangers",
        "Associations s\xe9n\xe9galaises pr\xe9sentes dans les villes marocaines",
        "Villes marocaines les plus accueillantes pour les S\xe9n\xe9galais",
        "Droits et devoirs des \xe9tudiants \xe9trangers au Maroc",
        "Activit\xe9s culturelles et sportives pour \xe9tudiants s\xe9n\xe9galais au Maroc",
        "Partage d'exp\xe9riences entre \xe9tudiants africains au Maroc",
        "Cr\xe9er son entreprise au Maroc apr\xe8s ses \xe9tudes",
        "Opportunit\xe9s pour les \xe9tudiants s\xe9n\xe9galais dans les \xe9coles priv\xe9es marocaines",
        "Comment les \xe9tudiants s\xe9n\xe9galais c\xe9l\xe8brent leurs f\xeates au Maroc",
        "Vie nocturne pour les \xe9tudiants s\xe9n\xe9galais au Maroc",
        "Trouver un mentor acad\xe9mique au Maroc en tant qu'\xe9tudiant s\xe9n\xe9galais",
        "Les forums \xe9tudiants pour S\xe9n\xe9galais au Maroc",
        "Pr\xe9paration au march\xe9 du travail marocain pour S\xe9n\xe9galais",
        "Impact des coutumes marocaines sur la vie quotidienne des \xe9tudiants \xe9trangers",
        "Les opportunit\xe9s de volontariat pour les \xe9tudiants s\xe9n\xe9galais au Maroc",
        "Les d\xe9marches pour ouvrir un compte bancaire \xe9tudiant au Maroc",
        "Astuces pour \xe9viter les pi\xe8ges en tant qu’\xe9tudiant \xe9tranger au Maroc",
        "Les salons \xe9tudiants pour \xe9trangers organis\xe9s au Maroc",
        "Les r\xe9unions annuelles de l'UGESM pour les \xe9tudiants s\xe9n\xe9galais",
        "UGESM, une ressource pour r\xe9soudre les conflits entre \xe9tudiants s\xe9n\xe9galais",
        "Comment l'UGESM soutient les nouveaux arrivants au Maroc",
        "La place de l'UGESM dans la promotion des cultures s\xe9n\xe9galaise et marocaine",
        "Groupes de travail acad\xe9miques organis\xe9s par l'UGESM",
        "Programmes de mentorat interuniversitaires via l'UGESM",
        "UGESM et l'organisation des journ\xe9es culturelles s\xe9n\xe9galaises au Maroc",
        "Soutien juridique et administratif pour les \xe9tudiants s\xe9n\xe9galais par l'UGESM",
        "Programmes de retour au S\xe9n\xe9gal soutenus par l'UGESM",
        "UGESM et la promotion des valeurs africaines au Maroc",
        "Comment financer ses \xe9tudes au Maroc",
        "Opportunit\xe9s pour S\xe9n\xe9galais dans les centres de formation professionnelle marocains",
        "Les initiatives de la diaspora s\xe9n\xe9galaise au Maroc",
        "Collaboration entre \xe9tudiants s\xe9n\xe9galais et marocains dans des projets communs",
        "Impact des accords bilat\xe9raux sur les \xe9tudes des S\xe9n\xe9galais au Maroc",
        "\xc9v\xe9nements interafricains organis\xe9s dans les universit\xe9s marocaines",
        "Impact des langues (fran\xe7ais, arabe) sur la r\xe9ussite des \xe9tudiants s\xe9n\xe9galais au Maroc",
        "Meilleurs conseils pour r\xe9ussir son int\xe9gration sociale au Maroc",
        "Les meilleurs programmes de master au Maroc pour \xe9tudiants s\xe9n\xe9galais",
        "\xc9tudier en fran\xe7ais ou en arabe au Maroc : ce qu'il faut savoir",
        "Les \xe9coles de commerce marocaines pour les S\xe9n\xe9galais",
        "O\xf9 acheter des produits s\xe9n\xe9galais au Maroc",
        "Meilleurs plans pour voyager au Maroc avec un budget \xe9tudiant",
        "Comment trouver un emploi \xe9tudiant au Maroc",
        "Opportunit\xe9s d'apprentissage en ligne pour \xe9tudiants \xe9trangers au Maroc",
        "Les partenariats \xe9ducatifs entre universit\xe9s marocaines et s\xe9n\xe9galaises",
        "Calendrier acad\xe9mique marocain : diff\xe9rences avec le S\xe9n\xe9gal",
        "Trouver un stage d'\xe9t\xe9 au Maroc en tant qu'\xe9tudiant s\xe9n\xe9galais",
        "Impact de la culture culinaire marocaine sur les \xe9tudiants s\xe9n\xe9galais",
        "Comparaison des options de transport pour \xe9tudiants au Maroc",
        "Les aides financi\xe8res disponibles pour \xe9tudiants \xe9trangers au Maroc",
        "La gastronomie marocaine pour les \xe9tudiants s\xe9n\xe9galais",
        "Comment s'int\xe9grer dans les groupes d'\xe9tudiants marocains",
        "Les villes universitaires les plus abordables au Maroc",
        "Faire des \xe9tudes en m\xe9decine dentaire au Maroc pour S\xe9n\xe9galais",
        "Les traditions marocaines expliqu\xe9es aux \xe9tudiants \xe9trangers",
        "Programmes de leadership pour \xe9tudiants au Maroc",
        "Les opportunit\xe9s d’\xe9tudes dans les r\xe9gions rurales du Maroc",
        "Projets humanitaires soutenus par l'UGESM",
        "L'UGESM face aux d\xe9fis de la vie \xe9tudiante au Maroc",
        "Les anciens membres de l'UGESM et leurs r\xe9ussites",
        "UGESM : organiser un \xe9v\xe9nement culturel au Maroc",
        "Comment devenir un membre actif de l'UGESM",
        "Les programmes de sensibilisation de l'UGESM pour les nouveaux \xe9tudiants",
        "Activit\xe9s de l'UGESM pendant le Ramadan",
        "UGESM et les rencontres interafricaines au Maroc",
        "Astuces pour profiter pleinement des activit\xe9s organis\xe9es par l'UGESM",
        "Comment l'UGESM aide les \xe9tudiants s\xe9n\xe9galais \xe0 r\xe9ussir leurs \xe9tudes",
        "Le syst\xe8me \xe9ducatif marocain expliqu\xe9 aux S\xe9n\xe9galais",
        "Quelles comp\xe9tences d\xe9velopper en \xe9tudiant au Maroc",
        "Comment g\xe9rer le mal du pays en tant qu’\xe9tudiant s\xe9n\xe9galais",
        "Le Maroc vu \xe0 travers les yeux d’un \xe9tudiant africain",
        "Le r\xf4le des consulats s\xe9n\xe9galais dans la vie estudiantine au Maroc",
        "Les festivals culturels marocains \xe0 ne pas manquer",
        "S\xe9n\xe9galais au Maroc : comment trouver un r\xe9seau d’entraide",
        "Les d\xe9fis linguistiques pour les \xe9tudiants s\xe9n\xe9galais au Maroc",
        "Les opportunit\xe9s d’apprentissage technique pour S\xe9n\xe9galais au Maroc",
        "Comment \xe9quilibrer \xe9tudes et loisirs au Maroc",
        "Les traditions africaines dans les campus marocains",
        "Organiser des r\xe9unions entre S\xe9n\xe9galais et Marocains pour des projets communs",
        "D\xe9couverte des r\xe9gions marocaines pour \xe9tudiants \xe9trangers",
        "Comment les universit\xe9s marocaines c\xe9l\xe8brent la diversit\xe9 culturelle",
        "Les ressources en ligne pour les \xe9tudiants s\xe9n\xe9galais au Maroc",
        "Les d\xe9marches pour obtenir un permis de travail au Maroc pour \xe9tudiants s\xe9n\xe9galais",
        "\xc9tudier l’agriculture au Maroc en tant qu’\xe9tudiant s\xe9n\xe9galais",
        "Trouver des opportunit\xe9s de b\xe9n\xe9volat pour \xe9tudiants s\xe9n\xe9galais au Maroc",
        "La gestion des loisirs pour \xe9tudiants \xe9trangers au Maroc",
        "L’impact des \xe9tudes au Maroc sur la carri\xe8re professionnelle des S\xe9n\xe9galais",
        "Les meilleures formations en marketing et communication au Maroc pour \xe9tudiants s\xe9n\xe9galais",
        "Les meilleures options de transport pour \xe9tudiants \xe9trangers au Maroc",
        "Les \xe9tudiants s\xe9n\xe9galais au Maroc : d\xe9fis et opportunit\xe9s",
        "Comment cr\xe9er un r\xe9seau professionnel au Maroc en tant qu’\xe9tudiant s\xe9n\xe9galais",
        "Les diff\xe9rences entre le syst\xe8me universitaire marocain et s\xe9n\xe9galais",
        "Vivre \xe0 Rabat en tant qu’\xe9tudiant s\xe9n\xe9galais",
        "Les opportunit\xe9s d’\xe9change entre le Maroc et le S\xe9n\xe9gal pour \xe9tudiants",
        "Trouver un stage en droit au Maroc pour \xe9tudiants s\xe9n\xe9galais",
        "Opportunit\xe9s de partenariat universitaire entre les \xe9coles marocaines et s\xe9n\xe9galaises",
        "Les universit\xe9s marocaines offrant des cours en anglais pour \xe9tudiants s\xe9n\xe9galais",
        "C\xe9l\xe9brations traditionnelles marocaines pour \xe9tudiants \xe9trangers",
        "Opportunit\xe9s pour les \xe9tudiants s\xe9n\xe9galais dans le secteur du tourisme au Maroc",
        "Les impacts des voyages interr\xe9gionaux pour les \xe9tudiants s\xe9n\xe9galais au Maroc",
        "La solidarit\xe9 entre \xe9tudiants africains au Maroc",
        "Les services d’aide \xe0 l’orientation acad\xe9mique offerts par l’UGESM",
        "Comment l’UGESM soutient l’int\xe9gration des \xe9tudiants s\xe9n\xe9galais dans la soci\xe9t\xe9 marocaine",
        "Les programmes d’\xe9changes inter-\xe9tudiants au sein de l’UGESM",
        "UGESM : un acteur cl\xe9 dans l’organisation des \xe9v\xe9nements communautaires s\xe9n\xe9galais au Maroc",
        "T\xe9moignages d’\xe9tudiants ayant particip\xe9 \xe0 des projets de l’UGESM",
        "Le r\xf4le de l’UGESM dans la d\xe9fense des droits des \xe9tudiants s\xe9n\xe9galais au Maroc",
        "UGESM : r\xe9seau de soutien aux \xe9tudiants s\xe9n\xe9galais en difficult\xe9",
        "Les rencontres sportives et culturelles organis\xe9es par l’UGESM pour les \xe9tudiants s\xe9n\xe9galais",
        "Programmes de mentorat universitaire organis\xe9s par l’UGESM",
        "D\xe9veloppement des comp\xe9tences professionnelles des \xe9tudiants s\xe9n\xe9galais gr\xe2ce \xe0 l’UGESM",
        "Comment r\xe9ussir ses \xe9tudes en ing\xe9nierie au Maroc pour \xe9tudiants s\xe9n\xe9galais",
        "Les meilleures pratiques pour \xe9viter les arnaques en tant qu’\xe9tudiant \xe9tranger au Maroc",
        "Les diff\xe9rents types de bourses offertes aux \xe9tudiants s\xe9n\xe9galais au Maroc",
        "Trouver des opportunit\xe9s de voyage \xe0 bas prix pour \xe9tudiants au Maroc",
        "Vivre dans une r\xe9sidence universitaire au Maroc pour \xe9tudiants s\xe9n\xe9galais",
        "Organiser un \xe9v\xe9nement de solidarit\xe9 s\xe9n\xe9galaise au Maroc",
        "Comment d\xe9velopper ses projets de recherche au Maroc en tant qu’\xe9tudiant s\xe9n\xe9galais",
        "Les meilleurs moyens de se pr\xe9parer \xe0 la transition apr\xe8s des \xe9tudes au Maroc",
        "Les \xe9v\xe9nements inter-universit\xe9s entre \xe9tudiants s\xe9n\xe9galais et marocains",
        "Trouver un emploi \xe0 temps partiel pour \xe9tudiants s\xe9n\xe9galais au Maroc",
        "Les diff\xe9rents types de logements \xe9tudiants au Maroc et comment les trouver",
        "R\xe9ussir dans une \xe9cole de commerce marocaine en tant qu’\xe9tudiant s\xe9n\xe9galais",
        "Les sp\xe9cificit\xe9s des \xe9tudes en sciences sociales au Maroc pour les S\xe9n\xe9galais",
        "Comment g\xe9rer un projet de fin d’\xe9tudes au Maroc pour un \xe9tudiant s\xe9n\xe9galais",
        "L’importance de la pratique linguistique en arabe et en fran\xe7ais pour les \xe9tudiants s\xe9n\xe9galais au Maroc",
        "stagiaires s\xe9n\xe9galais"
    ]
};

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/components/Header.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\hp\CascadeProjects\ugesm-website - Copie - Copie\src\components\Header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Header = (__default__);
;// CONCATENATED MODULE: ./src/components/AnimationLayout.tsx

const AnimationLayout_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\hp\CascadeProjects\ugesm-website - Copie - Copie\src\components\AnimationLayout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: AnimationLayout_esModule, $$typeof: AnimationLayout_$$typeof } = AnimationLayout_proxy;
const AnimationLayout_default_ = AnimationLayout_proxy.default;


/* harmony default export */ const AnimationLayout = (AnimationLayout_default_);
;// CONCATENATED MODULE: ./src/components/shared/Breadcrumbs.tsx

const Breadcrumbs_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\hp\CascadeProjects\ugesm-website - Copie - Copie\src\components\shared\Breadcrumbs.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Breadcrumbs_esModule, $$typeof: Breadcrumbs_$$typeof } = Breadcrumbs_proxy;
const Breadcrumbs_default_ = Breadcrumbs_proxy.default;


/* harmony default export */ const Breadcrumbs = (Breadcrumbs_default_);
;// CONCATENATED MODULE: ./src/lib/structured-data.ts

function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: config_siteConfig.name,
        description: config_siteConfig.description,
        url: config_siteConfig.url,
        logo: `${config_siteConfig.url}${config_siteConfig.ogImage}`,
        sameAs: [
            config_siteConfig.links.twitter,
            config_siteConfig.links.instagram
        ]
    };
}
function generateWebSiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: config_siteConfig.name,
        description: config_siteConfig.description,
        url: config_siteConfig.url,
        potentialAction: {
            "@type": "SearchAction",
            target: `${config_siteConfig.url}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    };
}
function generateBreadcrumbSchema(items) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index)=>({
                "@type": "ListItem",
                position: index + 1,
                item: {
                    "@id": item.url,
                    name: item.name
                }
            }))
    };
}
function generateArticleSchema(article) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.description,
        image: article.image,
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        author: {
            "@type": "Person",
            name: article.author
        },
        publisher: {
            "@type": "Organization",
            name: siteConfig.name,
            logo: {
                "@type": "ImageObject",
                url: `${siteConfig.url}${siteConfig.ogImage}`
            }
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": article.url
        }
    };
}

;// CONCATENATED MODULE: ./src/app/layout.tsx








const metadata = {
    metadataBase: new URL(config_siteConfig.url),
    title: {
        default: `${config_siteConfig.name} - ${config_siteConfig.description}`,
        template: `%s | ${config_siteConfig.name}`
    },
    description: `${config_siteConfig.description}. Guide complet pour les étudiants sénégalais au Maroc : bourses, universités, logement, vie étudiante et plus encore.`,
    keywords: config_siteConfig.keywords,
    authors: [
        {
            name: config_siteConfig.name
        }
    ],
    creator: config_siteConfig.name,
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: config_siteConfig.url,
        title: `${config_siteConfig.name} - ${config_siteConfig.description}`,
        description: `${config_siteConfig.description}. Votre guide complet pour réussir vos études au Maroc en tant qu'étudiant sénégalais.`,
        siteName: config_siteConfig.name,
        images: [
            {
                url: config_siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: config_siteConfig.name
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: config_siteConfig.name,
        description: config_siteConfig.description,
        images: [
            config_siteConfig.ogImage
        ],
        creator: "@ugesmc"
    },
    manifest: "/manifest.json",
    icons: {
        icon: "/favicon.ico",
        apple: "/icons/apple-icon.png"
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1
    },
    verification: {
        google: "your-google-site-verification"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "fr",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: config_siteConfig.url
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@graph": [
                                    generateOrganizationSchema(),
                                    generateWebSiteSchema()
                                ]
                            })
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                className: (target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                        className: "min-h-screen",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Breadcrumbs, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(AnimationLayout, {
                                children: children
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 8275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4074);



function NotFound() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-50",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-4xl font-bold text-gray-900 mb-4",
                        children: "404 - Page non trouv\xe9e"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-gray-600 mb-8",
                        children: "La page que vous recherchez n'existe pas."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/",
                        className: "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#C06B3E] hover:bg-[#A05B33] transition-colors duration-300",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                className: "mr-2 w-4 h-4",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                                })
                            }),
                            "Retour \xe0 l'accueil"
                        ]
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 4074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\hp\CascadeProjects\ugesm-website - Copie - Copie\src\components\layouts\MainLayout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;