function fetchData(){
  fetch('http://localhost:3000/characters')
  .then(res =>res.json())
  .then(data => functionData(data))
}
function functionData(animals){

  const divParent=document.getElementById('character-bar');
  animals.forEach((animal,index)=>{
    const charName=document.createElement('span');
      charName.textContent=animal.name;
      const InnerName=document.getElementById('name')
      const innerImage=document.getElementById('image')
      const votes=document.getElementById('vote-count');
      const formVotes=document.querySelector('#votes-form')
      const addvotes=document.getElementById('votes');
     
    divParent.appendChild(charName)
        
    InnerName.textContent='';
    innerImage.src='';
    votes.textContent='';
    charName.addEventListener('click',()=>{
      
     InnerName.textContent=animal.name;
     innerImage.src=animal.image;
     votes.textContent=animal.votes
    })
    
    formVotes.addEventListener('submit',(e)=>{
      e.preventDefault()
      const animalVotes=parseInt(addvotes.value) || 0;
      votes.textContent=animalVotes
     
      
    })
    const resetButton=document.getElementById('reset-btn')
    resetButton.addEventListener('click',()=>{
      votes.textContent='0';
      addvotes.value='';
    })
  })
  }

document.addEventListener('DOMContentLoaded',fetchData);