import React from "react"
import ReactDisqusComments from 'react-disqus-comments';

const PhotoList = ({ image, title, url, showContent }) => {
  const divStyle = {
    background: 'url(' + image + ') no-repeat center',
    backgroundSize: 'contain'
  }
  return (
    <div className="full-size-container">
    <div className="full-size-photo" style={divStyle}>
    </div>
    <ReactDisqusComments
       shortname="shutter-up"
       identifier={image}
       title="Bicheng Xu Photography"
       onNewComment={this.handleNewComment}/>
   </div>
  )
}

export default PhotoList
