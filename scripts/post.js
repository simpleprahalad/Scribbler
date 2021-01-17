function toggleEditSaveButton() {
    var iconTemplate;
    if (document.getElementById("post-title").contentEditable == "false") {
        document.getElementById("post-title").contentEditable = "true";
        document.getElementById("post-body").contentEditable = "true";
        //Show "save" icon when user has already clicked "edit" button
        iconTemplate = 'Save <i style="font-size: 14px;" class="fa fa-save" id="edit-save-icon"></i>';
        document.getElementById("post-edit").innerHTML = iconTemplate;
        document.getElementById('post-title').style.border = '2px solid pink';
        document.getElementById('post-body').style.border = '2px solid pink';
    } else {
        document.getElementById("post-title").contentEditable = "false";
        document.getElementById("post-body").contentEditable = "false";
        //Show "edit" icon when user has clicked "save" button
        iconTemplate = 'Edit <i style="font-size: 14px;" class="fa fa-edit" id="edit-save-icon"></i>';
        document.getElementById("post-edit").innerHTML = iconTemplate;
        document.getElementById('post-title').style.border = 'none';
        document.getElementById('post-body').style.border = 'none';
    }
}

//Function to handle adding of comments when the user enters a comment below the blog
// and showing it in lastest first on the top order
function addComments() {
    // returning incase user clicks comment button but doesnt add any information
    if (document.getElementById("userComments").value == "") {
        return;
    }

    // change the background to gray color :
    document.getElementById("add-comments-to-list").style['background-color'] = 'lightgray';

    // pre-pend the new comment
    var commentList = document.getElementById("userComments").value;
    var newComment = '<p class="each-comment">'+ commentList + '</p>';
    var getDiv = document.getElementById('add-comments-to-list');
    getDiv.innerHTML = newComment + getDiv.innerHTML;
    
    // Making the input field blank
    document.getElementById("userComments").value = "";
}

var numberOfClicks = 0;

//Function to handle total likes on a post and also changing the like icon, count and
// string on the screen accordingly
function postLiked() {
    // Change the icon when the user has liked a post
    document.getElementById("like-post").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked!";
    numberOfClicks += 1;
    if ( numberOfClicks != 0 ) {
        if ( numberOfClicks == 1 ) {
            document.getElementById('like-count').innerHTML = numberOfClicks + " person likes this!";
        }
        else {
            document.getElementById('like-count').innerHTML = numberOfClicks + " people like this!";
        }
    }
}