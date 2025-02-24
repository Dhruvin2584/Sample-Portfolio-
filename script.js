// const $ = require('prompt-sync')
// $(document).ready(function () {
//     let hamberger = document.querySelector('.hamberger');
//     let times = document.querySelectorAll('.times');
//     let mobileNavBar = document.querySelectorAll('.mobile-nav');

//     hamberger.addEventListener('click', function () {
//         mobileNavBar.classList
//     });

//     times.addEventListener('click', function () {
//         mobileNave.classList.add('close')
//     });

// });

(function () {
    let hamburger = document.querySelector('.hamberger');
    let times = document.querySelectorAll('.times');
    let mobileNavBars = document.querySelectorAll('.mobile-nav');

    hamburger.addEventListener('click', function () {
        mobileNavBars.forEach(nav => nav.classList.toggle('open'));
    });

    times.forEach(time => {
        time.addEventListener('click', function () {
            mobileNavBars.forEach(nav => nav.classList.remove('open'));
        });
    });
})();