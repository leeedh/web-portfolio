import { Project, AutomationItem } from './types';

export const HERO_CONTENT = {
  title: "직관과 효율을 설계하는 개발자 이동훈입니다.",
  subtitle: "GIS Engineering & Full-stack Solution Provider",
  description: "3D 공간 정보 시각화부터 워크플로우 자동화까지. 기술적 깊이와 문제 해결에 대한 집요함으로 사용자 경험을 혁신하는 GIS 웹 개발자입니다."
};

export const CONTACT_INFO = {
  name: "김지아 (Zia Kim)",
  email: "candidate@email.com",
  linkedin: "https://linkedin.com/in/username",
  github: "https://github.com/username",
  location: "Seoul, South Korea",
  resumeUrl: "#" // 실제 이력서 파일 경로
};

export const GIS_PROJECTS: Project[] = [
  {
    id: 'gis-1',
    title: '3D Digital Twin & Data Analysis',
    subtitle: '대규모 도시 데이터 시각화 및 분석 플랫폼',
    description: 'Cesium 기반의 웹 3D 지도 엔진을 활용하여 도시 계획 및 관제를 위한 디지털 트윈 플랫폼을 구축했습니다. 대용량 공간 데이터를 웹상에서 지연 없이 렌더링하고, 직관적인 분석 도구를 제공합니다.',
    tags: ['React', 'TypeScript', 'CesiumJS', 'WebGL', 'GeoServer'],
    points: [
      'Problem: 기존 2D 지도 시스템의 공간감 부재 및 대용량 3D 객체(건물, 지형) 렌더링 시 브라우저 멈춤 현상 발생.',
      'Solution: 3D Tiles 최적화 및 Level of Detail(LOD) 전략 수립, Web Worker를 활용한 비동기 데이터 파싱 로직 구현.',
      'Impact: 렌더링 FPS 30+ 유지 및 데이터 로딩 속도 40% 단축, 실시간 가시권 분석 기능 도입으로 관제 효율성 증대.'
    ],
    image: 'https://picsum.photos/800/450?grayscale'
  },
  {
    id: 'gis-2',
    title: 'National Real Estate System',
    subtitle: '공공 부동산 트랜잭션 처리 시스템 유지보수',
    description: '국가급 부동산 거래 및 공시지가 정보를 관리하는 대국민 서비스의 프론트엔드 유지보수 및 고도화를 담당했습니다.',
    tags: ['React', 'Legacy Migration', 'Performance Tuning'],
    points: [
      'Problem: 연말정산 및 공시지가 발표 시즌 등 트래픽 급증 시 UI 블로킹 및 데이터 조회 지연 발생.',
      'Solution: 불필요한 리렌더링 제거(Memoization) 및 대용량 테이블 가상화(Virtualization) 적용, 조회 API 캐싱 전략 수립.',
      'Impact: 동시 접속자 10만 명 트래픽 상황에서도 UI 응답성 유지, 사용자 민원 접수 건수 30% 감소.'
    ]
  }
];

export const AUTOMATION_PROJECTS: AutomationItem[] = [
  {
    id: 'auto-1',
    title: 'Architectural Data Recovery Pipeline',
    problem: '손상된 건축물 대장 데이터 및 도면 파일 5만 건 이상의 수기 복구 필요 (예상 소요 시간 3개월+)',
    solution: 'Python Pandas 및 OpenCV를 활용한 데이터 전처리 및 패턴 매칭 자동화 스크립트 구축',
    impact: '데이터 정합성 99.8% 확보 및 전체 작업 기간을 3개월에서 1주로 단축 (업무 효율 1200% 상승)'
  },
  {
    id: 'auto-2',
    title: 'Legacy CSV/Excel ETL Automation',
    problem: '매일 반복되는 이종 시스템 간 데이터 포맷 변환 업무로 인한 개발팀 리소스 낭비',
    solution: 'Watchdog 라이브러리를 이용한 폴더 감지 및 자동 변환/DB 적재 파이프라인 개발',
    impact: '일일 단순 반복 업무 완전 제거(Zero-touch), 휴먼 에러 원천 차단'
  },
  {
    id: 'auto-3',
    title: 'GIS Data Quality Assurance System',
    problem: '대규모 공간 데이터 검증 및 좌표계 변환 작업의 수동 처리로 인한 오류 발생 및 처리 시간 지연',
    solution: 'PostGIS 및 Python을 활용한 자동 좌표계 검증 및 변환 스크립트, 데이터 품질 리포트 자동 생성 시스템 구축',
    impact: '데이터 검증 시간 80% 단축 및 좌표계 오류 95% 감소, 실시간 품질 모니터링 가능'
  }
];

