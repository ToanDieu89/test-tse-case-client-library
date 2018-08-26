// import React from "react";
// import configs from "../../src/constants/orgConfigs.js";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
// import infoIcon from "../../src/assets/icons/ic-circle-info.svg";
// import sortIcon from "../../src/assets/icons/ic-extend-down.svg";
// import Path from "ramda/src/path";

// const CaseList = ({ cases, translate, orgParam }) => {
//   const org = orgParam;
//   const fields = configs[org].display.homePage.caseListFields;
//   const checkPathReason = data => {
//     const checkReson = Path(["activities", 0, "meta", "detail", "reason"]);

//     return (
//       checkReson(data) != undefined &&
//       data.activities[0].meta.detail.reason != ""
//     );
//   };
//   const checkPathUpdate = data => {
//     const checkReson = Path(["activities", 0, "createdAt"]);
//     return checkReson(data) != undefined && data.activities[0].createdAt != "";
//   };

//   const mapViewField = (item, key) => {
//     return {
//       id: (
//         <td key={key} className="ID">
//           {item.alternativeId}
//         </td>
//       ),
//       step: (
//         <td key={key} className="step">
//           {item.currentStep}
//         </td>
//       ),
//       status: (
//         <td key={key} className="status">
//           {item.activities ? item.activities[0].brief : ""}
//           {checkPathReason(item) ? (
//             <a
//               className="hint--bottom-right  hint--no-animate hint--large"
//               aria-label={item.activities[0].meta.detail.reason}
//             >
//               <img
//                 className="icon-img--18 u-margin-left--6 u-text-align--right"
//                 src={infoIcon}
//               />
//             </a>
//           ) : (
//             ""
//           )}
//         </td>
//       ),
//       statusType: (
//         <td key={key} className="status">
//           step {item.currentStep}{" "}
//           {item.activities
//             ? item.activities[0].actiType
//                 .replace(/([a-z])([A-Z])/g, "$1 $2")
//                 // uppercase the first character
//                 .replace(/^./, function(str) {
//                   return str;
//                 })
//                 .toLowerCase()
//             : ""}
//         </td>
//       ),
//       hasPass: (
//         <td key={key} className="is-register">
//           {item.isRegistered ? "yes" : "no"}
//         </td>
//       ),
//       update: (
//         <td key={key} className={`update `}>
//           {checkPathUpdate(item)
//             ? distanceInWordsToNow(item.activities[0].createdAt, {
//                 includeSeconds: true
//               })
//             : ""}
//         </td>
//       ),
//       licensePlate: (
//         <td key={key} className="license-plate">
//           {item.extraParams && item.extraParams.LicensePlate
//             ? item.extraParams.LicensePlate
//             : "!"}
//         </td>
//       ),
//       phone: (
//         <td key={key} className="phone">
//           {item.mobile}
//         </td>
//       ),
//       issuer: (
//         <td key={key} className="issuer-name">
//           {item.issuerName}
//         </td>
//       ),
//       code: (
//         <td key={key} className="code">
//           {item.extraParams && item.extraParams.code
//             ? item.extraParams.code
//             : "!"}
//         </td>
//       ),
//       shop: (
//         <td key={key} className="code">
//           {item.extraParams && item.extraParams.shop
//             ? item.extraParams.shop
//             : "!"}
//         </td>
//       ),
//       createdBy: (
//         <td key={key} className="created-by">
//           {item.createdBy.substring(0, item.createdBy.lastIndexOf("@")) ||
//             item.createdBy}
//         </td>
//       )
//     };
//   };

//   const mapColumnName = fieldKey => {
//     const mapNameDefinition = [
//       {
//         name: translate("caseid"),
//         keys: ["id", "alternativeId"]
//       },
//       {
//         name: "has pass",
//         keys: ["hasPass"]
//       },
//       {
//         name: translate("state"),
//         keys: ["statusType"]
//       },
//       {
//         name: translate("l_plate"),
//         keys: ["licensePlate"]
//       },
//       {
//         name: translate("manager"),
//         keys: ["createdBy"]
//       },
//       {
//         name: translate("step"),
//         keys: ["step"]
//       },
//       {
//         name: translate("phone"),
//         keys: ["phone"]
//       },
//       {
//         name: translate("issuer"),
//         keys: ["issuer"]
//       }
//     ];
//     const defIndex = mapNameDefinition.findIndex(def =>
//       def.keys.includes(fieldKey)
//     );
//     return defIndex === -1 ? fieldKey : mapNameDefinition[defIndex].name;
//   };

//   return (
//     <div>
//       <table className="table table--default">
//         <thead>
//           <tr className="table__head">
//             {fields.map((field, index) => (
//               <th
//                 className={field === "update" ? "update" : ""}
//                 key={index}
//               >
//                 {mapColumnName(field)}
//                 <img
//                   className="icon-img--18 u-margin-left--6 u-text-align--right"
//                   src={sortIcon}
//                   style={{ visibility: "hidden" }}
//                 />
//               </th>
//             ))}
//             <th />
//           </tr>
//         </thead>
//         <tbody>
//           {cases.map(item => (
//             <tr className="table__row" key={item.id}>
//               {fields.map((field, index) => mapViewField(item, index)[field])}
//               <td className="u-text-align--right">
//                 <Link className="view" key={item.id} to={`/case/${item.id}`}>
//                   {translate("view")}
//                 </Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// CaseList.propTypes = {
//   cases: PropTypes.array,
//   translate: PropTypes.func
// };

// export default CaseList;
