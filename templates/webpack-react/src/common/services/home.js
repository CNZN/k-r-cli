import axios from 'axios';
import {request} from '@/common/utils/request';

const services = {};

services.getUserInfo = (params = {}) => {
    let path = '/getUserInfo';
    return request(path, params);
} 

export default services;