
//deleting the book titles
var btns =document.querySelectorAll('#book-list  ul li  .delete' )
Array.from(btns).forEach((btn)=>{
    btn.addEventListener('click' ,function(e){

        if (e.target.className ==  'delete'){
            const li =e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    })
});

const list = document.querySelector('#book-list')
// add books
const addForm =document.forms['add-book']
addForm.addEventListener('submit',function(e){
    e.preventDefault();
    const value=addForm.querySelector('input[type="text"]').value;

    //creating elements
    const li = document.createElement('li')
    const bookName=document.createElement('span')
    const deleteBtn =document.createElement('span')
    //add content
    deleteBtn.textContent='delete';
    bookName.textContent= value;

    // add class name
    bookName.classList.add('name')
    deleteBtn.classList.add('delete')
    // appentd to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li)
})

// hide  books
const hideBox=  document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked == true){
        list.style.display='none';
    }else{
        list.style.display="initial";
    }
})

//328480
// filter books

const searchBar = document.forms['search-books'].querySelector('input')
searchBar.addEventListener('keyup',function(e){

   const term = e.target.value.toLowerCase(); 
   const books = list.getElementsByTagName('li');

   Array.from(books).forEach((e)=>{
    const title = e.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term) !=-1){
        e.style.display='block';
    }else{
        e.style.display='none'
    }
    
   });
});





