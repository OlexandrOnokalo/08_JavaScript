const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const usersRow = document.getElementById("usersRow");
const userInfo = document.getElementById("userInfo");
const userTable = document.getElementById("userTable");
const showPostsBtn = document.getElementById("showPostsBtn");
const postsSection = document.getElementById("postsSection");
const postsRow = document.getElementById("postsRow");

let selectedUserId = null;


async function fetchUsers() {
    try {
        const response = await fetch(USERS_URL);
        if (!response.ok) return;

        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error(error);
    }
}

function displayUsers(users) {
    usersRow.innerHTML = "";

    for (const user of users) {
        const col = document.createElement("div");
        col.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-2.5");

        const btn = document.createElement("button");
        btn.className = "btn btn-outline-light w-100";
        btn.textContent = user.name;

        btn.addEventListener("click", () => fetchUserById(user.id));

        col.appendChild(btn);
        usersRow.appendChild(col);
    }
}


async function fetchUserById(id) {
    try {
        const response = await fetch(`${USERS_URL}/${id}`);
        if (!response.ok) return;

        const user = await response.json();
        selectedUserId = user.id;
        displayUserInfo(user);
    } catch (error) {
        console.error(error);
    }
}

function displayUserInfo(user) {
    userTable.innerHTML = `
        <tr><th>Name</th><td>${user.name}</td></tr>
        <tr><th>Username</th><td>${user.username}</td></tr>
        <tr><th>Email</th><td>${user.email}</td></tr>
        <tr><th>Phone</th><td>${user.phone}</td></tr>
        <tr><th>Website</th><td>${user.website}</td></tr>
        <tr>
            <th>Address</th>
            <td>${user.address.city}, ${user.address.street}</td>
        </tr>
    `;

    userInfo.classList.remove("d-none");
    postsSection.classList.add("d-none");
}


showPostsBtn.addEventListener("click", fetchPosts);

async function fetchPosts() {
    if (!selectedUserId) return;

    try {
        const response = await fetch(`${POSTS_URL}?userId=${selectedUserId}`);
        if (!response.ok) return;

        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error(error);
    }
}

function displayPosts(posts) {
    postsRow.innerHTML = "";

    for (const post of posts) {
        const col = document.createElement("div");
        col.classList.add("col-12", "col-md-6");

        col.innerHTML = `
            <div class="card bg-secondary text-light h-100">
                <div class="card-body">
                    <h6 class="card-title">${post.title}</h6>
                    <p class="card-text">${post.body}</p>
                </div>
            </div>
        `;

        postsRow.appendChild(col);
    }

    postsSection.classList.remove("d-none");
}


document.addEventListener("DOMContentLoaded", fetchUsers);
