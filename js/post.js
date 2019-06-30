
// This Function is for editing the blog contents
// On click of Edit button it makes blog title and body editable and allows user to edit the contents. 
// While in the editable mode it changes the text to Save from Edit
//And on click of save button it saves the edited contents and changes button text to Edit from save

function editBlog() {
    document.getElementById("blogTitleNew").contentEditable = true;
    document.getElementById("blogBody").contentEditable = true;
    document.getElementById("editButton").innerHTML = "Save <i class='fa fa-floppy-o' aria-hidden='true'></i>";
    document.getElementById("editButton").addEventListener("click",function(){
        document.getElementById("editButton").innerHTML="Edit <i class='fa fa-pencil-square-o' aria-hidden='true'></i>";
        document.getElementById("blogBody").innerHTML =  document.getElementById("blogBody").innerHTML;
        document.getElementById("blogTitleNew").innerHTML = document.getElementById("blogTitleNew").innerHTML;
        document.getElementById("blogTitleNew").contentEditable = false;
    document.getElementById("blogBody").contentEditable = false;
    });
     
   }

// This function displays number of likes on click on Like button.
// And morphs button text to Liked on the button hit

   var numberOfClicks=0;
function postLiked(){
    document.getElementById("likeButton").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked!";
    numberOfClicks += 1;
    if(numberOfClicks!=0){
        if (numberOfClicks==1){
            document.getElementById('commentCount').innerHTML = numberOfClicks + " person likes this!";
        }
        else {
            document.getElementById('commentCount').innerHTML = numberOfClicks + " people have liked this!";
        }
        }

    }

    // This function is to add comments to the comment area. Latest comments are displayed on top.

    function addComments(id){
        if(id.value!=id.defaultValue){
            var addEventName = id.value +'<br>';
            var comments = document.getElementById('userComments');
             document.getElementById('addComment').innerHTML = '<p>'+addEventName+'</p>' + document.getElementById('addComment').innerHTML;          
            comments.value=comments.defaultValue;
        }
    }

