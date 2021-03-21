import { useEffect, useState } from 'react';
import { getAllMembers, getOneMember } from '../api';
import MemberInfo from './memberInfo';
import styles from '../styles/crewMembers.module.css';
import MemberList from './memberList';

export default function CrewMembers() {
  const [members, setMembers] = useState([{}]);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    getAllMembers().then((response) => setMembers(response));
  }, []);

  function handleCardClick(login) {
    getOneMember(login)
      .then((response) => setSelected(response))
      .catch(setSelected({}));
  }

  function applyFilter(searchText) {
    const list = members.map((member) => {
      member.visible =
        !searchText ||
        member.login.toLowerCase().includes(searchText.toLowerCase());
      return member;
    });
    setMembers(list);
  }

  function handleChange(event) {
    applyFilter(event.target.value);
  }

  return (
    <div className={styles.container}>
      <MemberList members={members} handleSelection={handleCardClick} />
      <section className={styles.wider}>
        <input
          type='text'
          name='search'
          id='search'
          placeholder='Filtre'
          onChange={handleChange}
        />
        {selected.name ? (
          <MemberInfo member={selected} />
        ) : (
          <p>Selecione um membro da equipe para ver detalhes</p>
        )}
      </section>
    </div>
  );
}
