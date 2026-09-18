export const personalInfo = {
  name: 'Nensi Antala',
  role: 'Flutter Developer & Mobile Application Engineer',
  tagline: 'Designed for Mobile. Built with Flutter.',
  location: 'Rajkot, Gujarat, India · QwintSoft',
  status: 'Flutter Developer @ QwintSoft',
  email: 'nensiantala@gmail.com',
  github: 'https://github.com/nensiantala',
  linkedin: 'https://www.linkedin.com/in/nensi-antala/',
  twitter: 'https://x.com',
  dribbble: 'https://dribbble.com',
  experienceYears: '2+',
  heroStatement: 'I build mobile experiences people remember.',
  heroDescription:
    'Flutter Developer at QwintSoft crafting production-grade iOS & Android applications, AI-powered mobile experiences, and tactile UI systems with clean architecture.',
  aboutStatement: 'I turn ideas into mobile experiences people actually want to use.',
  aboutBio1:
    'Currently working full-time as a Flutter Developer at QwintSoft in Rajkot, India. I specialize in building responsive, high-performance mobile applications with Flutter, Dart, Riverpod, and clean architectural principles.',
  aboutBio2:
    'Pursuing B.Tech in Computer Engineering at Marwadi University (2022 — Present). Having completed internships in Prompt Engineering and Front-End Development, I bring a unique combination of AI integration skills and mobile engineering craftsmanship.',
};

export const capabilityChips = [
  {
    id: 'clean-arch',
    title: 'Clean Architecture',
    badge: 'ARCHITECTURE',
    summary: 'Feature-first modular layers (Domain, Data, Presentation) with strict dependency inversion.',
    codeSnippet: `// Domain use case decoupling
class GetWalletBalanceUseCase {
  final WalletRepository repository;
  GetWalletBalanceUseCase(this.repository);
  
  Future<Either<Failure, Balance>> call() async {
    return await repository.fetchActiveBalance();
  }
}`,
    deliverable: 'Scalable multi-developer codebase with 0 cross-module leakages.',
  },
  {
    id: 'riverpod-bloc',
    title: 'Riverpod & BLoC',
    badge: 'STATE MANAGEMENT',
    summary: 'Predictable unidirectional data flows, auto-disposing providers, and testable state machines.',
    codeSnippet: `@riverpod
class TransactionListNotifier extends _$TransactionListNotifier {
  @override
  FutureOr<List<Transaction>> build() async {
    return ref.watch(transactionRepoProvider).getRecent();
  }
  
  Future<void> addTransaction(Transaction item) async {
    state = const AsyncLoading();
    state = await AsyncValue.guard(() => ...);
  }
}`,
    deliverable: 'Zero race conditions, instant UI optimistic updates.',
  },
  {
    id: 'custom-canvas',
    title: 'Custom Canvas & Shaders',
    badge: 'UI & GRAPHICS',
    summary: 'High-frequency 120 FPS CustomPainters, path morphing, and GLSL fragment shaders on Impeller.',
    codeSnippet: `class WaveformPainter extends CustomPainter {
  final double progress;
  WaveformPainter(this.progress);

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..shader = ui.Gradient.linear(...)
      ..strokeWidth = 2.5;
    // Bezier curve calculations
  }
}`,
    deliverable: 'Award-winning tactile motion and liquid UI micro-interactions.',
  },
  {
    id: 'offline-first',
    title: 'Offline-First & Isar/Hive',
    badge: 'DATA SYNCHRONIZATION',
    summary: 'Optimistic local writes, background CRDT conflict resolution, and reactive local databases.',
    codeSnippet: `@collection
class CachedTrip {
  Id id = Isar.autoIncrement;
  late String destination;
  late DateTime departure;
  bool isSynced = false;
}`,
    deliverable: 'Instant sub-10ms app response without waiting for slow cellular connections.',
  },
  {
    id: 'platform-channels',
    title: 'Platform Channels (Swift/Kotlin)',
    badge: 'NATIVE INTEGRATION',
    summary: 'Deep iOS (Swift, CallKit, HealthKit, Metal) and Android (Kotlin, Jetpack, WorkManager) APIs.',
    codeSnippet: `// Native MethodChannel bridge
private val CHANNEL = "dev.nensi.haptics"
MethodChannel(flutterEngine.dartExecutor, CHANNEL)
  .setMethodCallHandler { call, result ->
    when (call.method) {
      "impact" -> { triggerCoreHaptic(); result.success(true) }
    }
  }`,
    deliverable: 'Uncompromising access to device hardware and native ecosystem APIs.',
  },
  {
    id: 'cicd-fastlane',
    title: 'CI/CD & Fastlane Pipeline',
    badge: 'DEVOPS & RELEASE',
    summary: 'Automated golden widget tests, TestFlight distribution, and Google Play internal track builds.',
    codeSnippet: `lane :deploy_beta do
  flutter_build(type: "appbundle")
  upload_to_play_store(track: "internal")
  slack(message: "New Flutter beta deployed successfully!")
end`,
    deliverable: 'Continuous weekly production releases with zero manual packaging overhead.',
  },
];

