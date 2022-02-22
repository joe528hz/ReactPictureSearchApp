import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard'

const ImageList = (props) => {
    const image = props.images.map((img) =>
        <ImageCard key={img.id} image={img} />
    )

    return (
        <div className="image-list">
            {image}
        </div>
    )
}

export default ImageList