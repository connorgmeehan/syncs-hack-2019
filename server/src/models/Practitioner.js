import mongoose from 'mongoose';

const PractitionerSchema = new mongoose.Scheme({
    name: String,
    address: String,
    lat: Number,
    lon: Number,
    description: String,
    imageUrl: String,
    createdAt: { type: Date, Date.now },
    
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ]
});

var Practitioner = mongoose.Model("Practitioner", practitionerSchema);
export default Practitioner;