function checkSupport() {
   const canvas = document.getElementById('canvas');
   if (
     !window.WebGLRenderingContext &&
     !canvas.getContext('webgl')
   ) return; // redirect simplepage;
   loadApplication();
};

function loadApplication() {
   const
      head = document.head,
      baseStyles = document.createElement('link'),
      loader  = document.createElement('script');

   baseStyles.rel = 'stylesheet';
   baseStyles.href = 'src/styles/index.css';
   baseStyles.defer = true;
   baseStyles.type = 'text/css';
   head.appendChild(baseStyles);

   loader.src = 'src/root.js';
   baseStyles.defer = true;
   loader.type = 'module';
   head.appendChild(loader);

   document.removeEventListener('DOMContentLoaded', checkSupport);
};

{
   document.addEventListener('DOMContentLoaded', checkSupport);
}