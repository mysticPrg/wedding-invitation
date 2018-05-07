import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import ScrollCapture from './Components/Common/ScrollCapture';

ReactDOM.render(
  <ScrollCapture
    /* tslint:disable-next-line:jsx-no-lambda */
    render={(scroll: number) => {
      return <App scroll={scroll}/>;
    }}
  />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
