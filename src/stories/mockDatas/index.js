import { action } from "@storybook/addon-actions";

import icBoxEmpty from "../../../src/assets/icons/ic-box-empty.svg";
import icHome from "../../../src/assets/icons/ic-home.svg";
import icHomeActive from "../../../src/assets/icons/ic-home-active.svg";
import icNotification from "../../../src/assets/icons/ic-notification.svg";
import icNotificationActive from "../../../src/assets/icons/ic-notification-active.svg";
import icUserCircleActive from "../../../src/assets/icons/ic-circle-user-active.svg";
import icUser from "../../../src/assets/icons/ic-user.svg";
import icFile from "../../../src/assets/icons/ic-file.svg";
import icCalendar from "../../../src/assets/icons/ic-calendar.svg";
import icCalendarActive from "../../../src/assets/icons/ic-calendar-active.svg";
import icFolder from "../../../src/assets/icons/ic-folder.svg";
import icFolderActive from "../../../src/assets/icons/ic-folder-active.svg";
import icChart from "../../../src/assets/icons/ic-chart.svg";
import icChatActive from "../../../src/assets/icons/ic-chart-active.svg";
import userPic from "../../../src/assets/img/user.png";
import icExit from "../../../src/assets/icons/ic-exit.svg";
import icExitActive from "../../../src/assets/icons/ic-exit-active.svg";
import icKey from "../../../src/assets/icons/ic-key.svg";
import icKeyActive from "../../../src/assets/icons/ic-key-active.svg";
import icPending from "../../../src/assets/icons/ic-pending.svg";
import icPendingActive from "../../../src/assets/icons/ic-pending-active.svg";
import audi_logo from "../../../src/assets/img/audi_logo.png";
import missmp_logo from "../../../src/assets/img/missmp_logo.png";

