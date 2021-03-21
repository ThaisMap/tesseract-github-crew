import MemberListItem from './memberListItem';

export default function MemberList(props) {
  const { members, handleSelection } = props;
  const filtered = members.filter((member) => member.visible);
  return (
    <ul>
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
