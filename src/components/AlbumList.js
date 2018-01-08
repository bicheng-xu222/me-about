import React from "react"
import { Link } from "react-router"
import ProgressiveImage from "react-progressive-image-loading";

const AlbumList = ({ image, preview, title, url, showContent }) => {
  return (

    <div className="panel">
      <Link to={url}>

        <ProgressiveImage
            preview={preview}
            src={image}
            transitionTime={500}
            transitionFunction="ease"
            render={(src, style) => <img className="panel-image" src={image} style={style} alt={title} />}
        />

        {showContent
          ? <div className="sm-tile-info">
              <div className="sm-tile-info-text">
                <p title="Click to view" className="sm-tile-title">
                  {title}
                </p>
              </div>
            </div>
          : null}
      </Link>
    </div>
  )
}

export default AlbumList
