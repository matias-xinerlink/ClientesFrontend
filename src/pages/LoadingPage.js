import React from 'react'
import './index.css'

export const LoadingPage = () => {
    return (
        <div className="vw-100 vh-100 d-flex flex-column align-items-center justify-content-center">
            <img className="load-image-loadingpage" src={require("../assets/img/theme/sp.png").default} alt="Loading" />
            <img className="logo-loadingpage" src={require("../assets/img/brand/Xinerlink-logo.png").default} alt="Loading" />
        </div>
    )
}
