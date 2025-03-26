import styles from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img className={styles.avatar} src={image} alt="User avatar" />
        <p className={styles.username}>{name}</p>
        <p className={styles.nickname}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.descr}>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.descr}>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.itemlast}>
          <span className={styles.descr}>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
