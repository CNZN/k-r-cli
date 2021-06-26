import React, { useEffect } from 'react';
import {ROUTER_MAP} from '@/router/config';
import { Menu } from 'antd';

import { withRouter } from 'react-router';

import store from '@/reducer/index';

// export default withRouter( class Footer extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = store.getState()
//         store.subscribe(this.storeChange)
//     }
//     storeChange = () => {
//         this.setState(store.getState())
//     }
//     clickBtn = () => {
//         store.dispatch({
//             type:'HOME_AGE',
//             payload: 19
//         })
//     }
//     render() {
//         return (
//             <div>
//                 底部
//                 <br />
//                 {
//                     store.getState().name + store.getState().age
//                 }
//                 <div>
//                     <button onClick={this.clickBtn}>增加</button>
//                 </div>
//                 {
//                     this.state.age
//                 }
//             </div>
//         );
//     }
// })


const Footer = props  => {
    useEffect(() => {
        console.log(props)
    }, [])
    return (
        <div>

        </div>
    ) 
}

export default React.memo(Footer);
