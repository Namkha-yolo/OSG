import React, { useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function Landing() {
  // If you have a React hook that watches session, you can redirect to /home here
  // const { session } = useAuth();
  // useEffect(() => { if (session) router.push('/home') }, [session]);

  return (
    <div className="layout">
      <header className="header">
        <nav className="nav">
          <div className="logo-mark">OSG</div>
          <ul className="nav-links">
            <li><a href="#" className="nav-link">About</a></li>
            <li><a href="#" className="nav-link">Features</a></li>
            <li><a href="#" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="sticker">Beta 2025</div>
            <h1 className="hero-title">
              <span className="outline">OPEN</span>
              <span className="filled">SOURCE</span>
              <span className="outline">GAMING</span>
            </h1>
            <p className="tagline">
              Turn your code commits into achievements. Make open source contribution as addictive as your favorite game.
            </p>

            {/* Get Started button fires supabase OAuth */}
            <div className="get-started">
              <button
                className="submit-btn"
                onClick={() => supabase.auth.signInWithOAuth({ provider: 'github' })}
              >
                Get Started
              </button>
            </div>

            {/* (Your email form JSX here — same as static) */}
          </div>

          <div className="hero-visual">
            {/* ...visual-grid items... */}
          </div>
        </div>
      </section>

      {/* ...info-section and footer JSX... */}
    </div>
  );
}
