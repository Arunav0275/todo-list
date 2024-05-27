function addTask(){
    var input=document.getElementById("input");
    
    var newitem=input.value;
    
    if(newitem !=""){
       var item = document.createElement("li");
      
      item.innerHTML='<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" />' + '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" />' + '<input type="button" class="important" value="&#x21" onclick="highlight(this.parentNode)">' + newitem;
      
      document.getElementById("tasks").appendChild(item);
      
      input.value="";
      input.placeholder="enter text here...";
       }
  }
  
  function markDone(item){
    item.className='finished';
  }
  
  function remove(item){
    if(item.className=='finished'){
      item.remove();
    }else{
      alert('item has not been ticked yet');
    }
  }
  
  function highlight(item){
   if(item.className=="important"){
      item.className="";
    }else{
      item.className="important";
    }
  }
  
  function doAbout(){
    var dd1=document.getElementById("about");
    dd1.innerHTML="Author is Arunav Satyaraj";
    dd1.className="About";
  }
  
  function clearAbout(){
    dd1=document.getElementById("about");
    dd1.innerHTML="";
  }