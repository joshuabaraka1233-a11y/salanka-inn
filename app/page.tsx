'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Clock3, MapPin, Menu, MessageCircle, Phone, Star, Utensils, X } from 'lucide-react';

const phone = '0735448042';
const wa = '254735448042';
const map = 'https://www.google.com/maps/search/?api=1&query=Salanka+Inn+%26+Guest+House+Eastern+Bypass+Nairobi';
const photos = [
  'https://images.trvl-media.com/lodging/42000000/41360000/41353800/41353701/4c9bdc90.jpg?impolicy=resizecrop&ra=fit&rw=1200',
  'https://images.trvl-media.com/lodging/42000000/41360000/41353800/41353701/54095a33.jpg?impolicy=resizecrop&ra=fit&rw=1200',
  'https://images.trvl-media.com/lodging/42000000/41360000/41353800/41353701/a8762372.jpg?impolicy=resizecrop&ra=fit&rw=1200',
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="fixed left-1/2 top-20 z-[60] -translate-x-1/2 rounded-full bg-[#d9bd7a] px-4 py-2 text-center text-xs font-bold uppercase tracking-[.16em] text-[#0b1722] shadow-lg">
        Demo / Preview · Details to be confirmed by Salanka Inn
      </div>
      <header className="fixed top-0 z-50 w-full bg-[#0b1722]/95 text-white backdrop-blur">
        <div className="container flex h-20 items-center justify-between">
          <a href="#home" className="serif text-2xl tracking-wide">SALANKA <span className="text-[#d9bd7a]">INN</span></a>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#stay">Stay</a><a href="#experience">Experience</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a>
            <a href={map} target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-5 py-2">Get Directions</a>
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
        </div>
        {open && <nav className="space-y-4 border-t border-white/10 px-6 py-5 md:hidden">
          <a className="block" href="#stay" onClick={() => setOpen(false)}>Stay</a>
          <a className="block" href="#experience" onClick={() => setOpen(false)}>Experience</a>
          <a className="block" href="#gallery" onClick={() => setOpen(false)}>Gallery</a>
          <a className="block" href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>}
      </header>
    </>
  );
}

