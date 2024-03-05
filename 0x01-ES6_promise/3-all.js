import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((resolvedValue) => {
      const [value1, value2] = resolvedValue;
      console.log(`${value1.body} ${value2.firstName} ${value2.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
