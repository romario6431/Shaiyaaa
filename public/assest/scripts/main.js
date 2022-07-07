$.get("header.html", contentToInject=>{
    $('#header-placeholder').replaceWith(contentToInject);
});
$.get("footer.html", contentToInject=>{
    $('#footer-placeholder').replaceWith(contentToInject);
});