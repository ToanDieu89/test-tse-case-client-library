// import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { pathOr, compose, identity, ifElse, equals, type } from "ramda";
// import format from "date-fns/format";
// import { getTranslate } from "react-localize-redux";

// class Noti extends React.Component {

//   render() {
//     const { notification, translate } = this.props;
//     return (
//       <div className="home">
//         <div className="home__sidebar" />
//         <div className="home__content">
//           <div className="container-wide">
//             <h1 className="page-title u-margin-bottom--22">
//               {translate("notification")}
//             </h1>
//             <div>
//               {notification.events.length ? (
//                 <table className="table table--default">
//                   <thead className="table__head">
//                     <tr>
//                       <th>{translate("caseid")}</th>
//                       <th>{translate("step")}</th>
//                       <th>{translate("message")}</th>
//                       <th>{translate("date")}</th>
//                       <th />
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {notification.events.map(event => {
//                       return (
//                         <tr key={event.id} className="table__row">
//                           <td>
                            
//                             {compose(
//                               ifElse(
//                                 compose(equals("Object"), type),
//                                 pathOr("", ["alternativeId"]),
//                                 identity
//                               ),
//                               pathOr(event, ["meta", "detail", "alternativeId"])
//                             )(event)}
//                           </td>
//                           <td>{event.meta.case.step}</td>
//                           <td>{event.detail}</td>
//                           <td>
//                             {format(event.createdAt, "MMM DD, YYYY, HH:mm:ss")}
//                           </td>
//                           <td>
//                             <Link
//                               key={event.meta.case.id}
//                               to={`/case/${event.meta.case.id}`}
//                             >
//                               {translate("view")}
//                             </Link>
//                           </td>
//                         </tr>
//                       );
//                     })}
//                   </tbody>
//                 </table>
//               ) : (
//                 <div>
//                   {!notification.isPreloaded ? (
//                     <div className="loader-spinner u-margin-right--12" />
//                   ) : (
//                     "No notification"
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }


// export default Noti;