export const caseList = [
  {
    loading: false,
    data: [
      {
        activities: [
          {
            actiType: "onSentSMS",
            brief: "1. SMS",
            createdAt: "2018-07-31T03:29:41.300706Z",
            detail: "Sent pass sms for Test 2",
            meta: {
              base: {
                id: 4
              },
              case: {
                id: 291,
                step: 0,
                issuer: "Test 2"
              },
              detail: {
                alternativeId: "2"
              }
            }
          },
          {
            actiType: "onCreatedCase",
            brief: "created",
            createdAt: "2018-07-31T03:29:40.402991Z",
            detail: "Created case for Test 2",
            meta: {
              base: {
                id: 4
              },
              case: {
                id: 291,
                step: 0,
                issuer: "Test 2"
              },
              detail: {
                alternativeId: "2"
              }
            }
          }
        ],
        alternativeId: "2",
        archived: false,
        createdAt: "2018-07-31T03:29:40.361932Z",
        createdBy: "danh.tran@missmp.eu",
        currentStep: 0,
        extraParams: {
          LicensePlate: "test"
        },
        id: 291,
        isHolding: false,
        isRegistered: false,
        issuerName: "Test 2",
        location: "",
        mobile: "+4917644264201",
        updatedAt: "2018-07-31T03:29:40.361932Z"
      },
      {
        activities: [
          {
            actiType: "onDownloadedPass",
            brief: "3. added",
            createdAt: "2018-07-30T11:28:34.395619Z",
            detail: "Test Case registering pass of case 1",
            meta: {
              base: {
                id: 4
              },
              case: {
                id: 290,
                step: 3,
                issuer: "Test Case"
              },
              detail: {
                alternativeId: "1"
              }
            }
          },
          {
            actiType: "onPreviewedPass",
            brief: "2. Review",
            createdAt: "2018-07-30T11:28:33.354356Z",
            detail: "Test Case previewing pass content case 1",
            meta: {
              base: {
                id: 4
              },
              case: {
                id: 290,
                step: 3,
                issuer: "Test Case"
              },
              detail: {
                alternativeId: "1"
              }
            }
          },
          {
            actiType: "onPreviewedPass",
            brief: "2. Review",
            createdAt: "2018-07-30T11:28:24.420391Z",
            detail: "Test Case previewing pass content case 1",
            meta: {
              base: {
                id: 4
              },
              case: {
                id: 290,
                step: 3,
                issuer: "Test Case"
              },
              detail: {
                alternativeId: "1"
              }
            }
          },
          {
            actiType: "onSentSMS",
            brief: "1. SMS",
            createdAt: "2018-07-30T10:13:19.881367Z",
            detail: "Sent pass sms for Test Case",
            meta: {
              base: {
                id: 4
              },
              case: {
                id: 290,
                step: 0,
                issuer: "Test Case"
              },
              detail: {
                alternativeId: "1"
              }
            }
          },
          {
            actiType: "onCreatedCase",
            brief: "created",
            createdAt: "2018-07-30T10:13:18.861965Z",
            detail: "Created case for Test Case",
            meta: {
              base: {
                id: 4
              },
              case: {
                id: 290,
                step: 0,
                issuer: "Test Case"
              },
              detail: {
                alternativeId: "1"
              }
            }
          }
        ],
        alternativeId: "1",
        archived: false,
        createdAt: "2018-07-30T10:13:18.840845Z",
        createdBy: "danh.tran@missmp.eu",
        currentStep: 3,
        extraParams: {
          LicensePlate: "Test Case"
        },
        id: 290,
        isHolding: false,
        isRegistered: false,
        issuerName: "Test Case",
        location: "",
        mobile: "+4917644264201",
        updatedAt: "2018-07-30T10:17:20.824877Z"
      }
    ],
    error: null
  }
];
export const cases = [
  {
    activities: [
      {
        actiType: "onSentSMS",
        brief: "1. SMS",
        createdAt: "2018-07-31T03:29:41.300706Z",
        detail: "Sent pass sms for Test 2",
        meta: {
          base: {
            id: 4
          },
          case: {
            id: 291,
            step: 0,
            issuer: "Test 2"
          },
          detail: {
            alternativeId: "2"
          }
        }
      },
      {
        actiType: "onCreatedCase",
        brief: "created",
        createdAt: "2018-07-31T03:29:40.402991Z",
        detail: "Created case for Test 2",
        meta: {
          base: {
            id: 4
          },
          case: {
            id: 291,
            step: 0,
            issuer: "Test 2"
          },
          detail: {
            alternativeId: "2"
          }
        }
      }
    ],
    alternativeId: "2",
    archived: false,
    createdAt: "2018-07-31T03:29:40.361932Z",
    createdBy: "danh.tran@missmp.eu",
    currentStep: 0,
    extraParams: {
      LicensePlate: "test"
    },
    id: 291,
    isHolding: false,
    isRegistered: false,
    issuerName: "Test 2",
    location: "",
    mobile: "+4917644264201",
    updatedAt: "2018-07-31T03:29:40.361932Z"
  },
  {
    activities: [
      {
        actiType: "onDownloadedPass",
        brief: "3. added",
        createdAt: "2018-07-30T11:28:34.395619Z",
        detail: "Test Case registering pass of case 1",
        meta: {
          base: {
            id: 4
          },
          case: {
            id: 290,
            step: 3,
            issuer: "Test Case"
          },
          detail: {
            alternativeId: "1"
          }
        }
      },
      {
        actiType: "onPreviewedPass",
        brief: "2. Review",
        createdAt: "2018-07-30T11:28:33.354356Z",
        detail: "Test Case previewing pass content case 1",
        meta: {
          base: {
            id: 4
          },
          case: {
            id: 290,
            step: 3,
            issuer: "Test Case"
          },
          detail: {
            alternativeId: "1"
          }
        }
      },
      {
        actiType: "onPreviewedPass",
        brief: "2. Review",
        createdAt: "2018-07-30T11:28:24.420391Z",
        detail: "Test Case previewing pass content case 1",
        meta: {
          base: {
            id: 4
          },
          case: {
            id: 290,
            step: 3,
            issuer: "Test Case"
          },
          detail: {
            alternativeId: "1"
          }
        }
      },
      {
        actiType: "onSentSMS",
        brief: "1. SMS",
        createdAt: "2018-07-30T10:13:19.881367Z",
        detail: "Sent pass sms for Test Case",
        meta: {
          base: {
            id: 4
          },
          case: {
            id: 290,
            step: 0,
            issuer: "Test Case"
          },
          detail: {
            alternativeId: "1"
          }
        }
      },
      {
        actiType: "onCreatedCase",
        brief: "created",
        createdAt: "2018-07-30T10:13:18.861965Z",
        detail: "Created case for Test Case",
        meta: {
          base: {
            id: 4
          },
          case: {
            id: 290,
            step: 0,
            issuer: "Test Case"
          },
          detail: {
            alternativeId: "1"
          }
        }
      }
    ],
    alternativeId: "1",
    archived: false,
    createdAt: "2018-07-30T10:13:18.840845Z",
    createdBy: "danh.tran@missmp.eu",
    currentStep: 3,
    extraParams: {
      LicensePlate: "Test Case"
    },
    id: 290,
    isHolding: false,
    isRegistered: false,
    issuerName: "Test Case",
    location: "",
    mobile: "+4917644264201",
    updatedAt: "2018-07-30T10:17:20.824877Z"
  }
];

