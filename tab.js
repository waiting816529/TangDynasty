$(".tab").each(function(index) {
  $(this).click(function(e) {
    triggletab();
    triigletabcontent();
    $(this).toggleClass("active");
    $(".tab-c")
      .eq(index)
      .toggleClass("active");
  });
});
//to remove all tab headers
function triggletab() {
  $(".tab").each(function() {
    $(this).removeClass("active");
  });
}

//triggle the tab content
function triigletabcontent() {
  $(".tab-c").each(function() {
    $(this).removeClass("active");
  });
}


// -------------------------食物
function get_food1() {
  document.getElementById('food').src="image3/食物/切膾.png";
  document.getElementById("big").innerHTML='切膾';
  document.getElementById("small").innerHTML='生魚片。唐朝喜食魚，甚至有「無魚不成宴」的風俗，<br>食魚也被視作富足的象徵。';
}
 function get_food2() {
  document.getElementById('food').src="image3/食物/水盆羊肉.png";
  document.getElementById("big").innerHTML='水盆羊肉';
  document.getElementById("small").innerHTML='唐朝勛貴大多吃羊肉，吃豬肉的多為地位低下的底層人民，而吃牛肉則犯法。';
}
function get_food3() {
  document.getElementById('food').src="image3/食物/烏梅漿.png";
  document.getElementById("big").innerHTML='烏梅漿';
  document.getElementById("small").innerHTML='唐朝的果汁稱作「漿」，多以烏梅、桃、葡萄、甘蔗这些大自然的餽贈為原料。';
}
function get_food4() {
  document.getElementById('food').src="image3/食物/秋葵.png";
  document.getElementById("big").innerHTML='汆燙秋葵';
  document.getElementById("small").innerHTML='唐朝最常見的蔬菜之一，當時尚無番茄、青椒、紅薯、洋蔥、辣椒等蔬菜。';
}
function get_food5() {
  document.getElementById('food').src="image3/食物/饅頭.png";
  document.getElementById("big").innerHTML='饅頭';
  document.getElementById("small").innerHTML='唐朝流行的主食之一，外形有長有圓，而且唐朝的饅頭裡可是有包餡的喔！';
}
function get_food6() {
  document.getElementById('food').src="image3/食物/洛陽水席.png";
  document.getElementById("big").innerHTML='洛陽水席';
  document.getElementById("small").innerHTML='著名佳肴牡丹燕菜的出處，特點是有葷有素、選料廣泛，全席共24道菜。';
}

