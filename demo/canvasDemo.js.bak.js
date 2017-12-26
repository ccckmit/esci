var j6 = require('j6')

function main () {
  c6.drawCanvas('#chart1', function (ctx, canvas) {
    ctx.fillText('Hello Canvas!', 10, 50)
  })
  c6.drawCanvas('#chart2', function (ctx, canvas) {
    var r = c6.steps(0, 10, 0.3)
    var x = r.sin().add(1).mul(100)
    var y = r.cos().add(1).mul(100)
    c6.drawPath(ctx, x, y)
  })
  c6.drawCanvas('#chart3', function (ctx, canvas) {
    var t = c6.steps(0, 50, 0.1)
    var r = t.add(5)
    var x = t.sin().add(r).mul(10)
    var y = t.cos().add(r).mul(10)
    c6.drawPath(ctx, x, y)
  })
  c6.drawCanvas('#chart4', function (ctx, canvas) {
    var t = c6.steps(0, 50, 0.1)
    var r = t.add(5)
    var x = t.sin().mul(100).add(r.mul(10))
    var y = t.cos().mul(100).add(r.mul(10))
    c6.drawPath(ctx, x, y)
  })  
  c6.drawCanvas('#chart5', function (ctx, canvas) {
    var t = c6.steps(0, 50, 0.1)
    var r = t.add(5)
    var x = t.sin().mul(r.mul(10).add(50)).add(r.mul(10))
    var y = t.cos().mul(r.mul(10).add(50)).add(r.mul(10))
    c6.drawPath(ctx, x, y)
  })  
/*  
  c6.drawCanvas('#chart4', function (ctx, canvas) {
    for (var i=0; i<10000; i++) {
      var x+=h*a*(y-x),               // and pass new coords
      var y+=h*(x*(b-z)-y),           // calculate new values
      var z+=h*(x*y-c*z)
    }
  })
*/  
  c6.view()
}

main()
