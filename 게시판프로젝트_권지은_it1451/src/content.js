
let title="제목"
let name="작성자"
let date="날짜"
let content="내용"


const URLSearch = new URLSearchParams(location.search);

let article= [{
     // info 아티클1 [0]
    title: "고양이가 먹으면 안되는 음식", 
    name: "관리자", 
    date: "2020.11.16", 
    content: "고양이는 초콜릿, 다양한 과자류, 견과류를 먹으면 안되고 우유와 또한 포도와 사람이 먹는 참치캔도 안됩니다. 각별히 주의하시길 바랍니다."
},{
   // info 아티클2 [1]
    title: "집사라면 알아야할 고양이의 특징", 
    name: "관리자", 
    date: "2020.11.16", 
    content: "고양이는 털이 많이 빠지고 고양이만의 특별한 화장실을 마련해줘야 합니다. 좌변기에 빠지면 위험하기 때문입니다. 고양이가 강아지보다 목욕을 덜해도 되긴 하지만 양치는 해줘야 합니다. 그리고 고양이의 취약한 질병을 알아야합니다. 고양이는 치료가 어렵기 때문입니다."
},
{
    // info 아티클3 [2]
    title: "가정교배나 번식업에 관한 글", 
    name: "관리자", 
    date: "2020.11.16", 
    content: "내용"
},
{
   // info 아티클4 [3]
    title: "고양이가 좋아하는 장난감", 
    name: "관리자", 
    date: "2020.11.16", 
    content: "내용"
},
{
    // info 아티클5 [4]
    title: "사람에게 대하는 고양이의 행동", 
    name: "관리자", 
    date: "2020.11.16", 
    content: "내용"
},
{
    // adopt 아티클1 [5]
    title: "페르시안 고양이 입양보내요.", 
    name: "관리자", 
    date: "2020.11.16", 
    content: "내용"
},
{
    // adopt 아티클2 [6]
    title: "생후 2개월 고양이 입양하실분!", 
    name: "관리자", 
    date: "2020.11.16", 
    content: "내용"
},
{
    // adopt 아티클3 [7]
    title: "입양", 
    name: "관리자", 
    date: "2020.11.16", 
    content: "내용"
},
{
    // qa 아티클1 [8]
    title: "며칠 전부터 고양이가 아파요..", 
    name: "관리자", 
    date: "2020.11.16", 
    content: "내용"
},
{
    // adopt 아티클2 [9]
    title: "고양이 캣닢 추천해주세요!", 
    name: "관리자", 
    date: "2020.11.16", 
    content: "내용"
}]

// array.push(article);
// console.log("ddddd")
// console.log(localStorage.getItem("지은"))

localStorage.setItem("지은",JSON.stringify(article)); // 저장하기

let storage = document.getElementById("title");
let storage1 = document.getElementById("name");
let storage2 = document.getElementById("date");
let storage3 = document.getElementById("content");

 
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


var patId = getParameterByName('key');
console.log(patId)

function ShowArticle0(i){
 
        // console.log("함수 실행 완료")
        storage.innerHTML = "";
        storage.innerHTML += "" + article[i]["title"];
        storage1.innerHTML += "" + article[i]["name"];
        storage2.innerHTML += "" + article[i]["date"];
        storage3.innerHTML += "" + article[i]["content"];

}

 ShowArticle0(patId);

   