import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/'
});

export async function getAllMembers() {
  try {
    const { data } = await api.get('orgs/grupotesseract/public_members');
    return data.map((member) => {
      const { login, avatar_url } = member;
      return { login, avatar_url, visible: true }
    });
  }

  catch (error) {
    console.error(error);
    return [dummies.members];
  }
}

export async function getOneMember(login) {
  try {
    const { data } = await api.get(`users/${login}`)
    const { name, public_repos, followers, created_at } = data;
    return { name, public_repos, followers, created_at };
  }

  catch (error) {
    console.error(error);
    return dummies.memberInfo;
  }
}

const dummies = {
  members: {
    login: 'ThaisMap',
    avatar_url: 'https://avatars.githubusercontent.com/u/8875518?v=4',
    visible: true
  },
  memberInfo: {
    name: "Thais Maria",
    public_repos: 17,
    followers: 0,
    created_at: "2014-09-23T12:10:06Z",
  }
};