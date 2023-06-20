import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import { ErrorBoundary } from './providers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
  </React.StrictMode>
);
