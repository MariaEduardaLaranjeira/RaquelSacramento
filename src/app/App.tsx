import { useState } from "react";
import "./raquel.css";

// Figma real images
import imgHeroManicure from "../imports/hero-horizontal-new.jpg";
import imgSobrePortrait from "figma:asset/788e02a34b5f45215801e548549d8f6ed31d7d9a.png";
import imgInteriorSalon from "figma:asset/1d2e70b7d53cebd61871223fe6ac679f33c692c5.png";
import imgManicureDetalhe1 from "figma:asset/2c814f017f4bb6222f07ef5f17b6c2849f92836e.png";
import imgProdutos from "figma:asset/633f50c794ff528789f69c2721602b2b2483ebc6.png";
import imgManicureDetalhe2 from "figma:asset/39bdc06c7819d41ff377d2e6d207d764bbd819d2.png";
import imgAmbiente from "figma:asset/3f9bb5f31712f7e29a89a36adff1893a4b41c7d6.png";
// Nail art gallery thumbnails
import imgNail1 from "figma:asset/05ff33ee879d18613b30884a63baa051c0dbda27.png";
import imgNail2 from "figma:asset/dd4953588fe8b4ed0f072884f75e19b5d755dbce.png";
import imgNail3 from "figma:asset/2925f1c0e0fdf5eb895f1d02c583814ae113e353.png";
import imgNail4 from "figma:asset/b4047b1e403ef6ca4d9e3693467e9721732cab92.png";
import imgNail5 from "figma:asset/b9b8af3233de6d248a7f5062043026b851b3801e.png";
import imgNail6 from "figma:asset/499e4cc0ef67fdf936a585f00201b36b962ac658.png";

// Nav
function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="rs-nav">
      <a href="#hero" className="rs-nav-logo">
        Raquel <span>Sacramento</span>
      </a>
      <ul className={`rs-nav-links${open ? " open" : ""}`}>
        <li><a href="#sobre" onClick={close}>Sobre</a></li>
        <li><a href="#fotos" onClick={close}>Espaço</a></li>
        <li><a href="#galeria-unhas" onClick={close}>Catálogo</a></li>
        <li><a href="#servicos" onClick={close}>Serviços</a></li>
        <li><a href="#catalogo" onClick={close}>Preços</a></li>
        <li><a href="#horario" onClick={close}>Horário</a></li>
        <li><a href="#testemunho" onClick={close}>Testemunhos</a></li>
        <li><a href="#localizacao" onClick={close}>Localização</a></li>
        <li><a href="#ebook" onClick={close}>Ebook</a></li>
        <li><a href="#contacto" className="rs-nav-cta" onClick={close}>Marcação</a></li>
      </ul>
      <button
        className="rs-hamburger"
        aria-label="Menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

// Hero
function Hero() {
  return (
    <section id="hero" className="rs-hero">
      <div className="rs-hero-right">
        <img src={imgHeroManicure} alt="Serviço de manicure" className="rs-hero-img" />
      </div>
      <div className="rs-hero-left">
        <p className="rs-hero-eyebrow">Gabinete de Estética · Maia, Porto</p>
        <h1 className="rs-hero-title">A beleza em cada <em>detalhe</em></h1>
        <p className="rs-hero-sub">
          Manicure, pedicure e unhas de gel com uma abordagem personalizada, num espaço pensado para o teu conforto e bem-estar. Localizado na Rua da Estação, na Maia.
        </p>
        <div className="rs-hero-actions">
          <a
            href="https://wa.me/351912731115?text=Ol%C3%A1%20Raquel!%20Gostaria%20de%20fazer%20uma%20marca%C3%A7%C3%A3o."
            className="rs-btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            ✦ Marcar no WhatsApp
          </a>
          <a href="#servicos" className="rs-btn-outline">Ver Serviços</a>
        </div>
      </div>
    </section>
  );
}

// Destaques
function Destaques() {
  const items = [
    { number: "+500", label: "Clientes satisfeitas" },
    { number: "3", label: "Serviços especializados" },
    { number: "5★", label: "Avaliação média" },
    { number: "6 dias", label: "Por semana disponível" },
  ];

  return (
    <div id="destaques" className="rs-destaques">
      {items.map((item, i) => (
        <div key={item.label} style={{ display: "contents" }}>
          <div className="rs-destaque-item">
            <p className="rs-destaque-number">{item.number}</p>
            <p className="rs-destaque-label">{item.label}</p>
          </div>
          {i < items.length - 1 && <div className="rs-destaque-divider" />}
        </div>
      ))}
    </div>
  );
}

