

# Update Dorp Landing Page with New Copy and Real Photography

## Overview
Replace all placeholder copy with the provided campaign text, restructure the page to include a new "Itinerary" section with stylish staggered day tiles, swap AI-generated images for the uploaded Dorp photography, and update the offer module.

## Image Assignments
Copy the 10 uploaded images into `src/assets/` and use them as follows:
- **Hero background**: `compound_3_x.jpg` (courtyard with pool and Table Mountain)
- **Offer section**: `DorpHotel_Aug202022_0099copy.jpg` (fireplace lounge — cozy winter feel)
- **Experience section**:
  - Rooms: `DorpHotel_Aug202022_0524copy.jpg` (bedroom)
  - Dining: `DorpHotel_Aug202022_0671copy.jpg` (Dorp plate)
  - Gardens: `Dorp_Aug272022_2792copy.jpg` (lush garden path)
- **Itinerary day tiles** (new section — see below):
  - Day 1: `DorpHotel_Aug202022_0823copy.jpg` (bedroom with mountain view)
  - Day 2: `DorpHotel_Aug202022_0980copy_1.jpg` (eclectic desk/art)
  - Day 3: `DorpHotel_Aug212022_1633copy.jpg` (rooftop/conservatory)
  - Day 4: `DorpHotel_Aug202022_0062copy.jpg` (bathtub with fire)
  - "One More Night": `DorpHotel_Aug202022_1372copy.jpg` (candlelit lounge)

## Section Changes

### 1. HeroSection — New copy
- Subheading label: "DORP HOTEL | WINTER 2026"
- Headline: "Cape Town behaves differently in winter."
- Body paragraph beneath: "The light softens. The mountain gathers clouds like theatre curtains..."
- Second paragraph: "Inside Dorp, winter has its own rhythm." followed by the three short lines (fires, lunch, dinner) styled as a subtle list
- Closing line: "Winter, in other words, suits Dorp rather well."
- Remove "BOOK NOW" CTA from hero (keep scroll indicator)
- Update dates to "1 MAY — 31 AUGUST 2026"

### 2. New ItinerarySection (replaces ExperienceSection position)
- Section label: "A WINTER STAY"
- Headline: "A Winter Rhythm"
- Intro paragraph about guests slowing down
- **5 day tiles** in a staggered 2-column masonry-style layout (not 4-across):
  - Left column: Day 1, Day 3, "One More Night"
  - Right column: Day 2, Day 4 (offset down)
  - Each tile: background image with dark overlay, day title in serif, short description text
  - Tiles have varying heights for visual interest
  - On mobile: single column stack

### 3. ExperienceSection — Keep but use real images
- Swap `rooms.jpg`, `dining.jpg`, `gardens.jpg` for the uploaded equivalents

### 4. OfferSection — New copy
- Label: "THE OFFER"
- Headline: "The Art of Staying Longer"
- Body: "Cape Town rarely reveals itself in a hurry..." paragraph
- Update bullet points to reflect new dates (01 May – 31 August 2026) and terms
- CTA text: "BOOK NOW" (instead of "ENQUIRE NOW")

### 5. TestimonialsSection — Keep as-is

### 6. ContactSection — Keep structure, minor copy alignment

### 7. Footer — Update year to 2026

## Page Order
1. HeroSection (updated copy + real image)
2. ItinerarySection (new component)
3. ExperienceSection (real images)
4. TestimonialsSection (unchanged)
5. OfferSection (updated copy + real image)
6. ContactSection
7. Footer

## Technical Details
- Create `src/components/ItinerarySection.tsx` — new component with staggered 2-column layout using CSS grid with varying row spans
- Copy all 10 uploaded images to `src/assets/` via file copy
- Update imports in HeroSection, OfferSection, ExperienceSection for new image files
- Update `src/pages/Index.tsx` to include ItinerarySection

