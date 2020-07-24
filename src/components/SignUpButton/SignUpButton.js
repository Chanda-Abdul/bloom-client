import React from "react"
import Swal from 'sweetalert2'


export default class SignUpButton extends React.Component {
    signup() {
        Swal.fire({
            title: 'Join our plant family!',
            text: 'Thank you for your interest. The app is currently in the testing phase.  Sign up below and we will let you know once the Bloom App is available to the public',
            icon: 'info',
            input: 'email',
            confirmButtonText: 'Sign Up!',
            showClass: {
              popup: 'swal2-show',
              backdrop: 'swal2-backdrop-show',
              icon: 'swal2-icon-show'
            },
            hideClass: {
              popup: 'swal2-hide',
              backdrop: 'swal2-backdrop-hide',
              icon: 'swal2-icon-hide'
            }
          })
      }
    
      render() {
        return (
          <div>
            <button className="myButton" onClick={this.signup}>
              Sign Up
            </button>
          </div>
        );
      }
}