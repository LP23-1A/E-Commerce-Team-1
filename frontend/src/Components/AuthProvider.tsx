'use client'

import { Auth0Provider } from "@auth0/auth0-react"

const AuthProvider = ({ children }: any) => {
    return (
        <Auth0Provider
            domain="dev-trhn4w3ga6nuqgmc.us.auth0.com"
            clientId="bjW8p0spgX4iIhgmD7wQfZHv8c29e0V3"
            authorizationParams={{
                redirect_uri: window.location.origin + '/InfoAboutStore'
            }}
        >
            {children}
        </Auth0Provider>
    )
}

export default AuthProvider