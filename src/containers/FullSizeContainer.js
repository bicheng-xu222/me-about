import React, { PureComponent } from "react"
import { connect } from "react-redux"

import fetchFullSize from "../actions/photos/fetchFullSize"
import resetPhotos from "../actions/photos/resetPhotos"

import PhotoList from "../components/PhotoList"

class AlbumContainer extends PureComponent {
  componentWillMount() {
    const { fetchFullSize } = this.props
    const { photoKey } = this.props.params
    fetchFullSize(photoKey)
  }

  componentWillUnmount() {
    this.props.resetPhotos()
  }

  renderAlbums(photo) {
    // console.log(photo.ImageSizes)
    return (
      <PhotoList
        key={photo.key}
        title={photo.title}
        url={`/photo/${this.props.params.albumKey}/${this.props.params.photoKey}`}
        image={photo.ImageSizes}
        showContent={false}
      />
    )
  }

  render() {
    const { photos } = this.props
    if (!photos[0]) return null
    return (
      <div>
      <div className="masonry container">
        {this.renderAlbums(photos[0])}
      </div>
      <div className="footer">
        <a>Powered by React.js &nbsp; © Bicheng Xu</a>
      </div>
      </div>
    )
  }
}

const mapStateToProps = ({ photos }) => ({
  photos
})

export default connect(mapStateToProps, {
  fetchFullSize,
  resetPhotos
})(AlbumContainer)
