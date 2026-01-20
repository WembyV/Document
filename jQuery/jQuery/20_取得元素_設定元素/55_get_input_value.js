// // 10. 如果是這樣寫的話，有錯誤訊息，為什麼？
// btnGet.onclick = function () {
//     console.log("OK");
// }

//A:因為引用順序的關係











































































// 11. 畫面準備好以後才開始執行
$(document).ready(function () {
    btnGet.onclick = function () {

        // 20. 取得 姓名欄位 (使用 JavaScript 的方式)
        // 21. 取得 姓名欄位 (使用 jQuery 的方式)
        // let x1 = userName.value;
        // let y1 = $('userName').prop('value');
        // console.log(x1);
        // console.log(x2);


        // let y1=$('userName').val(); //也可以

        // console.log(document.getElementById('userName').innerText);

        // 30. 取得 地址欄位 (使用 JavaScript 的方式)
        // 31. 取得 地址欄位 (使用 jQuery 的方式)
        // let x2 = address.value();
        // let y2 = $('#address').prop();
        // console.log(x1);
        // console.log(x2);

        // 40. 取得 年紀欄位 (使用 JavaScript 的方式)
        // //step a.抓到所有跟年紀有關的元素回來
        // let x3=document.getElementsByName("age");
        // //step b.逐一確認有沒有被勾選 checked屬性(HTML)
        // //版本一:一個一個自己寫
        // // console.log(x3[0].checked);//請複習v4皮卡丘
        // // console.log(x3[1].checked);//請複習v4皮卡丘
        // // console.log(x3[2].checked);//請複習v4皮卡丘
        // // console.log(x3[3].checked);//請複習v4皮卡丘
        // // 版本二:迴圈
        // for(let i=0;i<=3;i++){
        //     // console.log(x3[i].checked);
        //     if(x3[i].checked==true){
        //       console.log(x3[i].value);
              
        //     }
        // }
        //step c.有被勾選的那個元素，想知道元素的value屬性是甚麼

        

        // 41. 取得 年紀欄位 (使用 jQuery 的方式)
        //css:check pseudo class 
        let y3=$('input[name="age"]:checked').val();
        console.log(y3);
        
    }
});

