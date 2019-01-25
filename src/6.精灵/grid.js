// 背景表格绘制方法
// color 绘制表格的颜色
// stepx 绘制的x轴间距
// stepy 绘制的y轴间距
// canvas 对象

function drawGrid(color,stepx,stepy,canvas){
  let con = canvas.getContext('2d');
  con.save();
  con.shadowColor = undefined;
  con.shadowOffsetX =0;
  con.shadowOffsetY = 0;
  con.strokeStyle = color;
  con.fillStyle = '#ffffff';
  con.lineWidth = 0.5;

  con.fillRect(0,0,canvas.width,canvas.height);

  for(let i = stepx + 0.5; i<canvas.width; i+=stepx){
      con.beginPath();
      con.moveTo(i,0);
      con.lineTo(i,canvas.height);
      con.stroke();
  }
  for(let i = stepy + 0.5; i<canvas.height; i+=stepy){
      con.beginPath();
      con.moveTo(0,i);
      con.lineTo(canvas.height,i);
      con.stroke();
  }
  con.restore();
}