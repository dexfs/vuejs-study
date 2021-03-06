new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        watch: {
            result: function() {
                const vm = this;
                setTimeout(()=> {
                    vm.value = 0;
                },5000)
            }
        },
        computed: {
            result: function() {
                return this.value !== 37 ? this.value : 'done';
            }
        }
    });