import React, { useState } from 'react'
import PhotoGallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import { Width, SMALL } from 'react-width'
import Grid, { Col, Row } from '../../components/layout/Grid'
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

const Gallery = ({ photos = [] }) => {
  const [{ currentImage, lastImage }, setImageState] = useState({
    currentImage: 0,
    lastImage: NUMBER_OF_IMAGES_PER_PAGE,
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
        lastImage: lastImage + NUMBER_OF_IMAGES_PER_PAGE,
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
          <Col md={3} xs={12}>
            <P align="left" top="20">
              <Button onClick={loadMore} primary>
                Load more pictures
              </Button>
            </P>
          </Col>
        )}
        <Col md={9} xs={12}>
          <P align="left" top="30">
            <Link to="https://www.tripadvisor.co.uk/Tourism-g1426241-Parede_Lisbon_District_Central_Portugal-Vacations.html">
              Parede on TripAdvisor
            </Link>
          </P>
        </Col>
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
