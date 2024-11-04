const showMoreBtn = document.getElementById('showMoreBtn');
const hiddenBlocks = document.querySelectorAll('.hidden');
const buttonText = document.getElementById('buttonText');
const arrow = showMoreBtn.querySelector('.arrow');
let isShowingMore = false;

showMoreBtn.addEventListener('click', () => {
    hiddenBlocks.forEach(block => {
        block.style.display = isShowingMore ? 'none' : 'block';
    });
    buttonText.textContent = isShowingMore ? 'Show More' : 'Show Less';
    isShowingMore = !isShowingMore;
    
    // Переворачиваем стрелочку
    arrow.classList.toggle('rotate', isShowingMore);
});
