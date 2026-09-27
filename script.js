/* =========================================================
   PORTFOLIO APP
   حماس عادل أحمد رسام
========================================================= */


/* =========================================================
   HELPERS
========================================================= */

const $ = (selector, parent = document) =>
    parent.querySelector(selector);

const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];


/* =========================================================
   DATA
========================================================= */

const skills = [
    {
        title: "تطوير المواقع",
        level: 90,
        category: "تقنية",
        icon: `
            <svg width="25" height="25" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2">
                <path d="m8 9-4 3 4 3"/>
                <path d="m16 9 4 3-4 3"/>
                <path d="m14 5-4 14"/>
            </svg>
        `,
        description:
            "إنشاء واجهات مواقع حديثة ومتجاوبة باستخدام HTML وCSS وJavaScript وتقنيات الواجهة الحديثة."
    },

    {
        title: "التصميم الجرافيكي",
        level: 92,
        category: "إبداع",
        icon: `
            <svg width="25" height="25" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="13.5" cy="6.5" r="2.5"/>
                <path d="M17 3h3a1 1 0 0 1 1 1v3"/>
                <path d="M21 14v6a1 1 0 0 1-1 1h-6"/>
                <path d="M3 10V4a1 1 0 0 1 1-1h6"/>
                <path d="M3 14v6a1 1 0 0 0 1 1h6"/>
            </svg>
        `,
        description:
            "تصميم منشورات ومواد بصرية وهوية ومحتوى رقمي مع الاهتمام بالتوازن البصري والهوية."
    },

    {
        title: "إنتاج الفيديو",
        level: 82,
        category: "إبداع",
        icon: `
            <svg width="25" height="25" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="5" width="13" height="14" rx="2"/>
                <path d="m16 10 5-3v10l-5-3"/>
            </svg>
        `,
        description:
            "إعداد وتطوير مقاطع قصيرة ومحتوى بصري مناسب للإعلانات ومنصات التواصل الاجتماعي."
    },

    {
        title: "الشبكات",
        level: 75,
        category: "تقنية",
        icon: `
            <svg width="25" height="25" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2">
                <rect x="7" y="3" width="10" height="6" rx="2"/>
                <rect x="3" y="15" width="6" height="6" rx="2"/>
                <rect x="15" y="15" width="6" height="6" rx="2"/>
                <path d="M12 9v3"/>
                <path d="M6 15v-3h12v3"/>
            </svg>
        `,
        description:
            "فهم أساسيات الشبكات والعمل على تصميم ومحاكاة الشبكات باستخدام Cisco Packet Tracer."
    },

    {
        title: "الذكاء الاصطناعي",
        level: 88,
        category: "AI",
        icon: `
            <svg width="25" height="25" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2">
                <rect x="4" y="4" width="16" height="16" rx="4"/>
                <path d="M9 9h6v6H9z"/>
                <path d="M9 1v3"/>
                <path d="M15 1v3"/>
                <path d="M9 20v3"/>
                <path d="M15 20v3"/>
                <path d="M20 9h3"/>
                <path d="M20 14h3"/>
                <path d="M1 9h3"/>
                <path d="M1 14h3"/>
            </svg>
        `,
        description:
            "توظيف أدوات الذكاء الاصطناعي في توليد الأفكار والمحتوى والتصميم والفيديو والعمل التقني."
    },

    {
        title: "المشاريع والبحوث",
        level: 90,
        category: "أكاديمي",
        icon: `
            <svg width="25" height="25" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16v16H4z"/>
                <path d="M8 8h8"/>
                <path d="M8 12h8"/>
                <path d="M8 16h5"/>
            </svg>
        `,
        description:
            "تنظيم المشاريع والبحوث والتقارير والعروض التقديمية بأسلوب واضح ومنظم."
    }
];


