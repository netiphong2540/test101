UserSchema.statics.findUniqueUsername =	function(username,	suffix,	callback){
    var _this	=	this;
    var possibleUsername =	username	+	(suffix	||	'');
    _this.findOne({
    username:	possibleUsername
    },	(err,	user)	=> {
    if	(!err)	{
    if	(!user)	callback(possibleUsername);
    else	{
    return	_this.findUniqueUsername(username,	(suffix	||	0)	+	1,	callback	);
    }
    }
    else	{
    callback(null);
    }
    });
    }
    mongoose.model('User',	UserSchema);