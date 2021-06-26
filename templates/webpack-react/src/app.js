import React from 'react';

import Rounter from './router/index';
import Header from '@/common/components/Header/index';
import Footer from '@/common/components/Footer/index';

// antd需要单独引入
import 'antd/dist/antd.css';


function App () {
    return (
        <div className="App">
            <Header value ='kenny'/>
            <Rounter />
            <Footer  value ='shrily'/>
        </div>
    );
}
export default App;