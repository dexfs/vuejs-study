new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alertMe: function() {
                alert('Alert!')
            },
            setInputValue: function(event) {
                this.value = event.target.value
            }
        }
    });