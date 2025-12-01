function attachEvents() {
    
    const loadBtn = document.getElementById('btnLoadPosts');
    const viewBtn = document.getElementById('btnViewPost');

    loadBtn.addEventListener('click', loadPost);
    viewBtn.addEventListener('click', viewPost);
    
    const postURL = 'http://localhost:3030/jsonstore/blog/posts';
    const commentURL = 'http://localhost:3030/jsonstore/blog/comments';

    async function loadPost() {
        const select = document.getElementById('posts');
        select.innerHTML = '';

        const res = await fetch(postURL);
        const data = await res.json();

        Object.values(data).forEach(post => {

            const option = document.createElement('option');
            option.value = post.id;
            option.textContent = post.title;
            select.appendChild(option);
        });
    }

    async function viewPost() {

        const postTitle = document.getElementById('post-title');
        const postBody = document.getElementById('post-body');
        const postComments = document.getElementById('post-comments');

        postComments.innerHTML = '';

        const selectID = document.getElementById('posts').value;
        const postRes = await fetch(postURL);
        const postData = await postRes.json();

        const currPost = Object.values(postData).find(p => p.id === selectID);

        postTitle.textContent = currPost.title;
        postBody.textContent = currPost.body;

        const commentsRes = await fetch(commentURL);
        const commentsData = await commentsRes.json();

        const filter = Object.values(commentsData)
            .filter(c => c.postID === selectID);

        filter.forEach(c => {
            const li = document.createElement('li');

            li.textContent = c.text;
            postComments.appendChild(li);
        });    
    }
}

attachEvents();