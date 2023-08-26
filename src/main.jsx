import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { ThemeProvider } from './components/Context.jsx'
import { store } from './Store.js'
import {Provider} from "react-redux"
ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
      <Provider store={store}>
    <App />
    </Provider>
  </ThemeProvider>,
)