export const locale = {
  languages: [
    {
      name: "English",
      code: "en",
      active: true
    },
    {
      name: "Deutsch",
      code: "de",
      active: false
    }
  ],
  translations: {
    logout: ["Log Out", "Ausloggen"],
    createnewcase: ["create new case", "pass erstellen"],
    pendingcase: ["pending case", "Übersicht Pässe"],
    exportdashboard: ["Download", "Download"],
    caseid: ["id", "pannen id"],
    step: ["step", "not"],
    state: ["status", "status"],
    update: ["update", "update"],
    phone: ["phone", "telefon-nr."],
    l_plate: ["l-plate", "kennzeichen"],
    issuer: ["issuer", "name"],
    manager: ["manager", "bearbeiter"],
    issuername: ["Issuer Name", "name"],
    mobilenumber: ["Mobile Number", "telefon nummer"],
    licenseplate: ["License Plate", "Kennzeichen"],
    caseno: ["Case #", "Pass-Nr. #"],
    view: ["View", "Details"],
    stepandreport: ["Steps & Reports", "einzelne Schritte und Berichte"],
    activities: ["Activities", "Aktivitäten"],
    notification: ["Notifications", "Benachrichtigung"],
    message: ["message", "Nachricht"],
    date: ["date", "datum"]
  },
  options: {
    renderInnerHtml: true,
    showMissingTranslationMsg: true,
    missingTranslationMsg:
      "Missing translation key ${ key } for language ${ code }",
    ignoreTranslateChildren: false,
    defaultLanguage: "en"
  }
};

