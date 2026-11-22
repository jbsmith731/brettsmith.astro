export const UPDATE_TYPE = {
  ROLE: "role",
  PROJECT: "project",
} as const;

interface YearUpdate {
  update: string;
  suffix?: string;
  type: (typeof UPDATE_TYPE)[keyof typeof UPDATE_TYPE];
}

export interface Updates {
  year: number;
  updates: YearUpdate[];
}

export const UPDATES_V2: Updates[] = [
  {
    year: 2026,
    updates: [
      {
        update: "New role as Senior Fullstack Engineer at ClearOne Advantage",
        type: UPDATE_TYPE.ROLE,
      },
      {
        update: "Welcome to the world, Harrison James.",
        type: UPDATE_TYPE.PROJECT,
      },
      {
        update: "Launch improved BreakLine candidate invitation flow",
        type: UPDATE_TYPE.PROJECT,
      },
      {
        update: "Launch BreakLine Partners microsite",
        type: UPDATE_TYPE.PROJECT,
      },
      {
        update:
          "Launch improved BreakLine partner and staff management dashboards",
        type: UPDATE_TYPE.PROJECT,
      },
    ],
  },
  {
    year: 2025,
    updates: [
      {
        update:
          "Launch BreakLine internal browser extension for candidate sourcing and outreach",
        type: UPDATE_TYPE.PROJECT,
      },
      {
        update: "New role as Senior Frontend Engineer at BreakLine",
        type: UPDATE_TYPE.ROLE,
      },
      {
        update: "Launch internal Figma plugin for Audible's marketing team",
        type: UPDATE_TYPE.PROJECT,
      },
      {
        update: "Launch real-time queue status updates in the BDG web app",
        type: UPDATE_TYPE.PROJECT,
      },
    ],
  },
  {
    year: 2024,
    updates: [
      {
        update: "New role as Software Engineer at BDG Partners",
        type: UPDATE_TYPE.ROLE,
      },
      {
        update:
          "Launch Figma plugin to browse and place Audible catalog content directly in designs",
        type: UPDATE_TYPE.PROJECT,
      },
      {
        update: "Presenter at Contentful Amazon Day",
        type: UPDATE_TYPE.PROJECT,
      },
    ],
  },
  {
    year: 2023,
    updates: [
      {
        update: "Elegant Seagulls Sauce Honorable Mention",
        suffix: "Awwwards",
        type: UPDATE_TYPE.PROJECT,
      },
      {
        update: "Launch Elegant Seagulls Sauce website",
        type: UPDATE_TYPE.PROJECT,
      },
      {
        update: "Launch new Audible Gift Center experience",
        type: UPDATE_TYPE.PROJECT,
      },
      {
        update: "Launch updated global Audible landing page experiments",
        type: UPDATE_TYPE.PROJECT,
      },
      {
        update:
          "Launch first phase of the global Audible About site initiative",
        type: UPDATE_TYPE.PROJECT,
      },
      { update: "Launch Audible ACX Blog", type: UPDATE_TYPE.PROJECT },
      { update: "Launch personal website v4.0", type: UPDATE_TYPE.PROJECT },
    ],
  },
  {
    year: 2022,
    updates: [
      {
        update: "Elegant Seagulls agency Site of The Day",
        suffix: "Awwwards",
        type: UPDATE_TYPE.PROJECT,
      },
      {
        update: "Hello World! Charles Robert Smith is born",
        type: UPDATE_TYPE.PROJECT,
      },
      {
        update: "Launch Audible landing page experiments",
        type: UPDATE_TYPE.PROJECT,
      },
    ],
  },
  {
    year: 2021,
    updates: [
      {
        update: "Launch Audible Audiobook quiz recommendation  platform",
        type: UPDATE_TYPE.PROJECT,
      },
    ],
  },
  {
    year: 2020,
    updates: [
      {
        update: "Promoted to Tech Director at Elegant Seagulls",
        type: UPDATE_TYPE.ROLE,
      },
    ],
  },
  {
    year: 2019,
    updates: [
      {
        update: "Waves 4 Water Honorable Mention",
        suffix: "Awwwards",
        type: UPDATE_TYPE.PROJECT,
      },
      {
        update: "Tane Website of the Day",
        suffix: "CSS Design Awards",
        type: UPDATE_TYPE.PROJECT,
      },
      {
        update: "Tane Honorable Mention & Mobile Excellence Award",
        suffix: "Awwwards",
        type: UPDATE_TYPE.PROJECT,
      },
      {
        update: "About Audible Honorable Mention",
        suffix: "Awwwards",
        type: UPDATE_TYPE.PROJECT,
      },
    ],
  },
  {
    year: 2018,
    updates: [
      {
        update: "Promoted to Lead Frontend Developer at Elegant Seagulls",
        type: UPDATE_TYPE.ROLE,
      },
      {
        update: "InVision Design Leadership Honorable Mention",
        suffix: "Awwwards",
        type: UPDATE_TYPE.PROJECT,
      },
    ],
  },
  {
    year: 2017,
    updates: [
      {
        update: "Elegant Seagulls agency site Honorable Mention",
        suffix: "Awwwards",
        type: UPDATE_TYPE.PROJECT,
      },
    ],
  },
];
