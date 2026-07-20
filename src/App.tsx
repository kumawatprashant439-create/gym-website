import { useState, useEffect } from 'react'

const NAV_LINKS = ['Home', 'About', 'Plans', 'Contact']

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: 'Certified Trainers',
    desc: 'Our NASM and ACE-certified coaches design personalized programs for every fitness level — beginner to elite.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Modern Equipment',
    desc: "State-of-the-art Technogym and Life Fitness machines. Over 12,000 sq ft of premium lifting and cardio space.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Nutrition Coaching',
    desc: 'Custom macro plans, meal prep guides, and weekly check-ins with a registered dietitian included in all plans.',
  },
]

const PLANS = [
  {
    name: 'Basic',
    price: 29,
    period: 'month',
    highlight: false,
    perks: [
      'Unlimited gym access',
      'Locker room & showers',
      '2 group classes / month',
      'Fitness assessment',
    ],
  },
  {
    name: 'Standard',
    price: 59,
    period: 'month',
    highlight: true,
    perks: [
      'Everything in Basic',
      'Unlimited group classes',
      '4 PT sessions / month',
      'Nutrition consultation',
      'Recovery zone access',
    ],
  },
  {
    name: 'Premium',
    price: 99,
    period: 'month',
    highlight: false,
    perks: [
      'Everything in Standard',
      'Unlimited PT sessions',
      'Priority class booking',
      'Monthly body composition',
      'Spa & sauna access',
      'Guest passes (2/month)',
    ],
  },
]

const TRAINERS = [
  {
    name: 'Marcus Reid',
    role: 'Strength & Conditioning',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&auto=format',
    exp: '8 yrs',
  },
  {
    name: 'Sofia Alves',
    role: 'HIIT & Mobility',
    img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop&auto=format',
    exp: '6 yrs',
  },
  {
    name: 'Derek Owens',
    role: 'Powerlifting & Olympic',
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop&auto=format',
    exp: '11 yrs',
  },
  {
    name: 'Priya Nair',
    role: 'Yoga & Functional Fitness',
    img: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&h=500&fit=crop&auto=format',
    exp: '7 yrs',
  },
]

