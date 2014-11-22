Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {
        
    }
}); 

Router.route('/', function(){
	this.render('main')
})
