import {uploadPhoto, createUser} from './utils'

export default function handleProfileSignup() {
    let body, firstName, lastName

    const photo = uploadPhoto();
    const user = createUser();
    const msg = 'Signup system offline'

    return Promise.all([photo, user]).then((data) => {
        body = data[0].body;
        firstName = data[1].firstName;
        lastName = data[2].lastName;
        console.log(`${body} ${firstName} ${lastName}`);
    }).catch(() => {
        console.log(`${msg}`);
    });
}