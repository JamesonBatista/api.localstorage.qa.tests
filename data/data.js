export const users = [
  { id: 1, name: "John", last_name: "Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane", last_name: "Doe", email: "jane.doe@example.com" },
];

export const products = [
  { id: 1, nome: "TV Smart 4K", marca: "Samsung", preco: 4500 },
  { id: 2, nome: "OLED 55' 4K", marca: "LG", preco: 6200 },
  { id: 3, nome: "QLED 8K", marca: "Sony", preco: 13000 },
  { id: 4, nome: "iPhone 13 Pro Max", marca: "Apple", preco: 7500 },
  { id: 5, nome: "iPhone 12", marca: "Apple", preco: 6000 },
  { id: 6, nome: "iPhone 13", marca: "Apple", preco: 6800 },
  { id: 7, nome: "MacBook Pro 14'", marca: "Apple", preco: 22000 },
  { id: 8, nome: "MacBook Air", marca: "Apple", preco: 12000 },
  { id: 9, nome: "MacBook Pro 16'", marca: "Apple", preco: 28000 },
  { id: 10, nome: "Galaxy Tab S7", marca: "Samsung", preco: 4500 },
  { id: 11, nome: "iPad Pro", marca: "Apple", preco: 9500 },
  { id: 12, nome: "Surface Pro", marca: "Microsoft", preco: 8900 },
  { id: 13, nome: "JBL Flip 5", marca: "JBL", preco: 900 },
  { id: 14, nome: "JBL Boombox", marca: "JBL", preco: 2500 },
  { id: 15, nome: "JBL Charge 4", marca: "JBL", preco: 1100 },
  { id: 16, nome: "Oculus Quest 2", marca: "Oculus", preco: 3000 },
  { id: 17, nome: "Oculus Rift S", marca: "Oculus", preco: 3500 },
  { id: 18, nome: "HTC Vive Pro", marca: "HTC", preco: 6000 },
  { id: 19, nome: "Sony PlayStation VR", marca: "Sony", preco: 2500 },
  { id: 20, nome: "Samsung Gear VR", marca: "Samsung", preco: 1000 },
];

export const projects = [
  {
    id: 1,
    name: "Website Redesign",
    leader: "Alice Johnson",
    description:
      "A complete redesign of the company website to improve user experience.",
    startDate: "2024-01-01",
    endDate: "2024-06-01",
    members: [
      { id_member: 1, member_name: "John Doe", office: "Frontend Developer" },
      { id_member: 2, member_name: "Jane Smith", office: "UX Designer" },
    ],
  },
  {
    id: 2,
    name: "Mobile App Development",
    leader: "Bob Williams",
    description: "Developing a new mobile application for e-commerce.",
    startDate: "2024-02-15",
    endDate: "2024-10-15",
    members: [
      { id_member: 1, member_name: "Emily Clark", office: "Backend Developer" },
      {
        id_member: 2,
        member_name: "Michael Brown",
        office: "Mobile Developer",
      },
    ],
  },
];

export const events = [
  {
    id: 1,
    name: "Tech Conference 2024",
    date: "2024-03-15",
    location: "New York",
    capacity: 50,
    participants: [
      {
        id: 1,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        age: 25,
      },
      { id: 2, name: "Bob Smith", email: "bob.smith@example.com", age: 30 },
    ],
  },
  {
    id: 2,
    name: "AI Summit 2024",
    date: "2024-06-20",
    location: "San Francisco",
    capacity: 40,
    participants: [
      {
        id: 1,
        name: "Charlie Brown",
        email: "charlie.brown@example.com",
        age: 35,
      },
      {
        id: 2,
        name: "Diana Prince",
        email: "diana.prince@example.com",
        age: 28,
      },
    ],
  },
];

export const approval = [
  {
    user: {
      id: 1,
      name: "jhon",
      email: "test@test.com",
      cpf: "12345688945",
      status: "PENDING",
    },
    code: "3515613",
  },
  {
    user: {
      id: 2,
      name: "Jam",
      email: "jam@test.com",
      cpf: "7777777777777",
      status: "PENDING",
    },
    code: "56f61s",
  },
];

