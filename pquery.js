function $(...args) {
    switch (typeof args[0]) {
        case 'function':
            // run the passed function when DOM is ready
            document.addEventListener('DOMContentLoaded', args[0]);
            break;
        case 'string':
            // if first char is #, select a single element, otherwise select all elements
            const node_list = args[0].charAt(0) === "#" ?
                document.querySelector(args[0]) :
                document.querySelectorAll(args[0]);
            return _decorate(node_list);
    }
}

function _decorate(node_list) {
    node_list.on = function () {
        // bind event listener to an element
    };

    node_list.css = function (...css_args) {
        // can pass either:
        // 1 value to get a single property
        // 2 values to set a single css property
        // an object to set multiple css properties
    };

    node_list.html = function (elements) {
        return elements[0].innerHTML;
    }

    return node_list;
}

