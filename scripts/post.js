function toggleEditSaveButton() {
    if (document.getElementById("post-title").contentEditable == "false") {
        document.getElementById("post-title").contentEditable = "true";
        document.getElementById("post-body").contentEditable = "true";
        var saveTempate = 'Save <i style="font-size: 14px;" class="fa fa-save" id="edit-save-icon"></i>';
        document.getElementById("post-edit").innerHTML = saveTempate;
        document.getElementById('post-title').style.border = '2px solid pink';
        document.getElementById('post-body').style.border = '2px solid pink';
    } else {
        document.getElementById("post-title").contentEditable = "false";
        document.getElementById("post-body").contentEditable = "false";
        var saveTempate = 'Edit <i style="font-size: 14px;" class="fa fa-edit" id="edit-save-icon"></i>';
        document.getElementById("post-edit").innerHTML = saveTempate;
        document.getElementById('post-title').style.border = 'none';
        document.getElementById('post-body').style.border = 'none';
    }
}

function addComments() {
    // change the background to gray color :
    document.getElementById("add-comments-to-list").style['background-color'] = 'lightgray';

    // pre-pend the new comment
    var commentList = document.getElementById("userComments").value;
    var newComment = '<p class="each-comment">'+ commentList + '</p>';
    var getDiv = document.getElementById('add-comments-to-list');
    getDiv.innerHTML = newComment + getDiv.innerHTML;
}

var numberOfClicks = 0;

function postLiked() {
    document.getElementById("like-post").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked!";
    numberOfClicks += 1;
    if(numberOfClicks!=0) {
        if (numberOfClicks==1){
            document.getElementById('like-count').innerHTML = numberOfClicks + " person likes this!";
        }
        else {
            document.getElementById('like-count').innerHTML = numberOfClicks + " people have liked this!";
        }
    }
}