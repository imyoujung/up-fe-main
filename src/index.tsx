import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { CustomQueryClient } from '@utils/client/CustomQueryClient';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <QueryClientProvider client={CustomQueryClient}>
    <App />
  </QueryClientProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
