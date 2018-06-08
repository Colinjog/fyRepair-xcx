export default {
    sso: {
        appId: 1010,
        apiBase: "https://sso.fyscu.com/api/",
        errorCode: {
            '400': '用户名或密码错误',
            '401': '验证码不正确',
            '404': '令牌不存在',
            '408': '令牌已过期',
            '444': '信息不完整',
            '500': '服务器错误'
        }
    },
    server: {
        apiBase: "https://repair.fyscu.com/api/"
    }
}