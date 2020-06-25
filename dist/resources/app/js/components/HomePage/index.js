import * as React from 'react';
import Paginate from '../Paginate';
import Goods from './Goods/';
var HomePage = function () {
    React.useEffect(function () {
        document.title = 'Home | Products';
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(Paginate, { paths: [{ name: 'Home', path: '/' }] }),
        React.createElement(Goods, null)));
};
export default HomePage;
//# sourceMappingURL=index.js.map