import React, { useEffect } from 'react';

// export default class Echarts extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={

//         };
//     };

//     render () {

//         return (
//             <div>
//                 图表
//             </div>
//         )
//     }
// }

const Echarts = ()  => {
    const foo = () => {
        console.log(this)
    }
    useEffect(() => {
        foo()
    }, [])
    return (
        <div>
            图表练习
        </div>
    ) 
}

export default React.memo(Echarts);