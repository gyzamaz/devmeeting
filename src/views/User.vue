// o:1
<template>
    <div>
        <span>{{ $route.params }}</span>
        <router-link :to="{ name: 'userPosts' }">Posts</router-link>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'user',
        //1/ 1. Runs only before the route is entered
        beforeRouteEnter(to, from, next) {
            console.log('Hello for the first time!!', to.params);
            //1/ 2. In such case this is undefined, because we are not in our context YET
            console.log(from, to, this);
            //3/ 3. if you want to get to the component context, you should use callback in next
            next((vm) => {
                console.log(vm);
            });
        },
        //1/ 4. Runs when you stay in the same route, but update some params or children routes
        beforeRouteUpdate(to, from, next) {
            //1/ 5. "this" context is now our component
            console.log('Why are you here again??', from, to, this);
            //1/ 6. next does not get the callback
            next();
        },
        //1/ 7. Runs when you leave route
        beforeRouteLeave(to, from, next) {
            console.log('Why do you leave??', from, to, this);
            next();
        },
    };
</script>
