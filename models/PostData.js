var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title:    { type: String, required: true },
  url:      { type: String, required: true },
  summary:  { type: String, required: true }
});

var PostData = mongoose.model('PostData', PostSchema);
export { PostData };