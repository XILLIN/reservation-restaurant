(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/reservation-flow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReservationFlow",
    ()=>ReservationFlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock-3.js [app-client] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users-round.js [app-client] (ecmascript) <export default as UsersRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/i18n/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$restaurant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/restaurant.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const empty = {
    date: "",
    time: "",
    guests: "2",
    seating: "dining-room",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    occasion: "",
    requests: ""
};
const slotState = {
    "17:30": "available",
    "18:00": "unavailable",
    "18:30": "available",
    "19:00": "available",
    "19:30": "limited",
    "20:00": "available",
    "20:30": "limited",
    "21:00": "available"
};
const todayInBangkok = ()=>new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Bangkok",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).format(new Date());
function prettyDate(value, locale) {
    if (!value) return "";
    const tag = locale === "th" ? "th-TH-u-ca-buddhist" : "en-GB";
    return new Intl.DateTimeFormat(tag, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Bangkok"
    }).format(new Date(`${value}T12:00:00Z`));
}
function ReservationFlow({ initialSelection }) {
    _s();
    const [reservation, setReservation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        ...empty,
        ...initialSelection
    });
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("reservation");
    const common = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("common");
    function update(key, value) {
        setReservation((current)=>({
                ...current,
                [key]: value
            }));
        setError("");
    }
    function next() {
        if (step === 1 && !reservation.date) {
            setError(t("errors.date"));
            return;
        }
        if (step === 1 && reservation.date < todayInBangkok()) {
            setError(t("errors.past"));
            return;
        }
        if (step === 1 && new Date(`${reservation.date}T12:00:00Z`).getUTCDay() === 1) {
            setError(t("errors.closed"));
            return;
        }
        if (step === 2 && !reservation.time) {
            setError(t("errors.time"));
            return;
        }
        if (step === 2 && !reservation.seating) {
            setError(t("errors.seating"));
            return;
        }
        if (step === 3) {
            const required = [
                reservation.firstName,
                reservation.lastName,
                reservation.email,
                reservation.phone
            ];
            if (required.some((value)=>!value.trim())) {
                setError(t("errors.details"));
                return;
            }
            if (!/^\S+@\S+\.\S+$/.test(reservation.email)) {
                setError(t("errors.email"));
                return;
            }
        }
        setError("");
        setStep((value)=>Math.min(4, value + 1));
    }
    function submit(event) {
        event.preventDefault();
        if (step < 4) {
            next();
            return;
        }
        const reference = `ME-${reservation.date.replaceAll("-", "")}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
        const query = new URLSearchParams({
            date: reservation.date,
            time: reservation.time,
            guests: reservation.guests,
            seating: reservation.seating,
            ref: reference
        });
        router.push(`/reservations/confirmation?${query.toString()}`);
    }
    const selectedSeat = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$restaurant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seatingOptions"].find((seat)=>seat.id === reservation.seating);
    const seatingName = selectedSeat ? t(`seating.${selectedSeat.nameKey}`) : t("seating.notSelected");
    const selectedDate = prettyDate(reservation.date, locale);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "reservation-layout",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "reservation-main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "reservation-progress",
                        "aria-label": `${t("steps.group")}: ${step} / 4`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "progress-label",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t("steps.group")
                                    }, void 0, false, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 59,
                                        columnNumber: 125
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "0",
                                            step,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "progress-divider",
                                                children: "/"
                                            }, void 0, false, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 59,
                                                columnNumber: 170
                                            }, this),
                                            " 04"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 59,
                                        columnNumber: 156
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/reservation-flow.tsx",
                                lineNumber: 59,
                                columnNumber: 93
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "progress-track",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: `${step * 25}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/reservation-flow.tsx",
                                    lineNumber: 59,
                                    columnNumber: 261
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/reservation-flow.tsx",
                                lineNumber: 59,
                                columnNumber: 229
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "progress-steps",
                                children: [
                                    t("steps.date"),
                                    t("steps.time"),
                                    t("steps.details"),
                                    t("steps.review")
                                ].map((label, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: index + 1 <= step ? "is-current" : "",
                                        children: label
                                    }, label, false, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 59,
                                        columnNumber: 439
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/reservation-flow.tsx",
                                lineNumber: 59,
                                columnNumber: 310
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/reservation-flow.tsx",
                        lineNumber: 59,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: submit,
                        noValidate: true,
                        children: [
                            step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "flow-step",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow",
                                        children: t("date.eyebrow")
                                    }, void 0, false, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 62,
                                        columnNumber: 55
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: t.rich("date.title", {
                                            em: (chunks)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: chunks
                                                }, void 0, false, {
                                                    fileName: "[project]/components/reservation-flow.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 145
                                                }, this)
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 62,
                                        columnNumber: 101
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "step-intro",
                                        children: t("date.intro")
                                    }, void 0, false, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 62,
                                        columnNumber: 171
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "field-grid",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "booking-date",
                                                        children: [
                                                            t("date.label"),
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "aria-label": t("date.required"),
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 63,
                                                                columnNumber: 115
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 67
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "booking-date",
                                                        type: "date",
                                                        min: todayInBangkok(),
                                                        value: reservation.date,
                                                        onChange: (e)=>update("date", e.target.value),
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 169
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: t("date.hours")
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 314
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 63,
                                                columnNumber: 39
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "party-size",
                                                        children: [
                                                            t("date.partyLabel"),
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "aria-label": t("date.required"),
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 64,
                                                                columnNumber: 92
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        id: "party-size",
                                                        value: reservation.guests,
                                                        onChange: (e)=>update("guests", e.target.value),
                                                        children: Array.from({
                                                            length: 12
                                                        }, (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: index + 1,
                                                                children: common("guests", {
                                                                    count: index + 1
                                                                })
                                                            }, index + 1, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 64,
                                                                columnNumber: 290
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 146
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 64,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 63,
                                        columnNumber: 11
                                    }, this),
                                    Number(reservation.guests) >= 9 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-notice",
                                        role: "status",
                                        children: [
                                            t("errors.largeParty"),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `tel:${common("phone")}`,
                                                children: t("largePartyLink")
                                            }, void 0, false, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 66,
                                                columnNumber: 117
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 66,
                                        columnNumber: 47
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "availability-note",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "status-dot"
                                            }, void 0, false, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 67,
                                                columnNumber: 46
                                            }, this),
                                            " ",
                                            t("date.sameDay")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 67,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/reservation-flow.tsx",
                                lineNumber: 62,
                                columnNumber: 24
                            }, this),
                            step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "flow-step",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow",
                                        children: t("time.eyebrow")
                                    }, void 0, false, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 70,
                                        columnNumber: 55
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: t.rich("time.title", {
                                            em: (chunks)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: chunks
                                                }, void 0, false, {
                                                    fileName: "[project]/components/reservation-flow.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 145
                                                }, this)
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 70,
                                        columnNumber: 101
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "step-intro",
                                        children: [
                                            selectedDate,
                                            " · ",
                                            common("guests", {
                                                count: Number(reservation.guests)
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 70,
                                        columnNumber: 171
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                        className: "slot-fieldset",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                                children: [
                                                    t("time.times"),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "fieldset-note",
                                                        children: t("time.timezone")
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 73
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 71,
                                                columnNumber: 47
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "time-slots",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$restaurant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeSlots"].map((slot)=>{
                                                    const status = slotState[slot];
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        disabled: status === "unavailable",
                                                        "aria-pressed": reservation.time === slot,
                                                        className: `time-slot ${reservation.time === slot ? "selected" : ""} ${status}`,
                                                        onClick: ()=>update("time", slot),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: slot
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 71,
                                                                columnNumber: 463
                                                            }, this),
                                                            status === "limited" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: t("time.limited")
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 71,
                                                                columnNumber: 507
                                                            }, this),
                                                            status === "unavailable" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: t("time.full")
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 71,
                                                                columnNumber: 571
                                                            }, this),
                                                            status === "available" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: t("time.available")
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 71,
                                                                columnNumber: 630
                                                            }, this),
                                                            reservation.time === slot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                size: 14,
                                                                "aria-label": t("time.selected")
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 71,
                                                                columnNumber: 697
                                                            }, this)
                                                        ]
                                                    }, slot, true, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 235
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 71,
                                                columnNumber: 141
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "availability-legend",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "legend-open"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 71,
                                                                columnNumber: 810
                                                            }, this),
                                                            " ",
                                                            t("time.legendAvailable")
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 804
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "legend-limited"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 71,
                                                                columnNumber: 880
                                                            }, this),
                                                            " ",
                                                            t("time.legendLimited")
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 874
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "legend-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 71,
                                                                columnNumber: 951
                                                            }, this),
                                                            " ",
                                                            t("time.legendFull")
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 945
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 71,
                                                columnNumber: 769
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 71,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                        className: "seating-fieldset",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                                children: t("time.seating")
                                            }, void 0, false, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 72,
                                                columnNumber: 50
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "seating-options",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$restaurant$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seatingOptions"].map((seat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        disabled: !seat.available,
                                                        "aria-pressed": reservation.seating === seat.id,
                                                        className: `seating-option ${reservation.seating === seat.id ? "selected" : ""} ${!seat.available ? "unavailable" : ""}`,
                                                        onClick: ()=>update("seating", seat.id),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "seat-check",
                                                                children: reservation.seating === seat.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    size: 14,
                                                                    "aria-hidden": "true"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/reservation-flow.tsx",
                                                                    lineNumber: 72,
                                                                    columnNumber: 489
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 72,
                                                                columnNumber: 424
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: t(`seating.${seat.nameKey}`)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                                        lineNumber: 72,
                                                                        columnNumber: 541
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                        children: seat.available ? t(`seating.${seat.detailKey}`) : t("seating.counterDetail")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                                        lineNumber: 72,
                                                                        columnNumber: 588
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 72,
                                                                columnNumber: 535
                                                            }, this),
                                                            !seat.available && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                className: "seat-unavailable",
                                                                children: t("seating.byRequest")
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 72,
                                                                columnNumber: 708
                                                            }, this)
                                                        ]
                                                    }, seat.id, true, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 149
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 72,
                                                columnNumber: 86
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 72,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/reservation-flow.tsx",
                                lineNumber: 70,
                                columnNumber: 24
                            }, this),
                            step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "flow-step",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow",
                                        children: t("details.eyebrow")
                                    }, void 0, false, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 75,
                                        columnNumber: 55
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: t.rich("details.title", {
                                            em: (chunks)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: chunks
                                                }, void 0, false, {
                                                    fileName: "[project]/components/reservation-flow.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 151
                                                }, this)
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 75,
                                        columnNumber: 104
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "step-intro",
                                        children: t("details.intro")
                                    }, void 0, false, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 75,
                                        columnNumber: 177
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "field-grid",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "first-name",
                                                        children: [
                                                            t("details.first"),
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "aria-label": t("date.required"),
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 76,
                                                                columnNumber: 116
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 67
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "first-name",
                                                        autoComplete: "given-name",
                                                        value: reservation.firstName,
                                                        onChange: (e)=>update("firstName", e.target.value),
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 170
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 76,
                                                columnNumber: 39
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "last-name",
                                                        children: [
                                                            t("details.last"),
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "aria-label": t("date.required"),
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 76,
                                                                columnNumber: 395
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 348
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "last-name",
                                                        autoComplete: "family-name",
                                                        value: reservation.lastName,
                                                        onChange: (e)=>update("lastName", e.target.value),
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 449
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 76,
                                                columnNumber: 320
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "email",
                                                        children: [
                                                            t("details.email"),
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "aria-label": t("date.required"),
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 77,
                                                                columnNumber: 85
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "email",
                                                        type: "email",
                                                        autoComplete: "email",
                                                        value: reservation.email,
                                                        onChange: (e)=>update("email", e.target.value),
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 139
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 77,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "phone",
                                                        children: [
                                                            t("details.phone"),
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "aria-label": t("date.required"),
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 77,
                                                                columnNumber: 356
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 312
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "phone",
                                                        type: "tel",
                                                        autoComplete: "tel",
                                                        value: reservation.phone,
                                                        onChange: (e)=>update("phone", e.target.value),
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 410
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 77,
                                                columnNumber: 284
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "form-field field-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "occasion",
                                                        children: t("details.occasion")
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 52
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        id: "occasion",
                                                        value: reservation.occasion,
                                                        onChange: (e)=>update("occasion", e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: t("details.none")
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 78,
                                                                columnNumber: 213
                                                            }, this),
                                                            [
                                                                [
                                                                    "Birthday",
                                                                    "birthday"
                                                                ],
                                                                [
                                                                    "Anniversary",
                                                                    "anniversary"
                                                                ],
                                                                [
                                                                    "Business dinner",
                                                                    "business"
                                                                ],
                                                                [
                                                                    "Date night",
                                                                    "dateNight"
                                                                ],
                                                                [
                                                                    "Other",
                                                                    "other"
                                                                ]
                                                            ].map(([value, key])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: value,
                                                                    children: t(`details.${key}`)
                                                                }, key, false, {
                                                                    fileName: "[project]/components/reservation-flow.tsx",
                                                                    lineNumber: 78,
                                                                    columnNumber: 422
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 109
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: t("details.occasionHint")
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 495
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 78,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "form-field field-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "requests",
                                                        children: t("details.requests")
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 52
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        id: "requests",
                                                        rows: 3,
                                                        placeholder: t("details.requestsPlaceholder"),
                                                        value: reservation.requests,
                                                        onChange: (e)=>update("requests", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 109
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: t("details.requestsHint")
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 273
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 79,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 76,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/reservation-flow.tsx",
                                lineNumber: 75,
                                columnNumber: 24
                            }, this),
                            step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "flow-step",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow",
                                        children: t("review.eyebrow")
                                    }, void 0, false, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 83,
                                        columnNumber: 55
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: t.rich("review.title", {
                                            em: (chunks)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: chunks
                                                }, void 0, false, {
                                                    fileName: "[project]/components/reservation-flow.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 149
                                                }, this)
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 83,
                                        columnNumber: 103
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "step-intro",
                                        children: t("review.intro")
                                    }, void 0, false, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 83,
                                        columnNumber: 175
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "review-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "review-photo",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85",
                                                    alt: t("summary.imageAlt"),
                                                    fill: true,
                                                    sizes: "(max-width: 760px) 100vw, 600px"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/reservation-flow.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 283
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 83,
                                                columnNumber: 253
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "review-details",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "review-label",
                                                                children: t("review.dateTime")
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 508
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: selectedDate
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 568
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: reservation.time
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 599
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setStep(1),
                                                                children: [
                                                                    t("review.editDate"),
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                        size: 14,
                                                                        "aria-hidden": "true"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                                        lineNumber: 83,
                                                                        columnNumber: 702
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 630
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 503
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "review-label",
                                                                children: t("review.table")
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 767
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: common("guests", {
                                                                    count: Number(reservation.guests)
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 824
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: seatingName
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 898
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setStep(2),
                                                                children: [
                                                                    t("review.editTable"),
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                        size: 14,
                                                                        "aria-hidden": "true"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                                        lineNumber: 83,
                                                                        columnNumber: 997
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 924
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 762
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "review-label",
                                                                children: t("review.for")
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 1062
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: [
                                                                    reservation.firstName,
                                                                    " ",
                                                                    reservation.lastName
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 1117
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: reservation.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 1180
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: reservation.phone
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 1212
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 1057
                                                    }, this),
                                                    reservation.occasion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "review-label",
                                                                children: t("details.occasion")
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 1280
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: t(`details.${{
                                                                    Birthday: "birthday",
                                                                    Anniversary: "anniversary",
                                                                    "Business dinner": "business",
                                                                    "Date night": "dateNight",
                                                                    Other: "other"
                                                                }[reservation.occasion] || "other"}`)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 1341
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 1275
                                                    }, this),
                                                    reservation.requests && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "review-label",
                                                                children: t("review.note")
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 1572
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: reservation.requests
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/reservation-flow.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 1628
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 1567
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 83,
                                                columnNumber: 471
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 83,
                                        columnNumber: 224
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "policy-note",
                                        children: t("review.policy", {
                                            phone: common("phone")
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 83,
                                        columnNumber: 1676
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/reservation-flow.tsx",
                                lineNumber: 83,
                                columnNumber: 24
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "form-error",
                                role: "alert",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/components/reservation-flow.tsx",
                                lineNumber: 85,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flow-controls",
                                children: [
                                    step > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "back-button",
                                        type: "button",
                                        onClick: ()=>{
                                            setError("");
                                            setStep((value)=>value - 1);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                size: 16,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 86,
                                                columnNumber: 163
                                            }, this),
                                            " ",
                                            common("back")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 86,
                                        columnNumber: 52
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 86,
                                        columnNumber: 234
                                    }, this),
                                    step < 4 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "button button-dark",
                                        type: "button",
                                        onClick: next,
                                        disabled: step === 1 && Number(reservation.guests) >= 9,
                                        children: [
                                            common("continue"),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 16,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 86,
                                                columnNumber: 401
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 86,
                                        columnNumber: 255
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "button button-dark",
                                        type: "submit",
                                        children: [
                                            t("review.confirm"),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                size: 17,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 86,
                                                columnNumber: 531
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 86,
                                        columnNumber: 456
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/reservation-flow.tsx",
                                lineNumber: 86,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/reservation-flow.tsx",
                        lineNumber: 61,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "secure-note",
                        children: t("secure")
                    }, void 0, false, {
                        fileName: "[project]/components/reservation-flow.tsx",
                        lineNumber: 88,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/reservation-flow.tsx",
                lineNumber: 58,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "reservation-summary",
                "aria-label": t("summary.eyebrow"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "summary-heading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: t("summary.eyebrow")
                            }, void 0, false, {
                                fileName: "[project]/components/reservation-flow.tsx",
                                lineNumber: 91,
                                columnNumber: 111
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: t.rich("summary.title", {
                                    em: (chunks)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: chunks
                                        }, void 0, false, {
                                            fileName: "[project]/components/reservation-flow.tsx",
                                            lineNumber: 91,
                                            columnNumber: 207
                                        }, this)
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/reservation-flow.tsx",
                                lineNumber: 91,
                                columnNumber: 160
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/reservation-flow.tsx",
                        lineNumber: 91,
                        columnNumber: 78
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "summary-image",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
                            alt: t("summary.imageAlt"),
                            fill: true,
                            sizes: "(max-width: 900px) 0px, 360px"
                        }, void 0, false, {
                            fileName: "[project]/components/reservation-flow.tsx",
                            lineNumber: 91,
                            columnNumber: 270
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/reservation-flow.tsx",
                        lineNumber: 91,
                        columnNumber: 239
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                        className: "summary-list",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t("summary.when")
                                            }, void 0, false, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 91,
                                                columnNumber: 493
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setStep(1),
                                                children: common("edit")
                                            }, void 0, false, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 91,
                                                columnNumber: 525
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 91,
                                        columnNumber: 489
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: [
                                            selectedDate || t("summary.chooseDate"),
                                            reservation.time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    " · ",
                                                    reservation.time
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 91,
                                                columnNumber: 670
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 91,
                                        columnNumber: 604
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/reservation-flow.tsx",
                                lineNumber: 91,
                                columnNumber: 484
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"], {
                                                        size: 14,
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 731
                                                    }, this),
                                                    " ",
                                                    t("summary.guests")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 91,
                                                columnNumber: 725
                                            }, this),
                                            step > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setStep(1),
                                                children: common("edit")
                                            }, void 0, false, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 91,
                                                columnNumber: 816
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 91,
                                        columnNumber: 721
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: common("guests", {
                                            count: Number(reservation.guests)
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 91,
                                        columnNumber: 896
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/reservation-flow.tsx",
                                lineNumber: 91,
                                columnNumber: 716
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                                                        size: 14,
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/reservation-flow.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 983
                                                    }, this),
                                                    " ",
                                                    t("summary.seating")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 91,
                                                columnNumber: 977
                                            }, this),
                                            step > 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setStep(2),
                                                children: common("edit")
                                            }, void 0, false, {
                                                fileName: "[project]/components/reservation-flow.tsx",
                                                lineNumber: 91,
                                                columnNumber: 1065
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 91,
                                        columnNumber: 973
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: step > 1 ? seatingName : t("seating.notSelected")
                                    }, void 0, false, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 91,
                                        columnNumber: 1145
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/reservation-flow.tsx",
                                lineNumber: 91,
                                columnNumber: 968
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/reservation-flow.tsx",
                        lineNumber: 91,
                        columnNumber: 455
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "summary-bottom",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t("summary.help")
                            }, void 0, false, {
                                fileName: "[project]/components/reservation-flow.tsx",
                                lineNumber: 91,
                                columnNumber: 1248
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `tel:${common("phone")}`,
                                children: [
                                    common("phone"),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 14,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/reservation-flow.tsx",
                                        lineNumber: 91,
                                        columnNumber: 1333
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/reservation-flow.tsx",
                                lineNumber: 91,
                                columnNumber: 1280
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/reservation-flow.tsx",
                        lineNumber: 91,
                        columnNumber: 1216
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/reservation-flow.tsx",
                lineNumber: 91,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/reservation-flow.tsx",
        lineNumber: 57,
        columnNumber: 10
    }, this);
}
_s(ReservationFlow, "sxG9Fo8sS4CTdKXrQ8fm2GwhT9A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = ReservationFlow;
var _c;
__turbopack_context__.k.register(_c, "ReservationFlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/restaurant.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "menuSections",
    ()=>menuSections,
    "restaurant",
    ()=>restaurant,
    "seatingOptions",
    ()=>seatingOptions,
    "timeSlots",
    ()=>timeSlots
]);
const restaurant = {
    name: "Maison Ember",
    descriptor: "A Bangkok fire kitchen",
    address: "27 Soi Sukhumvit 31, Watthana, Bangkok 10110",
    phone: "+66 2 258 4418",
    email: "table@maisonember.com",
    hours: [
        {
            days: "Tuesday – Thursday",
            time: "17:30 – 23:00"
        },
        {
            days: "Friday – Sunday",
            time: "17:30 – 00:00"
        },
        {
            days: "Monday",
            time: "Closed"
        }
    ]
};
const menuSections = [
    {
        id: "starters",
        itemIds: [
            "scallop",
            "tomato",
            "marrow"
        ],
        items: [
            {
                id: "scallop",
                price: 680,
                tag: "shellfish"
            },
            {
                id: "tomato",
                price: 420,
                tag: "plant"
            },
            {
                id: "marrow",
                price: 560,
                tag: ""
            }
        ]
    },
    {
        id: "fire",
        itemIds: [
            "duck",
            "wagyu",
            "fish"
        ],
        items: [
            {
                id: "duck",
                price: 1280,
                tag: ""
            },
            {
                id: "wagyu",
                price: 2400,
                tag: "forTwo"
            },
            {
                id: "fish",
                price: 1180,
                tag: "daily"
            }
        ]
    },
    {
        id: "dessert",
        itemIds: [
            "cheesecake",
            "cacao"
        ],
        items: [
            {
                id: "cheesecake",
                price: 380,
                tag: ""
            },
            {
                id: "cacao",
                price: 420,
                tag: ""
            }
        ]
    }
];
const seatingOptions = [
    {
        id: "dining-room",
        nameKey: "dining",
        detailKey: "diningDetail",
        available: true
    },
    {
        id: "terrace",
        nameKey: "terrace",
        detailKey: "terraceDetail",
        available: true
    },
    {
        id: "chefs-counter",
        nameKey: "counter",
        detailKey: "counterDetail",
        available: false
    }
];
const timeSlots = [
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1wj433e._.js.map