import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Wizzard } from './wizzard/components/Wizzard';

ReactDOM.render(<Wizzard />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
