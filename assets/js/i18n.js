(function () {
  const LANG_KEY = 'filesort-lang';

  const texts = {
    es: {
      nav: ['Inicio', 'Características', 'Planes', 'FAQ'],
      hero: {
        title: 'Organiza tus archivos con un solo clic',
        subtitle: 'IA + Motor local · 19 categorías · 9 perfiles profesionales',
        cta_primary: 'Comenzar en Whop',
        cta_secondary: 'Ver Planes',
      },
      features: {
        title: 'Todo lo que necesitas para organizar tu mundo digital',
        subtitle: 'Potencia, velocidad y precisión en una sola herramienta.',
        items: [
          { icon: '🤖', title: 'IA + Motor Local', desc: 'Clasificación inteligente con IA y motor offline.' },
          { icon: '📄', title: '+100 Formatos', desc: 'Soporta documentos, imágenes, audio, video, código y más.' },
          { icon: '↩️', title: 'Undo / Rollback', desc: 'Deshace cualquier organización al instante.' },
          { icon: '📂', title: '19 Categorías', desc: 'Organización inteligente en categorías predefinidas.' },
          { icon: '👤', title: '9 Perfiles', desc: 'Freelancer, PYME, Legal, Marketing, Académico y más.' },
          { icon: '🌐', title: 'Multi-idioma', desc: 'Disponible en español, inglés, chino y portugués.' },
          { icon: '📊', title: 'Historial', desc: 'Estadísticas completas de cada sesión de organización.' },
          { icon: '🎯', title: 'Detección Automática', desc: 'Perfil detectado automáticamente según tu contenido.' },
        ],
      },
      pricing: {
        title: 'Planes flexibles para cada necesidad',
        subtitle: 'Elige el plan que mejor se adapte a tu flujo de trabajo.',
        badge: 'Más Popular',
        per_month: '/mes',
        lifetime: 'o {price} de por vida',
        btn_monthly: 'Comprar Mensual',
        btn_lifetime: 'Comprar Lifetime',
        tiers: {
          essential: {
            name: 'Essential',
            icon: '🟢',
            desc: 'Perfecto para uso personal',
            monthly: '9.99',
            lifetime: '79.99',
            benefits: [
              { type: 'check', text: '20 clasificaciones IA / hora' },
              { type: 'check', text: '500 clasificaciones IA / día' },
              { type: 'check', text: 'Soporte vía chatbot' },
              { type: 'warn', text: 'Modo offline limitado' },
            ],
            urls: { monthly: 'https://whop.com/checkout/plan_KD2s9KsnF21H0', lifetime: 'https://whop.com/checkout/plan_W4XBI3LyVtHuR' },
          },
          elite: {
            name: 'Elite',
            icon: '🔵',
            desc: 'Para usuarios frecuentes',
            monthly: '19.99',
            lifetime: '149.99',
            benefits: [
              { type: 'check', text: '100 clasificaciones IA / hora' },
              { type: 'check', text: '2,400 clasificaciones IA / día' },
              { type: 'check', text: 'Soporte vía chatbot' },
              { type: 'warn', text: 'Modo offline limitado' },
            ],
            urls: { monthly: 'https://whop.com/checkout/plan_nGghBP6Gj5MQ9', lifetime: 'https://whop.com/checkout/plan_WSqZnngVpnUho' },
          },
          ultimate: {
            name: 'Ultimate',
            icon: '💎',
            desc: 'Uso profesional sin límites',
            monthly: '49.99',
            lifetime: '399.99',
            benefits: [
              { type: 'star', text: 'Clasificaciones IA sin límite' },
              { type: 'star', text: 'Soporte personalizado' },
              { type: 'star', text: 'Modo offline optimizado' },
              { type: 'star', text: 'API keys dedicadas' },
              { type: 'star', text: 'Recuperación en 1 minuto' },
            ],
            urls: { monthly: 'https://whop.com/checkout/plan_wT6Z75LU2xl2U', lifetime: 'https://whop.com/checkout/plan_6JxhJeuRLwfJ3' },
          },
        },
      },
      faq: {
        title: 'Preguntas Frecuentes',
        items: [
          {
            q: '¿Qué es FileSort Pro?',
            a: 'FileSort Pro es una aplicación de clasificación automatizada de archivos que organiza tu carpeta desordenada con un solo clic. Usa inteligencia artificial (Groq) y un motor local para clasificar documentos, imágenes, audio, video y más en carpetas inteligentes. Además, detecta automáticamente tu perfil profesional (Freelancer, PYME, Legal, etc.) para una organización personalizada.',
          },
          {
            q: '¿Necesito internet para usarlo?',
            a: 'FileSort Pro funciona tanto en línea como fuera de línea. Con conexión a internet, usas el motor de IA para una clasificación más precisa. Sin conexión, el motor local sigue funcionando, aunque con capacidades limitadas. El plan Ultimate tiene el modo offline optimizado.',
          },
          {
            q: '¿Puedo probarlo gratis?',
            a: 'Sí. Puedes iniciar una prueba gratuita de 14 días (o 3 clasificaciones, lo que ocurra primero) sin necesidad de tarjeta de crédito. Al finalizar, puedes elegir cualquiera de nuestros planes para seguir usándolo.',
          },
          {
            q: '¿Cuál es la diferencia entre los planes?',
            a: 'La diferencia principal está en los límites de clasificaciones IA por hora/día y el nivel de soporte. Essential es ideal para uso personal, Elite para usuarios frecuentes, y Ultimate para uso profesional sin límites con soporte personalizado y modo offline optimizado.',
          },
          {
            q: '¿Cómo funciona el pago?',
            a: 'El pago se procesa a través de Whop, una plataforma segura de pagos. No almacenamos información financiera. Puedes elegir entre pago mensual o pago único de por vida (lifetime). Todos los pagos son procesados de forma segura por Whop.',
          },
          {
            q: '¿La app tiene algún fallo o necesito ayuda?',
            a: 'Si encuentras algún error o necesitas ayuda, escríbenos a <a href="mailto:support@filesort.pro">support@filesort.pro</a>. También puedes consultar el chatbot de soporte integrado en la app para errores genéricos y solución de problemas comunes.',
          },
        ],
      },
      footer: {
        tagline: 'Clasificación inteligente de archivos con un solo clic.',
        rights: 'Todos los derechos reservados.',
        privacy: 'Política de Privacidad',
        terms: 'Términos y Condiciones',
        contact: 'Contacto',
      },
      legal: {
        privacy_title: 'Política de Privacidad',
        terms_title: 'Términos y Condiciones',
        last_updated: 'Última actualización: 1 de junio, 2026',
      },
      not_found: {
        title: 'Página no encontrada',
        desc: 'La página que buscas no existe o ha sido movida.',
        btn: 'Volver al inicio',
      },
    },

    en: {
      nav: ['Home', 'Features', 'Pricing', 'FAQ'],
      hero: {
        title: 'Organize your files with one click',
        subtitle: 'AI + Local Engine · 19 categories · 9 professional profiles',
        cta_primary: 'Get Started on Whop',
        cta_secondary: 'View Plans',
      },
      features: {
        title: 'Everything you need to organize your digital world',
        subtitle: 'Power, speed and precision in a single tool.',
        items: [
          { icon: '🤖', title: 'AI + Local Engine', desc: 'Smart AI classification with offline engine.' },
          { icon: '📄', title: '+100 Formats', desc: 'Supports documents, images, audio, video, code and more.' },
          { icon: '↩️', title: 'Undo / Rollback', desc: 'Undo any organization instantly.' },
          { icon: '📂', title: '19 Categories', desc: 'Smart organization into predefined categories.' },
          { icon: '👤', title: '9 Profiles', desc: 'Freelancer, SME, Legal, Marketing, Academic and more.' },
          { icon: '🌐', title: 'Multi-language', desc: 'Available in Spanish, English, Chinese and Portuguese.' },
          { icon: '📊', title: 'History', desc: 'Complete statistics for every organization session.' },
          { icon: '🎯', title: 'Auto Detection', desc: 'Profile auto-detected based on your content.' },
        ],
      },
      pricing: {
        title: 'Flexible plans for every need',
        subtitle: 'Choose the plan that best fits your workflow.',
        badge: 'Most Popular',
        per_month: '/month',
        lifetime: 'or {price} lifetime',
        btn_monthly: 'Buy Monthly',
        btn_lifetime: 'Buy Lifetime',
        tiers: {
          essential: {
            name: 'Essential',
            icon: '🟢',
            desc: 'Perfect for personal use',
            monthly: '9.99',
            lifetime: '79.99',
            benefits: [
              { type: 'check', text: '20 AI classifications / hour' },
              { type: 'check', text: '500 AI classifications / day' },
              { type: 'check', text: 'Chatbot support' },
              { type: 'warn', text: 'Limited offline mode' },
            ],
            urls: { monthly: 'https://whop.com/checkout/plan_KD2s9KsnF21H0', lifetime: 'https://whop.com/checkout/plan_W4XBI3LyVtHuR' },
          },
          elite: {
            name: 'Elite',
            icon: '🔵',
            desc: 'For frequent users',
            monthly: '19.99',
            lifetime: '149.99',
            benefits: [
              { type: 'check', text: '100 AI classifications / hour' },
              { type: 'check', text: '2,400 AI classifications / day' },
              { type: 'check', text: 'Chatbot support' },
              { type: 'warn', text: 'Limited offline mode' },
            ],
            urls: { monthly: 'https://whop.com/checkout/plan_nGghBP6Gj5MQ9', lifetime: 'https://whop.com/checkout/plan_WSqZnngVpnUho' },
          },
          ultimate: {
            name: 'Ultimate',
            icon: '💎',
            desc: 'Professional unlimited use',
            monthly: '49.99',
            lifetime: '399.99',
            benefits: [
              { type: 'star', text: 'Unlimited AI classifications' },
              { type: 'star', text: 'Personalized support' },
              { type: 'star', text: 'Optimized offline mode' },
              { type: 'star', text: 'Dedicated API keys' },
              { type: 'star', text: '1-minute recovery window' },
            ],
            urls: { monthly: 'https://whop.com/checkout/plan_wT6Z75LU2xl2U', lifetime: 'https://whop.com/checkout/plan_6JxhJeuRLwfJ3' },
          },
        },
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            q: 'What is FileSort Pro?',
            a: 'FileSort Pro is an automated file sorting application that organizes your messy folder with one click. It uses AI (Groq) and a local engine to classify documents, images, audio, video and more into smart folders. It also auto-detects your professional profile (Freelancer, SME, Legal, etc.) for personalized organization.',
          },
          {
            q: 'Do I need internet to use it?',
            a: 'FileSort Pro works both online and offline. With internet, you use the AI engine for more accurate classification. Offline, the local engine still works, albeit with limited capabilities. The Ultimate plan has optimized offline mode.',
          },
          {
            q: 'Can I try it for free?',
            a: 'Yes. You can start a free 14-day trial (or 3 classifications, whichever comes first) with no credit card required. After the trial, you can choose any of our plans to continue using it.',
          },
          {
            q: 'What\'s the difference between plans?',
            a: 'The main difference is in AI classification limits per hour/day and support level. Essential is ideal for personal use, Elite for frequent users, and Ultimate for professional unlimited use with personalized support and optimized offline mode.',
          },
          {
            q: 'How does payment work?',
            a: 'Payment is processed through Whop, a secure payment platform. We do not store financial information. You can choose between monthly payment or one-time lifetime payment. All payments are securely processed by Whop.',
          },
          {
            q: 'Is there a bug or do I need help?',
            a: 'If you encounter any issues or need help, write to us at <a href="mailto:support@filesort.pro">support@filesort.pro</a>. You can also check the integrated support chatbot in the app for generic errors and common troubleshooting.',
          },
        ],
      },
      footer: {
        tagline: 'Smart file classification with one click.',
        rights: 'All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms & Conditions',
        contact: 'Contact',
      },
      legal: {
        privacy_title: 'Privacy Policy',
        terms_title: 'Terms & Conditions',
        last_updated: 'Last updated: June 1, 2026',
      },
      not_found: {
        title: 'Page not found',
        desc: 'The page you are looking for does not exist or has been moved.',
        btn: 'Back to home',
      },
    },
  };

  function detectLang() {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === 'es' || stored === 'en') return stored;
    const nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    return nav.startsWith('es') ? 'es' : 'en';
  }

  let currentLang = detectLang();

  function t(path) {
    const parts = path.split('.');
    let obj = texts[currentLang];
    for (const p of parts) {
      if (obj && obj[p] !== undefined) obj = obj[p];
      else return path;
    }
    return obj;
  }

  function render(selector, html) {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = html;
  }

  function applyLang() {
    document.documentElement.lang = currentLang === 'es' ? 'es' : 'en';

    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = currentLang === 'es' ? 'EN' : 'ES';

    // Nav
    const navLinks = document.querySelectorAll('.nav-desktop a');
    const navTexts = t('nav');
    if (navLinks.length === navTexts.length) {
      navLinks.forEach((a, i) => { a.textContent = navTexts[i]; });
    }

    // Hero
    render('[data-i18n="hero-title"]', t('hero.title'));
    render('[data-i18n="hero-subtitle"]', t('hero.subtitle'));
    render('[data-i18n="hero-cta-primary"]', t('hero.cta_primary'));
    render('[data-i18n="hero-cta-secondary"]', t('hero.cta_secondary'));

    // Features
    render('[data-i18n="features-title"]', t('features.title'));
    render('[data-i18n="features-subtitle"]', t('features.subtitle'));
    const featureItems = t('features.items');
    document.querySelectorAll('.feature-card').forEach((card, i) => {
      if (featureItems[i]) {
        card.querySelector('.feature-icon').textContent = featureItems[i].icon;
        card.querySelector('h3').textContent = featureItems[i].title;
        card.querySelector('p').textContent = featureItems[i].desc;
      }
    });

    // Pricing
    render('[data-i18n="pricing-title"]', t('pricing.title'));
    render('[data-i18n="pricing-subtitle"]', t('pricing.subtitle'));
    render('[data-i18n="pricing-badge"]', t('pricing.badge'));

    ['essential', 'elite', 'ultimate'].forEach((tier) => {
      const data = t(`pricing.tiers.${tier}`);
      const card = document.querySelector(`[data-tier="${tier}"]`);
      if (!card || !data) return;
      card.querySelector('.tier-icon').textContent = data.icon;
      card.querySelector('h3').textContent = data.name;
      card.querySelector('.tier-desc').textContent = data.desc;
      card.querySelector('.amount').textContent = '$' + data.monthly;
      card.querySelector('.period').textContent = t('pricing.per_month');
      card.querySelector('.price-lifetime').textContent = t('pricing.lifetime').replace('{price}', '$' + data.lifetime);

      const list = card.querySelector('.pricing-benefits');
      if (list) {
        list.innerHTML = data.benefits.map(b => {
          const cls = b.type === 'check' ? 'check' : b.type === 'warn' ? 'warn' : 'star';
          const sym = b.type === 'check' ? '✓' : b.type === 'warn' ? '⚠' : '★';
          return `<li><span class="${cls}">${sym}</span> ${b.text}</li>`;
        }).join('');
      }

      const monthlyBtn = card.querySelector('.btn-pricing');
      const lifetimeBtn = card.querySelector('.btn-pricing-outline');
      if (monthlyBtn) {
        monthlyBtn.textContent = t('pricing.btn_monthly');
        monthlyBtn.href = data.urls.monthly;
      }
      if (lifetimeBtn) {
        lifetimeBtn.textContent = t('pricing.btn_lifetime');
        lifetimeBtn.href = data.urls.lifetime;
      }
    });

    // FAQ
    render('[data-i18n="faq-title"]', t('faq.title'));
    const faqItems = t('faq.items');
    document.querySelectorAll('.faq-item').forEach((item, i) => {
      if (faqItems[i]) {
        item.querySelector('.faq-question-text').textContent = faqItems[i].q;
        item.querySelector('.faq-answer p').innerHTML = faqItems[i].a;
      }
    });

    // Footer
    render('[data-i18n="footer-tagline"]', t('footer.tagline'));
    render('[data-i18n="footer-rights"]', t('footer.rights'));
    render('[data-i18n="footer-privacy"]', t('footer.privacy'));
    render('[data-i18n="footer-terms"]', t('footer.terms'));
    render('[data-i18n="footer-contact"]', t('footer.contact'));
  }

  function toggleLang() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem(LANG_KEY, currentLang);
    applyLang();
  }

  function initLang() {
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.addEventListener('click', toggleLang);
    applyLang();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLang);
  } else {
    initLang();
  }

  window.__i18n = { t, toggleLang, currentLang: () => currentLang };
})();
