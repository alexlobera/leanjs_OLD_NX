import React, { useState } from 'react'
import PhotoGallery from 'react-photo-gallery'
import Lightbox from 'react-images'

import { Width, SMALL } from '../utils/WithWidth'
import { Col, Row } from '../layout/Grid'
import Image from './Image'
import Link from '../navigation/Link'

const Photo = ({
  index,
  onClick,
  photo,
  margin,
  direction,
  top,
  left,
  className = 'course-details-our-venue',
}) => {
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
    <Link className={className} href={photo.href} style={{ lineHeight: 0 }}>
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

const Gallery = ({
  photos = [],
  downloadVenuePDF,
  className,
  pageLimit = 4,
}) => {
  const [{ currentImage, lastImage }, setImageState] = useState({
    currentImage: 0,
    lastImage: pageLimit,
  })
  const [lightboxIsOpen, setLightboxIsOpen] = useState()
  const paginatedPhotos = photos.slice(0, lastImage)

  const openLightbox = (event, obj) => {
    setImageState(prevState => ({ ...prevState, currentImage: obj.index }))
    setLightboxIsOpen(true)
  }
  const closeLightbox = () => {
    setImageState(prevState => ({ ...prevState, currentImage: 0 }))
    setLightboxIsOpen(false)
  }
  const gotoPrevious = () => {
    setImageState(prevState => ({
      ...prevState,
      currentImage: currentImage - 1,
    }))
  }
  const gotoNext = () => {
    setImageState(prevState => ({
      ...prevState,
      currentImage: currentImage + 1,
    }))
  }
  const hasMorePictures = () => lastImage < photos.length
  const loadMore = () => {
    if (hasMorePictures()) {
      setImageState(prevState => ({
        ...prevState,
        lastImage: lastImage + pageLimit,
      }))
    }
  }

  return (
    <React.Fragment>
      <PhotoGallery
        photos={paginatedPhotos.map(({ srcSmall, href, width, height }) => ({
          src: srcSmall,
          width,
          height,
          href,
        }))}
        onClick={openLightbox}
        ImageComponent={Photo}
      />
      <Row>
        {hasMorePictures() && (
          <Col md={6}>
            <Link
              display="inline-block"
              pt={2}
              className={className}
              onClick={loadMore}
            >
              Load more pictures
            </Link>
          </Col>
        )}
        {downloadVenuePDF && (
          <Col md={6}>
            <Link
              display="inline-block"
              pt={2}
              className={className}
              to={downloadVenuePDF}
            >
              Download more info PDF
            </Link>
          </Col>
        )}
      </Row>
      <Width>
        {width =>
          width && width > SMALL ? (
            <Lightbox
              backdropClosesModal={true}
              images={paginatedPhotos.map(photo => ({
                src: photo.srcLarge,
              }))}
              onClose={closeLightbox}
              onClickPrev={gotoPrevious}
              onClickNext={gotoNext}
              currentImage={currentImage}
              isOpen={lightboxIsOpen}
            />
          ) : null
        }
      </Width>
    </React.Fragment>
  )
}

export default Gallery
