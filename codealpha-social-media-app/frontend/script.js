const API = 'http://localhost:5000/api';

function logout() {
  localStorage.removeItem('token');
  window.location = 'index.html';
}

function checkAuth() {
  const token = localStorage.getItem('token');
  if (!token) window.location = 'index.html';
}

// Existing functions...
async function loginUser(email, password) {
  const res = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  if (data.token) {
    localStorage.setItem('token', data.token);
    window.location = 'view-posts.html';
  } else alert(data.message);
}

async function registerUser(username, email, password) {
  const res = await fetch(`${API}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password })
  });
  const data = await res.json();
  alert(data.message);
  if(data.message.includes('success')) window.location = 'index.html';
}

async function createPost(content) {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
    body: JSON.stringify({ content })
  });
  const data = await res.json();
  if(data._id) { alert('Post created!'); window.location = 'view-posts.html'; }
  else alert(data.message);
}

async function fetchPosts() {
  const res = await fetch(`${API}/posts`);
  const posts = await res.json();
  const container = document.getElementById('posts');
  container.innerHTML = '';
  posts.forEach(post => {
    const div = document.createElement('div');
    div.classList.add('post');
    div.innerHTML = `<b>${post.user.username}</b>: ${post.content}<br>
      Likes: ${post.likes.length} <button onclick="likePost('${post._id}')">Like</button>
      <div>
        Comments:
        ${post.comments.map(c => `<div class="comment"><b>${c.user.username}:</b> ${c.text}</div>`).join('')}
        <input id="comment-${post._id}" placeholder="Add comment"><button onclick="commentPost('${post._id}')">Comment</button>
      </div>`;
    container.appendChild(div);
  });
}

async function likePost(id) {
  const token = localStorage.getItem('token');
  await fetch(`${API}/posts/like/${id}`, { method: 'PUT', headers: { 'Authorization': 'Bearer ' + token } });
  fetchPosts();
}

async function commentPost(id) {
  const text = document.getElementById('comment-' + id).value;
  const token = localStorage.getItem('token');
  await fetch(`${API}/posts/comment/${id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
    body: JSON.stringify({ text })
  });
  fetchPosts();
}
