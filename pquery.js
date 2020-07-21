function $(...args) {
    switch (typeof args[0]) {
        case 'function':
            // run the passed function when DOM is ready
            document.addEventListener('DOMContentLoaded', args[0]);
            break;
        case 'string':
            // selector
            // has to handle:
            // - by id
            // . by class name
            // plain for html tags
            const nodes = document.querySelectorAll(args[0]);
            return nodes;
            break;
    }
}

function _decorate(elements) {
    elements.on = function () {
        // bind event listener to an element
    };

    elements.css = function (...css_args) {
        // can pass either:
        // 1 value to get a single property
        // 2 values to set a single css property
        // an object to set multiple css properties
    };

    elements.html = function (elements) {
        return elements[0].innerHTML;
    }
}