// Sobre
function Sobre() {
  return (
    <section id="sobre" className="rs-sobre">
      <div className="rs-sobre-img">
        <img src={imgSobrePortrait} alt="Raquel Sacramento – Especialista em Estética" />
      </div>
      <div className="rs-sobre-text">
        <p className="rs-section-eyebrow rs-sobre-eyebrow">Sobre mim</p>
        <h2 className="rs-section-title rs-sobre-title">
          Dedicada à <em>beleza</em><br />que te faz sentir bem.
        </h2>
        <p>
          Sou a Raquel Sacramento, especialista em estética com anos de experiência e uma paixão genuína pelo cuidado das mãos e pés. O meu gabinete nasceu da vontade de criar um espaço íntimo e acolhedor, onde cada cliente se sinta única.
        </p>
        <p>
          Utilizo produtos de qualidade superior e técnicas atualizadas para garantir resultados duradouros. Seja em manicure, pedicure ou unhas de gel, o meu compromisso é sempre a excelência e o teu conforto.
        </p>
        <div className="rs-divider rs-sobre-divider" />
        <div>
          {["Manicure & Pedicure", "Unhas de Gel", "Verniz Gel", "Maia · Porto"].map((tag) => (
            <span key={tag} className="rs-tag-pill">{tag}</span>
          ))}
        </div>
        <p className="rs-sobre-signature">Raquel Sacramento</p>
      </div>
    </section>
  );
}

// Fotos
function Fotos() {
  return (
    <section id="fotos" className="rs-fotos">
      <p className="rs-section-eyebrow">O nosso espaço</p>
      <h2 className="rs-section-title">Um ambiente <em>pensado para ti</em></h2>

      {/* Salon interior photo grid */}
      <div className="rs-fotos-grid">
        <div className="rs-foto-item rs-foto-main">
          <img src={imgInteriorSalon} alt="Interior do gabinete de estética" />
        </div>
        <div className="rs-foto-item rs-foto-sm">
          <img src={imgManicureDetalhe1} alt="Detalhe do serviço de manicure" />
        </div>
        <div className="rs-foto-item rs-foto-sm">
          <img src={imgProdutos} alt="Produtos utilizados" />
        </div>
        <div className="rs-foto-item rs-foto-sm">
          <img src={imgManicureDetalhe2} alt="Manicure em detalhe" />
        </div>
        <div className="rs-foto-item rs-foto-sm">
          <img src={imgAmbiente} alt="Ambiente do gabinete" />
        </div>
      </div>
    </section>
  );
}

