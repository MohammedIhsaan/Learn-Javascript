/////// Fetch User Data from server and appent it html

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  const div = document.createElement("div");
  div.className = "container";
  const h1 = document.createElement("h1");
  h1.className = "text-center";
  const link = document.createElement("link");
  link.href = `https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cerulean/bootstrap.min.css`;
  link.rel = "stylesheet";
  h1.innerHTML = "Our Client List";

  document.head.appendChild(link);

  document.body.appendChild(h1);

  document.body.appendChild(div);
  let html = "";
  data.forEach((data) => {
    let ul = `<ul class="list-group mt-2">
    <li class="list-group-item d-flex justify-content-between align-items-center">
    client : ${data.id}
      <span class="badge badge-primary badge-pill"></span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    Name : ${data.name}
      <span class="badge badge-primary badge-pill"></span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    Username : ${data.username}
      <span class="badge badge-primary badge-pill"></span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    Email Address :${data.email}
      <span class="badge badge-primary badge-pill"></span>
    </li>
  </ul>`;
    html += ul;
  });
  console.log(html);
  div.innerHTML = html;
}

window.addEventListener("load", fetchData());
