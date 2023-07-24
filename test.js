
const superFunction = (selector) => {
   const list = document.querySelectorAll(selector)
   for(let i = 0; i < list.length; i++){
      const item = list[i]
      setTimeout(()=> {
         item.style.background = "black"
      }, 500 * i)
   }
}
superFunction(".mySelector")
