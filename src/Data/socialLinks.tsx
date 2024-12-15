import React from 'react';
import { Instagram, Twitter, Youtube, Music, Facebook, Mail, Apple } from 'lucide-react';
import { SiSoundcloud, SiApplemusic } from "@icons-pack/react-simple-icons";

export const socialLinks = [
    {
      name: 'Spotify',
      icon: <Music className="w-8 h-8 animate-wiggle" style={{transform: 'rotate(5deg)'}} />,
      url: 'https://open.spotify.com/intl-fr/artist/7DZtdN4x13Amjw87cjdffb?dl_branch=1&nd=1&dlsi=cbc67d6397ed4a72',
      color: 'text-green-600 hover:text-green-700'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-8 h-8 animate-wiggle" style={{transform: 'rotate(5deg)'}} />,
      url: 'https://instagram.com',
      color: 'text-pink-600 hover:text-pink-700'
    },
    {
      name: 'X',
      icon: <Twitter className="w-8 h-8 animate-wiggle"  style={{transform: 'rotate(5deg)'}}/>,
      url: 'https://twitter.com',
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-8 h-8 "/>,
      url: 'https://www.youtube.com/watch?v=3DlQ7ZRcl6E',
      color: 'text-red-600 hover:text-red-700'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-8 h-8 animate-wiggle" style={{transform: 'rotate(5deg)'}}/>,
      url: 'https://facebook.com',
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      name: 'Mail',
      icon: <Mail className="w-8 h-8 animate-wiggle" style={{transform: 'rotate(5deg)'}}/>,
      url: 'test@gmail.com',
      color: 'text-white-600 hover:text-white-700'
    },
    {
      name: 'AppleMusic',
      icon: <SiApplemusic className="w-8 h-8 animate-wiggle" style={{transform: 'rotate(5deg)'}}/>,
      url: 'https://music.apple.com/cn/artist/whyte/1471059668?l=en-GB',
      color: 'text-[#FA243C] hover:text-[#FA243C]'
    },
    {
      name: 'Soundclound',
      icon: <SiSoundcloud className="w-8 h-8 animate-wiggle" style={{transform: 'rotate(5deg)'}}/>,
      url: 'https://soundcloud.com/whytetete',
      color: 'text-[#FF5500] hover:text-[#FF5500]'
    }
  ];