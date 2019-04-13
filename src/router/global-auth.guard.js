import router from './index';

const AuthServiceMock = {
    isAdmin() {
        return true;
    },
};

router.beforeEach((to, from, next) => {
    if (to.path !== '/') {
        if (AuthServiceMock.isAdmin()) {
            next();
        } else {
            next({
                path: '/',
            });
        }
    } else {
        next();
    }

});