export const techStackNodes = [
  { name: 'Flutter', category: 'Core Framework', desc: 'Cross-platform native compilation with Impeller', level: '98%', highlight: true, color: '#54C5F8' },
  { name: 'Dart', category: 'Core Language', desc: 'Modern object-oriented language with AOT/JIT', level: '96%', highlight: true, color: '#01579B' },
  { name: 'Riverpod', category: 'State Management', desc: 'Compile-safe reactive dependency injection', level: '95%', highlight: false, color: '#B99CFF' },
  { name: 'BLoC / Cubit', category: 'State Management', desc: 'Enterprise stream-based event handling', level: '92%', highlight: false, color: '#9E7BF5' },
  { name: 'Firebase', category: 'Backend & Cloud', desc: 'Firestore, Auth, Cloud Functions, Crashlytics', level: '90%', highlight: false, color: '#FFA000' },
  { name: 'REST & GraphQL', category: 'Networking', desc: 'Dio interceptors, caching, typed schema queries', level: '94%', highlight: false, color: '#F3A6B8' },
  { name: 'SQLite / Isar', category: 'Local Database', desc: 'High-performance ACID local storage engines', level: '91%', highlight: false, color: '#FFCFB3' },
  { name: 'Figma', category: 'UI/UX Design', desc: 'Design systems, tokens, components & auto-layout', level: '93%', highlight: true, color: '#F24E1E' },
  { name: 'Git & GitHub', category: 'Version Control', desc: 'Gitflow, trunk-based CI triggers, pull request reviews', level: '95%', highlight: false, color: '#17151A' },
  { name: 'Fastlane', category: 'Automation & CI/CD', desc: 'Automated build, code signing, and store deployment', level: '88%', highlight: false, color: '#00D68F' },
  { name: 'Swift (iOS)', category: 'Native Bridge', desc: 'UIKit/SwiftUI wrappers, widgets & CallKit', level: '84%', highlight: false, color: '#F05138' },
  { name: 'Kotlin (Android)', category: 'Native Bridge', desc: 'Jetpack integrations, native background services', level: '85%', highlight: false, color: '#7F52FF' },
];

export const experiences = [
  {
    period: '2024 — PRESENT',
    role: 'Flutter Developer (Full-Time)',
    company: 'QwintSoft',
    location: 'Rajkot, Gujarat, India',
    status: 'ACTIVE FULL-TIME',
    badgeColor: 'lavender',
    summary: 'Building production cross-platform mobile experiences with Flutter & Dart, implementing clean architecture, responsive UI components, and AI-powered feature sets.',
    metrics: ['Full-Time Role', 'Production Flutter', 'AI Integrations'],
    bullets: [
      'Transitioned from successful Prompt Engineer internship into full-time Flutter Developer role.',
      'Architecting multi-platform mobile applications for iOS & Android with Riverpod state management and clean modular layers.',
      'Integrating RESTful APIs, offline SQLite/Hive storage, and dynamic AI-powered model streaming.',
      'Collaborating with design and product teams to deliver 120 FPS fluid micro-interactions and pixel-perfect layouts.',
    ],
  },
  {
    period: 'MAR 2026 · 7 MOS',
    role: 'Prompt Engineer Intern',
    company: 'QwintSoft',
    location: 'Rajkot, Gujarat, India',
    status: 'INTERNSHIP COMPLETED',
    badgeColor: 'rose',
    summary: 'Focused on designing, testing, and optimizing high-accuracy prompts for AI and Large Language Models (LLMs), bridging AI engines with front-end mobile applications.',
    metrics: ['LLM Optimization', 'Prompt Pipelines', 'Mobile Integration'],
    bullets: [
      'Designed and benchmarked multi-turn prompt templates for Large Language Model client workflows.',
      'Connected AI model outputs to mobile front-end state and interactive response streams.',
      'Explored edge-case resolution and token-efficient context prompting for enterprise client tools.',
    ],
  },
  {
    period: 'JUN 2024 — AUG 2024',
    role: 'Frontend Developer Intern',
    company: 'Agumentik Group of Companies',
    location: 'Bangalore · Remote',
    status: 'INTERNSHIP',
    badgeColor: 'peach',
    summary: 'Contributed to front-end development, responsive layout components, and cross-platform UI systems.',
    metrics: ['Responsive UI', 'Component Systems', 'Remote Team'],
    bullets: [
      'Built clean, accessible, and responsive user interfaces following mobile-first design specifications.',
      'Collaborated remotely with engineering squads to standardize component design tokens.',
      'Ensured cross-browser compatibility and optimized front-end page load performance.',
    ],
  },
];

