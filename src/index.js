import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ViewState from './mobx/ViewState';
import { Provider } from 'mobx-react';
import ReactGA from 'react-ga';
import './index.css';
// Needed for onTouchTap / material-ui library
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

function logPageView() {
	ReactGA.set({ page: window.location.pathname + window.location.search });
	ReactGA.pageview(window.location.pathname + window.location.search);
}

const viewStore = new ViewState();
ReactGA.initialize('UA-102506154-1');
logPageView();

ReactDOM.render(
	<Provider viewStore={viewStore}>
		<MuiThemeProvider>
			<Root />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
