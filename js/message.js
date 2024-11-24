const arrow = document.getElementById('arrow');
const title = document.getElementById('message-title');
const messageCard = document.getElementById('message')

title.addEventListener('click', () => {
     if(messageCard.style.display === 'none'){
          messageCard.style.display = 'block';
          arrow.style.transform = 'rotate(0.25turn)'
     }else{
          messageCard.style.display = 'none';
          arrow.style.transform = 'rotate(0)'
     }
});
