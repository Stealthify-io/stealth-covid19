import React from "react";
import { connect } from 'react-redux';
import { loginUser,isUserAuthenicated} from "../../actions/auth";
import { Formik, Form, Field } from "formik";
import { signinValidationSchema } from "./signinValidationSchema";
import { FormGroup } from "reactstrap";
import swal from "sweetalert";
import PropTypes from "prop-types";
import Facebook from "../Facebook";
import Google from "../Google";

import "./Signin.css";


class Signin extends React.Component {
  state = {
    login: {
      email: "",
      password: "",
    },
  };



  componentWillReceiveProps(nextProps){
    if(nextProps.isAuthenticated)
    this.props.history.push("/dashboard");
    if(nextProps.error)
    this.onLoginError(nextProps.error);

  }

  handleSubmit = (values) => {
    this.props.loginUser(values);
  };

  onLoginSuccess = (res) => {
    this.props.history.push("/dashboard");
  };

  onLoginError = (err) => {
    let statusCode = String(err);
    statusCode = statusCode.substring(statusCode.length - 3);
    if (statusCode === "405") {
      const options = {
        title: "Login Error",
        text: "Email not found in our records",
        type: "warning",
        buttons: {
          close: {
            value: true,
            text: "Close",
            className: "bg-primary",
          },
        },
      };
      swal(options).then((value) => {
        if (value) {
         this.props.history.push("/");
        }
      });
    } else {
      if (statusCode === "404") {
        const options = {
          title: "Login Error",
          text: "The Email and Password do not match",
          type: "warning",
          buttons: {
            close: {
              value: true,
              text: "Close",
              className: "bg-primary",
            },
          },
        };
        swal(options).then((value) => {
          if (value) {
           this.props.history.push("/");
          }
        });
      } else {
        if (statusCode === "401") {
          const options = {
            title: "Login Error",
            text: "Please Confirm Your Email",
            type: "warning",
            buttons: {
              close: {
                value: true,
                text: "Close",
                className: "bg-primary",
              },
            },
          };
          swal(options).then((value) => {
            if (value) {
              this.props.history.push("/");
            }
          });
        } else {
          const options = {
            title: "Server Error",
            text: "Please try to login again later",
            type: "warning",
            buttons: {
              close: {
                value: true,
                text: "Close",
                className: "bg-primary",
              },
            },
          };
          swal(options).then((value) => {
            if (value) {
              this.props.history.push("/");
            }
          });
        }
      }
    }
  };
  render() {
    return (
      <React.Fragment>
         <div  className="container_signin">
         <div>
         <p className="text_sign py-2">
            Sign in 
        </p>
        </div>
        <div className = "container_button py-2">
         {/* <Facebook/> */}
         </div>
         <div className = "container_button py-2">
          <Google />
          </div>
        <div>
        <p className="text-center-or py-2">OR</p>
          <div className="card-body signinFields">
            <Formik
                            enableReinitialize={true}
                            validationSchema={signinValidationSchema}
                            initialValues={this.state.login}
                            onSubmit={this.handleSubmit}
                          >
                            {(props) => {
                              const {
                                values,
                                handleSubmit,
                                errors,
                                touched,
                                isValid,
                                isSubmitting,
                              } = props;
                              return (
                                <Form onSubmit={handleSubmit}>
                                  <FormGroup>
                                    <div className="form-group">                            
                                      <div className="input-group this_field">                                    
                                        <Field
                                          className={
                                            errors.email && touched.email
                                              ? "form-control error"
                                              : "form-control"
                                          }
                                          name="email"
                                          type="text"
                                          values={values.email}
                                          placeholder="Email"
                                          autoComplete="off"
                                        />
                                      </div>
                                    </div>
                                  </FormGroup>
                                  <FormGroup>
                                    <div className="form-group">
                                    <div className="input-group this_field">                        
                                        <Field
                                          name="password"
                                          type="password"
                                          values={values.password}
                                          placeholder="Password"
                                          autoComplete="off"
                                          className={
                                            errors.password && touched.password
                                              ? "form-control error"
                                              : "form-control"
                                          }
                                        />
                                      </div>
                                    </div>
                                    <button
                                         className="btn btn-success btn_create"
                                         type="submit"
                                         disabled={!isValid || isSubmitting}
                                      >
                                        Sign in
                                      </button>
                                  </FormGroup>                                  
                                 
                                    <div className="d-flex justify-content-center landingRegister links">
                                    Don’t have an account yet?
                                      <a className="signUp" href="/register">
                                      Sign up
                                      </a>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                      <a
                                        className="signUp"
                                        href="/forgot-password"
                                      >
                                        Forgot your password?
                                      </a>
                                    </div>
                                  
                                </Form>
                              );
                            }}
                          </Formik>
                        </div>
                      </div>
                      </div>
      </React.Fragment>
    );
  }
}
Signin.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  loginUser: PropTypes.func.isRequired,
  isUserAuthenicated:PropTypes.func.isRequired,
  user: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
     loading: state.auth.loading,
     error: state.auth.error,
     user: state.auth.user,
     isAuthenticated:state.auth.isAuthenticated,
     currentuser:state.auth.currentuser
});

export default connect(mapStateToProps, { loginUser,isUserAuthenicated })(Signin);