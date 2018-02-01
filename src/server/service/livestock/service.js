
import fs from 'fs'
import marked from 'marked'
import AWS from 'aws-sdk'
import DOC from 'dynamodb-doc'
import {find, propEq} from 'ramda'


export default class LivestockDBService {

  static instance = null

  static getInstance() {
    if (!this.instance) {
      this.instance = new LivestockDBService()
    }
      
    this.instance
  }


  constructor(tableName = 'rrtx_goats') {
    this.waiting = null
    this.goats = []

    try {
      AWS.config.loadFromPath(__dirname + '/config.json')
      let dynamo = new AWS.DynamoDB({apiVersion: '2012-10-08'})
      let docClient = new DOC.DynamoDB(dynamo)

      let params = {
        TableName: tableName
      }

      this.waiting = new Promise((resolve, reject) => {
        dynamo.scan(params, (err, data) => {
          if (err) {
            reject(err)
          }
          else {
            this.goats = data.Items
            resolve()
          }
        })
      })
    }
    catch (e) {
      console.log(e)
    }
  }

  getGoats = () => {
    new Promise((resolve, reject) => {
      this.waiting.then(() => {resolve(this.goats)}, (reason) => {reject(reason)})
    })
  }


  getGoatById = (id) => {
    new Promise((resolve, reject) => {
      this.waiting
        .then(() => {
          goat = find(propEq('rrid', id), this.goats)
          resolve(goat)
          }, 
          (reason) => {
            reject(reason)
          }
        )  
    })
  }


  getCanines = () => {
    //@db.collections.canines
  }


  getCanineById = (id) => {
    //matchId = (canine) => canine.rrid is id
    //find matchId, @db.collections.canines
  }

}

