/* =========================================
   SIDEBAR
========================================= */

function toggleSidebar() {

    const sidebar =
        document.getElementById("sidebar");

    sidebar.classList.toggle("show");

}


/* =========================================
   PAGE NAVIGATION
========================================= */

function showSection(sectionId, element = null) {

    /* إخفاء الأقسام */

    const sections =
        document.querySelectorAll(".section");

    sections.forEach(section => {

        section.classList.remove("active");

    });


    /* إظهار القسم */

    const section =
        document.getElementById(sectionId);

    if (section) {

        section.classList.add("active");

    }


    /* القائمة */

    const menuLinks =
        document.querySelectorAll(".menu-link");

    menuLinks.forEach(link => {

        link.classList.remove("active");

    });


    if (element) {

        element.classList.add("active");

    } else {

        menuLinks.forEach(link => {

            const action =
                link.getAttribute("onclick");

            if (
                action &&
                action.includes(sectionId)
            ) {

                link.classList.add("active");

            }

        });

    }


    /* عناوين الصفحات */

    const titles = {

        dashboard: [
            "لوحة التحكم",
            "نظرة عامة على أداء متجرك اليوم"
        ],

        products: [
            "المنتجات",
            "إدارة جميع منتجات متجرك"
        ],

        orders: [
            "الطلبات",
            "متابعة وإدارة طلبات العملاء"
        ],

        customers: [
            "العملاء",
            "إدارة قاعدة بيانات العملاء"
        ],

        sales: [
            "المبيعات",
            "تحليل أداء المبيعات والإيرادات"
        ],

        offers: [
            "العروض والخصومات",
            "إدارة الحملات والعروض الخاصة"
        ],

        banner: [
            "واجهة المتجر",
            "التحكم في المحتوى الظاهر في الصفحة الرئيسية"
        ],

        settings: [
            "الإعدادات",
            "إعدادات المتجر والحساب"
        ]

    };


    if (titles[sectionId]) {

        document.getElementById("page-title").textContent =
            titles[sectionId][0];

        document.getElementById("page-description").textContent =
            titles[sectionId][1];

    }


    /* إغلاق القائمة على الجوال */

    if (window.innerWidth <= 1000) {

        document
            .getElementById("sidebar")
            .classList.remove("show");

    }

}


/* =========================================
   GLOBAL SEARCH
========================================= */

const globalSearch =
    document.getElementById("globalSearch");


if (globalSearch) {

    globalSearch.addEventListener(
        "input",
        function () {

            const value =
                this.value.toLowerCase().trim();

            const rows =
                document.querySelectorAll("tbody tr");


            rows.forEach(row => {

                const text =
                    row.textContent.toLowerCase();

                row.style.display =
                    text.includes(value)
                        ? ""
                        : "none";

            });

        }
    );

}


/* =========================================
   DELETE PRODUCT
========================================= */

document.addEventListener(
    "click",
    function (event) {

        const deleteButton =
            event.target.closest(".delete");


        if (!deleteButton) {
            return;
        }


        const row =
            deleteButton.closest("tr");


        if (!row) {
            return;
        }


        const confirmDelete =
            confirm(
                "هل أنت متأكد من حذف هذا المنتج؟"
            );


        if (confirmDelete) {

            row.style.opacity = "0";

            row.style.transform =
                "translateX(20px)";

            row.style.transition =
                ".3s";


            setTimeout(() => {

                row.remove();

            }, 300);

        }

    }
);


/* =========================================
   EDIT BUTTON
========================================= */

document.addEventListener(
    "click",
    function (event) {

        const editButton =
            event.target.closest(".edit");


        if (!editButton) {
            return;
        }


        const row =
            editButton.closest("tr");


        const product =
            row.querySelector(
                ".table-product strong"
            );


        if (product) {

            alert(
                "سيتم فتح نموذج تعديل المنتج: " +
                product.textContent
            );

        }

    }
);


/* =========================================
   NOTIFICATIONS
========================================= */

const notification =
    document.querySelector(".notification");


if (notification) {

    notification.addEventListener(
        "click",
        function () {

            alert(
                "لديك 3 إشعارات جديدة:\n\n" +
                "• طلب جديد #ORD-1024\n" +
                "• منتج وصل إلى كمية منخفضة\n" +
                "• تم تسجيل عميل جديد"
            );

        }
    );

}