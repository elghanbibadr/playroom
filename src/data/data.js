import checkIcon from "../assets/checkIcon.svg"
import checkIconWhite from "../assets/checkIconWhite.webp"
import checkIconGrey from "../assets/checkIcongrey.svg"
import xmark from "../assets/xmark.svg"

import appstore from "../assets/app-store.webp"
import BunchLogo from "../assets/Bunch-Logo.webp"
import readyPlayer from "../assets/readyplayer.png"
import discord from "../assets/Discord-logo1.webp"
import tiktok from "../assets/TikTok-icon.png"
import TwitchLogo from "../assets/Twitch-logo.png"
import crazygame from "../assets/crazygames.webp"
import poki from "../assets/poki.png"


import unityIcon from "../assets/unityIcon.svg"
import threejsIcon from "../assets/threejsIcon.svg"
import godotIcon from "../assets/godotIcon.svg"
import cocosIcon from "../assets/cocosIcon.svg"
import pixijsIcon from "../assets/PixijsIcon.svg"
import playcanvasIcon from "../assets/playcanvasIcon.svg"
import reactIcon from "../assets/React-icon.svg"

import webxrIcon from "../assets/webxrIcon.svg"
import phaserIcon from "../assets/phaserIcon.svg"

import earthIcon from '../assets/earthIcon.svg'
import scyncmodelIcon from '../assets/scyncmodel.svg'
import integrationIcon from '../assets/integrationIcon.svg'
import devIcon from '../assets/devIcon.svg'


// HOME DATA
export const builtForNextGenerationCardsData = [
    {
      id: 1,
      img1Src: appstore, 
      title: "Casual 2D or 3D",
      desc: "Get people together for deeper casual games",
    },
    {
      id: 2,
      img1Src:  readyPlayer,
      img2Src:  BunchLogo,
      title: "Social hub",
      desc: "Build worlds with avatars and in game communication",
    },
    {
      id: 3,
      img1Src: discord,
      title: "Stream Style",
      desc: "Build games that take multi user input"
    },
    {
      id: 4,
      img1Src: tiktok,
      img2Src: TwitchLogo,
      title: "Live Games",
      desc: "Run live games that connects thousands"
    },
    {
      id: 5,
      img1Src:crazygame,
      img2Src: poki,
      title: "IO",
      desc: "Build games that brings 100s together"
    },
  ];
  


  export const techCards = [
    { icon: reactIcon, title: 'React' },
    { icon: unityIcon, title: 'Unity' },
    { icon: threejsIcon, title: 'Threejs' },
    { icon: godotIcon, title: 'Godot' },
    { icon: cocosIcon, title: 'Cocos' },
    { icon: phaserIcon, title: 'Phaser' },
    { icon: pixijsIcon, title: 'PixiJs' },
    { icon: webxrIcon, title: 'WebXR' },
    { icon: playcanvasIcon, title: 'Playcanvas' },
  ];
  

