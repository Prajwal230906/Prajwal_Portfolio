(() => {
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#primary-nav');
  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      navigation.classList.toggle('is-open', !isOpen);
    });
    navigation.addEventListener('click', (event) => {
      if (event.target.closest('a') && window.matchMedia('(max-width: 700px)').matches) {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
        navigation.classList.remove('is-open');
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
        navigation.classList.remove('is-open');
        menuButton.focus();
      }
    });
  }

  const revealItems = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealItems.forEach((item) => {
      if (item.dataset.delay) item.style.setProperty('--reveal-delay', `${item.dataset.delay}ms`);
    });
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-revealed'));
  }

  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    const updateButton = () => backToTop.classList.toggle('is-visible', window.scrollY > 450);
    window.addEventListener('scroll', updateButton, { passive: true });
    updateButton();
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      if (!contactForm.reportValidity()) {
        event.preventDefault();
        return;
      }
      if (window.location.protocol === 'file:') {
        event.preventDefault();
        const name = contactForm.elements.name.value.trim();
        const email = contactForm.elements.email.value.trim();
        const message = contactForm.elements.message.value.trim();
        const subject = encodeURIComponent(`Portfolio message from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        const status = contactForm.querySelector('.form-status');
        if (status) {
          status.hidden = false;
          status.textContent = 'Opening your email app to send this message.';
        }
        window.location.href = `mailto:cheela.prajwalkumar2024@vitstudent.ac.in?subject=${subject}&body=${body}`;
        return;
      }
      const submit = contactForm.querySelector('[type="submit"]');
      if (submit) {
        submit.disabled = true;
        submit.setAttribute('aria-busy', 'true');
        submit.innerHTML = 'Sending… <span aria-hidden="true">↗</span>';
      }
    });
  }
})();
