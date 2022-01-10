
  window.onload = function(){
  
  let prev = document.getElementById("prev");
  let next = document.getElementById("next");
  let img = document.getElementsByTagName("name")[0];
  let imgArr = ["image/狄仁傑文字.png","image/武則天文字.png","image/楊貴妃文字.png"];
  let index = 0;
  prev.onclick = function(){
    index --;
    if(index < 0){
      index = imgArr.length -1;
    }
    img.src = imgArr[index];
  };
  
  next.onclick = function()
  {
    index ++;
    if(index >imgArr.length -1)
      {
        index =0;
      }
    img.src = imgArr[index];
  };
};
