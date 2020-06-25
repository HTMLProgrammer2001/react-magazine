"use strict";
document.addEventListener('DOMContentLoaded', function () {
    var prev = null;
    Array.from(document.getElementsByTagName('article')).reverse().forEach(function (article) {
        var dedupId = article.dataset.dedupId;
        if (dedupId === prev) {
            article.getElementsByTagName('header')[0].classList.add('hidden');
        }
        prev = dedupId;
    });
});
//# sourceMappingURL=htmlDescriptor.js.map