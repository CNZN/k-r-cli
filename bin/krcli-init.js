
const path = require('path');
const inquirer = require('inquirer');
const ora = require('ora');
const ncp = require('ncp').ncp;
const question = require('./question')
const colors = require('./colors')

const {green, red} = colors;
// 交互
async function chooseTarget() {
    try {
        return await inquirer.prompt(question);
    } catch (e) {
        // b捕捉异常
        console.log(red(e));
        process.exit(1);
    }
}

(async function () {
    // 获取用户输入的参数
    const {
        confirm,
        name,
        author,
        target
    } = await chooseTarget();
    // 用于显示加载中的效果，类似于loading效果
    const spinner = ora(`generator ${target} template...`).start();
    // 查询绝对路径的文件名
    const dir = require.resolve('./krcli.js');
    // 将多个参数字符串合并成一个路径字符串
    const tplPath = path.join(dir, '../../', 'templates', target);
    // console.log(tplPath);
    // 异步复制文件
    ncp(tplPath, name, err => {
        if (err) {
            return spinner.fail('Failed to create template. Please try again.');
        }
        spinner.succeed();
        console.log(green('欢迎使用krcli,轻松构建react ts/js项目～🎉🎉🎉'));
    });
})();