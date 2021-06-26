import services from '@/common/services/home';
import store from '@/reducer/index';

export const getInfo = () => {
    let params = {};
    services.getUserInfo(params).then(res => {
        console.log(res)
        let name = res.data.data.Name;
        let age = res.data.data.Age;
        store.dispatch({
            type:'HOME_NAME',
            payload: name
        })
        store.dispatch({
            type:'HOME_AGE',
            payload: age
        })
    })
}