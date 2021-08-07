    // on mouseEnter
function logoutBtn0(){
    document.getElementById('logoutBtn').style.background = "#343a40 !important";
    document.getElementById('logoutBtn').style.color = "#fff";
    document.getElementById('logoutBtn').style.border = "1px solid #ffffff7d";
    document.getElementById('logoutBtn').style.boxShadow = "0px 0px 0px 1px #ffffff7d";                        
}
    // on mouseLeave
function logoutBtn1(){
    document.getElementById('logoutBtn').style.background = "#0000";
    document.getElementById('logoutBtn').style.color = "#ffffff6b";
    document.getElementById('logoutBtn').style.border = "1px solid #00ced182";
    document.getElementById('logoutBtn').style.boxShadow = "0px 0px 0px 1px #d2691e96";                        
}
    //on mouseDown
function logoutBtn2() {
    document.getElementById('logoutBtn').style.background = "#000";
    document.getElementById('logoutBtn').style.color = "#fff";
    document.getElementById('logoutBtn').style.border = "1px solid #00ced182";
    document.getElementById('logoutBtn').style.boxShadow = "0px 0px 5px 0px #f1eeec";
}
    //on mouseUp
function logoutBtn3() {
    document.getElementById('logoutBtn').style.background = "#0000";
    document.getElementById('logoutBtn').style.color = "#ffffff6b";
    document.getElementById('logoutBtn').style.border = "1px solid #00ced182";
    document.getElementById('logoutBtn').style.boxShadow = "0px 0px 0px 1px #d2691e96";
}

/* --------------------------------------Mouse on logout button-------------------------------------------------*/

    // onMouseEnter
function searchBtn0(){
    document.getElementById('searchBtn').style.background = "#0000 !important";
    document.getElementById('searchBtn').style.color = "#06eb06";
    document.getElementById('searchBtn').style.border = "1px solid #07d207";
    document.getElementById('searchBtn').style.boxShadow = "0px 0px 0px 1px #079807";
}
    // mouseLeave
function searchBtn1(){
    document.getElementById('searchBtn').style.background = "#0000";
    document.getElementById('searchBtn').style.color = "green";
    document.getElementById('searchBtn').style.border = "1px solid green";
    document.getElementById('searchBtn').style.boxShadow = "0px 0px 0px 1px green";                        
}
    // mouseDown
function searchBtn2() {
    document.getElementById('searchBtn').style.background = "rgb(21, 47, 4) none repeat scroll 0% 0%";
    document.getElementById('searchBtn').style.color = "#fff";
    document.getElementById('searchBtn').style.border = "1px outset green";
    document.getElementById('searchBtn').style.boxShadow = "0px 0px 5px 1px #e1e6e15e";
    document.getElementById('searchBtn').style.textShadow = "0px 0px 2px";
}
    // mouseUp
function searchBtn3() {
    document.getElementById('searchBtn').style.background = "#0000";
    document.getElementById('searchBtn').style.color = "green";
    document.getElementById('searchBtn').style.border = "1px solid green";
    document.getElementById('searchBtn').style.boxShadow = "0px 0px 0px 1px green";
    document.getElementById('searchBtn').style.textShadow = "0px 0px 0px";
}
// --------------------------------------------------------------
// default view is Available Books
// document.getElementById('libraryForm').style.display = "none";   

// Available Books 
function availableBooksBtn(){
    document.getElementById('libraryForm').style.display = "none";
}
                
// borrow book
function borrowBook(){
    document.getElementById('libraryForm').style.display = "block";
    document.getElementById('bookName').placeholder = "Book Name To Borrow"
    document.getElementById('AddBtn').innerHTML = "Borrow";
}

// return book
function returnBook(){
    document.getElementById('libraryForm').style.display = "block";
    document.getElementById('bookName').placeholder = "Book Name To Return"
    document.getElementById('AddBtn').innerHTML = "Return";
}

// Add book
function addBook(){
    document.getElementById('libraryForm').style.display = "block";
    document.getElementById('bookName').placeholder = "Book Name To Add"
    document.getElementById('AddBtn').innerHTML = "Add";
}
