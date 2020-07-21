
// jquery dom ready function
$(function() {
    console.log('DOM ready.');
    const headers_test = $('h1');
    console.log(headers_test);

    headers_test.css(2, 2, 2)
})