# Precipitation Map - AI Coding Instructions

## Project Overview
A React-based precipitation visualization app using MapLibre GL and PMTiles for efficient map data delivery. The app displays NOAA precipitation data overlaid on Japanese GSI base maps with a globe projection.

## Architecture
- **Frontend**: React 19 + TypeScript + Vite
- **Mapping**: MapLibre GL with custom PMTiles protocol for raster-dem data
- **Data**: NOAA precipitation data in TerrainRGB format served via PMTiles
- **Deployment**: GitHub Pages with base path `/precipitation-map/`

## Key Files & Patterns

### Core Map Implementation
- `src/hooks/useMap.ts` - Central map logic with PMTiles protocol setup
- `public/styles/style.json` - MapLibre style with color-relief precipitation layer
- `public/data/apcp_terrainrgb.pmtiles` - Precipitation data in PMTiles format

### Critical Setup Patterns
```typescript
// PMTiles protocol registration (required before map initialization)
const protocol = new Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);

// Style references PMTiles with custom protocol
"url": "pmtiles:///precipitation-map/data/apcp_terrainrgb.pmtiles"
```

### Map Configuration Conventions
- Center: `[139, 36]` (Japan focus)
- Min zoom: 3, Zoom: 3 (country-level view)
- Globe projection enabled after load
- Navigation controls top-right
- Hash-based URL state management

## Development Workflows

### Data Updates
```bash
# Copy new precipitation tiles to public/data/
cp -a ../create-rain-tiles/terrainrgb/apcp_*.pmtiles public/data/
```

### Build & Deploy
```bash
npm run dev          # Development server
npm run build        # TypeScript compile + Vite build
npm run deploy       # Build + deploy to gh-pages
```

## Data Layer Conventions
- **Precipitation data**: TerrainRGB encoded in PMTiles format
- **Color relief**: Linear interpolation from transparent (0) to magenta (100+)
- **Base map**: GSI Japan "pale" tiles for clean background
- **Attribution**: Required for both GSI and NOAA data sources

## Dependencies Notes
- `pmtiles`: Custom protocol for efficient tile serving
- `maplibre-gl`: Open-source Mapbox GL fork
- `@deck.gl/mapbox`: Previously used for particles (now removed)
- `weatherlayers-gl`: Previously used for weather visualization (now removed)

## File Organization
- `src/hooks/` - Map state management
- `src/components/` - React components (minimal, just MapView)
- `public/data/` - PMTiles data files
- `public/styles/` - MapLibre style definitions
- `public/font/` - Glyph ranges for map labels (Japanese support)

## Critical Configuration
- **Vite base path**: Must match GitHub Pages repo name
- **PMTiles URL path**: Must include base path in style.json
- **Globe projection**: Set after map load, not in initial config
- **TerrainRGB decoding**: Handled automatically by color-relief layer type