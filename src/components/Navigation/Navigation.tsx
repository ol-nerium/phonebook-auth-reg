import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </>
  );
}
