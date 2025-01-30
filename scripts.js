import { projects } from './projects.js';

document.addEventListener('DOMContentLoaded', () => {
    const trucsLink = document.getElementById('trucs-link');
    const contactLink = document.getElementById('contact-link');
    const trucsList = document.getElementById('trucs-list');
    const content = document.getElementById('content');
    const projectLinks = document.querySelectorAll('.project-link');
    const homeLink = document.getElementById('home-link');

    homeLink.addEventListener('click', () => {
        content.innerHTML = `<p>je fais des trucs</p>`;
    });

    trucsLink.addEventListener('click', () => {
        trucsList.style.display = 'block';
        content.innerHTML = `<p>je fais des trucs</p>`;
    });

    contactLink.addEventListener('click', () => {
        trucsList.style.display = 'none';
        content.innerHTML = `<p>salut</p><p>tel: +32 468 37 84 06</p><p>mail: oliverigiuliano@outlook.com</p>`;
    });

    projectLinks.forEach(link => {
        link.addEventListener('click', () => {
            const projectNumber = link.getAttribute('data-project');
            const project = projects[projectNumber];
            content.innerHTML = '';

            project.forEach(item => {
                if (typeof item === 'string' && (item.includes('http') || item.includes('<'))) {
                    if (item.includes('youtube')) {
                        content.innerHTML += `<iframe src="${item}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                    } else if (item.endsWith('.png') || item.endsWith('.jpg') || item.endsWith('.jpeg')) {
                        content.innerHTML += `<img src="${item}" alt="Project Image">`;
                    } else {
                        content.innerHTML += item;
                    }
                } else {
                    content.innerHTML += `<p>${item}</p>`;
                }
            });

            document.querySelectorAll('img').forEach(img => {
                img.addEventListener('click', function() {
                    if (this.classList.contains('fullscreen')) {
                        this.classList.remove('fullscreen');
                    } else {
                        this.classList.add('fullscreen');
                    }
                });
            });
        });
    });
});
