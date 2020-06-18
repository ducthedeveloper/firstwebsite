var business = document.querySelectorAll('#business-list li .name');

console.log(business);

 Array.from(business).forEach(function(business){
    
 business.textContent += ' (business name)';
 })

 const businessList = document.querySelector('#business-list');

const banner = document.querySelector;

businessList.previousElementSibling.querySelector('p').innerHTML += '<br/> These are available today!';

const list = document.querySelector('#business-list ul');

list.addEventListener('click', function(e){
     if(e.target.className == 'delete'){
          const li = e.target.parentElement;
          list.removeChild(li)
     }
})

const addForm = document.forms['add-business'];

addForm.addEventListener("submit", function(event){
     event.preventDefault()
     const value = addForm.querySelector('input[type="text"]').value;

     const li =document.createElement('li');
     const businessName = document.createElement('span');
     const deleteBtn = document.createElement('span');

     deleteBtn.textContent = 'delete';
     businessName.textContent = value;

     businessName.classList.add('name');
     deleteBtn.classList.add('delete');

     li.appendChild(businessName);
     li.appendChild(deleteBtn);

     list.appendChild(li)

});

const hideBox = document.querySelector('#hide')
hideBox.addEventListener('change',function(event){
     if(hideBox.checked){
          list.style.display = 'none';
     } else{
          list.style.display = 'initial';

     }
})



const searchBusiness = document.forms['search-business'];
searchBusiness.querySelector('input');
searchBusiness.addEventListener('keyup', function(event){
     const userinpt = event.target.value.toLowerCase();
     const businesses = list.getElementsByTagName('li');

     Array.from(businesses).forEach(function(ind){
     const title= ind.firstElementChild.textContent;
     
     if(title.toLowerCase().indexOf(userinpt) != -1){
          ind.style.display = 'block';
     } else {
          ind.style.display ='none';
     }

})
     
 })



