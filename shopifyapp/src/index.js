import React from 'react';
import ReactDOM from 'react-dom/client';
import {AppProvider} from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';


import App from './App';

function WrappedApp() {
  return (
    <AppProvider i18n={enTranslations}>
      <App />
    </AppProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<WrappedApp /> )
;