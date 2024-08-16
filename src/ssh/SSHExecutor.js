const {NodeSSH} = require('node-ssh')
const ssh = new NodeSSH()


async function grepLog() {
    await ssh.connect({
        host: '10.11.165.6',
        username: 'huyhq4',
        privateKeyPath: '/Users/huyhq4/workspace/zps_alpha_test_bot/protected/id_rsa',
        passphrase: '3763958'
    })

    let result = await ssh.execCommand(
        'find . -maxdepth 2 -type d -regextype egrep -regex ".*/2024-08-1[0-6]" -exec grep -r "ResultGameUser" {}/zp_metric_qk24/ \\;',
        {cwd: '/log/gamelog/qwirkle/2024'}
    )

    if (result.stderr) {
        console.log("grepLog err: ", result.stdout)
    }

    return result.stdout
}