var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/nodekb');

var PostSchema = new Schema({
  title:    { type: String, required: true },
  url:      { type: String, required: true },
  summary:  { type: String, required: true }
});

var PostData = mongoose.model('PostData', PostSchema);
export { PostData };