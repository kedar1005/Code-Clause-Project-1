document.addEventListener('DOMContentLoaded', function() {
    const readMoreLinks = document.querySelectorAll('.read-more');
    const navLinks = document.querySelectorAll('nav ul li a');
    const posts = document.querySelectorAll('.post');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const post = this.closest('.post');
            const content = post.querySelector('p:nth-of-type(1)');
            content.textContent = 'Full article content...';
            this.style.display = 'none';
        });
    });

    const commentForms = document.querySelectorAll('.comment-form');

    commentForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const commentList = this.previousElementSibling;
            const commentText = this.querySelector('textarea').value;
            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.textContent = commentText;
            commentList.appendChild(newComment);
            this.querySelector('textarea').value = '';
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const category = this.getAttribute('data-category');

            posts.forEach(post => {
                if (category === 'all' || post.getAttribute('data-category') === category) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    });
});
