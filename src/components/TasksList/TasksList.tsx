const test: any[] = ['head', 'leg', 'nose'];

export default function TasksList() {
  return (
    <ul>
      {test.map((i: any) => (
        <li>
          <p>list content test {i}</p>
        </li>
      ))}
    </ul>
  );
}
