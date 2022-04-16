import React, { Component } from "react";

export class NewsItem extends Component {



  render() {
    const { title, description ,imageUrl, newsUrl,author,date, source} = this.props;
    console.log(imageUrl)
    return (
      <div>
        <div className="card" >
            <span className="position-absolute start-90 bg-danger badge rounded-pill" style={{top:'-13px',right:'-12px'}}>{source}</span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">

            <h5 className="card-title">{title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?'Unknown':author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
