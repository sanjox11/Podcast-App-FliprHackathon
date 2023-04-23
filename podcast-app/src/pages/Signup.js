import React from 'react'
import '../App.css'
import NavbarLogin from '../component/NavbarLogin'
export default function Signup() {
    return (
        <div className="bg-image">
            <NavbarLogin />
            <div className='contianer min-vh-100 d-flex justify-content-center align-items-center'>
                <form style={{ minWidth: "500px", alignContent: "center" }}>
                <div class="form-floating mb-3">
                        <input type="fname" class="form-control" id="floatingInput" placeholder='First Name' />
                        <label for="floatingInput">First Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="lname" class="form-control" id="floatingInput" placeholder='Last Name'/>
                        <label for="floatingInput">Last Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
