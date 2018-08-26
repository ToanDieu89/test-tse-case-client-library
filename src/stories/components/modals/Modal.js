import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";

import icClose from "../../../../src/assets/icons/ic-close.svg";
import Button from "../buttons/Button";

class ModalCustom extends Component {
  render() {
    const {
      modalIsOpen,
      optionlable,
      closeModal,
      lableheader,
      content,
      btnprimary,
      btnsecondary,
      customStyle
    } = this.props;
    return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyle}
        contentLabel="Example Modal"
        {...this.props}
      >
        <div className="modal">
          <div className="modal__icon-close">
            <img onClick={closeModal} src={icClose} />
          </div>
          <div className="modal__content">
            {optionlable ? (
              <div className="modal__content__lable">
                <h2>{optionlable}</h2>
              </div>
            ) : null}

            <div className="modal__content__header">
              <p>{lableheader}</p>
            </div>
            <div className="modal__content__text">
              <div>{content}</div>
            </div>
          </div>
          {btnprimary && btnsecondary ? (
            <div>
              <div className="modal__devider" />
              <div className="modal__footer">
                <div className="modal__footer__wrapper">
                  <div className="modal__footer__wrapper__buttonleft">
                    <Button
                      type={btnsecondary.type}
                      size={btnsecondary.size}
                      disable={btnsecondary.disable}
                      label={btnsecondary.label}
                      {...this.props.btnsecondary}
                    />
                  </div>
                  <div className="modal__footer__wrapper__buttonright">
                    <Button
                      type={btnprimary.type}
                      size={btnprimary.size}
                      disable={btnprimary.disable}
                      label={btnprimary.label}
                      {...this.props.btnprimary}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : btnprimary || btnsecondary ? (
            btnprimary ? (
              <div>
                <div className="modal__devider" />
                <div className="modal__footer">
                  <div className="modal__footer__wrapper">
                    <div className="modal__footer__wrapper__buttonright">
                      <Button
                        type={btnprimary.type}
                        size={btnprimary.size}
                        disable={btnprimary.disable}
                        label={btnprimary.label}
                        {...this.props.btnprimary}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="modal__devider" />
                <div className="modal__footer">
                  <div className="modal__footer__wrapper">
                    <div className="modal__footer__wrapper__buttonright">
                      <Button
                        type={btnsecondary.type}
                        size={btnsecondary.size}
                        disable={btnsecondary.disable}
                        label={btnsecondary.label}
                        {...this.props.btnsecondary}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          ) : null}
        </div>
      </Modal>
    );
  }
}

ModalCustom.defaultProps = {
  modalIsOpen: false,
  lableheader: "i am header",
  content: "i am content",
  customStyle: {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "auto",
      height: "auto",
      background: "#ffffff",
      padding: "20px 20px 0px 20px"
    }
  }
};

ModalCustom.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  lableheader: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  optionlable: PropTypes.string,
  customStyle: PropTypes.shape({ content: PropTypes.object }),
  btnprimary: PropTypes.shape({
    size: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    disable: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired
  }),
  btnsecondary: PropTypes.shape({
    size: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    disable: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired
  })
};

export default ModalCustom;
