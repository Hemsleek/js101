//selectors
const dropDownEl = document.querySelector('.drop-down')
const wrapperEl = document.querySelector(".wrapper")
const dropDownsEl = document.querySelectorAll(".drop-downs span")



console.log(dropDownsEl)
const dropDownsArr = Array.from(dropDownsEl)
console.log(dropDownsArr)

for (let i = 0; i < dropDownsArr.length; i++) {
    const optionText = dropDownsEl[i].textContent
    dropDownsEl[i].addEventListener('click', () => {
        dropDownEl.textContent = optionText
    })
}

//Event Listener/triggers
dropDownEl.addEventListener('click', () => {
    const wrapperClasses = Array.from(wrapperEl.classList)

    if (wrapperClasses.includes('active')) {
        wrapperEl.classList.remove('active')
    }
    else {
        wrapperEl.classList.add('active')
    }
})



