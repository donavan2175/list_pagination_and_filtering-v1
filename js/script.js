// global variables//
const item = document.getElementsByClassName('student-item');
const itemsPerPage = 10;
const page = 1;

//this functions hides all the students excepts the 10 students you will see per page//
function showPage(list, page) {
   const startIndex = page * itemsPerPage - 1;
   const endIndex = startIndex - 9;
   
   for (let i = 0; i < list.length; i++) {
      if (i >= endIndex && i <= startIndex) {
         list[i].style.display = 'block';
      } else {
         list[i].style.display = 'none';
      }
   }
}

//this functions appends the dom elements for the pagination links//
function appendPageLinks(list) {
   const pages = Math.ceil(list.length/10);
   const div = document.createElement('div');
   const ul = document.createElement('ul');
   const pageDiv = document.querySelector('.page');
   div.classList.add("pagination");
   pageDiv.appendChild(div);
   div.appendChild(ul);



   for (let i = 1; i <= pages; i++) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = i;
      ul.appendChild(li);
      li.appendChild(a);
      a.addEventListener('click', (e) => {
         showPage(item, i);
         const activePage = document.getElementsByClassName('active');
         if (activePage.length > 0) {
            activePage[0].className = activePage[0].className.replace('active', '');
         }
         e.target.className = "active";
      })
   }

}

showPage(item, page);
appendPageLinks(item);
