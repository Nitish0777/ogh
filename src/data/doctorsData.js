// Import doctor images
import doctor1 from '../assets/prakash.jpeg'; 
import doctor2 from '../assets/rekha_kaushal.jpeg';
import doctor3 from '../assets/sachin_kale.jpeg';
import doctor4 from '../assets/amit_nagrik.jpeg';
import doctor5 from '../assets/arvind.jpeg';
import doctor6 from '../assets/Dr.Manpreet-Juneja.webp';
import doctor7 from '../assets/vikas.jpeg';
import shrish from '../assets/shri.avif';
import doctor8 from '../assets/sachin_kale.jpeg';
import doctor9 from '../assets/shonib aggrawal.jpeg';
import doctor10 from '../assets/amit_bhoir.jpeg';

export const doctors = [
  {
    id: 1,
    name: 'Dr. Prakash Shendge',
    specialization: 'General & Laparoscopic Surgeon',
    department: 'general',
    image: doctor1,
    experience: '26+ Years',
    education: 'MBBS, MS (General Surgery)',
    description: 'Expert in minimally invasive surgical procedures with extensive experience in complex operations.',
    availability: 'Mon - Fri: 11:00 AM - 1:00 PM & 7 PM to 9 PM',
    available: true
  },
  {
    id: 2,
    name: 'Dr. Rekha Kaushal',
    specialization: 'Gynaecologists',
    department: 'gynecology',
    image: doctor2,
    experience: '14+ Years',
    education: 'MBBS, MD (Gynecology)',
    description: 'Specialized in womens health, pregnancy care, and advanced gynecological procedures.',
    availability: 'Mon - Sat: 10:00 AM - 6:00 PM',
    available: true
  },
  {
    id: 3,
    name: 'Dr. Shirish Shetty',
    specialization: 'Oncology',
    department: 'oncology',
    image: shrish,
    experience: '15+ Years',
    education: 'MBBS, MD (Oncology), DM',
    description: 'Leading oncologist with expertise in cancer treatment and advanced therapeutic procedures.',
    availability: 'Tue - Sat: 8:00 AM - 4:00 PM',
    available: true
  },
  {
    id: 4,
    name: 'Dr. Amit Nagrik',
    specialization: 'Nephrologist',
    department: 'nephrology',
    image: doctor4,
    experience: '11+ Years',
    education: 'MBBS, MD (Nephrology)',
    description: 'Specialist in kidney diseases, dialysis, and kidney transplant procedures.',
    availability: 'Mon - Fri: 10:00 AM - 4:00 PM',
    available: true
  },
  {
    id: 5,
    name: 'Dr. Arvind Vatkar',
    specialization: 'Spine Surgeon',
    department: 'orthopedics',
    image: doctor5,
    experience: '13+ Years',
    education: 'MBBS, MS (Orthopedics), MCh (Spine)',
    description: 'Expert in spine surgery and advanced spinal treatments for complex spine disorders.',
    availability: 'Tue - Sat: 9:00 AM - 3:00 PM',
    available: true
  },
  {
    id: 6,
    name: 'Dr. Manpreet Juneja',
    specialization: 'Plastic Surgeon',
    department: 'plastic_surgery',
    image: doctor6,
    experience: '10+ Years',
    education: 'MBBS, MS (Plastic Surgery)',
    description: 'Specialized in reconstructive and cosmetic surgery with advanced aesthetic procedures.',
    availability: 'Wed - Sun: 11:00 AM - 5:00 PM',
    available: true
  },
  {
    id: 7,
    name: 'Dr. Vikas Deshmukh',
    specialization: 'General Medicine',
    department: 'general',
    image: doctor7,
    experience: '12+ Years',
    education: 'MBBS, MD (Internal Medicine)',
    description: 'General physician with expertise in internal medicine and preventive healthcare.',
    availability: 'Mon - Sat: 8:00 AM - 6:00 PM',
    available: true
  },
  {
    id: 8,
    name: 'Dr. Sachin Kale',
    specialization: 'Orthopaedics',
    department: 'orthopedics',
    image: doctor8,
    experience: '14+ Years',
    education: 'MBBS, MS (Orthopaedics)',
    description: 'Orthopedic surgeon specializing in joint replacement and sports medicine.',
    availability: 'Mon - Fri: 9:00 AM - 5:00 PM',
    available: true
  },
  {
    id: 9,
    name: 'Dr. Shonit Agarwal',
    specialization: 'Pathologist',
    department: 'pathology',
    image: doctor9,
    experience: '11+ Years',
    education: 'MBBS, MD (Pathology)',
    description: 'Expert pathologist specializing in diagnostic pathology and laboratory medicine.',
    availability: 'Mon - Sat: 7:00 AM - 3:00 PM',
    available: true
  },
  {
    id: 10,
    name: 'Dr. Amit Bhoir',
    specialization: 'Urologist',
    department: 'urology',
    image: doctor10,
    experience: '13+ Years',
    education: 'MBBS, MS (Urology)',
    description: 'Specialist in urological disorders, kidney stones, and minimally invasive urological procedures.',
    availability: 'Mon - Fri: 10:00 AM - 4:00 PM',
    available: true
  },
  {
    id: 11,
    name: 'Dr. Mustafa',
    specialization: 'Pediatrician',
    department: 'pediatrics',
    image: null,
    experience: '8+ Years',
    education: 'MBBS, MD (Pediatrics)',
    description: 'Expert in child healthcare, vaccinations, and pediatric treatments for infants and children.',
    availability: 'Mon - Sat: 9:00 AM - 5:00 PM',
    available: true
  },
  {
    id: 12,
    name: 'Dr. Rohit Moharir',
    specialization: 'Critical Care Intensivist',
    department: 'emergency',
    image: null,
    experience: '12+ Years',
    education: 'MBBS, MD (Anesthesia), FNB (Critical Care)',
    description: 'Specialist in intensive care medicine and critical patient management in ICU settings.',
    availability: 'Available 24/7 for emergencies',
    available: true
  },
  {
    id: 13,
    name: 'Dr. Vikas Deshmukh',
    specialization: 'Psychiatrist',
    department: 'psychiatry',
    image: null,
    experience: '10+ Years',
    education: 'MBBS, MD (Psychiatry)',
    description: 'Mental health specialist focusing on anxiety, depression, and behavioral disorders.',
    availability: 'Mon - Fri: 2:00 PM - 7:00 PM',
    available: true
  },
  {
    id: 14,
    name: 'Dr. Rajendra Khade',
    specialization: 'Anesthetist',
    department: 'anesthesia',
    image: null,
    experience: '15+ Years',
    education: 'MBBS, MD (Anesthesiology)',
    description: 'Expert in anesthesia administration for surgeries and pain management procedures.',
    availability: 'Available during surgical procedures',
    available: true
  },
  {
    id: 15,
    name: 'Dr. Sachin Nemane',
    specialization: 'ENT Specialist',
    department: 'ent',
    image: null,
    experience: '9+ Years',
    education: 'MBBS, MS (ENT)',
    description: 'Specialist in ear, nose, and throat disorders with expertise in ENT surgeries.',
    availability: 'Tue - Sat: 10:00 AM - 4:00 PM',
    available: true
  },
  {
    id: 16,
    name: 'Dr. Rajpal Usnale',
    specialization: 'Ophthalmologist',
    department: 'ophthalmology',
    image: null,
    experience: '11+ Years',
    education: 'MBBS, MS (Ophthalmology)',
    description: 'Eye specialist focusing on vision problems, eye surgeries, and comprehensive eye care.',
    availability: 'Mon - Fri: 9:00 AM - 3:00 PM',
    available: true
  }
];

export const allDepartments = [
  { value: 'general', label: 'General Medicine' },
  { value: 'cardiology', label: 'Cardiology' },
  { value: 'neurology', label: 'Neurology' },
  { value: 'orthopedics', label: 'Orthopedics' },
  { value: 'pediatrics', label: 'Pediatrics' },
  { value: 'emergency', label: 'Emergency Care' },
  { value: 'gynecology', label: 'Gynecology' },
  { value: 'oncology', label: 'Oncology' },
  { value: 'nephrology', label: 'Nephrology' },
  { value: 'plastic_surgery', label: 'Plastic Surgery' },
  { value: 'pathology', label: 'Pathology' },
  { value: 'urology', label: 'Urology' },
  { value: 'psychiatry', label: 'Psychiatry' },
  { value: 'anesthesia', label: 'Anesthesia' },
  { value: 'ent', label: 'ENT' },
  { value: 'ophthalmology', label: 'Ophthalmology' }
];
