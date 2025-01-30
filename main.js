document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const leftPanel = document.querySelector('.left');

    menuToggle.addEventListener('click', () => {
        leftPanel.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024 && 
            !leftPanel.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            leftPanel.classList.remove('active');
        }
    });

    document.querySelectorAll('.left a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 1024) {
                leftPanel.classList.remove('active');
            }
        });
    });

    // Original functionality
    const trucsLink = document.getElementById('trucs-link');
    const contactLink = document.getElementById('contact-link');
    const supportLink = document.getElementById('support-link');
    const content = document.getElementById('content');
    const homeLink = document.getElementById('home-link');

    // Categories data structure (unchanged)
    const categories = { /* ... your existing categories object ... */ };

    // Create initial category list and add it to the page
    const categoryListHTML = `
        <ul class="category-list" style="display:none;">
            ${Object.entries(categories).map(([categoryName, category]) => `
                <li class="category-item">
                    <a href="#" class="category-link" data-category="${category.id}">${categoryName}</a>
                    <ul class="project-list" id="${category.id}-projects" style="display:none;">
                        ${Object.entries(category.projects).map(([projectId, project]) => `
                            <li>
                                <a href="#" class="project-link" data-project="${projectId}">${project[0]}</a>
                            </li>
                        `).join('')}
                    </ul>
                </li>
            `).join('')}
        </ul>
    `;

    trucsLink.insertAdjacentHTML('afterend', categoryListHTML);

    // Event Listeners
    homeLink.addEventListener('click', () => {
        content.innerHTML = `<p>je fais des trucs</p>`;
    });

    trucsLink.addEventListener('click', () => {
        const categoryList = document.querySelector('.category-list');
        categoryList.style.display = categoryList.style.display === 'none' ? 'block' : 'none';
        content.innerHTML = `<p>je fais des trucs</p>`;
    });

    contactLink.addEventListener('click', () => {
        document.querySelector('.category-list').style.display = 'none';
        content.innerHTML = `<p>salut</p><p>mail: oliverigiuliano@outlook.com</p>`;
    });

    supportLink.addEventListener('click', () => {
        document.querySelector('.category-list').style.display = 'none';
        content.innerHTML = `<p>merci :)</p><p><a href="https://en.tipeee.com/gulino/">click here to help me make more stuff</a>'</p>`;
    });

    // Category click handler
    document.querySelectorAll('.category-link').forEach(categoryLink => {
        categoryLink.addEventListener('click', (e) => {
            e.preventDefault();
            const categoryId = categoryLink.getAttribute('data-category');
            const projectList = document.getElementById(`${categoryId}-projects`);
            
            document.querySelectorAll('.project-list').forEach(list => {
                if (list !== projectList) {
                    list.style.display = 'none';
                }
            });

            projectList.style.display = projectList.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Project click handler
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = link.getAttribute('data-project');
            
            let projectContent = null;
            for (const category of Object.values(categories)) {
                if (category.projects[projectId]) {
                    projectContent = category.projects[projectId];
                    break;
                }
            }

            if (!projectContent) return;

            content.innerHTML = '';
            projectContent.forEach(item => {
                if (typeof item === 'string') {
                    if (item.includes('youtube.com/embed')) {
                        content.innerHTML += `<iframe src="${item}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                    } else if (item.endsWith('.png') || item.endsWith('.jpg') || item.endsWith('.jpeg')) {
                        content.innerHTML += `<img src="${item}" alt="Project Image">`;
                    } else if (item.startsWith('<a') || item.startsWith('<b>')) {
                        content.innerHTML += item;
                    } else {
                        content.innerHTML += `<p>${item}</p>`;
                    }
                }
            });

            document.querySelectorAll('img').forEach(img => {
                img.addEventListener('click', function() {
                    this.classList.toggle('fullscreen');
                });
            });
        });
    });
});