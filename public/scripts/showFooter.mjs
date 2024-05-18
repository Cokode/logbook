window.addEventListener('scroll', function() {
  // Calculate the distance between the bottom of the viewport and the bottom of the page
  const distanceToBottom = document.body.scrollHeight - window.innerHeight - window.scrollY;
  
  // Show the footer if the distance to the bottom is zero (i.e., at the end of the page)
  if (distanceToBottom <= 0) {
    console.log("I am here display is block");
    document.querySelector('.footer').style.display = 'block';
      
  } else {
    console.log("I am here display is not block");
    document.querySelector('.footer').style.display = 'none';
        
  }
});


