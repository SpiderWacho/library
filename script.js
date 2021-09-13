let myLibrary = [];

function Book(title, author, pages, status) {    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

const btnSubmit = document.querySelector("#submit");
const btnNewBook = document.querySelector("#btnNewBook");
const btnCloseForm = document.querySelector("#closeForm");


btnSubmit.addEventListener("click", function(e){
    let title = document.getElementsByName("title")[0].value;
    let author = document.getElementsByName("author")[0].value;
    let pages = document.getElementsByName("pages")[0].value;
    let readStatus = ""
    if (document.getElementsByName("status")[0].value == "on") {
        readStatus = "Read";
    }
    else {
        readStatus = "Not read";
    }
    newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
    e.preventDefault();
    console.log(newBook)
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("status").checked = false;
    displayBooks();
    
});


const bookList = document.querySelector("#bookList");
function removeBooks(){ 
    if (bookList.hasChildNodes() === true){
        while (bookList.firstChild) {
            bookList.removeChild(bookList.lastChild);
          };
    }
}

function displayBooks() {
    closeForm();
    if (bookList.hasChildNodes() === true){
        removeBooks;
    }
        let j = myLibrary.length;
        for (let i = 0; i < j; i++) {     
            let newDiv = document.createElement("div");
            newDiv.classList.add("bookCard");
            let newTitle = document.createElement("p");
            let newAuthor = document.createElement("p");
            let newPageNumber = document.createElement("p");
            let newStatus = document.createElement("p");
            let newBtn = document.createElement("button");
            newBtn.classList.add("removeBook");
            newBtn.textContent = "X";
            newTitle.textContent = myLibrary[i].title;
            newAuthor.textContent = myLibrary[i].author;
            newPageNumber.textContent = myLibrary[i].pages;
            newStatus.textContent = myLibrary[i].status;
            bookList.appendChild(newDiv);
            newDiv.appendChild(newTitle);
            newDiv.appendChild(newAuthor);
            newDiv.appendChild(newPageNumber);
            newDiv.appendChild(newStatus);
            newDiv.appendChild(newBtn);
        }
}

function openForm() {
    if (bookList.hasChildNodes() === true){
        while (bookList.firstChild) {
            bookList.removeChild(bookList.lastChild);
          };
    document.getElementById("bookForm").style.display = "block";
    }
}
  
function closeForm(e) {
    document.getElementById("bookForm").style.display = "none";
    if (e != undefined) {
        e.preventDefault();
    }
} 

btnNewBook.addEventListener("click", openForm);
btnCloseForm.addEventListener("click", closeForm);   