export const caseDetail = {
  loading: false,
  data: {
    activities: [
      {
        actiType: "onDownloadedPass",
        brief: "3. added",
        createdAt: "2018-07-30T11:28:34.395619Z",
        detail: "Test Case registering pass of case 1",
        meta: {
          base: {
            id: 4
          },
          case: {
            id: 290,
            step: 3,
            issuer: "Test Case"
          },
          detail: {
            alternativeId: "1"
          }
        }
      },
      {
        actiType: "onPreviewedPass",
        brief: "2. Review",
        createdAt: "2018-07-30T11:28:33.354356Z",
        detail: "Test Case previewing pass content case 1",
        meta: {
          base: {
            id: 4
          },
          case: {
            id: 290,
            step: 3,
            issuer: "Test Case"
          },
          detail: {
            alternativeId: "1"
          }
        }
      },
      {
        actiType: "onPreviewedPass",
        brief: "2. Review",
        createdAt: "2018-07-30T11:28:24.420391Z",
        detail: "Test Case previewing pass content case 1",
        meta: {
          base: {
            id: 4
          },
          case: {
            id: 290,
            step: 3,
            issuer: "Test Case"
          },
          detail: {
            alternativeId: "1"
          }
        }
      },
      {
        actiType: "onSentSMS",
        brief: "1. SMS",
        createdAt: "2018-07-30T10:13:19.881367Z",
        detail: "Sent pass sms for Test Case",
        meta: {
          base: {
            id: 4
          },
          case: {
            id: 290,
            step: 0,
            issuer: "Test Case"
          },
          detail: {
            alternativeId: "1"
          }
        }
      },
      {
        actiType: "onCreatedCase",
        brief: "created",
        createdAt: "2018-07-30T10:13:18.861965Z",
        detail: "Created case for Test Case",
        meta: {
          base: {
            id: 4
          },
          case: {
            id: 290,
            step: 0,
            issuer: "Test Case"
          },
          detail: {
            alternativeId: "1"
          }
        }
      }
    ],
    alternativeId: "1",
    createdAt: "2018-07-30T10:13:18.840845Z",
    createdBy: "",
    currentStep: 3,
    extraParams: {
      LicensePlate: "Test Case"
    },
    heldAt: "0001-01-01T00:00:00Z",
    id: 290,
    isHolding: false,
    isRegistered: true,
    issuerName: "Test Case",
    location: "",
    mobile: "+4917644264201",
    serial: "dg0VDaP0a1zt",
    steps: [
      {
        canHold: false,
        id: 13,
        memo: "Initial",
        scheduledAt: "2018-07-30T10:13:18.840845Z"
      },
      {
        canHold: true,
        id: 9,
        memo: "Alles in Ordnung",
        patches: [
          {
            from: "",
            op: "replace",
            path: "/fields/back/2",
            value: {
              id: "back_3",
              langs: {
                de: {
                  label: " ",
                  link: "",
                  value:
                    'Gibt es noch etwas, dass wir von der Audi Notdienstzentrale für Sie tun können?\n<a href="https://tse-dev.missmp.eu/api/cases/290/notify?type=s2ok&url=http%3A%2F%2Ftse-ui-next.missmp.eu%2Fstatus%2Fok.html">Nein, alles in Ordnung</a>\n<a href="https://tse-dev.missmp.eu/api/cases/290/notify?type=s2needhelp&url=http%3A%2F%2Ftse-ui-next.missmp.eu%2Fstatus%2Fcall.html">Ja (z.B. der Pannenhelfer hat sich noch nicht bei mir gemeldet)</a>'
                },
                en: {
                  label: " ",
                  link: "",
                  value:
                    'Gibt es noch etwas, dass wir von der Audi Notdienstzentrale für Sie tun können?\n<a href="https://tse-dev.missmp.eu/api/cases/290/notify?type=s2ok&url=http%3A%2F%2Ftse-ui-next.missmp.eu%2Fstatus%2Fok.html">Nein, alles in Ordnung</a>\n<a href="https://tse-dev.missmp.eu/api/cases/290/notify?type=s2needhelp&url=http%3A%2F%2Ftse-ui-next.missmp.eu%2Fstatus%2Fcall.html">Ja (z.B. der Pannenhelfer hat sich noch nicht bei mir gemeldet)</a>'
                }
              },
              notifyChange: false
            }
          },
          {
            from: "",
            op: "remove",
            path: "/fields/back/3",
            value: {
              id: "back_3",
              langs: {
                de: {
                  label: " ",
                  link: "",
                  value:
                    'Gibt es noch etwas, dass wir von der Audi Notdienstzentrale für Sie tun können?\n<a href="https://tse-dev.missmp.eu/api/cases/290/notify?type=s2ok&url=http%3A%2F%2Ftse-ui-next.missmp.eu%2Fstatus%2Fok.html">Nein, alles in Ordnung</a>\n<a href="https://tse-dev.missmp.eu/api/cases/290/notify?type=s2needhelp&url=http%3A%2F%2Ftse-ui-next.missmp.eu%2Fstatus%2Fcall.html">Ja (z.B. der Pannenhelfer hat sich noch nicht bei mir gemeldet)</a>'
                },
                en: {
                  label: " ",
                  link: "",
                  value:
                    'Gibt es noch etwas, dass wir von der Audi Notdienstzentrale für Sie tun können?\n<a href="https://tse-dev.missmp.eu/api/cases/290/notify?type=s2ok&url=http%3A%2F%2Ftse-ui-next.missmp.eu%2Fstatus%2Fok.html">Nein, alles in Ordnung</a>\n<a href="https://tse-dev.missmp.eu/api/cases/290/notify?type=s2needhelp&url=http%3A%2F%2Ftse-ui-next.missmp.eu%2Fstatus%2Fcall.html">Ja (z.B. der Pannenhelfer hat sich noch nicht bei mir gemeldet)</a>'
                }
              },
              notifyChange: false
            }
          },
          {
            from: "",
            op: "remove",
            path: "/fields/back/3",
            value: {
              id: "back_3",
              langs: {
                de: {
                  label: " ",
                  link: "",
                  value:
                    'Gibt es noch etwas, dass wir von der Audi Notdienstzentrale für Sie tun können?\n<a href="https://tse-dev.missmp.eu/api/cases/290/notify?type=s2ok&url=http%3A%2F%2Ftse-ui-next.missmp.eu%2Fstatus%2Fok.html">Nein, alles in Ordnung</a>\n<a href="https://tse-dev.missmp.eu/api/cases/290/notify?type=s2needhelp&url=http%3A%2F%2Ftse-ui-next.missmp.eu%2Fstatus%2Fcall.html">Ja (z.B. der Pannenhelfer hat sich noch nicht bei mir gemeldet)</a>'
                },
                en: {
                  label: " ",
                  link: "",
                  value:
                    'Gibt es noch etwas, dass wir von der Audi Notdienstzentrale für Sie tun können?\n<a href="https://tse-dev.missmp.eu/api/cases/290/notify?type=s2ok&url=http%3A%2F%2Ftse-ui-next.missmp.eu%2Fstatus%2Fok.html">Nein, alles in Ordnung</a>\n<a href="https://tse-dev.missmp.eu/api/cases/290/notify?type=s2needhelp&url=http%3A%2F%2Ftse-ui-next.missmp.eu%2Fstatus%2Fcall.html">Ja (z.B. der Pannenhelfer hat sich noch nicht bei mir gemeldet)</a>'
                }
              },
              notifyChange: false
            }
          },
          {
            from: "",
            op: "replace",
            path: "/fields/front/1",
            value: {
              id: "secondary",
              langs: {
                de: {
                  label: "Gibt es noch etwas, dass wir für Sie tun können?",
                  link: "",
                  value: "Bitte geben Sie uns Feedback auf der Rückseite."
                },
                en: {
                  label: "Gibt es noch etwas, dass wir für Sie tun können?",
                  link: "",
                  value: "Bitte geben Sie uns Feedback auf der Rückseite."
                }
              },
              notifyChange: true
            }
          }
        ],
        scheduledAt: "2018-07-30T10:15:18.840845Z"
      },
      {
        canHold: false,
        id: 10,
        memo: "Notdienst Pass (Bewertung)",
        patches: [
          {
            from: "",
            op: "replace",
            path: "/fields/back/2",
            value: {
              id: "back_3",
              langs: {
                de: {
                  label: "Wie zufrieden waren Sie mit unserem Service",
                  link: "",
                  value:
                    '<a href="https://tse-dev.missmp.eu/api/cases/290/notify?type=5star&url=https%3A%2F%2Ftse-ui-next.missmp.eu%2Fstars-dev%2Fstars.html%3Fid%3D290%26stars%3D5">★★★★★ Sehr zufrieden</a>\n<a href="https://tse-dev.missmp.eu/api/cases/290/notify?type=4star&url=https%3A%2F%2Ftse-ui-next.missmp.eu%2Fstars-dev%2Fstars.html%3Fid%3D290%26stars%3D4">★★★★☆ zufrieden</a>\n<a href="https://tse-dev.missmp.eu/api/cases/290/notify?type=3star&url=https%3A%2F%2Ftse-ui-next.missmp.eu%2Fstars-dev%2Fstars.html%3Fid%3D290%26stars%3D3">★★★☆☆ mäßig zufrieden</a>\n<a href="https://tse-dev.missmp.eu/api/cases/290/notify?type=2star&url=https%3A%2F%2Ftse-ui-next.missmp.eu%2Fstars-dev%2Fstars.html%3Fid%3D290%26stars%3D2">★★☆☆☆  unzufrieden</a>\n<a href="https://tse-dev.missmp.eu/api/cases/290/notify?type=1star&url=https%3A%2F%2Ftse-ui-next.missmp.eu%2Fstars-dev%2Fstars.html%3Fid%3D290%26stars%3D1">★☆☆☆☆  sehr unzufrieden</a>'
                },
                en: {
                  label: "Wie zufrieden waren Sie mit unserem Service",
                  link: "",
                  value:
                    '<a href="https://tse-dev.missmp.eu/api/cases/290/notify?type=5star&url=https%3A%2F%2Ftse-ui-next.missmp.eu%2Fstars-dev%2Fstars.html%3Fid%3D290%26stars%3D5">★★★★★ Sehr zufrieden</a>\n<a href="https://tse-dev.missmp.eu/api/cases/290/notify?type=4star&url=https%3A%2F%2Ftse-ui-next.missmp.eu%2Fstars-dev%2Fstars.html%3Fid%3D290%26stars%3D4">★★★★☆ zufrieden</a>\n<a href="https://tse-dev.missmp.eu/api/cases/290/notify?type=3star&url=https%3A%2F%2Ftse-ui-next.missmp.eu%2Fstars-dev%2Fstars.html%3Fid%3D290%26stars%3D3">★★★☆☆ mäßig zufrieden</a>\n<a href="https://tse-dev.missmp.eu/api/cases/290/notify?type=2star&url=https%3A%2F%2Ftse-ui-next.missmp.eu%2Fstars-dev%2Fstars.html%3Fid%3D290%26stars%3D2">★★☆☆☆  unzufrieden</a>\n<a href="https://tse-dev.missmp.eu/api/cases/290/notify?type=1star&url=https%3A%2F%2Ftse-ui-next.missmp.eu%2Fstars-dev%2Fstars.html%3Fid%3D290%26stars%3D1">★☆☆☆☆  sehr unzufrieden</a>'
                }
              },
              notifyChange: false
            }
          },
          {
            from: "",
            op: "replace",
            path: "/fields/front/1",
            value: {
              id: "secondary",
              langs: {
                de: {
                  label: "Sind Sie zufrieden mit unserem Service?",
                  link: "",
                  value: "Bitte bewerten Sie uns auf der Rückseite."
                },
                en: {
                  label: "Sind Sie zufrieden mit unserem Service?",
                  link: "",
                  value: "Bitte bewerten Sie uns auf der Rückseite."
                }
              },
              notifyChange: true
            }
          }
        ],
        scheduledAt: "2018-07-30T10:17:18.840845Z"
      }
    ],
    updatedAt: "2018-07-30T10:17:20.824877Z"
  },
  error: null
};

