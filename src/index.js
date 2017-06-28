import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ViewState from './mobx/ViewState';
import { Provider } from 'mobx-react';
import './index.css';
// Needed for onTouchTap / material-ui library
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const viewStore = new ViewState();

ReactDOM.render(
	<Provider viewStore={viewStore}>
		<MuiThemeProvider>
			<Root />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