// Galeria de Unhas
function GaleriaUnhas() {
  const nailPhotos = [
    { src: imgNail1, alt: "Arte em unhas 1", caption: "unhas delicadas" },
    { src: imgNail2, alt: "Arte em unhas 2", caption: "nail art colorida" },
    { src: imgNail3, alt: "Arte em unhas 3", caption: "unhas tendência 2026" },
    { src: imgNail4, alt: "Arte em unhas 4", caption: "unhas dos pés simples" },
    { src: imgNail5, alt: "Arte em unhas 5", caption: "nail arte simples" },
    { src: imgNail6, alt: "Arte em unhas 6", caption: "unhas primavera 2026" },
  ];

  return (
    <section id="galeria-unhas" className="rs-galeria-unhas">
      <p className="rs-section-eyebrow">Trabalhos recentes</p>
      <h2 className="rs-section-title">Catálogo <em>de unhas</em></h2>

      <div className="rs-nail-grid">
        {nailPhotos.map((photo) => (
          <div key={photo.alt} className="rs-nail-item">
            <img src={photo.src} alt={photo.alt} />
            <p className="rs-nail-caption">{photo.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Serviços
function Servicos() {
  const servicos = [
    {
      num: "01",
      name: "Manicure & Pedicure",
      desc: "Tratamento completo das mãos e pés com remoção de cutículas, lixagem, hidratação e aplicação de verniz. Um ritual de cuidado que mereces.",
    },
    {
      num: "02",
      name: "Unhas de Gel",
      desc: "Construção e alongamento em gel com acabamento natural ou criativo. Durabilidade e beleza que duram semanas, com um resultado impecável.",
    },
    {
      num: "03",
      name: "Verniz Gel",
      desc: "Cor intensa e duradoura com secagem imediata. Aplicação perfeita com uma ampla gama de cores para expressares a tua personalidade.",
    },
  ];

  return (
    <section id="servicos" className="rs-servicos">
      <p className="rs-section-eyebrow">O que faço</p>
      <h2 className="rs-section-title">Serviços <em>especializados</em></h2>
      <div className="rs-servicos-grid">
        {servicos.map((s) => (
          <div key={s.num} className="rs-servico-card">Catálogo            <p className="rs-servico-num">{s.num}</p><h3 className="rs-servico-name">{s.name}</h3><p className="rs-servico-desc">{s.desc}</p><div className="rs-servico-arrow">→</div></div>
        ))}
      </div>
    </section>
  );
}

// Catálogo
function Catalogo() {
  const items = [
    { name: "Manicure Simples", sub: "Corte, lima, cutículas e verniz normal", price: "Consultar" },
    { name: "Manicure com Verniz Gel", sub: "Manicure completo + verniz semipermanente", price: "Consultar" },
    { name: "Pedicure Simples", sub: "Corte, lima, cutículas e verniz normal", price: "Consultar" },
    { name: "Pedicure com Verniz Gel", sub: "Pedicure completo + verniz semipermanente", price: "Consultar" },
    { name: "Unhas de Gel – Colocação", sub: "Construção completa com gel", price: "Consultar" },
    { name: "Unhas de Gel – Manutenção", sub: "Retoque e manutenção das unhas", price: "Consultar" },
  ];

  const pagamentos = [
    { label: "MBWay" },
    { label: "Numerário" },
  ];

  return (
    <section id="catalogo" className="rs-catalogo">
      <div className="rs-catalogo-left">
        <p className="rs-section-eyebrow">Catálogo</p>
        <h2 className="rs-section-title">Transparência <em>em tudo</em></h2>
        <p className="rs-catalogo-intro">
          Consulta os nossos tratamentos e escolhe o que mais se adequa a sí. Para orçamentos personalizados, contacta-nos diretamente.
        </p>

        <p className="rs-section-eyebrow" style={{ marginTop: "2rem" }}>Métodos de pagamento</p>
        <div className="rs-pagamento-list">
          {pagamentos.map((p) => (
            <div key={p.label} className="rs-pagamento-badge">
              {p.label}
            </div>
          ))}
        </div>
      </div>

      <div className="rs-catalogo-items">
        {items.map((item) => (
          <div key={item.name} className="rs-catalogo-item">
            <div>
              <p className="rs-cat-name">{item.name}</p>
              <span className="rs-cat-sub">{item.sub}</span>
            </div>
            <p className="rs-cat-price">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Horário
function Horario() {
  return (
    <section id="horario" className="rs-horario">
      <p className="rs-section-eyebrow rs-horario-eyebrow">Disponibilidade</p>
      <h2 className="rs-section-title rs-horario-title">Horário <em>de atendimento</em></h2>
      <div className="rs-horario-grid">
        <div className="rs-horario-card">
          <p className="rs-horario-day">Segunda a Sexta</p>
          <p className="rs-horario-hours">09:30 – 19:00</p>
        </div>
        <div className="rs-horario-card">
          <p className="rs-horario-day">Sábado</p>
          <p className="rs-horario-hours">09:30 – 17:00</p>
        </div>
        <div className="rs-horario-card closed">
          <p className="rs-horario-day">Domingo</p>
          <p className="rs-horario-hours closed-text">Encerrado</p>
        </div>
      </div>
      <ul className="rs-horario-note-list">
        <li>Marcações exclusivamente via WhatsApp ou telefone.</li>
        <li>Horário sujeito a alteração em feriados e em caso de marcações.</li>
      </ul>
    </section>
  );
}

// Testemunhos
function Testemunhos() {
  const testemunhos = [
    {
      text: "Faço as unhas com a Raquel que é uma excelente profissional. Cheguei com as unhas muito finas e doridas e agora estão completamente recuperadas. Quem tem unhas sensíveis sabe que é difícil encontrar um bom profissional, e eu encontrei a Raquel.",
      name: "Rita Fernandes",
      role: "Cliente · Porto",
      initial: "R",
    },
    {
      text: "Profissional muito competente. Usa produtos excelentes, tem um atendimento excepcional e qualidade de serviço único! Adoro as massagens!",
      name: "Liliana Ferreira",
      role: "Cliente · Matosinhos",
      initial: "L",
    },
  ];

  return (
    <section id="testemunho" className="rs-testemunho">
      <p className="rs-section-eyebrow">O que dizem de nós</p>
      <h2 className="rs-section-title">Testemunhos <em>reais</em></h2>
      <div className="rs-testemunho-grid rs-testemunho-grid-2">
        {testemunhos.map((t) => (
          <div key={t.name} className="rs-testemunho-card">
            <div className="rs-testemunho-quote">"</div>
            <p className="rs-testemunho-stars">★★★★★</p>
            <p className="rs-testemunho-text">{t.text}</p>
            <div className="rs-testemunho-author">
              <div className="rs-testemunho-avatar">{t.initial}</div>
              <div>
                <p className="rs-testemunho-name">{t.name}</p>
                <p className="rs-testemunho-role">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Ícones SVG minimalistas
const IconMorada = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 9V21H9V15H15V21H21V9L12 2Z" stroke="#6B5E59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
  </svg>
);

const IconTelefone = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92V19.92C22 20.49 21.54 20.97 20.97 21C20.72 21.01 20.46 21.02 20.21 21.02C10.2 21.02 2 12.83 2 2.81C2 2.56 2.01 2.31 2.02 2.06C2.05 1.49 2.53 1.03 3.1 1.03H6.1C6.61 1.03 7.04 1.42 7.09 1.93C7.14 2.39 7.23 2.84 7.35 3.28C7.48 3.77 7.35 4.3 6.99 4.64L5.79 5.84C7.1 8.46 9.57 10.92 12.2 12.23L13.4 11.03C13.74 10.67 14.27 10.54 14.76 10.67C15.2 10.79 15.65 10.88 16.11 10.93C16.62 10.98 17.01 11.41 17.01 11.92V14.92C17.01 15.48 16.56 15.93 16 15.93Z" stroke="#6B5E59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
  </svg>
);

const IconWhatsApp = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 14.38C17.2 14.24 15.7 13.53 15.4 13.42C15.1 13.32 14.9 13.27 14.7 13.57C14.5 13.87 13.9 14.53 13.7 14.73C13.5 14.93 13.3 14.96 13 14.82C12.7 14.68 11.7 14.35 10.5 13.27C9.6 12.43 9 11.38 8.8 11.08C8.6 10.78 8.8 10.58 8.9 10.44C9 10.31 9.2 10.09 9.3 9.89C9.4 9.69 9.5 9.56 9.6 9.36C9.7 9.16 9.6 8.96 9.5 8.82C9.4 8.68 9 7.17 8.8 6.57C8.6 5.98 8.3 6.06 8.1 6.05C7.9 6.04 7.7 6.04 7.5 6.04C7.3 6.04 7 6.09 6.7 6.39C6.4 6.69 5.6 7.4 5.6 8.91C5.6 10.42 6.7 11.88 6.8 12.08C6.9 12.28 9 15.54 12.3 16.82C15.6 18.1 15.6 17.67 16.2 17.61C16.8 17.55 18 16.91 18.2 16.22C18.4 15.53 18.4 14.93 18.3 14.82C18.2 14.71 18 14.64 17.7 14.5M12 2C6.5 2 2 6.5 2 12C2 13.8 2.5 15.5 3.4 16.9L2 22L7.3 20.6C8.6 21.4 10.2 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" stroke="#6B5E59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
  </svg>
);

const IconInstagram = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#6B5E59" strokeWidth="1.5" fill="white"/>
    <circle cx="12" cy="12" r="4.5" stroke="#6B5E59" strokeWidth="1.5" fill="none"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="#6B5E59"/>
  </svg>
);

const IconFacebook = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#6B5E59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
  </svg>
);

// Localização
function Localizacao() {
  const details = [
    {
      icon: <IconMorada />,
      label: "Morada",
      value: (
        <>R. da Estação 47<br />4475-631 Maia, Porto</>
      ),
      href: null,
    },
    {
      icon: <IconTelefone />,
      label: "Telefone",
      value: "912 731 115",
      href: "tel:+351912731115",
    },
    {
      icon: <IconWhatsApp />,
      label: "WhatsApp · Marcações",
      value: "912 731 115",
      href: "https://wa.me/351912731115",
    },
    {
      icon: <IconInstagram />,
      label: "Instagram",
      value: "@raquelsacramento_estetica",
      href: "https://instagram.com/raquelsacramento_estetica",
    },
    {
      icon: <IconFacebook />,
      label: "Facebook",
      value: "@raquelsacramento",
      href: "https://facebook.com/raquelsacramento",
    },
  ];

  return (
    <section id="localizacao" className="rs-localizacao">
      <div className="rs-localizacao-info">
        <p className="rs-section-eyebrow">Onde estamos</p>
        <h2 className="rs-section-title">Fácil de <em>encontrar</em></h2>
        {details.map((d) => (
          <div key={d.label} className="rs-localizacao-detail">
            <div className="rs-loc-icon">
              {d.icon}
            </div>
            <div>
              <p className="rs-loc-label">{d.label}</p>
              <p className="rs-loc-value">
                {d.href ? (
                  <a
                    href={d.href}
                    target={d.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    {d.value}
                  </a>
                ) : (
                  d.value
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="rs-map-placeholder">
        <div className="rs-map-pin" />
        <p className="rs-map-label">Google Maps · Ver localização</p>
        <p className="rs-map-address">
          R. da Estação 47<br />4475-631 Maia
        </p>
        <a
          href="https://maps.google.com/?q=R.+da+Estação+47,+4475-631+Maia"
          target="_blank"
          rel="noreferrer"
          className="rs-map-btn"
        >
          Abrir no Google Maps →
        </a>
      </div>
    </section>
  );
}

// Contacto
function Contacto() {
  const [form, setForm] = useState({
    nome: "",
    contacto: "",
    servico: "",
    mensagem: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="rs-contacto">
      <div>
        <p className="rs-section-eyebrow rs-contacto-eyebrow">Vamos conversar</p>
        <h2 className="rs-section-title rs-contacto-title">Faz a tua <em>marcação</em></h2>
        <p className="rs-contacto-intro">
          Estou disponível para te receber e tornar cada visita numa experiência única. Envia uma mensagem direta ou preenche o formulário de contacto.
        </p>

        <a
          href="https://wa.me/351912731115?text=Ol%C3%A1%20Raquel!%20Quero%20marcar%20uma%20consulta."
          className="rs-contacto-whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          ↗ Marcar via WhatsApp – 912 731 115
        </a>

        <p className="rs-social-title">Redes Sociais</p>
        <div className="rs-social-links">
          <a
            href="https://instagram.com/raquelsacramento_estetica"
            target="_blank"
            rel="noreferrer"
            className="rs-social-link rs-social-link-taupe"
          >
            IG · @raquelsacramento_estetica
          </a>
          <a
            href="https://facebook.com/raquelsacramento"
            target="_blank"
            rel="noreferrer"
            className="rs-social-link rs-social-link-taupe"
          >
            FB · @raquelsacramento
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {submitted ? (
          <div className="rs-form-success">
            <p className="rs-form-success-title">Pedido enviado!</p>
            <p className="rs-form-success-text">
              Obrigada pelo teu contacto. Responderei em breve para confirmar a tua marcação.
            </p>
          </div>
        ) : (
          <>
            <div className="rs-form-group">
              <label className="rs-form-label">Nome completo</label>
              <input
                type="text"
                className="rs-form-input"
                placeholder="O teu nome"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
              />
            </div>
            <div className="rs-form-group">
              <label className="rs-form-label">Contacto (telefone ou e-mail)</label>
              <input
                type="text"
                className="rs-form-input"
                placeholder="Telefone ou e-mail"
                value={form.contacto}
                onChange={(e) => setForm({ ...form, contacto: e.target.value })}
              />
            </div>
            <div className="rs-form-group">
              <label className="rs-form-label">Serviço pretendido</label>
              <select
                className="rs-form-select"
                value={form.servico}
                onChange={(e) => setForm({ ...form, servico: e.target.value })}
              >
                <option value="">Seleciona um serviço</option>
                <option>Manicure</option>
                <option>Pedicure</option>
                <option>Unhas de Gel – Colocação</option>
                <option>Unhas de Gel – Manutenção</option>
                <option>Verniz Gel</option>
                <option>Outro / Dúvida</option>
              </select>
            </div>
            <div className="rs-form-group">
              <label className="rs-form-label">Mensagem (opcional)</label>
              <textarea
                className="rs-form-textarea"
                placeholder="Diz-me quando estás disponível ou o que precisas…"
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              />
            </div>
            <button type="submit" className="rs-form-submit">
              Enviar Pedido de Marcação
            </button>
            <p className="rs-form-privacy">
              Ao submeter este formulário concordas com o tratamento dos teus dados pessoais de acordo com a nossa{" "}
              <a href="#">Política de Privacidade</a>, nos termos do RGPD (Regulamento Geral sobre a Proteção de Dados – Reg. (UE) 2016/679).
            </p>
          </>
        )}
      </form>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="rs-footer">
      <div>
        <p className="rs-footer-logo">Raquel <em>Sacramento</em></p>
        <p className="rs-footer-subtitle">Gabinete de Estética · Maia, Porto</p>
      </div>

      <div className="rs-footer-legal">
        <p>
          <strong>Raquel Sacramento – Gabinete de Estética</strong><br />
          R. da Estação 47, 4475-631 Maia · NIF: [inserir NIF]<br />
          Atividade registada ao abrigo do Decreto-Lei n.º 115/2019 e legislação aplicável ao setor da estética em Portugal.<br />
          Todos os preços indicados incluem IVA à taxa em vigor (23%). Consulte as nossas condições de marcação e cancelamento.
        </p>
      </div>

      <ul className="rs-footer-links">
        {[
          ["#servicos", "Serviços"],
          ["#catalogo", "Catálogo"],
          ["#testemunho", "Testemunhos"],
          ["#localizacao", "Localização"],
          ["#contacto", "Contacto"],
          ["#", "Política de Privacidade"],
          ["#", "Resolução de Litígios"],
        ].map(([href, label]) => (
          <li key={label}><a href={href}>{label}</a></li>
        ))}
      </ul>

      <div className="rs-footer-bottom">
        <p className="rs-footer-copy">© 2026 Raquel Sacramento – Gabinete de Estética. Todos os direitos reservados.</p>
        <div className="rs-footer-legal-links">
          {[
            ["#", "Política de Privacidade"],
            ["#", "Termos e Condições"],
            ["#", "RGPD"],
            ["https://www.livroreclamacoes.pt", "Livro de Reclamações"],
          ].map(([href, label]) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// Ebook
function Ebook() {
  const ebooks = [
    {
      title: "Cuidados Essenciais",
      description: "Guia completo para manter as tuas unhas sempre saudáveis e bonitas.",
    },
    {
      title: "Nail Art Inspirações",
      description: "Descobre as últimas tendências em decoração e design de unhas.",
    },
    {
      title: "Manutenção em Casa",
      description: "Dicas profissionais para cuidares das tuas unhas entre sessões.",
    },
  ];

  return (
    <section id="ebook" className="rs-ebook">
      <p className="rs-section-eyebrow">Guias exclusivos</p>
      <h2 className="rs-section-title">Ebooks <em>gratuitos</em></h2>
      <p className="rs-ebook-intro">
        Descobre os segredos para manter as tuas unhas saudáveis e bonitas com os nossos guias completos.
        Dicas profissionais, cuidados essenciais e tudo o que precisas saber.
      </p>

      <div className="rs-ebook-grid">
        {ebooks.map((ebook) => (
          <div key={ebook.title} className="rs-ebook-card">
            <div className="rs-ebook-icon">📘</div>
            <h3 className="rs-ebook-title">{ebook.title}</h3>
            <p className="rs-ebook-desc">{ebook.description}</p>
            <a href="#" className="rs-ebook-btn">
              Descarregar Grátis
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

// WhatsApp float
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/351912731115?text=Ol%C3%A1%20Raquel!%20Gostaria%20de%20fazer%20uma%20marca%C3%A7%C3%A3o."
      className="rs-whatsapp-float"
      target="_blank"
      rel="noreferrer"
      title="Marcar via WhatsApp"
    >
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

export default function App() {
  return (
    <div className="rs-body">
      <Nav />
      <Hero />
      <Destaques />
      <Sobre />
      <Fotos />
      <GaleriaUnhas />
      <Servicos />
      <Catalogo />
      <Horario />
      <Testemunhos />
      <Localizacao />
      <Contacto />
      <Ebook />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
