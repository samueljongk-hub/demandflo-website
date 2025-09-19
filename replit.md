# Demand Flo - B2B Lead Generation Platform

## Overview

Demand Flo is a comprehensive B2B lead generation and appointment booking platform that uses AI-powered personalization to help businesses fill their calendars with qualified sales conversations. The platform offers a suite of services including lead generation, automated appointment booking, growth analytics, and campaign management with a guarantee of minimum 4 qualified calls monthly.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **Animations**: Framer Motion for smooth page transitions and component animations
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for REST API endpoints
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful endpoints for blog posts, contact submissions, and analytics
- **Storage Interface**: Abstract storage layer with in-memory implementation for development
- **Session Management**: Express sessions with PostgreSQL store for production scalability
- **Validation**: Zod schemas shared between frontend and backend for consistent validation

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database for serverless PostgreSQL hosting
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Development Storage**: In-memory storage implementation with sample data for rapid development

### Authentication and Authorization
- **Session-based**: Express sessions with secure cookie storage
- **Database Sessions**: PostgreSQL session store for production persistence
- **User Management**: Basic user table with username/password authentication

### Build and Development Tools
- **Bundler**: Vite for fast development and optimized production builds
- **Development Server**: Vite dev server with HMR for client, Express for API
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Code Quality**: ESLint and TypeScript compiler for code quality enforcement

## External Dependencies

### Core Infrastructure
- **Database**: Neon Database (@neondatabase/serverless) for managed PostgreSQL hosting
- **ORM**: Drizzle ORM for type-safe database queries and migrations
- **Session Store**: connect-pg-simple for PostgreSQL session persistence

### UI and Design System
- **Component Library**: Radix UI primitives for accessible, unstyled components
- **Icons**: Lucide React for consistent iconography
- **Animations**: Framer Motion for sophisticated animations and transitions
- **Styling**: Tailwind CSS with custom design tokens and responsive utilities

### Development and Build Tools
- **Build System**: Vite with React plugin for fast development and production builds
- **TypeScript**: Full-stack type safety with strict compiler options
- **Development Enhancement**: Replit-specific plugins for cartographer and dev banner integration

### Third-party Integrations
- **Payment Processing**: Stripe integration (@stripe/stripe-js, @stripe/react-stripe-js) for subscription management
- **Form Handling**: React Hook Form with Hookform resolvers for validation
- **Date Management**: date-fns for date formatting and manipulation
- **Utility Libraries**: clsx and class-variance-authority for conditional styling