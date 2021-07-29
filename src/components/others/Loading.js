import React from 'react'

export const Loading = () => {
    return (
        <div className="text-center my-4">
            <img className="load-image-loadingpage" src={require("../../assets/img/theme/sp.png").default} alt="Loading" />
        </div>
    )
}
