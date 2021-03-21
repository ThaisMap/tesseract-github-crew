import React from 'react';
import styles from '../styles/memberInfo.module.css';

export default function MemberInfo(props) {
  const { member } = props;
  return (
    <div className={styles.container}>
      <h2>{member.name}</h2>
      <p>Repositórios: {member.public_repos}</p>
      <p>Seguidores: {member.followers}</p>
      <p>No Github desde: {new Date(member.created_at).toLocaleDateString()}</p>
    </div>
  );
}
