import React, { useState, useEffect } from 'react';
import { 
  Search, ShoppingBag, Heart, RefreshCw, User, ChevronDown, 
  Menu, X, Moon, Sun, Star, Twitter, Facebook, Instagram, 
  Youtube, MapPin, Tablet, Laptop, Gamepad2, Headphones, Monitor
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- SHARED COMPONENTS ---

const Badge = ({ children, variant = "green" }) => {
  const styles = {
    green: "bg-emerald-50 text-emerald-600",
    red: "bg-rose-50 text-rose-500",
    dark: "bg-zinc-900 text-white"
  };
  return (
    <span className={`${styles[variant]} text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider`}>
      {children}
    </span>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`${darkMode ? 'dark' : ''} selection:bg-emerald-500 selection:text-white`}>
      <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-500 font-sans">
        
        {/* --- 1. TOP UTILITY BAR --- */}
        <div className="bg-zinc-100 dark:bg-zinc-900 border-b dark:border-zinc-800 py-2 px-6 lg:px-12 text-[12px]">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="bg-white dark:bg-zinc-800 px-2 py-0.5 rounded shadow-sm font-semibold">Hotline 24/7</span>
              <span className="font-bold tracking-tight">(025) 3886 25 16</span>
            </div>
            <div className="flex items-center gap-6 font-medium">
              <button onClick={() => setDarkMode(!darkMode)} className="hover:text-emerald-500 transition-colors">
                {darkMode ? <Sun size={14}/> : <Moon size={14}/>}
              </button>
              <div className="hidden md:flex gap-6">
                <a href="#" className="hover:text-emerald-500">Sell on Swoo</a>
                <a href="#" class="hover:text-emerald-500">Order Tracking</a>
              </div>
              <div className="flex items-center gap-1 cursor-pointer">Eng <ChevronDown size={12}/></div>
            </div>
          </div>
        </div>

        {/* --- 2. MAIN HEADER & SEARCH --- */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b dark:border-zinc-800 px-6 lg:px-12 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-emerald-500 p-1.5 rounded-lg text-white">
                <Star size={24} fill="white" />
              </div>
              <div className="leading-none">
                <h1 className="text-xl font-black uppercase tracking-tighter">Swoo</h1>
                <p className="text-[9px] font-bold text-zinc-400 tracking-[0.2em] uppercase">Tech Mart</p>
              </div>
            </div>

            {/* Premium Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-2xl bg-zinc-100 dark:bg-zinc-900 rounded-full px-5 py-2.5 items-center gap-4 border border-transparent focus-within:border-emerald-500 transition-all">
              <div className="flex items-center gap-2 font-bold text-xs uppercase border-r dark:border-zinc-700 pr-4 whitespace-nowrap cursor-pointer">
                All Categories <ChevronDown size={14}/>
              </div>
              <input type="text" placeholder="Search for luxury tech..." className="bg-transparent flex-1 outline-none text-sm italic" />
              <Search size={18} className="text-zinc-400" />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-4">
                <RefreshCw size={20} className="text-zinc-400 hover:text-emerald-500 cursor-pointer" />
                <Heart size={20} className="text-zinc-400 hover:text-emerald-500 cursor-pointer" />
              </div>
              <div className="flex items-center gap-3 border-l dark:border-zinc-800 pl-6">
                <div className="relative">
                  <ShoppingBag size={24} className="hover:text-emerald-500 cursor-pointer" />
                  <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-zinc-950">5</span>
                </div>
                <div className="hidden xl:block">
                  <p className="text-[10px] text-zinc-400 uppercase font-bold">Cart</p>
                  <p className="text-xs font-black">$1,689.00</p>
                </div>
              </div>
              <Menu className="lg:hidden cursor-pointer" onClick={() => setIsMenuOpen(true)} />
            </div>
          </div>
        </header>

        {/* --- 3. BENTO HERO SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 h-full">
            
            {/* Sidebar Categories (Luxury Style) */}
            <div className="hidden lg:block lg:row-span-2 bg-white dark:bg-zinc-900 rounded-3xl p-8 border dark:border-zinc-800">
              <h3 className="text-rose-500 font-bold uppercase tracking-widest text-[11px] mb-8 italic">Winter Sale 40% Off</h3>
              <ul className="space-y-5 text-sm font-semibold text-zinc-500">
                {["Laptops", "PC & Computers", "Cell Phones", "Gaming", "Cameras", "Audio", "Accessories"].map(item => (
                  <li key={item} className="hover:text-emerald-500 cursor-pointer transition-colors flex justify-between items-center group">
                    {item} <ChevronDown size={14} className="-rotate-90 opacity-0 group-hover:opacity-100 transition-all"/>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Hero Banner */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="md:col-span-2 relative bg-zinc-200 dark:bg-zinc-800 rounded-3xl p-12 overflow-hidden min-h-[450px] flex flex-col justify-center group"
            >
              <div className="relative z-10 max-w-sm space-y-4">
                <h2 className="text-5xl md:text-6xl font-serif italic text-zinc-800 dark:text-white leading-none">Noise <br/> Cancellation</h2>
                <p className="text-zinc-500 text-sm leading-relaxed">Boso Elite Series. Low latency, voice assistant enabled with 40hr battery life.</p>
                <button className="bg-zinc-900 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-emerald-500 transition-all">Shop Collection</button>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000" 
                className="absolute right-[-10%] bottom-0 w-2/3 object-contain mix-blend-multiply dark:mix-blend-screen opacity-90 group-hover:scale-105 transition-transform duration-1000"
                alt="Headphones"
              />
            </motion.div>

            {/* Top Right Card */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border dark:border-zinc-800 flex flex-col justify-between group overflow-hidden">
               <div className="z-10">
                  <p className="text-[10px] uppercase font-black text-emerald-500 tracking-widest">Xomia Elite</p>
                  <h4 className="text-lg font-bold mt-1">Vanguard Sport Watch</h4>
               </div>
               <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400" className="w-40 self-end grayscale group-hover:grayscale-0 transition-all duration-700" alt="Watch" />
            </div>

            {/* Bottom Cards */}
            <div className="bg-[#1C1E21] rounded-3xl p-6 flex justify-between items-center group overflow-hidden text-white">
                <div className="z-10">
                  <h4 className="text-xl font-black italic">OKODO 11+</h4>
                  <p className="text-emerald-400 font-bold">$169.00</p>
                </div>
                <img src="https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=300" className="w-24 group-hover:rotate-12 transition-transform duration-500" alt="GoPro" />
            </div>
            
            <div className="md:col-span-2 bg-emerald-600 rounded-3xl p-8 flex items-center justify-between text-white overflow-hidden relative group">
                <div className="z-10">
                  <h3 className="text-3xl font-serif italic">The Playgo Series</h3>
                  <p className="text-emerald-100 text-sm mt-1 uppercase tracking-widest">Now available for pre-order</p>
                  <button className="mt-4 bg-white text-emerald-600 px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">Explore</button>
                </div>
                <img src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=300" className="w-40 grayscale brightness-110 mix-blend-screen group-hover:scale-110 transition-transform duration-700" alt="Console" />
            </div>

          </div>
        </section>

        {/* --- 4. DEALS OF THE DAY --- */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="bg-white dark:bg-zinc-900 rounded-[2rem] border dark:border-zinc-800 shadow-xl overflow-hidden">
            <div className="bg-emerald-500 px-8 py-5 flex justify-between items-center text-white">
               <h3 className="font-black uppercase tracking-[0.2em] text-sm italic">Limited Deals of the Day</h3>
               <div className="flex gap-4 text-[10px] font-bold opacity-80 uppercase tracking-widest">
                  <span>Ending Soon</span>
               </div>
            </div>
            <div className="p-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="flex gap-8 items-center">
                  <div className="flex flex-col gap-4">
                     {[1,2,3].map(i => <div key={i} className="w-16 h-16 border dark:border-zinc-700 rounded-xl bg-zinc-50 dark:bg-zinc-800 p-2" />)}
                  </div>
                  <div className="relative flex-1">
                    <Badge variant="dark" className="absolute top-0 left-0">SAVE $199</Badge>
                    <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600" className="w-full h-80 object-contain" alt="Deal" />
                  </div>
               </div>
               <div className="space-y-6">
                  <h2 className="text-3xl font-serif italic">Xioma Redmi Note 11 Elite</h2>
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-black text-rose-500">$569.00</span>
                    <span className="text-xl text-zinc-400 line-through">$759.00</span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed border-b dark:border-zinc-800 pb-6">Commanding Power Design: Supports 13th & 12th Gen Intel Core with DDR5 Compatible memory for the ultimate performance.</p>
                  
                  {/* Countdown */}
                  <div className="flex gap-4">
                    {["162d", "09h", "32m", "04s"].map(unit => (
                      <div key={unit} className="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-xl text-center min-w-[65px]">
                        <span className="text-xl font-black block">{unit.slice(0,-1)}</span>
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{unit.slice(-1)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 pt-4">
                    <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[35%]" />
                    </div>
                    <p className="text-xs font-bold text-zinc-400">Sold: <span className="text-zinc-900 dark:text-white">26/75 Pieces</span></p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* --- 5. BEST SELLERS GRID --- */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex justify-between items-end mb-12 border-b dark:border-zinc-800 pb-8">
            <div className="space-y-2">
              <h2 className="text-4xl font-serif italic">Best Sellers</h2>
              <div className="flex gap-8 text-[11px] font-black uppercase tracking-widest text-zinc-400">
                <span className="text-zinc-900 dark:text-white border-b-2 border-emerald-500 pb-8 -mb-[33px]">New Arrivals</span>
                <span className="hover:text-zinc-900 transition-colors cursor-pointer">Popular</span>
                <span className="hover:text-zinc-900 transition-colors cursor-pointer">Trending</span>
              </div>
            </div>
            <a href="#" className="text-xs font-bold text-zinc-400 uppercase tracking-widest hover:text-emerald-500">View Atelier</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {[
              { name: "Boso Elite Audio", price: "$359", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400" },
              { name: "iPad Studio Pro", price: "$949", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=400" },
              { name: "Station 5 Elite", price: "$499", img: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=400" },
              { name: "Vanguard Watch", price: "$329", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400" },
              { name: "Mac Studio M2", price: "$1,299", img: "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?q=80&w=400" }
            ].map((prod, i) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={i} 
                className="group cursor-pointer"
              >
                <div className="bg-white dark:bg-zinc-900 aspect-[4/5] rounded-3xl p-6 flex items-center justify-center relative overflow-hidden border dark:border-zinc-800">
                  <img src={prod.img} className="w-full h-full object-contain group-hover:scale-110 transition duration-700 grayscale group-hover:grayscale-0" alt="" />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <Badge variant="green">Save $50</Badge>
                  </div>
                </div>
                <div className="mt-6 space-y-1">
                  <h4 className="font-serif italic text-lg">{prod.name}</h4>
                  <p className="text-emerald-600 font-black">{prod.price}.00</p>
                  <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest">In Stock ● Ready to Ship</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- 6. LUXURY FOOTER --- */}
        <footer className="bg-zinc-950 text-white pt-24 pb-12 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-zinc-900 pb-20">
            <div className="lg:col-span-4 space-y-8">
               <h2 className="text-4xl font-serif italic tracking-tighter">Swoo Elite</h2>
               <div className="space-y-2">
                  <p className="text-[10px] uppercase font-black text-zinc-500 tracking-[0.3em]">Concierge 24/7</p>
                  <p className="text-3xl font-black text-emerald-500">(025) 3686 25 16</p>
               </div>
               <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">257 Thatcher Road St, Brooklyn, New York 10092. Experience the bespoke atelier of luxury technology.</p>
               <div className="flex gap-4">
                  {[Twitter, Facebook, Instagram, Youtube].map((Icon, i) => (
                    <div key={i} className="w-10 h-10 border border-zinc-800 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 transition-all cursor-pointer">
                      <Icon size={16} />
                    </div>
                  ))}
               </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
               <h4 className="text-[11px] uppercase font-black tracking-[0.3em] text-zinc-600">Categories</h4>
               <ul className="space-y-4 text-sm text-zinc-400 font-medium">
                  <li><a href="#" className="hover:text-emerald-500">Laptops</a></li>
                  <li><a href="#" className="hover:text-emerald-500">Audio</a></li>
                  <li><a href="#" className="hover:text-emerald-500">Cameras</a></li>
                  <li><a href="#" className="hover:text-emerald-500">Gaming</a></li>
               </ul>
            </div>

            <div className="lg:col-span-2 space-y-6">
               <h4 className="text-[11px] uppercase font-black tracking-[0.3em] text-zinc-600">Company</h4>
               <ul className="space-y-4 text-sm text-zinc-400 font-medium">
                  <li><a href="#" className="hover:text-emerald-500">Our Story</a></li>
                  <li><a href="#" className="hover:text-emerald-500">Journal</a></li>
                  <li><a href="#" className="hover:text-emerald-500">Atelier</a></li>
                  <li><a href="#" className="hover:text-emerald-500">Privacy</a></li>
               </ul>
            </div>

            <div className="lg:col-span-4 space-y-8">
               <h4 className="text-[11px] uppercase font-black tracking-[0.3em] text-zinc-600">Newsletter</h4>
               <p className="text-zinc-500 text-sm leading-relaxed">Join the exclusive Swoo list for atelier drops and seasonal editorials.</p>
               <div className="relative border-b border-zinc-800 pb-2">
                  <input type="email" placeholder="Your email address" className="bg-transparent w-full outline-none italic text-sm py-2" />
                  <button className="absolute right-0 top-1/2 -translate-y-1/2 text-emerald-500 text-[10px] font-black uppercase tracking-widest">Subscribe</button>
               </div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-700">
             <p>© 2025 Swoo Elite Mart ● NYC Studio</p>
             <div className="flex gap-8">
                <span>Privacy</span>
                <span>Terms</span>
                <span className="text-blue-600">Mobile Site</span>
             </div>
          </div>
        </footer>

      </div>
    </div>
  );
}