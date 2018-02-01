#
# This is a file of template tests.
#
#

chai = require 'chai'
ramda = require 'ramda'

assert = chai.assert
should = chai.should()

find = ramda.find
propEq = ramda.propEq

Service = require('../../../dist/server/service/livestock/service').default


describe 'LivestockService Test', ->
  service = null

  before ->
    #service = new Service()

    service = Service.getInstance()


  it 'it should exist', ->
    should.exist service


  it 'it should query all', ->
    goats = await service.getGoats()

    should.exist goats
    goats.should.be.instanceOf Array

  .timeout 3000


  it 'it should contain an instance by name', ->
    goats = await service.getGoats()
    #console.log goats

    goat = find(propEq('name', 'Jade'), goats)

    should.exist goats
    goats.should.be.instanceOf Array


  it 'it should contain an instance by id', ->
    goat = await service.getGoatById('gt000018')
    #console.log goat

    should.exist goat
    goat.should.have.property('name').which.is.equal('Dolly')

