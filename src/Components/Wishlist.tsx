import React, { Component } from "react";
import wishlistItems from "../wishlistItems";
import WishlistItem from "./WishlistItem";

class Wishlist extends Component {
  wishlistItems: any[];

  constructor(props: any) {
    super(props);
    this.state = { meta: {}, data: [] };
    this.wishlistItems = wishlistItems;
  }

  render() {
    return (
      <div>
        <h1>My Dope Wishlist</h1>
        {Object.keys(this.wishlistItems).map(key => (          
              <WishlistItem
                key={key}
                index={key}
                details={this.wishlistItems[parseInt(key)]}
              />
            ))}
      </div>
    );
  }
}

export default Wishlist;