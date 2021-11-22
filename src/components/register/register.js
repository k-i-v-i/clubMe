import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import swal from "sweetalert";
const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "username is Too Short!")
    .max(50, "username is Too Long!")
    .required("username is Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is Required"),
  password: Yup.string().required("Password is required"),
  
});

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alert: null
    };
  }

  submitForm = (values, history) => {
    axios
      .post("http://localhost:3001/register", values)
      .then(res => {
        console.log(res.data.result);
        if (res.data.result === "success") {
          swal("Success!", res.data.message, "warning").then(value => {
            history.push("/login");
          });
        } else if (res.data.result === "failure") {
          swal("Error!", res.data.message, "error");
        }
      })
      .catch(error => {
        console.log(error);
        swal("Error!", "Unexpected error", "error");
      });
  };
  showForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting
  }) => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group has-feedback">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={values.name}
            className="form-control"
            placeholder="Name"
            className={
              errors.name && touched.name
                ? "form-control is-invalid"
                : "form-control"
            }
          />
          {errors.name && touched.name ? (
            <small id="passwordHelp" class="text-danger">
              {errors.name}
            </small>
          ) : null}
        </div>
        <div className="form-group has-feedback">
          <input
            type="text"
            name="surname"
            onChange={handleChange}
            value={values.surname}
            className="form-control"
            placeholder="Surname"
            className={
              errors.surname && touched.surname
                ? "form-control is-invalid"
                : "form-control"
            }
          />
          {errors.surname && touched.surname ? (
            <small id="passwordHelp" class="text-danger">
              {errors.surname}
            </small>
          ) : null}
        </div>
        <div className="form-group has-feedback">
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={values.username}
            className="form-control"
            placeholder="Username"
            className={
              errors.username && touched.username
                ? "form-control is-invalid"
                : "form-control"
            }
          />
          {errors.fullname && touched.fullname ? (
            <small id="passwordHelp" class="text-danger">
              {errors.username}
            </small>
          ) : null}
        </div>
        <div className="form-group has-feedback">
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={values.email}
            className={
              errors.email && touched.email
                ? "form-control is-invalid"
                : "form-control"
            }
            placeholder="Email"
          />
          {errors.email && touched.email ? (
            <small id="passwordHelp" class="text-danger">
              {errors.email}
            </small>
          ) : null}
        </div>
        <div className="form-group has-feedback">
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            className="form-control"
            placeholder="Password"
            className={
              errors.password && touched.password
                ? "form-control is-invalid"
                : "form-control"
            }
          />
          {errors.password && touched.password ? (
            <small id="passwordHelp" class="text-danger">
              {errors.password}
            </small>
          ) : null}
        </div>
        
        
        <div className="row">
          <div className="col-md-12">
            <button
              disabled={isSubmitting}
              type="submit"
              className="btn btn-primary btn-block btn-flat"
            >
              Confirm
            </button>
            <button
              type="button"
              onClick={() => {
                this.props.history.push("/login");
              }}
              className="btn btn-default btn-block btn-flat"
            >
              already member?
            </button>
          </div>
          {/* /.col */}
        </div>
      </form>
    );
  };

  render() {
    return (
      <div className="register-page">
        <div className="register-box">
          <div className="register-logo">
            <a href="../../index2.html">
              <b>Welcome to ClubMe</b>
            </a>
          </div>
          <div className="card">
            <div className="card-body register-card-body">
              <p className="login-box-msg">Register a new membership</p>

              <Formik
                initialValues={{
                  fullname: "",
                  email: "",
                  password: "",
                  name: "",
                  surname: ""
                  
                }}
                onSubmit={(values, { setSubmitting }) => {
                  this.submitForm(values, this.props.history);
                  setSubmitting(false);
                }}
                validationSchema={SignupSchema}
              >
                {props => this.showForm(props)}
              </Formik>
            </div>
            {/* /.form-box */}
          </div>
          {/* /.card */}
        </div>
      </div>
    );
  }
}

export default Register;
