import React from 'react';

const Authe = () => {
    return (
        <div>
            <h1>Welcome Back!</h1>
            <form>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Password'/>
                <p>Forgot Password</p>
                <input type="submit" value="LOG IN" />
            </form>

        </div>
    );
}

export default Authe;
