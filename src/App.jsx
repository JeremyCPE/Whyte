import React from 'react';
import Hero from './Components/Hero';
import AlbumShowcase from './Components/AlbumShowcase';
import SocialLinks from './Components/SocialLinks';
import BackgroundDecoration from './Components/BackgroundDecoration';
import DoodleOverlay from './Components/DoodleOverlay';
import VideoSection from './Components/VideoSection';
import SongSection from './Components/SongsSection';
import Header from './Components/Header';
import Newsletter from './Components/Newsletter';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header/>
      <main>
      <Hero />
      <AlbumShowcase />
      <section className="postion relative min-h-screen py-15 px-6 z-10">
      <BackgroundDecoration />
      <SongSection />
      <VideoSection/>
      </section>
      <SocialLinks />
      <Newsletter/>
      </main>
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 RekyStudio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;