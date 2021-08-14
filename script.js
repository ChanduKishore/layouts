const body = document.querySelector('body');
    const aside = document.querySelector(".aside_content");
    const section = document.querySelector("section");
    const selection = document.querySelector('select');
    const videoWrapper = document.querySelector("div");
    const video = document.querySelector("iframe");
    const videoTitle = document.querySelector('p');
    const darkTheme = true;
    if (darkTheme){
      body.setAttribute('class','dark');
    }else{body.setAttribute('class','light')}

   let source ;  
fetch('source.json').then((response) => {return response.json()}).then(json =>{ source = json; initilize()} ).catch((e) => {console.log('error:'+ e.message)})


    //main build this function loads when page completed loading and sets the aside bar and main video section
function initilize() {
      
      //initial video changing source index values can display new video for initial page load
  
     displayInfo(source.module1);
     displayData(source.module1[0]);
     
      selection.onchange = function(){
         let mod;
          switch(selection.value){
            case 'module1':
            mod = source.module1;
            break;
            case 'module2':
            mod = source.module2;
            break
            case 'module3':
            mod = source.module3;
            break;
          }

            displayInfo(mod)
        }


          function displayInfo(module){
            while(aside.firstChild){
              aside.removeChild(aside.firstChild)
            }
            
            for(let i=0;i < module.length;i++){
        
            const videoName =document.createElement('button');
            videoName.textContent=module[i].name
            aside.appendChild(videoName);

            videoName.onclick = function(){
              displayData(module[i]);
              let vidName = document.querySelectorAll('button');
              for(let j=0;j<vidName.length;j++){
                  vidName[j].setAttribute('class','inactive')
              }
              videoName.setAttribute('class','active');
              }
          }
    }
  
  

  //display fucntion
    function displayData(vid) {
      videoTitle.textContent = vid.name 
      video.src = vid.url;
    }
    


}