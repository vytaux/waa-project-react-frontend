const extractJwtPayload = (token) => {
    const parts = token.split('.');
    return JSON.parse(atob(parts[1]));
};

export default extractJwtPayload;