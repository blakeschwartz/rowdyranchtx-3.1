
import mongoose from 'mongoose'

let RowdyGoatSchema = mongoose.Schema({
	rrid: String,
	name: String,
	breed: String,
	sex: String,
	assoc: String,
	assocId: String,
	image: String,
	images: Array
})

let RowdyGoatModel = mongoose.model('rowdy-goat', RowdyGoatSchema)

export default RowdyGoatModel
