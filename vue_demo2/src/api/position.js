import fetch from '@/utils/fetch';
/**
 * 职位列表（搜索）
 * @param {
  "Keywords": "",
  "Position": "",
  "Companyname": "",
  "Industry": "",
  "City": "",
  "Salary": "",
  "UpdateTime": "",
  "OpenId": "",
  "Offset": 0,
  "Limit": 10
} params 
 */
//这里会调用fetch.js 中的 service.interceptors.request 请求过滤方法,查axios的post方法API, 
export const PositionSearch = params => {
  return fetch.post(`/api/Position/PositionSearch`,
    params
  );
};