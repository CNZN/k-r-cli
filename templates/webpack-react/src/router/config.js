import React from 'react';
import Echarts from '@/component/Echarts/index.jsx';
import Login from '@/component/Login';
import Portal from '@/component/CreatePortal';

export const ROUTER_MAP = [
    {
        key: 'echarts',
        path: '/echarts',
        component: Echarts,
        label: '图表'
    },
    {
        key: 'login',
        path: '/login',
        component: Login,
        label: '登录'
    },{
        key: 'portal',
        path: '/portal',
        component: Portal,
        label: '练习传送门'
    }
]