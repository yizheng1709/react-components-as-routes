import React from 'react';

class Signup extends React.Component {
    render() {
      return (
<div>
  <br></br><br></br>
  <form>
    <label>Username</label>
    <input type="text" placeholder="Username" name="username"></input>
    <br></br>
    <label>Password</label>
    <input type="password" name="password"></input><br></br>
    <label>Password Confirmation</label>
    <input type="password" name="password-confirmation"></input><br></br>
    <input type="submit" value="Sign Up"></input>
  </form>
</div>
   );
}
}

export default Signup