export const notification = {
  events: [],
  isPreloaded: false,
  isChanged: false
};

export const notificationFil = {
  events: [
    {
      brief: "",
      createdAt: "2018-07-31T03:29:41.300706Z",
      detail: "Sent pass sms for Test 2",
      id: 738,
      isRead: false,
      meta: {
        base: {
          id: 4
        },
        case: {
          id: 291,
          step: 0,
          issuer: "Test 2"
        },
        detail: {
          alternativeId: "2"
        }
      }
    },
    {
      brief: "",
      createdAt: "2018-07-31T03:29:40.402991Z",
      detail: "Created case for Test 2",
      id: 737,
      isRead: false,
      meta: {
        base: {
          id: 4
        },
        case: {
          id: 291,
          step: 0,
          issuer: "Test 2"
        },
        detail: {
          alternativeId: "2"
        }
      }
    },
    {
      brief: "",
      createdAt: "2018-07-30T11:28:34.395619Z",
      detail: "Test Case registering pass of case 1",
      id: 732,
      isRead: false,
      meta: {
        base: {
          id: 4
        },
        case: {
          id: 290,
          step: 3,
          issuer: "Test Case"
        },
        detail: {
          alternativeId: "1"
        }
      }
    },
    {
      brief: "",
      createdAt: "2018-07-30T11:28:33.354356Z",
      detail: "Test Case previewing pass content case 1",
      id: 731,
      isRead: false,
      meta: {
        base: {
          id: 4
        },
        case: {
          id: 290,
          step: 3,
          issuer: "Test Case"
        },
        detail: {
          alternativeId: "1"
        }
      }
    },
    {
      brief: "",
      createdAt: "2018-07-30T11:28:24.420391Z",
      detail: "Test Case previewing pass content case 1",
      id: 730,
      isRead: false,
      meta: {
        base: {
          id: 4
        },
        case: {
          id: 290,
          step: 3,
          issuer: "Test Case"
        },
        detail: {
          alternativeId: "1"
        }
      }
    },
    {
      brief: "",
      createdAt: "2018-07-30T10:13:19.881367Z",
      detail: "Sent pass sms for Test Case",
      id: 729,
      isRead: false,
      meta: {
        base: {
          id: 4
        },
        case: {
          id: 290,
          step: 0,
          issuer: "Test Case"
        },
        detail: {
          alternativeId: "1"
        }
      }
    },
    {
      brief: "",
      createdAt: "2018-07-30T10:13:18.861965Z",
      detail: "Created case for Test Case",
      id: 728,
      isRead: false,
      meta: {
        base: {
          id: 4
        },
        case: {
          id: 290,
          step: 0,
          issuer: "Test Case"
        },
        detail: {
          alternativeId: "1"
        }
      }
    }
  ],
  isPreloaded: true,
  isChanged: false
};

