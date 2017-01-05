'use strict';

import React from 'react';
let RNFS = require('react-native-fs')
let asyncFunc = require('async')
let ReactNativeVoodoo360fsView = require('./ReactNativeVoodoo360fsView')

let ReactNativeVoodoo360fsContainer = React.createClass({
  getInitialState(){
    return {
      index: 0,
      images: [],
      allLoaded: false,
      errMsg: null,
      action: null,
      voodoo360Index: 0
    }
  },

  getBaseFolderName(){
    return `${RNFS.DocumentDirectoryPath}/voodoo_360`
  },

  getFolderName(){
    return `${this.getBaseFolderName()}/${this.props.folderName}`
  },

  getFilename(index){
    return `${this.getFolderName()}/${index}.jpg`
  },

  imagesLoaded(){
    this.setState({allLoaded: true})
    if (this.props.onImagesLoaded){
      this.props.onImagesLoaded()
    }
  },

  handleRetryDownloadFiles(){
    this.setState({errMsg: null})
    this.startDownloadFiles(this.state.index)
  },

  startDownloadFiles(index){
    this.downloadFiles(index, () => {
        this.imagesLoaded()
    })
  },

  downloadFiles(index, cb){
    if (!this.isMounted()){
      return
    }
    if (index >= this.props.imageURIs.length){
      cb()
      return
    }
    this.setState({index: index})
    let filepath = this.getFilename(index)

    let successFunc = () => {
      let images = this.state.images.slice(0)
      images.push(filepath)
      this.setState({images: images})
      this.downloadFiles(index + 1, cb)
    }

    RNFS.exists(filepath).then(result => {
      if (result){
        successFunc()
      } else {
        RNFS.downloadFile({
          fromUrl: this.props.imageURIs[index],
          toFile: filepath
        }).then(res => {
          successFunc()
        }).catch((err) => {
          console.warn("RNFS.downloadFile fails: ", err)
          this.setState({errMsg: "Something wrong."})
        });
      }
    })
  },

  componentDidMount(){
    asyncFunc.waterfall([
      // create base folder
      (cb) => {
        RNFS.mkdir(this.getBaseFolderName()).then(result => {
          if (result[0]){
            cb(null)
          } else {
            cb("Cannot create base folder")
          }
        })
      }, 
      // check item folder exist
      (cb) => {
        RNFS.exists(this.getFolderName()).then(result => {
          cb(null, result)
        })
      },
      // check folders number >= 3
      (folderExist, cb) => {
        // if (folderExist)
        if (folderExist){ // debug
          cb(null, null)
        } else {
          RNFS.readDir(this.getBaseFolderName()).then(result => {
            if (result.length >=3){
            // if (true){ // debug
              cb(null, result[0].path)
            } else {
              cb(null, null)
            }
          })
        }
      },
      // delete folder
      (path, cb) => {
        if (path){
          RNFS.unlink(path).then(result => {
            cb(null)
          })
        } else {
          cb(null)
        }
      },
      // create folder
      (cb) => {
        RNFS.mkdir(this.getFolderName()).then(result => {
          if (result[0]){
            cb(null)
          } else {
            cb("Cannot create product folder")
          }
        })
      },
      // check images exist
      (cb) => {
        RNFS.readDir(this.getFolderName()).then(result => {
          if (result.length == 36){
            let images = result.map((file) => {
              return file.path
            })
            this.setState({images: images})
            cb(null, false)
          } else {
            cb(null, true)
          }
        })
      },
    ], (err, result) => {
      if (err){
        console.warn("[ReactNativeVoodoo360fsContainer] Init images fail", err)
      } else {
        // download files
        if(result){
          this.setState({action: 'Download'})
          this.startDownloadFiles(0)
        } else {
          this.imagesLoaded()
        }
      }
    })
  },

  handleVoodoo360IndexChange(index){
    this.setState({voodoo360Index: index})
    if (this.props.onVoodoo360IndexChange){
      this.props.onVoodoo360IndexChange(index)
    }
  },

  render(){
    return (
      <ReactNativeVoodoo360fsView
        {...this.state}
        style={this.props.style}
        resizeMode={this.props.resizeMode}
        downloadText={this.props.downloadText}
        imageURIs={this.props.imageURIs}
        onRetryDownloadFiles={this.handleRetryDownloadFiles}
        onVoodoo360IndexChange={this.handleVoodoo360IndexChange}
        />
    )
  }
})

module.exports = ReactNativeVoodoo360fsContainer
