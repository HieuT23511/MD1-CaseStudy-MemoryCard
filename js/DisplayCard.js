class Image {
    name;
    status;
    gg;

    constructor(name) {
        this.name = name;
        this.status = false;
        this.gg = false;
    }

    getName() {
        return this.name;
    }
}

let listImg = [[], [], [], []];
let nameImg = ['chuot', 'chim', 'buom', 'coc', 'ghost', 'nuoc', 'rong', 'sau', 'chuot', 'chim', 'buom', 'coc', 'ghost', 'nuoc', 'rong', 'sau'];
let count = 0
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        listImg[i][j] = new Image(nameImg[count]);
        count++
    }
}
function showTable() {
    let tableCard = '<table border="1" cellspacing="1" width="500">'
    for (let i = 0; i < listImg.length; i++) {
        tableCard += '<tr>';
        for (let j = 0; j < listImg[0].length; j++) {
            let srcImg;
            if (listImg[i][j].status === true || listImg[i][j].gg == true) {
                srcImg = "img/" + listImg[i][j].name + ".png"

            } else {
                srcImg = "img/giphy.gif"
            }
            tableCard += `<td><img width="630" height="630" src=${srcImg} onclick="clickImg(${i},${j})" alt="error"></td>`
        }
    }
    document.getElementById('display').innerHTML = tableCard;
}

showTable();
// let clickCount = 0;
let checkDup = [];

function clickImg(i, j) {
    listImg[i][j].status = true;
    checkDup.push(listImg[i][j])
    showTable();
    if (checkDup.length === 2) {
        if (checkDup[0].name === checkDup[1].name) {
            checkDup[0].gg = true
            checkDup[1].gg = true
            checkDup = []
        } else {
            checkDup[0].status = false;
            checkDup[1].status = false;
            checkDup = []
        }

    } else if (checkDup.length > 2){
        checkDup[0].status = false;
        checkDup[1].status = false;
        checkDup = []

    }
    console.log(checkDup)

    setTimeout(() => {
        showTable();
    } , 1000)


    //         showTable();
    //     }
    //     showTable()
    // }, 2000)
}


