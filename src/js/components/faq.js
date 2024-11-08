const faqItems = document.querySelectorAll('.faq__item')


if(faqItems.length > 0){
  faqItems.forEach(f => {
    const body = f.querySelector('.f-item__body')
    const btn = f.querySelector('.f-item__btn')

    btn.addEventListener('click', e => {
      let isActive = btn.classList.toggle('active')
      body.style.maxHeight = isActive ? body.scrollHeight + 'px' : null
    })
  })
}
