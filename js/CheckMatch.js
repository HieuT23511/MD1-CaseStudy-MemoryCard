let checkMatch = [];

function clickImg(i, j) {
    listImg[i][j].status = true; // Function onclick vào bất kì vị trí thẻ nào trong bảng, in lại thẻ đó (có hình ảnh) với status = true
    checkMatch.push(listImg[i][j]); // Push đối tượng thẻ được click vào mảng rỗng để truy xuất thuộc tính, phục vụ làm điều kiện checkMatch
    showTable();
    // Điều kiện Match và unMatch:
    if (checkMatch.length === 2) {
        if (checkMatch[0].name === checkMatch[1].name) {
            checkMatch[0].status = true;
            checkMatch[1].status = true;
            checkMatch = []; //Cho mảng trở về là rỗng để giữ điệu kiện so sánh 2 phần tử của mảng checkMatch được liên tục
        } else {
            checkMatch[0].status = false;
            checkMatch[1].status = false;
            checkMatch = [];
        }
    }
        // Điều kiện khi click nhiều hơn 2 thẻ, trong trường hợp click nhanh mà timeout delay k kịp chạy
    else if (checkMatch.length > 2) {
        checkMatch[0].status = false;
        checkMatch[1].status = false;
        checkMatch = [];
    }
    console.log(checkMatch)
    // Cài đặt timeout delay khi mở 2 thẻ unmatch sẽ in lại thẻ trắng sau 1s.
    setTimeout(() => {
        showTable();
    }, 1000)
}