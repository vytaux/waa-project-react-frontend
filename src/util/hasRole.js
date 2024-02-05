const hasRole = (user, role) => {
    if (user) {
        return user.roles.includes(role);
    }
    return false;
};

export default hasRole;