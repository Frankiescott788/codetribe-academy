import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import AuthProvider from './context/authProvider.jsx'
import UserExperinceProvider from './context/UXProvider.jsx'
import { Provider } from 'react-redux'
import store from '../store/config.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </Provider>
    </AuthProvider>
  </StrictMode>,
)
