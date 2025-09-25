# Rome II Banners - HTML5 Advertising Campaign

## Project Overview

This repository contains HTML5 animated banner advertisements for a Total War: Rome II and Intel promotional campaign, featuring three standard banner sizes with CreateJS-powered animations and Flash fallback support.

## Banner Specifications

### Available Sizes
- **160x600** (Wide Skyscraper)
- **300x250** (Medium Rectangle) 
- **728x90** (Leaderboard)

### Technical Stack
- **HTML5 Canvas** with CreateJS framework (EaselJS, TweenJS, MovieClip, PreloadJS)
- **Flash fallback** for legacy browser compatibility
- **jQuery** for UI interactions and responsive backgrounds
- **Google Analytics** for tracking and user engagement metrics

## Project Structure

```
banners-rome-2/
├── banners/
│   ├── 160x600/          # Wide Skyscraper banner
│   ├── 300x250/          # Medium Rectangle banner  
│   └── 728x90/           # Leaderboard banner
├── images/               # Shared image assets
├── js/                   # JavaScript libraries
│   ├── jquery.js
│   ├── swf_object.js
│   ├── simple-modal.js
│   └── other utilities
└── index.html           # Demo page with all banners

```

Each banner directory contains:
- `banner-intel-rome-ii.html` - HTML5 canvas version
- `banner-intel-rome-ii.js` - CreateJS animation logic
- `banner-intel-rome-ii.swf` - Flash fallback
- `index.html` - Wrapper with browser detection
- `images/` - Banner-specific image assets

## Features

- **Progressive Enhancement**: Automatic detection between HTML5 Canvas and Flash fallback
- **Cross-browser Compatibility**: Modern browsers (Canvas) and IE9+ (Flash)
- **Interactive Elements**: Click tracking with external URL support
- **Responsive Imagery**: Dynamic background scaling
- **Ad-block Detection**: User notifications for blocked content

## Running the Project

### Local Development
1. Clone or download the repository
2. Open `index.html` in a web browser
3. Click on banner previews to view full animations in modal windows

### Live Demo
The project resides here: https://jeanpaulruizvallejo.com/banners-rome-2/

## Development Notes

- Created using Adobe Flash Professional CC and exported to CreateJS
- Optimized images for web delivery (PNG with transparency, JPG backgrounds)
- Frame-based animations with smooth transitions
- Source files include HTML/CSS/JS, SWF fallbacks, and original FLA files

## Intellectual Property Disclaimer

This project represents professional work completed for a marketing agency several years ago and is shared solely for portfolio and educational purposes. The author makes no claim to ownership of any brands, trademarks, logos, or copyrighted content displayed in these banners, including but not limited to:

- Intel Corporation and Intel logos
- Total War: Rome II game assets and branding
- Creative Assembly trademarks
- Any other third-party intellectual property

All brand names, trademarks, and copyrighted materials remain the exclusive property of their respective owners. This project is not affiliated with, endorsed by, or sponsored by any of the aforementioned companies or entities. Any use of third-party intellectual property is for demonstration purposes only within the context of showcasing completed professional work.

## General Disclaimer

The content, information, and materials contained in this repository are provided on an "as is" basis. No representations or warranties are made regarding the accuracy, completeness, or suitability of the information contained herein. The author disclaims all liability for any errors, omissions, or damages arising from the use of this material. This repository is intended for educational, portfolio, and reference purposes only.