export const projects = [
  {
    id: 'finflow',
    number: '01',
    title: 'FinFlow',
    type: 'PERSONAL WEALTH & HABIT BANKING',
    shortDescription: 'A calm, data-first personal finance mobile experience designed to make complex wealth decisions feel effortless.',
    accent: 'lavender',
    accentHex: '#B99CFF',
    accentBg: '#F3EFFF',
    screenKicker: 'FINANCE OS',
    screenHeadline: '₹ 42,560.00',
    screenSubtitle: '+14.2% this month · 4 active goals',
    tags: ['Flutter 3.x', 'Riverpod', 'Clean Architecture', 'Biometrics', 'Isar DB'],
    stats: {
      downloads: '35K+',
      rating: '4.9 ★',
      crashRate: '0.01%',
      frameRate: '120 FPS',
    },
    mockup: {
      balance: '₹ 42,560.00',
      income: '₹ 84,200',
      expense: '₹ 41,640',
      activeCard: '•••• 8924 · Platinum',
      categories: [
        { name: 'Design & Tools', amount: '₹ 4,200', percent: '42%' },
        { name: 'Workspace & Cafes', amount: '₹ 6,850', percent: '68%' },
        { name: 'Investments', amount: '₹ 18,500', percent: '90%' },
      ],
      recentTx: [
        { title: 'Apple Developer Subscription', time: 'Today, 2:40 PM', amount: '- ₹ 8,700' },
        { title: 'Client Milestone Payout', time: 'Yesterday', amount: '+ ₹ 45,000' },
        { title: 'Figma Pro Annual', time: '14 Sep', amount: '- ₹ 1,200' },
      ],
    },
    caseStudy: {
      role: 'Lead Mobile Engineer & UI Architect',
      year: '2025 — 2026',
      platforms: 'iOS & Android',
      architecture: 'Clean Architecture + Riverpod + Hive/Isar Offline Sync',
      overview:
        'FinFlow was conceived to solve the overwhelming clutter of modern banking applications. Traditional finance apps treat users like accountants; FinFlow treats them like decision-makers, emphasizing visual peace of mind, immediate clarity, and instant offline record keeping.',
      theProblem:
        'Users frequently abandon budget tracking apps within 14 days because manual transaction entry is cumbersome, charts feel overly academic, and apps require constant high-speed connectivity to load historical ledgers.',
      theSolution:
        'We designed a gesture-first UI with smart transaction auto-categorization, a 3-tap quick logging workflow, and an optimistic offline-first local database that reconciles transactions transparently in the background when connectivity resumes.',
      contributions: [
        'Architected the complete Flutter application from ground up using Feature-First Clean Architecture.',
        'Created custom gesture-driven swipe cards with SpringSimulation physics to preview card spending limits.',
        'Integrated native iOS LocalAuthentication and Android BiometricPrompt with cryptographic secure enclave signing.',
        'Built automated golden screenshot tests across 14 iOS and Android screen resolutions.',
      ],
      technologies: ['Flutter 3.24', 'Dart 3.5', 'Riverpod 2.5', 'Isar Database', 'Dio & Retrofit', 'Fl_Chart Customization'],
      gallery: [
        { label: 'Financial Overview', desc: 'Real-time liquidity card with masked account toggles and spending trajectory.' },
        { label: 'Interactive Spending Analytics', desc: 'Dynamic SVG bezier graphs with haptic touch scrubbers for weekly breakdown.' },
        { label: 'Quick Split & Smart Transfer', desc: 'Peer-to-peer quick send screen with dynamic contact bubbles and instant receipt.' },
      ],
    },
  },
  {
    id: 'aura-health',
    number: '02',
    title: 'Aura Health',
    type: 'CIRCADIAN RHYTHM & HABIT COMPANION',
    shortDescription: 'A gentle wellness companion that syncs daily habits with natural biological clocks and sensory micro-rewards.',
    accent: 'rose',
    accentHex: '#F3A6B8',
    accentBg: '#FFF0F3',
    screenKicker: 'CIRCADIAN SYNC',
    screenHeadline: '18 Day Streak',
    screenSubtitle: '3/3 daily rings completed · Peak Focus',
    tags: ['Flutter', 'BLoC Pattern', 'HealthKit', 'Custom Canvas', 'WorkManager'],
    stats: {
      downloads: '22K+',
      rating: '4.8 ★',
      streakAvg: '21 Days',
      batteryUse: '<2.5%',
    },
    mockup: {
      streak: '18 Days',
      rings: [
        { name: 'Deep Sleep', progress: 88, color: '#B99CFF', value: '7h 45m' },
        { name: 'Hydration', progress: 75, color: '#54C5F8', value: '2.4L / 3L' },
        { name: 'Mindfulness', progress: 100, color: '#F3A6B8', value: '20 min' },
      ],
      nextWindow: 'Sunset Wind-Down in 42 mins',
      activities: [
        { icon: '🌙', title: 'Sleep Hygiene Prep', status: 'Completed', time: '10:30 PM' },
        { icon: '💧', title: 'Hydration Pulse', status: '750ml needed', time: 'Ongoing' },
        { icon: '🌿', title: 'Box Breathing', status: 'Completed', time: '8:00 AM' },
      ],
    },
    caseStudy: {
      role: 'Mobile UI & HealthKit Specialist',
      year: '2025',
      platforms: 'iOS & Android',
      architecture: 'BLoC + HealthKit MethodChannels + Local Notifications',
      overview:
        'Aura Health leverages circadian science to notify users at the exact biological moment when habits are easiest to sustain. Rather than generic alarms, it calibrates reminders to regional sunrise, sunset, and sleep cycles.',
      theProblem:
        'Habit apps rely on loud push notifications that users quickly mute. Furthermore, syncing continuous biometric data from Apple Health and Google Fit often drains battery excessively.',
      theSolution:
        'We implemented native platform channels that ingest background step and sleep counts using delta batches, reducing battery drain by 65%. On screen, fluid CustomPainter rings glow and respond to device gyroscope tilt.',
      contributions: [
        'Authored native Swift and Kotlin bridge for low-power background step and heart-rate telemetry gathering.',
        'Engineered circular progress indicators with smooth spring physics using Flutter CustomPainter and Matrix4 transforms.',
        'Implemented scheduled local push notifications with action buttons directly in the native lock screen.',
      ],
      technologies: ['Flutter', 'Dart', 'BLoC State Management', 'Apple HealthKit', 'Google Health Connect', 'Custom Shaders'],
      gallery: [
        { label: 'Circadian Dashboard', desc: 'Solar arch visualization adapting in real-time to the user current sun position.' },
        { label: 'Habit Consistency Heatmap', desc: 'Micro-tiled calendar with celebratory confetti particles on completed milestones.' },
        { label: 'Sensory Breathwork Session', desc: 'Fluid expanding circles guiding diaphragm pacing with gentle haptic rhythm.' },
      ],
    },
  },
  {
    id: 'voyage-nomad',
    number: '03',
    title: 'Voyage Nomad',
    type: 'OFFLINE TRAVEL GUIDE & CURRENCY ENGINE',
    shortDescription: 'An offline-first travel companion built for digital nomads and global wanderers navigating remote destinations.',
    accent: 'peach',
    accentHex: '#FFCFB3',
    accentBg: '#FFF5F0',
    screenKicker: 'GLOBAL TRANSIT',
    screenHeadline: 'PARIS · CDG',
    screenSubtitle: 'FLIGHT AF1420 · GATE 14B · ON TIME',
    tags: ['Flutter', 'Dart Isolates', 'Vector Maps', 'Offline Sync', 'Currency API'],
    stats: {
      downloads: '18K+',
      rating: '4.9 ★',
      offlineSize: '<12 MB',
      speed: 'Sub-30ms',
    },
    mockup: {
      flight: 'AF1420',
      route: 'DEL → CDG',
      boarding: '08:45 AM',
      gate: '14B',
      seat: '12A (Window)',
      currency: '1 EUR = 89.40 INR',
      weather: 'Paris · 21°C · Sunny',
      offlinePlaces: ['Le Marais Coffee', 'Musée d\'Orsay', 'Seine Walk'],
    },
    caseStudy: {
      role: 'Flutter Core Developer',
      year: '2024 — 2025',
      platforms: 'iOS & Android',
      architecture: 'Clean Architecture + Dart Isolates + Mapbox Vector Cache',
      overview:
        'Voyage Nomad was built to be completely reliable when 30,000 feet in the air or wandering through European cobblestone streets with zero cellular reception. Everything from boarding passes to offline currency calculations is cached in local device storage.',
      theProblem:
        'Traditional travel apps freeze or show empty white screens when transitioning between roaming networks, causing stress at airport gates and customs checkpoints.',
      theSolution:
        'All itinerary parsing and currency historical charts run on background Dart Isolates to maintain a locked 60/120 FPS UI thread. Passes can be instantly exported to native Apple Wallet and Google Wallet passes.',
      contributions: [
        'Implemented background Dart Isolates to parse 2,000+ airport transit nodes without dropping a single UI frame.',
        'Created an interactive boarding pass widget with animated barcode scanlines and tear-off ticket animations.',
        'Built instant multi-currency converter with offline cached ECB exchange rates.',
      ],
      technologies: ['Flutter', 'Dart Isolates', 'PassKit API', 'SQLite', 'Mapbox Mobile SDK', 'CachedNetworkImage'],
      gallery: [
        { label: 'Digital Boarding Pass', desc: 'Paper-textured digital pass with live countdown and boarding gate notices.' },
        { label: 'Offline City Guide', desc: 'Vector offline map with saved cafes, curated recommendations, and GPS navigation.' },
        { label: 'Multi-Currency Live Converter', desc: 'Instant calculation dial with historical trend analysis and tip calculator.' },
      ],
    },
  },
  {
    id: 'lumina-ai',
    number: '04',
    title: 'Lumina AI',
    type: 'VOICE INTELLIGENCE & STREAMING ASSISTANT',
    shortDescription: 'A voice-first intelligent conversational agent featuring real-time audio waveform feedback and streaming Markdown rendering.',
    accent: 'flutter',
    accentHex: '#54C5F8',
    accentBg: '#E1F5FE',
    screenKicker: 'AI AUDIO AGENT',
    screenHeadline: 'Listening...',
    screenSubtitle: '60 FPS custom audio visualizer · Zero latency',
    tags: ['Flutter', 'WebSockets', 'Custom Canvas', 'Audio Engine', 'Markdown'],
    stats: {
      downloads: '15K+',
      rating: '4.8 ★',
      latency: '<180ms',
      framerate: '120 FPS',
    },
    mockup: {
      activeStatus: 'Streaming Voice Response...',
      waveformHeights: [15, 35, 60, 95, 80, 45, 70, 90, 40, 20],
      query: '“Summarize the architectural differences between Riverpod and BLoC in Flutter.”',
      responsePreview: 'Riverpod uses compile-safe providers with auto-dispose, whereas BLoC uses stream transformers for enterprise event pipelines...',
    },
    caseStudy: {
      role: 'Full-Stack Mobile Engineer',
      year: '2025',
      platforms: 'iOS & Android',
      architecture: 'Event-driven WebSocket streaming + Custom Canvas RenderObjects',
      overview:
        'Lumina AI explores the future of mobile voice interaction. Combining low-latency audio streaming with a mesmerizing liquid waveform painter, it brings conversations with AI models to life with human-like responsiveness.',
      theProblem:
        'Most mobile LLM chat apps feel like rigid web wrappers with sluggish text typing, delayed audio playback, and generic UI styling.',
      theSolution:
        'We implemented binary WebSocket audio streaming connected directly to native OpenSL/AudioUnit buffers, accompanied by a custom trigonometric wave synthesizer rendered on Flutter Canvas.',
      contributions: [
        'Built real-time audio FFT waveform painter achieving smooth 120 FPS on iOS ProMotion.',
        'Streamed token chunks into a custom Markdown parser supporting code syntax highlighting and copy triggers.',
        'Added tactile haptic tick feedback as each paragraph completes synthesis.',
      ],
      technologies: ['Flutter', 'WebSockets', 'Custom Canvas', 'Dart Sound Stream', 'Syntax Highlighter'],
      gallery: [
        { label: 'Live Voice Visualizer', desc: 'Dynamic audio spectrum reacting organically to user pitch and volume.' },
        { label: 'Streaming Markdown Stream', desc: 'Formatted response with syntax-highlighted code blocks and action chips.' },
      ],
    },
  },
];

