function curry(callback){
    // return callback function
    // this function can take in ANY number of args.
    const curriedCallback = (...args) => {
        if (args.length === 0) return callback();
        return (...otherArgs) => {
            if(otherArgs.length === 0) return callback(...args);
            return curriedCallback(...args, ...otherArgs);
        }
    }
    return curriedCallback;
}