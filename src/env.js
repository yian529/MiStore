let baseURL;
// 根据不同的环境输出不同的URL地址
// process.env 获取当前Nodejs进程里的环境变量，这个环境变量最终会写入到Nodejs里面
// process.env.NODE_ENV 获取当前传过来的参数
switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn/api'
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api'
        break;
    case 'production':
        baseURL = 'http://mall-pre.springboot.cn/api'
        break;
    default:
        baseURL = 'http://mall-pre.springboot.cn/api'
        break;
}
export default {
    baseURL
}