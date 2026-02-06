// BLUE
const target = document.querySelector('.typing-target');
if (target) {
    const cursor = document.querySelector('.cursor1');
    const text = target.getAttribute('data-text');
    let index = 0;
    let typing = false;

    function type() {
        if (index < text.length) {
            target.textContent += text.charAt(index);
            index++;
            setTimeout(type, 80);
        } else {
            cursor.style.animation = 'blink 0.9s steps(1, end) infinite';
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !typing) {
                typing = true;
                cursor.style.animation