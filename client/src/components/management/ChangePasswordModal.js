import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthContext";

const ChangePasswordModal = ({ show, setShow }) => {
  const { changePassword } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const closeDialog = () => {
    setShow(false);
    setFormData({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const { oldPassword, newPassword, confirmPassword } = formData;
  const onFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (newPassword !== confirmPassword) {
      alert("Password does not match");
      return;
    } else {
      changePassword({
        password: oldPassword,
        newPassword: newPassword,
      });
      setFormData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  };
  return (
    <Modal show={show} onHide={closeDialog}>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="password"
              placeholder="old password"
              name="oldPassword"
              required
              aria-describedby="password-help"
              value={oldPassword}
              onChange={onFormDataChange}
            />
            <Form.Text id="username-help" muted>
              Required
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              rows={3}
              placeholder="new password"
              name="newPassword"
              value={newPassword}
              onChange={onFormDataChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              placeholder="confirm password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={onFormDataChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialog}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Change Password
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ChangePasswordModal;