const projects = [

    {
        id: 1,
        title: "واجهة مستشفى رقمية",
        category: "web",
        categoryName: "مواقع",
        icon: `
            <svg width="48" height="48" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M4 4h16v16H4z"/>
                <path d="M12 7v10"/>
                <path d="M7 12h10"/>
            </svg>
        `,
        description:
            "تصميم واجهة مؤسسية لموقع طبي مع التركيز على تجربة المستخدم، الخدمات الطبية، الأقسام، الأطباء، والتواصل.",
        tools: [
            "HTML",
            "CSS",
            "JavaScript",
            "Tailwind CSS",
            "UI/UX"
        ]
    },

    {
        id: 2,
        title: "متجر إلكتروني",
        category: "web",
        categoryName: "مواقع",
        icon: `
            <svg width="48" height="48" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M3 4h2l2 12h10l3-9H6"/>
                <circle cx="9" cy="20" r="1"/>
                <circle cx="17" cy="20" r="1"/>
            </svg>
        `,
        description:
            "نموذج متجر إلكتروني متجاوب يركز على عرض المنتجات، تجربة المستخدم، التصنيف، والسلة.",
        tools: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design"
        ]
    },

    {
        id: 3,
        title: "هوية بصرية ومحتوى تسويقي",
        category: "design",
        categoryName: "تصميم",
        icon: `
            <svg width="48" height="48" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 3a9 9 0 1 0 0 18"/>
                <path d="M12 3v9h9"/>
                <circle cx="8" cy="15" r="1"/>
                <circle cx="6" cy="10" r="1"/>
            </svg>
        `,
        description:
            "تصميم محتوى بصري وتسويقي يركز على الهوية، وضوح الرسالة، وجذب الانتباه.",
        tools: [
            "Graphic Design",
            "Branding",
            "Social Media"
        ]
    },

    {
        id: 4,
        title: "عرض أكاديمي تفاعلي",
        category: "academic",
        categoryName: "أكاديمي",
        icon: `
            <svg width="48" height="48" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="4" width="18" height="14" rx="2"/>
                <path d="M8 21h8"/>
                <path d="M12 18v3"/>
            </svg>
        `,
        description:
            "تصميم عرض تقديمي أكاديمي منظم مع استخدام التسلسل البصري والمخططات والحركة الهادئة.",
        tools: [
            "Presentation Design",
            "Charts",
            "Motion"
        ]
    },

    {
        id: 5,
        title: "فيديو تسويقي قصير",
        category: "video",
        categoryName: "فيديو",
        icon: `
            <svg width="48" height="48" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="5" width="13" height="14" rx="2"/>
                <path d="m16 10 5-3v10l-5-3"/>
            </svg>
        `,
        description:
            "تصميم سيناريو بصري لمقطع إعلاني قصير مع انتقالات ومؤثرات صوتية وبصرية مناسبة.",
        tools: [
            "Video",
            "Storytelling",
            "AI Video"
        ]
    },

    {
        id: 6,
        title: "محتوى بالذكاء الاصطناعي",
        category: "ai",
        categoryName: "ذكاء اصطناعي",
        icon: `
            <svg width="48" height="48" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 3v18"/>
                <path d="M3 12h18"/>
                <circle cx="12" cy="12" r="8"/>
                <path d="m8 8 8 8"/>
            </svg>
        `,
        description:
            "استخدام أدوات الذكاء الاصطناعي لتطوير الأفكار، المحتوى، التصميمات، والسيناريوهات الإبداعية.",
        tools: [
            "Generative AI",
            "Prompt Engineering",
            "Creative AI"
        ]
    }

];


