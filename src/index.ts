import { exec } from 'child_process';
import { Compiler } from 'webpack';

class PermissionsPlugin {
    handleMessage(err: any, stdout: any, stderr: any) {
        if (err) console.error(err);
        if (stdout) console.log(stdout);
        if (stderr) console.error(stderr);
    }

    apply(compiler: Compiler) {
        compiler.hooks.done.tap('PermissionsPlugin', () => {
            exec('chmod -Rc o+rX .', this.handleMessage);
        });
    }
}

module.exports = PermissionsPlugin;
