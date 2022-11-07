export const mapUserData = (user: { uid: any; email: any; xa: any; displayName: any; photoUrl: any }) => {
    const { uid, email, xa, displayName, photoUrl } = user
    return {
        id: uid,
        email,
        token: xa,
        name: displayName,
        profilePic: photoUrl
    }
}