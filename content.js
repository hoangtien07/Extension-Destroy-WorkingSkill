const nextSlideBtn = document.querySelectorAll('.ld-content-action')[1]
if (!nextSlideBtn.querySelector('span.ld-text')) {
    const time = document.querySelector('.learndash_timer')
    if (time) time.style.display = 'none'
    setInterval(function() {
        let NodeList = document.querySelectorAll('.learndash_mark_complete_button')
        if (NodeList.length == 2) {
            NodeList[1].click()
            console.log('skip slide bottom')
        } else if (NodeList.length == 1) {
            let skipButton = document.querySelector('.learndash_mark_complete_button')
            if (skipButton.getAttribute("disabled")) skipButton.removeAttribute("disabled")
            skipButton.click()
            console.log('skip slide top')
        } else {
            let backHome = document.querySelectorAll('.ld-content-action')[3]
            window.location = backHome.querySelector('a').href
            console.log('back home')
        }
    }, 5000)
} else if (nextSlideBtn.querySelector('span.ld-text').innerHTML === 'Bài học tiếp theo') {
    setTimeout(function() { nextSlideBtn.querySelector('a.ld-button').click() }, 1500)
    console.log('next slide')
}