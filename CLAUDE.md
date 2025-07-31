# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is the XGamingServer Wiki - a community-driven documentation site built with Mintlify. The repository contains comprehensive guides for game server hosting, covering setup, configuration, troubleshooting, and optimization for 40+ games.

## Project Structure

### Core Documentation Architecture
- `docs.json` - Mintlify configuration with complete navigation structure, theming, and integrations
- `introduction.mdx` - Homepage with game cards and quick links
- `games/` - Game-specific guides organized by directories (e.g., `minecraft/`, `palworld/`, `vrising/`)
- `help/` - Billing, support, and account management guides
- `panel/` - Server control panel documentation
- `images/` - Static assets organized by category (games, general, panel, site)
- `snippets/` - Reusable MDX components for UI elements

### Content Organization Pattern
Each game follows a consistent structure:
- `introduction.mdx` - Main landing page with overview and guide cards
- Individual guide files for specific topics (e.g., `join-server.mdx`, `configure-server-settings.mdx`)
- Subdirectories for related guides (e.g., `minecraft/plugins/`, `minecraft/common-errors/`)

## Development Commands

### Local Development
```bash
# Install Mintlify CLI globally
npm i -g mintlify

# Start local development server at localhost:3000
mintlify dev
```

### Content Management
- All content files use `.mdx` format (Markdown with React components)
- Images stored in `/images/` with organized subdirectories
- Navigation automatically generated from `docs.json` configuration

## Key Configuration Files

### docs.json Structure
- `navigation` - Hierarchical page structure with dropdowns and groups
- `theme` - Uses "maple" theme with custom primary colors (#DC3962)
- `logo` - Light/dark mode SVG logos
- `integrations` - Google Analytics 4 and Plausible analytics
- `footer` - Social links (website, GitHub, Discord)

### Content Conventions
- Frontmatter includes `title`, `sidebarTitle`, `description`, and optional `icon`
- Consistent use of CardGroup components for guide organization
- AccordionGroup for FAQs and detailed information
- Custom components available in `/snippets/components.mdx`

## Content Patterns

### Game Guide Structure
1. **Introduction Page** - Overview with CardGroup sections:
   - Setup & Installation
   - Configuration & Optimization
   - Troubleshooting & FAQs
   - Related Guides

2. **Individual Guides** - Step-by-step instructions with:
   - Clear titles and descriptions
   - Step-by-step procedures
   - Warning callouts for important information
   - Related guide links

### Navigation Organization
- **General Guides** dropdown - Welcome, Help & Support, Game Panel
- **Game Guides** dropdown - 40+ games organized alphabetically
- Each game group contains relevant guides and subpages

## Current Content Status

### Comprehensive Guides Available
- **Minecraft** - 20+ guides covering setup, mods, plugins, optimization, troubleshooting
- **Palworld** - 18+ guides covering server setup, admin commands, configuration, Xbox support
- **V Rising** - 6 guides covering server setup, admin controls, configuration
- **Enshrouded** - 3 guides covering setup and world management
- **Soulmask** - 5 guides covering configuration and player management

### Introduction-Only Games
Most other games (30+) currently have placeholder introduction pages with "Guides coming soon" status.

## Component Library

### Available Components (snippets/components.mdx)
- `StartButton` - Styled quickstart button with arrow icon
- `HeroCard` - Featured content card with image, title, description
- `Banner` - Promotional banner section

### Mintlify Built-in Components
- `Card` and `CardGroup` - Content organization
- `Accordion` and `AccordionGroup` - Collapsible content sections
- Various icons and styling utilities

## Content Creation Guidelines

### File Naming Convention
- Use lowercase with hyphens (e.g., `join-server.mdx`, `configure-server-settings.mdx`)
- Keep filenames descriptive but concise
- Match navigation structure defined in `docs.json`

### Writing Style
- Step-by-step instructions with numbered lists
- Use clear, concise language suitable for gamers and server administrators
- Include relevant screenshots in `/images/games/[game-name]/`
- Add troubleshooting sections for common issues
- Link to related guides and panel documentation

# Mintlify Documentation

## Working Relationship
- You can push back on ideas - this can lead to better documentation. Cite sources and explain your reasoning when you do so
- ALWAYS ask for clarification rather than making assumptions
- NEVER lie, guess, or make up information

## Project Context
- Format: MDX files with YAML frontmatter
- Config: docs.json for navigation, theme, settings
- Components: Mintlify components

## Content Strategy
- Document just enough for user success - not too much, not too little
- Prioritize accuracy and usability of information
- Make content evergreen when possible
- Search for existing information before adding new content. Avoid duplication unless it is done for a strategic reason
- Check existing patterns for consistency
- Start by making the smallest reasonable changes

## docs.json

- Refer to the [docs.json schema](https://mintlify.com/docs.json) when building the docs.json file and site navigation

## Frontmatter Requirements for Pages
- title: Clear, descriptive page title
- description: Concise summary for SEO/navigation

## Writing Standards
- Second-person voice ("you")
- Prerequisites at start of procedural content
- Test all code examples before publishing
- Match style and formatting of existing pages
- Include both basic and advanced use cases
- Language tags on all code blocks
- Alt text on all images
- Relative paths for internal links

## Git Workflow
- NEVER use --no-verify when committing
- Ask how to handle uncommitted changes before starting
- Create a new branch when no clear branch exists for changes
- Commit frequently throughout development
- NEVER skip or disable pre-commit hooks

## Do Not
- Skip frontmatter on any MDX file
- Use absolute URLs for internal links
- Include untested code examples
- Make assumptions - always ask for clarification

## Repository Context

- **License**: CC-BY-SA-4.0 (Creative Commons Attribution-ShareAlike)
- **Target Audience**: Game server administrators and players
- **Content Focus**: Practical, actionable guides for server setup and management
- **Community-Driven**: Open to contributions via fork/PR workflow