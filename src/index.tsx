import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CSSReset, ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const theme = {
    styles: {
        global: {
            body: {
                bg: '#F8F4EC'
            }
        }
    }
};
root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
        <CSSReset />
            <App />
        </ChakraProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
