var like=0;
var count=1;
var count=0;
const queryString = new Array();
let editMode = false;
function Like_func(){
    like++;
    document.getElementById("like").innerHTML= like+" people liked this!";
    document.getElementById("like_btn").innerHTML= '<i class="fa fa-thumbs-up"></i> Liked';
}
function comment_list(comment){

}
window.onload = function() {
    if (queryString.length == 0) {
            if (window.location.search.split('?').length > 1) {
                    const params = window.location.search.split('?')[1].split('&');
                    for (let i = 0; i < params.length; i++) {
                            const key = params[i].split('=')[0];
                            const value = decodeURIComponent(params[i].split('=')[1]);
                            queryString[key] = value;
                    }
            }
    }
    if (queryString.heading != null && queryString.author != null) {
        
            document.getElementById('heading1').innerHTML=queryString.heading;
            document.getElementById('author1').innerHTML=queryString.author;
            document.getElementById('content1').innerHTML=queryString.content;
    }
    //document.getElementById('comments').style.visibility = 'hidden';
    
};
const comments = [];

function addingComment(item, index) {
        const temp = document.getElementById('comments').innerHTML;
        document.getElementById('comments').innerHTML = `<div class="comment">${item}</div>`;
        document.getElementById('comments').innerHTML += `${temp}</br>`;
        comments.pop();
}

function addComment(comment) {
        if (comment.value !== '') {
                document.getElementById('comments').style.visibility = 'visible';
                var comment = comment.value;
                comments.unshift(comment);
                $('#comment').val('');
                comments.forEach(addingComment);
                $(document).scrollTop($(document).height());
        }
}
function Edit(){
        if(count===0){
                document.getElementById('edit_btn').innerHTML ='Save<i class="fa fa-save" style="padding-left: 4px;"></i>';
                document.getElementById('content1').style.borderWidth='2px';
                document.getElementById('content1').style.borderStyle='solid';
                count++;
        }
        else
        {  
                document.getElementById('edit_btn').innerHTML ='Edit<i class="fa fa-edit" style="padding-left: 4px;"></i>';
                count++;
                document.getElementById('content1').style.borderWidth='0px';
                document.getElementById('content1').style.borderStyle='none';
                document.getElementById('edit_btn').disabled = true;
        }
}