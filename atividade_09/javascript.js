const demoID = document.getElementById("demo");
demoID.style.border = '2px solid purple';
demoID.textContent = 'Mudei o texto pelo id';
demoID.style.backgroundColor = 'lightblue'

const catClass = document.getElementsByClassName("categoria");
for (i = 0; i < catClass.length; i++) {
    catClass[i].style.border = '2px dotted orange';
    catClass[i].style.backgroundColor= 'orange';
}

const tag = document.getElementsByTagName ("article");
for (i = 0; i < tag.length; i++)
    tag[i].style.border = '2px dotted blue';

const queryId = document.querySelector('#demo-query')
queryId.style.border = '1px solid red';

const demoQuery = document.querySelectorAll('.demo-query-all');
demoQuery.forEach(query => {
    query.style.border = '1px solid green';
})