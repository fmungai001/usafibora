# UsafiBora - Professional Cleaning Services Marketplace

**Professional Cleaning. Booked in Minutes.**

A production-ready, modern on-demand cleaning services marketplace platform connecting customers, cleaning companies, and service professionals across Kenya.

## 🎯 Vision

Make professional cleaning services accessible, affordable, and trustworthy through a simple mobile-first platform.

**Core Flow:** Customer → Platform → Cleaning Company → Cleaner

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/fmungai001/usafibora.git
cd usafibora

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your configuration

# Setup database
npm run db:setup
npm run db:seed

# Start development servers
npm run dev
```

## 📁 Project Structure

```
usafibora/
├── frontend/                    # React web & mobile app
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Page components
│   │   ├── features/           # Feature modules (auth, booking, etc)
│   │   ├── services/           # API clients
│   │   ├── hooks/              # Custom React hooks
│   │   ├── context/            # Context providers
│   │   ├── styles/             # Global styles & theme
│   │   ├── utils/              # Utility functions
│   │   └── App.tsx
│   └── package.json
├── backend/                     # Node.js/Express API
│   ├── src/
│   │   ├── api/                # Express routes
│   │   ├── services/           # Business logic
│   │   ├── models/             # Database models
│   │   ├── middleware/         # Auth, validation, error handling
│   │   ├── utils/              # Helpers
│   │   ├── config/             # Configuration
│   │   └── server.ts
│   └── package.json
├── database/                    # Database schema & migrations
│   ├── schema.sql              # Complete database schema
│   ├── seeds/                  # Demo data
│   └── migrations/             # Future database migrations
├── docs/                        # Documentation
│   ├── ARCHITECTURE.md
│   ├── API.md
│   ├── DATABASE.md
│   └── SETUP.md
└── package.json
```

## 🏗️ MVP Phase 1 Features

### Customer App
- ✅ User registration & login
- ✅ Service browsing & selection
- ✅ Property details collection
- ✅ Add-ons selection
- ✅ Location management (GPS, address search)
- ✅ Date & time selection
- ✅ Price calculation & transparency
- ✅ Checkout & booking confirmation
- ✅ Booking status tracking
- ✅ Ratings & reviews
- ✅ Push notifications

### Provider Dashboard
- ✅ Job queue management
- ✅ Accept/reject jobs
- ✅ Cleaner assignment
- ✅ Earnings tracking
- ✅ Service management
- ✅ Cleaner management

### Cleaner App
- ✅ Daily job queue
- ✅ Job acceptance workflow
- ✅ GPS arrival verification
- ✅ Job completion tracking
- ✅ Earnings management

### Admin Dashboard
- ✅ Analytics & reporting
- ✅ User management
- ✅ Provider management
- ✅ Service configuration
- ✅ Pricing management
- ✅ Commission configuration
- ✅ Booking management
- ✅ Support tickets

## 🎨 Design System

**Visual Identity:**
- Primary: Professional Blue (#0066FF)
- Secondary: Clean Grey (#F5F5F5)
- Success: Green (#10B981)
- Error: Red (#EF4444)
- Text: Dark Grey (#1F2937)

**Typography:**
- Headers: Inter Bold
- Body: Inter Regular
- Monospace: Courier for codes

**Components:**
- Large service cards
- Clear CTAs
- Minimal interface
- Subtle animations
- Professional spacing

## 💳 Payment Integration

**Phase 1 Architecture:**
- Payment gateway abstractions
- M-Pesa integration placeholder
- Card payment skeleton
- Cash payment option
- Never store sensitive payment data

## 🗺️ Location Management

**Phase 1 Launch:**
- Nairobi (primary)

**Future Support:**
- Thika, Kiambu, Mombasa, Kisumu, Nakuru
- Qatar & international expansion

## 🔐 Security

- Role-based access control (SUPER_ADMIN, ADMIN, PROVIDER, CLEANER, CUSTOMER)
- Secure authentication with JWT
- Input validation & sanitization
- Rate limiting
- Protected admin routes
- Provider data isolation
- Customer privacy protection
- Secure payment architecture

## 📊 Demo Data

**5 Customers** - Realistic Kenyan examples
**5 Providers** - Cleaning companies across Nairobi
**15 Cleaners** - Service professionals
**10+ Services** - Home cleaning, deep cleaning, office cleaning, etc.
**30+ Bookings** - Various statuses (pending, assigned, in-progress, completed)

**Currency:** KES (Kenyan Shilling)

## 📱 Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Redux for state management
- React Query for data fetching
- React Router for navigation
- Axios for HTTP client
- Zod for schema validation
- React Hook Form for form management

### Backend
- Node.js 18
- Express.js
- TypeScript
- PostgreSQL (primary database)
- Redis (caching & sessions)
- JWT for authentication
- Stripe SDK (payment abstraction)
- Winston for logging

### Infrastructure
- Docker for containerization
- Docker Compose for local development
- PostgreSQL container
- Redis container

## 🚀 Development Workflow

```bash
# Start all services
npm run dev

# Frontend only (http://localhost:3000)
npm run dev:frontend

# Backend only (http://localhost:5000)
npm run dev:backend

# Database commands
npm run db:migrate
npm run db:seed
npm run db:reset

# Testing
npm run test
npm run test:watch

# Linting
npm run lint
npm run format
```

## 📋 API Documentation

Complete API documentation available in `docs/API.md`

**Base URL:** `http://localhost:5000/api/v1`

Main endpoints:
- `/auth/*` - Authentication
- `/customers/*` - Customer management
- `/bookings/*` - Booking operations
- `/providers/*` - Provider operations
- `/cleaners/*` - Cleaner operations
- `/services/*` - Service management
- `/payments/*` - Payment operations
- `/admin/*` - Admin operations

## 🗄️ Database Schema

Complete PostgreSQL schema with:
- Users (base entity)
- Customers
- Providers
- Cleaners
- Services & Categories
- Bookings & Items
- Addresses
- Payments & Payouts
- Reviews & Ratings
- Notifications
- Support Tickets

See `database/schema.sql` for complete details.

## 🔄 Main User Flows

### Customer Booking Flow
1. Register/Login
2. Browse services
3. Select service
4. Enter property details
5. Select add-ons
6. Set location
7. Choose date & time
8. Review price
9. Checkout
10. Book confirmed
11. Track cleaner
12. Receive completion
13. Rate service

### Provider Job Flow
1. Login to dashboard
2. View pending jobs
3. Accept job
4. Assign cleaner
5. Wait for cleaner arrival
6. Track job progress
7. Mark completed
8. View earnings

### Cleaner Job Flow
1. View daily jobs
2. Accept available job
3. Navigate to location
4. Mark arrived (GPS)
5. Start cleaning
6. Complete job
7. View earnings

## 📈 Phase 2 Features

- M-Pesa integration
- Live GPS tracking
- WhatsApp AI agent
- Automatic job matching
- Recurring bookings
- Promotions & discounts
- Referral system

## 📈 Phase 3 Features

- AI sales agent
- Dynamic pricing
- Advanced analytics
- Multi-country support
- Corporate accounts
- Subscription plans
- Automated payouts

## 🤝 Contributing

See `CONTRIBUTING.md` for guidelines.

## 📄 License

Proprietary - All rights reserved

## 👥 Team

Built by the UsafiBora team.

## 📞 Support

- Documentation: `/docs`
- Issues: GitHub Issues
- Email: support@usafibora.app

---

**Made with ❤️ for Kenya**
