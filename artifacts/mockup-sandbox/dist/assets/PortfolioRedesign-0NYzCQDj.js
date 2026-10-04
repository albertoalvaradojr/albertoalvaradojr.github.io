import{r as t,j as e}from"./index-GqRyVAnE.js";/* empty css               */const d=[{name:"Scension",category:"Game Development",image:"/__mockup/portfolio-assets/ScensionImages/Scension.png",alt:"Scension project artwork",number:"01",layout:"wide"},{name:"Alone",category:"Game Development",image:"/__mockup/portfolio-assets/AloneImages/Alone.png",alt:"Alone project artwork",number:"02",layout:"tall"},{name:"LionTree",category:"Game Development",image:"/__mockup/portfolio-assets/LionTree.png",alt:"LionTree project artwork",number:"03",layout:"tall"},{name:"SOHM",category:"Game Development",image:"/__mockup/portfolio-assets/SOHM%20Img.png",alt:"SOHM project artwork",number:"04",layout:"wide"},{name:"PECA",category:"Web Development",image:"/__mockup/portfolio-assets/PECA.png",alt:"PECA project artwork",number:"05",layout:"tall"},{name:"MoodMe",category:"Game Development",image:"/__mockup/portfolio-assets/MoodMePic.png",alt:"MoodMe project artwork",number:"06",layout:"wide"}],c=["All","Game Development","Web Development"];function f(){const[n,s]=t.useState("All"),[r,i]=t.useState(null),a=t.useRef(null),l=d.filter(o=>n==="All"||o.category===n);return t.useEffect(()=>{if(!r)return;a.current?.focus();const o=p=>{p.key==="Escape"&&i(null)};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[r]),e.jsxs("main",{className:"portfolio-redesign",children:[e.jsx("style",{children:`
        .portfolio-redesign {
          --pr-background: #0F172A;
          --pr-card: #1E293B;
          --pr-accent: #22C55E;
          --pr-text: #F8FAFC;
          --pr-muted: #94A3B8;
          --pr-rule: rgba(148, 163, 184, .2);
          min-height: 100dvh;
          padding: clamp(24px, 5.3vw, 82px) clamp(20px, 7vw, 112px) 56px;
          background: var(--pr-background);
          color: var(--pr-text);
        }

        .portfolio-redesign * { box-sizing: border-box; }
        .portfolio-redesign button { font: inherit; }

        .portfolio-redesign__shell {
          width: min(100%, 1320px);
          margin: 0 auto;
        }

        .portfolio-redesign__masthead {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-bottom: 19px;
          border-bottom: 1px solid var(--pr-rule);
          color: var(--pr-muted);
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 11px;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .portfolio-redesign__mark {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--pr-text);
          letter-spacing: .04em;
        }

        .portfolio-redesign__mark::before {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--pr-accent);
          content: "";
        }

        .portfolio-redesign__intro {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: end;
          gap: 32px;
          padding: clamp(58px, 10vw, 138px) 0 clamp(52px, 8vw, 100px);
        }

        .portfolio-redesign__eyebrow {
          margin: 0 0 20px;
          color: var(--pr-accent);
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 11px;
          letter-spacing: .16em;
          text-transform: uppercase;
        }

        .portfolio-redesign__title {
          max-width: 900px;
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(56px, 10.2vw, 140px);
          font-weight: 400;
          letter-spacing: -.075em;
          line-height: .83;
        }

        .portfolio-redesign__title span {
          color: var(--pr-muted);
          font-style: italic;
          font-weight: 400;
        }

        .portfolio-redesign__intro-note {
          max-width: 195px;
          margin: 0 0 5px;
          color: var(--pr-muted);
          font-size: 13px;
          line-height: 1.75;
        }

        .portfolio-redesign__intro-note strong {
          display: block;
          margin-bottom: 8px;
          color: var(--pr-text);
          font-weight: 500;
        }

        .portfolio-redesign__workbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 18px 0;
          border-top: 1px solid var(--pr-rule);
          border-bottom: 1px solid var(--pr-rule);
        }

        .portfolio-redesign__work-label {
          flex: 0 0 auto;
          margin: 0;
          color: var(--pr-muted);
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 10px;
          letter-spacing: .14em;
          text-transform: uppercase;
        }

        .portfolio-redesign__filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 7px;
        }

        .portfolio-redesign__filter {
          min-height: 40px;
          padding: 9px 14px;
          border: 1px solid transparent;
          border-radius: 99px;
          background: transparent;
          color: var(--pr-muted);
          cursor: pointer;
          font-size: 12px;
          transition: color .2s ease, background-color .2s ease, border-color .2s ease;
        }

        .portfolio-redesign__filter:hover {
          border-color: var(--pr-rule);
          color: var(--pr-text);
        }

        .portfolio-redesign__filter[aria-pressed="true"] {
          border-color: var(--pr-accent);
          background: var(--pr-accent);
          color: var(--pr-background);
          font-weight: 600;
        }

        .portfolio-redesign__filter:focus-visible,
        .portfolio-redesign__project:focus-visible,
        .portfolio-redesign__close:focus-visible {
          outline: 2px solid var(--pr-accent);
          outline-offset: 4px;
        }

        .portfolio-redesign__count {
          min-height: 21px;
          margin: 14px 0 22px;
          color: var(--pr-muted);
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 10px;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .portfolio-redesign__grid {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: clamp(28px, 5.4vw, 72px) clamp(18px, 2.6vw, 36px);
          align-items: start;
        }

        .portfolio-redesign__item {
          min-width: 0;
          grid-column: span 5;
        }

        .portfolio-redesign__item:nth-child(4n + 1),
        .portfolio-redesign__item:nth-child(4n + 4) {
          grid-column: span 7;
        }

        .portfolio-redesign__item:nth-child(even) {
          margin-top: clamp(22px, 6vw, 76px);
        }

        .portfolio-redesign__project {
          display: block;
          width: 100%;
          padding: 0;
          border: 0;
          background: none;
          color: inherit;
          text-align: left;
          cursor: pointer;
        }

        .portfolio-redesign__visual {
          position: relative;
          display: block;
          overflow: hidden;
          aspect-ratio: 1.42;
          background: var(--pr-card);
          isolation: isolate;
        }

        .portfolio-redesign__item--tall .portfolio-redesign__visual {
          aspect-ratio: .94;
        }

        .portfolio-redesign__visual::after {
          position: absolute;
          z-index: 1;
          inset: 0;
          border: 1px solid rgba(248, 250, 252, .08);
          content: "";
          pointer-events: none;
        }

        .portfolio-redesign__image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .55s cubic-bezier(.2, .65, .25, 1);
        }

        .portfolio-redesign__project:hover .portfolio-redesign__image,
        .portfolio-redesign__project:focus-visible .portfolio-redesign__image {
          transform: scale(1.035);
        }

        .portfolio-redesign__open {
          position: absolute;
          right: 14px;
          bottom: 14px;
          z-index: 2;
          display: grid;
          width: 40px;
          height: 40px;
          place-items: center;
          border: 1px solid rgba(248, 250, 252, .42);
          border-radius: 50%;
          background: rgba(15, 23, 42, .7);
          color: var(--pr-text);
          font-size: 20px;
          opacity: 0;
          transform: translateY(5px);
          transition: opacity .2s ease, transform .2s ease;
        }

        .portfolio-redesign__project:hover .portfolio-redesign__open,
        .portfolio-redesign__project:focus-visible .portfolio-redesign__open {
          opacity: 1;
          transform: translateY(0);
        }

        .portfolio-redesign__meta {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 15px;
          padding: 15px 1px 0;
        }

        .portfolio-redesign__name {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(23px, 3vw, 35px);
          font-weight: 400;
          letter-spacing: -.035em;
          line-height: 1.1;
        }

        .portfolio-redesign__category {
          margin: 0;
          color: var(--pr-muted);
          font-size: 11px;
          text-align: right;
        }

        .portfolio-redesign__index {
          display: block;
          margin-top: 6px;
          color: var(--pr-accent);
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 9px;
          letter-spacing: .08em;
        }

        .portfolio-redesign__footer {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          margin-top: clamp(58px, 9vw, 112px);
          padding-top: 18px;
          border-top: 1px solid var(--pr-rule);
          color: var(--pr-muted);
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 10px;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .portfolio-redesign__modal-backdrop {
          position: fixed;
          z-index: 20;
          inset: 0;
          display: grid;
          place-items: center;
          padding: 22px;
          background: rgba(15, 23, 42, .9);
          backdrop-filter: blur(8px);
        }

        .portfolio-redesign__modal {
          position: relative;
          width: min(100%, 900px);
          max-height: calc(100dvh - 44px);
          overflow: auto;
          padding: clamp(14px, 3vw, 26px);
          border: 1px solid var(--pr-rule);
          background: var(--pr-card);
          box-shadow: 0 24px 90px rgba(0, 0, 0, .35);
        }

        .portfolio-redesign__modal-image {
          display: block;
          width: 100%;
          max-height: min(64vh, 620px);
          object-fit: contain;
          background: var(--pr-background);
        }

        .portfolio-redesign__modal-info {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 15px;
          padding: 20px 2px 2px;
        }

        .portfolio-redesign__modal-title {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(30px, 5vw, 48px);
          font-weight: 400;
          letter-spacing: -.04em;
        }

        .portfolio-redesign__modal-category {
          margin: 0;
          color: var(--pr-muted);
          font-size: 12px;
        }

        .portfolio-redesign__close {
          position: absolute;
          top: clamp(22px, 4vw, 36px);
          right: clamp(22px, 4vw, 36px);
          z-index: 1;
          display: grid;
          width: 42px;
          height: 42px;
          place-items: center;
          border: 1px solid rgba(248, 250, 252, .4);
          border-radius: 50%;
          background: var(--pr-background);
          color: var(--pr-text);
          cursor: pointer;
          font-size: 23px;
        }

        @media (max-width: 700px) {
          .portfolio-redesign { padding-inline: 20px; }
          .portfolio-redesign__intro {
            grid-template-columns: 1fr;
            gap: 26px;
            padding-top: 68px;
          }
          .portfolio-redesign__intro-note {
            max-width: 300px;
            padding-left: 14px;
            border-left: 1px solid var(--pr-accent);
          }
          .portfolio-redesign__workbar {
            align-items: flex-start;
            flex-direction: column;
            gap: 14px;
          }
          .portfolio-redesign__filters {
            width: 100%;
            justify-content: flex-start;
            gap: 4px;
          }
          .portfolio-redesign__filter { padding-inline: 11px; font-size: 11px; }
          .portfolio-redesign__grid { gap: 34px 16px; }
          .portfolio-redesign__item,
          .portfolio-redesign__item:nth-child(4n + 1),
          .portfolio-redesign__item:nth-child(4n + 4) {
            grid-column: span 6;
          }
          .portfolio-redesign__item:nth-child(even) { margin-top: 38px; }
          .portfolio-redesign__item--tall .portfolio-redesign__visual { aspect-ratio: .83; }
          .portfolio-redesign__meta {
            align-items: flex-start;
            flex-direction: column;
            gap: 5px;
          }
          .portfolio-redesign__category { text-align: left; }
        }

        @media (max-width: 430px) {
          .portfolio-redesign__masthead { font-size: 9px; }
          .portfolio-redesign__title { font-size: clamp(50px, 17vw, 72px); }
          .portfolio-redesign__grid { grid-template-columns: 1fr; gap: 34px; }
          .portfolio-redesign__item,
          .portfolio-redesign__item:nth-child(4n + 1),
          .portfolio-redesign__item:nth-child(4n + 4) {
            grid-column: 1;
          }
          .portfolio-redesign__item:nth-child(even) { margin-top: 0; }
          .portfolio-redesign__visual,
          .portfolio-redesign__item--tall .portfolio-redesign__visual {
            aspect-ratio: 1.18;
          }
          .portfolio-redesign__meta {
            align-items: baseline;
            flex-direction: row;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-redesign *,
          .portfolio-redesign *::before,
          .portfolio-redesign *::after {
            scroll-behavior: auto !important;
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
        }
      `}),e.jsxs("div",{className:"portfolio-redesign__shell",children:[e.jsxs("div",{className:"portfolio-redesign__masthead",children:[e.jsx("span",{className:"portfolio-redesign__mark",children:"Alberto Alvarado Jr."}),e.jsx("span",{children:"Software developer · Web developer"})]}),e.jsxs("header",{className:"portfolio-redesign__intro",children:[e.jsxs("div",{children:[e.jsx("p",{className:"portfolio-redesign__eyebrow",children:"Portfolio / Selected work"}),e.jsxs("h1",{className:"portfolio-redesign__title",children:["Built to ",e.jsx("span",{children:"play."})]})]}),e.jsxs("p",{className:"portfolio-redesign__intro-note",children:[e.jsx("strong",{children:"Alberto Alvarado Jr."}),"Software developer and web developer."]})]}),e.jsxs("section",{"aria-label":"Selected projects",children:[e.jsxs("div",{className:"portfolio-redesign__workbar",children:[e.jsx("p",{className:"portfolio-redesign__work-label",children:"Browse the work"}),e.jsx("div",{className:"portfolio-redesign__filters","aria-label":"Filter projects",children:c.map(o=>e.jsx("button",{className:"portfolio-redesign__filter",type:"button","aria-pressed":n===o,onClick:()=>s(o),children:o},o))})]}),e.jsxs("p",{className:"portfolio-redesign__count","aria-live":"polite",children:[String(l.length).padStart(2,"0")," / 06 projects"]}),e.jsx("div",{className:"portfolio-redesign__grid",children:l.map(o=>e.jsx("article",{className:`portfolio-redesign__item portfolio-redesign__item--${o.layout}`,children:e.jsxs("button",{className:"portfolio-redesign__project",type:"button",onClick:()=>i(o),"aria-label":`Open ${o.name}, ${o.category}`,children:[e.jsxs("span",{className:"portfolio-redesign__visual",children:[e.jsx("img",{className:"portfolio-redesign__image",src:o.image,alt:o.alt,loading:"lazy"}),e.jsx("span",{className:"portfolio-redesign__open","aria-hidden":"true",children:"↗"})]}),e.jsxs("span",{className:"portfolio-redesign__meta",children:[e.jsxs("span",{children:[e.jsx("span",{className:"portfolio-redesign__name",children:o.name}),e.jsxs("span",{className:"portfolio-redesign__index",children:["PROJECT / ",o.number]})]}),e.jsx("span",{className:"portfolio-redesign__category",children:o.category})]})]})},o.name))})]}),e.jsxs("footer",{className:"portfolio-redesign__footer",children:[e.jsx("span",{children:"Alberto Alvarado Jr."}),e.jsx("span",{children:"Project archive / 06 works"})]})]}),r&&e.jsx("div",{className:"portfolio-redesign__modal-backdrop",role:"presentation",onClick:()=>i(null),children:e.jsxs("section",{className:"portfolio-redesign__modal",role:"dialog","aria-modal":"true","aria-labelledby":"portfolio-project-title",onClick:o=>o.stopPropagation(),children:[e.jsx("button",{ref:a,className:"portfolio-redesign__close",type:"button","aria-label":"Close project preview",onClick:()=>i(null),children:"×"}),e.jsx("img",{className:"portfolio-redesign__modal-image",src:r.image,alt:r.alt}),e.jsxs("div",{className:"portfolio-redesign__modal-info",children:[e.jsx("h2",{className:"portfolio-redesign__modal-title",id:"portfolio-project-title",children:r.name}),e.jsx("p",{className:"portfolio-redesign__modal-category",children:r.category})]})]})})]})}export{f as PortfolioRedesign};
