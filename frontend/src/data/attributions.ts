export interface ImageAttribution {
  id: string;
  landmark: string;
  landmark_kn: string;
  filename: string;
  imagePath: string;
  source: string;
  license: string;
  author: string;
  category: 'Governance' | 'Heritage' | 'Natural Wonders' | 'Infrastructure' | 'Academic' | 'Urban Landscapes';
  description: string;
  description_kn: string;
}

export const BELAGAVI_IMAGE_ATTRIBUTIONS: ImageAttribution[] = [
  {
    id: 'suvarna-vidhana-soudha',
    landmark: 'Suvarna Vidhana Soudha',
    landmark_kn: 'ಸುವರ್ಣ ವಿಧಾನಸೌಧ, ಬೆಳಗಾವಿ',
    filename: 'suvarna_vidhana_soudha.jpg',
    imagePath: '/images/suvarna_vidhana_soudha.jpg',
    source: 'Wikimedia Commons (File:Suvarna Soudha.jpg)',
    license: 'Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)',
    author: 'Aman.kumar.karn',
    category: 'Governance',
    description: 'The monumental legislative building of Karnataka in Belagavi, inaugurated in 2012, symbolizing administrative decentralization and North Karnataka leadership.',
    description_kn: 'ಬೆಳಗಾವಿಯ ಭವ್ಯ ಶಾಸಕಾಂಗ ಸೌಧ, ಕರ್ನಾಟಕದ ಎರಡನೇ ಆಡಳಿತಾತ್ಮಕ ಶಕ್ತಿ ಕೇಂದ್ರ.'
  },
  {
    id: 'chennamma-circle',
    landmark: 'Rani Chennamma Circle',
    landmark_kn: 'ರಾಣಿ ಚೆನ್ನಮ್ಮ ವೃತ್ತ, ಬೆಳಗಾವಿ',
    filename: 'chennamma_circle.jpg',
    imagePath: '/images/chennamma_circle.jpg',
    source: 'Wikimedia Commons (File:Chennamma Circle, Belagavi.jpg)',
    license: 'Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)',
    author: 'Djsonu007',
    category: 'Urban Landscapes',
    description: 'The vibrant heart of Belagavi city, featuring the iconic equestrian statue of Rani Chennamma of Kittur, pioneer of Indian freedom.',
    description_kn: 'ಬೆಳಗಾವಿ ನಗರದ ಹೃದಯಭಾಗ, ಕಿತ್ತೂರು ರಾಣಿ ಚೆನ್ನಮ್ಮನವರ ಐತಿಹಾಸಿಕ ಅಶ್ವಾರೂಢ ಪ್ರತಿಮೆ.'
  },
  {
    id: 'gokak-falls',
    landmark: 'Gokak Falls (Ghataprabha River)',
    landmark_kn: 'ಗೋಕಾಕ್ ಜಲಪಾತ',
    filename: 'gokak_falls.jpg',
    imagePath: '/images/gokak_falls.jpg',
    source: 'Wikimedia Commons (File:Gokak Falls 02.JPG)',
    license: 'Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)',
    author: 'Shishirmk',
    category: 'Natural Wonders',
    description: 'A breathtaking 52-meter waterfall formed by the Ghataprabha River leaping over sandstone cliffs, site of one of India’s earliest hydroelectric stations (1887).',
    description_kn: 'ಘಟಪ್ರಭಾ ನದಿಯ ರಮಣೀಯ 52 ಮೀಟರ್ ಎತ್ತರದ ಜಲಪಾತ, ಭಾರತದ ಅತ್ಯಂತ ಹಳೆಯ ಜಲವಿದ್ಯುತ್ ಕೇಂದ್ರದ ತಾಣ.'
  },
  {
    id: 'kittur-fort',
    landmark: 'Kittur Fort & Palace Ruins',
    landmark_kn: 'ಕಿತ್ತೂರು ಕೋಟೆ',
    filename: 'kittur_fort.jpg',
    imagePath: '/images/kittur_fort.jpg',
    source: 'Wikimedia Commons (File:Kittur fort.jpeg)',
    license: 'Creative Commons CC0 1.0 Universal Public Domain Dedication',
    author: 'Pixabay / Wikimedia Commons Contributor',
    category: 'Heritage',
    description: 'Historic seat of the Kittur kingdom where Rani Chennamma waged sovereign resistance against British colonial expansion in 1824.',
    description_kn: 'ಕಿತ್ತೂರು ರಾಣಿ ಚೆನ್ನಮ್ಮನವರ ಆಡಳಿತ ಕೇಂದ್ರ ಮತ್ತು ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟದ ಪವಿತ್ರ ಭೂಮಿ.'
  },
  {
    id: 'belagavi-airport',
    landmark: 'Belagavi Airport (IXG) Sambra',
    landmark_kn: 'ಬೆಳಗಾವಿ ವಿಮಾನ ನಿಲ್ದಾಣ (ಸಾಂಬ್ರಾ)',
    filename: 'belagavi_airport.jpg',
    imagePath: '/images/belagavi_airport.jpg',
    source: 'Wikimedia Commons (File:Bgm Airport.jpg)',
    license: 'Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)',
    author: 'Wikimedia Commons Contributor',
    category: 'Infrastructure',
    description: 'North Karnataka’s premier operational commercial airport with a 2,300m runway, handling regional jet airliners connecting Mumbai, Bengaluru, Hyderabad, and Delhi.',
    description_kn: 'ಉತ್ತರ ಕರ್ನಾಟಕದ ಪ್ರಮುಖ ವಿಮಾನ ನಿಲ್ದಾಣ, ಮಹಾನಗರಗಳಿಗೆ ನಿರಂತರ ವಾಯು ಸಂಪರ್ಕ ಕಲ್ಪಿಸುವ ಕೇಂದ್ರ.'
  },
  {
    id: 'belagavi-fort',
    landmark: 'Belagavi Fort & Moat',
    landmark_kn: 'ಬೆಳಗಾವಿ ಕೋಟೆ',
    filename: 'belagavi_fort.jpg',
    imagePath: '/images/belagavi_fort.jpg',
    source: 'Wikimedia Commons (File:Fort of Belgaum.jpg)',
    license: 'Public Domain',
    author: 'Col. James Welsh (Historical Collection)',
    category: 'Heritage',
    description: 'Constructed in 1204 CE by Jaya Raya of the Ratta dynasty, featuring massive stone bastions, a deep protective moat, and interfaith historic shrines.',
    description_kn: '1204 ರಲ್ಲಿ ನಿರ್ಮಿಸಲಾದ ಐತಿಹಾಸಿಕ ಕೋಟೆ, ರಟ್ಟ ಸಾಮ್ರಾಜ್ಯದ ವಾಸ್ತುಶಿಲ್ಪದ ಸಾಕ್ಷಿ.'
  },
  {
    id: 'kamal-basti',
    landmark: 'Kamala Basti (Kamal Basadi)',
    landmark_kn: 'ಕಮಲ ಬಸದಿ, ಬೆಳಗಾವಿ ಕೋಟೆ',
    filename: 'kamal_basti.jpg',
    imagePath: '/images/kamal_basti.jpg',
    source: 'Wikimedia Commons (File:Kamal basthi belgavi Karnataka.jpg)',
    license: 'Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)',
    author: 'Mallikarjun H. Sarvi',
    category: 'Heritage',
    description: 'Exquisite 10th-century Chalukyan-style Jain temple inside Belagavi Fort, famous for its magnificent 72-petal inverted stone lotus ceiling dome.',
    description_kn: 'ಬೆಳಗಾವಿ ಕೋಟೆಯೊಳಗಿನ 10 ನೇ ಶತಮಾನದ ಕಮಲ ಬಸದಿ, 72 ದಳಗಳ ಕಲ್ಲಿನ ಕಮಲದ ಛಾವಣಿಯ ಶಿಲ್ಪಕಲೆ.'
  },
  {
    id: 'vtu-campus',
    landmark: 'Visvesvaraya Technological University (VTU)',
    landmark_kn: 'ವಿಶ್ವೇಶ್ವರಯ್ಯ ತಾಂತ್ರಿಕ ವಿಶ್ವವಿದ್ಯಾಲಯ (ವಿಟಿಯು)',
    filename: 'vtu_campus.jpg',
    imagePath: '/images/vtu_campus.jpg',
    source: 'Wikimedia Commons (File:VTU campus2.jpg)',
    license: 'Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)',
    author: 'Souravmohanty2005',
    category: 'Academic',
    description: 'Headquarters of Karnataka’s apex engineering university, governing 200+ engineering institutions and pioneering applied research across the state.',
    description_kn: 'ರಾಜ್ಯದ 200ಕ್ಕೂ ಹೆಚ್ಚು ಎಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜುಗಳನ್ನು ನಿರ್ವಹಿಸುವ ತಾಂತ್ರಿಕ ಶಿಕ್ಷಣದ ಮಹಾಸಂಸ್ಥೆ.'
  },
  {
    id: 'hidkal-dam',
    landmark: 'Raja Lakhamagouda Dam (Hidkal Dam)',
    landmark_kn: 'ರಾಜಾ ಲಖಮಗೌಡ ಜಲಾಶಯ (ಹಿಡಕಲ್ ಡ್ಯಾಮ್)',
    filename: 'hidkal_dam.jpg',
    imagePath: '/images/hidkal_dam.jpg',
    source: 'Wikimedia Commons (File:Hidkal Dam1.jpg)',
    license: 'Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)',
    author: 'Gurukant',
    category: 'Natural Wonders',
    description: 'Major reservoir across the Ghataprabha River in Hukkeri taluk, irrigating hundreds of thousands of acres of agricultural fertile plains.',
    description_kn: 'ಘಟಪ್ರಭಾ ನದಿಗೆ ಅಡ್ಡಲಾಗಿ ನಿರ್ಮಿಸಲಾದ ಪ್ರಮುಖ ಜಲಾಶಯ, ಬೆಳಗಾವಿಯ ಕೃಷಿ ಸಮೃದ್ಧಿಯ ಜೀವನಾಡಿ.'
  },
  {
    id: 'belagavi-city-skyline',
    landmark: 'Belagavi City Landscape from Yellur / Rajhansgad',
    landmark_kn: 'ಬೆಳಗಾವಿ ನಗರದ ವಿಹಂಗಮ ನೋಟ',
    filename: 'belagavi_city_skyline.jpg',
    imagePath: '/images/belagavi_city_skyline.jpg',
    source: 'Wikimedia Commons (File:Belgaum city as seen from a nearby hill.jpg)',
    license: 'Creative Commons CC0 1.0 Universal Public Domain Dedication',
    author: 'Arch.ravikiran',
    category: 'Urban Landscapes',
    description: 'Expansive scenic panorama of the Belagavi urban basin and surrounding Sahyadri Western Ghat foothills.',
    description_kn: 'ಸಹ್ಯಾದ್ರಿ ಪರ್ವತಶ್ರೇಣಿಯ ತಪ್ಪಲಿನಲ್ಲಿರುವ ಬೆಳಗಾವಿ ಮಹಾನಗರದ ವಿಹಂಗಮ ದೃಶ್ಯ.'
  }
];