const services = [

    {
        title: "تطوير المواقع",
        icon: `
            <svg width="28" height="28" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2">
                <path d="m8 9-4 3 4 3"/>
                <path d="m16 9 4 3-4 3"/>
                <path d="m14 5-4 14"/>
            </svg>
        `,
        description:
            "تصميم وتطوير مواقع حديثة ومتجاوبة مناسبة للأعمال والمشاريع الشخصية والمؤسسات.",
        items: [
            "تصميم واجهة حديثة",
            "Responsive Design",
            "تجربة مستخدم واضحة",
            "تفاعلات JavaScript",
            "دعم الوضع الليلي"
        ]
    },

    {
        title: "التصميم والإبداع",
        icon: `
            <svg width="28" height="28" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="13.5" cy="6.5" r="2.5"/>
                <path d="M17 3h3a1 1 0 0 1 1 1v3"/>
                <path d="M21 14v6a1 1 0 0 1-1 1h-6"/>
                <path d="M3 10V4a1 1 0 0 1 1-1h6"/>
            </svg>
        `,
        description:
            "تصميم منشورات وهوية بصرية ومواد إبداعية لمنصات التواصل والمشاريع.",
        items: [
            "تصميم منشورات",
            "هوية بصرية",
            "شعارات",
            "إعلانات",
            "مواد تسويقية"
        ]
    },

    {
        title: "إنتاج الفيديو",
        icon: `
            <svg width="28" height="28" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="5" width="13" height="14" rx="2"/>
                <path d="m16 10 5-3v10l-5-3"/>
            </svg>
        `,
        description:
            "إعداد فيديوهات قصيرة وإعلانات بصرية مناسبة لمنصات التواصل.",
        items: [
            "كتابة السيناريو",
            "تقسيم المشاهد",
            "تحريك بصري",
            "مؤثرات صوتية",
            "محتوى قصير"
        ]
    },

    {
        title: "المشاريع والبحوث",
        icon: `
            <svg width="28" height="28" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16v16H4z"/>
                <path d="M8 8h8"/>
                <path d="M8 12h8"/>
                <path d="M8 16h5"/>
            </svg>
        `,
        description:
            "تنظيم وتصميم المشاريع والبحوث والتقارير والعروض التقديمية.",
        items: [
            "تنسيق البحوث",
            "التقارير",
            "العروض التقديمية",
            "المخططات",
            "تنظيم المحتوى"
        ]
    }

];


/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = $("#loader");

        if (loader) {
            loader.classList.add("hidden");
        }

        initReveal();

    }, 700);

});


/* =========================================================
   THEME
========================================================= */

const html = document.documentElement;
const themeToggle = $("#themeToggle");
const sunIcon = $("#sunIcon");
const moonIcon = $("#moonIcon");

function setTheme(theme) {

    if (theme === "dark") {

        html.classList.add("dark");

        sunIcon?.classList.remove("hidden");
        moonIcon?.classList.add("hidden");

    } else {

        html.classList.remove("dark");

        sunIcon?.classList.add("hidden");
        moonIcon?.classList.remove("hidden");

    }

    localStorage.setItem("portfolio-theme", theme);
}


const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme) {

    setTheme(savedTheme);

} else {

    const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    setTheme(prefersDark ? "dark" : "light");
}


themeToggle?.addEventListener("click", () => {

    const current =
        html.classList.contains("dark")
            ? "dark"
            : "light";

    setTheme(current === "dark" ? "light" : "dark");

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = $("#menuToggle");
const mobileMenu = $("#mobileMenu");

menuToggle?.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

});


$$(".mobile-link").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.add("hidden");

    });

});


/* =========================================================
   SCROLL PROGRESS
========================================================= */

window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        documentHeight > 0
            ? (scrollTop / documentHeight) * 100
            : 0;

    $("#scrollProgress").style.width =
        `${progress}%`;

});


/* =========================================================
   HEADER
========================================================= */

const header = $("#header");
const headerInner = $("#headerInner");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        headerInner.classList.add(
            "py-2"
        );

        headerInner.classList.remove(
            "py-4"
        );

    } else {

        headerInner.classList.add(
            "py-4"
        );

        headerInner.classList.remove(
            "py-2"
        );

    }

});


/* =========================================================
   ACTIVE NAV
========================================================= */

const sections =
    $$("main section[id]");

const navLinks =
    $$(".nav-link");

