const Product = require("../models/product");

const getAllProducts = async (req, res) => {
    const {country,topic,sort,select} = req.query
    const queryObject = {};
    if(country){
        queryObject.country = country
    }
    if(topic){
        queryObject.topic = {$regex:topic, $options:"i"};
    }
    
    let apiData = Product.find(queryObject)

    if(sort){
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix)
    }

    if(select){
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix)
    }

    // let page = Number(req.query.page) || 1 ;
    // let limit = Number(req.query.limit) || 3;
    // let skip = (page -1) * limit;

    // apiData = apiData.skip(skip).limit(limit)

    const myData = await apiData;
    res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
    // res.status(200).json({msg: "I am getAllProductsTesting"});
    const myData = await Product.find(req.query).sort("country");

    res.status(200).json({ myData })
};

module.exports = { getAllProducts, getAllProductsTesting }