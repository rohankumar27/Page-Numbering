const page = document.getElementById("page")
const pagination = document.getElementById('pagination')


let pageNum = 0
let pageItem = 10

GetItem()
function GetItem() {
    page.innerHTML = `<div class="page-header cf">
            <h2>Contacts</h2> 
            <h3>Total: ${users.length}</h3>
        </div>`;

    for (let i = pageNum * pageItem; i < (pageNum * pageItem) + pageItem; i++) {

        const ul = document.createElement('ul');
        ul.setAttribute("class", "contact-list")
        ul.innerHTML += `
                  <li class="contact-myItem cf">
              <div id="contact-details">
                  <img id="avatar" src="${users[i].image}">
                  <h3>${users[i].name}</h3>
                 
              </div>
              <div id="joined-details">
                  <span id="date">Joined&nbsp${users[i].joined}</span>
              </div>
          </li>`;
        page.append(ul);
    }
    FetchPageNum()
}
function FetchPageNum() {
    pagination.innerHTML = "";
    for (let i = 0; i <= (users.length / pageItem); i++) {

        const li = document.createElement('li');
       
           var count;
           count = `<a>${i}</a>`;
        li.innerHTML = count;
        li.addEventListener('click', (event) => {

            pageNum = event.target.innerHTML;

            GetItem();
        });

        pagination.append(li);


    }
    page.append(pagination)



}