function resizeIframe() {
    var iframe = document.getElementById('googleFormIframe');
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}

// Tenta redimensionar o iframe após o carregamento do conteúdo
document.getElementById('googleFormIframe').onload = function () {
    resizeIframe();
};