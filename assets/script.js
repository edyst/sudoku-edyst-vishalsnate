const easy = [
    "1--489--673-----4------1295--712-6--5--7-3--8--6-957--9146------2-----378--512--4",
    "152489376739256841468371295387124659591763428246895713914637582625948137873512964"
  ];
  const medium = [
    "-2-6-8---58---97------4----37----5--6-------4--8----13----2------98---36---3-6-9-",
    "123678945584239761967145328372461589691583274458792613836924157219857436745316892"
  ];
  const hard = [
    "-2----------6----3-74-8---------3--2-8--4--1-6--5---------1-78-5----9---8------4-",
    "126437958895621473374985126457193862983246517612578394269314785548769231731852649"
  ];
var selectedCell;
var difficulty = easy[0];
var answer = [""];
let diffNum = 1;
window.onload = function () {
    startGame(); 
}
function changeDifficulty(n) {
    switch(n)
    {
        case 1 :  window.difficulty = easy[0];
        break;
        case 2 :  window.difficulty = medium[0];
        break;
        case 3 :  window.difficulty = hard[0];
        break;
        default: window.difficulty = easy[0];
    }
    diffNum = n;
    startGame();
}
function updateMove() {
    if(selectedCell)
    {
        document.addEventListener('keydown', (event) => {
            var name = event.key;
            if(name>0 && name<10 && cani(name))
            {
            selectedCell.textContent = name;
            addToArray(name);
            addToCache();          
            } else if(name==0){
                selectedCell.textContent = null;
                removeFromArray();
            }
          }, false);       
    }
    highSelect();
}
function startGame() {
    let board;    
    board = difficulty;    
    fillAns(difficulty);    
    createBoard(board);
    if(sessionStorage.getItem("cache")){
        var saved  = sessionStorage.getItem("cache");
        var diff = sessionStorage.getItem("diff");
        if(diff != diffNum){
        if(diff==1) {
            changeDifficulty(1);
        } else if(diff==2) {
            changeDifficulty(2);
        } else if(diff==3) {
            changeDifficulty(3);
        }
            } else {
            saved = saved.split(",");
            answer = saved;
            for(i=0;i<81;i++){
            if(saved[i]!="-" && saved[i]!=difficulty[i]){
            qA(".cell")[i].classList.add("modified"); 
            id(i).textContent = saved[i];
            }
        }
            }
        
    }
}
function highSelect() {
    for(let i=0;i<81;i++) {
    qA(".cell")[i].classList.remove("highlighted");
    qA(".cell")[i].classList.remove("dup");
    }
    let col = parseInt(selectedCell.id % 9);
    let row = parseInt(selectedCell.id / 9);
    let s = selectedCell.id;
    for(let i=0;i<81;i++){
        if(parseInt(selectedCell.textContent)==answer[i])
        id(i).classList.add("dup");
    }
    for(let i=col;i<col+73;i+=9)
    {
        if(i!=s) {
            id(i).classList.add("highlighted");
        }       
    } 
    for(let i=row*9;i<row*9+9;i++)
    {
        if(i!=s) {
            id(i).classList.add("highlighted");
        }
    }
    let x = 0;
    let y = 3;
    if( (-1<s && s<3) || (8<s && s<12) || (17<s && s<21) ) {    
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=s) {
                    id(j).classList.add("highlighted");
                }
                }
            }
        }
    x = 3;
    y = 6;
    if( (2<s && s<6) || (11<s && s<15) || (20<s && s<24) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=s) {
                    id(j).classList.add("highlighted");
                }
                }
            }
    }
    x = 6;
    y = 9;
    if( (5<s && s<9) || (14<s && s<18) || (23<s && s<27) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=s) {
                    id(j).classList.add("highlighted");
                }
                }
            }       
    }
    x=27;
    y=30;
    if( (26<s && s<30) || (35<s && s<39) || (44<s && s<48) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=s) {
                    id(j).classList.add("highlighted");
                }
                }
            }    
    }
    x = 30;
    y = 33;
    if( (29<s && s<33) || (38<s && s<42) || (47<s && s<51) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=s) {
                    id(j).classList.add("highlighted");
                }
                }
            }    
    }
    x = 33;
    y = 36;
    if( (32<s && s<36) || (41<s && s<45) || (50<s && s<54) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=s) {
                    id(j).classList.add("highlighted");
                }
                }
            }    
    }
    x = 54;
    y = 57;
    if( (53<s && s<57) || (62<s && s<66) || (71<s && s<75) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=s) {
                    id(j).classList.add("highlighted");
                }
                }
            }    
    }
    x = 57;
    y = 60;
    if( (56<s && s<60) || (65<s && s<69) || (74<s && s<78) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=s) {
                    id(j).classList.add("highlighted");
                }
                }
            }    
    }
    x = 60;
    y = 63;
    if( (59<s && s<63) || (68<s && s<72) || (77<s && s<81) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=s) {
                    id(j).classList.add("highlighted");
                }
                }
            }   
    }
}
function createBoard(board) {
    clearPrevious();
    let idCell = 0;
    for(let i=0;i<81;i++){
        let cell  = document.createElement("p");
        if(board.charAt(i)!="-") {
            cell.textContent = board.charAt(i);
            cell.classList.add("prefilled");
        }   else {
            cell.addEventListener("click", function(){
                if(cell.classList.contains("selected")) {
                    cell.classList.remove("selected");
                    selectedCell = null;
                } else {
                    for(let i=0;i<81;i++) {
                        qA(".cell")[i].classList.remove("selected");
                    }                  
                }
                cell.classList.add("selected");
                selectedCell = cell;
                updateMove();
            }); 
        }
        cell.id = idCell;
        idCell++;
        cell.classList.add("cell");
        if((cell.id > 17 && cell.id < 27) || (cell.id > 44 && cell.id < 54 )) {
            cell.classList.add("bottomBorder");
        }
        if( ((cell.id + 1) % 9 == 3) || ((cell.id + 1) % 9 == 6) ) {
            cell.classList.add("rightBorder");
        }
        if((cell.id + 1) % 9 == 0 || (cell.id + 1) % 9 == 0) {
              cell.classList.add("rightBorder");
         }
        if((cell.id + 2) % 9 == 2 || (cell.id + 2) % 9 == 2) {
            cell.classList.add("leftBorder");
       }
        if((cell.id > 71 && cell.id < 81)) {
            cell.classList.add("bottomBorder");
        }
        if((cell.id > -1 && cell.id < 9)) {
            cell.classList.add("topBorder");
        }
        id("board").appendChild(cell);
    }
}
function clearPrevious() {
    let cells = qA(".cell")
    for(let i=0;i<cells.length;i++)
    {
        cells[i].remove();
    }
}
function reset(){
    let diff = sessionStorage.getItem("diff");
    sessionStorage.clear();
    changeDifficulty(diff);
}
function fillAns(str) {
    for(let i=0;i<str.length;i++) {
        answer[i] = str[i];
    }  
}
function addToCache() {
    sessionStorage.setItem("cache",answer);
    sessionStorage.setItem("diff",diffNum);
}
function addToArray(num) {
    let index = q(".selected").id;
    answer.splice(index,1,num);
    q(".selected").classList.add("modified");
    duplicate(num);
}
function removeFromArray() {
    let index = q(".selected").id;
    answer.splice(index,1,"-");
    q(".selected").classList.remove("modified");
}
function duplicate(num) {
    for(let i=0;i<81;i++){
        if(num==answer[i])
        id(i).classList.add("dup");
    }
}
function validate() {
    let status= 1;
   for(let i=0;i<answer.length;i++)
   {
       let sum=0;
    
   for(let i=0;i<9;i++){
       if(answer!="-")
    sum+=parseInt(answer[i]);
       for(let j=i+9;j<81;j+=9){
        if(answer!="-")
           sum+=parseInt(answer[j]);
       }
   }
   if(sum!=405){
    status = 0;
   }  
    }
    if(status==1){
        endGame();
        return;
       } else {
        alert("Better luck next time");
       }   
}
function endGame() {
    sessionStorage.clear();
    for(let i=0;i<81;i++){
        id(i).classList.add("prefilled");      
    }
    alert("Done");
}
function cani(num) {
    let pass = 1;
    let col = parseInt(selectedCell.id % 9);
    let row = parseInt(selectedCell.id / 9);
    let s = selectedCell.id;
    for(let i=col;i<col+73;i+=9)
    {
        if(num==answer[i]){
            pass = 0;
            break;
        }
    }
    for(let i=row*9;i<row*9+9;i++)
    {
        if(num==answer[i]){
            pass = 0;
            break;
        }
    }
    let x = 0;
    let y = 3;
    if( (-1<s && s<3) || (8<s && s<12) || (17<s && s<21) ) {    
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(num==answer[j]){
                    pass = 0;
                    break;
                }
                }
            }
        }
    x = 3;
    y = 6;
    if( (2<s && s<6) || (11<s && s<15) || (20<s && s<24) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(num==answer[j]){
                    pass = 0;
                    break;
                }
                }
            }
    }
    x = 6;
    y = 9;
    if( (5<s && s<9) || (14<s && s<18) || (23<s && s<27) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(num==answer[j]){
                    pass = 0;
                    break;
                }
                }
            }       
    }
    x=27;
    y=30;
    if( (26<s && s<30) || (35<s && s<39) || (44<s && s<48) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(num==answer[j]){
                    pass = 0;
                    break;
                }
                }
            }    
    }
    x = 30;
    y = 33;
    if( (29<s && s<33) || (38<s && s<42) || (47<s && s<51) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(num==answer[j]){
                    pass = 0;
                    break;
                }
                }
            }    
    }
    x = 33;
    y = 36;
    if( (32<s && s<36) || (41<s && s<45) || (50<s && s<54) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(num==answer[j]){
                    pass = 0;
                    break;
                }
                }
            }    
    }
    x = 54;
    y = 57;
    if( (53<s && s<57) || (62<s && s<66) || (71<s && s<75) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(num==answer[j]){
                    pass = 0;
                    break;
                }
                }
            }    
    }
    x = 57;
    y = 60;
    if( (56<s && s<60) || (65<s && s<69) || (74<s && s<78) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(num==answer[j]){
                    pass = 0;
                    break;
                }
                }
            }    
    }
    x = 60;
    y = 63;
    if( (59<s && s<63) || (68<s && s<72) || (77<s && s<81) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(num==answer[j]){
                    pass = 0;
                    break;
                }
                }
            }   
    }
    return pass;
}
function id(id) {
    return document.getElementById(id);
}
function q(selector) {
    return document.querySelector(selector);
}
function qA(selector) {
    return document.querySelectorAll(selector);
}
function printSession() {
    console.log(sessionStorage.getItem("cache"));
    console.log(sessionStorage.getItem("diff"));  
}