export const Administrator = [];
export const PurchasingManager = [];
export const PurchasingStaff = [
    {
        id: 1,
        icon: "DashboardIcon",
        title: "Home",
        link: "/home",
        subLink: []
    },
    {
        id: 2,
        icon: "DashboardIcon",
        title: "Purchase",
        link: "/purchase",
        subLink: []
    },
    {
        id: 3,
        icon: "DashboardIcon",
        title: "Invoices",
        link: "/invoices",
        subLink: []
    },
    {
        id: 4,
        icon: "DashboardIcon",
        title: "Items & Pricing",
        link: "/items",
        subLink: []
    },
    {
        id: 5,
        icon: "DashboardIcon",
        title: "Suppliers",
        link: "/suppliers",
        subLink: []
    },
    {
        id: 6,
        icon: "DashboardIcon",
        title: "Project",
        link: "/projects",
        subLink: []
    },
    {
        id: 7,
        icon: "DashboardIcon",
        title: "Deliveries",
        link: "/deliveries",
        subLink: []
    },
    {
        id: 8,
        icon: "DashboardIcon",
        title: "Reports",
        link: "/reports",
        subLink: []
    }
];
export const SiteManager = [];
export const WarehouseManager = [];
export const Supplier = [];
export const ProjectManager = [];

export const dumyData = [
    {
        _id:1,
        invoice_id: "124352353",
        title: "Test",
        quantity : 20,
        price : 20,
        status : "Pending",
        isCancel : false,
        isPaid: true,
        issueDate: "2022-08-18",
        dueDate: "2022-09-18"
    },
    {
        _id:2,
        invoice_id: "124352353",
        title: "Test",
        quantity : 20,
        price : 20,
        status : "Accepted",
        isCancel : false,
        isPaid: true,
        issueDate: "2022-08-18",
        dueDate: "2022-09-18"
    },
    {
        _id:3,
        invoice_id: "124352353",
        title: "Test",
        quantity : 20,
        price : 20,
        status : "In Warehouse",
        isCancel : false,
        isPaid: true,
        issueDate: "2022-08-18",
        dueDate: "2022-09-18"
    },
    {
        _id:4,
        invoice_id: "124352353",
        title: "Test",
        quantity : 20,
        price : 20,
        status : "Shipped",
        isCancel : false,
        isPaid: true,
        issueDate: "2022-08-18",
        dueDate: "2022-09-18"
    },
    {
        _id:5,
        invoice_id: "124352353",
        title: "Test",
        quantity : 20,
        price : 20,
        status : "Completed",
        isCancel : false,
        isPaid: true,
        issueDate: "2022-08-18",
        dueDate: "2022-09-18"
    },
    {
        _id:6,
        invoice_id: "124352353",
        title: "Test",
        quantity : 20,
        price : 20,
        status : "Pending",
        isCancel : false,
        isPaid: true,
        issueDate: "2022-08-18",
        dueDate: "2022-09-18"
    },
    {
        _id:7,
        invoice_id: "124352353",
        title: "Test",
        quantity : 20,
        price : 20,
        status : "Shipped",
        isCancel : false,
        isPaid: true,
        issueDate: "2022-08-18",
        dueDate: "2022-09-18"
    },
    {
        _id:8,
        invoice_id: "124352353",
        title: "Test",
        quantity : 20,
        price : 20,
        status : "In Warehouse",
        isCancel : false,
        isPaid: true,
        issueDate: "2022-08-18",
        dueDate: "2022-09-18"
    },
    {
        _id:9,
        invoice_id: "124352353",
        title: "Test",
        quantity : 20,
        price : 20,
        status : "Completed",
        isCancel : false,
        isPaid: true,
        issueDate: "2022-08-18",
        dueDate: "2022-09-18"
    },
];