export let user = {
  data: {
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik9FWkJNRFl3T0RnNE0wTTRSVFF6TnpVeE5qRXhPREZCTVRnME5UaERRemd6UVRreU1EazNOZyJ9.eyJpc3MiOiJodHRwczovL21pc3NtcC5ldS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWIwNjkxZThkYzY3MTU1ZDJiNWZlZjhiIiwiYXVkIjpbImh0dHBzOi8vdHNlLWRldi5taXNzbXAuZXUvYXBpIiwiaHR0cHM6Ly9taXNzbXAuZXUuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTUzMzA5ODMxMiwiZXhwIjoxNTMzMTA1NTEyLCJhenAiOiJ2eGYxT25Ncks2Rlo4YTFIRE1hZXp6WHJhSHRuUHhDTyIsInNjb3BlIjoibGlzdDpteS1vcmctdHlwZTpiYXNlIGdldDpteS1vcmctdHlwZTpiYXNlIGxpc3Q6bXktb3JnLXR5cGUtYmFzZTpjYXNlIGdldDpteS1vcmctdHlwZS1iYXNlOmNhc2UgcG9zdDpteS1vcmctdHlwZS1iYXNlOmNhc2UgcGF0Y2g6bXktb3JnLXR5cGUtYmFzZTpjYXNlIGxpc3Q6bXktb3JnLXR5cGUtYmFzZTpub3RpZmljYXRpb24gbGlzdDpteS1vcmc6dHlwZSBnZXQ6bXktb3JnLXR5cGUtYmFzZTphbmFseXRpYyBvcGVuaWQgZW1haWwgcHJvZmlsZSJ9.z0u73SuAvTmIq-XcCEmwaYe_zFbm_-p901a79L2cMvvJRNC45Gk8DjLIQItY8XJxw_CKQpXZx7cM-bDdKGf04y9_-B1DCiGhHxyCQsd8qEVN5fQpWqkFMYjYzjEHUZ41FgnMIDANuF5D_aqRRM8tLMjayvmlZ3fjQ-bYPP1qiso3fJf5Y0ACtIfJ88q2oDkN-DG9YkbmAXqG5gMtSz2fObcuRAeBn3KErpRydkFiatcuP74p1XM7pL_-ET659rsXHVfclKDyTT0I630Ws4TmAmu0v5bo2IazxkNmnU6XV2RKBAxNx7YWMPiEcNuDeEVmim5A0k4n-fim2uMGzuRteg",
    userData: {
      email: "danh.tran@missmp.eu",
      email_verified: true,
      nickname: "danhtran94",
      name: "danh.tran@missmp.eu",
      picture:
        "https://s.gravatar.com/avatar/2b7640d0aa0fbf8bc13f5032a84070b2?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fda.png",
      updated_at: "2018-08-01T04:38:32.034Z",
      iss: "https://missmp.eu.auth0.com/",
      sub: "auth0|5b0691e8dc67155d2b5fef8b",
      aud: "vxf1OnMrK6FZ8a1HDMaezzXraHtnPxCO",
      iat: 1533098312,
      exp: 1533134312,
      at_hash: "9ms6Etc4C-uscrZiLUlMtQ",
      nonce: "206pdDY-NTR7dl5vZwtqdupgh2XJx-QY"
    }
  },
  loading: false,
  error: ""
};

