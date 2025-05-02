import React from 'react';
import styles from './Featured.module.css';

const guests = [
  {
    name: 'Megan Smith',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?',
    image: 'https://preview.colorlib.com/theme/podca/images/person_1.jpg',
  },
  {
    name: 'Brooke Cagle',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?',
    image: 'https://preview.colorlib.com/theme/podca/images/person_2.jpg',
  },
  {
    name: 'Philip Martin',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?',
    image: 'https://preview.colorlib.com/theme/podca/images/person_3.jpg',
  },
];

const FeaturedGuests = () => {
  return (
    <div className={styles.guestSection}>
      <h2 className={styles.sectionTitle}>Featured Guests</h2>
      <div className={styles.guestGrid}>
        {guests.map((guest, index) => (
          <div key={index} className={styles.guestCard}>
            <img src={guest.image} alt={guest.name} className={styles.guestImage} />
            <h3 className={styles.guestName}>{guest.name}</h3>
            <p className={styles.guestDescription}>{guest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGuests;
