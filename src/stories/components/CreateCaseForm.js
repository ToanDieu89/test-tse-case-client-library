// import React from "react";
// import PropTypes from "prop-types";
// import { Form, Field } from "react-final-form";

// let CreateCaseForm = props => (
//   <Form
//     onSubmit={props.onSubmit}
//     initialValues={{
//       baseID: parseInt(props.baseID),
//       createdBy: props.createdBy
//     }}
//     render={({ handleSubmit, submitting, pristine }) => (
//       <form onSubmit={handleSubmit}>
//         <div className="card__body card__body--form">
//           {props.error ? (
//             <p className="u-color--vin-orange u-margin-bottom--6">
//               *{props.error}
//             </p>
//           ) : null}
//           <div className="field">
//             <div className="field__label field__label--default">
//               {props.translate("issuername")}
//             </div>
//             <Field
//               className="field__input field__input--default"
//               name="issuerName"
//               component="input"
//               type="text"
//             />
//           </div>
//           <div className="field">
//             <div className="field__label field__label--default">
//               {props.translate("mobilenumber")}
//             </div>
//             <Field
//               className="field__input field__input--default"
//               name="mobile"
//               component="input"
//               type="text"
//             />
//           </div>
//           <div className="field">
//             <div className="field__label field__label--default">
//               {props.translate("licenseplate")}
//             </div>
//             <Field
//               className="field__input field__input--default"
//               name={"[extraParams].LicensePlate"}
//               component="input"
//               type="text"
//             />
//           </div>
//           <div className="field">
//             <div className="field__label field__label--default">
//               {props.translate("caseid")}
//             </div>
//             <Field
//               className="field__input field__input--default"
//               name={"alternativeId"}
//               component="input"
//               type="text"
//             />
//           </div>
//         </div>
//         <div className="card__footer card__footer--form">
//           {props.loading ? (
//             <div className="loader-spinner u-margin-right--12" />
//           ) : null}
//           <button
//             className="button button--primary"
//             type="submit"
//             disabled={submitting || pristine}
//           >
//             CREATE
//           </button>
//         </div>
//       </form>
//     )}
//   />
// );

// CreateCaseForm.propTypes = {
//   baseID: PropTypes.string,
//   createdBy: PropTypes.string,
//   onSubmit: PropTypes.func,
//   loading: PropTypes.bool,
//   error: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
//   translate: PropTypes.func
// };

// export default CreateCaseForm;
