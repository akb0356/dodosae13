async function init() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  display(users);
}

function display(users) {
  const result = document.querySelector("#result");
  let string = "";
  users.forEach((user) => {
    string += `
    <table>
    <tr>
    <th>이름</th><td>${user.name}</td>
    <th>아이디</th><td>${user.username}</td>
    <th>이메일</th><td>${user.email}</td>
    </tr>
    </table>
    `;
  });
  result.innerHTML = string;
}
init();