// ------------------文物
function get_item1() {
  document.getElementById('item').src="image3/文物/唐三彩.png";
  document.getElementById("big2").innerHTML='唐三彩';
  document.getElementById("small2").innerHTML='盛行於唐朝的陶瓷燒制工藝的珍品，<br>釉彩以黃、綠、白三色為主，故得名唐三彩。';
}
function get_item2() {
  document.getElementById('item').src="image3/文物/白瓷.png";
  document.getElementById("big2").innerHTML='白瓷';
  document.getElementById("small2").innerHTML='唐朝時期的瓷器偏好使用清雅的冷色調，<br>外觀光潔玉潤，象徵著人性的飽滿和諧。';
}
function get_item3() {
  document.getElementById('item').src="image3/文物/推背圖.png";
  document.getElementById("big2").innerHTML='推背圖';
  document.getElementById("small2").innerHTML='武則天陪葬五寶之一，號稱古今第一奇書，<br>傳說預言極為準確，被歷代君王列為禁書。';
}
function get_item4() {
  document.getElementById('item').src="image3/文物/晴雨珠.png";
  document.getElementById("big2").innerHTML='晴雨珠';
  document.getElementById("small2").innerHTML='武則天陪葬五寶之一，傳說為暹羅國進貢的寶物，<br>可準確預測天象。';
}
function get_item5() {
  document.getElementById('item').src="image3/文物/阿不扎匕首.png";
  document.getElementById("big2").innerHTML='阿不扎匕首';
  document.getElementById("small2").innerHTML='武則天陪葬五寶之一，以阿不扎鼠兔的腿骨所製成，<br>據說擁有的遇難示警的功能。';
}
function get_item6() {
  document.getElementById('item').src="image3/文物/觀音像.png";
  document.getElementById("big2").innerHTML='吳道子觀音像';
  document.getElementById("small2").innerHTML='武則天陪葬五寶之一，出自畫聖吳道子之手，<br>傳說畫中觀音與武則天容貌極其相似。';
}
function get_item7() {
  document.getElementById('item').src="image3/文物/雙陸棋.png";
  document.getElementById("big2").innerHTML='雙陸棋';
  document.getElementById("small2").innerHTML='中國古代相當流行的一種賭博棋類，<br>連武則天、唐玄宗都相當喜歡玩雙陸。';
}
function get_item8() {
  document.getElementById('item').src="image3/文物/洛陽宮燈.png";
  document.getElementById("big2").innerHTML='洛陽宮燈';
  document.getElementById("small2").innerHTML='始於東漢，盛於隋唐，<br>隋唐之後每到元宵佳節洛陽家家都會高懸宮燈。';
}
function get_item9() {
  document.getElementById('item').src="image3/文物/日曆.png";
  document.getElementById("big2").innerHTML='日曆';
  document.getElementById("small2").innerHTML='最早始於唐朝皇曆，用於紀錄皇帝的言行，<br>後來民間紛紛仿效，成為日曆的雛型。';
}
function get_item10() {
  document.getElementById('item').src="image3/文物/火藥.png";
  document.getElementById("big2").innerHTML='火藥';
  document.getElementById("small2").innerHTML='最早起源於唐朝，是煉製長生不老藥而得到的副產品，<br>很大程度的改變了戰爭型態。';
}
function get_item11() {
  document.getElementById('item').src="image3/文物/蹴鞠.png";
  document.getElementById("big2").innerHTML='蹴鞠';
  document.getElementById("small2").innerHTML='是現代足球的原型，最早可追溯到戰國時代，<br>在唐朝比較是以娛樂的形式存在。';
}
function get_item12() {
  document.getElementById('item').src="image3/文物/大寫數字.png";
  document.getElementById("big2").innerHTML='大寫數字';
  document.getElementById("small2").innerHTML='武則天將記載錢糧數字的漢字改成了大寫，<br>以防止貪官竄改帳冊。';
}


// ---------------------------------密碼
var lock = document.getElementById("lock");

function check(){
  var lock = document.getElementById("lock");
    var password2=document.getElementById("b").value;
    if(password2 =="Tang"){
        lock.style.opacity = "1";
        b_prev.style.opacity = "1";
        b_next.style.opacity = "1";
    }
    }

    // function(){
    //   let prev = document.getElementById("b_prev");
    //   let next = document.getElementById("b_next");
    //   let img = document.getElementsById("lock")[0];
    //   let imgArr = ["image3/彩蛋/cg框框主畫面.png","image3/彩蛋/cg狄仁傑_0000_風華正茂.png","image3/彩蛋/狄仁傑插畫2.png","image3/彩蛋/如月圖3.png","image3/彩蛋/武則天插畫.png","image3/彩蛋/貴妃西居.png"];
    //   let index = 0;
    //   prev.onclick = function(){
    //     index --;
    //     if(index < 0){
    //       index = imgArr.length -1;
    //     }
    //     img.src = imgArr[index];
    //   };
      
    //   next.onclick = function()
    //   {
    //     index ++;
    //     if(index >imgArr.length -1)
    //       {
    //         index =0;
    //       }
    //     img.src = imgArr[index];
    //   };
    // };

    function change(){
      var btn1=document.getElementById("b_prev");
      var btn2=document.getElementById("b_next");
      var img=document.getElementById("lock");
      var imgarr=["image3/彩蛋/cg框框主畫面.png","image3/彩蛋/cg狄仁傑_0000_風華正茂.png","image3/彩蛋/狄仁傑插畫2.png","image3/彩蛋/如月圖3.png","image3/彩蛋/武則天插畫.png","image3/彩蛋/貴妃西居.png"];
      var index=0;               
      btn1.onclick=function(){    
          index--;
          if(index<0){
              index=imgarr.length-1;
          }
          img.src=imgarr[index];
      };
      btn2.onclick=function(){    
          index++;
          if(index>imgarr.length-1){
              index=0;
          }
          img.src=imgarr[index];
      };
  };
    