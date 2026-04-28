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

    // Modal elements
    const modal = document.getElementById('project-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalDate = document.getElementById('modal-date');
    const modalMedia = document.getElementById('modal-media');
    const modalDescription = document.getElementById('modal-description');
    const modalTech = document.getElementById('modal-tech');

    // Debug: Check if elements exist
    console.log('Modal element:', modal);
    console.log('Modal close:', modalClose);
    console.log('Project items:', document.querySelectorAll('.project-item'));

    // Open modal when project is clicked
    document.querySelectorAll('.project-item').forEach(item => {
        item.addEventListener('click', function() {
            console.log('Project clicked:', this.getAttribute('data-project'));
            
            const projectKey = this.getAttribute('data-project');
            const project = projectData[projectKey];
            
            if (project) {
                modalTitle.textContent = project.title;
                modalDate.textContent = project.date;
                modalDescription.textContent = project.description;
                
                // Set media content
                if (project.mediaType === 'video') {
                    modalMedia.innerHTML = project.mediaContent;
                    modalMedia.style.display = 'block';
                } else if (project.mediaType === 'image') {
                    modalMedia.innerHTML = project.mediaContent;
                    modalMedia.style.display = 'block';
                } else if (project.mediaType === 'placeholder') {
                    modalMedia.innerHTML = '<div class="placeholder">' + project.mediaContent + '</div>';
                    modalMedia.style.display = 'block';
                } else if (project.mediaType === 'none') {
                    modalMedia.innerHTML = '';
                    modalMedia.style.display = 'none';
                }
                
                // Set tech tags
                modalTech.innerHTML = project.tech.map(function(t) { return '<span>' + t + '</span>'; }).join('');
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
});

// Dynamically Create Project Cards
const projectGrid = document.querySelector('.project-grid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-technologies">
            ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
        </div>
        <a href="${project.link}" class="project-link">View Project</a>
    `;
    projectGrid.appendChild(projectCard);
}); 