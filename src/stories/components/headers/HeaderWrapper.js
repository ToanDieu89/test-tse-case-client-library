import React from "react";
import PropTypes from "prop-types";

class HeaderWrapper extends React.Component {
  render() {
    const { mainlable, count, second, third } = this.props;
    return (
      <header className="header">
        <div className="header__banner">
          <div
            className="header__banner__first"
            style={
              second && third
                ? { with: "64%" }
                : second || third
                  ? { width: "82%" }
                  : null
            }
          >
            <p className="header__banner__first__text">{mainlable}</p>
            <p className="header__banner__first__count">{count}</p>
          </div>
          {second ? (
            <div className="header__banner__second">
              <div
                className={
                  second.iscolorblue
                    ? "text-ic-wrapper-blue"
                    : "text-ic-wrapper-pale-orange"
                }
              >
                <p>{second.text}</p>
                {second.icon ? <img src={second.icon} /> : null}
              </div>
            </div>
          ) : null}
          {third ? (
            <div className="header__banner__third">
              <div
                className={
                  third.iscolorblue
                    ? "text-ic-wrapper-blue"
                    : "text-ic-wrapper-pale-orange"
                }
              >
                <p>{third.text}</p>
                {third.icon ? <img src={third.icon} /> : null}
              </div>
            </div>
          ) : null}
        </div>
      </header>
    );
  }
}

HeaderWrapper.defaultProps = {};

HeaderWrapper.propTypes = {
  /** main lable of the current page */
  mainlable: PropTypes.string.isRequired,
  /** an optional number of data is/are current displaying */
  count: PropTypes.string,
  /** on optional extension for header bar */
  second: PropTypes.shape({
    text: PropTypes.string.isRequired,
    iscolorblue: PropTypes.bool,
    icon: PropTypes.string
  }),
  /** on optional extension for header bar */
  third: PropTypes.shape({
    text: PropTypes.string.isRequired,
    iscolorblue: PropTypes.bool,
    icon: PropTypes.string
  })
};

export default HeaderWrapper;
