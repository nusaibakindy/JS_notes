 // 1. Show Users
 async function loadUsers() {
    const usersList = document.getElementById("usersList");
    usersList.innerHTML = "Loading..."; // Show loading message

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();
        usersList.innerHTML = ""; // Clear loading message

        // Display users in the list
        users.forEach(user => {
            const listItem = document.createElement("li");
            listItem.textContent = `${user.name} (${user.email}) - Company: ${user.company.name}`;
            usersList.appendChild(listItem);
        });
    } catch (error) {
        usersList.innerHTML = "Error loading users.";
        console.error(error);
    }
}

// 2. Show Posts
async function loadPosts() {
    const postsList = document.getElementById("postsList");
    postsList.innerHTML = "Loading..."; // Show loading message

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        const posts = await response.json();
        postsList.innerHTML = ""; // Clear loading message

        // Display posts in the list
        posts.forEach(post => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
            postsList.appendChild(listItem);
        });
    } catch (error) {
        postsList.innerHTML = "Error loading posts.";
        console.error(error);
    }
}

// 3. Add a Post
async function addPost(event) {
    event.preventDefault(); // Prevent form submission from reloading the page

    const title = document.getElementById("postTitle").value;
    const body = document.getElementById("postBody").value;
    const postResult = document.getElementById("postResult");

    postResult.textContent = "Submitting..."; // Show submitting message

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, body })
        });

        if (!response.ok) {
            throw new Error("Failed to add post");
        }

        const newPost = await response.json();
        postResult.innerHTML = `
            <p>Post added successfully!</p>
            <p><strong>ID:</strong> ${newPost.id}</p>
            <p><strong>Title:</strong> ${newPost.title}</p>
            <p><strong>Body:</strong> ${newPost.body}</p>
        `;
    } catch (error) {
        postResult.textContent = "Error adding post.";
        console.error(error);
    }
}

// 4. Show Comments for a Post
async function loadComments() {
    const postId = document.getElementById("postId").value;
    const commentsList = document.getElementById("commentsList");

    if (!postId) {
        commentsList.innerHTML = "Please enter a valid Post ID.";
        return;
    }

    commentsList.innerHTML = "Loading..."; // Show loading message

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        if (!response.ok) {
            throw new Error("Failed to fetch comments");
        }

        const comments = await response.json();
        commentsList.innerHTML = ""; // Clear loading message

        // Display comments in the list
        comments.forEach(comment => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${comment.name}</strong><br>${comment.body}`;
            commentsList.appendChild(listItem);
        });
    } catch (error) {
        commentsList.innerHTML = "Error loading comments.";
        console.error(error);
    }
}

// Add event listeners to the buttons and form
document.getElementById("loadUsersButton").addEventListener("click", loadUsers);
document.getElementById("loadPostsButton").addEventListener("click", loadPosts);
document.getElementById("addPostForm").addEventListener("submit", addPost);
document.getElementById("loadCommentsButton").addEventListener("click", loadComments);