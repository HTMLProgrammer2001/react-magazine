import * as React from 'react';
import Paginate from '../Paginate';
var NotFoundPage = function () {
    React.useEffect(function () {
        document.title = '404 | Not found';
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(Paginate, { paths: [{ name: 'Home', path: '/' }, { name: 'Not found', path: '/404' }] }),
        React.createElement("div", { className: "error" },
            React.createElement("img", { className: "error__img", src: "/image/not-found.png", alt: "Not found" }))));
};
export default NotFoundPage;
//# sourceMappingURL=index.js.map