"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
class RestorePlugin {
    handleMessage(err, stdout, stderr) {
        if (err)
            console.error(err);
        if (stdout)
            console.log(stdout);
        if (stderr)
            console.error(stderr);
    }
    apply(compiler) {
        compiler.hooks.done.tap('PermissionsPlugin', () => {
            (0, child_process_1.exec)('chmod -Rc o+rX .', this.handleMessage);
        });
    }
}
module.exports = RestorePlugin;
