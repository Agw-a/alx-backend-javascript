import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
    const user = signUpUser(firstName, lastName);
    const photo = uploadPhoto(fileName);

    return Promise.allSettled([user, photo].then((value) => {
        const res = [];
        value.forEach(v => {
            if (v.status === 'fulfilled') {
                res.push({ status: v.status, value: v.value });
            } else {
                res.push({
                    status: v.status,
                    value: `Error: ${v.reason.message}`
                });
            }
        });
        return res;
    })); 
}