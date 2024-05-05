const samplePosts = [
    {
        productName:"Laptop",
        description:"one of the best powerful gaming laptop",
        shopName:"Laptop Space",
        image: {url: "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"},
        originalPrice:50000,
        price:35000,
        location:"karad",
    },
    {
        productName:"Shirts",
        description:"one of the best beautiful shirt",
        shopName:"Zudio",
        image: {url: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hpcnRzfGVufDB8fDB8fHww"},
        originalPrice:1000,
        price:500,
        location:"Ichalkaranji",
    },
    {
        productName:"Shoes",
        description:"one of the most successful footwear in our kolhapur",
        shopName:"Pooja footwear",
        image:{url: "https://media.istockphoto.com/id/171224469/photo/canvas-shoes.webp?b=1&s=170667a&w=0&k=20&c=HcoRbOLYz_bBiXChQ1BpeqOvMDWlwVJwkrubl_ZcsM8="},
        originalPrice:5000,
        price:2000,
        location:"Kolhapur",
    },
    {
        productName: "Running Shoes",
        description: "High-performance footwear for athletes",
        shopName: "Speedy Sneakers",
        image: {url: "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww"},
        originalPrice: 6000,
        price: 3500,
        location: "New York"
    }
    ,
    {
        productName: "Sandals",
        description: "Comfortable footwear for casual wear",
        shopName: "Sunny Soles",
        image: {url: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FuZGFsc3xlbnwwfHwwfHx8MA%3D%3D"},
        originalPrice: 2500,
        price: 1800,
        location: "Los Angeles"
    }
    ,
    {
        productName: "Boots",
        description: "Stylish and durable boots for all occasions",
        shopName: "Trendy Feet",
        image: {url: "https://images.unsplash.com/photo-1481729379561-01e43a3e1ed4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9vdHN8ZW58MHx8MHx8fDA%3D"},
        originalPrice: 4500,
        price: 2800,
        location: "London"
    }
    ,
    {
        productName: "Sneakers",
        description: "Classic sneakers for everyday wear",
        shopName: "Urban Kicks",
        image: {url: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D"},
        originalPrice: 3000,
        price: 2000,
        location: "Tokyo"
    }
    ,
    {
        productName: "Formal Shoes",
        description: "Elegant shoes for formal occasions",
        shopName: "Dapper Footwear",
        image: {url: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Rm9ybWFsJTIwU2hvZXN8ZW58MHx8MHx8fDA%3D"},
        originalPrice: 5500,
        price: 4000,
        location: "Paris"
    }
    ,
    {
        productName: "Flip Flops",
        description: "Casual and comfortable footwear for summer",
        shopName: "Sunshine Sandals",
        image: {url: "https://images.unsplash.com/photo-1622920799137-86c891159e44?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RmxpcCUyMEZsb3BzfGVufDB8fDB8fHww"},
        originalPrice: 1500,
        price: 1000,
        location: "Miami"
    }
    ,
    {
        productName: "Flip Flops",
        description: "Casual and comfortable footwear for summer",
        shopName: "Sunshine Sandals",
        image: {url: "https://plus.unsplash.com/premium_photo-1681488430304-06478d0ffc43?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RmxpcCUyMEZsb3BzfGVufDB8fDB8fHww"},
        originalPrice: 1500,
        price: 1000,
        location: "Miami"
    }
    ,
    {
        productName: "Hiking Boots",
        description: "Sturdy boots for outdoor adventures",
        shopName: "Adventure Gear",
        image: {url: "https://images.unsplash.com/photo-1631287381310-925554130169?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGlraW5nJTIwQm9vdHN8ZW58MHx8MHx8fDA%3D"},
        originalPrice: 6000,
        price: 4500,
        location: "Denver"
    }
    ,
    {
        productName: "Espadrilles",
        description: "Casual footwear with a touch of elegance",
        shopName: "Coastal Chic",
        image: {url: "https://images.unsplash.com/photo-1608667508764-33cf0726b13a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        originalPrice: 3200,
        price: 2500,
        location: "Barcelona"
    }
    ,
    {
        productName: "Loafers",
        description: "Casual slip-on shoes for everyday wear",
        shopName: "Easygoing Footwear",
        image: {url: "https://images.unsplash.com/photo-1616406432452-07bc5938759d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TG9hZmVyc3xlbnwwfHwwfHx8MA%3D%3D"},
        originalPrice: 4000,
        price: 2800,
        location: "Sydney"
    }                                
];

module.exports = {data: samplePosts};
