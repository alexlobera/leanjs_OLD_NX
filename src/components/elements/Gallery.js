import React from 'react'
import PhotoGallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import Image from './Image'

const Photo = ({ index, onClick, photo, margin, direction, top, left }) => {
  const imgStyle = { margin: margin }
  const imgWithClick = { cursor: 'pointer' }

  if (direction === 'column') {
    imgStyle.position = 'absolute'
    imgStyle.left = left
    imgStyle.top = top
  }

  const handleClick = event => {
    onClick(event, { photo, index })
  }

  return (
    <Image
      style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
      {...photo}
      onClick={onClick ? handleClick : null}
    />
  )
}
class Gallery extends React.Component {
  constructor() {
    super()
    this.state = { currentImage: 0 }
    this.closeLightbox = this.closeLightbox.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  render() {
    const { photos = [] } = this.props

    return (
      <React.Fragment>
        <PhotoGallery
          photos={photos.map(({ srcSmall, width, height }) => ({
            src: srcSmall,
            width,
            height,
          }))}
          onClick={this.openLightbox}
          ImageComponent={Photo}
        />
        <Lightbox
          backdropClosesModal={true}
          images={photos.map(photo => ({
            src: photo.srcLarge,
          }))}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </React.Fragment>
    )
  }
}

export default Gallery
