// ─────────────────────────────────────────────
// data.ts — All static content lives here.
// Update this file to change portfolio content.
// ─────────────────────────────────────────────
import ragImage from './assets/pii_rag_workflow.png';
import qrImage from './assets/qr_shortener_mockup.png';
import datasheetImage from './assets/Dataextract.png';

// ── Nav ────────────────────────────────────────
export const NAV_ITEMS = {
  zh: [
    { id: 'about', label: '關於' },
    // { id: 'services', label: '經歷' },
    // { id: 'portfolio', label: '作品' },
    { id: 'contact', label: '聯絡' },
  ],
  en: [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Experience' },
    { id: 'portfolio', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ],
};

// ── Skills ─────────────────────────────────────
export const SKILLS = [
  'Supply Chain Management', 'Inventory Management', 
  'Production Management' 
];

// ── Certificates ───────────────────────────────
// ── Certificates ───────────────────────────────
export const CERTIFICATES = {
  zh: [
    { 
      icon: 'fa-certificate', 
      name: 'Microsoft AI-900', 
      sub: 'Azure AI Fundamentals',
      tags: [] 
    },
    { 
      icon: 'fa-shield-alt', 
      name: '勞動部國家技術士證', 
      sub: '中華民國技術士檢定合格', 
      tags: ['電腦軟體應用 乙級', '電腦軟體應用 丙級', '門市服務 丙級', '會計事務－資訊 丙級'] 
    },
  ],
  en: [
    { 
      icon: 'fa-certificate', 
      name: 'Microsoft AI-900', 
      sub: 'Azure AI Fundamentals',
      tags: [] 
    },
    { 
      icon: 'fa-shield-alt', 
      name: 'National Technical Skills Test', 
      sub: 'Workforce Development Agency (WDA) Certified', 
      tags: ['Computer Application - Level B', 'Computer Application - Level C', 'Retail Services - Level C', 'Accounting System - Level C'] 
    },
  ],
};

// ── Hero ───────────────────────────────────────
export const HERO_CONTENT = {
  zh: {
    badge: 'Supply chain management & industrial management',
    nameJp: '徐珮瑄',
    // line1: '專注在研發',
    // line2: 'AI自動化流程的工程師',
    // desc: '專精於將大型語言模型（LLM）轉化為實際解決方案，扮演連結「AI應用」與「企業實務」的橋樑。',
    // cta1: '探索作品集',
    cta2: '聯絡資訊',
  },
  en: {
    badge: 'Supply Chain Management & Industrial Management',
    nameJp: 'Pei-Hsuan Hsu',
    // line1: 'Building intelligent',
    // line2: 'AI-driven automation systems',
    // desc: 'Specializing in transforming Large Language Models into real-world solutions — bridging the gap between AI research and enterprise practice.',
    // cta1: 'View Portfolio',
    cta2: 'Get in Touch',
  },
};

// ── About ──────────────────────────────────────
// ── About ──────────────────────────────────────
// ── About ──────────────────────────────────────
export const ABOUT_CONTENT = {
  zh: {
    edu: {
      eyebrow: 'Education',
      schools: [
        { 
          name: '國立臺灣科技大學', 
          dept: '工業管理研究所 (博士班)', 
          period: '2023 - Now',
          status: '博士候選人', 
          gpa: 'GPA: 4.19 / 4.3' 
        },
        { 
          name: '國立屏東大學', 
          dept: '行銷與流通管理學系 (碩士班)', 
          period: '2021 - 2023',
          thesis: '二階層供應鏈於碳排放及雙重通路訂價之研究', 
          gpa: 'Overall Average: 91.77 / 100' 
        },
        { 
          name: '國立屏東大學', 
          dept: '行銷與流通管理學系 (學士班)', 
          period: '2017 - 2021' ,
          gpa: 'Overall Average: 91.33 / 100' 

        }
      ],
      thesisLabel: '碩士論文',
    },
    certs: { eyebrow: 'Certificates' },
    paper: {
      eyebrow: 'Scholarly archive',
      title: '學術發表',
      list: [
        'Tsao, Y. C., Hsu, P. H., Wu, C. H., & Chen, T. H. (2024). The green product investment policy of carbon emission reduction on a competition duopoly and dual-channel supply chain. International Journal of Systems Science: Operations & Logistics, 11(1), 2419405.'
      ]
    },
    conference: {
      // eyebrow: 'Scholarly archive',
      title: '國際研討會',
      list: [
        'Hsu, P. H., Tsao, Y. C., & Chen, T. H. (2025). Optimal production and intelligent decisions consider remanufacturing and carbon emission. 2025 International Advanced Technology and Taiwan-Japan Engineering Forum, IAT&TJEF 2025.',
        'Hsu, P. H., Tsao, Y. C., & Chen, T. H. (2025). Optimal production and quality policy consider rework and carbon emission. 2025 30th ISSAT International Conference on Reliability & Quality in Design.',
        `Hsu, P. H., & Chen, T. H. (2022). Analysis of manufacturers' investment in environmental protection equipment. Chinese Association of Innovative Information and Applied Statistics.`      ]
    },
    skills: { eyebrow: 'Core Skills' },
  },
  en: {
    edu: {
      eyebrow: 'Education',
      schools: [
        { 
          name: 'National Taiwan University of Science and Technology', 
          dept: 'Department of Industrial Management', 
          period: '2023 - Now',
          status: 'Ph.D. Candidate',
          gpa: 'GPA: 4.19 / 4.3' 
        },
        { 
          name: 'National Pingtung University', 
          dept: 'Department of Marketing and Distribution Management', 
          period: '2021 - 2023',
          thesis: '"The Pricing and the Carbon Emission Reduction on a Dual Channel in the Two-tier Supply Chain"',
          gpa: 'Overall Average: 91.77 / 100' 
        },
        { 
          name: 'National Pingtung University', 
          dept: 'Department of Marketing and Distribution Management', 
          period: '2017 - 2021' ,
          gpa: 'Overall Average: 91.33 / 100'
        }
      ],
      thesisLabel: "Master's Thesis",
    },
    certs: { eyebrow: 'Certificates' },
    paper: {
      eyebrow: 'Scholarly archive',
      title: 'Journal Paper',
      list: [
        'Tsao, Y. C., Hsu, P. H., Wu, C. H., & Chen, T. H. (2024). The green product investment policy of carbon emission reduction on a competition duopoly and dual-channel supply chain. International Journal of Systems Science: Operations & Logistics, 11(1), 2419405.'
      ]
    },
    conference: {
      // eyebrow: 'Scholarly archive',
      title: 'Conference',
      list: [
        'Hsu, P. H., Tsao, Y. C., & Chen, T. H. (2025). Optimal production and intelligent decisions consider remanufacturing and carbon emission. 2025 International Advanced Technology and Taiwan-Japan Engineering Forum, IAT&TJEF 2025.',
        'Hsu, P. H., Tsao, Y. C., & Chen, T. H. (2025). Optimal production and quality policy consider rework and carbon emission. 2025 30th ISSAT International Conference on Reliability & Quality in Design.',
        `Hsu, P. H., & Chen, T. H. (2022). Analysis of manufacturers' investment in environmental protection equipment. Chinese Association of Innovative Information and Applied Statistics.`      ]
    },
    skills: { eyebrow: 'Core Skills' },
  },
};

// ── Work History ───────────────────────────────
export interface WorkItem {
  company: string;
  location: string;
  period: string;
  title: string;
  icon: string;
  dark: boolean;
  present?: boolean;
  bullets?: { label: string; text: string }[];
  desc?: string;
  tags: string[];
  github?: string;
}
// ── 安全安全隱藏區（留空以防前端元件找不到變數報錯） ─────────────────
export interface WorkItem {}
export const WORK_HISTORY = { zh: [], en: [] };

export interface ProjectItem {}
export const PROJECTS = { zh: [], en: [] };

export const SERVICES_CONTENT = {
  zh: { eyebrow: '', title: '' },
  en: { eyebrow: '', title: '' },
};

export const PORTFOLIO_CONTENT = {
  zh: { eyebrow: '', title: '' },
  en: { eyebrow: '', title: '' },
};
// export const WORK_HISTORY: Record<'zh' | 'en', WorkItem[]> = {
//   zh: [
//     {
//       company: '麟數據 LNDATA',
//       location: '',
//       period: '2026 - NOW',
//       title: 'MLOps Engineer',
//       icon: 'fa-brain',
//       dark: true,
//       present: true,
//       desc: 'GenBI 系統開發與研發，建構自動化代理工作流。',
//       tags: [],
//     },
//     {
//       company: 'DELL',
//       location: 'Taipei, Taiwan',
//       period: 'Jul 2024 – Apr 2025',
//       title: 'GenAI 硬體自動化測試系統',
//       icon: 'fa-microchip',
//       dark: false,
//       bullets: [
//         { label: '分散式對話系統：', text: '整合 TTS 與自訂義角色，使裝置能在多輪對話中動態切換角色，實現自動化語音互動測試。' },
//         { label: '準確率驗證：', text: '導入 Whisper 模型轉錄錄音，透過關鍵字匹配演算法自動驗證測試結果。' },
//       ],
//       tags: ['Python', 'PyQt5', 'Whisper', 'TTS'],
//     },
//     {
//       company: 'Foxlink',
//       location: 'Taipei, Taiwan',
//       period: 'Oct 2023 – Dec 2024',
//       title: '預知保養系統',
//       icon: 'fa-industry',
//       dark: false,
//       bullets: [
//         { label: '預測性維護：', text: '結合 Ensemble Learning 預測耗材最佳更換時機，成功提升 90% 維護效率。' },
//         { label: '全端視覺化平台：', text: '以 FastAPI + React.js 建構系統，優化操作人員工作流程與 UX。' },
//       ],
//       tags: ['React.js', 'FastAPI', 'JavaScript', 'CSS'],
//       github: 'https://github.com/imlacha/foxlink-second.git',
//     },
//   ],
//   en: [
//     {
//       company: 'LNDATA',
//       location: '',
//       period: '2026 - NOW',
//       title: 'MLOps Engineer',
//       icon: 'fa-brain',
//       dark: true,
//       present: true,
//       desc: 'Leading GenBI system development and building automated agentic workflows.',
//       tags: [],
//     },
//     {
//       company: 'DELL',
//       location: 'Taipei, Taiwan',
//       period: 'Jul 2024 – Apr 2025',
//       title: 'GenAI Hardware Automation Testing System',
//       icon: 'fa-microchip',
//       dark: false,
//       bullets: [
//         { label: 'Multi-Agent Dialogue System: ', text: 'Integrated TTS with custom personas, enabling dynamic role-switching across multi-turn conversations for automated voice interaction testing.' },
//         { label: 'Accuracy Validation: ', text: 'Deployed Whisper for audio transcription, combined with keyword-matching algorithms to automatically verify test outcomes.' },
//       ],
//       tags: ['Python', 'PyQt5', 'Whisper', 'TTS'],
//     },
//     {
//       company: 'Foxlink',
//       location: 'Taipei, Taiwan',
//       period: 'Oct 2023 – Dec 2024',
//       title: 'Predictive Maintenance System',
//       icon: 'fa-industry',
//       dark: false,
//       bullets: [
//         { label: 'Predictive Maintenance: ', text: 'Applied Ensemble Learning to predict optimal spare-part replacement timing, achieving a 90% improvement in maintenance efficiency.' },
//         { label: 'Full-Stack Dashboard: ', text: 'Built with FastAPI + React.js to optimize operator workflows and UX.' },
//       ],
//       tags: ['React.js', 'FastAPI', 'JavaScript', 'CSS'],
//       github: 'https://github.com/imlacha/foxlink-second.git',
//     },
//   ],
// };

// // ── Projects ───────────────────────────────────
// export interface ProjectItem {
//   dark: boolean;
//   label: string;
//   title: string;
//   desc: string;
//   tags: string[];
//   github: string;
//   image: string;
//   delay?: boolean;
// }

// export const PROJECTS: Record<'zh' | 'en', ProjectItem[]> = {
//   zh: [
//     {
//       dark: true,
//       label: 'AI Security Architecture',
//       title: '雙流隱私保護 RAG 系統',
//       desc: '透過「去識別化中介層」實現「零真實個資」的外部 LLM 檢索，確保企業級資料安全性。',
//       tags: ['Python', 'Langchain', 'Redis', 'PostgreSQL', 'Docker'],
//       github: 'https://github.com/imlacha/PII-Mocking-RAG/',
//       image: ragImage,
//       delay: false,
//     },
//     {
//       dark: false,
//       label: 'Backend Infrastructure',
//       title: 'QR Code 縮網址系統',
//       desc: '基於 FastAPI 的高效能縮網址與動態 QR Code 生成系統，支援點擊分析與 Docker 快速部署。',
//       tags: ['FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'Segno'],
//       github: 'https://github.com/imlacha/qrcode-sys',
//       image: qrImage,
//       delay: true,
//     },
//     {
//       dark: false,
//       label: 'Datasheet Extractor',
//       title: '電子元件規格 Datasheet 萃取系統',
//       desc: '基於 LangGraph 狀態機與 MCP 微服務架構，結合多模態視覺與雙代理（Dual-Agent）自適應校正，精準解析複雜晶片圖紙與電氣表格，準確率達 95-97%。',
//       tags: ['LLM', 'LangGraph', 'MCP', 'FastAPI', 'Python', 'Pydantic'],
//       github: 'https://github.com/imlacha/elec-spec-extract-agent/',
//       image: datasheetImage,
//       delay: true,
//     },
//   ],
//   en: [
//     {
//       dark: true,
//       label: 'AI Security Architecture',
//       title: 'Dual-Stream Privacy-Preserving RAG',
//       desc: 'A "de-identification middleware" ensures zero real PII is ever sent to external LLMs, delivering enterprise-grade data security in retrieval-augmented generation.',
//       tags: ['Python', 'Langchain', 'Redis', 'PostgreSQL', 'Docker'],
//       github: 'https://github.com/imlacha/PII-Mocking-RAG/',
//       image: ragImage,
//       delay: false,
//     },
//     {
//       dark: false,
//       label: 'Backend Infrastructure',
//       title: 'QR Code URL Shortener',
//       desc: 'High-performance URL shortening and dynamic QR Code generation built on FastAPI, with click analytics and one-command Docker deployment.',
//       tags: ['FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'Segno'],
//       github: 'https://github.com/imlacha/qrcode-sys',
//       image: qrImage,
//       delay: true,
//     },
//     {
//       dark: false,
//       label: 'Datasheet Extractor',
//       title: 'Electronic Component Datasheet Extraction System',
//       desc: 'An enterprise-grade parser built on LangGraph StateGraph and MCP microservices, leveraging multimodal vision and a dual-agent self-correction mechanism to extract component specs with 95-97% accuracy.',
//       tags: ['LLM-Based', 'LangGraph', 'MCP', 'FastAPI', 'Python'],
//       github: 'https://github.com/imlacha/elec-spec-extract-agent/',
//       image: datasheetImage,
//       delay: true,
//     },
//   ],
// };

// // ── Services Section headings ──────────────────
// export const SERVICES_CONTENT = {
//   zh: { eyebrow: 'Work History', title: '實戰專案背景' },
//   en: { eyebrow: 'Work History', title: 'Professional Background' },
// };

// // ── Portfolio Section headings ─────────────────
// export const PORTFOLIO_CONTENT = {
//   zh: { eyebrow: 'Selected Works', title: '專案作品集' },
//   en: { eyebrow: 'Selected Works', title: 'Portfolio' },
// };
