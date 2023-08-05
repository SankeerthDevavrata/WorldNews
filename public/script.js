

document.addEventListener('DOMContentLoaded', () => {
  function handleDynamicTemplateClick(event) {
    const clickedElement = event.target;

    // Traverse up the DOM hierarchy until a parent div with 'dynamic-template' class is found.
    const dynamicTemplateDiv = findDynamicTemplateParent(clickedElement);

    if (dynamicTemplateDiv) {
      const apiURL = dynamicTemplateDiv.dataset.url;
      if (apiURL) {
        window.open(apiURL, '_blank');
      } else {
        console.error('API URL not found in data attribute.');
      }
    }
  }

  // Function to find the parent div with 'dynamic-template' class.
  function findDynamicTemplateParent(element) {
    let currentElement = element;
    while (currentElement && !currentElement.classList.contains('dynamic-template')) {
      currentElement = currentElement.parentElement;
    }
    return currentElement;
  }

  document.addEventListener('click', handleDynamicTemplateClick);
});
