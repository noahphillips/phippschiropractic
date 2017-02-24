// import fullPage.js
import * as fullpage from './public/scripts/lib/fullPage.min.js'

document.addEventListener('DOMContentLoaded', (event) => {

  // home page scroll
  let scrollPage = document.querySelector('#fullpage');

  if(scrollPage) {
    fullpage.initialize('#fullpage', {
      //navigation
      'menu': '#nav',
      // 'menu': 'false',
      'anchors':['home', 'about', 'appointment'],
      'navigation': false,
      'navigationPosition': 'left',
      'navigationColor': null,
      'navigationTooltips': [],
      'slidesNavigation': false,
      'slidesNavPosition': 'bottom',
      'scrollBar': false,

      //scrolling
      'css3': false,
      'scrollingSpeed': 700,
      'autoScrolling': false,
      'easingcss3': 'ease',
      'loopHorizontal': true,
      'touchSensitivity': 5,

      //Accessibility
      'keyboardScrolling': true,
      'recordHistory': true,

      //design
      'controlArrows': true,

      //Custom selectors
      'sectionSelector': '.section',
      'slideSelector': '.slide',


      //events
      'afterLoad': null,
      'onLeave': null,
      'afterRender': null,
      'afterResize': null,
      'afterReBuild': null,
      'afterSlideLoad': null,
      'onSlideLeave': null
    });
  }
});
