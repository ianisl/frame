(function (window) {

    // global object exported by the module
    var frame = {};

    frame.createRunner = function(computeFrame) {

        // Private variables
        var timer;
        var lastFrameDate;
        run = false;

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
            }
        };

        function start() {
            timer = window.setInterval(function() {
                var now = +new Date;
                var deltaT = now - lastFrameDate;
                computeFrame(deltaT);
                lastFrameDate = now;
            }, 16); // 16ms = 1000ms / 60fs : default framerate in computer rendering
        }

        function stop() {
            window.clearInterval(timer);
        }

        // Return the new object
        return runner;

    };

    window.frame = frame;

}(this));