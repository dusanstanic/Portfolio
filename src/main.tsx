import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from '@/App/App';

import '@/styles/variables.scss';
import './styles/global.scss';

async function startApp() {
  if (import.meta.env.DEV) {
    const axe = await import('@axe-core/react');
    axe.default(React, ReactDOM, 1000);
  }

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}

startApp();