export default function Home() {
  const [sent, setSent] = useState(false);
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  return (
    <main>
      <Nav />
      <section id="home" className="reveal hero-reveal relative flex min-h-[720px] items-end overflow-hidden bg-[#1a251f] text-white">
        <div className="absolute inset-0 opacity-80" style={{ backgroundImage: `linear-gradient(90deg,rgba(10,17,13,.92),rgba(10,17,13,.48)),url(${photos[0]})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="grain absolute inset-0 opacity-20" />
        <div className="container relative z-10 pb-24 pt-40">
          <p className="mb-5 text-sm uppercase tracking-[.35em] text-[#e0c27e]">Eastern Bypass · Nairobi</p>
          <h1 className="serif max-w-3xl text-6xl leading-[.98] md:text-8xl">A warm stay.<br /><span className="text-[#e3bd7a]">A quiet welcome.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/80">Welcome to Salanka Inn & Guest House — a convenient Nairobi base in the Mihango area, with accommodation and food & drink facilities.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#booking" className="rounded-full bg-[#c7a15a] px-7 py-4 font-semibold text-[#0b1722]">Request a booking <ArrowRight className="ml-2 inline" size={18} /></a>
            <a href={`tel:${phone}`} className="rounded-full border border-white/40 px-7 py-4">Call 0735 448042</a>
          </div>
        </div>
      </section>

      <section id="stay" className="reveal py-24">
        <div className="container grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[.3em] text-[#b18a45]">Your Nairobi base</p>
            <h2 className="serif mt-3 text-5xl">Simple, comfortable accommodation.</h2>
            <p className="mt-6 text-lg leading-8 text-[#6c7075]">Salanka Inn & Guest House is located along Eastern Bypass in Nairobi, within the Mihango neighborhood. The property is listed as a hotel and offers rooms for visitors looking for a convenient place to stay.</p>
            <div className="mt-8 grid grid-cols-2 gap-4 stagger-group">
              <div className="reveal-item"><Feature icon={<CheckCircle2 />} title="Guest accommodation" /></div><div className="reveal-item"><Feature icon={<Utensils />} title="Food & drink" /></div>
              <div className="reveal-item"><Feature icon={<MapPin />} title="Eastern Bypass" /></div><div className="reveal-item"><Feature icon={<Clock3 />} title="Easy to reach" /></div>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] shadow-soft"><img src={photos[2]} alt="Salanka Inn guest room" className="h-[520px] w-full object-cover" /></div>
        </div>
      </section>

      <section id="experience" className="reveal bg-[#0b1722] py-24 text-white">
        <div className="container">
          <div className="max-w-2xl"><p className="text-sm uppercase tracking-[.3em] text-[#d9bd7a]">The essentials</p><h2 className="serif mt-3 text-5xl">What you can expect</h2></div>
          <div className="mt-14 grid gap-6 md:grid-cols-3 stagger-group">
            <div className="reveal-item"><Card title="Rooms" text="Accommodation for guests looking for a practical Nairobi stay." />
            </div><div className="reveal-item"><Card title="Food & drink" text="A dedicated food and drink experience is part of the property listing." />
            </div><div className="reveal-item"><Card title="Convenient location" text="Find us on Eastern Bypass in the Mihango area of Nairobi." /></div>
          </div>
        </div>
      </section>

      <section id="gallery" className="reveal py-24">
        <div className="container">
          <p className="text-sm uppercase tracking-[.3em] text-[#b88942]">Gallery</p><h2 className="serif mt-3 text-5xl">A glimpse of Salanka</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-12">
  <div className="md:col-span-7 overflow-hidden rounded-[2rem] shadow-soft"><img src={photos[0]} className="h-[420px] w-full object-cover transition duration-500 hover:scale-[1.02] md:h-[620px]" alt="Salanka Inn garden and exterior" /></div>
  <div className="grid gap-5 md:col-span-5">
    <div className="overflow-hidden rounded-[2rem] shadow-soft"><img src={photos[1]} className="h-[300px] w-full object-cover transition duration-500 hover:scale-[1.02]" alt="Salanka Inn exterior" /></div>
    <div className="overflow-hidden rounded-[2rem] shadow-soft"><img src={photos[2]} className="h-[300px] w-full object-cover transition duration-500 hover:scale-[1.02]" alt="Salanka Inn room" /></div>
  </div>

</div>
          <p className="mt-4 text-sm text-[#68736c]">Property photos are sourced from the available Salanka Inn listing for this demo. Confirm current rooms, food service and facilities directly with the property.</p>
        </div>
      </section>

      <section id="booking" className="reveal bg-[#eee7da] py-24">
        <div className="container grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[.3em] text-[#b88942]">Stay with us</p><h2 className="serif mt-3 text-5xl">Request availability</h2>
            <p className="mt-6 leading-7 text-[#68736c]">Send your preferred dates and we'll prepare a WhatsApp enquiry for Salanka Inn. This form does not take payment or guarantee a reservation.</p>
            <div className="mt-8 rounded-2xl bg-white p-6 shadow-soft"><div className="flex gap-3"><Star className="fill-[#b88942] text-[#b88942]" /><div><strong>Google listing rating</strong><p className="text-sm text-[#68736c]">The supplied listing shows 5.0 from 1 review.</p></div></div></div>
          </div>
          <form className="rounded-[2rem] bg-white p-7 shadow-soft" onSubmit={(e) => { e.preventDefault(); const f = new FormData(e.currentTarget); const msg = `Hello Salanka Inn & Guest House, I would like to enquire about a stay. Name: ${f.get('name')}; Check-in: ${f.get('checkin')}; Check-out: ${f.get('checkout')}; Guests: ${f.get('guests')}; Message: ${f.get('message')}`; window.open(`https://wa.me/${wa}?text=${encodeURIComponent(msg)}`, '_blank'); setSent(true); }}>
            <div className="grid gap-5"><Input name="name" label="Your name" required /><div className="grid gap-5 sm:grid-cols-2"><Input name="checkin" label="Check-in" type="date" /><Input name="checkout" label="Check-out" type="date" /></div><Input name="guests" label="Guests" type="number" min="1" placeholder="2" /><label className="text-sm font-semibold">Message<textarea name="message" rows={4} className="mt-2 w-full rounded-xl border border-black/10 p-3 outline-none focus:border-[#b88942]" placeholder="Any room or stay requirements?" /></label><button className="rounded-full bg-[#0b1722] px-6 py-4 font-semibold text-white">{sent ? 'WhatsApp opened — send enquiry' : 'Continue on WhatsApp'} <MessageCircle className="ml-2 inline" size={18} /></button></div>
          </form>
        </div>
      </section>

      <section id="contact" className="reveal bg-[#c7a15a] py-16">
        <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div><p className="text-sm uppercase tracking-[.3em] text-[#16211b]/70">Find us</p><h2 className="serif mt-2 text-4xl">Salanka Inn & Guest House</h2><p className="mt-2 text-[#16211b]/80">PW6X+9X3, Eastern Bypass, Nairobi · Mihango</p></div>
          <div className="flex flex-wrap gap-3"><a href={`tel:${phone}`} className="rounded-full bg-[#16211b] px-6 py-3 text-white"><Phone className="mr-2 inline" size={17} /> Call</a><a href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer" className="rounded-full bg-white px-6 py-3 text-[#16211b]"><MessageCircle className="mr-2 inline" size={17} /> WhatsApp</a><a href={map} target="_blank" rel="noreferrer" className="rounded-full border border-[#16211b]/30 px-6 py-3 text-[#16211b]"><MapPin className="mr-2 inline" size={17} /> Directions</a></div>
        </div>
      </section>
      <footer className="bg-[#071018] py-8 text-white/60"><div className="container flex flex-col justify-between gap-3 text-sm md:flex-row"><span>© {new Date().getFullYear()} Salanka Inn & Guest House</span><span>Website concept & development by Joshua Baraka</span></div></footer>
    </main>
  );
}
function Feature({ icon, title }: { icon: React.ReactNode; title: string }) { return <div className="rounded-2xl border border-black/10 bg-white p-5"><div className="text-[#b88942]">{icon}</div><p className="mt-3 font-semibold">{title}</p></div>; }
function Card({ title, text }: { title: string; text: string }) { return <div className="rounded-3xl border border-white/10 bg-white/5 p-8"><div className="mb-8 h-1 w-12 bg-[#d5ad6b]" /><h3 className="serif text-3xl">{title}</h3><p className="mt-4 leading-7 text-white/65">{text}</p></div>; }
function Input({ label, name, type = 'text', required = false, placeholder, min }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; min?: string }) { return <label className="text-sm font-semibold">{label}<input name={name} type={type} required={required} min={min} placeholder={placeholder} className="mt-2 w-full rounded-xl border border-black/10 p-3 outline-none focus:border-[#b88942]" /></label>; }
