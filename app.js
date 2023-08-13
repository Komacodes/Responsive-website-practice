// const section = document.querySelectorAll('.section');
// const secBtns = document.querySelectorAll('.controls');
// const secBtn = document.querySelectorAll('.control');
// const allSections = document.querySelectorAll('.main-content');

// function pageTransitions(){
//     // Button click active class
//     for( let i=0; i<secBtn.length; i++){
//           secBtn[i].addEventListener('click',function(){
//             let currentBtn = document.querySelectorAll('.active-btn');
//             currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
//             this.className += ' active-btn';  
//         })
//     }
//     // // Section Active
//          allSections.addEventListener('click',(e) =>{
//           const id = e.target.dataset.id;
//           if(id){
//             // remove selected from other btn
//             secBtns.forEach((btn) => {
//                 btn.classList.remove('active')
//             })
//             e.target.classList.add('active')
//             // hide other sections
//             section.forEach((section)=>{
//                 section.classList.remove('active')
//             })
//             const element = document.getElementById(id);
//             element.classList.add('active');
//         }}
    
//          )}
// pageTransitions();
const section = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls .control');
const allSections = document.querySelector('.main-content'); // Change to querySelector

function pageTransitions() {
    // Button click active class
    for (let i = 0; i < secBtns.length; i++) {
        secBtns[i].addEventListener('click', function () {
            const currentBtn = document.querySelector('.controls .active-btn');
            currentBtn.classList.remove('active-btn');
            this.classList.add('active-btn');
            const id = this.dataset.id;
            section.forEach((section) => {
                section.classList.remove('active');
            });
            const element = document.getElementById(id);
            element.classList.add('active');
        });
    }
}

pageTransitions();

const isTrue = true ==[];
const isFalse = true ==![];
console.log(isTrue + isFalse);

