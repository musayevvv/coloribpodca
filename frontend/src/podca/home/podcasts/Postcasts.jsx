import React from 'react';
import styles from './Postcasts.module.css';

const Postcasts = () => {


    const recents = [
        {
            id: 1,
            title: "Episode 08: How To Create Web Page Using Bootstrap 4",
            author: "Mike Smith",
            date: "16 September 2017",
            duration: "1:30:20",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat.",
            photo: "https://preview.colorlib.com/theme/podca/images/img_1.jpg",
        },
        {
            id: 2,
            title: "Episode 09: Advanced CSS Techniques",
            author: "Jane Doe",
            date: "20 September 2017",
            duration: "1:15:00",
            description: "Doloremque dignissimos illum odio suscipit, veniam quidem asperiores explicabo mollitia.",
            photo: "https://preview.colorlib.com/theme/podca/images/img_2.jpg",
        },
        {
            id: 3,
            title: "Episode 08: How To Create Web Page Using Bootstrap 4",
            author: "Mike Smith",
            date: "16 September 2017",
            duration: "1:30:20",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat.",
            photo: "https://preview.colorlib.com/theme/podca/images/img_3.jpg",
        },
        {
            id: 4,
            title: "Episode 08: How To Create Web Page Using Bootstrap 4",
            author: "Mike Smith",
            date: "16 September 2017",
            duration: "1:30:20",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat.",
            photo: "https://preview.colorlib.com/theme/podca/images/img_4.jpg",
        },
        {
            id: 5,
            title: "Episode 08: How To Create Web Page Using Bootstrap 4",
            author: "Mike Smith",
            date: "16 September 2017",
            duration: "1:30:20",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat.",
            photo: "https://preview.colorlib.com/theme/podca/images/img_5.jpg",
        },
    ];

    return (
        <div className={styles.div}>
            <div className={styles.container}>
                <div className={styles.host}>
                    <div className={styles.host_text}>
                        <h1>Recent Podcasts</h1>
                    </div>
                    <div className={styles.recents}>
                        {recents.map((recent) => (
                            <div key={recent.id} className={styles.recent}>
                                <div className={styles.recentImg}>
                                    <img src={recent.photo} alt="Podcast Cover" />
                                </div>
                                <div className={styles.recentContent}>
                                    <h1>{recent.title}</h1>
                                    <p>By {recent.author} / {recent.date} / {recent.duration}</p>
                                    <p>{recent.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Postcasts;
