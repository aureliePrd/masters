requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js',
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});

// Start the main app logic.
requirejs(['test_require'],
function   ($,        canvas,   sub) {
    //loaded and can be used here now.
    console.log(test);
});