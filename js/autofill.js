
let search = document.querySelector('[id="search"]');
let results = document.querySelector('.results');
let resultsGoBtn = document.querySelector('.search-result-redirect');
let searchClearBtn = document.querySelector('.input-x');


const empSearch = {

  documentReady: (fn) => {

    if (document.readyState != 'loading') {
      fn();
    } else if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      document.attachEvent('onreadystatechange', function() {
        if (document.readyState != 'loading')
          fn();
      });
    }
  },

  locationFilter: (search_term) => {

    results.innerHTML = "";
    search.classList.remove('no-results');
    resultsGoBtn.setAttribute('href','#');

    empSearch.getDataKeys().then(datakeys => {

      let searchableTerms = Object.keys(datakeys.Employers).map((entry) =>  entry);

      let datafiltered = searchableTerms.filter((searchOption) => {
       
        let inOrder = searchOption.substring(0,search_term.length);
        return inOrder.toLowerCase().includes(search_term);

      });

      let cleaningOptions = [...new Set(datafiltered)];

      cleaningOptions.forEach((option) => {

        if(datakeys.Employers[option].url.length){
          
          let li = empSearch.createLi(datakeys.Employers[option].name);
          results.appendChild(li);
  
  
          li.querySelector('button').addEventListener('click', (e) => {
            empSearch.setRedirect(e.target,datakeys.Employers[option].url);
  
          });

        } else{
          empSearch.invalidSearch();
        }
  
  
      });
  
      if(!datafiltered.length) {
        
        empSearch.invalidSearch();

      }

    });
  

  },

  getDataKeys: async () => {

    let res = await fetch('./data/data.json');
    let resKeys = await res.json();

    return resKeys;

  },

  setRedirect: (btn,redirect) => {
    search.value = btn.innerHTML;
    resultsGoBtn.setAttribute('href', redirect);
    results.innerHTML = "";
  },

  invalidSearch: () => {
    results.innerHTML = "";
    search.classList.add('no-results');
    resultsGoBtn.setAttribute('href','#');
    
    let li = empSearch.createLi('Sorry, there are no matches for this');
    results.appendChild(li);
  },

  createLi: (btn_text) => {
    let li = document.createElement('li');
    li.innerHTML = `<button>${btn_text}</button>`;
    return li;
  }

}



empSearch.documentReady(() => {
  
  search.addEventListener('input', (event) => {
    
    if(!event.target.value && !search.classList.contains('no-results') || !event.target.value){
      results.innerHTML = '';
      resultsGoBtn.setAttribute('href','#');
      let li = empSearch.createLi(`Enter your employer's name`);
      results.appendChild(li);
      searchClearBtn.classList.remove('active');
      

    } else {
      empSearch.locationFilter(event.target.value.toLowerCase());
      searchClearBtn.classList.add('active');
      
    }
  
  });

  search.addEventListener('focus', (event) => {
    if(!event.target.value && !search.classList.contains('no-results')){
      results.innerHTML = '';
      let li = empSearch.createLi(`Enter your employer's name`);
      results.appendChild(li);
    }
  });

  searchClearBtn.addEventListener('click', (event) => {

    searchClearBtn.classList.remove('active');
    search.value = '';
    results.innerHTML = '';
    resultsGoBtn.setAttribute('href','#');
    let li = empSearch.createLi(`Enter your employer's name`);
    results.appendChild(li);
    searchClearBtn.classList.remove('active');

  });



});





