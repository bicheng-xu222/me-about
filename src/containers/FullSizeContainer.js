import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { Link } from "react-router"
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import fetchFullSize from "../actions/photos/fetchFullSize"
import resetPhotos from "../actions/photos/resetPhotos"

import PhotoList from "../components/PhotoList"

class AlbumContainer extends PureComponent {
  componentWillMount() {
    const { fetchFullSize } = this.props
    const { photoKey, albumKey } = this.props.params
    fetchFullSize({ photoKey, albumKey })
  }

  componentWillUnmount() {
    this.props.resetPhotos()
  }

  renderAlbums(photo) {
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

    function handleClick() {

    }

    var FontAwesome = require('react-fontawesome')

    const { photos } = this.props
    const prevPage = `/photo/${this.props.params.albumKey}`;
    console.log(photos[0])
    if (!photos[0]) return null
    return (
      <div>
      <div className="masonry container">
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
          <Link to={prevPage}>
          <Chip
            className="chipStyle"
            onClick={handleClick}
            >
            <Avatar src={photos[0].preview} />
            {photos[0].title}
          </Chip>
        </Link>
        </div>
        </MuiThemeProvider>
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
