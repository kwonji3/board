const boardTableBody = document.querySelector('#board-body'); // board-body 부분 가져오기
const editorForm = document.querySelector('#editor-form'); // editor-form 부분 가져오기
const titleInput = document.querySelector('#editor-title-input'); // editor-title-input 가져오기

    const BOARDLIST_LS = 'boardLists'; // boardLists 라는 KEY를 BOARDLIST_LS에 저장

    let author = '관리자'; // 작성자 변수
    console.log(titleInput.value)
   
    function onEditorFormSubmit(e) {
    e.preventDefault(); // a태그 페이지 이동 못하게 막는

    const title1 = titleInput.value; // editor 인풋텍스트에 적힌 titleInput 값 가져와서 title1에 저장
    const lists = JSON.parse(localStorage.getItem(BOARDLIST_LS));//
    
        

    if (!lists) { // lists 아니면?
        const objArr = []; // objArr라는 배열 생성
        objArr.push({ // 
       
        title1: `${title1}`, //title1에 있는 (input text에 적은) 댓글을 문자열로 바꿔서 title1에 저장
        author: `${author}`, // author 문자열로 바꿔 author에 저장
       
        });

        localStorage.setItem(BOARDLIST_LS, JSON.stringify(objArr)); //objArr를 로컬 스토리지에 저장
    } else {
        lists.push({
        
        title1: `${title1}`,
        author: `${author}`,
     
        });

        localStorage.setItem(BOARDLIST_LS, JSON.stringify(lists)); // lists를 로컬스토리지에 저장
    }

    titleInput.value = ''; //titleInput을 공백으로/
    titleInput.focus(); // title input text에 커서 이동 시킴
    window.location.reload(); //이렇게 하면 컴퓨터의 캐쉬에서 우선 파일을 찾아봅니다. 없으면 서버에서 받아옵니다.
     
    }


    function showBoardLists() {
    const lists = JSON.parse(localStorage.getItem(BOARDLIST_LS));
    console.log(lists)

    lists.forEach((list, index) => {
        
        console.log(list)
        console.log(index)

        if (index < 5) {  //댓글 수 5 미만일때
        const tr = document.createElement('tr'); //tr 요소
        tr.classList.add('board__content'); // tr에 board__content 추가

        const aTitle = document.createElement('th'); // a 태그 요소 => aTitle
        aTitle.href = '#'; //페이지 전환을 막기 위함 닻 역할
        aTitle.id = `link-to-content${index}`;

        console.log(aTitle.id) //link-to-content0

        const tdTitle = document.createElement('td');
        tdTitle.classList.add('board__content-column');
        tdTitle.textContent = list.title1;

        console.log(list.title1) // 안녕하세요

        aTitle.appendChild(tdTitle); //  <td class = "board__content-column">안녕하세요</td>
        
        const tdAuthor = document.createElement('td');
        tdAuthor.classList.add('board__content-author');
        tdAuthor.textContent = list.author;

      
        tr.appendChild(aTitle); //<a href ="#" id="link-to-content0">
                                    //<td class = "board__content-column">안녕하세요</td> </a>
        tr.appendChild(tdAuthor);
        
        boardTableBody.appendChild(tr); //<tr class=​"board__content">
                                    //​<a href=​"#" id=​"link-to-content1">​…​</a>​
                                    //<td class=​"board__content-column">​관리자​</td>​</tr>​

        } else if (index === 5) { // 댓글 수 5일때
        const boardIndexMax = Math.ceil(lists.length / 5);
        for (let i = 0; i < boardIndexMax; i++) {
            const indexContainer = document.querySelector('#index-container');

            const aIndex = document.createElement('a');
            aIndex.classList.add('board__index-link');

            const spanIndexText = document.createElement('span');
            spanIndexText.classList.add('board__index');
            spanIndexText.textContent = i + 1;

            aIndex.appendChild(spanIndexText);
            indexContainer.appendChild(aIndex);

            aIndex.addEventListener('click', () => {
            showBoardListsNewPage(i);
            });
        }
        }
    });
    }

    function showBoardListsNewPage(pageIndex) {

    boardTableBody.textContent = '';
    const lists = JSON.parse(localStorage.getItem(BOARDLIST_LS));
    const limitPage = pageIndex * 5;

    lists.forEach((list, index) => {

        if (index >= limitPage && index < limitPage + 5) {
        const tr = document.createElement('tr');
        tr.classList.add('board__content');

    
        const aTitle = document.createElement('a');
        aTitle.href = '#';
        aTitle.id = `link-to-content${index}`;

        const tdTitle = document.createElement('td');
        tdTitle.classList.add('board__content-column');
        tdTitle.textContent = list.title1;

        aTitle.appendChild(tdTitle);

        const tdAuthor = document.createElement('td');
        tdAuthor.classList.add('board__content-column');
        tdAuthor.textContent = list.author;

        tr.appendChild(aTitle);
        tr.appendChild(tdAuthor);


        boardTableBody.appendChild(tr);

        }
    });
    }

    editorForm.addEventListener('submit', onEditorFormSubmit);

    if (boardTableBody) {
   
    showBoardLists();
    
    }

    