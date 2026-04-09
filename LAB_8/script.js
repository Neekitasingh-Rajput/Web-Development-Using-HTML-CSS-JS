// ===== WAIT FOR DOM TO LOAD =====
document.addEventListener('DOMContentLoaded', function() {
    
    // Get elements
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');
    const imageTitle = document.getElementById('imageTitle');
    const customTooltip = document.getElementById('customTooltip');
    const tooltipTitle = customTooltip.querySelector('.tooltip-title');
    const tooltipDescription = customTooltip.querySelector('.tooltip-description');

    // ===== EVENT LISTENER 1: CLICK - Show Full Image =====
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked thumbnail
            this.classList.add('active');
            
            // Get full image URL and title from data attributes
            const fullImageUrl = this.getAttribute('data-full');
            const title = this.getAttribute('data-title');
            
            // Fade out effect
            mainImage.style.opacity = '0';
            
            // Wait for fade out, then change image
            setTimeout(() => {
                mainImage.src = fullImageUrl;
                imageTitle.textContent = title;
                
                // Fade in effect
                mainImage.style.opacity = '1';
            }, 300);
            
            console.log('Image clicked: ' + title);
        });
    });

    // ===== EVENT LISTENER 2: MOUSEOVER - Show Tooltip =====
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('mouseover', function(e) {
            // Get tooltip data
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');
            
            // Set tooltip content
            tooltipTitle.textContent = title;
            tooltipDescription.textContent = description;
            
            // Position tooltip near cursor
            customTooltip.style.left = e.pageX + 15 + 'px';
            customTooltip.style.top = e.pageY + 15 + 'px';
            
            // Show tooltip
            customTooltip.classList.add('show');
            
            console.log('Mouse over: ' + title);
        });
        
        // Update tooltip position as mouse moves
        thumbnail.addEventListener('mousemove', function(e) {
            customTooltip.style.left = e.pageX + 15 + 'px';
            customTooltip.style.top = e.pageY + 15 + 'px';
        });
    });

    // ===== EVENT LISTENER 3: MOUSEOUT - Hide Tooltip =====
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('mouseout', function() {
            // Hide tooltip
            customTooltip.classList.remove('show');
            
            console.log('Mouse left thumbnail');
        });
    });

    // Set first thumbnail as active on page load
    if (thumbnails.length > 0) {
        thumbnails[0].classList.add('active');
    }
});