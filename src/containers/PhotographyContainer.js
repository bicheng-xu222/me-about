import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { Link } from "react-router"
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import fetchPhotos from "../actions/photos/fetchPhotos"
import getAlbum from "../actions/photos/getAlbum"
import resetPhotos from "../actions/photos/resetPhotos"

import AlbumList from "../components/AlbumList"

class AlbumContainer extends PureComponent {
  componentWillMount() {
    const { fetchPhotos, getAlbum } = this.props
    const { albumKey } = this.props.params
    fetchPhotos(albumKey)
    getAlbum(albumKey)
  }

  componentWillUnmount() {
    this.props.resetPhotos()
  }

  renderAlbums(photo) {
    return (
      <AlbumList
        key={photo.key}
        title={photo.title}
        url={`/photo/${this.props.params.albumKey}/${photo.key}`}
        image={photo.ImageSizes}
        showContent={false}
        preview={photo.preview}
      />
    )
  }

  handleClick() {

  }

  render() {
    const { photos, currentAlbum } = this.props
    var FontAwesome = require('react-fontawesome')
    if (!currentAlbum || !photos) return null
    if (currentAlbum.length !== photos.length) return null
    const album_title = photos[0].caption
    return (
      <div>
      <div className="photo_Container">
        <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className="album_title">
          <Link to="/photo" className="nav_link">
              <RaisedButton
                icon={<FontAwesome
                              className='super-crazy-colors'
                              name='home'
                              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                      />}
                className="homeSign"
              />
          </Link>
          <Link to={`/photo/${this.props.params.albumKey}`}>
          <Chip className="chipStyle" onClick={this.handleClick}>
            <Avatar src={photos[0].preview} />
            {album_title}
          </Chip>
          </Link>
        </div>
        </MuiThemeProvider>
        <div className="masonry">
        {photos.map(photo => this.renderAlbums(photo))}
        </div>
      </div>
      <div className="footer">
        <a>Powered by React.js &nbsp; © Bicheng Xu</a>
      </div>
      </div>
    )
  }
}

const mapStateToProps = ({ photos, currentAlbum }) => ({
  photos,
  currentAlbum
})

export default connect(mapStateToProps, {
  fetchPhotos,
  getAlbum,
  resetPhotos
})(AlbumContainer)
