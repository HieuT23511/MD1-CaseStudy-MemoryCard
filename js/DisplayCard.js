//Khai báo đối tượng Image với các thuộc tính: name - tên thẻ img/ status - trạng thái thẻ/ matchStatus - trạng thái khi match
class Image {
    name;
    status;
    matchStatus;

    constructor(name) {
        this.name = name;
        this.status = false;
        this.matchStatus = false;
    }
}
//Tạo một mảng 2 chiều, để in ra các thẻ dưới dạng table.
let listImg = [[], []];
let arrName = ['chuot', 'chim', 'chuot', 'chim'];
let nameImg = arrName.sort(() => Math.random() - 0.5);
let count = 0;
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        listImg[i][j] = new Image(nameImg[count]);
        count++
    }
}
//Function, điều kiện để in ra thẻ có nội dung ảnh và thẻ trắng (thẻ up)
function showTable() {
    let tableCard = '<table>'; //Tạo 1 table có 4hàgx4cột chứa các phần tử của mảng 2 chiều listImg
    for (let i = 0; i < listImg.length; i++) {
        tableCard += '<tr class="table">';
        for (let j = 0; j < listImg[0].length; j++) {
            let srcImg;
            if (listImg[i][j].status === true ) {
                srcImg = "img/" + listImg[i][j].name + ".png";
            } else {
                srcImg = "img/giphy.gif";
            }
            tableCard += `<td class="table"><img width="630" height="630" src=${srcImg} onclick="clickImg(${i},${j})" alt="error"></td>`;
        }
        tableCard += '</tr>';
    }
    tableCard += '</table>';
    document.getElementById('display').innerHTML = tableCard;
}
showTable();




