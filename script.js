document.addEventListener('DOMContentLoaded', function() {
    var textboxContainer = document.getElementById('textboxContainer');
    var showButton = document.getElementById('showButton');
  
    showButton.addEventListener('click', function() {
        if (!showButton.classList.contains('disabled')) {
            var textbox = document.createElement('input');
            textbox.type = 'text';
            textbox.id = 'textbox';
            textbox.value = '/level297y94u3irhesdkf';
            textboxContainer.appendChild(textbox);
        }
    });
  });