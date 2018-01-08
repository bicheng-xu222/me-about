import React, { PureComponent } from "react"
import { connect } from "react-redux"

import fetchAlbums from "../actions/photos/fetchAlbums"
import fetchAlbumCovers from "../actions/photos/fetchAlbumCovers"
import resetAlbumCovers from "../actions/photos/resetAlbumCovers"

import AlbumList from "../components/AlbumList"

import "./AlbumContainer.css"

class AlbumContainer extends PureComponent {
  componentWillMount() {
    const { fetchAlbums, fetchAlbumCovers } = this.props
    fetchAlbums()
    fetchAlbumCovers()
  }

  componentWillUnmount() {
    this.props.resetAlbumCovers()
  }

  renderAlbums(album) {
    const cover = this.props.albumCovers.find(
      cover => cover.albumId === album.key
    )
    return (
      <AlbumList
        key={album.key}
        album={album}
        title={album.title}
        url={`/photo/${album.key}`}
        image={cover.images}
        preview={cover.preview}
        showContent
      />
    )
  }

  render() {
    const { albums, albumCovers } = this.props
    if (!albums || !albumCovers) return null
    if (albumCovers.length !== albums.length) return null
    return (
      <div>
      <div className="masonry container">
        {albums.map(album => this.renderAlbums(album))}
      </div>
      <div className="footer"><a>Powered by React.js &nbsp; © Bicheng Xu</a>
      </div>
    </div>

    )
  }
}

const mapStateToProps = ({ albums, albumCovers }) => ({
  albums,
  albumCovers
})

export default connect(mapStateToProps, {
  fetchAlbums,
  fetchAlbumCovers,
  resetAlbumCovers
})(AlbumContainer)
