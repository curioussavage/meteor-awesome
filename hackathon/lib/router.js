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

Router.route('/taylor', function(){
	this.render('taylor')
})