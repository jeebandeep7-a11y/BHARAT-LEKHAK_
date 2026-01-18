
import { Language, Category } from './types';

export const LANGUAGES: Language[] = [
  { id: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { id: 'en', name: 'English', nativeName: 'English' },
  { id: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { id: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { id: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { id: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { id: 'ur', name: 'Urdu', nativeName: 'اردو' },
  { id: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { id: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { id: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ' },
  { id: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
  { id: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
  { id: 'as', name: 'Assamese', nativeName: 'অসমীয়া' },
];

export const CATEGORIES: Category[] = [
  { id: 'romance', label: 'Love & Romance', icon: '❤️', subCategories: ['Classic Romance', 'Contemporary', 'Historical'] },
  { id: 'horror', label: 'Horror', icon: '👻', subCategories: ['Ghosts', 'Supernatural', 'Slasher'] },
  { id: 'thriller', label: 'Thriller', icon: '🔪', subCategories: ['Crime', 'Spy', 'Legal'] },
  { id: 'mystery', label: 'Mystery', icon: '🔍', subCategories: ['Whodunit', 'Locked Room', 'Noir'] },
  { id: 'motivation', label: 'Motivation', icon: '🚀', subCategories: ['Career', 'Mental Health', 'Inspiration'] },
  { id: 'spiritual', label: 'Spiritual', icon: '☸️', subCategories: ['Yoga', 'Meditation', 'Wisdom'] },
  { id: 'mythology', label: 'Mythology', icon: '🪔', subCategories: ['Indian', 'Global', 'Folklore'] },
  { id: 'history', label: 'History', icon: '🏛️', subCategories: ['Ancient', 'Freedom Struggle', 'Kingdoms'] },
  { id: 'poetry', label: 'Poetry', icon: '✍️', subCategories: ['Free Verse', 'Sonnets', 'Modern'] },
  { id: 'shayari', label: 'Shayari', icon: '📜', subCategories: ['Ghazals', 'Nazms', 'Rubaiyat'] },
];

export const COLORS = {
  primary: '#FF9933', // Saffron
  secondary: '#000080', // Ashoka Blue
  accent: '#138808', // Green
  light: '#f8f9fa',
  dark: '#1a1a1a',
};
