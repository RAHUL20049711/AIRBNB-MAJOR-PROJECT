const Listing = require("../models/listing");



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
    
    
        const location= req.body.listing.location;
        const maptiler = await import('@maptiler/sdk');
        maptiler.config.apiKey = `${mapToken}`;
    
        const result = await maptiler.geocoding.forward(location,
            {limit: 1,
        })
        
        
    


   

    let url= req.file.path;
    let filename= req.file.filename;
    const newListing= new Listing(req.body.listing);
    newListing.owner= req.user._id;
    newListing.image= {url, filename};

    newListing.geometry= result.features[0].geometry;

    let savedListing= await newListing.save();
    console.log(savedListing);
    req.flash("success", "New Listing Created!");
    return res.redirect("/listings");
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