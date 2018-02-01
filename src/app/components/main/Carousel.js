
import React, {Component} from 'react'


export default class Carousel extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      pics: [
        {url: "/img?nm=birth-2016&sz=md", title: "Rowdy and baby", desc: "Rowdy holding a newly born baby."},
        {url: "/img?nm=dolly.001&sz=md", title: "Dolly", desc: "One of our miniature goats"},
        {url: "/img?nm=chickens.001&sz=md", title: "Chickens", desc: "Chickens lined up!"},
        {url: "/img?nm=mallard.001&sz=md", title: "Mallards", desc: "We have Mallards on our pond that are permanent residents."},
        {url: "/img?nm=kids-2015-0001&sz=md", title: "Nubian Babies", desc: "Two Nubian babies."},
        {url: "/img?nm=milking-2015-0001&sz=md", title: "Milking", desc: "Milking time."},
        {url: "/img?nm=annabelle.001&sz=md", title: "Annabelle", desc: "Anabelle with her two boys."},
        {url: "/img?nm=rowdy.002&sz=md", title: "Rowdy and Rosie", desc: "Rowdy riding Rosie."}
      ]
    }
  }

  render = () => {
    return (
      <div style={{margin: "2em"}}>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">

          <ol className="carousel-indicators">
            {
              this.state.pics.map((pic, i) => {
                return (
                  <li key={i} data-target="#myCarousel" data-slide-to={i} className={(i == 0) ? "active" : ""}></li>
                )
              })
            }
          </ol>

          <div className="carousel-inner" role="listbox">
            {
              this.state.pics.map((pic, i) => {
                return (
                  <div className={(i == 0) ? "carousel-item active" : "carousel-item"} key={i}>
                    <img src={pic.url} alt={pic.title} />
                    <div className="carousel-caption d-none d-md-block">
                      <h2>{pic.title}</h2>
                      <p>{pic.desc}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
              
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="clearfix hidden-sm-up"></div>
        <div className="clearfix hidden-xs-down"></div>
      </div>
    )
  }
}


//                 <li key={i} data-target="#myCarousel" data-slide-to={i} className={(i == 0) ? "active" : ""}></li>