const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                const id =
                    entry.target.id;

                navLinks.forEach(link => {

                    link.classList.toggle(
                        "active",
                        link.dataset.section === id
                    );

                });

            });

        },
        {
            rootMargin: "-35% 0px -55% 0px"
        }
    );


sections.forEach(section => {

    sectionObserver.observe(section);

});


/* =========================================================
   REVEAL ANIMATION
========================================================= */

function initReveal() {

    const elements =
        $$(".reveal");

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .12
            }
        );

    elements.forEach(element => {

        observer.observe(element);

    });

}


/* =========================================================
   COUNTERS
========================================================= */

const counters =
    $$("[data-counter]");

const counterObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                const element =
                    entry.target;

                const target =
                    Number(element.dataset.counter);

                let current = 0;

                const duration = 1200;
                const start = performance.now();

                function animate(time) {

                    const progress =
                        Math.min(
                            (time - start) / duration,
                            1
                        );

                    current =
                        Math.floor(
                            progress * target
                        );

                    element.textContent =
                        current;

                    if (progress < 1) {

                        requestAnimationFrame(
                            animate
                        );

                    } else {

                        element.textContent =
                            target;

                    }

                }

                requestAnimationFrame(animate);

                counterObserver.unobserve(
                    element
                );

            });

        },
        {
            threshold: .7
        }
    );


counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* =========================================================
   TYPING EFFECT
========================================================= */

const typingElement =
    $("#typingText");

const typingWords = [
    "التقنية",
    "الإبداع",
    "التصميم",
    "الذكاء الاصطناعي",
    "الحلول الرقمية"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const word =
        typingWords[wordIndex];

    if (!typingElement) {
        return;
    }

    if (!deleting) {

        typingElement.textContent =
            word.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === word.length) {

            deleting = true;

            setTimeout(
                typingEffect,
                1300
            );

            return;
        }

    } else {

        typingElement.textContent =
            word.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) %
                typingWords.length;

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 55 : 90
    );

}

typingEffect();


/* =========================================================
   SKILLS
========================================================= */

const skillsGrid =
    $("#skillsGrid");

function renderSkills() {

    if (!skillsGrid) {
        return;
    }

    skillsGrid.innerHTML =
        skills.map((skill, index) => `

            <button
                class="skill-card glass rounded-3xl p-6
                text-right w-full reveal"
                data-skill="${index}"
            >

                <div class="flex items-start justify-between gap-4">

                    <div
                        class="w-12 h-12 rounded-2xl
                        bg-violet-500/10
                        text-violet-600
                        flex items-center justify-center"
                    >
                        ${skill.icon}
                    </div>

                    <span
                        class="text-xs font-bold
                        px-3 py-1 rounded-full
                        bg-slate-100 dark:bg-slate-800"
                    >
                        ${skill.category}
                    </span>

                </div>


                <h3 class="font-extrabold text-lg mt-5">
                    ${skill.title}
                </h3>


                <div class="flex items-center justify-between mt-5 text-sm">

                    <span class="text-slate-500">
                        مستوى الإتقان
                    </span>

                    <span class="font-extrabold">
                        ${skill.level}%
                    </span>

                </div>


                <div
                    class="h-2 rounded-full
                    bg-slate-200 dark:bg-slate-800
                    mt-2 overflow-hidden"
                >

                    <div
                        class="skill-progress h-full rounded-full
                        bg-gradient-to-r from-violet-600 to-pink-500"
                        style="width:0%"
                        data-level="${skill.level}"
                    ></div>

                </div>


                <div class="mt-5 text-violet-600 text-sm font-bold">
                    عرض التفاصيل ←
                </div>

            </button>

        `).join("");


    $$(".skill-progress").forEach(bar => {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            bar.style.width =
                                `${bar.dataset.level}%`;

                            observer.unobserve(bar);

                        }

                    });

                },
                {
                    threshold: .5
                }
            );

        observer.observe(bar);

    });


    $$(".skill-card").forEach(card => {

        card.addEventListener("click", () => {

            const index =
                Number(card.dataset.skill);

            const skill =
                skills[index];

            showToast(
                `${skill.title}: ${skill.description}`
            );

        });

    });

}

