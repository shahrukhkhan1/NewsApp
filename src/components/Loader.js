import React, { Component } from 'react'
import LoaderIcon from '../loading.gif';

export default class Loader extends Component {
  render() {
    return (
      <div className='text-center m-5 d-flex align-items-center justify-content-center' style={{minHeight:'100px'}}>
          <img src={LoaderIcon}/>
        
      </div>
    )
  }
}
