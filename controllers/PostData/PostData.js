import {
    PostData as PostDataModel
} from './../../models';

var addNewPost = function(data) {
    var promise = new Promise(function(resolve, reject) {
        var post = new PostDataModel(data);
        post.save();
        resolve(post);
        // post.save(function(err, data){
        // 	if(err)reject(err);
        // 	resolve(data);
        // });
    });
    return promise;
}

var PostData = {
	addNewPost
};

export {
	PostData
};