renderSkills();


/* =========================================================
   PROJECTS
========================================================= */

const projectsGrid =
    $("#projectsGrid");

function renderProjects(filter = "all") {

    const filtered =
        filter === "all"
            ? projects
            : projects.filter(
                project =>
                    project.category === filter
            );


    projectsGrid.innerHTML =
        filtered.map(project => `

            <article
                class="project-card glass rounded-3xl
                overflow-hidden reveal"
            >

                <div
                    class="h-52
                    bg-gradient-to-br
                    from-violet-600/20
                    via-pink-500/10
                    to-indigo-600/20
                    flex items-center justify-center
                    relative overflow-hidden"
                >

                    <div
                        class="absolute w-40 h-40
                        rounded-full
                        bg-violet-500/10
                        blur-2xl"
                    ></div>

                    <div
                        class="relative
                        text-violet-600
                        animate-pulse"
                    >
                        ${project.icon}
                    </div>

                    <span
                        class="absolute top-4 right-4
                        px-3 py-1 rounded-full
                        bg-white/70 dark:bg-slate-900/70
                        backdrop-blur
                        text-xs font-bold"
                    >
                        ${project.categoryName}
                    </span>

                </div>


                <div class="p-6">

                    <h3 class="font-extrabold text-xl">
                        ${project.title}
                    </h3>

                    <p
                        class="text-sm leading-7
                        text-slate-500 dark:text-slate-400
                        mt-3 line-clamp-3"
                    >
                        ${project.description}
                    </p>


                    <div class="flex flex-wrap gap-2 mt-5">

                        ${project.tools.slice(0, 3).map(tool => `
                            <span
                                class="text-xs px-3 py-1 rounded-full
                                bg-slate-100 dark:bg-slate-800"
                            >
                                ${tool}
                            </span>
                        `).join("")}

                    </div>


                    <button
                        data-project="${project.id}"
                        class="project-details mt-6
                        w-full py-3 rounded-xl
                        bg-violet-500/10
                        text-violet-600
                        font-bold
                        hover:bg-violet-600
                        hover:text-white
                        transition"
                    >
                        عرض تفاصيل المشروع
                    </button>

                </div>

            </article>

        `).join("");


    $$(".project-details").forEach(button => {

        button.addEventListener("click", () => {

            const project =
                projects.find(
                    item =>
                        item.id ===
                        Number(button.dataset.project)
                );

            openProjectModal(project);

        });

    });


    setTimeout(initReveal, 50);

}


/* Initial */
renderProjects();


/* Filters */

$$(".filter-btn").forEach(button => {

    button.addEventListener("click", () => {

        $$(".filter-btn").forEach(btn => {

            btn.classList.remove(
                "bg-violet-600",
                "text-white"
            );

            btn.classList.add(
                "bg-slate-100",
                "dark:bg-slate-800"
            );

        });


        button.classList.add(
            "bg-violet-600",
            "text-white"
        );

        button.classList.remove(
            "bg-slate-100",
            "dark:bg-slate-800"
        );


        renderProjects(
            button.dataset.filter
        );

    });

});


/* =========================================================
   PROJECT MODAL
========================================================= */

function openProjectModal(project) {

    if (!project) {
        return;
    }

    $("#modalProjectCategory").textContent =
        project.categoryName;

    $("#modalProjectTitle").textContent =
        project.title;

    $("#modalProjectDescription").textContent =
        project.description;

    $("#modalProjectVisual").innerHTML =
        `<div class="text-violet-600">${project.icon}</div>`;

    $("#modalProjectTools").innerHTML =
        project.tools.map(tool => `

            <span
                class="px-3 py-2 rounded-xl
                bg-slate-100 dark:bg-slate-800
                text-sm font-semibold"
            >
                ${tool}
            </span>

        `).join("");


    openModal("projectModal");

}


