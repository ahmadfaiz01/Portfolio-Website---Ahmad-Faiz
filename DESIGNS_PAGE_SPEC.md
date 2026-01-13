# Designs Page - Complete Design Specification

## Overview
A modern, scrollable grid-based design portfolio page showcasing UI/UX designs and graphic work. The page features automatic image carousels for multi-image projects, varied card styles with custom shadows and borders, and a clean minimal aesthetic consistent with the rest of the portfolio.

## Design System

### Color Palette
- **Background**: Beige (`#F4EDE1` - base color)
- **Text**: Charcoal (`#1C1C1C`)
- **Accent Colors**:
  - Maroon/Red: `#800000` (default accent)
  - Blue: `#0066FF` (Sukoon App)
  - Green: `#00AA44` (Fitted App)
  - Black: `#1C1C1C` (Thumbnails, Sketches)

### Typography
- **Headings**: League Spartan (font-display)
  - Page Title: `text-3xl sm:text-4xl font-display font-bold`
  - Card Title (hover): `text-lg font-display font-bold`
- **Body Text**: Poppins (font-body)
  - Description: `text-base font-body`
  - Label: `text-sm uppercase tracking-wide font-display font-bold`

### Layout
- **Container**: `max-w-6xl mx-auto px-4 sm:px-6`
- **Grid**: `grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3`
- **Grid Auto Rows**: `minmax(200px, auto)`
- **Padding**: `py-16 md:py-20`

## Card System

### Card Types & Shadow Colors
1. **Sukoon App** (id: 0)
   - Shadow: Blue (`#0066FF`)
   - Border: Blue (`#0066FF/30`)
   - Aspect Ratio: `aspect-[16/9]` (landscape)
   - Grid Span: `md:col-span-2`
   - Single image

2. **Fitted App** (id: 1)
   - Shadow: Green (`#00AA44`)
   - Border: Green (`#00AA44/30`)
   - Aspect Ratio: `aspect-[16/9]` (landscape)
   - Grid Span: `md:col-span-2`
   - Single image

3. **NUST Music Festival** (id: 2)
   - Shadow: Maroon (`#800000`)
   - Border: Maroon (`#800000/30`)
   - Aspect Ratio: `aspect-square`
   - Grid Span: `md:col-span-1`
   - Multiple images (carousel)

4. **Digital Sketches** (id: 3)
   - Shadow: Black (`#1C1C1C`)
   - Border: Black (`#1C1C1C/30`)
   - Aspect Ratio: `aspect-square`
   - Grid Span: `md:col-span-1`
   - Multiple images (carousel)

5. **Posters Collection** (id: 4)
   - Shadow: Maroon/Red (`#800000`)
   - Border: Maroon (`#800000/30`)
   - Aspect Ratio: `aspect-[16/9]` (landscape)
   - Grid Span: `md:col-span-2`
   - Multiple images (carousel)

6. **Thumbnails Collection** (id: 5)
   - Shadow: Black (`#1C1C1C`)
   - Border: Black (`#1C1C1C/30`)
   - Aspect Ratio: `aspect-square`
   - Grid Span: `md:col-span-1`
   - Multiple images (carousel)

7. **XploreBot** (id: 6)
   - Shadow: None
   - Border: None
   - Aspect Ratio: `aspect-square`
   - Grid Span: `md:col-span-1`
   - Single image

### Card Styling
- **Base**: `rounded-2xl bg-white overflow-hidden`
- **Border**: `border-2` with color matching shadow (30% opacity)
- **Shadow**: 
  - Initial: `shadow-[0_3px_0_<color>]`
  - Hover: `hover:shadow-[0_10px_0_<color>]`
- **Hover Effects**: 
  - Scale: `scale: 1.02`
  - Translate Y: `y: -4`
  - Transition: `duration-300`

### Image Handling
- **Single Images**: `object-cover` to fill card completely
- **Multiple Images**: Automatic carousel with 3-second intervals
- **Carousel Features**:
  - Smooth fade transitions (0.6s duration)
  - Indicator dots at bottom
  - Clickable dots to jump to specific image
  - Auto-advances every 3 seconds

## Hover Overlay
- **Background**: `bg-gradient-to-t from-charcoal/90 to-transparent`
- **Content**: Only title (minimal text)
- **Title**: `text-lg font-display font-bold text-white`
- **Padding**: `p-4`
- **Animation**: Fade in/out (0.2s duration)

## Interactive Elements

### Logo Badge & View Button
- **Position**: Top-right corner (`top-4 right-4`)
- **Logo Badge**: 
  - White background with backdrop blur
  - Shows Figma or Photoshop logo
  - Size: `w-5 h-5`
- **View Button**:
  - Maroon background (`bg-[#800000]`)
  - Rounded full (`rounded-full`)
  - Text: "View" with upward arrow
  - Font: Poppins (`font-body`)
  - Hover: `hover:-translate-y-0.5 hover:shadow-lg`

### Featured Card (Next to Sukoon)
- **Position**: Appears in grid after Sukoon card
- **Size**: `aspect-square`
- **Style**: Maroon border, maroon shadow, gradient background
- **Content**: "Featured Work" section with UI/UX design info
- **Visibility**: Hidden on mobile (`hidden md:block`)

## Category Filter
- **Style**: Pill buttons with rounded-full
- **Active State**: 
  - Background: Maroon (`bg-[#800000]`)
  - Text: White
  - Shadow: Black (`shadow-[0_3px_0_#1C1C1C]`)
- **Inactive State**:
  - Background: White
  - Border: Maroon 30% opacity
  - Hover: Border increases to 60%, background gets maroon tint

## Animations
- **Page Load**: Fade in with slight upward motion
- **Card Entry**: Staggered fade + scale (0.05s delay between cards)
- **Hover**: Smooth scale and lift transitions
- **Carousel**: Fade transitions between images
- **Reduced Motion**: All animations respect `prefersReducedMotion`

## Image Paths Structure
```
/public
  /sukoon.png
  /fitted.png
  /nust-fest-1.png
  /nust-fest-2.png
  /nust-fest-3.png
  /sketch-1.png
  /sketch-2.png
  /sketch-3.png
  /poster-1.png
  /poster-2.png
  /poster-3.png
  /thumbnail-1.png
  /thumbnail-2.png
  /xplorebot.png
```

## Key Features
1. **Automatic Image Carousel**: Cards with multiple images automatically cycle through images every 3 seconds
2. **Color-Coded Shadows**: Each card type has a unique shadow color matching its theme
3. **Consistent Borders**: Border colors match shadow colors at 30% opacity
4. **Responsive Grid**: 1 column on mobile, 3 columns on desktop
5. **Minimal Hover Overlay**: Only shows title on hover, keeping focus on the design
6. **Smooth Animations**: All interactions use Framer Motion for smooth transitions
7. **Accessibility**: Respects reduced motion preferences

## Technical Implementation
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Image Handling**: Native img tags with error fallbacks
- **State Management**: React hooks (useState, useEffect)

## Design Principles
1. **Minimalism**: Clean, uncluttered layout with focus on the work
2. **Consistency**: Text sizes and spacing match other pages (About page)
3. **Visual Hierarchy**: Clear distinction between different card types
4. **User Experience**: Smooth interactions and clear visual feedback
5. **Performance**: Optimized animations and image loading

