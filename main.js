(function () {
  "use strict";

  /* ============================== Iconos ============================== */
  var ICON_PATHS = {
    home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v11h14V10M9 21v-7h6v7"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>',
    sparkles: '<path d="m12 3-1.2 3.5L7 8l3.8 1.5L12 13l1.2-3.5L17 8l-3.8-1.5L12 3Z"/><path d="m5 13-.8 2.2L2 16l2.2.8L5 19l.8-2.2L8 16l-2.2-.8L5 13ZM19 14l-.6 1.5-1.4.5 1.4.5L19 18l.6-1.5L21 16l-1.4-.5L19 14Z"/>',
    music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    shirt: '<path d="M8.5 3A3.5 3.5 0 0 0 12 6.5 3.5 3.5 0 0 0 15.5 3L21 6l-2 5-3-1v11H8V10l-3 1-2-5 5.5-3Z"/>',
    ticket: '<path d="M2 9a3 3 0 0 0 0 6v4h20v-4a3 3 0 0 0 0-6V5H2v4Z"/><path d="M13 5v2M13 10v4M13 17v2"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/>',
    trash: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 15H6L5 6M10 11v5M14 11v5"/>',
    arrow: '<path d="m15 18-6-6 6-6"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    play: '<path d="m8 5 11 7-11 7Z"/>',
    pause: '<path d="M9 5v14M15 5v14"/>',
    chevron: '<path d="m9 18 6-6-6-6"/>',
    logout: '<path d="M10 17l5-5-5-5M15 12H3"/><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>'
  };

  function icon(name, size) {
    size = size || 20;
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICON_PATHS[name] + '</svg>';
  }

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /* ============================== Datos ============================== */
  var initialDancers = [
    { id: 1, name: "Laura Gómez", age: "19", document: "1234567890", phone: "300 123 4567", email: "laura@gmail.com", address: "Calle 24 # 18-30", level: "Intermedio", dance: "Salsa", classes: ["Salsa Intermedio", "Bachata Avanzada"], date: "2026-02-10", status: "Activa", initials: "LG", tone: "lilac" },
    { id: 2, name: "Valentina Pérez", age: "21", document: "1032456789", phone: "315 428 1098", email: "valentina@email.com", address: "Carrera 8 # 45-20", level: "Avanzado", dance: "Bachata", classes: ["Bachata Avanzada", "Danza Contemporánea"], date: "2025-08-14", status: "Activa", initials: "VP", tone: "pink" },
    { id: 3, name: "Camila Rodríguez", age: "18", document: "1008234567", phone: "310 520 8876", email: "camila@email.com", address: "Calle 12 # 10-05", level: "Intermedio", dance: "Ballet", classes: ["Ballet Principiante"], date: "2025-11-02", status: "Activa", initials: "CR", tone: "blue" },
    { id: 4, name: "Sofía Martínez", age: "24", document: "1022546781", phone: "301 678 2240", email: "sofia@email.com", address: "Avenida 6 # 20-11", level: "Principiante", dance: "Contemporáneo", classes: ["Danza Contemporánea"], date: "2026-01-21", status: "Inactiva", initials: "SM", tone: "orange" },
    { id: 5, name: "Isabella Torres", age: "20", document: "1099234512", phone: "320 889 4321", email: "isabella@email.com", address: "Calle 19 # 4-55", level: "Avanzado", dance: "Salsa", classes: ["Salsa Intermedio", "Bachata Avanzada", "Danza Contemporánea"], date: "2025-06-12", status: "Activa", initials: "IT", tone: "green" }
  ];

  var navItems = [
    { page: "home", label: "Inicio", icon: "home" },
    { page: "dancers", label: "Bailarines", icon: "users" },
    { page: "classes", label: "Clases", icon: "calendar" },
    { page: "choreographies", label: "Coreografías", icon: "sparkles" },
    { page: "music", label: "Música", icon: "music" },
    { page: "wardrobe", label: "Vestuario", icon: "shirt" },
    { page: "events", label: "Eventos", icon: "ticket" }
  ];

  function makeEmptyForm() {
    return { id: 0, name: "", age: "", document: "", phone: "", email: "", address: "", level: "", dance: "", classes: [], date: "", status: "Activa", initials: "", tone: "lilac" };
  }

  var classOptions = ["Salsa Intermedio", "Ballet Principiante", "Bachata Avanzada", "Danza Contemporánea", "Jazz Juvenil", "Ritmos Urbanos"];

  var moduleData = {
    classes: { eyebrow: "PROGRAMACIÓN", title: "Clases", subtitle: "Consulta los horarios y clases programadas.", icon: "calendar", add: "Nueva clase", items: [
      { title: "Salsa Intermedio", tag: "Intermedio", meta: "Martes · 4:00 p. m.", foot: "Carlos Martínez", note: "Salón Principal" },
      { title: "Ballet Principiante", tag: "Principiante", meta: "Miércoles · 3:00 p. m.", foot: "Natalia López", note: "Salón Espejos" },
      { title: "Bachata Avanzada", tag: "Avanzado", meta: "Jueves · 6:30 p. m.", foot: "Diego Ramírez", note: "Salón Principal" },
      { title: "Danza Contemporánea", tag: "Intermedio", meta: "Sábado · 10:00 a. m.", foot: "María Fernanda", note: "Salón Norte" }
    ] },
    choreographies: { eyebrow: "CREACIONES", title: "Coreografías", subtitle: "Organiza montajes, ensayos y participantes.", icon: "sparkles", add: "Nueva coreografía", items: [
      { title: "Ritmo Latino", tag: "Salsa", meta: "5 minutos", foot: "Carlos Martínez", note: "12 bailarines" },
      { title: "Alma en movimiento", tag: "Contemporáneo", meta: "7 minutos", foot: "María Fernanda", note: "8 bailarines" },
      { title: "Raíces", tag: "Folclor", meta: "6 minutos", foot: "Natalia López", note: "16 bailarines" }
    ] },
    events: { eyebrow: "AGENDA", title: "Eventos", subtitle: "Planea presentaciones y fechas importantes.", icon: "ticket", add: "Nuevo evento", items: [
      { title: "Festival de Danza", tag: "20 NOV", meta: "6:00 p. m.", foot: "Teatro Municipal", note: "4 coreografías" },
      { title: "Muestra de fin de año", tag: "03 DIC", meta: "5:30 p. m.", foot: "Auditorio Central", note: "6 coreografías" },
      { title: "Competencia regional", tag: "15 DIC", meta: "9:00 a. m.", foot: "Coliseo Norte", note: "3 coreografías" }
    ] },
    wardrobe: { eyebrow: "INVENTARIO", title: "Vestuario", subtitle: "Controla las prendas y su disponibilidad.", icon: "shirt", add: "Nueva prenda", items: [
      { title: "Traje de Salsa", tag: "Talla M", meta: "12 unidades", foot: "Disponible", note: "Rojo y negro" },
      { title: "Vestido de Ballet", tag: "Talla S", meta: "8 unidades", foot: "Disponible", note: "Rosa pastel" },
      { title: "Conjunto Contemporáneo", tag: "Talla M", meta: "3 unidades", foot: "Stock bajo", note: "Marfil" },
      { title: "Traje Folclórico", tag: "Talla L", meta: "10 unidades", foot: "Disponible", note: "Multicolor" }
    ] },
    music: { eyebrow: "BIBLIOTECA", title: "Música", subtitle: "Tu colección musical para clases y coreografías.", icon: "music", add: "Nueva canción", items: [
      { title: "Vivir Mi Vida", tag: "Salsa", meta: "Marc Anthony", foot: "Ritmo Latino", note: "4:12" },
      { title: "Propuesta Indecente", tag: "Bachata", meta: "Romeo Santos", foot: "Pasión", note: "3:55" },
      { title: "Experience", tag: "Instrumental", meta: "Ludovico Einaudi", foot: "Alma en movimiento", note: "5:15" },
      { title: "La Bicicleta", tag: "Tropical", meta: "Shakira & Carlos Vives", foot: "Raíces", note: "3:48" }
    ] }
  };

  var collectionLabels = {
    classes: ["Nombre de la clase", "Nivel", "Día y hora", "Instructor", "Salón"],
    choreographies: ["Nombre de la coreografía", "Tipo de danza", "Duración", "Instructor", "Participantes"],
    music: ["Nombre de la canción", "Género", "Artista", "Coreografía relacionada", "Duración"],
    wardrobe: ["Nombre de la prenda", "Talla", "Cantidad", "Estado", "Color / detalles"],
    events: ["Nombre del evento", "Fecha", "Hora", "Lugar", "Coreografías participantes"]
  };

  var collectionPages = ["classes", "choreographies", "music", "wardrobe", "events"];

  /* ============================== Estado ============================== */
  var state = {
    page: "home",
    mobileOpen: false,
    dancers: initialDancers.map(function (d) { return Object.assign({}, d, { classes: d.classes.slice() }); }),
    selected: null,
    query: "",
    deleteTarget: null,
    toast: ""
  };
  state.selected = state.dancers[0];

  var formState = null; // { mode, initial, form, errors }
  var col = null;       // estado de la página de colecciones

  /* ============================== Componentes (HTML) ============================== */
  function btn(label, opts) {
    opts = opts || {};
    var variant = opts.variant || "primary";
    var type = opts.type || "button";
    var cls = opts.className || "";
    return '<button type="' + type + '" class="btn btn-' + variant + ' ' + cls + '" ' + (opts.attrs || "") + '>' +
      (opts.icon ? icon(opts.icon, 18) : "") + '<span>' + label + '</span></button>';
  }

  function badge(text, muted) {
    return '<span class="badge ' + (muted ? "badge-muted" : "") + '">' + esc(text) + '</span>';
  }

  function personAvatar(d, size, id) {
    size = size || "";
    return '<span ' + (id ? 'id="' + id + '" ' : "") + 'class="avatar ' + size + ' ' + d.tone + '">' +
      (d.photo ? '<img src="' + esc(d.photo) + '" alt="Foto de ' + esc(d.name) + '"/>' : esc(d.initials)) + '</span>';
  }

  function pageHeading(eyebrow, title, subtitle, action) {
    return '<div class="page-heading"><div>' + (eyebrow ? '<p class="eyebrow">' + eyebrow + '</p>' : "") +
      '<h1>' + esc(title) + '</h1><p>' + esc(subtitle) + '</p></div>' + (action || "") + '</div>';
  }

  function initialsOf(name) {
    return name.split(" ").map(function (x) { return x[0]; }).slice(0, 2).join("").toUpperCase();
  }

  /* ------------------------------ Inicio ------------------------------ */
  function dashboardHTML() {
    var stats = [
      { label: "Total bailarines", value: String(state.dancers.length), detail: "+8 este mes", icon: "users", tone: "purple", page: "dancers" },
      { label: "Clases programadas", value: "12", detail: "4 para hoy", icon: "calendar", tone: "pink", page: "classes" },
      { label: "Coreografías", value: "8", detail: "3 en preparación", icon: "sparkles", tone: "blue", page: "choreographies" },
      { label: "Próximos eventos", value: "5", detail: "Siguiente en 6 días", icon: "ticket", tone: "orange", page: "events" }
    ];
    return '<div>' +
      '<section class="dance-hero">' +
        '<div class="hero-orb hero-orb-one"></div>' +
        '<div class="hero-orb hero-orb-two"></div>' +
        '<div class="hero-copy">' +
          '<p class="hero-kicker"><span>' + icon("sparkles", 14) + '</span> MARTES, 14 DE ABRIL</p>' +
          '<h1>¡Hola, Luisa!</h1>' +
          '<p>El movimiento comienza aquí. Organiza tu academia y deja que cada talento encuentre su ritmo.</p>' +
          '<div class="hero-actions">' +
            btn("Nuevo bailarín", { icon: "plus", attrs: 'data-action="navigate" data-page="new"' }) +
            '<button class="hero-link" data-action="navigate" data-page="classes">Ver clases de hoy ' + icon("chevron", 16) + '</button>' +
          '</div>' +
        '</div>' +
        '<div class="hero-visual">' +
          '<div class="hero-image-main">' +
            '<img src="https://images.unsplash.com/photo-1782882663570-37043a790136?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900" alt="Bailarinas contemporáneas en movimiento"/>' +
            '<span class="image-shine"></span>' +
          '</div>' +
          '<div class="hero-image-small">' +
            '<img src="https://images.unsplash.com/photo-1667384445186-a97ad2eb415a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=400" alt="Grupo de bailarinas durante un ensayo"/>' +
          '</div>' +
          '<div class="hero-note"><span>' + icon("music", 16) + '</span><p><strong>12 clases</strong><small>esta semana</small></p></div>' +
        '</div>' +
      '</section>' +
      '<div class="stats-grid">' + stats.map(function (s) {
        return '<button class="stat-card" data-action="navigate" data-page="' + s.page + '"><span class="stat-icon ' + s.tone + '">' + icon(s.icon) + '</span>' +
          '<span class="stat-copy"><span>' + s.label + '</span><strong>' + s.value + '</strong><small>' + s.detail + '</small></span>' +
          '<span class="stat-arrow">' + icon("chevron", 18) + '</span></button>';
      }).join("") + '</div>' +
      '<div class="dashboard-grid">' +
        '<section class="panel">' +
          '<div class="section-heading"><div><h2>Próximos eventos</h2><p>Tu agenda para las próximas semanas</p></div><button class="text-button" data-action="navigate" data-page="events">Ver todos ' + icon("chevron", 16) + '</button></div>' +
          '<div class="event-list">' +
            '<button class="event-row" data-action="navigate" data-page="events"><span class="date-tile"><strong>20</strong><small>NOV</small></span><span class="event-copy"><strong>Festival de Danza</strong><span>' + icon("clock", 14) + ' 6:00 p. m. <i></i> ' + icon("pin", 14) + ' Teatro Municipal</span></span>' + icon("chevron", 18) + '</button>' +
            '<button class="event-row" data-action="navigate" data-page="events"><span class="date-tile soft"><strong>03</strong><small>DIC</small></span><span class="event-copy"><strong>Muestra de fin de año</strong><span>' + icon("clock", 14) + ' 5:30 p. m. <i></i> ' + icon("pin", 14) + ' Auditorio Central</span></span>' + icon("chevron", 18) + '</button>' +
            '<button class="event-row" data-action="navigate" data-page="events"><span class="date-tile blue"><strong>15</strong><small>DIC</small></span><span class="event-copy"><strong>Competencia regional</strong><span>' + icon("clock", 14) + ' 9:00 a. m. <i></i> ' + icon("pin", 14) + ' Coliseo Norte</span></span>' + icon("chevron", 18) + '</button>' +
          '</div>' +
        '</section>' +
        '<section class="panel activity-panel"><div class="section-heading"><div><h2>Actividad reciente</h2><p>Últimos movimientos</p></div></div>' +
          '<div class="timeline">' +
            '<div><span class="timeline-icon purple">' + icon("users", 16) + '</span><p><strong>Nueva bailarina registrada</strong><span>Mariana Díaz · hace 25 min</span></p></div>' +
            '<div><span class="timeline-icon pink">' + icon("calendar", 16) + '</span><p><strong>Clase actualizada</strong><span>Salsa Intermedio · hace 2 h</span></p></div>' +
            '<div><span class="timeline-icon blue">' + icon("sparkles", 16) + '</span><p><strong>Coreografía creada</strong><span>Alma Latina · ayer</span></p></div>' +
          '</div>' +
        '</section>' +
      '</div>' +
    '</div>';
  }

  /* ------------------------------ Lista de bailarines ------------------------------ */
  function filteredDancers() {
    var q = state.query.toLowerCase();
    return state.dancers.filter(function (d) {
      return (d.name + " " + d.dance + " " + d.level).toLowerCase().indexOf(q) !== -1;
    });
  }

  function statusHTML(d) {
    return '<span class="status ' + (d.status === "Inactiva" ? "inactive" : "") + '"><i></i>' + esc(d.status) + '</span>';
  }

  function dancersResultsHTML() {
    var filtered = filteredDancers();
    var table = '<div class="data-table">' +
      '<div class="table-row table-head"><span>BAILARÍN</span><span>CONTACTO</span><span>NIVEL</span><span>TIPO DE CLASE</span><span>ESTADO</span><span>ACCIONES</span></div>' +
      filtered.map(function (d) {
        return '<div class="table-row">' +
          '<button class="person-cell" data-action="view-dancer" data-id="' + d.id + '">' + personAvatar(d) + '<span><strong>' + esc(d.name) + '</strong><small>' + esc(d.age) + ' años</small></span></button>' +
          '<span class="contact-cell"><span>' + esc(d.email) + '</span><small>' + esc(d.phone) + '</small></span>' +
          '<span>' + badge(d.level, d.level === "Principiante") + '</span>' +
          '<span class="dance-cell class-summary">' + esc(d.classes.slice(0, 1).join("")) + (d.classes.length > 1 ? '<small>+' + (d.classes.length - 1) + ' más</small>' : "") + '</span>' +
          '<span>' + statusHTML(d) + '</span>' +
          '<span class="action-cell"><button data-action="edit-dancer" data-id="' + d.id + '" aria-label="Editar a ' + esc(d.name) + '">' + icon("edit", 17) + '</button>' +
          '<button class="delete-action" data-action="ask-delete" data-id="' + d.id + '" aria-label="Eliminar a ' + esc(d.name) + '">' + icon("trash", 17) + '</button></span>' +
        '</div>';
      }).join("") + '</div>';

    var cards = '<div class="mobile-cards">' + filtered.map(function (d) {
      return '<article class="dancer-card">' +
        '<button class="mobile-person" data-action="view-dancer" data-id="' + d.id + '">' + personAvatar(d) + '<span><strong>' + esc(d.name) + '</strong><small>' + esc(d.age) + ' años · ' + d.classes.length + ' ' + (d.classes.length === 1 ? "clase" : "clases") + '</small></span>' + icon("chevron", 18) + '</button>' +
        '<div class="mobile-class-list">' + d.classes.map(function (item) { return badge(item); }).join("") + '</div>' +
        '<div class="mobile-meta"><span><small>Nivel</small>' + badge(d.level) + '</span><span><small>Estado</small>' + statusHTML(d) + '</span></div>' +
        '<div class="mobile-card-actions">' +
          btn("Editar", { variant: "secondary", icon: "edit", attrs: 'data-action="edit-dancer" data-id="' + d.id + '"' }) +
          btn("Eliminar", { variant: "ghost", icon: "trash", attrs: 'data-action="ask-delete" data-id="' + d.id + '"' }) +
        '</div></article>';
    }).join("") + '</div>';

    var empty = filtered.length === 0
      ? '<div class="empty-state"><span>' + icon("search", 28) + '</span><h3>No encontramos bailarines</h3><p>Prueba con otro nombre, tipo de danza o nivel.</p>' +
        btn("Limpiar búsqueda", { variant: "secondary", attrs: 'data-action="clear-search"' }) + '</div>'
      : "";

    return table + cards + empty;
  }

  function dancersListHTML() {
    var n = filteredDancers().length;
    return '<div>' +
      pageHeading("GESTIÓN DE PERSONAS", "Bailarines", "Administra la información y el progreso de tus bailarines.", btn("Nuevo bailarín", { icon: "plus", attrs: 'data-action="navigate" data-page="new"' })) +
      '<div class="list-toolbar"><label class="search-box">' + icon("search", 19) +
        '<input id="search-input" value="' + esc(state.query) + '" placeholder="Buscar por nombre, danza o nivel..."/>' +
        '<button id="clear-search-btn" data-action="clear-search" aria-label="Limpiar búsqueda" style="' + (state.query ? "" : "display:none") + '">' + icon("close", 15) + '</button></label>' +
        '<div class="result-count" id="result-count"><strong>' + n + '</strong> bailarines</div></div>' +
      '<div class="table-panel" id="dancers-results">' + dancersResultsHTML() + '</div>' +
    '</div>';
  }

  function updateDancersResults() {
    var results = document.getElementById("dancers-results");
    var count = document.getElementById("result-count");
    var clear = document.getElementById("clear-search-btn");
    if (!results) return;
    results.innerHTML = dancersResultsHTML();
    count.innerHTML = '<strong>' + filteredDancers().length + '</strong> bailarines';
    clear.style.display = state.query ? "" : "none";
  }

  /* ------------------------------ Formulario de bailarín ------------------------------ */
  function initForm(mode) {
    var initial = mode === "new" ? Object.assign(makeEmptyForm(), { classes: [] }) : state.selected;
    formState = {
      mode: mode,
      initial: initial,
      form: Object.assign({}, initial, { classes: initial.classes.slice() }),
      errors: {}
    };
  }

  function formAvatarInitials(form) {
    return form.name ? initialsOf(form.name) : "FT";
  }

  function dancerFormHTML() {
    var fs = formState;
    var form = fs.form;
    var errors = fs.errors;
    var mode = fs.mode;

    function field(key, label, placeholder, type) {
      type = type || "text";
      return '<label class="field ' + (errors[key] ? "field-error" : "") + '"><span>' + label + '</span>' +
        '<input type="' + type + '" data-field="' + key + '" value="' + esc(form[key]) + '" placeholder="' + esc(placeholder) + '"/>' +
        (errors[key] ? '<small>' + esc(errors[key]) + '</small>' : "") + '</label>';
    }

    function select(key, label, options) {
      return '<label class="field ' + (errors[key] ? "field-error" : "") + '"><span>' + label + '</span>' +
        '<select data-field="' + key + '"><option value=""' + (form[key] === "" ? " selected" : "") + '>Seleccionar</option>' +
        options.map(function (o) { return '<option' + (form[key] === o ? " selected" : "") + '>' + esc(o) + '</option>'; }).join("") +
        '</select>' + (errors[key] ? '<small>' + esc(errors[key]) + '</small>' : "") + '</label>';
    }

    var avatarDancer = Object.assign({}, form, { initials: formAvatarInitials(form) });

    return '<div class="form-page">' +
      '<button class="back-button" data-action="navigate" data-page="dancers">' + icon("arrow", 18) + ' Volver a bailarines</button>' +
      pageHeading(
        mode === "new" ? "NUEVO REGISTRO" : "ACTUALIZAR INFORMACIÓN",
        mode === "new" ? "Registrar bailarín" : "Editar bailarín",
        mode === "new" ? "Completa la información para agregar un nuevo bailarín." : "Modifica los datos de " + fs.initial.name + "."
      ) +
      '<form class="form-panel" data-form="dancer" novalidate>' +
        '<div class="form-section-title"><span>' + icon("users", 20) + '</span><div><h2>Información personal</h2><p>Datos básicos de identificación y contacto.</p></div></div>' +
        '<div class="photo-uploader">' +
          personAvatar(avatarDancer, "huge", "form-avatar") +
          '<div><strong>Foto del bailarín</strong><p>Sube una imagen JPG o PNG para identificar su perfil.</p>' +
            '<label class="upload-button">' + icon("plus", 16) + (form.photo ? "Cambiar foto" : "Subir foto") + '<input type="file" data-photo="1" accept="image/png,image/jpeg,image/webp"/></label></div>' +
          (form.photo ? '<button class="remove-photo" type="button" data-action="remove-photo">Quitar</button>' : "") +
        '</div>' +
        '<div class="form-grid">' +
          field("name", "Nombre completo *", "Ej. Laura Gómez") + " " +
          field("age", "Edad *", "Ej. 19", "number") + " " +
          field("document", "Documento *", "Número de identificación") + " " +
          field("phone", "Teléfono *", "Ej. 300 123 4567", "tel") + " " +
          field("email", "Correo electrónico *", "nombre@correo.com", "email") + " " +
          field("address", "Dirección", "Dirección de residencia") +
        '</div>' +
        '<div class="form-divider"></div>' +
        '<div class="form-section-title"><span class="pink">' + icon("sparkles", 20) + '</span><div><h2>Información académica</h2><p>Detalles de su formación dentro de la academia.</p></div></div>' +
        '<div class="form-grid compact-grid">' +
          select("level", "Nivel de danza *", ["Principiante", "Intermedio", "Avanzado"]) + " " +
          field("date", "Fecha de inscripción *", "", "date") + " " +
          select("status", "Estado *", ["Activa", "Inactiva"]) +
        '</div>' +
        '<fieldset class="class-picker ' + (errors.classes ? "field-error" : "") + '"><legend>Clases a inscribir *</legend><p>Puedes seleccionar una o varias clases para este bailarín.</p><div>' +
          classOptions.map(function (className) {
            var checked = form.classes.indexOf(className) !== -1;
            return '<label class="' + (checked ? "selected" : "") + '"><input type="checkbox" data-class="' + esc(className) + '"' + (checked ? " checked" : "") + '/>' +
              '<span class="class-check">' + (checked ? icon("check", 14) : "") + '</span>' +
              '<span><strong>' + esc(className) + '</strong><small>' + (className.indexOf("Salsa") !== -1 || className.indexOf("Bachata") !== -1 ? "Salón principal" : "Salón de espejos") + '</small></span></label>';
          }).join("") +
        '</div>' + (errors.classes ? '<small class="class-error">' + esc(errors.classes) + '</small>' : "") + '</fieldset>' +
        (Object.keys(errors).length > 0 ? '<div class="error-summary"><strong>Revisa los campos marcados</strong><span>Completa correctamente la información antes de guardar.</span></div>' : "") +
        '<div class="form-actions">' +
          btn("Cancelar", { variant: "secondary", attrs: 'data-action="navigate" data-page="dancers"' }) +
          btn(mode === "new" ? "Guardar bailarín" : "Guardar cambios", { type: "submit", icon: "check" }) +
        '</div>' +
      '</form>' +
    '</div>';
  }

  function formUpdate(key, value) {
    var fs = formState;
    if (!fs) return;
    fs.form[key] = value;
    if (key === "name" && !fs.form.photo) {
      var av = document.getElementById("form-avatar");
      if (av) av.textContent = formAvatarInitials(fs.form);
    }
    if (fs.errors[key]) {
      fs.errors[key] = "";
      var input = document.querySelector('[data-field="' + key + '"]');
      var label = input && input.closest("label.field");
      if (label) {
        label.classList.remove("field-error");
        var small = label.querySelector("small");
        if (small) small.remove();
      }
    }
  }

  function toggleClass(className) {
    var fs = formState;
    var form = fs.form;
    var classes = form.classes.indexOf(className) !== -1
      ? form.classes.filter(function (item) { return item !== className; })
      : form.classes.concat([className]);
    form.classes = classes;
    form.dance = classes[0] ? classes[0].split(" ")[0] : "";
    if (classes.length) fs.errors.classes = "";
    renderContent();
  }

  function uploadPhoto(file) {
    if (!file) return;
    var fs = formState;
    var reader = new FileReader();
    reader.onload = function () {
      fs.form.photo = String(reader.result);
      if (formState === fs && (state.page === "new" || state.page === "edit")) renderContent();
    };
    reader.readAsDataURL(file);
  }

  function submitDancerForm() {
    var fs = formState;
    var form = fs.form;
    var next = {};
    if (!form.name.trim()) next.name = "El nombre es obligatorio.";
    if (!form.age || Number(form.age) < 5 || Number(form.age) > 100) next.age = "Ingresa una edad válida.";
    if (!form.document.trim()) next.document = "El documento es obligatorio.";
    if (!form.phone.trim()) next.phone = "El teléfono es obligatorio.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Ingresa un correo electrónico válido.";
    if (!form.level) next.level = "Selecciona un nivel de danza.";
    if (!form.classes.length) next.classes = "Selecciona al menos una clase.";
    if (!form.date) next.date = "Selecciona una fecha de inscripción.";
    fs.errors = next;
    if (!Object.keys(next).length) {
      if (fs.mode === "new") {
        var created = Object.assign({}, form, { id: Date.now(), initials: initialsOf(form.name) });
        state.dancers = [created].concat(state.dancers);
        navigate("dancers");
        flash("Bailarín registrado correctamente.");
      } else {
        state.dancers = state.dancers.map(function (item) { return item.id === form.id ? form : item; });
        navigate("dancers");
        flash("Los datos del bailarín fueron actualizados correctamente.");
      }
    } else {
      renderContent();
    }
  }

  /* ------------------------------ Detalle ------------------------------ */
  function dancerDetailHTML() {
    var dancer = state.selected;
    var details = [
      ["Edad", dancer.age + " años"],
      ["Documento", dancer.document],
      ["Teléfono", dancer.phone],
      ["Correo electrónico", dancer.email],
      ["Dirección", dancer.address],
      ["Fecha de inscripción", new Date(dancer.date + "T00:00:00").toLocaleDateString("es-CO")]
    ];
    return '<div class="detail-page"><button class="back-button" data-action="navigate" data-page="dancers">' + icon("arrow", 18) + ' Volver a bailarines</button>' +
      '<div class="profile-hero">' + personAvatar(dancer, "huge") +
        '<div class="profile-title"><p>PERFIL DEL BAILARÍN</p><h1>' + esc(dancer.name) + '</h1><div>' + badge(dancer.level) + statusHTML(dancer) + '</div></div>' +
        '<div class="profile-actions">' +
          btn("Editar", { variant: "secondary", icon: "edit", attrs: 'data-action="detail-edit"' }) +
          btn("Eliminar", { variant: "ghost", icon: "trash", attrs: 'data-action="detail-delete"' }) +
        '</div></div>' +
      '<section class="panel enrolled-panel"><div class="section-heading"><div><h2>Clases inscritas</h2><p>' + dancer.classes.length + ' ' + (dancer.classes.length === 1 ? "clase activa" : "clases activas") + '</p></div></div>' +
        '<div class="enrolled-list">' + dancer.classes.map(function (item) {
          return '<span>' + icon("calendar", 17) + '<strong>' + esc(item) + '</strong>' + icon("check", 15) + '</span>';
        }).join("") + '</div></section>' +
      '<section class="panel detail-panel"><div class="section-heading"><div><h2>Información personal</h2><p>Datos de contacto y registro</p></div></div>' +
        '<div class="detail-grid">' + details.map(function (pair, i) {
          var ic = i === 2 ? "phone" : i === 3 ? "mail" : i === 5 ? "calendar" : "users";
          return '<div><span class="detail-icon">' + icon(ic, 17) + '</span><p><small>' + pair[0] + '</small><strong>' + esc(pair[1] || "No registrado") + '</strong></p></div>';
        }).join("") + '</div></section>' +
    '</div>';
  }

  /* ------------------------------ Modal eliminar ------------------------------ */
  function deleteModalHTML(dancer) {
    return '<div class="modal-layer" role="dialog" aria-modal="true" aria-labelledby="delete-title"><div class="modal-card">' +
      '<button class="modal-close" data-action="cancel-delete" aria-label="Cerrar">' + icon("close", 19) + '</button>' +
      '<span class="danger-icon">' + icon("trash", 24) + '</span>' +
      '<h2 id="delete-title">¿Eliminar bailarín?</h2>' +
      '<p>¿Estás seguro de que deseas eliminar a <strong>' + esc(dancer.name) + '</strong>? Esta acción eliminará el registro de forma permanente.</p>' +
      '<div class="modal-actions">' +
        btn("Cancelar", { variant: "secondary", attrs: 'data-action="cancel-delete"' }) +
        btn("Eliminar", { variant: "danger", icon: "trash", attrs: 'data-action="confirm-delete"' }) +
      '</div></div></div>';
  }

  /* ------------------------------ Colecciones ------------------------------ */
  function initCol(type) {
    col = {
      type: type,
      data: moduleData[type],
      items: moduleData[type].items.slice(),
      selected: null,
      playing: "",
      creating: false,
      created: false,
      draft: { title: "", tag: "", meta: "", foot: "", note: "" }
    };
  }

  function collectionGridHTML() {
    var type = col.type;
    var data = col.data;
    return col.items.map(function (item, index) {
      var infoIcon = type === "events" ? "pin" : type === "music" ? "sparkles" : type === "wardrobe" ? "check" : "users";
      var isPlaying = col.playing === item.title;
      return '<article class="module-card">' +
        '<div class="module-card-top"><span class="module-icon tone-' + (index % 4) + '">' + icon(data.icon) + '</span>' + badge(item.tag, index === 2) + '</div>' +
        '<h2>' + esc(item.title) + '</h2><p class="module-meta">' + esc(item.meta) + '</p>' +
        '<div class="module-info"><span>' + icon(infoIcon, 16) + esc(item.foot) + '</span><small>' + esc(item.note) + '</small></div>' +
        '<div class="module-actions">' +
          (type === "music"
            ? '<button class="play-button ' + (isPlaying ? "playing" : "") + '" data-action="toggle-play" data-index="' + index + '">' + icon(isPlaying ? "pause" : "play", 16) + (isPlaying ? "Pausar" : "Reproducir") + '</button>'
            : "") +
          '<button class="open-detail" data-action="select-item" data-index="' + index + '">Ver detalles ' + icon("chevron", 16) + '</button>' +
        '</div></article>';
    }).join("");
  }

  function collectionOverlaysHTML() {
    var type = col.type;
    var data = col.data;
    var labels = collectionLabels[type];
    var html = "";

    if (col.selected) {
      var s = col.selected;
      html += '<div class="drawer-layer" data-action="drawer-bg"><aside class="detail-drawer">' +
        '<button class="modal-close" data-action="close-drawer">' + icon("close") + '</button>' +
        '<span class="drawer-icon">' + icon(data.icon, 28) + '</span>' +
        '<p class="eyebrow">' + esc(data.title.toUpperCase()) + '</p><h2>' + esc(s.title) + '</h2>' + badge(s.tag) +
        '<div class="drawer-details">' +
          '<div><small>Información</small><strong>' + esc(s.meta) + '</strong></div>' +
          '<div><small>' + (type === "events" ? "Lugar" : type === "music" ? "Coreografía" : "Responsable / Estado") + '</small><strong>' + esc(s.foot) + '</strong></div>' +
          '<div><small>Detalles</small><strong>' + esc(s.note) + '</strong></div>' +
        '</div>' +
        btn("Entendido", { className: "full-button", attrs: 'data-action="close-drawer"' }) +
      '</aside></div>';
    }

    if (col.creating) {
      var draftField = function (key, index, required) {
        return '<label class="field"><span>' + esc(labels[index]) + (required ? " *" : "") + '</span>' +
          '<input data-draft="' + key + '" value="' + esc(col.draft[key]) + '" placeholder="Escribe ' + esc(labels[index].toLowerCase()) + '"' + (required ? " required" : "") + '/></label>';
      };
      html += '<div class="modal-layer" role="dialog" aria-modal="true"><form class="modal-card create-modal" data-form="create">' +
        '<button type="button" class="modal-close" data-action="close-create" aria-label="Cerrar">' + icon("close", 19) + '</button>' +
        '<span class="create-icon">' + icon(data.icon, 22) + '</span>' +
        '<p class="eyebrow">NUEVO REGISTRO</p><h2>' + esc(data.add) + '</h2>' +
        '<p>Completa la información para agregarlo a ' + esc(data.title.toLowerCase()) + '.</p>' +
        '<div class="create-form">' + draftField("title", 0, true) + draftField("tag", 1, true) + draftField("meta", 2, true) + draftField("foot", 3) + draftField("note", 4) + '</div>' +
        '<div class="modal-actions">' +
          btn("Cancelar", { variant: "secondary", attrs: 'data-action="close-create"' }) +
          btn("Guardar", { type: "submit", icon: "check" }) +
        '</div></form></div>';
    }

    if (col.created) {
      html += '<div class="toast"><span class="toast-icon">' + icon("check", 17) + '</span><span>Registro creado correctamente.</span>' +
        '<button data-action="close-created" aria-label="Cerrar">' + icon("close", 16) + '</button></div>';
    }
    return html;
  }

  function collectionPageHTML() {
    var data = col.data;
    return '<div>' +
      pageHeading(data.eyebrow, data.title, data.subtitle, btn(data.add, { icon: "plus", attrs: 'data-action="open-create"' })) +
      '<div class="module-grid" id="col-grid">' + collectionGridHTML() + '</div>' +
      '<div id="col-overlays">' + collectionOverlaysHTML() + '</div>' +
    '</div>';
  }

  function renderColGrid() {
    var el = document.getElementById("col-grid");
    if (el && col) el.innerHTML = collectionGridHTML();
  }

  function renderColOverlays() {
    var el = document.getElementById("col-overlays");
    if (el && col) el.innerHTML = collectionOverlaysHTML();
  }

  function createItem() {
    var c = col;
    if (!c.draft.title.trim() || !c.draft.tag.trim() || !c.draft.meta.trim()) return;
    c.items = [Object.assign({}, c.draft)].concat(c.items);
    c.draft = { title: "", tag: "", meta: "", foot: "", note: "" };
    c.creating = false;
    c.created = true;
    renderColGrid();
    renderColOverlays();
    window.setTimeout(function () {
      c.created = false;
      if (col === c) renderColOverlays();
    }, 3000);
  }

  /* ============================== Render ============================== */
  var root = document.getElementById("root");

  function buildShell() {
    root.innerHTML =
      '<div class="app-shell">' +
        '<aside class="sidebar" id="sidebar">' +
          '<div class="brand">' +
            '<div class="brand-mark">' + icon("sparkles", 24) + '</div>' +
            '<div><strong>Decanfro</strong><span>Academia de danza</span></div>' +
            '<button class="icon-button mobile-close" data-action="close-menu" aria-label="Cerrar menú">' + icon("close") + '</button>' +
          '</div>' +
          '<nav class="nav-list" id="nav-list" aria-label="Navegación principal"></nav>' +
          '<div class="sidebar-profile">' +
            '<div class="avatar small lilac">LF</div><div><strong>Luisa Fernanda</strong><span>Administradora</span></div>' + icon("logout", 18) +
          '</div>' +
        '</aside>' +
        '<div id="backdrop-host"></div>' +
        '<main class="main">' +
          '<header class="topbar">' +
            '<button class="icon-button mobile-menu" data-action="open-menu" aria-label="Abrir menú">' + icon("menu") + '</button>' +
            '<div class="mobile-brand"><div class="brand-mark">' + icon("sparkles", 20) + '</div><strong>DanceHub</strong></div>' +
            '<div class="top-actions"><button class="help-pill">¿Necesitas ayuda?</button><div class="avatar small pink">LF</div></div>' +
          '</header>' +
          '<div class="content" id="content"></div>' +
        '</main>' +
        '<div id="overlay-host"></div>' +
        '<div id="toast-host"></div>' +
      '</div>';
  }

  function renderNav() {
    var activeParent = state.page === "new" || state.page === "edit" || state.page === "detail" ? "dancers" : state.page;
    document.getElementById("nav-list").innerHTML =
      '<p class="nav-label">MENÚ PRINCIPAL</p>' +
      navItems.map(function (item) {
        var active = activeParent === item.page;
        return '<button data-action="navigate" data-page="' + item.page + '" class="nav-item ' + (active ? "active" : "") + '">' +
          icon(item.icon) + '<span>' + item.label + '</span>' + (active ? '<span class="active-dot"></span>' : "") + '</button>';
      }).join("");
  }

  function renderContent() {
    var el = document.getElementById("content");
    var html = "";
    switch (state.page) {
      case "home": html = dashboardHTML(); break;
      case "dancers": html = dancersListHTML(); break;
      case "new":
      case "edit": html = dancerFormHTML(); break;
      case "detail": html = dancerDetailHTML(); break;
      default:
        if (collectionPages.indexOf(state.page) !== -1) html = collectionPageHTML();
    }
    el.innerHTML = html;
  }

  function renderOverlay() {
    document.getElementById("overlay-host").innerHTML = state.deleteTarget ? deleteModalHTML(state.deleteTarget) : "";
  }

  function renderToast() {
    document.getElementById("toast-host").innerHTML = state.toast
      ? '<div class="toast"><span class="toast-icon">' + icon("check", 17) + '</span><span>' + esc(state.toast) + '</span>' +
        '<button data-action="close-toast" aria-label="Cerrar">' + icon("close", 16) + '</button></div>'
      : "";
  }

  function setMobile(open) {
    state.mobileOpen = open;
    document.getElementById("sidebar").classList.toggle("sidebar-open", open);
    document.getElementById("backdrop-host").innerHTML = open
      ? '<button class="sidebar-backdrop" data-action="close-menu" aria-label="Cerrar menú"></button>'
      : "";
  }

  function navigate(next) {
    var prev = state.page;
    state.page = next;
    setMobile(false);
    if (next === "new" || next === "edit") initForm(next);
    if (collectionPages.indexOf(next) !== -1) {
      if (prev !== next || !col) initCol(next);
    }
    renderNav();
    renderContent();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function flash(message) {
    state.toast = message;
    renderToast();
    window.setTimeout(function () { state.toast = ""; renderToast(); }, 3400);
  }

  function findDancer(id) {
    for (var i = 0; i < state.dancers.length; i++) {
      if (String(state.dancers[i].id) === String(id)) return state.dancers[i];
    }
    return null;
  }

  function editDancer(d) { state.selected = d; navigate("edit"); }
  function viewDancer(d) { state.selected = d; navigate("detail"); }

  function removeDancer() {
    var target = state.deleteTarget;
    if (!target) return;
    state.dancers = state.dancers.filter(function (d) { return d.id !== target.id; });
    state.deleteTarget = null;
    renderOverlay();
    navigate("dancers");
    flash("El bailarín fue eliminado correctamente.");
  }

  /* ============================== Eventos ============================== */
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-action]");
    if (!el) return;
    var action = el.getAttribute("data-action");
    if (action === "drawer-bg" && e.target.closest(".detail-drawer")) return;
    var d;

    switch (action) {
      case "navigate": navigate(el.getAttribute("data-page")); break;
      case "open-menu": setMobile(true); break;
      case "close-menu": setMobile(false); break;
      case "view-dancer": d = findDancer(el.getAttribute("data-id")); if (d) viewDancer(d); break;
      case "edit-dancer": d = findDancer(el.getAttribute("data-id")); if (d) editDancer(d); break;
      case "ask-delete": d = findDancer(el.getAttribute("data-id")); if (d) { state.deleteTarget = d; renderOverlay(); } break;
      case "detail-edit": editDancer(state.selected); break;
      case "detail-delete": state.deleteTarget = state.selected; renderOverlay(); break;
      case "cancel-delete": state.deleteTarget = null; renderOverlay(); break;
      case "confirm-delete": removeDancer(); break;
      case "close-toast": state.toast = ""; renderToast(); break;
      case "clear-search":
        state.query = "";
        var input = document.getElementById("search-input");
        if (input) input.value = "";
        updateDancersResults();
        break;
      case "remove-photo":
        if (formState) { formState.form.photo = undefined; renderContent(); }
        break;
      case "open-create": col.creating = true; renderColOverlays(); break;
      case "close-create": col.creating = false; renderColOverlays(); break;
      case "select-item": col.selected = col.items[Number(el.getAttribute("data-index"))]; renderColOverlays(); break;
      case "close-drawer":
      case "drawer-bg": col.selected = null; renderColOverlays(); break;
      case "close-created": col.created = false; renderColOverlays(); break;
      case "toggle-play":
        var item = col.items[Number(el.getAttribute("data-index"))];
        col.playing = col.playing === item.title ? "" : item.title;
        renderColGrid();
        break;
    }
  });

  document.addEventListener("input", function (e) {
    var t = e.target;
    if (t.id === "search-input") {
      state.query = t.value;
      updateDancersResults();
    } else if (t.hasAttribute && t.hasAttribute("data-field")) {
      formUpdate(t.getAttribute("data-field"), t.value);
    } else if (t.hasAttribute && t.hasAttribute("data-draft") && col) {
      col.draft[t.getAttribute("data-draft")] = t.value;
    }
  });

  document.addEventListener("change", function (e) {
    var t = e.target;
    if (!t.hasAttribute) return;
    if (t.hasAttribute("data-class")) {
      toggleClass(t.getAttribute("data-class"));
    } else if (t.hasAttribute("data-photo")) {
      uploadPhoto(t.files && t.files[0]);
    }
  });

  document.addEventListener("submit", function (e) {
    var f = e.target;
    if (!f.hasAttribute || !f.hasAttribute("data-form")) return;
    e.preventDefault();
    if (f.getAttribute("data-form") === "dancer") submitDancerForm();
    else if (f.getAttribute("data-form") === "create") createItem();
  });

  /* ============================== Inicio ============================== */
  buildShell();
  renderNav();
  renderContent();
  renderOverlay();
  renderToast();
})();
