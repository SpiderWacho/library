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
    let error = false; 
    let title = document.getElementsByName("title")[0].value;
    let author = document.getElementsByName("author")[0].value;
    let pages = document.getElementsByName("pages")[0].value;
    let status = document.getElementsByName("status")[0].checked;
    if (title == "" || author == "" || pages == "") {
        error = true;
    }
    let readStatus = ""
    if (status === true) {
        readStatus = "Read";
    }
    else {
        readStatus = "Not read";
    }
    if (!error) {
        newBook = new Book(title, author, pages, readStatus);
        myLibrary.push(newBook);
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("pages").value = "";
        document.getElementById("status").checked = false;
        closeForm();
        displayBooks(); 

    }
    else {
        form = document.querySelector("#formNewBook");
        errors = document.querySelectorAll(".errorMsg")
        if (errors != null) {
            errors.forEach(error => { 
                error.remove();
            });
        }
        if (title == "") {
            let alert = document.createElement("p");
            alert.textContent = "Title can't be empty"
            form.appendChild(alert);
            alert.classList.add("errorMsg")
        }
        if (author == "") {
            let alert = document.createElement("p");
            alert.textContent = "Author can't be empty"
            form.appendChild(alert);
            alert.classList.add("errorMsg")
        }
        if (Number.isInteger(pages) == false)  {
            let alert = document.createElement("p");
            alert.textContent = "Invalid number"
            form.appendChild(alert);
            alert.classList.add("errorMsg")
        } 
    }
    e.preventDefault();
});


const bookList = document.querySelector("#bookList");
function clearBooks(){ 
    if (bookList.hasChildNodes() === true){
        while (bookList.firstChild) {
            bookList.removeChild(bookList.lastChild);
          };
    }
}

function displayBooks() {
    if (bookList.hasChildNodes() === true){
        clearBooks();
    }
        let j = myLibrary.length;
        for (let i = 0; i < j; i++) {     
            let newDiv = document.createElement("div");
            newDiv.classList.add("bookCard");
            
            let newTitle = document.createElement("p");
            newTitle.textContent = myLibrary[i].title;
            newTitle.classList.add("titles");

            let newAuthor = document.createElement("p");
            newAuthor.textContent = myLibrary[i].author;
            newAuthor.classList.add("authors");
            
            let newPageNumber = document.createElement("p");
            newPageNumber.textContent = myLibrary[i].pages;
            newPageNumber.classList.add("pages");
            
            let newStatus = document.createElement("p");
            newStatus.classList.add("status");
            newStatus.textContent = myLibrary[i].status;
            
            let newBtn = document.createElement("button");
            newBtn.classList.add("removeBook");
            newBtn.textContent = "X";
            newBtn.setAttribute('data-index', i);
            newBtn.addEventListener("click", removeBook);
            
            bookList.appendChild(newDiv);
            newDiv.appendChild(newTitle);
            newDiv.appendChild(newAuthor);
            newDiv.appendChild(newPageNumber);
            newDiv.appendChild(newStatus);
            newDiv.appendChild(newBtn);
        }
}

function clearBooks() {
    if (bookList.hasChildNodes() === true){
        while (bookList.firstChild) {
            bookList.removeChild(bookList.lastChild);
          };
    }
}


function openForm() {
    clearBooks;
    document.getElementById("bookForm").style.display = "block";
}

  
function closeForm(e) {
    document.getElementById("bookForm").style.display = "none";
    if (e != undefined) {
        e.preventDefault();
    }
    if (bookList.hasChildNodes() === false) {
        displayBooks;
    }
} 

function removeBook(e) {
    let index = e.target.getAttribute("data-index");
    myLibrary.splice(index, 1);
    clearBooks();
    displayBooks();
    console.log(myLibrary);
}

btnNewBook.addEventListener("click", openForm);
btnCloseForm.addEventListener("click", closeForm);





