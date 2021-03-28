var like=0;
var count=1;
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
            const { heading } = queryString;
            const { author } = queryString;
            const { content } = queryString;
            document.getElementsByClassName('heading-content')[0].innerHTML = heading;
            document.getElementsByClassName('author-name')[0].innerHTML = author;
            document.getElementsByClassName('post-content')[0].innerHTML = content;
    }
    
};