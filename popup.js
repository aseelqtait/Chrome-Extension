document.addEventListener('DOMContentLoaded', function() {
    var inputBtn = document.getElementById('input-btn');
    var tabBtn = document.getElementById('tab-btn');
    var deleteBtn = document.getElementById('delete-btn');
    var ulEl = document.getElementById('ul_el');
    var inputEl = document.getElementById('input_el');
  
    // Add event listeners for button clicks
    inputBtn.addEventListener('click', function() {
      var listItem = document.createElement('li');
      listItem.textContent = inputEl.value;
      ulEl.appendChild(listItem);
      inputEl.value = '';
    });
  
    tabBtn.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var listItem = document.createElement('li');
        listItem.textContent = tabs[0].url;
        ulEl.appendChild(listItem);
      });
    });
  
    deleteBtn.addEventListener('click', function() {
      ulEl.innerHTML = '';
    });
  });
  