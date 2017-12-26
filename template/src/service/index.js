import axios from 'axios';

const apiUrl = process.env.NODE_ENV === 'development' ? '/test' : '';

// 配置接口地址
const API_URL = {
  demo: `${apiUrl}/demo`,
  demo2: `${apiUrl}/demo2`
};

// demo
const demo = () => new Promise((resolve, reject) => {
  axios.get(API_URL.demo).then(res => {
    resolve(res);
  }).catch(err => {
    reject(err);
  });
});

// demo2
const demo2 = () => new Promise((resolve, reject) => {
  axios.post(API_URL.demo2, {
    firstName: 'firstName',
    lastName: 'lastName'
  }).then(res => {
    resolve(res);
  }).catch(err => {
    reject(err);
  });
});

module.exports = {
  demo,
  demo2
};