export let mockUserData = {
  email: "danh.tran@missmp.eu",
  email_verified: true,
  nickname: "danhtran94",
  name: "danh.tran@missmp.eu",
  picture:
    "https://s.gravatar.com/avatar/2b7640d0aa0fbf8bc13f5032a84070b2?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fda.png",
  updated_at: "2018-08-01T04:38:32.034Z",
  iss: "https://missmp.eu.auth0.com/",
  sub: "auth0|5b0691e8dc67155d2b5fef8b",
  aud: "vxf1OnMrK6FZ8a1HDMaezzXraHtnPxCO",
  iat: 1533098312,
  exp: 1533134312,
  at_hash: "9ms6Etc4C-uscrZiLUlMtQ",
  nonce: "206pdDY-NTR7dl5vZwtqdupgh2XJx-QY"
};

export let titleArrayTable = [
  "Column Title 1",
  "Column Title 2",
  "Column Title 3",
  "Column Title 4",
  "Column Title 5"
];

export let contentArrayTable = [
  {
    content1: "content 1",
    content2: "content 2",
    content3: "content 3",
    content4: "content 4",
    content5: "content 5"
  },
  {
    content1: "content 1",
    content2: "content 2",
    content3: "content 3",
    content4: "content 4",
    content5: "content 5"
  },
  {
    content1: "content 1",
    content2: "content 2",
    content3: "content 3",
    content4: "content 4",
    content5: "content 5"
  }
];

