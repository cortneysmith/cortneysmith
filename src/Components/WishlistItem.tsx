import React, { Component } from "react";
import "../css/wishlist.css";

interface WishlistProperties extends React.Props<any> {
  index: any;
  details: any;
}

class WishlistItem extends React.Component<WishlistProperties, any> {
  key: any;
  index: any;
  details: any;
  
  constructor(props: any) {
    super(props);
    this.state = { meta: {}, data: [] };
  }

  render() {
    return (
      <div className="wishlist-item">
        <img className="wishlist-item-col wishlist-img" src={this.props.details.thumbURL}/>
        <div className="wishlist-item-col wishlist-name">{this.props.details.name}</div>
        <div className="wishlist-item-col wishlist-link"><a href={this.props.details.linkURL} target="_blank">{this.props.details.linkName}</a></div>
        <div className="wishlist-item-col wishlist-price">{this.props.details.price}</div>
        <div className="wishlist-item-col wishlist-details">{this.props.details.details}</div>        
      </div>
    );
  }
}

export default WishlistItem;
