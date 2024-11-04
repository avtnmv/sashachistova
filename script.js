const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

// Устанавливаем количество элементов для анимации
root.style.setProperty("--marquee-elements", marqueeContent.children.length);

// Дублируем элементы для создания бесконечного скролла
for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
