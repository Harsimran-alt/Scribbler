function EditPost(author, heading, content) {
        var url =
                '../html/post.html?heading=' +
                encodeURIComponent(heading.innerText) +
                '&author=' +
                encodeURIComponent(author.innerText) +
                '&content=' +
                encodeURIComponent(content.innerText);
        window.location.href = url;
    }