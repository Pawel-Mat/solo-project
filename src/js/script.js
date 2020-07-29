/* global Chart */

const hamburger = document.querySelector('.mobile-menu .hamburger');
const navigation = document.querySelector('.mobile-menu .navigation');
console.log(navigation);
hamburger.addEventListener('click', function(e){
  e.preventDefault();
  hamburger.classList.toggle('hamburger-active');
  navigation.classList.toggle('navigation-active');
});

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3
    datasets: [{
      // 4
      label: 'Signups',
      // 5
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      // 6
      data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
      // 7
      hidden: true,
    }]
  },
});
console.log(chart);

function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});

document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal();
  }
});

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal();
  }
});

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

const yourManager = document.querySelectorAll('.manager-box');

for (let manager of yourManager){
  manager.addEventListener('click', function(){
    openModal('#chatWithManager');
  });
}
// const thisApp = this;
const pages = document.querySelector('#pages').children;
const navLinks = document.querySelectorAll('a');
const idFromHash = window.location.hash.replace('#/', '');

initPages();
function initPages(){

  let pageMatchingHash = pages[0].id;

  for (let page of pages){
    if(page.id == idFromHash){
      pageMatchingHash = page.id;
      break;
    }
  }

  activatePage(pageMatchingHash);

  for (let link of navLinks){
    link.addEventListener('click', function(event){
      const clickedElement = this;
      event.preventDefault();

      /*  get page id from href attribute */
      const id = clickedElement.getAttribute('href').replace('#', '');
      
      /* run thisApp.activatePage with that id */
      activatePage(id);
      /* change URL hash */
      window.location.hash = '#/' + id;
    });
  }
}

function activatePage(pageId){
  // const thisApp = this;
  /* add class "active" to matchig pages, remove from non-matching */
  for (let page of pages){
    if (page.id == pageId){
      page.classList.add('active');
      page.classList.remove('in-active');
    } else if (page.id != pageId){
      page.classList.add('in-active');
      page.classList.remove('active');
    }
  }
  /* add class "active" to matchig links, remove from non-matching */
  for (let link of navLinks){
    link.classList.toggle('active',
      link.getAttribute('href') == '#' + pageId
    );
  }
}

