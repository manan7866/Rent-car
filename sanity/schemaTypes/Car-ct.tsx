import { defineField, defineType } from "sanity";

 export  const CarCt = defineType ({
    name:"carct",
    title:"Carct",
    type:"document",
    fields: [
        {
            name: "name",
            title: "Name",
            type : "string",
            description : "Enter car name "


        },{
            name: "slug",
            title : "slug",
            type : "slug",
            description : "car Serail no."
        } ,
        {
            name: "catagory",
            title: "Catagory",
            type : "string",
            description : "car category"
        


        },
        {
            name: "image",
            title: "image",
            type : "image",
            description : "Select image"
        


        }, {
            name: "fuel",
            title: "Fuel",
            type : "string",
            


        },{
            name: "handle",
            title: "Handling",
            type : "string",
            


        },{
            name: "capasity",
            title: "Capasity",
            type : "string",
            


        },{
            name: "price",
            title: "Price",
            type : "string",
            


        },{
            name: "secondprice",
            title: "Secondprice",
            type : "string",
            


        },
    ],

 })

 