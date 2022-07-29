export class Controller {
    constructor($canvas) {
        this.$canvas = $canvas;

        this.pressed_keys = new Set();
        this.start();
    }

    start() {
        let outer = this;
        this.$canvas.keydown(function (e) {
            outer.pressed_keys.add(e.key);
        });

        this.$canvas.keyup(function (e) {
            outer.pressed_keys.delete(e.key);
        });
    }
}