const TAGS = [
	'learning',
	'programming',
	'web development',
	'coding',
	'frontend',
	'backend',
	'cloud computing',
	'finance',
	'notes',
	'study',
	'college',
	'ece',
	'cse',
	'career',
	'interview',
	'internship',
	'graphic design',
	'ui/ux',
	'srmist',
	'html',
	'css',
	'javascript',
	'typescript',
	'react',
	'cpp',
	'github',
	'git',
	'node',
	'security',
	'community',
	'blogging',
	'aptitude',
	'courses',
	'free',
	'all',
	'certification',
	'practice',
	'open source',
	'documentation',
	'youtube',
	'framework',
	'jsx',
	'tools',
	'productivity',
	'typing',
	'gadgets',
	'databases',
	'mongodb',
	'sql',
	'redis',
	'library',
	'competitive coding',
	'dsa',
	'engineering',
	'aws',
	'cloud diagrams',
	'cloud architecture',
	'pinboard',
	'moodboard',
	'font',
	'font-pairing',
	'angular',
	'tailwindcss',
	'linux',
	'sqlite',
	'svelte',
	'business',
	'startup',
	'resume',
	'artificial intelligence',
	'machine learning',
	'python',
	'freelancing',
	'data science',
	'data analytics',
	'data visualizations',
	'blogs',
	'data competitions',
	'data sets',
	'jupyter notebooks',
	'hackathons',
	'neural networks',
	'documentation',
	'articles'
] as const;

export default TAGS;

// Expose this type into the global namespace declaration
export type Tag = (typeof TAGS)[number];
