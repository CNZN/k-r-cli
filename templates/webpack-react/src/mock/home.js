import Mock from 'mockjs'

Mock.mock('http://localhost:7777/getUserInfo', {
    data: {
        Name: 'kenny',
        Age: 18
    }
})