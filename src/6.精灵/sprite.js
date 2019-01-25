//精灵对象
var Sprite = function(name, painter , behaviors){
  if(name !== undefined){
    this.name = name; // 精灵名称
  }
  if(painter !== undefined){
    this.painter = painter; // 精灵绘制器
  }
  
  
  this.left = 0; // 精灵左上角X坐标
  this.top = 0; // 精灵左上角Y坐标
  this.width = 10; // 精灵宽度
  this.height = 10; // 精灵高度
  this.velocityX = 0; // 精灵水平速度
  this.velocityY = 0; // 精灵垂直速度
  this.visible = true; // 精灵是否可见
  this.animating = false; // 精灵是否正在执行动画
  this.behaviors = behaviors || []; // 一个包含精灵行为对象的数组

  return this;
}

Sprite.prototype = {
  paint: function(con){
    if(this.painter !== undefined && this.visible){
      this.painter.paint(this, con); // 将精灵的绘制代理给绘制器来做  绘制器对象有一个paint方法用于绘制
    }
  },
  update: function(con,time){
    for(var i=0; i< this.behaviors.length; ++i){
      this.behaviors[i].execute(this, con, time);  // 执行精灵的行为
    }
  }
}