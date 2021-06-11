module.exports = {
    apps: [{
        script: "runner.js",
        watch: ["version.txt"],
        // Delay between restart
        watch_delay: 1000,
        ignore_watch : [
            "node_modules"
        ],
        watch_options: {
            "followSymlinks": false
        }
    },
    {
        script: "watcher.js",
        watch: ["watcher.js"],
        // Delay between restart
        watch_delay: 1000,
        ignore_watch : [
            "node_modules"
        ],
        watch_options: {
            "followSymlinks": false
        }
    }
]
}