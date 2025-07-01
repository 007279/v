// 页面加载动画、返回顶部按钮、导航栏滚动高亮等基础交互功能

// 返回顶部按钮功能
document.addEventListener('DOMContentLoaded', function () {
    // 创建返回顶部按钮
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerText = '↑';
    backToTopBtn.id = 'backToTop';
    backToTopBtn.style.position = 'fixed';
    backToTopBtn.style.right = '30px';
    backToTopBtn.style.bottom = '30px';
    backToTopBtn.style.display = 'none';
    backToTopBtn.style.background = '#28a745';
    backToTopBtn.style.color = '#fff';
    backToTopBtn.style.border = 'none';
    backToTopBtn.style.borderRadius = '50%';
    backToTopBtn.style.width = '40px';
    backToTopBtn.style.height = '40px';
    backToTopBtn.style.fontSize = '24px';
    backToTopBtn.style.cursor = 'pointer';
    backToTopBtn.style.zIndex = '999';
    document.body.appendChild(backToTopBtn);

    // 显示/隐藏按钮
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    // 点击返回顶部
    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 联系表单简单校验与提示
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('感谢您的留言，我们会尽快联系您！');
            form.reset();
        });
    }
});

// 导航栏滚动高亮
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar ul li a');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (current && link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// 图片轮播功能
document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.gallery-slider');
    if (gallery) {
        const items = gallery.querySelectorAll('.gallery-item');
        const prevBtn = gallery.querySelector('.gallery-prev');
        const nextBtn = gallery.querySelector('.gallery-next');
        let current = 0;

        function showImage(index) {
            items.forEach((item, i) => {
                item.style.display = i === index ? 'block' : 'none';
                const img = item.querySelector('img');
                if (img) img.classList.toggle('active', i === index);
            });
        }

        prevBtn.addEventListener('click', function () {
            current = (current - 1 + items.length) % items.length;
            showImage(current);
        });

        nextBtn.addEventListener('click', function () {
            current = (current + 1) % items.length;
            showImage(current);
        });

        showImage(current);
    }
});