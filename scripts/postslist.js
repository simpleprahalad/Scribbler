var posts = [
    {
        postAuthor : "Srishti Gupta",
        postTitle : "‘let’ me be a ‘const’(ant), not a ‘var’(iable)!",
        postContent : "Since JavaScript does not have any type-checking, \
                        either of these keywords can be used to declare a \
                         variable of any type (datatype) in JavaScript. \
                         Though all the three keywords are used for the same purpose, they are different."
    },
    {
        postAuthor : "Colby Fayock",
        postTitle : "What is linting and how can it save you time?",
        postContent : "One of the biggest challenges in software development is time. \
                        It’s something we can’t easily get more of, but linting can help \
                        us make the most out of the time we have."
    },
    {
        postAuthor : "Yazeed Bzadough",
        postTitle : "How to Get More Views on Your Tech Blog",
        postContent : "If you're a developer with a Twitter account, you've already seen \
                        everyone and their cat start a blog, YouTube channel, or Patreon. \
                        We all want to become stars, or at the very least, a recognizable name in the industry."
    },
    {
        postAuthor : "Cedd Burge",
        postTitle : "How to write easily describable code",
        postContent : "When code is not describable using words, most people have \
                       to do some mental mapping to turn it in to words. \
                        This wastes mental energy, and you run the risk of getting \
                        the mapping wrong. Different people will map to different words, \
                        which leads to confusion when discussing the code."
    },
    {
        postAuthor : "Srishti Gupta",
        postTitle : "Everything you should know about ‘module’ & ‘require’ in Node.js",
        postContent : "Node.js treats each JavaScript file as a separate module. \
                        For instance, if you have a file containing some code and \
                        this file is named xyz.js, then this file is treated as a \
                        module in Node, and you can say that you’ve created a module \
                        named xyz."
    }
]

showPosts();
var deletePostId = 0;

function showPosts() {
    posts.forEach(function(value, index) {
        index++;
        var postId = 'postId_' + index;
        var template = 
        '<div class="post-item" id=' + postId + '>' + 
            '<div class="post-author">' +
                value.postAuthor +
            '</div>' +
            '<div class="post-body">' +
                '<div class="post-title">' +
                    value.postTitle +
                    '<i class="fa fa-trash trash-icon" onclick="showDeletePost('+ postId +')"></i>' +
                '</div>' +
                '<div class="post-content">' +
                    value.postContent +
                '</div>' +
                '<div class="post-footer">' +
                    '<i class="fa fa-ellipsis-h eplisis-icon" onclick="showMorePost('+ postId +')"></i>' +
                '</div>' +
            '</div>' +
        '</div>';
        document.getElementById('posts-list').innerHTML += template;
    })
}

function showDeletePost(id) {
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    var modal = document.getElementById("delete-post-modal");
    modal.style.display = "block";
    deletePostId = id;
}

function handleYesDeletePost() {
    document.getElementById(deletePostId.id).remove();
    handleNoDeletePost();
}

function handleNoDeletePost() {
    var modal = document.getElementById("delete-post-modal");
    modal.style.display = "none";
}

function showMorePost(id) {
    deletePostId = id;
    console.log(id);
    console.log(deletePostId);
    var data = document.getElementById(id);
    console.log(data);
    location.href = "post.html";
    // sessionStorage.setItem();
}