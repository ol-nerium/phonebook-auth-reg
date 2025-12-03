export default function RegForm() {
  function onFormSumbit(e) {
    console.log(e);
  }
  return (
    <form action={onFormSumbit}>
      <label htmlFor="email"></label>
      <input type="email" id="email" />
      <label htmlFor="password"></label>
      <input type="text" id="password" />
      <button type="submit">Log In</button>
    </form>
  );
}
