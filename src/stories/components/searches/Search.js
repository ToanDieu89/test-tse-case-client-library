import React, { Component } from "react";
import PropTypes from "prop-types";
import searchIcon from "../../../../src/assets/icons/ic-search.svg";

export default class Search extends Component {
  render() {
    return (
      <div className="search-wrapper">
        <img src={searchIcon} />
        <input className="search-wrapper__input"
          {...this.props}
          type="text"
        />
      </div>
    );
  }
}

Search.propTypes = {
};

Search.defaultProps = {
};