export const materialRequestData = [
    {
        _id:1,
        invoice_id: "MT-00001",
        managerUsername: "Yohan Nayanajith",
        currentQuantity : 20,
        requestQuantity : 200,
        price : "100 000",
        status : "Pending",
        isCancel : false,
        issueDate: "2022-08-10",
        dueDate: "2022-09-10"
    },
    {
        _id:2,
        invoice_id: "MT-00002",
        managerUsername: "Punsisi Perera",
        currentQuantity : 50,
        requestQuantity : 300,
        price : "120 000",
        status : "Pending",
        isCancel : false,
        issueDate: "2022-08-12",
        dueDate: "2022-09-12"
    },
    {
        _id:3,
        invoice_id: "MT-00003",
        managerUsername: "Yohan Nayanajith",
        currentQuantity : 10,
        requestQuantity : 150,
        price : "50 000",
        status : "Pending",
        isCancel : false,
        issueDate: "2022-08-10",
        dueDate: "2022-09-10"
    },
    {
        _id:4,
        invoice_id: "MT-00004",
        managerUsername: "Yohan Nayanajith",
        currentQuantity : 15,
        requestQuantity : 500,
        price : "2 000 000",
        status : "Pending",
        isCancel : false,
        issueDate: "2022-08-13",
        dueDate: "2022-09-13"
    },
    {
        _id:5,
        invoice_id: "MT-00005",
        managerUsername: "Punsisi Perera",
        currentQuantity : 20,
        requestQuantity : 200,
        price : "100 600",
        status : "Pending",
        isCancel : false,
        issueDate: "2022-08-15",
        dueDate: "2022-09-15"
    },
    {
        _id:6,
        invoice_id: "MT-00006",
        managerUsername: "Yohan Nayanajith",
        currentQuantity : 25,
        requestQuantity : 250,
        price : "80 000",
        status : "Pending",
        isCancel : false,
        issueDate: "2022-08-16",
        dueDate: "2022-09-10"
    },
    {
        _id:7,
        invoice_id: "MT-00007",
        managerUsername: "Yohan Nayanajith",
        currentQuantity : 14,
        requestQuantity : 400,
        price : "240 000",
        status : "Pending",
        isCancel : false,
        issueDate: "2022-08-20",
        dueDate: "2022-09-30"
    },
];

export const purchaseOrderData = [
    {
        _id:1,
        invoice_id: "PO-00001",
        staffUsername: "Yohan Nayanajith",
        supplier: "Beaver Builders",
        currentQuantity : 20,
        requestQuantity : 200,
        price : "100 000",
        status : "Pending",
        isCancel : false,
        issueDate: "2022-08-10",
        dueDate: "2022-09-10",
        isApprove: true
    },
    {
        _id:2,
        invoice_id: "PO-00002",
        staffUsername: "Punsisi Perera",
        supplier: "CORE Commercial Construction",
        currentQuantity : 50,
        requestQuantity : 300,
        price : "120 000",
        status : "Pending",
        isCancel : false,
        issueDate: "2022-08-12",
        dueDate: "2022-09-12",
        isApprove: false
    },
    {
        _id:3,
        invoice_id: "PO-00003",
        staffUsername: "Yohan Nayanajith",
        supplier: "Green Powered Home Builders",
        currentQuantity : 10,
        requestQuantity : 150,
        price : "50 000",
        status : "Pending",
        isCancel : false,
        issueDate: "2022-08-10",
        dueDate: "2022-09-10",
        isApprove: true
    },
    {
        _id:4,
        invoice_id: "PO-00004",
        staffUsername: "Yohan Nayanajith",
        supplier: "ProBlue Contractors",
        currentQuantity : 15,
        requestQuantity : 500,
        price : "2 000 000",
        status : "Pending",
        isCancel : false,
        issueDate: "2022-08-13",
        dueDate: "2022-09-13",
        isApprove: false
    },
    {
        _id:5,
        invoice_id: "PO-00005",
        staffUsername: "Punsisi Perera",
        supplier: "Elite Construction",
        currentQuantity : 20,
        requestQuantity : 200,
        price : "100 600",
        status : "Pending",
        isCancel : false,
        issueDate: "2022-08-15",
        dueDate: "2022-09-15",
        isApprove: false
    },
    {
        _id:6,
        invoice_id: "PO-00006",
        staffUsername: "Yohan Nayanajith",
        supplier: "CORE Commercial Construction",
        currentQuantity : 25,
        requestQuantity : 250,
        price : "80 000",
        status : "Pending",
        isCancel : false,
        issueDate: "2022-08-16",
        dueDate: "2022-09-10",
        isApprove: false
    },
    {
        _id:7,
        invoice_id: "PO-00007",
        staffUsername: "Yohan Nayanajith",
        supplier: "Elite Construction",
        currentQuantity : 14,
        requestQuantity : 400,
        price : "240 000",
        status : "Pending",
        isCancel : false,
        issueDate: "2022-08-20",
        dueDate: "2022-09-30",
        isApprove: true
    },
];

