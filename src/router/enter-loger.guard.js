// o:2
//8 8. We can extract our guard from component...
export default (to, from, next) => {
    console.log('Hello for the first time from global guard!!', to.params);
    console.log(from, to, this);
    next((vm) => {
        console.log(vm);
    });
};
