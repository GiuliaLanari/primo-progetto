import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <img src={this.props.src} alt={this.props.alt} className="width-img"></img>
        <h4 className={this.props.color}>{this.props.alt}</h4>
      </div>
    );
  }
}

export default ImageComponent;
