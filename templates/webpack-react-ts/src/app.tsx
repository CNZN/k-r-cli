import * as React from "react"
import * as ReactDOM from "react-dom"
import Home from './view/Home';

type AppProps = {
    message: string
}

const App: React.FC<AppProps> = ({ message}) => {

    return (<div>
        <Home message='abcd'/>

    </div>)

}

export default React.memo(App);