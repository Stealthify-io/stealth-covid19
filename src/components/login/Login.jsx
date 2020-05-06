import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { signupUser,isUserAuthenicated} from "../../actions/auth";
import "./Login.css";
import Facebook from "../Facebook";
import Google from "../Google";
import { create } from "../../services/logInService";
import swal from "sweetalert";
import { Formik, Form, Field } from "formik";
import { FormGroup } from "reactstrap";
import { registerValidationSchema } from "./registerValidationSchema";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registerForm: {
        first_name: "",
        last_name:"",
        email: "",
        password: "",
      },
    };
  }


  componentWillReceiveProps(nextProps){
    if(nextProps.error)
    this.onCreateError();
  }

  handleSubmit = (values) => {
    const payload = {
      first_name: values.first_name,
      last_name:values.last_name,
      email: values.email,
      password: values.password,
    };
    this.setState({
      registerForm: payload,
    });
    this.props.signupUser(payload);
  };

  onCreateSuccess = () => {
    swal(
      "success"
    );
    this.props.history.push("/signin");
  };

  onCreateError = () => {
    const options = {
      title: "The email you provided is already in our records",
      text: "Would You Like To Login?",
      icon: "warning",
      buttons: {
        register: {
          value: false,
          text: "Register",
          className: "bg-danger",
        },
        login: { value: true, text: "Login", className: "bg-primary" },
      },
    };
    swal(options).then((value) => {
      if (!value) {
        //this.props.history.push("/register");
      } else {
        this.props.history.push("/signin");
      }
    });
  };
  render() {
    return (
      <React.Fragment>
        <div  className="container_register">
          <div>
          <p className="text_create py-2">
            Create an account
          </p>
          </div>
           <div className = "container_button py-2">
            {/* <Facebook /> */}
            </div>   
            <div className = "container_button">
            <Google className = "but_google" />
            </div>
              <p className="text-center-or py-2">OR</p>
              <div className="card-body registerFields">
                  <Formik
                    enableReinitialize={true}
                    validationSchema={registerValidationSchema}
                    initialValues={this.state.registerForm}
                    onSubmit={this.handleSubmit}
                  >
                    {(props) => {
                      const {
                        values,
                        handleSubmit,
                        isValid,
                        isSubmitting,
                        errors,
                        touched,
                      } = props;
                      return (
                        <Form onSubmit={handleSubmit}
                        className="login-form mx-auto col-lg-4">                      
                          <FormGroup>
                            <div className="form-group-1 ">                      
                              <div className="input-group this_field">                                
                                <Field
                                  name="first_name"
                                  type="text"
                                  values={values.first_name}
                                  placeholder="First Name"
                                  autoComplete="off"                                  
                                  className={
                                    errors.first_name &&
                                    touched.first_name
                                      ? "form-control error"
                                      : "form-control"
                                  }                              
                                />
                              </div>
                            </div>
                          </FormGroup>
                          <FormGroup>
                            <div className="form-group-2 ">                      
                              <div className="input-group this_field">                                
                                <Field
                                  name="last_name"
                                  type="text"
                                  values={values.last_name}
                                  placeholder="Last Name"
                                  autoComplete="off"                                  
                                  className={
                                    errors.last_name &&
                                    touched.last_name
                                      ? "form-control error"
                                      : "form-control"
                                  }                              
                                />
                              </div>
                            </div>
                          </FormGroup>
                          <FormGroup>
                            <div className="form-group reg-email">                      
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
                                  placeholder="Your email"
                                  autoComplete="off"
                                  
                                />
                              </div>
                              {this.state.emailError ? (
                                <span className="input-feedback text-danger">
                                  {
                                    "The email was found in our records would you like to sign in?"
                                  }
                                </span>
                              ) : null}
                            </div>
                          </FormGroup>
                          <FormGroup>
                            <div className="form-group">                     
                              <div className="input-group this_field">          
                                <Field
                                  name="password"
                                  type="password"
                                  values={values.password}
                                  placeholder="Create Password"
                                  autoComplete="off"                            
                                  className={
                                    errors.password && touched.password
                                      ? "form-control error"
                                      : "form-control"                                      
                                  }
                                />
                              </div>
                            </div>
                          </FormGroup>
                          <div>
                          <p className="text_account py-2 bottom-cont">
                                By clicking ‘Create Account’ you are agreeing to our terms & conditions and privacy policy.
                          </p>
                            <button
                              className="btn btn-success btn_create"
                              type="submit"
                              //disabled={!isValid || isSubmitting}
                            >
                              Create Account
                            </button>
                          <p className="text-center-login py-2">
                            Already made an account?  <a href = "/signin "  
                            onClick={() => {this.props.history.push("/");
                          }} >
                            Login
                            </a>
                            </p>
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>                                
                </div>
              </div>
      </React.Fragment>
    );
  }
}

Signup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  signupUser: PropTypes.func.isRequired,
  isUserAuthenicated:PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
     loading: state.auth.loading,
     error: state.auth.error,
     user: state.auth.user,
     isAuthenticated:state.auth.isAuthenticated,
     currentuser:state.auth.currentuser
});

export default connect(mapStateToProps, { signupUser,isUserAuthenicated })(Signup);
