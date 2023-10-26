function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
// game loop
function loop() {
    //hàm này giống như setTimeout, sẽ gọi lại hàm loop khi loop thực thi xong
    requestAnimationFrame(loop);
    // vòng lặp trò chơi chậm xuống còn 15 khung hình/giây
    if (++count < 12) {
        return;
    }
    count = 0;
    context.clearRect(0,0,canvas.width,canvas.height);
    snake.x += snake.dx;// mỗi loop rắn sẽ di chuyển thêm 1dx đơn vị
    snake.y += snake.dy;
    // khi snake đụng tường sẽ chạy lại từ tường đối diện
    if (snake.x < 0) {
        snake.x = canvas.width - grid;
    }
    else if (snake.x >= canvas.width) {
        snake.x = 0;
    }
    if (snake.y < 0) {
        snake.y = canvas.height - grid;
    }
    else if (snake.y >= canvas.height) {
        snake.y = 0;
    }
    // Phương thức unshift sẽ thêm một hoặc nhiều phần tử vào đầu mảng
    snake.cells.unshift({x: snake.x, y: snake.y});
    // thêm 1 ô vuông phía trc thì phải remove 1 cái phía sau để snake move dc.
    if (snake.cells.length > snake.maxCells) {
        snake.cells.pop();

    }
    // draw táo
    context.fillStyle = 'red';
    context.fillRect(apple.x, apple.y, grid-1, grid-1);
    // draw rắn
    context.fillStyle = 'yellow';
    snake.cells.forEach(function(cell, index) {
        context.fillRect(cell.x, cell.y, grid-1, grid-1);
        // rắn ăn táo
        if (cell.x === apple.x && cell.y === apple.y) {
            snake.maxCells++;
            apple.x = getRandomInt(0, 25) * grid;
            apple.y = getRandomInt(0, 25) * grid;
            score += 10
            document.getElementById("score1").innerHTML = 'Score : ' + score
        }
        if(score > 40) {
            count +=0.5 ;
        }
        // check va chạm khi rắn cắn vào đuôi
        for (let i = index + 1; i < snake.cells.length; i++) {

            // va chạm thì reset game(chơi lại)
            if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
                snake.x = 160;
                snake.y = 160;
                snake.cells = [];
                snake.maxCells = 4;
                snake.dx = grid;
                snake.dy = 0;
                apple.x = getRandomInt(0, 25) * grid;
                apple.y = getRandomInt(0, 25) * grid;
                alert('ĐIỂM CỦA BẠN LÀ !!' + score)
                window.location.reload()
                return;
            }
        }
    });
}
requestAnimationFrame(loop);