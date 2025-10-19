// main.js — data decoupled, original behavior preserved with event propagation fixes

document.addEventListener('DOMContentLoaded', () => {
  const contactLink = document.getElementById('contact-link');
  const supportLink = document.getElementById('support-link');
  const content = document.getElementById('content');
  const homeLink = document.getElementById('home-link');

  // Will hold structure matching original `categories` object
  const categories = {};

  // Load JSON data and initialize
  fetch('data.json')
    .then(res => { if (!res.ok) throw new Error('Failed to load data.json'); return res.json(); })
    .then(data => {
      // Transform data.json into `categories` shape
      Object.entries(data).forEach(([key, projects]) => {
        categories[key] = { id: key, projects: {} };
        projects.forEach(proj => {
          categories[key].projects[proj.title] = [proj.description, ...(proj.data || [])];
        });
      });

      // Build category list HTML (same as original)
      const categoryListHTML = `
        <ul class="category-list">
          ${Object.keys(categories).map(cat => `
            <li data-category="${cat}"><span class="category-label">${categories[cat].id}</span>
              <ul class="project-list" style="display:none;">
                ${Object.keys(categories[cat].projects).map(projId => `
                  <li class="project-link" data-project="${projId}">${projId}</li>
                `).join('')}
              </ul>
            </li>
          `).join('')}
        </ul>
      `;

      // Insert after TRUCS link
      homeLink.parentElement.insertAdjacentHTML('afterend', categoryListHTML);

      // Event listeners (identical to original)
      homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        content.innerHTML = `<p>je fais des trucs</p>`;
      });

      contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        content.innerHTML = `<p>salut</p><p>mail: oliverigiuliano@outlook.com</p>`;
      });

      supportLink.addEventListener('click', (e) => {
        e.preventDefault();
        content.innerHTML = `<p>merci :)</p><p><a href="https://ko-fi.com/gulino/">click here to help me make more stuff</a></p>`;
      });

      // Category click: toggle project-list
      document.querySelectorAll('.category-list > li').forEach(li => {
        li.addEventListener('click', (e) => {
          e.stopPropagation();
          const projectList = li.querySelector('.project-list');
          // hide others
          document.querySelectorAll('.project-list').forEach(pl => {
            if (pl !== projectList) pl.style.display = 'none';
          });
          projectList.style.display = projectList.style.display === 'none' ? 'block' : 'none';
        });
      });

      // Project click: load content without collapsing list
      document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', e => {
          e.stopPropagation();
          e.preventDefault();
          const projectId = link.dataset.project;
          let projectContent = null;
          for (const cat of Object.values(categories)) {
            if (cat.projects[projectId]) { projectContent = cat.projects[projectId]; break; }
          }
          if (!projectContent) { console.error(`Project ${projectId} not found`); return; }

          content.innerHTML = '';
          projectContent.forEach(item => {
            if (typeof item === 'string') {
              if (item.includes('youtube.com/embed')) {
                content.innerHTML += `<iframe src="${item}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
              } else if (item.match(/\.(png|jpe?g)$/i)) {
                content.innerHTML += `<img src="${item}" alt="Project Image">`;
              } else if (item.startsWith('<a') || item.startsWith('<b>')) {
                content.innerHTML += item;
              } else {
                content.innerHTML += `<p>${item}</p>`;
              }
            }
          });

          // Fullscreen toggle for images
          content.querySelectorAll('img').forEach(img => {
            img.addEventListener('click', function() {
              this.classList.toggle('fullscreen');
            });
          });
        });
      });
    })
    .catch(err => console.error('Error loading video data:', err));
});
