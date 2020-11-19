// let txtID = "아이디"
// let txtPW = "비밀번호"

// let sto_txtID = document.getElementById("txtID");
// let sto_txtPW = document.getElementById("txtPW");

// const admin = "admin1"

// let login = {
//  txtID: "관리자",
//  txtPW : "0000"
// } 

let ok = false;

function SaveStorage() {

   
    // localStorage.setItem("admin1",JSON.stringify(login)); // 저장하기
    // console.log(localStorage.getItem("admin1"))
    

    
    localStorage["UserID"] = txtID.value;    // 로컬 스토리지에 데이타를 저장한다
    localStorage["UserPW"] = txtPW.value;    // 로컬 스토리지에 데이타를 저장한다
    ShowStorage();

    document.getElementById("txtID").style.display = 'none';
    document.getElementById("txtPW").style.display = 'none';
    document.getElementById("btn").style.display = 'none';
}

function ShowStorage() {
    ok = true;
    let storage = document.getElementById("divStorage");
    storage.innerHTML = "";
    storage.innerHTML += "어서오세요!" + localStorage["UserID"] + " 님";
   
}
function login() {
    
    if(ok == true){
        
        window.location.href="cat_adopt.html";
        ok = false;
    }
    else{
        alert("로그인을 해주세요");
       
    }
  }
  