function $(...args) {
    switch (typeof args[0]) {
        case 'function':
            // run the passed function when DOM is ready
            document.addEventListener('DOMContentLoaded', args[0]);
            break;
        case 'string':
            // if first char is #, select a single element, otherwise select all elements
            const nodeList = args[0].charAt(0) === "#" ?
                document.querySelector(args[0]) :
                document.querySelectorAll(args[0]);
            return _decorate(nodeList);
    }
}


// adds methods to collections returned by $(string)
function _decorate(collection) {

    // creates an event listener on nodelists given a trigger and a handler function
    collection.on = function (eventName, handler) {
        nodeList.forEach(function(el) {
            el.addEventListener(eventName, handler)
        })
    };

    // get and set css properties on nodelists
    collection.css = function (...cssProps) {
        if (cssProps.length == 1 && typeof cssProps[0] === 'object') {
            // set props one by one
        } else if (cssProps.length == 1 && typeof cssProps[0] == 'string') {
            // return single property value
        } else if (cssProps.length == 2 && typeof cssProps[0] == 'string' && typeof cssProps[1] == 'string') {
            // set single property
        } else {
            throw new Error(`Invalid parameter(s): ${cssProps} passed to .css()`);
        }
    };

    // returns the HTML of the first element in a nodelist
    collection.html = function (collection) {
        return collection[0].innerHTML;
    }

    return nodeList;
}

