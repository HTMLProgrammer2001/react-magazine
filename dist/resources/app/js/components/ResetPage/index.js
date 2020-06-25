import * as React from 'react';
import Paginate from '../Paginate';
import { default as ResetForm } from './ResetForm';
var ResetPage = function () {
    React.useEffect(function () {
        document.title = 'Reset password';
    }, []);
    var onSubmit = function (vals) {
        console.log(vals);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Paginate, { paths: [
                { name: 'Home', path: '/' },
                { name: 'Reset password', path: '/reset' }
            ] }),
        React.createElement(ResetForm, { onSubmit: onSubmit })));
};
export default ResetPage;
//# sourceMappingURL=index.js.map