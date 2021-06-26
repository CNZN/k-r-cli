import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import store, {history} from '@/reducer/index';
import App from './app';
// import {createBrowserHistory} from 'history';




const path = require ('path');
const PROJECT_PATH = path.join(__dirname, '../');
const SOURCE_PATH = path.join(PROJECT_PATH, './src')
// console.log(SOURCE_PATH)

// 判断环境选着性使用mock数据
if (process.env.NODE_ENV == "development") {
    // console.log(process.env.NODE_ENV)
    require('./mock');
}
// export const history = createBrowserHistory();

// console.log(window.location.pathname)
// history.push(window.location.pathname);
// 错误边界
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
}

ReactDom.render(
    <ErrorBoundary>
      {/* 提供store */}
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <BrowserRouter>
                  <App/>
                </BrowserRouter>
            </ConnectedRouter>
        </Provider>
    </ErrorBoundary>
    ,
    document.getElementById('root')
)
