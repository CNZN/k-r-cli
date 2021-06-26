const question = [
    {
        name:'name',
        message:'请输入项目名称？', /* 是否进行 */
        default: 'react-demo'
    },{
        name:'author',
        message:'请输入作者？'
    },{
        type: 'list',
        name: 'target',
        message: 'please choose a template?',
        choices: ['webpack-react', 'webpack-react-ts'],
        default: 'tpl1'
    }
]

module.exports = question