//NAVIGATION
const sidebarNavigationEmpty = [
  {
    icon: icBoxEmpty,
    iconActive: icNotificationActive,
    url: "/notification"
  },
  {
    icon: icBoxEmpty,
    iconActive: icNotificationActive,
    url: "/user"
  },
  {
    icon: icBoxEmpty,
    iconActive: icNotificationActive,
    url: "/file"
  },
  {
    icon: icBoxEmpty,
    iconActive: icNotificationActive,
    url: "/calendar"
  },
  {
    icon: icBoxEmpty,
    iconActive: icNotificationActive,
    url: "/folder"
  },
  {
    icon: icBoxEmpty,
    iconActive: icNotificationActive,
    url: "/chart"
  }
];
const sidebarNavigationOne = [
  {
    icon: icHome,
    iconActive: icHomeActive,
    url: "/home"
  }
];
const sidebarNavigationTwo = [
  {
    icon: icHome,
    iconActive: icHomeActive,
    url: "/home"
  },
  {
    icon: icNotification,
    iconActive: icNotificationActive,
    url: "/notification"
  }
];
const sidebarNavigationThree = [
  {
    icon: icHome,
    iconActive: icHomeActive,
    url: "/home"
  },
  {
    icon: icNotification,
    iconActive: icNotificationActive,
    url: "/notification"
  },
  {
    icon: icCalendar,
    iconActive: icCalendarActive,
    url: "/calendar"
  }
];
export const sidebarNavigationOptions = {
  Empty: sidebarNavigationEmpty,
  One: sidebarNavigationOne,
  Two: sidebarNavigationTwo,
  Three: sidebarNavigationThree
}
export const sidebarNavigationConfig = {
  Empty: "Empty",
  One: "One",
  Two: "Two",
  Three: "Three"
}
export const userstuffnavigation = {
  pic: userPic,
  email: "user@missmp.eu",
  changepass: {
    text: "Change Password",
    icon: icKey,
    iconActive: icKeyActive,
    handleChangePassword: action("Change Password")
  },
  logout: {
    text: "Logout",
    icon: icExit,
    iconActive: icExitActive,
    handleLogout: action("Logout")
  }
};
export const logoConfigSelect = {
  Empty: "Empty",
  Audi: 'Audi',
  Missmp: 'Missmp'
};
export const logostuffOptions = {
  Empty: {
    pic: "",
    path: ""
  },
  Audi: {
      pic: audi_logo,
      path: "/"
    },
  Missmp: {
      pic: missmp_logo,
      path: "/"
    }
};

//BUTTON
export const optionsizes = {
  large: "large",
  small: "small",
  tiny: "tiny"
};
export const optiontypes = {
  primary: "primary",
  secondary: "secondary",
  danger: "danger"
};

//MODAL
export const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue vitae tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum.";
const btnprimary = {
  size: "large",
  type: "primary",
  disable: false,
  label: "primary",
  onClick: action("primary")
};
const btnsecondary = {
  size: "large",
  type: "secondary",
  disable: false,
  label: "secondary",
  onClick: action("secondary")
};
export const modalButtonPrimaryOption = {
  Empty: null,
  btnprimary: btnprimary,
}
export const modalButtonPrimaryConfig = {
  Empty: "Empty",
  btnprimary: "btnprimary",
}
export const modalButtonSecondaryOption = {
  Empty: null,
  btnsecondary: btnsecondary,
}
export const modalButtonSecondaryConfig = {
  Empty: "Empty",
  btnsecondary: "btnsecondary",
}

export const audilogo = audi_logo;
export const logolink = "/";

//HEADER
const second = { text: "mark all as read", iscolorblue: false };
const third = {
  text: "last 7 days",
  iscolorblue: true,
  icon: icCalendar
};
export const headerSecondPartConfig = {
  Empty: "Empty",
  Item: "Item"
}
export const headerSecondPartOption = {
  Empty: null,
  Item: second
} 
export const headerThirdPartConfig = {
  Empty: "Empty",
  Item: "Item"
}
export const headerThirdPartOption = {
  Empty: null,
  Item: third
} 

//ROW
const actionMockTwo = [
  { lable: "View", onClick: action("View Clicked !!!") },
  { lable: "Delete", onClick: action("Delete Clicked !!!") }
];
const actionMockOne = [
  { lable: "Delete", onClick: action("Delete Clicked !!!") }
];
export const rowActionConfig = {
  One: "One",
  Two: "Two"
}
export const rowActionOptions = {
  One: actionMockOne,
  Two: actionMockTwo
}

//INPUT
export const inputtypes = {
  text: "text",
  email: "email",
  password: "password",
  number: "number"
};
