//     //Spice meter variables
// const spiceTouchHot = document.querySelector('.selectionHot');
// const spiceTouchMedium = document.querySelector('.selectionMedium');
// const spiceTouchMild = document.querySelector('.selectionMild');
// const spiceBar = document.querySelector('.spiceBar');
// const spiceCircle = document.querySelector('.spiceBarCircle');
// const bigFlame = document.querySelector('.largerFlame');

// spiceTouchHot.addEventListener('click', function(){
//     document.documentElement.style.setProperty('--spiceColor', "rgb(235,78,55)");
//         document.documentElement.style.setProperty('--spiceAccent', 'rgb(247,145,129)');

//     bigFlame.classList.add('hotFilter');
//     bigFlame.classList.remove('mediumFilter');
//     bigFlame.classList.remove('mildFilter');
//     spiceBar.classList.add('spicePos3');
//     spiceBar.classList.remove('spicePos2');
//     spiceBar.classList.remove('spicePos1');
//   });

//   spiceTouchMedium.addEventListener('click', function(){
//     document.documentElement.style.setProperty('--spiceColor', 'rgb(223,117,0)');
//       document.documentElement.style.setProperty('--spiceAccent', 'rgb(240,183,119)');

//       bigFlame.classList.remove('hotFilter');
//       bigFlame.classList.add('mediumFilter');
//       bigFlame.classList.remove('mildFilter');
//     spiceBar.classList.remove('spicePos3');
//     spiceBar.classList.add('spicePos2');
//     spiceBar.classList.remove('spicePos1');
//   });

//   spiceTouchMild.addEventListener('click', function(){
//       document.documentElement.style.setProperty('--spiceColor', 'rgb(35,128,7)');
//       document.documentElement.style.setProperty('--spiceAccent', 'rgb(118, 196, 160)');

//     bigFlame.classList.remove('hotFilter');
//     bigFlame.classList.remove('mediumFilter');
//     bigFlame.classList.add('mildFilter');
//     spiceBar.classList.remove('spicePos3');
//     spiceBar.classList.remove('spicePos2');
//     spiceBar.classList.add('spicePos1');
//   });

// const slider = document.querySelector('.foodTypeSlider');
// const meals = document.querySelector('.meals-js');
// const sides = document.querySelector('.sides-js');
// const drinks = document.querySelector('.drinks-js');

//     //Food type slider functions
// meals.addEventListener('mouseup', function(){
//   meals.classList.add('bolded');
//   sides.classList.remove('bolded');
//   drinks.classList.remove('bolded');
//   slider.classList.add('sliderPos1');
//   slider.classList.remove('sliderPos2');
//   slider.classList.remove('sliderPos3');
// });
// sides.addEventListener('mouseup', function(){
//   meals.classList.remove('bolded');
//   sides.classList.add('bolded');
//   drinks.classList.remove('bolded');
//   slider.classList.add('sliderPos2');
//   slider.classList.remove('sliderPos1');
//   slider.classList.remove('sliderPos3');
// });
// drinks.addEventListener('mouseup', function(){
//   meals.classList.remove('bolded');
//   sides.classList.remove('bolded');
//   drinks.classList.add('bolded');
//   slider.classList.add('sliderPos3');
//   slider.classList.remove('sliderPos2');
//   slider.classList.remove('sliderPos1');
// });