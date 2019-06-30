
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

  