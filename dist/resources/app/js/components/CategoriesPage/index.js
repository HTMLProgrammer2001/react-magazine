import * as React from 'react';
import Paginate from '../Paginate';
import CategoriesList from './CategoriesList';
var CategoriesPage = function () {
    React.useEffect(function () {
        document.title = 'Categories';
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(Paginate, { paths: [
                { name: 'Home', path: '/' },
                { name: 'Categories', path: '/categories' }
            ] }),
        React.createElement(CategoriesList, null)));
};
export default CategoriesPage;
//# sourceMappingURL=index.js.map