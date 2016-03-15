(function(){
  if(document.addEventListener){
    this.addEvent = function(elem, type, fn){
      elem.addEventListener(type, fn, false);
    }
  }else if(document.attachEvent){
    this.addEvent = function(elem, type, fn){
      elem.attachEvent('on'+ type, fn, false);
    }
  }
})();

function addSticky() {
  var doc = document;
  var sticky = doc.querySelector('.sticky');
  var thresholdTop = sticky.getBoundingClientRect().top;
  var placeholder = doc.createElement('div');
  var search = document.querySelector('#search');
  placeholder.style.width = sticky.offsetWidth + 'px';
  placeholder.style.height = sticky.offsetHeight + 'px';
  placeholder.classList.add('hide');
  sticky.parentElement.insertBefore(placeholder, sticky);
  var hasFixed = false;
  addEvent(window, 'scroll', function() {
    if (!hasFixed && (window.scrollY || document.documentElement.scrollTop) >= thresholdTop) {
      placeholder.classList.remove('hide');
      sticky.classList.add('fixed');
      moveSearch();
      hasFixed = 1;
    }
    if (hasFixed && (window.scrollY || document.documentElement.scrollTop) < thresholdTop) {
      sticky.classList.remove('fixed');
      placeholder.classList.add('hide');
      moveSearchBack();
      hasFixed = 0;
    }
  }, false);
  function moveSearch(){
    search.classList.add('fix');
    sticky.querySelector('.pull-right').style.cssText = 'margin-right:300px';
    search.style.cssText = 'right: calc(100% - 1180px);z-index: 40;';
  }
  function moveSearchBack(){
    search.classList.remove('fix');
    sticky.querySelector('.pull-right').style.cssText = '';
    search.style.cssText = '';
  }
}


function filterPlaceHolder() {
  var cates = document.querySelector('.categories');

  addEvent(cates, 'click', function(e) {
    var target = e.target;
    var cate;
    var active = cates.querySelector('.active');
    var placeholder = document.querySelector('.shoper-cate .placeholder');
    if (isChildrenOf(target, cates)) {
      cate = isChildrenOfClass(target, 'cate');
      if (cate && cate.querySelector('.cate-more')) {
          [].forEach.call(cates.querySelectorAll('.cate-more'), function(elem){
              elem.classList.add('hide');
          })
        cate.querySelector('.cate-more').classList.remove('hide');
          placeholder.classList.remove('hide');
          if(active)active.classList.remove('active');
          cate.classList.add('active');
      }else{
          [].forEach.call(cates.querySelectorAll('.cate-more'), function(elem){
              elem.classList.add('hide');
          })
          placeholder.classList.add('hide');
          if(active)active.classList.remove('active');
      }

    }
  }, false);

}

function isChildrenOfClass(elem, classname) {
  while (elem) {
    if (elem.classList.contains(classname)) {
      return elem;
    } else {
      elem = elem.parentElement;
    }
  }
}

function isChildrenOf(elem, parent) {
  while (elem) {
    if (elem == parent) {
      return parent;
    } else {
      elem = elem.parentElement;
    }
  }
}

addEvent(window ,'DOMContentLoaded', function() {
  addSticky();
  filterPlaceHolder();
}, false);
