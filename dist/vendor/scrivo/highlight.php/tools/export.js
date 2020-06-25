"use strict";
require(["dojo/node!fs", "dojox/json/ref", "dojo/_base/kernel"], function (fs, ref, kernel) {
    var nodeRequire = kernel.global.require && kernel.global.require.nodeRequire;
    var HIGHLIGHT_DIR = dojo.config.highlightJsDir;
    var CWD = dojo.config.cwd;
    var LANGS_W_DEPS = ['arduino.js'];
    var cloneDeep = nodeRequire(CWD + "/lodash.cloneDeep.js");
    var hljs = nodeRequire(HIGHLIGHT_DIR + "/highlight.js");
    function regexToStr(lang, nestingLevel) {
        if (nestingLevel === void 0) { nestingLevel = 0; }
        if (nestingLevel > 15) {
            return;
        }
        for (var key in lang) {
            if (lang[key] instanceof RegExp) {
                lang[key] = lang[key].source;
            }
            else if (typeof lang[key] === 'object') {
                regexToStr(lang[key], nestingLevel + 1);
            }
        }
    }
    function jsUnicodeToPhpUnicode(s) {
        return s.replace(/\\u([0-9A-Fa-f]+)/g, "\\x{$1}");
    }
    function exportLang(lang) {
        var x = nodeRequire(HIGHLIGHT_DIR + "/languages/" + lang + ".js");
        var l = cloneDeep(x(hljs));
        regexToStr(l);
        hljs.registerLanguage(lang, x);
        console.log(lang);
        console.log(jsUnicodeToPhpUnicode(dojox.json.ref.toJson(l)));
    }
    fs.readdir(HIGHLIGHT_DIR + "/languages/", function (err, files) {
        if (err) {
            throw err;
        }
        files.forEach(function (file) {
            if (file === ".DS_Store" || LANGS_W_DEPS.indexOf(file) >= 0) {
                return;
            }
            exportLang(file.replace(/\.js$/, ""));
        });
        LANGS_W_DEPS.forEach(function (file) {
            exportLang(file.replace(/\.js$/, ""));
        });
    });
});
//# sourceMappingURL=export.js.map