export const challengers = {
  lv1: {
    username: "john_doe",
    age: 30,
    email: "john.doe@example.com",
    isActive: true,
  },
  lv2: {
    user: {
      id: "USR123456",
      firstName: "Jane",
      lastName: "Doe",
      contact: {
        email: "jane.doe@example.com",
        phone: "987-654-3210",
        social: {
          facebook: "janedoeFB",
          twitter: "@janedoe",
        },
      },
    },
    age: 27,
    membership: "premium",
    preferences: {
      newsletter: true,
      smsAlerts: false,
      paymentMethod: {
        type: "credit_card",
        details: {
          cardNumber: "4111-1111-1111-1111",
          expiryDate: "12/2024",
          cvv: "123",
        },
      },
    },
    address: {
      street: "123 Main St",
      city: "New York",
      zip: "10001",
      geoLocation: {
        lat: "40.7128",
        long: "-74.0060",
      },
    },
  },
  lv3: {
    order: {
      orderId: "ORD78910",
      customer: {
        customerId: "CUST00123",
        firstName: "Alice",
        lastName: "Johnson",
        contact: {
          email: "alice.johnson@example.com",
          phone: "555-987-6543",
          address: {
            street: "456 Elm St",
            city: "Los Angeles",
            state: "CA",
            zip: "90001",
            geoLocation: {
              lat: "34.0522",
              long: "-118.2437",
            },
          },
        },
      },
      items: [
        {
          productId: "PROD001",
          productName: "Smartphone",
          quantity: 2,
          price: 599.99,
          discount: 10,
          warranty: {
            type: "extended",
            duration: "2 years",
          },
        },
        {
          productId: "PROD002",
          productName: "Laptop",
          quantity: 1,
          price: 1299.99,
          discount: 0,
          warranty: {
            type: "manufacturer",
            duration: "1 year",
          },
        },
      ],
      orderDate: "2024-10-23T15:00:00Z",
      status: "pending",
      payment: {
        method: "paypal",
        transactionId: "TXN456789",
      },
      delivery: {
        scheduledDate: "2024-10-30T10:00:00Z",
        courier: {
          name: "FastShip",
          trackingNumber: "TRK123456789",
        },
      },
    },
  },
  lv4: {
    transaction: {
      transactionId: "TXN78910",
      timestamp: "2024-10-23T18:30:00Z",
      customer: {
        customerId: "CUST04567",
        name: {
          firstName: "Robert",
          lastName: "Smith",
        },
        contact: {
          email: "robert.smith@example.com",
          phone: "123-456-7890",
          address: {
            street: "789 Maple Ave",
            city: "San Francisco",
            state: "CA",
            zip: "94103",
            geoLocation: {
              lat: "37.7749",
              long: "-122.4194",
            },
          },
        },
        loyaltyPoints: 1500,
        vipStatus: true,
      },
      items: [
        {
          productId: "PROD001",
          name: "Smartwatch",
          quantity: 1,
          price: 199.99,
          discount: {
            type: "percentage",
            value: 10,
          },
        },
        {
          productId: "PROD002",
          name: "Wireless Headphones",
          quantity: 2,
          price: 149.99,
          discount: {
            type: "fixed",
            value: 20,
          },
        },
      ],
      payment: {
        method: "credit_card",
        details: {
          cardNumber: "4111-1111-1111-1111",
          expiryDate: "11/2025",
          cvv: "321",
          billingAddress: {
            street: "123 Oak St",
            city: "Los Angeles",
            state: "CA",
            zip: "90001",
          },
        },
      },
      shipment: {
        courier: "FastShip",
        trackingNumber: "TRK987654321",
        expectedDelivery: "2024-10-28T12:00:00Z",
        address: {
          street: "789 Maple Ave",
          city: "San Francisco",
          state: "CA",
          zip: "94103",
        },
      },
    },
  },
  lv5: {
    order: {
      orderId: "ORD54321",
      createdAt: "2024-10-23T20:00:00Z",
      customer: {
        customerId: "CUST12345",
        personalInfo: {
          firstName: "Emily",
          lastName: "Brown",
          dob: "1990-05-15",
        },
        contact: {
          email: "emily.brown@example.com",
          phone: "123-456-7890",
          addresses: [
            {
              type: "billing",
              street: "456 Pine St",
              city: "Boston",
              state: "MA",
              zip: "02101",
              geoLocation: {
                lat: "42.3601",
                long: "-71.0589",
              },
            },
            {
              type: "shipping",
              street: "789 Cedar St",
              city: "Boston",
              state: "MA",
              zip: "02102",
              geoLocation: {
                lat: "42.3612",
                long: "-71.0590",
              },
            },
          ],
        },
        loyaltyPoints: 3000,
        preferences: {
          contactMethod: "email",
          newsletter: true,
          notifications: ["email", "sms"],
        },
      },
      items: [
        {
          productId: "PROD123",
          name: "4K TV",
          quantity: 1,
          price: 899.99,
          details: {
            warranty: {
              type: "extended",
              duration: "3 years",
            },
            returnPolicy: {
              days: 30,
              conditions: "unopened",
            },
          },
          customization: {
            engraving: "Happy Birthday",
            giftWrap: true,
          },
        },
        {
          productId: "PROD456",
          name: "Bluetooth Speaker",
          quantity: 2,
          price: 199.99,
          details: {
            warranty: {
              type: "standard",
              duration: "1 year",
            },
            returnPolicy: {
              days: 15,
              conditions: "new",
            },
          },
          customization: {
            color: "black",
            engraving: null,
            giftWrap: false,
          },
        },
      ],
      payment: {
        method: "credit_card",
        transactionId: "TXN1234567890",
        details: {
          cardNumber: "4111-1111-1111-1111",
          expiryDate: "10/2026",
          cvv: "123",
          billingAddress: {
            street: "456 Pine St",
            city: "Boston",
            state: "MA",
            zip: "02101",
          },
        },
      },
      shipment: {
        courier: {
          name: "QuickDelivery",
          trackingNumber: "TRK1234567890",
        },
        estimatedDelivery: "2024-10-29T15:00:00Z",
        shippingAddress: {
          street: "789 Cedar St",
          city: "Boston",
          state: "MA",
          zip: "02102",
        },
      },
      promotions: [
        {
          promoCode: "SAVE10",
          discount: 10,
          type: "percentage",
        },
        {
          promoCode: "FREESHIP",
          discount: 0,
          type: "shipping",
        },
      ],
    },
  },
  lv6: {
    ecommerceTransaction: {
      transactionId: "TXN987654",
      timestamp: "2024-10-23T21:00:00Z",
      customer: {
        customerId: "CUST67890",
        personalInfo: {
          firstName: "David",
          lastName: "Johnson",
          dob: "1985-08-10",
          preferences: {
            language: "en",
            currency: "USD",
            marketingConsent: true,
          },
        },
        contact: {
          email: "david.johnson@example.com",
          phone: "555-678-1234",
          addresses: {
            billing: {
              street: "123 Birch St",
              city: "Seattle",
              state: "WA",
              zip: "98101",
              geoLocation: {
                lat: "47.6062",
                long: "-122.3321",
              },
            },
            shipping: {
              street: "789 Spruce St",
              city: "Seattle",
              state: "WA",
              zip: "98102",
              geoLocation: {
                lat: "47.6077",
                long: "-122.3332",
              },
            },
          },
        },
        loyaltyProgram: {
          pointsEarned: 500,
          tier: "gold",
          rewards: [
            {
              rewardId: "RW123",
              description: "10% off next purchase",
              expiryDate: "2024-12-31",
            },
            {
              rewardId: "RW456",
              description: "Free shipping on orders over $50",
              expiryDate: "2024-11-30",
            },
          ],
        },
      },
      order: {
        orderId: "ORD112233",
        items: [
          {
            productId: "PROD123",
            name: "Gaming Laptop",
            quantity: 1,
            price: 1499.99,
            discount: {
              code: "GAMER10",
              value: 150,
              type: "fixed",
            },
            details: {
              warranty: {
                type: "extended",
                duration: "2 years",
              },
              returnPolicy: {
                days: 30,
                conditions: "unused",
              },
            },
            customization: {
              color: "black",
              extras: ["extra cooling pad", "gaming mouse"],
            },
          },
          {
            productId: "PROD456",
            name: "Noise Cancelling Headphones",
            quantity: 2,
            price: 299.99,
            discount: {
              code: "HEAD15",
              value: 45,
              type: "percentage",
            },
            details: {
              warranty: {
                type: "standard",
                duration: "1 year",
              },
              returnPolicy: {
                days: 15,
                conditions: "new",
              },
            },
            customization: {
              color: "silver",
              engraving: "DJ's Beats",
            },
          },
        ],
        totals: {
          subTotal: 2099.97,
          tax: 209.99,
          shippingFee: 25.0,
          total: 2334.96,
        },
        promotionsApplied: [
          {
            promoCode: "GAMER10",
            discountAmount: 150,
          },
          {
            promoCode: "HEAD15",
            discountAmount: 45,
          },
        ],
      },
      payment: {
        method: "credit_card",
        transactionId: "PAY7891011",
        details: {
          cardNumber: "4111-1111-1111-1111",
          expiryDate: "12/2025",
          cvv: "456",
          billingAddress: {
            street: "123 Birch St",
            city: "Seattle",
            state: "WA",
            zip: "98101",
          },
        },
      },
      shipment: {
        courier: {
          name: "QuickShip",
          trackingNumber: "TRK1234567890",
        },
        estimatedDelivery: "2024-10-30T12:00:00Z",
        shippingAddress: {
          street: "789 Spruce St",
          city: "Seattle",
          state: "WA",
          zip: "98102",
        },
        statusUpdates: [
          {
            timestamp: "2024-10-24T08:00:00Z",
            status: "Shipped",
          },
          {
            timestamp: "2024-10-28T10:30:00Z",
            status: "Out for Delivery",
          },
          {
            timestamp: "2024-10-30T12:05:00Z",
            status: "Delivered",
          },
        ],
      },
    },
  },
  lv7: {
    company: {
      companyId: "COMP12345",
      name: "Tech Innovators Inc.",
      departments: [
        {
          departmentId: "DEPT001",
          name: "Engineering",
          manager: {
            employeeId: "EMP1001",
            firstName: "John",
            lastName: "Doe",
            role: "Lead Engineer",
            contact: {
              email: "john.doe@techinnovators.com",
              phone: "555-123-4567",
            },
            projects: [
              {
                projectId: "PROJ001",
                name: "AI Research",
                budget: 500000,
                tasks: [
                  {
                    taskId: "TASK001",
                    description: "Develop AI algorithms",
                    status: "in_progress",
                    assignedTo: {
                      employeeId: "EMP2001",
                      firstName: "Jane",
                      lastName: "Smith",
                      role: "AI Specialist",
                      experience: {
                        years: 5,
                        skills: [
                          {
                            name: "Machine Learning",
                            proficiency: "expert",
                          },
                          {
                            name: "Python",
                            proficiency: "advanced",
                          },
                        ],
                      },
                    },
                    subtasks: [
                      {
                        subtaskId: "SUBTASK001",
                        description: "Design ML Model",
                        status: "completed",
                      },
                      {
                        subtaskId: "SUBTASK002",
                        description: "Train Model",
                        status: "in_progress",
                      },
                    ],
                  },
                  {
                    taskId: "TASK002",
                    description: "Test AI system",
                    status: "pending",
                    dependencies: ["TASK001"],
                  },
                ],
              },
              {
                projectId: "PROJ002",
                name: "Cloud Infrastructure",
                budget: 300000,
                tasks: [
                  {
                    taskId: "TASK003",
                    description: "Set up cloud servers",
                    status: "in_progress",
                    assignedTo: {
                      employeeId: "EMP3001",
                      firstName: "Robert",
                      lastName: "Brown",
                      role: "Cloud Engineer",
                      experience: {
                        years: 3,
                        skills: [
                          {
                            name: "AWS",
                            proficiency: "intermediate",
                          },
                          {
                            name: "Kubernetes",
                            proficiency: "beginner",
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          departmentId: "DEPT002",
          name: "Marketing",
          manager: {
            employeeId: "EMP4001",
            firstName: "Emily",
            lastName: "White",
            role: "Marketing Director",
            contact: {
              email: "emily.white@techinnovators.com",
              phone: "555-987-6543",
            },
            projects: [
              {
                projectId: "PROJ003",
                name: "Product Launch Campaign",
                budget: 200000,
                tasks: [
                  {
                    taskId: "TASK004",
                    description: "Design marketing strategy",
                    status: "completed",
                  },
                  {
                    taskId: "TASK005",
                    description: "Execute social media campaign",
                    status: "in_progress",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  },
  lv8: {
    enterprise: {
      enterpriseId: "ENT123456",
      name: "Global Tech Solutions",
      locations: [
        {
          locationId: "LOC001",
          country: "USA",
          city: "New York",
          departments: [
            {
              departmentId: "DEPT101",
              name: "Software Development",
              manager: {
                employeeId: "EMP1001",
                name: {
                  firstName: "Michael",
                  lastName: "Jordan",
                },
                contact: {
                  email: "michael.jordan@globaltech.com",
                  phone: "555-987-6543",
                },
              },
              teams: [
                {
                  teamId: "TEAM001",
                  name: "Backend Team",
                  lead: {
                    employeeId: "EMP2001",
                    firstName: "Samantha",
                    lastName: "Doe",
                    experience: {
                      years: 10,
                      specializations: [
                        {
                          name: "Java",
                          proficiency: "expert",
                        },
                        {
                          name: "Microservices",
                          proficiency: "advanced",
                        },
                      ],
                    },
                  },
                  projects: [
                    {
                      projectId: "PROJ1001",
                      name: "E-commerce Platform",
                      milestones: [
                        {
                          milestoneId: "MILE001",
                          description: "Design Architecture",
                          status: "completed",
                          tasks: [
                            {
                              taskId: "TASK001",
                              description: "Create UML Diagrams",
                              assignedTo: {
                                employeeId: "EMP3001",
                                firstName: "John",
                                lastName: "Smith",
                                role: "Software Architect",
                              },
                              subtasks: [
                                {
                                  subtaskId: "SUBTASK001",
                                  description: "Class Diagram",
                                  status: "completed",
                                },
                                {
                                  subtaskId: "SUBTASK002",
                                  description: "Sequence Diagram",
                                  status: "completed",
                                },
                              ],
                            },
                          ],
                        },
                        {
                          milestoneId: "MILE002",
                          description: "Develop API",
                          status: "in_progress",
                          tasks: [
                            {
                              taskId: "TASK002",
                              description: "Create API Endpoints",
                              assignedTo: {
                                employeeId: "EMP4001",
                                firstName: "Alice",
                                lastName: "Johnson",
                                role: "Backend Developer",
                              },
                              subtasks: [
                                {
                                  subtaskId: "SUBTASK003",
                                  description: "Authentication Endpoint",
                                  status: "in_progress",
                                  dependencies: ["SUBTASK001"],
                                },
                                {
                                  subtaskId: "SUBTASK004",
                                  description: "Product Listing Endpoint",
                                  status: "pending",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  teamId: "TEAM002",
                  name: "Frontend Team",
                  lead: {
                    employeeId: "EMP2002",
                    firstName: "Laura",
                    lastName: "Brown",
                    experience: {
                      years: 7,
                      specializations: [
                        {
                          name: "React.js",
                          proficiency: "expert",
                        },
                        {
                          name: "UI/UX Design",
                          proficiency: "advanced",
                        },
                      ],
                    },
                  },
                  projects: [
                    {
                      projectId: "PROJ1002",
                      name: "Mobile App",
                      milestones: [
                        {
                          milestoneId: "MILE003",
                          description: "Design User Interface",
                          status: "in_progress",
                          tasks: [
                            {
                              taskId: "TASK003",
                              description: "Create Wireframes",
                              assignedTo: {
                                employeeId: "EMP5001",
                                firstName: "Bob",
                                lastName: "Williams",
                                role: "UI Designer",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          locationId: "LOC002",
          country: "Germany",
          city: "Berlin",
          departments: [
            {
              departmentId: "DEPT102",
              name: "Cybersecurity",
              manager: {
                employeeId: "EMP6001",
                name: {
                  firstName: "Hans",
                  lastName: "Müller",
                },
                contact: {
                  email: "hans.muller@globaltech.com",
                  phone: "555-654-3210",
                },
              },
              projects: [
                {
                  projectId: "PROJ2001",
                  name: "Cloud Security",
                  milestones: [
                    {
                      milestoneId: "MILE004",
                      description: "Deploy Cloud Monitoring",
                      status: "pending",
                      tasks: [
                        {
                          taskId: "TASK004",
                          description: "Set up Monitoring Tools",
                          assignedTo: {
                            employeeId: "EMP7001",
                            firstName: "Gregor",
                            lastName: "Schmidt",
                            role: "Cloud Engineer",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  lv9: {
    globalCorporation: {
      corporationId: "CORP987654",
      name: "NextGen Global Enterprises",
      subsidiaries: [
        {
          subsidiaryId: "SUB001",
          name: "NextGen Software Solutions",
          headquarters: {
            country: "USA",
            city: "San Francisco",
            office: {
              building: "HQ Building A",
              floors: [
                {
                  floorId: "FLR001",
                  number: 5,
                  departments: [
                    {
                      departmentId: "DEPT001",
                      name: "AI Development",
                      manager: {
                        employeeId: "EMP001",
                        firstName: "Elon",
                        lastName: "Musk",
                        contact: {
                          email: "elon.musk@nextgen.com",
                          phone: "555-123-4567",
                        },
                      },
                      teams: [
                        {
                          teamId: "TEAM001",
                          name: "Neural Network Team",
                          lead: {
                            employeeId: "EMP002",
                            firstName: "Ada",
                            lastName: "Lovelace",
                            experience: {
                              years: 12,
                              specializations: [
                                {
                                  name: "Deep Learning",
                                  proficiency: "expert",
                                },
                                {
                                  name: "TensorFlow",
                                  proficiency: "advanced",
                                },
                              ],
                            },
                          },
                          projects: [
                            {
                              projectId: "PROJ001",
                              name: "AI Image Recognition",
                              milestones: [
                                {
                                  milestoneId: "MILE001",
                                  description: "Model Training",
                                  status: "completed",
                                  tasks: [
                                    {
                                      taskId: "TASK001",
                                      description: "Data Preprocessing",
                                      assignedTo: {
                                        employeeId: "EMP003",
                                        firstName: "Alan",
                                        lastName: "Turing",
                                        role: "Data Scientist",
                                        expertise: {
                                          domain: "Machine Learning",
                                          publications: [
                                            {
                                              title:
                                                "The Enigma of Machine Learning",
                                              journal: "AI Research Quarterly",
                                              year: 2022,
                                            },
                                          ],
                                        },
                                      },
                                      subtasks: [
                                        {
                                          subtaskId: "SUBTASK001",
                                          description: "Clean Data",
                                          status: "completed",
                                        },
                                        {
                                          subtaskId: "SUBTASK002",
                                          description: "Normalize Data",
                                          status: "completed",
                                          dependencies: ["SUBTASK001"],
                                        },
                                      ],
                                    },
                                    {
                                      taskId: "TASK002",
                                      description: "Model Optimization",
                                      assignedTo: {
                                        employeeId: "EMP004",
                                        firstName: "Grace",
                                        lastName: "Hopper",
                                        role: "Algorithm Engineer",
                                        patents: [
                                          {
                                            title: "Advanced AI Optimizations",
                                            year: 2021,
                                          },
                                        ],
                                      },
                                      subtasks: [
                                        {
                                          subtaskId: "SUBTASK003",
                                          description: "Tune Hyperparameters",
                                          status: "in_progress",
                                        },
                                        {
                                          subtaskId: "SUBTASK004",
                                          description: "Run Model Validation",
                                          status: "pending",
                                          dependencies: ["SUBTASK003"],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  milestoneId: "MILE002",
                                  description: "Deploy AI Model",
                                  status: "in_progress",
                                  tasks: [
                                    {
                                      taskId: "TASK003",
                                      description:
                                        "Set Up Production Environment",
                                      assignedTo: {
                                        employeeId: "EMP005",
                                        firstName: "Linus",
                                        lastName: "Torvalds",
                                        role: "DevOps Engineer",
                                      },
                                      subtasks: [
                                        {
                                          subtaskId: "SUBTASK005",
                                          description:
                                            "Provision Cloud Resources",
                                          status: "pending",
                                        },
                                        {
                                          subtaskId: "SUBTASK006",
                                          description: "Monitor Deployment",
                                          status: "pending",
                                          dependencies: ["SUBTASK005"],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
          internationalBranches: [
            {
              branchId: "BR001",
              country: "Japan",
              city: "Tokyo",
              departments: [
                {
                  departmentId: "DEPT002",
                  name: "Robotics Development",
                  manager: {
                    employeeId: "EMP006",
                    firstName: "Satoshi",
                    lastName: "Nakamoto",
                    contact: {
                      email: "satoshi.nakamoto@nextgen.com",
                      phone: "555-789-1234",
                    },
                  },
                  projects: [
                    {
                      projectId: "PROJ002",
                      name: "AI-Powered Robotics",
                      milestones: [
                        {
                          milestoneId: "MILE003",
                          description: "Develop Control Algorithms",
                          status: "completed",
                          tasks: [
                            {
                              taskId: "TASK004",
                              description: "Design Robotic Arm Movements",
                              assignedTo: {
                                employeeId: "EMP007",
                                firstName: "Hiroshi",
                                lastName: "Yamamoto",
                                role: "Robotics Engineer",
                              },
                            },
                          ],
                        },
                        {
                          milestoneId: "MILE004",
                          description: "Integrate AI with Robotics",
                          status: "in_progress",
                          tasks: [
                            {
                              taskId: "TASK005",
                              description: "Integrate Vision System",
                              assignedTo: {
                                employeeId: "EMP008",
                                firstName: "Miko",
                                lastName: "Tanaka",
                                role: "AI Engineer",
                              },
                              subtasks: [
                                {
                                  subtaskId: "SUBTASK007",
                                  description:
                                    "Train AI for Object Recognition",
                                  status: "pending",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  lv10: {
    multinationalEnterprise: {
      enterpriseId: "MNE123456",
      name: "Quantum Global Systems",
      headquarters: {
        country: "USA",
        city: "New York",
        divisions: [
          {
            divisionId: "DIV001",
            name: "Quantum AI Research",
            globalDirector: {
              employeeId: "EMP0001",
              firstName: "Marie",
              lastName: "Curie",
              role: "Chief Scientist",
              contact: {
                email: "marie.curie@quantumglobal.com",
                phone: "555-321-9876",
              },
              expertise: {
                fields: ["Quantum Computing", "Artificial Intelligence"],
                awards: [
                  {
                    name: "Nobel Prize in Physics",
                    year: 2022,
                  },
                  {
                    name: "Turing Award",
                    year: 2021,
                  },
                ],
              },
            },
            departments: [
              {
                departmentId: "DEPT1001",
                name: "AI Hardware Development",
                manager: {
                  employeeId: "EMP0002",
                  firstName: "Nikola",
                  lastName: "Tesla",
                  role: "Lead Engineer",
                  patents: [
                    {
                      title: "Quantum Hardware Accelerator",
                      year: 2023,
                    },
                    {
                      title: "AI Optimized Neural Processors",
                      year: 2022,
                    },
                  ],
                },
                teams: [
                  {
                    teamId: "TEAM1001",
                    name: "Quantum Processor Team",
                    lead: {
                      employeeId: "EMP0003",
                      firstName: "Alan",
                      lastName: "Kay",
                      experience: {
                        years: 15,
                        projects: [
                          {
                            projectId: "PROJ001",
                            name: "Quantum Cryptography Processor",
                            milestones: [
                              {
                                milestoneId: "MILE001",
                                description: "Develop Quantum Secure Processor",
                                tasks: [
                                  {
                                    taskId: "TASK001",
                                    description: "Design Quantum Circuits",
                                    assignedTo: {
                                      employeeId: "EMP1001",
                                      firstName: "Alice",
                                      lastName: "Johnson",
                                      role: "Quantum Hardware Engineer",
                                      subtasks: [
                                        {
                                          subtaskId: "SUB001",
                                          description:
                                            "Create Circuit Schematics",
                                          status: "completed",
                                        },
                                        {
                                          subtaskId: "SUB002",
                                          description: "Simulate Quantum Gates",
                                          status: "in_progress",
                                          dependencies: ["SUB001"],
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    taskId: "TASK002",
                                    description: "Test Secure Transmission",
                                    assignedTo: {
                                      employeeId: "EMP1002",
                                      firstName: "Bob",
                                      lastName: "Williams",
                                      role: "Security Analyst",
                                      certifications: [
                                        {
                                          name: "Certified Information Systems Security Professional (CISSP)",
                                          year: 2020,
                                        },
                                        {
                                          name: "Certified Ethical Hacker (CEH)",
                                          year: 2019,
                                        },
                                      ],
                                    },
                                    subtasks: [
                                      {
                                        subtaskId: "SUB003",
                                        description:
                                          "Test Encryption Algorithm",
                                        status: "pending",
                                        dependencies: ["SUB002"],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      internationalBranches: [
        {
          branchId: "BR001",
          country: "Germany",
          city: "Berlin",
          divisions: [
            {
              divisionId: "DIV002",
              name: "Quantum Research Europe",
              director: {
                employeeId: "EMP0004",
                firstName: "Werner",
                lastName: "Heisenberg",
                role: "Quantum Physicist",
                expertise: {
                  fields: ["Quantum Mechanics", "Theoretical Physics"],
                  publications: [
                    {
                      title: "Quantum Uncertainty in AI Systems",
                      year: 2021,
                    },
                  ],
                },
              },
              departments: [
                {
                  departmentId: "DEPT1002",
                  name: "Quantum AI Integration",
                  manager: {
                    employeeId: "EMP0005",
                    firstName: "Max",
                    lastName: "Planck",
                    role: "AI Systems Engineer",
                    publications: [
                      {
                        title: "Integration of AI in Quantum Systems",
                        year: 2022,
                      },
                    ],
                  },
                  projects: [
                    {
                      projectId: "PROJ002",
                      name: "AI-Powered Quantum Simulation",
                      milestones: [
                        {
                          milestoneId: "MILE002",
                          description: "Simulate Quantum Environments",
                          tasks: [
                            {
                              taskId: "TASK003",
                              description:
                                "Develop Quantum Simulation Algorithm",
                              assignedTo: {
                                employeeId: "EMP2001",
                                firstName: "Karl",
                                lastName: "Schwarz",
                                role: "Quantum AI Developer",
                                experience: {
                                  years: 10,
                                  conferences: [
                                    {
                                      name: "Quantum AI Conference 2022",
                                      year: 2022,
                                    },
                                  ],
                                },
                              },
                              subtasks: [
                                {
                                  subtaskId: "SUB004",
                                  description: "Model Quantum Particles",
                                  status: "completed",
                                },
                                {
                                  subtaskId: "SUB005",
                                  description: "Integrate AI Decision Trees",
                                  status: "in_progress",
                                  dependencies: ["SUB004"],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          milestoneId: "MILE003",
                          description: "Test AI-Quantum Integration",
                          tasks: [
                            {
                              taskId: "TASK004",
                              description: "Run AI-Quantum Tests",
                              assignedTo: {
                                employeeId: "EMP2002",
                                firstName: "Johann",
                                lastName: "Meister",
                                role: "Quantum Test Engineer",
                                certifications: [
                                  {
                                    name: "Quantum Computing Specialist",
                                    year: 2020,
                                  },
                                ],
                              },
                              subtasks: [
                                {
                                  subtaskId: "SUB006",
                                  description: "Validate Quantum-AI Outputs",
                                  status: "pending",
                                  dependencies: ["SUB005"],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
};
