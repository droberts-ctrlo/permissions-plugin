import { exec } from 'child_process';
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
            exec('chmod -Rc o+rX .', this.handleMessage);
        });
    }
}
module.exports = RestorePlugin;
