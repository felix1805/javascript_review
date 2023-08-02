//Write your pseduo code first! 
// c to f conversion formula 
// query click event
// collect value
const cToF = () => {
  const temp = Number(document.querySelector('input').value)
  const temp2 = temp*1.8+32
  document.querySelector('h2').innerText=temp2
}
// convert value
document.querySelector('h1').addEventListener('click',cToF)


// display value
// temp = (C*1.8)+32


 