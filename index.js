document.getElementById('btn').addEventListener('click',loadjoke);
function loadjoke(e){
  let number=document.getElementById('input').value;
  const xhr=new XMLHttpRequest();
  xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
  xhr.onload=function(){
    if(this.status==200){
      const response=JSON.parse(this.response);
      console.log(response);
      let output='';
      response.value.forEach(function(index){
          if(output==''){
            output+=`
            <li><b>${index.joke}</b></li>`;
          }else{
            output+=`
            <hr>
            <li><b>${index.joke}</b></li>`
          }
          
            
        
            
          
      })
      document.querySelector('.output').innerHTML=output;
    }
  }
  xhr.send();
  e.preventDefault();
  
}