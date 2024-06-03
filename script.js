document.addEventListener('DOMContentLoaded', (event) => { 
    /* Waits for the DOM to be fully loaded */
    const squares = document.querySelectorAll('.square'); 
    /* Selects all elements with the class 'square' */
    
    squares.forEach(square => { /* Iterates over each square */
        square.addEventListener('mouseover', () => { /* Adds mouseover event listener */
            square.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.5)'; 
            /* Adds a box shadow on hover */
        });
        
        square.addEventListener('mouseout', () => { /* Adds mouseout event listener */
            square.style.boxShadow = 'none'; /* Removes the box shadow when not hovering */
        });
    });
});
