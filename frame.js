(function (window) {

    // global object exported by the module
    var frame = {};

    frame.createRunner = function(computeFrame, interval) {

        // Private variables
        var timer;
        var lastFrameDate;
        var run = false;
        interval = interval || 16; // 16ms = 1000ms / 60fs : a standard framerate in computer rendering

        // new object
        var runner = {
            get run() {
            	return run;
            },
            set run(value) {
                if (!run && value === true) {
                    run = true;
                    lastFrameDate = +new Date;
                    start();
                } else if (run && value === false) {
                    run = false;
                    stop();
                }
            },
            get timer() {
            	return timer;
            }
        };

        function start() {
            timer = setInterval(function() {
                var now = +new Date;
                var deltaT = now - lastFrameDate;
                computeFrame(deltaT);
                lastFrameDate = now;
            }, interval);
            var debug = 0;
        }

        function stop() {
            clearInterval(timer);
        }

        // Return the new object
        return runner;

    };

    window.frame = frame;

}(this));