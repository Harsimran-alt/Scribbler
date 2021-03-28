var like=0;
var count=1;

function EditPost(name, heading, content){
    var n=name.value;
    var head=heading.value;
    var cont=content.value;
    window.location.href="../html/post.html";
    document.getElementById("author1").innerHTML= n;
    document.getElementById("heading1").innerHTML= head;
    document.getElementById("content1").innerHTML= cont;

}
function Like_func(){
    like++;
    document.getElementById("like").innerHTML= like+" people liked this!";
    document.getElementById("like_btn").innerHTML= '<i class="fa fa-thumbs-up"></i> Liked';
}
function comment_list(comment){

}
