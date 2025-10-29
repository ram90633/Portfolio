
document.addEventListener('DOMContentLoaded', () => {
    // --- DATA STORE ---
    const taglines = ["Data Science Enthusiast", "Full Stack Developer", "Machine Learning Explorer", "Problem Solver", "Innovation Driver", "Tech Visionary"];
    const navigation = [{ name: 'Home', id: 'home', icon: 'Home' }, { name: 'About', id: 'about', icon: 'User' }, { name: 'Education', id: 'education', icon: 'GraduationCap' }, { name: 'Experience', id: 'experience', icon: 'Briefcase' }, { name: 'Projects', id: 'projects', icon: 'Code' }, { name: 'Contact', id: 'contact', icon: 'Contact' }];
    const projects = [{ title: "Fake Currency Detection System", description: "Advanced CNN-based machine learning model for detecting counterfeit Indian currency notes with 95%+ accuracy using TensorFlow and computer vision techniques.", tech: ["Python", "TensorFlow", "OpenCV", "CNN", "Image Processing"], github: "https://github.com/ram90633/fake-currency-detection", live: "#", image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=500", category: "Machine Learning", featured: true }, { title: "MOOC Certificate Prediction using Ensemble ANN", description: "Predicts the semester in which students achieve certification using ensemble learning with ANN, Random Forest, AdaBoost, and Stacking techniques.", tech: ["Python", "Scikit-learn", "ANN", "Random Forest", "AdaBoost", "Stacking"], github: "https://github.com/ram90633/mooc-prediction", live: "#", image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=500", category: "Data Science" }, { title: "Multi-Class Animal Image Recognition", description: "CNN-based deep learning model for classifying images across 90 different animal species with high accuracy using TensorFlow and Keras.", tech: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV", "NumPy"], github: "https://github.com/ram90633/animal-classification", live: "#", image: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=500", category: "Deep Learning" }, { title: "Interactive Data Visualization Dashboard", description: "Comprehensive EDA dashboard with interactive visualizations for uncovering patterns, correlations, and trends in complex datasets.", tech: ["Python", "Pandas", "Plotly", "Matplotlib", "Seaborn", "Dash"], github: "https://github.com/ram90633/data-viz-dashboard", live: "#", image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=500", category: "Data Analytics" }];
    const contactReasons = ["Job Opportunity", "Internship Opportunity", "Collaboration", "Mentorship", "Project Discussion", "General Inquiry", "Other"];
    const cgpaData = [{ semester: 1, sgpa: 8.5, cgpa: 8.5 }, { semester: 2, sgpa: 8.33, cgpa: 8.42 }, { semester: 3, sgpa: 9.08, cgpa: 8.64 }, { semester: 4, sgpa: 8.16, cgpa: 8.52 }, { semester: 5, sgpa: 9.71, cgpa: 8.76 }, { semester: 6, sgpa: 9.36, cgpa: 8.84 }, { semester: 7, sgpa: null, cgpa: null }, { semester: 8, sgpa: null, cgpa: null }];
    const experienceData = [
        {
            role: "IT Operations Intern",
            company: "MyGate",
            logo: "https://i.ytimg.com/vi/zUwQGbrnjZE/maxresdefault.jpg",
            date: "May 2025 – Jun 2025",
            location: "Bangalore, India",
            points: ["Developed a Google ChatBot that reduced internal query resolution time, improving productivity with a response time of 10 seconds", "Automated 5+ operational workflows using ERP tools, saving over 30 manual hours per month and increasing process efficiency by 25%", "Optimized internal ticketing and resource tracking processes, reducing issue resolution time by 20%"],
            skills: ['ChatBot Development', 'ERP Automation', 'Process Optimization', 'Workflow Management'],
            color: 'blue'
        },
        
        {
            role: "Data Management Intern",
            company: "DEV CHEF Solution Pvt. Ltd.",
            logo: null,
            date: "Dec 2024 – Jan 2025",
            location: "Remote",
            points: ["Processed and validated 10,000+ records in MS Excel, improving dataset accuracy by 95% for client reporting", "Streamlined data workflows, reducing weekly reporting time by 25% and enabling faster cross-team operations"],
            skills: ['Data Processing', 'Excel Advanced', 'Data Validation', 'Workflow Optimization'],
            color: 'green'
        },
        {
            role: "Community Member",
            company: "Meta Developer Communities",
            logo: "https://media.licdn.com/dms/image/v2/D560BAQFcOoOMREtoww/company-logo_200_200/company-logo_200_200/0/1695927119216/meta_developers_communities_gitam_visakhapatnam_logo?e=2147483647&v=beta&t=rn5ZdOvB1rfMmtYxESrOdaPXk4CBytXIk8slWEsMkOc",
            date: "Active Member",
            location: "GITAM Visakhapatnam",
            points: ["Developed and curated content for workshops and events to facilitate knowledge sharing and skill development, enhancing community participation and engagement", "Collaborated with fellow developers to organize technical sessions and coding workshops for students"],
            skills: ['Community Building', 'Content Creation', 'Workshop Development', 'Technical Mentoring'],
            color: 'purple'
        }
    ];
    const myInfoSkills = [
        { text: "Python & Machine Learning", icon: "Code" },
        { text: "SQL & DBMS", icon: "Database" },
        { text: "Deep Learning", icon: "BrainCircuit" },
        { text: "Data Visualization", icon: "BarChart3" },
        { text: "Flask & Streamlit", icon: "Layers" }
    ];

    // --- STATE & DOM ELEMENTS ---
    let activeSection = 'home';
    let isMenuOpen = false;
    const sections = { home: document.getElementById('home-section'), about: document.getElementById('about-section'), education: document.getElementById('education-section'), experience: document.getElementById('experience-section'), projects: document.getElementById('projects-section'), contact: document.getElementById('contact-section') };
    const desktopNav = document.getElementById('desktop-nav');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const cgpaModal = document.getElementById('cgpa-modal');
    
    // --- ICON SVGs ---
    const icons = { 
        Home: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`, 
        User: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`, 
        GraduationCap: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`, 
        Briefcase: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`, 
        Code: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>`, 
        Contact: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"/><rect width="18" height="18" x="3" y="4" rx="2"/><circle cx="12" cy="10" r="2"/><line x1="8" x2="8" y1="2" y2="4"/><line x1="16" x2="16" y1="2" y2="4"/></svg>`, 
        Menu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`, 
        X: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`, 
        ExternalLink: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>`, 
        TrendingUp: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
        MapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
        Mail: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
        Phone: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
        LinkedIn: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
        Database: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
        BrainCircuit: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.993.142"/><path d="M12 5a3 3 0 1 1 5.993.142"/><path d="M17.5 8.5c.33.14.66.28 1 .4"/><path d="M12 15a3 3 0 1 0-5.993.142"/><path d="M12 15a3 3 0 1 1 5.993.142"/><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/><path d="M12 21v-3"/><path d="M12 9V6"/><path d="M5.5 13.04a3 3 0 0 0 0 2.88"/><path d="M18.5 13.04a3 3 0 0 1 0 2.88"/><path d="M14.5 5.5a3 3 0 0 0-5 0"/><path d="M8.5 18.5a3 3 0 0 1 5 0"/></svg>`,
        BarChart3: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>`,
        Layers: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.84l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.84Z"/><path d="m22 17.65-8.58 3.9a2 2 0 0 1-1.66 0L3.2 17.65"/><path d="m22 12.65-8.58 3.9a2 2 0 0 1-1.66 0L3.2 12.65"/></svg>`
    };

    // --- CORE LOGIC & NAVIGATION ---
    const setActiveSection = (sectionId) => {
        if (!sectionId || !sections[sectionId]) return;
        Object.values(sections).forEach(s => s.classList.add('hidden'));
        sections[sectionId].classList.remove('hidden');
        activeSection = sectionId;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        updateNavLinks();
        if (isMenuOpen) {
            isMenuOpen = false;
            mobileNav.classList.add('hidden');
            mobileMenuButton.innerHTML = icons.Menu;
        }
    };

    const updateNavLinks = () => {
        const createLink = (item) => `<button data-section="${item.id}" class="nav-link flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${activeSection === item.id ? 'text-purple-600 bg-purple-50 font-semibold' : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'}">${icons[item.icon]}<span>${item.name}</span></button>`;
        const createMobileLink = (item) => `<button data-section="${item.id}" class="nav-link flex items-center gap-3 w-full px-3 py-3 rounded-lg transition-colors ${activeSection === item.id ? 'text-purple-600 bg-purple-50 font-semibold' : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'}">${icons[item.icon]}<span>${item.name}</span></button>`;
        desktopNav.innerHTML = navigation.map(createLink).join('');
        mobileNav.innerHTML = `<div class="px-4 py-2 space-y-1">${navigation.map(createMobileLink).join('')}</div>`;
        document.querySelectorAll('.nav-link').forEach(btn => btn.addEventListener('click', (e) => setActiveSection(e.currentTarget.dataset.section)));
    };
    
    mobileMenuButton.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        mobileNav.classList.toggle('hidden');
        mobileMenuButton.innerHTML = isMenuOpen ? icons.X : icons.Menu;
    });

    // --- RENDER FUNCTIONS ---
    
    function renderHome() {
        return `
        <div class="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center relative overflow-hidden px-4">
            <div class="absolute -z-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob top-0 left-0"></div>
            <div class="absolute -z-10 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000 bottom-0 right-0"></div>
            <div class="absolute -z-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000 bottom-10 left-20"></div>
            <div class="w-28 h-28 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white text-5xl font-bold mb-8 shadow-lg animate-bounce-slow">AY</div>
            <h1 class="text-6xl md:text-8xl font-bold text-gray-800 mb-4 tracking-tight">Abhiram <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Yarlagadda</span></h1>
            <p id="tagline" class="text-xl text-gray-600 mb-6 h-9 transition-opacity duration-50"></p>
            <div class="flex justify-center gap-8 mb-10">
                <a href="https://www.linkedin.com/in/y-abhiram/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-all duration-300 hover:-translate-y-1">
                    ${icons.LinkedIn}
                    <span>LinkedIn</span>
                </a>
                <a href="https://github.com/ram90633" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-all duration-300 hover:-translate-y-1">
                    ${icons.Code}
                    <span>GitHub</span>
                </a>
                <a href="mailto:yarlagaddaabhi5@gmail.com" class="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-all duration-300 hover:-translate-y-1">
                     ${icons.Mail}
                    <span>Email</span>
                </a>
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
                <a href="https://drive.google.com/file/d/1R7NoyrarkRltmyuUezm82FrlE6CKSExj/view?usp=sharing" download class="bg-gradient-to-tr from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"/></svg>
                    Download Resume
                </a>
                <button id="explore-work-btn" class="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow flex items-center justify-center gap-2">
                    Explore My Work
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
                </button>
            </div>
        </div>
        `;
    }

    const renderAbout = () => {
    sections.about.innerHTML = `
        <div class="bg-gray-50 pt-20 pb-12">
            <div class="max-w-7xl mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
                    <div class="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
                </div>
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    
                    <div class="relative w-full max-w-md mx-auto h-[38rem] group">
                        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl shadow-lg transform -rotate-6 transition-transform duration-500 ease-in-out group-hover:rotate-0"></div>
                        
                        <div class="absolute top-0 left-0 w-full h-full p-2 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/30 shadow-2xl overflow-hidden transform rotate-3 transition-transform duration-500 ease-in-out group-hover:rotate-0 group-hover:scale-105">
                           
                            <img src="Pic.jpg" alt="Abhiram Yarlagadda" class="w-full h-full object-cover rounded-lg">

                        </div>
                    </div>
                    <div class="space-y-6">
                        <div class="prose prose-lg text-gray-600 max-w-none">
                            <p class="text-lg leading-relaxed">I'm a passionate Full Stack Developer and Data Science enthusiast currently pursuing my B.Tech in Computer Science with a specialization in Data Science at GITAM University. With a strong foundation in both frontend and backend technologies, I love creating innovative solutions that make a real impact.</p>
                            <p class="text-lg leading-relaxed">My journey in technology has been driven by curiosity and a desire to solve complex problems. I have hands-on experience with modern web technologies, data analysis, and machine learning. I'm particularly interested in the intersection of web development and data science, where I can leverage both skillsets to build intelligent applications.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="bg-gray-800 text-gray-300 py-16">
            <div class="max-w-7xl mx-auto px-4 relative">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div>
                        <h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul class="space-y-3" id="footer-links"></ul>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold text-white mb-4">My Info</h3>
                        <p class="font-bold text-white text-lg">Abhiram Yarlagadda</p>
                        <p class="text-purple-300 mb-4">CSE Student (Data Science)</p>
                        <ul class="space-y-3">${myInfoSkills.map(skill => `<li class="flex items-center gap-3"><span class="text-purple-400">${icons[skill.icon]}</span><span>${skill.text}</span></li>`).join('')}</ul>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold text-white mb-4">Contact Info</h3>
                        <ul class="space-y-3">
                            <li class="flex items-start gap-3"><span class="text-purple-400 mt-1">${icons.MapPin}</span><span>Visakhapatnam, Andhra Pradesh, India</span></li>
                            <li class="flex items-center gap-3"><span class="text-purple-400">${icons.Mail}</span><a href="mailto:yarlagaddaabhi5@gmail.com" class="hover:text-purple-300">yarlagaddaabhi5@gmail.com</a></li>
                            <li class="flex items-center gap-3"><span class="text-purple-400">${icons.Phone}</span><a href="tel:+919063313555" class="hover:text-purple-300">+91 90633 13555</a></li>
                        </ul>
                    </div>
                </div>
                <div class="mt-12 pt-8 border-t border-gray-700 flex justify-between items-center">
                    <p class="text-sm text-gray-400">Made with ❤️ by Abhiram Yarlagadda</p>
                    <button id="back-to-top" class="w-10 h-10 bg-purple-600 hover:bg-purple-500 rounded-full flex items-center justify-center transition-colors" aria-label="Back to top"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg></button>
                </div>
            </div>
        </footer>
    `;
    const footerLinks = document.getElementById('footer-links');
    footerLinks.innerHTML = navigation.filter(item => item.id !== 'home').map(item => `<li><button data-section="${item.id}" class="nav-link hover:text-purple-400 transition-colors">${item.name}</button></li>`).join('');
    document.querySelectorAll('#footer-links .nav-link').forEach(btn => btn.addEventListener('click', (e) => setActiveSection(e.currentTarget.dataset.section)));
    document.getElementById('back-to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
};

    const renderEducation = () => {
        const lastCgpa = cgpaData.filter(d => d.cgpa).pop()?.cgpa.toFixed(2) || 'N/A';
        sections.education.innerHTML = `<div class="min-h-screen bg-gray-50 py-20"><div class="max-w-6xl mx-auto px-4"><div class="text-center mb-16"><h2 class="text-4xl font-bold text-gray-800 mb-4">Education Journey</h2><div class="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div></div><div class="space-y-12"><div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"><div class="flex flex-col md:flex-row items-center gap-6"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8N34GRPnd0baDPLmeGnpayP50zCDTWCiE4t3URbyloQ&s&ec=73068123" alt="GITAM University" class="w-20 h-20 rounded-full object-cover shadow-md"><div class="flex-1 text-center md:text-left"><h3 class="text-2xl font-bold text-gray-800">Bachelor of Technology</h3><a href="https://www.gitam.edu/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-lg text-blue-600 font-semibold mb-1 hover:underline">GITAM University, Visakhapatnam ${icons.ExternalLink}</a><p class="text-gray-600 mb-2">Computer Science & Engineering (Data Science)</p><p class="text-gray-500">2022 - 2026 (Expected)</p></div><div class="text-center md:text-right"><div class="text-3xl font-bold text-blue-600">${lastCgpa}</div><div class="text-sm text-gray-500 mb-4">Current CGPA</div><button id="view-perf-btn" class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">${icons.TrendingUp} View Academic Performance</button></div></div></div><div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"><div class="flex flex-col md:flex-row items-center gap-6"><img src="
        https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFXNZSl80t93FynOyyyEtgyiGLV7kmLThIPt-x_W_67w&s&ec=73068123" alt="Tirumala Academy Logo" class="w-20 h-20 rounded-full object-contain shadow-md"><div class="flex-1 text-center md:text-left"><h3 class="text-2xl font-bold text-gray-800">Board of Intermediate Education, AP (BIEAP)</h3><a href="https://tirumalaedu.com/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-lg text-green-600 font-semibold mb-1 hover:underline">Tirumala IIT & Medical Academy ${icons.ExternalLink}</a><p class="text-gray-600 mb-2">Mathematics, Physics, Chemistry</p><p class="text-gray-500">2020 - 2022</p></div><div class="text-center md:text-right"><div class="text-3xl font-bold text-green-600">92%</div><div class="text-sm text-gray-500">Percentage</div></div></div></div><div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"><div class="flex flex-col md:flex-row items-center gap-6"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShTGbMdgMFePsdLbnnjkeXslbjCFghrKPLlIBSF82HuA&s&ec=73068123" alt="Dr. K.K.R. Gowtham Logo" class="w-20 h-20 rounded-full object-contain shadow-md"><div class="flex-1 text-center md:text-left"><h3 class="text-2xl font-bold text-gray-800">Central Board of Secondary Education (CBSE)</h3><a href="https://kkrgowtham.com/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-lg text-purple-600 font-semibold mb-1 hover:underline">Dr. K.K.R. Gowtham Concept School ${icons.ExternalLink}</a><p class="text-gray-600 mb-2">Annadapuram, Visakhapatnam</p><p class="text-gray-500">2019 - 2020</p></div><div class="text-center md:text-right"><div class="text-3xl font-bold text-purple-600">95%</div><div class="text-sm text-gray-500">Percentage</div></div></div></div></div></div></div>`;
        document.getElementById('view-perf-btn').addEventListener('click', openCgpaModal);
    };

    const renderExperience = () => {
        const colorStyles = {
            blue: { border: "border-blue-500", bg: "bg-blue-100", text: "text-blue-800", gradFrom: "from-blue-400", gradTo: "to-blue-600", bullet: "bg-blue-500", skillBg: "bg-blue-50", skillText: "text-blue-700" },
            green: { border: "border-green-500", bg: "bg-green-100", text: "text-green-800", gradFrom: "from-green-400", gradTo: "to-green-600", bullet: "bg-green-500", skillBg: "bg-green-50", skillText: "text-green-700" },
            purple: { border: "border-purple-500", bg: "bg-purple-100", text: "text-purple-800", gradFrom: "from-purple-400", gradTo: "to-purple-600", bullet: "bg-purple-500", skillBg: "bg-purple-50", skillText: "text-purple-700" },
        };
        const experienceHTML = experienceData.map(exp => {
            const style = colorStyles[exp.color] || colorStyles.blue;
            return `<div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${style.border}"><div class="flex items-start gap-6"><div class="flex-shrink-0">${exp.logo ? `<img src="${exp.logo}" alt="${exp.company}" class="w-16 h-16 rounded-lg object-cover shadow-md">` : `<div class="w-16 h-16 bg-gradient-to-br ${style.gradFrom} ${style.gradTo} rounded-lg flex items-center justify-center shadow-md"><span class="text-white font-bold text-2xl">${exp.company.charAt(0)}</span></div>`}</div><div class="flex-1"><div class="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4"><h3 class="text-xl md:text-2xl font-bold text-gray-800">${exp.role}</h3><div class="flex items-center gap-2 px-3 py-1 ${style.bg} ${style.text} rounded-full text-sm font-medium"><span>${exp.date}</span></div></div><div class="flex items-center gap-2 mb-4 text-gray-600"><span class="font-semibold">${exp.company}</span><span>•</span><span>${exp.location}</span></div><ul class="space-y-3 text-gray-700">${exp.points.map(point => `<li class="flex items-start gap-3"><div class="w-2 h-2 ${style.bullet} rounded-full mt-2 flex-shrink-0"></div><span>${point}</span></li>`).join('')}</ul><div class="flex flex-wrap gap-2 mt-4">${exp.skills.map(skill => `<span class="px-3 py-1 ${style.skillBg} ${style.skillText} rounded-full text-sm font-medium">${skill}</span>`).join('')}</div></div></div></div>`;
        }).join('');
        sections.experience.innerHTML = `<div class="min-h-screen bg-gray-50 py-20"><div class="max-w-6xl mx-auto px-4"><div class="text-center mb-16"><h2 class="text-4xl font-bold text-gray-800 mb-4">Professional Experience</h2><div class="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div></div><div class="space-y-8">${experienceHTML}</div></div></div>`;
    };
    
    const renderProjects = () => {
        const featured = projects[0];
        const otherProjects = projects.slice(1).map(p => `<div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"><div class="relative overflow-hidden"><img src="${p.image}" alt="${p.title}" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"><div class="absolute top-4 left-4"><span class="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full text-xs font-medium">${p.category}</span></div></div><div class="p-6"><h3 class="text-xl font-bold text-gray-800 mb-3">${p.title}</h3><p class="text-gray-600 mb-4 h-20 line-clamp-3">${p.description}</p><div class="flex flex-wrap gap-2 mb-4 h-10">${p.tech.slice(0,3).map(t => `<span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">${t}</span>`).join('')} ${p.tech.length > 3 ? `<span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">+${p.tech.length - 3}</span>` : ''}</div><div class="flex gap-3"><a href="${p.github}" target="_blank" rel="noopener noreferrer" class="flex-1 text-center py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm font-semibold">Code</a><a href="${p.live}" target="_blank" rel="noopener noreferrer" class="flex-1 text-center py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-semibold">Demo</a></div></div></div>`).join('');
        sections.projects.innerHTML = `<div class="min-h-screen bg-gray-50 py-20"><div class="max-w-7xl mx-auto px-4"><div class="text-center mb-16"><h2 class="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2><div class="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div><p class="text-lg text-gray-600 max-w-2xl mx-auto">Explore my latest projects showcasing machine learning, data science, and full-stack development</p></div><div class="mb-12"><div class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"><div class="flex items-center gap-3 mb-6"><div class="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div><span class="text-purple-600 font-semibold text-sm uppercase tracking-wide">Featured Project</span></div><div class="grid lg:grid-cols-2 gap-8 items-center"><div><h3 class="text-3xl font-bold text-gray-800 mb-4">${featured.title}</h3><p class="text-gray-600 mb-6 text-lg leading-relaxed">${featured.description}</p><div class="flex flex-wrap gap-2 mb-6">${featured.tech.map(t => `<span class="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">${t}</span>`).join('')}</div><div class="flex gap-4"><a href="${featured.github}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-semibold">View Code</a><a href="${featured.live}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold">Live Demo</a></div></div><div class="relative"><img src="${featured.image}" alt="${featured.title}" class="w-full h-80 object-cover rounded-2xl shadow-lg"><div class="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl"></div><div class="absolute bottom-4 left-4 right-4"><div class="bg-white/90 backdrop-blur-sm rounded-lg p-3"><div class="flex items-center gap-2 text-sm text-gray-700"><span class="font-semibold">95%+ Accuracy</span><span>•</span><span>Real-time Detection</span></div></div></div></div></div></div></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">${otherProjects}</div></div></div>`;
    };

    const renderContact = () => {
        sections.contact.innerHTML = `<div class="min-h-screen bg-gray-50 py-20"><div class="max-w-7xl mx-auto px-4"><div class="text-center mb-16"><h2 class="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2><p class="text-lg text-gray-600 max-w-2xl mx-auto">Ready to collaborate or have a question? I'd love to hear from you. Let's create something amazing together!</p></div><div class="grid lg:grid-cols-5 gap-8"><div class="lg:col-span-3 bg-white rounded-2xl p-8 shadow-xl"><h3 class="text-2xl font-bold text-gray-800 mb-1">Send Message</h3><p class="text-gray-500 mb-6">Fill out the form and I'll get back to you.</p><form id="contact-form" class="space-y-6"><div><label for="name" class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label><div class="relative"><input type="text" id="name" name="name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 pr-10" placeholder="Enter your full name" required><div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">${icons.User}</div></div><div id="name-error" class="mt-1 text-sm text-red-600"></div></div><div><label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label><div class="relative"><input type="email" id="email" name="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 pr-10" placeholder="Enter your email address" required><div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">${icons.Mail}</div></div><div id="email-error" class="mt-1 text-sm text-red-600"></div></div><div><label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label><div class="relative"><input type="tel" id="phone" name="phone" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 pr-10" placeholder="Enter your phone number"><div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">${icons.Phone}</div></div><div id="phone-error" class="mt-1 text-sm text-red-600"></div></div><div><label for="reason" class="block text-sm font-medium text-gray-700 mb-2">Reason for Contact *</label><select id="reason" name="reason" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white" required><option value="">Select a reason</option>${contactReasons.map(r => `<option value="${r}">${r}</option>`).join('')}</select><div id="reason-error" class="mt-1 text-sm text-red-600"></div></div><div><label for="message" class="block text-sm font-medium text-gray-700 mb-2">Additional Message (Optional)</label><textarea id="message" name="message" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none" placeholder="Tell me more about your inquiry..."></textarea></div><button type="submit" id="submit-btn" class="w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">Send Message <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button><div id="form-status" class="mt-4"></div></form></div><div class="lg:col-span-2 space-y-8"><div class="bg-white rounded-2xl p-8 shadow-xl"><h3 class="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3><div class="space-y-6"><div class="flex items-center gap-4"><div class="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0">${icons.Mail}</div><div><p class="text-gray-500 text-sm">Email</p><a href="mailto:yarlagaddaabhi5@gmail.com" class="font-semibold text-gray-800 hover:text-purple-600">yarlagaddaabhi5@gmail.com</a></div></div><div class="flex items-center gap-4"><div class="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0">${icons.Phone}</div><div><p class="text-gray-500 text-sm">Phone</p><a href="tel:+919063313555" class="font-semibold text-gray-800 hover:text-purple-600">+91 90633 13555</a></div></div><div class="flex items-center gap-4"><div class="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0">${icons.MapPin}</div><div><p class="text-gray-500 text-sm">Location</p><p class="font-semibold text-gray-800">Visakhapatnam, Andhra Pradesh</p></div></div></div></div><div class="bg-white rounded-2xl p-8 shadow-xl"><h3 class="text-2xl font-bold text-gray-800 mb-6">Connect With Me</h3><div class="space-y-4"><a href="https://www.linkedin.com/in/y-abhiram/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 p-4 border rounded-lg hover:border-purple-500 hover:shadow-md transition-all"><div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-600">${icons.LinkedIn}</div><div><p class="font-semibold text-gray-800">LinkedIn</p><p class="text-sm text-gray-500">www.linkedin.com/in/y-abhiram/</p></div></a><a href="https://github.com/ram90633" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 p-4 border rounded-lg hover:border-purple-500 hover:shadow-md transition-all"><div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-600">${icons.Code}</div><div><p class="font-semibold text-gray-800">GitHub</p><p class="text-sm text-gray-500">github.com/ram90633</p></div></a><a href="mailto:yarlagaddaabhi5@gmail.com" class="flex items-center gap-4 p-4 border rounded-lg hover:border-purple-500 hover:shadow-md transition-all"><div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-600">${icons.Mail}</div><div><p class="font-semibold text-gray-800">Email</p><p class="text-sm text-gray-500">yarlagaddaabhi5@gmail.com</p></div></a></div></div></div></div></div></div>`;
        attachFormListeners();
    };

    const attachFormListeners = () => {
        const form = document.getElementById('contact-form');
        if (!form) return;
        const submitBtn = document.getElementById('submit-btn');
        const formStatusEl = document.getElementById('form-status');
        const errorEls = { name: document.getElementById('name-error'), email: document.getElementById('email-error'), phone: document.getElementById('phone-error'), reason: document.getElementById('reason-error') };
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            let isValid = true;
            Object.values(errorEls).forEach(el => el.textContent = '');
            const formData = { name: form.elements.name.value, email: form.elements.email.value, phone: form.elements.phone.value, reason: form.elements.reason.value };
            if (!formData.name.trim()) { isValid = false; errorEls.name.textContent = 'Name is required.'; }
            if (!formData.email.trim()) { isValid = false; errorEls.email.textContent = 'Email is required.'; }
            else if (!/^\S+@\S+\.\S+$/.test(formData.email)) { isValid = false; errorEls.email.textContent = 'Email is invalid.'; }
            if (formData.phone.trim() && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) { isValid = false; errorEls.phone.textContent = 'Phone number must be 10 digits.'; }
            if (!formData.reason) { isValid = false; errorEls.reason.textContent = 'Please select a reason.'; }
            if (!isValid) return;
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending...';
            formStatusEl.innerHTML = '';
            await new Promise(res => setTimeout(res, 1500));
            formStatusEl.innerHTML = `<div class="p-4 bg-green-100 border border-green-200 rounded-lg text-green-800">Message sent successfully! I'll get back to you soon.</div>`;
            form.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = `Send Message <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;
            setTimeout(() => formStatusEl.innerHTML = '', 5000);
        });
    };

    // --- MODAL LOGIC ---
    const openCgpaModal = () => {
        cgpaModal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
        renderCGPAModalContent();
    };

    const closeCgpaModal = () => {
        cgpaModal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    };
    
    const renderCGPAModalContent = () => {
        const completedSemestersData = cgpaData.filter(d => d.sgpa !== null);
        const completedSemestersCount = completedSemestersData.length;
        const totalSemesters = cgpaData.length;
        const highestSgpa = Math.max(...completedSemestersData.map(d => d.sgpa));
        const currentCgpa = completedSemestersData.length > 0 ? completedSemestersData[completedSemestersData.length - 1].cgpa : 'N/A';
        const courseProgress = Math.round((completedSemestersCount / totalSemesters) * 100);

        cgpaModal.innerHTML = `
            <div class="bg-white rounded-2xl shadow-2xl w-full max-w-6xl transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-up">
                <div class="p-6 md:p-8 max-h-[90vh] overflow-y-auto">
                    <div class="flex justify-between items-start mb-8">
                        <div>
                            <h3 class="text-2xl font-bold text-gray-800">Academic Performance Dashboard</h3>
                            <p class="text-gray-500">A comprehensive overview of my academic journey.</p>
                        </div>
                        <button id="close-modal-btn" class="text-gray-400 hover:text-gray-700 p-1 rounded-full">${icons.X}</button>
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div class="bg-gradient-to-br from-green-400 to-green-600 text-white p-4 rounded-lg shadow-md"><p class="text-sm opacity-80">Highest SGPA</p><p class="text-3xl font-bold">${highestSgpa.toFixed(2)}</p></div>
                        <div class="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-4 rounded-lg shadow-md"><p class="text-sm opacity-80">Current CGPA</p><p class="text-3xl font-bold">${currentCgpa.toFixed(2)}</p></div>
                        <div class="bg-gradient-to-br from-purple-400 to-pink-500 text-white p-4 rounded-lg shadow-md"><p class="text-sm opacity-80">Completed Semesters</p><p class="text-3xl font-bold">${completedSemestersCount}</p></div>
                        <div class="bg-gradient-to-br from-red-400 to-orange-500 text-white p-4 rounded-lg shadow-md"><p class="text-sm opacity-80">Course Progress</p><p class="text-3xl font-bold">${courseProgress}%</p></div>
                    </div>
                    <div class="mb-8">
                        <h4 class="text-lg font-semibold text-gray-700 mb-4">Semester-wise Performance</h4>
                        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            ${cgpaData.map(sem => `
                                <div class="p-4 rounded-xl transition-all duration-300 ${sem.sgpa ? 'bg-white border cursor-pointer hover:scale-105 hover:shadow-xl' : 'bg-gray-100 text-gray-400'}">
                                    <div class="flex justify-between items-center">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center ${sem.sgpa ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'} font-bold">${sem.semester}</div>
                                            <span class="font-semibold ${sem.sgpa ? 'text-gray-700' : ''}">Semester ${sem.semester}</span>
                                        </div>
                                        <div class="text-right text-sm ${sem.sgpa ? 'text-gray-600' : ''}">
                                            <div>SGPA: <span class="font-bold">${sem.sgpa ? sem.sgpa.toFixed(2) : 'N/A'}</span></div>
                                            <div>CGPA: <span class="font-bold">${sem.cgpa ? sem.cgpa.toFixed(2) : 'N/A'}</span></div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div>
                        <h4 class="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-4">
                            <span class="text-blue-500">${icons.TrendingUp}</span>
                            <span>GPA Trend Analysis</span>
                        </h4>
                        <div class="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg">
                            <canvas id="gpaChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>`;

        cgpaModal.addEventListener('click', (e) => { if (e.target === cgpaModal) closeCgpaModal(); });
        document.getElementById('close-modal-btn').addEventListener('click', closeCgpaModal);
        initializeGpaChart();
    };

    const initializeGpaChart = () => {
        const ctx = document.getElementById('gpaChart')?.getContext('2d');
        if (!ctx) return;
        const labels = cgpaData.map(d => `Sem ${d.semester}`);
        const sgpaValues = cgpaData.map(d => d.sgpa);
        const cgpaValues = cgpaData.map(d => d.cgpa);
        const validSgpaValues = sgpaValues.filter(Boolean);
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'SGPA',
                        data: sgpaValues,
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                        fill: true,
                        tension: 0.3,
                        pointRadius: 5,
                        pointBackgroundColor: '#3b82f6'
                    },
                    {
                        label: 'CGPA',
                        data: cgpaValues,
                        borderColor: '#22c55e',
                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                        fill: false,
                        tension: 0.3,
                        pointRadius: 5,
                        pointBackgroundColor: '#22c55e'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: { 
                    y: { 
                        beginAtZero: false, 
                        min: Math.min(...validSgpaValues) > 7 ? 7.5 : Math.floor(Math.min(...validSgpaValues)), 
                        grid: { 
                            color: '#e5e7eb',
                            borderDash: [4, 4]
                        } 
                    }, 
                    x: { 
                        grid: { display: false },
                        ticks: { color: '#6b7280' }
                    } 
                },
                plugins: { 
                    legend: { 
                        position: 'bottom', 
                        align: 'center', 
                        labels: { 
                            usePointStyle: true, 
                            boxWidth: 8,
                            padding: 20
                        } 
                    } 
                }
            }
        });
    };
    
    // --- INITIALIZATION ---
    const initialize = () => {
        sections.home.innerHTML = renderHome();
        renderAbout();
        renderEducation();
        renderExperience();
        renderProjects();
        renderContact();
        document.getElementById('explore-work-btn').addEventListener('click', () => setActiveSection('projects'));
        const taglineEl = document.getElementById('tagline');
        if (taglineEl) {
            let currentTaglineIndex = 0;
            taglineEl.textContent = taglines[currentTaglineIndex];
            setInterval(() => {
                currentTaglineIndex = (currentTaglineIndex + 1) % taglines.length;
                taglineEl.classList.add('opacity-0');
                setTimeout(() => {
                    taglineEl.textContent = taglines[currentTaglineIndex];
                    taglineEl.classList.remove('opacity-0');
                }, 500);
            }, 3000);
        }
        setActiveSection('home');
        mobileMenuButton.innerHTML = icons.Menu;
    };

    // Start the application
    initialize();
});