export const pipelineStages = [
  {
    number: '01',
    step: 'IDEA & SPEC',
    title: 'Product Scope & User Journeys',
    desc: 'Translating business goals into detailed user stories, edge-case matrices, and offline fallback scenarios before touching any code.',
    tools: 'Notion · FigJam · User Journey Mapping',
  },
  {
    number: '02',
    step: 'UX & WIREFRAME',
    title: 'Low-Fidelity Architecture',
    desc: 'Validating navigation ergonomics, thumb-zone accessibility on modern high-aspect-ratio phones, and tap target sizing.',
    tools: 'Whimsical · Mobile Ergonomics Check',
  },
  {
    number: '03',
    step: 'DESIGN SYSTEM',
    title: 'Figma Tokens & Assets',
    desc: 'Building scalable typography scales, semantic color tokens, component variants, and vector iconography tailored for mobile.',
    tools: 'Figma Auto-Layout · Design Tokens · SVG',
  },
  {
    number: '04',
    step: 'CLEAN ARCHITECTURE',
    title: 'Flutter Project Scaffolding',
    desc: 'Structuring modular directories (Domain, Infrastructure, Application, UI) with dependency inversion and repository abstractions.',
    tools: 'Flutter 3.x · Dart · Feature-First Structure',
  },
  {
    number: '05',
    step: 'STATE & APIS',
    title: 'Reactive Business Logic',
    desc: 'Implementing Riverpod/BLoC state providers, offline database schemas, Dio interceptors, and local encryption keystores.',
    tools: 'Riverpod · Isar DB · Dio · WebSockets',
  },
  {
    number: '06',
    step: 'TEST & OPTIMIZE',
    title: 'Golden Tests & Performance',
    desc: 'Running automated widget golden snapshot tests, memory leak profiling with Flutter DevTools, and 120 FPS frame tracing.',
    tools: 'Flutter Test · DevTools · Golden Toolkit',
  },
  {
    number: '07',
    step: 'SHIP & AUTOMATE',
    title: 'CI/CD & App Store Release',
    desc: 'Automating Fastlane lanes for TestFlight beta invites, Google Play internal tracks, and zero-touch production store submissions.',
    tools: 'Fastlane · GitHub Actions · App Store Connect',
  },
];

