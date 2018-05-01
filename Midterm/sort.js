function tablesort(n){ //성 정렬, 이름 정렬, 번호 정렬 총 3개만들기
  
    var table,  rows, switching, i, x, y,elementchange, dir, switchcount = 0;

    table  = document.getElementById("insertTable");
    switching = true;
   
     dir = "x"; 
   
      while (switching) {
      switching = false; 
      rows =  table.getElementsByTagName("tr"); //rows를 유사배열로만듬
     
        for (i = 1; i < (rows.length - 1); i++) {  
          elementchange = false;
          x = rows[i].getElementsByTagName("td")[n];
          y = rows[i + 1].getElementsByTagName("td")[n];

            if (dir  == "x") {//크기비교 x가 클때 
              if (x.innerHTML.toLowerCase()  > y.innerHTML.toLowerCase()) {
                elementchange= true;
                break; //for종료

                    }
                      } 

                else if (dir == "y") {//크기비교 y가 클때
                      if (x.innerHTML.toLowerCase()  < y.innerHTML.toLowerCase()) { 
                            elementchange= true; //elementchange = 엘리먼트 순서변경
                            break; //for종료
               }
             }
           }   
       if (elementchange) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);//rows[i+1]이라는 엘리먼트를 rows[i]위에 넣어라
          switching = true; 
          switchcount  ++; 
          } 
        else {
          if (switchcount == 0) {
                  dir = "y";
                  switching = true;
          }
        }
     }
}