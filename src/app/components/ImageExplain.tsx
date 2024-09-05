import React from 'react';
import styles from './ImageExplain.module.css';

interface ImageExplainProps {
    title: string;
    imageUrl: string;
    imageText: string;
}

const ImageExplain: React.FC<ImageExplainProps> = ({ title, imageUrl, imageText }) => (
    <div className={styles.imageWrapper}>
        <div className={styles.textImageWrapper}>
            <img className={styles.textImage} src={imageUrl} alt={imageText}/>
        </div>
        <p className={styles.ImageExplain}>{title}</p>
    </div>
);

export default ImageExplain;