module.exports = function(grunt){
    grunt.initConfig({
        mocha:{
            test:{
                src:['test/index.html']
            },
            options:{
                run:true,
                repoter:'Dot'
            }
        }
    });

    grunt.loadNpmTasks('grunt-mocha');

    grunt.registerTask('default',['mocha']);
}