export const featureSubmenu = [
    {
      title: 'Multiplayer Kit',
      description: 'A robust architecture to build with zero backend code',
      icon:earthIcon,
    },
    {
      title: 'Integrations',
      description: 'Build with your favorite AI, Avatar and social tools',
      icon:integrationIcon,
  
    },
    {
      title: 'Sync’d Modules',
      description: 'Embeddable game objects that speeds up development',
      icon:scyncmodelIcon,
  
    },
    {
      title: 'Hosting',
      description: 'Instantly deploy and share games globally',
      icon:devIcon,
  
    },
    
  ];


  export const plansData = [
    {
      id: 1,
      title: "Hobby",
      price: "free",
      buttonName: "Get started",
      planFeatures: ["Non Commercial", "Unlimited CCU"]
    },
    {
      id: 2,
      title: "Starter",
      price: "$10",
      buttonName: "Get in Touch",
      planFeatures: ["10,000 MAU (Monthly Active Users)", "Unlimited CCU", "Auto Scaling", "$0.05 additional users", "10,000 MAU extra credits"]
    },
    {
      id: 3,
      title: "Studio",
      price: "$150",
      buttonName: "Get in Touch",
      planFeatures: ["100,000 MAU (Monthly Active Users)", "Unlimited CCU", "Auto Scaling", "$0.0050 additional users", "Priority Support"]
    },
    {
      id: 4,
      title: "Enterprise",
      price: "Custom",
      buttonName: "Contact Us",
      planFeatures: ["Multiple Games", "1M+ MAU", "Custom Pricing", "Unlimited CCU", "Team Dashboard", "Dedicated support"]
    },
  ]
  


  export const packageOffersData1 = [
  
    {
      packageName: "Multiplayer Services",
      packageFeatures: [
        { text: "CCU Limit", hasCheck: false, iconSource: "path/to/ccu_limit_icon.png" },
        { text: "Platforms", hasCheck: false, iconSource: "path/to/platforms_icon.png" },
        { text: "Managed SSL Certificates", hasCheck: false, iconSource: "path/to/ssl_certificates_icon.png" },
        { text: "Bandwidth", hasCheck: false, iconSource: "path/to/bandwidth_icon.png" },
        { text: "Support", hasCheck: false, iconSource: "path/to/support_icon.png" },
        { text: "Scaling", hasCheck: false, iconSource: "path/to/scaling_icon.png" },
        { text: "Region", hasCheck: false, iconSource: "path/to/region_icon.png" },
        { text: "Updates", hasCheck: false, iconSource: "path/to/updates_icon.png" },
        { text: "Bug Handling", hasCheck: false, iconSource: "path/to/bug_handling_icon.png" },
        { text: "Documentation", hasCheck: false, iconSource: "path/to/documentation_icon.png" }
      ]
      
    },
    {
      packageName: "Basic Modules & UI Kits",
      packageFeatures: [
        { text: "Open Source Templates", hasCheck: false, iconSource: null },
        { text: "UI Lobby", hasCheck: false, iconSource: null },
        { text: "UI Matchmaking", hasCheck: false, iconSource: null },
        { text: "Sync’d Game Objects", hasCheck: false, iconSource: null },
        { text: "Gamepads Integrations", hasCheck: false, iconSource: null },
        { text: "UI Avatar pickers", hasCheck: false, iconSource: null },
  
  
      ]
    },
    {
      packageName: "Pro Modules & UI Kits (Usage based pricing)",
      packageFeatures: [
        { text: "Sync’d Chat Kit", hasCheck: false, iconSource: null },
        { text: "Sync’d Voice Kit", hasCheck: false, iconSource: null },
        { text: "Stream mode UI", hasCheck: false, iconSource: null },
        { text: "Tv mode UI", hasCheck: false, iconSource: null },
        { text: "Twitch Moderation Kit", hasCheck: false, iconSource: null },
        { text: "AI Assets Generator API", hasCheck: false, iconSource: null },
        { text: "AI Text/Voice generatior with OpenAI", hasCheck: false, iconSource: null },
        { text: "25+ Customizable Multiplayer Objects", hasCheck: false, iconSource: null },
  
  
      ]
    },
    {
      packageName: "Cross-platform Integrations (Custom pricing)",
      packageFeatures: [
        { text: "Sync’d Chat Kit", hasCheck: false, iconSource: null },
        { text: "Sync’d Voice Kit", hasCheck: false, iconSource: null },
        { text: "Stream mode UI", hasCheck: false, iconSource: null },
        { text: "Tv mode UI", hasCheck: false, iconSource: null },
        { text: "Twitch Moderation Kit", hasCheck: false, iconSource: null },
        { text: "AI Assets Generator API", hasCheck: false, iconSource: null },
        { text: "AI Text/Voice generatior with OpenAI", hasCheck: false, iconSource: null },
        { text: "25+ Customizable Multiplayer Objects", hasCheck: false, iconSource: null },
  
  
      ]
    }
  
];



