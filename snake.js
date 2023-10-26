//Ở đây ta tạo ra bộ khung chứa game
let canvas = document.getElementById('game');
let context = canvas.getContext('2d');
let grid = 16;
let score = 0;
// khởi tạo đối tượng rắn là 1 ô vuông
let snake = {
    x: 0, //vị trí của snake theo hướng x,y
    y: 0,
    dx: grid, //hướng di chuyển theo phương x hoặc y,ở đây khi start game
    //snake sẽ di chuyển theo x direction với value = 16
    dy: 0,
    cells: [],
    maxCells: 1 // độ dài rắn ban đầu
};
//bắt sự kiện bàn phím ấn xuống
document.addEventListener('keydown', function(e) {
    // lọc sự kiện keydown để rắn không di ngược lại
    if (e.which === 37 && snake.dx === 0) {
        snake.dx = -grid;
        snake.dy = 0;
    }
    else if (e.which === 38 && snake.dy === 0) {
        snake.dy = -grid;
        snake.dx = 0;
    }
    else if (e.which === 39 && snake.dx === 0) {
        snake.dx = grid;
        snake.dy = 0;
    }
    else if (e.which === 40 && snake.dy === 0) {
        snake.dy = grid;
        snake.dx = 0;
    }
});
