/* Handles darkmode save states (Needs refactoring)*/
$(document).ready(function() {
    var sel = $.cookie("save-darkmode"); // get the cookie
    sel = sel == "true";
    $('.toggle-lightmode').toggleClass("activate-darkmode", sel).on('click', function(e) {
        $('body').toggleClass("swap-bg");
        $('.lightmode-header').toggleClass("swap-header");
        $('.lightmode-menubar').toggleClass("swap-menubar");
        $('.lightmode-block').toggleClass("swap-block");
        $('.lightmode-panel').toggleClass("swap-panel");
        $('.lightmode-panel-2').toggleClass("swap-panel-ovr");
        $('.lightmode-txt').toggleClass("swap-txt");
        $('.lightmode-ad').toggleClass("swap-ad");
        $('.lightmode-wavebar').toggleClass("swap-wavebar");
        $('.lightmode-highlight').toggleClass("swap-highlight");
        $('.lightmode-menubar-level1').toggleClass("swap-menubar-level1");
        $('.lightmode-menubar-level2').toggleClass("swap-menubar-level2");
        $('.lightmode-navsidebar-title').toggleClass("swap-navsidebar-title");
        $('.lightmode-navsidebar-anim').toggleClass("swap-navsidebar-anim");
        $('.lightmode-navsidebar-txt').toggleClass("swap-navsidebar-txt");
        $('.lightmode-buttons').toggleClass("swap-buttons");
        $(".markdown-body").toggleClass("swap-txt");
        $(".markdown-body h2").toggleClass("swap-txt");
        $("#featured-con-block h2").toggleClass("swap-txt");
        $("#featured-con-block p").toggleClass("swap-txt");

        $(".compat-con-container").toggleClass("swap-block");
        $(".compat-con-container p").toggleClass("swap-txt");
        $(".compat-con-container a").toggleClass("swap-txt");
        $(".compat-con-container i").toggleClass("swap-txt");
        $(".compat-con-container tr:nth-child(2n+1)").toggleClass("swap-block");
        $(".compat-con-container th").toggleClass("swap-block");
        $(".compat-hist-container").toggleClass("swap-block");
        $(".compat-hist-container p").toggleClass("swap-txt");
        $(".compat-hist-container a").toggleClass("swap-txt");
        $(".compat-hist-container i").toggleClass("swap-txt");
        $(".compat-hist-container tr:nth-child(2n+1)").toggleClass("swap-block");
        $(".compat-hist-container th").toggleClass("swap-block swap-txt");
        $(".compat-library-table").toggleClass("swap-block");
        $(".divTableHeading").toggleClass("swap-block");
        $(".divTableHeading").toggleClass("swap-txt");
        $(".compat-tx1-criteria").toggleClass("swap-block");
        $(".compat-tx1-criteria").toggleClass("swap-txt");
        $(".compat-status-text").toggleClass("swap-txt");
        $(".compat-search-character").toggleClass("swap-block-search");

        $("#compat-con-pages").toggleClass("swap-block swap-txt");
        $("#compat-author").toggleClass("swap-compat-author");
        $(".nav-links").toggleClass("swap-blog-body swap-txt");
        $(".hentry").toggleClass("swap-blog-body swap-txt");
        $(".entry-header").toggleClass("swap-blog-header");
        $(".entry-footer").toggleClass("swap-blog-footer");
        $(".entry-content h2").toggleClass("swap-blog-h2");
        $(".site-description").toggleClass("swap-blog-sidebar");
        $(".widget-title").toggleClass("swap-blog-sidebar");
        $(".page-header").toggleClass("swap-blog-body");
        $(".page-content").toggleClass("swap-blog-body swap-txt");
		
		$(".debug-main").toggleClass("swap-block");
    });
    $(".toggle-lightmode").on("click", function() {
        var $this = $(this);
        sel = !sel;
        $this.toggleClass("activate-darkmode", sel);
        $.cookie("save-darkmode", sel, {
            expires: 365,
            path: '/'
        });
    });
});
$(document).ready(function() {
    if ($('.toggle-lightmode').hasClass('activate-darkmode')) {
        $('body').addClass("swap-bg");
        $('.lightmode-header').addClass("swap-header");
        $('.lightmode-menubar').addClass("swap-menubar");
        $('.lightmode-block').addClass("swap-block");
        $('.lightmode-panel').addClass("swap-panel");
        $('.lightmode-panel-2').addClass("swap-panel-ovr");
        $('.lightmode-txt').addClass("swap-txt");
        $('.lightmode-ad').addClass("swap-ad");
        $('.lightmode-wavebar').addClass("swap-wavebar");
        $('.lightmode-highlight').addClass("swap-highlight");
        $('.lightmode-menubar-level1').addClass("swap-menubar-level1");
        $('.lightmode-menubar-level2').addClass("swap-menubar-level2");
        $('.lightmode-navsidebar-title').addClass("swap-navsidebar-title");
        $('.lightmode-navsidebar-anim').addClass("swap-navsidebar-anim");
        $('.lightmode-navsidebar-txt').addClass("swap-navsidebar-txt");
        $('.lightmode-buttons').addClass("swap-buttons");
        $(".markdown-body").addClass("swap-txt");
        $(".markdown-body h2").addClass("swap-txt");
        $("#featured-con-block h2").addClass("swap-txt");
        $("#featured-con-block p").addClass("swap-txt");

        $(".compat-con-container").addClass("swap-block");
        $(".compat-con-container p").addClass("swap-txt");
        $(".compat-con-container a").addClass("swap-txt");
        $(".compat-con-container i").addClass("swap-txt");
        $(".compat-con-container tr:nth-child(2n+1)").addClass("swap-block");
        $(".compat-con-container th").addClass("swap-block");
        $(".compat-hist-container").addClass("swap-block");
        $(".compat-hist-container p").addClass("swap-txt");
        $(".compat-hist-container a").addClass("swap-txt");
        $(".compat-hist-container i").addClass("swap-txt");
        $(".compat-hist-container tr:nth-child(2n+1)").addClass("swap-block");
        $(".compat-hist-container th").addClass("swap-block swap-txt");
        $(".compat-library-table").addClass("swap-block");
        $(".divTableHeading").addClass("swap-block");
        $(".divTableHeading").addClass("swap-txt");
        $(".compat-tx1-criteria").addClass("swap-block");
        $(".compat-tx1-criteria").addClass("swap-txt");
        $(".compat-status-text").addClass("swap-txt");
        $(".compat-search-character").addClass("swap-block-search");

        $("#compat-con-pages").addClass("swap-block swap-txt");
        $("#compat-author").addClass("swap-compat-author");
        $(".nav-links").addClass("swap-blog-body swap-txt");
        $(".hentry").addClass("swap-blog-body swap-txt");
        $(".entry-header").addClass("swap-blog-header");
        $(".entry-footer").addClass("swap-blog-footer");
        $(".entry-content h2").addClass("swap-blog-h2");
        $(".site-description").addClass("swap-blog-sidebar");
        $(".widget-title").addClass("swap-blog-sidebar");
        $(".page-header").addClass("swap-blog-body");
        $(".page-content").addClass("swap-blog-body swap-txt");
		
		$(".debug-main ul").addClass("swap-block");
    } else {
        $('body').removeClass("swap-bg");
        $('.lightmode-header').removeClass("swap-header");
        $('.lightmode-menubar').removeClass("swap-menubar");
        $('.lightmode-block').removeClass("swap-block");
        $('.lightmode-panel').removeClass("swap-panel");
        $('.lightmode-panel-2').removeClass("swap-panel-ovr");
        $('.lightmode-txt').removeClass("swap-txt");
        $('.lightmode-ad').removeClass("swap-ad");
        $('.lightmode-wavebar').removeClass("swap-wavebar");
        $('.lightmode-highlight').removeClass("swap-highlight");
        $('.lightmode-menubar-level1').removeClass("swap-menubar-level1");
        $('.lightmode-menubar-level2').removeClass("swap-menubar-level2");
        $('.lightmode-navsidebar-title').removeClass("swap-navsidebar-title");
        $('.lightmode-navsidebar-anim').removeClass("swap-navsidebar-anim");
        $('.lightmode-navsidebar-txt').removeClass("swap-navsidebar-txt");
        $('.lightmode-buttons').removeClass("swap-buttons");
        $(".markdown-body").removeClass("swap-txt");
        $(".markdown-body h2").removeClass("swap-txt");
        $("#featured-con-block h2").removeClass("swap-txt");
        $("#featured-con-block p").removeClass("swap-txt");

        $(".compat-con-container").removeClass("swap-block");
        $(".compat-con-container p").removeClass("swap-txt");
        $(".compat-con-container a").removeClass("swap-txt");
        $(".compat-con-container i").removeClass("swap-txt");
        $(".compat-con-container tr:nth-child(2n+1)").removeClass("swap-block");
        $(".compat-con-container th").removeClass("swap-block");
        $(".compat-hist-container").removeClass("swap-block");
        $(".compat-hist-container p").removeClass("swap-txt");
        $(".compat-hist-container a").removeClass("swap-txt");
        $(".compat-hist-container i").removeClass("swap-txt");
        $(".compat-hist-container tr:nth-child(2n+1)").removeClass("swap-block");
        $(".compat-hist-container th").removeClass("swap-block swap-txt");
        $(".compat-library-table").removeClass("swap-block");
        $(".divTableHeading").removeClass("swap-block");
        $(".divTableHeading").removeClass("swap-txt");
        $(".compat-tx1-criteria").removeClass("swap-block");
        $(".compat-tx1-criteria").removeClass("swap-txt");
        $(".compat-status-text").removeClass("swap-txt");
        $(".compat-search-character").removeClass("swap-block-search");

        $("#compat-con-pages").removeClass("swap-block swap-txt");
        $("#compat-author").removeClass("swap-compat-author");
        $(".nav-links").removeClass("swap-blog-body swap-txt");
        $(".hentry").removeClass("swap-blog-body swap-txt");
        $(".entry-header").removeClass("swap-blog-header");
        $(".entry-footer").removeClass("swap-blog-footer");
        $(".entry-content h2").removeClass("swap-blog-h2");
        $(".site-description").removeClass("swap-blog-sidebar");
        $(".widget-title").removeClass("swap-blog-sidebar");
        $(".page-header").removeClass("swap-blog-body");
        $(".page-content").removeClass("swap-blog-body swap-txt");
		
		$(".debug-main").removeClass("swap-block");
    }
});