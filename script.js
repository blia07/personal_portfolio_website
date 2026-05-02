// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Navigation
    nav.classList.toggle('nav-active');

    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Burger Animation
    burger.classList.toggle('toggle');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        nav.classList.remove('nav-active'); // Close mobile menu if open
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Reveal Animation
const revealOnScroll = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Form Submission
// Contact form handler (guarded for missing form)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Get form data
        const formData = new FormData(contactForm);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formObject);
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Skill Tags Animation
const skillTags = document.querySelectorAll('.skill-tags span');

skillTags.forEach(tag => {
    tag.addEventListener('mouseover', () => {
        tag.style.transform = 'translateY(-5px)';
    });

    tag.addEventListener('mouseout', () => {
        tag.style.transform = 'translateY(0)';
    });
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const id = section.getAttribute('id');
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Project Modal Functionality - Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    
    const projectData = {
        guitar: {
            title: "Guitar Chord Learning Tool",
            date: "Summer 2025",
            description: "Used Mediapipe and OpenCV to track hand and finger positions for guitar chords in video, solving the problem of manual chord identification for beginners by providing real-time visual feedback.",
            tech: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
            mediaType: "none"
        },
        skincare: {
            title: "Skin Care App",
            date: "Summer 2025",
            description: "Built a Python application that uses GPT-4o to turn user descriptions of skin concerns into specific product recommendations. The app ensures the input matched the required format for the model and provides personalized skincare advice.",
            tech: ["Python", "GPT-4o", "API Integration"],
            mediaType: "video",
            mediaContent: "<iframe width='100%' height='400' src='https://www.youtube.com/embed/v7dEo6-XZmE?si=uu9TK6zVKeKgyoG6' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
        },
        parking: {
            title: "Machine Learning in Parking Lot System",
            date: "Spring 2025",
            description: "Developed a system using YOLOv11 and OpenAPR to automatically count cars and read license plates in a parking lot. This improved the speed and accuracy of monitoring compared to manual tracking, enabling real-time occupancy detection.",
            tech: ["Python", "YOLOv11", "OpenAPR", "Machine Learning", "Computer Vision"],
            mediaType: "video",
            mediaContent: "<iframe width='100%' height='400' src='https://www.youtube.com/embed/Qy-vnvGZLH0?si=xk7JTK6BFgFf3pHh' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
        },
        courses: {
            title: "School Course Management System",
            date: "Fall 2024",
            description: "Modified a Ruby on Rails website to manage a school courses database for authorized users. Implemented using Agile and Scrum methodologies with features for adding, editing, and viewing courses.",
            tech: ["Ruby on Rails", "SQL", "Agile", "Scrum"],
            mediaType: "none"
        },
        pihole: {
            title: "Pi-Hole Network",
            date: "Summer 2024",
            description: "Configured a Raspberry Pi 4 via Linux terminal and SSH to host a DNS filter, solving the problem of intrusive network ads by rerouting home traffic.",
            tech: ["Raspberry Pi", "DNS", "Linux", "Networking"],
            mediaType: "none"
        },
        music: {
            title: "Music Industry Database",
            date: "Spring 2024",
            description: "Optimized data storage and retrieval for 44 musicians, each of their albums, and instrument records by developing a database using SQLite.",
            tech: ["SQLite", "Database Design", "SQL"],
            mediaType: "none"
        },
        hydroponic: {
            title: "Hydroponic System – NASA MINDS",
            date: "Fall 2022 – Spring 2023",
            description: "Part of a team that designed and built an automated hydroponic system for the NASA MINDS competition. Created the pseudocode and programmed the motors for robotic hand movement that plants and waters the plants automatically.",
            tech: ["Robotics", "Pseudocode", "Embedded Systems", "Automation"],
            mediaType: "video",
            mediaContent: "<div style='display:flex; gap:10px;'><div style='flex:1;'><iframe width='100%' height='400' src='https://www.youtube.com/embed/nEl40HSrPpA?si=oFtV0_SRPM1jChaX' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div><div style='flex:1;'><iframe width='100%' height='400' src='https://www.youtube.com/embed/h5HB3YlMzt4?si=2mx9HstaX0B2W-UE' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div></div>"
        },
        arduino: {
            title: "Arduino Shield-Bot",
            date: "Summer 2021",
            description: "Assembled and programmed a functional robot capable of movement and obstacle avoidance using servo motors, ultrasonic sensor, and LEDs through the Arduino programming.",
            tech: ["Arduino", "C++", "Servo Motors", "Ultrasonic Sensors", "Robotics"],
            mediaType: "none"
        }
    };

    /*
     * Work modal data — same shape as projects where it helps:
     * - description: plain text in the modal (use for most jobs)
     * - descriptionHtml: optional rich HTML (e.g. heading + ul); overrides description when set
     * - modalEmployerLines: optional string[] shown above the title (e.g. school + program). If omitted, company alone is used.
     * - tech: string[] shown as tags (skills / tools for this role)
     * - mediaType: 'none' | 'image' | 'video' | 'placeholder' | 'slideshow'
     * - mediaContent: HTML when mediaType is image, video, or placeholder
     * - slideshowImages: [{ src, alt }, ...] when mediaType is 'slideshow' (paths under templates/)
     *   image example: "<img src='templates/work-vr-photo.jpg' alt='Lab' />"
     *   video example: same iframe pattern as projects in projectData
     */
    let activeWorkSlideshow = null;

    function escapeAttr(s) {
        return String(s)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;');
    }

    function buildWorkSlideshowHtml(images) {
        const first = images[0];
        const dots = images
            .map(function (_, i) {
                return (
                    '<button type="button" class="slideshow-dot' +
                    (i === 0 ? ' active' : '') +
                    '" data-slide-index="' +
                    i +
                    '" aria-label="Show image ' +
                    (i + 1) +
                    ' of ' +
                    images.length +
                    '"></button>'
                );
            })
            .join('');
        return (
            '<div class="work-media-slideshow">' +
            '<div class="slideshow-viewport">' +
            '<img class="slideshow-image" src="' +
            escapeAttr(first.src) +
            '" alt="' +
            escapeAttr(first.alt) +
            '" />' +
            '</div>' +
            '<button type="button" class="slideshow-btn slideshow-prev" aria-label="Previous image">&#8249;</button>' +
            '<button type="button" class="slideshow-btn slideshow-next" aria-label="Next image">&#8250;</button>' +
            '<div class="slideshow-dots">' +
            dots +
            '</div>' +
            '</div>'
        );
    }

    function initWorkSlideshow(root, images) {
        const imgEl = root.querySelector('.slideshow-image');
        const prevBtn = root.querySelector('.slideshow-prev');
        const nextBtn = root.querySelector('.slideshow-next');
        const dotBtns = root.querySelectorAll('.slideshow-dot');
        let idx = 0;

        function render() {
            imgEl.src = images[idx].src;
            imgEl.alt = images[idx].alt;
            dotBtns.forEach(function (d, j) {
                d.classList.toggle('active', j === idx);
            });
        }

        function go(delta) {
            idx = (idx + delta + images.length) % images.length;
            render();
        }

        function goTo(i) {
            idx = ((i % images.length) + images.length) % images.length;
            render();
        }

        prevBtn.addEventListener('click', function () {
            go(-1);
        });
        nextBtn.addEventListener('click', function () {
            go(1);
        });
        dotBtns.forEach(function (d) {
            d.addEventListener('click', function () {
                var i = parseInt(d.getAttribute('data-slide-index'), 10);
                goTo(i);
            });
        });

        activeWorkSlideshow = {
            go: function (delta) {
                go(delta);
            }
        };
    }

    const workData = {
        'vr-intern': {
            title: 'VR & Human Factors Research Intern',
            company: 'University of Texas Rio Grande Valley',
            modalEmployerLines: [
                'University of Texas Rio Grande Valley',
                'SEI PROGRAM'
            ],
            date: 'August 2025 – current',
            location: 'Edinburg, TX',
            descriptionHtml:
                '<h3 class="modal-subheading">Internship Description &amp; Projects</h3>' +
                '<ul class="modal-bullet-list">' +
                '<li>Developing a standalone C++ tool for a collaborative VR surgical simulation project by learning SimVascular workflows and extracting relevant source-code subroutines to convert .ctgr segmentations into lofted .vtp vascular surfaces.</li>' +
                '<li>Co-authored a paper accepted to the IISE Annual Conference 2026, contributing to survey design, Qualtrics and JavaScript-based data collection, and preliminary survey data analysis.</li>' +
                '<li>Created 3D environments in Unity to develop VR design skills and explore an independent research question currently in progress.</li>' +
                '<li>Reviewed and analyzed research findings with faculty to strengthen my ability to apply human factors and cognitive psychology principles to VR research and immersive healthcare simulation.</li>' +
                '</ul>' +
                '<h3 class="modal-subheading modal-subheading-spaced">Reflection on Skills Developed</h3>' +
                '<div class="modal-reflection">' +
                '<p>This internship strengthened both my technical and research skills by giving me experience with software development, VR design, and human-centered research. Through the SimVascular project, I\'m becoming more comfortable learning unfamiliar tools, reading existing source code, and understanding how vascular models can be prepared for immersive healthcare simulation. Developing the standalone C++ tool is challenging me to connect computational modeling workflows with a larger VR-based surgical training application.</p>' +
                '<p>I also gained experience with Unity by creating 3D environments and using them to explore a research question currently in progress. This helped me better understand how virtual environments can be designed for usability, interaction, and research purposes. In addition, my work on the IISE conference paper and Qualtrics survey improved my ability to design research studies, prepare data collection tools, and analyze survey data.</p>' +
                '<p>Overall, this experience helped me grow as a researcher by strengthening my ability to work across technical development, experimental design, and human factors research. I became more confident collaborating with faculty and peers, communicating research progress, and applying concepts from cognitive psychology and human factors to real-world VR and healthcare simulation problems.</p>' +
                '</div>',
            tech: [
                'C++',
                'SimVascular',
                'Unity',
                'VR',
                'Qualtrics',
                'JavaScript',
                'Human factors',
                'Cognitive psychology',
                'Survey design',
                'Research'
            ],
            mediaType: 'slideshow',
            slideshowImages: [
                {
                    src: 'templates/sei-work/simvascular.png',
                    alt: 'SimVascular workflow and vascular surface modeling'
                },
                {
                    src: 'templates/sei-work/manuscript.png',
                    alt: 'Manuscript and writing'
                },
                {
                    src: 'templates/sei-work/unity-work.png',
                    alt: 'Unity VR environment work'
                },
                {
                    src: 'templates/sei-work/presentation.jpeg',
                    alt: 'Research presentation'
                }
            ]
        },
        ta: {
            title: 'Teacher Assistant',
            company: 'University of Texas Rio Grande Valley',
            date: 'August 2024 – May 2025',
            location: 'Edinburg, TX',
            description:
                'Graded and provided detailed feedback on 70 students’ Digital Image Processing and C++ assignments by reviewing code, debugging, and offering personalized support during office hours and async communication.',
            tech: ['C++', 'Digital Image Processing', 'Grading', 'Mentoring'],
            mediaType: 'none'
        },
        tutor: {
            title: 'Student Academic Tutor',
            company: 'University of Texas Rio Grande Valley',
            date: 'February 2023 – December 2024',
            location: 'Brownsville and Edinburg, TX',
            description:
                'Assisted over 50 students per course with questions and assignments for Computer Science 2, C#, Assembly Language, Pre-Calculus, and College Algebra in English and Spanish.',
            tech: ['C++', 'C#', 'Assembly', 'Teaching', 'Bilingual support'],
            mediaType: 'none'
        }
    };

    function setModalMedia(mediaEl, entry) {
        activeWorkSlideshow = null;
        if (
            entry.mediaType === 'slideshow' &&
            entry.slideshowImages &&
            entry.slideshowImages.length
        ) {
            mediaEl.innerHTML = buildWorkSlideshowHtml(entry.slideshowImages);
            mediaEl.style.display = 'block';
            const root = mediaEl.querySelector('.work-media-slideshow');
            if (root) {
                initWorkSlideshow(root, entry.slideshowImages);
            }
            return;
        }
        if (entry.mediaType === 'video') {
            mediaEl.innerHTML = entry.mediaContent;
            mediaEl.style.display = 'block';
        } else if (entry.mediaType === 'image') {
            mediaEl.innerHTML = entry.mediaContent;
            mediaEl.style.display = 'block';
        } else if (entry.mediaType === 'placeholder') {
            mediaEl.innerHTML = '<div class="placeholder">' + entry.mediaContent + '</div>';
            mediaEl.style.display = 'block';
        } else {
            mediaEl.innerHTML = '';
            mediaEl.style.display = 'none';
        }
    }

    // Modal elements
    const modal = document.getElementById('project-modal');
    const workModal = document.getElementById('work-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDate = document.getElementById('modal-date');
    const modalMedia = document.getElementById('modal-media');
    const modalDescription = document.getElementById('modal-description');
    const modalTech = document.getElementById('modal-tech');

    const workModalTitle = document.getElementById('work-modal-title');
    const workModalEmployer = document.getElementById('work-modal-employer');
    const workModalLocation = document.getElementById('work-modal-location');
    const workModalDateOnly = document.getElementById('work-modal-date-only');
    const workModalMedia = document.getElementById('work-modal-media');
    const workModalDescription = document.getElementById('work-modal-description');
    const workModalTech = document.getElementById('work-modal-tech');

    function closeAllModals() {
        activeWorkSlideshow = null;
        if (modal) modal.style.display = 'none';
        if (workModal) workModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    document.querySelectorAll('.modal-close').forEach(function (btn) {
        btn.addEventListener('click', closeAllModals);
    });

    // Open modal when project is clicked
    document.querySelectorAll('.project-item').forEach(item => {
        item.addEventListener('click', function() {
            const projectKey = this.getAttribute('data-project');
            const project = projectData[projectKey];
            
            if (project) {
                if (workModal) workModal.style.display = 'none';
                modalTitle.textContent = project.title;
                modalDate.textContent = project.date;
                modalDescription.textContent = project.description;
                setModalMedia(modalMedia, project);
                modalTech.innerHTML = project.tech.map(function (t) {
                    return '<span>' + t + '</span>';
                }).join('');
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    function openWorkModal(key) {
        const job = workData[key];
        if (!job || !workModal) return;
        if (modal) modal.style.display = 'none';
        workModalTitle.textContent = job.title;
        if (workModalEmployer) {
            workModalEmployer.innerHTML = '';
            var employerLines =
                job.modalEmployerLines &&
                Array.isArray(job.modalEmployerLines) &&
                job.modalEmployerLines.length
                    ? job.modalEmployerLines
                    : job.company
                      ? [job.company]
                      : [];
            employerLines.forEach(function (line) {
                var row = document.createElement('div');
                row.className = 'work-company work-modal-employer-line';
                row.textContent = line;
                workModalEmployer.appendChild(row);
            });
        }
        if (workModalLocation) {
            workModalLocation.textContent = job.location || '';
        }
        if (workModalDateOnly) {
            workModalDateOnly.textContent = job.date || '';
        }
        if (job.descriptionHtml) {
            workModalDescription.innerHTML = job.descriptionHtml;
        } else {
            workModalDescription.textContent = job.description;
        }
        setModalMedia(workModalMedia, job);
        workModalTech.innerHTML = job.tech.map(function (t) {
            return '<span>' + t + '</span>';
        }).join('');
        workModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    document.querySelectorAll('.work-item').forEach(function (item) {
        function activate() {
            const key = item.getAttribute('data-work');
            if (key) openWorkModal(key);
        }
        item.addEventListener('click', activate);
        item.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                activate();
            }
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function (e) {
        if (e.target === modal || e.target === workModal) {
            closeAllModals();
        }
    });

    // Close modal with Escape; arrow keys advance work slideshow when open
    document.addEventListener('keydown', function (e) {
        const workOpen = workModal && workModal.style.display === 'block';
        if (workOpen && activeWorkSlideshow && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
            e.preventDefault();
            activeWorkSlideshow.go(e.key === 'ArrowLeft' ? -1 : 1);
            return;
        }
        if (e.key !== 'Escape') return;
        const projectOpen = modal && modal.style.display === 'block';
        if (projectOpen || workOpen) {
            closeAllModals();
        }
    });
});