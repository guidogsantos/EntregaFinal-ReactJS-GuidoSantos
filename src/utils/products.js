const productos =[
    // PLACAS DE VIDEO

    {
        id: 1,
        title: "Placa de Video Asrock Radeon RX 550 2GB GDDR5 Phantom Gaming",
        description: "RX 550, GDDR5 de 2gb",
        stock: 5,
        type: "placas AMD",
        imageProduct: {
            firstImage: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_19289_Placa_de_Video_Asrock_Radeon_RX_550_2GB_GDDR5_Phantom_Gaming_99528ce8-grn.jpg"
        },
        price: 46800,
    },

    {
        id: 2,
        title: "Placa de Video XFX Radeon RX 6600 8GB GDDR6 Speedster SWFT210",
        description: "RX 6600, GDDR6 de 8gb",
        stock: 20,
        type: "placas AMD",
        imageProduct: {
            firstImage: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_28992_Placa_de_Video_XFX_Radeon_RX_6600_8GB_GDDR6_Speedster_SWFT210_c135751f-grn.jpg"
        },
        price: 178050,
    },

    {
        id: 3,
        title: "Placa de Video Asrock Radeon RX 6700 XT 12GB GDDR6 Challenger",
        description: "RX 6700 XT, GDDR6 de 12gb",
        stock: 25,
        type: "placas AMD",
        imageProduct: {
            firstImage: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26063_Placa_de_Video_Asrock_Radeon_RX_6700_XT_12GB_GDDR6_Challenger_49f30497-grn.jpg"
        },
        price: 217500,
    },

    {
        id: 4,
        title: "Placa de Video Asrock Radeon RX 6800 XT 16GB GDDR6 Phantom Gaming D OC",
        description: "RX 6800 XT, GDDR6 de 16gb",
        stock: 13,
        type: "placas AMD",
        imageProduct: {
            firstImage: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_29155_Placa_de_Video_Asrock_Radeon_RX_6800_XT_16GB_GDDR6_Phantom_Gaming_D_OC_f28765e9-grn.jpg"
        },
        price: 283400,
    },

    {
        id: 5,
        title: "Placa de Video XFX Radeon RX 6800 XT CORE 16GB GDDR6 Speedster MERC 319",
        description: "RX 6800 XT, GDDR6 de 16gb",
        stock: 6,
        type: "placas AMD",
        imageProduct: {
            firstImage: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27352_Placa_de_Video_XFX_Radeon_RX_6800_XT_CORE_16GB_GDDR6_Speedster_MERC_319_991588d7-grn.jpg"
        },
        price: 341800,
    },

// PLACAS NVIDIA

    {
        id: 6,
        title: "Placa de Video GeForce MSI G210 1GB DDR3 Low Profile",
        description: "G210, DDR3 de 1gb",
        stock: 50,
        type: "placas NVIDIA",
        imageProduct: {
            firstImage: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26735_Placa_de_Video_GeForce_MSI_G210_1GB_DDR3_Low_Profile_c07b4910-grn.jpg"
        },
        price: 15500,
    },

    {
        id: 7,
        title: "Placa de Video Zotac GeForce RTX 3070 Ti 8GB GDDR6X Trinity",
        description: "RTX 3070 Ti, GDDR6X de 8gb",
        stock: 6,
        type: "placas NVIDIA",
        imageProduct: {
            firstImage: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_35001_Placa_de_Video_Zotac_GeForce_RTX_3070_Ti_8GB_GDDR6X_Trinity_10803182-grn.jpg"
        },
        price: 278900,
    },

    {
        id: 8,
        title: "Placa de Video MSI GeForce RTX 3090 24GB GDDR6X VENTUS 3X OC",
        description: "RTX 3090, GDDR6X de 24gb",
        stock: 2,
        type: "placas NVIDIA",
        imageProduct: {
            firstImage: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_35018_Placa_de_Video_MSI_GeForce_RTX_3090_24GB_GDDR6X_VENTUS_3X_OC_195fb927-grn.jpg"
        },
        price: 418300,
    },

// PROCESADORES AMD

{
    id: 9,
    title: "Procesador AMD Ryzen 3 4100 + Wraith Stealth Cooler AM4",
    description: "Ryzen 3 4100",
    stock: 6,
    type: "procesadores AMD",
    imageProduct: {
        firstImage: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32956_Procesador_AMD_Ryzen_3_4100___Wraith_Stealth_Cooler_AM4_5b8b5ef2-grn.jpg"
    },
    price: 47300,
},

{
    id: 10,
    title: "Procesador AMD RYZEN 5 3600 4.2GHz Turbo AM4 Wraith Stealth Cooler",
    description: "RYZEN 5 3600 4.2GH",
    stock: 6,
    type: "procesadores AMD",
    imageProduct: {
        firstImage: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16749_Procesador_AMD_RYZEN_5_3600_4.2GHz_Turbo_AM4_Wraith_Stealth_Cooler_f8ab4915-grn.jpg"
    },
    price: 94990,
},

{
    id: 11,
    title: "Procesador AMD Ryzen 7 5700G 4.6GHz Turbo + Wraith Stealth Cooler",
    description: "Ryzen 7 5700G 4.6GHz Turbo",
    stock: 42,
    type: "procesadores AMD",
    imageProduct: {
        firstImage: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27673_Procesador_AMD_Ryzen_7_5700G_4.6GHz_Turbo___Wraith_Stealth_Cooler_cb33e4fa-grn.jpg"
    },
    price: 154350,
},

// PROCESADORES INTEL

{
    id: 12,
    title: "Procesador Intel Celeron G5925 3.6GHz Socket 1200 Comet Lake",
    description: "Intel Celeron G5925 3.6GHz",
    stock: 14,
    type: "procesadores INTEL",
    imageProduct: {
        firstImage: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27562_Procesador_Intel_Celeron_G5925_3.6GHz_Socket_1200_Comet_Lake_764c73ec-grn.jpg"
    },
    price: 17700,
},

{
    id: 13,
    title: "Procesador Intel Core i5 10400 4.3GHz Turbo Socket 1200 Comet Lake",
    description: "Intel Core i5 10400 4.3GHz Turbo",
    stock: 22,
    type: "procesadores INTEL",
    imageProduct: {
        firstImage: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_19422_Procesador_Intel_Core_i5_10400_4.3GHz_Turbo_Socket_1200_Comet_Lake_7f69efff-grn.jpg"
    },
    price: 86490,
},

{
    id: 14,
    title: "Procesador Intel Core i7 10700 4.8GHz Turbo Socket 1200 Comet Lake",
    description: "Intel Core i7 10700 4.8GHz",
    stock: 26,
    type: "procesadores INTEL",
    imageProduct: {
        firstImage: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_19228_Procesador_Intel_Core_i7_10700_4.8GHz_Turbo_Socket_1200_Comet_Lake_e3d7d847-grn.jpg"
    },
    price: 159990,
},


]

export default productos;