/* =========================================================
   SERVICES
========================================================= */

const servicesGrid =
    $("#servicesGrid");

function renderServices() {

    servicesGrid.innerHTML =
        services.map((service, index) => `

            <article
                class="glass rounded-3xl p-6
                hover:-translate-y-2
                transition-all duration-300
                reveal"
            >

                <div
                    class="w-14 h-14 rounded-2xl
                    bg-gradient-to-br
                    from-violet-500/15
                    to-pink-500/15
                    text-violet-600
                    flex items-center justify-center"
                >
                    ${service.icon}
                </div>


                <h3 class="font-extrabold text-lg mt-6">
                    ${service.title}
                </h3>


                <p
                    class="text-sm text-slate-500
                    dark:text-slate-400
                    leading-7 mt-3"
                >
                    ${service.description}
                </p>


                <button
                    data-service="${index}"
                    class="service-details mt-5
                    text-violet-600
                    font-bold text-sm"
                >
                    معرفة المزيد ←
                </button>

            </article>

        `).join("");


    $$(".service-details").forEach(button => {

        button.addEventListener("click", () => {

            const service =
                services[
                    Number(button.dataset.service)
                ];

            $("#modalServiceTitle").textContent =
                service.title;

            $("#modalServiceDescription").textContent =
                service.description;

            $("#modalServiceItems").innerHTML =
                service.items.map(item => `

                    <li class="flex items-center gap-3">

                        <span
                            class="w-6 h-6 rounded-full
                            bg-violet-500/10
                            text-violet-600
                            flex items-center justify-center"
                        >
                            ✓
                        </span>

                        ${item}

                    </li>

                `).join("");


            openModal("serviceModal");

        });

    });


    setTimeout(initReveal, 50);

}

renderServices();


/* =========================================================
   MODALS
========================================================= */

function openModal(id) {

    const modal = $(`#${id}`);

    if (!modal) {
        return;
    }

    modal.classList.add("active");

    document.body.classList.add(
        "modal-open"
    );

}


function closeModal(id) {

    const modal = $(`#${id}`);

    if (!modal) {
        return;
    }

    modal.classList.remove("active");

    document.body.classList.remove(
        "modal-open"
    );

}


$$("[data-close-modal]").forEach(button => {

    button.addEventListener("click", () => {

        closeModal(
            button.dataset.closeModal
        );

    });

});


["projectModal", "serviceModal", "commandModal"]
.forEach(id => {

    const modal = $(`#${id}`);

    modal?.addEventListener("click", event => {

        if (event.target === modal) {

            closeModal(id);

        }

    });

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        ["projectModal", "serviceModal", "commandModal"]
            .forEach(closeModal);

    }

});


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    $("#contactForm");

contactForm?.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            $("#contactName").value.trim();

        const email =
            $("#contactEmail").value.trim();

        const type =
            $("#contactType").value;

        const message =
            $("#contactMessage").value.trim();


        if (!name || !email || !message) {

            showToast(
                "يرجى تعبئة جميع الحقول المطلوبة",
                "error"
            );

            return;

        }


        const text = `
مرحبًا حماس،

الاسم: ${name}
البريد الإلكتروني: ${email}
نوع المشروع: ${type}

تفاصيل المشروع:
${message}
        `.trim();


        const whatsappURL =
            `https://wa.me/967778799705?text=${encodeURIComponent(text)}`;


        window.open(
            whatsappURL,
            "_blank"
        );


        showToast(
            "تم تجهيز رسالتك وفتح WhatsApp"
        );


        contactForm.reset();

    }
);


/* =========================================================
   COPY BUTTONS
========================================================= */

$("#copyEmail")?.addEventListener(
    "click",
    async () => {

        await copyText(
            "engazprofessional@gmail.com"
        );

        showToast(
            "تم نسخ البريد الإلكتروني"
        );

    }
);


$("#copyWhatsapp")?.addEventListener(
    "click",
    async () => {

        await copyText(
            "967778799705"
        );

        showToast(
            "تم نسخ رقم WhatsApp"
        );

    }
);


