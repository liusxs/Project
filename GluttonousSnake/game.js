// 设计游戏类
class Game{
    constructor(select){
        // 地图
        this.map=document.querySelector(select)
        // 食物
        this.food = new Food(select)
        // 蛇
        this.snake = new Snake(select)
        // 定义计时器
        this.timer = 0
        this.start()
    }
    // 定义游戏开始的方法
    start(){
        this.timer = setInterval(() => {
            // 让蛇动起来
            this.snake.move()
            // 判断是否吃到食物
            if(this.snake.isEat(this.food.x,this.food.y)){
                // 吃到食物要变长，调用增加蛇头方法
                this.snake.createHead()
                // 食物的位置更新
                this.food.foodPos()
            }
            // 判断蛇是否死亡
            if(this.snake.isDie()){
                clearInterval(this.timer)
            }
        }, 500);
    }
    // 暂停
    pause(){
        clearInterval(this.timer)
    }
    // 重新开始
    restart(){
        window.location.reload()
    }
    // 改变方向的方法
    change(type){
        this.snake.direction = type
    }
}