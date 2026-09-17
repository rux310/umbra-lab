const demoRows = [...document.querySelectorAll('#demoBody tr[data-row]')];
const demoButtons = [...document.querySelectorAll('[data-demo]')];
const demoCaption = document.querySelector('#demoCaption');

const captions = {
  all: '4～6行目に空白があり、7行目からデータが始まります。',
  h: 'H列が「対象値1」の7行目と9行目だけを表示し、行全体をグレーにしました。',
  f: 'いったん全件表示に戻した後、F列が「B」の行だけを表示しています。先ほど付けたグレーは残ります。'
};

function updateDemo(mode) {
  demoRows.forEach((row) => {
    const matchesH = row.dataset.h === '対象値1';
    const matchesF = row.dataset.f === 'B';

    row.classList.toggle('is-gray', mode !== 'all' && matchesH);
    row.classList.toggle('is-filtered-out',
      (mode === 'h' && !matchesH) || (mode === 'f' && !matchesF)
    );
  });

  demoButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.demo === mode);
  });

  if (demoCaption) demoCaption.textContent = captions[mode];
}

demoButtons.forEach((button) => {
  button.addEventListener('click', () => updateDemo(button.dataset.demo));
});

document.querySelectorAll('.copy-button').forEach((button) => {
  button.addEventListener('click', async () => {
    const code = button.closest('.code-block').querySelector('code').textContent;
    try {
      await navigator.clipboard.writeText(code);
      button.textContent = 'コピー済み';
      window.setTimeout(() => { button.textContent = 'コピー'; }, 1400);
    } catch {
      button.textContent = '選択してコピー';
    }
  });
});

const progressBar = document.querySelector('.reading-progress span');
function updateProgress() {
  if (!progressBar) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

const sections = [...document.querySelectorAll('article section[id]')];
const tocLinks = [...document.querySelectorAll('.toc a')];
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    tocLinks.forEach((link) => {
      link.classList.toggle('is-current', link.hash === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-20% 0px -70% 0px' });
sections.forEach((section) => observer.observe(section));
