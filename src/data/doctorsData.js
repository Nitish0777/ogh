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
import doctor11 from '../assets/jitendra_khandge.jpeg';

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
    availability: '10:00 AM to 1:00 PM & 7:30 PM to 9:30 PM',
    available: true,
    introduction: 'I bring over 26 years of medical experience, including 18 years as a surgical specialist, with a focus on laparoscopic and trauma surgery. My journey began with an MBBS followed by M.S. (General Surgery) from L.T.M.C. Sion, Mumbai University. Over the years, I have successfully handled complex surgical cases, emergency trauma care, and advanced minimally invasive procedures.\n\nI was actively involved in treating victims of the June 2003 Mulund bomb blasts, where my work in trauma surgery was recognized and appreciated by the then Chief Minister of Maharashtra, Mr. Sushil Kumar Shinde. My commitment is to provide safe, ethical, and effective surgical solutions to every patient.',
    qualifications: [
      'MBBS – Mumbai University',
      'MS – General Surgery – L.T.M.C. Sion, Mumbai University',
      'FCPS – General Surgery – College of Physicians & Surgeons, Mumbai',
      'DNB – General Surgery – National Board of Examinations, New Delhi'
    ],
    skills: [
      'Advanced laparoscopic surgery',
      'Trauma & emergency surgical care',
      'Complex general surgeries',
      'Post-operative recovery & patient care',
      'Surgical counseling & preventive health'
    ],
    expertise: [
      'Minimally invasive laparoscopic procedures',
      'Hernia, appendix & gallbladder surgeries',
      'Trauma and critical care surgery',
      'Gastrointestinal & abdominal surgeries',
      'Preventive and corporate surgical health checkups'
    ]
  },
  {
    id: 2,
    name: 'Dr. Rekha Kaushal',
    specialization: 'Gynaecologist & Obstetrician',
    department: 'gynecology',
    image: doctor2,
    experience: '40+ Years',
    education: 'MBBS, MS (Obstetrics & Gynaecology)',
    description: 'Specialized in womens health, pregnancy care, and advanced gynecological procedures.',
    availability: '01:30 PM to 02:30 PM & 8:30 PM to 9:30 PM',
    available: true,
    introduction: 'I bring over 40 years of overall medical experience, including more than three decades as a specialist in Obstetrics and Gynecology. Throughout my career, I have been dedicated to providing comprehensive women\'s healthcare, focusing on safe pregnancies, advanced gynecological treatments, and personalized patient care.\n\nMy clinical philosophy is centered on trust, ethical practice, and long-term well-being for women across all stages of life.',
    qualifications: [
      'MBBS – University of Agra',
      'MS – Obstetrics & Gynaecology – University of Agra'
    ],
    skills: [
      'High-risk pregnancy management',
      'Comprehensive gynecological care',
      'Preventive women\'s health',
      'Menstrual and hormonal disorder management',
      'Patient counseling and guidance'
    ],
    expertise: [
      'Obstetrics and antenatal care',
      'Gynecological disorders',
      'Menopause management',
      'Women\'s preventive healthcare'
    ]
  },
  {
    id: 3,
    name: 'Dr. Rohit Moharir',
    specialization: 'Critical Care Intensivist',
    department: 'emergency',
    image: null,
    experience: '18+ Years',
    education: 'MBBS, DA, MD, DNB (Anaesthesiology), DrNB (Critical Care), EDIC',
    description: 'Specialist in intensive care medicine and critical patient management in ICU settings.',
    availability: '6:00 PM to 9:00 PM',
    available: true,
    introduction: 'I am a Critical Care Physician with over 18 years of experience in emergency medicine and intensive care. My professional journey has been driven by a deep commitment to managing critically ill patients with precision, compassion, and advanced medical expertise.\n\nI have extensive experience in emergency medicine, offshore medical services, and critical care units, including frontline COVID-19 care. I strongly believe in patient education and transparent communication to help families understand complex medical conditions and treatment pathways.',
    qualifications: [
      'MBBS',
      'DA – Anaesthesiology',
      'MD – Anaesthesiology',
      'DNB – Anaesthesiology',
      'DrNB – Critical Care Medicine',
      'EDIC – European Diploma in Intensive Care (UK)'
    ],
    skills: [
      'Advanced airway management',
      'Critical care monitoring',
      'Sepsis management',
      'ECMO and CRRT handling',
      'Management of complex ICU cases'
    ],
    expertise: [
      'Critical Care Medicine',
      'Neuro Critical Care',
      'Nephro Critical Care',
      'ECMO and advanced life support',
      'Emergency and trauma care'
    ]
  },
  {
    id: 4,
    name: 'Dr. Sachin Kale',
    specialization: 'Orthopaedics',
    department: 'orthopedics',
    image: doctor3,
    experience: '14+ Years',
    education: 'MBBS, MS (Orthopaedics)',
    description: 'Orthopedic surgeon specializing in joint replacement and sports medicine.',
    availability: 'On Call',
    available: true
  },
  {
    id: 5,
    name: 'Dr. Manpreet Juneja',
    specialization: 'Plastic Surgeon',
    department: 'plastic_surgery',
    image: doctor6,
    experience: '22+ Years',
    education: 'MBBS, MS (General Surgery), MCh (Plastic & Reconstructive Surgery)',
    description: 'Specialized in reconstructive and cosmetic surgery with advanced aesthetic procedures.',
    availability: 'On Call',
    available: true,
    introduction: 'I am a Plastic, Reconstructive, and Cosmetic Surgeon with over 22 years of medical experience. I have completed advanced training in plastic surgery and cosmetic procedures and have a special interest in female cosmetic and reconstructive treatments.\n\nI practice across Mumbai and Navi Mumbai and serve as a visiting consultant at hospitals in Nashik. My approach emphasizes safety, aesthetics, and patient confidence.',
    qualifications: [
      'MBBS – University of Mumbai',
      'MS – General Surgery – University of Mumbai',
      'MCh – Plastic & Reconstructive Surgery – Maharashtra University of Health Sciences',
      'Fellowship in Cosmetic Surgery and Anti-Ageing Medicine'
    ],
    skills: [
      'Cosmetic and aesthetic procedures',
      'Reconstructive plastic surgery',
      'Post-surgical rehabilitation',
      'Female cosmetic surgery',
      'Anti-ageing treatments'
    ],
    expertise: [
      'Cosmetic surgery',
      'Reconstructive surgery',
      'Aesthetic medicine',
      'Female-focused cosmetic procedures'
    ]
  },
  {
    id: 6,
    name: 'Dr. Shonit Agarwal',
    specialization: 'Pathologist',
    department: 'pathology',
    image: doctor9,
    experience: '11+ Years',
    education: 'MBBS, MD (Pathology)',
    description: 'Expert pathologist specializing in diagnostic pathology and laboratory medicine.',
    availability: 'On Call',
    available: true,
    introduction: 'I am a Consultant Pathologist with focused experience in diagnostic pathology. My work involves accurate laboratory diagnosis that plays a critical role in early disease detection and effective treatment planning.\n\nI am associated with leading diagnostic centers and hospitals in Navi Mumbai and am committed to precision, quality, and ethical diagnostic practices.',
    qualifications: [
      'MBBS – Dr. D. Y. Patil Medical College, Navi Mumbai',
      'MD – Pathology – MGM Medical College, Navi Mumbai'
    ],
    skills: [
      'Clinical pathology diagnostics',
      'Laboratory quality control',
      'Histopathology and reporting',
      'Diagnostic accuracy and analysis'
    ],
    expertise: [
      'Pathology diagnostics',
      'Laboratory medicine',
      'Hospital-based pathology services'
    ]
  },
  {
    id: 7,
    name: 'Dr. Vikas Deshmukh',
    specialization: 'Psychiatrist',
    department: 'psychiatry',
    image: doctor7,
    experience: '17+ Years',
    education: 'MBBS, MD (Psychiatry), DPM',
    description: 'Mental health specialist focusing on anxiety, depression, and behavioral disorders.',
    availability: 'On Call',
    available: true,
    introduction: 'I am a Consultant Neuropsychiatrist with over 17 years of experience in managing mental health and behavioral disorders. Over the years, my team and I have worked extensively to promote mental health awareness and reduce stigma around seeking psychiatric care.\n\nI provide comprehensive psychiatric, psychological, and sexual health consultations with a patient-centric and confidential approach.',
    qualifications: [
      'MBBS – Government Medical College, Nanded',
      'MD – Psychiatry – LTMMC, Sion, Mumbai',
      'DPM – College of Physicians & Surgeons, Mumbai'
    ],
    skills: [
      'Psychiatric evaluation and treatment',
      'Psychological counseling',
      'Addiction management',
      'Sexual health counseling',
      'Child and adolescent psychiatry'
    ],
    expertise: [
      'Depression and anxiety disorders',
      'Bipolar disorder and schizophrenia',
      'Child psychology',
      'Sexual health disorders',
      'Addiction and de-addiction treatment'
    ]
  },
  {
    id: 8,
    name: 'Dr. Arvind Vatkar',
    specialization: 'Spine Surgeon',
    department: 'orthopedics',
    image: doctor5,
    experience: '13+ Years',
    education: 'MBBS, MCh (Spine Surgery)',
    description: 'Expert in spine surgery and advanced spinal treatments for complex spine disorders.',
    availability: 'On Call',
    available: true,
    introduction: 'I am a UK-trained Spine and Orthopaedic Surgeon with over a decade of experience in advanced orthopaedic and spinal procedures. My focus lies in minimally invasive spine surgery, complex spinal deformity correction, and pain management.\n\nI have completed advanced spine fellowships in the UK and currently serve as a visiting spine consultant at leading hospitals in Navi Mumbai.',
    qualifications: [
      'MBBS',
      'MCh – Spine Surgery',
      'Advanced Spine Surgery Fellowship – UK'
    ],
    skills: [
      'Minimally invasive spine surgery',
      'Trauma and joint replacement',
      'Spinal deformity correction',
      'Pain management'
    ],
    expertise: [
      'Spine surgery',
      'Orthopaedic trauma',
      'Joint replacement',
      'Navigated and minimally invasive spine procedures'
    ]
  },
  {
    id: 9,
    name: 'Dr. Rajendra Khade',
    specialization: 'Anaesthetist',
    department: 'anesthesia',
    image: null,
    experience: '15+ Years',
    education: 'MBBS, MD (Anesthesiology)',
    description: 'Expert in anesthesia administration for surgeries and pain management procedures.',
    availability: 'On Call',
    available: true
  },
  {
    id: 10,
    name: 'Dr. Shirish Shetty',
    specialization: 'Oncology',
    department: 'oncology',
    image: shrish,
    experience: '28+ Years',
    education: 'MBBS, MS, MCh (Surgical Oncology)',
    description: 'Leading oncologist with expertise in cancer treatment and advanced therapeutic procedures.',
    availability: 'On Call',
    available: true,
    introduction: 'I am a Senior Consultant Surgical Oncologist with over 28 years of experience and have performed more than 10,000 cancer surgeries. I am the first qualified surgical oncologist from Tata Memorial Hospital and hold advanced international training in robotic surgery.\n\nMy practice emphasizes patient-centered cancer care, combining surgical excellence with compassion and innovation.',
    qualifications: [
      'MBBS',
      'MS',
      'MCh – Surgical Oncology',
      'Fellowship in Robotic Surgery – Emory University Hospital, USA'
    ],
    skills: [
      'Surgical oncology',
      'Robotic cancer surgery',
      'Thoracic and GI oncology procedures',
      'Complex oncological case management'
    ],
    expertise: [
      'Surgical oncology',
      'Robotic thoracic surgery',
      'Gastrointestinal cancer surgery',
      'Advanced cancer care'
    ]
  },
  {
    id: 11,
    name: 'Dr. Mustafa',
    specialization: 'Paediatrician',
    department: 'pediatrics',
    image: null,
    experience: '8+ Years',
    education: 'MBBS, MD (Pediatrics)',
    description: 'Expert in child healthcare, vaccinations, and pediatric treatments for infants and children.',
    availability: 'On Call',
    available: true
  },
  {
    id: 12,
    name: 'Dr. Amit Nagrik',
    specialization: 'Nephrologist',
    department: 'nephrology',
    image: doctor4,
    experience: '15+ Years',
    education: 'MBBS',
    description: 'Specialist in kidney diseases, dialysis, and kidney transplant procedures.',
    availability: 'On Call',
    available: true,
    introduction: 'I am a Nephrologist specializing in comprehensive kidney care, including interventional and critical care nephrology. I am associated with multiple hospitals across Navi Mumbai and Thane, providing advanced renal care services.\n\nMy approach focuses on early diagnosis, evidence-based treatment, and long-term kidney health preservation.',
    qualifications: [
      'MBBS'
    ],
    skills: [
      'Interventional nephrology',
      'Hypertension management',
      'Renal critical care',
      'Chronic kidney disease management'
    ],
    expertise: [
      'General nephrology',
      'Transplant nephrology',
      'Critical care nephrology',
      'Hypertension-related renal disorders'
    ]
  },
  {
    id: 13,
    name: 'Dr. Amit Bhoir',
    specialization: 'Urologist',
    department: 'urology',
    image: doctor10,
    experience: '22+ Years',
    education: 'MBBS, DNB (General Surgery), MCh (Urology)',
    description: 'Specialist in urological disorders, kidney stones, and minimally invasive urological procedures.',
    availability: 'On Call',
    available: true,
    introduction: 'I am a Urologist with over 22 years of experience in managing complex urological conditions and surgeries. I specialize in minimally invasive urology, kidney stone management, prostate treatments, and renal transplantation.\n\nI am committed to providing advanced, patient-focused urological care using modern surgical techniques.',
    qualifications: [
      'MBBS – Maharashtra University of Health Sciences',
      'DNB – General Surgery – National Board of Education',
      'MCh – Urology – Kerala Institute of Medical Sciences'
    ],
    skills: [
      'Endourology procedures',
      'Renal and prostate surgeries',
      'Male infertility treatment',
      'Minimally invasive urology'
    ],
    expertise: [
      'Urology',
      'Kidney stone treatment',
      'Prostate and bladder surgery',
      'Reconstructive urology'
    ]
  },
  {
    id: 14,
    name: 'Dr. Rajpal Usnale',
    specialization: 'Ophthalmologist',
    department: 'ophthalmology',
    image: null,
    experience: '22+ Years',
    education: 'MBBS, DOMS',
    description: 'Eye specialist focusing on vision problems, eye surgeries, and comprehensive eye care.',
    availability: 'On Call',
    available: true,
    introduction: 'I am an Ophthalmologist with over 22 years of experience, specializing in cataract surgery, LASIK, and advanced refractive procedures. I have also served as a lecturer in medical colleges and actively participated in community eye care programs.\n\nMy practice emphasizes precision, innovation, and patient comfort.',
    qualifications: [
      'MBBS – Bharti Vidyapeeth College, Pune',
      'DOMS – Bharti Vidyapeeth College, Pune',
      'Fellowship in LASIK'
    ],
    skills: [
      'Cataract and refractive surgery',
      'LASIK procedures',
      'Retinal diagnostics',
      'Comprehensive eye examinations'
    ],
    expertise: [
      'Cataract surgery',
      'Laser refractive surgery',
      'Retinal disease management',
      'Comprehensive ophthalmology'
    ]
  },
  {
    id: 15,
    name: 'Dr. Sachin Nemane',
    specialization: 'ENT Specialist',
    department: 'ent',
    image: null,
    experience: '10+ Years',
    education: 'MBBS, MS (ENT)',
    description: 'Specialist in ear, nose, and throat disorders with expertise in ENT surgeries.',
    availability: 'On Call',
    available: true,
    introduction: 'I am an ENT Surgeon with over 10 years of experience in diagnosing and treating complex ear, nose, and throat conditions. I am known for precise diagnosis, patient empathy, and advanced surgical expertise.\n\nI have actively participated in research and professional workshops, contributing to advancements in ENT care.',
    qualifications: [
      'MBBS',
      'MS – ENT'
    ],
    skills: [
      'ENT surgical procedures',
      'Hearing and balance assessment',
      'Endoscopic sinus surgery',
      'Patient-focused diagnosis and treatment'
    ],
    expertise: [
      'Ear, Nose & Throat disorders',
      'Sinus surgery',
      'Hearing loss management',
      'Microlaryngeal surgery'
    ]
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