async function copyText(text) {

    try {

        await navigator.clipboard.writeText(
            text
        );

    } catch {

        const textarea =
            document.createElement("textarea");

        textarea.value = text;

        document.body.appendChild(
            textarea
        );

        textarea.select();

        document.execCommand(
            "copy"
        );

        textarea.remove();

    }

}


/* =========================================================
   SHARE
========================================================= */

$("#sharePortfolio")?.addEventListener(
    "click",
    async () => {

        const shareData = {
            title:
                "حماس عادل أحمد رسام | Portfolio",

            text:
                "البورتفوليو الشخصي لحماس عادل أحمد رسام",

            url:
                window.location.href
        };


        if (
            navigator.share &&
            window.isSecureContext
        ) {

            try {

                await navigator.share(
                    shareData
                );

                return;

            } catch {
                return;
            }

        }


        await copyText(
            window.location.href
        );

        showToast(
            "تم نسخ رابط البورتفوليو"
        );

    }
);


/* =========================================================
   TOAST
========================================================= */

let toastTimer;

function showToast(
    message,
    type = "success"
) {

    const toast =
        $("#toast");

    const icon =
        $("#toastIcon");

    const text =
        $("#toastMessage");


    text.textContent =
        message;


    if (type === "error") {

        icon.textContent = "!";

        icon.className =
            "w-7 h-7 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center";

    } else {

        icon.textContent = "✓";

        icon.className =
            "w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center";

    }


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 3500);

}


/* =========================================================
   BACK TO TOP
========================================================= */

const topButton =
    $("#topButton");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.remove(
            "hidden"
        );

        topButton.classList.add(
            "flex"
        );

    } else {

        topButton.classList.add(
            "hidden"
        );

        topButton.classList.remove(
            "flex"
        );

    }

});


topButton?.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   COMMAND PALETTE
========================================================= */

const commandButton =
    $("#commandButton");

const commandModal =
    $("#commandModal");

const commandInput =
    $("#commandInput");

commandButton?.addEventListener(
    "click",
    () => {

        openModal(
            "commandModal"
        );

        setTimeout(() => {

            commandInput?.focus();

        }, 100);

    }
);


/* Ctrl + K */

document.addEventListener(
    "keydown",
    event => {

        if (
            (event.ctrlKey || event.metaKey) &&
            event.key.toLowerCase() === "k"
        ) {

            event.preventDefault();

            openModal(
                "commandModal"
            );

            setTimeout(() => {

                commandInput?.focus();

            }, 100);

        }

    }
);


/* Search */

commandInput?.addEventListener(
    "input",
    () => {

        const query =
            commandInput.value
                .trim()
                .toLowerCase();


        $$(".command-item").forEach(item => {

            const visible =
                item.textContent
                    .toLowerCase()
                    .includes(query);

            item.style.display =
                visible
                    ? "flex"
                    : "none";

        });

    }
);


/* Close palette after click */

$$(".command-item").forEach(item => {

    item.addEventListener(
        "click",
        () => {

            closeModal(
                "commandModal"
            );

            commandInput.value = "";

            $$(".command-item").forEach(
                command => {
                    command.style.display =
                        "flex";
                }
            );

        }
    );

});


/* =========================================================
   CURSOR GLOW
========================================================= */

const cursorGlow =
    $("#cursorGlow");

document.addEventListener(
    "mousemove",
    event => {

        if (!cursorGlow) {
            return;
        }

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement =
    $("#currentYear");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   REDUCED MOTION
========================================================= */

const prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

if (prefersReducedMotion) {

    document.documentElement.style.scrollBehavior =
        "auto";

}


/* =========================================================
   CONSOLE
========================================================= */

console.log(
    "%cPortfolio Loaded Successfully",
    "color:#8b5cf6;font-size:18px;font-weight:bold;"
);

console.log(
    "حماس عادل أحمد رسام | Technology & Creativity"
);