export const packageOffersData2 = [
  
    {
      packageName: "Playroom",
      packageFeatures: [
        { text: "Unlimited", hasCheck: false, iconSource: null },
        { text: "Ship Everywhere", hasCheck: false, iconSource: null },
        { text: null, hasCheck: true, iconSource: checkIcon },
        { text: "Auto Scale", hasCheck: false, iconSource: null },
        { text: null, hasCheck: true, iconSource: checkIcon },
        { text: null, hasCheck: true, iconSource: checkIcon },
        { text: "Global", hasCheck: false, iconSource: null },
        { text: null, hasCheck: true, iconSource: checkIcon },
        { text: null, hasCheck: true, iconSource: checkIcon },
        { text: "The Best!", hasCheck: false, iconSource: null },
      
      
      ]
      
    },
    {
      packageName: "",
      packageFeatures: [
        { text: null, hasCheck: true, iconSource: checkIcon },
        { text: null, hasCheck: true, iconSource: checkIcon },
        { text: null, hasCheck: true, iconSource: checkIcon },
        { text: null, hasCheck: true, iconSource: checkIcon },
        { text: null, hasCheck: true, iconSource: checkIcon },
        { text: null, hasCheck: true, iconSource: checkIcon },
      
      
      ]
    },
    {
      packageName: "",
      packageFeatures: [
        { text: "Alpha", hasCheck: false, iconSource: null },
        { text: "Alpha", hasCheck: false, iconSource: null },
        { text: "Alpha", hasCheck: false, iconSource: null },
        { text: "Alpha", hasCheck: false, iconSource: null },
        { text: "Alpha", hasCheck: false, iconSource: null },
        { text: "Alpha", hasCheck: false, iconSource: null },
        { text: "Alpha", hasCheck: false, iconSource: null },
        { text: "More coming soon", hasCheck: false, iconSource: null },
      ]
    },
    {
      packageName: "",
      packageFeatures:  [
        { text: null, hasCheck: true, iconSource: checkIconWhite },
        { text: "Alpha", hasCheck: false, iconSource: null },
        { text: "Alpha Live", hasCheck: false, iconSource: null },
        { text: "In Development", hasCheck: false, iconSource: null },
        { text: "Alpha Live", hasCheck: false, iconSource: null },
        { text: "TBD", hasCheck: false, iconSource: null },
        { text: "TBD", hasCheck: false, iconSource: null },
        { text: "TBD", hasCheck: false, iconSource: null },
        { text: "TBD", hasCheck: false, iconSource: null },
      
      ]
    }
  
];


export const packageOffersData3 = [
  
  {
    packageName: "Others",
    packageFeatures: [
      { text: "CCU Limit pricing", hasCheck: false, iconSource: null },
      { text: "per platfom pricing", hasCheck: false, iconSource: null },
      { text: null, hasCheck: true, iconSource: checkIconGrey },
      { text: "CPU and Bandwidth charges", hasCheck: false, iconSource: null },
      { text: "Only if you are enterprise", hasCheck: false, iconSource: null },
      { text: "vertical and horizontal pricing", hasCheck: false, iconSource: null },
      { text: "Per Region server pricing", hasCheck: false, iconSource: null },
      { text: null, hasCheck: true, iconSource: checkIconGrey },
      { text: null, hasCheck: true, iconSource: checkIconGrey },
      { text: "Good luck!", hasCheck: false, iconSource: null },
    
    ]
    
  },
  {
    packageName: "",
    packageFeatures:  [
        { text: "Requires setup", hasCheck: false, iconSource: null },

        { text: null, hasCheck: true, iconSource: xmark },
        { text: null, hasCheck: true, iconSource: xmark },
        { text: null, hasCheck: true, iconSource: xmark },
        { text: null, hasCheck: true, iconSource: xmark },
        { text: null, hasCheck: true, iconSource: xmark },
      ]
    },
    
  
  {
    packageName: "",
    packageFeatures: [
      { text: null, hasCheck: true, iconSource: xmark },
      { text: null, hasCheck: true, iconSource: xmark },
      { text: null, hasCheck: true, iconSource: xmark },
      { text: null, hasCheck: true, iconSource: xmark },
      { text: null, hasCheck: true, iconSource: xmark },
      { text: null, hasCheck: true, iconSource: xmark },
      { text: null, hasCheck: true, iconSource: xmark },
    ]
  },
  {
    packageName: "",
    packageFeatures:  [
      { text: null, hasCheck: true, iconSource: xmark },
      { text: null, hasCheck: true, iconSource: xmark },
      { text: null, hasCheck: true, iconSource: xmark },
      { text: null, hasCheck: true, iconSource: xmark },
      { text: null, hasCheck: true, iconSource: xmark },
      { text: null, hasCheck: true, iconSource: xmark },
      { text: null, hasCheck: true, iconSource: xmark },
      { text: null, hasCheck: true, iconSource: xmark },
      { text: null, hasCheck: true, iconSource: xmark },
      { text: null, hasCheck: true, iconSource: xmark },
    ]
  },


];
