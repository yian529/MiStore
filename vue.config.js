module.exports={
    devServer:{
        host:'localhost',
        port:8082,
        proxy:{
            // 当访问activity接口时，相当于为拦截
            '/api':{
                // 代理的目标
                target:'https://www.imooc.com',
                // 是否将主机投的原点更改为目标url地址 true为需要更改
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }  
            }
        }
    }
}