export const PRODUCT_PROJECTS: Project[] = [
  {
    id: 'prod-1',
    title: 'Actor Schedule Manager',
    subtitle: '공연 조연출을 위한 스케줄링 협업 툴',
    description: '조연출이 수기로 관리하던 복잡한 배우 스케줄과 연습실 배정 문제를 해결하기 위해 개발된 SaaS 형태의 웹 애플리케이션입니다.',
    tags: ['Next.js', 'Supabase', 'Calendar API', 'Mobile First'],
    points: [
      'Pain Point: 엑셀과 카카오톡으로 파편화된 스케줄 공유로 인한 커뮤니케이션 미스 및 수정 이력 관리 불가.',
      'Solution: 실시간 일정 공유 및 충돌 감지 알고리즘 구현, 역할별 권한 관리 시스템 도입.',
      'Real-world Impact: 실제 극단 2곳에서 도입하여 조연출의 행정 업무 시간 70% 단축 및 스케줄 확정 프로세스 자동화.'
    ],
    image: 'https://picsum.photos/800/451?grayscale'
  },
  {
    id: 'prod-2',
    title: 'Theater Seat Simulator',
    subtitle: '관객 경험 개선을 위한 3D/2D 좌석 미리보기',
    description: '소규모 극장의 좌석 시야 정보를 예매 전에 미리 확인할 수 있는 인터랙티브 시뮬레이터입니다.',
    tags: ['React', 'Canvas API', 'SVG Interaction'],
    points: [
      'Pain Point: 소극장의 특성상 좌석별 시야 방해 요소(기둥, 사각지대)에 대한 사전 정보 부족으로 관객 불만 발생.',
      'Solution: SVG 기반의 반응형 좌석 맵과 시야각 시뮬레이션 기능 구현.',
      'Real-world Impact: 아마추어 극단 티켓 예매 페이지에 연동, 관객 만족도 조사에서 "예매 편의성" 항목 점수 대폭 상승.'
    ]
  }
];

export const ABOUT_ME = {
  title: "About Me",
  content: [
    "GIS 웹 개발자로서 공간 정보 시스템의 기술적 깊이와 사용자 경험을 동시에 추구합니다.",
    "3D 지도 엔진 개발부터 대규모 트래픽 처리, 워크플로우 자동화까지 다양한 도메인에서 문제 해결 경험을 쌓아왔습니다.",
    "단순히 기능을 구현하는 것을 넘어, 기술적 우아함과 실용성의 균형을 찾는 것을 중요하게 생각합니다.",
    "최근에는 제품 개발자로서의 관점도 함께 키워가며, 기술과 비즈니스 가치를 연결하는 개발을 지향합니다."
  ]
};

export const PERSONAL_INFO = {
  name: "이동훈",
  location: "Seoul, South Korea",
  email: "donghoon.lee@example.com",
  phone: "+82-10-0000-0000",
  description: "3D 공간 정보 시각화부터 워크플로우 자동화까지. 기술적 깊이와 문제 해결에 대한 집요함으로 사용자 경험을 혁신하는 GIS 웹 개발자입니다. 대규모 공간 데이터 처리와 실시간 시각화에 특화되어 있으며, 복잡한 기술적 문제를 우아하게 해결하는 것을 즐깁니다.",
  projectsCompleted: 15,
  cvUrl: "#", // 실제 CV URL로 교체 필요
  expertise: [
    "GIS 데이터 처리",
    "3D 지도 시각화",
    "실시간 위치 서비스",
    "공간 데이터 분석"
  ]
};

export const SKILLS = {
  categories: [
    {
      category: "Frontend",
      items: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "JavaScript",
        "HTML/CSS",
        "Redux",
        "Zustand"
      ],
      color: "bg-blue-500/10 text-blue-400 border-blue-500/30"
    },
    {
      category: "Geo/3D",
      items: [
        "CesiumJS",
        "WebGL",
        "Three.js",
        "GeoServer",
        "PostGIS",
        "Mapbox GL JS",
        "Leaflet",
        "Spatial Data"
      ],
      color: "bg-green-500/10 text-green-400 border-green-500/30"
    },
    {
      category: "Backend/DB",
      items: [
        "Python",
        "Node.js",
        "PostgreSQL",
        "ETL Pipeline",
        "Data Processing",
        "API Development",
        "RESTful API",
        "GraphQL"
      ],
      color: "bg-purple-500/10 text-purple-400 border-purple-500/30"
    },
    {
      category: "Infra/Etc",
      items: [
        "Git",
        "Docker",
        "AWS",
        "CI/CD",
        "Performance Optimization",
        "System Design",
        "Linux",
        "Nginx"
      ],
      color: "bg-orange-500/10 text-orange-400 border-orange-500/30"
    }
  ],
  stats: {
    yearsExperience: 6,
    projectsDelivered: 24,
    mapBasedApps: 15
  }
};

export const PROFILE_CONTEXT = `
Candidate Profile:
- Role: GIS Web Developer (React, TypeScript, Next.js, Python)
- Experience: 5+ years (Implied based on 'Senior' recruiter persona context)
- Key Skills:
  1. GIS Core: 3D Map (CesiumJS), Spatial Data Visualization, Public Real Estate System Maintenance (High Traffic).
  2. Automation: Python Scripting, ETL Pipelines, Data Recovery (Architectural drawings).
  3. Product Making: Actor Schedule Management System (Next.js, Active use), Theater Seat Simulator.
- Strengths: Strong engineering background combined with a product-oriented mindset. Capable of handling both complex 3D visualizations and practical workflow automations.
- Contact: candidate@email.com (Placeholder)
`;