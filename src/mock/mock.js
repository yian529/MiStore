import Mock from 'mockjs'
Mock.mock('/api/user/login', {
    "status": 0,
    "data": {
        "id|1001-1100": 0,
        "username": "@cname",
        "email": "@email",
        "phone|1-9": 0,
        "role": 0,
        "createTime": 1524545121218,
        "updateTime": 1524545121218
    }
});