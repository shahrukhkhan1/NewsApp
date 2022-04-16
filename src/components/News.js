import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country:'in',
    pageSize:8,
    category:'general'
  }
  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
  

  capitalizeText = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
        articles: [],
        loading: true,
        page:1,
        totalResults:0
    };
    document.title = `${this.capitalizeText(this.props.category)} | NewsMonkey`
}


async updateNews (pageNo){
  const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=44891aaaf02e41669a03b68b10788655&pageSize=${this.props.pageSize}&page=${this.state.page}`;
  this.setState({loading:true})
  let data = await fetch(url);
  let parsedData = await data.json()
  // console.log(data ,parsedData)
  this.setState({
      articles:parsedData.articles, 
      totalArticles:parsedData.totalResults,
      loading:false
  })

}


async componentDidMount(){
 
  this.updateNews();

    
}

fetchMoreData = async () => {
  this.setState({page: this.state.page + 1})
  const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=44891aaaf02e41669a03b68b10788655&pageSize=${this.props.pageSize}&page=${this.state.page}`;
  // this.setState({loading:true})
  let data = await fetch(url);
  let parsedData = await data.json()
  // console.log(data ,parsedData)
  this.setState({
      articles:this.state.articles.concat(parsedData.articles), 
      totalArticles:parsedData.totalResults,
      loading:false
  })
};

// handlePrevClick = async ()  =>{
    // console.log("previous")
   
    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=44891aaaf02e41669a03b68b10788655&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // // console.log(data ,parsedData)
    // this.setState({
    //     page:this.state.page - 1,
    //     articles:parsedData.articles,
    //     loading:false
    // }) 
//     this.setState({
//       page:this.state.page - 1,
//     })
    
// this.updateNews()

    
// }

// handleNextClick = async ()  =>{
//     console.log("Next",Math.ceil(this.state.totalArticles/this.props.pageSize))

//     if (this.state.page + 1 > Math.ceil(this.state.totalArticles/this.props.pageSize )) {
        
//     }else{
      
//     let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=44891aaaf02e41669a03b68b10788655&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//     this.setState({loading:true})
//     let data = await fetch(url);
//     let parsedData = await data.json()
//     // console.log(data ,parsedData)
//     this.setState({
//         page:this.state.page + 1,
//         articles:parsedData.articles,
//         loading:false
//     }) 
// }


// this.setState({
//   page:this.state.page + 1,
// })
// this.updateNews()


// }





render() {
    //   console.log("Hello render");
    return (
      <>
          {/* <Loader/> */}
          
        <h1 className="text-center mb-5">News Monkey - Top  {this.capitalizeText(this.props.category)} Headlines</h1>
        {this.state.loading &&<Loader/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4><Loader/></h4>}
        >
          <div className="container">
        <div className="row" >
        {
           this.state.articles.map((elem)=>{
                return  <div className="col-md-4 mb-5"  key={elem.url}>
                <NewsItem               
                  title={elem.title?elem.title.slice(0, 45):''}
                  description={elem.description?elem.description.slice(0,88):''}
                  imageUrl={elem.urlToImage}
                  newsUrl={elem.url}
                  author={elem.author}
                  date={elem.publishedAt}
                  source={elem.source.name}
                />
              </div>  
            })
        }
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between my-5">
            <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Prev</button>
            <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </>
    );
  }
}

export default News;
