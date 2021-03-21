import MemberListItem from './memberListItem';
import styles from '../styles/memberList.module.css';

export default function MemberList(props) {
  const { members, handleSelection } = props;
  const filtered = members.filter((member) => member.visible);
  return (
    <ul className={styles.container}>
      {filtered.map((member) => {
        return (
          <MemberListItem
            member={member}
            key={member.login}
            onClick={handleSelection}
          />
        );
      })}
    </ul>
  );
}
