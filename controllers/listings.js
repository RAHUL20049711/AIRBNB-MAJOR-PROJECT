const Listing = require("../models/listing");
const fetch = require("node-fetch"); 




module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings })
};

module.exports.renderNewForm= (req,res)=>{
    console.log(req.user);
    res.render("listings/new.ejs");
};

module.exports.showListing= async(req,res)=>{


    let {id}=req.params;
    const listing = await Listing.findById(id)
    .populate({
        path: "reviews", 
        populate:{
        path: "author",}})
        .populate("owner");
    if(!listing){
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    
    res.render("listings/show.ejs",{listing});
}

module.exports.createListing= async(req,res,next)=>{
    try {
        const location = req.body.listing.location;

        // Geocode using OpenStreetMap (Nominatim)
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json`);
        const data = await response.json();

        if (data.length === 0) {
            req.flash("error", "Location not found!");
            return res.redirect("/listings/new");
        }

        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        
    


        
    let url= req.file.path;
    let filename= req.file.filename;
    let {category} = req.body.listing;
    const newListing= new Listing(req.body.listing);
    newListing.owner= req.user._id;
    newListing.image= {url, filename};
    // newListing.category= category;
    

    newListing.geometry = {
        type: "Point",
        coordinates: [lon, lat]
    };


    let savedListing= await newListing.save();
    console.log(savedListing);
    req.flash("success", "New Listing Created!");
    return res.redirect("/listings");

} catch (err) {
    next(err);
}
}



module.exports.renderEditForm= async(req, res)=>{
        let {id}=req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }

    let originalImageurl=listing.image.url;
    originalImageurl=originalImageurl.replace("/upload","/upload/w_250");
    res.render("listings/edit.ejs",{listing, originalImageurl});
}

module.exports.updateListing= async(req,res,next)=>{
    let {id}=req.params;
    let listing= await Listing.findByIdAndUpdate(id, {...req.body.listing});

    if(typeof req.file !== "undefined"){
        let url= req.file.path;
        let filename= req.file.filename;
        listing.image= {url, filename};
        await listing.save();
    }
    

    req.flash("success", "Listing updated!");
    return res.redirect(`/listings/${id}`);
}

module.exports.destroyListing= async(req,res)=>{
    let {id}= req.params;
let deletedListing= await Listing.findByIdAndDelete(id);
console.log(deletedListing);
req.flash("success", "Listing Deleted!");
return res.redirect("/listings");
}