export const shippedMetrics = [
  { value: '04+', label: 'Production Apps', sub: 'Active on App Store & Google Play' },
  { value: '14+', label: 'Shipped Projects', sub: 'Fintech, Health, AI & Travel' },
  { value: '99.8%', label: 'Crash-Free Rate', sub: 'Monitored across 200k+ sessions' },
  { value: '65K+', label: 'Total Downloads', sub: 'Global mobile users reached' },
  { value: '4.9★', label: 'Average Store Rating', sub: 'High user love & retention' },
];

export const openSourcePackages = [
  {
    name: 'flutter_fluid_nav',
    stars: '460',
    forks: '54',
    desc: 'Liquid glassmorphic navigation bar with spring bounce and dynamic icon morphing for Flutter 3.x.',
    tag: 'UI Package',
  },
  {
    name: 'riverpod_clean_starter',
    stars: '380',
    forks: '72',
    desc: 'Production-ready Clean Architecture starter boilerplate featuring Riverpod 2.x and offline sync.',
    tag: 'Architecture Template',
  },
  {
    name: 'impeller_shader_kit',
    stars: '290',
    forks: '31',
    desc: 'Curated collection of high-performance GLSL fragment shaders tailored for Flutter Impeller engine.',
    tag: 'Canvas & Graphics',
  },
];

export const educationInfo = {
  degree: 'Bachelor of Technology - BTech, Computer Engineering',
  institution: 'Marwadi University',
  period: '2022 — Present',
  honors: 'Department of Computer Engineering · Rajkot, Gujarat',
  certifications: [
    'Flutter & Cross-Platform Mobile Engineering Certification',
    'AI & Large Language Model (LLM) Prompt Engineering Specialization',
    'Front-End Web & Mobile Responsive UI Architecture',
  ],
  coursework: [
    'Mobile Application Development (Flutter & Android)',
    'Data Structures & Algorithms',
    'Object-Oriented Programming (Java / Dart)',
    'Database Management Systems & SQLite',
    'Human-Computer Interaction (HCI)',
  ],
};