export const purchaseInvoiceData = [
    {
        _id:1,
        invoice_id: "PI-00001",
        staffUsername: "Yohan Nayanajith",
        supplier: "Beaver Builders",
        currentQuantity : 20,
        requestQuantity : 200,
        price : "100 000",
        status : "Pending",
        isCancel : false,
        issueDate: "2022-08-10",
        dueDate: "2022-09-10",
        isApprove: true
    },
    {
        _id:2,
        invoice_id: "PI-00002",
        staffUsername: "Punsisi Perera",
        supplier: "CORE Commercial Construction",
        currentQuantity : 50,
        requestQuantity : 300,
        price : "120 000",
        status : "Pending",
        isCancel : false,
        issueDate: "2022-08-12",
        dueDate: "2022-09-12",
        isApprove: false
    },
    {
        _id:3,
        invoice_id: "PI-00003",
        staffUsername: "Yohan Nayanajith",
        supplier: "Green Powered Home Builders",
        currentQuantity : 10,
        requestQuantity : 150,
        price : "50 000",
        status : "Pending",
        isCancel : false,
        issueDate: "2022-08-10",
        dueDate: "2022-09-10",
        isApprove: true
    },
    {
        _id:4,
        invoice_id: "PI-00004",
        staffUsername: "Yohan Nayanajith",
        supplier: "ProBlue Contractors",
        currentQuantity : 15,
        requestQuantity : 500,
        price : "2 000 000",
        status : "Pending",
        isCancel : false,
        issueDate: "2022-08-13",
        dueDate: "2022-09-13",
        isApprove: false
    },
    {
        _id:5,
        invoice_id: "PI-00005",
        staffUsername: "Punsisi Perera",
        supplier: "Elite Construction",
        currentQuantity : 20,
        requestQuantity : 200,
        price : "100 600",
        status : "Pending",
        isCancel : false,
        issueDate: "2022-08-15",
        dueDate: "2022-09-15",
        isApprove: false
    },
    {
        _id:6,
        invoice_id: "PI-00006",
        staffUsername: "Yohan Nayanajith",
        supplier: "CORE Commercial Construction",
        currentQuantity : 25,
        requestQuantity : 250,
        price : "80 000",
        status : "Pending",
        isCancel : false,
        issueDate: "2022-08-16",
        dueDate: "2022-09-10",
        isApprove: false
    },
    {
        _id:7,
        invoice_id: "PI-00007",
        staffUsername: "Yohan Nayanajith",
        supplier: "Elite Construction",
        currentQuantity : 14,
        requestQuantity : 400,
        price : "240 000",
        status : "Pending",
        isCancel : false,
        issueDate: "2022-08-20",
        dueDate: "2022-09-30",
        isApprove: true
    },
];

export const inventoryData = [
    {
        _id:1,
        name: "Cement",
        quantity : 120,
        type : "Packets",
        status : "Pending",
        minimum : 20,
        description: " Mahaweli Cement",
        recieve: "2022-08-18",
        block: "Block A",
        expire: "2022-12-18"
    },
    {
        _id:2,
        name: "Sand",
        quantity : 20,
        type : "Cubes",
        status : "Recieved",
        minimum : 5,
        description: "Rough Sand",
        recieve: "2022-10-18",
        block: "Block B",
        expire: "2026-09-18"
    },
    {
        _id:3,
        name: "3/4 Stones",
        quantity : 17,
        type : "Cubes",
        status : "Requested",
        minimum : 5,
        description: " Good",
        recieve: "2022-08-18",
        block: "Block C",
        expire: "2030-09-18"
    },{
        _id:4,
        name: "Cement",
        quantity : 120,
        type : "Packets",
        status : "Pending",
        minimum : 20,
        description: " Mahaweli Cement",
        recieve: "2022-08-18",
        block: "Block A",
        expire: "2022-12-18"
    },
    {
        _id:5,
        name: "Sand",
        quantity : 20,
        type : "Cubes",
        status : "Recieved",
        minimum : 5,
        description: "Rough Sand",
        recieve: "2022-10-18",
        block: "Block B",
        expire: "2026-09-18"
    },
    {
        _id:6,
        name: "3/4 Stones",
        quantity : 17,
        type : "Cubes",
        status : "Requested",
        minimum : 5,
        description: " Good",
        recieve: "2022-08-18",
        block: "Block C",
        expire: "2030-09-18"
    },
    
    
];