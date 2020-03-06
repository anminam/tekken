import React from 'react';


const Background = () => {
    const videoSrc = 'assets/t1.mp4';
    return (
        <div>
            {/* <video autoPlay={true} loop={true} muted className={'__video'}>
                <source src={videoSrc} type="video/mp4" />
                안나와
            </video> */}
            <video src={videoSrc} autoPlay={true} loop={true} muted className={'__video'}>
            </video>
        </div>
    )
}

export default Background;