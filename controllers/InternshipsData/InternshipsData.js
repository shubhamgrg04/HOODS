import {
    InternshipsData as InternshipsDataModel
} from './../../models';

var RetrievePost = function(data) {
    var promise = new Promise(function(resolve, reject) {
        var internships = new InternshipsDataModel(data);
        post.save();        
        resolve(post);
    });
    return promise;
}

var PostData = {
	addNewPost
};

export {
	PostData
};