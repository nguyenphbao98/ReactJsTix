import React from 'react';
import './style.scss'

function BlurImage(props) {
    let imgBlur = props.hinhAnh;
    return (
        <div className="blur-img" style={{
            background : `url('${imgBlur}')`
        }}>
            <div className="blur-img__content">
                
            </div>
        </div>
    )
}

export default BlurImage;
