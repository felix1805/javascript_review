//Create a mouse object that has four properties and three methods
let mouse = {}
mouse.brand = 'Razer'
mouse.color = 'black'
mouse.model = 'lx110'
mouse.buttons = 4
mouse.wireless = true

mouse.leftClick = function(){
  console.log('left click')
}
mouse.rightClick = function(){
  console.log('right click')
}
mouse.scroll = function(){
  console.log('scrolling')
}
let mouse2 = {}
mouse2.brand = 'Razer'
mouse2.color = 'white'
mouse2.model = 'lx1190'
mouse2.buttons = 2
mouse2.wireless = true

mouse2.leftClick = function(){
  console.log('left clicking')
}
mouse2.rightClick = function(){
  console.log('right clicking')
}
mouse2.scroll = function(){
  console.log('scrolling faster')
}

function MakeMouse(){
  this.brand = mouseBrand
  this.color = mouseColor
  this.model = mouseModel
  this.buttons = mouseButtons
  this.wireless = true

  this.leftClick = function(){
    console.log('left clicking')
  }
  this.rightClick = function(){
    console.log('right clicking')
  }
  this.scroll = function(){
    console.log('scrolling')
  }
}
