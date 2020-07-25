function isAuthorized(auth, permission, role) {
  // TODO: Finish the checking of permission and roles
  if (!permission && !auth.permissions.includes(permission)) {
    return false;
  }

  if (!role && !auth.roles.includes(role)) {
    return false;
  }

  return true;
}

const Can = ({
  children, auth, userPermission, userRole,
}) => {
  if (typeof children === 'function') {
    return children(isAuthorized(auth, userPermission, userRole));
  }
  return isAuthorized(auth, userPermission, userRole) && children;
};

export default Can;
