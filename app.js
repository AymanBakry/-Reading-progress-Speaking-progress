/* =====================================================================
   منصة Reading Progress & Speaking Progress 2026-2027
   - لتعديل الحالات للجميع: انسخ كود الحالات من زر "نسخ كود الحالات"
     والصقه مكان STATUS_DEFAULT أدناه ثم احفظ الملف في GitHub.
   - لإضافة صور حقيقية: ضع صورة باسم r1.jpg ... r10.jpg أو s1.jpg ... s10.jpg
     داخل مجلد اسمه images بجانب index.html (اختياري).
   ===================================================================== */
(function () {
  'use strict';

  /* ---------- الحالات المنشورة للجميع (عدّلها من هنا) ---------- */
  // القيم: 'none' لم يبدأ | 'doing' جاري التنفيذ | 'done' تم التنفيذ | 'postponed' تم التأجيل
  const STATUS_DEFAULT = {
    // مثال: R1: 'done', R2: 'doing', S1: 'postponed'
  };

  const STORE = 'bp_status_2026_v1';
  const ST = {
    none:      { label: 'لم يبدأ',       icon: '⚪' },
    doing:     { label: 'جاري التنفيذ',  icon: '⏳' },
    done:      { label: 'تم التنفيذ',    icon: '✅' },
    postponed: { label: 'تم التأجيل',    icon: '⏸️' }
  };

  /* ---------- بطاقات التقييم من 100 ---------- */
  const RUB = {
    R: [['دقة القراءة ونطق الكلمات', 35], ['الطلاقة والسرعة المناسبة', 25],
        ['التنغيم والتوقف عند علامات الترقيم', 20], ['وضوح الصوت وجودة التسجيل', 10],
        ['قراءة النص كاملًا والالتزام بالموعد', 10]],
    S: [['الأفكار والمحتوى', 25], ['الطلاقة وترابط الحديث', 25], ['المفردات والقواعد', 20],
        ['النطق والتنغيم', 20], ['الالتزام وجودة التسجيل', 10]]
  };
  const TIPS = {
    R: ['اقرأ النص بصوت عالٍ عدة مرات قبل التسجيل.',
        'سجّل أكثر من محاولة، ثم اختر أفضل قراءة وأرسلها.',
        'اقرأ النص كاملًا ولا تلخّصه، وتوقف عند علامات الترقيم.',
        'اختر مكانًا هادئًا وتأكد من وضوح الصوت قبل الإرسال.'],
    S: ['جهّز أفكارك في نقاط قصيرة ولا تحفظ نصًا طويلًا.',
        'سجّل أكثر من محاولة، ثم اختر أفضلها وأرسلها.',
        'تحدث بصوت واضح وبسرعة مناسبة واستخدم كلمات الربط.',
        'يمكنك التسجيل صوتيًا فقط، ولا تُعرض التسجيلات خارج فريق الفصل.']
  };

  /* ---------- بيانات الأنشطة ---------- */
  const WKD = 'نُقل إلى الخميس لأن الجمعة عطلة نهاية الأسبوع.';
  const BRK = 'وقع في إجازة نصف العام (15–30 يناير 2027) فأُجّل.';
  const FEB = 'أُجّل بسبب إجازة نصف العام، واعتُمد 28 فبراير بدل 30 فبراير (غير موجود).';

  const mk = (prog, n, topic, fmt, task, planned, date, note, g, e) =>
    ({ id: prog + n, prog, n, topic, fmt, task, planned, date, note, g, e });

  const A = [
    // ---------- Reading Progress ----------
    mk('R', 1, 'Sports', '', 'وضوح الصوت ونطق الكلمات الصعبة', '2026-09-15', '2026-09-15', '', ['#16a34a', '#f59e0b', '#0ea5e9'], ['⚽', '🏀', '🏐', '🎾', '🏈', '🏆', '🥇', '⛹️']),
    mk('R', 2, 'Health', '', 'الطلاقة وتجنب التوقف المتكرر', '2026-09-30', '2026-09-30', '', ['#0ea5a4', '#22c55e', '#3b82f6'], ['🩺', '💧', '🏃', '🍎', '😴', '🦷', '💪', '🧘']),
    mk('R', 3, 'My Family and Friends', '', 'التنغيم والتوقف عند علامات الترقيم', '2026-10-15', '2026-10-15', '', ['#ec4899', '#f97316', '#facc15'], ['👨‍👩‍👧‍👦', '🤝', '🏠', '❤️', '🎈', '🥰', '🧑‍🤝‍🧑', '🎂']),
    mk('R', 4, 'The Weather and Seasons', '', 'نطق أسماء الفصول والمفردات الجديدة', '2026-10-30', '2026-10-29', WKD, ['#38bdf8', '#6366f1', '#fbbf24'], ['☀️', '🌧️', '❄️', '🍂', '🌸', '⛈️', '🌈', '🌬️']),
    mk('R', 5, 'Healthy Food vs. Junk Food', '', 'سرعة القراءة المناسبة', '2026-11-15', '2026-11-15', '', ['#22c55e', '#84cc16', '#ef4444'], ['🥗', '🍎', '🥦', '🥕', '🍔', '🍟', '🍕', '🍓']),
    mk('R', 6, 'My Favorite School Subject', '', 'نبرة القارئ وإبراز الكلمات المهمة', '2026-11-30', '2026-11-30', '', ['#6366f1', '#a855f7', '#facc15'], ['📚', '✏️', '🔬', '➗', '🌍', '🎨', '💻', '🧪']),
    mk('R', 7, 'Bahraini Traditional Food', '', 'نطق الأسماء والمفردات الخاصة بالموضوع', '2026-12-15', '2026-12-15', '', ['#b45309', '#f59e0b', '#7c2d12'], ['🍛', '☕', '🥙', '🍯', '🍲', '🍚', '🧆', '🌴']),
    mk('R', 8, 'Ramadan in Bahrain', '', 'الطلاقة وتتابع الجمل دون تعثر', '2026-12-30', '2026-12-30', '', ['#312e81', '#7c3aed', '#f59e0b'], ['🌙', '⭐', '🕌', '🏮', '🥣', '✨', '🕋', '🤲']),
    mk('R', 9, "Mothers' Day", '', 'التعبير بنبرة صوت معبّرة', '2027-01-15', '2027-01-31', BRK + ' ونُقل إلى أول يوم دراسي بعدها.', ['#f43f5e', '#ec4899', '#fda4af'], ['💐', '👩‍👧', '🎁', '❤️', '🌹', '🥰', '🌷', '💝']),
    mk('R', 10, 'Bahraini Landmarks', '', 'دمج مهارات القراءة السابقة في قراءة متقنة', '2027-01-30', '2027-02-15', BRK + ' وانتقل إلى الموعد التالي.', ['#0891b2', '#f59e0b', '#7c3aed'], ['🏰', '🕌', '🌴', '🌊', '🏛️', '🦪', '⛵', '📸']),
    // ---------- Speaking Progress ----------
    mk('S', 1, 'A place I visited and liked so much', 'Video Postcard', 'يسجّل رسالة من دقيقة إلى دقيقتين يصف فيها مكانًا زاره بالماضي البسيط، ويمكنه عرض صورة للمكان', '2026-10-01', '2026-10-01', '', ['#06b6d4', '#f97316', '#8b5cf6'], ['🗺️', '🏖️', '🧳', '✈️', '📸', '🏔️', '🚗', '🎡']),
    mk('S', 2, 'My Daily Routine', 'A Day in My Life', 'يسجّل تسجيلًا صوتيًا يروي فيه روتينه اليومي بترتيب الوقت في 8 جمل على الأقل', '2026-10-15', '2026-10-15', '', ['#f59e0b', '#3b82f6', '#10b981'], ['⏰', '🌅', '🪥', '🎒', '🍽️', '🚌', '📖', '🌙']),
    mk('S', 3, 'Festivals', 'Festival Reporter', 'يقدّم تقريرًا كمراسل عن مناسبة أو احتفال: ما هو ومتى يقام وماذا يفعل الناس', '2026-10-30', '2026-10-29', WKD, ['#ec4899', '#8b5cf6', '#f59e0b'], ['🎉', '🎆', '🎈', '🎊', '🎇', '🎠', '🎁', '🥳']),
    mk('S', 4, 'Bahrain National Day', 'My Proud Message', 'يسجّل كلمة قصيرة من 5 جمل مترابطة على الأقل عما يعتز به في وطنه', '2026-11-15', '2026-11-15', '', ['#c8102e', '#9f1239', '#fb7185'], ['❤️', '🤍', '🎆', '🎉', '🎇', '🏰', '🥳', '🎈']),
    mk('S', 5, 'Describe Your House', 'Home Tour', 'يصف غرفة من بيته أو رسمًا لها بالصفات وحروف الجر المكانية، دون إظهار أفراد الأسرة', '2026-11-30', '2026-11-30', '', ['#14b8a6', '#f59e0b', '#6366f1'], ['🏠', '🛋️', '🛏️', '🌿', '🚪', '🖼️', '🍳', '🧺']),
    mk('S', 6, 'My Favourite Sport', 'Sports Commentator', 'يتحدث كمعلّق رياضي عن رياضته المفضلة ويذكر 3 أسباب باستخدام because', '2026-12-15', '2026-12-15', '', ['#ef4444', '#f97316', '#22c55e'], ['⚽', '🏀', '🏊', '🥇', '🏐', '🎾', '🏆', '🚴']),
    mk('S', 7, 'My Favourite Hobby', 'Hobby Show & Tell', 'يعرض أداة أو صورة لهوايته ويشرح كيف يمارسها وكم مرة ولماذا يحبها', '2026-12-30', '2026-12-30', '', ['#8b5cf6', '#ec4899', '#06b6d4'], ['🎨', '🎸', '📷', '🧩', '🎮', '♟️', '📚', '🎹']),
    mk('S', 8, 'A Trip to the Zoo or Park', 'Story in 4 Pictures', 'يختار أو يرسم 4 صور ويروي قصة رحلة بتسلسل الأحداث مستخدمًا: First, Then, Next, Finally', '2027-01-15', '2027-01-31', BRK + ' ونُقل إلى أول يوم دراسي بعدها.', ['#16a34a', '#eab308', '#f97316'], ['🦁', '🐘', '🦒', '🌳', '🐒', '🐧', '🦓', '🐅']),
    mk('S', 9, 'A Family Day at the Beach', 'Picture Talk', 'يصف صورة ليوم عائلي على الشاطئ ويروي ما حدث فيه بالماضي البسيط', '2027-01-30', '2027-02-15', BRK + ' وانتقل إلى الموعد التالي.', ['#0ea5e9', '#facc15', '#14b8a6'], ['🏖️', '🌊', '🐚', '☀️', '🏐', '🦀', '⛱️', '🍉']),
    mk('S', 10, 'Four Seasons of the Year', 'Weather Presenter', 'يقدّم نشرة طقس لفصول السنة الأربعة ويقارن بينها بمفردات الطقس', '2027-02-15', '2027-02-28', FEB, ['#22c55e', '#f59e0b', '#3b82f6'], ['🌸', '☀️', '🍂', '❄️', '🌈', '🌧️', '⛄', '🍁'])
  ];
  const byId = {};
  A.forEach(a => { byId[a.id] = a; });
  const PROG = { R: 'Reading Progress', S: 'Speaking Progress' };
  const PROG_ICON = { R: '📖', S: '🎤' };

  /* ---------- أدوات التاريخ ---------- */
  const MON = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
  const DAY = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  const pd = s => { const p = s.split('-').map(Number); return new Date(Date.UTC(p[0], p[1] - 1, p[2])); };
  const add = (s, n) => { const d = pd(s); d.setUTCDate(d.getUTCDate() + n); return d; };
  const toD = x => (typeof x === 'string' ? pd(x) : x);
  const full = x => { const d = toD(x); return DAY[d.getUTCDay()] + ' ' + d.getUTCDate() + ' ' + MON[d.getUTCMonth()] + ' ' + d.getUTCFullYear(); };
  const mid = x => { const d = toD(x); return d.getUTCDate() + ' ' + MON[d.getUTCMonth()] + ' ' + d.getUTCFullYear(); };

  /* ---------- حفظ الحالات ---------- */
    let local = {}, storageOK = true;
  try { local = JSON.parse(localStorage.getItem(STORE) || '{}') || {}; } catch (e) { local = {}; storageOK = false; }
  const getS = id => local[id] || STATUS_DEFAULT[id] || 'none';
  function setS(id, v) {
    local[id] = v;
    try { localStorage.setItem(STORE, JSON.stringify(local)); storageOK = true; } catch (e) { storageOK = false; }
  }
  }

  /* ---------- عناصر الصفحة ---------- */
  const app = document.getElementById('app');
  const floaters = document.getElementById('floaters');
  const root = document.documentElement;
  let fProg = 'all', fSt = 'all', curId = null;

  function applyTheme(g, e, isDetail) {
    root.style.setProperty('--c1', g[0]);
    root.style.setProperty('--c2', g[1]);
    root.style.setProperty('--c3', g[2]);
    root.style.setProperty('--photo', 'none');
    document.body.classList.toggle('detail', isDetail);
    floaters.innerHTML = '';
    const count = isDetail ? 26 : 14;
    for (let i = 0; i < count; i++) {
      const s = document.createElement('span');
      s.className = 'fl';
      s.textContent = e[i % e.length];
      s.style.cssText = 'left:' + (Math.random() * 94) + '%;top:' + (Math.random() * 90) + '%;font-size:' +
        (isDetail ? 34 + Math.random() * 62 : 26 + Math.random() * 40) + 'px;animation-duration:' +
        (6 + Math.random() * 8) + 's;animation-delay:-' + (Math.random() * 8) + 's';
      floaters.appendChild(s);
    }
  }
  function tryPhoto(id, cb) {
    const url = 'images/' + id.toLowerCase() + '.jpg';
    const img = new Image();
    img.onload = () => cb('url("' + url + '")');
    img.src = url;
  }
  function confetti(list) {
    for (let i = 0; i < 28; i++) {
      const s = document.createElement('span');
      s.className = 'fall';
      s.textContent = list[i % list.length];
      s.style.left = (Math.random() * 98) + '%';
      s.style.animationDelay = (Math.random() * 0.8) + 's';
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 3600);
    }
  }

  /* ---------- القائمة الرئيسية ---------- */
  function home() {
    curId = null;
    applyTheme(['#6C63FF', '#FF6584', '#FFC75F'], ['📖', '🎤', '⭐', '🎧', '✏️', '🌟', '🎓', '🏅'], false);
    const cnt = { none: 0, doing: 0, done: 0, postponed: 0 };
    A.forEach(a => { cnt[getS(a.id)]++; });
    const pct = Math.round(cnt.done / A.length * 100);

    const progTabs = [['all', 'الكل'], ['R', '📖 Reading Progress'], ['S', '🎤 Speaking Progress']]
      .map(t => '<button class="chip' + (fProg === t[0] ? ' on' : '') + '" data-fprog="' + t[0] + '">' + t[1] + '</button>').join('');
    const stTabs = [['all', 'كل الحالات']].concat(Object.keys(ST).map(k => [k, ST[k].icon + ' ' + ST[k].label]))
      .map(t => '<button class="chip' + (fSt === t[0] ? ' on' : '') + '" data-fst="' + t[0] + '">' + t[1] + '</button>').join('');

    const card = a => {
      const s = getS(a.id);
      return '<article class="card" tabindex="0" data-go="' + a.id + '" style="--c1:' + a.g[0] + ';--c2:' + a.g[1] + '">' +
        '<div class="ph" data-ph="' + a.id + '"></div><div class="big">' + a.e[0] + '</div>' +
        '<div class="row"><span class="num">' + PROG[a.prog].split(' ')[0] + ' ' + a.n + '</span>' +
        '<span class="badge s-' + s + '">' + ST[s].icon + ' ' + ST[s].label + '</span></div>' +
        '<h3 dir="ltr">' + a.topic + '</h3>' +
        '<p>📅 ' + full(a.date) + (a.planned !== a.date ? ' <small>(معدّل)</small>' : '') + '</p>' +
        '<div class="emo">' + a.e.slice(0, 4).join(' ') + '</div></article>';
    };
    const section = p => {
      const list = A.filter(a => a.prog === p && (fSt === 'all' || getS(a.id) === fSt));
      if (!list.length || (fProg !== 'all' && fProg !== p)) return '';
      return '<h2 class="sec">' + PROG_ICON[p] + ' ' + PROG[p] + '</h2><div class="grid">' + list.map(card).join('') + '</div>';
    };
    const body = section('R') + section('S') || '<p class="panel">لا توجد أنشطة بهذه الحالة حاليًا.</p>';

    app.innerHTML =
      '<section class="stats">' +
      '<div class="stat"><b>' + cnt.done + '</b><span>✅ تم التنفيذ</span></div>' +
      '<div class="stat"><b>' + cnt.doing + '</b><span>⏳ جاري التنفيذ</span></div>' +
      '<div class="stat"><b>' + cnt.postponed + '</b><span>⏸️ تم التأجيل</span></div>' +
      '<div class="stat"><b>' + cnt.none + '</b><span>⚪ لم يبدأ</span></div></section>' +
      '<div class="progress"><i style="width:' + pct + '%"></i><em>' + pct + '% من الأنشطة العشرين منفذة</em></div>' +
      '<div class="filters">' + progTabs + '</div><div class="filters">' + stTabs + '</div>' + body +
      '<div class="tools"><button class="btn" data-copy>📋 نسخ كود الحالات للنشر</button>' +
      '<button class="btn gray" data-reset>🧹 مسح تعديلاتي</button></div>';

    app.querySelectorAll('.ph').forEach(el => tryPhoto(el.dataset.ph, u => { el.style.backgroundImage = u; }));
  }

  /* ---------- صفحة النشاط ---------- */
  function detail(a) {
    curId = a.id;
    applyTheme(a.g, a.e, true);
    tryPhoto(a.id, u => { root.style.setProperty('--photo', u); });
    const list = A.filter(x => x.prog === a.prog);
    const i = list.indexOf(a), prev = list[i - 1], next = list[i + 1];
    const s = getS(a.id);
    const dl = add(a.date, 12), ev = add(a.date, 15);

    const nav = '<div class="nav">' +
      '<button class="btn" ' + (prev ? 'data-go="' + prev.id + '"' : 'disabled') + '>→ السابق</button>' +
      '<button class="btn home" data-home>🏠 القائمة الرئيسية</button>' +
      '<button class="btn" ' + (next ? 'data-go="' + next.id + '"' : 'disabled') + '>التالي ←</button></div>';

    const stBtns = Object.keys(ST).map(k =>
      '<button class="stbtn s-' + k + (s === k ? ' active' : '') + '" data-set="' + k + '">' + ST[k].icon + ' ' + ST[k].label + '</button>').join('');

    const steps = [
      'إطلاق النشاط: نشر مهمة في Teams (Assignments) مع مجلد الموضوع رقم ' + a.n + ' وتعليمات التسجيل، وآخر موعد للتسليم بعد 12 يومًا من الإطلاق.',
      a.prog === 'R'
        ? 'مهمة الطالب: قراءة النص كاملًا بصوت واضح مع التركيز على ' + a.task + '؛ ويسجّل عدة محاولات ويختار أفضل قراءة ويرفعها صوتًا أو فيديو عبر Teams.'
        : 'مهمة الطالب: ' + a.task + '؛ ويسجّل أكثر من محاولة ويرفع أفضلها صوتًا أو فيديو عبر Teams.',
      'التقييم: خلال الأيام الثلاثة الأخيرة قبل النشاط التالي، تقييم كل تسجيل ببطاقة التقييم من 100 وإرسال الدرجة والتغذية الراجعة عبر Teams.'
    ].map(t => '<li>' + t + '</li>').join('');

    const rub = RUB[a.prog];
    const max = Math.max.apply(null, rub.map(r => r[1]));
    const rubHtml = rub.map(r => '<div class="rub"><span>' + r[0] + '</span><div class="bar"><i style="width:' +
      (r[1] / max * 100) + '%"></i></div><b>' + r[1] + '</b></div>').join('') + '<div class="tot">المجموع: 100 درجة</div>';

    app.innerHTML = nav +
      '<section class="hero"><div class="ph" id="heroPh"></div>' +
      '<span class="prog">' + PROG_ICON[a.prog] + ' ' + PROG[a.prog] + ' – النشاط ' + a.n + ' من 10</span>' +
      '<h2 dir="ltr">' + a.topic + '</h2>' +
      (a.fmt ? '<div class="fmt" dir="ltr">' + a.fmt + '</div><br>' : '') +
      '<div class="emo">' + a.e.slice(0, 5).join(' ') + '</div>' +
      '<span class="badge s-' + s + '" id="heroBadge">' + ST[s].icon + ' ' + ST[s].label + '</span></section>' +

      '<section class="panel"><h3>📅 المواعيد</h3><div class="tiles">' +
      '<div class="tile"><b>🚀 موعد الإطلاق</b>' + full(a.date) +
      (a.planned !== a.date ? '<small>الموعد وفق النمط: ' + mid(a.planned) + '</small>' : '') + '</div>' +
      '<div class="tile"><b>📥 آخر موعد للتسليم</b>' + full(dl) + '<small>بعد 12 يومًا من الإطلاق</small></div>' +
      '<div class="tile"><b>📝 التقييم والتغذية الراجعة</b>من ' + mid(dl) + '<small>حتى ' + mid(ev) + '</small></div></div>' +
      (a.note ? '<div class="note">⚠️ ' + a.note + '</div>' : '') + '</section>' +

      ''<section class="panel"><h3>🚦 حالة النشاط</h3><div class="stwrap">' + stBtns + '</div><div class="note">تُحفظ الحالة على هذا الجهاز فقط. لنشرها للجميع استخدم زر «نسخ كود الحالات للنشر» في القائمة الرئيسية.</div></section>' +
      '<section class="panel"><h3>🧭 خطوات التنفيذ</h3><ol class="steps">' + steps + '</ol></section>' +
      '<section class="panel"><h3>💡 نصائح للطالب</h3><ul class="tips">' + TIPS[a.prog].map(t => '<li>' + t + '</li>').join('') + '</ul></section>' +
      '<section class="panel"><h3>🏅 بطاقة التقييم (من 100)</h3>' + rubHtml +
      '<div class="note">معيار النجاح: تسليم 90 بالمئة من الطلاب، ومتوسط الدرجات 70 من 100 فأكثر.</div></section>' +
      '<section class="panel"><h3>👨‍🏫 الجهة المسؤولة</h3>المعلم المنفذ / أيمن بكري – المكان: منصة Teams</section>' +
      nav;

    tryPhoto(a.id, u => { const h = document.getElementById('heroPh'); if (h) h.style.backgroundImage = u; });
  }

  /* ---------- التوجيه ---------- */
  function route() {
    const m = location.hash.match(/^#\/a\/([RS]\d+)$/);
    if (m && byId[m[1]]) detail(byId[m[1]]); else home();
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);

  /* ---------- الأحداث ---------- */
  app.addEventListener('click', ev => {
    const t = ev.target.closest('[data-go],[data-home],[data-set],[data-fprog],[data-fst],[data-copy],[data-reset]');
    if (!t || t.disabled) return;
    if (t.dataset.go) { location.hash = '#/a/' + t.dataset.go; }
    else if (t.hasAttribute('data-home')) { location.hash = '#/'; }
    else if (t.dataset.set && curId) {
      setS(curId, t.dataset.set);
             if (!storageOK) alert('تنبيه: متصفحك يمنع حفظ الحالة، فستختفي عند إعادة فتح الصفحة. استخدم متصفحًا عاديًا (غير وضع الخصوصية) أو ثبّت الحالة في STATUS_DEFAULT.');
      detail(byId[curId]);
      if (t.dataset.set === 'done') confetti(byId[curId].e);
    }
    else if (t.dataset.fprog) { fProg = t.dataset.fprog; home(); }
    else if (t.dataset.fst) { fSt = t.dataset.fst; home(); }
    else if (t.hasAttribute('data-copy')) { copyStatus(); }
    else if (t.hasAttribute('data-reset')) {
      if (confirm('سيتم مسح الحالات المحفوظة في هذا المتصفح فقط. هل أنت متأكد؟')) {
        local = {};
        try { localStorage.removeItem(STORE); } catch (e) { /* تجاهل */ }
        home();
      }
    }
  });
  app.addEventListener('keydown', ev => {
    if (ev.key === 'Enter') { const c = ev.target.closest('[data-go]'); if (c) location.hash = '#/a/' + c.dataset.go; }
  });
  document.addEventListener('keydown', ev => {
    if (!curId) return;
    const list = A.filter(x => x.prog === byId[curId].prog);
    const i = list.indexOf(byId[curId]);
    if (ev.key === 'ArrowLeft' && list[i + 1]) location.hash = '#/a/' + list[i + 1].id;   // التالي
    else if (ev.key === 'ArrowRight' && list[i - 1]) location.hash = '#/a/' + list[i - 1].id; // السابق
    else if (ev.key === 'Escape') location.hash = '#/';
  });

  function copyStatus() {
    const o = {};
    A.forEach(a => { const s = getS(a.id); if (s !== 'none') o[a.id] = s; });
    const code = 'const STATUS_DEFAULT = ' + JSON.stringify(o, null, 2) + ';';
    const ok = () => alert('تم نسخ الكود. افتح ملف app.js في GitHub واستبدل به سطر STATUS_DEFAULT ثم احفظ التعديل.');
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(code).then(ok, () => prompt('انسخ الكود:', code));
    else prompt('انسخ الكود:', code);
  }

  route();
})();
