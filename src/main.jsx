import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById('root')).render(

    <Auth0Provider
        domain="dev-s8h85aeixs6zmjoj.us.auth0.com"
        clientId="oY4P73vkEXJrER4ZjSveBSqQCTdhi9hs"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </Auth0Provider>,

)
