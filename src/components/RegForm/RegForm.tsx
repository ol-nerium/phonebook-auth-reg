export default function RegForm() {
  function onFormSumbit(e) {
    console.log(e);
  }
  return (
    <form action={onFormSumbit}>
      <label htmlFor="email">Email</label>
      {/* <input type="email" id="email" /> */}
      <input type="text" id="email" />
      <label htmlFor="password">Password</label>
      <input type="text" id="password" />
      <button type="submit">Log In</button>
    </form>
  );
}
