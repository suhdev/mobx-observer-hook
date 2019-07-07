"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const mobx_1 = require("mobx");
function useObserver(fn, deps = []) {
    const [view, setView] = react_1.useState(fn);
    const ref = react_1.useRef(0);
    react_1.useEffect(() => {
        return mobx_1.reaction(fn, (v) => {
            if (!ref.current) {
                ref.current = 1;
                return;
            }
            setView(v);
        });
    }, deps);
    return view;
}
exports.useObserver = useObserver;
