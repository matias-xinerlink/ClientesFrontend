import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/argon-dashboard-react.css";
import { App } from './App';
import moment from 'moment';
import 'moment/locale/es'

moment.locale('es');

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
