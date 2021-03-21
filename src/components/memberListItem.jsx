import React from 'react';
import styles from '../styles/memberListItem.module.css';

export default function MemberListItem(props) {
  const { member, onClick } = props;

  function handleCardClick() {
    onClick(member.login);
  }

  return (
    <li key={member.login} className={styles.card} onClick={handleCardClick}>
      <img
        src={member.avatar_url}
        className={styles.avatar}
        alt='Avatar do membro da equipe'
      />
      <h3 className={styles.login}>{member.login}</h3>
    </li>
  );
}
