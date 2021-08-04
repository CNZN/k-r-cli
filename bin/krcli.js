#! /usr/bin/env node
const program = require('commander');
const colors = require('./colors')

const { blue, green } = colors;

const version = require('../package').version;
const figlet = require('figlet');

console.log(
    // 终端打印
    blue(
        figlet.textSync('K-R-CLI!', {
            font: 'Ghost',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true
        })
    )
);

program
    .command('create')
    .description('create a project ')
    .action(function(){
        green('--------构建项目--------')
    })

program
    .command('start')
    .description('start a project')
    .action(function(){
        green('--------运行项目-------')
    })

program
    .command('build')
    .description('build a project')
    .action(function(){
        green('--------构建项目-------')
    })


// fox 命令
program
    // -v 查看版本
    .version(version)
    // 命令的描述
    .description('CLI for new project')
    // 用户使用提示
    .usage('<command> [options]')
    // 添加命令
    .option('-n --name <>', 'your name', 'kenny')
    //命令别名
    // .alias('rn')
    .command('init', 'init a new project') 
    // 解析命令行参数，注意这个方法一定要放到最后调用
    .parse(process.argv);