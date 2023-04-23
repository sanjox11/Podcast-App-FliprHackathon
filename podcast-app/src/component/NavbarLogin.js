import React from 'react'

export default function NavbarLogin() {
    return (
        <div>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <h3 style={{ color: 'white' }}>Podcast App</h3>
                    <form className="d-flex">
                <a className='btn btn-outline-primary me-2 ms-auto' type='button' href='/login'> Login</a>
                <a className="btn btn-success me-2 ms-auto" href='/signup' type="button">Sign Up</a>   
                    </form>
                </div>
            </nav>
        </div>
    )
}
