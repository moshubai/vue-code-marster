import http from './http-axios'

export const getLists = (params) => http({
    'url': '/mock/5afbf212c910be77a053fa92/example/base',
    'method': 'get',
    'params': params,
    'accredit': true

})
export const getCityLists = (params) => http({
    'url': '/mock/5afbf212c910be77a053fa92/example/cityList',
    'method': 'get',
    'params': params,
    'accredit': true

})