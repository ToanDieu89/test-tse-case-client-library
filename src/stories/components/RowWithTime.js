import React from "react";
import PropTypes from "prop-types";
import format from "date-fns/format";

let RowWithTime = ({ createdAt, detail, index }) => {
  return (
    <tr key={index} class="table__row">
      <td>
        &nbsp;&nbsp;<div class="memo">
          <div class="memo__content null u-margin-bottom--6">{detail}</div>
          <div class="u-text-transform--uppercase">
            {format(createdAt, "MMM DD, YYYY, HH:mm:ss")}
          </div>
        </div>
      </td>
      <td class="u-text-align--right">&nbsp;&nbsp;</td>
    </tr>
  );
};

RowWithTime.defaultProps = {};

RowWithTime.propTypes = {
  index: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired
};

export default RowWithTime;
