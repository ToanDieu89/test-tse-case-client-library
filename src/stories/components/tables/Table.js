import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Table extends React.Component {
  writeData = obj => {
    let rows = [];
    for (const key of Object.keys(obj)) {
      rows.push(<td>{obj[key]}</td>);
    }
    return rows;
  };

  render() {
    const { titleArray, contentArray, link, buttonLabel } = this.props;
    return (
      <div className="container-wide">
        <div>
          <table className="table table--default">
            <thead className="table__head">
              <tr>
                {titleArray.map(title => <th>{title}</th>)}
                <th />
              </tr>
            </thead>
            <tbody>
              {contentArray.map((contentObject, index) => {
                return (
                  <tr key={index} className="table__row">
                    {this.writeData(contentObject)}
                    <td style={{ textTransform: "uppercase" }}>
                      <Link key={index} to={link}>
                        {buttonLabel}
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Table.propTypes = {
  titleArray: PropTypes.arrayOf(PropTypes.string),
  contentArray: PropTypes.arrayOf(PropTypes.object),
  link: PropTypes.string,
  buttonLabel: PropTypes.string
};

export default Table;
