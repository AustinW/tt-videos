const UniqueIdMixin = {
    methods: {
        uniqueId(prefix, id) {
            return prefix + '-' + id;
        },
    }
}

export default UniqueIdMixin;