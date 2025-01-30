document.addEventListener('DOMContentLoaded', () => {
    const trucsLink = document.getElementById('trucs-link');
    const contactLink = document.getElementById('contact-link');
    const supportLink = document.getElementById('support-link');
    const content = document.getElementById('content');
    const homeLink = document.getElementById('home-link');

    // Categories data structure
    const categories = {
        "sorted trucs": {
            id: "sorting",
            projects: {
                "alphabet sort": [
                    "trucs sorted in alphabetical order",
                    "https://www.youtube.com/embed/ORE4-dAFkg0",
                    "https://www.youtube.com/embed/pUJjjANEzG4",
                    "https://www.youtube.com/embed/eHESIwkZocQ",
                    "https://www.youtube.com/embed/8q2Vw-BkyC0",
                    "https://www.youtube.com/embed/UTs7C_yTqdY"
                ],
                "films triés par couleur": [
                    "movies sorted by color",
                    "https://www.youtube.com/embed/_vPYbt2kl5Q",
                    "https://www.youtube.com/embed/c4WDnTay2RY",
                    "https://www.youtube.com/embed/SBIYKCMT1dE",
                    "https://www.youtube.com/embed/zfxHS2qCF1w",
                    "https://www.youtube.com/embed/E5zWvNgKGN4",
                    "https://www.youtube.com/embed/BZKzrUHh7q4",
                    "https://www.youtube.com/embed/2Pm054RIP0k",
                    "https://www.youtube.com/embed/CknLdTVHDjM",
                    "https://www.youtube.com/embed/_0n8BL8_aqI"
                ],
                "Brian David Gilbert": [
                    "sorting everything Brian David Gilbert ever said in alphabetical order",
                    "https://www.youtube.com/embed/sf5nd7W27Vk",
                    '<a href="https://www.youtube.com/playlist?list=PLET6XGg-4DJO3-LDjxQW9uIjLBbgjmWJA">click here for a playlist of the 53 volumes</a>'
                ]
            }
        },
        "trucs bizarres": {
            id: "experiments",
            projects: {
                "ellipses":["every ellipses in Harry Potter And The Chamber Of Secrets (2002), Extended Cut",
                    "this one is blocked right now sadly",
                    "https://www.youtube.com/embed/Mk-A5LGNZ5U"
                ],
                "looking at pictures one pixel at a time":[
                    "looking at pictures one pixel at a time",
                    "these are made by looking at one pixel at a atime, 24 time per second.",
                    "The sound is also made using the pixel data.",
                    "https://www.youtube.com/embed/6M4vg7MtKjE",
                    "https://www.youtube.com/embed/RLMToV8CyEY",
                    "https://www.youtube.com/embed/4a2ThLN_V6U",
                    "https://www.youtube.com/embed/lk2RfidRLWY",
                    "https://www.youtube.com/embed/vEx7QJGR0Ig",
                    "https://www.youtube.com/embed/PtAvCLcIbnE",
                    "https://www.youtube.com/embed/IKhEpE4zhlQ",
                ],
                "time cube": [
                    "time cube",
                    "these effects are achieved by treating a video as a 3D stack of images, and reading through the stack at different angles",
                    "https://www.youtube.com/embed/oY70vKIAzzs",
                    "https://youtube.com/embed/-M-r15z0ckw",
                    "https://youtube.com/embed/YMAKNLIBk-w"
                ],
                "trailing frames": ["trailing frames",
                    "this effect is achieved by replacing each frame in a video by the average of all frame that came before it",
                    "https://www.youtube.com/embed/YSNAZx473GU"
                ],
                'twin-peaks': ['every episodes of "Twin Peaks: The Return" at the same time',
                    "https://www.youtube.com/embed/gNCGOAemzTo"
                ]
            }
        },
        "trucs réduits": {
            id: "reducing",
            projects: {
                "every images":
                    ["every single possible 100*100p image",
                    '<a href="every_image.html">this link</a> will take you to a black image.',
                    "24 times a second, the image will change, in such a way that, given enough time this page will display every 100 pixels by 100 pixels image that will ever exist",
                    "every frame, the top left pixel has his color value increased. It becomes a little more red, then green, then blue. ",
                    "once it is white, we increase the color value of the next pixel and start again",
                    "to see every images, you would need much, much longer than the lifetime of the universe. But if you could wait that long, you'd see everything.",
                    "this film started at the beginning of the universe, 13.8 billions years ago, which is why the first few pixels are already colored in",
                    "please be patient"
                ],
                "average image in a movie": [
                    "image moyenne d'un film",
                    "2001 A Space Odyssey, Stanley Kubrick, 1968",
                    "https://i.postimg.cc/fW1tt49f/2001-A-Space-Odyssey-1968-1080p-Blu-Ray-x264-YTS-AM-mp4.png",
                    "A Trip to the Moon, Georges Méliès, 1902 ",
                    "https://i.postimg.cc/h4XQt4fG/A-Trip-to-the-Moon-the-1902-Science-Fiction-Film-by-Georges-M-li-s-x-LVCh-RVf-Z74-mp4.png",
                    "An Autumn Afternoon, Yasujirō Ozu, 1962",
                    "https://i.postimg.cc/3xTk1g9y/An-Autumn-Afternoon-1962-Drama-Japan-1080p-BRRip-x264-Classics-mp4.png",
                    "Histoire de mes cheveux, Boris Lehman, 2010",
                    "https://i.postimg.cc/7Y7CSB18/Boris-Lehman-Histoire-de-mes-cheveux-2010-90-minutes-864512690-mp4.png",
                    "Calvaire, Fabrice Du Welz, 2004",
                    "https://i.postimg.cc/T3Jp4pHt/Calvaire-2004-1080p-WEBRip-x264-AAC5-1-YTS-MX-mp4.png",
                    "Casablanca, Michael Curtiz, 1942",
                    "https://i.postimg.cc/KY94mCbL/Casablanca-1942-70th-Anniv-1080p-Blu-Ray-x265-10bit-Tigole-mp4.png",
                    "Blood Tea and Red String, Christiane Cegavske, 2006",
                    "https://i.postimg.cc/MGZv2qCq/Christiane-Cegavske-Blood-Tea-And-Red-String-2006-mkv.png",
                    "Citizen Kane, Orson Welles, 1941",
                    "https://i.postimg.cc/ydkxxn6G/Citizen-Kane-1941-1080p-Blu-Ray-x265-10bit-Tigole-converted-mp4.png",
                    "Come And See, Elem Klimov, 1985",
                    "https://i.postimg.cc/gJQJZRn2/Come-And-See-1985-Criterion-1080p-Blu-Ray-x265-HEVC-AAC-SARTRE-mp4.png",
                    "E.T. The Extra-Terrestrial, Steven Spielberg, 1985",
                    "https://i.postimg.cc/sxW29Xh9/E-T-The-Extra-Terrestrial-1982-1080p-Blu-Ray-x264-YTS-AG-mp4.png",
                    "Full Metal Jacket, Stanley Kubrick, 1987",
                    "https://i.postimg.cc/664TNHm2/Full-Metal-Jacket-1987-1080p-Blu-Ray-x265-HDR-afm72-mkv.png",
                    "Grave of the Fireflies, Isao Takahata, 1988",
                    "https://i.postimg.cc/8P8ckh2y/Grave-of-the-Fireflies-1988-1080p-Blu-Ray-x265-Garshasp-mp4.png",
                    "Pinocchio, Guillermo del Toro, 2022",
                    "https://i.postimg.cc/J4bnssmR/Guillermo-Del-Toros-Pinocchio-2022-1080p-WEBRip-x264-AAC5-1-YTS-MX-mp4.png",
                    "Hero, Zhang Yimou, 2002",
                    "https://i.postimg.cc/L82sLm6L/Hero-2002-1080p-Molpol-converted-mp4.png",
                    "Chien de la casse, Jean-Baptiste Durand, 2023",
                    "https://i.postimg.cc/zG7Gk4VM/Junkyard-Dog-2023-1080p-AMZN-WEB-DL-DD5-1-H-264-MADSKY-mp4.png",
                    "Kung Fury, David Sandberg, 2015",
                    "https://i.postimg.cc/6QQ5bzZQ/KUNG-FURY-Official-Movie-HD-b-S5-P-LAqi-Vg-mp4.png",
                    "La Haine, Mathieu Kassovitz, 1995",
                    "https://i.postimg.cc/Ls04cfk3/La-Haine-1995-1080p-Blu-Ray-x264-AAC-5-1-POOP-mp4.png",
                    "Mulhollanb Drive, David Lynch, 2001",
                    "https://i.postimg.cc/Y9G2M9bK/Mulholland-Drive-2001-1080p-Blu-Ray-H264-AAC-RARBG-mp4.png",
                    "No Country For Old Men, Joel & Ethan Coen, 2007",
                    "https://i.postimg.cc/3Rs8RTcy/No-Country-For-Old-Men-2007-1080p-Br-Rip-x264-YIFY-mp4.png",
                    "Pig, Michael Sarnoski, 2021",
                    "https://i.postimg.cc/L5jHgbcx/Pig-2021-1080p-WEBRip-x264-AAC5-1-YTS-MX-mp4.png",
                    "Pulp Fiction, Quentin Tarantino, 1994",
                    "https://i.postimg.cc/44c40YYp/Pulp-Fiction-1994-1080p-Br-Rip-x264-YIFY-1-mp4.png",
                    "Rotting in the Sun, Sebastián Silva, 2023",
                    "https://i.postimg.cc/wTcq6ncv/Rotting-In-The-Sun-2023-1080p-WEBRip-x264-AAC-YTS-MX-mp4.png",
                    "Shrek, Andrew Adamson & Vicky Jenson, 2001",
                    "https://i.postimg.cc/0yV9Sm41/Shrek-2001-1080p-Blu-Ray-x264-YIFY-mp4.png",
                    "stalker, Andrei Tarkovsky, 1979",
                    "https://i.postimg.cc/cJ60BCqg/Stalker-mp4.png",
                    "The Grand Budapest Hotel, Wes Anderson, 2014",
                    "https://i.postimg.cc/pd7xGvx0/The-Grand-Budapest-Hotel-2014-1080p-BRRip-x264-AAC-JYK-mp4.png",
                    "The Birth of a Nation, D.W. Griffith, 1915",
                    "https://i.postimg.cc/856GxYzT/The-Birth-Of-A-Nation-1915-1080p-Blu-Ray-x264-YTS-LT-mp4.png",
                    "The Cook, the Thief, His Wife & Her Lover, Peter Greenaway, 1989",
                    "https://i.postimg.cc/D03hhcSL/The-Cook-the-Thief-His-Wife-Her-Lover-1989-1080p-Blu-Ray-x264-YIFY-mp4.png",
                    "The Holy Mountain, Alejandro Jodorowsky, 1973",
                    "https://i.postimg.cc/VL1wHDQc/The-Holy-Mountain-1973-REMASTERED-1080p-Blu-Ray-H264-AAC-LAMA-mp4.png",
                    "The Living End, Gregg Araki, 1992",
                    "https://i.postimg.cc/hPrnFTcQ/The-Living-End-1992-1080p-WEBRip-x264-AAC-YTS-MX-mp4.png",
                    "The Royal Tenenbaums, Wes Anderson, 2001",
                    "https://i.postimg.cc/W11vsz1W/The-Royal-Tenenbaums-2001-1080p-Blu-Ray-X264-AMIABLE-mkv.png",
                    "The Shining, Stanley Kubrick, 1980",
                    "https://i.postimg.cc/tgLQdztw/The-Shining-1980-US-1080p-Blu-Ray-H264-AAC-RARBG-mp4.png",
                    "Totally Fucked Up, Gregg Araki, 1993",
                    "https://i.postimg.cc/rwZLsTd8/Totally-Fucked-Up-1993-mkv.png",
                    "Wavelength, Michael Snow, 1993",
                    "https://i.postimg.cc/pd9MnS8K/Wavelength-1967-Michael-Snow-963-PSj-AHo48-mp4.png",
                    "Le Ravissement, Iris Kaltenbäck, 2023",
                    "https://i.postimg.cc/YjcHpzjQ/Torrent911-bz-Le-Ravissement-2023-FRENCH-1080p-WEB-H264-FW-mp4.png"
                ],
                "coriieeeeeeeeeeeeeeeeeeet": [
                    "coriieeeeeeeeeeeeeeeeeeet", "<b>coriieeeeeeeeeeeeeeeeeeet</b> est le mot moyen dans la langue française.",
                    "si on prend, la lettre moyenne en première position dans tous les mots, on obtient c, en deuxième o, en troisième r, etc...",
                    "<b>peuseeeeeeeetetttteneseit</b>, si on pondère selon la fréquence d'utilisation dans les films francophones.",
                    "et voilà à quoi ça ressemble si on écrit tous les mots en même temps: ",
                    "https://i.postimg.cc/523bPjKV/Blended-words-hd.jpg",
                ],
                "100000 years":["100 000 years of silence",
                    'in an <a href="https://www.mediafire.com/file/j3614rt6759o1ef/output_w64.rar/file">audio file</a>'],
                "music for busy people":["music for busy people", "an album for people who just dont have the free time to listen to music",
                    '<a href="https://www.youtube.com/playlist?list=PLET6XGg-4DJOTOf14BzMkQ5i8UigBuVu4">click here for the 62 tracks playlist</a>']
            }
        }
    };

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

    // Add the list after the TRUCS link
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
            
            // Close all other project lists
            document.querySelectorAll('.project-list').forEach(list => {
                if (list !== projectList) {
                    list.style.display = 'none';
                }
            });

            // Toggle the clicked category's project list
            projectList.style.display = projectList.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Project click handler
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = link.getAttribute('data-project');
            
            // Find the project in the categories
            let projectContent = null;
            for (const category of Object.values(categories)) {
                if (category.projects[projectId]) {
                    projectContent = category.projects[projectId];
                    break;
                }
            }

            if (!projectContent) {
                console.error(`Project ${projectId} not found`);
                return;
            }

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