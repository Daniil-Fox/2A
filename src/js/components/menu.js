const menu = document.querySelector('.menu')

if(menu){
  const menuBtn = document.querySelector('.header__burger')

  menuBtn.addEventListener('click', e => {
    window.scrollTo(0,0)
    let isActive = menuBtn.classList.toggle('active')
    if(isActive){
      menu.style.display = 'block'
      document.body.style.overflow = 'hidden'
      setTimeout(() => {
        menu.classList.add('active')
      }, 10)
    } else {
      menu.classList.remove('active')
      document.body.style.overflow = null
      setTimeout(() => {
         menu.style.display = null
      }, 300)
    }
  })
}
