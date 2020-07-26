function isAuthorized(auth, permission, role) {
  if (permission && auth.permissions.includes(permission)) {
    return true;
  }

  if (role && auth.roles.includes(role)) {
    return true;
  }

  return false;
}

const Can = ({
  children, auth, userPermission, userRole,
}) => {
  if (auth.permissions || auth.roles) {
    if (typeof children === 'function') {
      return children(isAuthorized(auth, userPermission, userRole));
    }
    return isAuthorized(auth, userPermission, userRole) && children;
  }

  return null;
};

export default Can;