const TESTIMONIALS = [
  {
    name: 'Jordan Mercer',
    result: 'Lost 28 lbs in 14 weeks',
    quote: "IRONFORM completely changed how I approach fitness. Marcus built a program around my work schedule and I hit my goal weight ahead of plan. The community keeps you accountable.",
    rating: 5,
  },
  {
    name: 'Camille Dupont',
    result: 'Competed in first powerlifting meet',
    quote: "I never thought I'd step onto a competition platform. Derek had me hitting numbers I genuinely didn't believe were possible. The coaching here is the real deal.",
    rating: 5,
  },
  {
    name: 'Tariq Hassan',
    result: 'Gained 18 lbs of lean muscle',
    quote: "The nutrition coaching alone was worth every dollar. Having a plan that actually fits my lifestyle — not some cookie-cutter diet — made all the difference. 10/10.",
    rating: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div className="min-h-screen bg-dark text-white font-sans overflow-x-hidden">

      {/* ── NAV ─────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-dark/95 backdrop-blur-sm border-b border-card-border' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="text-gold font-black text-2xl tracking-tight">IRON</span>
            <span className="font-black text-2xl tracking-tight text-white">FORM</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-white/70 hover:text-gold transition-colors duration-200 uppercase tracking-wider"
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 bg-gold text-dark text-sm font-bold uppercase tracking-wider rounded-none hover:bg-gold-light transition-colors duration-200"
            >
              Join Now
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-card border-t border-card-border px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium uppercase tracking-wider text-white/70 hover:text-gold transition-colors"
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-6 py-3 bg-gold text-dark text-sm font-bold uppercase tracking-wider text-center"
            >
              Join Now
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop&auto=format)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-dark/75" />
        {/* Gold accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/30" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-6">
            Elite Fitness · Est. 2018
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black uppercase leading-none mb-8">
            Transform
            <br />
            <span className="text-gold">Your Body.</span>
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            World-class coaching, premium equipment, and a community that holds you to your highest standard. Your best self starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-10 py-4 bg-gold text-dark font-bold uppercase tracking-widest text-sm hover:bg-gold-light transition-colors duration-200"
            >
              Join Now
            </a>
            <a
              href="#plans"
              className="px-10 py-4 border border-white/30 text-white font-semibold uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition-colors duration-200"
            >
              View Plans
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────────────────────── */}
      <section id="about" className="py-28 px-6 lg:px-12 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4">Why Ironform</p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase">
              Built Different.
              <br />
              <span className="text-gold">Train Different.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((feat) => (
              <div
                key={feat.title}
                className="bg-card border border-card-border p-10 group hover:border-gold/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">{feat.title}</h3>
                <p className="text-white/55 leading-relaxed text-sm">{feat.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div className="mt-16 border border-card-border grid grid-cols-2 sm:grid-cols-4">
            {[
              { val: '2,400+', label: 'Active Members' },
              { val: '18', label: 'Expert Coaches' },
              { val: '96%', label: 'Goal Achievement' },
              { val: '6', label: 'Years Strong' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`py-10 px-8 text-center ${i < 3 ? 'border-b sm:border-b-0 sm:border-r border-card-border' : ''} ${i === 1 ? 'border-b sm:border-b-0' : ''}`}
              >
                <p className="text-4xl font-black text-gold mb-1">{stat.val}</p>
                <p className="text-white/50 text-xs uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP PLANS ────────────────────────────────────── */}
      <section id="plans" className="py-28 px-6 lg:px-12 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4">Membership</p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase">Choose Your Plan</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-card-border">
            {PLANS.map((plan, i) => (
              <div
                key={plan.name}
                className={`relative p-10 flex flex-col ${
                  i < 2 ? 'border-b md:border-b-0 md:border-r border-card-border' : ''
                } ${plan.highlight ? 'bg-[#181510]' : 'bg-card'}`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold" />
                )}
                {plan.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-dark text-[10px] font-black uppercase tracking-widest px-3 py-1">
                    Most Popular
                  </span>
                )}

                <p className="text-white/40 uppercase tracking-[0.2em] text-xs mb-4">{plan.name}</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-gold text-lg font-semibold">$</span>
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="text-white/40 text-sm">/ {plan.period}</span>
                </div>

                <ul className="flex-1 space-y-3 mb-10">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-sm text-white/70">
                      <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {perk}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block text-center py-3.5 text-sm font-bold uppercase tracking-widest transition-colors duration-200 ${
                    plan.highlight
                      ? 'bg-gold text-dark hover:bg-gold-light'
                      : 'border border-white/20 text-white hover:border-gold hover:text-gold'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAINERS ────────────────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-12 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4">The Team</p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase">Our Trainers</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRAINERS.map((trainer) => (
              <div key={trainer.name} className="group relative overflow-hidden bg-card-border cursor-pointer">
                <div className="relative overflow-hidden bg-[#2a2a2a]" style={{ aspectRatio: '4/5' }}>
                  <img
                    src={trainer.img}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-bold text-lg leading-tight">{trainer.name}</p>
                    <p className="text-gold text-xs uppercase tracking-widest mt-1">{trainer.role}</p>
                    <p className="text-white/40 text-xs mt-1">{trainer.exp} experience</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-12 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4">Results</p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase">
              Real People.
              <br />
              <span className="text-gold">Real Results.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-card border border-card-border p-8 flex flex-col gap-6 hover:border-gold/40 transition-colors duration-300">
                <StarRating count={t.rating} />
                <blockquote className="text-white/70 text-sm leading-relaxed italic flex-1">
                  "{t.quote}"
                </blockquote>
                <div className="border-t border-card-border pt-5">
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-gold text-xs uppercase tracking-wider mt-0.5">{t.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────── */}
      <section id="contact" className="py-28 px-6 lg:px-12 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left */}
            <div>
              <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4">Get In Touch</p>
              <h2 className="text-4xl sm:text-5xl font-black uppercase mb-8 leading-tight">
                Start Your
                <br />
                <span className="text-gold">Journey Today.</span>
              </h2>
              <p className="text-white/55 leading-relaxed mb-10">
                Ready to make a change? Fill out the form and one of our coaches will reach out within 24 hours to schedule your free introductory session.
              </p>

              <div className="space-y-6">
                {[
                  { label: 'Location', val: '840 Iron District Ave, Suite 100' },
                  { label: 'Hours', val: 'Mon–Fri 5am–11pm · Sat–Sun 7am–9pm' },
                  { label: 'Phone', val: '+1 (555) 847-2900' },
                  { label: 'Email', val: 'hello@ironformgym.com' },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <span className="text-gold text-xs uppercase tracking-widest w-20 pt-0.5 shrink-0">{item.label}</span>
                    <span className="text-white/70 text-sm">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {submitted && (
                <div className="border border-gold/50 bg-gold/10 text-gold text-sm px-5 py-4 font-medium">
                  Message sent! We will reach out within 24 hours.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-card border border-card-border px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-gold transition-colors duration-200"
                    placeholder="Alex Johnson"
                  />
                </div>
                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-card border border-card-border px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-gold transition-colors duration-200"
                    placeholder="alex@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-card border border-card-border px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
                  placeholder="Tell us about your goals…"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gold text-dark font-bold uppercase tracking-widest text-sm hover:bg-gold-light transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="bg-[#080808] border-t border-card-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-1 mb-4">
                <span className="text-gold font-black text-xl tracking-tight">IRON</span>
                <span className="font-black text-xl tracking-tight">FORM</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                The premier fitness destination for those who demand results. No excuses. No shortcuts.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-5">Quick Links</p>
              <ul className="space-y-3">
                {['Home', 'About', 'Plans', 'Trainers', 'Contact'].map((l) => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase()}`} className="text-white/50 text-sm hover:text-gold transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-5">Programs</p>
              <ul className="space-y-3">
                {['Strength Training', 'HIIT & Cardio', 'Olympic Lifting', 'Yoga & Recovery', 'Nutrition Plans'].map((p) => (
                  <li key={p}>
                    <span className="text-white/50 text-sm">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-5">Follow Us</p>
              <div className="flex gap-4">
                {['IG', 'TW', 'YT', 'FB'].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="w-9 h-9 border border-card-border flex items-center justify-center text-xs font-bold text-white/40 hover:border-gold hover:text-gold transition-colors duration-200"
                  >
                    {s}
                  </a>
                ))}
              </div>
              <p className="text-white/30 text-xs mt-6 leading-relaxed">
                840 Iron District Ave<br />
                Suite 100<br />
                +1 (555) 847-2900
              </p>
            </div>
          </div>

          <div className="border-t border-card-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/25 text-xs">
              © 2026 Ironform Gym. All rights reserved.
            </p>
            <p className="text-white/25 text-xs">
              Privacy Policy · Terms of Service
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}
