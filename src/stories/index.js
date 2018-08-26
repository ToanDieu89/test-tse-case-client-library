import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import StoryRouter from "storybook-router";
import "../../src/assets/style/main.scss";
// import {
//   getTranslate,
//   setActiveLanguage,
//   getActiveLanguage
// } from "react-localize-redux";
// import { reducer } from "redux-form";
// import { createStore, combineReducers } from "redux";
// import { Provider } from "react-redux";

import { withReadme, withDocs } from "storybook-readme";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from '@storybook/addon-knobs';

//README
import readme_navigation from "./readme/navigation/README.md";
import readme_button from "./readme/buttons/README.md";
import readme_modal from "./readme/modals/README.md";
import readme_header from "./readme/headers/README.md";
import readme_loading from "./readme/loadings/README.md";
import readme_search from "./readme/searches/README.md";
import readme_row from "./readme/rows/README.md";
import readme_input from "./readme/inputs/README.md";

import {
  component_loginform,
  component_NavigationSideBarWrapper,
  component_ButtonDefault,
  component_Modal_default,
  component_HeaderWrapper_Default,
  component_Row,
  component_Loading,
  component_LoginPage_default,
  component_LoginPage_loading,
  component_LoginPage_error,
  component_caselist_default,
  component_casedetail_default,
  component_header_default,
  component_header_backicon,
  component_notification_default,
  component_notification_loading,
  // component_RowSuccessIcon,
  // component_RowWithTime,
  // component_CardTime,
  // component_CardTimeIcon,
  component_Table,
  component_Input,
  component_Search
} from "./constants/index";

// const initialState = {};

// const store = createStore(
//   combineReducers({
//     reducer
//   }),
//   initialState
// );

const storyWrapper = story => {
  return <div style={{ margin: "35px" }}>{story()}</div>;
};


//////RE DEVIDE

// storiesOf("Container", module)
//   .addDecorator((story, context) => withInfo('')(story)(context))
//   .addDecorator(StoryRouter())
//   .add("Header Default", withReadme(...[readme_header, component_header_default]))
//   .add("Header With Back Icon", withReadme(...[readme_header, component_header_backicon]))
//   .add(
//     "LoginPage-default",
//     withReadme(...[readme_loginpage, component_LoginPage_default])
//   )
//   .add(
//     "LoginPage-loading",
//     withReadme(...[readme_loginpage, component_LoginPage_loading])
//   )
//   .add("LoginPage-error", withReadme(...[readme_loginpage, component_LoginPage_error]))
//   .add("Notification-default", withReadme(...[readme_notification, component_notification_default]))
//   .add("Notification-loading", withReadme(...[readme_notification, component_notification_loading]))
//   .add("CaseList-default", withReadme(...[readme_caselist, component_caselist_default]))
//   .add("CaseDetail-default", withReadme(...[readme_casedetail, component_casedetail_default]))
//   .add("Login Form - default", withReadme(...[readme_loginform, component_loginform]));

// storiesOf("Components", module)
//   .addDecorator((story, context) => withInfo("")(story)(context))
//   .addDecorator(StoryRouter())
//   .addDecorator(storyWrapper)
//   .add(
//     "Row-With-Success-Icon-And-Time",
//     withReadme(...[readme_search, component_RowSuccessIcon])
//   )
//   .add("Row-With-Time", withReadme(...[readme_search, component_RowWithTime]))
//   .add("Card-Time", withReadme(...[readme_search, component_CardTime]))
//   .add("Card-Time-Icon", withReadme(...[readme_search, component_CardTimeIcon]))

storiesOf("Navigation", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .addDecorator(storyWrapper)
  .add(
    "Navigation",
    withReadme(...[readme_navigation, component_NavigationSideBarWrapper])
  )

storiesOf("Button", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .addDecorator(storyWrapper)
  .add(
    "Button",
    withReadme(...[readme_button, component_ButtonDefault])
  )
storiesOf("Modal", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .addDecorator(storyWrapper)
  .add("Modal", withReadme(...[readme_modal, component_Modal_default]))

storiesOf("HeaderBar", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .addDecorator(storyWrapper)
  .add(
    "HeaderBar",
    withReadme(...[readme_header, component_HeaderWrapper_Default])
  )

storiesOf("Row", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .addDecorator(storyWrapper)
  .add("Row", withReadme(...[readme_row, component_Row]))

storiesOf("Input", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .addDecorator(storyWrapper)
  .add("Input-Lable", withReadme(...[readme_input, component_Input]));

storiesOf("Search", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .addDecorator(StoryRouter())
  .addDecorator(storyWrapper)
  .addDecorator(withKnobs)
  .add("Search", withReadme(...[readme_search, component_Search]));

storiesOf("Table", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .addDecorator(StoryRouter())
  .addDecorator(storyWrapper)
  .add("Table", withReadme(...[readme_loading, component_Table]))

storiesOf("Loading", module)
  .addDecorator((story, context) => withInfo("")(story)(context))
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .addDecorator(storyWrapper)
  .add("Loading", withReadme(...[readme_loading, component_Loading]))
  
