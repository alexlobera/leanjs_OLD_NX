import React from 'react'
import PhotoGallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import { Width, SMALL } from 'react-width'

import Image from './Image'
import Button from '../buttons/Button'
import P from '../text/P'
import Link from '../navigation/Link'

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

  const image = photo.href ? (
    <Link href={photo.href} style={{ lineHeight: 0 }}>
      <Image style={imgStyle} {...photo} />
    </Link>
  ) : (
    <Image
      style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
      {...photo}
      onClick={onClick ? handleClick : null}
    />
  )

  return image
}

const NUMBER_OF_IMAGES_PER_PAGE = 6

class Gallery extends React.Component {
  constructor() {
    super()
    this.state = { currentImage: 0, lastImage: NUMBER_OF_IMAGES_PER_PAGE }
  }
  openLightbox = (event, obj) => {
    debugger
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  hasMorePictures = () => this.state.lastImage < this.props.photos.length
  loadMore = () => {
    if (this.hasMorePictures()) {
      this.setState(state => ({
        lastImage: state.lastImage + NUMBER_OF_IMAGES_PER_PAGE,
      }))
    }
  }
  render() {
    const { photos: rawPhotos = [] } = this.props
    const photos = rawPhotos.slice(0, this.state.lastImage)

    return (
      <React.Fragment>
        <PhotoGallery
          photos={photos.map(({ srcSmall, href, width, height }) => ({
            src: srcSmall,
            width,
            height,
            href,
          }))}
          onClick={this.openLightbox}
          ImageComponent={Photo}
        />
        {this.hasMorePictures() && (
          <P align="center" top="20">
            <Button onClick={this.loadMore}>Load more pictures</Button>
          </P>
        )}
        <Width>
          {width =>
            width && width > SMALL ? (
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
            ) : null
          }
        </Width>
      </React.Fragment>
    )
  }
}

export default Gallery
