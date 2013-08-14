Frame
=====

A very simple module for frame-based animation.

Usage
-----

The module exports a `frame` object. Create a new `runner` by calling `createRunner`.

```js
var runner = frame.createRunner(computeFrame);
```

The computeFrame function will be called at each frame. It is passed the amount of time (in ms) since last frame.

```js
var computeFrame = function(deltaT) {
    // do some stuff
};
```

Start frame animation by setting the `run` property to `true`. Stop it with `false`;

```js
runner.run = true;
runner.run = false;
```


