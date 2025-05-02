import styles from './BehindTheMic.module.css';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductThunk } from '../../../redux/reducers/ProductSlice';

const BehindTheMic = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductThunk());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Behind The Mic</h2>
      <div className={styles.teamGrid}>

        {products.slice(0, 6).map((member, index) => (
          <div key={index} className={styles.teamCard}>

            <img
              src={member.image || 'default-image.jpg'}
              alt={member.name}
              className={styles.memberImage}
            />
            <div className={styles.overlay}>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
              <p className={styles.memberDescription}>{member.description}</p>
              <div className={styles.socialLinks}>
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BehindTheMic;
