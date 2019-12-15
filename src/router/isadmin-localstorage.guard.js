const AuthServiceMock = {
  checkIsAdmin() {
    return JSON.parse(localStorage.getItem('isAdmin'));
  },
};

export default ((to, from, next) => {
  console.log(AuthServiceMock.checkIsAdmin());
  if (to.path !== '/') {
    if (AuthServiceMock.checkIsAdmin()) {
      next();
    } else {
      next({
        path: '/settings',
      });
    }
  } else {
    next();
  }
});
