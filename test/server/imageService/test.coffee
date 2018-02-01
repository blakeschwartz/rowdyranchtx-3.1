#
#
#

chai = require 'chai'
ramda = require 'ramda'

assert = chai.assert
should = chai.should()

find = ramda.find
propEq = ramda.propEq

ImageUtil = require('../../../dist/server/service/image/ImageUtil').default


describe 'ImageUtil Test', ->

  it 'find existing size', ->

    paths = {
      xs: "img/pic-xs.jpg",
      sm: "img/pic-sm.jpg",
      md: "img/pic-md.jpg",
      lg: "img/pic-lg.jpg",
      xl: "img/pic-xl.jpg"
    }

    size = ImageUtil.findImageSize(paths, "sm")
    size.should.be.equal "sm"

  it 'find size up', ->

    paths = {
      xs: "img/pic-xs.jpg",
      lg: "img/pic-lg.jpg",
      xl: "img/pic-xl.jpg"
    }

    size = ImageUtil.findImageSize(paths, "sm")
    size.should.be.equal "lg"

  it 'find size down', ->

    paths = {
      xs: "img/pic-xs.jpg",
      sm: "img/pic-sm.jpg",
      md: "img/pic-md.jpg"
    }

    size = ImageUtil.findImageSize(paths, "lg")
    size.should.be.equal "md"

  it 'find largest', ->

    paths = {
      xs: "img/pic-xs.jpg"
    }

    size = ImageUtil.findImageSize(paths, "xl")
    size.should.be.equal "xs"

  it 'find smallest', ->

    paths = {
      xl: "img/pic-xl.jpg"
    }

    size = ImageUtil.findImageSize(paths, "xs")
    size.should.be.equal "xl"
