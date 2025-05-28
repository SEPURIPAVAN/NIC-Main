document.getElementById('registerBtn').addEventListener('click', function() {
            alert('Registration button clicked!');
            
        });

    
document.addEventListener('DOMContentLoaded', function() {
   
    const images = document.querySelectorAll('.feature-image, .image-column img');
    const zoomContainer = document.createElement('div');
    zoomContainer.className = 'image-zoom';
    document.body.appendChild(zoomContainer);
    
    images.forEach(img => {
        img.addEventListener('click', function() {
            
            document.querySelectorAll('body > *:not(.image-zoom)').forEach(el => {
                el.classList.add('blurred');
            });
            
            
            const zoomedImg = document.createElement('img');
            zoomedImg.src = this.src;
            zoomedImg.alt = this.alt;
            
         
            zoomContainer.innerHTML = '';
            zoomContainer.appendChild(zoomedImg);
            
           
            zoomContainer.classList.add('active');
        });
    });
    
   
    zoomContainer.addEventListener('click', function() {
        this.classList.remove('active');
        document.querySelectorAll('.blurred').forEach(el => {
            el.classList.remove('blurred');
        });
    });
    
   
    const sections = document.querySelectorAll('.section');
    
    function checkVisibility() {
        const windowHeight = window.innerHeight;
        const windowTopPosition = window.scrollY;
        const windowBottomPosition = windowTopPosition + windowHeight;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTopPosition = section.offsetTop;
            const sectionBottomPosition = sectionTopPosition + sectionHeight;
            
            if (
                (sectionBottomPosition >= windowTopPosition) &&
                (sectionTopPosition <= windowBottomPosition)
            ) {
                section.classList.add('clear');
                section.classList.remove('blurred');
            } else {
                section.classList.add('blurred');
                section.classList.remove('clear');
            }
        });
    }
    
   
    checkVisibility();
    
  
    window.addEventListener('scroll', checkVisibility);
    
   
    document.getElementById('registerBtn').addEventListener('click', function() {
        alert('Registration form will appear here!');
    });
});