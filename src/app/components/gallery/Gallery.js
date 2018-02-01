
import React, {Component} from 'react'
import PhotoGallery from 'react-photo-gallery'
import $ from 'jquery'
import _ from 'lodash'
import Measure from 'react-measure'
import Lightbox from 'react-images'
import Layout from '../Layout.js'

export default class Gallery extends Component {
  
  constructor() {
    super()

    this.state = {photos: [], pageNum: 1, totalPages: 1, loadedAll: false, currentImage: 0, dimensions: {width: -1, height: -1}}
  }

  componentDidMount = () => {
    this.loadMorePhotos()
    this.loadMorePhotos = _.debounce(this.loadMorePhotos, 200)
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
    if ((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50)) {
      this.loadMorePhotos()
    }
  }

  loadMorePhotos = (e) => {
    if (e) {
      e.preventDefault()
    }

    if (this.state.pageNum > this.state.totalPages) {
      this.setState({loadedAll: true})
    }

    $.ajax({
      url: '/api/gallery',
      dataType: 'json',
      cache: false,

      success: (data) => {
        let photos = []
        data.forEach( (obj, i, arr) => {
          photos.push({
            src: obj.image,
            width: parseInt(obj.width),
            height: parseInt(obj.height),
            caption: obj.description,
            alt: obj.title,
            sizes: [
              '(min-width: 480px) 50vw',
              '(min-width: 1024px) 33.3vw',
              '100vw'
            ]
          })
        })

        let newPhotos = this.state.photos.concat(photos)
        this.setState({
          photos: newPhotos,
          pageNum: this.state.pageNum + 1
          // totalPages: data.photoset.pages
        })
      },

      error: (xhr, status, err) => {
        console.error(status, err.toString())
      }
    })
  }

  //openLightbox: (index, event) =>
  openLightbox = (event, obj) => {
    event.preventDefault()
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    })
  }

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    })
  }

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    })
  }

  gotoNext = () => {
    if (this.state.photos.length - 2 == this.state.currentImage) {
      this.loadMorePhotos()
    }

    this.setState({
      currentImage: this.state.currentImage + 1
    })
  }

  renderGallery = () => {
    let width = this.state.dimensions.width
    // const className = classNames(
    //  (width < 400) && 'small-width-modifier'
    // )
    let cols = 1
    if (width >= 480)
      cols = 2
    if (width >= 1024)
      cols = 3
    if (width >= 1280)
      cols = 4

    return (
      <Measure
        bounds
        onResize={(contentRect) =>
          this.setState({ dimensions: contentRect.bounds })
        }
      >
        {({ measureRef }) =>
          <div ref={measureRef}>
            <PhotoGallery photos={this.state.photos} columns={cols} onClick={this.openLightbox} />
          </div>
        }
      </Measure>
    )
  }

  render = () => {
    // no loading sign if its all loaded
    if (this.state.photos.length > 0) {
      return (
        // console.log('Loading images...')
        <div>
          <Layout content={() =>
            <div>
              <header>
                <h1 className='main-title'><span className='rr-title'><span className='rr-title-cap'>G</span>allery</span></h1>
              </header>

              <div className='App'>
                {this.renderGallery()}
                <Lightbox
                  theme={{container: { background: 'rgba(0, 0, 0, 0.85)' }}}
                  images={this.state.photos}
                  backdropClosesModal={true}
                  onClose={this.closeLightbox}
                  onClickPrev={this.gotoPrevious}
                  onClickNext={this.gotoNext}
                  currentImage={this.state.currentImage}
                  isOpen={this.state.lightboxIsOpen}
                  width={1600}
                />
                {!this.state.loadedAll && <div className='loading-msg' id='msg-loading-more'>Loading</div>}
              </div>

            </div>
          } />
        </div>
      )
    }
    else {
      return (
        <div>
          <Layout content={() => {
            return (
              <div>
                <header>
                  <h1 className='main-title'><span className='rr-title'><span className='rr-title-cap'>G</span>allery</span></h1>
                </header>
                <div id='msg-app-loading' className='loading-msg'>Loading</div>
              </div>
            )
          }} />
        </div>
      )
    }
  }


}