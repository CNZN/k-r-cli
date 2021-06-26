import * as React from 'react';

// Great

type AppProps = {

    message: string
  
}



const Home: React.FC<AppProps> = ({ message, children }) => {

    return (<div>

        {message}

        {children}

    </div>)

}

export default React.memo(Home);
